"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardGridItem = void 0;
var react_1 = __importDefault(require("react"));
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var styled_components_1 = __importDefault(require("styled-components"));
var GrabCard = styled_components_1.default(antd_1.Card)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .ant-card-head {\n    cursor: grab;\n  }\n"], ["\n  .ant-card-head {\n    cursor: grab;\n  }\n"])));
var DashboardGridItem = function (props) {
    var id = props.id, title = props.title, children = props.children;
    return (react_1.default.createElement(GrabCard, { title: title, extra: react_1.default.createElement(icons_1.ExportOutlined, { style: { cursor: "pointer" } }), style: { backgroundColor: "#efefef", height: "100%" } },
        react_1.default.createElement("div", { style: { padding: "2em" } }, children)));
};
exports.DashboardGridItem = DashboardGridItem;
var templateObject_1;
//# sourceMappingURL=DashboardGridItem.js.map