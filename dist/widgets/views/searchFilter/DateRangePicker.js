"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRangePicker = void 0;
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var Field_1 = __importDefault(require("@/common/Field"));
var DateRangePicker = function (props) {
    var ooui = props.ooui, layout = props.layout;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui, layout: layout },
        react_1.default.createElement(antd_1.DatePicker.RangePicker, { format: "DD/MM/YYYY" })));
};
exports.DateRangePicker = DateRangePicker;
//# sourceMappingURL=DateRangePicker.js.map