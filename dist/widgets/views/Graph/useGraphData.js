"use strict";
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
    var _b = react_1.useState(), data = _b[0], setData = _b[1];
    var _c = react_1.useState(), error = _c[0], setError = _c[1];
    var _d = react_1.useState(), yLabel = _d[0], setYLabel = _d[1];
    var _e = react_1.useState(), xLabel = _e[0], setXLabel = _e[1];
    var model = opts.model;
    react_1.useEffect(function () {
        (function () {
            return __awaiter(this, void 0, void 0, function () {
                var domain, context, x, y, limit, xField, yField, fields, yLabel_1, results, fieldsForModel, xFieldData, mustMapLabel, dataObject_1, valueLabelRelation_1, _i, results_1, result, _a, value, label, dataLabelObject_1, valuesForOperator, err_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            domain = opts.domain, context = opts.context, x = opts.x, y = opts.y, limit = opts.limit;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, 5, 6]);
                            setLoading(true);
                            xField = x.name;
                            yField = y.name;
                            fields = [xField];
                            if (y.operator !== "count") {
                                fields.push(yField);
                            }
                            yLabel_1 = labelsForOperator[y.operator] || "value";
                            setYLabel(yLabel_1);
                            return [4 /*yield*/, ConnectionProvider_1.default.getHandler().search({
                                    params: domain,
                                    fields: fields,
                                    context: context,
                                    model: model,
                                    order: xField,
                                    limit: limit,
                                })];
                        case 2:
                            results = (_b.sent());
                            return [4 /*yield*/, getFieldsForModel({ model: model, context: context })];
                        case 3:
                            fieldsForModel = _b.sent();
                            xFieldData = fieldsForModel[xField];
                            mustMapLabel = xFieldData.type === "selection" || xFieldData.type === "many2one";
                            dataObject_1 = {};
                            valueLabelRelation_1 = {};
                            // Group by x
                            for (_i = 0, results_1 = results; _i < results_1.length; _i++) {
                                result = results_1[_i];
                                _a = getValueData({
                                    fields: fieldsForModel,
                                    values: result,
                                    fieldName: xField,
                                }), value = _a.value, label = _a.label;
                                valueLabelRelation_1[value] = label;
                                if (value !== undefined && value !== false) {
                                    if (dataObject_1[value] === undefined) {
                                        dataObject_1[value] = [];
                                    }
                                    dataObject_1[value].push(result[yField]);
                                }
                            }
                            dataLabelObject_1 = {};
                            if (mustMapLabel) {
                                // Translate x values to labels
                                Object.keys(dataObject_1).forEach(function (x) {
                                    var y = dataObject_1[x];
                                    var labelForX = valueLabelRelation_1[x];
                                    dataLabelObject_1[labelForX] = y;
                                });
                            }
                            valuesForOperator = getValuesForOperator({
                                operator: y.operator,
                                groupedValues: mustMapLabel ? dataLabelObject_1 : dataObject_1,
                                xField: xField,
                                yLabel: yLabel_1,
                            });
                            setData(valuesForOperator);
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
    return { data: data, error: error, loading: loading, yLabel: yLabel };
}
exports.default = useGraphCountData;
function getValuesForOperator(_a) {
    var operator = _a.operator, groupedValues = _a.groupedValues, xField = _a.xField, yLabel = _a.yLabel;
    var values = [];
    Object.keys(groupedValues).forEach(function (x) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var y = groupedValues[x];
        switch (operator) {
            case "count": {
                var count = y.length;
                values.push((_a = {}, _a[xField] = x, _a[yLabel] = count, _a));
                break;
            }
            case "+": {
                var sum = y.reduce(function (previousValue, currentValue) {
                    return previousValue + currentValue;
                });
                values.push((_b = {}, _b[xField] = x, _b[yLabel] = roundNumber(sum), _b));
                break;
            }
            case "-": {
                var substract = y.reduce(function (previousValue, currentValue) {
                    return previousValue - currentValue;
                });
                values.push((_c = {}, _c[xField] = x, _c[yLabel] = roundNumber(substract), _c));
                break;
            }
            case "*": {
                var mult = y.reduce(function (previousValue, currentValue) {
                    return previousValue * currentValue;
                });
                values.push((_d = {}, _d[xField] = x, _d[yLabel] = roundNumber(mult), _d));
                break;
            }
            case "avg": {
                var sum = y.reduce(function (a, b) { return a + b; }, 0);
                var avg = sum / y.length || 0;
                values.push((_e = {}, _e[xField] = x, _e[yLabel] = roundNumber(avg), _e));
                break;
            }
            case "min": {
                values.push((_f = {}, _f[xField] = x, _f[yLabel] = Math.min.apply(Math, y), _f));
                break;
            }
            case "max": {
                values.push((_g = {}, _g[xField] = x, _g[yLabel] = Math.max.apply(Math, y), _g));
                break;
            }
            default: {
                values.push((_h = {}, _h[xField] = x, _h[yLabel] = y, _h));
            }
        }
    });
    return values;
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
//# sourceMappingURL=useGraphData.js.map