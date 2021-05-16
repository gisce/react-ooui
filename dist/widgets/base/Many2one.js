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
exports.Many2one = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var Field_1 = __importDefault(require("@/common/Field"));
var Config_1 = __importDefault(require("@/Config"));
var SearchModal_1 = require("@/widgets/modals/SearchModal");
var FormModal_1 = require("@/widgets/modals/FormModal");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var Many2one = function (props) {
    var ooui = props.ooui;
    return (react_1.default.createElement(Field_1.default, __assign({}, props),
        react_1.default.createElement(Many2oneInput, { ooui: ooui })));
};
exports.Many2one = Many2one;
var SEARCH_BUTTON_TAPPED_FLAG = false;
var Many2oneInput = function (props) {
    var value = props.value, onChange = props.onChange, ooui = props.ooui;
    var required = ooui.required, relation = ooui.relation, readOnly = ooui.readOnly;
    var requiredClass = required ? Config_1.default.requiredClass : undefined;
    var _a = react_1.useState(false), showSearchModal = _a[0], setShowSearchModal = _a[1];
    var _b = react_1.useState(false), showFormModal = _b[0], setShowFormModal = _b[1];
    var _c = react_1.useState(false), searching = _c[0], setSearching = _c[1];
    var _d = react_1.useState(), searchText = _d[0], setSearchText = _d[1];
    var triggerChange = function (changedValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(changedValue);
    };
    var onValueStringChange = function (e) {
        triggerChange([undefined, e.target.value]);
    };
    var id = value && value[0];
    var text = (value && value[1]) || "";
    var onElementLostFocus = function () { return __awaiter(void 0, void 0, void 0, function () {
        var results, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!id && !searching && text.trim().length > 0)) return [3 /*break*/, 6];
                    // Debounce this event to give time to the search button onClick to set the flag
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
                case 1:
                    // Debounce this event to give time to the search button onClick to set the flag
                    _a.sent();
                    // If the focus is lost because the user tapped the search button, we don't need to do nothing here
                    if (SEARCH_BUTTON_TAPPED_FLAG) {
                        triggerChange([undefined, ""]);
                        return [2 /*return*/];
                    }
                    setSearching(true);
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, 5, 6]);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                            model: relation,
                            action: "name_search",
                            payload: text,
                        })];
                case 3:
                    results = _a.sent();
                    if (results.length > 0) {
                        triggerChange(results[0]);
                    }
                    else {
                        setSearchText(text);
                        setShowSearchModal(true);
                        triggerChange([undefined, ""]);
                    }
                    return [3 /*break*/, 6];
                case 4:
                    err_1 = _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    setSearching(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(antd_1.Row, { gutter: 8, className: "pt-1 pb-1" },
        react_1.default.createElement(antd_1.Col, { flex: "auto" },
            react_1.default.createElement(antd_1.Input, { type: "text", value: text, onChange: onValueStringChange, disabled: readOnly, className: requiredClass, onBlur: onElementLostFocus })),
        react_1.default.createElement(antd_1.Col, { flex: "32px" },
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FolderOpenOutlined, null), disabled: readOnly || id === undefined, onClick: function () {
                    setShowFormModal(true);
                }, tabIndex: -1 })),
        react_1.default.createElement(antd_1.Col, { flex: "32px" },
            react_1.default.createElement(antd_1.Button, { icon: searching ? react_1.default.createElement(icons_1.LoadingOutlined, null) : react_1.default.createElement(icons_1.SearchOutlined, null), disabled: readOnly || searching, onClick: function () {
                    SEARCH_BUTTON_TAPPED_FLAG = true;
                    setSearchText(text);
                    setShowSearchModal(true);
                }, tabIndex: -1 })),
        react_1.default.createElement(SearchModal_1.SearchModal, { model: relation, visible: showSearchModal, nameSearch: !id ? searchText : undefined, onSelectValue: function (value) {
                triggerChange(value);
                setShowSearchModal(false);
                SEARCH_BUTTON_TAPPED_FLAG = false;
            }, onCloseModal: function () {
                setShowSearchModal(false);
                SEARCH_BUTTON_TAPPED_FLAG = false;
            } }),
        react_1.default.createElement(FormModal_1.FormModal, { model: relation, id: value && value[0], visible: showFormModal, onSubmitSucceed: function (value) {
                triggerChange(value);
                setShowFormModal(false);
            }, onCancel: function () {
                setShowFormModal(false);
            } })));
};
//# sourceMappingURL=Many2one.js.map