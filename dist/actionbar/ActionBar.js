"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
function ActionBar(props) {
    var saveButtonHidden = props.saveButtonHidden, saveButtonCallback = props.saveButtonCallback, saveButtonLoading = props.saveButtonLoading, saveButtonDisabled = props.saveButtonDisabled, showTreeButtonHidden = props.showTreeButtonHidden, showTreeButtonCallback = props.showTreeButtonCallback, showFormButtonHidden = props.showFormButtonHidden, showFormButtonCallback = props.showFormButtonCallback;
    return (react_1.default.createElement(antd_1.Space, null,
        react_1.default.createElement(ActionButton, { hidden: saveButtonHidden, icon: saveButtonLoading ? icons_1.LoadingOutlined : icons_1.SaveOutlined, disabled: saveButtonDisabled, label: "Save", callback: saveButtonCallback }),
        !saveButtonHidden && separator(),
        react_1.default.createElement(ActionButton, { icon: icons_1.SearchOutlined, label: "List", hidden: showTreeButtonHidden, callback: showTreeButtonCallback }),
        react_1.default.createElement(ActionButton, { icon: icons_1.FormOutlined, label: "Form", hidden: showFormButtonHidden, callback: showFormButtonCallback })));
}
function ActionButton(_a) {
    var icon = _a.icon, label = _a.label, hidden = _a.hidden, _b = _a.disabled, disabled = _b === void 0 ? false : _b, callback = _a.callback;
    if (hidden)
        return null;
    var Icon = icon;
    return (react_1.default.createElement("button", { disabled: disabled, className: "ant-btn", onClick: callback, style: {
            width: 85,
            height: 65,
            flex: 1,
        } },
        react_1.default.createElement("div", { style: {
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
            } },
            react_1.default.createElement("div", { style: { display: "block" } },
                react_1.default.createElement(antd_1.Row, { justify: "center" },
                    react_1.default.createElement(Icon, { style: { fontSize: "1.4em" } })),
                react_1.default.createElement(antd_1.Row, { justify: "center", className: "mt-1" }, label)))));
}
function separator() {
    return react_1.default.createElement("div", { className: "inline-block w-2" });
}
exports.default = ActionBar;
//# sourceMappingURL=ActionBar.js.map