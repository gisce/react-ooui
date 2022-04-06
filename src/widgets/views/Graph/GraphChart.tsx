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
  limit: number;
  context: any;
  ooui: GraphChartOoui;
};

export const GraphChart = (props: GraphChartProps) => {
  const { model, domain, context, ooui, limit } = props;

  const { loading, error, graphProps } = useGraphData({
    model,
    domain,
    context,
    limit,
    ooui,
  });

  if (error) {
    return <Alert message={JSON.stringify(error)} type="error" banner />;
  }

  if (loading || graphProps?.data === undefined) {
    return (
      <div style={{ padding: "1rem" }}>
        <LoadingOutlined style={{ height: "12px" }} />
      </div>
    );
  }

  const Chart = (types as any)[ooui.type!];

  return (
    <div style={{ padding: "1rem" }}>
      <Chart {...graphProps} />
    </div>
  );
};
