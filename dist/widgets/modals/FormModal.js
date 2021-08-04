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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormModal = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var Form_1 = __importDefault(require("@/widgets/views/Form"));
var useModalWidthDimensions_1 = __importDefault(require("@/hooks/useModalWidthDimensions"));
var FormModalContext_1 = __importDefault(require("@/context/FormModalContext"));
var FormModal = function (props) {
    var visible = props.visible, id = props.id, title = props.title, _a = props.buttonModal, buttonModal = _a === void 0 ? false : _a, rest = __rest(props, ["visible", "id", "title", "buttonModal"]);
    var modalWidth = useModalWidthDimensions_1.default().modalWidth;
    var _b = react_1.useState(title), formTitle = _b[0], setFormTitle = _b[1];
    function onTitleChange(newTitle) {
        setFormTitle(newTitle);
    }
    return (react_1.default.createElement(FormModalContext_1.default, { setTitle: onTitleChange },
        react_1.default.createElement(antd_1.Modal, { title: formTitle, centered: true, width: modalWidth, visible: visible, closable: false, footer: null, destroyOnClose: true },
            react_1.default.createElement(Form_1.default
            // key={key}
            , __assign({ 
                // key={key}
                id: id, showFooter: true, insideButtonModal: buttonModal }, rest)))));
};
exports.FormModal = FormModal;
//# sourceMappingURL=FormModal.js.map