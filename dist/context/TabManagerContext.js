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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabManagerContext = void 0;
var react_1 = __importStar(require("react"));
exports.TabManagerContext = react_1.default.createContext(null);
var TabManagerProvider = function (props) {
    var children = props.children, openAction = props.openAction, openRelate = props.openRelate, openDefaultActionForModel = props.openDefaultActionForModel, openShortcut = props.openShortcut, activeKey = props.activeKey, onChangeTab = props.onChangeTab, onRemoveTab = props.onRemoveTab, tabs = props.tabs;
    var _a = react_1.useState(), currentView = _a[0], setCurrentView = _a[1];
    var _b = react_1.useState(), currentId = _b[0], setCurrentId = _b[1];
    return (react_1.default.createElement(exports.TabManagerContext.Provider, { value: {
            openAction: openAction,
            openRelate: openRelate,
            openDefaultActionForModel: openDefaultActionForModel,
            activeKey: activeKey,
            openShortcut: openShortcut,
            onChangeTab: onChangeTab,
            onRemoveTab: onRemoveTab,
            tabs: tabs,
            currentId: currentId,
            currentView: currentView,
            setCurrentId: setCurrentId,
            setCurrentView: setCurrentView,
        } }, children));
};
exports.default = TabManagerProvider;
//# sourceMappingURL=TabManagerContext.js.map