"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boolean = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var Boolean = function (props) {
    var ooui = props.ooui;
    var id = ooui.id, readOnly = ooui.readOnly;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui, valuePropName: "checked" },
        react_1.default.createElement("div", { className: "flex flex-row" },
            react_1.default.createElement(antd_1.Checkbox, { disabled: readOnly, id: id }))));
};
exports.Boolean = Boolean;
//# sourceMappingURL=Boolean.js.map