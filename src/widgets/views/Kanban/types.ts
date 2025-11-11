export type KanbanRecord = {
  id: number;
  [key: string]: any;
};

export type ColumnDefinition = {
  id: string;
  label: string;
  originalValue: any;
};
