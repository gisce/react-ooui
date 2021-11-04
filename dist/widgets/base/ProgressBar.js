"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var styled_components_1 = __importDefault(require("styled-components"));
var ProgressBar = function (props) {
    return (react_1.default.createElement(Field_1.default, __assign({}, props),
        react_1.default.createElement(exports.ProgressBarInput, null)));
};
exports.ProgressBar = ProgressBar;
var ProgressBarInput = function (_a) {
    var value = _a.value;
    var textValue = (value || 0).toLocaleString("en-US", {
        minimumIntegerDigits: 1,
        maximumFractionDigits: 4,
        useGrouping: false,
    }) + "%";
    return (react_1.default.createElement("div", { style: { flex: 1, display: "flex", alignItems: "center" } },
        react_1.default.createElement(StyledProgress, { percent: value }),
        react_1.default.createElement("div", { style: { flexGrow: 1, paddingLeft: 10 } }, textValue)));
};
exports.ProgressBarInput = ProgressBarInput;
var StyledProgress = styled_components_1.default(antd_1.Progress)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .ant-progress-outer {\n    margin-right: 0px;\n    padding-right: 0px;\n  }\n  .ant-progress-text {\n    display: none;\n  }\n"], ["\n  .ant-progress-outer {\n    margin-right: 0px;\n    padding-right: 0px;\n  }\n  .ant-progress-text {\n    display: none;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=ProgressBar.js.map