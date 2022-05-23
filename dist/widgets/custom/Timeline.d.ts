/// <reference types="react" />
import { Timeline as TimelineOoui } from "@gisce/ooui";
import { One2manyValue } from "../base/one2many/One2manyInput";
import { Views } from "@/types";
declare type TimelineProps = {
    ooui: TimelineOoui;
};
declare type TimelineInputProps = TimelineProps & {
    value?: One2manyValue;
    onChange?: (value: One2manyValue) => void;
    views: Views;
};
export declare const Timeline: (props: TimelineProps) => JSX.Element;
export declare const TimelineInput: (props: TimelineInputProps) => JSX.Element;
export {};
//# sourceMappingURL=Timeline.d.ts.map