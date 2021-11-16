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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
var TabManagerContext_1 = require("@/context/TabManagerContext");
var react_hotkeys_hook_1 = require("react-hotkeys-hook");
var GoToResourceModal_1 = require("@/ui/GoToResourceModal");
var InfoDialog_1 = __importDefault(require("@/ui/InfoDialog"));
var LocaleContext_1 = require("@/context/LocaleContext");
function ActionView(props, ref) {
    var _this = this;
    var domain = props.domain, model = props.model, context = props.context, views = props.views, title = props.title, setCanWeClose = props.setCanWeClose, tabKey = props.tabKey, initialView = props.initialView, formDefaultValues = props.formDefaultValues, _a = props.formForcedValues, formForcedValues = _a === void 0 ? {} : _a, _b = props.res_id, res_id = _b === void 0 ? false : _b;
    var _c = react_1.useState(), currentView = _c[0], setCurrentViewInternal = _c[1];
    var _d = react_1.useState([]), availableViews = _d[0], setAvailableViews = _d[1];
    var _e = react_1.useState(), treeView = _e[0], setTreeView = _e[1];
    var _f = react_1.useState(), formView = _f[0], setFormView = _f[1];
    var _g = react_1.useState(true), isLoading = _g[0], setIsLoading = _g[1];
    var res_id_parsed = res_id
        ? res_id
        : undefined;
    var _h = react_1.useState(res_id_parsed), currentId = _h[0], setCurrentIdInternal = _h[1];
    var _j = react_1.useState(), currentItemIndex = _j[0], setCurrentItemIndex = _j[1];
    var _k = react_1.useState([]), results = _k[0], setResults = _k[1];
    var _l = react_1.useState(), toolbar = _l[0], setToolbar = _l[1];
    var _m = react_1.useState(), sorter = _m[0], setSorter = _m[1];
    var _o = react_1.useState(0), totalItems = _o[0], setTotalItems = _o[1];
    var _p = react_1.useState(false), gtResourceModalVisible = _p[0], setGtResourceModalVisible = _p[1];
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    var formRef = react_1.useRef();
    var searchTreeRef = react_1.useRef();
    var tabManagerContext = react_1.useContext(TabManagerContext_1.TabManagerContext);
    var _q = tabManagerContext || {}, setCurrentViewTabContext = _q.setCurrentView, setCurrentIdTabContext = _q.setCurrentId, tabs = _q.tabs, activeKey = _q.activeKey;
    react_hotkeys_hook_1.useHotkeys("ctrl+g,command+g", function (event) {
        event.preventDefault();
        handleGoToRecordShortcut();
    }, [activeKey, tabs, currentView, currentItemIndex, results]);
    function setCurrentId(id) {
        setCurrentIdInternal(id);
        setCurrentIdTabContext === null || setCurrentIdTabContext === void 0 ? void 0 : setCurrentIdTabContext(id);
    }
    function setCurrentView(view) {
        setCurrentViewInternal(view);
        setCurrentViewTabContext === null || setCurrentViewTabContext === void 0 ? void 0 : setCurrentViewTabContext(view);
    }
    react_1.useImperativeHandle(ref, function () { return ({
        canWeClose: canWeClose,
    }); });
    var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
        var availableViews, _i, views_1, viewArray, id, viewType, viewData, err_1;
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
                    id = viewArray[0], viewType = viewArray[1];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                            model: model,
                            type: viewType,
                            id: id,
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
                    availableViews.push({ id: id, type: viewType });
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _b.sent();
                    console.error(model + " - " + viewType + "\u00A0- " + JSON.stringify(err_1, null, 2));
                    return [3 /*break*/, 5];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6:
                    // TODO: We will have to improve this when more views are supported
                    if (!initialView && availableViews.find(function (v) { return v.type === "tree"; })) {
                        setCurrentView(availableViews.find(function (v) { return v.type === "tree"; }));
                    }
                    else if (!initialView) {
                        setCurrentView(availableViews.find(function (v) { return v.type === "form"; }));
                    }
                    else {
                        setCurrentView(initialView);
                    }
                    setAvailableViews(availableViews);
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    setCanWeClose({ tabKey: tabKey, canWeClose: canWeClose });
    react_1.useEffect(function () {
        setCurrentView(initialView || availableViews.find(function (v) { return v.type === "tree"; }));
        if (!res_id) {
            setCurrentId(undefined);
            setCurrentItemIndex(undefined);
        }
        else {
            setCurrentIdTabContext === null || setCurrentIdTabContext === void 0 ? void 0 : setCurrentIdTabContext(res_id_parsed);
        }
        fetchData();
    }, [model, views, res_id]);
    react_1.useEffect(function () {
        if (activeKey === tabKey) {
            setCurrentIdTabContext === null || setCurrentIdTabContext === void 0 ? void 0 : setCurrentIdTabContext(currentId);
            setCurrentViewTabContext === null || setCurrentViewTabContext === void 0 ? void 0 : setCurrentViewTabContext(currentView);
        }
    }, [tabs, activeKey]);
    function canWeClose() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(currentView.type === "form")) return [3 /*break*/, 2];
                        return [4 /*yield*/, formRef.current.cancelUnsavedChanges()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/, true];
                }
            });
        });
    }
    function handleGoToRecordShortcut() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (activeKey !== tabKey) {
                    return [2 /*return*/];
                }
                setGtResourceModalVisible(true);
                return [2 /*return*/];
            });
        });
    }
    function goToResourceId(id) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var itemIndex, resource, err_2, itemIndex_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        itemIndex = results.findIndex(function (item) {
                            return item === id;
                        });
                        if (!(itemIndex === -1)) return [3 /*break*/, 5];
                        resource = void 0;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                                model: model,
                                ids: [id],
                                context: context,
                            })];
                    case 2:
                        resource = (_a = (_b.sent())) === null || _a === void 0 ? void 0 : _a[0];
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _b.sent();
                        return [3 /*break*/, 4];
                    case 4:
                        if (!resource) {
                            setGtResourceModalVisible(false);
                            InfoDialog_1.default(t("idNotFound"));
                            return [2 /*return*/];
                        }
                        else {
                            setResults(__spreadArray(__spreadArray([], results), [resource]));
                            setCurrentId(resource.id);
                            setCurrentItemIndex(results.length);
                            setGtResourceModalVisible(false);
                            return [2 /*return*/];
                        }
                        _b.label = 5;
                    case 5:
                        if (currentView.type === "form") {
                            itemIndex_1 = results.findIndex(function (item) {
                                return item === id;
                            });
                            setCurrentId(id);
                            setCurrentItemIndex(itemIndex_1);
                        }
                        else {
                            // Clear selected items and try to select the new one
                        }
                        setGtResourceModalVisible(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    function content() {
        if (isLoading) {
            return react_1.default.createElement(antd_1.Spin, null);
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Form_1.default, { rootForm: true, visible: currentView.type === "form", ref: formRef, model: model, defaultValues: formDefaultValues, forcedValues: formForcedValues, formView: formView, actionDomain: domain, id: currentId, parentContext: context, onSubmitSucceed: function (id) {
                    var itemIndex = results.findIndex(function (item) {
                        return item === id;
                    });
                    if (itemIndex === -1) {
                        results.push(id);
                        setResults(results);
                        setCurrentItemIndex(results.length - 1);
                    }
                } }),
            react_1.default.createElement(SearchTree_1.default, { visible: currentView.type === "tree", ref: searchTreeRef, rootTree: true, model: model, parentContext: context, formView: formView, treeView: treeView, domain: domain, onRowClicked: function (event) {
                    var id = event.id;
                    setCurrentId(id);
                    var itemIndex = results.findIndex(function (item) {
                        return item === id;
                    });
                    setCurrentItemIndex(itemIndex);
                    setCurrentView(availableViews.find(function (v) { return v.type === "form"; }));
                } })));
    }
    function onNewClicked() {
        if (currentId === undefined && currentView.type === "form") {
            formRef.current.clearAndReload();
        }
        else {
            setCurrentId(undefined);
            setCurrentView(availableViews.find(function (v) { return v.type === "form"; }));
        }
    }
    if (!currentView) {
        return null;
    }
    return (react_1.default.createElement(ActionViewContext_1.default, { title: title, currentView: currentView, setCurrentView: setCurrentView, availableViews: availableViews, formRef: formRef, searchTreeRef: searchTreeRef, onNewClicked: onNewClicked, currentId: currentId, setCurrentId: setCurrentId, setCurrentItemIndex: setCurrentItemIndex, currentItemIndex: currentItemIndex, results: results, setResults: setResults, currentModel: model, toolbar: toolbar, setToolbar: setToolbar, sorter: sorter, setSorter: setSorter, totalItems: totalItems, setTotalItems: setTotalItems },
        react_1.default.createElement(TitleHeader_1.default, null, currentView.type === "form" ? (react_1.default.createElement(FormActionBar_1.default, null)) : (react_1.default.createElement(TreeActionBar_1.default, { parentContext: context }))),
        content(),
        react_1.default.createElement(GoToResourceModal_1.GoToResourceModal, { visible: gtResourceModalVisible, onIdSubmitted: goToResourceId, onCancel: function () {
                setGtResourceModalVisible(false);
            } })));
}
exports.default = react_1.forwardRef(ActionView);
//# sourceMappingURL=ActionView.js.map