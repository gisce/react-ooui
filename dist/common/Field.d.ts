import React from "react";
import { Field as FieldOoui } from "@gisce/ooui";
export default function Field({ ooui, children, layout, valuePropName, showLabel, alignLabel, required, type, validator, }: {
    ooui: FieldOoui;
    children?: React.ReactNode;
    layout?: "horizontal" | "vertical";
    valuePropName?: string;
    showLabel?: boolean;
    alignLabel?: "left" | "center" | "right";
    required?: boolean;
    type?: any;
    validator?: any;
}): JSX.Element;
//# sourceMappingURL=Field.d.ts.map