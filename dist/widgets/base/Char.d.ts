import React from "react";
import { Char as CharOoui } from "ooui";
declare type Props = {
    id: string;
    label?: string;
    value?: string;
    placeholder?: string;
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    onPressEnter?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined;
    children?: React.ReactNode;
    layout?: "horizontal" | "vertical";
    ooui?: CharOoui;
};
export declare const Char: (props: Props) => JSX.Element;
export {};
//# sourceMappingURL=Char.d.ts.map