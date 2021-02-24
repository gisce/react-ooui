import React from "react";
import { Field as FieldOoui } from "ooui";
export default function Field({ ooui, children, layout, valuePropName, showLabel, alignLabel, }: {
    ooui: FieldOoui;
    children?: React.ReactNode;
    layout?: "horizontal" | "vertical";
    valuePropName?: string;
    showLabel?: boolean;
    alignLabel?: "left" | "center" | "right";
}): JSX.Element;
//# sourceMappingURL=Field.d.ts.map