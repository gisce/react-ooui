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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integer = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var Config_1 = __importDefault(require("@/Config"));
var Integer = function (props) {
    var ooui = props.ooui;
    var id = ooui.id, readOnly = ooui.readOnly, required = ooui.required;
    var requiredClass = required && !readOnly ? Config_1.default.requiredClass : undefined;
    return (react_1.default.createElement(Field_1.default, __assign({ required: required, type: "number" }, props),
        react_1.default.createElement(antd_1.InputNumber, { id: id, className: "w-full " + requiredClass, disabled: readOnly, formatter: function (value) {
                return ("" + value).replace(/[^0-9]+/g, "");
            }, defaultValue: 0 })));
};
exports.Integer = Integer;
//# sourceMappingURL=Integer.js.map