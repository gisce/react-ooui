"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const Separator = (props) => {
    const { ooui } = props;
    const { label } = ooui;
    return react_1.default.createElement(antd_1.Divider, { orientation: "left", className: " text-sm" }, label);
};
exports.Separator = Separator;
//# sourceMappingURL=Separator.js.map