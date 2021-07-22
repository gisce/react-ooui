"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
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
            react_1.default.createElement(antd_1.Menu.ItemGroup, { title: "View as" }, menuItems)));
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