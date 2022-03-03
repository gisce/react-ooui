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
var use_deep_compare_effect_1 = __importDefault(require("use-deep-compare-effect"));
var ooui_1 = require("@gisce/ooui");
var SearchField_1 = require("./SearchField");
var SearchBottomBar_1 = require("./SearchBottomBar");
var SearchParams_1 = require("./SearchParams");
var searchFilterHelper_1 = require("@/helpers/searchFilterHelper");
function SearchFilter(props) {
    var fields = props.fields, _a = props.searchFields, searchFields = _a === void 0 ? { primary: [], secondary: [] } : _a, onClear = props.onClear, onSubmit = props.onSubmit, isSearching = props.isSearching, offset = props.offset, limit = props.limit, onLimitChange = props.onLimitChange;
    var _b = react_1.useState(), simpleSearchFields = _b[0], setSimpleSearchFields = _b[1];
    var _c = react_1.useState(), advancedSearchFields = _c[0], setAdvancedSearchFields = _c[1];
    var _d = react_1.useState(false), advancedFilter = _d[0], setAdvancedFilter = _d[1];
    var form = antd_1.Form.useForm()[0];
    var getRowsAndCols = function () {
        if (!advancedSearchFields) {
            return;
        }
        var fields = advancedFilter ? advancedSearchFields : simpleSearchFields;
        var rows = fields === null || fields === void 0 ? void 0 : fields.rows;
        return rows === null || rows === void 0 ? void 0 : rows.map(function (row, i) {
            return (react_1.default.createElement(antd_1.Row, { key: i }, row.map(function (item, j) {
                return (react_1.default.createElement(antd_1.Col, { xs: 24, className: "p-2", xl: 6, key: j },
                    react_1.default.createElement(SearchField_1.SearchField, { field: item })));
            })));
        });
    };
    use_deep_compare_effect_1.default(function () {
        setAdvancedFilter(false);
        var sfo = new ooui_1.SearchFilter(searchFields, fields);
        sfo.parse();
        setSimpleSearchFields(sfo._simpleSearchContainer);
        setAdvancedSearchFields(sfo._advancedSearchContainer);
    }, [fields, searchFields]);
    var rows = getRowsAndCols();
    var onFinish = function (values) {
        var limit = values.limit, offset = values.offset;
        delete values.offset;
        delete values.limit;
        var newParams = searchFilterHelper_1.getParamsForFields(values, fields);
        onSubmit({ params: newParams, offset: offset, limit: limit });
    };
    return (react_1.default.createElement(antd_1.Form, { className: "bg-gray-50 rounded p-3 shadow-md", form: form, onFinish: onFinish, initialValues: { offset: offset, limit: limit } },
        rows,
        advancedFilter && react_1.default.createElement(SearchParams_1.SearchParams, { onLimitChange: onLimitChange }),
        react_1.default.createElement(SearchBottomBar_1.SearchBottomBar, { advancedFilter: advancedFilter, onAdvancedFilterToggle: function () {
                setAdvancedFilter(!advancedFilter);
            }, onClear: function () {
                form.resetFields();
                onClear();
            }, isSearching: isSearching })));
}
exports.default = SearchFilter;
//# sourceMappingURL=SearchFilter.js.map