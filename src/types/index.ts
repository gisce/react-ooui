import { ShortcutApi } from "@/ui/FavouriteButton";
import { Field as FieldOoui } from "@gisce/ooui";

type Strings = {
  [key: string]: string;
};

type Column = {
  title: string;
  dataIndex: string;
  key: string;
  type?: string;
};

type WidgetProps = {
  ooui: FieldOoui;
  layout?: "horizontal" | "vertical";
  showLabel?: boolean;
};

type SearchFields = {
  primary: string[];
  secondary: string[];
};

export type InitialViewData = {
  id: number;
  type: ViewType;
};

export type BaseView = {
  type: ViewType;
  view_id: number;
  title?: string;
};

type TreeView = BaseView & {
  view_id: number;
  arch: string;
  fields: any;
  search_fields?: SearchFields;
  isExpandable?: boolean;
  field_parent?: string;
  toolbar?: any;
};

type FormView = TreeView & {
  search_fields?: SearchFields;
  toolbar?: any;
};

export type DashboardView = {
  view_id?: number;
  type: ViewType;
  model: string;
  id: number;
  context?: any;
  configAction?: ShortcutApi;
  title?: string;
};

export type DashboardProps = Omit<DashboardView, "type">;

export type GraphView = {
  arch: string;
  type: ViewType;
  view_id: number;
  name: string;
  title?: string;
};

export type View = TreeView | FormView | DashboardView | GraphView;

type SearchResponse = {
  totalItems: () => Promise<number>;
  results: any[];
  attrsEvaluated?: any;
};

type SearchRequest = {
  params: any[];
  limit?: number;
  offset?: number;
  model: string;
  fields?: any;
  fieldsToRetrieve?: string[];
  context?: any;
  attrs?: any;
  order?: number | string | null;
  name_search?: string;
  skipRead?: boolean;
};

type SearchAllIdsRequest = SearchCountRequest & {
  totalItems?: number;
  order?: string | undefined;
};

type SearchCountRequest = {
  params: any[];
  model: string;
  context?: any;
  name_search?: string;
};

type CreateObjectRequest = {
  model: string;
  values: any;
  fields: any;
  context?: any;
};

type UpdateObjectRequest = CreateObjectRequest & {
  id: number;
};

type Views = Map<string, any>;

type ViewData = {
  views: Views;
  limit: number;
  model: string;
  domain?: any;
  context?: any;
};

type ExecuteRequest = {
  model: string;
  action: string;
  payload?: any;
  context?: any;
};

type NameSearchRequest = {
  model: string;
  limit?: number;
  payload?: any;
  context?: any;
  attrs?: any;
  operator?: string;
};

type ExecuteOnChangeRequest = {
  model: string;
  action: string;
  payload?: any;
  ids: number[];
  fields: any;
};

type ReadObjectsRequest = {
  fields?: any;
  model: string;
  ids: number[];
  context?: any;
  fieldsToRetrieve?: any;
};

type GetLogInfoRequest = {
  model: string;
  ids: number[];
  context?: any;
};

type ReadEvalUiObjectsRequest = {
  arch?: string;
  fields?: any;
  model: string;
  ids: number[];
  context?: any;
  attrs?: any;
};

type ParseConditionRequest = {
  condition: string;
  values: any;
  context?: any;
};

type DeleteObjectsRequest = {
  model: string;
  ids: number[];
  context?: any;
};

type CreateReportRequest = {
  name: string;
  model: string;
  ids: number[];
  datas?: any;
  context?: any;
};

type GenerateReportOptions = {
  reportData: any;
  fields: any;
  values: any;
  context?: any;
};

type GetReportRequest = {
  id: number;
};

type GetViewRequest = {
  model: string;
  id?: number;
  type: ViewType;
  context?: any;
};

type GetFieldsRequest = {
  model: string;
  fields: string[];
  context?: any;
};

type DefaultGetRequest = {
  model: string;
  fields?: any;
  context?: any;
  extraValues?: any; // For inv_fields many2one's and other fields.
};

type DuplicateRequest = {
  id: number;
  model: string;
  context?: any;
};

type EvalDomainRequest = {
  domain: string;
  values: any;
  context?: any;
  fields?: any;
};

type IsShortcutFavoriteOptions = {
  action_id: number;
  action_type: string;
  res_id: number | boolean;
  view_id: number;
  context?: any;
};

type TreeButOpenOptions = {
  model: string;
  id: number;
  context?: any;
};

type ExportDataOptions = {
  model: string;
  domain: any[];
  fields?: string[];
  format: string;
  limit?: number;
  context?: any;
};

type ConnectionProviderType = {
  getActionStringForModel: (
    model: string,
    requestConfig?: any,
  ) => Promise<string>;
  getViewsForAction: (
    {
      action,
      context,
    }: {
      action: string;
      context?: any;
    },
    requestConfig?: any,
  ) => Promise<ViewData>;
  getView: (
    options: GetViewRequest,
    requestConfig?: any,
  ) => Promise<FormView | TreeView | GraphView>;
  getFields: (options: GetFieldsRequest, requestConfig?: any) => Promise<any>;
  searchAllIds: (
    options: SearchAllIdsRequest,
    requestConfig?: any,
  ) => Promise<number[]>;
  searchCount: (
    options: SearchCountRequest,
    requestConfig?: any,
  ) => Promise<number>;
  search: (options: SearchRequest) => Promise<any[]>;
  searchForTree: (
    options: SearchRequest,
    requestConfig?: any,
  ) => Promise<SearchResponse>;
  update: (options: UpdateObjectRequest, requestConfig?: any) => Promise<any>;
  create: (options: CreateObjectRequest, requestConfig?: any) => Promise<any>;
  deleteObjects: (
    options: DeleteObjectsRequest,
    requestConfig?: any,
  ) => Promise<any>;
  execute: (options: ExecuteRequest, requestConfig?: any) => Promise<any>;
  readObjects: (
    options: ReadObjectsRequest,
    requestConfig?: any,
  ) => Promise<any>;
  readEvalUiObjects: (
    options: ReadEvalUiObjectsRequest,
    requestConfig?: any,
  ) => Promise<any>;
  parseCondition: (
    options: ParseConditionRequest,
    requestConfig?: any,
  ) => Promise<any>;
  executeWorkflow: (
    options: ExecuteRequest,
    requestConfig?: any,
  ) => Promise<any>;
  createReport: (
    options: CreateReportRequest,
    requestConfig?: any,
  ) => Promise<any>;
  getReport: (options: GetReportRequest, requestConfig?: any) => Promise<any>;
  executeOnChange: (
    options: ExecuteOnChangeRequest,
    requestConfig?: any,
  ) => Promise<any>;
  defaultGet: (options: DefaultGetRequest, requestConfig?: any) => Promise<any>;
  getActionData: (
    {
      action,
      context,
    }: {
      action: string;
      context?: any;
    },
    requestConfig?: any,
  ) => Promise<any>;
  nameSearch: (options: NameSearchRequest, requestConfig?: any) => Promise<any>;
  duplicate: (options: DuplicateRequest, requestConfig?: any) => Promise<any>;
  evalDomain: (options: EvalDomainRequest, requestConfig?: any) => Promise<any>;
  getLogInfo: (options: GetLogInfoRequest, requestConfig?: any) => Promise<any>;
  isShortcutFavorite: (
    options: IsShortcutFavoriteOptions,
    requestConfig?: any,
  ) => Promise<number | boolean>;
  removeFavourite: (
    { shortcut_id }: { shortcut_id: number },
    requestConfig?: any,
  ) => Promise<void>;
  addFavourite: (
    options: IsShortcutFavoriteOptions,
    requestConfig?: any,
  ) => Promise<void>;
  treeButOpen: (
    options: TreeButOpenOptions,
    requestConfig?: any,
  ) => Promise<any>;
  exportData: (options: ExportDataOptions, requestConfig?: any) => Promise<any>;
  readForView: (options: {
    model: string;
    view_id: number;
    context: any;
    domain: any[];
  }) => Promise<any>;
  readAggregates: (options: {
    model: string;
    domain: any[];
    aggregateFields: Record<string, string[]>;
  }) => Promise<Record<string, Record<string, number>>>;
  saveUserViewPrefs: (
    { key, preferences }: { key: string; preferences: any },
    requestConfig?: any,
  ) => Promise<any>;
  readUserViewPrefs: (
    { key }: { key: string },
    requestConfig?: any,
  ) => Promise<any>;
};

type ViewType = "tree" | "form" | "dashboard" | "graph" | "calendar";
type ViewTuple = [number | undefined, ViewType];

export type {
  Strings,
  SearchFields,
  TreeView,
  FormView,
  Column,
  WidgetProps,
  SearchRequest,
  SearchResponse,
  ConnectionProviderType,
  UpdateObjectRequest,
  CreateObjectRequest,
  ViewData,
  Views,
  ExecuteRequest,
  ReadObjectsRequest,
  DeleteObjectsRequest,
  CreateReportRequest,
  GetReportRequest,
  ExecuteOnChangeRequest,
  ViewType,
  SearchAllIdsRequest,
  SearchCountRequest,
  GetViewRequest,
  GetFieldsRequest,
  DefaultGetRequest,
  GenerateReportOptions,
  ReadEvalUiObjectsRequest,
  NameSearchRequest,
  DuplicateRequest,
  GetLogInfoRequest,
  IsShortcutFavoriteOptions,
  ParseConditionRequest,
  TreeButOpenOptions,
  ViewTuple,
};
