"use strict";
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
    var visible = props.visible, onCancel = props.onCancel, onSubmitSucceed = props.onSubmitSucceed, id = props.id, model = props.model, _a = props.title, title = _a === void 0 ? id ? "Detail" : "New" : _a, getDataFromAction = props.getDataFromAction, _b = props.readOnly, readOnly = _b === void 0 ? false : _b;
    var modalWidth = useModalWidthDimensions_1.default().modalWidth;
    return (react_1.default.createElement(antd_1.Modal, { title: title, centered: true, width: modalWidth, visible: visible, closable: false, footer: null },
        react_1.default.createElement(Form_1.default, { id: id, model: model, getDataFromAction: getDataFromAction, onCancel: onCancel, onSubmitSucceed: onSubmitSucceed, showFooter: true, readOnly: readOnly })));
};
exports.FormModal = FormModal;
//# sourceMappingURL=FormModal.js.map