import { GraphType } from "@gisce/ooui";
export declare type GraphDataQueryOpts = {
    model: string;
    domain?: any;
    context?: any;
    limit?: number;
};
export declare type GraphDataOpts = GraphDataQueryOpts & {
    xml: string;
    uninformedString: string;
};
export declare const useGraphData: (opts: GraphDataOpts) => {
    loading: boolean;
    error: any;
    type: GraphType;
    values: any;
};
//# sourceMappingURL=useGraphData.d.ts.map