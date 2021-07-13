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
    fields: any;
    context?: any;
};
declare type UpdateObjectRequest = CreateObjectRequest & {
    id: number;
};
declare type Views = Map<string, any>;
declare type ViewData = {
    views: Views;
    limit: number;
    model: string;
    domain?: string;
};
declare type ExecuteRequest = {
    model: string;
    action: string;
    payload?: any;
    context?: any;
};
declare type ExecuteOnChangeRequest = {
    model: string;
    action: string;
    payload?: any;
    context?: any;
    ids: number[];
    fields: any;
};
declare type ReadObjectsRequest = {
    arch?: string;
    fields?: any;
    model: string;
    ids: number[];
};
declare type DeleteObjectsRequest = {
    model: string;
    ids: number[];
};
declare type CreateReportRequest = {
    name: string;
    model: string;
    ids: number[];
    contextReport: any;
    context?: any;
};
declare type GetReportRequest = {
    id: number;
};
declare type ConnectionProviderType = {
    getAction: (model: string) => Promise<string>;
    getViewsForAction: ({ action, context, }: {
        action: string;
        context?: any;
    }) => Promise<ViewData>;
    getView: (model: string, type: "tree" | "form") => Promise<FormView | TreeView>;
    search: (options: SearchRequest) => Promise<SearchResponse>;
    update: (options: UpdateObjectRequest) => Promise<any>;
    create: (options: CreateObjectRequest) => Promise<any>;
    delete: (options: DeleteObjectsRequest) => Promise<any>;
    execute: (options: ExecuteRequest) => Promise<any>;
    readObjects: (options: ReadObjectsRequest) => Promise<any>;
    executeWorkflow: (options: ExecuteRequest) => Promise<any>;
    createReport: (options: CreateReportRequest) => Promise<any>;
    getReport: (options: GetReportRequest) => Promise<any>;
    executeOnChange: (options: ExecuteOnChangeRequest) => Promise<any>;
};
export type { Strings, SearchFields, TreeView, FormView, Column, WidgetProps, SearchRequest, SearchResponse, ConnectionProviderType, UpdateObjectRequest, CreateObjectRequest, ViewData, Views, ExecuteRequest, ReadObjectsRequest, DeleteObjectsRequest, CreateReportRequest, GetReportRequest, ExecuteOnChangeRequest, };
//# sourceMappingURL=index.d.ts.map