"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormContext = void 0;
var react_1 = __importDefault(require("react"));
exports.FormContext = react_1.default.createContext(null);
var FormProvider = function (props) {
    var children = props.children, activeId = props.activeId, activeModel = props.activeModel, setFieldValue = props.setFieldValue, getFieldValue = props.getFieldValue, executeButtonAction = props.executeButtonAction, getContext = props.getContext, getValues = props.getValues, setOriginalValue = props.setOriginalValue, domain = props.domain, unsavedOne2ManyChilds = props.unsavedOne2ManyChilds, addOne2ManyChild = props.addOne2ManyChild, removeOne2ManyChild = props.removeOne2ManyChild, submitForm = props.submitForm, fetchValues = props.fetchValues;
    return (react_1.default.createElement(exports.FormContext.Provider, { value: {
            domain: domain,
            getValues: getValues,
            activeId: activeId,
            activeModel: activeModel,
            setFieldValue: setFieldValue,
            getFieldValue: getFieldValue,
            executeButtonAction: executeButtonAction,
            getContext: getContext,
            setOriginalValue: setOriginalValue,
            unsavedOne2ManyChilds: unsavedOne2ManyChilds,
            addOne2ManyChild: addOne2ManyChild,
            removeOne2ManyChild: removeOne2ManyChild,
            submitForm: submitForm,
            fetchValues: fetchValues,
        } }, children));
};
exports.default = FormProvider;
//# sourceMappingURL=FormContext.js.map