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
var TranslationModal_1 = require("../modals/TranslationModal");
var FormContext_1 = require("@/context/FormContext");
var TextArea = antd_1.Input.TextArea;
var Text = function (props) {
    var ooui = props.ooui;
    var id = ooui.id, readOnly = ooui.readOnly, required = ooui.required, height = ooui.height, translatable = ooui.translatable;
    var requiredClass = required && !readOnly ? Config_1.default.requiredClass : undefined;
    return (react_1.default.createElement(Field_1.default, __assign({ required: required }, props), translatable ? (react_1.default.createElement(TranslatableText, { field: id, requiredClass: requiredClass, height: height })) : (react_1.default.createElement(TextArea, { disabled: readOnly || translatable, className: requiredClass, style: { height: height ? height + "px" : "100%" }, rows: 4 }))));
};
var TranslatableText = function (_a) {
    var value = _a.value, field = _a.field, requiredClass = _a.requiredClass, onChange = _a.onChange, height = _a.height;
    var formContext = react_1.useContext(FormContext_1.FormContext);
    var _b = formContext || {}, activeId = _b.activeId, activeModel = _b.activeModel, fetchValues = _b.fetchValues;
    var _c = react_1.useState(false), translationModalVisible = _c[0], setTranslationModalVisible = _c[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { onClick: function () {
                if (!translationModalVisible) {
                    setTranslationModalVisible(true);
                }
            } },
            react_1.default.createElement(TextArea, { value: value, onChange: function (event) {
                    onChange === null || onChange === void 0 ? void 0 : onChange(event.target.value);
                }, style: {
                    height: height ? height + "px" : "100%",
                    cursor: "pointer",
                }, id: field, disabled: true, className: requiredClass, rows: 4 })),
        react_1.default.createElement(TranslationModal_1.TranslationModal, { id: activeId, model: activeModel, field: field, visible: translationModalVisible, onCloseModal: function () {
                setTranslationModalVisible(false);
            }, onSubmitSucceed: function () {
                setTranslationModalVisible(false);
                fetchValues === null || fetchValues === void 0 ? void 0 : fetchValues();
            } })));
};
exports.default = Text;
//# sourceMappingURL=Text.js.map