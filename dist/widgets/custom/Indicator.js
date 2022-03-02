"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Indicator = void 0;
var react_1 = __importDefault(require("react"));
var antd_1 = require("antd");
var antd_2 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var icons_1 = require("@ant-design/icons");
var iconMapper_1 = __importDefault(require("@/helpers/iconMapper"));
var Indicator = function (props) {
    var ooui = props.ooui;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui },
        react_1.default.createElement(IndicatorInput, { ooui: ooui })));
};
exports.Indicator = Indicator;
var IndicatorInput = function (props) {
    var ooui = props.ooui, value = props.value;
    var title = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", null,
            ooui.label,
            " "),
        ooui.tooltip &&
            react_1.default.createElement(antd_1.Tooltip, { title: ooui.tooltip },
                react_1.default.createElement(icons_1.QuestionCircleOutlined, { className: "text-xs text-blue-400 pr-1" }))));
    var Icon = iconMapper_1.default(ooui.icon);
    var formattedValue = value;
    if (ooui.selectionValues.size) {
        formattedValue = ooui.selectionValues.get(value);
    }
    else if (Array.isArray(value)) {
        formattedValue = value[1];
    }
    var field = (react_1.default.createElement(antd_2.Statistic, { title: title, prefix: Icon && react_1.default.createElement(Icon, null), suffix: ooui.suffix, value: formattedValue }));
    if (ooui.card) {
        return (react_1.default.createElement(antd_2.Card, null, field));
    }
    else {
        return field;
    }
};
//# sourceMappingURL=Indicator.js.map