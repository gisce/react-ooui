"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const FormItem_1 = __importDefault(require("@/common/FormItem"));
const { TextArea } = antd_1.Input;
const Text = (props) => {
    const { ooui } = props;
    const { id, label, tooltip, nolabel, readOnly } = ooui;
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label, tooltip: tooltip, nolabel: nolabel },
        react_1.default.createElement(TextArea, { disabled: readOnly, rows: 4 })));
};
exports.default = Text;
//# sourceMappingURL=Text.js.map