import { Column, FormView, TreeView } from "@/types/index";
import { TreeType } from "@/views/actionViews/TreeActionView";
import { Tree as TreeOoui } from "@gisce/ooui";
import { PaginatedTableRef } from "@gisce/react-formiga-table";
import { CheckboxState } from "@gisce/react-formiga-table/dist/components/PaginatedTable/PaginatedHeaderCheckbox";
import { RefObject } from "react";

export type OnRowClickedData = {
  id: number;
  model: string;
  formView: FormView;
  treeView: TreeView;
};

export type SearchTreePaginatedProps = {
  model: string;
  formView: FormView;
  treeView: TreeView;
  onRowClicked: (data: OnRowClickedData) => void;
  nameSearch?: string;
  domain?: any[];
  visible?: boolean;
  rootTree?: boolean;
  parentContext?: Record<string, unknown>;
  filterType?: "side" | "top";
  onChangeTreeType?: (type: TreeType) => void;
};

export type PaginatedSearchControlsProps = {
  filterType: "side" | "top";
  formView?: FormView;
  treeView?: TreeView;
  searchVisible: boolean;
  searchValues: any;
  onSearchFilterClear: () => void;
  onSearchFilterSubmit: (values: any) => void;
  onSideSearchFilterClose: () => void;
  onSideSearchFilterSubmit: (values: any) => void;
};

export type PaginatedTableContentProps = {
  columns: Column[];
  treeOoui: TreeOoui;
  strings: Record<string, string>;
  isLoading: boolean;
  availableHeight: number;
  results: any[];
  handleRowDoubleClick: (data: OnRowClickedData) => void;
  onRowHasBeenSelected:
    | ((changedRow: { id: number; selected: boolean }) => void)
    | undefined;
  updateColumnState: (state: any) => void;
  getColumnState: () => any;
  setTreeFirstVisibleRow?: (index: number) => void;
  onGetFirstVisibleRowIndex?: () => number;
  onGetFirstVisibleColumn?: (() => string | undefined) | undefined;
  setTreeFirstVisibleColumn?: ((columnId: string) => void) | undefined;
  footerComp: React.ReactNode;
  statusComp: (status: any) => React.ReactNode;
  onRowStatus: (record: any) => any;
  onRowStyle: (record: any) => any;
  headerCheckboxState: CheckboxState;
  onHeaderCheckboxClick: () => void;
  refresh: () => void;
  actionViewSortState?: any;
  onSortChange: (state: any) => void;
  tableRef: RefObject<PaginatedTableRef>;
  onChangeTreeType?: (type: TreeType) => void;
  onFetchChildrenForRecord?: (item: any) => Promise<any[]>;
  childField?: string;
};
