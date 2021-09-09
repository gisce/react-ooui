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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var Form_1 = __importDefault(require("@/widgets/views/Form"));
var SearchTree_1 = __importDefault(require("@/widgets/views/SearchTree"));
var ActionViewContext_1 = __importDefault(require("@/context/ActionViewContext"));
var TitleHeader_1 = __importDefault(require("@/ui/TitleHeader"));
var FormActionBar_1 = __importDefault(require("@/actionbar/FormActionBar"));
var TreeActionBar_1 = __importDefault(require("@/actionbar/TreeActionBar"));
var ActionErrorDialog_1 = __importDefault(require("@/ui/ActionErrorDialog"));
var filesHelper_1 = require("@/helpers/filesHelper");
var ooui_1 = require("ooui");
function ActionViewExplicit(props, ref) {
    var _this = this;
    var domain = props.domain, model = props.model, context = props.context, views = props.views, title = props.title, setCanWeClose = props.setCanWeClose, tabKey = props.tabKey;
    var _a = react_1.useState("tree"), currentView = _a[0], setCurrentView = _a[1];
    var _b = react_1.useState([]), availableViews = _b[0], setAvailableViews = _b[1];
    var _c = react_1.useState(), treeView = _c[0], setTreeView = _c[1];
    var _d = react_1.useState(), formView = _d[0], setFormView = _d[1];
    var _e = react_1.useState(false), isLoading = _e[0], setIsLoading = _e[1];
    var _f = react_1.useState(), currentId = _f[0], setCurrentId = _f[1];
    var _g = react_1.useState(), currentItemIndex = _g[0], setCurrentItemIndex = _g[1];
    var _h = react_1.useState([]), results = _h[0], setResults = _h[1];
    var _j = react_1.useState(), toolbar = _j[0], setToolbar = _j[1];
    var reportInProgressInterval = react_1.useRef();
    var _k = react_1.useState(false), reportGenerating = _k[0], setReportGenerating = _k[1];
    var formRef = react_1.useRef();
    react_1.useImperativeHandle(ref, function () { return ({
        canWeClose: canWeClose,
    }); });
    var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
        var availableViews, _i, views_1, viewArray, viewType, viewData, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setIsLoading(true);
                    availableViews = [];
                    _i = 0, views_1 = views;
                    _b.label = 1;
                case 1:
                    if (!(_i < views_1.length)) return [3 /*break*/, 6];
                    viewArray = views_1[_i];
                    viewType = viewArray[1];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                            model: model,
                            type: viewType,
                            context: context,
                        })];
                case 3:
                    viewData = _b.sent();
                    if (viewType === "tree") {
                        setTreeView(viewData);
                    }
                    if (viewType === "form") {
                        setFormView(viewData);
                        setToolbar((_a = viewData) === null || _a === void 0 ? void 0 : _a.toolbar);
                    }
                    availableViews.push(viewType);
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _b.sent();
                    console.error(model + " - " + viewType + "\u00A0- " + JSON.stringify(err_1, null, 2));
                    return [3 /*break*/, 5];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6:
                    if (availableViews.includes("tree")) {
                        setCurrentView("tree");
                    }
                    else {
                        setCurrentView("form");
                    }
                    setAvailableViews(availableViews);
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    setCanWeClose({ tabKey: tabKey, canWeClose: canWeClose });
    react_1.useEffect(function () {
        setCurrentView("tree");
        setCurrentId(undefined);
        setCurrentItemIndex(undefined);
        fetchData();
    }, [model, views]);
    function canWeClose() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(currentView === "form")) return [3 /*break*/, 2];
                        return [4 /*yield*/, formRef.current.cancelUnsavedChanges()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, true];
                }
            });
        });
    }
    function content() {
        if (isLoading) {
            return react_1.default.createElement(antd_1.Spin, null);
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Form_1.default, { rootForm: true, visible: currentView === "form", ref: formRef, model: model, formView: formView, id: currentId, onSubmitSucceed: function (id) {
                    var itemIndex = results.findIndex(function (item) {
                        return item === id;
                    });
                    if (itemIndex === -1) {
                        results.push(id);
                        setResults(results);
                        setCurrentItemIndex(results.length - 1);
                    }
                } }),
            react_1.default.createElement(SearchTree_1.default, { visible: currentView === "tree", rootTree: true, model: model, formView: formView, treeView: treeView, domain: domain, onRowClicked: function (event) {
                    var id = event.id;
                    setCurrentId(id);
                    var itemIndex = results.findIndex(function (item) {
                        return item === id;
                    });
                    setCurrentItemIndex(itemIndex);
                    setCurrentView("form");
                } })));
    }
    function onNewClicked() {
        setCurrentId(undefined);
        setCurrentView("form");
    }
    function generateReport(options) {
        return __awaiter(this, void 0, void 0, function () {
            var reportData, explicitIds, fields, values, _a, context, reportContext, model, datas, report_name, type, _b, ids, datasource, idsToExecute, results_1, reportContextParsed, newReportId_1, err_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        reportData = options.reportData, explicitIds = options.ids, fields = options.fields, values = options.values, _a = options.context, context = _a === void 0 ? {} : _a;
                        reportContext = reportData.context, model = reportData.model, datas = reportData.datas, report_name = reportData.report_name, type = reportData.type;
                        if (type !== "ir.actions.report.xml") {
                            ActionErrorDialog_1.default(type + " actions not supported");
                            return [2 /*return*/];
                        }
                        _b = datas || {}, ids = _b.ids, datasource = __rest(_b, ["ids"]);
                        idsToExecute = explicitIds || ids;
                        if (!!idsToExecute) return [3 /*break*/, 2];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().searchAllIds({
                                params: [],
                                model: datasource.model || model,
                                totalItems: 1,
                            })];
                    case 1:
                        results_1 = _c.sent();
                        if (results_1.length === 0) {
                            ActionErrorDialog_1.default("Nothing to print");
                            return [2 /*return*/];
                        }
                        idsToExecute = results_1;
                        datas.id = results_1[0];
                        _c.label = 2;
                    case 2:
                        reportContextParsed = typeof reportContext === "string"
                            ? ooui_1.parseContext({
                                context: reportContext,
                                fields: fields,
                                values: values,
                            })
                            : reportContext;
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().createReport({
                                model: model,
                                name: report_name,
                                datas: datas,
                                ids: idsToExecute,
                                context: __assign(__assign({}, context), reportContextParsed),
                            })];
                    case 4:
                        newReportId_1 = _c.sent();
                        setReportGenerating(true);
                        reportInProgressInterval.current = setInterval(function () {
                            evaluateReportStatus(newReportId_1);
                        }, 1000);
                        return [3 /*break*/, 6];
                    case 5:
                        err_2 = _c.sent();
                        ActionErrorDialog_1.default(err_2);
                        setReportGenerating(false);
                        clearInterval(reportInProgressInterval.current);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    function evaluateReportStatus(id) {
        return __awaiter(this, void 0, void 0, function () {
            var reportState, fileType, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getReport({
                                id: id,
                            })];
                    case 1:
                        reportState = _a.sent();
                        if (!reportState.state) return [3 /*break*/, 3];
                        clearInterval(reportInProgressInterval.current);
                        setReportGenerating(false);
                        return [4 /*yield*/, filesHelper_1.getMimeType(reportState.result)];
                    case 2:
                        fileType = _a.sent();
                        filesHelper_1.openBase64InNewTab(reportState.result, fileType.mime);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        clearInterval(reportInProgressInterval.current);
                        setReportGenerating(false);
                        ActionErrorDialog_1.default(error_1.exception || error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    return (react_1.default.createElement(ActionViewContext_1.default, { title: title, currentView: currentView, setCurrentView: setCurrentView, availableViews: availableViews, formRef: formRef, onNewClicked: onNewClicked, currentId: currentId, setCurrentId: setCurrentId, setCurrentItemIndex: setCurrentItemIndex, currentItemIndex: currentItemIndex, results: results, setResults: setResults, currentModel: model, toolbar: toolbar, setToolbar: setToolbar, generateReport: generateReport },
        react_1.default.createElement(TitleHeader_1.default, null, currentView === "form" ? react_1.default.createElement(FormActionBar_1.default, null) : react_1.default.createElement(TreeActionBar_1.default, null)),
        content(),
        react_1.default.createElement(antd_1.Modal, { title: "Generating report...", visible: reportGenerating, footer: null, closable: false, centered: true },
            react_1.default.createElement(antd_1.Spin, null))));
}
exports.default = react_1.forwardRef(ActionViewExplicit);
//# sourceMappingURL=ActionViewExplicit.js.map