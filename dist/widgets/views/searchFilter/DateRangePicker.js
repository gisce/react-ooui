"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRangePicker = void 0;
const antd_1 = require("antd");
const react_1 = __importDefault(require("react"));
const FormItem_1 = __importDefault(require("@/common/FormItem"));
const DateRangePicker = ({ id, label, layout = "horizontal", }) => {
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label, layout: layout },
        react_1.default.createElement(antd_1.DatePicker.RangePicker, { format: "DD/MM/YYYY" })));
};
exports.DateRangePicker = DateRangePicker;
//# sourceMappingURL=DateRangePicker.js.map