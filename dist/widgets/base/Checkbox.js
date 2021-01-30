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
exports.Checkbox = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Checkbox = function (_a) {
    var id = _a.id, label = _a.label, description = _a.description, checked = _a.checked, activated = _a.activated, onChange = _a.onChange, props = __rest(_a, ["id", "label", "description", "checked", "activated", "onChange"]);
    return (react_1.default.createElement(antd_1.Form.Item, { label: label },
        react_1.default.createElement(antd_1.Checkbox, __assign({}, props, { id: id, checked: checked, disabled: !activated, onChange: onChange }), description)));
};
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map