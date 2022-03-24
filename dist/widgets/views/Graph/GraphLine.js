"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphLine = void 0;
var react_1 = __importDefault(require("react"));
var icons_1 = require("@ant-design/icons");
// import { Line } from "@ant-design/plots";
var useGraphCountData_1 = __importDefault(require("./useGraphCountData"));
var antd_1 = require("antd");
var GraphLine = function (props) {
    var model = props.model, domain = props.domain, context = props.context, ooui = props.ooui;
    var _a = useGraphCountData_1.default({
        model: model,
        domain: domain,
        context: context,
        x: ooui.x,
        y: ooui.y,
    }), data = _a.data, loading = _a.loading, error = _a.error, yLabel = _a.yLabel;
    if (error) {
        return react_1.default.createElement(antd_1.Alert, { message: JSON.stringify(error), type: "error", banner: true });
    }
    if (loading || data === undefined) {
        return (react_1.default.createElement("div", { style: { padding: "1rem" } },
            react_1.default.createElement(icons_1.LoadingOutlined, { style: { height: "12px" } })));
    }
    return (react_1.default.createElement("div", { style: { padding: "1rem" } }, "Graph"));
};
exports.GraphLine = GraphLine;
//# sourceMappingURL=GraphLine.js.map