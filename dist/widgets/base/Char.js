"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Char = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const FormItem_1 = __importDefault(require("@/common/FormItem"));
const Char = (props) => {
    const { ooui, layout } = props;
    const { id, label, nolabel, tooltip } = ooui;
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label, layout: layout, tooltip: tooltip, nolabel: nolabel }, ooui.isPassword ? (react_1.default.createElement(antd_1.Input.Password, { disabled: ooui.readOnly, id: id })) : (react_1.default.createElement(antd_1.Input, { disabled: ooui.readOnly, id: id }))));
};
exports.Char = Char;
//# sourceMappingURL=Char.js.map