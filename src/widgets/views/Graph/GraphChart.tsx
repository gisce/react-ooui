import { Line, Column, Pie } from "@ant-design/plots";
import GraphDefaults from "./GraphDefaults";
import { useGraphData } from "./useGraphData";
import { Alert, Spin } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import useDeepCompareEffect from "use-deep-compare-effect";
import { ResizeAwareComp } from "../DashboardGrid/ResizeAwareComp";
import { useState } from "react";

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

  const [mount, setMount] = useState(true);
  const [sizeKey, setSizeKey] = useState("");

  const remountComponent = (width: number, height: number) => {
    setMount(false); // Unmount the component

    setTimeout(() => {
      setSizeKey(`${width}-${height}`); // Update key to force remount
      setMount(true); // Remount the component
    }, 500); // A short delay ensures the component fully unmounts
  };

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        padding: "1rem",
        gap: "10px",
      }}
    >
      <p style={{ textAlign: "right" }}>
        {`${t("totalRegisters")} ${evaluatedEntries?.length?.toLocaleString(
          "es-ES",
          {
            useGrouping: true,
          },
        )}`}
      </p>
      <ResizeAwareComp>
        {({ width, height }) => {
          if (`${width}-${height}` !== sizeKey) {
            remountComponent(width, height);
            return <Spin />;
          }
          if (!mount) {
            return <Spin />;
          }
          return (
            <div style={{ width, height, overflow: "hidden" }}>
              <Chart
                key={sizeKey}
                {...getGraphProps({
                  type,
                  data,
                  isGroup,
                  isStack,
                  width,
                  height,
                })}
              />
            </div>
          );
        }}
      </ResizeAwareComp>
    </div>
  );
};

type GetGraphPropsType = {
  type: string;
  isStack: boolean;
  isGroup: boolean;
  data: any[];
  width?: number;
  height?: number;
};

function getGraphProps(props: GetGraphPropsType) {
  const { type, data, isGroup, isStack, width, height } = props;
  let graphProps = { ...(GraphDefaults as any)[type] };

  if (!graphProps) {
    graphProps = { ...(GraphDefaults as any)["default"] };
  }

  graphProps.data = data;
  graphProps.height = height || 400;
  graphProps.width = width || 800;

  if (type === "pie") {
    // for each entry of data array, we need to calculate which percentage of the total it represents
    // and add it to the data array as a new field
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    data.forEach((entry) => {
      entry.percent = (entry.value / total) * 100;
    });

    graphProps.colorField = "x";
    graphProps.angleField = "value";
    graphProps.legend.itemValue = {
      formatter: (_: unknown, item: any) => {
        const matchedDataEntry = data.find((d) => d.x === item.id);
        const value = matchedDataEntry?.percent || 0;
        const percent = `${value.toFixed(0)}%`;
        return `${percent}`;
      },
    };
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
