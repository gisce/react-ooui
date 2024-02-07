import { useEffect, useState, useRef } from "react";
import { Alert, Spin } from "antd";

import { Tree } from "@/widgets/views/Tree";
import { FormView, TreeView } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";

import { getColorMap, getTree, sortResults } from "@/helpers/treeHelper";
import { mergeParams } from "@/helpers/searchHelper";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";

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

  const [currentModel, setCurrentModel] = useState<string>();
  const [treeView, setTreeView] = useState<TreeView>();
  const [formView, setFormView] = useState<FormView>();

  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);
  const limitRef = useRef<number>(DEFAULT_SEARCH_LIMIT);

  const paramsRef = useRef<any[]>([]);

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

  const searchResults = async () => {
    const domainParams =
      actionDomain.current.length > 0 ? actionDomain.current : domain;

    const searchParams = mergeParams(paramsRef.current, domainParams);
    const { colors } = getTree(treeView!);

    const { totalItems, results, attrsEvaluated } =
      await ConnectionProvider.getHandler().searchForTree({
        params: searchParams,
        limit: limitRef.current,
        offset,
        model: currentModel!,
        fields: treeView!.fields,
        context: parentContext,
        attrs: colors && { colors },
      });
    setColorsForResults(getColorMap(attrsEvaluated));

    const resultsSorted = sortResults({
      resultsToSort: results,
      sorter,
      fields: { ...treeView!.fields, ...formView!.fields },
    });
    setTableRefreshing(false);

    setResults(resultsSorted);
    const totalItemsResult = await totalItems;
    setTotalItems(totalItemsResult);
  };

  const fetchResults = async () => {
    try {
      setTableRefreshing(true);
      await searchResults();
    } catch (error) {
      setSearchError(JSON.stringify(error));
    }
  };

  useEffect(() => {
    if (!initialFetchDone) {
      return;
    }

    if (visible) {
      fetchResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const dataForAction =
      await ConnectionProvider.getHandler().getViewsForAction({
        action: action!,
        context: parentContext,
      });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, model]);

  const onRowClickedHandler = (record: any) => {
    const { id } = record;
    onRowClicked({
      id,
      model: currentModel!,
      treeView: treeView!,
    });
  };

  const content = () => {
    if (!treeView || !formView) {
      return null;
    }

    return (
      <div style={{ overflowY: "scroll" }}>
        {searchError && (
          <Alert className="mt-10" message={searchError} type="error" banner />
        )}
        <Tree
          showPagination={false}
          total={totalItems}
          limit={limitRef.current}
          page={page}
          treeView={treeView}
          results={results}
          onRequestPageChange={onRequestPageChange}
          loading={tableRefreshing}
          onRowClicked={onRowClickedHandler}
          colorsForResults={colorsForResults}
          sorter={sorter}
          onChangeSort={(newSorter) => {
            setSorter?.(newSorter);
            const sortedResults = sortResults({
              resultsToSort: results,
              sorter: newSorter,
              fields: { ...treeView.fields, ...formView.fields },
            });
            setResults(sortedResults);
          }}
          context={parentContext}
        />
      </div>
    );
  };

  if (initialError) {
    return (
      <Alert className="mt-10" message={initialError} type="error" banner />
    );
  }

  return isLoading ? <Spin style={{ padding: "2rem" }} /> : content();
}

export default DashboardTree;
