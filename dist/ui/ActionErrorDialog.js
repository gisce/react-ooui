"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var error = antd_1.Modal.error, warning = antd_1.Modal.warning;
var showDialog = function (err) {
    var message;
    var type;
    var title;
    if (typeof err === "string" &&
        err.indexOf(" -- ") !== -1 &&
        err.indexOf("\n\n") !== -1) {
        var splitted = err.split("\n\n");
        message = splitted[1];
        var args = splitted[0].split(" -- ");
        type = args[0];
        title = args[1];
    }
    else {
        message = err;
        type = "error";
        title = "Error";
    }
    var icon = type === "error" ? react_1.default.createElement(icons_1.ExclamationCircleOutlined, null) : react_1.default.createElement(icons_1.WarningOutlined, null);
    var modalType = type === "error" ? error : warning;
    modalType({
        title: title,
        icon: icon,
        centered: true,
        content: message,
    });
};
exports.default = showDialog;
//# sourceMappingURL=ActionErrorDialog.js.map