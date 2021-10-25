"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var icons_1 = require("@ant-design/icons");
function Tab(props) {
    var label = props.label, onClose = props.onClose, tabKey = props.tabKey, isActive = props.isActive, onSelected = props.onSelected;
    var bgColor = isActive ? "#ffffff" : "#F1F5F9";
    return (react_1.default.createElement("div", { onClick: function () {
            !isActive && onSelected(tabKey);
        }, style: {
            cursor: "pointer",
            height: 40,
            paddingTop: 7,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: bgColor,
            display: "inline-flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            marginLeft: 2,
        } },
        react_1.default.createElement("div", { style: {
                color: isActive ? "#001529" : "#ADB0B3",
                userSelect: "none",
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 5,
                paddingRight: 5,
                marginBottom: 2,
            } }, label),
        react_1.default.createElement("div", { style: {
                paddingLeft: 5,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            } },
            react_1.default.createElement(icons_1.CloseOutlined, { style: { color: isActive ? "#001529" : "#ADB0B3" }, onClick: function (e) {
                    e.stopPropagation();
                    onClose(tabKey);
                } }))));
}
exports.default = Tab;
//# sourceMappingURL=Tab.js.map