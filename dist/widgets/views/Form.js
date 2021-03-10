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
var Container_1 = __importDefault(require("../containers/Container"));
var react_cool_dimensions_1 = __importDefault(require("react-cool-dimensions"));
var icons_1 = require("@ant-design/icons");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var confirm = antd_1.Modal.confirm;
var WIDTH_BREAKPOINT = 1000;
var filteredValues = function (values, fields) {
    if (!fields) {
        return values;
    }
    var filteredValues = {};
    Object.keys(values).forEach(function (key) {
        if (values[key] !== false ||
            (fields[key] && fields[key].type === "boolean")) {
            filteredValues[key] = values[key];
        }
    });
    return filteredValues;
};
var processInitialValues = function (values, fields) {
    var filterBooleans = filteredValues(values, fields);
    return filterBooleans;
};
function Form(props) {
    var _this = this;
    var model = props.model, id = props.id, onCancel = props.onCancel, onSubmitSucceed = props.onSubmitSucceed;
    var _a = react_1.useState(false), isSubmitting = _a[0], setIsSubmitting = _a[1];
    var _b = react_1.useState(), error = _b[0], setError = _b[1];
    var _c = react_1.useState(), formView = _c[0], setFormView = _c[1];
    var _d = react_1.useState({}), values = _d[0], setValues = _d[1];
    var _e = react_1.useState(false), loading = _e[0], setLoading = _e[1];
    var _f = react_1.useState(), form = _f[0], setForm = _f[1];
    var antForm = antd_1.Form.useForm()[0];
    var _g = react_cool_dimensions_1.default({
        breakpoints: { XS: 0, SM: 320, MD: 480, LG: 1000 },
        updateOnBreakpointChange: true,
    }), width = _g.width, ref = _g.ref;
    var responsiveBehaviour = width < WIDTH_BREAKPOINT;
    var getTouchedValues = function () {
        var values = antForm.getFieldsValue(true);
        var touchedValues = {};
        Object.keys(values).map(function (key) {
            if (antForm.isFieldTouched(key)) {
                touchedValues[key] = values[key];
            }
        });
        return touchedValues;
    };
    var showConfirm = function () {
        confirm({
            title: "There are unsaved changes",
            icon: react_1.default.createElement(icons_1.ExclamationCircleOutlined, null),
            centered: true,
            content: "Do you really want to close this window without saving?",
            okText: "Close without saving",
            onOk: function () {
                antForm.resetFields();
                if (onCancel)
                    onCancel();
            },
        });
    };
    var cancel = function () {
        if (Object.keys(getTouchedValues()).length > 0) {
            showConfirm();
            return;
        }
        antForm.resetFields();
        if (onCancel)
            onCancel();
    };
    var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
        var _formView, newForm, _values, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, 8, 9]);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView(model, "form")];
                case 2:
                    _formView = _a.sent();
                    setFormView(_formView);
                    antForm.resetFields();
                    newForm = new ooui_1.Form(_formView.fields);
                    newForm.parse(_formView.arch);
                    setForm(newForm);
                    _values = {};
                    if (!id) return [3 /*break*/, 4];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObject({
                            arch: _formView.arch,
                            model: model,
                            id: id,
                        })];
                case 3:
                    _values = _a.sent();
                    setValues(_values);
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                        model: model,
                        action: "default_get",
                        payload: Object.keys(_formView.fields),
                    })];
                case 5:
                    _values = _a.sent();
                    setValues(_values);
                    _a.label = 6;
                case 6: return [3 /*break*/, 9];
                case 7:
                    err_1 = _a.sent();
                    setError(err_1);
                    return [3 /*break*/, 9];
                case 8:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchData();
    }, [id, model]);
    var submitForm = function () { return __awaiter(_this, void 0, void 0, function () {
        var touchedValues, objectId, newId, value, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, 8, 9]);
                    touchedValues = getTouchedValues();
                    objectId = id;
                    if (!(Object.keys(touchedValues).length !== 0)) return [3 /*break*/, 5];
                    if (!id) return [3 /*break*/, 3];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().update({
                            model: model,
                            id: id,
                            values: touchedValues,
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().create({
                        model: model,
                        values: touchedValues,
                    })];
                case 4:
                    newId = _a.sent();
                    objectId = newId;
                    _a.label = 5;
                case 5: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                        action: "name_get",
                        payload: [objectId],
                        model: model,
                    })];
                case 6:
                    value = _a.sent();
                    if (onSubmitSucceed)
                        onSubmitSucceed(value[0]);
                    return [3 /*break*/, 9];
                case 7:
                    err_2 = _a.sent();
                    setError(err_2);
                    return [3 /*break*/, 9];
                case 8:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    var content = function () {
        if (!formView) {
            return null;
        }
        return (react_1.default.createElement(antd_1.Form, { form: antForm, initialValues: processInitialValues(values, formView.fields) }, form && (react_1.default.createElement(Container_1.default, { container: form.container, formWrapper: true, responsiveBehaviour: responsiveBehaviour }))));
    };
    var wrapper = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            error && (react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: error, type: "error", banner: true })),
            loading ? react_1.default.createElement(antd_1.Spin, null) : content()));
    };
    return (react_1.default.createElement("div", { ref: ref },
        wrapper(),
        react_1.default.createElement(antd_1.Divider, null),
        react_1.default.createElement(antd_1.Row, { justify: "end" },
            react_1.default.createElement(antd_1.Space, null,
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.CloseOutlined, null), disabled: isSubmitting, onClick: cancel }, "Cancel"),
                react_1.default.createElement(antd_1.Button, { loading: isSubmitting, icon: react_1.default.createElement(icons_1.CheckOutlined, null), onClick: submitForm }, "OK")))));
}
exports.default = Form;
//# sourceMappingURL=Form.js.map