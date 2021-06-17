"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormContext = void 0;
var react_1 = __importDefault(require("react"));
exports.FormContext = react_1.default.createContext(null);
var FormProvider = function (props) {
    var children = props.children, parentId = props.parentId, parentModel = props.parentModel, setFieldValue = props.setFieldValue, getFieldValue = props.getFieldValue, executeButtonAction = props.executeButtonAction;
    return (react_1.default.createElement(exports.FormContext.Provider, { value: {
            parentId: parentId,
            parentModel: parentModel,
            setFieldValue: setFieldValue,
            getFieldValue: getFieldValue,
            executeButtonAction: executeButtonAction,
        } }, children));
};
exports.default = FormProvider;
//# sourceMappingURL=FormContext.js.map