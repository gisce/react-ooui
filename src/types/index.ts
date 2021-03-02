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
};

type CreateObjectRequest = {
  model: string;
  values: any;
};

type UpdateObjectRequest = {
  id: number;
};

type ConnectionProviderType = {
  getForm: (model: string) => Promise<FormView>;
  getTree: (model: string) => Promise<TreeView>;
  search: (options: SearchRequest) => Promise<SearchResponse>;
  update: (options: UpdateObjectRequest) => Promise<any>;
  create: (options: CreateObjectRequest) => Promise<any>;
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
  CreateObjectRequest
};
