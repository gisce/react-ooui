import { Field as FieldOoui } from "ooui";

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

type TreeView = {
  arch: string;
  fields: any;
};

type FormView = TreeView & {
  search_fields?: SearchFields;
  toolbar?: any;
};

type SearchResponse = {
  totalItems: number;
  results: any[];
  attrsEvaluated?: any;
};

type SearchRequest = {
  params: Array<any>;
  limit?: number;
  offset?: number;
  model: string;
  fields?: any;
  context?: any;
  attrs?: any;
};

type SearchCountRequest = {
  params: Array<any>;
  model: string;
  totalItems: number;
  context?: any;
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
  arch?: string;
  fields?: any;
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

type DeleteObjectsRequest = {
  model: string;
  ids: number[];
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
  type: ViewType;
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

type ConnectionProviderType = {
  getActionStringForModel: (model: string) => Promise<string>;
  getViewsForAction: ({
    action,
    context,
  }: {
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
  readEvalUiObjects: (options: ReadEvalUiObjectsRequest) => Promise<any>;
  executeWorkflow: (options: ExecuteRequest) => Promise<any>;
  createReport: (options: CreateReportRequest) => Promise<any>;
  getReport: (options: GetReportRequest) => Promise<any>;
  executeOnChange: (options: ExecuteOnChangeRequest) => Promise<any>;
  defaultGet: (options: DefaultGetRequest) => Promise<any>;
  getActionData: ({
    action,
    context,
  }: {
    action: string;
    context?: any;
  }) => Promise<any>;
  nameSearch: (options: NameSearchRequest) => Promise<any>;
  duplicate: (options: DuplicateRequest) => Promise<any>;
};

type ViewType = "tree" | "form";

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
  SearchCountRequest,
  GetViewRequest,
  DefaultGetRequest,
  GenerateReportOptions,
  ReadEvalUiObjectsRequest,
  NameSearchRequest,
  DuplicateRequest,
};
