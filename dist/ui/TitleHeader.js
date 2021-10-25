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
var Title = antd_1.Typography.Title;
function TitleHeader(props) {
    var children = props.children;
    var title = react_1.useContext(ActionViewContext_1.ActionViewContext).title;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Row, { className: "bg-blueGray-100 shadow-md rounded", style: { padding: "1em" }, align: "middle" },
            react_1.default.createElement(antd_1.Col, { flex: 2 },
                react_1.default.createElement(Title, { level: 3, style: { marginBottom: 0 } }, title)),
            react_1.default.createElement(antd_1.Col, { flex: 3 },
                react_1.default.createElement(antd_1.Row, { justify: "end" }, children))),
        react_1.default.createElement("div", { className: "pb-5" })));
}
exports.default = TitleHeader;
//# sourceMappingURL=TitleHeader.js.map