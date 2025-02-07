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
import { ConnectionProvider } from "..";
import { useShowErrorDialog } from "@/ui/GenericErrorDialog";
import { useDeepCompareEffect } from "use-deep-compare";
import deepEqual from "deep-equal";

export type PaginatedSearchProps = {
  model: string;
  rootTree?: boolean;
  nameSearchProps?: string;
  tableRef: React.RefObject<PaginatedTableRef>;
  domain?: any;
  context?: any;
  filterType?: "side" | "top";
  onChangeSelectedRowKeys?: (selectedRowKeys: any) => void;
};

export const usePaginatedSearch = (props: PaginatedSearchProps) => {
  const {
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
  } = useSearchTreeState({ useLocalState: !rootTree });

  // Local state
  const [totalRowsLoading, setTotalRowsLoading] = useState<boolean>(true);
  const [totalRows, setTotalRows] = useState<number | null>();

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
    domain,
    mergedParams,
    model,
    nameSearch,
    context,
    setTotalItemsActionView,
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
  }, [changeSelectedRowItems, updateTotalRows]);

  const fetchResults = () => {};

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

  // Effects
  useEffect(() => {
    updateTotalRows();
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

  return {
    fetchResults,
    nameSearch,
    isActive,
    searchVisible,
    searchParams,
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
  };
};
