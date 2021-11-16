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
exports.GoToResourceModal = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var LocaleContext_1 = require("@/context/LocaleContext");
var GoToResourceModal = function (props) {
    var visible = props.visible, onIdSubmitted = props.onIdSubmitted, onCancel = props.onCancel;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    function handleSubmit(values) {
        onIdSubmitted(values.id);
    }
    return (react_1.default.createElement(antd_1.Modal, { title: t("goToResourceId"), centered: true, visible: visible, footer: null, destroyOnClose: true, onCancel: onCancel },
        react_1.default.createElement(antd_1.Form, { layout: "vertical", onFinish: handleSubmit, autoComplete: "off" },
            react_1.default.createElement(antd_1.Form.Item, { name: "id", label: t("searchId"), rules: [
                    {
                        required: true,
                        type: "number",
                    },
                ] },
                react_1.default.createElement(antd_1.InputNumber, { style: { width: "100%" }, autoFocus: true })),
            react_1.default.createElement(antd_1.Row, { align: "middle", justify: "end" },
                react_1.default.createElement(antd_1.Col, null,
                    react_1.default.createElement(antd_1.Space, null,
                        react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.CloseOutlined, null), htmlType: "button", onClick: onCancel }, t("cancel")),
                        react_1.default.createElement(antd_1.Button, { style: { marginLeft: 15 }, icon: react_1.default.createElement(icons_1.CheckOutlined, null), htmlType: "submit" }, t("ok"))))))));
};
exports.GoToResourceModal = GoToResourceModal;
//# sourceMappingURL=GoToResourceModal.js.map