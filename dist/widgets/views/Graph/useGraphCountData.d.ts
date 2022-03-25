import { GraphAxis } from "@gisce/ooui/dist/Graph";
export declare type GraphCountDataOpts = {
    model: string;
    domain: any;
    context: any;
    x: GraphAxis;
    y: GraphAxis;
};
export default function useGraphCountData(opts: GraphCountDataOpts): {
    data: Record<string, any>[] | undefined;
    error: any;
    loading: boolean;
    yLabel: string | undefined;
};
//# sourceMappingURL=useGraphCountData.d.ts.map