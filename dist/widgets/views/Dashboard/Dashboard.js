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
function Dashboard(props) {
    var arj = props.arch, _a = props.context, context = _a === void 0 ? {} : _a;
    var arch = "<?xml version=\"1.0\"?>\n  <dashboard string=\"Partner dashboard\">\n      <dashboard_item action_id=\"71\" position=\"{'x':0,'y':0,'w':6,'h':24}\" />\n      <dashboard_item action_id=\"75\" position=\"{'x':7,'y':0,'w':6,'h':24}\" />\n  </dashboard>\n  ";
    var _b = react_1.useState(), dashboardOoui = _b[0], setDashboardOoui = _b[1];
    var _c = react_1.useState([]), actionsData = _c[0], setActionsData = _c[1];
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
    return (react_1.default.createElement(react_formiga_components_1.Dashboard, null, actionsData.map(function (action) {
        var actionId = action.actionId, actionType = action.actionType, key = action.key, title = action.title, views = action.views, model = action.model, context = action.context, domain = action.domain, initialView = action.initialView;
        var parmsParsed = {};
        try {
            parmsParsed = JSON.parse(action.position.replace(/'/g, '"'));
        }
        catch (err) {
            // console.error(`Error parsing parms: ${action.position}`);
            parmsParsed = { x: 0, y: 0, w: 4, h: 4 };
        }
        return (react_1.default.createElement(react_formiga_components_1.DashboardItem, { key: action.action_id, id: action.action_id, title: action.title, parms: parmsParsed },
            react_1.default.createElement(ActionView_1.default, { action_id: actionId, action_type: actionType, tabKey: key, title: title, views: views, model: model, context: context, domain: domain, setCanWeClose: function () { }, initialView: initialView })));
    })));
}
exports.Dashboard = Dashboard;
//# sourceMappingURL=Dashboard.js.map