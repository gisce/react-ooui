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
exports.LinkInput = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var Config_1 = __importDefault(require("@/Config"));
var icons_1 = require("@ant-design/icons");
var LinkInput = function (props) {
    var ooui = props.ooui, value = props.value, onChange = props.onChange, valueValidator = props.valueValidator, _a = props.linkPrefix, linkPrefix = _a === void 0 ? "" : _a;
    var _b = ooui, id = _b.id, readOnly = _b.readOnly, required = _b.required;
    var requiredClass = required && !readOnly ? Config_1.default.requiredClass : undefined;
    var _c = react_1.useState(false), editMode = _c[0], setEditMode = _c[1];
    var _d = react_1.useState(false), showInput = _d[0], setShowInput = _d[1];
    react_1.useEffect(function () {
        if (readOnly && !editMode) {
            setShowInput(false);
        }
        if (!value && !readOnly) {
            setEditMode(true);
            setShowInput(true);
        }
    }, [editMode, readOnly]);
    var onValueStringChange = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    };
    return (react_1.default.createElement(antd_1.Row, { gutter: 8, wrap: false, align: "middle" },
        !readOnly ? (react_1.default.createElement(antd_1.Col, { flex: "32px" }, editMode ? (react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.CheckOutlined, null), onClick: function () {
                if (valueValidator(value)) {
                    setEditMode(false);
                    setShowInput(false);
                }
            }, tabIndex: -1 })) : (react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.EditOutlined, null), onClick: function () {
                setEditMode(true);
                setShowInput(true);
            }, tabIndex: -1 })))) : null,
        react_1.default.createElement(antd_1.Col, { flex: "auto" }, showInput ? (react_1.default.createElement(antd_1.Input, { id: id, onChange: onValueStringChange, className: requiredClass, value: value, onBlur: function () {
                if (valueValidator(value)) {
                    setEditMode(false);
                    setShowInput(false);
                }
            } })) : (react_1.default.createElement("a", { href: "" + linkPrefix + value, style: { color: "#1890ff", paddingRight: 15 }, target: "_blank" }, value)))));
};
exports.LinkInput = LinkInput;
//# sourceMappingURL=LinkInput.js.map