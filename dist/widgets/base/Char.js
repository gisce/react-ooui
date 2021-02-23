"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Char = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var Char = function (props) {
    var ooui = props.ooui, layout = props.layout;
    var _a = ooui, id = _a.id, readOnly = _a.readOnly, isPassword = _a.isPassword;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui, layout: layout }, isPassword ? (react_1.default.createElement(antd_1.Input.Password, { disabled: readOnly, id: id })) : (react_1.default.createElement(antd_1.Input, { disabled: readOnly, id: id }))));
};
exports.Char = Char;
//# sourceMappingURL=Char.js.map