"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateTimeRangePicker = void 0;
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var Field_1 = __importDefault(require("@/common/Field"));
var ooui_1 = require("ooui");
var antd_2 = require("antd");
var DateTimeRangePicker = function (props) {
    var ooui = props.ooui, layout = props.layout;
    var label = ooui.label, id = ooui.id;
    var fields = [
        new ooui_1.Field({
            name: id + "#date",
            label: "",
        }),
        new ooui_1.Field({
            name: id + "#time",
            label: "",
        }),
    ];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        label + " :",
        react_1.default.createElement(antd_2.Row, { align: "bottom", className: "mt-1" },
            react_1.default.createElement(antd_2.Col, { className: "mr-2" },
                react_1.default.createElement(Field_1.default, { ooui: fields[0], layout: layout },
                    react_1.default.createElement(antd_1.DatePicker.RangePicker, { className: "w-60", format: "DD/MM/YYYY" }))),
            react_1.default.createElement(antd_2.Col, null,
                " ",
                react_1.default.createElement(Field_1.default, { ooui: fields[1], layout: layout },
                    react_1.default.createElement(antd_1.TimePicker.RangePicker, { className: "w-60", format: "HH:mm" }))))));
};
exports.DateTimeRangePicker = DateTimeRangePicker;
//# sourceMappingURL=DateTimeRangePicker.js.map