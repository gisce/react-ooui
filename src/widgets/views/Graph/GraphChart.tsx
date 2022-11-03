import React, { useContext } from "react";
import { Line, Column, Pie } from "@ant-design/plots";
import GraphDefaults from "./GraphDefaults";
import { useGraphData } from "./useGraphData";
import { Alert, Spin } from "antd";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

const types = {
  line: Line,
  bar: Column,
  pie: Pie,
};

export type GraphChartProps = {
  model: string;
  domain: any;
  context: any;
  xml: string;
  limit?: number;
  manualIds?: number[];
};

export const GraphChart = (props: GraphChartProps) => {
  const { model, domain, context, xml, limit, manualIds } = props;
  const { t } = useContext(LocaleContext) as LocaleContextType;

  const { error, loading, values, type, evaluatedEntries } = useGraphData({
    model,
    xml,
    limit,
    domain,
    context,
    uninformedString: t("uninformed"),
    manualIds,
  });

  if (error) {
    return <Alert message={error} type="error" banner />;
  }

  if (loading) {
    return <Spin />;
  }

  if (!values) {
    return <Alert message="No data to display" type="info" />;
  }

  const { data, isGroup, isStack } = values;

  const Chart = (types as any)[type!];

  if (!Chart) {
    return <>{`Unknown graph type: ${type}`}</>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <p style={{ textAlign: "right" }}>
        {`${t("totalRegisters")} ${evaluatedEntries?.length}`}
      </p>
      <Chart
        {...getGraphProps({
          type,
          data,
          isGroup,
          isStack,
        })}
      />
    </div>
  );
};

type GetGraphPropsType = {
  type: string;
  isStack: boolean;
  isGroup: boolean;
  data: any[];
};

function getGraphProps(props: GetGraphPropsType) {
  const { type, data, isGroup, isStack } = props;
  let graphProps = (GraphDefaults as any)[type];

  if (!graphProps) {
    graphProps = (GraphDefaults as any)["default"];
  }

  graphProps.data = data;

  if (type === "pie") {
    graphProps.colorField = "x";
    graphProps.angleField = "value";
  } else {
    graphProps.xField = "x";
    graphProps.yField = "value";
    graphProps.seriesField = "type";

    graphProps.isGroup = isGroup;

    if (isStack) {
      graphProps.isStack = true;
      graphProps.groupField = "stacked";
    }
  }

  return graphProps;
}
