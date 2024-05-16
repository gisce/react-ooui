import { Line, Column, Pie } from "@ant-design/plots";
import GraphDefaults, { PieLabelOptions } from "./GraphDefaults";
import { Typography } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import { useMemo } from "react";
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
  const { t } = useLocale();

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

  const piePercents = useMemo(() => {
    if (type !== "pie") {
      return undefined;
    }
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    const percents = data.map((entry) => ({
      x: entry.x,
      percent: (entry.value / total) * 100,
    }));
    return percents;
  }, [data, type]);

  const pieItemValueFormatter = useMemo(() => {
    if (piePercents === undefined) {
      return undefined;
    }
    return {
      formatter: (_: unknown, item: any) => {
        const matchedDataEntry = piePercents.find((d) => d.x === item.id);
        const value = matchedDataEntry?.percent || 0;
        const percent = `${value.toFixed(0)}%`;
        return `${percent}`;
      },
    };
  }, [piePercents]);

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
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <Chart
          {...getGraphProps({
            type,
            data,
            isGroup,
            isStack,
            pieItemValueFormatter,
          })}
        />
      </div>
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
  pieItemValueFormatter?: any;
};

function getGraphProps(props: GetGraphPropsType) {
  const { type, data, isGroup, isStack, pieItemValueFormatter } = props;
  let graphProps = { ...(GraphDefaults as any)[type] };

  if (!graphProps) {
    graphProps = { ...(GraphDefaults as any)["default"] };
  }

  graphProps.data = data;

  if (type === "pie") {
    graphProps.colorField = "x";
    graphProps.angleField = "value";

    graphProps = { ...graphProps, ...PieLabelOptions.inner };

    graphProps.legend.itemValue = pieItemValueFormatter;
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
