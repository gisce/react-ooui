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
exports.Many2oneSuffix = void 0;
var react_1 = __importStar(require("react"));
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var TabManagerContext_1 = require("@/context/TabManagerContext");
var Many2oneSuffixModal_1 = require("./Many2oneSuffixModal");
var ContentRootContext_1 = require("@/context/ContentRootContext");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var formHelper_1 = require("@/helpers/formHelper");
var ActionErrorDialog_1 = __importDefault(require("@/ui/ActionErrorDialog"));
var LocaleContext_1 = require("@/context/LocaleContext");
var Many2oneSuffix = function (props) {
    var _a, _b;
    var id = props.id, model = props.model;
    var _c = react_1.useState(false), actionModalVisible = _c[0], setActionModalVisible = _c[1];
    var _d = react_1.useState(false), printModalVisible = _d[0], setPrintModalVisible = _d[1];
    var _e = react_1.useState(false), isLoading = _e[0], setIsLoading = _e[1];
    var _f = react_1.useState(), formView = _f[0], setFormView = _f[1];
    var _g = react_1.useState(), targetValues = _g[0], setTargetValues = _g[1];
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    var tabManagerContext = react_1.useContext(TabManagerContext_1.TabManagerContext);
    var openRelate = (tabManagerContext || {}).openRelate;
    var contentRootContext = react_1.useContext(ContentRootContext_1.ContentRootContext);
    var processAction = (contentRootContext || {}).processAction;
    if (!id) {
        return null;
    }
    function fetchData() {
        return __awaiter(this, void 0, void 0, function () {
            var formView_1, fields, arch, values, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setIsLoading(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView({
                                model: model,
                                type: "form",
                            })];
                    case 2:
                        formView_1 = _a.sent();
                        setFormView(formView_1);
                        fields = formView_1.fields, arch = formView_1.arch;
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                                arch: arch,
                                model: model,
                                ids: [id],
                                fields: fields,
                            })];
                    case 3:
                        values = (_a.sent())[0];
                        setTargetValues(__assign(__assign({}, formHelper_1.processValues(values, fields)), { active_id: id }));
                        setIsLoading(false);
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        setIsLoading(false);
                        ActionErrorDialog_1.default(err_1);
                        return [2 /*return*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    function menu() {
        var _a;
        if (isLoading) {
            return (react_1.default.createElement(antd_1.Menu, null,
                react_1.default.createElement("div", { style: { padding: 15 } },
                    react_1.default.createElement(antd_1.Spin, null))));
        }
        if (!formView || !formView.toolbar) {
            return react_1.default.createElement(antd_1.Menu, null);
        }
        var relateItems = (_a = formView === null || formView === void 0 ? void 0 : formView.toolbar) === null || _a === void 0 ? void 0 : _a.relate.map(function (item) {
            return react_1.default.createElement(antd_1.Menu.Item, { key: item.id }, item.name);
        });
        return (react_1.default.createElement(antd_1.Menu, { onClick: handleMenuClick }, [
            react_1.default.createElement(antd_1.Menu.Item, { key: "action", disabled: !formView.toolbar.action || formView.toolbar.action.length === 0, icon: react_1.default.createElement(icons_1.ThunderboltOutlined, null) }, t("action")),
            react_1.default.createElement(antd_1.Menu.Item, { key: "print", disabled: !formView.toolbar.print || formView.toolbar.print.length === 0, icon: react_1.default.createElement(icons_1.PrinterOutlined, null) }, t("report")),
            react_1.default.createElement(antd_1.Menu.Divider, null),
            react_1.default.createElement(antd_1.Menu.ItemGroup, { title: react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(icons_1.EnterOutlined, null),
                    " ",
                    react_1.default.createElement("span", null,
                        " ",
                        t("related"))) }, relateItems),
        ]));
    }
    function handleMenuClick(event) {
        if (event.key === "action") {
            setActionModalVisible(true);
        }
        else if (event.key === "print") {
            setPrintModalVisible(true);
        }
        else {
            var relateItemClicked = formView.toolbar.relate.find(function (item) {
                return item.id === parseInt(event.key);
            });
            if (!relateItemClicked) {
                return;
            }
            openRelate({
                relateData: relateItemClicked,
                values: targetValues,
                fields: formView.fields,
            });
        }
    }
    function onActionItemClicked(actionData) {
        setActionModalVisible(false);
        processAction === null || processAction === void 0 ? void 0 : processAction({
            actionData: actionData,
            values: targetValues,
            fields: formView.fields,
            context: { active_id: id, active_ids: [id] },
        });
    }
    function onPrintItemClicked(reportData) {
        setPrintModalVisible(false);
        processAction === null || processAction === void 0 ? void 0 : processAction({
            actionData: __assign(__assign({}, reportData), { datas: __assign(__assign({}, (reportData.datas || {})), { ids: [id] }) }),
            values: targetValues,
            fields: formView.fields,
        });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Dropdown, { overlay: menu(), trigger: ["click"] },
            react_1.default.createElement(icons_1.RightCircleOutlined, { style: { color: "rgba(0,0,0,.45)" }, onClick: function (e) {
                    e.preventDefault();
                    fetchData();
                } })),
        react_1.default.createElement(Many2oneSuffixModal_1.Many2oneSuffixModal, { visible: actionModalVisible, items: (_a = formView === null || formView === void 0 ? void 0 : formView.toolbar) === null || _a === void 0 ? void 0 : _a.action, onItemClicked: onActionItemClicked, onCancel: function () { return setActionModalVisible(false); } }),
        react_1.default.createElement(Many2oneSuffixModal_1.Many2oneSuffixModal, { visible: printModalVisible, items: (_b = formView === null || formView === void 0 ? void 0 : formView.toolbar) === null || _b === void 0 ? void 0 : _b.print, onItemClicked: onPrintItemClicked, onCancel: function () { return setPrintModalVisible(false); } })));
};
exports.Many2oneSuffix = Many2oneSuffix;
//# sourceMappingURL=Many2oneSuffix.js.map