"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
// Since the format we have to send when we'll write an object (create or update)
// Is different than the one that we get when reading, we must convert certain fields
//
var getErpValues = function (_a) {
    var values = _a.values, touchedValues = _a.touchedValues, fields = _a.fields;
    var processedTouchedValues = {};
    Object.entries(touchedValues).forEach(function (item) {
        var name = item[0], value = item[1];
        if (fields[name] &&
            fields[name].type === "many2one" &&
            Array.isArray(value)) {
            processedTouchedValues[name] = value[0] || null;
            return;
        }
        processedTouchedValues[name] = value;
    });
    return processedTouchedValues;
};
exports.default = getErpValues;
//# sourceMappingURL=erpWriteHelper.js.map