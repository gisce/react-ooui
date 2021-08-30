"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
var react_1 = __importDefault(require("react"));
var isURL_1 = __importDefault(require("validator/lib/isURL"));
var Field_1 = __importDefault(require("@/common/Field"));
var LinkInput_1 = require("./LinkInput");
var Url = function (props) {
    var ooui = props.ooui;
    var required = ooui.required;
    return (react_1.default.createElement(Field_1.default, __assign({ required: required }, props),
        react_1.default.createElement(LinkInput_1.LinkInput, { ooui: ooui, valueValidator: function (value) {
                if (!value) {
                    return false;
                }
                return isURL_1.default(value);
            } })));
};
exports.Url = Url;
//# sourceMappingURL=Url.js.map