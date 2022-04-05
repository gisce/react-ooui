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
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var react_1 = require("react");
var GraphDefaults_1 = __importDefault(require("./GraphDefaults"));
var labelsForOperator = {
    count: "count",
    "+": "sum",
    "-": "subtract",
    "*": "multiply",
    avg: "average",
    min: "min",
    max: "max",
};
function useGraphCountData(opts) {
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(), error = _b[0], setError = _b[1];
    var _c = react_1.useState(), graphProps = _c[0], setGraphProps = _c[1];
    var model = opts.model;
    react_1.useEffect(function () {
        (function () {
            return __awaiter(this, void 0, void 0, function () {
                var domain, context, ooui, limit, defaultsType, xField, results, fields, yStackedValues, _a, valueLabelRelation, groupedResults, appliedOperators, resultsWithFinalXLabels, data, err_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            domain = opts.domain, context = opts.context, ooui = opts.ooui, limit = opts.limit;
                            defaultsType = getGraphDefaultsType({ ooui: ooui });
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, 5, 6]);
                            setLoading(true);
                            xField = ooui.x.name;
                            return [4 /*yield*/, ConnectionProvider_1.default.getHandler().search({
                                    params: domain,
                                    fields: getFieldsToRetrieve({ ooui: ooui }),
                                    context: context,
                                    model: model,
                                    order: xField,
                                    limit: limit,
                                })];
                        case 2:
                            results = (_b.sent());
                            return [4 /*yield*/, getFieldsForModel({ model: model, context: context })];
                        case 3:
                            fields = _b.sent();
                            yStackedValues = getYStackedResultsIfNeeded({
                                results: results,
                                fields: fields,
                                ooui: ooui,
                                type: defaultsType,
                            });
                            _a = getRecordsGroupedByX({
                                xField: xField,
                                yFields: getYFields(ooui.y),
                                results: yStackedValues,
                                fields: fields,
                            }), valueLabelRelation = _a.valueLabelRelation, groupedResults = _a.groupedResults;
                            appliedOperators = applyOperators({
                                results: groupedResults,
                                ooui: ooui,
                            });
                            resultsWithFinalXLabels = replaceLabelsForXIfNeeded({
                                results: appliedOperators,
                                valueLabelRelation: valueLabelRelation,
                                ooui: ooui,
                                fields: fields,
                            });
                            data = createDataObject({
                                results: resultsWithFinalXLabels,
                                xField: xField,
                            });
                            setGraphProps(getGraphProps({ type: defaultsType, data: data, ooui: ooui }));
                            return [3 /*break*/, 6];
                        case 4:
                            err_1 = _b.sent();
                            setError(err_1);
                            return [3 /*break*/, 6];
                        case 5:
                            setLoading(false);
                            return [7 /*endfinally*/];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        })();
    }, [model]);
    return { error: error, loading: loading, graphProps: graphProps };
}
exports.default = useGraphCountData;
function getValueForOperator(_a) {
    var operator = _a.operator, values = _a.values;
    switch (operator) {
        case "count": {
            return values.length;
        }
        case "+": {
            return roundNumber(values.reduce(function (previousValue, currentValue) {
                return previousValue + currentValue;
            }));
        }
        case "-": {
            return roundNumber(values.reduce(function (previousValue, currentValue) {
                return previousValue - currentValue;
            }));
        }
        case "*": {
            return roundNumber(values.reduce(function (previousValue, currentValue) {
                return previousValue * currentValue;
            }));
        }
        case "avg": {
            var sum = values.reduce(function (a, b) { return a + b; }, 0);
            var avg = sum / values.length || 0;
            return roundNumber(avg);
        }
        case "min": {
            return Math.min.apply(Math, values);
        }
        case "max": {
            return Math.max.apply(Math, values);
        }
        default: {
            return values;
        }
    }
}
function roundNumber(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}
function getFieldsForModel(_a) {
    var model = _a.model, context = _a.context;
    return __awaiter(this, void 0, void 0, function () {
        var viewData;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                        model: model,
                        context: context,
                        type: "form",
                    })];
                case 1:
                    viewData = _b.sent();
                    return [2 /*return*/, viewData.fields];
            }
        });
    });
}
function getValueData(_a) {
    var fields = _a.fields, values = _a.values, fieldName = _a.fieldName;
    var xFieldData = fields[fieldName];
    var value = values[fieldName];
    if (xFieldData && xFieldData.type === "many2one") {
        return { value: value[0], label: value[1] };
    }
    else if (xFieldData && xFieldData.type === "selection") {
        var selectionValues = xFieldData.selection;
        var valuePair = selectionValues.find(function (selectionPair) {
            return selectionPair[0] === value;
        });
        if (!valuePair) {
            throw new Error("Could not find value " + value + " in selection");
        }
        return { value: value, label: valuePair[1] };
    }
    return { value: value, label: fieldName };
}
function getYStackedResultsIfNeeded(_a) {
    var results = _a.results, fields = _a.fields, ooui = _a.ooui, type = _a.type;
    if (type !== "barStacked") {
        return results;
    }
    var fieldName = ooui.y[0].label;
    var finalResults = [];
    var mapValueLabel = {};
    results.forEach(function (result) {
        var _a;
        var _b = getValueData({
            fields: fields,
            values: result,
            fieldName: fieldName,
        }), value = _b.value, label = _b.label;
        mapValueLabel[value] = label;
        finalResults.push(__assign(__assign({}, result), (_a = {}, _a[fieldName] = value, _a)));
    });
    finalResults = finalResults.map(function (result) {
        var _a;
        return __assign(__assign({}, result), (_a = {}, _a[fieldName] = mapValueLabel[result[fieldName]], _a));
    });
    return finalResults;
}
function getGraphDefaultsType(_a) {
    var ooui = _a.ooui;
    if (ooui.type === "bar" && ooui.y && ooui.y.length === 1 && ooui.y[0].label) {
        return "barStacked";
    }
    if (ooui.type === "pie") {
        return ooui.type;
    }
    return "default";
}
function getFieldsToRetrieve(_a) {
    var ooui = _a.ooui;
    var xField = ooui.x.name;
    var fields = [xField];
    if (!ooui.y) {
        return [];
    }
    ooui.y.forEach(function (y) {
        if (y.operator !== "count") {
            fields.push(y.name);
        }
        if (y.label) {
            fields.push(y.label);
        }
    });
    return fields;
}
function getRecordsGroupedByX(_a) {
    var results = _a.results, fields = _a.fields, xField = _a.xField, yFields = _a.yFields;
    var valueLabelRelation = {};
    var groupedResults = {};
    var _loop_1 = function (result) {
        var _b = getValueData({
            fields: fields,
            values: result,
            fieldName: xField,
        }), value = _b.value, label = _b.label;
        valueLabelRelation[value] = label;
        if (value !== undefined && value !== false) {
            if (groupedResults[value] === undefined) {
                groupedResults[value] = [];
            }
            var yValues_1 = {};
            yFields.forEach(function (yField) {
                yValues_1[yField] = result[yField];
            });
            groupedResults[value].push(yValues_1);
        }
    };
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var result = results_1[_i];
        _loop_1(result);
    }
    return { valueLabelRelation: valueLabelRelation, groupedResults: groupedResults };
}
function applyOperators(_a) {
    var results = _a.results, ooui = _a.ooui;
    var yAxis = ooui.y;
    var resultsWithOperatorsApplied = {};
    Object.keys(results).forEach(function (x) {
        var yValues = results[x];
        yAxis.forEach(function (y) {
            var _a;
            var operator = y.operator;
            var yField = y.name;
            if (y.label) {
                var groupedYValues_1 = getResultsGroupedBy({
                    results: yValues,
                    fieldName: y.label,
                });
                Object.keys(groupedYValues_1).forEach(function (yLabelKey) {
                    var _a;
                    var iYValues = groupedYValues_1[yLabelKey];
                    var valuesForAxis = getValuesForAxis({
                        values: iYValues,
                        fieldName: yField,
                    });
                    var result = getValueForOperator({
                        operator: operator,
                        values: valuesForAxis,
                    });
                    if (!resultsWithOperatorsApplied[x]) {
                        resultsWithOperatorsApplied[x] = [];
                    }
                    resultsWithOperatorsApplied[x].push((_a = {},
                        _a[getYAxisFieldname(y)] = result,
                        _a[y.label] = yLabelKey,
                        _a));
                });
            }
            else {
                var valuesForAxis = getValuesForAxis({
                    values: yValues,
                    fieldName: yField,
                });
                var result = getValueForOperator({ operator: operator, values: valuesForAxis });
                if (!resultsWithOperatorsApplied[x]) {
                    resultsWithOperatorsApplied[x] = [];
                }
                resultsWithOperatorsApplied[x].push((_a = {},
                    _a[getYAxisFieldname(y)] = result,
                    _a));
            }
        });
    });
    return resultsWithOperatorsApplied;
}
function replaceLabelsForXIfNeeded(_a) {
    var results = _a.results, valueLabelRelation = _a.valueLabelRelation, ooui = _a.ooui, fields = _a.fields;
    var resultsWithLabels = {};
    var mustMapLabel = mustMapXLabel({ ooui: ooui, fields: fields });
    if (!mustMapLabel) {
        return results;
    }
    Object.keys(results).forEach(function (x) {
        var yValues = results[x];
        resultsWithLabels[valueLabelRelation[x]] = yValues;
    });
    return resultsWithLabels;
}
function createDataObject(_a) {
    var results = _a.results, xField = _a.xField;
    var resultsArray = [];
    Object.keys(results).forEach(function (x) {
        var entries = results[x];
        entries.forEach(function (yValues) {
            var _a;
            resultsArray.push(__assign((_a = {}, _a[xField] = x, _a), yValues));
        });
    });
    return resultsArray;
}
function getGraphProps(_a) {
    var type = _a.type, data = _a.data, ooui = _a.ooui;
    var graphProps = GraphDefaults_1.default[type];
    graphProps.data = data;
    if (type === "pie") {
        graphProps.colorField = ooui.x.name;
        graphProps.angleField = getYAxisFieldname(ooui.y[0]);
    }
    else if (type === "barStacked") {
        graphProps.xField = ooui.x.name;
        graphProps.yField = getYAxisFieldname(ooui.y[0]);
        graphProps.seriesField = ooui.y[0].label;
    }
    else if (type === "default") {
        graphProps.xField = ooui.x.name;
        graphProps.yField = getYAxisFieldname(ooui.y[0]);
    }
    return graphProps;
}
function mustMapXLabel(_a) {
    var ooui = _a.ooui, fields = _a.fields;
    var xField = ooui.x.name;
    var xFieldData = fields[xField];
    return xFieldData.type === "selection" || xFieldData.type === "many2one";
}
function getYAxisFieldname(y) {
    if (y.operator) {
        return y.name + "_" + labelsForOperator[y.operator];
    }
    return y.name;
}
function getYFields(y) {
    var yFields = [];
    y.forEach(function (yAxis) {
        yFields.push(yAxis.name);
        if (yAxis.label) {
            yFields.push(yAxis.label);
        }
    });
    return yFields;
}
function getResultsGroupedBy(_a) {
    var results = _a.results, fieldName = _a.fieldName;
    var groupedResults = {};
    for (var _i = 0, results_2 = results; _i < results_2.length; _i++) {
        var result = results_2[_i];
        var value = result[fieldName];
        if (value !== undefined && value !== false) {
            if (groupedResults[value] === undefined) {
                groupedResults[value] = [];
            }
            groupedResults[value].push(result);
        }
    }
    return groupedResults;
}
function getValuesForAxis(_a) {
    var values = _a.values, fieldName = _a.fieldName;
    return values
        .filter(function (yValue) { return yValue[fieldName] !== undefined; })
        .map(function (yValue) {
        return yValue[fieldName];
    });
}
//# sourceMappingURL=useGraphData.js.map