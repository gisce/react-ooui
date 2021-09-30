import { Tree as TreeOoui } from "ooui";
import { TreeView, Column } from "@/types";
declare const getTree: (treeView: TreeView) => TreeOoui;
declare const getTableColumns: (tree: TreeOoui, components: any) => Array<Column>;
declare const getTableItems: (treeOoui: TreeOoui, results: Array<any>) => Array<any>;
declare function itemHasBooleans({ values, fields }: {
    values: any;
    fields: any;
}): boolean;
declare function convertBooleansToNumeric({ values, fields, }: {
    values: any;
    fields: any;
}): any;
export { getTableColumns, getTableItems, getTree, convertBooleansToNumeric, itemHasBooleans, };
//# sourceMappingURL=treeHelper.d.ts.map