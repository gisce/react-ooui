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
exports.formatX2ManyValues = exports.getErpValues = void 0;
//
// Since the format we have to send when we'll write an object (create or update)
// Is different than the one that we get when reading, we must convert certain fields
//
var getErpValues = function (_a) {
    var touchedValues = _a.touchedValues, fields = _a.fields;
    var processedTouchedValues = {};
    Object.entries(touchedValues).forEach(function (item) {
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
                if (item.operation === "create") {
                    return [0, 0, __assign(__assign({}, item.values), { id: undefined })];
                }
                if (item.operation === "modify") {
                    return [1, item.id, item.touchedValues];
                }
                if (item.operation === "remove" && fields[name].type === "one2many") {
                    return [2, item.id];
                }
                if (item.operation === "remove" && fields[name].type === "many2many") {
                    return [3, item.id];
                }
            });
            return;
        }
        processedTouchedValues[name] = value;
    });
    return processedTouchedValues;
};
exports.getErpValues = getErpValues;
var formatX2ManyValues = function (_a) {
    var values = _a.values, fields = _a.fields;
    var processedValues = {};
    Object.entries(values).forEach(function (item) {
        var name = item[0], value = item[1];
        if (fields[name] &&
            (fields[name].type === "many2many" || fields[name].type === "one2many") &&
            Array.isArray(value) &&
            value.length > 0 &&
            typeof value[0] == "number") {
            processedValues[name] = value.map(function (itemId) {
                return {
                    operation: "original",
                    id: itemId,
                };
            });
            return;
        }
        processedValues[name] = value;
    });
    return processedValues;
};
exports.formatX2ManyValues = formatX2ManyValues;
//# sourceMappingURL=erpReadWriteHelper.js.map