import { Line, Column, Pie } from "@ant-design/plots";
import GraphDefaults, {
  PieLabelOptions,
  calculateAdjustedPiePercentages,
} from "./GraphDefaults";
import { Typography } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import { useCallback, useMemo, useRef } from "react";
import { Graph } from "@gisce/ooui";

const { Text } = Typography;

const types = {
  line: Line,
  bar: Column,
  pie: Pie,
};

export type GraphCompProps = {
  ooui: Graph;
  data: any[];
  isGroup: boolean;
  isStack: boolean;
  numItems: number;
};

export const GraphChartComp = ({
  ooui,
  data,
  isGroup,
  isStack,
  numItems,
}: GraphCompProps) => {
  const { t } = useLocale();
  const { type } = ooui;

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
    return calculateAdjustedPiePercentages(data);
  }, [data, type]);

  const getPercentValueForX = useCallback(
    (x: string) => {
      if (!piePercents) {
        return;
      }
      const matchedDataEntry = piePercents.find((d) => d.x === x);
      const value = matchedDataEntry?.percent || 0;
      const percent = `${value.toFixed(0)}%`;
      return `${percent}`;
    },
    [piePercents],
  );

  const pieItemValueFormatter = useMemo(() => {
    if (piePercents === undefined) {
      return undefined;
    }
    return {
      formatter: (_: unknown, item: any) => {
        return getPercentValueForX(item.id);
      },
    };
  }, [piePercents]);

  const pieLabelFormatter = useCallback(
    ({ percent, x }: { percent: number; x: string }) => {
      // Hide labels for percents lower than 0.07
      if (percent < 0.07) {
        return "";
      }
      return getPercentValueForX(x);
    },
    [piePercents],
  );

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
            ooui,
            data,
            isGroup,
            isStack,
            pieItemValueFormatter,
            pieLabelFormatter,
          })}
        />
      </div>
    </div>
  );
};

type GetGraphPropsType = {
  ooui: Graph;
  isStack: boolean;
  isGroup: boolean;
  data: any[];
  width?: number;
  height?: number;
  pieItemValueFormatter?: any;
  pieLabelFormatter?: any;
};

function getGraphProps(props: GetGraphPropsType) {
  const {
    ooui,
    data,
    isGroup,
    isStack,
    pieItemValueFormatter,
    pieLabelFormatter,
  } = props;
  const { type } = ooui;
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
    graphProps.label.content = pieLabelFormatter;
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
  if (type === "line" && ooui.y_range === "auto") {
    const values = data.map((d) => d.value);
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const margin = (maxValue - minValue) * 0.1;
    graphProps.yAxis = {
      min: minValue - margin,
      max: maxValue + margin,
    };
  }
  return graphProps;
}
