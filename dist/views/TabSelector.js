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
var TabManagerContext_1 = require("@/context/TabManagerContext");
var Tab_1 = __importDefault(require("./tabs/Tab"));
function TabSelector() {
    var tabManagerContext = react_1.useContext(TabManagerContext_1.TabManagerContext);
    var _a = tabManagerContext || {}, activeKey = _a.activeKey, tabs = _a.tabs, onRemoveTab = _a.onRemoveTab, onChangeTab = _a.onChangeTab;
    return (react_1.default.createElement(react_1.default.Fragment, null, tabs.map(function (tab) { return (react_1.default.createElement(Tab_1.default, { key: tab.key, tabKey: tab.key, label: tab.title, onClose: onRemoveTab, isActive: activeKey === tab.key, onSelected: onChangeTab })); })));
}
exports.default = TabSelector;
//# sourceMappingURL=TabSelector.js.map