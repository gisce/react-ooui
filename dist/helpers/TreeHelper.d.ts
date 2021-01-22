import { Tree as TreeOoui } from "ooui";
declare type TreeView = {
    arch: string;
    fields: any;
};
declare type Column = {
    title: string;
    dataIndex: string;
    key: string;
    type?: string;
};
declare const getTree: (treeView: TreeView) => TreeOoui;
declare const getTableColumns: (tree: TreeOoui, booleanComponent: any) => Array<Column>;
declare const getTableItems: (treeOoui: TreeOoui, results: Array<any>) => Array<any>;
export { TreeView, Column, getTableColumns, getTableItems, getTree };
//# sourceMappingURL=TreeHelper.d.ts.map