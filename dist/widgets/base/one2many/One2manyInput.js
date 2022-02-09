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
exports.One2manyInput = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var index_1 = require("@/index");
var index_2 = require("@/index");
var ooui_1 = require("ooui");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var FormModal_1 = require("@/widgets/modals/FormModal");
var UnsavedChangesDialog_1 = __importDefault(require("@/ui/UnsavedChangesDialog"));
var RemoveItemDialog_1 = __importDefault(require("@/ui/RemoveItemDialog"));
var UnlinkItemDialog_1 = __importDefault(require("@/ui/UnlinkItemDialog"));
var One2manyContext_1 = require("@/context/One2manyContext");
var FormContext_1 = require("@/context/FormContext");
var One2manyTopBar_1 = require("@/widgets/base/one2many/One2manyTopBar");
var one2manyHelper_1 = require("@/helpers/one2manyHelper");
var SearchModal_1 = require("@/widgets/modals/SearchModal");
var use_deep_compare_effect_1 = __importDefault(require("use-deep-compare-effect"));
var LocaleContext_1 = require("@/context/LocaleContext");
var uuid_1 = require("uuid");
var One2manyInput = function (props) {
    var _a = props.value, items = _a === void 0 ? [] : _a, onChange = props.onChange, ooui = props.ooui, views = props.views;
    var _b = react_1.useContext(One2manyContext_1.One2manyContext), currentView = _b.currentView, setCurrentView = _b.setCurrentView, itemIndex = _b.itemIndex, setItemIndex = _b.setItemIndex, manualTriggerChange = _b.manualTriggerChange, setManualTriggerChange = _b.setManualTriggerChange;
    var formContext = react_1.useContext(FormContext_1.FormContext);
    var _c = formContext || {}, activeId = _c.activeId, activeModel = _c.activeModel, getValues = _c.getValues, getContext = _c.getContext, domain = _c.domain, addOne2ManyChild = _c.addOne2ManyChild, removeOne2ManyChild = _c.removeOne2ManyChild;
    var _d = react_1.useContext(LocaleContext_1.LocaleContext), lang = _d.lang, t = _d.t;
    var formRef = react_1.useRef();
    var _e = react_1.useState(false), formHasChanges = _e[0], setFormHasChanges = _e[1];
    var _f = react_1.useState(false), isLoading = _f[0], setIsLoading = _f[1];
    var _g = react_1.useState(), error = _g[0], setError = _g[1];
    var _h = react_1.useState(false), showFormModal = _h[0], setShowFormModal = _h[1];
    var _j = react_1.useState(false), showSearchModal = _j[0], setShowSearchModal = _j[1];
    var _k = react_1.useState(), modalItem = _k[0], setModalItem = _k[1];
    var _l = react_1.useState(false), formIsSaving = _l[0], setFormIsSaving = _l[1];
    var _m = react_1.useState([]), selectedRowKeys = _m[0], setSelectedRowKeys = _m[1];
    var _o = react_1.useState(false), continuousEntryMode = _o[0], setContinuousEntryMode = _o[1];
    var transformedDomain = react_1.useRef([]);
    var one2ManyUuid = react_1.useRef(uuid_1.v4());
    var _p = ooui, readOnly = _p.readOnly, relation = _p.relation, context = _p.context, widgetDomain = _p.domain;
    var isMany2many = ooui.type === "many2many";
    var fieldName = ooui.id;
    var itemsToShow = items.filter(function (item) { return item.values; });
    use_deep_compare_effect_1.default(function () {
        fetchData();
    }, [items]);
    react_1.useEffect(function () {
        parseDomain();
    }, [domain]);
    var triggerChange = function (changedValue) {
        setManualTriggerChange(true);
        onChange === null || onChange === void 0 ? void 0 : onChange(changedValue);
    };
    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!manualTriggerChange) return [3 /*break*/, 1];
                    setManualTriggerChange(false);
                    return [3 /*break*/, 3];
                case 1:
                    if (!(items.length > 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetchOriginalItemsFromApi()];
                case 2:
                    _a.sent();
                    if (itemIndex > itemsToShow.length - 1 && itemIndex !== 0) {
                        setItemIndex(0);
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var fetchOriginalItemsFromApi = function () { return __awaiter(void 0, void 0, void 0, function () {
        var itemsWithValues, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    setFormHasChanges(false);
                    removeOne2ManyChild === null || removeOne2ManyChild === void 0 ? void 0 : removeOne2ManyChild(one2ManyUuid.current);
                    setError(undefined);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, one2manyHelper_1.readObjectValues({
                            treeFields: views.get("tree").fields,
                            formFields: views.get("form").fields,
                            model: relation,
                            items: items,
                            context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                        })];
                case 2:
                    itemsWithValues = _a.sent();
                    triggerChange(itemsWithValues);
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    setError(err_1);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    function parseDomain() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!widgetDomain) return [3 /*break*/, 2];
                        _a = transformedDomain;
                        _b = ooui_1.transformDomainForChildWidget;
                        _c = {};
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().evalDomain({
                                domain: widgetDomain,
                                values: getValues(),
                                context: getContext(),
                            })];
                    case 1:
                        _a.current = _b.apply(void 0, [(_c.domain = _d.sent(),
                                _c.widgetFieldName = fieldName,
                                _c)]);
                        _d.label = 2;
                    case 2:
                        if (domain && domain.length > 0) {
                            transformedDomain.current = transformedDomain.current.concat(ooui_1.transformDomainForChildWidget({
                                domain: domain,
                                widgetFieldName: fieldName,
                            }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    var toggleViewMode = function () {
        if (currentView === "form" && views.get("tree")) {
            showFormChangesDialogIfNeeded(function () {
                setCurrentView("tree");
            });
        }
        else if (currentView === "tree" && views.get("form")) {
            setCurrentView("form");
        }
    };
    var previousItem = function () {
        if (itemIndex > 0) {
            if (currentView === "form") {
                showFormChangesDialogIfNeeded(function () {
                    setItemIndex(itemIndex - 1);
                });
            }
            else {
                setItemIndex(itemIndex - 1);
            }
        }
    };
    var nextItem = function () {
        var totalItems = itemsToShow.length;
        if (itemIndex < totalItems - 1) {
            if (currentView === "form") {
                showFormChangesDialogIfNeeded(function () {
                    setItemIndex(itemIndex + 1);
                });
            }
            else {
                setItemIndex(itemIndex + 1);
            }
        }
    };
    var showFormChangesDialogIfNeeded = function (callback) {
        if (formHasChanges) {
            UnsavedChangesDialog_1.default({
                lang: lang,
                onOk: function () {
                    callback();
                    setFormHasChanges(false);
                    removeOne2ManyChild === null || removeOne2ManyChild === void 0 ? void 0 : removeOne2ManyChild(one2ManyUuid.current);
                },
            });
        }
        else {
            callback();
        }
    };
    var showRemoveConfirm = function () {
        if (isMany2many) {
            UnlinkItemDialog_1.default({
                lang: lang,
                onOk: function () {
                    if (currentView === "form") {
                        removeCurrentItem();
                    }
                    else {
                        removeSelectedItems();
                    }
                },
            });
            return;
        }
        RemoveItemDialog_1.default({
            lang: lang,
            onOk: function () {
                if (currentView === "form") {
                    removeCurrentItem();
                }
                else {
                    removeSelectedItems();
                }
            },
        });
    };
    var saveItem = function () {
        setFormIsSaving(true);
        formRef.current.submitForm();
    };
    var createItem = function () { return __awaiter(void 0, void 0, void 0, function () {
        var inv_field, defaultValues;
        var _a;
        return __generator(this, function (_b) {
            inv_field = ooui.inv_field;
            if (inv_field) {
                defaultValues = (_a = {}, _a[inv_field] = activeId, _a);
            }
            if (currentView === "form") {
                showFormChangesDialogIfNeeded(function () {
                    setContinuousEntryMode(true);
                    setModalItem({ defaultValues: defaultValues });
                    setShowFormModal(true);
                });
            }
            else {
                setContinuousEntryMode(true);
                setModalItem({ defaultValues: defaultValues });
                setShowFormModal(true);
            }
            return [2 /*return*/];
        });
    }); };
    var searchItem = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (currentView === "form") {
                showFormChangesDialogIfNeeded(function () {
                    setShowSearchModal(true);
                });
            }
            else {
                setShowSearchModal(true);
            }
            return [2 /*return*/];
        });
    }); };
    var removeCurrentItem = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    setFormHasChanges(false);
                    removeOne2ManyChild === null || removeOne2ManyChild === void 0 ? void 0 : removeOne2ManyChild(one2ManyUuid.current);
                    setError(undefined);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    if (!activeId) return [3 /*break*/, 3];
                    return [4 /*yield*/, one2manyHelper_1.removeItems({
                            activeId: activeId,
                            model: activeModel,
                            idsToRemove: [itemsToShow[itemIndex].id],
                            fields: views.get("form").fields,
                            fieldName: fieldName,
                            isMany2many: isMany2many,
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    // We remove the item from the internal list
                    triggerChange(items.filter(function (item) { return item.id !== itemsToShow[itemIndex].id; }));
                    return [3 /*break*/, 5];
                case 4:
                    err_2 = _a.sent();
                    setError(err_2);
                    return [3 /*break*/, 5];
                case 5:
                    setItemIndex(0);
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var removeSelectedItems = function () { return __awaiter(void 0, void 0, void 0, function () {
        var itemsToRemove, idsToRemove, updatedItems, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    itemsToRemove = itemsToShow.filter(function (item) {
                        return selectedRowKeys.includes(item.id);
                    });
                    setIsLoading(true);
                    setFormHasChanges(false);
                    removeOne2ManyChild === null || removeOne2ManyChild === void 0 ? void 0 : removeOne2ManyChild(one2ManyUuid.current);
                    setError(undefined);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    if (!activeId) return [3 /*break*/, 3];
                    idsToRemove = itemsToRemove.map(function (item) { return item.id; });
                    return [4 /*yield*/, one2manyHelper_1.removeItems({
                            activeId: activeId,
                            model: activeModel,
                            idsToRemove: idsToRemove,
                            fields: views.get("form").fields,
                            fieldName: fieldName,
                            isMany2many: isMany2many,
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    updatedItems = items.filter(function (item) { return !selectedRowKeys.includes(item.id); });
                    triggerChange(updatedItems);
                    return [3 /*break*/, 5];
                case 4:
                    err_3 = _a.sent();
                    setError(err_3);
                    return [3 /*break*/, 5];
                case 5:
                    setItemIndex(0);
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var formPostSaveAction = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var updatedFormObject, updatedTreeObject, updatedItems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                        arch: views.get("form").arch,
                        model: relation,
                        ids: [id],
                        fields: views.get("form").fields,
                        context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                    })];
                case 1:
                    updatedFormObject = (_a.sent())[0];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            arch: views.get("tree").arch,
                            model: relation,
                            ids: [id],
                            fields: views.get("tree").fields,
                            context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                        })];
                case 2:
                    updatedTreeObject = (_a.sent())[0];
                    updatedItems = items.map(function (item) {
                        if (item.id === id) {
                            return __assign(__assign({}, item), { values: updatedFormObject, treeValues: updatedTreeObject });
                        }
                        return item;
                    });
                    triggerChange(updatedItems);
                    return [2 /*return*/];
            }
        });
    }); };
    var formModalPostSaveAction = function (ids) { return __awaiter(void 0, void 0, void 0, function () {
        var newItems, modifiedItems, updatedItems, _i, newItems_1, newItem, updatedFormObject, updatedTreeObject, _loop_1, _a, modifiedItems_1, modifiedItem;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    newItems = ids.filter(function (id) {
                        return items.find(function (item) { return item.id === id; }) === undefined;
                    });
                    modifiedItems = ids.filter(function (id) {
                        return items.find(function (item) { return item.id === id; }) !== undefined;
                    });
                    updatedItems = items;
                    _i = 0, newItems_1 = newItems;
                    _b.label = 1;
                case 1:
                    if (!(_i < newItems_1.length)) return [3 /*break*/, 7];
                    newItem = newItems_1[_i];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            arch: views.get("form").arch,
                            model: relation,
                            ids: [newItem],
                            fields: views.get("form").fields,
                            context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                        })];
                case 2:
                    updatedFormObject = (_b.sent())[0];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            arch: views.get("tree").arch,
                            model: relation,
                            ids: [newItem],
                            fields: views.get("tree").fields,
                            context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                        })];
                case 3:
                    updatedTreeObject = (_b.sent())[0];
                    if (!activeId) return [3 /*break*/, 5];
                    // We call the API for reading the updated object
                    return [4 /*yield*/, one2manyHelper_1.linkItem({
                            model: activeModel,
                            activeId: activeId,
                            id: newItem,
                            fields: views.get("form").fields,
                            fieldName: fieldName,
                        })];
                case 4:
                    // We call the API for reading the updated object
                    _b.sent();
                    // It's a new item and we already have linked it with its parent, so we just only have to add it
                    // to our internal list as an original (server and client are synced)
                    updatedItems.push({
                        id: newItem,
                        operation: "original",
                        values: updatedFormObject,
                        treeValues: updatedTreeObject,
                    });
                    return [3 /*break*/, 6];
                case 5:
                    // Since we don't have a activeId to link with, we add the item as pendingLink
                    // The effective link will take place when the parent form is saved
                    updatedItems.push({
                        id: newItem,
                        operation: "pendingLink",
                        values: updatedFormObject,
                        treeValues: updatedTreeObject,
                    });
                    _b.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 1];
                case 7:
                    _loop_1 = function (modifiedItem) {
                        var updatedFormObject, updatedTreeObject;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                                        arch: views.get("form").arch,
                                        model: relation,
                                        ids: [modifiedItem],
                                        fields: views.get("form").fields,
                                        context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                                    })];
                                case 1:
                                    updatedFormObject = (_c.sent())[0];
                                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                                            arch: views.get("tree").arch,
                                            model: relation,
                                            ids: [modifiedItem],
                                            fields: views.get("tree").fields,
                                            context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                                        })];
                                case 2:
                                    updatedTreeObject = (_c.sent())[0];
                                    updatedItems = updatedItems.map(function (item) {
                                        if (item.id === modifiedItem) {
                                            return {
                                                id: modifiedItem,
                                                operation: activeId ? "original" : "pendingLink",
                                                values: updatedFormObject,
                                                treeValues: updatedTreeObject,
                                            };
                                        }
                                        return item;
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _a = 0, modifiedItems_1 = modifiedItems;
                    _b.label = 8;
                case 8:
                    if (!(_a < modifiedItems_1.length)) return [3 /*break*/, 11];
                    modifiedItem = modifiedItems_1[_a];
                    return [5 /*yield**/, _loop_1(modifiedItem)];
                case 9:
                    _b.sent();
                    _b.label = 10;
                case 10:
                    _a++;
                    return [3 /*break*/, 8];
                case 11:
                    triggerChange(updatedItems);
                    return [2 /*return*/];
            }
        });
    }); };
    var setItemSaved = function (_a) {
        var id = _a.id, saved = _a.saved;
        return __awaiter(void 0, void 0, void 0, function () {
            var updatedItems;
            return __generator(this, function (_b) {
                if (!id) {
                    return [2 /*return*/];
                }
                updatedItems = items.map(function (item) {
                    if (item.id === id) {
                        return __assign(__assign({}, item), { operation: (saved ? "original" : "pendingUpdate") });
                    }
                    return item;
                });
                if (saved) {
                    onChange === null || onChange === void 0 ? void 0 : onChange(updatedItems);
                }
                else {
                    triggerChange(updatedItems);
                }
                return [2 /*return*/];
            });
        });
    };
    // This is the callback called when we save the One2manyTopBar in form mode
    var onFormSubmitSucceed = function () {
        var _a;
        setFormIsSaving(false);
        setFormHasChanges(false);
        removeOne2ManyChild === null || removeOne2ManyChild === void 0 ? void 0 : removeOne2ManyChild(one2ManyUuid.current);
        setItemSaved({ id: (_a = itemsToShow[itemIndex]) === null || _a === void 0 ? void 0 : _a.id, saved: true });
    };
    // This is the callback called when a modal is done saving the object
    var onFormModalSubmitSucceed = function () {
        if (!continuousEntryMode) {
            setShowFormModal(false);
        }
    };
    var onTreeRowClicked = function (itemId) {
        // We show the detail for the clicked item in a Form modal
        setModalItem(items.find(function (item) { return item.id === itemId; }));
        setContinuousEntryMode(false);
        setShowFormModal(true);
    };
    var onSearchModalSelectValue = function (ids) { return __awaiter(void 0, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, formModalPostSaveAction(ids)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    e_1 = _a.sent();
                    setError(e_1);
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // TODO: improve this. Do we really have to parse the entire object just to get the title?
    function getTitle() {
        var ViewType = currentView === "form" ? ooui_1.Form : ooui_1.Tree;
        var ooui = new ViewType(views.get(currentView).fields);
        ooui.parse(views.get(currentView).arch);
        return ooui.string;
    }
    var content = function () {
        var _a, _b;
        if (currentView === "form") {
            if (itemsToShow.length === 0) {
                return t("noCurrentEntries");
            }
            return (react_1.default.createElement(index_1.Form, { formView: views.get("form"), values: (_a = itemsToShow[itemIndex]) === null || _a === void 0 ? void 0 : _a.values, parentContext: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context), ref: formRef, model: relation, id: (_b = itemsToShow[itemIndex]) === null || _b === void 0 ? void 0 : _b.id, onSubmitSucceed: onFormSubmitSucceed, onSubmitError: function () {
                    setFormIsSaving(false);
                }, onFieldsChange: function () {
                    var _a;
                    setItemSaved({ id: (_a = itemsToShow[itemIndex]) === null || _a === void 0 ? void 0 : _a.id, saved: false });
                    setFormHasChanges(true);
                    addOne2ManyChild === null || addOne2ManyChild === void 0 ? void 0 : addOne2ManyChild(one2ManyUuid.current, formRef.current);
                }, readOnly: readOnly, postSaveAction: formPostSaveAction }));
        }
        return (react_1.default.createElement(index_2.Tree, { total: itemsToShow.length, limit: itemsToShow.length, treeView: views.get("tree"), results: itemsToShow.map(function (item) { return item.treeValues; }), loading: isLoading, onRowClicked: onTreeRowClicked, showPagination: false, rowSelection: {
                selectedRowKeys: selectedRowKeys,
                onChange: setSelectedRowKeys,
            } }));
    };
    if (error) {
        return react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: error, type: "error", banner: true });
    }
    // If we are in create mode we have to show the modal in continuous mode.
    // This means the modal won't close after clicking OK, the modal will add the new item
    // and will reset to defaults to let the user add a new item.
    var mustClearAfterSave = continuousEntryMode;
    if (isLoading) {
        return react_1.default.createElement(antd_1.Spin, null);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(One2manyTopBar_1.One2manyTopBar, { mode: currentView, title: getTitle(), readOnly: readOnly, isMany2Many: isMany2many, formHasChanges: formHasChanges, formIsSaving: formIsSaving, totalItems: itemsToShow.length, currentItemIndex: itemIndex, onSaveItem: saveItem, onDelete: showRemoveConfirm, onCreateItem: createItem, onToggleViewMode: toggleViewMode, onPreviousItem: previousItem, onNextItem: nextItem, onSearchItem: searchItem }),
        content(),
        react_1.default.createElement(FormModal_1.FormModal, { formView: views.get("form"), model: relation, id: modalItem === null || modalItem === void 0 ? void 0 : modalItem.id, values: modalItem === null || modalItem === void 0 ? void 0 : modalItem.values, defaultValues: modalItem === null || modalItem === void 0 ? void 0 : modalItem.defaultValues, visible: showFormModal, onSubmitSucceed: onFormModalSubmitSucceed, parentContext: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context), onCancel: function () {
                setContinuousEntryMode(false);
                setShowFormModal(false);
            }, readOnly: readOnly, mustClearAfterSave: mustClearAfterSave, postSaveAction: formModalPostSaveAction }),
        react_1.default.createElement(SearchModal_1.SearchModal, { domain: transformedDomain.current, model: relation, context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context), visible: showSearchModal, onSelectValues: function (ids) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    setShowSearchModal(false);
                    onSearchModalSelectValue(ids);
                    return [2 /*return*/];
                });
            }); }, onCloseModal: function () {
                setShowSearchModal(false);
            } })));
};
exports.One2manyInput = One2manyInput;
//# sourceMappingURL=One2manyInput.js.map