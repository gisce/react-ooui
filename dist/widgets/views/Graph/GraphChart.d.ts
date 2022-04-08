import React from "react";
import { GraphChart as GraphChartOoui } from "@gisce/ooui";
export declare type GraphChartProps = {
    model: string;
    domain: any;
    limit: number;
    context: any;
    ooui: GraphChartOoui;
};
export declare const GraphChartComp: (props: GraphChartProps) => JSX.Element;
export declare const GraphChart: React.MemoExoticComponent<(props: GraphChartProps) => JSX.Element>;
//# sourceMappingURL=GraphChart.d.ts.map