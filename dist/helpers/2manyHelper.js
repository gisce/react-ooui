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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemToUpdate = exports.getTemporalIdNumber = exports.addOrUpdateItem = void 0;
var addOrUpdateItem = function (_a) {
    var itemToUpdate = _a.itemToUpdate, items = _a.items;
    if (!items.map(function (item) { return item.id; }).includes(itemToUpdate.id)) {
        return __spreadArray(__spreadArray([], items), [itemToUpdate]);
    }
    return items.map(function (item) {
        if (item.id === itemToUpdate.id) {
            return itemToUpdate;
        }
        return item;
    });
};
exports.addOrUpdateItem = addOrUpdateItem;
var getTemporalIdNumber = function (_a) {
    var ids = _a.ids;
    var newId;
    while (newId === undefined) {
        var tempId = Math.floor(Math.random() * 1000) + 1;
        if (!ids.includes(tempId)) {
            newId = tempId;
        }
    }
    return newId;
};
exports.getTemporalIdNumber = getTemporalIdNumber;
var getItemToUpdate = function (_a) {
    var id = _a.id, items = _a.items, touchedValues = _a.touchedValues;
    var itemToUpdate;
    if (!id) {
        var newId = getTemporalIdNumber({
            ids: items.map(function (item) { return item.id; }),
        });
        itemToUpdate = {
            operation: "create",
            id: newId,
            values: __assign(__assign({}, touchedValues), { id: newId }),
        };
    }
    else {
        var item = items.find(function (it) {
            return it.id === id;
        });
        if (Object.keys(touchedValues).length > 0) {
            var newOperationStatus = (item === null || item === void 0 ? void 0 : item.operation) !== "create" ? "modify" : "create";
            itemToUpdate = {
                operation: newOperationStatus,
                id: item === null || item === void 0 ? void 0 : item.id,
                values: __assign(__assign({}, item === null || item === void 0 ? void 0 : item.values), touchedValues),
                touchedValues: touchedValues,
            };
        }
        else {
            itemToUpdate = item;
        }
    }
    return itemToUpdate;
};
exports.getItemToUpdate = getItemToUpdate;
//# sourceMappingURL=2manyHelper.js.map