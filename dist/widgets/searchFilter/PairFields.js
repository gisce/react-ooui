"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PairFields = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Float_1 = require("../base/Float");
var Integer_1 = require("../base/Integer");
function PairFields(props) {
    var id = props.id, label = props.label, defaultValue = props.defaultValue, type = props.type;
    var Widget = type === "float" ? Float_1.Float : Integer_1.Integer;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        label,
        react_1.default.createElement(antd_1.Row, { align: "bottom", className: "mt-0" },
            react_1.default.createElement(antd_1.Col, null,
                react_1.default.createElement(Widget, { className: "w-24", id: id + "_from", defaultValue: defaultValue })),
            react_1.default.createElement(antd_1.Col, { className: "pb-1" },
                react_1.default.createElement("span", { className: "pl-2 pr-2 h-full" }, " - ")),
            react_1.default.createElement(antd_1.Col, null,
                react_1.default.createElement(Widget, { className: "w-24", id: id + "_to", defaultValue: defaultValue })))));
}
exports.PairFields = PairFields;
//# sourceMappingURL=PairFields.js.map