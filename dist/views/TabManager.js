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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var __1 = require("..");
var TabPane = antd_1.Tabs.TabPane;
var uuid_1 = require("uuid");
var Welcome_1 = __importDefault(require("./Welcome"));
function TabManager(props, ref) {
    var _a = react_1.useState(), activeKey = _a[0], setActiveKey = _a[1];
    var _b = react_1.useState([
        {
            title: "Welcome",
            key: "welcome",
            closable: true,
            content: react_1.default.createElement(Welcome_1.default, null),
        },
    ]), tabs = _b[0], setTabs = _b[1];
    react_1.useImperativeHandle(ref, function () { return ({
        openNewTab: openNewTab,
    }); });
    function remove(key) {
        if (key === activeKey) {
            var currentIndex = tabs.findIndex(function (tab) { return tab.key === key; });
            if (tabs[currentIndex - 1]) {
                setActiveKey(tabs[currentIndex - 1].key);
            }
            if (tabs[currentIndex + 1]) {
                setActiveKey(tabs[currentIndex + 1].key);
            }
        }
        setTabs(tabs.filter(function (tab) { return tab.key !== key; }));
    }
    function openNewTab(_a) {
        var title = _a.title, action = _a.action;
        var newTabs = __spreadArray([], tabs);
        if (tabs.length === 1 && tabs[0].key === "welcome") {
            newTabs = __spreadArray([], tabs.filter(function (tab) { return tab.key !== "welcome"; }));
        }
        var key = uuid_1.v4();
        setTabs(__spreadArray(__spreadArray([], newTabs), [
            {
                title: title,
                key: key,
                closable: true,
                content: react_1.default.createElement(__1.ActionView, { title: title, action: action }),
            },
        ]));
        setActiveKey(key);
    }
    return (react_1.default.createElement(antd_1.Tabs, { activeKey: activeKey, hideAdd: true, type: "editable-card", onChange: function (activeKey) {
            setActiveKey(activeKey);
        }, onEdit: function (targetKey, action) {
            if (action === "remove") {
                remove(targetKey);
            }
        } }, tabs.map(function (tab) {
        return (react_1.default.createElement(TabPane, { key: tab.key, closable: tab.closable, tab: tab.title }, tab.content));
    })));
}
exports.default = react_1.forwardRef(TabManager);
//# sourceMappingURL=TabManager.js.map