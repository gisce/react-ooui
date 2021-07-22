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
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var ChangeViewButton_1 = __importDefault(require("./ChangeViewButton"));
var DropdownButton_1 = __importDefault(require("./DropdownButton"));
var ActionButton_1 = __importDefault(require("./ActionButton"));
var ActionViewContext_1 = require("@/context/ActionViewContext");
var NewButton_1 = __importDefault(require("./NewButton"));
function FormActionBar() {
    var _a = react_1.useContext(ActionViewContext_1.ActionViewContext), availableViews = _a.availableViews, currentView = _a.currentView, setCurrentView = _a.setCurrentView, onFormSave = _a.onFormSave, formHasChanges = _a.formHasChanges, formIsSaving = _a.formIsSaving, currentId = _a.currentId;
    return (react_1.default.createElement(antd_1.Space, null,
        react_1.default.createElement(NewButton_1.default, null),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.SaveOutlined, null), tooltip: "Save", disabled: !formHasChanges || formIsSaving, loading: formIsSaving, onClick: onFormSave }),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.DeleteOutlined, null), tooltip: "Delete", disabled: formIsSaving || currentId === undefined, loading: false, onClick: function () { } }),
        separator(),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.LeftOutlined, null), tooltip: "Previous", disabled: formIsSaving, loading: false, onClick: function () { } }),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.RightOutlined, null), tooltip: "Next", disabled: formIsSaving, loading: false, onClick: function () { } }),
        separator(),
        react_1.default.createElement(ChangeViewButton_1.default, { currentView: currentView, availableViews: availableViews, onChangeView: setCurrentView, disabled: formIsSaving }),
        separator(),
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.ThunderboltOutlined, null), disabled: formIsSaving, tooltip: "Actions", items: [
                "Test action 1",
                "Test action 2",
                "Test action 3",
                "Test action 4",
            ], onItemClick: function () { } }),
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.PrinterOutlined, null), disabled: formIsSaving, tooltip: "Reports", items: ["Report 1", "Report 2"], onItemClick: function () { } }),
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.EnterOutlined, null), disabled: formIsSaving, tooltip: "Related", items: ["Related 1", "Related 2"], onItemClick: function () { } }),
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.LinkOutlined, null), disabled: formIsSaving, label: "(2)", tooltip: "Attachments", items: ["Attachment 1", "Attachment 2"], onItemClick: function () { } })));
}
function separator() {
    return react_1.default.createElement("div", { className: "inline-block w-2" });
}
exports.default = FormActionBar;
//# sourceMappingURL=FormActionBar.js.map