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
var FavouriteButton = function (props) {
    var onRetrieveShortcuts = props.onRetrieveShortcuts;
    var _a = react_1.useState(false), isFavourite = _a[0], setIsFavourite = _a[1];
    var _b = react_1.useState(false), dropdownVisible = _b[0], setDropdownVisible = _b[1];
    var _c = react_1.useState([]), shortcuts = _c[0], setShortcuts = _c[1];
    var _d = react_1.useState(true), loading = _d[0], setLoading = _d[1];
    var tabManagerContext = react_1.useContext(TabManagerContext_1.TabManagerContext);
    var openShortcut = (tabManagerContext || {}).openShortcut;
    react_1.useEffect(function () {
        getShortcuts();
    }, []);
    function getShortcuts() {
        return __awaiter(this, void 0, void 0, function () {
            var shortcuts_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
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
        if (shortcut) {
            openShortcut(shortcut);
        }
    }
    function handleVisibleChange(flag) {
        setDropdownVisible(flag);
    }
    var menu = (react_1.default.createElement(antd_2.Menu, { onClick: handleMenuClick },
        react_1.default.createElement("div", { style: { width: 300, padding: 5, paddingLeft: 15, color: "#ccc" } }, "Els meus favorits".toUpperCase()),
        react_1.default.createElement(antd_2.Menu.Divider, null),
        loading ? (react_1.default.createElement(antd_1.Spin, null)) : (react_1.default.createElement(react_1.default.Fragment, null, shortcuts.map(function (shortcut) { return (react_1.default.createElement(antd_2.Menu.Item, { key: shortcut.id },
            react_1.default.createElement(FavouriteItem, { title: shortcut.name, type: shortcut.type }))); })))));
    function FavouriteItem(_a) {
        var title = _a.title, type = _a.type;
        var icon = type === "tree" ? react_1.default.createElement(icons_1.TableOutlined, null) : react_1.default.createElement(icons_1.FormOutlined, null);
        return (react_1.default.createElement(antd_1.Row, { wrap: false },
            react_1.default.createElement(antd_1.Col, { flex: "none", style: { paddingRight: 20 } }, icon),
            react_1.default.createElement(antd_1.Col, { flex: "auto" }, title)));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Button, { type: isFavourite ? "primary" : "default", icon: isFavourite ? (react_1.default.createElement(icons_1.StarFilled, { style: { color: "white" } })) : (react_1.default.createElement(icons_1.StarOutlined, null)), style: { width: 50 }, onClick: function () { return setIsFavourite(!isFavourite); } }),
        react_1.default.createElement(antd_2.Dropdown, { overlay: menu, onVisibleChange: handleVisibleChange, visible: dropdownVisible },
            react_1.default.createElement(antd_1.Button, { style: { width: 25 }, icon: react_1.default.createElement(icons_1.DownOutlined, { style: { fontSize: "0.5em" } }), onClick: function (e) { return e.preventDefault(); } }))));
};
exports.default = FavouriteButton;
//# sourceMappingURL=FavouriteButton.js.map