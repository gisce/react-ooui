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
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var antd_2 = require("antd");
var ActionErrorDialog_1 = __importDefault(require("@/ui/ActionErrorDialog"));
var TabManagerContext_1 = require("@/context/TabManagerContext");
var LocaleContext_1 = require("@/context/LocaleContext");
var FavouriteButton = function (props) {
    var onRetrieveShortcuts = props.onRetrieveShortcuts, onCheckIsFavourite = props.onCheckIsFavourite, onAddFavourite = props.onAddFavourite, onRemoveFavourite = props.onRemoveFavourite;
    var _a = react_1.useState(false), isFavourite = _a[0], setIsFavourite = _a[1];
    var _b = react_1.useState(false), dropdownVisible = _b[0], setDropdownVisible = _b[1];
    var _c = react_1.useState([]), shortcuts = _c[0], setShortcuts = _c[1];
    var _d = react_1.useState(true), loading = _d[0], setLoading = _d[1];
    var _e = react_1.useState(), currentShortcutId = _e[0], setCurrentShortcutId = _e[1];
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    var tabManagerContext = react_1.useContext(TabManagerContext_1.TabManagerContext);
    var _f = tabManagerContext || {}, openShortcut = _f.openShortcut, tabs = _f.tabs, activeKey = _f.activeKey, currentView = _f.currentView, currentId = _f.currentId, openDefaultActionForModel = _f.openDefaultActionForModel;
    react_1.useEffect(function () {
        getShortcuts();
    }, []);
    react_1.useEffect(function () {
        checkFavourite();
    }, [tabs, activeKey, currentView, currentId]);
    function getShortcuts() {
        return __awaiter(this, void 0, void 0, function () {
            var shortcuts_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        setLoading(true);
                        return [4 /*yield*/, onRetrieveShortcuts()];
                    case 1:
                        shortcuts_1 = _a.sent();
                        setShortcuts(shortcuts_1);
                        return [3 /*break*/, 4];
                    case 2:
                        e_1 = _a.sent();
                        ActionErrorDialog_1.default(e_1);
                        return [3 /*break*/, 4];
                    case 3:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function handleMenuClick(event) {
        var key = event.key;
        var shortcut = shortcuts.find(function (s) { return s.id === Number(key); });
        if ((shortcut === null || shortcut === void 0 ? void 0 : shortcut.action_type) === "ir.actions.wizard") {
            return;
        }
        if (shortcut) {
            openShortcut(shortcut);
        }
        setDropdownVisible(false);
    }
    function handleVisibleChange(flag) {
        setDropdownVisible(flag);
    }
    function checkFavourite() {
        return __awaiter(this, void 0, void 0, function () {
            var currentTab, _a, action_id, action_type, view_id, res_id, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!currentView) {
                            return [2 /*return*/];
                        }
                        currentTab = tabs.find(function (t) { return t.key === activeKey; });
                        _a = (currentTab === null || currentTab === void 0 ? void 0 : currentTab.action) || {}, action_id = _a.id, action_type = _a.type;
                        if (!action_id || !action_type) {
                            setIsFavourite(false);
                            return [2 /*return*/];
                        }
                        view_id = currentView.id;
                        res_id = false;
                        if (currentView.type === "form") {
                            res_id = currentId ? currentId : false;
                        }
                        return [4 /*yield*/, onCheckIsFavourite({
                                action_id: action_id,
                                action_type: action_type,
                                view_id: view_id,
                                res_id: res_id,
                            })];
                    case 1:
                        result = _b.sent();
                        if (result !== false) {
                            setCurrentShortcutId(result);
                        }
                        setIsFavourite(result !== false);
                        return [2 /*return*/];
                }
            });
        });
    }
    function editFavourites() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                setDropdownVisible(false);
                openDefaultActionForModel === null || openDefaultActionForModel === void 0 ? void 0 : openDefaultActionForModel({ model: "ir.ui.view_sc" });
                return [2 /*return*/];
            });
        });
    }
    var menu = (react_1.default.createElement(antd_2.Menu, { onClick: handleMenuClick },
        react_1.default.createElement("div", { style: { width: 300, padding: 5, display: "flex" } },
            react_1.default.createElement("div", { style: { paddingLeft: 15, color: "#ccc" } }, t("favorites").toUpperCase()),
            react_1.default.createElement("div", { style: { flexGrow: 1, paddingLeft: 10 } },
                react_1.default.createElement(antd_1.Tooltip, { title: t("edit_favorites") },
                    react_1.default.createElement(icons_1.EditOutlined, { style: { color: "#1890FF", cursor: "pointer" }, onClick: editFavourites })))),
        react_1.default.createElement(antd_2.Menu.Divider, null),
        loading ? (react_1.default.createElement(antd_1.Spin, null)) : shortcuts.length > 0 ? (react_1.default.createElement(react_1.default.Fragment, null, shortcuts.map(function (shortcut) { return (react_1.default.createElement(antd_2.Menu.Item, { key: shortcut.id },
            react_1.default.createElement(FavouriteItem, { title: shortcut.name, type: shortcut.view_type }))); }))) : (react_1.default.createElement("div", { style: { width: 300, padding: 5, paddingLeft: 15 } }, t("no_favorites")))));
    function FavouriteItem(_a) {
        var title = _a.title, type = _a.type;
        var icon = type === "tree" ? react_1.default.createElement(icons_1.TableOutlined, null) : react_1.default.createElement(icons_1.FormOutlined, null);
        return (react_1.default.createElement(antd_1.Row, { wrap: false },
            react_1.default.createElement(antd_1.Col, { flex: "none", style: { paddingRight: 20 } }, icon),
            react_1.default.createElement(antd_1.Col, { flex: "auto" }, title)));
    }
    function toggleFavourite() {
        return __awaiter(this, void 0, void 0, function () {
            var currentTab, _a, action_id, action_type, view_id, res_id;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(isFavourite && currentShortcutId)) return [3 /*break*/, 2];
                        return [4 /*yield*/, onRemoveFavourite(currentShortcutId)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!currentView) {
                            return [2 /*return*/];
                        }
                        currentTab = tabs.find(function (t) { return t.key === activeKey; });
                        _a = (currentTab === null || currentTab === void 0 ? void 0 : currentTab.action) || {}, action_id = _a.id, action_type = _a.type;
                        view_id = currentView.id;
                        res_id = false;
                        if (!action_id || !action_type) {
                            setIsFavourite(false);
                            return [2 /*return*/];
                        }
                        if (currentView.type === "form") {
                            res_id = currentId ? currentId : false;
                        }
                        return [4 /*yield*/, onAddFavourite({
                                action_id: action_id,
                                action_type: action_type,
                                view_id: view_id,
                                res_id: res_id,
                            })];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [4 /*yield*/, getShortcuts()];
                    case 5:
                        _b.sent();
                        setIsFavourite(!isFavourite);
                        return [2 /*return*/];
                }
            });
        });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Button, { type: isFavourite ? "primary" : "default", icon: isFavourite ? (react_1.default.createElement(icons_1.StarFilled, { style: { color: "white" } })) : (react_1.default.createElement(icons_1.StarOutlined, null)), style: { width: 50 }, onClick: toggleFavourite }),
        react_1.default.createElement(antd_2.Dropdown, { overlay: menu, onVisibleChange: handleVisibleChange, visible: dropdownVisible },
            react_1.default.createElement(antd_1.Button, { style: { width: 25 }, icon: react_1.default.createElement(icons_1.DownOutlined, { style: { fontSize: "0.5em" } }), onClick: function (e) { return e.preventDefault(); } }))));
};
exports.default = FavouriteButton;
//# sourceMappingURL=FavouriteButton.js.map