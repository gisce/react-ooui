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
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Form_1 = __importDefault(require("@/widgets/views/Form"));
var useModalWidthDimensions_1 = __importDefault(require("@/hooks/useModalWidthDimensions"));
var FormModal = function (props) {
    var visible = props.visible, id = props.id, _a = props.title, title = _a === void 0 ? id ? "Detail" : "New" : _a, rest = __rest(props, ["visible", "id", "title"]);
    var modalWidth = useModalWidthDimensions_1.default().modalWidth;
    return (react_1.default.createElement(antd_1.Modal, { title: title, centered: true, width: modalWidth, visible: visible, closable: false, footer: null },
        react_1.default.createElement(Form_1.default, __assign({ id: id }, rest))));
};
exports.FormModal = FormModal;
//# sourceMappingURL=FormModal.js.map