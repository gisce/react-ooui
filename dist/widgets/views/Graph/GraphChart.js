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
exports.GraphChart = void 0;
var react_1 = __importStar(require("react"));
var plots_1 = require("@ant-design/plots");
var GraphDefaults_1 = __importDefault(require("./GraphDefaults"));
var useGraphData_1 = require("./useGraphData");
var antd_1 = require("antd");
var LocaleContext_1 = require("@/context/LocaleContext");
var types = {
    line: plots_1.Line,
    bar: plots_1.Column,
    pie: plots_1.Pie,
};
var GraphChart = function (props) {
    var model = props.model, domain = props.domain, context = props.context, xml = props.xml, limit = props.limit;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    var _a = useGraphData_1.useGraphData({
        model: model,
        xml: xml,
        limit: limit,
        domain: domain,
        context: context,
        uninformedString: t("uninformed"),
    }), error = _a.error, loading = _a.loading, values = _a.values, type = _a.type;
    if (error) {
        return react_1.default.createElement(antd_1.Alert, { message: error, type: "error", banner: true });
    }
    if (loading) {
        return react_1.default.createElement(antd_1.Spin, null);
    }
    if (!values) {
        return react_1.default.createElement(antd_1.Alert, { message: "No data to display", type: "info" });
    }
    var data = values.data, isGroup = values.isGroup, isStack = values.isStack;
    var Chart = types[type];
    if (!Chart) {
        return react_1.default.createElement(react_1.default.Fragment, null, "Unknown graph type: " + type);
    }
    return (react_1.default.createElement("div", { style: { padding: "1rem" } },
        react_1.default.createElement(Chart, __assign({}, getGraphProps({
            type: type,
            data: data,
            isGroup: isGroup,
            isStack: isStack,
        })))));
};
exports.GraphChart = GraphChart;
function getGraphProps(props) {
    var type = props.type, data = props.data, isGroup = props.isGroup, isStack = props.isStack;
    var graphProps = GraphDefaults_1.default[type];
    if (!graphProps) {
        graphProps = GraphDefaults_1.default["default"];
    }
    graphProps.data = data;
    if (type === "pie") {
        graphProps.colorField = "x";
        graphProps.angleField = "value";
    }
    else {
        graphProps.xField = "x";
        graphProps.yField = "value";
        graphProps.seriesField = "type";
        graphProps.isGroup = isGroup;
        if (isStack) {
            graphProps.groupField = "stacked";
        }
    }
    return graphProps;
}
//# sourceMappingURL=GraphChart.js.map