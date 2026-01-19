export interface MockFieldDefinition {
  type:
    | "char"
    | "text"
    | "integer"
    | "float"
    | "boolean"
    | "date"
    | "datetime"
    | "time"
    | "selection"
    | "many2one"
    | "one2many"
    | "many2many"
    | "binary"
    | "html"
    | "reference";
  string: string;
  required?: boolean;
  readonly?: boolean;
  help?: string;
  digits?: [number, number];
  selection?: Array<[string | number, string]>;
  relation?: string;
  relation_field?: string;
  domain?: any[];
  context?: Record<string, any>;
  is_function?: boolean;
}

export interface MockViewDefinition {
  view_id?: number;
  type: "form" | "tree" | "dashboard" | "graph" | "calendar" | "kanban";
  arch: string;
  fields: Record<string, MockFieldDefinition>;
  toolbar?: {
    action?: any[];
    relate?: any[];
    print?: any[];
  };
}

export interface MockRecord {
  id: number;
  [key: string]: any;
}

export interface MockRelatedModel {
  records: Array<{ id: number; name: string; [key: string]: any }>;
  view?: MockViewDefinition;
}

export interface FormPreviewConfig {
  arch: string;
  fields: Record<string, MockFieldDefinition>;
  values: Record<string, any>;
  model?: string;
  relatedModels?: Record<string, MockRelatedModel>;
  readOnly?: boolean;
}
