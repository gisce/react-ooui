"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardGridItem = void 0;
var react_1 = __importDefault(require("react"));
var DashboardGridItem = function (props) {
    var id = props.id, title = props.title, children = props.children;
    return (react_1.default.createElement("div", { style: {
            backgroundColor: "#efefef",
            width: "100%",
            height: "100%",
            borderRadius: "0.5em",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
        } },
        react_1.default.createElement("div", { style: { padding: "2em" } }, children)));
};
exports.DashboardGridItem = DashboardGridItem;
//# sourceMappingURL=DashboardGridItem.js.map