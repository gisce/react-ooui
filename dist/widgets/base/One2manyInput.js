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
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var FormModal_1 = require("@/widgets/modals/FormModal");
var UnsavedChangesDialog_1 = __importDefault(require("@/ui/UnsavedChangesDialog"));
var RemoveItemDialog_1 = __importDefault(require("@/ui/RemoveItemDialog"));
var _2manyHelper_1 = require("@/helpers/2manyHelper");
var One2manyContext_1 = require("@/context/One2manyContext");
var icons_1 = require("@ant-design/icons");
var One2manyInput = function (props) {
    var _a = props.value, items = _a === void 0 ? [] : _a, onChange = props.onChange, ooui = props.ooui, views = props.views, formOoui = props.formOoui, treeOoui = props.treeOoui;
    var itemsToShow = items.filter(function (item) { return item.operation !== "remove" && item.values; });
    var formRef = react_1.useRef();
    var _b = react_1.useContext(One2manyContext_1.One2manyContext), currentView = _b.currentView, setCurrentView = _b.setCurrentView, itemIndex = _b.itemIndex, setItemIndex = _b.setItemIndex, manualTriggerChange = _b.manualTriggerChange, setManualTriggerChange = _b.setManualTriggerChange;
    var triggerChange = function (changedValue) {
        setManualTriggerChange(true);
        onChange === null || onChange === void 0 ? void 0 : onChange(changedValue);
    };
    var _c = ooui, readOnly = _c.readOnly, relation = _c.relation;
    var isMany2many = ooui.type === "many2many";
    var _d = react_1.useState(false), isLoading = _d[0], setIsLoading = _d[1];
    var _e = react_1.useState(), error = _e[0], setError = _e[1];
    var _f = react_1.useState(false), showFormModal = _f[0], setShowFormModal = _f[1];
    var _g = react_1.useState(), modalItem = _g[0], setModalItem = _g[1];
    var _h = react_1.useState(false), formHasChanges = _h[0], setFormHasChanges = _h[1];
    var _j = react_1.useState(false), formIsSaving = _j[0], setFormIsSaving = _j[1];
    var _k = react_1.useState([]), selectedRowKeys = _k[0], setSelectedRowKeys = _k[1];
    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!manualTriggerChange) return [3 /*break*/, 1];
                    setManualTriggerChange(false);
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, fetchOriginalItemsFromApi(views.get("tree"))];
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
    react_1.useEffect(function () {
        fetchData();
    }, [items]);
    var fetchOriginalItemsFromApi = function (treeView) { return __awaiter(void 0, void 0, void 0, function () {
        var realItems, idsToFetch, values_1, itemsWithValues, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    setFormHasChanges(false);
                    setError(undefined);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    realItems = items.filter(function (item) { return item.operation === "original" && item.id; });
                    idsToFetch = realItems.map(function (item) { return item.id; });
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            arch: treeView.arch,
                            model: relation,
                            ids: idsToFetch,
                        })];
                case 2:
                    values_1 = _a.sent();
                    itemsWithValues = items.map(function (item) {
                        var fetchedItemValues = values_1.find(function (itemValues) {
                            console.log();
                            return itemValues.id === item.id;
                        });
                        return __assign(__assign({}, item), { values: fetchedItemValues });
                    });
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
    var separator = function () {
        return react_1.default.createElement("div", { className: "inline-block w-3" });
    };
    var index = function () {
        var itemToShow = "_";
        if (itemsToShow.length === 0) {
            itemToShow = "_";
        }
        else {
            itemToShow = (itemIndex + 1).toString();
        }
        return (react_1.default.createElement("span", { className: "pl-1 pr-1" },
            "(",
            itemToShow,
            "/",
            itemsToShow.length,
            ")"));
    };
    var showRemoveConfirm = function () {
        RemoveItemDialog_1.default({
            onOk: function () {
                if (currentView === "form") {
                    onConfirmRemove();
                }
                else {
                    removeSelectedItems();
                }
            },
        });
    };
    var showFormChangesDialogIfNeeded = function (callback) {
        if (formHasChanges) {
            UnsavedChangesDialog_1.default({
                onOk: function () {
                    callback();
                    setFormHasChanges(false);
                },
            });
        }
        else {
            callback();
        }
    };
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
    var saveItem = function () {
        setFormIsSaving(true);
        formRef.current.submitForm();
    };
    var createItem = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (currentView === "form") {
                showFormChangesDialogIfNeeded(function () {
                    var newId = _2manyHelper_1.getTemporalIdNumber({
                        ids: items.map(function (item) { return item.id; }),
                    });
                    var updatedItems = _2manyHelper_1.addOrUpdateItem({
                        itemToUpdate: {
                            operation: "create",
                            id: newId,
                            values: { id: newId }, // We will have to remove this id inside values later
                        },
                        items: items,
                    });
                    triggerChange(updatedItems);
                    var updatedItemsToShow = updatedItems.filter(function (item) { return item.operation !== "remove"; });
                    setItemIndex(updatedItemsToShow.length - 1);
                });
            }
            else {
                setModalItem(undefined);
                setShowFormModal(true);
            }
            return [2 /*return*/];
        });
    }); };
    var onConfirmRemove = function () { return __awaiter(void 0, void 0, void 0, function () {
        var updatedItems;
        return __generator(this, function (_a) {
            setIsLoading(true);
            setFormHasChanges(false);
            setError(undefined);
            try {
                // If the item isn't a new one, we must add a new Item record with "remove" operation
                // in order to remove it from the API later.
                if (itemsToShow[itemIndex].operation !== "create") {
                    updatedItems = _2manyHelper_1.addOrUpdateItem({
                        itemToUpdate: {
                            operation: "remove",
                            id: itemsToShow[itemIndex].id,
                        },
                        items: items,
                    });
                    triggerChange(updatedItems);
                }
                // If the item is a newly created one, we only have to remove it from the internal list
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
    var saveButton = function () {
        if (currentView !== "form") {
            return null;
        }
        var icon = formIsSaving ? react_1.default.createElement(icons_1.LoadingOutlined, null) : react_1.default.createElement(icons_1.SaveOutlined, null);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(antd_1.Button, { icon: icon, onClick: saveItem, disabled: !formHasChanges || formIsSaving || readOnly })));
    };
    var getTitle = function () {
        return currentView === "form" ? formOoui.string : treeOoui.string;
    };
    var title = function () {
        return (react_1.default.createElement("div", { className: "h-8 flex flex-grow bg-gray-700 text-gray-200" },
            react_1.default.createElement("div", { className: "h-full flex flex-col justify-center items-center" },
                react_1.default.createElement("span", { className: "pl-2 font-bold" }, getTitle()))));
    };
    var removeSelectedItems = function () {
        var itemsToRemove = itemsToShow.filter(function (item) {
            return selectedRowKeys.includes(item.id);
        });
        setIsLoading(true);
        setFormHasChanges(false);
        setError(undefined);
        try {
            var updatedItems_1 = items;
            itemsToRemove.forEach(function (item) {
                if (item.operation !== "create") {
                    // If the item isn't a new one, we must add a new Item record with "remove" operation
                    // in order to remove it from the API later.
                    updatedItems_1 = _2manyHelper_1.addOrUpdateItem({
                        itemToUpdate: {
                            operation: "remove",
                            id: item.id,
                        },
                        items: updatedItems_1,
                    });
                } // If the item is a newly created one, we only have to remove it from the internal list
                else {
                    updatedItems_1 = updatedItems_1.filter(function (item) { return !selectedRowKeys.includes(item.id); });
                }
            });
            triggerChange(updatedItems_1);
        }
        catch (err) {
            setError(err);
        }
        setItemIndex(0);
        setIsLoading(false);
    };
    var deleteButton = function () {
        return (react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.DeleteOutlined, { onClick: showRemoveConfirm, disabled: itemsToShow.length === 0 }), disabled: readOnly }));
    };
    var itemBrowser = function () {
        if (currentView !== "form") {
            return null;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            separator(),
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.LeftOutlined, null), onClick: previousItem }),
            index(),
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.RightOutlined, null), onClick: nextItem })));
    };
    var topBar = function () {
        return (react_1.default.createElement("div", { className: "flex mb-2" },
            title(),
            react_1.default.createElement("div", { className: "h-8 flex-none pl-2" },
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FileAddOutlined, { onClick: createItem }), disabled: readOnly }),
                separator(),
                saveButton(),
                deleteButton(),
                itemBrowser(),
                separator(),
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.AlignLeftOutlined, null), onClick: toggleViewMode }))));
    };
    var updateFormEvent = function (event) {
        var id = event.id, touchedValues = event.touchedValues;
        var itemToUpdate = _2manyHelper_1.getItemToUpdate({
            id: id,
            touchedValues: touchedValues,
            items: items,
        });
        var updatedItems = _2manyHelper_1.addOrUpdateItem({
            itemToUpdate: itemToUpdate,
            items: items,
        });
        triggerChange(updatedItems);
    };
    var onFormSubmitSucceed = function (event) {
        // TODO: must we save it to the API ?
        updateFormEvent(event);
        setFormIsSaving(false);
        setFormHasChanges(false);
    };
    var onFormModalSubmitSucceed = function (event) {
        var id = event.id;
        updateFormEvent(event);
        // If we already have an id will mean the form modal is in edit mode and we're not in continuous mode
        if (id) {
            setShowFormModal(false);
        }
    };
    var onTreeRowClicked = function (itemId) {
        setModalItem(items.find(function (item) { return item.id === itemId; }));
        setShowFormModal(true);
    };
    var content = function () {
        var _a, _b;
        if (currentView === "form") {
            // If we have items to show, we return the proper value for the current item
            // Else, we set it to undefined, since it will be a new item
            var idToShow = itemsToShow.length > 0 ? (_a = itemsToShow[itemIndex]) === null || _a === void 0 ? void 0 : _a.id : undefined;
            var valuesToShow = itemsToShow.length > 0 ? (_b = itemsToShow[itemIndex]) === null || _b === void 0 ? void 0 : _b.values : undefined;
            return (react_1.default.createElement(index_1.Form, { data: { ooui: formOoui, view: views.get("form") }, values: valuesToShow, ref: formRef, model: relation, id: idToShow, onSubmitSucceed: onFormSubmitSucceed, onSubmitError: function () {
                    setFormIsSaving(false);
                }, onFieldsChange: function () {
                    setFormHasChanges(true);
                }, readOnly: readOnly, submitMode: "values" }));
        }
        return (react_1.default.createElement(index_2.Tree, { total: itemsToShow.length, limit: itemsToShow.length, treeView: views.get("tree"), results: itemsToShow.map(function (item) { return item.values; }), loading: isLoading, onRowClicked: onTreeRowClicked, showPagination: false, rowSelection: {
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
    // If we don't have any id for the modal item, it will mean that we are in create mode.
    var mustClearAfterSave = !(modalItem === null || modalItem === void 0 ? void 0 : modalItem.id);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        topBar(),
        content(),
        react_1.default.createElement(FormModal_1.FormModal, { data: { ooui: formOoui, view: views.get("form") }, model: relation, id: modalItem === null || modalItem === void 0 ? void 0 : modalItem.id, values: modalItem === null || modalItem === void 0 ? void 0 : modalItem.values, visible: showFormModal, onSubmitSucceed: onFormModalSubmitSucceed, onCancel: function () {
                setShowFormModal(false);
            }, readOnly: readOnly, submitMode: "values", mustClearAfterSave: mustClearAfterSave, showFooter: true })));
};
exports.One2manyInput = One2manyInput;
//# sourceMappingURL=One2manyInput.js.map