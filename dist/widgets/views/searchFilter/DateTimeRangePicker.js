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
exports.DateTimeRangePicker = void 0;
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var Field_1 = __importDefault(require("@/common/Field"));
var ooui_1 = require("@gisce/ooui");
var Label_1 = __importDefault(require("@/widgets/base/Label"));
var antd_2 = require("antd");
var DateTimeRangePicker = function (props) {
    var ooui = props.ooui, _a = props.showLabel, showLabel = _a === void 0 ? false : _a;
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
        showLabel && (react_1.default.createElement(Label_1.default, { ooui: new ooui_1.Label({
                name: id + "_label",
                string: label,
                help: ooui.tooltip,
                fieldForLabel: id,
            }), align: "left" })),
        react_1.default.createElement(antd_2.Row, { align: "bottom", className: "p-0" },
            react_1.default.createElement(antd_2.Col, { className: "mr-2" },
                react_1.default.createElement(Field_1.default, __assign({}, props, { ooui: fields[0], showLabel: false }),
                    react_1.default.createElement(antd_1.DatePicker.RangePicker, { className: "w-60", allowEmpty: [true, true], format: "DD/MM/YYYY" }))),
            react_1.default.createElement(antd_2.Col, null,
                react_1.default.createElement(Field_1.default, __assign({}, props, { ooui: fields[1], showLabel: false }),
                    react_1.default.createElement(antd_1.TimePicker.RangePicker, { className: "w-60", allowEmpty: [true, true], format: "HH:mm" }))))));
};
exports.DateTimeRangePicker = DateTimeRangePicker;
//# sourceMappingURL=DateTimeRangePicker.js.map