import React, { useState, useEffect } from "react";
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

export type GraphProps = {
  view_id: number;
  model: string;
  domain: any;
  context: any;
  limit: number;
};

export const Graph = (props: GraphProps) => {
  const { view_id, model, context, domain, limit } = props;
  const [loading, setLoading] = useState(false);
  const [graphOoui, setGraphOoui] = useState<GraphOoui>();
  const [graphXml, setGraphXml] = useState<string>();

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

      setGraphXml(viewData.arch);
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
        />
      );
    }
    default: {
      return <>{`Graph ${graphOoui.type} not implemented`}</>;
    }
  }
};
