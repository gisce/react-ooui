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
var __1 = require("..");
var uuid_1 = require("uuid");
var Welcome_1 = __importDefault(require("./Welcome"));
var TabManagerContext_1 = __importDefault(require("@/context/TabManagerContext"));
var ActionView_1 = __importDefault(require("./ActionView"));
var ooui_1 = require("@gisce/ooui");
var LocaleContext_1 = __importDefault(require("@/context/LocaleContext"));
var LocaleContext_2 = require("@/context/LocaleContext");
var ActionErrorDialog_1 = __importDefault(require("@/ui/ActionErrorDialog"));
function RootView(props, ref) {
    var _this = this;
    var children = props.children, _a = props.globalValues, globalValues = _a === void 0 ? {} : _a, _b = props.rootContext, rootContext = _b === void 0 ? {} : _b, lang = props.lang;
    var _c = react_1.useState("welcome"), activeKey = _c[0], setActiveKey = _c[1];
    var _d = react_1.useState([
        {
            title: LocaleContext_2.tForLang("welcome", lang),
            key: "welcome",
            closable: true,
            content: react_1.default.createElement(Welcome_1.default, null),
        },
    ]), tabs = _d[0], setTabs = _d[1];
    var tabViewsCloseFunctions = react_1.useRef(new Map());
    var contentRootProvider = react_1.useRef();
    react_1.useImperativeHandle(ref, function () { return ({
        retrieveAndOpenAction: retrieveAndOpenAction,
        openShortcut: openShortcut,
    }); });
    function remove(key) {
        if (key === activeKey) {
            var currentIndex = tabs.findIndex(function (tab) { return tab.key === key; });
            if (tabs[currentIndex - 1]) {
                setActiveKey(tabs[currentIndex - 1].key);
            }
            if (tabs[currentIndex + 1]) {
                setActiveKey(tabs[currentIndex + 1].key);
            }
        }
        setTabs(tabs.filter(function (tab) { return tab.key !== key; }));
        tabViewsCloseFunctions.current.delete(key);
    }
    function registerViewCloseFn(_a) {
        var tabKey = _a.tabKey, canWeClose = _a.canWeClose;
        tabViewsCloseFunctions.current.set(tabKey, canWeClose);
    }
    function retrieveAndOpenAction(_a) {
        var action = _a.action, values = _a.values, forced_values = _a.forced_values, initialViewType = _a.initialViewType;
        return __awaiter(this, void 0, void 0, function () {
            var dataForAction, _b, action_type, action_id_string, action_id, parsedContext, parsedDomain, _c, model, views, title, target, finalViews, _i, views_1, viewArray, id, viewType, view_id, initialView, _d, id, type, _e, id, type;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, __1.ConnectionProvider.getHandler().getActionData({
                            action: action,
                            context: rootContext,
                        })];
                    case 1:
                        dataForAction = _f.sent();
                        if (dataForAction.type === "ir.actions.wizard") {
                            ActionErrorDialog_1.default("Action type not supported");
                            return [2 /*return*/];
                        }
                        _b = action.split(","), action_type = _b[0], action_id_string = _b[1];
                        action_id = parseInt(action_id_string);
                        parsedContext = ooui_1.parseContext({
                            context: dataForAction.context,
                            values: globalValues,
                            fields: {},
                        });
                        if (!dataForAction.domain) return [3 /*break*/, 3];
                        return [4 /*yield*/, __1.ConnectionProvider.getHandler().evalDomain({
                                domain: dataForAction.domain,
                                values: globalValues,
                                context: __assign(__assign({}, rootContext), parsedContext),
                            })];
                    case 2:
                        _c = _f.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _c = [];
                        _f.label = 4;
                    case 4:
                        parsedDomain = _c;
                        model = dataForAction.res_model, views = dataForAction.views, title = dataForAction.name, target = dataForAction.target;
                        finalViews = [];
                        _i = 0, views_1 = views;
                        _f.label = 5;
                    case 5:
                        if (!(_i < views_1.length)) return [3 /*break*/, 11];
                        viewArray = views_1[_i];
                        id = viewArray[0], viewType = viewArray[1];
                        if (!!id) return [3 /*break*/, 9];
                        if (!(viewType === "dashboard")) return [3 /*break*/, 6];
                        finalViews.push([undefined, "dashboard"]);
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, __1.ConnectionProvider.getHandler().getView({
                            model: model,
                            type: viewType,
                            id: id,
                            context: __assign(__assign({}, rootContext), parsedContext),
                        })];
                    case 7:
                        view_id = (_f.sent()).view_id;
                        finalViews.push([view_id, viewType]);
                        _f.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        finalViews.push(viewArray);
                        _f.label = 10;
                    case 10:
                        _i++;
                        return [3 /*break*/, 5];
                    case 11:
                        if (initialViewType) {
                            _d = finalViews.find(function (_a) {
                                var _ = _a[0], type = _a[1];
                                return type === initialViewType;
                            }), id = _d[0], type = _d[1];
                            initialView = { id: id, type: type };
                        }
                        else {
                            _e = finalViews[0], id = _e[0], type = _e[1];
                            initialView = { id: id, type: type };
                        }
                        openAction({
                            domain: parsedDomain,
                            context: __assign(__assign({}, rootContext), parsedContext),
                            model: model,
                            views: finalViews,
                            title: title,
                            target: target,
                            initialView: initialView,
                            action_type: action_type,
                            action_id: action_id,
                            values: values,
                            forced_values: forced_values,
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    function addNewTab(_a) {
        var title = _a.title, content = _a.content, key = _a.key, action = _a.action;
        var newTabs = __spreadArray([], tabs);
        if (tabs.length === 1 && tabs[0].key === "welcome") {
            newTabs = __spreadArray([], tabs.filter(function (tab) { return tab.key !== "welcome"; }));
        }
        setTabs(__spreadArray(__spreadArray([], newTabs), [
            {
                title: title,
                key: key,
                closable: true,
                content: content,
                action: action,
            },
        ]));
        setActiveKey(key);
    }
    function openRelate(_a) {
        var relateData = _a.relateData, fields = _a.fields, values = _a.values, action_id = _a.action_id, action_type = _a.action_type;
        return __awaiter(this, void 0, void 0, function () {
            var model, context, domain, views, target, title, _b, id, type, initialView, parsedContext, parsedDomain, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        model = relateData.res_model, context = relateData.context, domain = relateData.domain, views = relateData.views, target = relateData.target, title = relateData.string;
                        _b = views[0], id = _b[0], type = _b[1];
                        initialView = { id: id, type: type };
                        parsedContext = ooui_1.parseContext({
                            context: context,
                            values: __assign(__assign({}, values), globalValues),
                            fields: fields,
                        });
                        if (!domain) return [3 /*break*/, 2];
                        return [4 /*yield*/, __1.ConnectionProvider.getHandler().evalDomain({
                                domain: domain,
                                values: __assign(__assign({}, values), globalValues),
                                context: __assign(__assign({}, rootContext), parsedContext),
                            })];
                    case 1:
                        _c = _d.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _c = [];
                        _d.label = 3;
                    case 3:
                        parsedDomain = _c;
                        openAction({
                            model: model,
                            target: target,
                            views: views,
                            context: __assign(__assign({}, rootContext), parsedContext),
                            domain: parsedDomain,
                            title: title,
                            initialView: initialView,
                            action_id: action_id,
                            action_type: action_type,
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    function openShortcut(shortcut) {
        return __awaiter(this, void 0, void 0, function () {
            var action_id, action_type, res_id, view_id, action, dataForAction, parsedContext, parsedDomain, _a, model, views, title, target, finalViews, _i, views_2, viewArray, id_1, viewType, view_id_1, id, type, view, initialView;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        action_id = shortcut.action_id, action_type = shortcut.action_type, res_id = shortcut.res_id, view_id = shortcut.view_id;
                        action = action_type + "," + action_id;
                        return [4 /*yield*/, __1.ConnectionProvider.getHandler().getActionData({
                                action: action,
                                context: rootContext,
                            })];
                    case 1:
                        dataForAction = _c.sent();
                        parsedContext = ooui_1.parseContext({
                            context: dataForAction.context,
                            values: globalValues,
                            fields: {},
                        });
                        if (!dataForAction.domain) return [3 /*break*/, 3];
                        return [4 /*yield*/, __1.ConnectionProvider.getHandler().evalDomain({
                                domain: dataForAction.domain,
                                values: globalValues,
                                context: __assign(__assign({}, rootContext), parsedContext),
                            })];
                    case 2:
                        _a = _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = [];
                        _c.label = 4;
                    case 4:
                        parsedDomain = _a;
                        model = dataForAction.res_model, views = dataForAction.views, title = dataForAction.name, target = dataForAction.target;
                        finalViews = [];
                        _i = 0, views_2 = views;
                        _c.label = 5;
                    case 5:
                        if (!(_i < views_2.length)) return [3 /*break*/, 11];
                        viewArray = views_2[_i];
                        id_1 = viewArray[0], viewType = viewArray[1];
                        if (!!id_1) return [3 /*break*/, 9];
                        if (!(viewType === "dashboard")) return [3 /*break*/, 6];
                        finalViews.push([undefined, "dashboard"]);
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, __1.ConnectionProvider.getHandler().getView({
                            model: model,
                            type: viewType,
                            id: id_1,
                            context: __assign(__assign({}, rootContext), parsedContext),
                        })];
                    case 7:
                        view_id_1 = (_c.sent()).view_id;
                        finalViews.push([view_id_1, viewType]);
                        _c.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        finalViews.push(viewArray);
                        _c.label = 10;
                    case 10:
                        _i++;
                        return [3 /*break*/, 5];
                    case 11:
                        if (view_id === undefined || view_id === null) {
                            view = finalViews.find(function (view) {
                                return view[0] === undefined;
                            });
                            id = undefined;
                            type = view[1];
                        }
                        else {
                            _b = finalViews.find(function (view) {
                                if (view[0] === undefined) {
                                    return false;
                                }
                                return view[0] === view_id;
                            }), id = _b[0], type = _b[1];
                        }
                        initialView = { id: id, type: type };
                        openAction({
                            domain: parsedDomain,
                            context: __assign(__assign({}, rootContext), parsedContext),
                            model: model,
                            views: finalViews,
                            title: title,
                            target: target,
                            initialView: initialView,
                            action_id: action_id,
                            action_type: action_type,
                            res_id: res_id,
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    function openDefaultActionForModel(_a) {
        var model = _a.model, values = _a.values, forced_values = _a.forced_values, initialViewType = _a.initialViewType;
        return __awaiter(this, void 0, void 0, function () {
            var actionString;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, __1.ConnectionProvider.getHandler().getActionStringForModel(model)];
                    case 1:
                        actionString = _b.sent();
                        return [4 /*yield*/, retrieveAndOpenAction({
                                action: actionString,
                                values: values,
                                forced_values: forced_values,
                                initialViewType: initialViewType,
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function openAction(_a) {
        var domain = _a.domain, context = _a.context, model = _a.model, views = _a.views, title = _a.title, target = _a.target, initialView = _a.initialView, action_id = _a.action_id, action_type = _a.action_type, res_id = _a.res_id, values = _a.values, forced_values = _a.forced_values;
        return __awaiter(this, void 0, void 0, function () {
            var key, formView;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        key = uuid_1.v4();
                        if (!(target !== "current")) return [3 /*break*/, 2];
                        return [4 /*yield*/, __1.ConnectionProvider.getHandler().getView({
                                model: model,
                                type: "form",
                                id: initialView.type === "form" ? initialView.id : undefined,
                                context: __assign(__assign({}, rootContext), context),
                            })];
                    case 1:
                        formView = (_b.sent());
                        contentRootProvider.current.openActionModal({
                            domain: domain,
                            model: model,
                            formView: formView,
                            context: __assign(__assign({}, rootContext), context),
                            actionData: {
                                action_id: action_id,
                                action_type: action_type,
                                res_id: res_id,
                                view_id: formView.view_id,
                            },
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        addNewTab({
                            title: title,
                            action: {
                                id: action_id,
                                type: action_type,
                            },
                            content: (react_1.default.createElement(ActionView_1.default, { action_id: action_id, action_type: action_type, tabKey: key, title: title, views: views, model: model, context: __assign(__assign({}, rootContext), context), domain: domain, setCanWeClose: registerViewCloseFn, initialView: initialView, res_id: res_id, formDefaultValues: values, formForcedValues: forced_values })),
                            key: key,
                        });
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return (react_1.default.createElement(LocaleContext_1.default, { lang: lang },
        react_1.default.createElement(TabManagerContext_1.default, { openShortcut: openShortcut, openAction: openAction, openRelate: openRelate, openDefaultActionForModel: openDefaultActionForModel, tabs: tabs, activeKey: activeKey, onRemoveTab: function (key) { return __awaiter(_this, void 0, void 0, function () {
                var canWeCloseFn, canWeClose;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            canWeCloseFn = tabViewsCloseFunctions.current.get(key);
                            return [4 /*yield*/, (canWeCloseFn === null || canWeCloseFn === void 0 ? void 0 : canWeCloseFn())];
                        case 1:
                            canWeClose = _a.sent();
                            if (canWeClose || activeKey === "welcome") {
                                remove(key);
                            }
                            return [2 /*return*/];
                    }
                });
            }); }, onChangeTab: function (key) {
                setActiveKey(key);
            } },
            react_1.default.createElement(__1.ContentRootProvider, { ref: contentRootProvider, globalValues: globalValues }, children))));
}
exports.default = react_1.forwardRef(RootView);
//# sourceMappingURL=RootView.js.map