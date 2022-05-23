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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
var react_1 = __importStar(require("react"));
var ooui_1 = require("@gisce/ooui");
var icons_1 = require("@ant-design/icons");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var GraphIndicator_1 = require("./GraphIndicator");
var GraphChart_1 = require("./GraphChart");
var Graph = function (props) {
    var view_id = props.view_id, model = props.model, context = props.context, domain = props.domain;
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(), graphOoui = _b[0], setGraphOoui = _b[1];
    var _c = react_1.useState(), graphXml = _c[0], setGraphXml = _c[1];
    react_1.useEffect(function () {
        fetchData();
    }, [view_id]);
    function fetchData() {
        return __awaiter(this, void 0, void 0, function () {
            var viewData, graph, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                                model: model,
                                id: view_id,
                                type: "graph",
                                context: context,
                            })];
                    case 2:
                        viewData = _a.sent();
                        setGraphXml(viewData.arch);
                        graph = ooui_1.parseGraph(viewData.arch);
                        setGraphOoui(graph);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [2 /*return*/, react_1.default.createElement(react_1.default.Fragment, null, JSON.stringify(err_1))];
                    case 4:
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    if (loading) {
        return (react_1.default.createElement("div", { style: { padding: "1rem" } },
            react_1.default.createElement(icons_1.LoadingOutlined, { style: { height: "12px" } })));
    }
    if (!graphOoui) {
        return null;
    }
    switch (graphOoui.type) {
        case "indicatorField":
        case "indicator": {
            var indicator = graphOoui;
            var indicatorFieldopts = indicator.type === "indicatorField"
                ? {
                    field: indicator.field,
                    operator: indicator.operator,
                }
                : {};
            return (react_1.default.createElement(GraphIndicator_1.GraphIndicator, __assign({ showPercent: indicator.showPercent, totalDomain: indicator.totalDomain, colorCondition: indicator.color, model: model, context: context, domain: domain, icon: indicator.icon, suffix: indicator.suffix }, indicatorFieldopts)));
        }
        case "line":
        case "bar":
        case "pie": {
            return (react_1.default.createElement(GraphChart_1.GraphChart, { model: model, context: context, domain: domain, xml: graphXml }));
        }
        default: {
            return react_1.default.createElement(react_1.default.Fragment, null, "Graph " + graphOoui.type + " not implemented");
        }
    }
};
exports.Graph = Graph;
//# sourceMappingURL=Graph.js.map