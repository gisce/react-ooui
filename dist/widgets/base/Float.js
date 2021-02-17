"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Float = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const FormItem_1 = __importDefault(require("@/common/FormItem"));
const Float = (props) => {
    const { ooui, layout } = props;
    const { label, nolabel, tooltip } = ooui;
    const id = props.id ? props.id : ooui.id;
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label, layout: layout, tooltip: tooltip, nolabel: nolabel },
        react_1.default.createElement(antd_1.InputNumber, { disabled: ooui.readOnly, className: "w-full", id: id, precision: ooui.decimalDigits, formatter: (value) => {
                return `${value}`.replace(/[^0-9\.\-]+/g, "");
            }, defaultValue: 0, decimalSeparator: "." })));
};
exports.Float = Float;
//# sourceMappingURL=Float.js.map