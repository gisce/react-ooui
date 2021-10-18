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
var ChangeViewButton_1 = __importDefault(require("./ChangeViewButton"));
var ActionViewContext_1 = require("@/context/ActionViewContext");
var NewButton_1 = __importDefault(require("./NewButton"));
var ActionButton_1 = __importDefault(require("./ActionButton"));
var icons_1 = require("@ant-design/icons");
var LocaleContext_1 = require("@/context/LocaleContext");
var ConfirmDialog_1 = __importDefault(require("@/ui/ConfirmDialog"));
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var GenericErrorDialog_1 = __importDefault(require("@/ui/GenericErrorDialog"));
var DropdownButton_1 = __importDefault(require("./DropdownButton"));
var ContentRootContext_1 = require("@/context/ContentRootContext");
function TreeActionBar(props) {
    var _a = react_1.useContext(ActionViewContext_1.ActionViewContext), availableViews = _a.availableViews, currentView = _a.currentView, setCurrentView = _a.setCurrentView, selectedRowItems = _a.selectedRowItems, setRemovingItem = _a.setRemovingItem, removingItem = _a.removingItem, duplicatingItem = _a.duplicatingItem, setDuplicatingItem = _a.setDuplicatingItem, currentModel = _a.currentModel, searchTreeRef = _a.searchTreeRef, setCurrentId = _a.setCurrentId, setCurrentItemIndex = _a.setCurrentItemIndex, toolbar = _a.toolbar;
    var _b = props.parentContext, parentContext = _b === void 0 ? {} : _b;
    var _c = react_1.useContext(LocaleContext_1.LocaleContext), t = _c.t, lang = _c.lang;
    var contentRootContext = react_1.useContext(ContentRootContext_1.ContentRootContext);
    var processAction = (contentRootContext || {}).processAction;
    function tryDelete() {
        ConfirmDialog_1.default({
            confirmMessage: t("confirmRemove"),
            lang: lang,
            onOk: function () {
                remove();
            },
        });
    }
    function remove() {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, 3, 4]);
                        setRemovingItem === null || setRemovingItem === void 0 ? void 0 : setRemovingItem(true);
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().delete({
                                model: currentModel,
                                ids: selectedRowItems.map(function (item) { return item.id; }),
                            })];
                    case 1:
                        _b.sent();
                        setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(undefined);
                        setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(undefined);
                        (_a = searchTreeRef === null || searchTreeRef === void 0 ? void 0 : searchTreeRef.current) === null || _a === void 0 ? void 0 : _a.refreshResults();
                        return [3 /*break*/, 4];
                    case 2:
                        e_1 = _b.sent();
                        GenericErrorDialog_1.default(JSON.stringify(e_1));
                        return [3 /*break*/, 4];
                    case 3:
                        setRemovingItem === null || setRemovingItem === void 0 ? void 0 : setRemovingItem(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function duplicate() {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var currentId, newId, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, 3, 4]);
                        setDuplicatingItem === null || setDuplicatingItem === void 0 ? void 0 : setDuplicatingItem(true);
                        currentId = selectedRowItems[0].id;
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().duplicate({
                                id: currentId,
                                model: currentModel,
                                context: __assign({}, parentContext),
                            })];
                    case 1:
                        newId = _b.sent();
                        if (newId) {
                            (_a = searchTreeRef === null || searchTreeRef === void 0 ? void 0 : searchTreeRef.current) === null || _a === void 0 ? void 0 : _a.refreshResults();
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        e_2 = _b.sent();
                        GenericErrorDialog_1.default(JSON.stringify(e_2));
                        return [3 /*break*/, 4];
                    case 3:
                        setDuplicatingItem === null || setDuplicatingItem === void 0 ? void 0 : setDuplicatingItem(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function runAction(actionData) {
        processAction === null || processAction === void 0 ? void 0 : processAction({
            actionData: actionData,
            values: {
                active_id: selectedRowItems === null || selectedRowItems === void 0 ? void 0 : selectedRowItems.map(function (item) { return item.id; })[0],
                active_ids: selectedRowItems === null || selectedRowItems === void 0 ? void 0 : selectedRowItems.map(function (item) { return item.id; }),
            },
            fields: {},
            context: __assign(__assign({}, parentContext), { active_id: selectedRowItems === null || selectedRowItems === void 0 ? void 0 : selectedRowItems.map(function (item) { return item.id; })[0], active_ids: selectedRowItems === null || selectedRowItems === void 0 ? void 0 : selectedRowItems.map(function (item) { return item.id; }) }),
        });
    }
    return (react_1.default.createElement(antd_1.Space, { wrap: true },
        react_1.default.createElement(NewButton_1.default, null),
        separator(),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.CopyOutlined, null), tooltip: t("duplicate"), disabled: !selectedRowItems || (selectedRowItems === null || selectedRowItems === void 0 ? void 0 : selectedRowItems.length) !== 1 || duplicatingItem, loading: duplicatingItem, onClick: duplicate }),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.DeleteOutlined, null), tooltip: t("delete"), disabled: !(selectedRowItems && (selectedRowItems === null || selectedRowItems === void 0 ? void 0 : selectedRowItems.length) > 0), loading: removingItem, onClick: tryDelete }),
        separator(),
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.ThunderboltOutlined, null), disabled: !(selectedRowItems && (selectedRowItems === null || selectedRowItems === void 0 ? void 0 : selectedRowItems.length) > 0), tooltip: t("actions"), items: toolbar === null || toolbar === void 0 ? void 0 : toolbar.action, onItemClick: function (action) {
                if (!action) {
                    return;
                }
                runAction(action);
            } }),
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.PrinterOutlined, null), disabled: !(selectedRowItems && (selectedRowItems === null || selectedRowItems === void 0 ? void 0 : selectedRowItems.length) > 0), tooltip: t("reports"), items: toolbar === null || toolbar === void 0 ? void 0 : toolbar.print, onItemClick: function (report) {
                if (!report) {
                    return;
                }
                runAction(__assign(__assign({}, report), { datas: __assign(__assign({}, (report.datas || {})), { ids: selectedRowItems.map(function (item) { return item.id; }) }) }));
            } }),
        separator(),
        react_1.default.createElement(ChangeViewButton_1.default, { currentView: currentView, availableViews: availableViews, onChangeView: setCurrentView })));
}
function separator() {
    return react_1.default.createElement("div", { className: "inline-block w-2" });
}
exports.default = TreeActionBar;
//# sourceMappingURL=TreeActionBar.js.map