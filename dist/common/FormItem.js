"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
function FormItem(_a) {
    var name = _a.name, label = _a.label, children = _a.children;
    var labelText = label && label.length > 1 ? label + " :" : " ";
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", null, labelText),
        react_1.default.createElement(antd_1.Form.Item, { className: "mb-0", name: name }, children)));
}
exports.default = FormItem;
//# sourceMappingURL=FormItem.js.map