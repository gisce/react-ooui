"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
function DropdownButton(props) {
    var icon = props.icon, tooltip = props.tooltip, items = props.items, onItemClick = props.onItemClick, label = props.label, _a = props.disabled, disabled = _a === void 0 ? false : _a;
    function getMenu() {
        var menuItems = items.map(function (item, i) {
            return react_1.default.createElement(antd_1.Menu.Item, { key: i }, item);
        });
        return (react_1.default.createElement(antd_1.Menu, { onClick: handleMenuClick },
            react_1.default.createElement(antd_1.Menu.ItemGroup, { title: tooltip }, menuItems)));
    }
    function handleMenuClick(event) {
        console.log();
        onItemClick();
    }
    return (react_1.default.createElement(antd_1.Dropdown, { overlay: getMenu(), disabled: disabled },
        react_1.default.createElement(antd_1.Button, null,
            icon,
            " ",
            label,
            " ",
            react_1.default.createElement(icons_1.DownOutlined, null))));
}
exports.default = DropdownButton;
//# sourceMappingURL=DropdownButton.js.map