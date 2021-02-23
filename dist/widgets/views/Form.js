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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ooui_1 = require("ooui");
var WidgetFactory_1 = require("@/widgets/WidgetFactory");
var antd_1 = require("antd");
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
    var arch = props.arch, fields = props.fields, initialValues = props.initialValues, antForm = props.antForm;
    var _a = react_1.useState(), form = _a[0], setForm = _a[1];
    var getForm = function () {
        return form.container.rows.map(function (item, i) {
            return item.map(function (widget, j) {
                return WidgetFactory_1.createReactWidget({
                    ooui: widget,
                    key: i.toString() + "-" + j.toString(),
                });
            });
        });
    };
    react_1.useEffect(function () {
        var newForm = new ooui_1.Form(fields);
        newForm.parse(arch);
        setForm(newForm);
    }, [arch, fields]);
    return (react_1.default.createElement(antd_1.Form, { form: antForm, initialValues: processInitialValues(initialValues, fields) }, form && getForm()));
}
exports.default = Form;
//# sourceMappingURL=Form.js.map