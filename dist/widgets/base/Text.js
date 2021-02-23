"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var TextArea = antd_1.Input.TextArea;
var Text = function (props) {
    var ooui = props.ooui;
    var readOnly = ooui.readOnly;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui },
        react_1.default.createElement(TextArea, { disabled: readOnly, rows: 4 })));
};
exports.default = Text;
//# sourceMappingURL=Text.js.map