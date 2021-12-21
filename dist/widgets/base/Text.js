"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Field_1 = __importDefault(require("@/common/Field"));
var Config_1 = __importDefault(require("@/Config"));
var ButtonWithTooltip_1 = __importDefault(require("@/common/ButtonWithTooltip"));
var icons_1 = require("@ant-design/icons");
var LocaleContext_1 = require("@/context/LocaleContext");
var TextArea = antd_1.Input.TextArea;
var Text = function (props) {
    var ooui = props.ooui;
    var readOnly = ooui.readOnly, required = ooui.required, height = ooui.height, translatable = ooui.translatable;
    var requiredClass = required && !readOnly ? Config_1.default.requiredClass : undefined;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    function input() {
        return (react_1.default.createElement(TextArea, { disabled: readOnly || translatable, className: requiredClass, style: { height: height ? height + "px" : "100%" }, rows: 4 }));
    }
    function translatableInput() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(antd_1.Row, { gutter: 8, wrap: false }, input()),
            react_1.default.createElement(antd_1.Row, { justify: "end", style: { paddingTop: 5 } },
                react_1.default.createElement(ButtonWithTooltip_1.default, { tooltip: "Translate", icon: react_1.default.createElement(icons_1.TranslationOutlined, null), onClick: function () { } }, t("translate")))));
    }
    return (react_1.default.createElement(Field_1.default, __assign({ required: required }, props), translatable ? translatableInput() : input()));
};
exports.default = Text;
//# sourceMappingURL=Text.js.map