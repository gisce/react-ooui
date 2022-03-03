"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardGrid = void 0;
var react_1 = __importDefault(require("react"));
var react_grid_layout_1 = require("react-grid-layout");
require("react-resizable/css/styles.css");
require("react-grid-layout/css/styles.css");
var ResponsiveReactGridLayout = react_grid_layout_1.WidthProvider(react_grid_layout_1.Responsive);
var DashboardGrid = function (props) {
    var _a = props.children, children = _a === void 0 ? [] : _a;
    var items = react_1.default.Children.map(children, function (child) {
        var _a = child.props, parms = _a.parms, id = _a.id;
        return (react_1.default.createElement("div", { key: id, "data-grid": parms }, child));
    });
    return (react_1.default.createElement(ResponsiveReactGridLayout, { className: "layout", cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }, rowHeight: 30, onLayoutChange: function (layout, layouts) {
            // console.log();
        } }, items));
};
exports.DashboardGrid = DashboardGrid;
//# sourceMappingURL=DashboardGrid.js.map