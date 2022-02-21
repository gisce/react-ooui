import { Timeline as TimelineOoui } from "@gisce/ooui";
import { Views } from "@/types";
declare type TimelineProps = {
    ooui: TimelineOoui;
};
declare type TimelineInputProps = TimelineProps & {
    value?: Array<any>;
    onChange?: (value: any[]) => void;
    views: Views;
};
export declare const Timeline: (props: TimelineProps) => JSX.Element;
export declare const TimelineInput: (props: TimelineInputProps) => JSX.Element;
export {};
//# sourceMappingURL=Timeline.d.ts.map