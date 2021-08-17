"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.Url = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var Config_1 = __importDefault(require("@/Config"));
var icons_1 = require("@ant-design/icons");
var isURL_1 = __importDefault(require("validator/lib/isURL"));
var Url = function (props) {
    var ooui = props.ooui;
    var required = ooui.required;
    return (react_1.default.createElement(Field_1.default, __assign({ required: required }, props),
        react_1.default.createElement(UrlInput, { ooui: ooui })));
};
exports.Url = Url;
function UrlInput(props) {
    var ooui = props.ooui, value = props.value, onChange = props.onChange;
    var _a = ooui, id = _a.id, readOnly = _a.readOnly, required = _a.required;
    var requiredClass = required && !readOnly ? Config_1.default.requiredClass : undefined;
    var _b = react_1.useState(false), editMode = _b[0], setEditMode = _b[1];
    var showInput = editMode;
    if (readOnly && !editMode) {
        showInput = false;
    }
    if (!value && !readOnly) {
        showInput = true;
    }
    var onValueStringChange = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    };
    return (react_1.default.createElement(antd_1.Row, { gutter: 8, wrap: false, align: "middle" },
        !readOnly ? (react_1.default.createElement(antd_1.Col, { flex: "32px" },
            react_1.default.createElement(antd_1.Button, { icon: editMode ? react_1.default.createElement(icons_1.CheckOutlined, null) : react_1.default.createElement(icons_1.EditOutlined, null), onClick: function () {
                    if (value && isURL_1.default(value)) {
                        setEditMode(!editMode);
                    }
                }, tabIndex: -1 }))) : null,
        react_1.default.createElement(antd_1.Col, { flex: "auto" }, showInput ? (react_1.default.createElement(antd_1.Input, { id: id, onChange: onValueStringChange, className: requiredClass, value: value, onBlur: function () {
                if (value && isURL_1.default(value)) {
                    setEditMode(false);
                }
            } })) : (react_1.default.createElement("a", { href: value, style: { color: "#1890ff" }, target: "_blank" }, value)))));
}
//# sourceMappingURL=Url.js.map