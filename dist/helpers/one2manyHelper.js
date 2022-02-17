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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextPendingId = exports.linkItem = exports.removeItems = exports.readObjectValues = void 0;
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var readObjectValues = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var items, model, formFields, treeFields, _a, context, idsToFetch, values, formValues, treeValues;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                items = options.items, model = options.model, formFields = options.formFields, treeFields = options.treeFields, _a = options.context, context = _a === void 0 ? {} : _a;
                idsToFetch = items.map(function (item) { return item.id; });
                return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                        model: model,
                        ids: idsToFetch,
                        fields: __assign(__assign({}, formFields), treeFields),
                        context: context,
                    })];
            case 1:
                values = _b.sent();
                formValues = values.map(function (result) {
                    var resultFormValues = {};
                    Object.keys(result).forEach(function (key) {
                        if (formFields.hasOwnProperty(key) || key === "id") {
                            resultFormValues[key] = result[key];
                        }
                    });
                    return resultFormValues;
                });
                treeValues = values.map(function (result) {
                    var resultTreeValues = {};
                    Object.keys(result).forEach(function (key) {
                        if (treeFields.hasOwnProperty(key) || key === "id") {
                            resultTreeValues[key] = result[key];
                        }
                    });
                    return resultTreeValues;
                });
                // We fill the values property of the One2manyItem with the retrieved values from the API
                return [2 /*return*/, items.map(function (item) {
                        var fetchedFormItemValues = formValues.find(function (itemValues) { return itemValues.id === item.id; });
                        var fetchedTreeItemValues = treeValues.find(function (itemValues) { return itemValues.id === item.id; });
                        return __assign(__assign({}, item), { values: fetchedFormItemValues, treeValues: fetchedTreeItemValues });
                    })];
        }
    });
}); };
exports.readObjectValues = readObjectValues;
var removeItems = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var model, activeId, fieldName, idsToRemove, fields, isMany2many, values, _i, idsToRemove_1, idToRemove;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                model = options.model, activeId = options.activeId, fieldName = options.fieldName, idsToRemove = options.idsToRemove, fields = options.fields, isMany2many = options.isMany2many;
                values = {};
                values[fieldName] = [];
                for (_i = 0, idsToRemove_1 = idsToRemove; _i < idsToRemove_1.length; _i++) {
                    idToRemove = idsToRemove_1[_i];
                    values[fieldName].push([isMany2many ? 3 : 2, idToRemove]);
                }
                return [4 /*yield*/, ConnectionProvider_1.default.getHandler().update({
                        model: model,
                        id: activeId,
                        values: values,
                        fields: fields,
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.removeItems = removeItems;
var linkItem = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var model, activeId, fieldName, id, fields, values;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                model = options.model, activeId = options.activeId, fieldName = options.fieldName, id = options.id, fields = options.fields;
                values = {};
                values[fieldName] = [[4, id]];
                return [4 /*yield*/, ConnectionProvider_1.default.getHandler().update({
                        model: model,
                        id: activeId,
                        values: values,
                        fields: fields,
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.linkItem = linkItem;
var getNextPendingId = function (items) {
    var negativeIds = items
        .filter(function (item) { return item.id && item.id < 0; })
        .map(function (item) { return item.id; });
    if (negativeIds.length === 0) {
        return -1;
    }
    else {
        return Math.min.apply(Math, negativeIds) - 1;
    }
};
exports.getNextPendingId = getNextPendingId;
//# sourceMappingURL=one2manyHelper.js.map