"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var confirm = antd_1.Modal.confirm;
var showDialog = function (_a) {
    var onOk = _a.onOk, confirmMessage = _a.confirmMessage;
    confirm({
        title: "Confirmation",
        icon: react_1.default.createElement(icons_1.ExclamationCircleOutlined, null),
        centered: true,
        content: confirmMessage,
        okText: "OK",
        onOk: onOk,
    });
};
exports.default = showDialog;
//# sourceMappingURL=ConfirmDialog.js.map