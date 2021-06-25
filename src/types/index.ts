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
  search_fields: SearchFields;
};

type SearchResponse = {
  totalItems: number;
  results: any[];
};

type SearchRequest = {
  params: Array<any>;
  limit: number;
  offset: number;
  model: string;
  fields: any;
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
};

type ExecuteRequest = {
  model: string;
  action: string;
  payload?: any;
  context?: any;
};

type ReadObjectsRequest = {
  arch?: string;
  fields?: any;
  model: string;
  ids: number[];
};

type DeleteObjectsRequest = {
  model: string;
  ids: number[];
};

type CreateReportRequest = {
  name: string;
  model: string;
  id: number;
  contextReport: any;
  context?: any;
};

type GetReportRequest = {
  id: number;
};

type ConnectionProviderType = {
  getAction: (model: string) => Promise<string>;
  getViewsForAction: ({
    action,
    context,
  }: {
    action: string;
    context?: any;
  }) => Promise<ViewData>;
  getView: (
    model: string,
    type: "tree" | "form"
  ) => Promise<FormView | TreeView>;
  search: (options: SearchRequest) => Promise<SearchResponse>;
  update: (options: UpdateObjectRequest) => Promise<any>;
  create: (options: CreateObjectRequest) => Promise<any>;
  delete: (options: DeleteObjectsRequest) => Promise<any>;
  execute: (options: ExecuteRequest) => Promise<any>;
  readObjects: (options: ReadObjectsRequest) => Promise<any>;
  executeWorkflow: (options: ExecuteRequest) => Promise<any>;
  createReport: (options: CreateReportRequest) => Promise<number>;
  getReport: (options: GetReportRequest) => Promise<any>;
};

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
};
