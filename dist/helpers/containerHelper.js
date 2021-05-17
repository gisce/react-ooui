"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rowsHaveAnyField = exports.getMaxColspanForRows = exports.expandWidgetsIfNeeded = exports.getSpanStyleForItem = exports.fillRowWithEmptiesToFit = exports.getTemplateColumns = void 0;
var ooui_1 = require("ooui");
var getSpanStyleForItem = function (_a) {
    var item = _a.item, responsiveBehaviour = _a.responsiveBehaviour;
    return {
        gridColumnStart: "span " + (responsiveBehaviour ? 1 : item.colspan),
    };
};
exports.getSpanStyleForItem = getSpanStyleForItem;
var fillRowWithEmptiesToFit = function (_a) {
    var row = _a.row, mustFillWithEmpties = _a.mustFillWithEmpties, numberOfColumns = _a.numberOfColumns;
    var rowWithEmptiesToFit = [];
    var totalColSpan = 0;
    var isLastItemAndMustFit = function (columnIndex) {
        return (columnIndex + 1 === row.length &&
            totalColSpan < numberOfColumns &&
            !mustFillWithEmpties);
    };
    row.map(function (item, columnIndex) {
        totalColSpan += item.colspan;
        if (isLastItemAndMustFit(columnIndex)) {
            var gapsToAdjust = numberOfColumns - totalColSpan;
            item.colspan = item.colspan + gapsToAdjust;
            totalColSpan += gapsToAdjust;
        }
        rowWithEmptiesToFit.push(item);
        if (isLastItemAndMustFit(columnIndex)) {
            var gapsToFill = numberOfColumns - totalColSpan;
            for (var i = 0; i < gapsToFill; i += 1) {
                rowWithEmptiesToFit.push(new ooui_1.Label({ string: "" }));
            }
        }
    });
    return rowWithEmptiesToFit;
};
exports.fillRowWithEmptiesToFit = fillRowWithEmptiesToFit;
var expandWidgetsIfNeeded = function (_a) {
    var row = _a.row, numberOfColumns = _a.numberOfColumns;
    return row.map(function (item) {
        if (item._mustExpand) {
            item.colspan = numberOfColumns;
            return item;
        }
        return item;
    });
};
exports.expandWidgetsIfNeeded = expandWidgetsIfNeeded;
var getTemplateColumns = function (columns, fieldInRows) {
    // We check if we have any label+field inside (fieldInRows) the container.
    // In this scenario, we must format the grid accordingly
    // Otherwise, the grid will divide uniformly (auto)
    var odd = fieldInRows ? "1fr" : "auto";
    var even = "auto";
    var templateColumns = "";
    for (var i = 0; i < columns; i++) {
        templateColumns += i % 2 ? odd : even;
        if (i + 1 < columns) {
            templateColumns += " ";
        }
    }
    return templateColumns;
};
exports.getTemplateColumns = getTemplateColumns;
var getMaxColspanForRows = function (rows) {
    var maxColspan = rows.map(function (row) {
        return row.reduce(function (prev, current) {
            return prev + current.colspan;
        }, 0);
    });
    return maxColspan.reduce(function (a, b) {
        return Math.max(a, b);
    });
};
exports.getMaxColspanForRows = getMaxColspanForRows;
var rowsHaveAnyField = function (rows) {
    var found = false;
    rows.map(function (row) {
        row.map(function (item) {
            if (item instanceof ooui_1.Field) {
                found = true;
            }
        });
    });
    return found;
};
exports.rowsHaveAnyField = rowsHaveAnyField;
//# sourceMappingURL=containerHelper.js.map