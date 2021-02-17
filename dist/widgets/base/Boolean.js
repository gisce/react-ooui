"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boolean = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var FormItem_1 = __importDefault(require("@/common/FormItem"));
var Boolean = function (props) {
    var ooui = props.ooui;
    var id = ooui.id, label = ooui.label, tooltip = ooui.tooltip, nolabel = ooui.nolabel;
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label, tooltip: tooltip, nolabel: nolabel, valuePropName: "checked" },
        react_1.default.createElement(antd_1.Checkbox, { disabled: ooui.readOnly, id: id })));
};
exports.Boolean = Boolean;
//# sourceMappingURL=Boolean.js.map