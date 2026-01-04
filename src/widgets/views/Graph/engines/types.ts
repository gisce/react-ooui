import { GraphType, YAxisOpts } from "@gisce/ooui";
import { ReactElement } from "react";

export type ChartEngine = "ant" | "echarts";

export type ChartData = {
  x: string;
  value: number;
  type?: string;
  operator?: string;
  stacked?: string;
};

export type ChartEngineProps = {
  type: GraphType;
  data: ChartData[];
  isGroup: boolean;
  isStack: boolean;
  numItems: number;
  yAxisOpts?: YAxisOpts;
  fixedHeight?: number;
  piePercents?: Array<{ x: string; percent: number }>;
  pieTotal?: number;
};

export interface ChartEngineComponent {
  (props: ChartEngineProps): ReactElement;
}
