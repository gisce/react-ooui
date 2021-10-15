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
exports.ProgressBarInput = exports.ProgressBar = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var ProgressBar = function (props) {
    return (react_1.default.createElement(Field_1.default, __assign({}, props),
        react_1.default.createElement(exports.ProgressBarInput, null)));
};
exports.ProgressBar = ProgressBar;
var ProgressBarInput = function (_a) {
    var value = _a.value;
    return react_1.default.createElement(antd_1.Progress, { percent: value, className: "pr-1" });
};
exports.ProgressBarInput = ProgressBarInput;
//# sourceMappingURL=ProgressBar.js.map