"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var FormItem_1 = __importDefault(require("@/common/FormItem"));
var Button = function (props) {
    var ooui = props.ooui;
    var id = ooui.id, label = ooui.label, activated = ooui.activated;
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: "", nolabel: true },
        react_1.default.createElement(antd_1.Button, { className: "w-full", disabled: !activated }, label)));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map