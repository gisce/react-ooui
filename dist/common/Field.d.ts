import React from "react";
import { Field as FieldOoui } from "ooui";
export default function Field({ ooui, children, layout, valuePropName, }: {
    ooui: FieldOoui;
    children?: React.ReactNode;
    layout?: "horizontal" | "vertical";
    valuePropName?: string;
}): JSX.Element;
declare const labelWithTooltip: (label: string, tooltip?: string | undefined) => JSX.Element;
export { labelWithTooltip };
//# sourceMappingURL=Field.d.ts.map