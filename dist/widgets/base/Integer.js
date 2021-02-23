"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integer = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var Integer = function (props) {
    var ooui = props.ooui, layout = props.layout;
    var id = ooui.id, readOnly = ooui.readOnly;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui, layout: layout },
        react_1.default.createElement(antd_1.InputNumber, { id: id, className: "w-full", disabled: readOnly, formatter: function (value) {
                return ("" + value).replace(/[^0-9]+/g, "");
            }, defaultValue: 0 })));
};
exports.Integer = Integer;
//# sourceMappingURL=Integer.js.map