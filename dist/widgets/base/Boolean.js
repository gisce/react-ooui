"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boolean = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var styled_components_1 = __importDefault(require("styled-components"));
var Field_1 = __importDefault(require("@/common/Field"));
var Config_1 = __importDefault(require("@/Config"));
var Boolean = function (props) {
    var ooui = props.ooui;
    var id = ooui.id, readOnly = ooui.readOnly, required = ooui.required;
    return (react_1.default.createElement(Field_1.default, __assign({}, props, { required: required, type: "boolean", valuePropName: "checked" }),
        react_1.default.createElement(BooleanInput, { id: id, readOnly: readOnly, required: required })));
};
exports.Boolean = Boolean;
var BooleanInput = function (props) {
    var required = props.required, readOnly = props.readOnly, restProps = __rest(props, ["required", "readOnly"]);
    var CustomCheckbox = required && !readOnly ? RequiredCheckbox : antd_1.Checkbox;
    return (react_1.default.createElement("div", { className: "flex flex-row" },
        react_1.default.createElement(CustomCheckbox, __assign({ disabled: readOnly }, restProps))));
};
var RequiredCheckbox = styled_components_1.default(antd_1.Checkbox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .ant-checkbox-inner {\n    background-color: ", ";\n  }\n\n  .ant-checkbox-checked .ant-checkbox-inner {\n    background-color: #089cff;\n  }\n"], ["\n  .ant-checkbox-inner {\n    background-color: ", ";\n  }\n\n  .ant-checkbox-checked .ant-checkbox-inner {\n    background-color: #089cff;\n  }\n"])), Config_1.default.requiredColor);
var templateObject_1;
//# sourceMappingURL=Boolean.js.map