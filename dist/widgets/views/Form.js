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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ooui_1 = require("ooui");
var antd_1 = require("antd");
var react_cool_dimensions_1 = __importDefault(require("react-cool-dimensions"));
var icons_1 = require("@ant-design/icons");
var Container_1 = __importDefault(require("@/widgets/containers/Container"));
var formHelper_1 = require("@/helpers/formHelper");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var UnsavedChangesDialog_1 = __importDefault(require("@/ui/UnsavedChangesDialog"));
var erpReadWriteHelper_1 = require("@/helpers/erpReadWriteHelper");
var FormContext_1 = __importDefault(require("@/context/FormContext"));
var WIDTH_BREAKPOINT = 1000;
function Form(props, ref) {
    var _this = this;
    var model = props.model, id = props.id, onCancel = props.onCancel, onSubmitSucceed = props.onSubmitSucceed, _a = props.showFooter, showFooter = _a === void 0 ? false : _a, _b = props.getDataFromAction, getDataFromAction = _b === void 0 ? false : _b, onFieldsChange = props.onFieldsChange, onSubmitError = props.onSubmitError, _c = props.readOnly, readOnly = _c === void 0 ? false : _c, _d = props.mustClearAfterSave, mustClearAfterSave = _d === void 0 ? false : _d, _e = props.submitMode, submitMode = _e === void 0 ? "api" : _e, values = props.values, data = props.data;
    var _f = react_1.useState(false), isSubmitting = _f[0], setIsSubmitting = _f[1];
    var _g = react_1.useState(), error = _g[0], setError = _g[1];
    var _h = react_1.useState(false), loading = _h[0], setLoading = _h[1];
    var _j = react_1.useState(), form = _j[0], setForm = _j[1];
    var antForm = antd_1.Form.useForm()[0];
    var _k = react_cool_dimensions_1.default({
        breakpoints: { XS: 0, SM: 320, MD: 480, LG: 1000 },
        updateOnBreakpointChange: true,
    }), width = _k.width, containerRef = _k.ref;
    var responsiveBehaviour = width < WIDTH_BREAKPOINT;
    react_1.useImperativeHandle(ref, function () { return ({
        submitForm: submitForm,
    }); });
    var showConfirm = function () {
        UnsavedChangesDialog_1.default({
            onOk: function () {
                onCancel === null || onCancel === void 0 ? void 0 : onCancel();
            },
        });
    };
    var cancel = function () {
        if (formHasChanges()) {
            showConfirm();
            return;
        }
        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
    };
    var getFormView = function () { return __awaiter(_this, void 0, void 0, function () {
        var action, viewsForAction;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!getDataFromAction) return [3 /*break*/, 3];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getAction(model)];
                case 1:
                    action = _a.sent();
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getViewsForAction(action)];
                case 2:
                    viewsForAction = _a.sent();
                    return [2 /*return*/, viewsForAction.views.get("form")];
                case 3: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView(model, "form")];
                case 4: return [2 /*return*/, (_a.sent())];
            }
        });
    }); };
    var assignNewValuesToForm = function (newValues, view) {
        var valuesProcessed = formHelper_1.processValues(newValues, view.fields);
        var fieldsToUpdate = Object.keys(view.fields).map(function (fieldName) {
            return {
                name: fieldName,
                touched: false,
                value: valuesProcessed[fieldName] || undefined,
            };
        });
        antForm.setFields(fieldsToUpdate);
    };
    var fetchAndParseForm = function () { return __awaiter(_this, void 0, void 0, function () {
        var view, ooui;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getFormView()];
                case 1:
                    view = _a.sent();
                    ooui = new ooui_1.Form(view.fields);
                    ooui.parse(view.arch, readOnly);
                    setForm({ ooui: ooui, view: view });
                    return [2 /*return*/, view];
            }
        });
    }); };
    var fetchValuesFromApi = function (view) { return __awaiter(_this, void 0, void 0, function () {
        var _values, erpValues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _values = {};
                    if (!id) return [3 /*break*/, 2];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            arch: view.arch,
                            model: model,
                            ids: [id],
                        })];
                case 1:
                    erpValues = (_a.sent())[0];
                    _values = erpReadWriteHelper_1.formatX2ManyValues({
                        values: erpValues,
                        fields: view.fields,
                    });
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                        model: model,
                        action: "default_get",
                        payload: Object.keys(view.fields),
                    })];
                case 3:
                    _values = _a.sent();
                    _a.label = 4;
                case 4:
                    assignNewValuesToForm(_values, view);
                    return [2 /*return*/];
            }
        });
    }); };
    var fetchValuesFromProps = function (view) {
        var _values = erpReadWriteHelper_1.formatX2ManyValues({
            values: values,
            fields: view.fields,
        });
        assignNewValuesToForm(_values, view);
    };
    var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
        var view, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, 9, 10]);
                    if (!data) return [3 /*break*/, 2];
                    setForm(data);
                    view = data.view;
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, fetchAndParseForm()];
                case 3:
                    view = _a.sent();
                    _a.label = 4;
                case 4:
                    if (!values) return [3 /*break*/, 5];
                    fetchValuesFromProps(view);
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, fetchValuesFromApi(view)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: return [3 /*break*/, 10];
                case 8:
                    err_1 = _a.sent();
                    setError(err_1);
                    return [3 /*break*/, 10];
                case 9:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchData();
    }, [id, model, values]);
    var formHasChanges = function () {
        return (Object.keys(formHelper_1.getTouchedValues(antForm, form === null || form === void 0 ? void 0 : form.view.fields)).length !== 0);
    };
    var submitApi = function () { return __awaiter(_this, void 0, void 0, function () {
        var touchedValues, erpTouchedValues, objectId, newId, value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    touchedValues = formHelper_1.getTouchedValues(antForm, form === null || form === void 0 ? void 0 : form.view.fields);
                    erpTouchedValues = erpReadWriteHelper_1.getErpValues({
                        fields: form === null || form === void 0 ? void 0 : form.view.fields,
                        touchedValues: touchedValues,
                    });
                    objectId = id;
                    if (!id) return [3 /*break*/, 2];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().update({
                            model: model,
                            id: id,
                            values: erpTouchedValues,
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().create({
                        model: model,
                        values: erpTouchedValues,
                    })];
                case 3:
                    newId = _a.sent();
                    objectId = newId;
                    _a.label = 4;
                case 4: 
                // TODO: This maybe will be unnecessary sometimes, we might do it conditionally with a new input prop mustRefreshAfterSave?
                return [4 /*yield*/, fetchValuesFromApi(form.view)];
                case 5:
                    // TODO: This maybe will be unnecessary sometimes, we might do it conditionally with a new input prop mustRefreshAfterSave?
                    _a.sent();
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                            action: "name_get",
                            payload: [objectId],
                            model: model,
                        })];
                case 6:
                    value = _a.sent();
                    onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed({
                        id: objectId,
                        name: value[0][1]
                    });
                    return [2 /*return*/];
            }
        });
    }); };
    var submitValues = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed({
                id: id,
                touchedValues: formHelper_1.getTouchedValues(antForm, form === null || form === void 0 ? void 0 : form.view.fields),
            });
            return [2 /*return*/];
        });
    }); };
    var submitForm = function () { return __awaiter(_this, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!formHasChanges()) {
                        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                        return [2 /*return*/];
                    }
                    setIsSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, 7, 8]);
                    if (!(submitMode === "api")) return [3 /*break*/, 3];
                    return [4 /*yield*/, submitApi()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, submitValues()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    if (mustClearAfterSave)
                        assignNewValuesToForm({}, form === null || form === void 0 ? void 0 : form.view);
                    return [3 /*break*/, 8];
                case 6:
                    err_2 = _a.sent();
                    onSubmitError === null || onSubmitError === void 0 ? void 0 : onSubmitError(err_2);
                    setError(err_2);
                    return [3 /*break*/, 8];
                case 7:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var checkFieldsChanges = function () {
        if (onFieldsChange && formHasChanges()) {
            onFieldsChange();
        }
    };
    var content = function () {
        if (!form) {
            return null;
        }
        return (react_1.default.createElement(FormContext_1.default, { parentId: id },
            react_1.default.createElement(antd_1.Form, { form: antForm, onFieldsChange: checkFieldsChanges, component: false }, form && (react_1.default.createElement(Container_1.default, { container: form.ooui.container, responsiveBehaviour: responsiveBehaviour })))));
    };
    var footer = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(antd_1.Divider, null),
            react_1.default.createElement(antd_1.Row, { justify: "end" },
                react_1.default.createElement(antd_1.Space, null,
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.CloseOutlined, null), disabled: isSubmitting || loading, onClick: cancel }, "Cancel"),
                    react_1.default.createElement(antd_1.Button, { disabled: isSubmitting || loading || readOnly, loading: isSubmitting, icon: react_1.default.createElement(icons_1.CheckOutlined, null), onClick: submitForm }, "OK")))));
    };
    return (react_1.default.createElement("div", { ref: containerRef, className: "pb-2" },
        error && react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: error, type: "error", banner: true }),
        loading ? react_1.default.createElement(antd_1.Spin, null) : content(),
        showFooter && footer()));
}
exports.default = react_1.forwardRef(Form);
//# sourceMappingURL=Form.js.map