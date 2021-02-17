"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTree = exports.getTableItems = exports.getTableColumns = void 0;
const ooui_1 = require("ooui");
const getTree = (treeView) => {
    const xml = treeView.arch;
    const fields = treeView.fields;
    const tree = new ooui_1.Tree(fields);
    tree.parse(xml);
    return tree;
};
exports.getTree = getTree;
const getTableColumns = (tree, booleanComponent) => {
    const tableColumns = tree.columns.map((column) => {
        const type = column.constructor.name;
        const key = column.id;
        const render = type === "Boolean"
            ? (booleanField) => {
                return booleanComponent(booleanField);
            }
            : undefined;
        return {
            key,
            dataIndex: key,
            title: column.label,
            type,
            render,
            sorter: (a, b) => {
                if (a[key] < b[key])
                    return -1;
                if (a[key] > b[key])
                    return 1;
                return 0;
            },
        };
    });
    return tableColumns;
};
exports.getTableColumns = getTableColumns;
const getTableItems = (treeOoui, results) => {
    const tableItems = results.map((item) => {
        const parsedItem = {};
        Object.keys(item).map((key) => {
            if (key === "id") {
                parsedItem[key] = item[key];
            }
            else {
                const widget = treeOoui.findById(key);
                if (widget instanceof ooui_1.Selection) {
                    const selection = widget;
                    parsedItem[key] = selection.selectionValues.get(item[key]);
                }
                else if (widget instanceof ooui_1.Many2one) {
                    parsedItem[key] = item[key][1];
                }
                else if (widget instanceof ooui_1.Boolean) {
                    parsedItem[key] = item[key];
                }
                else if (widget) {
                    parsedItem[key] = item[key] === false ? "" : item[key];
                }
            }
        });
        return parsedItem;
    });
    return tableItems;
};
exports.getTableItems = getTableItems;
//# sourceMappingURL=treeHelper.js.map