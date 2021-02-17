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
const react_1 = __importStar(require("react"));
const ooui_1 = require("ooui");
const WidgetFactory_1 = require("@/widgets/WidgetFactory");
const antd_1 = require("antd");
const filteredValues = (values, fields) => {
    if (!fields) {
        return values;
    }
    const filteredValues = {};
    Object.keys(values).forEach((key) => {
        if (values[key] !== false ||
            (fields[key] && fields[key].type === "boolean")) {
            filteredValues[key] = values[key];
        }
    });
    return filteredValues;
};
const processInitialValues = (values, fields) => {
    const filterBooleans = filteredValues(values, fields);
    return filterBooleans;
};
function Form(props) {
    const { arch, fields, initialValues, antForm } = props;
    const [form, setForm] = react_1.useState();
    const getForm = () => {
        return form.container.rows.map((item, i) => {
            return item.map((widget, j) => {
                return WidgetFactory_1.createReactWidget(widget, `${i}-${j}`);
            });
        });
    };
    react_1.useEffect(() => {
        const newForm = new ooui_1.Form(fields);
        newForm.parse(arch);
        setForm(newForm);
    }, [arch, fields]);
    return (react_1.default.createElement(antd_1.Form, { form: antForm, initialValues: processInitialValues(initialValues, fields) }, form && getForm()));
}
exports.default = Form;
//# sourceMappingURL=Form.js.map