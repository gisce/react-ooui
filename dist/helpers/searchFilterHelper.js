"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParamsForFields = exports.groupRangeValues = exports.removeUndefinedFields = void 0;
var convertBooleanParamIfNeeded = function (value) {
    if ((typeof value === "string" && value === "true") || value === "false") {
        return value === "true";
    }
    return value;
};
var getParamsForFields = function (values, fields) {
    return Object.keys(values).map(function (key) {
        return getParamForField(key, values[key], fields);
    });
};
exports.getParamsForFields = getParamsForFields;
var getParamForField = function (key, value, fields) {
    var type = fields[key].type;
    if (type === "char" || type === "text" || type === "many2one") {
        return [key, "ilike", value];
    }
    else if (type === "float" ||
        type === "integer" ||
        type === "float_time" ||
        type === "progressbar") {
        var fromValue = value[0];
        var toValue = value[1];
        return [
            [key, ">=", fromValue],
            [key, "<=", toValue],
        ];
    }
    else if (type === "date") {
        var fromValue = value[0].format("YYYY-MM-DD");
        var toValue = value[1].format("YYYY-MM-DD");
        return [
            [key, ">=", fromValue],
            [key, "<=", toValue],
        ];
    }
    else {
        return [key, "=", convertBooleanParamIfNeeded(value)];
    }
};
var groupRangeValues = function (values) {
    var newValues = {};
    Object.keys(values).forEach(function (key) {
        var baseKey;
        if (key.indexOf("_from") !== -1) {
            baseKey = key.replace("_from", "");
        }
        else if (key.indexOf("_to") !== -1) {
            baseKey = key.replace("_to", "");
        }
        else {
            newValues[key] = values[key];
            return;
        }
        if (!newValues[baseKey]) {
            newValues[baseKey] = [];
        }
        newValues[baseKey].push(values[key]);
    });
    return newValues;
};
exports.groupRangeValues = groupRangeValues;
var removeUndefinedFields = function (values) {
    var newValues = __assign({}, values);
    Object.keys(newValues).forEach(function (key) { return newValues[key] === undefined && delete newValues[key]; });
    return newValues;
};
exports.removeUndefinedFields = removeUndefinedFields;
//# sourceMappingURL=searchFilterHelper.js.map