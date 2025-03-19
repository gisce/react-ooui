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
import { useNetworkRequest } from "../../../../../hooks/useNetworkRequest";
import { ConnectionProvider, TreeView } from "../../../../..";
import { useShowErrorDialog } from "@/ui/GenericErrorDialog";
import { useDeepCompareEffect } from "use-deep-compare";
import deepEqual from "deep-equal";
import {
  getTableItems,
  getSortedFieldsFromState,
  getOrderFromSortFields,
} from "@/helpers/treeHelper";
import { Tree as TreeOoui } from "@gisce/ooui";
import { getKey } from "@/helpers/tree-columnStorageHelper";
import { useTreeColumnStorageFetch } from "@/widgets/base/one2many/useTreeColumnStorageFetch";
import { useTreeFunctionFieldsRead } from "@/hooks/useTreeFunctionFieldsRead";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import {
  getAttributesConditionsFromOoui,
  useTreeAttributesState,
} from "@/hooks/useTreeAttributesState";
import { useAutorefreshableTreeFields } from "@/hooks/useAutorefreshableTreeFields";
import { TreeType } from "@/views/actionViews/TreeActionView";
import { useConfigContext } from "@/context/ConfigContext";
export const DEFAULT_PAGE_SIZE = DEFAULT_SEARCH_LIMIT;

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
  onChangeTreeType?: (type: TreeType) => void;
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
    onChangeTreeType,
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
    results: actionViewResults,
    setSearchQuery,
    setTotalItems: setTotalItemsActionView,
    isActive,
    currentPage,
    setCurrentPage,
    order: actionViewOrder,
    setOrder: setActionViewOrder,
    limit: limitActionView,
    setLimit,
  } = useSearchTreeState({ useLocalState: !rootTree });

  const { treeMaxLimit } = useConfigContext();
  const limit = Math.min(limitActionView, treeMaxLimit);

  // Local state
  const [totalRowsLoading, setTotalRowsLoading] = useState<boolean>(true);
  const [totalRows, setTotalRows] = useState<number | null>();
  const [results, setResults] = useState<any[]>([]);
  const [nameSearchFetchCompleted, setNameSearchFetchCompleted] =
    useState<boolean>(false);

  // Refs
  const nameSearch = nameSearchProps || searchTreeNameSearch;
  const prevNameSearch = useRef(nameSearch);
  const prevSearchParamsRef = useRef(searchParams);
  const prevSearchVisibleRef = useRef(searchVisible);
  const currentSearchParamsString = useRef<string>();
  const lastAssignedResults = useRef<any[]>([]);
  const fetchInProgress = useRef<boolean>(false);

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

  const onFunctionFieldsUpdated = useCallback((updatedResults: any[]) => {
    lastAssignedResults.current = lastAssignedResults.current.map((result) => {
      const updatedResult = updatedResults.find((r) => r.id === result.id);
      return { ...result, ...updatedResult };
    });
    setResults((prevResults) => {
      return prevResults.map((result) => {
        const updatedResult = updatedResults.find((r) => r.id === result.id);
        return { ...result, ...updatedResult };
      });
    });
  }, []);

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
  } = useTreeFunctionFieldsRead({
    model,
    treeView,
    tableRef,
    context,
    isActive,
    onResultsUpdated: onFunctionFieldsUpdated,
    treeOoui,
    updateAttributes,
    results: actionViewResults,
  });

  // Setup auto-refresh fields
  const { clear: clearAutorefreshableFields } = useAutorefreshableTreeFields({
    model,
    tableRef,
    autorefreshableFields: treeOoui?.autorefreshableFields,
    treeView,
    context,
    isActive,
    treeOoui,
    updateAttributes,
    results: actionViewResults,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRowStatus = useCallback(
    (record: any) => statusForResults.current?.[record.id],
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // Skip if nameSearch hasn't actually changed
    if (nameSearch === prevNameSearch.current) {
      return;
    }

    // Only trigger a refresh when nameSearch actually changes
    if (
      (nameSearch !== undefined && prevNameSearch.current === undefined) ||
      (typeof nameSearch === "string" &&
        typeof prevNameSearch.current === "string" &&
        nameSearch !== prevNameSearch.current)
    ) {
      // Reset search params and values
      setSearchParams?.([]);
      setSearchValues?.({});
      tableRef.current?.unselectAll();

      // Update the ref before processing to prevent duplicate refreshes
      prevNameSearch.current = nameSearch;
      return;
    }

    // If nameSearch was cleared (changed from a value to undefined)
    if (nameSearch === undefined && prevNameSearch.current !== undefined) {
      // Set loading state first thing
      setTotalRowsLoading(true);
    }

    // Update the ref after processing
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

    // Check if a fetch is already in progress to avoid simultaneous calls
    if (fetchInProgress.current) {
      return [];
    }

    // Set the semaphore to true
    fetchInProgress.current = true;

    try {
      setTreeIsLoading(true);

      let order;
      if (actionViewOrder?.length) {
        const sortFields = getSortedFieldsFromState({
          state: actionViewOrder,
        });
        order = getOrderFromSortFields(sortFields);
      }

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
        skipFunctionFields: SHOULD_MAKE_DEFERRED_FUNCTION_READ,
        onIdsRetrieved: (ids: number[]) => {
          addRecordsToCheckFunctionFields(ids);
        },
      });

      setSearchQuery?.({
        model,
        params,
        name_search: nameSearch,
        context,
      });

      setActionViewResults?.(results);

      if (nameSearch) {
        setTotalRows(results.length);
        setTotalItemsActionView(results.length);
        setNameSearchFetchCompleted(true);
        setTotalRowsLoading(false);
      } else {
        setNameSearchFetchCompleted(false);
      }

      if (!nameSearch && mustUpdateTotal()) {
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
      updateAttributes(attrsEvaluated, treeOoui);

      setTreeIsLoading(false);
      lastAssignedResults.current = [...preparedResults];
      setResults([...preparedResults]);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      fetchInProgress.current = false;
    }
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
    onHasFunctionFieldsToParseConditions,
    setSearchQuery,
    setActionViewResults,
    mustUpdateTotal,
    updateAttributes,
    addRecordsToCheckFunctionFields,
    setTotalItemsActionView,
    updateTotalRows,
  ]);

  const refresh = useCallback(async () => {
    clearAttributes();
    clearAutorefreshableFields();
    setTotalRowsLoading(true);
    setTreeFirstVisibleRow(0);
    fetchColumnState();
    setSelectedRowItems([]);
    currentSearchParamsString.current = undefined;

    // Only refresh function fields if we're not doing a name search
    // This prevents clearing the function field state when we need it
    if (!nameSearch) {
      refreshFunctionFields();
    }

    await fetchResults();
  }, [
    clearAttributes,
    clearAutorefreshableFields,
    setTreeFirstVisibleRow,
    fetchColumnState,
    setSelectedRowItems,
    nameSearch,
    fetchResults,
    refreshFunctionFields,
  ]);

  const onRequestPageChange = useCallback(
    (page: number, pageSize?: number) => {
      if (pageSize === -1) {
        onChangeTreeType?.("infinite");
        return;
      }
      setTreeFirstVisibleRow(0);
      setTreeFirstVisibleColumn(undefined);
      setSelectedRowItems([]);
      setCurrentPage(page);
      pageSize && setLimit(pageSize);
    },
    [
      onChangeTreeType,
      setCurrentPage,
      setLimit,
      setSelectedRowItems,
      setTreeFirstVisibleColumn,
      setTreeFirstVisibleRow,
    ],
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

  const onSortChange = useCallback(
    (state: any) => {
      setActionViewOrder(state);
      setTreeFirstVisibleRow(0);
      setTreeFirstVisibleColumn(undefined);
      setCurrentPage(1);
    },
    [
      setActionViewOrder,
      setCurrentPage,
      setTreeFirstVisibleColumn,
      setTreeFirstVisibleRow,
    ],
  );

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
    onSortChange,
    isFieldLoading,
    setSearchVisible,
    nameSearchFetchCompleted,
    nameSearch,
  };
};
