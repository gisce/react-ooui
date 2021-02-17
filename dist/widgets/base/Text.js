"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var FormItem_1 = __importDefault(require("@/common/FormItem"));
var TextArea = antd_1.Input.TextArea;
var Text = function (props) {
    var ooui = props.ooui;
    var id = ooui.id, label = ooui.label, tooltip = ooui.tooltip, nolabel = ooui.nolabel, readOnly = ooui.readOnly;
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label, tooltip: tooltip, nolabel: nolabel },
        react_1.default.createElement(TextArea, { disabled: readOnly, rows: 4 })));
};
exports.default = Text;
//# sourceMappingURL=Text.js.map