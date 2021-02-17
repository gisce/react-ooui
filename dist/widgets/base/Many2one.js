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
exports.Many2one = void 0;
const react_1 = __importStar(require("react"));
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
const FormItem_1 = __importDefault(require("@/common/FormItem"));
const Many2one = (props) => {
    const { ooui, onOpenDetailClick, onSearchClick } = props;
    const { id, label, nolabel, tooltip } = ooui;
    return (react_1.default.createElement(FormItem_1.default, { name: id, label: label, tooltip: tooltip, nolabel: nolabel },
        react_1.default.createElement(Many2oneInput, null)));
};
exports.Many2one = Many2one;
const Many2oneInput = (props) => {
    const { value, onChange, disabled } = props;
    const [m2oValue, setM2oValue] = react_1.useState();
    const triggerChange = (changedValue) => {
        if (onChange) {
        }
    };
    const onValueStringChange = (e) => { };
    return (react_1.default.createElement(antd_1.Row, { gutter: 8 },
        react_1.default.createElement(antd_1.Col, { flex: "auto" },
            react_1.default.createElement(antd_1.Input, { type: "text", value: value && value[1], onChange: onValueStringChange, disabled: true, className: "text-black" })),
        react_1.default.createElement(antd_1.Col, { flex: "32px" },
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FolderOpenOutlined, null), disabled: disabled })),
        react_1.default.createElement(antd_1.Col, { flex: "32px" },
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.SearchOutlined, null), disabled: disabled }))));
};
//# sourceMappingURL=Many2one.js.map