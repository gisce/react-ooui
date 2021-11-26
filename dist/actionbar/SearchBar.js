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
var LocaleContext_1 = require("@/context/LocaleContext");
var icons_1 = require("@ant-design/icons");
function SearchBar(props) {
    var onSearch = props.onSearch, _a = props.disabled, disabled = _a === void 0 ? false : _a, searchText = props.searchText;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    var form = antd_1.Form.useForm()[0];
    var _b = react_1.useState(false), mustShowClearSuffix = _b[0], setMustShowClearSuffix = _b[1];
    function handleSubmit(values) {
        onSearch(values.search);
    }
    react_1.useEffect(function () {
        form.setFieldsValue({ search: searchText });
    }, [searchText]);
    function clear() {
        setMustShowClearSuffix(false);
        form.setFieldsValue({ search: undefined });
        onSearch(undefined);
    }
    return (react_1.default.createElement(antd_1.Form, { form: form, onFinish: handleSubmit, autoComplete: "off" },
        react_1.default.createElement(antd_1.Row, { align: "middle", justify: "end" },
            react_1.default.createElement(antd_1.Col, null,
                react_1.default.createElement(antd_1.Form.Item, { name: "search", noStyle: true },
                    react_1.default.createElement(antd_1.Input, { disabled: disabled, onChange: function (e) {
                            setMustShowClearSuffix(e.target.value.length > 0);
                        }, suffix: (mustShowClearSuffix ||
                            (searchText && searchText.length > 0)) && (react_1.default.createElement(antd_1.Tooltip, { title: t("clear") },
                            react_1.default.createElement(icons_1.CloseCircleFilled, { style: { color: "rgba(0,0,0,.45)" }, onClick: clear }))) }))),
            react_1.default.createElement(antd_1.Col, null,
                react_1.default.createElement(antd_1.Button, { htmlType: "submit", disabled: disabled }, t("search"))))));
}
exports.default = SearchBar;
//# sourceMappingURL=SearchBar.js.map