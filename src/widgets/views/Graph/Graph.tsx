import React, { useState, useEffect } from "react";
import { Graph as GraphOoui } from "@gisce/ooui";
import { LoadingOutlined } from "@ant-design/icons";
import ConnectionProvider from "@/ConnectionProvider";
import { GraphIndicator } from "./GraphIndicator";

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

      const ooui = new GraphOoui(viewData.arch);
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

  if (graphOoui.type === "indicator") {
    return (
      <GraphIndicator
        showPercent={graphOoui.showPercent}
        totalDomain={graphOoui.totalDomain!}
        colorCondition={graphOoui.color}
        model={model}
        context={context}
        domain={domain}
      />
    );
  } else {
    return <>{`Graph ${graphOoui.type} not implemented`}</>;
  }
};
