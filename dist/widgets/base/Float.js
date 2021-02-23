"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Float = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var Float = function (props) {
    var ooui = props.ooui, layout = props.layout;
    var _a = ooui, id = _a.id, decimalDigits = _a.decimalDigits, readOnly = _a.readOnly;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui, layout: layout },
        react_1.default.createElement(antd_1.InputNumber, { disabled: readOnly, className: "w-full", id: id, precision: decimalDigits, formatter: function (value) {
                return ("" + value).replace(/[^0-9\.\-]+/g, "");
            }, defaultValue: 0, decimalSeparator: "." })));
};
exports.Float = Float;
//# sourceMappingURL=Float.js.map