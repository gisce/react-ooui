"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const { TabPane } = antd_1.Tabs;
const index_1 = require("@/index");
function Notebook(props) {
    const { ooui } = props;
    const tabs = [].concat.apply([], ooui.container.rows);
    return (react_1.default.createElement(antd_1.Tabs, { defaultActiveKey: "1" }, tabs.map((page, key) => {
        const tabKey = (key + 1).toString();
        return (react_1.default.createElement(TabPane, { tab: page.label, key: tabKey },
            react_1.default.createElement(index_1.Group, { ooui: page, showLabel: false })));
    })));
}
exports.default = Notebook;
//# sourceMappingURL=Notebook.js.map