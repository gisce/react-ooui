"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Char = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var FormItem_1 = __importDefault(require("@/common/FormItem"));
var Char = function (props) {
    var ooui = props.ooui, layout = props.layout;
    var id = ooui.id, label = ooui.label, nolabel = ooui.nolabel, tooltip = ooui.tooltip;
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label, layout: layout, tooltip: tooltip, nolabel: nolabel }, ooui.isPassword ? (react_1.default.createElement(antd_1.Input.Password, { disabled: ooui.readOnly, id: id })) : (react_1.default.createElement(antd_1.Input, { disabled: ooui.readOnly, id: id }))));
};
exports.Char = Char;
//# sourceMappingURL=Char.js.map