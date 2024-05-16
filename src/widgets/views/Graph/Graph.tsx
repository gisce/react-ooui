import {
  useState,
  useEffect,
  useContext,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  Graph as GraphOoui,
  parseGraph,
  GraphIndicator as GraphIndicatorOoui,
  GraphIndicatorField,
} from "@gisce/ooui";
import ConnectionProvider from "@/ConnectionProvider";
import { GraphIndicator } from "./GraphIndicator";
import { GraphChart } from "./GraphChart";
import { GraphView } from "@/types";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { CenteredSpinner } from "@/ui/CenteredSpinner";

export type GraphProps = {
  view_id: number;
  model: string;
  domain: any;
  context: any;
  limit?: number;
  manualIds?: number[];
};

const GraphComp = (props: GraphProps, ref: any) => {
  const { view_id, model, context, domain, limit, manualIds } = props;
  const [loading, setLoading] = useState(false);
  const [graphOoui, setGraphOoui] = useState<GraphOoui>();
  const [graphXml, setGraphXml] = useState<string>();
  const actionViewContext = useContext(
    ActionViewContext,
  ) as ActionViewContextType;
  const { setGraphIsLoading = undefined } = actionViewContext || {};

  const [getView] = useNetworkRequest(ConnectionProvider.getHandler().getView);

  useImperativeHandle(ref, () => ({
    refresh: () => {
      fetchData();
    },
  }));

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view_id]);

  async function fetchData() {
    setLoading(true);
    setGraphIsLoading?.(true);

    try {
      const viewData = (await getView({
        model,
        id: view_id,
        type: "graph",
        context,
      })) as GraphView;

      setGraphXml(viewData.arch);
      const graph = parseGraph(viewData.arch);
      setGraphOoui(graph);
      setLoading(false);
      setGraphIsLoading?.(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setGraphIsLoading?.(false);
      return <>{JSON.stringify(err)}</>;
    }
  }

  if (loading || !graphOoui) {
    return <CenteredSpinner />;
  }

  switch (graphOoui.type) {
    case "indicatorField":
    case "indicator": {
      const indicator = graphOoui as GraphIndicatorOoui;
      const indicatorFieldopts =
        indicator.type === "indicatorField"
          ? {
              field: (indicator as GraphIndicatorField).field,
              operator: (indicator as GraphIndicatorField).operator,
            }
          : {};

      return (
        <GraphIndicator
          showPercent={indicator.showPercent}
          totalDomain={indicator.totalDomain!}
          colorCondition={indicator.color}
          model={model}
          context={context}
          domain={domain}
          icon={indicator.icon!}
          suffix={indicator.suffix!}
          manualIds={manualIds}
          {...indicatorFieldopts}
        />
      );
    }
    case "line":
    case "bar":
    case "pie": {
      return (
        <GraphChart
          model={model}
          context={context}
          domain={domain}
          xml={graphXml!}
          limit={limit}
          manualIds={manualIds}
        />
      );
    }
    default: {
      return <>{`Graph ${graphOoui.type} not implemented`}</>;
    }
  }
};

export const Graph = forwardRef(GraphComp);
