"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateColumnsWidth = void 0;
/**
 * This function calculate the width of a string based on its length
 * @param {String} text
 * @param {String} font
 */
var getTextWidth = function (text, font) {
    if (font === void 0) { font = "14px -apple-system"; }
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return Math.round((metrics.width + 80) * 1.5);
};
/**
 * This function calculates the width of each column based in all CELL VALUES
 * @param {Array} columns
 * @param {Array} source
 * @param {Number} maxWidthPerCell
 */
var calculateColumnsWidth = function (columns, source, maxWidthPerCell) {
    if (maxWidthPerCell === void 0) { maxWidthPerCell = 500; }
    if (columns.length === 0) {
        return columns;
    }
    // First we calculate the width for each column
    // The column width is based on its string length
    var columnsWithWidth = columns.map(function (column) {
        return Object.assign(column, {
            width: getTextWidth(column.title),
        });
    });
    // Since we have a minimum width (column's width already calculated),
    // now we are going to verify if the cell value is bigger
    // than the column width which is already set
    source.map(function (entry) {
        columnsWithWidth.map(function (column, indexColumn) {
            var columnWidth = column.width;
            var cellValue = entry[column.key] || "";
            // Get the string width based on chars length
            var cellWidth = getTextWidth(cellValue);
            // Verify if the cell value is smaller than column's width
            if (cellWidth < columnWidth)
                cellWidth = columnWidth;
            // Verify if the cell value width is bigger than our max width flag
            if (cellWidth > maxWidthPerCell)
                cellWidth = maxWidthPerCell;
            // Update the column width
            columnsWithWidth[indexColumn].width = cellWidth;
        });
    });
    // Sum of all columns width to determine the table max width
    var tableWidth = columnsWithWidth
        .map(function (column) { return column.width; })
        .reduce(function (a, b) {
        return a + b;
    });
    return {
        columns: columnsWithWidth,
        source: source,
        tableWidth: tableWidth,
    };
};
exports.calculateColumnsWidth = calculateColumnsWidth;
//# sourceMappingURL=dynamicColumnsHelper.js.map