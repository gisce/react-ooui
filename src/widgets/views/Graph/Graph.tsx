import React, { useState, useEffect } from "react";
import {
  Graph as GraphOoui,
  parseGraph,
  GraphIndicator as GraphIndicatorOoui,
  GraphChart as GraphChartOoui,
} from "@gisce/ooui";
import { LoadingOutlined } from "@ant-design/icons";
import ConnectionProvider from "@/ConnectionProvider";
import { GraphIndicator } from "./GraphIndicator";
import { GraphChart } from "./GraphChart";

export type GraphProps = {
  view_id: number;
  model: string;
  domain: any;
  context: any;
};

export const Graph = (props: GraphProps) => {
  const { view_id, model, context, domain } = props;
  const [loading, setLoading] = useState(false);
  const [graphOoui, setGraphOoui] = useState<GraphOoui>();

  useEffect(() => {
    fetchData();
  }, [view_id]);

  async function fetchData() {
    setLoading(true);

    try {
      const viewData = await ConnectionProvider.getHandler().getView({
        model,
        id: view_id,
        type: "graph",
        context,
      });

      const graph = parseGraph(viewData.arch);
      setGraphOoui(graph);
    } catch (err) {
      console.error(err);
      return <>{JSON.stringify(err)}</>;
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div style={{ padding: "1rem" }}>
        <LoadingOutlined style={{ height: "12px" }} />
      </div>
    );
  }

  if (!graphOoui) {
    return null;
  }

  switch (graphOoui.type) {
    case "indicator": {
      const indicator = graphOoui as GraphIndicatorOoui;
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
        />
      );
    }
    case "line":
    case "bar":
    case "pie": {
      const graphChart = graphOoui as GraphChartOoui;
      return (
        <GraphChart
          model={model}
          context={context}
          domain={domain}
          ooui={graphChart}
        />
      );
    }
    default: {
      return <>{`Graph ${graphOoui.type} not implemented`}</>;
    }
  }
};
