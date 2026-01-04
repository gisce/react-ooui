import { memo, useMemo } from "react";
import { Typography } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import { GraphType, YAxisOpts } from "@gisce/ooui";
import { calculateAdjustedPiePercentages } from "./GraphDefaults";
import {
  ChartEngine,
  ChartEngineProps,
  AntChartsEngine,
  EChartsEngine,
} from "./engines";

const { Text } = Typography;

export const GRAPH_DEFAULT_HEIGHT = 400;

// Engine components map
const engineComponents: Record<ChartEngine, React.ComponentType<ChartEngineProps>> = {
  ant: AntChartsEngine,
  echarts: EChartsEngine,
};

export type GraphCompProps = {
  type: GraphType;
  data: any[];
  isGroup: boolean;
  isStack: boolean;
  numItems: number;
  yAxisOpts?: YAxisOpts;
  fixedHeight?: number;
  engine?: ChartEngine;
};

export const GraphChartComp = ({
  type,
  data,
  isGroup,
  isStack,
  numItems,
  yAxisOpts,
  fixedHeight,
  engine = "ant",
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

  const EngineComponent = engineComponents[engine];

  if (!EngineComponent) {
    return <>{`Unknown chart engine: ${engine}`}</>;
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
        <EngineComponent
          type={type}
          data={data}
          isGroup={isGroup}
          isStack={isStack}
          numItems={numItems}
          yAxisOpts={yAxisOpts}
          fixedHeight={fixedHeight}
          piePercents={piePercents}
          pieTotal={pieTotal}
        />
      </div>
    </div>
  );
};
