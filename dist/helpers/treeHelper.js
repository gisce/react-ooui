"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTree = exports.getTableItems = exports.getTableColumns = void 0;
var ooui_1 = require("ooui");
var getTree = function (treeView) {
    var xml = treeView.arch;
    var fields = treeView.fields;
    var tree = new ooui_1.Tree(fields);
    tree.parse(xml);
    return tree;
};
exports.getTree = getTree;
var getTableColumns = function (tree, components) {
    var tableColumns = tree.columns.map(function (column) {
        var type = column.type;
        var key = column.id;
        var component = components === null || components === void 0 ? void 0 : components[type];
        var render;
        if (component) {
            render = function (item) {
                return component(item);
            };
        }
        return {
            key: key,
            dataIndex: key,
            title: column.label,
            render: render,
            sorter: function (a, b) {
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
var getTableItems = function (treeOoui, results) {
    var tableItems = results.map(function (item) {
        var parsedItem = {};
        Object.keys(item).map(function (key) {
            if (key === "id") {
                parsedItem[key] = item[key];
            }
            else {
                var widget = treeOoui.findById(key);
                if (widget instanceof ooui_1.Selection) {
                    var selection = widget;
                    parsedItem[key] = selection.selectionValues.get(item[key]);
                }
                else if (widget instanceof ooui_1.Many2one) {
                    parsedItem[key] = item[key] &&
                        Array.isArray(item[key]) &&
                        item[key].length === 2 && {
                        model: widget.relation,
                        id: item[key][0],
                        value: item[key][1],
                    };
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