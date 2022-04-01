import { GraphAxis } from "@gisce/ooui/dist/Graph";
export declare type GraphDataOpts = {
    model: string;
    domain: any;
    context: any;
    x: GraphAxis;
    y: GraphAxis;
};
export default function useGraphCountData(opts: GraphDataOpts): {
    data: Record<string, any>[] | undefined;
    error: any;
    loading: boolean;
    yLabel: string | undefined;
};
//# sourceMappingURL=useGraphData.d.ts.map