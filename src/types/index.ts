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

export { Strings, SearchFields, TreeView, Column };
