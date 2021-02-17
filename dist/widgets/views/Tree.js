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
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
const treeHelper_1 = require("@/helpers/treeHelper");
const LocalesContext_1 = require("@/context/LocalesContext");
function Tree(props) {
    const { page, limit, total, treeView, results, onRequestPageChange, loading, strings, } = props;
    const [items, setItems] = react_1.useState([]);
    const [columns, setColumns] = react_1.useState([]);
    react_1.useEffect(() => {
        const tree = treeHelper_1.getTree(treeView);
        const booleanComponentFn = (booleanField) => {
            return react_1.default.createElement(antd_1.Checkbox, { defaultChecked: booleanField, disabled: true });
        };
        const columns = treeHelper_1.getTableColumns(tree, booleanComponentFn);
        const items = treeHelper_1.getTableItems(tree, results);
        setColumns(columns);
        setItems(items);
    }, [treeView, results]);
    const from = (page - 1) * limit + 1;
    const to = from - 1 + items.length;
    const summary = loading ? (react_1.default.createElement(antd_1.Spin, null)) : total === 0 ? (LocalesContext_1.getLocalizedString("no_results", strings)) : (LocalesContext_1.getLocalizedString("summary", strings)
        .replace("{from}", from === null || from === void 0 ? void 0 : from.toString())
        .replace("{to}", to === null || to === void 0 ? void 0 : to.toString())
        .replace("{total}", total === null || total === void 0 ? void 0 : total.toString()));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        summary,
        loading ? null : (react_1.default.createElement(antd_1.Pagination, { total: total, pageSize: limit, current: page, className: "pb-5 pt-5", showSizeChanger: false, onChange: onRequestPageChange })),
        react_1.default.createElement(antd_1.Table, { columns: columns, dataSource: items, pagination: false, loading: loading })));
}
exports.default = Tree;
//# sourceMappingURL=Tree.js.map