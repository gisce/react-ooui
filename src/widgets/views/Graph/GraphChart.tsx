import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { GraphChart as GraphChartOoui } from "@gisce/ooui";
import { Line, Column, Pie } from "@ant-design/plots";
import useGraphData from "./useGraphData";
import { Alert } from "antd";

const types = {
  line: Line,
  bar: Column,
  pie: Pie,
};

export type GraphChartProps = {
  model: string;
  domain: any;
  context: any;
  ooui: GraphChartOoui;
  limit: number;
};

export const GraphChart = (props: GraphChartProps) => {
  const { model, domain, context, ooui, limit, } = props;
  const { data, loading, error, yLabel } = useGraphData({
    model,
    domain,
    context,
    limit,
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

  const Chart = (types as any)[ooui.type!];

  let config = {};

  if (ooui.type === "pie") {
    config = {
      appendPadding: 10,
      data,
      angleField: yLabel,
      colorField: ooui.x!.name,
      radius: 0.9,
      label: {
        type: "inner",
        offset: "-30%",
        content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
        style: {
          fontSize: 14,
          textAlign: "center",
        },
      },
      interactions: [
        {
          type: "element-active",
        },
      ],
    };
  } else {
    config = {
      data,
      padding: "auto",
      xField: ooui.x!.name,
      yField: yLabel,
      xAxis: {
        tickCount: 5,
      },
    };
  }

  return (
    <div style={{ padding: "1rem" }}>
      <Chart {...config} />
    </div>
  );
};
