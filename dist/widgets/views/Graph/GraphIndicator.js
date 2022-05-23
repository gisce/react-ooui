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
exports.GraphIndicator = void 0;
var react_1 = __importStar(require("react"));
var icons_1 = require("@ant-design/icons");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var Title_1 = __importDefault(require("antd/lib/typography/Title"));
var react_measure_1 = __importDefault(require("react-measure"));
var iconMapper_1 = __importDefault(require("@/helpers/iconMapper"));
var antd_1 = require("antd");
var graphProcessor_1 = require("@gisce/ooui/dist/Graph/processor/graphProcessor");
var fontGrowFactor = 0.7;
var minFontSize = 30;
var GraphIndicator = function (props) {
    var model = props.model, domain = props.domain, context = props.context, colorCondition = props.colorCondition, totalDomain = props.totalDomain, _a = props.showPercent, showPercent = _a === void 0 ? false : _a, iconProps = props.icon, suffix = props.suffix, field = props.field, operator = props.operator;
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(), value = _c[0], setValue = _c[1];
    var _d = react_1.useState(), percent = _d[0], setPercent = _d[1];
    var _e = react_1.useState(), totalValue = _e[0], setTotalValue = _e[1];
    var _f = react_1.useState(0), height = _f[0], setHeight = _f[1];
    var _g = react_1.useState(0), width = _g[0], setWidth = _g[1];
    var _h = react_1.useState(), color = _h[0], setColor = _h[1];
    var _j = react_1.useState(), icon = _j[0], setIcon = _j[1];
    var _k = react_1.useState(), error = _k[0], setError = _k[1];
    react_1.useEffect(function () {
        fetchData();
    }, [model, colorCondition]);
    function fetchTotalValue(queryDomain) {
        return __awaiter(this, void 0, void 0, function () {
            var resultIds, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(field && operator)) return [3 /*break*/, 3];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().searchAllIds({
                                params: queryDomain,
                                model: model,
                                context: context,
                            })];
                    case 1:
                        resultIds = _a.sent();
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                                model: model,
                                ids: resultIds,
                                fieldsToRetrieve: [field],
                                context: context,
                            })];
                    case 2:
                        results = _a.sent();
                        return [2 /*return*/, graphProcessor_1.getValueForOperator({
                                values: results.map(function (r) { return r[field]; }),
                                operator: operator,
                            })];
                    case 3: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().searchCount({
                            model: model,
                            params: queryDomain,
                            context: context,
                        })];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function fetchData() {
        return __awaiter(this, void 0, void 0, function () {
            var totalRetrievedValue, percent, retrievedValue, parsedDomain, conditionEval, iconEval, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setLoading(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 11, , 12]);
                        return [4 /*yield*/, fetchTotalValue(domain)];
                    case 2:
                        retrievedValue = _a.sent();
                        setValue(retrievedValue);
                        if (!totalDomain) return [3 /*break*/, 5];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().evalDomain({
                                domain: totalDomain,
                                values: {},
                                context: context,
                            })];
                    case 3:
                        parsedDomain = _a.sent();
                        return [4 /*yield*/, fetchTotalValue(parsedDomain)];
                    case 4:
                        totalRetrievedValue = _a.sent();
                        setTotalValue(totalRetrievedValue);
                        _a.label = 5;
                    case 5:
                        if (totalRetrievedValue) {
                            percent =
                                Math.round((retrievedValue / totalRetrievedValue) * 100 * 100) / 100;
                            setPercent(percent);
                        }
                        if (!colorCondition) return [3 /*break*/, 7];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().parseCondition({
                                condition: colorCondition,
                                values: { value: retrievedValue, percent: percent },
                                context: context,
                            })];
                    case 6:
                        conditionEval = _a.sent();
                        setColor(conditionEval);
                        _a.label = 7;
                    case 7:
                        if (!iconProps) return [3 /*break*/, 10];
                        if (!(iconProps.indexOf(":") !== -1)) return [3 /*break*/, 9];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().parseCondition({
                                condition: iconProps,
                                values: { value: retrievedValue, percent: percent },
                                context: context,
                            })];
                    case 8:
                        iconEval = _a.sent();
                        setIcon(iconEval);
                        return [3 /*break*/, 10];
                    case 9:
                        setIcon(iconProps);
                        _a.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        err_1 = _a.sent();
                        setError(JSON.stringify(err_1));
                        return [3 /*break*/, 12];
                    case 12:
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    if (error) {
        return react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: error, type: "error", banner: true });
    }
    if (loading) {
        return (react_1.default.createElement("div", { style: { padding: "1rem" } },
            react_1.default.createElement(icons_1.LoadingOutlined, { style: { height: "12px" } })));
    }
    return (react_1.default.createElement(react_measure_1.default, { bounds: true, onResize: function (contentRect) {
            var _a, _b;
            setHeight((_a = contentRect.bounds) === null || _a === void 0 ? void 0 : _a.height);
            setWidth((_b = contentRect.bounds) === null || _b === void 0 ? void 0 : _b.width);
        } }, function (_a) {
        var measureRef = _a.measureRef;
        if (showPercent) {
            return (react_1.default.createElement(PercentageIndicator, { value: value, total: totalValue, percent: percent, measureRef: measureRef, height: height, width: width, color: color, icon: icon, suffix: suffix }));
        }
        else {
            return (react_1.default.createElement(CommonIndicator, { value: value, total: totalValue, measureRef: measureRef, height: height, width: width, color: color, icon: icon, suffix: suffix }));
        }
    }));
};
exports.GraphIndicator = GraphIndicator;
function getTextWidth(text, font) {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.font = font || getComputedStyle(document.body).font;
    return context.measureText(text).width;
}
function CommonIndicator(_a) {
    var measureRef = _a.measureRef, width = _a.width, height = _a.height, total = _a.total, value = _a.value, color = _a.color, icon = _a.icon, suffix = _a.suffix;
    var fontSize = height * fontGrowFactor < minFontSize
        ? minFontSize
        : height * fontGrowFactor;
    var finalValue = total ? value + "/" + total : "" + value;
    if (suffix) {
        finalValue += " " + suffix;
    }
    var tw = getTextWidth(finalValue, "bold " + Math.floor(fontSize * 1.03) + "px sans-serif");
    if (icon) {
        tw = tw * 2;
    }
    if (tw >= width * 0.85) {
        var maxFontSize = ((width * 0.85) / tw) * fontSize;
        fontSize = maxFontSize;
    }
    var IconElement = icon && iconMapper_1.default(icon);
    return (react_1.default.createElement("div", { ref: measureRef, style: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
        } },
        react_1.default.createElement(Title_1.default, { style: { fontSize: fontSize, margin: 0, color: color } },
            IconElement && react_1.default.createElement(IconElement, { style: { fontSize: fontSize * 0.7 } }),
            IconElement ? " " + finalValue : finalValue)));
}
function PercentageIndicator(_a) {
    var measureRef = _a.measureRef, height = _a.height, width = _a.width, percent = _a.percent, total = _a.total, value = _a.value, color = _a.color, icon = _a.icon, suffix = _a.suffix;
    var twoLinesHeight = height * 0.65;
    var fontSize = twoLinesHeight * fontGrowFactor < minFontSize
        ? minFontSize
        : twoLinesHeight * fontGrowFactor;
    var finalValue = total ? value + "/" + total : "" + value;
    if (suffix) {
        finalValue += " " + suffix;
    }
    var percentValue = percent + "%";
    var tw = getTextWidth(percentValue, "bold " + Math.floor(fontSize * 1.03) + "px sans-serif");
    if (icon) {
        tw = tw * 1.5;
    }
    var IconElement = icon && iconMapper_1.default(icon);
    if (tw >= width * 0.85 || fontSize * 2 < twoLinesHeight) {
        var maxFontSize = ((width * 0.85) / tw) * fontSize;
        fontSize = maxFontSize;
    }
    return (react_1.default.createElement("div", { ref: measureRef, style: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            flexDirection: "column",
            padding: "0.2rem",
        } },
        react_1.default.createElement(antd_1.Row, { align: "middle" },
            IconElement && (react_1.default.createElement(antd_1.Col, null,
                react_1.default.createElement(IconElement, { style: { fontSize: fontSize * 1, color: color, paddingRight: "10px" } }))),
            react_1.default.createElement(antd_1.Col, null,
                react_1.default.createElement(Title_1.default, { style: { fontSize: fontSize * 0.8, margin: 0, color: color } }, IconElement ? " " + percent + "%" : percent + "%"),
                react_1.default.createElement(Title_1.default, { style: {
                        fontSize: fontSize * 0.4,
                        margin: 0,
                        color: color,
                        textAlign: "center",
                    } }, finalValue)))));
}
//# sourceMappingURL=GraphIndicator.js.map