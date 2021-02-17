"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeRangePicker = void 0;
const antd_1 = require("antd");
const react_1 = __importDefault(require("react"));
const FormItem_1 = __importDefault(require("@/common/FormItem"));
const antd_2 = require("antd");
const DateTimeRangePicker = ({ id, label, layout = "horizontal", }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        label + " :",
        react_1.default.createElement(antd_2.Row, { align: "bottom", className: "mt-1" },
            react_1.default.createElement(antd_2.Col, { className: "mr-2" },
                react_1.default.createElement(FormItem_1.default, { name: id + "#date", label: "", layout: layout },
                    react_1.default.createElement(antd_1.DatePicker.RangePicker, { className: "w-60", format: "DD/MM/YYYY" }))),
            react_1.default.createElement(antd_2.Col, null,
                " ",
                react_1.default.createElement(FormItem_1.default, { name: id + "#time", label: "", layout: layout },
                    react_1.default.createElement(antd_1.TimePicker.RangePicker, { className: "w-60", format: "HH:mm" }))))));
};
exports.DateTimeRangePicker = DateTimeRangePicker;
//# sourceMappingURL=DateTimeRangePicker.js.map