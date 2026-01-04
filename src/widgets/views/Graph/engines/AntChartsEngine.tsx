import { memo, useCallback, useMemo } from "react";
import { Line, Column, Pie } from "@ant-design/plots";
import { ChartEngineProps } from "./types";
import GraphDefaults, { PieLabelOptions, isNumber } from "../GraphDefaults";

// Memoize each chart type
const MemoizedLine = memo(Line);
const MemoizedColumn = memo(Column);
const MemoizedPie = memo(Pie);

const types = {
  line: MemoizedLine,
  bar: MemoizedColumn,
  pie: MemoizedPie,
};

export const AntChartsEngine = ({
  type,
  data,
  isGroup,
  isStack,
  yAxisOpts,
  fixedHeight,
  piePercents,
}: ChartEngineProps) => {
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
    // v2 API: itemValueFormatter receives (datum, index, data)
    return (datum: any) => {
      return getPercentValueForX(datum.x);
    };
  }, [getPercentValueForX, piePercents]);

  const pieLabelFormatter = useCallback(
    // v2 API: label.text receives (datum, index, data)
    (datum: any) => {
      const total = data.reduce((acc: number, obj: any) => acc + obj.value, 0);
      const percent = total > 0 ? datum.value / total : 0;
      // Hide labels for percents lower than 0.07
      if (percent < 0.07) {
        return "";
      }
      return getPercentValueForX(datum.x);
    },
    [getPercentValueForX, data],
  );

  const Chart = (types as any)[type!];

  const graphProps = useMemo(() => {
    return getAntGraphProps({
      type,
      data,
      isGroup,
      isStack,
      pieItemValueFormatter,
      pieLabelFormatter,
      piePercents,
      yAxisOpts,
      fixedHeight,
    });
  }, [
    type,
    data,
    isGroup,
    isStack,
    pieItemValueFormatter,
    pieLabelFormatter,
    piePercents,
    yAxisOpts,
    fixedHeight,
  ]);

  if (!Chart) {
    return <>{`Unknown graph type: ${type}`}</>;
  }

  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <Chart {...graphProps} />
    </div>
  );
};

type GetAntGraphPropsType = {
  type: ChartEngineProps["type"];
  data: ChartEngineProps["data"];
  isGroup: boolean;
  isStack: boolean;
  pieItemValueFormatter?: any;
  pieLabelFormatter?: any;
  piePercents?: Array<{ x: string; percent: number }>;
  yAxisOpts?: ChartEngineProps["yAxisOpts"];
  fixedHeight?: number;
};

function getAntGraphProps(props: GetAntGraphPropsType) {
  const {
    type,
    data,
    isGroup,
    isStack,
    pieLabelFormatter,
    piePercents,
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

    // v2 API: Configure legend with position, percentages inline, and pagination
    const getPercentForX = (x: string) => {
      if (!piePercents) return "";
      const found = piePercents.find((p) => p.x === x);
      return found ? `${found.percent}%` : "";
    };

    graphProps.legend = {
      color: {
        ...(graphProps.legend?.color || {}),
        // G2 v5 / @antv/component: Use itemLabelText to show name + percentage INLINE
        itemLabelText: (datum: any) => {
          // Handle various datum structures from G2 v5 legend
          const label =
            datum?.label ??
            datum?.id ??
            datum?.name ??
            datum?.value ??
            String(datum);
          const percent = getPercentForX(String(label));
          return percent ? `${label} ${percent}` : String(label);
        },
      },
    };

    // v2 API: Update label with text function
    graphProps.label = {
      ...PieLabelOptions.inner.label,
      text: pieLabelFormatter,
    };
  } else {
    // v2 API: Use colorField instead of seriesField
    graphProps.xField = "x";
    graphProps.yField = "value";
    graphProps.colorField = "type";

    // v2 API: Use group instead of isGroup
    graphProps.group = isGroup;

    if (isStack) {
      // v2 API: Use stack instead of isStack, groupField is handled automatically
      graphProps.stack = true;

      // v2 API: tooltip configuration with custom render for totals
      graphProps.interaction = {
        ...(graphProps.interaction || {}),
        tooltip: {
          render: (
            _: any,
            { title, items }: { title: string; items: any[] },
          ) => {
            if (items.length === 0) return null;

            // Calculate total for this x value
            const xValue = title;
            const total = data
              .filter((item) => item.x === xValue)
              .reduce((acc, item) => acc + item.value, 0);
            const totalFormatted = total.toLocaleString("es-ES", {
              useGrouping: true,
            });

            // Build HTML for tooltip
            const itemsHtml = items
              .map(
                (item) =>
                  `<div style="display: flex; justify-content: space-between; gap: 8px;">
                    <span style="display: flex; align-items: center; gap: 4px;">
                      <span style="width: 8px; height: 8px; border-radius: 50%; background: ${
                        item.color
                      };"></span>
                      ${item.name}
                    </span>
                    <span>${
                      typeof item.value === "number"
                        ? item.value.toLocaleString("es-ES", {
                            useGrouping: true,
                          })
                        : item.value
                    }</span>
                  </div>`,
              )
              .join("");

            return `<div style="padding: 8px;">
              <div style="font-weight: bold; margin-bottom: 8px;">${title}</div>
              ${itemsHtml}
              <div style="border-top: 1px solid #ccc; margin-top: 8px; padding-top: 8px; display: flex; justify-content: space-between;">
                <span>Total</span>
                <span>${totalFormatted}</span>
              </div>
            </div>`;
          },
        },
      };
    }
  }

  if (type === "line" && yAxisOpts.mode === "auto" && yAxisOpts.valueOpts) {
    const min = yAxisOpts.valueOpts.min;
    const max = yAxisOpts.valueOpts.max;
    // v2 API: Use scale.y.domain instead of yAxis.min/max
    graphProps.scale = {
      ...(graphProps.scale || {}),
      y: {
        domain: [min, max],
      },
    };
  }

  return graphProps;
}
