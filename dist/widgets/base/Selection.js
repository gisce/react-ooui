"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const FormItem_1 = __importDefault(require("@/common/FormItem"));
const { Option } = antd_1.Select;
const Selection = (props) => {
    const { ooui, layout } = props;
    const { id, label, selectionValues, tooltip, nolabel } = ooui;
    const values = Array.from(selectionValues.entries());
    const options = values &&
        values.length &&
        values.map((entry) => {
            const [key, value] = entry;
            return (react_1.default.createElement(Option, { key: key, value: key }, value));
        });
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label, layout: layout, tooltip: tooltip, nolabel: nolabel },
        react_1.default.createElement(antd_1.Select, { disabled: ooui.readOnly }, options)));
};
exports.Selection = Selection;
//# sourceMappingURL=Selection.js.map