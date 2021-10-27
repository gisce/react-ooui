"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var treeHelper_1 = require("@/helpers/treeHelper");
var LocaleContext_1 = require("@/context/LocaleContext");
var Many2oneSuffix_1 = require("../base/many2one/Many2oneSuffix");
var dynamicColumnsHelper_1 = require("@/helpers/dynamicColumnsHelper");
var timeHelper_1 = require("@/helpers/timeHelper");
var booleanComponentFn = function (value) {
    return react_1.default.createElement(antd_1.Checkbox, { defaultChecked: value, disabled: true });
};
var many2OneComponentFn = function (m2oField) {
    return (react_1.default.createElement(antd_1.Space, null,
        react_1.default.createElement(react_1.default.Fragment, null, m2oField.value),
        react_1.default.createElement(Many2oneSuffix_1.Many2oneSuffix, { id: m2oField.id, model: m2oField.model })));
};
var textComponentFn = function (value) {
    return react_1.default.createElement("div", { style: { whiteSpace: "pre-line" } }, value);
};
var one2ManyComponentFn = function (value) {
    var length = Array.isArray(value) ? value.length : 0;
    return react_1.default.createElement(react_1.default.Fragment, null, "( " + length + " )");
};
var progressBarComponentFn = function (value) {
    return react_1.default.createElement(antd_1.Progress, { percent: value });
};
var floatTimeComponent = function (value) {
    return react_1.default.createElement(react_1.default.Fragment, null, timeHelper_1.parseFloatToString(value));
};
function Tree(props) {
    var _a = props.page, page = _a === void 0 ? 1 : _a, limit = props.limit, total = props.total, treeView = props.treeView, results = props.results, onRequestPageChange = props.onRequestPageChange, loading = props.loading, onRowClicked = props.onRowClicked, _b = props.showPagination, showPagination = _b === void 0 ? true : _b, rowSelection = props.rowSelection, scrollY = props.scrollY, _c = props.colorsForResults, colorsForResults = _c === void 0 ? {} : _c;
    var _d = react_1.useState([]), items = _d[0], setItems = _d[1];
    var _e = react_1.useState([]), columns = _e[0], setColumns = _e[1];
    var errorInParseColors = react_1.useRef(false);
    var treeOoui = react_1.useRef(null);
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    react_1.useEffect(function () {
        treeOoui.current = treeHelper_1.getTree(treeView);
        var columns = treeHelper_1.getTableColumns(treeOoui.current, {
            boolean: booleanComponentFn,
            many2one: many2OneComponentFn,
            text: textComponentFn,
            one2many: one2ManyComponentFn,
            many2many: one2ManyComponentFn,
            progressbar: progressBarComponentFn,
            float_time: floatTimeComponent,
        });
        setColumns(columns);
    }, [treeView]);
    react_1.useEffect(function () {
        errorInParseColors.current = false;
        var items = treeHelper_1.getTableItems(treeOoui.current, results);
        setItems(items);
    }, [results]);
    var from = (page - 1) * limit + 1;
    var to = from - 1 + items.length;
    var summary = loading
        ? null
        : total === 0
            ? t("no_results")
            : t("summary")
                .replace("{from}", from === null || from === void 0 ? void 0 : from.toString())
                .replace("{to}", to === null || to === void 0 ? void 0 : to.toString())
                .replace("{total}", total === null || total === void 0 ? void 0 : total.toString());
    var pagination = function () {
        if (!showPagination) {
            return null;
        }
        return loading ? null : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(antd_1.Row, { align: "bottom", className: "pb-4" },
                react_1.default.createElement(antd_1.Col, { span: 12 },
                    react_1.default.createElement(antd_1.Pagination, { total: total, pageSize: limit, current: page, showSizeChanger: false, onChange: onRequestPageChange })),
                react_1.default.createElement(antd_1.Col, { span: 12, className: "text-right" }, summary))));
    };
    function getSums() {
        var _a;
        var tree = treeOoui.current;
        var sumFields = tree.columns
            .filter(function (it) { return it.sum !== undefined; })
            .map(function (it) {
            return { label: it.sum, field: it.id };
        });
        if (!sumFields || sumFields.length === 0) {
            return null;
        }
        var summary = [];
        var sumItems = ((_a = rowSelection === null || rowSelection === void 0 ? void 0 : rowSelection.selectedRowKeys) === null || _a === void 0 ? void 0 : _a.length) > 0
            ? items.filter(function (result) {
                return rowSelection === null || rowSelection === void 0 ? void 0 : rowSelection.selectedRowKeys.includes(result.id);
            })
            : items;
        sumFields.forEach(function (sumField) {
            var total = sumItems.reduce(function (prev, current) {
                if (current[sumField.field] && !isNaN(current[sumField.field]))
                    return prev + current[sumField.field];
                else
                    return prev;
            }, 0);
            summary.push(sumField.label + ": " + Math.round(total * 100) / 100);
        });
        return (react_1.default.createElement("div", { className: "mt-2 p-1 pb-0 pl-2 bg-gray-50" }, summary.join(", ")));
    }
    var dataTable;
    var adjustedHeight = scrollY;
    // This helper function helps to calculate the width for each column
    // based on all table cells - column cell and source cell
    if (treeOoui.current !== null) {
        var maxWidthPerCell = 600;
        dataTable = dynamicColumnsHelper_1.calculateColumnsWidth(columns, items, maxWidthPerCell);
        var tree = treeOoui.current;
        if (scrollY && tree.columns.some(function (it) { return it.sum !== undefined; })) {
            adjustedHeight = scrollY - 30;
        }
    }
    return treeOoui.current === null ? (react_1.default.createElement(antd_1.Spin, null)) : (react_1.default.createElement("div", null,
        pagination(),
        react_1.default.createElement(antd_1.Table, { columns: dataTable.columns, scroll: { x: dataTable.tableWidth, y: adjustedHeight }, size: "small", dataSource: items, pagination: false, loading: loading, rowClassName: "cursor-pointer select-none", rowKey: function (item) {
                return item.id;
            }, onRow: function (record) {
                var style = undefined;
                if (colorsForResults[record.id]) {
                    style = { color: colorsForResults[record.id] };
                }
                return {
                    style: style,
                    onDoubleClick: function () {
                        if (onRowClicked)
                            onRowClicked(record.id);
                    },
                };
            }, rowSelection: rowSelection }),
        getSums()));
}
exports.default = Tree;
//# sourceMappingURL=Tree.js.map