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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Char = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var FormItem_1 = __importDefault(require("../../common/FormItem"));
var Char = function (_a) {
    var id = _a.id, label = _a.label, value = _a.value, placeholder = _a.placeholder, onChange = _a.onChange, onPressEnter = _a.onPressEnter, props = __rest(_a, ["id", "label", "value", "placeholder", "onChange", "onPressEnter"]);
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label },
        react_1.default.createElement(antd_1.Input, __assign({}, props, { id: id, value: value, placeholder: placeholder, onChange: onChange, onPressEnter: onPressEnter }), props.children)));
};
exports.Char = Char;
//# sourceMappingURL=Char.js.map