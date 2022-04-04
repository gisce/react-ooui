"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ButtonWithTooltip_1 = __importDefault(require("@/common/ButtonWithTooltip"));
var icons_1 = require("@ant-design/icons");
function ActionButton(props) {
    var onClick = props.onClick, _a = props.disabled, disabled = _a === void 0 ? false : _a, _b = props.loading, loading = _b === void 0 ? false : _b, tooltip = props.tooltip, icon = props.icon, label = props.label, _c = props.type, type = _c === void 0 ? "default" : _c;
    var finalIcon = loading ? react_1.default.createElement(icons_1.LoadingOutlined, null) : icon;
    return (react_1.default.createElement(ButtonWithTooltip_1.default, { type: type, tooltip: tooltip, onClick: onClick, disabled: disabled },
        finalIcon,
        label));
}
exports.default = ActionButton;
//# sourceMappingURL=ActionButton.js.map