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
var DashboardActionContext_1 = require("@/context/DashboardActionContext");
var antd_1 = require("antd");
var ActionButton_1 = __importDefault(require("./ActionButton"));
var icons_1 = require("@ant-design/icons");
var LocaleContext_1 = require("@/context/LocaleContext");
function DashboardActionBar() {
    var _a = react_1.useContext(DashboardActionContext_1.DashboardActionContext), isLoading = _a.isLoading, dashboardRef = _a.dashboardRef;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    return (react_1.default.createElement(antd_1.Space, { wrap: true },
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.SettingOutlined, null), tooltip: t("configDashboard"), disabled: isLoading, loading: false, onClick: function () {
                dashboardRef === null || dashboardRef === void 0 ? void 0 : dashboardRef.current.configDashboard();
            } }),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.ReloadOutlined, null), tooltip: t("refresh"), disabled: isLoading, loading: false, onClick: function () {
                dashboardRef === null || dashboardRef === void 0 ? void 0 : dashboardRef.current.refresh();
            } })));
}
function separator() {
    return react_1.default.createElement("div", { className: "inline-block w-2" });
}
exports.default = DashboardActionBar;
//# sourceMappingURL=DashboardActionBar.js.map