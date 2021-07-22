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
var index_1 = require("@/index");
var FormModalContext_1 = require("@/context/FormModalContext");
var filesHelper_1 = require("@/helpers/filesHelper");
var ActionViewContext_1 = require("@/context/ActionViewContext");
var WIDTH_BREAKPOINT = 1000;
function Form(props, ref) {
    var _this = this;
    var model = props.model, id = props.id, propsOnCancel = props.onCancel, propsOnSubmitSucceed = props.onSubmitSucceed, _a = props.showFooter, showFooter = _a === void 0 ? false : _a, _b = props.getDataFromAction, getDataFromAction = _b === void 0 ? false : _b, onFieldsChange = props.onFieldsChange, propsOnSubmitError = props.onSubmitError, _c = props.readOnly, readOnly = _c === void 0 ? false : _c, _d = props.mustClearAfterSave, mustClearAfterSave = _d === void 0 ? false : _d, _e = props.submitMode, submitMode = _e === void 0 ? "api" : _e, valuesProps = props.values, archProps = props.arch, fieldsProps = props.fields, postSaveAction = props.postSaveAction, _f = props.insideButtonModal, insideButtonModal = _f === void 0 ? false : _f, _g = props.parentContext, parentContext = _g === void 0 ? {} : _g, actionDomain = props.actionDomain, _h = props.visible, visible = _h === void 0 ? true : _h;
    var _j = react_1.useState(false), isSubmitting = _j[0], setIsSubmitting = _j[1];
    var _k = react_1.useState(), error = _k[0], setError = _k[1];
    var _l = react_1.useState(false), loading = _l[0], setLoading = _l[1];
    var _m = react_1.useState(), formOoui = _m[0], setFormOoui = _m[1];
    var antForm = antd_1.Form.useForm()[0];
    var _o = react_1.useState(), arch = _o[0], setArch = _o[1];
    var _p = react_1.useState(), fields = _p[0], setFields = _p[1];
    var _q = react_1.useState(false), buttonActionModalVisible = _q[0], setButtonActionModalVisible = _q[1];
    var _r = react_1.useState(), buttonActionModalArch = _r[0], setButtonActionModalArch = _r[1];
    var _s = react_1.useState(), buttonActionModalModel = _s[0], setButtonActionModalModel = _s[1];
    var _t = react_1.useState(), buttonActionModalFields = _t[0], setButtonActionModalFields = _t[1];
    var formModalContext = react_1.useContext(FormModalContext_1.FormModalContext);
    var _u = react_1.useState({}), buttonContext = _u[0], setButtonContext = _u[1];
    var _v = react_1.useState(), actionDomainModal = _v[0], setActionDomainModal = _v[1];
    var createdId = react_1.useRef();
    var reportInProgressInterval = react_1.useRef();
    var _w = react_1.useState(false), reportGenerating = _w[0], setReportGenerating = _w[1];
    var warningIsShwon = react_1.useRef(false);
    var _x = react_cool_dimensions_1.default({
        breakpoints: { XS: 0, SM: 320, MD: 480, LG: 1000 },
        updateOnBreakpointChange: true,
    }), width = _x.width, containerRef = _x.ref;
    var responsiveBehaviour = width < WIDTH_BREAKPOINT;
    var formContext = react_1.useContext(FormContext_1.FormContext);
    var _y = formContext || {}, parentId = _y.activeId, parentModel = _y.activeModel;
    var actionViewContext = react_1.useContext(ActionViewContext_1.ActionViewContext);
    var _z = actionViewContext || {}, setFormIsSaving = _z.setFormIsSaving, setFormHasChanges = _z.setFormHasChanges, setCurrentId = _z.setCurrentId;
    var onSubmitSucceed = function (payload) {
        setFormHasChanges === null || setFormHasChanges === void 0 ? void 0 : setFormHasChanges(false);
        setFormIsSaving === null || setFormIsSaving === void 0 ? void 0 : setFormIsSaving(false);
        propsOnSubmitSucceed === null || propsOnSubmitSucceed === void 0 ? void 0 : propsOnSubmitSucceed(payload);
        setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(payload);
    };
    var onCancel = function () {
        setFormIsSaving === null || setFormIsSaving === void 0 ? void 0 : setFormIsSaving(false);
        propsOnCancel === null || propsOnCancel === void 0 ? void 0 : propsOnCancel();
    };
    var onSubmitError = function (error) {
        setFormIsSaving === null || setFormIsSaving === void 0 ? void 0 : setFormIsSaving(false);
        propsOnSubmitError === null || propsOnSubmitError === void 0 ? void 0 : propsOnSubmitError(error);
    };
    react_1.useImperativeHandle(ref, function () { return ({
        submitForm: submitForm,
    }); });
    react_1.useEffect(function () {
        fetchData();
    }, [id, model, valuesProps, archProps, fieldsProps]);
    var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
        var view, fields_1, arch_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    setError(undefined);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, 6, 7]);
                    if (!(archProps && fieldsProps)) return [3 /*break*/, 2];
                    view = { arch: archProps, fields: fieldsProps };
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, getFormView()];
                case 3:
                    view = _a.sent();
                    _a.label = 4;
                case 4:
                    fields_1 = view.fields, arch_1 = view.arch;
                    setFields(fields_1);
                    setArch(arch_1);
                    resetValues({ fields: fields_1 });
                    fetchValues({
                        fields: fields_1,
                        arch: arch_1,
                    });
                    return [3 /*break*/, 7];
                case 5:
                    err_1 = _a.sent();
                    setError(err_1);
                    return [3 /*break*/, 7];
                case 6:
                    setFormHasChanges === null || setFormHasChanges === void 0 ? void 0 : setFormHasChanges(false);
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var fetchValues = function (options) { return __awaiter(_this, void 0, void 0, function () {
        var values, _fields, _arch;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
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
                    assignNewValuesToForm({ values: values, fields: _fields });
                    parseForm({ fields: _fields, arch: _arch, values: values });
                    return [2 /*return*/];
            }
        });
    }); };
    var cancelUnsavedChanges = function () {
        if (formHasChanges()) {
            UnsavedChangesDialog_1.default({
                onOk: function () {
                    onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                },
            });
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
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getViewsForAction({
                            action: action,
                        })];
                case 2:
                    viewsForAction = _a.sent();
                    return [2 /*return*/, viewsForAction.views.get("form")];
                case 3: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView(model, "form")];
                case 4: return [2 /*return*/, (_a.sent())];
            }
        });
    }); };
    var assignNewValuesToForm = function (_a) {
        var newValues = _a.values, fields = _a.fields;
        var currentValues = antForm.getFieldsValue(true);
        var mergedValues = __assign(__assign({}, currentValues), newValues);
        var valuesProcessed = formHelper_1.processValues(mergedValues, fields);
        var fieldsToUpdate = Object.keys(fields).map(function (fieldName) {
            return {
                name: fieldName,
                touched: false,
                value: valuesProcessed[fieldName] || undefined,
            };
        });
        antForm.setFields(fieldsToUpdate);
    };
    var resetValues = function (_a) {
        var fields = _a.fields;
        var fieldsToUpdate = Object.keys(fields).map(function (fieldName) {
            return {
                name: fieldName,
                touched: false,
                value: undefined,
            };
        });
        antForm.setFields(fieldsToUpdate);
    };
    var fetchValuesFromApi = function (_a) {
        var fields = _a.fields, arch = _a.arch;
        return __awaiter(_this, void 0, void 0, function () {
            var values;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        values = {};
                        if (!id) return [3 /*break*/, 2];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                                arch: arch,
                                model: model,
                                ids: [id],
                                fields: fields,
                            })];
                    case 1:
                        values = (_b.sent())[0];
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, getDefaultValues(fields)];
                    case 3:
                        values = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, values];
                }
            });
        });
    };
    var getDefaultValues = function (fields) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                        model: model,
                        action: "default_get",
                        payload: Object.keys(fields),
                        context: __assign(__assign({}, parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context),
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var formHasChanges = function () {
        return Object.keys(formHelper_1.getTouchedValues(antForm, fields)).length !== 0;
    };
    var submitApi = function () { return __awaiter(_this, void 0, void 0, function () {
        var touchedValues, currentValues, newId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    touchedValues = formHelper_1.getTouchedValues(antForm, fields);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().update({
                            model: model,
                            id: id,
                            values: touchedValues,
                            fields: fields,
                            context: __assign(__assign({}, parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context),
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    currentValues = formHelper_1.processValues(antForm.getFieldsValue(true), fields);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().create({
                            model: model,
                            values: currentValues,
                            fields: fields,
                            context: __assign(__assign({}, parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context),
                        })];
                case 3:
                    newId = _a.sent();
                    createdId.current = newId;
                    _a.label = 4;
                case 4:
                    if (!postSaveAction) return [3 /*break*/, 6];
                    return [4 /*yield*/, postSaveAction(id || createdId.current)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (!insideButtonModal) {
                        onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed(id || createdId.current);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var submitValues = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!insideButtonModal) {
                onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed({
                    id: id,
                    touchedValues: formHelper_1.getTouchedValues(antForm, fields),
                });
            }
            return [2 /*return*/];
        });
    }); };
    var submitForm = function () { return __awaiter(_this, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setError(undefined);
                    if (!formHasChanges() && id) {
                        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, checkIfFormHasErrors()];
                case 1:
                    if (_a.sent()) {
                        FormErrorsDialog_1.default();
                        return [2 /*return*/];
                    }
                    setIsSubmitting(true);
                    setFormIsSaving === null || setFormIsSaving === void 0 ? void 0 : setFormIsSaving(true);
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 7, 8, 9]);
                    if (!(submitMode === "api")) return [3 /*break*/, 4];
                    return [4 /*yield*/, submitApi()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, submitValues()];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (mustClearAfterSave)
                        assignNewValuesToForm({ values: {}, fields: fields });
                    return [3 /*break*/, 9];
                case 7:
                    err_2 = _a.sent();
                    onSubmitError === null || onSubmitError === void 0 ? void 0 : onSubmitError(err_2);
                    setError(err_2);
                    return [3 /*break*/, 9];
                case 8:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
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
            values: __assign(__assign({}, values), { id: id, active_id: id, parent_id: parentId }),
        });
        setFormOoui(ooui);
        if (formModalContext && ooui.string)
            (_b = formModalContext.setTitle) === null || _b === void 0 ? void 0 : _b.call(formModalContext, ooui.string);
    };
    var checkFieldsChanges = function (changedFields) { return __awaiter(_this, void 0, void 0, function () {
        var values;
        return __generator(this, function (_a) {
            if (formHasChanges() && !loading) {
                values = antForm.getFieldsValue(true);
                onFieldsChange === null || onFieldsChange === void 0 ? void 0 : onFieldsChange(values);
                setFormHasChanges === null || setFormHasChanges === void 0 ? void 0 : setFormHasChanges(true);
                // We check if there are any field of type text, email, url or char inside the changed values
                // in order to debounce the call
                if (formHelper_1.checkFieldsType({
                    changedFields: changedFields.map(function (i) { return i.name[0]; }),
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
                    debouncedEvaluateChanges(changedFields, values);
                }
                else {
                    evaluateChanges(changedFields, values);
                }
            }
            return [2 /*return*/];
        });
    }); };
    var debouncedCheckFieldsChanges = debounce_1.default(checkFieldsChanges, 100);
    var evaluateChanges = function (changedFields, values) { return __awaiter(_this, void 0, void 0, function () {
        var finalValues, finalFields, changedFieldName, onChangeFieldAction, payload_1, response, _a, title, message;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    finalValues = values;
                    finalFields = fields;
                    changedFieldName = changedFields[0].name;
                    onChangeFieldAction = formOoui === null || formOoui === void 0 ? void 0 : formOoui.onChangeFields[changedFieldName];
                    if (!onChangeFieldAction) return [3 /*break*/, 2];
                    payload_1 = {};
                    onChangeFieldAction.args.forEach(function (arg) {
                        if (values[arg]) {
                            payload_1[arg] = values[arg];
                        }
                    });
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().executeOnChange({
                            model: model,
                            action: onChangeFieldAction.method,
                            ids: [id || createdId.current],
                            payload: payload_1,
                            context: __assign(__assign({}, parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context),
                            fields: fields,
                        })];
                case 1:
                    response = _b.sent();
                    if (response.value) {
                        finalValues = __assign(__assign({}, values), response.value);
                        assignNewValuesToForm({
                            values: finalValues,
                            fields: fields,
                        });
                    }
                    if (response.warning &&
                        response.warning.title &&
                        response.warning.message &&
                        !warningIsShwon.current) {
                        _a = response.warning, title = _a.title, message = _a.message;
                        warningIsShwon.current = true;
                        WarningDialog_1.default(title, message, function () {
                            warningIsShwon.current = false;
                        });
                    }
                    if (response.domain) {
                        finalFields = formHelper_1.mergeFieldsDomain({
                            fieldsDomain: response.domain,
                            fields: fields,
                        });
                        setFields(finalFields);
                    }
                    _b.label = 2;
                case 2:
                    parseForm({ arch: arch, fields: finalFields, values: finalValues });
                    return [2 /*return*/];
            }
        });
    }); };
    var debouncedEvaluateChanges = debounce_1.default(evaluateChanges, 800);
    var setFieldValue = function (field, value) {
        var values = antForm.getFieldsValue(true);
        values[field] = value;
        antForm.setFieldsValue(values);
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
    function runObjectButton(_a) {
        var action = _a.action, context = _a.context;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                            model: model,
                            action: action,
                            payload: [id || createdId.current],
                            context: __assign(__assign(__assign({}, context), parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context),
                        })];
                    case 1:
                        response = _b.sent();
                        if (!(Object.keys(response).length === 0 && insideButtonModal)) return [3 /*break*/, 2];
                        onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed(id);
                        return [3 /*break*/, 7];
                    case 2:
                        if (!(response.type &&
                            response.type === "ir.actions.act_window_close")) return [3 /*break*/, 3];
                        onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed(id);
                        return [3 /*break*/, 7];
                    case 3:
                        if (!(response.type && response.type === "ir.actions.report.xml")) return [3 /*break*/, 5];
                        return [4 /*yield*/, executeReportAction(response, context)];
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
    function executeReportAction(response, context) {
        return __awaiter(this, void 0, void 0, function () {
            var newReportId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().createReport({
                            model: response.model,
                            name: response.report_name,
                            contextReport: response.datas.context,
                            ids: response.datas.ids[0],
                            context: __assign(__assign(__assign({}, context), parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context),
                        })];
                    case 1:
                        newReportId = _a.sent();
                        onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed(id);
                        setReportGenerating(true);
                        reportInProgressInterval.current = setInterval(function () {
                            evaluateReportStatus(newReportId);
                        }, 1000);
                        return [2 /*return*/];
                }
            });
        });
    }
    function evaluateReportStatus(id) {
        return __awaiter(this, void 0, void 0, function () {
            var reportState, fileType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getReport({
                            id: id,
                        })];
                    case 1:
                        reportState = _a.sent();
                        if (!reportState.state) return [3 /*break*/, 3];
                        clearInterval(reportInProgressInterval.current);
                        setReportGenerating(false);
                        return [4 /*yield*/, filesHelper_1.getMimeType(reportState.result)];
                    case 2:
                        fileType = _a.sent();
                        filesHelper_1.openBase64InNewTab(reportState.result, fileType.mime);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
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
                            payload: id,
                        })];
                    case 1:
                        response = _b.sent();
                        if (!(response.type && response.type === "ir.actions.act_window_close")) return [3 /*break*/, 2];
                        onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed(id);
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
            var actionData, actionWindowData, viewData, form, parsedDomain;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            model: "ir.actions.actions",
                            ids: [parseInt(action)],
                        })];
                    case 1:
                        actionData = (_b.sent())[0];
                        if (!(actionData.type === "ir.actions.act_window")) return [3 /*break*/, 4];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                                model: "ir.actions.act_window",
                                ids: [parseInt(action)],
                            })];
                    case 2:
                        actionWindowData = (_b.sent())[0];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getViewsForAction({
                                action: actionData.type + "," + actionData.id,
                                context: __assign(__assign(__assign({}, context), parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context),
                            })];
                    case 3:
                        viewData = _b.sent();
                        form = viewData.views.get("form");
                        parsedDomain = ooui_1.parseDomain({
                            domainValue: actionWindowData.domain,
                            values: {
                                active_id: id,
                            },
                            fields: {},
                        });
                        setActionDomainModal(parsedDomain);
                        setButtonActionModalModel(viewData.model);
                        setButtonActionModalArch(form.arch);
                        setButtonActionModalFields(form.fields);
                        setButtonContext(context);
                        setButtonActionModalVisible(true);
                        return [3 /*break*/, 6];
                    case 4:
                        if (!(actionData.type === "ir.actions.report.xml")) return [3 /*break*/, 6];
                        return [4 /*yield*/, executeReportAction(actionData, context)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    function executeButtonAction(_a) {
        var type = _a.type, action = _a.action, context = _a.context;
        return __awaiter(this, void 0, void 0, function () {
            var err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // If the type of the button it's a cancel, we just close our form
                        if (type === "cancel") {
                            clearInterval(reportInProgressInterval.current);
                            onCancel === null || onCancel === void 0 ? void 0 : onCancel();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, checkIfFormHasErrors()];
                    case 1:
                        // We check for required fields
                        if (_b.sent()) {
                            FormErrorsDialog_1.default();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, submitForm()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 10, , 11]);
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
                        err_3 = _b.sent();
                        ActionErrorDialog_1.default(err_3);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    }
    var content = function () {
        if (!formOoui) {
            return react_1.default.createElement(antd_1.Spin, null);
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(FormContext_1.default, { activeId: id, activeModel: model, parentId: parentId, parentModel: parentModel, setFieldValue: setFieldValue, getFieldValue: getFieldValue, executeButtonAction: executeButtonAction },
                react_1.default.createElement(antd_1.Form, { form: antForm, onFieldsChange: debouncedCheckFieldsChanges, component: false }, formOoui && (react_1.default.createElement(Container_1.default, { container: formOoui.container, responsiveBehaviour: responsiveBehaviour }))))));
    };
    var footer = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(antd_1.Divider, null),
            react_1.default.createElement(antd_1.Row, { justify: "end" },
                react_1.default.createElement(antd_1.Space, null,
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.CloseOutlined, null), disabled: isSubmitting || loading, onClick: cancelUnsavedChanges }, "Cancel"),
                    react_1.default.createElement(antd_1.Button, { disabled: isSubmitting || loading || readOnly, loading: isSubmitting, icon: react_1.default.createElement(icons_1.CheckOutlined, null), onClick: submitForm }, "OK")))));
    };
    if (!visible) {
        return react_1.default.createElement("div", { ref: containerRef });
    }
    return (react_1.default.createElement("div", { ref: containerRef, className: "pb-2" },
        error && (react_1.default.createElement(antd_1.Alert, { className: "mt-10 mb-20", message: JSON.stringify(error), type: "error", banner: true })),
        loading ? react_1.default.createElement(antd_1.Spin, null) : content(),
        showFooter && footer(),
        react_1.default.createElement(index_1.FormModal, { buttonModal: true, noReuse: true, parentContext: __assign(__assign(__assign({}, buttonContext), parentContext), formOoui === null || formOoui === void 0 ? void 0 : formOoui.context), model: buttonActionModalModel, arch: buttonActionModalArch, fields: buttonActionModalFields, visible: buttonActionModalVisible, onSubmitSucceed: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            setButtonActionModalVisible(false);
                            setButtonContext({});
                            return [4 /*yield*/, fetchValues()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, onCancel: function () {
                setButtonActionModalVisible(false);
                setButtonContext({});
            }, showFooter: false, actionDomain: actionDomainModal }),
        react_1.default.createElement(antd_1.Modal, { title: "Generating report...", visible: reportGenerating, footer: null, closable: false, centered: true },
            react_1.default.createElement(antd_1.Spin, null))));
}
exports.default = react_1.forwardRef(Form);
//# sourceMappingURL=Form.js.map