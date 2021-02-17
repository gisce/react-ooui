"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const WidgetFactory_1 = require("@/widgets/WidgetFactory");
const config_1 = __importDefault(require("@/config"));
function Group(props) {
    const { ooui, showLabel = true } = props;
    const { columns } = ooui.container;
    const span = config_1.default.full_width_colspan / columns;
    const content = ooui.container.rows.map((row, index) => {
        return (react_1.default.createElement(antd_1.Row, { className: "pb-2", align: "middle", key: index }, row.map((item) => {
            return (react_1.default.createElement(antd_1.Col, { span: span * item.colspan, className: "pl-2" }, WidgetFactory_1.createReactWidget(item)));
        })));
    });
    return (react_1.default.createElement(react_1.default.Fragment, null, ooui.label && showLabel ? (react_1.default.createElement(antd_1.Card, { type: "inner", title: ooui.label }, content)) : (content)));
}
exports.default = Group;
//# sourceMappingURL=Group.js.map