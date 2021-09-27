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
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var LocaleContext_1 = require("@/context/LocaleContext");
function getIconForView(view) {
    if (view === "tree") {
        return react_1.default.createElement(icons_1.TableOutlined, null);
    }
    else {
        // if (view === "form") {
        return react_1.default.createElement(icons_1.FormOutlined, null);
    }
}
function ChangeViewButton(props) {
    var currentView = props.currentView, availableViews = props.availableViews, onChangeView = props.onChangeView, _a = props.disabled, disabled = _a === void 0 ? false : _a;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    function getMenu() {
        var menuItems = availableViews.map(function (view) {
            return (react_1.default.createElement(antd_1.Menu.Item, { key: view },
                react_1.default.createElement(antd_1.Row, { wrap: false },
                    react_1.default.createElement(antd_1.Col, { flex: "none", style: { paddingRight: 20 } },
                        react_1.default.createElement(icons_1.CheckOutlined, { style: { opacity: currentView === view ? 1 : 0 } })),
                    react_1.default.createElement(antd_1.Col, { flex: "auto", style: { paddingRight: 20 } }, view.charAt(0).toUpperCase() + view.slice(1)),
                    react_1.default.createElement(antd_1.Col, { flex: "none" }, getIconForView(view)))));
        });
        return (react_1.default.createElement(antd_1.Menu, { onClick: handleMenuClick },
            react_1.default.createElement(antd_1.Menu.ItemGroup, { title: t("viewAs") }, menuItems)));
    }
    function handleMenuClick(event) {
        var selectedView = event.key;
        onChangeView(selectedView);
    }
    return (react_1.default.createElement(antd_1.Dropdown, { overlay: getMenu(), disabled: disabled },
        react_1.default.createElement(antd_1.Button, null,
            getIconForView(currentView),
            " ",
            react_1.default.createElement(icons_1.DownOutlined, null))));
}
exports.default = ChangeViewButton;
//# sourceMappingURL=ChangeViewButton.js.map