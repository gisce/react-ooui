"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTouchedValues = exports.processValues = void 0;
var filteredValues = function (values, fields) {
    if (!fields) {
        return values;
    }
    var filteredValues = {};
    Object.keys(values).forEach(function (key) {
        if (values[key] !== false ||
            (fields[key] && fields[key].type === "boolean")) {
            filteredValues[key] = values[key];
        }
    });
    return filteredValues;
};
var processValues = function (values, fields) {
    var filterBooleans = filteredValues(values, fields);
    return filterBooleans;
};
exports.processValues = processValues;
var getTouchedValues = function (antForm, fields) {
    var values = antForm.getFieldsValue(true);
    var touchedValues = {};
    Object.keys(values).map(function (key) {
        var is2Many = fields[key]
            ? fields[key].type === "one2many" || fields[key].type === "many2many"
            : false;
        if (antForm.isFieldTouched(key) && is2Many) {
            // We ensure the field is really touched by filtering by original items
            var nonOriginalItems = values[key].filter(function (item) { return item.operation !== "original"; });
            if (nonOriginalItems.length > 0) {
                touchedValues[key] = values[key];
            }
        }
        else if (antForm.isFieldTouched(key)) {
            touchedValues[key] = values[key];
        }
    });
    return touchedValues;
};
exports.getTouchedValues = getTouchedValues;
//# sourceMappingURL=formHelper.js.map