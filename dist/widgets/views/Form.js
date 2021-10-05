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
var ooui_1 = require("ooui");
var antd_1 = require("antd");
var react_cool_dimensions_1 = __importDefault(require("react-cool-dimensions"));
var icons_1 = require("@ant-design/icons");
var debounce_1 = __importDefault(require("lodash/debounce"));
var Container_1 = __importDefault(require("@/widgets/containers/Container"));
var formHelper_1 = require("@/helpers/formHelper");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var UnsavedChangesDialog_1 = __importDefault(require("@/ui/UnsavedChangesDialog"));
var FormErrorsDialog_1 = __importDefault(require("@/ui/FormErrorsDialog"));
var ActionErrorDialog_1 = __importDefault(require("@/ui/ActionErrorDialog"));
var WarningDialog_1 = __importDefault(require("@/ui/WarningDialog"));
var FormContext_1 = __importStar(require("@/context/FormContext"));
var FormModalContext_1 = require("@/context/FormModalContext");
var ActionViewContext_1 = require("@/context/ActionViewContext");
var ContentRootContext_1 = require("@/context/ContentRootContext");
var LocaleContext_1 = require("@/context/LocaleContext");
var WIDTH_BREAKPOINT = 1000;
function Form(props, ref) {
    var _this = this;
    var model = props.model, id = props.id, propsOnCancel = props.onCancel, propsOnSubmitSucceed = props.onSubmitSucceed, _a = props.showFooter, showFooter = _a === void 0 ? false : _a, _b = props.getDataFromAction, getDataFromAction = _b === void 0 ? false : _b, onFieldsChange = props.onFieldsChange, propsOnSubmitError = props.onSubmitError, _c = props.readOnly, readOnly = _c === void 0 ? false : _c, _d = props.mustClearAfterSave, mustClearAfterSave = _d === void 0 ? false : _d, _e = props.submitMode, submitMode = _e === void 0 ? "api" : _e, valuesProps = props.values, formViewProps = props.formView, postSaveAction = props.postSaveAction, _f = props.insideButtonModal, insideButtonModal = _f === void 0 ? false : _f, _g = props.parentContext, parentContext = _g === void 0 ? {} : _g, actionDomain = props.actionDomain, _h = props.visible, visible = _h === void 0 ? true : _h, _j = props.rootForm, rootForm = _j === void 0 ? false : _j, defaultValues = props.defaultValues, _k = props.forcedValues, forcedValues = _k === void 0 ? {} : _k;
    var _l = react_1.useContext(LocaleContext_1.LocaleContext), t = _l.t, lang = _l.lang;
    var _m = react_1.useState(false), isSubmitting = _m[0], setIsSubmitting = _m[1];
    var _o = react_1.useState(), error = _o[0], setError = _o[1];
    var _p = react_1.useState(), formOoui = _p[0], setFormOoui = _p[1];
    var antForm = antd_1.Form.useForm()[0];
    var _q = react_1.useState(), arch = _q[0], setArch = _q[1];
    var _r = react_1.useState(), fields = _r[0], setFields = _r[1];
    var formModalContext = react_1.useContext(FormModalContext_1.FormModalContext);
    var createdId = react_1.useRef();
    var originalFormValues = react_1.useRef({});
    var lastAssignedValues = react_1.useRef({});
    var warningIsShown = react_1.useRef(false);
    var formSubmitting = react_1.useRef(false);
    var _s = react_cool_dimensions_1.default({
        breakpoints: { XS: 0, SM: 320, MD: 480, LG: 1000 },
        updateOnBreakpointChange: true,
    }), width = _s.width, containerRef = _s.ref;
    var responsiveBehaviour = width < WIDTH_BREAKPOINT;
    var formContext = react_1.useContext(FormContext_1.FormContext);
    var parentId = (formContext || {}).activeId;
    var actionViewContext = react_1.useContext(ActionViewContext_1.ActionViewContext);
    var _t = (rootForm ? actionViewContext : {}) || {}, _u = _t.setFormIsSaving, setFormIsSaving = _u === void 0 ? undefined : _u, _v = _t.setFormHasChanges, setFormHasChanges = _v === void 0 ? undefined : _v, _w = _t.setCurrentId, setCurrentId = _w === void 0 ? undefined : _w, _x = _t.setFormIsLoading, setFormIsLoading = _x === void 0 ? undefined : _x, _y = _t.setAttachments, setAttachments = _y === void 0 ? undefined : _y;
    var contentRootContext = react_1.useContext(ContentRootContext_1.ContentRootContext);
    var _z = contentRootContext || {}, processAction = _z.processAction, globalValues = _z.globalValues;
    react_1.useImperativeHandle(ref, function () { return ({
        submitForm: submitForm,
        getFields: function () {
            return fields;
        },
        getValues: getValues,
        getContext: getContext,
        fetchValues: fetchValues,
        cancelUnsavedChanges: cancelUnsavedChanges,
    }); });
    react_1.useEffect(function () {
        if (!model && !formViewProps) {
            return;
        }
        if (!visible) {
            createdId.current = undefined;
            setFormOoui(undefined);
            return;
        }
        fetchData();
    }, [id, model, valuesProps, formViewProps, visible]);
    var onSubmitSucceed = function (id) {
        setFormHasChanges === null || setFormHasChanges === void 0 ? void 0 : setFormHasChanges(false);
        setFormIsSaving === null || setFormIsSaving === void 0 ? void 0 : setFormIsSaving(false);
        propsOnSubmitSucceed === null || propsOnSubmitSucceed === void 0 ? void 0 : propsOnSubmitSucceed(id);
        setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(id);
    };
    var onCancel = function () {
        setFormIsSaving === null || setFormIsSaving === void 0 ? void 0 : setFormIsSaving(false);
        propsOnCancel === null || propsOnCancel === void 0 ? void 0 : propsOnCancel();
    };
    var onSubmitError = function (error) {
        setFormIsSaving === null || setFormIsSaving === void 0 ? void 0 : setFormIsSaving(false);
        propsOnSubmitError === null || propsOnSubmitError === void 0 ? void 0 : propsOnSubmitError(error);
    };
    function getCurrentId() {
        return id || createdId.current;
    }
    function getValues() {
        return __assign(__assign({}, getCurrentValues(fields)), getAdditionalValues());
    }
    function getContext() {
        return __assign(__assign({}, parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context);
    }
    function getAdditionalValues() {
        return __assign({ id: getCurrentId(), active_id: getCurrentId(), parent_id: parentId }, globalValues);
    }
    var getDefaultValues = function (fields) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().defaultGet({
                        model: model,
                        fields: fields,
                        context: __assign(__assign({}, parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context),
                        extraValues: defaultValues,
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var formHasChanges = function () {
        return (Object.keys(formHelper_1.getTouchedValues({
            source: originalFormValues.current,
            target: formHelper_1.processValues(getCurrentValues(fields), fields),
            fields: fields,
        })).length !== 0);
    };
    var getCurrentValues = function (fields) {
        var currentValues = antForm.getFieldsValue(true);
        return formHelper_1.processValues(currentValues, fields);
    };
    var setFieldValue = function (field, value) {
        var _a;
        assignNewValuesToForm({
            values: __assign(__assign({}, formHelper_1.processValues(antForm.getFieldsValue(true), fields)), (_a = {}, _a[field] = value, _a)),
            fields: fields,
            reset: false,
        });
    };
    var getFieldValue = function (field) {
        var values = antForm.getFieldsValue(true);
        return values[field];
    };
    function checkIfFormHasErrors() {
        return __awaiter(this, void 0, void 0, function () {
            var verror_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, antForm.validateFields()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 2:
                        verror_1 = _a.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
        var view, fields_1, arch_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setError(undefined);
                    setFormIsLoading === null || setFormIsLoading === void 0 ? void 0 : setFormIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    if (!formViewProps) return [3 /*break*/, 2];
                    view = { arch: formViewProps.arch, fields: formViewProps.fields };
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, getFormView()];
                case 3:
                    view = _a.sent();
                    _a.label = 4;
                case 4:
                    fields_1 = view.fields, arch_1 = view.arch;
                    setFields(fields_1);
                    setArch(arch_1);
                    return [4 /*yield*/, fetchValues({
                            fields: fields_1,
                            arch: arch_1,
                        })];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    err_1 = _a.sent();
                    setError(JSON.stringify(err_1, null, 2));
                    setFormIsLoading === null || setFormIsLoading === void 0 ? void 0 : setFormIsLoading(false);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var fetchValues = function (options) { return __awaiter(_this, void 0, void 0, function () {
        var values, _fields, _arch;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setFormIsLoading === null || setFormIsLoading === void 0 ? void 0 : setFormIsLoading(true);
                    if (options) {
                        _fields = options.fields;
                        _arch = options.arch;
                    }
                    else {
                        _fields = fields;
                        _arch = arch;
                    }
                    if (!valuesProps) return [3 /*break*/, 1];
                    values = valuesProps;
                    return [3 /*break*/, 3];
                case 1: return [4 /*yield*/, fetchValuesFromApi({
                        fields: _fields,
                        arch: _arch,
                    })];
                case 2:
                    values = _a.sent();
                    _a.label = 3;
                case 3:
                    if (actionDomain) {
                        values = __assign(__assign({}, values), formHelper_1.getValuesForDomain(actionDomain));
                    }
                    originalFormValues.current = formHelper_1.processValues(values, _fields);
                    parseForm({ fields: _fields, arch: _arch, values: values });
                    assignNewValuesToForm({ values: values, fields: _fields, reset: true });
                    setFormIsLoading === null || setFormIsLoading === void 0 ? void 0 : setFormIsLoading(false);
                    setFormHasChanges === null || setFormHasChanges === void 0 ? void 0 : setFormHasChanges(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var cancelUnsavedChanges = function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (formHasChanges()) {
                            UnsavedChangesDialog_1.default({
                                lang: lang,
                                onOk: function () {
                                    onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                                    resolve(true);
                                },
                                onCancel: function () {
                                    resolve(false);
                                },
                            });
                        }
                        else {
                            onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                            resolve(true);
                        }
                        return [2 /*return*/];
                    });
                }); })];
        });
    }); };
    var getFormView = function () { return __awaiter(_this, void 0, void 0, function () {
        var action, viewsForAction;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!getDataFromAction) return [3 /*break*/, 3];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getActionStringForModel(model)];
                case 1:
                    action = _a.sent();
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getViewsForAction({
                            action: action,
                            context: parentContext,
                        })];
                case 2:
                    viewsForAction = _a.sent();
                    return [2 /*return*/, viewsForAction.views.get("form")];
                case 3: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                        model: model,
                        type: "form",
                        context: parentContext,
                    })];
                case 4: return [2 /*return*/, (_a.sent())];
            }
        });
    }); };
    var assignNewValuesToForm = function (_a) {
        var newValues = _a.values, fields = _a.fields, reset = _a.reset;
        var currentValues = reset ? {} : antForm.getFieldsValue(true);
        var mergedValues = __assign(__assign({}, currentValues), newValues);
        var valuesProcessed = formHelper_1.processValues(mergedValues, fields);
        var fieldsToUpdate = Object.keys(fields).map(function (fieldName) {
            return {
                name: fieldName,
                touched: false,
                value: valuesProcessed[fieldName] || undefined,
            };
        });
        lastAssignedValues.current = valuesProcessed;
        antForm.setFields(fieldsToUpdate);
    };
    var fetchValuesFromApi = function (_a) {
        var fields = _a.fields, arch = _a.arch;
        return __awaiter(_this, void 0, void 0, function () {
            var values, results;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        values = {};
                        if (!getCurrentId()) return [3 /*break*/, 3];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                                arch: arch,
                                model: model,
                                ids: [getCurrentId()],
                                fields: fields,
                                context: parentContext,
                            })];
                    case 1:
                        values = (_b.sent())[0];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().search({
                                params: [
                                    ["res_model", "=", model],
                                    ["res_id", "=", getCurrentId()],
                                ],
                                context: getContext(),
                                model: "ir.attachment",
                            })];
                    case 2:
                        results = (_b.sent()).results;
                        setAttachments === null || setAttachments === void 0 ? void 0 : setAttachments(results);
                        return [3 /*break*/, 5];
                    case 3:
                        setAttachments === null || setAttachments === void 0 ? void 0 : setAttachments([]);
                        return [4 /*yield*/, getDefaultValues(fields)];
                    case 4:
                        values = _b.sent();
                        _b.label = 5;
                    case 5: return [2 /*return*/, values];
                }
            });
        });
    };
    var submitApi = function (options) { return __awaiter(_this, void 0, void 0, function () {
        var _a, callOnSubmitSucceed, touchedValues, currentValues, newId;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = (options || {}).callOnSubmitSucceed, callOnSubmitSucceed = _a === void 0 ? true : _a;
                    if (!getCurrentId()) return [3 /*break*/, 2];
                    touchedValues = formHelper_1.getTouchedValues({
                        source: originalFormValues.current,
                        target: getCurrentValues(fields),
                        fields: fields,
                    });
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().update({
                            model: model,
                            id: getCurrentId(),
                            values: __assign(__assign({}, touchedValues), forcedValues),
                            fields: fields,
                            context: __assign(__assign({}, parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context),
                        })];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 2:
                    currentValues = formHelper_1.processValues(antForm.getFieldsValue(true), fields);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().create({
                            model: model,
                            values: __assign(__assign({}, currentValues), forcedValues),
                            fields: fields,
                            context: __assign(__assign({}, parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context),
                        })];
                case 3:
                    newId = _b.sent();
                    createdId.current = newId;
                    _b.label = 4;
                case 4:
                    if (!postSaveAction) return [3 /*break*/, 6];
                    return [4 /*yield*/, postSaveAction(getCurrentId())];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6:
                    if (!insideButtonModal && callOnSubmitSucceed) {
                        onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed(getCurrentId());
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var submitValues = function (options) { return __awaiter(_this, void 0, void 0, function () {
        var _a, callOnSubmitSucceed;
        return __generator(this, function (_b) {
            _a = (options || {}).callOnSubmitSucceed, callOnSubmitSucceed = _a === void 0 ? true : _a;
            if (!insideButtonModal && callOnSubmitSucceed) {
                onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed(getCurrentId());
            }
            return [2 /*return*/];
        });
    }); };
    var submitForm = function (options) { return __awaiter(_this, void 0, void 0, function () {
        var _a, callOnSubmitSucceed, values, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = (options || {}).callOnSubmitSucceed, callOnSubmitSucceed = _a === void 0 ? true : _a;
                    formSubmitting.current = true;
                    setError(undefined);
                    if (!formHasChanges() && getCurrentId() && callOnSubmitSucceed) {
                        formSubmitting.current = false;
                        setFormHasChanges === null || setFormHasChanges === void 0 ? void 0 : setFormHasChanges(false);
                        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, checkIfFormHasErrors()];
                case 1:
                    if (_b.sent()) {
                        formSubmitting.current = false;
                        FormErrorsDialog_1.default(lang);
                        return [2 /*return*/];
                    }
                    setIsSubmitting(true);
                    setFormIsSaving === null || setFormIsSaving === void 0 ? void 0 : setFormIsSaving(true);
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 9, 10, 11]);
                    if (!(submitMode === "api")) return [3 /*break*/, 4];
                    return [4 /*yield*/, submitApi(options)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, submitValues(options)];
                case 5:
                    _b.sent();
                    _b.label = 6;
                case 6:
                    if (!mustClearAfterSave) return [3 /*break*/, 8];
                    return [4 /*yield*/, getDefaultValues(fields)];
                case 7:
                    values = _b.sent();
                    assignNewValuesToForm({ values: values, fields: fields, reset: true });
                    _b.label = 8;
                case 8: return [3 /*break*/, 11];
                case 9:
                    err_2 = _b.sent();
                    formSubmitting.current = false;
                    setIsSubmitting(false);
                    setFormIsSaving === null || setFormIsSaving === void 0 ? void 0 : setFormIsSaving(false);
                    onSubmitError === null || onSubmitError === void 0 ? void 0 : onSubmitError(err_2);
                    setError(err_2);
                    return [3 /*break*/, 11];
                case 10:
                    formSubmitting.current = false;
                    setFormIsSaving === null || setFormIsSaving === void 0 ? void 0 : setFormIsSaving(false);
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    }); };
    var parseForm = function (_a) {
        var _b;
        var fields = _a.fields, arch = _a.arch, values = _a.values;
        var ooui = new ooui_1.Form(fields);
        // TODO: Here we must inject `values` to the ooui parser in order to evaluate arch+values and get the new form container
        ooui.parse(arch, {
            readOnly: readOnly,
            values: __assign(__assign({}, values), getAdditionalValues()),
        });
        setFormOoui(ooui);
        if (formModalContext && ooui.string)
            (_b = formModalContext.setTitle) === null || _b === void 0 ? void 0 : _b.call(formModalContext, ooui.string);
    };
    var checkFieldsChanges = function () { return __awaiter(_this, void 0, void 0, function () {
        var touchedValues, changedFields, values;
        return __generator(this, function (_a) {
            if (formSubmitting.current)
                return [2 /*return*/];
            touchedValues = formHelper_1.getTouchedValues({
                source: lastAssignedValues.current,
                target: formHelper_1.processValues(getCurrentValues(fields), fields),
                fields: fields,
            });
            changedFields = Object.keys(touchedValues);
            if (changedFields.length !== 0) {
                values = formHelper_1.processValues(antForm.getFieldsValue(true), fields);
                lastAssignedValues.current = values;
                onFieldsChange === null || onFieldsChange === void 0 ? void 0 : onFieldsChange(values);
                setFormHasChanges === null || setFormHasChanges === void 0 ? void 0 : setFormHasChanges(true);
                // We check if there are any field of type text, email, url or char inside the changed values
                // in order to debounce the call
                if (formHelper_1.checkFieldsType({
                    changedFields: changedFields,
                    fields: fields,
                    types: [
                        "text",
                        "email",
                        "url",
                        "char",
                        "float",
                        "integer",
                        "many2one",
                    ],
                })) {
                    debouncedEvaluateChanges(changedFields);
                }
                else {
                    evaluateChanges(changedFields);
                }
            }
            return [2 /*return*/];
        });
    }); };
    var debouncedCheckFieldsChanges = debounce_1.default(checkFieldsChanges, 100);
    var evaluateChanges = function (changedFields) { return __awaiter(_this, void 0, void 0, function () {
        var i, changedField, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < changedFields.length)) return [3 /*break*/, 4];
                    changedField = changedFields[i];
                    return [4 /*yield*/, processFieldOnChange(changedField)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i += 1;
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_3 = _a.sent();
                    ActionErrorDialog_1.default(err_3);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var processFieldOnChange = function (fieldName) { return __awaiter(_this, void 0, void 0, function () {
        var onChangeFieldAction, currentValues, payload, response, processedValues, _a, title, message, proccessedFields;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    onChangeFieldAction = formOoui === null || formOoui === void 0 ? void 0 : formOoui.onChangeFields[fieldName];
                    currentValues = formHelper_1.processValues(antForm.getFieldsValue(true), fields);
                    if (!onChangeFieldAction) {
                        parseForm({
                            fields: fields,
                            arch: arch,
                            values: currentValues,
                        });
                        return [2 /*return*/];
                    }
                    payload = formHelper_1.getOnChangePayload({
                        values: __assign(__assign({}, currentValues), { context: __assign(__assign({}, parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context) }),
                        onChangeFieldActionArgs: onChangeFieldAction.args,
                    });
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().executeOnChange({
                            model: model,
                            action: onChangeFieldAction.method,
                            ids: getCurrentId() ? [getCurrentId()] : [],
                            payload: payload,
                            fields: fields,
                        })];
                case 1:
                    response = _b.sent();
                    if (response.value) {
                        processedValues = __assign(__assign({}, currentValues), response.value);
                        parseForm({ fields: fields, arch: arch, values: processedValues });
                        assignNewValuesToForm({
                            values: processedValues,
                            fields: fields,
                            reset: false,
                        });
                    }
                    if (response.warning &&
                        response.warning.title &&
                        response.warning.message &&
                        !warningIsShown.current) {
                        _a = response.warning, title = _a.title, message = _a.message;
                        warningIsShown.current = true;
                        WarningDialog_1.default(title, message, function () {
                            warningIsShown.current = false;
                        });
                    }
                    if (response.domain) {
                        proccessedFields = formHelper_1.mergeFieldsDomain({
                            fieldsDomain: response.domain,
                            fields: fields,
                        });
                        parseForm({
                            fields: proccessedFields,
                            arch: arch,
                            values: currentValues,
                        });
                        setFields(proccessedFields);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var debouncedEvaluateChanges = debounce_1.default(evaluateChanges, 800);
    function runObjectButton(_a) {
        var action = _a.action, context = _a.context;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                            model: model,
                            action: action,
                            payload: [getCurrentId()],
                            context: __assign(__assign(__assign({}, context), parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context),
                        })];
                    case 1:
                        response = _b.sent();
                        if (!(typeof response === "object" &&
                            response !== null &&
                            Object.keys(response).length === 0 &&
                            insideButtonModal)) return [3 /*break*/, 2];
                        onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed(getCurrentId());
                        return [3 /*break*/, 7];
                    case 2:
                        if (!(response.type &&
                            response.type === "ir.actions.act_window_close")) return [3 /*break*/, 3];
                        onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed(getCurrentId());
                        return [3 /*break*/, 7];
                    case 3:
                        if (!response.type) return [3 /*break*/, 5];
                        return [4 /*yield*/, runAction({ actionData: response, context: context })];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, fetchValues()];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    function runWorkflowButton(_a) {
        var action = _a.action;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().executeWorkflow({
                            model: model,
                            action: action,
                            payload: getCurrentId(),
                        })];
                    case 1:
                        response = _b.sent();
                        if (!(response.type && response.type === "ir.actions.act_window_close")) return [3 /*break*/, 2];
                        onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed(getCurrentId());
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, fetchValues()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function runActionButton(_a) {
        var action = _a.action, context = _a.context;
        return __awaiter(this, void 0, void 0, function () {
            var actionData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            model: "ir.actions.actions",
                            ids: [parseInt(action)],
                            context: parentContext,
                        })];
                    case 1:
                        actionData = (_b.sent())[0];
                        return [4 /*yield*/, runAction({ actionData: actionData, context: context })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function runAction(_a) {
        var actionData = _a.actionData, context = _a.context;
        return __awaiter(this, void 0, void 0, function () {
            var closeParent;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (processAction === null || processAction === void 0 ? void 0 : processAction({
                            actionData: actionData,
                            fields: fields,
                            values: getValues(),
                            context: __assign(__assign(__assign({}, context), parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context),
                            onRefreshParentValues: function () {
                                fetchValues();
                            },
                        }))];
                    case 1:
                        closeParent = ((_b.sent()) || {}).closeParent;
                        if (!rootForm && closeParent) {
                            onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed(getCurrentId());
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    function executeButtonAction(_a) {
        var type = _a.type, action = _a.action, context = _a.context;
        return __awaiter(this, void 0, void 0, function () {
            var err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // If the type of the button it's a cancel, we just close our form
                        if (type === "cancel") {
                            onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, checkIfFormHasErrors()];
                    case 1:
                        // We check for required fields
                        if (_b.sent()) {
                            FormErrorsDialog_1.default(lang);
                            return [2 /*return*/];
                        }
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 10, , 11]);
                        return [4 /*yield*/, submitForm({ callOnSubmitSucceed: false })];
                    case 3:
                        _b.sent();
                        if (!(type === "object")) return [3 /*break*/, 5];
                        return [4 /*yield*/, runObjectButton({ action: action, context: context })];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 5:
                        if (!(type === "workflow")) return [3 /*break*/, 7];
                        return [4 /*yield*/, runWorkflowButton({ action: action })];
                    case 6:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        if (!(type === "action")) return [3 /*break*/, 9];
                        return [4 /*yield*/, runActionButton({ action: action, context: context })];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        err_4 = _b.sent();
                        ActionErrorDialog_1.default(err_4);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    }
    var content = function () {
        if (!formOoui && !error) {
            return react_1.default.createElement(antd_1.Spin, null);
        }
        if (!model && !formViewProps) {
            return null;
        }
        if (!visible) {
            return null;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(FormContext_1.default, { activeId: id, activeModel: model, setFieldValue: setFieldValue, getFieldValue: getFieldValue, executeButtonAction: executeButtonAction, getContext: getContext },
                react_1.default.createElement(antd_1.Form, { form: antForm, onFieldsChange: debouncedCheckFieldsChanges, component: false, preserve: false }, formOoui && (react_1.default.createElement(Container_1.default, { container: formOoui.container, responsiveBehaviour: responsiveBehaviour }))))));
    };
    var footer = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(antd_1.Divider, null),
            react_1.default.createElement(antd_1.Row, { justify: "end" },
                react_1.default.createElement(antd_1.Space, null,
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.CloseOutlined, null), disabled: isSubmitting, onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, cancelUnsavedChanges()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); } }, "Cancel"),
                    react_1.default.createElement(antd_1.Button, { disabled: isSubmitting || readOnly, loading: isSubmitting, icon: react_1.default.createElement(icons_1.CheckOutlined, null), onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, submitForm()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); } }, "OK")))));
    };
    if (!visible) {
        return react_1.default.createElement("div", { ref: containerRef });
    }
    return (react_1.default.createElement("div", { ref: containerRef, className: "pb-2" },
        error && (react_1.default.createElement(antd_1.Alert, { className: "mt-10 mb-20", message: JSON.stringify(error), type: "error", banner: true })),
        content(),
        showFooter && footer()));
}
exports.default = react_1.forwardRef(Form);
//# sourceMappingURL=Form.js.map