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
import { Badge, Spin } from "antd";
import {
  getOrderFromSortFields,
  getSortedFieldsFromState,
  getTableItems,
  getTree,
} from "@/helpers/treeHelper";
import { useDeepCompareCallback, useDeepCompareEffect } from "use-deep-compare";
import {
  ColumnState,
  InfiniteTable,
  InfiniteTableRef,
} from "@gisce/react-formiga-table";
import ConnectionProvider from "@/ConnectionProvider";
import { useAvailableHeight } from "@/hooks/useAvailableHeight";
import { mergeSearchFields } from "@/helpers/formHelper";
import { useTreeColumnStorageFetch } from "../base/one2many/useTreeColumnStorageFetch";
import { getKey } from "@/helpers/tree-columnStorageHelper";
import { useTreeAggregates } from "../base/one2many/useTreeAggregates";
import { AggregatesFooter } from "../base/one2many/AggregatesFooter";
import { useLocale } from "@gisce/react-formiga-components";
import showConfirmDialog from "@/ui/ConfirmDialog";
import { SideSearchFilter } from "./searchFilter/SideSearchFilter";
import { mergeParams } from "@/helpers/searchHelper";
import deepEqual from "deep-equal";
import { useErrorNotification } from "@/hooks/useErrorNotification";
import SearchFilter from "./searchFilter/SearchFilter";
import { useSearchTreeState } from "@/hooks/useSearchTreeState";
import { Tree as TreeOoui } from "@gisce/ooui";
import { useAutorefreshableTreeFields } from "@/hooks/useAutorefreshableTreeFields";
import { useTreeFunctionFieldsRead } from "@/hooks/useTreeFunctionFieldsRead";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { NameSearchWarning } from "./Tree/NameSearchWarning";
import { SearchTreeHeader } from "./SearchTreeHeader";
import {
  getAttributesConditionsFromOoui,
  useTreeAttributesState,
} from "@/hooks/useTreeAttributesState";
import { CellRenderer } from "./Tree/CellRenderer";
import { TreeType } from "@/views/actionViews/TreeActionView";
import { useTableConfiguration } from "@/hooks/useTableConfiguration";
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

  const { t } = useLocale();

  const containerRef = useRef<HTMLDivElement>(null);
  const availableHeight = useAvailableHeight({
    elementRef: containerRef,
    offset: HEIGHT_OFFSET,
  });

  // Network request hooks
  const [searchCountRequest, cancelSearchCountRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().searchCount,
  );
  const [searchForTreeRequest, cancelSearchForTreeRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().searchForTree,
  );
  const [searchAllIdsRequest, cancelSearchAllIdsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().searchAllIds,
  );

  useEffect(() => {
    return () => {
      cancelSearchCountRequest();
      cancelSearchForTreeRequest();
      cancelSearchAllIdsRequest();
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

  const {
    colorsForResults,
    statusForResults,
    updateAttributes,
    clearAttributes,
  } = useTreeAttributesState({
    tableRef,
  });

  const {
    isFieldLoading,
    refresh: refreshFunctionFields,
    addRecordsToCheckFunctionFields,
    onHasFunctionFieldsToParseConditions,
    syncExternalRecordUpdates,
  } = useTreeFunctionFieldsRead({
    model,
    treeView,
    tableRef,
    context: parentContext,
    isActive,
    treeOoui,
    updateAttributes,
    results: actionViewResults,
  });

  const { clear: clearAutorefreshableFields } = useAutorefreshableTreeFields({
    model,
    tableRef,
    autorefreshableFields: treeOoui?.autorefreshableFields,
    treeView,
    context: parentContext,
    isActive,
    treeOoui,
    updateAttributes,
    results: actionViewResults,
    onRecordsUpdated: syncExternalRecordUpdates,
  });

  const { columns, strings } = useTableConfiguration(treeOoui, parentContext);

  const columnsWithLoading = useMemo(() => {
    if (!columns) {
      return;
    }
    return columns.map((column: any) => ({
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
  }, [columns, isFieldLoading]);

  const columnStateKey = useMemo(() => {
    if (loading) {
      return undefined;
    }
    return getKey({
      treeViewId: treeView?.view_id,
      model,
    });
  }, [model, treeView?.view_id, loading]);

  const {
    loading: getColumnStateInProgress,
    getColumnState,
    updateColumnState,
  } = useTreeColumnStorageFetch({ key: columnStateKey });

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
      const totalItems = await searchCountRequest({
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
    setTotalItemsActionView,
    showErrorNotification,
    searchCountRequest,
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

      const { results, attrsEvaluated } = await searchForTreeRequest({
        params,
        limit: endRow - startRow,
        offset: startRow,
        model,
        fields: treeView!.field_parent
          ? { ...treeView!.fields, [treeView!.field_parent]: {} }
          : treeView!.fields,
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

      const preparedResults = getTableItems(treeOoui, results);
      updateAttributes(attrsEvaluated, treeOoui);
      lastAssignedResults.current = [...preparedResults];
      return preparedResults;
    },
    [
      actionViewResults,
      actionViewSortState,
      domain,
      mergedParams,
      model,
      mustUpdateTotal,
      nameSearch,
      parentContext,
      setActionViewResults,
      setActionViewSortState,
      setSearchQuery,
      setTotalItemsActionView,
      treeOoui,
      treeView,
      addRecordsToCheckFunctionFields,
      onHasFunctionFieldsToParseConditions,
      setNameSearchFetchCompleted,
      updateAttributes,
      searchForTreeRequest,
    ],
  );

  const changeSelectedRowItems = useCallback(
    (newSelectedRowItems: any[]) => {
      setSelectedRowItems?.(newSelectedRowItems);
      onChangeSelectedRowKeys?.(newSelectedRowItems.map((item) => item.id));
    },
    [onChangeSelectedRowKeys, setSelectedRowItems],
  );

  const changeSelectedRowKeys = useCallback(
    (newSelectedRowKeys: number[]) => {
      setSelectedRowItems?.(newSelectedRowKeys.map((id: number) => ({ id })));
      onChangeSelectedRowKeys?.(newSelectedRowKeys);
    },
    [onChangeSelectedRowKeys, setSelectedRowItems],
  );

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

  const onRowStyle = useCallback((record: any) => {
    if (colorsForResults.current[record.node?.data?.id]) {
      return { color: colorsForResults.current[record.node?.data?.id] };
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedRowKeys = useMemo(() => {
    return selectedRowItems?.map((item) => item.id) || [];
  }, [selectedRowItems]);

  const [loadingAggregates, aggregates, hasAggregates] = useTreeAggregates({
    ooui: treeOoui,
    model,
    showEmptyValues: true,
    domain:
      selectedRowKeys?.length > 0
        ? // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
          [["id", "in", selectedRowKeys.sort()]]
        : undefined,
  });

  const onSelectionCheckboxClicked = useCallback(async () => {
    let mustSelectAll = false;
    if (selectedRowItems?.length === 0) {
      mustSelectAll = true;
    } else {
      mustSelectAll = false;
    }

    const selectAllPromise = async () => {
      if (nameSearch) {
        changeSelectedRowItems(lastAssignedResults.current);
        return;
      }

      if (!totalRows) {
        return;
      }

      const allRowsResults = await searchAllIdsRequest({
        params: nameSearch ? domain : mergedParams,
        model,
        context: parentContext,
        totalItems: totalRows,
      });
      changeSelectedRowItems(allRowsResults.map((id: number) => ({ id })));
    };

    if (mustSelectAll) {
      if (totalRows && totalRows > MAX_ROWS_TO_SELECT) {
        showConfirmDialog({
          confirmMessage: t("confirmSelectAllRegisters").replace(
            "{totalRecords}",
            totalRows.toString(),
          ),
          t,
          onOk: selectAllPromise,
        });
      } else {
        selectAllPromise();
      }
    } else {
      setSelectedRowItems([]);
    }
  }, [
    changeSelectedRowItems,
    domain,
    mergedParams,
    model,
    nameSearch,
    parentContext,
    selectedRowItems?.length,
    setSelectedRowItems,
    t,
    totalRows,
    searchAllIdsRequest,
  ]);

  const firstVisibleRowIndex = useCallback(() => {
    return treeFirstVisibleRow;
  }, [treeFirstVisibleRow]);

  const footerComp = useMemo(() => {
    if (!hasAggregates) {
      return null;
    }
    return (
      <AggregatesFooter aggregates={aggregates} isLoading={loadingAggregates} />
    );
  }, [aggregates, loadingAggregates, hasAggregates]);

  const statusComp = useCallback((status: any) => {
    return <Badge color={status} style={{ marginLeft: 7 }} />;
  }, []);

  const onRowStatus = useCallback(
    (record: any) => statusForResults.current?.[record.id],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const content = useMemo(() => {
    if (!columns || !treeOoui) {
      return null;
    }

    const cacheBlockSize = isNameSearchMode.current
      ? DEFAULT_SEARCH_LIMIT
      : undefined;

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
        onGetFirstVisibleRowIndex={firstVisibleRowIndex}
        selectedRowKeys={selectedRowKeys}
        onSelectionCheckboxClicked={onSelectionCheckboxClicked}
        totalRows={totalRows || 99999}
        footer={footerComp}
        hasStatusColumn={treeOoui.status !== null}
        statusComponent={statusComp}
        onRowStatus={onRowStatus}
        strings={strings}
        initialSortState={actionViewSortState}
        cacheBlockSize={cacheBlockSize}
        onChangeTableType={onChangeTreeType}
      />
    );
  }, [
    columns,
    treeOoui,
    availableHeight,
    columnsWithLoading,
    onRequestData,
    onRowClicked,
    onRowStyle,
    changeSelectedRowKeys,
    updateColumnState,
    getColumnState,
    setTreeFirstVisibleRow,
    firstVisibleRowIndex,
    selectedRowKeys,
    onSelectionCheckboxClicked,
    totalRows,
    footerComp,
    statusComp,
    onRowStatus,
    strings,
    actionViewSortState,
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
        {loading || getColumnStateInProgress ? <Spin /> : content}
      </div>
    </Fragment>
  );
}

export const SearchTreeInfinite = forwardRef(SearchTreeInfiniteComp);
