"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var WidgetFactory_1 = require("@/widgets/WidgetFactory");
var react_cool_dimensions_1 = __importDefault(require("react-cool-dimensions"));
var containerHelper_1 = require("@/helpers/containerHelper");
var Container = function (props) {
    var _a = react_cool_dimensions_1.default(), width = _a.width, observe = _a.observe;
    var container = props.container, _b = props.formWrapper, formWrapper = _b === void 0 ? false : _b;
    var columns = container.columns, rows = container.rows;
    var responsiveBehaviour = formWrapper ? width < 1000 : false;
    var content = rows.map(function (row, i) {
        var rowWithoutInvisibleFields = row.filter(function (widget) {
            return !widget.invisible;
        });
        var rowWithEmptiesToFit = containerHelper_1.fillRowWithEmptiesToFit({
            row: rowWithoutInvisibleFields,
            numberOfColumns: columns,
            mustFillWithEmpties: responsiveBehaviour,
        });
        return rowWithEmptiesToFit.map(function (item, j) {
            return (react_1.default.createElement("div", { key: i.toString() + "-" + j.toString(), className: "self-center p-2", style: containerHelper_1.getSpanStyleForItem({ item: item, responsiveBehaviour: responsiveBehaviour }) }, WidgetFactory_1.createReactWidget({
                ooui: item,
                responsiveBehaviour: responsiveBehaviour,
            })));
        });
    });
    if (formWrapper) {
        return content;
    }
    var templateColumns = containerHelper_1.getTemplateColumns(columns);
    var gridStyle = {
        display: "grid",
        gridTemplateColumns: responsiveBehaviour ? "auto" : templateColumns,
    };
    return (react_1.default.createElement("div", { ref: observe, style: gridStyle }, content));
};
exports.default = Container;
//# sourceMappingURL=Container.js.map