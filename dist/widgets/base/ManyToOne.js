"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManyToOne = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var ManyToOne = function (_a) {
    var id = _a.id, label = _a.label, value = _a.value, placeholder = _a.placeholder, onChange = _a.onChange, onOpenDetailClick = _a.onOpenDetailClick, onSearchClick = _a.onSearchClick, props = __rest(_a, ["id", "label", "value", "placeholder", "onChange", "onOpenDetailClick", "onSearchClick"]);
    return (react_1.default.createElement(antd_1.Form.Item, { label: label },
        react_1.default.createElement(antd_1.Input.Group, null,
            react_1.default.createElement(antd_1.Row, { gutter: 8 },
                react_1.default.createElement(antd_1.Col, { flex: "auto" },
                    react_1.default.createElement(antd_1.Input, { placeholder: placeholder, defaultValue: value, onChange: onChange })),
                react_1.default.createElement(antd_1.Col, { flex: "32px" },
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FolderOpenOutlined, null), onClick: onOpenDetailClick, disabled: !value })),
                react_1.default.createElement(antd_1.Col, { flex: "32px" },
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.SearchOutlined, null), onClick: onSearchClick }))))));
};
exports.ManyToOne = ManyToOne;
//# sourceMappingURL=ManyToOne.js.map