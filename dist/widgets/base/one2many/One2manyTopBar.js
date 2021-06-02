"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.One2manyTopBar = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var One2manyTopBar = function (props) {
    var titleString = props.title, readOnly = props.readOnly, onCreateItem = props.onCreateItem, onToggleViewMode = props.onToggleViewMode, mode = props.mode, formIsSaving = props.formIsSaving, onSaveItem = props.onSaveItem, formHasChanges = props.formHasChanges, onDelete = props.onDelete, totalItems = props.totalItems, currentItemIndex = props.currentItemIndex, onPreviousItem = props.onPreviousItem, onNextItem = props.onNextItem;
    function separator() {
        return react_1.default.createElement("div", { className: "inline-block w-3" });
    }
    function title() {
        return (react_1.default.createElement("div", { className: "h-8 flex flex-grow bg-gray-700 text-gray-200" },
            react_1.default.createElement("div", { className: "h-full flex flex-col justify-center items-center" },
                react_1.default.createElement("span", { className: "pl-2 font-bold" }, titleString))));
    }
    function saveButton() {
        return (react_1.default.createElement(antd_1.Button, { icon: formIsSaving ? react_1.default.createElement(icons_1.LoadingOutlined, null) : react_1.default.createElement(icons_1.SaveOutlined, null), onClick: onSaveItem, disabled: !formHasChanges || formIsSaving || readOnly }));
    }
    function deleteButton() {
        return (react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.DeleteOutlined, null), onClick: onDelete, disabled: totalItems === 0 || readOnly }));
    }
    function index() {
        var itemToShow = "_";
        if (totalItems === 0) {
            itemToShow = "_";
        }
        else {
            itemToShow = (currentItemIndex + 1).toString();
        }
        return (react_1.default.createElement("span", { className: "pl-1 pr-1" },
            "(",
            itemToShow,
            "/",
            totalItems,
            ")"));
    }
    function itemBrowser() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            separator(),
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.LeftOutlined, null), onClick: onPreviousItem }),
            index(),
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.RightOutlined, null), onClick: onNextItem })));
    }
    return (react_1.default.createElement("div", { className: "flex mb-2" },
        title(),
        react_1.default.createElement("div", { className: "h-8 flex-none pl-2" },
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FileAddOutlined, null), disabled: readOnly, onClick: onCreateItem }),
            separator(),
            mode === "form" && saveButton(),
            deleteButton(),
            mode === "form" && itemBrowser(),
            separator(),
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.AlignLeftOutlined, null), onClick: onToggleViewMode }))));
};
exports.One2manyTopBar = One2manyTopBar;
//# sourceMappingURL=One2manyTopBar.js.map