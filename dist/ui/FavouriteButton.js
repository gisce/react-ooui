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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var antd_2 = require("antd");
var FavouriteButton = function () {
    // const { isFavourite } = props;
    var _a = react_1.useState(false), isFavourite = _a[0], setIsFavourite = _a[1];
    var _b = react_1.useState(false), dropdownVisible = _b[0], setDropdownVisible = _b[1];
    function handleMenuClick() { }
    function handleVisibleChange(flag) {
        setDropdownVisible(flag);
    }
    var menu = (react_1.default.createElement(antd_2.Menu, { onClick: handleMenuClick },
        react_1.default.createElement("div", { style: { width: 300, padding: 5, paddingLeft: 15, color: "#ccc" } }, "Els meus favorits".toUpperCase()),
        react_1.default.createElement(antd_2.Menu.Divider, null),
        react_1.default.createElement(antd_2.Menu.Item, { key: "1" },
            react_1.default.createElement(FavouriteItem, { title: "Empreses", type: "tree" })),
        react_1.default.createElement(antd_2.Menu.Item, { key: "2" },
            react_1.default.createElement(FavouriteItem, { title: "Nova empresa", type: "form" })),
        react_1.default.createElement(antd_2.Menu.Item, { key: "3" },
            react_1.default.createElement(FavouriteItem, { title: "AGRI ENERGIA, SL", type: "form" }))));
    function FavouriteItem(_a) {
        var title = _a.title, type = _a.type;
        var icon = type === "tree" ? react_1.default.createElement(icons_1.TableOutlined, null) : react_1.default.createElement(icons_1.FormOutlined, null);
        return (react_1.default.createElement(antd_1.Row, { wrap: false },
            react_1.default.createElement(antd_1.Col, { flex: "none", style: { paddingRight: 20 } }, icon),
            react_1.default.createElement(antd_1.Col, { flex: "auto" }, title)));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Button, { type: isFavourite ? "primary" : "default", icon: isFavourite ? (react_1.default.createElement(icons_1.StarFilled, { style: { color: "white" } })) : (react_1.default.createElement(icons_1.StarOutlined, null)), style: { width: 50 }, onClick: function () { return setIsFavourite(!isFavourite); } }),
        react_1.default.createElement(antd_2.Dropdown, { overlay: menu, onVisibleChange: handleVisibleChange, visible: dropdownVisible },
            react_1.default.createElement(antd_1.Button, { style: { width: 25 }, icon: react_1.default.createElement(icons_1.DownOutlined, { style: { fontSize: "0.5em" } }), onClick: function (e) { return e.preventDefault(); } }))));
};
exports.default = FavouriteButton;
//# sourceMappingURL=FavouriteButton.js.map