"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormModal = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Form_1 = __importDefault(require("@/widgets/views/Form"));
var FormModal = function (props) {
    var visible = props.visible, onCancel = props.onCancel, onSubmitSuceed = props.onSubmitSuceed, id = props.id, model = props.model, _a = props.title, title = _a === void 0 ? id ? "Detail" : "New" : _a;
    return (react_1.default.createElement(antd_1.Modal, { title: title, centered: true, width: 1000, visible: visible, closable: false, onCancel: onCancel, footer: null }, visible ? (react_1.default.createElement(Form_1.default, { id: id, model: model, onCancel: onCancel, onSubmitSuceed: function (updatedObject) {
            onSubmitSuceed && onSubmitSuceed(updatedObject);
        } })) : null));
};
exports.FormModal = FormModal;
//# sourceMappingURL=FormModal.js.map