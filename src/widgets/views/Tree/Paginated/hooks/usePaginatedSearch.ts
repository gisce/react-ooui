import { mergeParams } from "@/helpers/searchHelper";
import { useSearchTreeState } from "@/hooks/useSearchTreeState";
import { useActionViewContext } from "@/context/ActionViewContext";
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
import { useErrorNotification } from "@/hooks/useErrorNotification";
import { useDeepCompareEffect } from "use-deep-compare";
import deepEqual from "deep-equal";
import {
  getTableItems,
  getSortedFieldsFromState,
  getOrderFromSortFields,
} from "@/helpers/treeHelper";
import { Tree as TreeOoui } from "@gisce/ooui";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { getAttributesConditionsFromOoui } from "@/hooks/useTreeAttributesState";
import { useTreeSharedHooks } from "@/hooks/useTreeSharedHooks";
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
  updateAttributes?: (attrsEvaluated: any[], treeOoui: TreeOoui) => void;
  clearAttributes?: () => void;
  colorsForResults?: React.MutableRefObject<{ [key: number]: string }>;
  statusForResults?: React.MutableRefObject<{ [key: number]: string }>;
  disablePagination?: boolean;
  autoRefresh?: number;
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
    updateAttributes,
    clearAttributes,
    colorsForResults,
    statusForResults,
    disablePagination = false,
    autoRefresh,
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
  const { setCurrentSavedSearch } = useActionViewContext();
  const limit = disablePagination ? 0 : Math.min(limitActionView, treeMaxLimit);

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

  const [parseConditions, cancelParseConditions] = useNetworkRequest(
    ConnectionProvider.getHandler().parseConditions,
  );

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
    isFieldLoading,
    refreshFunctionFields,
    clearAutorefreshableFields,
    addRecordsToCheckFunctionFields,
    onHasFunctionFieldsToParseConditions,
    shouldMakeDeferredFunctionRead,
  } = useTreeSharedHooks({
    model,
    treeView,
    tableRef,
    context,
    isActive,
    onResultsUpdated: onFunctionFieldsUpdated,
    treeOoui,
    updateAttributes,
    results: actionViewResults,
    autoRefresh,
  });

  // Hooks
  const { showErrorNotification } = useErrorNotification();
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
      showErrorNotification(err);
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
    showErrorNotification,
  ]);

  // Event handlers
  const onGetFirstVisibleRowIndex = useCallback(() => {
    return treeFirstVisibleRow;
  }, [treeFirstVisibleRow]);

  const onGetFirstVisibleColumn = useCallback(() => {
    return treeFirstVisibleColumn;
  }, [treeFirstVisibleColumn]);

  const onRowStyle = useCallback((item: Record<string, any>): CSSProperties => {
    if (colorsForResults?.current?.[item.node?.data?.id]) {
      return { color: colorsForResults.current[item.node?.data?.id] };
    }
    return {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRowStatus = useCallback(
    (record: any) => statusForResults?.current?.[record.id],
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

      const attrs = getAttributesConditionsFromOoui({
        treeOoui,
        hasFunctionFieldsToParseConditions:
          shouldMakeDeferredFunctionRead &&
          onHasFunctionFieldsToParseConditions(),
      });

      if (!nameSearch && mustUpdateTotal()) {
        updateTotalRows();
      }

      const { results, attrsEvaluated } = await searchForTree({
        params,
        limit,
        offset: disablePagination ? 0 : ((currentPage || 1) - 1) * limit,
        model,
        fields: treeView!.field_parent
          ? { ...treeView!.fields, [treeView!.field_parent]: {} }
          : treeView!.fields,
        context,
        attrs,
        order,
        name_search: nameSearch,
        skipFunctionFields: shouldMakeDeferredFunctionRead,
        onIdsRetrieved: (ids: number[]) => {
          if (shouldMakeDeferredFunctionRead) {
            addRecordsToCheckFunctionFields(ids);
          }
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

      if (results.length === 0) {
        lastAssignedResults.current = [];
        setTotalRows(0);
        setTotalItemsActionView(0);
        setResults([]);
        setTreeIsLoading(false);
        return;
      }

      const preparedResults = await getTableItems(treeOoui, results, context);
      updateAttributes?.(attrsEvaluated, treeOoui);

      setTreeIsLoading(false);
      lastAssignedResults.current = [...preparedResults];
      setResults([...preparedResults]);
    } catch (error) {
      setTreeIsLoading(false);
      showErrorNotification(error);
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
    shouldMakeDeferredFunctionRead,
    onHasFunctionFieldsToParseConditions,
    mustUpdateTotal,
    searchForTree,
    limit,
    disablePagination,
    currentPage,
    model,
    treeView,
    context,
    setSearchQuery,
    setActionViewResults,
    updateAttributes,
    updateTotalRows,
    addRecordsToCheckFunctionFields,
    setTotalItemsActionView,
    showErrorNotification,
  ]);

  const refresh = useCallback(async () => {
    clearAttributes?.();
    clearAutorefreshableFields();
    setTotalRowsLoading(true);
    setTreeFirstVisibleRow(0);
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
    setSelectedRowItems,
    nameSearch,
    fetchResults,
    refreshFunctionFields,
  ]);

  const onSideSearchFilterSubmit = useCallback(
    ({ params, values, closeSidebar = true }: any) => {
      setSelectedRowItems([]);
      tableRef.current?.unselectAll();
      setSearchTreeNameSearch?.(undefined);
      setSearchParams?.(params);
      setSearchValues?.(values);
      setSearchVisible?.(!closeSidebar);

      // If keeping sidebar open, manually trigger refresh since the automatic refresh
      // logic depends on the sidebar closing
      if (!closeSidebar) {
        refresh();
      }

      // Clear saved search if applying empty search parameters
      if (!params || params.length === 0) {
        setCurrentSavedSearch?.(null);
      }
    },
    [
      setSelectedRowItems,
      tableRef,
      setSearchTreeNameSearch,
      setSearchParams,
      setSearchValues,
      setSearchVisible,
      setCurrentSavedSearch,
      refresh,
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

  useEffect(() => {
    return () => {
      cancelParseConditions();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const fetchChildrenForRecord = useCallback(
    async (record: any) => {
      const child_id = record[treeView?.field_parent || "child_id"];

      let mergedFields: Record<string, any> = treeView!.field_parent
        ? { ...treeView!.fields, [treeView!.field_parent]: {} }
        : treeView!.fields;

      if (shouldMakeDeferredFunctionRead) {
        // We need here the fields that are not function fields
        mergedFields = Object.entries(mergedFields).reduce(
          (acc: Record<string, any>, [fieldName, fieldValue]) => {
            if (!fieldValue?.is_function) {
              acc[fieldName] = fieldValue;
            }
            return acc;
          },
          {},
        );
      }

      const children = await ConnectionProvider.getHandler().readObjects({
        model,
        ids: child_id,
        fields: mergedFields,
        context,
      });

      const preparedResults = await getTableItems(treeOoui!, children, context);
      const mergedResults = [...results, ...preparedResults];

      const conditions = getAttributesConditionsFromOoui({
        treeOoui,
      });

      try {
        const attrsEvaluated = await parseConditions({
          conditions,
          values: mergedResults,
          context,
        });

        updateAttributes?.(attrsEvaluated, treeOoui!);
        tableRef?.current?.refreshRowStyles();
      } catch (error) {
        console.error(error);
      }

      lastAssignedResults.current = [...mergedResults];
      setResults([...mergedResults]);
      if (shouldMakeDeferredFunctionRead) {
        addRecordsToCheckFunctionFields(children.map((child: any) => child.id));
      }

      return preparedResults;
    },
    [
      treeView,
      shouldMakeDeferredFunctionRead,
      model,
      context,
      treeOoui,
      results,
      addRecordsToCheckFunctionFields,
      parseConditions,
      updateAttributes,
      tableRef,
    ],
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
    fetchChildrenForRecord,
  };
};
