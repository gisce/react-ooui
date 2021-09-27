"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var LocaleContext_1 = require("@/context/LocaleContext");
var confirm = antd_1.Modal.confirm;
var showDialog = function (_a) {
    var onOk = _a.onOk, onCancel = _a.onCancel, lang = _a.lang;
    confirm({
        title: LocaleContext_1.tForLang("unsavedChanges", lang),
        icon: react_1.default.createElement(icons_1.ExclamationCircleOutlined, null),
        centered: true,
        content: LocaleContext_1.tForLang("confirmRefreshWithoutSave", lang),
        okText: LocaleContext_1.tForLang("discardAndRefresh", lang),
        cancelText: LocaleContext_1.tForLang("cancel", lang),
        onOk: onOk,
        onCancel: onCancel,
    });
};
exports.default = showDialog;
//# sourceMappingURL=RefreshItemDialog.js.map