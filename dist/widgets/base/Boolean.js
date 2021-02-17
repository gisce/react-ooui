"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boolean = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const FormItem_1 = __importDefault(require("@/common/FormItem"));
const Boolean = (props) => {
    const { ooui } = props;
    const { id, label, tooltip, nolabel } = ooui;
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label, tooltip: tooltip, nolabel: nolabel, valuePropName: "checked" },
        react_1.default.createElement(antd_1.Checkbox, { disabled: ooui.readOnly, id: id })));
};
exports.Boolean = Boolean;
//# sourceMappingURL=Boolean.js.map