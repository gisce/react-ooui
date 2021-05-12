"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DatePicker_1 = __importDefault(require("@/common/DatePicker"));
var react_1 = __importDefault(require("react"));
var DateTime = function (props) {
    var ooui = props.ooui;
    return react_1.default.createElement(DatePicker_1.default, { ooui: ooui, showTime: true });
};
exports.default = DateTime;
//# sourceMappingURL=DateTime.js.map