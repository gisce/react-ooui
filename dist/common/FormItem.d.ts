import React from "react";
export default function FormItem({ name, label, children, layout, tooltip, nolabel, valuePropName, }: {
    name: string;
    label?: string;
    children?: React.ReactNode;
    layout?: "horizontal" | "vertical";
    tooltip?: string;
    nolabel?: boolean;
    valuePropName?: string;
}): JSX.Element;
declare const labelWithTooltip: (label: string, tooltip?: string | undefined) => JSX.Element;
export { labelWithTooltip };
//# sourceMappingURL=FormItem.d.ts.map