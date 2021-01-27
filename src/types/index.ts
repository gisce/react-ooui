export type Strings = {
  [key: string]: string;
};

export type SearchFields = {
  primary: string[];
  secondary: string[];
};

export type TreeView = {
  arch: string;
  fields: any;
};

export type Column = {
  title: string;
  dataIndex: string;
  key: string;
  type?: string;
};