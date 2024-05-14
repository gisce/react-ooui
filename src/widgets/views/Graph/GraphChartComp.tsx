import { Line, Column, Pie } from "@ant-design/plots";
import GraphDefaults from "./GraphDefaults";
import { Spin, Typography } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import { ResizeAwareComp } from "../DashboardGrid/ResizeAwareComp";
import { useMemo, useState } from "react";
import { GraphType } from "@gisce/ooui";

const { Text } = Typography;

const types = {
  line: Line,
  bar: Column,
  pie: Pie,
};

export type GraphCompProps = {
  type: GraphType;
  data: any[];
  isGroup: boolean;
  isStack: boolean;
  numItems: number;
};

export const GraphChartComp = ({
  type,
  data,
  isGroup,
  isStack,
  numItems,
}: GraphCompProps) => {
  const [mount, setMount] = useState(true);
  const [sizeKey, setSizeKey] = useState("");
  const { t } = useLocale();

  const remountComponent = (width: number, height: number) => {
    setMount(false); // Unmount the component

    setTimeout(() => {
      setSizeKey(`${width}-${height}`); // Update key to force remount
      setMount(true); // Remount the component
    }, 500); // A short delay ensures the component fully unmounts
  };

  const pieTotal = useMemo(() => {
    if (type !== "pie") {
      return undefined;
    }
    const mustShowPieTotal = data.reduce(
      (acc: number, obj: any) => (obj.operator === "+" ? acc + obj.value : 0),
      0,
    );
    if (mustShowPieTotal === 0) {
      return undefined;
    }
    return data.reduce((acc: number, obj: any) => acc + obj.value, 0);
  }, [data, type]);

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
      <div style={{ textAlign: "right" }}>
        <Text type="secondary">
          {`${t("totalRegisters")} ${numItems.toLocaleString("es-ES", {
            useGrouping: true,
          })}`}
        </Text>
      </div>
      {pieTotal && (
        <div style={{ textAlign: "right" }}>
          <Text type="secondary">
            {`${t("total")} ${pieTotal.toLocaleString("es-ES", {
              useGrouping: true,
            })}`}
          </Text>
        </div>
      )}
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
