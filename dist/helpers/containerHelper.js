"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxColspanForRows = exports.expandWidgetsIfNeeded = exports.getSpanStyleForItem = exports.fillRowWithEmptiesToFit = exports.getTemplateColumns = void 0;
var ooui_1 = require("ooui");
var clone = function clone(instance) {
    var copy = new instance.constructor();
    Object.assign(copy, instance);
    return copy;
};
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
    row.map(function (item, columnIndex) {
        totalColSpan += item.colspan;
        rowWithEmptiesToFit.push(item);
        if (columnIndex + 1 === row.length &&
            totalColSpan < numberOfColumns &&
            !mustFillWithEmpties) {
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
var getTemplateColumns = function (columns) {
    var odd = "1fr";
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
//# sourceMappingURL=containerHelper.js.map