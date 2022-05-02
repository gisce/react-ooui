import { Field as FieldOoui } from "@gisce/ooui";
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
    view_id: number;
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
    attrsEvaluated?: any;
};
declare type SearchRequest = {
    params: Array<any>;
    limit?: number;
    offset?: number;
    model: string;
    fields?: any;
    context?: any;
    attrs?: any;
    order?: number | string;
};
declare type SearchAllIdsRequest = SearchCountRequest & {
    totalItems?: number;
};
declare type SearchCountRequest = {
    params: Array<any>;
    model: string;
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
declare type NameSearchRequest = {
    model: string;
    limit?: number;
    payload?: any;
    context?: any;
    attrs?: any;
    operator?: string;
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
    fieldsToRetrieve?: any;
};
declare type GetLogInfoRequest = {
    model: string;
    ids: number[];
    context?: any;
};
declare type ReadEvalUiObjectsRequest = {
    arch?: string;
    fields?: any;
    model: string;
    ids: number[];
    context?: any;
    attrs?: any;
};
declare type ParseConditionRequest = {
    condition: string;
    values: any;
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
    id?: number;
    type: ViewType;
    context?: any;
};
declare type DefaultGetRequest = {
    model: string;
    fields?: any;
    context?: any;
    extraValues?: any;
};
declare type DuplicateRequest = {
    id: number;
    model: string;
    context?: any;
};
declare type EvalDomainRequest = {
    domain: string;
    values: any;
    context?: any;
};
declare type IsShortcutFavoriteOptions = {
    action_id: number;
    action_type: string;
    res_id: number | boolean;
    view_id: number;
    context?: any;
};
declare type ConnectionProviderType = {
    getActionStringForModel: (model: string) => Promise<string>;
    getViewsForAction: ({ action, context, }: {
        action: string;
        context?: any;
    }) => Promise<ViewData>;
    getView: (options: GetViewRequest) => Promise<FormView | TreeView>;
    searchAllIds: (options: SearchAllIdsRequest) => Promise<number[]>;
    searchCount: (options: SearchCountRequest) => Promise<number>;
    search: (options: SearchRequest) => Promise<SearchResponse>;
    searchForTree: (options: SearchRequest) => Promise<SearchResponse>;
    update: (options: UpdateObjectRequest) => Promise<any>;
    create: (options: CreateObjectRequest) => Promise<any>;
    delete: (options: DeleteObjectsRequest) => Promise<any>;
    execute: (options: ExecuteRequest) => Promise<any>;
    readObjects: (options: ReadObjectsRequest) => Promise<any>;
    readEvalUiObjects: (options: ReadEvalUiObjectsRequest) => Promise<any>;
    parseCondition: (options: ParseConditionRequest) => Promise<any>;
    executeWorkflow: (options: ExecuteRequest) => Promise<any>;
    createReport: (options: CreateReportRequest) => Promise<any>;
    getReport: (options: GetReportRequest) => Promise<any>;
    executeOnChange: (options: ExecuteOnChangeRequest) => Promise<any>;
    defaultGet: (options: DefaultGetRequest) => Promise<any>;
    getActionData: ({ action, context, }: {
        action: string;
        context?: any;
    }) => Promise<any>;
    nameSearch: (options: NameSearchRequest) => Promise<any>;
    duplicate: (options: DuplicateRequest) => Promise<any>;
    evalDomain: (options: EvalDomainRequest) => Promise<any>;
    getLogInfo: (options: GetLogInfoRequest) => Promise<any>;
    isShortcutFavorite: (options: IsShortcutFavoriteOptions) => Promise<number | boolean>;
    removeFavourite: ({ shortcut_id }: {
        shortcut_id: number;
    }) => Promise<void>;
    addFavourite: (options: IsShortcutFavoriteOptions) => Promise<void>;
};
declare type ViewType = "tree" | "form" | "dashboard" | "graph";
export type { Strings, SearchFields, TreeView, FormView, Column, WidgetProps, SearchRequest, SearchResponse, ConnectionProviderType, UpdateObjectRequest, CreateObjectRequest, ViewData, Views, ExecuteRequest, ReadObjectsRequest, DeleteObjectsRequest, CreateReportRequest, GetReportRequest, ExecuteOnChangeRequest, ViewType, SearchAllIdsRequest, SearchCountRequest, GetViewRequest, DefaultGetRequest, GenerateReportOptions, ReadEvalUiObjectsRequest, NameSearchRequest, DuplicateRequest, GetLogInfoRequest, IsShortcutFavoriteOptions, ParseConditionRequest, };
//# sourceMappingURL=index.d.ts.map