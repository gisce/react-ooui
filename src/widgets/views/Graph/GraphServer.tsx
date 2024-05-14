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
import { LoadingOutlined } from "@ant-design/icons";
import ConnectionProvider from "@/ConnectionProvider";
import { GraphIndicator } from "./GraphIndicator";
import { GraphChart } from "./GraphChart";
import { GraphView } from "@/types";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { GraphChartServer } from "./GraphChartServer";
import { Alert } from "antd";
import { GraphResponseIndicator } from "./useServerGraphData";

export type GraphProps = {
  view_id: number;
  model: string;
  domain: any;
  context: any;
  manualIds?: number[];
};

const GraphComp = (props: GraphProps, ref: any) => {
  const { view_id, model, context, domain, manualIds } = props;
  const actionViewContext = useContext(
    ActionViewContext,
  ) as ActionViewContextType;
  const { setGraphIsLoading = undefined } = actionViewContext || {};

  const { error, loading, graphData, fetchData, type } = useServerGraphData({
    view_id,
    model,
    domain,
    context,
    manualIds,
  });

  useImperativeHandle(ref, () => ({
    refresh: () => {
      fetchData();
    },
  }));

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view_id]);

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          height: "20%",
          justifyContent: "center",
          alignContent: "center",
          padding: "1rem",
        }}
      >
        <LoadingOutlined style={{ height: "12px" }} />
      </div>
    );
  }

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  switch (type) {
    case "indicatorField":
    case "indicator": {
      const indicator = graphData as GraphResponseIndicator;

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
        <GraphChartServer
          type={graphOoui.type}
          view_id={view_id}
          model={model}
          context={context}
          domain={domain}
          manualIds={manualIds}
        />
      );
    }
    default: {
      return <>{`Graph ${type} not implemented`}</>;
    }
  }
};

export const Graph = forwardRef(GraphComp);
