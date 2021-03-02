"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateModal = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var CreateModal = function (props) {
    var visible = props.visible, onCloseModal = props.onCloseModal, onSelectValue = props.onSelectValue;
    return (react_1.default.createElement(antd_1.Modal, { title: "Create", centered: true, width: 1000, visible: visible, closable: true, onCancel: onCloseModal, footer: null },
        react_1.default.createElement(antd_1.Button, { onClick: function () {
                var random = Math.floor((Math.random() * 100000) + 1);
                onSelectValue([random, "New created item " + random.toString()]);
            } }, "save & select value"),
        react_1.default.createElement(antd_1.Button, { onClick: onCloseModal }, "close")));
};
exports.CreateModal = CreateModal;
//# sourceMappingURL=CreateModal.js.map