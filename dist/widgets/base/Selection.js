"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Selection = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var Option = antd_1.Select.Option;
var Selection = function (props) {
    var ooui = props.ooui, layout = props.layout;
    var selectionValues = ooui.selectionValues, readOnly = ooui.readOnly;
    var values = Array.from(selectionValues.entries());
    var options = values &&
        values.length &&
        values.map(function (entry) {
            var key = entry[0], value = entry[1];
            return (react_1.default.createElement(Option, { key: key, value: key }, value));
        });
    return (react_1.default.createElement(Field_1.default, { ooui: ooui, layout: layout },
        react_1.default.createElement(antd_1.Select, { disabled: readOnly }, options)));
};
exports.Selection = Selection;
//# sourceMappingURL=Selection.js.map