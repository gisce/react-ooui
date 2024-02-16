import { mergeParams } from "@/helpers/searchHelper";
import {
  getColorMap,
  getStatusMap,
  getTableItems,
  getTree,
  sortResults,
} from "@/helpers/treeHelper";
import { useState, useCallback, useRef } from "react";
import { ConnectionProvider, FormView, TreeView } from "..";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";

type UseSearchOpts = {
  model: string;
  setSearchTreeNameSearch?: (searchString?: string) => void;
  setSelectedRowItems?: (value: any[]) => void;
  searchParams?: any[];
  setSearchParams?: (value: any[]) => void;
  setSearchVisible?: (value: boolean) => void;
  setTreeIsLoading?: (value: boolean) => void;
  nameSearch?: string;
  searchNameGetDoneRef?: any;
  context?: any;
  setActionViewTotalItems?: (totalItems: number) => void;
  formView: FormView;
  treeView: TreeView;
  sorter: any;
  setSorter?: (sorter: any) => void;
  setCurrentItemIndex?: (value?: number) => void;
  setResultsActionView?: (value: any[]) => void;
  resultsActionView?: any[];
  domain: any;
  currentId?: number;
  limit?: number;
  setLimit?: (value: number) => void;
  setSearchValues?: (value: any) => void;
  clearSelection?: () => void;
};

export const useSearch = (opts: UseSearchOpts) => {
  const {
    model,
    setSearchTreeNameSearch,
    setSelectedRowItems,
    setSearchParams,
    setSearchVisible,
    setTreeIsLoading,
    nameSearch,
    searchNameGetDoneRef,
    context,
    setActionViewTotalItems,
    treeView,
    formView,
    sorter,
    setSorter,
    setCurrentItemIndex,
    setResultsActionView,
    resultsActionView,
    domain,
    currentId,
    limit,
    setLimit,
    searchParams = [],
    setSearchValues,
    clearSelection,
  } = opts;

  const [tableRefreshing, setTableRefreshing] = useState<boolean>(false);
  const [searchFilterLoading, setSearchFilterLoading] =
    useState<boolean>(false);
  const [searchError, setSearchError] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>();
  const [resultsInternal, setResultsInternal] = useState<any>([]);
  const [colorsForResults, setColorsForResults] = useState<any>(undefined);
  const [statusForResults, setStatusForResults] = useState<any>(undefined);
  const internalLimit = useRef(limit || DEFAULT_SEARCH_LIMIT);

  const originalResults = useRef<any[]>([]);

  const setResults = useCallback(
    (results: any) => {
      setResultsActionView?.([...results]);
      setResultsInternal([...results]);
    },
    [setResultsActionView],
  );

  const getResults = useCallback(() => {
    if (!resultsActionView) {
      return resultsInternal;
    }
    return resultsActionView;
  }, [resultsActionView, resultsInternal]);

  const searchByNameSearch = useCallback(async () => {
    const searchResults = await ConnectionProvider.getHandler().nameSearch({
      model,
      payload: nameSearch,
      limit: internalLimit.current,
      attrs: domain,
      context,
    });

    setTotalItems(searchResults.length);
    setActionViewTotalItems?.(searchResults.length);

    if (searchResults.length > 0) {
      const resultsIds = searchResults.map((item: any) => {
        return item?.[0];
      });

      const { colors, status } = getTree(treeView!);
      const attrs: any = {};
      if (colors) {
        attrs.colors = colors;
      }
      if (status) {
        attrs.status = status;
      }

      const resultsWithData =
        await ConnectionProvider.getHandler().readEvalUiObjects({
          model,
          ids: resultsIds,
          arch: treeView?.arch!,
          fields: treeView!.field_parent
            ? { ...treeView!.fields, [treeView!.field_parent]: {} }
            : treeView!.fields,
          context,
          attrs,
        });
      const resultsData = resultsWithData[0];

      originalResults.current = [...resultsData];

      setColorsForResults(getColorMap(resultsWithData[1]));
      setStatusForResults(getStatusMap(resultsWithData[1]));

      const newResultIds = resultsData.map((item: any) => item.id);

      const resultsSorted =
        sorter !== undefined
          ? sortResults({
              resultsToSort: resultsData,
              sorter,
              fields: { ...treeView!.fields, ...formView!.fields },
            })
          : [...originalResults.current];

      setResults(resultsSorted);

      if (newResultIds.length > 0) {
        setCurrentItemIndex?.(0);
      } else {
        setCurrentItemIndex?.(undefined);
      }
    } else {
      setResults([]);
      setCurrentItemIndex?.(undefined);
    }
    setTableRefreshing(false);
    searchNameGetDoneRef.current = true;
  }, [
    setResults,
    searchNameGetDoneRef,
    nameSearch,
    model,
    context,
    domain,
    treeView,
    formView,
    sorter,
    setCurrentItemIndex,
    setActionViewTotalItems,
  ]);

  const searchResults = useCallback(
    async (opts?: { params: any; newOffset?: number }) => {
      const { params, newOffset } = opts || {};

      const mergedParams = mergeParams(params || searchParams, domain);
      const { colors, status } = getTree(treeView!);
      const attrs: any = {};
      if (colors) {
        attrs.colors = colors;
      }
      if (status) {
        attrs.status = status;
      }

      const { totalItems, results, attrsEvaluated } =
        await ConnectionProvider.getHandler().searchForTree({
          params: mergedParams,
          limit: internalLimit.current,
          offset: newOffset || offset,
          model,
          fields: treeView!.field_parent
            ? { ...treeView!.fields, [treeView!.field_parent]: {} }
            : treeView!.fields,
          context,
          attrs,
        });
      setColorsForResults(getColorMap(attrsEvaluated));
      setStatusForResults(getStatusMap(attrsEvaluated));

      originalResults.current = [...results];

      const resultsSorted =
        sorter !== undefined
          ? sortResults({
              resultsToSort: results,
              sorter,
              fields: { ...treeView!.fields, ...formView!.fields },
            })
          : [...originalResults.current];

      setResults(resultsSorted);

      if (resultsActionView && resultsSorted.length > 0) {
        const newCurrentItemIndex = resultsSorted.findIndex(
          (item) => currentId === item.id,
        );

        if (newCurrentItemIndex === -1) {
          setCurrentItemIndex?.(0);
        } else {
          setCurrentItemIndex?.(newCurrentItemIndex);
        }
      } else {
        setCurrentItemIndex?.(undefined);
      }
      setTableRefreshing(false);

      const totalItemsValue = await totalItems;

      setTotalItems(totalItemsValue);
      setActionViewTotalItems?.(totalItemsValue);
    },
    [
      setCurrentItemIndex,
      resultsActionView,
      setResults,
      currentId,
      model,
      context,
      domain,
      treeView,
      formView,
      sorter,
      setActionViewTotalItems,
      offset,
      searchParams,
    ],
  );

  const fetchResults = useCallback(
    async (opts?: { params: any; newOffset?: number }) => {
      try {
        setTableRefreshing(true);
        setTreeIsLoading?.(true);
        if (nameSearch && !searchNameGetDoneRef.current) {
          await searchByNameSearch();
        } else {
          await searchResults(opts);
        }
        clearSelection?.();
      } catch (error) {
        setSearchError(typeof error === "string" ? error : error.message);
        setTableRefreshing(false);
      } finally {
        setSelectedRowItems?.([]);
        setSearchFilterLoading(false);
        setTreeIsLoading?.(false);
      }
    },
    [
      clearSelection,
      nameSearch,
      searchByNameSearch,
      searchNameGetDoneRef,
      searchResults,
      setSelectedRowItems,
      setTreeIsLoading,
    ],
  );

  const changeSort = useCallback(
    (newSorter: any) => {
      if (JSON.stringify(newSorter) === JSON.stringify(sorter)) return;
      setSorter?.(newSorter);
      const sortedResults =
        newSorter !== undefined
          ? sortResults({
              resultsToSort: getResults(),
              sorter: newSorter,
              fields: { ...treeView.fields, ...formView.fields },
            })
          : [...originalResults.current];
      setResults(sortedResults);
    },
    [
      sorter,
      setSorter,
      getResults,
      treeView?.fields,
      formView?.fields,
      setResults,
    ],
  );

  const submit = useCallback(
    (opts: {
      params: any;
      limit: number;
      offset: number;
      searchValues: any;
    }) => {
      const { params, searchValues, limit: newLimit, offset: newOffset } = opts;

      if (tableRefreshing) return;
      setSearchTreeNameSearch?.(undefined);
      setSelectedRowItems?.([]);
      setSearchValues?.(searchValues);
      setSearchParams?.(params);
      setSearchVisible?.(false);
      setSearchFilterLoading(true);
      setSearchError(undefined);
      setPage(1);

      if (newLimit) {
        internalLimit.current = newLimit;
        setLimit?.(newLimit);
      }
      if (newOffset) setOffset(newOffset);
      fetchResults({
        params,
        newOffset,
      });
    },
    [
      tableRefreshing,
      setSearchTreeNameSearch,
      setSelectedRowItems,
      setSearchValues,
      setSearchParams,
      setSearchVisible,
      fetchResults,
      setLimit,
    ],
  );

  const requestPageChange = useCallback(
    (page: number) => {
      setTableRefreshing(true);
      setPage(page);
      setOffset((page - 1) * limit!);
    },
    [setTableRefreshing, limit, setOffset, setPage],
  );

  const clear = useCallback(() => {
    if (tableRefreshing) return;
    setSearchTreeNameSearch?.(undefined);
    setSearchParams?.([]);
    setSearchValues?.({});
    setSearchError(undefined);
    setOffset(0);
    setPage(1);
    setLimit?.(limit || DEFAULT_SEARCH_LIMIT);
  }, [
    tableRefreshing,
    setSearchTreeNameSearch,
    setSearchParams,
    setSearchValues,
    setLimit,
    limit,
  ]);

  const fetchChildrenForRecord = useCallback(
    async (record: any) => {
      const child_id = record[treeView?.field_parent || "child_id"];

      const children = await ConnectionProvider.getHandler().readObjects({
        model,
        ids: child_id,
        fields: treeView!.field_parent
          ? { ...treeView!.fields, [treeView!.field_parent]: {} }
          : treeView!.fields,
        context,
      });

      setResults([...getResults(), ...children]);

      return getTableItems(getTree(treeView!), children);
    },
    [treeView, model, context, getResults, setResults],
  );

  const getAllIds = useCallback(async () => {
    return await ConnectionProvider.getHandler().searchAllIds({
      params: mergeParams(searchParams, domain),
      model,
      context,
      totalItems,
    });
  }, [model, context, totalItems, searchParams, domain]);

  return {
    submit,
    clear,
    fetchResults,
    tableRefreshing,
    searchFilterLoading,
    searchError,
    page,
    offset,
    limit: internalLimit.current,
    getResults,
    requestPageChange,
    changeSort,
    fetchChildrenForRecord,
    colorsForResults,
    statusForResults,
    totalItems,
    getAllIds,
  };
};
