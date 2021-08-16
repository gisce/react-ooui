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
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var TabPane = antd_1.Tabs.TabPane;
function TabManagerView() {
    var _a = react_1.useState(), activeKey = _a[0], setActiveKey = _a[1];
    return (react_1.default.createElement(antd_1.Tabs, { hideAdd: true, type: "editable-card", onChange: function (activeKey) {
            console.log("onChange " + activeKey);
        }, activeKey: activeKey, onEdit: function (targetKey, action) { } },
        react_1.default.createElement(TabPane, { tab: "Test 1", key: "1", closable: true }, "Test 1 content"),
        react_1.default.createElement(TabPane, { tab: "Test 2", key: "2", closable: true }, "Test 2 content"),
        react_1.default.createElement(TabPane, { tab: "Test 3", key: "3", closable: true }, "Test 3 content")));
}
exports.default = TabManagerView;
//# sourceMappingURL=TabManager.js.map