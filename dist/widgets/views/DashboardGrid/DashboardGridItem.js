"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardGridItem = void 0;
var react_1 = __importDefault(require("react"));
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var antd_2 = require("antd");
var Text = antd_2.Typography.Text;
var DashboardGridItem = function (props) {
    var id = props.id, title = props.title, children = props.children, action = props.action, openAction = props.openAction;
    return (react_1.default.createElement("div", { className: "shadow-md rounded", style: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid #eee",
            backgroundColor: "white",
        } },
        react_1.default.createElement(antd_1.Row, { align: "middle", style: { borderBottom: "1px solid #ddd" }, wrap: false },
            react_1.default.createElement(antd_1.Col, { flex: "auto", className: "draggable-head", style: {
                    fontWeight: "bold",
                    padding: "0.5rem",
                    cursor: "grab",
                    overflow: "hidden",
                } },
                react_1.default.createElement(Text, { ellipsis: true }, title)),
            action && (react_1.default.createElement(antd_1.Col, { flex: "25px", style: { padding: "0.5rem" } },
                react_1.default.createElement(antd_1.Row, { justify: "end", align: "middle" },
                    react_1.default.createElement(icons_1.ExportOutlined, { style: { cursor: "pointer" }, onClick: function () {
                            openAction === null || openAction === void 0 ? void 0 : openAction(action);
                        } }))))),
        children));
};
exports.DashboardGridItem = DashboardGridItem;
//# sourceMappingURL=DashboardGridItem.js.map