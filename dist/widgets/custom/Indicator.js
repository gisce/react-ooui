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
var Indicator = function (props) {
    var ooui = props.ooui;
    var title = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", null,
            ooui.label,
            " "),
        ooui.tooltip &&
            react_1.default.createElement(antd_1.Tooltip, { title: ooui.tooltip },
                react_1.default.createElement(icons_1.QuestionCircleOutlined, { className: "text-xs text-blue-400 pr-1" }))));
    return (react_1.default.createElement(Field_1.default, { ooui: ooui },
        react_1.default.createElement(antd_2.Statistic, { title: title })));
};
exports.Indicator = Indicator;
//# sourceMappingURL=Indicator.js.map