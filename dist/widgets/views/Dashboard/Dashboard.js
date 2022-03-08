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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.Dashboard = void 0;
var react_1 = __importStar(require("react"));
var ActionView_1 = __importDefault(require("@/views/ActionView"));
var dashboardHelper_1 = require("./dashboardHelper");
require("react-resizable/css/styles.css");
require("react-grid-layout/css/styles.css");
var Graph_1 = require("../Graph/Graph");
var DashboardGrid_1 = require("../DashboardGrid");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var one2manyHelper_1 = require("@/helpers/one2manyHelper");
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var itemsField = "line_ids";
function Dashboard(props) {
    var model = props.model, _a = props.context, context = _a === void 0 ? {} : _a, id = props.id;
    var _b = react_1.useState([]), dashboardItems = _b[0], setDashboardItems = _b[1];
    var _c = react_1.useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = react_1.useState(), error = _d[0], setError = _d[1];
    var itemsFields = react_1.useRef();
    var boardFields = react_1.useRef();
    react_1.useEffect(function () {
        fetchData();
    }, [model, id, context]);
    function fetchData() {
        return __awaiter(this, void 0, void 0, function () {
            var view, values, model_1, items, originalItems, itemsWithActions, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setIsLoading(true);
                        setError(undefined);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, fetchView()];
                    case 2:
                        view = _a.sent();
                        return [4 /*yield*/, fetchValues(view)];
                    case 3:
                        values = _a.sent();
                        model_1 = view.fields[itemsField].relation;
                        items = values[itemsField].items;
                        boardFields.current = view.fields;
                        return [4 /*yield*/, fetchDashboardItems({
                                items: items,
                                model: model_1,
                                context: context,
                            })];
                    case 4:
                        originalItems = _a.sent();
                        return [4 /*yield*/, getItemsWithActions(originalItems)];
                    case 5:
                        itemsWithActions = _a.sent();
                        setDashboardItems(itemsWithActions);
                        setIsLoading(false);
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _a.sent();
                        setError(JSON.stringify(err_1));
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    }
    function fetchView() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                            model: model,
                            type: "form",
                            context: context,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    }
    function fetchDashboardItems(_a) {
        var items = _a.items, model = _a.model, context = _a.context;
        return __awaiter(this, void 0, void 0, function () {
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = itemsFields;
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                                model: model,
                                type: "form",
                                context: context,
                            })];
                    case 1:
                        _b.current = (_c.sent()).fields;
                        return [4 /*yield*/, one2manyHelper_1.readObjectValues({
                                treeFields: itemsFields.current,
                                formFields: itemsFields.current,
                                model: model,
                                items: items,
                                context: context,
                            })];
                    case 2: return [2 /*return*/, _c.sent()];
                }
            });
        });
    }
    function fetchValues(view) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            arch: view.arch,
                            model: model,
                            ids: [id],
                            fields: view.fields,
                            context: context,
                        })];
                    case 1: return [2 /*return*/, (_a.sent())[0]];
                }
            });
        });
    }
    function getItemsWithActions(items) {
        return __awaiter(this, void 0, void 0, function () {
            var itemsWithActions, _i, items_1, dashboardItem, values, actionId, actionData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemsWithActions = [];
                        _i = 0, items_1 = items;
                        _a.label = 1;
                    case 1:
                        if (!(_i < items_1.length)) return [3 /*break*/, 4];
                        dashboardItem = items_1[_i];
                        values = dashboardItem.values;
                        if (!(values.action_id && values.action_id.length > 0)) return [3 /*break*/, 3];
                        actionId = parseInt(values.action_id[0], 10);
                        return [4 /*yield*/, dashboardHelper_1.fetchAction({
                                actionId: actionId,
                                rootContext: context,
                            })];
                    case 2:
                        actionData = _a.sent();
                        itemsWithActions.push(__assign(__assign({}, dashboardItem), { actionData: actionData }));
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, itemsWithActions];
                }
            });
        });
    }
    function onPositionItemsChanged(itemPositions) {
        return __awaiter(this, void 0, void 0, function () {
            var differences, itemsToUpdate, itemsToUpdateWithUpdatedPos, valueToUpdate;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        differences = itemPositions.filter(function (itemPosition) {
                            var dashboardItem = dashboardItems.find(function (dashboardItem) { return dashboardItem.id === itemPosition.id; });
                            if (!dashboardItem) {
                                return false;
                            }
                            if (!dashboardItem.position) {
                                return true;
                            }
                            var remotePosition = __assign(__assign({}, JSON.parse(dashboardItem.position.replace(/'/g, '"'))), { id: dashboardItem.id });
                            return JSON.stringify(itemPosition) !== JSON.stringify(remotePosition);
                        });
                        if (differences.length === 0) {
                            return [2 /*return*/];
                        }
                        itemsToUpdate = dashboardItems.filter(function (dashboardItem) {
                            return differences.map(function (diff) { return diff.id; }).includes(dashboardItem.id);
                        });
                        itemsToUpdateWithUpdatedPos = itemsToUpdate.map(function (dashboardItem) {
                            var diffItem = __assign({}, differences.find(function (diffItem) { return diffItem.id === dashboardItem.id; }));
                            delete diffItem.id;
                            var item = __assign({}, dashboardItem);
                            delete item.actionData;
                            return __assign(__assign({}, dashboardItem), { operation: "pendingUpdate", values: __assign(__assign({}, dashboardItem.values), { position: JSON.stringify(diffItem).replace(/"/g, "'") }) });
                        });
                        valueToUpdate = {
                            fields: itemsFields.current,
                            items: itemsToUpdateWithUpdatedPos,
                        };
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().update({
                                model: model,
                                id: id,
                                values: (_a = {}, _a[itemsField] = valueToUpdate, _a),
                                fields: boardFields.current,
                                context: context,
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    if (error) {
        return (react_1.default.createElement(antd_1.Alert, { className: "mt-10 mb-20", message: error, type: "error", banner: true }));
    }
    if (isLoading) {
        return react_1.default.createElement(icons_1.LoadingOutlined, null);
    }
    return (react_1.default.createElement(DashboardGrid_1.DashboardGrid, { onPositionItemsChanged: onPositionItemsChanged }, dashboardItems.map(function (item, idx) {
        var actionData = item.actionData, values = item.values;
        var position = values.position, id = values.id;
        var _a = actionData, actionId = _a.actionId, actionType = _a.actionType, key = _a.key, title = _a.title, views = _a.views, model = _a.model, context = _a.context, domain = _a.domain, initialView = _a.initialView;
        var parmsParsed = {};
        try {
            parmsParsed = JSON.parse(position.replace(/'/g, '"'));
        }
        catch (err) {
            // console.error(`Error parsing parms: ${action.position}`);
            parmsParsed = { x: idx * 2, y: 0, w: 2, h: 3 };
        }
        var childContent = null;
        if ((initialView === null || initialView === void 0 ? void 0 : initialView.type) === "graph") {
            childContent = (react_1.default.createElement(Graph_1.Graph, { title: title, view_id: views.filter(function (view) { return view[1] === "graph"; })[0][0], model: model, context: context, domain: domain }));
        }
        else if (initialView !== undefined) {
            childContent = (react_1.default.createElement(ActionView_1.default, { action_id: actionId, action_type: actionType, tabKey: key, title: title, views: views, model: model, context: context, domain: domain, setCanWeClose: function () { }, initialView: initialView }));
        }
        return (react_1.default.createElement(DashboardGrid_1.DashboardGridItem, { key: id, id: id, title: title, parms: parmsParsed }, childContent));
    })));
}
exports.Dashboard = Dashboard;
//# sourceMappingURL=Dashboard.js.map