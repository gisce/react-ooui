import { Operator } from "@gisce/ooui/dist/Graph";
import { GraphChart as GraphChartOoui } from "@gisce/ooui";
export declare type GraphDataOpts = {
    model: string;
    domain: any;
    context: any;
    ooui: GraphChartOoui;
    limit?: number;
};
export default function useGraphCountData(opts: GraphDataOpts): {
    error: any;
    loading: boolean;
    graphProps: any;
};
export declare function getValueForOperator({ operator, values, }: {
    operator: Operator;
    values: any[];
}): number;
//# sourceMappingURL=useGraphData.d.ts.map