/// <reference types="react" />
import { Indicator as IndicatorOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
declare type IndicatorProps = WidgetProps & {
    ooui: IndicatorOoui;
    value?: number;
};
export declare const Indicator: (props: IndicatorProps) => JSX.Element;
export {};
//# sourceMappingURL=Indicator.d.ts.map