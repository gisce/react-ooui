import { mergeParams } from "@/helpers/searchHelper";
import { useSearchTreeState } from "@/hooks/useSearchTreeState";
import { PaginatedTableRef, CheckboxState } from "@gisce/react-formiga-table";
import {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNetworkRequest } from "./useNetworkRequest";
import { ConnectionProvider, TreeView } from "..";
import { useShowErrorDialog } from "@/ui/GenericErrorDialog";
import { useDeepCompareEffect } from "use-deep-compare";
import deepEqual from "deep-equal";
import {
  getColorMap,
  getStatusMap,
  getTableItems,
  getSortedFieldsFromState,
  getOrderFromSortFields,
} from "@/helpers/treeHelper";
import { Tree as TreeOoui } from "@gisce/ooui";
import { getKey } from "@/helpers/tree-columnStorageHelper";
import { useTreeColumnStorageFetch } from "@/widgets/base/one2many/useTreeColumnStorageFetch";

export const DEFAULT_PAGE_SIZE = 80;

export type PaginatedSearchProps = {
  treeViewFetching: boolean;
  treeOoui?: TreeOoui;
  treeView?: TreeView;
  model: string;
  rootTree?: boolean;
  nameSearchProps?: string;
  tableRef: React.RefObject<PaginatedTableRef>;
  domain?: any;
  context?: any;
  filterType?: "side" | "top";
};

export const usePaginatedSearch = (props: PaginatedSearchProps) => {
  const {
    treeViewFetching,
    treeOoui,
    treeView,
    model,
    rootTree = false,
    nameSearchProps,
    tableRef,
    domain = [],
    context,
    filterType = "side",
  } = props;

  // State from useSearchTreeState
  const {
    treeIsLoading,
    setTreeIsLoading,
    searchVisible,
    setSearchVisible,
    setSelectedRowItems,
    setTreeFirstVisibleRow,
    treeFirstVisibleRow,
    treeFirstVisibleColumn,
    setTreeFirstVisibleColumn,
    selectedRowItems,
    setSearchParams,
    searchValues,
    searchParams,
    setSearchValues,
    searchTreeNameSearch,
    setSearchTreeNameSearch,
    setResults: setActionViewResults,
    setSearchQuery,
    setTotalItems: setTotalItemsActionView,
    isActive,
    currentPage,
    setCurrentPage,
    order: actionViewOrder,
    setOrder: setActionViewOrder,
    limit,
    setLimit,
  } = useSearchTreeState({ useLocalState: !rootTree });

  // Local state
  const [totalRowsLoading, setTotalRowsLoading] = useState<boolean>(true);
  const [totalRows, setTotalRows] = useState<number | null>();
  const [results, setResults] = useState<any[]>([]);

  // Refs
  const nameSearch = nameSearchProps || searchTreeNameSearch;
  const prevNameSearch = useRef(nameSearch);
  const prevSearchParamsRef = useRef(searchParams);
  const prevSearchVisibleRef = useRef(searchVisible);
  const currentSearchParamsString = useRef<string>();
  const colorsForResults = useRef<{ [key: number]: string }>({});
  const statusForResults = useRef<{ [key: number]: string }>();
  const lastAssignedResults = useRef<any[]>([]);

  const columnStateKey = useMemo(() => {
    return getKey({ treeViewId: treeView?.view_id, model });
  }, [treeView?.view_id, model]);

  const {
    fetchColumnState,
    loading: getColumnStateInProgress,
    getColumnState,
    updateColumnState,
  } = useTreeColumnStorageFetch({
    key: columnStateKey,
    treeViewFetching,
  });

  // Hooks
  const showErrorDialog = useShowErrorDialog();
  const [fetchTotalRows, cancelFetchTotalRows] = useNetworkRequest(
    ConnectionProvider.getHandler().searchCount,
  );
  const [searchForTree, cancelSearchForTree] = useNetworkRequest(
    ConnectionProvider.getHandler().searchForTree,
  );

  const [fetchAllIds, cancelFetchAllIds] = useNetworkRequest(
    ConnectionProvider.getHandler().searchAllIds,
  );

  // Memoized values
  const mergedParams = useMemo(
    () => mergeParams(searchParams || [], domain),
    [domain, searchParams],
  );

  const selectedRowKeys = useMemo(() => {
    return selectedRowItems?.map((item) => item.id) || [];
  }, [selectedRowItems]);

  // Helper functions
  const mustUpdateTotal = useCallback(() => {
    const params = nameSearch ? domain : mergedParams;
    const paramsString = `${JSON.stringify(params)}-${nameSearch}`;

    if (paramsString !== currentSearchParamsString.current) {
      currentSearchParamsString.current = paramsString;
      return true;
    }
    return false;
  }, [domain, mergedParams, nameSearch]);

  // Core functionality
  const updateTotalRows = useCallback(async () => {
    setTotalRows(undefined);
    setTotalItemsActionView(0);
    setTotalRowsLoading(true);
    try {
      const totalItems = await fetchTotalRows({
        params: nameSearch ? domain : mergedParams,
        model,
        context,
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
    setTotalItemsActionView,
    fetchTotalRows,
    nameSearch,
    domain,
    mergedParams,
    model,
    context,
    showErrorDialog,
  ]);

  // Event handlers
  const onGetFirstVisibleRowIndex = useCallback(() => {
    return treeFirstVisibleRow;
  }, [treeFirstVisibleRow]);

  const onGetFirstVisibleColumn = useCallback(() => {
    return treeFirstVisibleColumn;
  }, [treeFirstVisibleColumn]);

  const onRowStyle = useCallback((item: Record<string, any>): CSSProperties => {
    if (colorsForResults.current[item.node?.data?.id]) {
      return { color: colorsForResults.current[item.node?.data?.id] };
    }
    return {};
  }, []);

  const onRowStatus = useCallback(
    (record: any) => statusForResults.current?.[record.id],
    [],
  );

  // Search filter handlers
  const onSearchFilterClear = useCallback(() => {
    setSelectedRowItems([]);
    tableRef.current?.unselectAll();
    setSearchTreeNameSearch?.(undefined);
    setSearchParams?.([]);
    setSearchValues?.(undefined);
  }, [
    setSelectedRowItems,
    tableRef,
    setSearchTreeNameSearch,
    setSearchParams,
    setSearchValues,
  ]);

  const onSearchFilterSubmit = useCallback(
    ({ params, searchValues }: any) => {
      setSelectedRowItems([]);
      tableRef.current?.unselectAll();
      setSearchTreeNameSearch?.(undefined);
      setSearchParams?.(params);
      setSearchValues?.(searchValues);
    },
    [
      setSelectedRowItems,
      tableRef,
      setSearchTreeNameSearch,
      setSearchParams,
      setSearchValues,
    ],
  );

  const onSideSearchFilterClose = useCallback(
    () => setSearchVisible?.(false),
    [setSearchVisible],
  );

  const onSideSearchFilterSubmit = useCallback(
    ({ params, values }: any) => {
      setSelectedRowItems([]);
      tableRef.current?.unselectAll();
      setSearchTreeNameSearch?.(undefined);
      setSearchParams?.(params);
      setSearchValues?.(values);
      setSearchVisible?.(false);
    },
    [
      setSelectedRowItems,
      tableRef,
      setSearchTreeNameSearch,
      setSearchParams,
      setSearchValues,
      setSearchVisible,
    ],
  );

  // Effects
  useEffect(() => {
    if (treeViewFetching) {
      return;
    }
    updateTotalRows();
    return () => {
      cancelFetchTotalRows();
      cancelSearchForTree();
      cancelFetchAllIds();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treeViewFetching]);

  useDeepCompareEffect(() => {
    if (!treeOoui || !treeView || treeViewFetching) {
      return;
    }
    fetchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    treeView,
    treeOoui,
    limit,
    currentPage,
    mergedParams,
    nameSearch,
    domain,
    actionViewOrder,
  ]);

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

  const fetchResults = useCallback(async () => {
    if (!treeOoui || treeViewFetching) {
      return [];
    }
    setTreeIsLoading(true);

    const attrs: any = {};
    if (treeOoui.colors) {
      attrs.colors = treeOoui.colors;
    }
    if (treeOoui.status) {
      attrs.status = treeOoui.status;
    }

    let order;
    if (actionViewOrder?.length) {
      const sortFields = getSortedFieldsFromState({
        state: actionViewOrder,
      });
      order = getOrderFromSortFields(sortFields);
    }

    const params = nameSearch ? domain : mergedParams;

    const { results, attrsEvaluated } = await searchForTree({
      params,
      limit,
      offset: ((currentPage || 1) - 1) * limit,
      model,
      fields: treeView!.field_parent
        ? { ...treeView!.fields, [treeView!.field_parent]: {} }
        : treeView!.fields,
      context,
      attrs,
      order,
      name_search: nameSearch,
    });

    const newResults = results.map((item: any) => ({ id: item.id }));

    setSearchQuery?.({
      model,
      params,
      name_search: nameSearch,
      context,
    });

    setActionViewResults?.(newResults);

    if (mustUpdateTotal()) {
      updateTotalRows();
    }

    if (results.length === 0) {
      lastAssignedResults.current = [];
      setTotalRows(0);
      setTotalItemsActionView(0);
      setResults([]);
      setTreeIsLoading(false);
      return;
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

    setTreeIsLoading(false);
    lastAssignedResults.current = [...preparedResults];
    setResults([...preparedResults]);
  }, [
    treeOoui,
    treeViewFetching,
    setTreeIsLoading,
    actionViewOrder,
    nameSearch,
    domain,
    mergedParams,
    searchForTree,
    limit,
    currentPage,
    model,
    treeView,
    context,
    setSearchQuery,
    setActionViewResults,
    mustUpdateTotal,
    updateTotalRows,
    setTotalItemsActionView,
  ]);

  const refresh = useCallback(async () => {
    setTreeFirstVisibleRow(0);
    fetchColumnState();
    setSelectedRowItems([]);
    currentSearchParamsString.current = undefined;
    fetchResults();
  }, [
    fetchColumnState,
    fetchResults,
    setSelectedRowItems,
    setTreeFirstVisibleRow,
  ]);

  const onRequestPageChange = useCallback(
    (page: number, pageSize?: number) => {
      setTreeFirstVisibleRow(0);
      setSelectedRowItems([]);
      setCurrentPage(page);
      pageSize && setLimit(pageSize);
    },
    [setCurrentPage, setLimit, setSelectedRowItems, setTreeFirstVisibleRow],
  );

  const getAllIds = useCallback(async () => {
    return await fetchAllIds({
      params: mergeParams(searchParams, domain),
      model,
      context,
      totalItems: totalRows,
    });
  }, [fetchAllIds, searchParams, domain, model, context, totalRows]);

  const selectAllRecords = useCallback(async () => {
    const allIds = await getAllIds();
    setSelectedRowItems?.(allIds.map((id: number) => ({ id })));
    // onChangeSelectedRowKeys?.(allIds);
  }, [getAllIds, setSelectedRowItems]);

  const headerCheckboxState: CheckboxState = useMemo(() => {
    if (selectedRowKeys.length === 0) return "unchecked";
    if (selectedRowKeys.length === limit && limit > 0) return "checked";
    if (selectedRowKeys.length === totalRows) return "checked";
    return "indeterminate";
  }, [selectedRowKeys, limit, totalRows]);

  const onHeaderCheckboxClick = useCallback(() => {
    if (headerCheckboxState === "unchecked") {
      // Moving to checked state
      tableRef.current?.selectAll();
      setSelectedRowItems(results.map((item) => ({ id: item.id })));
    } else {
      // Moving to unchecked state
      setSelectedRowItems([]);
      tableRef.current?.unselectAll();
    }
  }, [tableRef, setSelectedRowItems, results, headerCheckboxState]);

  const onRowHasBeenSelected = useCallback(
    ({ id, selected }: { id: number; selected: boolean }) => {
      setSelectedRowItems((prevItems) => {
        if (selected) {
          const item = results.find((result) => result.id === id);
          if (item && !prevItems.some((existing) => existing.id === id)) {
            return [...prevItems, item];
          }
          return prevItems;
        }
        return prevItems.filter((existing) => existing.id !== id);
      });
    },
    [results, setSelectedRowItems],
  );

  return {
    isActive,
    searchVisible,
    searchValues,
    selectedRowKeys,
    refresh,
    onRowStatus,
    onGetFirstVisibleRowIndex,
    setTreeFirstVisibleRow,
    onRowHasBeenSelected,
    onSearchFilterClear,
    onSearchFilterSubmit,
    onSideSearchFilterClose,
    onSideSearchFilterSubmit,
    totalRowsLoading,
    totalRows,
    onRowStyle,
    results,
    onRequestPageChange,
    treeIsLoading,
    selectAllRecords,
    onHeaderCheckboxClick,
    headerCheckboxState,
    getColumnStateInProgress,
    getColumnState,
    updateColumnState,
    currentPage,
    limit,
    order: actionViewOrder,
    setOrder: setActionViewOrder,
    setTreeFirstVisibleColumn,
    onGetFirstVisibleColumn,
  };
};
