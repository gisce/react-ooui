import { mergeParams } from "@/helpers/searchHelper";
import { useSearchTreeState } from "@/hooks/useSearchTreeState";
import { PaginatedTableRef } from "@gisce/react-formiga-table";
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
  getOrderFromSortFields,
  getSortedFieldsFromState,
  getStatusMap,
  getTableItems,
} from "@/helpers/treeHelper";
import { Tree as TreeOoui } from "@gisce/ooui";

export type PaginatedSearchProps = {
  treeOoui?: TreeOoui;
  treeView?: TreeView;
  model: string;
  rootTree?: boolean;
  nameSearchProps?: string;
  tableRef: React.RefObject<PaginatedTableRef>;
  domain?: any;
  context?: any;
  filterType?: "side" | "top";
  onChangeSelectedRowKeys?: (selectedRowKeys: any) => void;
};

export const DEFAULT_PAGE_SIZE = 80;

export const usePaginatedSearch = (props: PaginatedSearchProps) => {
  const {
    treeOoui,
    treeView,
    model,
    rootTree = false,
    nameSearchProps,
    tableRef,
    domain = [],
    context,
    filterType = "side",
    onChangeSelectedRowKeys: onChangeSelectedRowKeysProps,
  } = props;

  // State from useSearchTreeState
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
    sortState: actionViewSortState,
    setSortState: setActionViewSortState,
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
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
  const prevSortOrder = useRef<string>();
  const colorsForResults = useRef<{ [key: number]: string }>({});
  const statusForResults = useRef<{ [key: number]: string }>();
  const lastAssignedResults = useRef<any[]>([]);
  const hasRestoredSortStateForFirstTime = useRef<boolean>(false);

  // Hooks
  const showErrorDialog = useShowErrorDialog();
  const [fetchTotalRows, cancelFetchTotalRows] = useNetworkRequest(
    ConnectionProvider.getHandler().searchCount,
  );
  const [searchForTree, cancelSearchForTree] = useNetworkRequest(
    ConnectionProvider.getHandler().searchForTree,
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

  const changeSelectedRowItems = useCallback(
    (newSelectedRowItems: any[]) => {
      setSelectedRowItems?.(newSelectedRowItems);
      onChangeSelectedRowKeysProps?.(
        newSelectedRowItems.map((item) => item.id),
      );
    },
    [onChangeSelectedRowKeysProps, setSelectedRowItems],
  );

  const refresh = useCallback(async () => {
    changeSelectedRowItems([]);
    currentSearchParamsString.current = undefined;
    await updateTotalRows();
    tableRef?.current?.refresh();
  }, [changeSelectedRowItems, tableRef, updateTotalRows]);

  // Event handlers
  const onChangeSelectedRowKeys = useCallback(
    (newSelectedRowKeys: number[]) => {
      setSelectedRowItems?.(newSelectedRowKeys.map((id: number) => ({ id })));
      onChangeSelectedRowKeysProps?.(newSelectedRowKeys);
    },
    [onChangeSelectedRowKeysProps, setSelectedRowItems],
  );

  const onGetFirstVisibleRowIndex = useCallback(() => {
    return treeFirstVisibleRow;
  }, [treeFirstVisibleRow]);

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
    changeSelectedRowItems([]);
    tableRef.current?.unselectAll();
    setSearchTreeNameSearch?.(undefined);
    setSearchParams?.([]);
    setSearchValues?.(undefined);
  }, [
    changeSelectedRowItems,
    tableRef,
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
      changeSelectedRowItems([]);
      tableRef.current?.unselectAll();
      setSearchTreeNameSearch?.(undefined);
      setSearchParams?.(params);
      setSearchValues?.(values);
      setSearchVisible?.(false);
    },
    [
      changeSelectedRowItems,
      tableRef,
      setSearchTreeNameSearch,
      setSearchParams,
      setSearchValues,
      setSearchVisible,
    ],
  );

  // Effects
  useEffect(() => {
    updateTotalRows();
    return () => {
      cancelFetchTotalRows();
      cancelSearchForTree();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!treeOoui || !treeView) {
      return;
    }
    fetchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treeView, treeOoui, pageSize, currentPage]);

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
    if (!treeOoui) {
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
    if (!hasRestoredSortStateForFirstTime.current && actionViewSortState) {
      hasRestoredSortStateForFirstTime.current = true;
      const sortFields = getSortedFieldsFromState({
        state: actionViewSortState,
      });
      order = getOrderFromSortFields(sortFields);
    } else {
      // const stateWithSortData = state
      //   ?.filter((column) => column.sort || column.sortIndex)
      //   .map((column) => ({
      //     sort: column.sort || undefined,
      //     sortIndex: column.sortIndex || undefined,
      //     colId: column.colId,
      //   }));
      // const finalStateWithSortData =
      //   stateWithSortData && stateWithSortData?.length > 0
      //     ? stateWithSortData
      //     : undefined;
      // const sortFields = getSortedFieldsFromState({
      //   state: finalStateWithSortData,
      // });
      // setActionViewSortState?.(finalStateWithSortData);
      // order = getOrderFromSortFields(sortFields);
    }

    const params = nameSearch ? domain : mergedParams;

    const { results, attrsEvaluated } = await searchForTree({
      params,
      limit: pageSize ?? DEFAULT_PAGE_SIZE,
      offset: ((currentPage ?? 1) - 1) * (pageSize ?? DEFAULT_PAGE_SIZE),
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

    setTreeIsLoading(false);
    lastAssignedResults.current = [...preparedResults];
    setResults([...preparedResults]);
  }, [
    actionViewResults,
    actionViewSortState,
    context,
    currentPage,
    domain,
    mergedParams,
    model,
    mustUpdateTotal,
    nameSearch,
    pageSize,
    searchForTree,
    setActionViewResults,
    setSearchQuery,
    setTotalItemsActionView,
    setTreeIsLoading,
    treeOoui,
    treeView,
  ]);

  const onPageSizeChange = useCallback(
    (pageSize: number) => {
      setPageSize(pageSize);
    },
    [setPageSize],
  );

  const onRequestPageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [setCurrentPage],
  );

  return {
    fetchResults,
    results,
    nameSearch,
    isActive,
    searchVisible,
    searchValues,
    searchTreeNameSearch,
    mergedParams,
    totalRowsLoading,
    totalRows,
    updateTotalRows,
    selectedRowKeys,
    onGetFirstVisibleRowIndex,
    refresh,
    onRowStyle,
    onRowStatus,
    setTreeFirstVisibleRow,
    onChangeSelectedRowKeys,
    onSearchFilterClear,
    onSearchFilterSubmit,
    onSideSearchFilterClose,
    onSideSearchFilterSubmit,
    onPageSizeChange,
    onRequestPageChange,
  };
};
