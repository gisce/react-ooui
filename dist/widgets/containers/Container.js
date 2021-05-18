"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ooui_1 = require("ooui");
var WidgetFactory_1 = require("@/widgets/WidgetFactory");
var containerHelper_1 = require("@/helpers/containerHelper");
var Container = function (props) {
    var container = props.container, responsiveBehaviour = props.responsiveBehaviour;
    var rows = container.rows;
    var columns = container.columns;
    // We check for the largest colspan for each row
    // And if the value is smaller than the columns value
    // We adjust the columns value
    var maxColspanForRows = containerHelper_1.getMaxColspanForRows(rows);
    if (maxColspanForRows < columns) {
        columns = maxColspanForRows;
    }
    var fieldInRows = false;
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
            // We check if we have any label+field inside the container.
            // In this scenario, we must format the grid accordingly
            // Otherwise, the grid will divide uniformly
            if (item instanceof ooui_1.Label && item.fieldForLabel) {
                fieldInRows = true;
            }
            return (react_1.default.createElement("div", { key: i.toString() + "-" + j.toString(), style: containerHelper_1.getSpanStyleForItem({ item: item, responsiveBehaviour: responsiveBehaviour }) }, WidgetFactory_1.createReactWidget({
                ooui: item,
                responsiveBehaviour: responsiveBehaviour,
            })));
        });
    });
    var templateColumns = containerHelper_1.getTemplateColumns(columns, fieldInRows);
    var gridStyle = {
        display: "grid",
        gridTemplateColumns: responsiveBehaviour ? "auto" : templateColumns,
        gap: "1rem"
    };
    return react_1.default.createElement("div", { style: gridStyle }, content);
};
exports.default = Container;
//# sourceMappingURL=Container.js.map