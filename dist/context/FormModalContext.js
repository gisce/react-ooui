"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormModalContext = void 0;
var react_1 = __importDefault(require("react"));
exports.FormModalContext = react_1.default.createContext(null);
var FormModalProvider = function (props) {
    var children = props.children, setTitle = props.setTitle;
    return (react_1.default.createElement(exports.FormModalContext.Provider, { value: {
            setTitle: setTitle,
        } }, children));
};
exports.default = FormModalProvider;
//# sourceMappingURL=FormModalContext.js.map