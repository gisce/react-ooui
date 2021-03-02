"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModal = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var CreateModal_1 = require("./CreateModal");
var SearchModal = function (props) {
    var visible = props.visible, onCloseModal = props.onCloseModal, onSelectValue = props.onSelectValue;
    var _a = react_1.useState(false), showCreateModal = _a[0], setShowCreateModal = _a[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Modal, { title: "Search", centered: true, width: 1000, visible: visible && !showCreateModal, closable: true, onCancel: onCloseModal, footer: null },
            react_1.default.createElement(antd_1.Button, { onClick: function () {
                    var random = Math.floor(Math.random() * 100000 + 1);
                    onSelectValue([random, "Test value " + random.toString()]);
                } }, "select value"),
            react_1.default.createElement(antd_1.Button, { onClick: function () {
                    setShowCreateModal(true);
                } }, "new item"),
            react_1.default.createElement(antd_1.Button, { onClick: onCloseModal }, "close")),
        react_1.default.createElement(CreateModal_1.CreateModal, { visible: showCreateModal, onSelectValue: function (value) {
                setShowCreateModal(false);
                onCloseModal();
                onSelectValue(value);
            }, onCloseModal: function () {
                setShowCreateModal(false);
                onCloseModal();
            } })));
};
exports.SearchModal = SearchModal;
//# sourceMappingURL=SearchModal.js.map