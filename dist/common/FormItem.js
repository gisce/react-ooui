"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelWithTooltip = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
function FormItem({ name, label, children, layout = "horizontal", tooltip, nolabel = false, valuePropName, }) {
    const labelText = label && label.length > 1 ? label + " :" : " ";
    const formItem = () => (react_1.default.createElement(antd_1.Form.Item, { className: "mb-0", name: name, valuePropName: valuePropName }, children));
    const horizontalMode = () => {
        return (react_1.default.createElement(antd_1.Row, { align: "middle" },
            !nolabel ? (react_1.default.createElement(antd_1.Col, { className: "ml-2", flex: "7rem" },
                react_1.default.createElement("div", { className: "flex flex-col items-end" }, labelWithTooltip(nolabel ? "" : labelText, tooltip)))) : null,
            react_1.default.createElement(antd_1.Col, { flex: "auto" }, formItem())));
    };
    const verticalMode = () => {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            labelWithTooltip(nolabel ? "" : labelText, tooltip),
            formItem()));
    };
    return layout === "horizontal" ? horizontalMode() : verticalMode();
}
exports.default = FormItem;
const labelWithTooltip = (label, tooltip) => {
    return (react_1.default.createElement("div", { className: "flex flex-row items-center pb-1" },
        tooltip && (react_1.default.createElement(antd_1.Tooltip, { title: tooltip },
            react_1.default.createElement(icons_1.QuestionCircleOutlined, { className: "text-xs text-blue-400 pr-1" }))),
        react_1.default.createElement("span", { className: "text-right pr-2" }, label)));
};
exports.labelWithTooltip = labelWithTooltip;
//# sourceMappingURL=FormItem.js.map