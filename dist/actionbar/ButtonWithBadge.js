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
var react_1 = __importDefault(require("react"));
var ButtonWithTooltip_1 = __importDefault(require("@/common/ButtonWithTooltip"));
function ButtonWithBadge(props) {
    var _a = props.badgeNumber, badgeNumber = _a === void 0 ? 0 : _a, restProps = __rest(props, ["badgeNumber"]);
    return (react_1.default.createElement("div", { style: { position: "relative" } },
        badgeNumber > 0 && (react_1.default.createElement("div", { style: { position: "absolute", left: -10, top: -10, zIndex: 2 } },
            react_1.default.createElement("span", { style: {
                    display: "inline-block",
                    minWidth: "22px",
                    padding: "2px",
                    borderRadius: "50%",
                    fontSize: "12px",
                    textAlign: "center",
                    background: "#1890FF",
                    color: "#fefefe",
                } }, badgeNumber))),
        react_1.default.createElement(ButtonWithTooltip_1.default, __assign({}, restProps, { style: { width: 46, zIndex: 0 } }))));
}
exports.default = ButtonWithBadge;
//# sourceMappingURL=ButtonWithBadge.js.map