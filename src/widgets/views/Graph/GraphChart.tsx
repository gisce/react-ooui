import { Line, Column, Pie } from "@ant-design/plots";
import GraphDefaults from "./GraphDefaults";
import { useGraphData } from "./useGraphData";
import { Alert, Spin } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import useDeepCompareEffect from "use-deep-compare-effect";

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
  const { t } = useLocale();

  const { error, loading, values, type, evaluatedEntries, fetchData } =
    useGraphData({
      model,
      xml,
      limit,
      domain,
      context,
      uninformedString: t("uninformed"),
      manualIds,
    });

  useDeepCompareEffect(() => {
    fetchData();
  }, [xml, model, limit, context, domain]);

  if (loading) {
    return <Spin />;
  }

  if (!values) {
    return <Alert message="No data to display" type="info" />;
  }

  if (error) {
    return <Alert message={error} type="error" banner />;
  }

  const { data, isGroup, isStack } = values;

  const Chart = (types as any)[type!];

  if (!Chart) {
    return <>{`Unknown graph type: ${type}`}</>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <p style={{ textAlign: "right" }}>
        {`${t("totalRegisters")} ${evaluatedEntries?.length?.toLocaleString(
          "es-ES",
          {
            useGrouping: true,
          },
        )}`}
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
  let graphProps = { ...(GraphDefaults as any)[type] };

  if (!graphProps) {
    graphProps = { ...(GraphDefaults as any)["default"] };
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
