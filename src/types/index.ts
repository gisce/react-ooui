import { Field as FieldOoui } from "ooui";

type Strings = {
  [key: string]: string;
};

type SearchFields = {
  primary: string[];
  secondary: string[];
};

type TreeView = {
  arch: string;
  fields: any;
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

type FormView = {
  arch: string;
  fields: any;
  search_fields: SearchFields;
};

export type { Strings, SearchFields, TreeView, FormView, Column, WidgetProps };
