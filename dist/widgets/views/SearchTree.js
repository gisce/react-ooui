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
var SearchFilter_1 = __importDefault(require("@/widgets/views/searchFilter/SearchFilter"));
var Tree_1 = __importDefault(require("@/widgets/views/Tree"));
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var ActionViewContext_1 = require("@/context/ActionViewContext");
var treeHelper_1 = require("@/helpers/treeHelper");
var useWindowDimensions_1 = __importDefault(require("@/hooks/useWindowDimensions"));
var react_measure_1 = __importDefault(require("react-measure"));
var DEFAULT_SEARCH_LIMIT = 80;
function SearchTree(props, ref) {
    var _this = this;
    var action = props.action, model = props.model, formViewProps = props.formView, treeViewProps = props.treeView, onRowClicked = props.onRowClicked, nameSearch = props.nameSearch, treeScrollY = props.treeScrollY, _a = props.domain, domain = _a === void 0 ? [] : _a, _b = props.visible, visible = _b === void 0 ? true : _b, _c = props.rootTree, rootTree = _c === void 0 ? false : _c, _d = props.parentContext, parentContext = _d === void 0 ? {} : _d;
    var _e = react_1.useState(false), isLoading = _e[0], setIsLoading = _e[1];
    var _f = react_1.useState(false), initialFetchDone = _f[0], setInitialFetchDone = _f[1];
    var searchNameGetDoneRef = react_1.useRef(false);
    var _g = react_1.useState(), currentModel = _g[0], setCurrentModel = _g[1];
    var _h = react_1.useState(), treeView = _h[0], setTreeView = _h[1];
    var _j = react_1.useState(), formView = _j[0], setFormView = _j[1];
    var _k = react_1.useState(1), page = _k[0], setPage = _k[1];
    var _l = react_1.useState(0), offset = _l[0], setOffset = _l[1];
    var _m = react_1.useState(DEFAULT_SEARCH_LIMIT), limit = _m[0], setLimit = _m[1];
    var _o = react_1.useState(), limitFromAction = _o[0], setLimitFromAction = _o[1];
    var paramsRef = react_1.useRef([]);
    var _p = react_1.useState(0), totalItems = _p[0], setTotalItems = _p[1];
    var _q = react_1.useState([]), results = _q[0], setResults = _q[1];
    var _r = react_1.useState(undefined), colorsForResults = _r[0], setColorsForResults = _r[1];
    var _s = react_1.useState(false), searchFilterLoading = _s[0], setSearchFilterLoading = _s[1];
    var _t = react_1.useState(), searchError = _t[0], setSearchError = _t[1];
    var _u = react_1.useState(), initialError = _u[0], setInitialError = _u[1];
    var _v = react_1.useState(false), tableRefreshing = _v[0], setTableRefreshing = _v[1];
    var _w = react_1.useState([]), selectedRowKeys = _w[0], setSelectedRowKeys = _w[1];
    var actionDomain = react_1.useRef([]);
    var _x = react_1.useState(200), searchFilterHeight = _x[0], setSearchFilterHeight = _x[1];
    var height = useWindowDimensions_1.default().height;
    var actionViewContext = react_1.useContext(ActionViewContext_1.ActionViewContext);
    var _y = (rootTree ? actionViewContext : {}) || {}, _z = _y.setResults, setResultsActionView = _z === void 0 ? undefined : _z, _0 = _y.setCurrentItemIndex, setCurrentItemIndex = _0 === void 0 ? undefined : _0, _1 = _y.currentId, currentId = _1 === void 0 ? undefined : _1, _2 = _y.results, resultsActionView = _2 === void 0 ? undefined : _2, _3 = _y.setSelectedRowItems, setSelectedRowItems = _3 === void 0 ? undefined : _3;
    react_1.useImperativeHandle(ref, function () { return ({
        refreshResults: fetchResults,
    }); });
    var onRequestPageChange = function (page) {
        setTableRefreshing(true);
        setPage(page);
        setOffset((page - 1) * limit);
    };
    var searchByNameSearch = function () { return __awaiter(_this, void 0, void 0, function () {
        var searchResults, resultsIds, colors, resultsWithData, resultsData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().nameSearch({
                        model: currentModel,
                        payload: nameSearch,
                        context: parentContext,
                    })];
                case 1:
                    searchResults = _a.sent();
                    setTotalItems(searchResults.length);
                    if (!(searchResults.length > 0)) return [3 /*break*/, 3];
                    resultsIds = searchResults.map(function (item) {
                        return item === null || item === void 0 ? void 0 : item[0];
                    });
                    colors = treeHelper_1.getTree(treeView).colors;
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readEvalUiObjects({
                            model: currentModel,
                            ids: resultsIds,
                            arch: treeView === null || treeView === void 0 ? void 0 : treeView.arch,
                            fields: Object.keys(treeView === null || treeView === void 0 ? void 0 : treeView.fields),
                            context: parentContext,
                            attrs: colors && {
                                colors: colors,
                            },
                        })];
                case 2:
                    resultsWithData = _a.sent();
                    resultsData = resultsWithData[0];
                    setColorsForResults(treeHelper_1.getColorMap(resultsWithData[1]));
                    setResults(resultsData);
                    setResultsActionView === null || setResultsActionView === void 0 ? void 0 : setResultsActionView(resultsWithData);
                    if (resultsWithData.length > 0) {
                        setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(0);
                    }
                    else {
                        setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(undefined);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    setResults([]);
                    setResultsActionView === null || setResultsActionView === void 0 ? void 0 : setResultsActionView([]);
                    setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(undefined);
                    _a.label = 4;
                case 4:
                    searchNameGetDoneRef.current = true;
                    return [2 /*return*/];
            }
        });
    }); };
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
        var domainParams, searchParams, colors, _a, totalItems, results, attrsEvaluated, resultIds, newCurrentItemIndex;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    domainParams = actionDomain.current.length > 0 ? actionDomain.current : domain;
                    searchParams = mergeParams(paramsRef.current, domainParams);
                    colors = treeHelper_1.getTree(treeView).colors;
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().searchForTree({
                            params: searchParams,
                            limit: limit,
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
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().searchAllIds({
                            params: searchParams,
                            model: currentModel,
                            totalItems: totalItems,
                            context: parentContext,
                        })];
                case 2:
                    resultIds = _b.sent();
                    setResults(results);
                    setResultsActionView === null || setResultsActionView === void 0 ? void 0 : setResultsActionView(resultIds);
                    if (resultsActionView && resultIds.length > 0) {
                        newCurrentItemIndex = resultIds.findIndex(function (id) { return currentId === id; });
                        if (newCurrentItemIndex === -1) {
                            setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(0);
                        }
                        else {
                            setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(newCurrentItemIndex);
                        }
                    }
                    else {
                        setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(undefined);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var fetchResults = function () { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, 6, 7]);
                    setTableRefreshing(true);
                    if (!(nameSearch && !searchNameGetDoneRef.current)) return [3 /*break*/, 2];
                    return [4 /*yield*/, searchByNameSearch()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, searchResults()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5:
                    error_1 = _a.sent();
                    setSearchError(error_1);
                    return [3 /*break*/, 7];
                case 6:
                    setTableRefreshing(false);
                    setSearchFilterLoading(false);
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (!initialFetchDone) {
            return;
        }
        if (visible) {
            searchNameGetDoneRef.current = false;
            fetchResults();
        }
    }, [page, limit, offset, initialFetchDone, visible]);
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
                    setLimitFromAction(dataForAction.limit);
                    setLimit(dataForAction.limit);
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
                    _formView = formViewProps;
                    if (!!formViewProps) return [3 /*break*/, 2];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                            model: model,
                            type: "form",
                            context: parentContext,
                        })];
                case 1:
                    _formView = (_a.sent());
                    _a.label = 2;
                case 2:
                    _treeView = treeViewProps;
                    if (!!treeViewProps) return [3 /*break*/, 4];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                            model: model,
                            type: "tree",
                            context: parentContext,
                        })];
                case 3:
                    _treeView = (_a.sent());
                    _a.label = 4;
                case 4:
                    setFormView(_formView);
                    setTreeView(_treeView);
                    setLimitFromAction(undefined);
                    setLimit(DEFAULT_SEARCH_LIMIT);
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
    var onClear = function () {
        if (tableRefreshing)
            return;
        setSearchError(undefined);
        paramsRef.current = [];
        setOffset(0);
        setPage(1);
        setLimit(limitFromAction || DEFAULT_SEARCH_LIMIT);
    };
    var onSubmit = function (_a) {
        var newParams = _a.params, newLimit = _a.limit, newOffset = _a.offset;
        if (tableRefreshing)
            return;
        setSearchFilterLoading(true);
        setSearchError(undefined);
        setPage(1);
        if (newLimit)
            setLimit(newLimit);
        if (newOffset)
            setOffset(newOffset);
        paramsRef.current = newParams;
        fetchResults();
    };
    var onRowClickedHandler = function (id) {
        onRowClicked({
            id: id,
            model: currentModel,
            formView: formView,
            treeView: treeView,
        });
    };
    function onChangeSelectedRowKeys(selectedRowKeys) {
        setSelectedRowKeys(selectedRowKeys);
        var items = results.filter(function (result) {
            return selectedRowKeys.includes(result.id);
        });
        setSelectedRowItems === null || setSelectedRowItems === void 0 ? void 0 : setSelectedRowItems(items);
    }
    function calculateTableHeight() {
        return height - (searchFilterHeight + 255);
    }
    var content = function () {
        if (!treeView || !formView) {
            return null;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_measure_1.default, { bounds: true, onResize: function (contentRect) {
                    var _a;
                    setSearchFilterHeight((_a = contentRect.bounds) === null || _a === void 0 ? void 0 : _a.height);
                } }, function (_a) {
                var measureRef = _a.measureRef;
                return (react_1.default.createElement("div", { ref: measureRef },
                    react_1.default.createElement(SearchFilter_1.default, { fields: __assign(__assign({}, treeView.fields), formView.fields), searchFields: formView.search_fields, onClear: onClear, limit: limit, offset: offset, isSearching: searchFilterLoading, onSubmit: onSubmit }),
                    searchError && (react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: searchError, type: "error", banner: true })),
                    react_1.default.createElement("div", { className: "pb-5" })));
            }),
            react_1.default.createElement(Tree_1.default, { total: totalItems, limit: limit, page: page, treeView: treeView, results: results, onRequestPageChange: onRequestPageChange, loading: tableRefreshing, onRowClicked: onRowClickedHandler, scrollY: treeScrollY || calculateTableHeight(), colorsForResults: colorsForResults, rowSelection: {
                    selectedRowKeys: selectedRowKeys,
                    onChange: onChangeSelectedRowKeys,
                } })));
    };
    if (initialError) {
        return (react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: initialError, type: "error", banner: true }));
    }
    return (react_1.default.createElement("div", { style: !visible ? { display: "none" } : {} }, isLoading ? react_1.default.createElement(antd_1.Spin, null) : content()));
}
exports.default = react_1.forwardRef(SearchTree);
//# sourceMappingURL=SearchTree.js.map