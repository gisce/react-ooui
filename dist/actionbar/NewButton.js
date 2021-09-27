"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var icons_1 = require("@ant-design/icons");
var ActionButton_1 = __importDefault(require("./ActionButton"));
var ActionViewContext_1 = require("@/context/ActionViewContext");
var UnsavedChangesDialog_1 = __importDefault(require("@/ui/UnsavedChangesDialog"));
var LocaleContext_1 = require("@/context/LocaleContext");
function NewButton(props) {
    var _a = props.disabled, disabled = _a === void 0 ? false : _a;
    var _b = react_1.useContext(ActionViewContext_1.ActionViewContext), formHasChanges = _b.formHasChanges, onNewClickedProps = _b.onNewClicked;
    var _c = react_1.useContext(LocaleContext_1.LocaleContext), t = _c.t, lang = _c.lang;
    var onNewClicked = function () {
        if (formHasChanges) {
            UnsavedChangesDialog_1.default({
                lang: lang,
                onOk: function () {
                    onNewClickedProps();
                },
            });
            return;
        }
        onNewClickedProps();
    };
    return (react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.FileAddOutlined, null), tooltip: t("new"), onClick: onNewClicked, disabled: disabled }));
}
exports.default = NewButton;
//# sourceMappingURL=NewButton.js.map