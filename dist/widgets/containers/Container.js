"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var WidgetFactory_1 = require("@/widgets/WidgetFactory");
var containerHelper_1 = require("@/helpers/containerHelper");
var Container = function (props) {
    var container = props.container, _a = props.formWrapper, formWrapper = _a === void 0 ? false : _a, responsiveBehaviour = props.responsiveBehaviour;
    var columns = container.columns, rows = container.rows;
    var content = rows.map(function (row, i) {
        var rowWithoutInvisibleFields = row.filter(function (widget) {
            return !widget.invisible;
        });
        var rowWithExpandedItems = containerHelper_1.expandWidgetsIfNeeded({
            row: rowWithoutInvisibleFields,
            numberOfColumns: columns,
        });
        var rowWithEmptiesToFit = containerHelper_1.fillRowWithEmptiesToFit({
            row: rowWithExpandedItems,
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
    return react_1.default.createElement("div", { style: gridStyle }, content);
};
exports.default = Container;
//# sourceMappingURL=Container.js.map