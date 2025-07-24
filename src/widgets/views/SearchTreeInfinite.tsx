import {
  Fragment,
  RefObject,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { FormView, TreeView } from "@/types/index";

import { useFetchTreeViews } from "@/hooks/useFetchTreeViews";
import { Spin } from "antd";
import {
  getOrderFromSortFields,
  getSortedFieldsFromState,
  getTableItems,
  getTree,
} from "@/helpers/treeHelper";
import {
  useDeepCompareCallback,
  useDeepCompareEffect,
  useDeepCompareMemo,
} from "use-deep-compare";
import {
  ColumnState,
  InfiniteTable,
  InfiniteTableRef,
} from "@gisce/react-formiga-table";
import ConnectionProvider from "@/ConnectionProvider";
import { useAvailableHeight } from "@/hooks/useAvailableHeight";
import { mergeSearchFields } from "@/helpers/formHelper";
import { getKey } from "@/helpers/tree-columnStorageHelper";
import { useTableCore } from "@/hooks/useTableCore";
import { useSharedAggregates } from "../base/one2many/useTreeAggregates";
import { useInfiniteRowSelection } from "@/hooks/useInfiniteRowSelection";
import { SideSearchFilter } from "./searchFilter/SideSearchFilter";
import { mergeParams } from "@/helpers/searchHelper";
import deepEqual from "deep-equal";
import { useErrorNotification } from "@/hooks/useErrorNotification";
import SearchFilter from "./searchFilter/SearchFilter";
import { useSearchTreeState } from "@/hooks/useSearchTreeState";
import { Tree as TreeOoui } from "@gisce/ooui";
import { useTreeSharedHooks } from "@/hooks/useTreeSharedHooks";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { NameSearchWarning } from "./Tree/NameSearchWarning";
import { SearchTreeHeader } from "./SearchTreeHeader";
import { getAttributesConditionsFromOoui } from "@/hooks/useTreeAttributesState";
import { CellRenderer } from "./Tree/CellRenderer";
import { TreeType } from "@/views/actionViews/TreeActionView";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";

export const HEIGHT_OFFSET = 10;
export const MAX_ROWS_TO_SELECT = 200;

type OnRowClickedData = {
  id: number;
  model: string;
  formView: FormView;
  treeView: TreeView;
};

export type SearchTreeInfiniteProps = {
  model: string;
  formView: FormView;
  treeView: TreeView;
  onRowClicked: (data: OnRowClickedData) => void;
  nameSearch?: string;
  treeScrollY?: number;
  domain?: any;
  visible?: boolean;
  rootTree?: boolean;
  parentContext?: any;
  onChangeSelectedRowKeys?: (selectedRowKeys: any) => void;
  filterType?: "side" | "top";
  onChangeTreeType?: (type: TreeType) => void;
};

function SearchTreeInfiniteComp(props: SearchTreeInfiniteProps, ref: any) {
  const {
    model,
    formView: formViewProps,
    treeView: treeViewProps,
    onRowClicked,
    domain = [],
    visible = true,
    rootTree = false,
    parentContext = {},
    onChangeSelectedRowKeys,
    nameSearch: nameSearchProps,
    filterType = "side",
    onChangeTreeType,
  } = props;
  const tableRef: RefObject<InfiniteTableRef> = useRef(null);
  const lastAssignedResults = useRef<any[]>([]);
  const hasRestoredSortStateForFirstTime = useRef<boolean>(false);
  const { showErrorNotification } = useErrorNotification();

  const [totalRows, setTotalRows] = useState<number | null>();
  const [nameSearchFetchCompleted, setNameSearchFetchCompleted] =
    useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const availableHeight = useAvailableHeight({
    elementRef: containerRef,
    offset: HEIGHT_OFFSET,
  });

  // Network request hooks
  const [searchCount, cancelSearchCount] = useNetworkRequest(
    ConnectionProvider.getHandler().searchCount,
  );
  const [searchForTree, cancelSearchForTree] = useNetworkRequest(
    ConnectionProvider.getHandler().searchForTree,
  );
  const [searchAllIds, cancelSearchAllIds] = useNetworkRequest(
    ConnectionProvider.getHandler().searchAllIds,
  );

  // Cancel all requests on component unmount
  useEffect(() => {
    return () => {
      cancelSearchCount();
      cancelSearchForTree();
      cancelSearchAllIds();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { treeView, formView, loading } = useFetchTreeViews({
    model,
    formViewProps,
    treeViewProps,
    context: parentContext,
  });

  const {
    setTreeIsLoading,
    searchVisible,
    setSearchVisible,
    setSelectedRowItems,
    setTreeFirstVisibleRow,
    treeFirstVisibleRow,
    selectedRowItems,
    setSearchParams,
    searchValues,
    searchParams,
    setSearchValues,
    searchTreeNameSearch,
    setSearchTreeNameSearch,
    setResults: setActionViewResults,
    results: actionViewResults,
    setSearchQuery,
    setTotalItems: setTotalItemsActionView,
    isActive,
    order: actionViewSortState,
    setOrder: setActionViewSortState,
  } = useSearchTreeState({ useLocalState: !rootTree });

  const nameSearch = nameSearchProps || searchTreeNameSearch;
  const prevNameSearch = useRef(nameSearch);
  const isNameSearchMode = useRef(false);

  const currentSearchParamsString = useRef<string>();
  const prevSortOrder = useRef<string>();
  const isUpdatingTotalRows = useRef<boolean>(false);

  useEffect(() => {
    if (
      (nameSearch !== undefined && prevNameSearch.current === undefined) ||
      (typeof nameSearch === "string" &&
        typeof prevNameSearch.current === "string" &&
        nameSearch !== prevNameSearch.current)
    ) {
      isNameSearchMode.current = Boolean(nameSearch);
      setSearchParams?.([]);
      setSearchValues?.({});
      tableRef.current?.unselectAll();
    } else if (
      nameSearch === undefined &&
      prevNameSearch.current !== undefined
    ) {
      isNameSearchMode.current = false;
      tableRef.current?.unselectAll();
    }
    prevNameSearch.current = nameSearch;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameSearch]);

  const treeOoui: TreeOoui | undefined = useMemo(() => {
    if (!treeView) {
      return;
    }
    return getTree(treeView);
  }, [treeView]);

  // Use shared infinite table functionality - moved before function fields hooks
  const {
    columns: baseColumns,
    strings,
    colorsForResults,
    statusForResults,
    onRowStyle,
    statusComponent,
    onRowStatus,
    getColumnState,
    updateColumnState,
    isColumnStateLoading,
    updateAttributes,
    clearAttributes,
  } = useTableCore({
    treeOoui,
    parentContext,
    columnStateKey: treeView
      ? getKey({
          treeViewId: treeView.view_id,
          model,
        })
      : undefined,
    tableRef,
  });

  const {
    isFieldLoading,
    refreshFunctionFields,
    clearAutorefreshableFields,
    addRecordsToCheckFunctionFields,
    onHasFunctionFieldsToParseConditions,
  } = useTreeSharedHooks({
    model,
    treeView,
    tableRef,
    context: parentContext,
    isActive,
    treeOoui,
    updateAttributes,
    results: actionViewResults,
  });

  // Calculate selectedRowKeys for shared hooks
  const selectedRowKeys = useMemo(() => {
    return selectedRowItems?.map((item) => item.id) || [];
  }, [selectedRowItems]);

  const columnsWithLoading = useMemo(() => {
    if (!baseColumns) {
      return;
    }
    return baseColumns.map((column: any) => ({
      ...column,
      render: (value: any, record: any) => (
        <CellRenderer
          value={value}
          record={record}
          column={column}
          isFieldLoading={isFieldLoading}
        />
      ),
    }));
  }, [baseColumns, isFieldLoading]);

  const mergedParams = useMemo(
    () => mergeParams(searchParams || [], domain),
    [domain, searchParams],
  );

  const mustUpdateTotal = useCallback(() => {
    const params = nameSearch ? domain : mergedParams;

    const paramsString = `${JSON.stringify(params)}-${nameSearch}`;

    if (paramsString !== currentSearchParamsString.current) {
      currentSearchParamsString.current = paramsString;
      return true;
    }
    return false;
  }, [domain, mergedParams, nameSearch]);

  const updateTotalRows = useCallback(async () => {
    if (nameSearch) {
      return;
    }

    if (isUpdatingTotalRows.current) {
      return;
    }

    isUpdatingTotalRows.current = true;
    setTotalRows(undefined);
    setTotalItemsActionView(0);
    try {
      const totalItems = await searchCount({
        params: nameSearch ? domain : mergedParams,
        model,
        context: parentContext,
        name_search: nameSearch,
      });
      setTotalRows(totalItems);
      setTotalItemsActionView(totalItems);
    } catch (err) {
      showErrorNotification(err);
    } finally {
      isUpdatingTotalRows.current = false;
    }
  }, [
    domain,
    mergedParams,
    model,
    nameSearch,
    parentContext,
    searchCount,
    setTotalItemsActionView,
    showErrorNotification,
  ]);

  const fetchResults = useDeepCompareCallback(
    async ({
      startRow,
      endRow,
      state,
    }: {
      startRow: number;
      endRow: number;
      state?: ColumnState[];
    }) => {
      if (!treeOoui) {
        return [];
      }

      let order;
      if (!hasRestoredSortStateForFirstTime.current && actionViewSortState) {
        const sortFields = getSortedFieldsFromState({
          state: actionViewSortState,
        });
        order = getOrderFromSortFields(sortFields);
      } else {
        const stateWithSortData = state
          ?.filter((column) => column.sort || column.sortIndex)
          .map((column) => ({
            sort: column.sort || undefined,
            sortIndex: column.sortIndex || undefined,
            colId: column.colId,
          }));
        const finalStateWithSortData =
          stateWithSortData && stateWithSortData?.length > 0
            ? stateWithSortData
            : undefined;
        const sortFields = getSortedFieldsFromState({
          state: finalStateWithSortData,
        });
        setActionViewSortState?.(finalStateWithSortData);
        order = getOrderFromSortFields(sortFields);
      }

      hasRestoredSortStateForFirstTime.current = true;

      const params = nameSearch ? domain : mergedParams;

      const SHOULD_MAKE_DEFERRED_FUNCTION_READ =
        treeView?.fields_in_conditions !== undefined;

      const attrs = getAttributesConditionsFromOoui({
        treeOoui,
        hasFunctionFieldsToParseConditions:
          SHOULD_MAKE_DEFERRED_FUNCTION_READ &&
          onHasFunctionFieldsToParseConditions(),
      });

      const { results, attrsEvaluated } = await searchForTree({
        params,
        limit: endRow - startRow,
        offset: startRow,
        model,
        fields: treeView?.field_parent
          ? { ...treeView?.fields, [treeView?.field_parent]: {} }
          : treeView?.fields,
        context: parentContext,
        attrs,
        order,
        name_search: nameSearch,
        skipFunctionFields: SHOULD_MAKE_DEFERRED_FUNCTION_READ,
        onIdsRetrieved: (ids: number[]) => {
          addRecordsToCheckFunctionFields(ids);
        },
      });

      setSearchQuery?.({
        model,
        params,
        name_search: nameSearch,
        context: parentContext,
        order,
      });

      if (mustUpdateTotal() || prevSortOrder.current !== order) {
        setActionViewResults?.(results);
      } else {
        const appendedResults = [...(actionViewResults || []), ...results];
        setActionViewResults?.(appendedResults);
      }

      prevSortOrder.current = order;

      // Handle name search completion state
      if (nameSearch) {
        setTotalRows(results.length);
        setTotalItemsActionView(results.length);
        setNameSearchFetchCompleted(true);
      } else {
        setNameSearchFetchCompleted(false);
      }

      if (results.length === 0) {
        lastAssignedResults.current = [];
        setTotalRows(0);
        setTotalItemsActionView(0);
        return [];
      }

      const preparedResults = await getTableItems(
        treeOoui,
        results,
        parentContext,
      );
      updateAttributes(attrsEvaluated, treeOoui);

      // Update shared colors and status refs from attrsEvaluated array
      if (attrsEvaluated && Array.isArray(attrsEvaluated)) {
        attrsEvaluated.forEach((attr) => {
          if (attr.id !== undefined) {
            if (attr.colors) {
              colorsForResults.current[attr.id] = attr.colors;
            }
            if (attr.status) {
              statusForResults.current[attr.id] = attr.status;
            }
          }
        });
      }

      lastAssignedResults.current = [...preparedResults];
      return preparedResults;
    },
    [
      actionViewResults,
      actionViewSortState,
      addRecordsToCheckFunctionFields,
      domain,
      mergedParams,
      model,
      mustUpdateTotal,
      nameSearch,
      onHasFunctionFieldsToParseConditions,
      parentContext,
      searchForTree,
      setActionViewResults,
      setActionViewSortState,
      setNameSearchFetchCompleted,
      setSearchQuery,
      setTotalItemsActionView,
      treeOoui,
      treeView,
      updateAttributes,
    ],
  );

  // Stabilize onSelectAll callback to prevent recreation
  const stableOnSelectAll = useCallback(async () => {
    if (nameSearch) {
      return lastAssignedResults.current;
    }

    if (!totalRows) {
      return [];
    }

    const allRowsResults = await searchAllIds({
      params: nameSearch ? domain : mergedParams,
      model,
      context: parentContext,
      totalItems: totalRows,
    });
    return allRowsResults.map((id: number) => ({ id }));
  }, [
    nameSearch,
    totalRows,
    searchAllIds,
    domain,
    mergedParams,
    model,
    parentContext,
  ]);

  // Use shared row selection functionality
  const {
    changeSelectedRowItems,
    changeSelectedRowKeys,
    onSelectionCheckboxClicked,
  } = useInfiniteRowSelection({
    selectedRowItems,
    setSelectedRowItems,
    onChangeSelectedRowKeys,
    totalRows,
    maxRowsToSelect: MAX_ROWS_TO_SELECT,
    onSelectAll: stableOnSelectAll,
  });

  const onRequestData = useCallback(
    async ({
      startRow,
      endRow,
      state,
    }: {
      startRow: number;
      endRow: number;
      state?: ColumnState[];
    }) => {
      try {
        setTreeIsLoading?.(true);

        // Fire updateTotalRows independently on first request
        if (startRow === 0 && !nameSearch) {
          updateTotalRows(); // Don't await, let it run in parallel
        }

        const results = await fetchResults({
          startRow,
          endRow,
          state,
        });

        setTreeIsLoading?.(false);
        return results;
      } catch (error) {
        console.error(error);
        setTotalRows(null);
        setTotalItemsActionView(0);
        setTreeIsLoading?.(false);
        showErrorNotification(error);
        throw error;
      }
    },
    [
      fetchResults,
      setTotalItemsActionView,
      setTreeIsLoading,
      showErrorNotification,
      updateTotalRows,
      nameSearch,
    ],
  );

  // Use shared aggregates functionality
  const { footerComponent } = useSharedAggregates({
    treeOoui,
    model,
    selectedRowKeys,
    showEmptyValues: true,
  });

  // Create a ref to store the latest treeFirstVisibleRow value
  const treeFirstVisibleRowRef = useRef(treeFirstVisibleRow);
  treeFirstVisibleRowRef.current = treeFirstVisibleRow;

  // Create a stable firstVisibleRowIndex function that uses ref to avoid recreation
  const stableFirstVisibleRowIndex = useCallback(() => {
    return treeFirstVisibleRowRef.current;
  }, []);

  // Calculate cache block size outside of render
  const cacheBlockSize = isNameSearchMode.current
    ? DEFAULT_SEARCH_LIMIT
    : undefined;

  // Use deep comparison memoization - recreates only when content actually changes
  const content = useDeepCompareMemo(() => {
    if (!columnsWithLoading || !treeOoui) {
      return null;
    }

    return (
      <InfiniteTable
        readonly={false}
        ref={tableRef}
        height={availableHeight}
        columns={columnsWithLoading}
        onRequestData={onRequestData}
        onRowDoubleClick={onRowClicked}
        onRowStyle={onRowStyle}
        onRowSelectionChange={changeSelectedRowKeys}
        onColumnChanged={updateColumnState}
        onGetColumnsState={getColumnState}
        onChangeFirstVisibleRowIndex={setTreeFirstVisibleRow}
        onGetFirstVisibleRowIndex={stableFirstVisibleRowIndex}
        selectedRowKeys={selectedRowKeys}
        onSelectionCheckboxClicked={onSelectionCheckboxClicked}
        totalRows={totalRows || 99999}
        footer={footerComponent}
        hasStatusColumn={treeOoui.status !== null}
        statusComponent={statusComponent}
        onRowStatus={onRowStatus}
        strings={strings}
        initialSortState={actionViewSortState}
        cacheBlockSize={cacheBlockSize}
        onChangeTableType={onChangeTreeType}
      />
    );
  }, [
    columnsWithLoading,
    treeOoui,
    availableHeight,
    onRequestData,
    onRowClicked,
    onRowStyle,
    changeSelectedRowKeys,
    updateColumnState,
    getColumnState,
    setTreeFirstVisibleRow,
    stableFirstVisibleRowIndex,
    selectedRowKeys,
    onSelectionCheckboxClicked,
    totalRows,
    footerComponent,
    statusComponent,
    onRowStatus,
    strings,
    actionViewSortState,
    cacheBlockSize,
    onChangeTreeType,
  ]);

  const prevSearchParamsRef = useRef(searchParams);
  const prevSearchVisibleRef = useRef(searchVisible);

  useDeepCompareEffect(() => {
    const searchParamsChanged = !deepEqual(
      searchParams,
      prevSearchParamsRef.current,
    );
    const searchVisibleChangedToFalse =
      prevSearchVisibleRef.current && !searchVisible;

    if (
      searchParamsChanged &&
      (searchVisibleChangedToFalse || filterType === "top")
    ) {
      refresh();
    }

    prevSearchParamsRef.current = searchParams;
    prevSearchVisibleRef.current = searchVisible;
  }, [searchParams, searchVisible]);

  const refresh = useCallback(async () => {
    changeSelectedRowItems([]);
    clearAttributes();
    clearAutorefreshableFields();
    currentSearchParamsString.current = undefined;
    setNameSearchFetchCompleted(false);
    tableRef?.current?.refresh();
    refreshFunctionFields();
  }, [
    changeSelectedRowItems,
    clearAttributes,
    clearAutorefreshableFields,
    refreshFunctionFields,
  ]);

  useImperativeHandle(ref, () => ({
    refreshResults: refresh,
    getFields: () => treeView?.fields,
  }));

  const containerStyle = useMemo(
    () => ({
      overflow: "hidden",
      height: `${availableHeight}px`,
      ...(visible ? {} : { display: "none" }),
    }),
    [availableHeight, visible],
  );

  const searchFilterProps = useMemo(
    () => ({
      fields: { ...formView?.fields, ...treeView?.fields },
      searchFields: mergeSearchFields([
        formView?.search_fields,
        treeView?.search_fields,
      ]),
      showLimitOptions: false,
      limit: 0,
      offset: 0,
      isSearching: false,
      searchValues,
      searchVisible: true,
    }),
    [
      formView?.fields,
      formView?.search_fields,
      treeView?.fields,
      treeView?.search_fields,
      searchValues,
    ],
  );

  const onSearchFilterClear = useCallback(() => {
    changeSelectedRowItems([]);
    tableRef.current?.unselectAll();
    setSearchTreeNameSearch?.(undefined);
    setSearchParams?.([]);
    setSearchValues?.(undefined);
  }, [
    changeSelectedRowItems,
    setSearchTreeNameSearch,
    setSearchParams,
    setSearchValues,
  ]);

  const onSearchFilterSubmit = useCallback(
    ({ params, searchValues }: any) => {
      changeSelectedRowItems([]);
      tableRef.current?.unselectAll();
      setSearchTreeNameSearch?.(undefined);
      setSearchParams?.(params);
      setSearchValues?.(searchValues);
    },
    [
      changeSelectedRowItems,
      setSearchTreeNameSearch,
      setSearchParams,
      setSearchValues,
    ],
  );

  const sideSearchFilterProps = useMemo(
    () => ({
      isOpen: searchVisible,
      fields: { ...formView?.fields, ...treeView?.fields },
      searchFields: mergeSearchFields([
        formView?.search_fields,
        treeView?.search_fields,
      ]),
      searchValues,
    }),
    [
      searchVisible,
      formView?.fields,
      formView?.search_fields,
      treeView?.fields,
      treeView?.search_fields,
      searchValues,
    ],
  );

  const onSideSearchFilterClose = useCallback(
    () => setSearchVisible?.(false),
    [setSearchVisible],
  );

  const onSideSearchFilterSubmit = useCallback(
    ({ params, values }: any) => {
      changeSelectedRowItems([]);
      tableRef.current?.unselectAll();
      setSearchTreeNameSearch?.(undefined);
      setSearchParams?.(params);
      setSearchValues?.(values);
      setSearchVisible?.(false);
    },
    [
      changeSelectedRowItems,
      setSearchTreeNameSearch,
      setSearchParams,
      setSearchValues,
      setSearchVisible,
    ],
  );

  const shouldShowNameSearchWarning =
    nameSearch &&
    nameSearchFetchCompleted &&
    totalRows !== undefined &&
    totalRows !== null &&
    totalRows === DEFAULT_SEARCH_LIMIT;

  return (
    <Fragment>
      {filterType === "top" && (
        <SearchFilter
          {...searchFilterProps}
          onClear={onSearchFilterClear}
          onSubmit={onSearchFilterSubmit}
        />
      )}
      {filterType === "side" && (
        <SideSearchFilter
          {...sideSearchFilterProps}
          onClose={onSideSearchFilterClose}
          onSubmit={onSideSearchFilterSubmit}
        />
      )}
      <SearchTreeHeader
        selectedRowKeys={selectedRowKeys}
        totalRows={totalRows}
        customMiddleComponent={
          shouldShowNameSearchWarning && (
            <NameSearchWarning
              onFilterSearchClick={() => setSearchVisible?.(true)}
            />
          )
        }
      />
      <div ref={containerRef} style={containerStyle}>
        {loading || isColumnStateLoading ? <Spin /> : content}
      </div>
    </Fragment>
  );
}

export const SearchTreeInfinite = forwardRef(SearchTreeInfiniteComp);
