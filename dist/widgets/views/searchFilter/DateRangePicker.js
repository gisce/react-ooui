"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRangePicker = void 0;
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var FormItem_1 = __importDefault(require("@/common/FormItem"));
var DateRangePicker = function (_a) {
    var id = _a.id, label = _a.label, _b = _a.layout, layout = _b === void 0 ? "horizontal" : _b;
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label, layout: layout },
        react_1.default.createElement(antd_1.DatePicker.RangePicker, { format: "DD/MM/YYYY" })));
};
exports.DateRangePicker = DateRangePicker;
//# sourceMappingURL=DateRangePicker.js.map