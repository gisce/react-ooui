import GraphActionBar from "@/actionbar/GraphActionBar";
import TitleHeader from "@/ui/TitleHeader";
import { Graph } from "@/widgets/views/Graph/Graph";
import {
  useContext,
  useEffect,
  useRef,
  useState,
  useMemo,
  CSSProperties,
} from "react";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { FormView, GraphView, TreeView } from "@/types";
import { mergeSearchFields } from "@/helpers/formHelper";
import { useSearch } from "@/hooks/useSearch";
import SearchFilter from "@/widgets/views/searchFilter/SearchFilter";
import { Spin } from "antd";
import { mergeParams } from "@/helpers/searchHelper";
import { GRAPH_DEFAULT_HEIGHT } from "@/widgets/views/Graph/GraphChartComp";
import { useFeatureIsEnabled } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { GraphServer } from "@/widgets/views/Graph/GraphServer";
import { ConnectionProvider } from "@/index";
import {
  useDeepCompareCallback,
  useDeepCompareEffect,
  useDeepCompareMemo,
} from "use-deep-compare";

const CONTENT_CONTAINER_STYLE: CSSProperties = {
  height: "calc(100vh - 80px - 102px)",
  overflow: "auto",
};

export type GraphActionViewProps = {
  viewData: GraphView;
  visible: boolean;
  model: string;
  context: any;
  domain: any;
  formView: FormView;
  treeView: TreeView;
  graphView: GraphView;
};

export const GraphActionView = (props: GraphActionViewProps) => {
  const {
    viewData,
    visible,
    model,
    context,
    domain,
    formView,
    treeView,
    graphView,
  } = props;
  const graphRef = useRef();
  const readForViewEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_READFORVIEW,
  );

  const actionViewContext = useContext(
    ActionViewContext,
  ) as ActionViewContextType;
  const {
    setResults: setResultsActionView = undefined,
    setCurrentItemIndex = undefined,
    currentId = undefined,
    results: resultsActionView = undefined,
    setSelectedRowItems = undefined,
    setSearchParams = undefined,
    searchVisible = true,
    setSearchVisible = undefined,
    sorter = undefined,
    setSorter = undefined,
    setTotalItems: setActionViewTotalItems = undefined,
    setSearchNameSearch = undefined,
    setViewIsLoading = undefined,
    limit,
    setLimit,
    searchParams,
    searchValues,
    setSearchValues,
    currentView,
    totalItems,
    searchNameSearch,
  } = actionViewContext || {};

  const [applyLimit, setApplyLimit] = useState(true);
  const [idsLoading, setIdsLoading] = useState(true);
  const [manualIds, setManualIds] = useState<number[]>();

  useEffect(() => {
    if (visible) {
      setIdsLoading(true);
    }
  }, [visible]);

  const mergedParams = useDeepCompareMemo(
    () => mergeParams(searchParams || [], domain),
    [domain, searchParams],
  );

  const getAllIds = useDeepCompareCallback(async () => {
    if (!visible) {
      return;
    }
    const allRowsResults = await ConnectionProvider.getHandler().searchAllIds({
      params: searchNameSearch ? domain : mergedParams,
      model,
      context,
      totalItems,
    });
    setManualIds(allRowsResults);
  }, [
    visible,
    searchNameSearch,
    domain,
    mergedParams,
    model,
    context,
    totalItems,
  ]);

  const fetchManualIds = useDeepCompareCallback(async () => {
    if (!visible) {
      return;
    }
    setIdsLoading(true);
    if (
      totalItems === undefined ||
      (resultsActionView?.length !== totalItems && totalItems !== undefined)
    ) {
      await getAllIds();
    } else {
      const manualIds =
        applyLimit && resultsActionView && resultsActionView.length > 0
          ? resultsActionView.map((r) => r.id)
          : undefined;
      setManualIds(manualIds);
    }
    setIdsLoading(false);
  }, [visible, totalItems, resultsActionView, getAllIds, applyLimit]);

  useDeepCompareEffect(() => {
    fetchManualIds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    visible,
    searchNameSearch,
    domain,
    mergedParams,
    totalItems,
    applyLimit,
    resultsActionView,
  ]);

  const mustWeApplyLimit = useMemo(() => {
    if (viewData.view_id !== currentView.view_id) {
      return true;
    }
    return false;
  }, [currentView.view_id, viewData.view_id]);

  useEffect(() => {
    if (mustWeApplyLimit) {
      setApplyLimit(true);
    }
  }, [mustWeApplyLimit]);

  const { clear, searchFilterLoading, searchError, offset, tableRefreshing } =
    useSearch({
      model,
      setSearchTreeNameSearch: setSearchNameSearch,
      setSelectedRowItems,
      searchParams,
      setSearchValues,
      setSearchParams,
      setSearchVisible,
      setTreeIsLoading: setViewIsLoading,
      context,
      formView: formView!,
      treeView: treeView!,
      sorter,
      setSorter,
      setCurrentItemIndex,
      setResultsActionView,
      domain,
      currentId,
      setActionViewTotalItems,
      limit,
      setLimit,
    });

  const searchFields = useMemo(
    () =>
      mergeSearchFields([
        formView?.search_fields,
        treeView?.search_fields,
        graphView?.search_fields,
      ]),
    [
      formView?.search_fields,
      treeView?.search_fields,
      graphView?.search_fields,
    ],
  );

  if (!visible) {
    return null;
  }

  if (!viewData) {
    return null;
  }

  const GraphComponent = readForViewEnabled ? GraphServer : Graph;

  return (
    <>
      <TitleHeader title={viewData.title || viewData.name}>
        <GraphActionBar
          refreshGraph={() => {
            fetchManualIds();
          }}
        />
      </TitleHeader>
      <div style={CONTENT_CONTAINER_STYLE}>
        <SearchFilter
          fields={{
            ...treeView?.fields,
            ...formView?.fields,
            ...graphView?.fields,
          }}
          searchFields={searchFields}
          limit={limit!}
          onClear={clear}
          offset={offset}
          isSearching={searchFilterLoading}
          onSubmit={(opts: {
            params: any;
            limit: number;
            offset: number;
            searchValues: any;
          }) => {
            setApplyLimit(false);
            setSearchParams?.(opts.params);
            setSearchVisible?.(false);
          }}
          searchError={searchError}
          searchVisible={searchVisible}
          searchValues={searchValues}
          showLimitOptions={false}
        />
        {tableRefreshing || idsLoading ? (
          <Spin />
        ) : (
          <GraphComponent
            ref={graphRef}
            view_id={viewData.view_id}
            viewData={viewData}
            model={model}
            context={context}
            domain={mergeParams(searchParams || [], domain)}
            limit={applyLimit ? limit : undefined}
            fixedHeight={GRAPH_DEFAULT_HEIGHT}
            manualIds={manualIds}
          />
        )}
      </div>
    </>
  );
};
