"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Content = antd_1.Layout.Content;
var Title = antd_1.Typography.Title;
function Welcome() {
    return (react_1.default.createElement(Content, { className: "m-5 select-none" },
        react_1.default.createElement(Title, { level: 5 }, "Welcome")));
}
exports.default = Welcome;
//# sourceMappingURL=Welcome.js.map