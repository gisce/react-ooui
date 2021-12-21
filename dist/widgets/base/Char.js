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
exports.Char = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var Config_1 = __importDefault(require("@/Config"));
var icons_1 = require("@ant-design/icons");
var ButtonWithTooltip_1 = __importDefault(require("@/common/ButtonWithTooltip"));
var LocaleContext_1 = require("@/context/LocaleContext");
var TranslationModal_1 = require("../modals/TranslationModal");
var FormContext_1 = require("@/context/FormContext");
var Char = function (props) {
    var ooui = props.ooui;
    var _a = ooui, id = _a.id, readOnly = _a.readOnly, isPassword = _a.isPassword, required = _a.required, translatable = _a.translatable;
    var requiredClass = required && !readOnly ? Config_1.default.requiredClass : undefined;
    return (react_1.default.createElement(Field_1.default, __assign({ required: required }, props), isPassword ? (react_1.default.createElement(antd_1.Input.Password, { disabled: readOnly, id: id })) : translatable && !readOnly ? (react_1.default.createElement(TranslatableInput, { field: id, requiredClass: requiredClass })) : (react_1.default.createElement(antd_1.Input, { disabled: readOnly || translatable, id: id, className: requiredClass }))));
};
exports.Char = Char;
var TranslatableInput = function (_a) {
    var value = _a.value, field = _a.field, requiredClass = _a.requiredClass, onChange = _a.onChange;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    var formContext = react_1.useContext(FormContext_1.FormContext);
    var _b = formContext || {}, activeId = _b.activeId, activeModel = _b.activeModel;
    var _c = react_1.useState(false), translationModalVisible = _c[0], setTranslationModalVisible = _c[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Row, { gutter: 8, wrap: false },
            react_1.default.createElement(antd_1.Col, { flex: "auto" },
                react_1.default.createElement(antd_1.Input, { value: value, disabled: true, id: field, className: requiredClass, onChange: function (event) {
                        onChange === null || onChange === void 0 ? void 0 : onChange(event.target.value);
                    } })),
            react_1.default.createElement(antd_1.Col, { flex: "32px" },
                react_1.default.createElement(ButtonWithTooltip_1.default, { tooltip: t("translate"), icon: react_1.default.createElement(icons_1.TranslationOutlined, null), onClick: function () {
                        // TODO: must ensure that model is previously saved and validated, like a button
                        setTranslationModalVisible(true);
                    } }, t("translate")))),
        react_1.default.createElement(TranslationModal_1.TranslationModal, { id: activeId, model: activeModel, field: field, visible: translationModalVisible, onCloseModal: function () {
                // TODO: must reload the form
                setTranslationModalVisible(false);
            } })));
};
//# sourceMappingURL=Char.js.map