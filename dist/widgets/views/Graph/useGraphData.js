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
exports.useGraphData = void 0;
var react_1 = require("react");
var ooui_1 = require("@gisce/ooui");
var use_deep_compare_effect_1 = __importDefault(require("use-deep-compare-effect"));
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var processGraphData = ooui_1.graphProcessor.processGraphData;
var getFieldsToRetrieve = ooui_1.graphFieldUtils.getFieldsToRetrieve;
var useGraphData = function (opts) {
    var model = opts.model, _a = opts.domain, domain = _a === void 0 ? [] : _a, _b = opts.context, context = _b === void 0 ? {} : _b, xml = opts.xml, limit = opts.limit, uninformedString = opts.uninformedString;
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    var _d = react_1.useState(), error = _d[0], setError = _d[1];
    var _e = react_1.useState(), processedValues = _e[0], setProcessedValues = _e[1];
    var _f = react_1.useState("line"), type = _f[0], setType = _f[1];
    use_deep_compare_effect_1.default(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var ooui, fieldsToRetrieve, values, fields, e_1, _processedValues;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        setLoading(true);
                        setError(undefined);
                        ooui = ooui_1.parseGraph(xml);
                        setType(ooui.type || "line");
                        fieldsToRetrieve = getFieldsToRetrieve({ ooui: ooui });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, retrieveData({
                                model: model,
                                domain: domain,
                                context: context,
                                limit: limit,
                                order: ooui.x.name,
                                fields: fieldsToRetrieve,
                            })];
                    case 2:
                        // Use connection provider or whatever service you need to use
                        (_a = _b.sent(), values = _a.values, fields = _a.fields);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        setError("Error fetching graph data values: " + JSON.stringify(e_1));
                        setLoading(false);
                        return [2 /*return*/];
                    case 4:
                        try {
                            if (!values || !fields) {
                                setError("No values or fields returned");
                                setLoading(false);
                                return [2 /*return*/];
                            }
                            _processedValues = processGraphData({
                                ooui: ooui,
                                values: values,
                                fields: fields,
                                options: {
                                    uninformedString: uninformedString,
                                },
                            });
                            setProcessedValues(_processedValues);
                        }
                        catch (e) {
                            setError("Error processing graph data: " + e);
                            setLoading(false);
                            return [2 /*return*/];
                        }
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [xml, model, limit, context, domain]);
    return { loading: loading, error: error, type: type, values: processedValues };
};
exports.useGraphData = useGraphData;
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
function retrieveData(_a) {
    var fields = _a.fields, model = _a.model, domain = _a.domain, context = _a.context, order = _a.order, limit = _a.limit;
    return __awaiter(this, void 0, void 0, function () {
        var values, fieldsDefinition;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().search({
                        model: model,
                        params: domain,
                        fields: fields,
                        context: context,
                        limit: limit,
                        order: order,
                    })];
                case 1:
                    values = (_b.sent());
                    return [4 /*yield*/, getFieldsForModel({ model: model, context: context })];
                case 2:
                    fieldsDefinition = _b.sent();
                    return [2 /*return*/, {
                            values: values,
                            fields: fieldsDefinition,
                        }];
            }
        });
    });
}
//# sourceMappingURL=useGraphData.js.map