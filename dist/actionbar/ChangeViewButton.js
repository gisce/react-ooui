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
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var LocaleContext_1 = require("@/context/LocaleContext");
var UnsavedChangesDialog_1 = __importDefault(require("@/ui/UnsavedChangesDialog"));
var ButtonWithTooltip_1 = __importDefault(require("@/common/ButtonWithTooltip"));
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
    var currentView = props.currentView, availableViews = props.availableViews, onChangeView = props.onChangeView, _a = props.disabled, disabled = _a === void 0 ? false : _a, _b = props.formHasChanges, formHasChanges = _b === void 0 ? false : _b;
    var _c = react_1.useContext(LocaleContext_1.LocaleContext), t = _c.t, lang = _c.lang;
    var _d = react_1.useState("tree"), previousView = _d[0], setPreviousView = _d[1];
    react_1.useEffect(function () {
        setPreviousView(availableViews.filter(function (view) { return view !== currentView; })[0]);
    }, [availableViews]);
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
    function tryNavigate(callback) {
        if (formHasChanges) {
            UnsavedChangesDialog_1.default({
                lang: lang,
                onOk: function () {
                    callback();
                },
            });
            return;
        }
        callback();
    }
    function handleMenuClick(event) {
        tryNavigate(function () {
            setPreviousView(currentView);
            var selectedView = event.key;
            onChangeView(selectedView);
        });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ButtonWithTooltip_1.default, { tooltip: t("viewAs") + " " + t(previousView), icon: getIconForView(previousView), style: { width: 50 }, onClick: function () { return onChangeView(previousView); }, disabled: disabled }),
        react_1.default.createElement(antd_1.Dropdown, { overlay: getMenu(), disabled: disabled },
            react_1.default.createElement(antd_1.Button, { style: { width: 25 }, icon: react_1.default.createElement(icons_1.DownOutlined, { style: { fontSize: "0.5em" } }), onClick: function (e) { return e.preventDefault(); } }))));
}
exports.default = ChangeViewButton;
//# sourceMappingURL=ChangeViewButton.js.map