export interface BaseField {
  is_function: boolean;
  string: string;
  type: string;
  readonly?: number;
  help?: string;
  widget?: string;
  context?: string;
  domain?: any[];
  views: Record<string, any>; // Adjust if you have more specific information about the structure of 'views'
}

export interface CharField extends BaseField {
  size: number;
}

export interface BooleanField extends BaseField {
  // Additional boolean specific properties (if any)
}

export interface One2ManyField extends BaseField {
  inv_field: string;
  relation: string;
}

export interface Many2OneField extends One2ManyField {}

export interface SelectionField extends BaseField {
  selection: Array<[string, string]>;
  size?: number;
}

export interface FloatField extends BaseField {
  digits: [number, number];
}

export type Fields = {
  [key: string]:
    | CharField
    | BooleanField
    | One2ManyField
    | Many2OneField
    | SelectionField
    | FloatField;
};
