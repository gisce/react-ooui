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
var TabManagerContext_1 = require("@/context/TabManagerContext");
function TabContent(props) {
    var tab = props.tab;
    var tabManagerContext = react_1.useContext(TabManagerContext_1.TabManagerContext);
    var activeKey = (tabManagerContext || {}).activeKey;
    var hiddenStyle = {
        display: "none",
    };
    return (react_1.default.createElement("div", { style: tab.key !== activeKey ? hiddenStyle : undefined }, tab.content));
}
exports.default = react_1.default.memo(TabContent, function () { return true; });
//# sourceMappingURL=TabContent.js.map