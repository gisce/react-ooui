import React from "react";
export declare const Integer: ({ id, label, value, defaultValue, onChange, onPressEnter, layout, ...props }: {
    id: string;
    label?: string | undefined;
    value?: number | undefined;
    defaultValue?: number | undefined;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    onPressEnter?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
    children?: React.ReactNode;
    className?: string | undefined;
    layout?: "horizontal" | "vertical" | undefined;
}) => JSX.Element;
//# sourceMappingURL=Integer.d.ts.map