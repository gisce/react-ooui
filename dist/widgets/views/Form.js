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
var GenericErrorDialog_1 = __importDefault(require("@/ui/GenericErrorDialog"));
var FormContext_1 = __importDefault(require("@/context/FormContext"));
var index_1 = require("@/index");
var WIDTH_BREAKPOINT = 1000;
function Form(props, ref) {
    var _this = this;
    var model = props.model, id = props.id, onCancel = props.onCancel, onSubmitSucceed = props.onSubmitSucceed, _a = props.showFooter, showFooter = _a === void 0 ? false : _a, _b = props.getDataFromAction, getDataFromAction = _b === void 0 ? false : _b, onFieldsChange = props.onFieldsChange, onSubmitError = props.onSubmitError, _c = props.readOnly, readOnly = _c === void 0 ? false : _c, _d = props.mustClearAfterSave, mustClearAfterSave = _d === void 0 ? false : _d, _e = props.submitMode, submitMode = _e === void 0 ? "api" : _e, valuesProps = props.values, archProps = props.arch, fieldsProps = props.fields, postSaveAction = props.postSaveAction, _f = props.insideButtonModal, insideButtonModal = _f === void 0 ? false : _f;
    var _g = react_1.useState(false), isSubmitting = _g[0], setIsSubmitting = _g[1];
    var _h = react_1.useState(), error = _h[0], setError = _h[1];
    var _j = react_1.useState(false), loading = _j[0], setLoading = _j[1];
    var _k = react_1.useState(), formOoui = _k[0], setFormOoui = _k[1];
    var antForm = antd_1.Form.useForm()[0];
    var _l = react_1.useState(), arch = _l[0], setArch = _l[1];
    var _m = react_1.useState(), fields = _m[0], setFields = _m[1];
    var mustCallSucceedAfterSubmit = react_1.useRef(true);
    var _o = react_1.useState(false), buttonActionModalVisible = _o[0], setButtonActionModalVisible = _o[1];
    var _p = react_1.useState(), buttonActionModalArch = _p[0], setButtonActionModalArch = _p[1];
    var _q = react_1.useState(), buttonActionModalModel = _q[0], setButtonActionModalModel = _q[1];
    var _r = react_1.useState(), buttonActionModalFields = _r[0], setButtonActionModalFields = _r[1];
    var _s = react_cool_dimensions_1.default({
        breakpoints: { XS: 0, SM: 320, MD: 480, LG: 1000 },
        updateOnBreakpointChange: true,
    }), width = _s.width, containerRef = _s.ref;
    var responsiveBehaviour = width < WIDTH_BREAKPOINT;
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
                    case 2: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                            model: model,
                            action: "default_get",
                            payload: Object.keys(fields),
                        })];
                    case 3:
                        values = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, values];
                }
            });
        });
    };
    var formHasChanges = function () {
        return Object.keys(formHelper_1.getTouchedValues(antForm, fields)).length !== 0;
    };
    var submitApi = function () { return __awaiter(_this, void 0, void 0, function () {
        var touchedValues, objectId, newId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    touchedValues = formHelper_1.getTouchedValues(antForm, fields);
                    objectId = id;
                    if (!id) return [3 /*break*/, 2];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().update({
                            model: model,
                            id: id,
                            values: touchedValues,
                            fields: fields,
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().create({
                        model: model,
                        values: touchedValues,
                        fields: fields,
                    })];
                case 3:
                    newId = _a.sent();
                    objectId = newId;
                    _a.label = 4;
                case 4:
                    if (!postSaveAction) return [3 /*break*/, 6];
                    return [4 /*yield*/, postSaveAction(objectId)];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    if (mustCallSucceedAfterSubmit.current) {
                        onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed(objectId);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var submitValues = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (mustCallSucceedAfterSubmit.current) {
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
                        assignNewValuesToForm({ values: {}, fields: fields });
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
    var parseForm = function (_a) {
        var fields = _a.fields, arch = _a.arch, values = _a.values;
        var ooui = new ooui_1.Form(fields);
        // TODO: Here we must inject `values` to the ooui parser in order to evaluate arch+values and get the new form container
        ooui.parse(arch, { readOnly: readOnly, values: values });
        setFormOoui(ooui);
    };
    var debouncedParseForm = debounce_1.default(parseForm, 300);
    var checkFieldsChanges = function (changedFields) {
        if (formHasChanges()) {
            var values = antForm.getFieldsValue(true);
            onFieldsChange === null || onFieldsChange === void 0 ? void 0 : onFieldsChange(values);
            // We check if there are any field of type text, email, url or char inside the changed values
            // in order to debounce the call
            if (formHelper_1.checkFieldsType({
                changedFields: changedFields.map(function (i) { return i.name; }),
                fields: fields,
                types: ["text", "email", "url", "char"],
            })) {
                debouncedParseForm({ arch: arch, fields: fields, values: values });
            }
            else {
                parseForm({ arch: arch, fields: fields, values: values });
            }
        }
    };
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
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                            model: model,
                            action: action,
                            payload: [id],
                        })];
                    case 1:
                        _b.sent();
                        if (!insideButtonModal) return [3 /*break*/, 2];
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
    function runWorkflowButton(_a) {
        var action = _a.action, context = _a.context;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().executeWorkflow({
                            model: model,
                            action: action,
                            payload: id,
                        })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, fetchValues()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function runActionButton(_a) {
        var action = _a.action, context = _a.context;
        return __awaiter(this, void 0, void 0, function () {
            var actionData, viewData, form;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            model: "ir.actions.actions",
                            ids: [parseInt(action)],
                        })];
                    case 1:
                        actionData = (_b.sent())[0];
                        if (!(actionData.type === "ir.actions.act_window")) return [3 /*break*/, 3];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getViewsForAction({
                                action: actionData.type + "," + actionData.id,
                                context: context,
                            })];
                    case 2:
                        viewData = _b.sent();
                        form = viewData.views.get("form");
                        setButtonActionModalModel(viewData.model);
                        setButtonActionModalArch(form.arch);
                        setButtonActionModalFields(form.fields);
                        setButtonActionModalVisible(true);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
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
                        if (!!insideButtonModal) return [3 /*break*/, 3];
                        // We save the form without calling the submitSucceed callback in the end
                        mustCallSucceedAfterSubmit.current = false;
                        return [4 /*yield*/, submitForm()];
                    case 2:
                        _b.sent();
                        mustCallSucceedAfterSubmit.current = true;
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
                        return [4 /*yield*/, runWorkflowButton({ action: action, context: context })];
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
                        GenericErrorDialog_1.default(err_3);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/];
                }
            });
        });
    }
    var content = function () {
        if (!formOoui) {
            return null;
        }
        return (react_1.default.createElement(FormContext_1.default, { parentId: id, parentModel: model, setFieldValue: setFieldValue, getFieldValue: getFieldValue, executeButtonAction: executeButtonAction },
            react_1.default.createElement(antd_1.Form, { form: antForm, onFieldsChange: checkFieldsChanges, component: false }, formOoui && (react_1.default.createElement(Container_1.default, { container: formOoui.container, responsiveBehaviour: responsiveBehaviour })))));
    };
    var footer = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(antd_1.Divider, null),
            react_1.default.createElement(antd_1.Row, { justify: "end" },
                react_1.default.createElement(antd_1.Space, null,
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.CloseOutlined, null), disabled: isSubmitting || loading, onClick: cancelUnsavedChanges }, "Cancel"),
                    react_1.default.createElement(antd_1.Button, { disabled: isSubmitting || loading || readOnly, loading: isSubmitting, icon: react_1.default.createElement(icons_1.CheckOutlined, null), onClick: submitForm }, "OK")))));
    };
    return (react_1.default.createElement("div", { ref: containerRef, className: "pb-2" },
        error && react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: error, type: "error", banner: true }),
        loading ? react_1.default.createElement(antd_1.Spin, null) : content(),
        showFooter && footer(),
        react_1.default.createElement(index_1.FormModal, { buttonModal: true, noReuse: true, id: id, model: buttonActionModalModel, arch: buttonActionModalArch, fields: buttonActionModalFields, visible: buttonActionModalVisible, onSubmitSucceed: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            setButtonActionModalVisible(false);
                            return [4 /*yield*/, fetchValues()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); }, onCancel: function () {
                setButtonActionModalVisible(false);
            }, showFooter: false })));
}
exports.default = react_1.forwardRef(Form);
//# sourceMappingURL=Form.js.map