"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var WidgetFactory_1 = require("@/widgets/WidgetFactory");
var config_1 = __importDefault(require("@/config"));
function Group(props) {
    var ooui = props.ooui, _a = props.showLabel, showLabel = _a === void 0 ? true : _a;
    var columns = ooui.container.columns;
    var span = config_1.default.full_width_colspan / columns;
    var content = ooui.container.rows.map(function (row, index) {
        return (react_1.default.createElement(antd_1.Row, { className: "pb-2", align: "middle", key: index }, row.map(function (item) {
            return (react_1.default.createElement(antd_1.Col, { span: span * item.colspan, className: "pl-2" }, WidgetFactory_1.createReactWidget(item)));
        })));
    });
    return (react_1.default.createElement(react_1.default.Fragment, null, ooui.label && showLabel ? (react_1.default.createElement(antd_1.Card, { type: "inner", title: ooui.label }, content)) : (content)));
}
exports.default = Group;
//# sourceMappingURL=Group.js.map