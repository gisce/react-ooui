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
var ChangeViewButton_1 = __importDefault(require("./ChangeViewButton"));
var ActionViewContext_1 = require("@/context/ActionViewContext");
var NewButton_1 = __importDefault(require("./NewButton"));
function TreeActionBar() {
    var _a = react_1.useContext(ActionViewContext_1.ActionViewContext), availableViews = _a.availableViews, currentView = _a.currentView, setCurrentView = _a.setCurrentView;
    return (react_1.default.createElement(antd_1.Space, null,
        react_1.default.createElement(NewButton_1.default, null),
        separator(),
        react_1.default.createElement(ChangeViewButton_1.default, { currentView: currentView, availableViews: availableViews, onChangeView: setCurrentView })));
}
function separator() {
    return react_1.default.createElement("div", { className: "inline-block w-2" });
}
exports.default = TreeActionBar;
//# sourceMappingURL=TreeActionBar.js.map