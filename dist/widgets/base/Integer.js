"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integer = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var FormItem_1 = __importDefault(require("@/common/FormItem"));
var Integer = function (props) {
    var ooui = props.ooui, layout = props.layout;
    var label = ooui.label, tooltip = ooui.tooltip, nolabel = ooui.nolabel;
    var id = props.id ? props.id : ooui.id;
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label, layout: layout, tooltip: tooltip, nolabel: nolabel },
        react_1.default.createElement(antd_1.InputNumber, { id: id, className: "w-full", disabled: ooui.readOnly, formatter: function (value) {
                return ("" + value).replace(/[^0-9]+/g, "");
            }, defaultValue: 0 })));
};
exports.Integer = Integer;
//# sourceMappingURL=Integer.js.map