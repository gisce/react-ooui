"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpanStyleForItem = exports.expandLabelsInFields = exports.getTemplateColumns = void 0;
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
var expandLabelsInFields = function (_a) {
    var row = _a.row, mustFillWithEmpties = _a.mustFillWithEmpties, numberOfColumns = _a.numberOfColumns;
    var rowWithExpandedLabels = [];
    var totalColSpan = 0;
    row.map(function (item, columnIndex) {
        if (item instanceof ooui_1.Field &&
            !(item instanceof ooui_1.Button) &&
            !(item instanceof ooui_1.Label)) {
            if (item instanceof ooui_1.Text && item.nolabel) {
                rowWithExpandedLabels.push(item);
                return;
            }
            totalColSpan += 1;
            totalColSpan += item.colspan - 1;
            var label = new ooui_1.Label({ string: item.label });
            label.align = mustFillWithEmpties ? "left" : "right";
            rowWithExpandedLabels.push(label);
            var newItem = clone(item);
            newItem._colspan = item._colspan - 1;
            newItem._nolabel = true;
            rowWithExpandedLabels.push(newItem);
            if (columnIndex + 1 === row.length &&
                totalColSpan < numberOfColumns &&
                !mustFillWithEmpties) {
                var gapsToFill = numberOfColumns - totalColSpan;
                for (var i = 0; i < gapsToFill; i += 1) {
                    rowWithExpandedLabels.push(new ooui_1.Label({ string: "" }));
                }
            }
        }
        else {
            totalColSpan += item.colspan;
            rowWithExpandedLabels.push(item);
        }
    });
    return rowWithExpandedLabels;
};
exports.expandLabelsInFields = expandLabelsInFields;
var getTemplateColumns = function (columns) {
    var odd = "1fr";
    var even = "auto";
    var templateColumns = "";
    for (var i = 0; i < columns; i++) {
        templateColumns += i % 2 ? odd : even;
        if (i < columns) {
            templateColumns += " ";
        }
    }
    return templateColumns;
};
exports.getTemplateColumns = getTemplateColumns;
//# sourceMappingURL=containerHelper.js.map