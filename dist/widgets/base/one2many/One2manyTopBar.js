"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.One2manyTopBar = void 0;
var react_1 = __importDefault(require("react"));
var ButtonWithTooltip_1 = __importDefault(require("@/common/ButtonWithTooltip"));
var icons_1 = require("@ant-design/icons");
var One2manyTopBar = function (props) {
    var titleString = props.title, readOnly = props.readOnly, onCreateItem = props.onCreateItem, onToggleViewMode = props.onToggleViewMode, mode = props.mode, onDelete = props.onDelete, totalItems = props.totalItems, currentItemIndex = props.currentItemIndex, onPreviousItem = props.onPreviousItem, onNextItem = props.onNextItem, isMany2Many = props.isMany2Many, onSearchItem = props.onSearchItem, selectedRowKeys = props.selectedRowKeys;
    function separator() {
        return react_1.default.createElement("div", { className: "inline-block w-3" });
    }
    function title() {
        return (react_1.default.createElement("div", { className: "h-8 flex flex-grow bg-gray-700 text-gray-200" },
            react_1.default.createElement("div", { className: "h-full flex flex-col justify-center items-center" },
                react_1.default.createElement("span", { className: "pl-2 font-bold" }, titleString))));
    }
    function deleteButton() {
        return (react_1.default.createElement(ButtonWithTooltip_1.default, { tooltip: isMany2Many ? "Unlink" : "Delete", icon: isMany2Many ? react_1.default.createElement(icons_1.ApiOutlined, null) : react_1.default.createElement(icons_1.DeleteOutlined, null), onClick: onDelete, disabled: totalItems === 0 ||
                readOnly ||
                (mode !== "form" && selectedRowKeys.length === 0) }));
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
            react_1.default.createElement(ButtonWithTooltip_1.default, { tooltip: "Previous item", icon: react_1.default.createElement(icons_1.LeftOutlined, null), onClick: onPreviousItem }),
            index(),
            react_1.default.createElement(ButtonWithTooltip_1.default, { tooltip: "Next item", icon: react_1.default.createElement(icons_1.RightOutlined, null), onClick: onNextItem })));
    }
    return (react_1.default.createElement("div", { className: "flex mb-2" },
        title(),
        react_1.default.createElement("div", { className: "h-8 flex-none pl-2" },
            react_1.default.createElement(ButtonWithTooltip_1.default, { tooltip: "Create new item", icon: react_1.default.createElement(icons_1.FileAddOutlined, null), disabled: readOnly, onClick: onCreateItem }),
            isMany2Many && (react_1.default.createElement(ButtonWithTooltip_1.default, { tooltip: "Search existing item", icon: react_1.default.createElement(icons_1.SearchOutlined, null), disabled: readOnly, onClick: onSearchItem })),
            separator(),
            deleteButton(),
            mode === "form" && itemBrowser(),
            separator(),
            react_1.default.createElement(ButtonWithTooltip_1.default, { tooltip: "Toggle view mode", icon: react_1.default.createElement(icons_1.AlignLeftOutlined, null), onClick: onToggleViewMode }))));
};
exports.One2manyTopBar = One2manyTopBar;
//# sourceMappingURL=One2manyTopBar.js.map