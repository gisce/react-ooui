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
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var Tree_1 = __importDefault(require("@/widgets/views/Tree"));
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var treeHelper_1 = require("@/helpers/treeHelper");
var DEFAULT_SEARCH_LIMIT = 80;
function DashboardTree(props) {
    var _this = this;
    var action = props.action, model = props.model, view_id = props.view_id, onRowClicked = props.onRowClicked, _a = props.domain, domain = _a === void 0 ? [] : _a, _b = props.visible, visible = _b === void 0 ? true : _b, _c = props.parentContext, parentContext = _c === void 0 ? {} : _c;
    var _d = react_1.useState(false), isLoading = _d[0], setIsLoading = _d[1];
    var _e = react_1.useState(false), initialFetchDone = _e[0], setInitialFetchDone = _e[1];
    var _f = react_1.useState(), currentModel = _f[0], setCurrentModel = _f[1];
    var _g = react_1.useState(), treeView = _g[0], setTreeView = _g[1];
    var _h = react_1.useState(), formView = _h[0], setFormView = _h[1];
    var _j = react_1.useState(1), page = _j[0], setPage = _j[1];
    var _k = react_1.useState(0), offset = _k[0], setOffset = _k[1];
    var limitRef = react_1.useRef(DEFAULT_SEARCH_LIMIT);
    var paramsRef = react_1.useRef([]);
    var _l = react_1.useState(0), totalItems = _l[0], setTotalItems = _l[1];
    var _m = react_1.useState([]), results = _m[0], setResults = _m[1];
    var _o = react_1.useState(undefined), colorsForResults = _o[0], setColorsForResults = _o[1];
    var _p = react_1.useState(), sorter = _p[0], setSorter = _p[1];
    var _q = react_1.useState(), searchError = _q[0], setSearchError = _q[1];
    var _r = react_1.useState(), initialError = _r[0], setInitialError = _r[1];
    var _s = react_1.useState(false), tableRefreshing = _s[0], setTableRefreshing = _s[1];
    var actionDomain = react_1.useRef([]);
    var onRequestPageChange = function (page) {
        setTableRefreshing(true);
        setPage(page);
        setOffset((page - 1) * limitRef.current);
    };
    var getUniqueFieldsForParams = function (params) {
        var uniqueFields = {};
        params.forEach(function (param) {
            if (Array.isArray(param) && param[0]) {
                uniqueFields[param[0]] = true;
            }
        });
        return Object.keys(uniqueFields);
    };
    var mergeParams = function (searchParams, domainParams) {
        var finalParams = searchParams;
        var uniqueParams = getUniqueFieldsForParams(searchParams);
        domainParams.forEach(function (element) {
            if (Array.isArray(element) && element[0]) {
                if (!uniqueParams.includes(element[0])) {
                    finalParams.push(element);
                }
            }
        });
        return finalParams;
    };
    var searchResults = function () { return __awaiter(_this, void 0, void 0, function () {
        var domainParams, searchParams, colors, _a, totalItems, results, attrsEvaluated, resultsSorted;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    domainParams = actionDomain.current.length > 0 ? actionDomain.current : domain;
                    searchParams = mergeParams(paramsRef.current, domainParams);
                    colors = treeHelper_1.getTree(treeView).colors;
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().searchForTree({
                            params: searchParams,
                            limit: limitRef.current,
                            offset: offset,
                            model: currentModel,
                            fields: treeView.fields,
                            context: parentContext,
                            attrs: colors && { colors: colors },
                        })];
                case 1:
                    _a = _b.sent(), totalItems = _a.totalItems, results = _a.results, attrsEvaluated = _a.attrsEvaluated;
                    setTotalItems(totalItems);
                    setColorsForResults(treeHelper_1.getColorMap(attrsEvaluated));
                    resultsSorted = sortResults(results, sorter);
                    setResults(resultsSorted);
                    return [2 /*return*/];
            }
        });
    }); };
    var fetchResults = function () { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setTableRefreshing(true);
                    return [4 /*yield*/, searchResults()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    setSearchError(JSON.stringify(error_1));
                    return [3 /*break*/, 4];
                case 3:
                    setTableRefreshing(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (!initialFetchDone) {
            return;
        }
        if (visible) {
            fetchResults();
        }
    }, [page, offset, initialFetchDone, visible]);
    var fetchData = function (type) { return __awaiter(_this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setInitialFetchDone(false);
                    setIsLoading(true);
                    setInitialError(undefined);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, 7, 8]);
                    if (!(type === "action")) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetchActionData()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, fetchModelData()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    setInitialFetchDone(true);
                    return [3 /*break*/, 8];
                case 6:
                    error_2 = _a.sent();
                    setInitialError(error_2);
                    return [3 /*break*/, 8];
                case 7:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var fetchActionData = function () { return __awaiter(_this, void 0, void 0, function () {
        var dataForAction;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getViewsForAction({
                        action: action,
                        context: parentContext,
                    })];
                case 1:
                    dataForAction = _a.sent();
                    actionDomain.current = dataForAction.domain;
                    setFormView(dataForAction.views.get("form"));
                    setTreeView(dataForAction.views.get("tree"));
                    setCurrentModel(dataForAction.model);
                    limitRef.current = dataForAction.limit;
                    return [2 /*return*/];
            }
        });
    }); };
    var fetchModelData = function () { return __awaiter(_this, void 0, void 0, function () {
        var _formView, _treeView;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setCurrentModel(model);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                            model: model,
                            type: "form",
                            context: parentContext,
                        })];
                case 1:
                    _formView = (_a.sent());
                    setFormView(_formView);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                            model: model,
                            type: "tree",
                            id: view_id,
                            context: parentContext,
                        })];
                case 2:
                    _treeView = (_a.sent());
                    setTreeView(_treeView);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (action) {
            fetchData("action");
        }
        else if (model) {
            fetchData("model");
        }
    }, [action, model]);
    var onRowClickedHandler = function (id) {
        onRowClicked({
            id: id,
            model: currentModel,
            treeView: treeView,
        });
    };
    function sortResults(resultsToSort, sorter) {
        if (!sorter) {
            return resultsToSort;
        }
        var field = sorter.field, order = sorter.order;
        var fields = __assign(__assign({}, treeView.fields), formView.fields);
        var type = fields[field].type;
        var sortFn = function (a, b) {
            var _a, _b;
            var aItem = a[field] || "", bItem = b[field] || "";
            if (type === "many2one") {
                aItem = ((_a = a[field]) === null || _a === void 0 ? void 0 : _a.value) || "";
                bItem = ((_b = b[field]) === null || _b === void 0 ? void 0 : _b.value) || "";
            }
            if (aItem === bItem) {
                return 0;
            }
            if (order === "ascend") {
                return aItem > bItem ? 1 : -1;
            }
            return aItem < bItem ? 1 : -1;
        };
        return resultsToSort.sort(sortFn);
    }
    var content = function () {
        if (!treeView || !formView) {
            return null;
        }
        return (react_1.default.createElement("div", { style: { overflowY: "scroll" } },
            searchError && (react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: searchError, type: "error", banner: true })),
            react_1.default.createElement(Tree_1.default, { showPagination: false, total: totalItems, limit: limitRef.current, disableScroll: true, page: page, treeView: treeView, results: results, onRequestPageChange: onRequestPageChange, loading: tableRefreshing, onRowClicked: onRowClickedHandler, colorsForResults: colorsForResults, onChangeSort: function (newSorter) {
                    setSorter === null || setSorter === void 0 ? void 0 : setSorter(newSorter);
                    var sortedResults = sortResults(results, newSorter);
                    setResults(sortedResults);
                } })));
    };
    if (initialError) {
        return (react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: initialError, type: "error", banner: true }));
    }
    return isLoading ? react_1.default.createElement(antd_1.Spin, { style: { padding: "2rem" } }) : content();
}
exports.default = DashboardTree;
//# sourceMappingURL=DashboardTree.js.map