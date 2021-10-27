"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormContext = void 0;
var react_1 = __importDefault(require("react"));
exports.FormContext = react_1.default.createContext(null);
var FormProvider = function (props) {
    var children = props.children, activeId = props.activeId, activeModel = props.activeModel, setFieldValue = props.setFieldValue, getFieldValue = props.getFieldValue, executeButtonAction = props.executeButtonAction, getContext = props.getContext, setOriginalValue = props.setOriginalValue, domain = props.domain;
    return (react_1.default.createElement(exports.FormContext.Provider, { value: {
            domain: domain,
            activeId: activeId,
            activeModel: activeModel,
            setFieldValue: setFieldValue,
            getFieldValue: getFieldValue,
            executeButtonAction: executeButtonAction,
            getContext: getContext,
            setOriginalValue: setOriginalValue,
        } }, children));
};
exports.default = FormProvider;
//# sourceMappingURL=FormContext.js.map