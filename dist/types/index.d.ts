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
    search_fields?: SearchFields;
    toolbar?: any;
};
declare type SearchResponse = {
    totalItems: number;
    results: any[];
};
declare type SearchRequest = {
    params: Array<any>;
    limit?: number;
    offset?: number;
    model: string;
    fields?: any;
    context?: any;
};
declare type SearchCountRequest = {
    params: Array<any>;
    model: string;
    totalItems: number;
    context?: any;
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
    domain?: any;
    context?: any;
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
    ids: number[];
    fields: any;
};
declare type ReadObjectsRequest = {
    arch?: string;
    fields?: any;
    model: string;
    ids: number[];
    context?: any;
};
declare type DeleteObjectsRequest = {
    model: string;
    ids: number[];
};
declare type CreateReportRequest = {
    name: string;
    model: string;
    ids: number[];
    datas?: any;
    context?: any;
};
declare type GenerateReportOptions = {
    reportData: any;
    fields: any;
    values: any;
    context?: any;
};
declare type GetReportRequest = {
    id: number;
};
declare type GetViewRequest = {
    model: string;
    type: ViewType;
    context?: any;
};
declare type DefaultGetRequest = {
    model: string;
    fields?: any;
    context?: any;
    extraValues?: any;
};
declare type ConnectionProviderType = {
    getActionStringForModel: (model: string) => Promise<string>;
    getViewsForAction: ({ action, context, }: {
        action: string;
        context?: any;
    }) => Promise<ViewData>;
    getView: (options: GetViewRequest) => Promise<FormView | TreeView>;
    searchAllIds: (options: SearchCountRequest) => Promise<number[]>;
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
    defaultGet: (options: DefaultGetRequest) => Promise<any>;
    getActionData: ({ action, context, }: {
        action: string;
        context?: any;
    }) => Promise<any>;
};
declare type ViewType = "tree" | "form";
export type { Strings, SearchFields, TreeView, FormView, Column, WidgetProps, SearchRequest, SearchResponse, ConnectionProviderType, UpdateObjectRequest, CreateObjectRequest, ViewData, Views, ExecuteRequest, ReadObjectsRequest, DeleteObjectsRequest, CreateReportRequest, GetReportRequest, ExecuteOnChangeRequest, ViewType, SearchCountRequest, GetViewRequest, DefaultGetRequest, GenerateReportOptions, };
//# sourceMappingURL=index.d.ts.map