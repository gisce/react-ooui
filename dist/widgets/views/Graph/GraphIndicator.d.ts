/// <reference types="react" />
import { Operator } from "@gisce/ooui";
export declare type GraphInidicatorProps = {
    model: string;
    domain: any;
    context: any;
    colorCondition?: string | null;
    totalDomain?: string;
    showPercent?: boolean;
    icon?: string;
    suffix?: string;
    field?: string;
    operator?: Operator;
};
export declare const GraphIndicator: (props: GraphInidicatorProps) => JSX.Element;
//# sourceMappingURL=GraphIndicator.d.ts.map