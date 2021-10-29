"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabManagerContext = void 0;
var react_1 = __importDefault(require("react"));
exports.TabManagerContext = react_1.default.createContext(null);
var TabManagerProvider = function (props) {
    var children = props.children, openAction = props.openAction, openRelate = props.openRelate, openSpecificModelTab = props.openSpecificModelTab, openShortcut = props.openShortcut, activeKey = props.activeKey, onChangeTab = props.onChangeTab, onRemoveTab = props.onRemoveTab, tabs = props.tabs;
    return (react_1.default.createElement(exports.TabManagerContext.Provider, { value: {
            openAction: openAction,
            openRelate: openRelate,
            openSpecificModelTab: openSpecificModelTab,
            activeKey: activeKey,
            openShortcut: openShortcut,
            onChangeTab: onChangeTab,
            onRemoveTab: onRemoveTab,
            tabs: tabs,
        } }, children));
};
exports.default = TabManagerProvider;
//# sourceMappingURL=TabManagerContext.js.map