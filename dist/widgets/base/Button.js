"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const FormItem_1 = __importDefault(require("@/common/FormItem"));
const Button = (props) => {
    const { ooui } = props;
    const { id, label, activated } = ooui;
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: "", nolabel: true },
        react_1.default.createElement(antd_1.Button, { className: "w-full", disabled: !activated }, label)));
};
exports.Button = Button;
//# sourceMappingURL=Button.js.map