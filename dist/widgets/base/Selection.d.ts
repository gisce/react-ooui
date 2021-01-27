import React from "react";
declare type OptionValue = {
    id: string;
    name: string;
};
export declare const Selection: ({ id, label, defaultValue, values, placeholder, onChange, ...props }: {
    id: string;
    label?: string | undefined;
    defaultValue?: string | undefined;
    values?: OptionValue[] | undefined;
    placeholder?: string | undefined;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}) => JSX.Element;
export {};
//# sourceMappingURL=Selection.d.ts.map