"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var FormItem_1 = __importDefault(require("@/common/FormItem"));
var Option = antd_1.Select.Option;
var Selection = function (props) {
    var ooui = props.ooui, layout = props.layout;
    var id = ooui.id, label = ooui.label, selectionValues = ooui.selectionValues, tooltip = ooui.tooltip, nolabel = ooui.nolabel;
    var values = Array.from(selectionValues.entries());
    var options = values &&
        values.length &&
        values.map(function (entry) {
            var key = entry[0], value = entry[1];
            return (react_1.default.createElement(Option, { key: key, value: key }, value));
        });
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label, layout: layout, tooltip: tooltip, nolabel: nolabel },
        react_1.default.createElement(antd_1.Select, { disabled: ooui.readOnly }, options)));
};
exports.Selection = Selection;
//# sourceMappingURL=Selection.js.map