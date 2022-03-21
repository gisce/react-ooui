import React, { useState, useEffect } from "react";
import {
  parseGraph,
  Graph as GraphOoui,
  GraphIndicator as GraphIndicatorOoui,
  GraphLine as GraphLineOoui,
} from "@gisce/ooui";
import { LoadingOutlined } from "@ant-design/icons";
import ConnectionProvider from "@/ConnectionProvider";
import { GraphIndicator } from "./GraphIndicator";
import { GraphLine } from "./GraphLine";

export type GraphProps = {
  title?: string;
  view_id: number;
  model: string;
  domain: any;
  context: any;
};

export const Graph = (props: GraphProps) => {
  const { view_id, model, context, domain, title } = props;
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

      const ooui = parseGraph(viewData.arch);
      setGraphOoui(ooui);
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
        />
      );
    }
    case "line": {
      const line = graphOoui as GraphLineOoui;
      return (
        <GraphLine
          model={model}
          domain={domain}
          context={context}
          ooui={line}
        />
      );
    }
    default: {
      return <>{`Graph ${graphOoui.type} not implemented`}</>;
    }
  }
};
