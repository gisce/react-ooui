"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairFields = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const Float_1 = require("@/widgets/base/Float");
const Integer_1 = require("@/widgets/base/Integer");
const ooui_1 = require("ooui");
const FormItem_1 = require("@/common/FormItem");
function PairFields(props) {
    const { ooui } = props;
    const { id, label, tooltip } = ooui;
    ooui.label = "";
    ooui.tooltip = undefined;
    const getWidget = (suffix) => {
        return ooui instanceof ooui_1.Integer ? getInteger(suffix) : getFloat(suffix);
    };
    const getFloat = (suffix) => (react_1.default.createElement(Float_1.Float, { id: id + suffix, ooui: ooui, layout: "vertical" }));
    const getInteger = (suffix) => (react_1.default.createElement(Integer_1.Integer, { id: id + suffix, ooui: ooui, layout: "vertical" }));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        FormItem_1.labelWithTooltip(label, tooltip),
        react_1.default.createElement(antd_1.Row, { align: "bottom", className: "mt-0" },
            react_1.default.createElement(antd_1.Col, null, getWidget("#from")),
            react_1.default.createElement(antd_1.Col, { className: "pb-1" },
                react_1.default.createElement("span", { className: "pl-2 pr-2 h-full" }, " - ")),
            react_1.default.createElement(antd_1.Col, null, getWidget("#to")))));
}
exports.PairFields = PairFields;
//# sourceMappingURL=PairFields.js.map