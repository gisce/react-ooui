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
  getColorMap,
  getOrderFromSortFields,
  getStatusMap,
  getTableColumns,
  getTableItems,
  getTree,
} from "@/helpers/treeHelper";
import { COLUMN_COMPONENTS } from "./Tree/treeComponents";
import { useDeepCompareMemo } from "use-deep-compare";
import {
  InfiniteTable,
  InfiniteTableRef,
  SortDirection,
} from "@gisce/react-formiga-table";
import ConnectionProvider from "@/ConnectionProvider";
import { useAvailableHeight } from "@/hooks/useAvailableHeight";
import { useActionViewContext } from "@/context/ActionViewContext";
import { mergeSearchFields } from "@/helpers/formHelper";
import { useTreeColumnStorageFetch } from "../base/one2many/useTreeColumnStorageFetch";
import { getKey } from "@/helpers/tree-columnStorageHelper";
import { useTreeAggregates } from "../base/one2many/useTreeAggregates";
import { AggregatesFooter } from "../base/one2many/AggregatesFooter";
import { SearchTreeHeader } from "./SearchTreeHeader";
import { useLocale } from "@gisce/react-formiga-components";
import showConfirmDialog from "@/ui/ConfirmDialog";
import { SideSearchFilter } from "./searchFilter/SideSearchFilter";
import { mergeParams } from "@/helpers/searchHelper";
import useDeepCompareEffect from "use-deep-compare-effect";
import deepEqual from "deep-equal";
import { useShowErrorDialog } from "@/ui/GenericErrorDialog";

export const HEIGHT_OFFSET = 10;
export const MAX_ROWS_TO_SELECT = 200;

type OnRowClickedData = {
  id: number;
  model: string;
  formView: FormView;
  treeView: TreeView;
};

type SearchTreeInfiniteProps = {
  model: string;
  formView?: FormView;
  treeView?: TreeView;
  onRowClicked: (data: OnRowClickedData) => void;
  nameSearch?: string;
  treeScrollY?: number;
  domain?: any;
  visible?: boolean;
  rootTree?: boolean;
  parentContext?: any;
  onChangeSelectedRowKeys?: (selectedRowKeys: any) => void;
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
  } = props;
  const colorsForResults = useRef<{ [key: number]: string }>({});
  const statusForResults = useRef<{ [key: number]: string }>();
  const tableRef: RefObject<InfiniteTableRef> = useRef(null);
  const lastAssignedResults = useRef<any[]>([]);
  const showErrorDialog = useShowErrorDialog();

  const [totalRowsLoading, setTotalRowsLoading] = useState<boolean>(true);
  const [totalRows, setTotalRows] = useState<number | null>();

  const { t } = useLocale();

  const containerRef = useRef<HTMLDivElement>(null);
  const availableHeight = useAvailableHeight({
    elementRef: containerRef,
    offset: HEIGHT_OFFSET,
  });

  const { treeView, formView, loading } = useFetchTreeViews({
    model,
    formViewProps,
    treeViewProps,
    context: parentContext,
  });

  const {
    setTreeIsLoading,
    searchVisible = false,
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
  } = useActionViewContext(rootTree);

  const nameSearch = nameSearchProps || searchTreeNameSearch;
  const prevNameSearch = useRef(nameSearch);

  useEffect(() => {
    updateTotalRowsIfNeeded();
  }, []);

  useEffect(() => {
    if (
      (nameSearch !== undefined && prevNameSearch.current === undefined) ||
      (typeof nameSearch === "string" &&
        typeof prevNameSearch.current === "string" &&
        nameSearch !== prevNameSearch.current)
    ) {
      setSearchParams?.([]);
      setSearchValues?.({});
      tableRef.current?.unselectAll();
      refresh();
    }
    prevNameSearch.current = nameSearch;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameSearch]);

  const treeOoui = useMemo(() => {
    if (!treeView) {
      return;
    }
    return getTree(treeView);
  }, [treeView]);

  const columns = useDeepCompareMemo(() => {
    if (!treeOoui) {
      return;
    }
    return getTableColumns(
      treeOoui,
      {
        ...COLUMN_COMPONENTS,
      },
      parentContext,
    );
  }, [treeOoui, parentContext]);

  const columnStateKey = useMemo(() => {
    return getKey({
      treeViewId: treeView?.view_id,
      model,
    });
  }, [model, treeView?.view_id]);

  const {
    loading: getColumnStateInProgress,
    getColumnState,
    updateColumnState,
  } = useTreeColumnStorageFetch(columnStateKey);

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

  const updateTotalRowsIfNeeded = useCallback(async () => {
    if (!mustUpdateTotal()) {
      return;
    }
    setTotalRows(undefined);
    setTotalItemsActionView(0);
    setTotalRowsLoading(true);
    try {
      const totalItems = await ConnectionProvider.getHandler().searchCount({
        params: nameSearch ? domain : mergedParams,
        model,
        context: parentContext,
        name_search: nameSearch,
      });
      setTotalRows(totalItems);
      setTotalItemsActionView(totalItems);
    } catch (err) {
      showErrorDialog(err);
    } finally {
      setTotalRowsLoading(false);
    }
  }, [
    domain,
    mergedParams,
    model,
    mustUpdateTotal,
    nameSearch,
    parentContext,
    setTotalItemsActionView,
    showErrorDialog,
  ]);

  const fetchResults = useCallback(
    async ({
      startRow,
      endRow,
      sortFields,
    }: {
      startRow: number;
      endRow: number;
      sortFields?: Record<string, SortDirection>;
    }) => {
      if (!treeOoui) {
        return [];
      }

      const attrs: any = {};
      if (treeOoui.colors) {
        attrs.colors = treeOoui.colors;
      }
      if (treeOoui.status) {
        attrs.status = treeOoui.status;
      }

      const params = nameSearch ? domain : mergedParams;
      const order = getOrderFromSortFields(sortFields);

      const { results, attrsEvaluated } =
        await ConnectionProvider.getHandler().searchForTree({
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
        });

      const newResults = results.map((item) => ({ id: item.id }));

      setSearchQuery?.({
        model,
        params,
        name_search: nameSearch,
        context: parentContext,
        order,
      });

      if (mustUpdateTotal() || prevSortOrder.current !== order) {
        setActionViewResults?.(newResults);
      } else {
        const appendedResults = [...(actionViewResults || []), ...newResults];
        setActionViewResults?.(appendedResults);
      }

      prevSortOrder.current = order;

      if (results.length === 0) {
        lastAssignedResults.current = [];
        setTotalRows(0);
        setTotalItemsActionView(0);
        return [];
      }

      const preparedResults = getTableItems(treeOoui, results);

      const colors = getColorMap(attrsEvaluated);

      colorsForResults.current = {
        ...colorsForResults.current,
        ...colors,
      };

      if (!statusForResults.current && treeOoui.status) {
        statusForResults.current = {};
      }

      if (treeOoui.status) {
        const status = getStatusMap(attrsEvaluated);
        statusForResults.current = {
          ...statusForResults.current,
          ...status,
        };
      }

      lastAssignedResults.current = [...preparedResults];
      return preparedResults;
    },
    [
      actionViewResults,
      domain,
      mergedParams,
      model,
      mustUpdateTotal,
      nameSearch,
      parentContext,
      setActionViewResults,
      setSearchQuery,
      setTotalItemsActionView,
      treeOoui,
      treeView,
    ],
  );

  const changeSelectedRowKeys = useCallback(
    (newSelectedRowKeys: any[]) => {
      setSelectedRowItems?.(newSelectedRowKeys.map((id: number) => ({ id })));
      onChangeSelectedRowKeys?.(newSelectedRowKeys);
    },
    [onChangeSelectedRowKeys, setSelectedRowItems],
  );

  const onRequestData = useCallback(
    async ({
      startRow,
      endRow,
      sortFields,
    }: {
      startRow: number;
      endRow: number;
      sortFields?: Record<string, SortDirection>;
    }) => {
      try {
        setTreeIsLoading?.(true);
        const results = await fetchResults({
          startRow,
          endRow,
          sortFields,
        });
        return results;
      } catch (error) {
        console.error(error);
        setTotalRows(null);
        setTotalItemsActionView(0);
        showErrorDialog(error);
        throw error;
      } finally {
        setTreeIsLoading?.(false);
      }
    },
    [fetchResults, setTotalItemsActionView, setTreeIsLoading, showErrorDialog],
  );

  const onRowStyle = useCallback((record: any) => {
    if (colorsForResults.current[record.node?.data?.id]) {
      return { color: colorsForResults.current[record.node?.data?.id] };
    }
    return undefined;
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
        setSelectedRowItems?.(lastAssignedResults.current);
        return;
      }

      if (!totalRows) {
        return;
      }

      const allRowsResults = await ConnectionProvider.getHandler().searchAllIds(
        {
          params: nameSearch ? domain : mergedParams,
          model,
          context: parentContext,
          totalItems: totalRows,
        },
      );
      setSelectedRowItems?.(allRowsResults.map((id: number) => ({ id })));
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
      setSelectedRowItems?.([]);
    }
  }, [
    domain,
    mergedParams,
    model,
    nameSearch,
    parentContext,
    selectedRowItems?.length,
    setSelectedRowItems,
    t,
    totalRows,
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
    [],
  );

  const strings = useMemo(
    () => ({
      resetTableViewLabel: t("resetTableView"),
    }),
    [t],
  );

  const content = useMemo(() => {
    if (!columns || !treeOoui) {
      return null;
    }

    return (
      <InfiniteTable
        readonly={false}
        ref={tableRef}
        height={availableHeight}
        columns={columns}
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
      />
    );
  }, [
    availableHeight,
    changeSelectedRowKeys,
    columns,
    firstVisibleRowIndex,
    footerComp,
    getColumnState,
    onRequestData,
    onRowClicked,
    onRowStatus,
    onRowStyle,
    onSelectionCheckboxClicked,
    selectedRowKeys,
    setTreeFirstVisibleRow,
    statusComp,
    strings,
    totalRows,
    treeOoui,
    updateColumnState,
  ]);

  const prevSearchParamsRef = useRef(searchParams);
  const prevSearchVisibleRef = useRef(searchVisible);
  const currentSearchParamsString = useRef<string>();
  const prevSortOrder = useRef<string>();

  useDeepCompareEffect(() => {
    const searchParamsChanged = !deepEqual(
      searchParams,
      prevSearchParamsRef.current,
    );
    const searchVisibleChangedToFalse =
      prevSearchVisibleRef.current && !searchVisible;

    if (searchParamsChanged && searchVisibleChangedToFalse) {
      refresh();
    }

    prevSearchParamsRef.current = searchParams;
    prevSearchVisibleRef.current = searchVisible;
  }, [searchParams, searchVisible]);

  const refresh = useCallback(async () => {
    setSelectedRowItems?.([]);
    currentSearchParamsString.current = undefined;
    await updateTotalRowsIfNeeded();
    tableRef?.current?.refresh();
  }, [setSelectedRowItems, updateTotalRowsIfNeeded]);

  useImperativeHandle(ref, () => ({
    refreshResults: refresh,
    getFields: () => treeView?.fields,
    getDomain: () => domain,
  }));

  return (
    <Fragment>
      <SearchTreeHeader
        selectedRowKeys={selectedRowKeys}
        allRowSelectedMode={false}
        totalRows={totalRows}
      />
      <div
        ref={containerRef}
        style={{
          overflow: "hidden",
          height: `${availableHeight}px`,
          ...(visible ? {} : { display: "none" }),
        }}
      >
        {loading || getColumnStateInProgress || totalRowsLoading ? (
          <Spin />
        ) : (
          <Fragment>
            {content}
            <SideSearchFilter
              isOpen={searchVisible}
              onClose={() => setSearchVisible?.(false)}
              fields={{ ...formView?.fields, ...treeView?.fields }}
              searchFields={mergeSearchFields([
                formView?.search_fields,
                treeView?.search_fields,
              ])}
              onSubmit={({ params, values }) => {
                setSelectedRowItems?.([]);
                tableRef.current?.unselectAll();
                setSearchTreeNameSearch?.(undefined);
                setSearchParams?.(params);
                setSearchValues?.(values);
                setSearchVisible?.(false);
              }}
              searchValues={searchValues}
            />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export const SearchTreeInfinite = forwardRef(SearchTreeInfiniteComp);
