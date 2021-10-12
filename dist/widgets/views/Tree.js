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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var treeHelper_1 = require("@/helpers/treeHelper");
var react_cool_dimensions_1 = __importDefault(require("react-cool-dimensions"));
var use_deep_compare_effect_1 = __importDefault(require("use-deep-compare-effect"));
var LocaleContext_1 = require("@/context/LocaleContext");
var Many2oneSuffix_1 = require("../base/many2one/Many2oneSuffix");
function Tree(props) {
    var _a = props.page, page = _a === void 0 ? 1 : _a, limit = props.limit, total = props.total, treeView = props.treeView, results = props.results, onRequestPageChange = props.onRequestPageChange, loading = props.loading, onRowClicked = props.onRowClicked, _b = props.showPagination, showPagination = _b === void 0 ? true : _b, rowSelection = props.rowSelection, scrollY = props.scrollY, _c = props.colorsForResults, colorsForResults = _c === void 0 ? {} : _c;
    var _d = react_1.useState([]), items = _d[0], setItems = _d[1];
    var _e = react_1.useState([]), columns = _e[0], setColumns = _e[1];
    var errorInParseColors = react_1.useRef(false);
    var _f = react_cool_dimensions_1.default(), width = _f.width, containerRef = _f.ref;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    use_deep_compare_effect_1.default(function () {
        var tree = treeHelper_1.getTree(treeView);
        errorInParseColors.current = false;
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
        var columns = treeHelper_1.getTableColumns(tree, {
            boolean: booleanComponentFn,
            many2one: many2OneComponentFn,
            text: textComponentFn,
            one2many: one2ManyComponentFn,
            many2many: one2ManyComponentFn,
            progressbar: progressBarComponentFn,
        });
        var items = treeHelper_1.getTableItems(tree, results);
        setColumns(columns);
        setItems(items);
    }, [treeView, results]);
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
            summary,
            react_1.default.createElement(antd_1.Pagination, { total: total, pageSize: limit, current: page, className: "pb-5 pt-5", showSizeChanger: false, onChange: onRequestPageChange })));
    };
    function getSums() {
        var tree = treeHelper_1.getTree(treeView);
        var sumFields = tree.columns
            .filter(function (it) { return it.sum !== undefined; })
            .map(function (it) {
            return { label: it.sum, field: it.id };
        });
        if (!sumFields || sumFields.length === 0) {
            return null;
        }
        var summary = [];
        sumFields.forEach(function (sumField) {
            var total = items.reduce(function (prev, current) {
                return prev + current[sumField.field];
            }, 0);
            summary.push(sumField.label + ": " + total);
        });
        return react_1.default.createElement("div", { className: "mt-5 p-2 bg-blueGray-100" }, summary.join(", "));
    }
    return (react_1.default.createElement("div", { ref: containerRef },
        pagination(),
        react_1.default.createElement(antd_1.Table, { style: { width: width }, scroll: { x: true, y: scrollY }, columns: columns, dataSource: items, pagination: false, loading: loading, rowClassName: "cursor-pointer select-none", rowKey: function (item) {
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