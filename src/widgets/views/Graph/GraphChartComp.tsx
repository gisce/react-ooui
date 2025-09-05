import { memo, useCallback, useMemo } from "react";
import { Line, Column, Pie } from "@ant-design/plots";
import GraphDefaults, {
  PieLabelOptions,
  calculateAdjustedPiePercentages,
} from "./GraphDefaults";
import { Typography } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import { GraphType, YAxisOpts } from "@gisce/ooui";

const { Text } = Typography;

export const GRAPH_DEFAULT_HEIGHT = 400;

// Memoize each chart type
const MemoizedLine = memo(Line);
const MemoizedColumn = memo(Column);
const MemoizedPie = memo(Pie);

const types = {
  line: MemoizedLine,
  bar: MemoizedColumn,
  pie: MemoizedPie,
};

export type GraphCompProps = {
  type: GraphType;
  data: any[];
  isGroup: boolean;
  isStack: boolean;
  numItems: number;
  yAxisOpts?: YAxisOpts;
  fixedHeight?: number;
};

export const GraphChartComp = ({
  type,
  data,
  isGroup,
  isStack,
  numItems,
  yAxisOpts,
  fixedHeight,
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
    return calculateAdjustedPiePercentages(data);
  }, [data, type]);

  const getPercentValueForX = useCallback(
    (x: string) => {
      if (!piePercents) {
        return;
      }
      const matchedDataEntry = piePercents.find((d) => d.x === x);
      const value = matchedDataEntry?.percent || 0;
      const percent = `${value}`;
      return `${percent}%`;
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
  }, [getPercentValueForX, piePercents]);

  const pieLabelFormatter = useCallback(
    ({ percent, x }: { percent: number; x: string }) => {
      // Hide labels for percents lower than 0.07
      if (percent < 0.07) {
        return "";
      }
      return getPercentValueForX(x);
    },
    [getPercentValueForX],
  );

  const Chart = (types as any)[type!];

  const graphProps = useMemo(() => {
    return getGraphProps({
      type,
      data,
      isGroup,
      numItems,
      isStack,
      pieItemValueFormatter,
      pieLabelFormatter,
      yAxisOpts,
      fixedHeight,
    });
  }, [
    type,
    data,
    isGroup,
    numItems,
    isStack,
    pieItemValueFormatter,
    pieLabelFormatter,
    yAxisOpts,
    fixedHeight,
  ]);

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
        height: fixedHeight,
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
        <Chart {...graphProps} />
      </div>
    </div>
  );
};

type GetGraphPropsType = GraphCompProps & {
  width?: number;
  height?: number;
  pieItemValueFormatter?: any;
  pieLabelFormatter?: any;
  fixedHeight?: number;
};

function getGraphProps(props: GetGraphPropsType) {
  const {
    type,
    data,
    isGroup,
    isStack,
    pieItemValueFormatter,
    pieLabelFormatter,
    yAxisOpts = { mode: "default" },
    fixedHeight,
  } = props;
  let graphProps = { ...(GraphDefaults as any)[type] };

  if (!graphProps) {
    graphProps = { ...(GraphDefaults as any)["default"] };
  }

  graphProps.data = data;
  graphProps.height = fixedHeight;

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

  // Auto-scale Y-axis for line and bar charts when mode is "auto" or when auto-scaling would be beneficial
  if (type === "line" || type === "bar") {
    let min: number | undefined;
    let max: number | undefined;
    let shouldAutoScale = yAxisOpts.mode === "auto";

    // Auto-detect if auto-scaling would be beneficial
    if (!shouldAutoScale && yAxisOpts.mode === "default") {
      const values = data
        .map((item: any) => item.value)
        .filter((val: any) => typeof val === "number" && !isNaN(val));

      if (values.length > 0) {
        const dataMin = Math.min(...values);
        const dataMax = Math.max(...values);
        const range = dataMax - dataMin;

        // Enable auto-scaling if:
        // 1. The range is small compared to the minimum value (less than 10% of min value)
        // 2. OR the minimum value is much greater than 0 (at least 10x the range from 0)
        if (range > 0 && dataMin > 0) {
          const rangeToMinRatio = range / dataMin;
          const minToZeroRatio = dataMin / range;

          if (rangeToMinRatio < 0.1 || minToZeroRatio > 10) {
            shouldAutoScale = true;
          }
        }
      }
    }

    if (shouldAutoScale) {
      // If explicit valueOpts are provided, use those
      if (yAxisOpts.valueOpts) {
        min = yAxisOpts.valueOpts.min;
        max = yAxisOpts.valueOpts.max;
      } else {
        // Auto-calculate min/max from the data
        const values = data
          .map((item: any) => item.value)
          .filter((val: any) => typeof val === "number" && !isNaN(val));

        if (values.length > 0) {
          const dataMin = Math.min(...values);
          const dataMax = Math.max(...values);

          // Add some padding (5%) to make the chart more visually appealing
          const range = dataMax - dataMin;
          const padding = range * 0.05;

          min = dataMin - padding;
          max = dataMax + padding;

          // Ensure min doesn't go below 0 if all values are positive and close to each other
          if (dataMin >= 0 && min < 0) {
            min = Math.max(0, dataMin - range * 0.02);
          }
        }
      }

      if (min !== undefined || max !== undefined) {
        graphProps.yAxis = {
          ...(graphProps.yAxis || {}),
          min,
          max,
        };
      }
    }
  }

  return graphProps;
}
