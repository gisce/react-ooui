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
var ooui_1 = require("ooui");
var LocaleContext_1 = __importDefault(require("@/context/LocaleContext"));
var LocaleContext_2 = require("@/context/LocaleContext");
function RootView(props, ref) {
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
    function retrieveAndOpenAction(action) {
        return __awaiter(this, void 0, void 0, function () {
            var dataForAction, parsedContext, parsedDomain, _a, model, views, title, target, initialViewType;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, __1.ConnectionProvider.getHandler().getActionData({
                            action: action,
                            context: rootContext,
                        })];
                    case 1:
                        dataForAction = _b.sent();
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
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = [];
                        _b.label = 4;
                    case 4:
                        parsedDomain = _a;
                        model = dataForAction.res_model, views = dataForAction.views, title = dataForAction.name, target = dataForAction.target;
                        initialViewType = views[0][1];
                        openAction({
                            domain: parsedDomain,
                            context: __assign(__assign({}, rootContext), parsedContext),
                            model: model,
                            views: views,
                            title: title,
                            target: target,
                            initialViewType: initialViewType,
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    function addNewTab(_a) {
        var title = _a.title, content = _a.content, key = _a.key;
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
            },
        ]));
        setActiveKey(key);
    }
    function openRelate(_a) {
        var relateData = _a.relateData, fields = _a.fields, values = _a.values;
        return __awaiter(this, void 0, void 0, function () {
            var model, context, domain, views, target, title, initialViewType, parsedContext, parsedDomain, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        model = relateData.res_model, context = relateData.context, domain = relateData.domain, views = relateData.views, target = relateData.target, title = relateData.string;
                        initialViewType = views[0][1];
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
                        _b = _c.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _b = [];
                        _c.label = 3;
                    case 3:
                        parsedDomain = _b;
                        openAction({
                            model: model,
                            target: target,
                            views: views,
                            context: __assign(__assign({}, rootContext), parsedContext),
                            domain: parsedDomain,
                            title: title,
                            initialViewType: initialViewType,
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    function openShortcut(shortcut) {
        return __awaiter(this, void 0, void 0, function () {
            var resource, res_id, view_id;
            return __generator(this, function (_a) {
                resource = shortcut.resource, res_id = shortcut.res_id, view_id = shortcut.view_id;
                if (view_id) {
                }
                else {
                    retrieveAndOpenAction(resource + "," + res_id);
                }
                return [2 /*return*/];
            });
        });
    }
    function openSpecificModelTab(_a) {
        var model = _a.model, values = _a.values, forcedValues = _a.forcedValues, title = _a.title, initialViewType = _a.initialViewType;
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_b) {
                key = uuid_1.v4();
                addNewTab({
                    title: title,
                    content: (react_1.default.createElement(ActionView_1.default, { tabKey: key, title: title, views: [
                            [, "form"],
                            [, "tree"],
                        ], formDefaultValues: values, formForcedValues: forcedValues, model: model, context: rootContext, domain: [], setCanWeClose: registerViewCloseFn, initialViewType: initialViewType })),
                    key: key,
                });
                return [2 /*return*/];
            });
        });
    }
    function openAction(_a) {
        var domain = _a.domain, context = _a.context, model = _a.model, views = _a.views, title = _a.title, target = _a.target, initialViewType = _a.initialViewType;
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
                                context: __assign(__assign({}, rootContext), context),
                            })];
                    case 1:
                        formView = (_b.sent());
                        contentRootProvider.current.openActionModal({
                            domain: domain,
                            model: model,
                            formView: formView,
                            context: __assign(__assign({}, rootContext), context),
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        addNewTab({
                            title: title,
                            content: (react_1.default.createElement(ActionView_1.default, { tabKey: key, title: title, views: views, model: model, context: __assign(__assign({}, rootContext), context), domain: domain, setCanWeClose: registerViewCloseFn, initialViewType: initialViewType })),
                            key: key,
                        });
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return (react_1.default.createElement(LocaleContext_1.default, { lang: lang },
        react_1.default.createElement(TabManagerContext_1.default, { openShortcut: openShortcut, openAction: openAction, openRelate: openRelate, openSpecificModelTab: openSpecificModelTab, tabs: tabs, activeKey: activeKey, onRemoveTab: remove, onChangeTab: function (key) {
                setActiveKey(key);
            } },
            react_1.default.createElement(__1.ContentRootProvider, { ref: contentRootProvider, globalValues: globalValues }, children))));
}
exports.default = react_1.forwardRef(RootView);
//# sourceMappingURL=RootView.js.map