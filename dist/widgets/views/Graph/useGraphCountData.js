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
function useGraphCountData(opts) {
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(), data = _b[0], setData = _b[1];
    var _c = react_1.useState(), error = _c[0], setError = _c[1];
    var _d = react_1.useState(), yLabel = _d[0], setYLabel = _d[1];
    var model = opts.model;
    react_1.useEffect(function () {
        (function () {
            return __awaiter(this, void 0, void 0, function () {
                var domain, context, x, y, isCount, xField_1, yField_1, fields, results, dataObject_1, dataArray_1, _i, results_1, result, data_1, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            domain = opts.domain, context = opts.context, x = opts.x, y = opts.y;
                            isCount = false;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, 4, 5]);
                            setLoading(true);
                            xField_1 = x.name;
                            yField_1 = y.name;
                            fields = [xField_1];
                            if (yField_1 !== xField_1) {
                                setYLabel(yField_1);
                                fields.push(yField_1);
                            }
                            else {
                                setYLabel("count");
                                isCount = true;
                            }
                            return [4 /*yield*/, ConnectionProvider_1.default.getHandler().search({
                                    params: domain,
                                    fields: fields,
                                    context: context,
                                    model: model,
                                    order: xField_1,
                                })];
                        case 2:
                            results = (_a.sent());
                            if (isCount) {
                                dataObject_1 = {};
                                dataArray_1 = [];
                                for (_i = 0, results_1 = results; _i < results_1.length; _i++) {
                                    result = results_1[_i];
                                    if (result[xField_1] !== undefined && result[xField_1] !== false) {
                                        if (dataObject_1[result[xField_1]] === undefined) {
                                            dataObject_1[result[xField_1]] = 0;
                                        }
                                        dataObject_1[result[xField_1]] += 1;
                                    }
                                }
                                Object.keys(dataObject_1).forEach(function (key) {
                                    var _a;
                                    dataArray_1.push((_a = {},
                                        _a[xField_1] = key,
                                        _a.count = dataObject_1[key],
                                        _a));
                                });
                                setData(dataArray_1);
                            }
                            else {
                                data_1 = results.map(function (result) {
                                    var _a;
                                    return _a = {},
                                        _a[xField_1] = result[xField_1],
                                        _a[yField_1] = result[yField_1],
                                        _a;
                                });
                                setData(data_1);
                            }
                            return [3 /*break*/, 5];
                        case 3:
                            err_1 = _a.sent();
                            setError(err_1);
                            return [3 /*break*/, 5];
                        case 4:
                            setLoading(false);
                            return [7 /*endfinally*/];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        })();
    }, [model]);
    return { data: data, error: error, loading: loading, yLabel: yLabel };
}
exports.default = useGraphCountData;
//# sourceMappingURL=useGraphCountData.js.map