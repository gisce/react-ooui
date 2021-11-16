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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormModal = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var Form_1 = __importDefault(require("@/widgets/views/Form"));
var useWindowDimensions_1 = __importDefault(require("@/hooks/useWindowDimensions"));
var FormModalContext_1 = __importDefault(require("@/context/FormModalContext"));
var icons_1 = require("@ant-design/icons");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var FormModal = function (props) {
    var visible = props.visible, id = props.id, title = props.title, _a = props.buttonModal, buttonModal = _a === void 0 ? false : _a, onCancel = props.onCancel, _b = props.isMenuAction, isMenuAction = _b === void 0 ? false : _b, actionData = props.actionData, rest = __rest(props, ["visible", "id", "title", "buttonModal", "onCancel", "isMenuAction", "actionData"]);
    var modalWidth = useWindowDimensions_1.default().modalWidth;
    var _c = react_1.useState(title), formTitle = _c[0], setFormTitle = _c[1];
    var _d = react_1.useState(false), isFavourite = _d[0], setIsFavourite = _d[1];
    var _e = react_1.useState(), currentShortcutId = _e[0], setCurrentShortcutId = _e[1];
    react_1.useEffect(function () {
        if (isMenuAction) {
            checkFavourite();
        }
    }, [actionData, isMenuAction]);
    function checkFavourite() {
        return __awaiter(this, void 0, void 0, function () {
            var action_id, res_id, action_type, view_id, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        action_id = actionData.action_id, res_id = actionData.res_id, action_type = actionData.action_type, view_id = actionData.view_id;
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().isShortcutFavorite({
                                action_id: action_id,
                                action_type: action_type,
                                view_id: view_id,
                                res_id: res_id || false,
                            })];
                    case 1:
                        result = _a.sent();
                        setIsFavourite(result !== false);
                        if (result !== false) {
                            setCurrentShortcutId(result);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    function toggleFavourite() {
        return __awaiter(this, void 0, void 0, function () {
            var action_id, res_id, action_type, view_id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(isFavourite && currentShortcutId)) return [3 /*break*/, 2];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().removeFavourite({
                                shortcut_id: currentShortcutId,
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        action_id = actionData.action_id, res_id = actionData.res_id, action_type = actionData.action_type, view_id = actionData.view_id;
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().addFavourite({
                                action_id: action_id,
                                action_type: action_type,
                                view_id: view_id,
                                res_id: res_id || false,
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        setIsFavourite(!isFavourite);
                        return [2 /*return*/];
                }
            });
        });
    }
    function onTitleChange(newTitle) {
        if (formTitle) {
            return;
        }
        setFormTitle(newTitle);
    }
    function header() {
        return (react_1.default.createElement(antd_1.Row, { align: "middle" },
            react_1.default.createElement(antd_1.Col, null,
                react_1.default.createElement(antd_1.Button, { type: isFavourite ? "primary" : "default", icon: isFavourite ? (react_1.default.createElement(icons_1.StarFilled, { style: { color: "white" } })) : (react_1.default.createElement(icons_1.StarOutlined, null)), style: { width: 30 }, onClick: toggleFavourite })),
            react_1.default.createElement(antd_1.Col, { style: { paddingLeft: 10 } }, formTitle)));
    }
    return (react_1.default.createElement(FormModalContext_1.default, { setTitle: onTitleChange },
        react_1.default.createElement(antd_1.Modal, { title: isMenuAction ? header() : formTitle, centered: true, width: modalWidth, visible: visible, footer: null, destroyOnClose: true, onCancel: onCancel },
            react_1.default.createElement(Form_1.default, __assign({ id: id, showFooter: true, insideButtonModal: buttonModal, onCancel: onCancel }, rest)))));
};
exports.FormModal = FormModal;
//# sourceMappingURL=FormModal.js.map