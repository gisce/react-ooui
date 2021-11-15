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
var icons_1 = require("@ant-design/icons");
var ChangeViewButton_1 = __importDefault(require("./ChangeViewButton"));
var DropdownButton_1 = __importDefault(require("./DropdownButton"));
var ActionButton_1 = __importDefault(require("./ActionButton"));
var ActionViewContext_1 = require("@/context/ActionViewContext");
var NewButton_1 = __importDefault(require("./NewButton"));
var UnsavedChangesDialog_1 = __importDefault(require("@/ui/UnsavedChangesDialog"));
var ConfirmDialog_1 = __importDefault(require("@/ui/ConfirmDialog"));
var GenericErrorDialog_1 = __importDefault(require("@/ui/GenericErrorDialog"));
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var RefreshItemDialog_1 = __importDefault(require("@/ui/RefreshItemDialog"));
var logInfoHelper_1 = require("@/helpers/logInfoHelper");
var TabManagerContext_1 = require("@/context/TabManagerContext");
var ContentRootContext_1 = require("@/context/ContentRootContext");
var AttachmentsButton_1 = __importDefault(require("./AttachmentsButton"));
var LocaleContext_1 = require("@/context/LocaleContext");
function FormActionBar() {
    var _this = this;
    var _a = react_1.useContext(ActionViewContext_1.ActionViewContext), availableViews = _a.availableViews, currentView = _a.currentView, setCurrentView = _a.setCurrentView, onFormSave = _a.onFormSave, formHasChanges = _a.formHasChanges, formIsSaving = _a.formIsSaving, currentId = _a.currentId, results = _a.results, setCurrentItemIndex = _a.setCurrentItemIndex, currentItemIndex = _a.currentItemIndex, setCurrentId = _a.setCurrentId, currentModel = _a.currentModel, setRemovingItem = _a.setRemovingItem, removingItem = _a.removingItem, duplicatingItem = _a.duplicatingItem, setDuplicatingItem = _a.setDuplicatingItem, setResults = _a.setResults, formIsLoading = _a.formIsLoading, toolbar = _a.toolbar, attachments = _a.attachments, formRef = _a.formRef, setFormHasChanges = _a.setFormHasChanges, searchTreeRef = _a.searchTreeRef;
    var _b = react_1.useContext(LocaleContext_1.LocaleContext), t = _b.t, lang = _b.lang;
    var contentRootContext = react_1.useContext(ContentRootContext_1.ContentRootContext);
    var processAction = (contentRootContext || {}).processAction;
    var tabManagerContext = react_1.useContext(TabManagerContext_1.TabManagerContext);
    var _c = tabManagerContext || {}, openRelate = _c.openRelate, openDefaultActionForModel = _c.openDefaultActionForModel;
    function tryRefresh(callback) {
        if (formHasChanges) {
            RefreshItemDialog_1.default({
                lang: lang,
                onOk: function () {
                    callback();
                },
            });
            return;
        }
        callback();
    }
    function tryNavigate(callback) {
        if (formHasChanges) {
            UnsavedChangesDialog_1.default({
                lang: lang,
                onOk: function () {
                    callback();
                },
            });
            return;
        }
        callback();
    }
    function onNextClick() {
        if (results && results.length > currentItemIndex + 1) {
            setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(currentItemIndex + 1);
            setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(results[currentItemIndex + 1]);
        }
        else if (results && currentItemIndex + 1 === results.length) {
            setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(0);
            setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(results[0]);
        }
    }
    function onPreviousClick() {
        if (results && currentItemIndex > 0) {
            setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(currentItemIndex - 1);
            setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(results[currentItemIndex - 1]);
        }
        else if (results && currentItemIndex === 0) {
            setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(results.length - 1);
            setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(results[results.length - 1]);
        }
    }
    function tryDelete() {
        ConfirmDialog_1.default({
            confirmMessage: t("confirmRemoveItem"),
            lang: lang,
            onOk: function () {
                remove();
            },
        });
    }
    function remove() {
        return __awaiter(this, void 0, void 0, function () {
            var filteredResults, newIndex, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        setRemovingItem === null || setRemovingItem === void 0 ? void 0 : setRemovingItem(true);
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().delete({
                                model: currentModel,
                                ids: [currentId],
                            })];
                    case 1:
                        _a.sent();
                        filteredResults = results === null || results === void 0 ? void 0 : results.filter(function (item) {
                            return item !== currentId;
                        });
                        setResults === null || setResults === void 0 ? void 0 : setResults(filteredResults);
                        newIndex = 0;
                        if (currentItemIndex > 0 && currentItemIndex <= results.length - 1) {
                            newIndex = currentItemIndex - 1;
                        }
                        if (!(filteredResults === null || filteredResults === void 0 ? void 0 : filteredResults[newIndex])) {
                            setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(undefined);
                            setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(undefined);
                        }
                        else {
                            setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(filteredResults === null || filteredResults === void 0 ? void 0 : filteredResults[newIndex]);
                            setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(newIndex);
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        e_1 = _a.sent();
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
            var newId, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, 5, 6]);
                        setDuplicatingItem === null || setDuplicatingItem === void 0 ? void 0 : setDuplicatingItem(true);
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().duplicate({
                                id: currentId,
                                model: currentModel,
                                context: formRef.current.getContext(),
                            })];
                    case 1:
                        newId = _b.sent();
                        if (!newId) return [3 /*break*/, 3];
                        return [4 /*yield*/, ((_a = searchTreeRef === null || searchTreeRef === void 0 ? void 0 : searchTreeRef.current) === null || _a === void 0 ? void 0 : _a.refreshResults())];
                    case 2:
                        _b.sent();
                        setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(newId);
                        setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(currentItemIndex + 1);
                        _b.label = 3;
                    case 3: return [3 /*break*/, 6];
                    case 4:
                        e_2 = _b.sent();
                        GenericErrorDialog_1.default(JSON.stringify(e_2));
                        return [3 /*break*/, 6];
                    case 5:
                        setDuplicatingItem === null || setDuplicatingItem === void 0 ? void 0 : setDuplicatingItem(false);
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    var mustDisableButtons = formIsSaving || removingItem || formIsLoading || duplicatingItem;
    function runAction(actionData) {
        processAction === null || processAction === void 0 ? void 0 : processAction({
            actionData: actionData,
            values: formRef.current.getValues(),
            fields: formRef.current.getFields(),
            context: formRef.current.getContext(),
            onRefreshParentValues: function () {
                formRef.current.fetchValues();
            },
        });
    }
    if (!currentView) {
        return null;
    }
    return (react_1.default.createElement(antd_1.Space, { wrap: true },
        formIsLoading && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(antd_1.Spin, null),
            separator(),
            separator())),
        react_1.default.createElement(NewButton_1.default, { disabled: formIsSaving || formIsLoading || removingItem || duplicatingItem }),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.SaveOutlined, null), tooltip: t("save"), disabled: !formHasChanges || mustDisableButtons, loading: formIsSaving, onClick: onFormSave }),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.CopyOutlined, null), tooltip: t("duplicate"), disabled: formHasChanges ||
                formIsSaving ||
                currentId === undefined ||
                duplicatingItem ||
                formIsLoading, loading: duplicatingItem, onClick: duplicate }),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.DeleteOutlined, null), tooltip: t("delete"), disabled: formIsSaving ||
                currentId === undefined ||
                removingItem ||
                duplicatingItem ||
                formIsLoading, loading: removingItem, onClick: tryDelete }),
        separator(),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.InfoCircleOutlined, null), tooltip: t("showLogs"), disabled: formIsSaving ||
                currentId === undefined ||
                removingItem ||
                duplicatingItem ||
                formIsLoading, loading: false, onClick: function () {
                logInfoHelper_1.showLogInfo(currentModel, currentId, t);
            } }),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.ReloadOutlined, null), tooltip: t("refresh"), disabled: formIsSaving ||
                currentId === undefined ||
                removingItem ||
                duplicatingItem ||
                formIsLoading, loading: false, onClick: function () {
                tryRefresh(function () {
                    formRef.current.fetchValues();
                });
            } }),
        separator(),
        react_1.default.createElement(ChangeViewButton_1.default, { currentView: currentView, availableViews: availableViews, onChangeView: function (view) {
                setFormHasChanges === null || setFormHasChanges === void 0 ? void 0 : setFormHasChanges(false);
                setCurrentView === null || setCurrentView === void 0 ? void 0 : setCurrentView(view);
            }, disabled: mustDisableButtons, formHasChanges: formHasChanges }),
        separator(),
        react_1.default.createElement(antd_1.Space, null,
            react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.LeftOutlined, null), tooltip: t("previous"), disabled: mustDisableButtons, loading: false, onClick: function () {
                    tryNavigate(onPreviousClick);
                } }),
            react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.RightOutlined, null), tooltip: t("next"), disabled: mustDisableButtons, loading: false, onClick: function () {
                    tryNavigate(onNextClick);
                } })),
        separator(),
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.ThunderboltOutlined, null), disabled: mustDisableButtons, tooltip: t("actions"), items: toolbar === null || toolbar === void 0 ? void 0 : toolbar.action, onItemClick: function (action) {
                if (!action) {
                    return;
                }
                runAction(action);
            } }),
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.PrinterOutlined, null), disabled: mustDisableButtons, tooltip: t("reports"), items: toolbar === null || toolbar === void 0 ? void 0 : toolbar.print, onItemClick: function (report) {
                if (!report) {
                    return;
                }
                runAction(__assign(__assign({}, report), { datas: __assign(__assign({}, (report.datas || {})), { ids: [currentId] }) }));
            } }),
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.EnterOutlined, null), disabled: mustDisableButtons, tooltip: t("related"), items: toolbar === null || toolbar === void 0 ? void 0 : toolbar.relate, onItemClick: function (relate) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (!relate) {
                        return [2 /*return*/];
                    }
                    openRelate({
                        relateData: relate,
                        values: formRef.current.getValues(),
                        fields: formRef.current.getFields(),
                        action_id: relate.id,
                        action_type: relate.type,
                    });
                    return [2 /*return*/];
                });
            }); } }),
        react_1.default.createElement(AttachmentsButton_1.default, { disabled: mustDisableButtons, attachments: attachments, onAddNewAttachment: function () {
                var res_id = currentId;
                var res_model = currentModel;
                openDefaultActionForModel({
                    model: "ir.attachment",
                    values: {
                        selection_associated_object: res_model + "," + res_id,
                    },
                    forced_values: {
                        res_model: res_model,
                        res_id: res_id,
                    },
                });
            } })));
}
function separator() {
    return react_1.default.createElement("div", { className: "inline-block w-2" });
}
exports.default = FormActionBar;
//# sourceMappingURL=FormActionBar.js.map