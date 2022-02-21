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
var ooui_1 = require("@gisce/ooui");
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
function filterDuplicateItems(items) {
    var ids = items.map(function (o) { return o.id; });
    var filtered = items.filter(function (item, index) {
        var id = item.id;
        return !ids.includes(id, index + 1);
    });
    return filtered;
}
var One2manyInput = function (props) {
    var value = props.value, onChange = props.onChange, ooui = props.ooui, views = props.views;
    var _a = (value || {}).items, items = _a === void 0 ? [] : _a;
    var _b = react_1.useContext(One2manyContext_1.One2manyContext), currentView = _b.currentView, setCurrentView = _b.setCurrentView, itemIndex = _b.itemIndex, setItemIndex = _b.setItemIndex, manualTriggerChange = _b.manualTriggerChange, setManualTriggerChange = _b.setManualTriggerChange;
    var formContext = react_1.useContext(FormContext_1.FormContext);
    var _c = formContext || {}, activeId = _c.activeId, getValues = _c.getValues, getContext = _c.getContext, domain = _c.domain;
    var _d = react_1.useContext(LocaleContext_1.LocaleContext), lang = _d.lang, t = _d.t;
    var formRef = react_1.useRef();
    var _e = react_1.useState(false), formHasChanges = _e[0], setFormHasChanges = _e[1];
    var _f = react_1.useState(false), isLoading = _f[0], setIsLoading = _f[1];
    var _g = react_1.useState(), error = _g[0], setError = _g[1];
    var _h = react_1.useState(false), showFormModal = _h[0], setShowFormModal = _h[1];
    var _j = react_1.useState(false), showSearchModal = _j[0], setShowSearchModal = _j[1];
    var _k = react_1.useState(), modalItem = _k[0], setModalItem = _k[1];
    var _l = react_1.useState([]), selectedRowKeys = _l[0], setSelectedRowKeys = _l[1];
    var _m = react_1.useState(false), continuousEntryMode = _m[0], setContinuousEntryMode = _m[1];
    var transformedDomain = react_1.useRef([]);
    var _o = ooui, readOnly = _o.readOnly, relation = _o.relation, context = _o.context, widgetDomain = _o.domain;
    var isMany2many = ooui.type === "many2many";
    var fieldName = ooui.id;
    var itemsToShow = items.filter(function (item) { return item.values && item.operation !== "pendingRemove"; });
    use_deep_compare_effect_1.default(function () {
        fetchData();
    }, [items]);
    react_1.useEffect(function () {
        parseDomain();
    }, [domain]);
    var triggerChange = function (changedValue) {
        setManualTriggerChange(true);
        onChange === null || onChange === void 0 ? void 0 : onChange({
            fields: views.get("form").fields,
            items: filterDuplicateItems(changedValue),
        });
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
    var reloadOriginalValuesForFormItem = function () { return __awaiter(void 0, void 0, void 0, function () {
        var currentId, updatedFormObject, updatedTreeObject, updatedItems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentId = itemsToShow[itemIndex].id;
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            arch: views.get("form").arch,
                            model: relation,
                            ids: [currentId],
                            fields: views.get("form").fields,
                            context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                        })];
                case 1:
                    updatedFormObject = (_a.sent())[0];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            arch: views.get("tree").arch,
                            model: relation,
                            ids: [currentId],
                            fields: views.get("tree").fields,
                            context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                        })];
                case 2:
                    updatedTreeObject = (_a.sent())[0];
                    updatedItems = items.map(function (item) {
                        if (item.id === currentId) {
                            return __assign(__assign({}, item), { operation: "original", values: updatedFormObject, treeValues: updatedTreeObject });
                        }
                        return item;
                    });
                    triggerChange(updatedItems);
                    return [2 /*return*/];
            }
        });
    }); };
    var showFormChangesDialogIfNeeded = function (callback) {
        if (formHasChanges) {
            UnsavedChangesDialog_1.default({
                lang: lang,
                onOk: function () {
                    reloadOriginalValuesForFormItem();
                    callback();
                    setFormHasChanges(false);
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
    var createItem = function () { return __awaiter(void 0, void 0, void 0, function () {
        var inv_field, defaultValues;
        var _a;
        return __generator(this, function (_b) {
            inv_field = ooui.inv_field;
            if (inv_field && activeId) {
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
        var updatedItems;
        return __generator(this, function (_a) {
            setIsLoading(true);
            setFormHasChanges(false);
            setError(undefined);
            try {
                if (itemsToShow[itemIndex].id > 0) {
                    updatedItems = items.map(function (item) {
                        if (item.id === itemsToShow[itemIndex].id) {
                            return __assign(__assign({}, item), { operation: "pendingRemove" });
                        }
                        else {
                            return item;
                        }
                    });
                    triggerChange(updatedItems);
                }
                else {
                    triggerChange(items.filter(function (item) { return item.id !== itemsToShow[itemIndex].id; }));
                }
            }
            catch (err) {
                setError(err);
            }
            setItemIndex(0);
            setIsLoading(false);
            return [2 /*return*/];
        });
    }); };
    var removeSelectedItems = function () { return __awaiter(void 0, void 0, void 0, function () {
        var itemsToRemove, idsToRemove_1, updatedItems;
        return __generator(this, function (_a) {
            itemsToRemove = itemsToShow.filter(function (item) {
                return selectedRowKeys.includes(item.id);
            });
            setIsLoading(true);
            setFormHasChanges(false);
            setError(undefined);
            try {
                idsToRemove_1 = itemsToRemove.map(function (item) { return item.id; });
                updatedItems = items
                    .filter(function (item) {
                    if (idsToRemove_1.includes(item.id) && item.id < 0) {
                        return false;
                    }
                    return true;
                })
                    .map(function (item) {
                    if (idsToRemove_1.includes(item.id)) {
                        return __assign(__assign({}, item), { operation: "pendingRemove" });
                    }
                    else {
                        return item;
                    }
                });
                triggerChange(updatedItems);
            }
            catch (err) {
                setError(err);
            }
            setItemIndex(0);
            setIsLoading(false);
            return [2 /*return*/];
        });
    }); };
    // This is the callback called when a modal is done creating/updating the object
    var onFormModalSubmitSucceed = function (id, _, values) {
        var updatedItems;
        if (id) {
            updatedItems = items.map(function (item) {
                if (item.id === id) {
                    return {
                        id: id,
                        operation: id > 0 ? "pendingUpdate" : "pendingCreate",
                        values: __assign(__assign({}, values), { id: id }),
                        treeValues: __assign(__assign({}, values), { id: id }),
                    };
                }
                return item;
            });
        }
        else {
            var nextId = one2manyHelper_1.getNextPendingId(items);
            updatedItems = items.concat({
                id: nextId,
                operation: "pendingCreate",
                values: __assign(__assign({}, values), { id: nextId }),
                treeValues: __assign(__assign({}, values), { id: nextId }),
            });
        }
        triggerChange(updatedItems);
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
        var updatedItems, filteredIds, _i, filteredIds_1, id, updatedFormObject, updatedTreeObject, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    updatedItems = items;
                    filteredIds = ids.filter(function (id) {
                        return !items.find(function (item) { return item.id === id; });
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, 8, 9]);
                    _i = 0, filteredIds_1 = filteredIds;
                    _a.label = 2;
                case 2:
                    if (!(_i < filteredIds_1.length)) return [3 /*break*/, 6];
                    id = filteredIds_1[_i];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            arch: views.get("form").arch,
                            model: relation,
                            ids: [id],
                            fields: views.get("form").fields,
                            context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                        })];
                case 3:
                    updatedFormObject = (_a.sent())[0];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            arch: views.get("tree").arch,
                            model: relation,
                            ids: [id],
                            fields: views.get("tree").fields,
                            context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                        })];
                case 4:
                    updatedTreeObject = (_a.sent())[0];
                    updatedItems.push({
                        id: id,
                        operation: "pendingLink",
                        values: updatedFormObject,
                        treeValues: updatedTreeObject,
                    });
                    _a.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 2];
                case 6:
                    onChange === null || onChange === void 0 ? void 0 : onChange({
                        fields: views.get("form").fields,
                        items: updatedItems,
                    });
                    return [3 /*break*/, 9];
                case 7:
                    e_1 = _a.sent();
                    setError(e_1);
                    return [3 /*break*/, 9];
                case 8:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
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
            return (react_1.default.createElement(index_1.Form, { formView: views.get("form"), values: (_a = itemsToShow[itemIndex]) === null || _a === void 0 ? void 0 : _a.values, parentContext: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context), ref: formRef, model: relation, id: (_b = itemsToShow[itemIndex]) === null || _b === void 0 ? void 0 : _b.id, submitMode: "values", onFieldsChange: function (values) {
                    var _a;
                    var currentItemId = (_a = itemsToShow[itemIndex]) === null || _a === void 0 ? void 0 : _a.id;
                    var updatedItems = items.map(function (item) {
                        if (item.id === currentItemId) {
                            return __assign(__assign({}, item), { operation: item.operation === "original"
                                    ? "pendingUpdate"
                                    : item.operation, values: __assign(__assign({}, values), { id: currentItemId }), treeValues: __assign(__assign({}, values), { id: currentItemId }) });
                        }
                        return item;
                    });
                    triggerChange(updatedItems);
                    setFormHasChanges(true);
                }, readOnly: readOnly }));
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
        react_1.default.createElement(One2manyTopBar_1.One2manyTopBar, { mode: currentView, title: getTitle(), readOnly: readOnly, isMany2Many: isMany2many, formHasChanges: formHasChanges, totalItems: itemsToShow.length, currentItemIndex: itemIndex, onDelete: showRemoveConfirm, onCreateItem: createItem, onToggleViewMode: toggleViewMode, onPreviousItem: previousItem, onNextItem: nextItem, onSearchItem: searchItem, selectedRowKeys: selectedRowKeys }),
        content(),
        react_1.default.createElement(FormModal_1.FormModal, { formView: views.get("form"), model: relation, id: modalItem === null || modalItem === void 0 ? void 0 : modalItem.id, submitMode: "values", values: modalItem === null || modalItem === void 0 ? void 0 : modalItem.values, defaultValues: modalItem === null || modalItem === void 0 ? void 0 : modalItem.defaultValues, visible: showFormModal, onSubmitSucceed: onFormModalSubmitSucceed, parentContext: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context), onCancel: function () {
                setContinuousEntryMode(false);
                setShowFormModal(false);
            }, readOnly: readOnly, mustClearAfterSave: mustClearAfterSave }),
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