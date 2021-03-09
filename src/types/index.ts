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
  ids: number[];
};

type ConnectionProviderType = {
  getViewsForAction: (action: string) => Promise<ViewData>;
  getView: (model: string, type: "tree" | "form") => Promise<FormView|TreeView>;
  search: (options: SearchRequest) => Promise<SearchResponse>;
  update: (options: UpdateObjectRequest) => Promise<any>;
  create: (options: CreateObjectRequest) => Promise<any>;
  execute: (options: ExecuteRequest) => Promise<any>;
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
};
