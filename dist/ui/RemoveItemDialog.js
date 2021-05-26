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
    var onOk = _a.onOk;
    confirm({
        title: "Remove item/s",
        icon: react_1.default.createElement(icons_1.ExclamationCircleOutlined, null),
        centered: true,
        content: "Are you sure you want to remove the selected item/s?",
        okText: "Yes, remove",
        onOk: onOk,
    });
};
exports.default = showDialog;
//# sourceMappingURL=RemoveItemDialog.js.map