import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { GraphLine as GraphLineOoui } from "@gisce/ooui";
import { Line } from "@ant-design/plots";
import useGraphCountData from "./useGraphCountData";
import { Alert } from "antd";

export type GraphInidicatorProps = {
  model: string;
  domain: any;
  context: any;
  ooui: GraphLineOoui;
};

export const GraphLine = (props: GraphInidicatorProps) => {
  const { model, domain, context, ooui } = props;
  const { data, loading, error, yLabel } = useGraphCountData({
    model,
    domain,
    context,
    x: ooui.x!,
    y: ooui.y!,
  });

  if (error) {
    return <Alert message={JSON.stringify(error)} type="error" banner />;
  }

  if (loading || data === undefined) {
    return (
      <div style={{ padding: "1rem" }}>
        <LoadingOutlined style={{ height: "12px" }} />
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <Line
        data={data!}
        padding="auto"
        xField={ooui.x!.name}
        yField={yLabel}
        xAxis={{ tickCount: 5 }}
      />
    </div>
  );
};
