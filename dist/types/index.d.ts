import { Field as FieldOoui } from "ooui";
declare type Strings = {
    [key: string]: string;
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
declare type SearchFields = {
    primary: string[];
    secondary: string[];
};
declare type TreeView = {
    arch: string;
    fields: any;
};
declare type FormView = TreeView & {
    search_fields: SearchFields;
};
declare type SearchResponse = {
    totalItems: number;
    results: any[];
};
declare type SearchRequest = {
    params: Array<any>;
    limit: number;
    offset: number;
};
declare type CreateObjectRequest = {
    model: string;
    values: any;
};
declare type UpdateObjectRequest = {
    id: number;
};
declare type ConnectionProviderType = {
    getForm: (model: string) => Promise<FormView>;
    getTree: (model: string) => Promise<TreeView>;
    search: (options: SearchRequest) => Promise<SearchResponse>;
    update: (options: UpdateObjectRequest) => Promise<any>;
    create: (options: CreateObjectRequest) => Promise<any>;
};
export type { Strings, SearchFields, TreeView, FormView, Column, WidgetProps, SearchRequest, SearchResponse, ConnectionProviderType };
//# sourceMappingURL=index.d.ts.map