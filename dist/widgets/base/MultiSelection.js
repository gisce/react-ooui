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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelectionInput = exports.MultiSelection = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var styled_components_1 = __importDefault(require("styled-components"));
var Field_1 = __importDefault(require("@/common/Field"));
var Config_1 = __importDefault(require("@/Config"));
var Option = antd_1.Select.Option;
var MultiSelection = function (props) {
    var ooui = props.ooui;
    var required = ooui.required;
    return (react_1.default.createElement(Field_1.default, __assign({ required: required, type: "any" }, props),
        react_1.default.createElement(exports.MultiSelectionInput, __assign({}, props))));
};
exports.MultiSelection = MultiSelection;
var MultiSelectionInput = function (props) {
    var ooui = props.ooui, onChange = props.onChange, value = props.value;
    var _a = ooui, selectionValues = _a.selectionValues, readOnly = _a.readOnly, required = _a.required;
    var values = Array.from(selectionValues.entries());
    var options = values &&
        values.length &&
        values
            .filter(function (optionValueKeyPair) {
            var optionKey = optionValueKeyPair[0];
            if (!value) {
                return true;
            }
            return !value.includes(optionKey);
        })
            .map(function (entry) {
            var key = entry[0], value = entry[1];
            return (react_1.default.createElement(Option, { key: key, value: value }, value));
        });
    var CustomSelect = required && !readOnly ? RequiredSelect : antd_1.Select;
    return (react_1.default.createElement(CustomSelect, { disabled: readOnly, onChange: onChange, value: value, mode: "multiple" }, options));
};
exports.MultiSelectionInput = MultiSelectionInput;
var RequiredSelect = styled_components_1.default(antd_1.Select)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {\n    background-color: ", ";\n  }\n"], ["\n  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {\n    background-color: ", ";\n  }\n"])), Config_1.default.requiredColor);
var templateObject_1;
//# sourceMappingURL=MultiSelection.js.map