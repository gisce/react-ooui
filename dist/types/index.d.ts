import { Field as FieldOoui } from "ooui";
declare type Strings = {
    [key: string]: string;
};
declare type SearchFields = {
    primary: string[];
    secondary: string[];
};
declare type TreeView = {
    arch: string;
    fields: any;
};
declare type Column = {
    title: string;
    dataIndex: string;
    key: string;
    type?: string;
};
declare type WidgetProps = {
    ooui: FieldOoui;
    layout?: "horizontal" | "vertical";
    showLabel?: boolean;
};
export type { Strings, SearchFields, TreeView, Column, WidgetProps };
//# sourceMappingURL=index.d.ts.map