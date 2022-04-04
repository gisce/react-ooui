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
exports.fetchAction = void 0;
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var ooui_1 = require("@gisce/ooui");
var uuid_1 = require("uuid");
function fetchAction(_a) {
    var actionId = _a.actionId, _b = _a.rootContext, rootContext = _b === void 0 ? {} : _b, _c = _a.globalValues, globalValues = _c === void 0 ? {} : _c;
    return __awaiter(this, void 0, void 0, function () {
        var actionType, action, dataForAction, parsedContext, parsedDomain, _d, model, views, title, limit, finalViews, _i, views_1, viewArray, id_1, viewType, view_id, _e, id, type, initialView;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    actionType = "ir.actions.act_window";
                    action = actionType + "," + actionId;
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getActionData({
                            action: action,
                            context: rootContext,
                        })];
                case 1:
                    dataForAction = _f.sent();
                    parsedContext = ooui_1.parseContext({
                        context: dataForAction.context,
                        values: globalValues,
                        fields: {},
                    });
                    if (!dataForAction.domain) return [3 /*break*/, 3];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().evalDomain({
                            domain: dataForAction.domain,
                            values: globalValues,
                            context: __assign(__assign({}, rootContext), parsedContext),
                        })];
                case 2:
                    _d = _f.sent();
                    return [3 /*break*/, 4];
                case 3:
                    _d = [];
                    _f.label = 4;
                case 4:
                    parsedDomain = _d;
                    model = dataForAction.res_model, views = dataForAction.views, title = dataForAction.name, limit = dataForAction.limit;
                    finalViews = [];
                    _i = 0, views_1 = views;
                    _f.label = 5;
                case 5:
                    if (!(_i < views_1.length)) return [3 /*break*/, 9];
                    viewArray = views_1[_i];
                    id_1 = viewArray[0], viewType = viewArray[1];
                    if (!!id_1) return [3 /*break*/, 7];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                            model: model,
                            type: viewType,
                            id: id_1,
                            context: __assign(__assign({}, rootContext), parsedContext),
                        })];
                case 6:
                    view_id = (_f.sent()).view_id;
                    finalViews.push([view_id, viewType]);
                    return [3 /*break*/, 8];
                case 7:
                    finalViews.push(viewArray);
                    _f.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 5];
                case 9:
                    _e = finalViews[0], id = _e[0], type = _e[1];
                    initialView = { id: id, type: type };
                    return [2 /*return*/, {
                            title: title,
                            actionId: actionId,
                            actionType: actionType,
                            key: uuid_1.v4(),
                            views: views,
                            model: model,
                            context: __assign(__assign({}, rootContext), parsedContext),
                            domain: parsedDomain,
                            initialView: initialView,
                            limit: limit,
                        }];
            }
        });
    });
}
exports.fetchAction = fetchAction;
//# sourceMappingURL=dashboardHelper.js.map