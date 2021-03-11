"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTouchedValues = exports.processInitialValues = void 0;
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
var processInitialValues = function (values, fields) {
    var filterBooleans = filteredValues(values, fields);
    return filterBooleans;
};
exports.processInitialValues = processInitialValues;
var getTouchedValues = function (antForm) {
    var values = antForm.getFieldsValue(true);
    var touchedValues = {};
    Object.keys(values).map(function (key) {
        if (antForm.isFieldTouched(key)) {
            touchedValues[key] = values[key];
        }
    });
    return touchedValues;
};
exports.getTouchedValues = getTouchedValues;
//# sourceMappingURL=formHelper.js.map