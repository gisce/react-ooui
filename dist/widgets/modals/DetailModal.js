"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailModal = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var DetailModal = function (props) {
    var visible = props.visible, onCloseModal = props.onCloseModal, onSelectValue = props.onSelectValue;
    return (react_1.default.createElement(antd_1.Modal, { title: "Detail", centered: true, width: 1000, visible: visible, closable: true, onCancel: onCloseModal, footer: null },
        react_1.default.createElement(antd_1.Button, { onClick: onCloseModal }, "cancel"),
        react_1.default.createElement(antd_1.Button, { onClick: function () {
                onSelectValue([1, "Updated value"]);
            } }, "ok")));
};
exports.DetailModal = DetailModal;
//# sourceMappingURL=DetailModal.js.map