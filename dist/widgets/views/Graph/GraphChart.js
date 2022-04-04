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
exports.GraphChart = void 0;
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
var GraphChart = function (props) {
    var model = props.model, domain = props.domain, context = props.context, ooui = props.ooui, limit = props.limit;
    var _a = useGraphData_1.default({
        model: model,
        domain: domain,
        context: context,
        limit: limit,
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
    var Chart = types[ooui.type];
    var config = {};
    if (ooui.type === "pie") {
        config = {
            appendPadding: 10,
            data: data,
            angleField: yLabel,
            colorField: ooui.x.name,
            radius: 0.9,
            label: {
                type: "inner",
                offset: "-30%",
                content: function (_a) {
                    var percent = _a.percent;
                    return (percent * 100).toFixed(0) + "%";
                },
                style: {
                    fontSize: 14,
                    textAlign: "center",
                },
            },
            interactions: [
                {
                    type: "element-active",
                },
            ],
        };
    }
    else {
        config = {
            data: data,
            padding: "auto",
            xField: ooui.x.name,
            yField: yLabel,
            xAxis: {
                tickCount: 5,
            },
        };
    }
    return (react_1.default.createElement("div", { style: { padding: "1rem" } },
        react_1.default.createElement(Chart, __assign({}, config))));
};
exports.GraphChart = GraphChart;
//# sourceMappingURL=GraphChart.js.map