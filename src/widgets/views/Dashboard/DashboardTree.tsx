import React, { useEffect, useState, useRef } from "react";
import { Alert, Spin } from "antd";

import Tree from "@/widgets/views/Tree";
import { FormView, TreeView } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";

import { getColorMap, getTree } from "@/helpers/treeHelper";

const DEFAULT_SEARCH_LIMIT = 80;

type OnRowClickedData = {
  id: number;
  model: string;
  treeView: TreeView;
};

type Props = {
  action?: string;
  model?: string;
  view_id?: number;
  onRowClicked: (data: OnRowClickedData) => void;
  domain?: any;
  visible?: boolean;
  parentContext?: any;
};

function DashboardTree(props: Props) {
  const {
    action,
    model,
    view_id,
    onRowClicked,
    domain = [],
    visible = true,
    parentContext = {},
  } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [initialFetchDone, setInitialFetchDone] = useState<boolean>(false);

  const searchNameGetDoneRef = useRef(false);

  const [currentModel, setCurrentModel] = useState<string>();
  const [treeView, setTreeView] = useState<TreeView>();
  const [formView, setFormView] = useState<FormView>();

  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);
  const limitRef = useRef<number>(DEFAULT_SEARCH_LIMIT);

  const paramsRef = useRef<Array<any>>([]);

  const [totalItems, setTotalItems] = useState<number>(0);
  const [results, setResults] = useState<any>([]);
  const [colorsForResults, setColorsForResults] = useState<any>(undefined);
  const [sorter, setSorter] = useState<any>();

  const [searchError, setSearchError] = useState<string>();
  const [initialError, setInitialError] = useState<string>();

  const [tableRefreshing, setTableRefreshing] = useState<boolean>(false);

  const actionDomain = useRef<any>([]);

  const onRequestPageChange = (page: number) => {
    setTableRefreshing(true);
    setPage(page);
    setOffset((page - 1) * limitRef.current!);
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

    const searchParams = mergeParams(paramsRef.current, domainParams);
    const { colors } = getTree(treeView!);

    const {
      totalItems,
      results,
      attrsEvaluated,
    } = await ConnectionProvider.getHandler().searchForTree({
      params: searchParams,
      limit: limitRef.current,
      offset,
      model: currentModel!,
      fields: treeView!.fields,
      context: parentContext,
      attrs: colors && { colors },
    });
    setTotalItems(totalItems);
    setColorsForResults(getColorMap(attrsEvaluated));

    const resultsSorted = sortResults(results, sorter);
    setResults(resultsSorted);
  };

  const fetchResults = async () => {
    try {
      setTableRefreshing(true);
      await searchResults();
    } catch (error) {
      setSearchError(error);
    } finally {
      setTableRefreshing(false);
    }
  };

  useEffect(() => {
    if (!initialFetchDone) {
      return;
    }

    if (visible) {
      searchNameGetDoneRef.current = false;
      fetchResults();
    }
  }, [page, offset, initialFetchDone, visible]);

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
        context: parentContext,
      }
    );
    actionDomain.current = dataForAction.domain;
    setFormView(dataForAction.views.get("form"));
    setTreeView(dataForAction.views.get("tree"));
    setCurrentModel(dataForAction.model);
    limitRef.current = dataForAction.limit;
  };

  const fetchModelData = async () => {
    setCurrentModel(model);

    const _formView = (await ConnectionProvider.getHandler().getView({
      model: model!,
      type: "form",
      context: parentContext,
    })) as FormView;
    setFormView(_formView as FormView);

    const _treeView = (await ConnectionProvider.getHandler().getView({
      model: model!,
      type: "tree",
      id: view_id,
      context: parentContext,
    })) as TreeView;

    setTreeView(_treeView as TreeView);
  };

  useEffect(() => {
    if (action) {
      fetchData("action");
    } else if (model) {
      fetchData("model");
    }
  }, [action, model]);

  const onRowClickedHandler = (id: number) => {
    onRowClicked({
      id,
      model: currentModel!,
      treeView: treeView!,
    });
  };

  function sortResults(resultsToSort: any[], sorter: any) {
    if (!sorter) {
      return resultsToSort;
    }

    const { field, order } = sorter;
    const fields = { ...treeView!.fields, ...formView!.fields };
    const type = fields[field].type;

    const sortFn = (a: any, b: any) => {
      let aItem = a[field] || "",
        bItem = b[field] || "";

      if (type === "many2one") {
        aItem = a[field]?.value || "";
        bItem = b[field]?.value || "";
      }

      if (aItem === bItem) {
        return 0;
      }

      if (order === "ascend") {
        return aItem > bItem ? 1 : -1;
      }

      return aItem < bItem ? 1 : -1;
    };

    return resultsToSort.sort(sortFn);
  }

  const content = () => {
    if (!treeView || !formView) {
      return null;
    }

    return (
      <>
        {searchError && (
          <Alert className="mt-10" message={searchError} type="error" banner />
        )}
        <Tree
          showPagination={false}
          total={totalItems}
          limit={limitRef.current}
          disableScroll
          page={page}
          treeView={treeView}
          results={results}
          onRequestPageChange={onRequestPageChange}
          loading={tableRefreshing}
          onRowClicked={onRowClickedHandler}
          colorsForResults={colorsForResults}
          onChangeSort={(newSorter) => {
            setSorter?.(newSorter);
            const sortedResults = sortResults(results, newSorter);
            setResults(sortedResults);
          }}
        />
      </>
    );
  };

  if (initialError) {
    return (
      <Alert className="mt-10" message={initialError} type="error" banner />
    );
  }

  return (
    <div style={!visible ? { display: "none" } : {}}>
      {isLoading ? <Spin /> : content()}
    </div>
  );
}

export default DashboardTree;
