"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformPlainMany2Ones = exports.mergeSearchFields = exports.getOnChangePayload = exports.getValuesForDomain = exports.mergeFieldsDomain = exports.checkFieldsType = exports.getTouchedValues = exports.processValues = void 0;
var filteredValues = function (values, fields) {
    if (!fields) {
        return values;
    }
    var filteredValues = {};
    Object.keys(values).forEach(function (key) {
        if (fields[key] === undefined) {
            // console.log(`${key} is not in fields`);
            filteredValues[key] = values[key];
        }
        else if (values[key] === false && fields[key].type !== "boolean") {
            // Do nothing - filter the field.
        }
        else if (fields[key].type === "boolean") {
            var boolValue = values[key];
            if (boolValue === 0) {
                filteredValues[key] = false;
            }
            else if (boolValue === 1) {
                filteredValues[key] = true;
            }
            else {
                filteredValues[key] = values[key];
            }
        }
        else {
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
        var _a, _b;
        var is2Many = fields[key]
            ? fields[key].type === "one2many" || fields[key].type === "many2many"
            : false;
        if (is2Many) {
            var sourceValue = JSON.stringify(source[key]);
            var targetValue = JSON.stringify(target[key]);
            if (sourceValue === targetValue) {
                return;
            }
            var nonOriginalItems = ((_b = (_a = target[key]) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.filter(function (item) { return item.operation !== "original"; })) || [];
            if (nonOriginalItems.length > 0) {
                differences[key] = target[key];
            }
        }
        else if (Array.isArray(target[key])) {
            if (source[key] === undefined) {
                differences[key] = target[key];
            }
            else if (fields[key].type === "many2one") {
                if (!Array.isArray(source[key])) {
                    // This will mean the source many2one value is a numeric id
                    var numericId = source[key];
                    var targetNumericId = target[key][0];
                    if (numericId !== targetNumericId) {
                        differences[key] = target[key];
                    }
                }
                else {
                    var sourceValue = JSON.stringify(source[key]);
                    var targetValue = JSON.stringify(target[key]);
                    if (sourceValue !== targetValue) {
                        differences[key] = target[key];
                    }
                }
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
            if (target[key] === undefined) {
                differences[key] = null;
            }
            else {
                differences[key] = target[key];
            }
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
    if (!domain || !Array.isArray(domain) || (domain === null || domain === void 0 ? void 0 : domain.length) === 0) {
        return {};
    }
    domain.forEach(function (entry) {
        if ((entry === null || entry === void 0 ? void 0 : entry[1]) === "=") {
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
        else if (arg[0] === "'") {
            payload[arg] = arg.replace(/'/g, "");
        }
        else {
            payload[arg] = false;
        }
    });
    return payload;
};
exports.getOnChangePayload = getOnChangePayload;
var mergeSearchFields = function (searchFields) {
    var mergedSearchFields = {
        primary: [],
        secondary: [],
    };
    searchFields.forEach(function (sf) {
        if (!sf) {
            return;
        }
        mergedSearchFields.primary = mergedSearchFields.primary.concat(sf.primary);
        mergedSearchFields.secondary = mergedSearchFields.secondary.concat(sf.secondary);
    });
    return {
        primary: mergedSearchFields.primary.filter(onlyUnique),
        secondary: mergedSearchFields.secondary.filter(onlyUnique),
    };
};
exports.mergeSearchFields = mergeSearchFields;
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
var transformPlainMany2Ones = function (_a) {
    var values = _a.values, fields = _a.fields;
    var reformattedValues = {};
    Object.keys(values).forEach(function (key) {
        var value = values[key];
        if (fields[key] &&
            fields[key].type === "many2one" &&
            value &&
            Array.isArray(value) &&
            value.length === 2) {
            reformattedValues[key] = value[0];
        }
        else {
            reformattedValues[key] = value;
        }
    });
    return reformattedValues;
};
exports.transformPlainMany2Ones = transformPlainMany2Ones;
//# sourceMappingURL=formHelper.js.map