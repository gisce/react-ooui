"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var warning = antd_1.Modal.warning;
var showDialog = function (title, message) {
    warning({
        title: title,
        icon: react_1.default.createElement(icons_1.WarningOutlined, null),
        centered: true,
        content: message,
    });
};
exports.default = showDialog;
//# sourceMappingURL=WarningDialog.js.map