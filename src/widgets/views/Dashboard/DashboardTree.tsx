import { useEffect, useState, useRef, memo, useCallback } from "react";
import { Alert, Spin } from "antd";

import { Tree } from "@/widgets/views/Tree";
import { SearchTreePaginated } from "@/widgets/views/Tree/Paginated/SearchTreePaginated";
import { SearchTreeInfinite } from "@/widgets/views/SearchTreeInfinite";
import { FormView, TreeView } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";

import {
  getColorMap,
  getTree,
  sortResults,
  determineTreeType,
  isTreeExpandable,
} from "@/helpers/treeHelper";
import { mergeParams } from "@/helpers/searchHelper";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { useConfigContext } from "@/context/ConfigContext";
import { useDeepCompareEffect } from "use-deep-compare";
import {
  TreeType,
  DEFAULT_TREE_TYPE,
} from "@/views/actionViews/TreeActionView";

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
  treeExpandable?: boolean;
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
    treeExpandable,
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
  const [treeType, setTreeType] = useState<TreeType>(DEFAULT_TREE_TYPE);

  const actionDomain = useRef<any>([]);
  const { treeMaxLimit } = useConfigContext();

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
    const totalItemsResult = await totalItems();
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
    const treeViewData = dataForAction.views.get("tree");
    // Set isExpandable from treeExpandable prop if available
    if (treeExpandable !== undefined) {
      treeViewData.isExpandable = treeExpandable;
    }
    setTreeView(treeViewData);
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

    // Set isExpandable from treeExpandable prop if available
    if (treeExpandable !== undefined) {
      _treeView.isExpandable = treeExpandable;
    }

    setTreeView(_treeView as TreeView);
  };

  // Determine tree type using shared helper
  useDeepCompareEffect(() => {
    if (!treeView) return;

    const newTreeType = determineTreeType({
      treeView,
      limit: limitRef.current,
      treeMaxLimit,
    });

    setTreeType(newTreeType);
  }, [treeView, treeMaxLimit]);

  useEffect(() => {
    if (action) {
      fetchData("action");
    } else if (model) {
      fetchData("model");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, model]);

  const handleTreeTypeChange = useCallback((newType: TreeType) => {
    setTreeType(newType);
  }, []);

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
    searchError && console.error(searchError);

    return (
      <div style={{ overflowY: "scroll", padding: 4, paddingRight: 12 }}>
        {searchError && (
          <Alert className="mt-10" message={searchError} type="error" banner />
        )}
        {treeType === "infinite" && (
          <SearchTreeInfinite
            hideHeaders={true}
            rootTree={false}
            model={currentModel!}
            parentContext={parentContext}
            formView={formView}
            treeView={treeView}
            domain={domain}
            onRowClicked={onRowClickedHandler}
            onChangeTreeType={
              !isTreeExpandable(treeView) ? handleTreeTypeChange : undefined
            }
          />
        )}
        {treeType === "paginated" && (
          <SearchTreePaginated
            hideHeaders={true}
            rootTree={false}
            model={currentModel!}
            parentContext={parentContext}
            formView={formView}
            treeView={treeView}
            domain={domain}
            onRowClicked={onRowClickedHandler}
            onChangeTreeType={
              !isTreeExpandable(treeView) ? handleTreeTypeChange : undefined
            }
          />
        )}
        {treeType === "legacy" && (
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
        )}
      </div>
    );
  };

  if (initialError) {
    console.error(initialError);
    return (
      <Alert className="mt-10" message={initialError} type="error" banner />
    );
  }

  return isLoading ? <Spin style={{ padding: "2rem" }} /> : content();
}
export default memo(DashboardTree);
