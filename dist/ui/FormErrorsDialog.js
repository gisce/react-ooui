"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var LocaleContext_1 = require("@/context/LocaleContext");
var error = antd_1.Modal.error;
var showDialog = function (lang) {
    error({
        title: LocaleContext_1.tForLang("formHasErrors", lang),
        icon: react_1.default.createElement(icons_1.ExclamationCircleOutlined, null),
        centered: true,
        content: LocaleContext_1.tForLang("fillRequiredFields", lang),
    });
};
exports.default = showDialog;
//# sourceMappingURL=FormErrorsDialog.js.map