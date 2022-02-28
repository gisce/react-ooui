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
exports.SearchParams = void 0;
var react_1 = __importStar(require("react"));
var Integer_1 = require("@/widgets/base/Integer");
var antd_1 = require("antd");
var ooui_1 = require("@gisce/ooui");
var LocaleContext_1 = require("@/context/LocaleContext");
function SearchParams(props) {
    var onLimitChange = props.onLimitChange;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    var limitOoui = new ooui_1.Integer({ name: "limit" });
    var offsetOoui = new ooui_1.Integer({ name: "offset" });
    return (react_1.default.createElement("div", { className: "pl-2 pt-2" },
        react_1.default.createElement(antd_1.Row, { key: "count_params" }, t("parameters")),
        react_1.default.createElement(antd_1.Space, { align: "center" },
            t("limit") + " :",
            react_1.default.createElement(Integer_1.Integer, { ooui: limitOoui, onChange: function (newValue) {
                    onLimitChange === null || onLimitChange === void 0 ? void 0 : onLimitChange(newValue);
                } }),
            t("first") + " :",
            react_1.default.createElement(Integer_1.Integer, { ooui: offsetOoui }))));
}
exports.SearchParams = SearchParams;
//# sourceMappingURL=SearchParams.js.map