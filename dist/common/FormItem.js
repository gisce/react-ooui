"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelWithTooltip = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
function FormItem(_a) {
    var name = _a.name, label = _a.label, children = _a.children, _b = _a.layout, layout = _b === void 0 ? "horizontal" : _b, tooltip = _a.tooltip, _c = _a.nolabel, nolabel = _c === void 0 ? false : _c, valuePropName = _a.valuePropName;
    var labelText = label && label.length > 1 ? label + " :" : " ";
    var formItem = function () { return (react_1.default.createElement(antd_1.Form.Item, { className: "mb-0", name: name, valuePropName: valuePropName }, children)); };
    var horizontalMode = function () {
        return (react_1.default.createElement(antd_1.Row, { align: "middle", className: "pb-1 pt-1" },
            !nolabel ? (react_1.default.createElement(antd_1.Col, { className: "ml-2", flex: "7rem" },
                react_1.default.createElement("div", { className: "flex flex-col items-end" }, labelWithTooltip(nolabel ? "" : labelText, tooltip)))) : null,
            react_1.default.createElement(antd_1.Col, { flex: "auto" }, formItem())));
    };
    var verticalMode = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            labelWithTooltip(nolabel ? "" : labelText, tooltip),
            formItem()));
    };
    return layout === "horizontal" ? horizontalMode() : verticalMode();
}
exports.default = FormItem;
var labelWithTooltip = function (label, tooltip) {
    return (react_1.default.createElement("div", { className: "flex flex-row items-center pb-1" },
        tooltip && (react_1.default.createElement(antd_1.Tooltip, { title: tooltip },
            react_1.default.createElement(icons_1.QuestionCircleOutlined, { className: "text-xs text-blue-400 pr-1" }))),
        react_1.default.createElement("span", { className: "text-right pr-2" }, label)));
};
exports.labelWithTooltip = labelWithTooltip;
//# sourceMappingURL=FormItem.js.map