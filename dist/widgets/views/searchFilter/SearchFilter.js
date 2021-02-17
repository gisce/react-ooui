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
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
require("antd/dist/antd.css");
require("@/tailwind.generated.css");
const ooui_1 = require("ooui");
const SearchField_1 = require("./SearchField");
const SearchBottomBar_1 = require("./SearchBottomBar");
const LocalesContext_1 = __importDefault(require("@/context/LocalesContext"));
const SearchParams_1 = require("./SearchParams");
const searchFilterHelper_1 = require("@/helpers/searchFilterHelper");
function SearchFilter(props) {
    const { fields, searchFields, onClear, onSubmit, isSearching, offset, limit, strings, } = props;
    const [simpleSearchFields, setSimpleSearchFields] = react_1.useState();
    const [advancedSearchFields, setAdvancedSearchFields] = react_1.useState();
    const [advancedFilter, setAdvancedFilter] = react_1.useState(false);
    const [form] = antd_1.Form.useForm();
    const getRowsAndCols = () => {
        if (!advancedSearchFields) {
            return;
        }
        const fields = advancedFilter ? advancedSearchFields : simpleSearchFields;
        const rows = fields === null || fields === void 0 ? void 0 : fields.rows;
        return rows === null || rows === void 0 ? void 0 : rows.map((row, i) => {
            return (react_1.default.createElement(antd_1.Row, { key: i }, row.map((item, j) => {
                return (react_1.default.createElement(antd_1.Col, { xs: 24, className: "p-2", xl: 6, key: j },
                    react_1.default.createElement(SearchField_1.SearchField, { field: item })));
            })));
        });
    };
    react_1.useEffect(() => {
        const sfo = new ooui_1.SearchFilter(searchFields, fields);
        sfo.parse();
        setSimpleSearchFields(sfo._simpleSearchContainer);
        setAdvancedSearchFields(sfo._advancedSearchContainer);
    }, [fields, searchFields]);
    const rows = getRowsAndCols();
    const onFinish = (values) => {
        const { limit, offset } = values;
        delete values.offset;
        delete values.limit;
        const newParams = searchFilterHelper_1.getParamsForFields(values, fields);
        onSubmit({ params: newParams, offset, limit });
    };
    return (react_1.default.createElement(LocalesContext_1.default, { strings: strings },
        react_1.default.createElement(antd_1.Form, { className: "bg-gray-100 rounded p-3", form: form, onFinish: onFinish, initialValues: { offset, limit } },
            rows,
            advancedFilter && react_1.default.createElement(SearchParams_1.SearchParams, null),
            react_1.default.createElement(SearchBottomBar_1.SearchBottomBar, { advancedFilter: advancedFilter, onAdvancedFilterToggle: () => {
                    setAdvancedFilter(!advancedFilter);
                }, onClear: () => {
                    form.resetFields();
                    onClear();
                }, isSearching: isSearching }))));
}
exports.default = SearchFilter;
//# sourceMappingURL=SearchFilter.js.map