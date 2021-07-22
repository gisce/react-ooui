import React, { useEffect, useState, useRef, useContext } from "react";
import { Alert, Spin } from "antd";
import useDeepCompareEffect from "use-deep-compare-effect";

import SearchFilter from "@/widgets/views/searchFilter/SearchFilter";
import Tree from "@/widgets/views/Tree";
import { FormView, TreeView } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";

import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";

const DEFAULT_SEARCH_LIMIT = 80;

type OnRowClickedData = {
  id: number;
  model: string;
  formView: FormView;
  treeView: TreeView;
};

type Props = {
  action?: string;
  model?: string;
  onRowClicked: (data: OnRowClickedData) => void;
  nameSearch?: string;
  treeScrollY?: number;
  domain?: any;
};

function SearchTree(props: Props) {
  const {
    action,
    model,
    onRowClicked,
    nameSearch,
    treeScrollY,
    domain = [],
  } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [initialFetchDone, setInitialFetchDone] = useState<boolean>(false);
  const [searchNameGetDone, setSearchNameGetDone] = useState<boolean>(false);

  const [currentModel, setCurrentModel] = useState<string>();
  const [treeView, setTreeView] = useState<TreeView>();
  const [formView, setFormView] = useState<FormView>();

  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(DEFAULT_SEARCH_LIMIT);
  const [limitFromAction, setLimitFromAction] = useState<number>();

  const [params, setParams] = useState<Array<any>>([]);

  const [totalItems, setTotalItems] = useState<number>(0);
  const [results, setResults] = useState<any>([]);

  const [searchFilterLoading, setSearchFilterLoading] = useState<boolean>(
    false
  );
  const [searchError, setSearchError] = useState<string>();
  const [initialError, setInitialError] = useState<string>();

  const [tableRefreshing, setTableRefreshing] = useState<boolean>(false);

  const actionDomain = useRef<any>([]);

  const actionViewContext = useContext(
    ActionViewContext
  ) as ActionViewContextType;
  const {
    setTotalItems: setTotalItemsActionView,
    setResults: setResultsActionView,
  } = actionViewContext || {};

  const onRequestPageChange = (page: number) => {
    setTableRefreshing(true);
    setPage(page);
    setOffset((page - 1) * limit!);
  };

  const searchByNameSearch = async () => {
    const searchResults = await ConnectionProvider.getHandler().execute({
      model: currentModel!,
      action: "name_search",
      payload: nameSearch,
    });

    setTotalItems(searchResults.length);
    setTotalItemsActionView?.(searchResults.length);

    if (searchResults.length > 0) {
      const resultsIds = searchResults.map((item: any) => {
        return item?.[0];
      });
      const resultsWithData = await ConnectionProvider.getHandler().readObjects(
        {
          model: currentModel!,
          ids: resultsIds,
          arch: treeView?.arch!,
          fields: treeView?.fields!,
        }
      );
      setResults(resultsWithData);
      setResultsActionView?.(resultsWithData);
    } else {
      setResults([]);
      setResultsActionView?.([]);
    }

    setSearchNameGetDone(true);
  };

  const getUniqueFieldsForParams = (params: any[]) => {
    const uniqueFields: any = {};

    params.forEach((param) => {
      if (Array.isArray(param) && param[0]) {
        uniqueFields[param[0]] = true;
      }
    });

    return Object.keys(uniqueFields);
  };

  const mergeParams = (searchParams: any[], domainParams: any[]) => {
    const finalParams = searchParams;
    const uniqueParams = getUniqueFieldsForParams(searchParams);

    domainParams.forEach((element) => {
      if (Array.isArray(element) && element[0]) {
        if (!uniqueParams.includes(element[0])) {
          finalParams.push(element);
        }
      }
    });

    return finalParams;
  };

  const searchResults = async () => {
    const domainParams =
      actionDomain.current.length > 0 ? actionDomain.current : domain;

    const {
      totalItems,
      results,
    } = await ConnectionProvider.getHandler().search({
      params: mergeParams(params, domainParams),
      limit,
      offset,
      model: currentModel!,
      fields: treeView!.fields,
    });
    setTotalItems(totalItems);
    setTotalItemsActionView?.(totalItems);
    setResults(results);
    setResultsActionView?.(results);
  };

  const fetchResults = async () => {
    try {
      setTableRefreshing(true);
      if (!searchNameGetDone && nameSearch) {
        await searchByNameSearch();
      } else {
        await searchResults();
      }
    } catch (error) {
      setSearchError(error);
    } finally {
      setTableRefreshing(false);
      setSearchFilterLoading(false);
    }
  };

  useDeepCompareEffect(() => {
    if (!initialFetchDone) {
      return;
    }

    fetchResults();
  }, [page, limit, offset, params, initialFetchDone]);

  const fetchData = async (type: "action" | "model") => {
    setInitialFetchDone(false);
    setIsLoading(true);
    setInitialError(undefined);

    try {
      if (type === "action") {
        await fetchActionData();
      } else {
        await fetchModelData();
      }
      setInitialFetchDone(true);
    } catch (error) {
      setInitialError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchActionData = async () => {
    const dataForAction = await ConnectionProvider.getHandler().getViewsForAction(
      {
        action: action!,
      }
    );
    actionDomain.current = dataForAction.domain;
    setFormView(dataForAction.views.get("form"));
    setTreeView(dataForAction.views.get("tree"));
    setCurrentModel(dataForAction.model);
    setLimitFromAction(dataForAction.limit);
    setLimit(dataForAction.limit);
  };

  const fetchModelData = async () => {
    setCurrentModel(model);
    const _formView = await ConnectionProvider.getHandler().getView(
      model!,
      "form"
    );
    const _treeView = await ConnectionProvider.getHandler().getView(
      model!,
      "tree"
    );
    setFormView(_formView as FormView);
    setTreeView(_treeView as TreeView);
    setLimitFromAction(undefined);
    setLimit(DEFAULT_SEARCH_LIMIT);
  };

  useEffect(() => {
    if (action) {
      fetchData("action");
    } else {
      fetchData("model");
    }
  }, [action, model]);

  const onClear = () => {
    if (tableRefreshing) return;
    setSearchError(undefined);
    setParams([]);
    setOffset(0);
    setPage(1);
    setLimit(limitFromAction || DEFAULT_SEARCH_LIMIT);
  };

  const onSubmit = ({
    params: newParams,
    limit: newLimit,
    offset: newOffset,
  }: {
    params: any;
    limit: number;
    offset: number;
  }) => {
    if (tableRefreshing) return;
    setSearchFilterLoading(true);
    setSearchError(undefined);
    setPage(1);
    if (newLimit) setLimit(newLimit);
    if (newOffset) setOffset(newOffset);
    setParams(newParams);
  };

  const onRowClickedHandler = (id: number) => {
    onRowClicked({
      id,
      model: currentModel!,
      formView: formView!,
      treeView: treeView!,
    });
  };

  const content = () => {
    if (!treeView || !formView) {
      return null;
    }

    return (
      <>
        <SearchFilter
          fields={{ ...treeView.fields, ...formView.fields }}
          searchFields={formView.search_fields}
          onClear={onClear}
          limit={limit}
          offset={offset}
          isSearching={searchFilterLoading}
          onSubmit={onSubmit}
        />
        {searchError && (
          <Alert className="mt-10" message={searchError} type="error" banner />
        )}
        <div className="pb-10" />
        <Tree
          total={totalItems}
          limit={limit}
          page={page}
          treeView={treeView}
          results={results}
          onRequestPageChange={onRequestPageChange}
          loading={tableRefreshing}
          onRowClicked={onRowClickedHandler}
          scrollY={treeScrollY}
        />
      </>
    );
  };

  if (initialError) {
    return (
      <Alert className="mt-10" message={initialError} type="error" banner />
    );
  }

  return isLoading ? <Spin /> : content();
}

export default SearchTree;
