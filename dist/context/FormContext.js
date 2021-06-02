"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormContext = void 0;
var react_1 = __importDefault(require("react"));
exports.FormContext = react_1.default.createContext(null);
var FormProvider = function (_a) {
    var children = _a.children, parentId = _a.parentId, parentModel = _a.parentModel;
    return (react_1.default.createElement(exports.FormContext.Provider, { value: {
            parentId: parentId,
            parentModel: parentModel,
        } }, children));
};
exports.default = FormProvider;
//# sourceMappingURL=FormContext.js.map