"use strict";
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
var ooui_1 = require("@gisce/ooui");
var react_formiga_components_1 = require("@gisce/react-formiga-components");
var ActionView_1 = __importDefault(require("@/views/ActionView"));
var dashboardHelper_1 = require("./dashboardHelper");
require("@gisce/react-formiga-components/build/index.css");
var Graph_1 = require("../Graph/Graph");
function Dashboard(props) {
    var arch = props.arch, _a = props.context, context = _a === void 0 ? {} : _a;
    var _b = react_1.useState(), dashboardOoui = _b[0], setDashboardOoui = _b[1];
    var _c = react_1.useState([]), _ = _c[0], setActionsData = _c[1];
    var actionsData = [
        {
            parms: "False",
            title: "Partners",
            actionId: 15,
            actionType: "ir.actions.act_window",
            key: "b27b405c-60b6-42c0-b3db-376b5e9c21d7",
            views: [
                [96, "graph"],
                [97, "form"],
                [false, "calendar"],
            ],
            model: "res.partner",
            context: {},
            domain: [],
            initialView: {
                id: 96,
                type: "graph",
            },
        },
        {
            parms: "False",
            title: "Partners",
            actionId: 14,
            actionType: "ir.actions.act_window",
            key: "b27b405c-60b6-42c0-b3db-376b5e9c21d1",
            views: [
                [96, "graph"],
                [97, "form"],
                [false, "calendar"],
            ],
            model: "giscedata.lectures.comptador",
            context: {},
            domain: [],
            initialView: {
                id: 96,
                type: "graph",
            },
        },
        {
            parms: "False",
            title: "Partners",
            actionId: 11,
            actionType: "ir.actions.act_window",
            key: "b27b405c-60b6-42c0-b3db-339c21d1",
            views: [
                [96, "graph"],
                [97, "form"],
                [false, "calendar"],
            ],
            model: "giscedata.polissa",
            context: {},
            domain: [],
            initialView: {
                id: 96,
                type: "graph",
            },
        },
        {
            parms: "False",
            title: "Partners",
            actionId: 12,
            actionType: "ir.actions.act_window",
            key: "b27b405c-6336-42c0-b3db-339c21d1",
            views: [
                [96, "graph"],
                [97, "form"],
                [false, "calendar"],
            ],
            model: "project.task",
            context: {},
            domain: [],
            initialView: {
                id: 96,
                type: "graph",
            },
        },
    ];
    // const actionsData = [
    //   {
    //     actionId: 71,
    //     actionType: "ir.actions.act_window",
    //     context: {},
    //     domain: [],
    //     initialView: { id: 1337, type: "graph" },
    //     model: "res.partner",
    //     title: "Partners count",
    //     views: [[1337, "graph"]],
    //   },
    // ];
    function fetchData() {
        return __awaiter(this, void 0, void 0, function () {
            var fetchedActionsPromises, _i, _a, actionOoui, fetchedActions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fetchedActionsPromises = [];
                        for (_i = 0, _a = dashboardOoui.items; _i < _a.length; _i++) {
                            actionOoui = _a[_i];
                            fetchedActionsPromises.push(dashboardHelper_1.fetchAction({ actionOoui: actionOoui }));
                        }
                        return [4 /*yield*/, Promise.all(fetchedActionsPromises)];
                    case 1:
                        fetchedActions = _b.sent();
                        setActionsData(fetchedActions);
                        return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        // We parse the XML and create the dashboard ooui object
        var parsedDashboardOoui = new ooui_1.Dashboard(arch);
        setDashboardOoui(parsedDashboardOoui);
    }, [arch]);
    react_1.useEffect(function () {
        if (dashboardOoui) {
            // We should retrieve every action data
            fetchData();
        }
    }, [dashboardOoui]);
    return (react_1.default.createElement(react_formiga_components_1.Dashboard, null, actionsData.map(function (action, idx) {
        var _a = action, actionId = _a.actionId, actionType = _a.actionType, key = _a.key, title = _a.title, views = _a.views, model = _a.model, context = _a.context, domain = _a.domain, initialView = _a.initialView;
        var parmsParsed = {};
        try {
            parmsParsed = JSON.parse(action.position.replace(/'/g, '"'));
        }
        catch (err) {
            // console.error(`Error parsing parms: ${action.position}`);
            parmsParsed = { x: idx * 2, y: 0, w: 2, h: 3 };
        }
        var childContent = null;
        if ((initialView === null || initialView === void 0 ? void 0 : initialView.type) === "graph") {
            childContent = (react_1.default.createElement(Graph_1.Graph, { view_id: views.filter(function (view) { return view[1] === "graph"; })[0][0], model: model, context: context, domain: domain }));
        }
        else if (initialView !== undefined) {
            childContent = (react_1.default.createElement(ActionView_1.default, { action_id: actionId, action_type: actionType, tabKey: key, title: title, views: views, model: model, context: context, domain: domain, setCanWeClose: function () { }, initialView: initialView }));
        }
        return (react_1.default.createElement(react_formiga_components_1.DashboardItem, { key: actionId, id: actionId, title: title, parms: parmsParsed }, childContent));
    })));
}
exports.Dashboard = Dashboard;
//# sourceMappingURL=Dashboard.js.map