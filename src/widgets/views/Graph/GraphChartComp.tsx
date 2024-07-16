import { Line, Column, Pie } from "@ant-design/plots";
import GraphDefaults, {
  PieLabelOptions,
  calculateAdjustedPiePercentages,
} from "./GraphDefaults";
import { Typography } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import { useCallback, useMemo } from "react";
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
  yAxisOpts?: YAxisOpts;
};

export type YAxisOpts = {
  mode?: "auto" | "default" | "full" | "slider";
  valueOpts?: MinMaxValues;
};

export type MinMaxValues = {
  min: number;
  max: number;
};

export const GraphChartComp = ({
  type,
  data,
  isGroup,
  isStack,
  numItems,
  yAxisOpts,
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
            numItems,
            isStack,
            pieItemValueFormatter,
            pieLabelFormatter,
            yAxisOpts,
          })}
        />
      </div>
    </div>
  );
};

type GetGraphPropsType = GraphCompProps & {
  width?: number;
  height?: number;
  pieItemValueFormatter?: any;
  pieLabelFormatter?: any;
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
  } = props;
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

  if (type === "line" && yAxisOpts.mode === "auto" && yAxisOpts.valueOpts) {
    const min = yAxisOpts.valueOpts.min;
    const max = yAxisOpts.valueOpts.max;
    graphProps.yAxis = {
      min,
      max,
    };
  }

  return graphProps;
}
