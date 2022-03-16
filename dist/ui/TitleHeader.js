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
var ActionViewContext_1 = require("@/context/ActionViewContext");
var LocaleContext_1 = require("@/context/LocaleContext");
var Title = antd_1.Typography.Title, Text = antd_1.Typography.Text;
function TitleHeader(props) {
    var children = props.children;
    var _a = react_1.useContext(ActionViewContext_1.ActionViewContext), title = _a.title, currentView = _a.currentView, currentId = _a.currentId, currentItemIndex = _a.currentItemIndex, results = _a.results, totalItems = _a.totalItems, selectedRowItems = _a.selectedRowItems;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    function getSummary() {
        if ((currentView === null || currentView === void 0 ? void 0 : currentView.type) === "form") {
            if (!currentId) {
                return "";
            }
            if (totalItems === 0) {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    t("editingDocument"),
                    " (id: ",
                    react_1.default.createElement(Text, { copyable: true }, currentId),
                    ")"));
            }
            return (react_1.default.createElement(react_1.default.Fragment, null,
                t("register"),
                " ",
                currentItemIndex === undefined ? 1 : currentItemIndex + 1,
                " / ",
                results.length,
                " ",
                t("of"),
                " ",
                totalItems,
                " - ",
                t("editingDocument"),
                " (id: ",
                react_1.default.createElement(Text, { copyable: true }, currentId),
                ")"));
        }
        else if ((currentView === null || currentView === void 0 ? void 0 : currentView.type) === "tree" && selectedRowItems) {
            if (selectedRowItems.length === 1) {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    "1 ",
                    t("selectedRegisters"),
                    " - (id: ",
                    react_1.default.createElement(Text, { copyable: true }, selectedRowItems[0].id),
                    ")"));
            }
            else if (selectedRowItems.length > 1) {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    selectedRowItems.length,
                    " ",
                    t("selectedRegisters"),
                    react_1.default.createElement(Text, { copyable: { text: selectedRowItems.map(function (reg) { return reg.id; }).join(", ") } })));
            }
        }
        return null;
    }
    return (react_1.default.createElement("div", { style: { position: "sticky", top: 80, zIndex: 99 } },
        react_1.default.createElement(antd_1.Row, { className: "bg-blueGray-100 shadow-md rounded", style: { padding: "1em" }, align: "middle" },
            react_1.default.createElement(antd_1.Col, { flex: 2 },
                react_1.default.createElement(Title, { level: 3, style: { marginBottom: 0 } }, title),
                getSummary()),
            react_1.default.createElement(antd_1.Col, { flex: 3 },
                react_1.default.createElement(antd_1.Row, { justify: "end" }, children))),
        react_1.default.createElement("div", { className: "pb-5" })));
}
exports.default = TitleHeader;
//# sourceMappingURL=TitleHeader.js.map