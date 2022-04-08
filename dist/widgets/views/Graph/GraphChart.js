"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphChart = exports.GraphChartComp = void 0;
var react_1 = __importDefault(require("react"));
var icons_1 = require("@ant-design/icons");
var plots_1 = require("@ant-design/plots");
var useGraphData_1 = __importDefault(require("./useGraphData"));
var antd_1 = require("antd");
var types = {
    line: plots_1.Line,
    bar: plots_1.Column,
    pie: plots_1.Pie,
};
var GraphChartComp = function (props) {
    var model = props.model, domain = props.domain, context = props.context, ooui = props.ooui, limit = props.limit;
    var _a = useGraphData_1.default({
        model: model,
        domain: domain,
        context: context,
        limit: limit,
        ooui: ooui,
    }), loading = _a.loading, error = _a.error, graphProps = _a.graphProps;
    if (error) {
        return react_1.default.createElement(antd_1.Alert, { message: JSON.stringify(error), type: "error", banner: true });
    }
    if (loading || (graphProps === null || graphProps === void 0 ? void 0 : graphProps.data) === undefined) {
        return (react_1.default.createElement("div", { style: { padding: "1rem" } },
            react_1.default.createElement(icons_1.LoadingOutlined, { style: { height: "12px" } })));
    }
    var Chart = types[ooui.type];
    return (react_1.default.createElement("div", { style: { padding: "1rem" } },
        react_1.default.createElement(Chart, __assign({}, graphProps))));
};
exports.GraphChartComp = GraphChartComp;
exports.GraphChart = react_1.default.memo(exports.GraphChartComp);
//# sourceMappingURL=GraphChart.js.map