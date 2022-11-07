import { mergeParams } from "@/helpers/searchHelper";
import {
  getColorMap,
  getTableItems,
  getTree,
  sortResults,
} from "@/helpers/treeHelper";
import { useState, useCallback, useRef } from "react";
import { ConnectionProvider, FormView, TreeView } from "..";

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
};

export const DEFAULT_SEARCH_LIMIT = 80;

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
  const internalLimit = useRef(limit || DEFAULT_SEARCH_LIMIT);

  const originalResults = useRef<any[]>([]);

  const setResults = useCallback((results: any) => {
    setResultsActionView?.([...results]);
    setResultsInternal([...results]);
  }, []);

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

      const { colors } = getTree(treeView!);

      const resultsWithData =
        await ConnectionProvider.getHandler().readEvalUiObjects({
          model,
          ids: resultsIds,
          arch: treeView?.arch!,
          fields: treeView!.field_parent
            ? { ...treeView!.fields, [treeView!.field_parent]: {} }
            : treeView!.fields,
          context,
          attrs: colors && {
            colors,
          },
        });
      const resultsData = resultsWithData[0];

      originalResults.current = [...resultsData];

      setColorsForResults(getColorMap(resultsWithData[1]));

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
      const { colors } = getTree(treeView!);

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
          attrs: colors && { colors },
        });
      setColorsForResults(getColorMap(attrsEvaluated));

      originalResults.current = [...results];

      const resultsSorted =
        sorter !== undefined
          ? sortResults({
              resultsToSort: results,
              sorter: sorter,
              fields: { ...treeView!.fields, ...formView!.fields },
            })
          : [...originalResults.current];

      setResults(resultsSorted);

      if (resultsActionView && resultsSorted.length > 0) {
        const newCurrentItemIndex = resultsSorted.findIndex(
          (item) => currentId === item.id
        );

        if (newCurrentItemIndex === -1) {
          setCurrentItemIndex?.(0);
        } else {
          setCurrentItemIndex?.(newCurrentItemIndex);
        }
      } else {
        setCurrentItemIndex?.(undefined);
      }

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
      limit,
      offset,
      searchParams,
    ]
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
      } catch (error) {
        setSearchError(error.message);
      } finally {
        setTableRefreshing(false);
        setSearchFilterLoading(false);
        setTreeIsLoading?.(false);
      }
    },
    [
      context,
      currentId,
      domain,
      formView,
      limit,
      model,
      nameSearch,
      offset,
      resultsActionView,
      searchNameGetDoneRef,
      setActionViewTotalItems,
      setCurrentItemIndex,
      setResults,
      setSearchError,
      setSearchFilterLoading,
      setTableRefreshing,
      setTreeIsLoading,
      sorter,
      treeView,
    ]
  );

  const changeSort = useCallback(
    (newSorter: any) => {
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
    [setSorter, getResults, treeView, formView, setResults]
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
      setSearchParams,
      setSearchVisible,
      setSearchFilterLoading,
      setSearchError,
      setPage,
      setLimit,
      setOffset,
      fetchResults,
    ]
  );

  const requestPageChange = useCallback(
    (page: number) => {
      setTableRefreshing(true);
      setPage(page);
      setOffset((page - 1) * limit!);
    },
    [setTableRefreshing, limit, setOffset, setPage]
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
    setSearchError,
    setOffset,
    setPage,
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
    [treeView, model, context, getResults, setResults]
  );

  return {
    submit,
    clear,
    fetchResults,
    tableRefreshing,
    searchFilterLoading,
    searchError,
    page,
    offset,
    limit,
    getResults,
    requestPageChange,
    changeSort,
    fetchChildrenForRecord,
    colorsForResults,
    totalItems,
  };
};
