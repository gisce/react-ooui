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
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var Form_1 = __importDefault(require("@/widgets/views/Form"));
var SearchTree_1 = __importDefault(require("@/widgets/views/SearchTree"));
var ooui_1 = require("ooui");
var ActionViewContext_1 = __importDefault(require("@/context/ActionViewContext"));
var TitleHeader_1 = __importDefault(require("@/ui/TitleHeader"));
var FormActionBar_1 = __importDefault(require("@/actionbar/FormActionBar"));
var TreeActionBar_1 = __importDefault(require("@/actionbar/TreeActionBar"));
function ActionView(props) {
    var _this = this;
    var action = props.action, title = props.title;
    var _a = react_1.useState("tree"), currentView = _a[0], setCurrentView = _a[1];
    var _b = react_1.useState([]), availableViews = _b[0], setAvailableViews = _b[1];
    var _c = react_1.useState(), currentModel = _c[0], setCurrentModel = _c[1];
    var _d = react_1.useState(), treeView = _d[0], setTreeView = _d[1];
    var _e = react_1.useState(), formView = _e[0], setFormView = _e[1];
    var _f = react_1.useState(), domain = _f[0], setDomain = _f[1];
    var _g = react_1.useState(false), isLoading = _g[0], setIsLoading = _g[1];
    var _h = react_1.useState(), currentId = _h[0], setCurrentId = _h[1];
    var _j = react_1.useState(), currentItemIndex = _j[0], setCurrentItemIndex = _j[1];
    var _k = react_1.useState([]), results = _k[0], setResults = _k[1];
    var formRef = react_1.useRef();
    var fetchActionData = function () { return __awaiter(_this, void 0, void 0, function () {
        var dataForAction, parsedDomain;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getViewsForAction({
                        action: action,
                    })];
                case 1:
                    dataForAction = _a.sent();
                    parsedDomain = ooui_1.parseDomain({
                        domainValue: dataForAction.domain,
                        values: {},
                        fields: {},
                    });
                    setDomain(parsedDomain);
                    setFormView(dataForAction.views.get("form"));
                    setTreeView(dataForAction.views.get("tree"));
                    setCurrentModel(dataForAction.model);
                    return [2 /*return*/, dataForAction];
            }
        });
    }); };
    function fetchData() {
        return __awaiter(this, void 0, void 0, function () {
            var actionData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setIsLoading(true);
                        return [4 /*yield*/, fetchActionData()];
                    case 1:
                        actionData = _a.sent();
                        if (actionData.views.has("tree")) {
                            setCurrentView("tree");
                        }
                        else {
                            setCurrentView("form");
                        }
                        setAvailableViews(Array.from(actionData.views.keys()));
                        setIsLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    react_1.useEffect(function () {
        fetchData();
    }, [action]);
    function content() {
        if (isLoading) {
            return react_1.default.createElement(antd_1.Spin, null);
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Form_1.default, { rootForm: true, visible: currentView === "form", ref: formRef, model: currentModel, arch: formView === null || formView === void 0 ? void 0 : formView.arch, fields: formView === null || formView === void 0 ? void 0 : formView.fields, id: currentId, onSubmitSucceed: function (id) {
                    var itemIndex = results.findIndex(function (item) {
                        return item === id;
                    });
                    if (itemIndex === -1) {
                        results.push(id);
                        setResults(results);
                        setCurrentItemIndex(results.length - 1);
                    }
                } }),
            react_1.default.createElement(SearchTree_1.default, { visible: currentView === "tree", rootTree: true, model: currentModel, domain: domain, onRowClicked: function (event) {
                    var id = event.id;
                    setCurrentId(id);
                    var itemIndex = results.findIndex(function (item) {
                        return item === id;
                    });
                    setCurrentItemIndex(itemIndex);
                    setCurrentView("form");
                } })));
    }
    function onNewClicked() {
        setCurrentId(undefined);
        setCurrentView("form");
    }
    return (react_1.default.createElement(ActionViewContext_1.default, { title: title, currentView: currentView, setCurrentView: setCurrentView, availableViews: availableViews, formRef: formRef, onNewClicked: onNewClicked, currentId: currentId, setCurrentId: setCurrentId, setCurrentItemIndex: setCurrentItemIndex, currentItemIndex: currentItemIndex, results: results, setResults: setResults, currentModel: currentModel },
        react_1.default.createElement(TitleHeader_1.default, null, currentView === "form" ? (react_1.default.createElement(FormActionBar_1.default, { key: Math.random() * 10000 })) : (react_1.default.createElement(TreeActionBar_1.default, null))),
        content()));
}
exports.default = ActionView;
//# sourceMappingURL=ActionView.js.map