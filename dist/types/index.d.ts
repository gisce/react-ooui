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
    model: string;
    fields: any;
};
declare type CreateObjectRequest = {
    model: string;
    values: any;
};
declare type UpdateObjectRequest = CreateObjectRequest & {
    id: number;
};
declare type Views = Map<string, any>;
declare type ViewData = {
    views: Views;
    limit: number;
    model: string;
};
declare type ExecuteRequest = {
    model: string;
    action: string;
    ids: number[];
};
declare type ReadObjectRequest = {
    arch: string;
    model: string;
    id: number;
};
declare type ConnectionProviderType = {
    getViewsForAction: (action: string) => Promise<ViewData>;
    getView: (model: string, type: "tree" | "form") => Promise<FormView | TreeView>;
    search: (options: SearchRequest) => Promise<SearchResponse>;
    update: (options: UpdateObjectRequest) => Promise<any>;
    create: (options: CreateObjectRequest) => Promise<any>;
    execute: (options: ExecuteRequest) => Promise<any>;
    readObject: (options: ReadObjectRequest) => Promise<any>;
};
export type { Strings, SearchFields, TreeView, FormView, Column, WidgetProps, SearchRequest, SearchResponse, ConnectionProviderType, UpdateObjectRequest, CreateObjectRequest, ViewData, Views, ExecuteRequest, ReadObjectRequest, };
//# sourceMappingURL=index.d.ts.map