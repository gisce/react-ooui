"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnChangePayload = exports.getValuesForDomain = exports.mergeFieldsDomain = exports.checkFieldsType = exports.getTouchedValues = exports.processValues = void 0;
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
var getTouchedValues = function (_a) {
    var source = _a.source, target = _a.target, fields = _a.fields;
    var differences = {};
    Object.keys(target).forEach(function (key) {
        if (!target[key]) {
            return;
        }
        if (Array.isArray(target[key])) {
            var is2Many = fields[key]
                ? fields[key].type === "one2many" || fields[key].type === "many2many"
                : false;
            if (is2Many) {
                var nonOriginalItems = target[key].filter(function (item) { return item.operation !== "original"; });
                if (nonOriginalItems.length > 0) {
                    differences[key] = target[key];
                }
            }
            else if (!source[key]) {
                differences[key] = target[key];
            }
            else {
                var sourceValue = JSON.stringify(source[key]);
                var targetValue = JSON.stringify(target[key]);
                if (sourceValue !== targetValue) {
                    differences[key] = target[key];
                }
            }
        }
        else if (source[key] !== target[key]) {
            differences[key] = target[key];
        }
    });
    return differences;
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
var mergeFieldsDomain = function (_a) {
    var fieldsDomain = _a.fieldsDomain, fields = _a.fields;
    var output = {};
    Object.keys(fields).forEach(function (key) {
        output[key] = fields[key];
        if (fieldsDomain[key]) {
            output[key].domain = fieldsDomain[key];
        }
    });
    return output;
};
exports.mergeFieldsDomain = mergeFieldsDomain;
var getValuesForDomain = function (domain) {
    var values = {};
    domain.forEach(function (entry) {
        if (entry[1] === "=") {
            values[entry[0]] = entry[2];
        }
    });
    return values;
};
exports.getValuesForDomain = getValuesForDomain;
var getOnChangePayload = function (_a) {
    var onChangeFieldActionArgs = _a.onChangeFieldActionArgs, values = _a.values;
    var payload = {};
    onChangeFieldActionArgs.forEach(function (arg) {
        if (values[arg]) {
            payload[arg] = values[arg];
        }
        else {
            payload[arg] = false;
        }
    });
    return payload;
};
exports.getOnChangePayload = getOnChangePayload;
//# sourceMappingURL=formHelper.js.map