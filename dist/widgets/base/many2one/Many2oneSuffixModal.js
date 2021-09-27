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
exports.Many2oneSuffixModal = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var LocaleContext_1 = require("@/context/LocaleContext");
var Many2oneSuffixModal = function (props) {
    var visible = props.visible, onCancel = props.onCancel, _a = props.items, items = _a === void 0 ? [] : _a, onItemClicked = props.onItemClicked;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    return (react_1.default.createElement(antd_1.Modal, { title: t("selectAction"), centered: true, visible: visible, footer: null, destroyOnClose: true, onCancel: onCancel },
        react_1.default.createElement(antd_1.Space, { direction: "vertical", className: "w-full" }, items.map(function (item) {
            return (react_1.default.createElement(antd_1.Button, { className: "w-full", onClick: function () {
                    onItemClicked(item);
                } }, item.name));
        }))));
};
exports.Many2oneSuffixModal = Many2oneSuffixModal;
//# sourceMappingURL=Many2oneSuffixModal.js.map