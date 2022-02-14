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
exports.TimelineInput = exports.Timeline = void 0;
var react_1 = __importStar(require("react"));
var Field_1 = __importDefault(require("@/common/Field"));
var use_deep_compare_effect_1 = __importDefault(require("use-deep-compare-effect"));
var FormContext_1 = require("@/context/FormContext");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var antd_1 = require("antd");
var one2manyHelper_1 = require("@/helpers/one2manyHelper");
var FormModal_1 = require("../modals/FormModal");
var Timeline = function (props) {
    var ooui = props.ooui;
    var relation = ooui.relation, context = ooui.context, oouiViews = ooui.views;
    var _a = react_1.useState(true), isLoading = _a[0], setIsLoading = _a[1];
    var _b = react_1.useState(), error = _b[0], setError = _b[1];
    var _c = react_1.useState(new Map()), views = _c[0], setViews = _c[1];
    var formContext = react_1.useContext(FormContext_1.FormContext);
    var getContext = (formContext || {}).getContext;
    use_deep_compare_effect_1.default(function () {
        fetchData();
    }, [ooui]);
    var getViewData = function (type) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (oouiViews && oouiViews[type]) {
                        return [2 /*return*/, oouiViews[type]];
                    }
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                            model: relation,
                            type: type,
                            context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                        })];
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
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, getViewData("form")];
                case 2:
                    formView = _a.sent();
                    return [4 /*yield*/, getViewData("tree")];
                case 3:
                    treeView = _a.sent();
                    views.set("form", formView);
                    views.set("tree", treeView);
                    setViews(views);
                    return [3 /*break*/, 6];
                case 4:
                    err_1 = _a.sent();
                    setError(err_1);
                    return [3 /*break*/, 6];
                case 5:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    if (isLoading) {
        return react_1.default.createElement(antd_1.Spin, null);
    }
    if (error) {
        return react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: error, type: "error", banner: true });
    }
    return (react_1.default.createElement(Field_1.default, __assign({ type: "array" }, props),
        react_1.default.createElement(exports.TimelineInput, { ooui: ooui, views: views })));
};
exports.Timeline = Timeline;
var TimelineInput = function (props) {
    var _a = props.value, items = _a === void 0 ? [] : _a, views = props.views, ooui = props.ooui, onChange = props.onChange;
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(), error = _c[0], setError = _c[1];
    var _d = react_1.useState(false), showFormModal = _d[0], setShowFormModal = _d[1];
    var _e = react_1.useState(), modalItem = _e[0], setModalItem = _e[1];
    var relation = ooui.relation, context = ooui.context, readOnly = ooui.readOnly, summaryField = ooui.summaryField, titleField = ooui.titleField;
    var itemsToShow = items.filter(function (item) { return item.values; });
    var formContext = react_1.useContext(FormContext_1.FormContext);
    var getContext = (formContext || {}).getContext;
    use_deep_compare_effect_1.default(function () {
        fetchData();
    }, [items]);
    var triggerChange = function (changedValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(changedValue);
    };
    function fetchData() {
        return __awaiter(this, void 0, void 0, function () {
            var itemsWithValues, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setIsLoading(true);
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
                        err_2 = _a.sent();
                        setError(err_2);
                        return [3 /*break*/, 5];
                    case 4:
                        setIsLoading(false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    if (error) {
        return react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: error, type: "error", banner: true });
    }
    if (isLoading) {
        return react_1.default.createElement(antd_1.Spin, null);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Timeline, { style: { padding: "1rem" } }, itemsToShow.map(function (item, index) {
            var _a, _b;
            return (react_1.default.createElement("div", { key: index },
                react_1.default.createElement(antd_1.Timeline.Item, { key: index },
                    react_1.default.createElement("div", { style: { display: "inline-block", cursor: "pointer" }, onClick: function () {
                            setModalItem(itemsToShow.find(function (searchItem) { return item.id === searchItem.id; }));
                            setShowFormModal(true);
                        } },
                        react_1.default.createElement("strong", null, (_a = item.values) === null || _a === void 0 ? void 0 : _a[titleField])),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("div", { style: { display: "inline-block", cursor: "pointer" }, onClick: function () {
                            setModalItem(itemsToShow.find(function (searchItem) { return item.id === searchItem.id; }));
                            setShowFormModal(true);
                        } }, (_b = item.values) === null || _b === void 0 ? void 0 : _b[summaryField]))));
        })),
        react_1.default.createElement(FormModal_1.FormModal, { formView: views.get("form"), model: relation, id: modalItem === null || modalItem === void 0 ? void 0 : modalItem.id, values: modalItem === null || modalItem === void 0 ? void 0 : modalItem.values, defaultValues: modalItem === null || modalItem === void 0 ? void 0 : modalItem.defaultValues, visible: showFormModal, onSubmitSucceed: function () {
                setShowFormModal(false);
            }, parentContext: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context), onCancel: function () {
                setShowFormModal(false);
            }, readOnly: readOnly, postSaveAction: fetchData })));
};
exports.TimelineInput = TimelineInput;
//# sourceMappingURL=Timeline.js.map