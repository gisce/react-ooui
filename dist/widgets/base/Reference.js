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
exports.ReferenceInput = exports.Reference = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var ooui_1 = require("ooui");
var Field_1 = __importDefault(require("@/common/Field"));
var Many2one_1 = require("./Many2one");
var Selection_1 = require("./Selection");
var Reference = function (props) {
    var ooui = props.ooui;
    var required = ooui.required;
    return (react_1.default.createElement(Field_1.default, __assign({ required: required }, props),
        react_1.default.createElement(exports.ReferenceInput, { ooui: ooui })));
};
exports.Reference = Reference;
var ReferenceInput = function (props) {
    var value = props.value, onChange = props.onChange, ooui = props.ooui;
    var required = ooui.required, selectionValues = ooui.selectionValues, readOnly = ooui.readOnly;
    var splittedValue = value === null || value === void 0 ? void 0 : value.split(",");
    var model = value && splittedValue && splittedValue[0];
    var id = value && splittedValue && splittedValue[1] && parseInt(splittedValue[1]);
    var _a = react_1.useState([id, undefined]), many2oneValue = _a[0], setMany2oneValue = _a[1];
    var _b = react_1.useState(model), selectionValue = _b[0], setSelectionValue = _b[1];
    return (react_1.default.createElement(antd_1.Row, { gutter: 8, wrap: false },
        react_1.default.createElement(antd_1.Col, { flex: "1" },
            react_1.default.createElement(Selection_1.SelectionInput, { ooui: new ooui_1.Selection({
                    name: "model_selection",
                    selection: selectionValues,
                    readOnly: readOnly,
                    required: required,
                }), onChange: function (changedValue) {
                    setSelectionValue(changedValue);
                    setMany2oneValue([]);
                    onChange === null || onChange === void 0 ? void 0 : onChange(undefined);
                }, value: selectionValue })),
        react_1.default.createElement(antd_1.Col, { flex: "3" },
            react_1.default.createElement(Many2one_1.Many2oneInput, { ooui: new ooui_1.Many2one({
                    name: "object_value",
                    relation: selectionValue,
                    readOnly: readOnly,
                    required: required,
                }), value: many2oneValue, onChange: function (changedValue) {
                    setMany2oneValue(changedValue);
                    var referenceValue = selectionValue + "," + changedValue[0];
                    if (referenceValue === value) {
                        return;
                    }
                    onChange === null || onChange === void 0 ? void 0 : onChange(referenceValue);
                } }))));
};
exports.ReferenceInput = ReferenceInput;
//# sourceMappingURL=Reference.js.map