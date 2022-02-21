import React from "react";
import { Float as FloatOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
export declare const FloatTime: (props: WidgetProps) => JSX.Element;
interface FloatTimeInputProps {
    ooui: FloatOoui;
    value?: number;
    onChange?: (value?: number) => void;
}
export declare const FloatTimeInput: React.FC<FloatTimeInputProps>;
export {};
//# sourceMappingURL=FloatTime.d.ts.map