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
exports.One2many = void 0;
var react_1 = __importStar(require("react"));
var Field_1 = __importDefault(require("@/common/Field"));
var antd_1 = require("antd");
var index_1 = require("@/index");
var index_2 = require("@/index");
var ooui_1 = require("ooui");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var FormModal_1 = require("@/widgets/modals/FormModal");
var UnsavedChangesDialog_1 = __importDefault(require("@/ui/UnsavedChangesDialog"));
var icons_1 = require("@ant-design/icons");
var confirm = antd_1.Modal.confirm;
var One2many = function (props) {
    var ooui = props.ooui;
    return (react_1.default.createElement(Field_1.default, __assign({}, props),
        react_1.default.createElement(One2manyInput, { ooui: ooui })));
};
exports.One2many = One2many;
var One2manyInput = function (props) {
    var _a = props.value, value = _a === void 0 ? [] : _a, onChange = props.onChange, ooui = props.ooui;
    var formRef = react_1.useRef();
    var triggerChange = function (changedValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(changedValue);
    };
    var _b = ooui, readOnly = _b.readOnly, relation = _b.relation, oouiViews = _b.views, mode = _b.mode;
    var _c = react_1.useState(new Map()), views = _c[0], setViews = _c[1];
    var _d = react_1.useState("tree"), currentView = _d[0], setCurrentView = _d[1];
    var _e = react_1.useState(0), itemIndex = _e[0], setItemIndex = _e[1];
    var _f = react_1.useState(true), isLoading = _f[0], setIsLoading = _f[1];
    var _g = react_1.useState(), error = _g[0], setError = _g[1];
    var _h = react_1.useState(false), showFormModal = _h[0], setShowFormModal = _h[1];
    var _j = react_1.useState(), modalItemId = _j[0], setModalItemId = _j[1];
    var _k = react_1.useState(false), formHasChanges = _k[0], setFormHasChanges = _k[1];
    var _l = react_1.useState(false), formIsSaving = _l[0], setFormIsSaving = _l[1];
    var showRemoveConfirm = function () {
        confirm({
            title: "Remove item",
            icon: react_1.default.createElement(icons_1.ExclamationCircleOutlined, null),
            centered: true,
            content: "Are you sure you want to remove this item?",
            okText: "Yes, remove it",
            onOk: function () {
                onConfirmRemove();
            },
        });
    };
    var getViewData = function (type) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (oouiViews && oouiViews[type]) {
                        return [2 /*return*/, oouiViews[type]];
                    }
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView(relation, type)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formView, treeView, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    setError(undefined);
                    setFormHasChanges(false);
                    setFormIsSaving(false);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    if (mode && mode.length > 0) {
                        setCurrentView(mode[0]);
                    }
                    return [4 /*yield*/, getViewData("form")];
                case 2:
                    formView = _a.sent();
                    return [4 /*yield*/, getViewData("tree")];
                case 3:
                    treeView = _a.sent();
                    views.set("form", formView);
                    views.set("tree", treeView);
                    setViews(views);
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    setError(err_1);
                    return [3 /*break*/, 5];
                case 5:
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchData();
    }, [ooui]);
    var separator = function () {
        return react_1.default.createElement("div", { className: "inline-block w-3" });
    };
    var index = function () {
        var itemToShow = "_";
        if (value.length === 0) {
            itemToShow = "_";
        }
        else {
            itemToShow = (itemIndex + 1).toString();
        }
        return (react_1.default.createElement("span", { className: "pl-1 pr-1" },
            "(",
            itemToShow,
            "/",
            value.length,
            ")"));
    };
    var showFormChangesDialogIfNeeded = function (callback) {
        if (formHasChanges) {
            UnsavedChangesDialog_1.default({
                onOk: function () {
                    if (value[itemIndex] === undefined) {
                        // We remove the new blank items
                        triggerChange(value.filter(function (item) { return item !== undefined; }));
                    }
                    callback();
                    setFormHasChanges(false);
                },
            });
        }
        else {
            // We remove the new blank items
            triggerChange(value.filter(function (item) { return item !== undefined; }));
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
    var getTitle = function () {
        var type = currentView === "form" ? ooui_1.Form : ooui_1.Tree;
        var ooui = new type(views.get(currentView).fields);
        ooui.parse(views.get(currentView).arch);
        return ooui.string;
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
        var totalItems = value.length;
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
                if (!value[itemIndex]) {
                    // If we already have a new blank item, que ignore the action.
                    return [2 /*return*/];
                }
                showFormChangesDialogIfNeeded(function () {
                    triggerChange(value.concat(undefined));
                    setItemIndex(value.length);
                });
            }
            else {
                setModalItemId(undefined);
                setShowFormModal(true);
            }
            return [2 /*return*/];
        });
    }); };
    var onConfirmRemove = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    setFormHasChanges(false);
                    setError(undefined);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    if (!value[itemIndex]) return [3 /*break*/, 3];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().delete({
                            model: relation,
                            ids: [value[itemIndex]],
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    err_2 = _a.sent();
                    setError(err_2);
                    return [3 /*break*/, 5];
                case 5:
                    setItemIndex(0);
                    triggerChange(value.filter(function (id) { return id !== value[itemIndex]; }));
                    setIsLoading(false);
                    fetchData();
                    return [2 /*return*/];
            }
        });
    }); };
    var saveButton = function () {
        var icon = formIsSaving ? react_1.default.createElement(icons_1.LoadingOutlined, null) : react_1.default.createElement(icons_1.SaveOutlined, null);
        return (react_1.default.createElement(antd_1.Button, { icon: icon, onClick: saveItem, disabled: !formHasChanges || formIsSaving }));
    };
    var topBar = function () {
        return (react_1.default.createElement("div", { className: "flex mb-2" },
            react_1.default.createElement("div", { className: "h-8 flex flex-grow bg-gray-700 text-gray-200" },
                react_1.default.createElement("div", { className: "h-full flex flex-col justify-center items-center" },
                    react_1.default.createElement("span", { className: "pl-2 font-bold" }, getTitle()))),
            react_1.default.createElement("div", { className: "h-8 flex-none pl-2" },
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FileAddOutlined, { onClick: createItem }) }),
                separator(),
                currentView === "form" && saveButton(),
                currentView === "form" && (react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.DeleteOutlined, { onClick: showRemoveConfirm }) })),
                currentView === "form" && (react_1.default.createElement(react_1.default.Fragment, null,
                    separator(),
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.LeftOutlined, null), onClick: previousItem }),
                    index(),
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.RightOutlined, null), onClick: nextItem }),
                    separator())),
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.AlignLeftOutlined, null), onClick: toggleViewMode }))));
    };
    var content = function () {
        if (currentView === "form") {
            return (react_1.default.createElement(index_1.Form, { ref: formRef, model: relation, id: value[itemIndex], onCancel: function () { }, onSubmitSucceed: function (event) {
                    var id = event[0];
                    if (!value.includes(id)) {
                        triggerChange(value.concat(id).filter(function (item) { return item !== undefined; }));
                        fetchData();
                    }
                    else {
                        setFormIsSaving(false);
                        setFormHasChanges(false);
                    }
                }, onSubmitError: function () {
                    setFormIsSaving(false);
                }, onFieldsChange: function () {
                    setFormHasChanges(true);
                } }));
        }
        return (react_1.default.createElement(index_2.SimpleTree, { model: relation, ids: value, formView: views.get("form"), treeView: views.get("tree"), onRowClicked: function (event) {
                var id = event.id;
                setModalItemId(id);
                setShowFormModal(true);
            } }));
    };
    if (isLoading) {
        return react_1.default.createElement(antd_1.Spin, null);
    }
    if (error) {
        return react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: error, type: "error", banner: true });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        topBar(),
        content(),
        react_1.default.createElement(FormModal_1.FormModal, { model: relation, id: modalItemId, visible: showFormModal, onSubmitSucceed: function (event) {
                var id = event[0];
                if (!value.includes(id)) {
                    triggerChange(value.concat(id));
                }
                setShowFormModal(false);
                fetchData();
            }, onCancel: function () {
                setShowFormModal(false);
            } })));
};
//# sourceMappingURL=One2many.js.map