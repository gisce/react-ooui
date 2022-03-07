"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var icons_1 = require("@ant-design/icons");
var LocaleContext_1 = require("@/context/LocaleContext");
var ButtonWithTooltip_1 = __importDefault(require("@/common/ButtonWithTooltip"));
function ButtonWithBadge(props) {
    var onClick = props.onClick, _a = props.disabled, disabled = _a === void 0 ? false : _a, _b = props.badgeNumber, badgeNumber = _b === void 0 ? 0 : _b;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
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
        react_1.default.createElement(ButtonWithTooltip_1.default, { tooltip: t("advanced_search"), icon: react_1.default.createElement(icons_1.FilterOutlined, null), onClick: onClick, disabled: disabled, style: { width: 46, zIndex: 0 } })));
}
exports.default = ButtonWithBadge;
//# sourceMappingURL=ButtonWithBadge.js.map