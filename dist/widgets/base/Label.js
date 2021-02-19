"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Label = function (props) {
    var ooui = props.ooui;
    var style = { textAlign: ooui.align };
    return react_1.default.createElement("p", { style: style }, ooui.label);
};
exports.default = Label;
//# sourceMappingURL=Label.js.map