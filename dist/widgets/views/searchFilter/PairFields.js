"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairFields = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Float_1 = require("@/widgets/base/Float");
var Integer_1 = require("@/widgets/base/Integer");
var ooui_1 = require("ooui");
var FormItem_1 = require("@/common/FormItem");
function PairFields(props) {
    var ooui = props.ooui;
    var id = ooui.id, label = ooui.label, tooltip = ooui.tooltip;
    ooui.label = "";
    ooui.tooltip = undefined;
    var getWidget = function (suffix) {
        return ooui instanceof ooui_1.Integer ? getInteger(suffix) : getFloat(suffix);
    };
    var getFloat = function (suffix) { return (react_1.default.createElement(Float_1.Float, { id: id + suffix, ooui: ooui, layout: "vertical" })); };
    var getInteger = function (suffix) { return (react_1.default.createElement(Integer_1.Integer, { id: id + suffix, ooui: ooui, layout: "vertical" })); };
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