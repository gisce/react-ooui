"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareWriteValues = exports.checkFieldsType = exports.getTouchedValues = exports.processValues = void 0;
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
var checkFieldsType = function (_a) {
    var changedFields = _a.changedFields, fields = _a.fields, types = _a.types;
    var valuesChecked = changedFields.map(function (key) {
        var _a;
        return types.includes((_a = fields[key]) === null || _a === void 0 ? void 0 : _a.type);
    });
    return valuesChecked.some(function (i) { return i === true; });
};
exports.checkFieldsType = checkFieldsType;
var prepareWriteValues = function (_a) {
    var values = _a.values, fields = _a.fields;
    var processedTouchedValues = {};
    Object.entries(values).forEach(function (item) {
        var name = item[0], value = item[1];
        if (fields[name] &&
            fields[name].type === "many2one" &&
            Array.isArray(value)) {
            processedTouchedValues[name] = value[0] || null;
            return;
        }
        if (fields[name] &&
            (fields[name].type === "one2many" || fields[name].type === "many2many")) {
            var items = value;
            var itemsToUpdate = items.filter(function (item) { return item.operation !== "original"; });
            if (itemsToUpdate.length === 0) {
                processedTouchedValues[name] = undefined;
                return;
            }
            processedTouchedValues[name] = itemsToUpdate.map(function (item) {
                if (item.operation === "pendingLink") {
                    return [4, item.id];
                }
            });
            return;
        }
        processedTouchedValues[name] = value;
    });
    return processedTouchedValues;
};
exports.prepareWriteValues = prepareWriteValues;
//# sourceMappingURL=formHelper.js.map