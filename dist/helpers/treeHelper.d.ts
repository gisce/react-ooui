import { Tree as TreeOoui } from "ooui";
import { TreeView, Column } from "@/types";
declare const getTree: (treeView: TreeView) => TreeOoui;
declare const getTableColumns: (tree: TreeOoui, components: any) => Array<Column>;
declare const getTableItems: (treeOoui: TreeOoui, results: Array<any>) => Array<any>;
export { getTableColumns, getTableItems, getTree };
//# sourceMappingURL=treeHelper.d.ts.map