"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Many2oneSuffixModal = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Many2oneSuffixModal = function (props) {
    var visible = props.visible, onCancel = props.onCancel, _a = props.items, items = _a === void 0 ? [] : _a, onItemClicked = props.onItemClicked;
    return (react_1.default.createElement(antd_1.Modal, { title: "Seleccioneu la vostra acció", centered: true, visible: visible, footer: null, destroyOnClose: true, onCancel: onCancel },
        react_1.default.createElement(antd_1.Space, { direction: "vertical", className: "w-full" }, items.map(function (item) {
            return (react_1.default.createElement(antd_1.Button, { className: "w-full", onClick: function () {
                    onItemClicked(item);
                } }, item.name));
        }))));
};
exports.Many2oneSuffixModal = Many2oneSuffixModal;
//# sourceMappingURL=Many2oneSuffixModal.js.map