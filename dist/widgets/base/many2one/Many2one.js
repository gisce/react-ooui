"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.Many2oneInput = exports.Many2one = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var styled_components_1 = __importDefault(require("styled-components"));
var ooui_1 = require("@gisce/ooui");
var Field_1 = __importDefault(require("@/common/Field"));
var Config_1 = __importDefault(require("@/Config"));
var SearchModal_1 = require("@/widgets/modals/SearchModal");
var FormModal_1 = require("@/widgets/modals/FormModal");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var Many2oneSuffix_1 = require("./Many2oneSuffix");
var GenericErrorDialog_1 = __importDefault(require("@/ui/GenericErrorDialog"));
var FormContext_1 = require("@/context/FormContext");
var Many2one = function (props) {
    var ooui = props.ooui;
    var required = ooui.required;
    var validator = function (_, value) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!value)
                throw new Error();
            if (!Array.isArray(value))
                throw new Error();
            if (Array.isArray(value) && !value[0])
                throw new Error();
            return [2 /*return*/];
        });
    }); };
    return (react_1.default.createElement(Field_1.default, __assign({ required: required, type: "array", validator: validator }, props),
        react_1.default.createElement(exports.Many2oneInput, { ooui: ooui })));
};
exports.Many2one = Many2one;
var Many2oneInput = function (props) {
    var value = props.value, onChange = props.onChange, ooui = props.ooui;
    var required = ooui.required, relation = ooui.relation, readOnly = ooui.readOnly, context = ooui.context, fieldName = ooui.id, widgetDomain = ooui.domain;
    var requiredClass = required && !readOnly ? Config_1.default.requiredClass : undefined;
    var _a = react_1.useState(false), showSearchModal = _a[0], setShowSearchModal = _a[1];
    var _b = react_1.useState(false), showFormModal = _b[0], setShowFormModal = _b[1];
    var _c = react_1.useState(false), searching = _c[0], setSearching = _c[1];
    var _d = react_1.useState(), searchText = _d[0], setSearchText = _d[1];
    var searchButtonTappedRef = react_1.useRef(false);
    var _e = react_1.useState(""), inputText = _e[0], setInputText = _e[1];
    var inputTextRef = react_1.useRef();
    var formContext = react_1.useContext(FormContext_1.FormContext);
    var _f = formContext || {}, domain = _f.domain, getValues = _f.getValues, getContext = _f.getContext, setOriginalValue = _f.setOriginalValue, elementHasLostFocus = _f.elementHasLostFocus;
    var transformedDomain = react_1.useRef([]);
    var id = value && value[0];
    var text = (value && value[1]) || "";
    react_1.useEffect(function () {
        if (!Array.isArray(value) && !isNaN(value)) {
            fetchNameAndUpdate(value);
        }
    }, [value]);
    react_1.useEffect(function () {
        if (id && text.length === 0) {
            fetchNameAndUpdate(id);
        }
        else if (id && text.length > 0) {
            setInputText(text);
        }
        else if (!id && !text) {
            setInputText(inputTextRef.current || "");
        }
    }, [value]);
    react_1.useEffect(function () {
        parseDomain();
    }, [domain]);
    var triggerChange = function (changedValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(changedValue);
        elementHasLostFocus === null || elementHasLostFocus === void 0 ? void 0 : elementHasLostFocus();
    };
    var onValueStringChange = function (e) {
        inputTextRef.current = e.target.value;
        triggerChange([undefined, ""]);
    };
    var onElementLostFocus = function () { return __awaiter(void 0, void 0, void 0, function () {
        var results, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!searching && inputText !== text)) return [3 /*break*/, 8];
                    // Debounce this event to give time to the search button onClick to set the flag
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
                case 1:
                    // Debounce this event to give time to the search button onClick to set the flag
                    _a.sent();
                    // If the focus is lost because the user tapped the search button, we don't need to do nothing here
                    if (searchButtonTappedRef.current) {
                        triggerChange([undefined, ""]);
                        return [2 /*return*/];
                    }
                    setSearching(true);
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 6, 7, 8]);
                    if (!(transformedDomain.current && transformedDomain.current.length > 0)) return [3 /*break*/, 3];
                    tryFetchFirstResultOrShowSearch(inputTextRef.current);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().nameSearch({
                        model: relation,
                        payload: inputTextRef.current,
                        context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                    })];
                case 4:
                    results = _a.sent();
                    if (results.length === 1) {
                        inputTextRef.current = undefined;
                        triggerChange(results[0]);
                    }
                    else {
                        tryFetchFirstResultOrShowSearch(inputTextRef.current);
                    }
                    _a.label = 5;
                case 5: return [3 /*break*/, 8];
                case 6:
                    err_1 = _a.sent();
                    GenericErrorDialog_1.default(err_1);
                    return [3 /*break*/, 8];
                case 7:
                    setSearching(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var tryFetchFirstResultOrShowSearch = function (text) { return __awaiter(void 0, void 0, void 0, function () {
        var resultIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(transformedDomain.current && transformedDomain.current.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().searchAllIds({
                            params: transformedDomain.current,
                            model: relation,
                            context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                            totalItems: 2,
                        })];
                case 1:
                    resultIds = _a.sent();
                    if (resultIds.length === 1) {
                        fetchNameAndUpdate(resultIds[0], true);
                    }
                    else if (resultIds.length > 1) {
                        setSearchText(text);
                        setShowSearchModal(true);
                    }
                    return [2 /*return*/];
                case 2:
                    setSearchText(text);
                    setShowSearchModal(true);
                    return [2 /*return*/];
            }
        });
    }); };
    var fetchNameAndUpdate = function (id, mustUpdateOriginalForm) { return __awaiter(void 0, void 0, void 0, function () {
        var value_1, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setSearching(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                            action: "name_get",
                            payload: [id],
                            model: relation,
                            context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context),
                        })];
                case 2:
                    value_1 = _a.sent();
                    triggerChange([id, value_1[0][1]]);
                    if (mustUpdateOriginalForm) {
                        setOriginalValue(ooui.id, [id, value_1[0][1]]);
                    }
                    return [3 /*break*/, 5];
                case 3:
                    err_2 = _a.sent();
                    GenericErrorDialog_1.default(err_2);
                    return [3 /*break*/, 5];
                case 4:
                    setSearching(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    function parseDomain() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!widgetDomain) return [3 /*break*/, 2];
                        _a = transformedDomain;
                        _b = ooui_1.transformDomainForChildWidget;
                        _c = {};
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().evalDomain({
                                domain: widgetDomain,
                                values: getValues(),
                                context: getContext(),
                            })];
                    case 1:
                        _a.current = _b.apply(void 0, [(_c.domain = _d.sent(),
                                _c.widgetFieldName = fieldName,
                                _c)]);
                        _d.label = 2;
                    case 2:
                        if (domain && domain.length > 0) {
                            transformedDomain.current = transformedDomain.current.concat(ooui_1.transformDomainForChildWidget({
                                domain: domain,
                                widgetFieldName: fieldName,
                            }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    function onKeyDown(event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event.code === "Enter")) return [3 /*break*/, 2];
                        event.preventDefault();
                        event.stopPropagation();
                        return [4 /*yield*/, onElementLostFocus()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        if (event.code === "Backspace" && id !== undefined) {
                            event.preventDefault();
                            event.stopPropagation();
                            triggerChange([undefined, ""]);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    var CustomInput = required && !readOnly ? RequiredInput : antd_1.Input;
    return (react_1.default.createElement(antd_1.Row, { gutter: 8, wrap: false },
        react_1.default.createElement(antd_1.Col, { flex: "auto" },
            react_1.default.createElement(CustomInput, { type: "text", value: inputText, disabled: readOnly, onChange: onValueStringChange, className: requiredClass, onBlur: onElementLostFocus, onKeyDown: onKeyDown, suffix: react_1.default.createElement(Many2oneSuffix_1.Many2oneSuffix, { id: id, model: relation, context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context) }) })),
        react_1.default.createElement(antd_1.Col, { flex: "32px" },
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FolderOpenOutlined, null), disabled: id === undefined || text === "" || inputText === undefined, onClick: function () {
                    setShowFormModal(true);
                }, tabIndex: -1 })),
        react_1.default.createElement(antd_1.Col, { flex: "32px" },
            react_1.default.createElement(antd_1.Button, { icon: searching ? react_1.default.createElement(icons_1.LoadingOutlined, null) : react_1.default.createElement(icons_1.SearchOutlined, null), disabled: readOnly || searching, onClick: function () {
                    searchButtonTappedRef.current = true;
                    tryFetchFirstResultOrShowSearch(text);
                }, tabIndex: -1 })),
        react_1.default.createElement(SearchModal_1.SearchModal, { model: relation, domain: domain &&
                ooui_1.transformDomainForChildWidget({
                    domain: domain,
                    widgetFieldName: fieldName,
                }), context: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context), visible: showSearchModal, nameSearch: !id ? searchText : undefined, onSelectValues: function (ids) {
                setShowSearchModal(false);
                fetchNameAndUpdate(ids[0]);
                searchButtonTappedRef.current = false;
                inputTextRef.current = undefined;
            }, onCloseModal: function () {
                setShowSearchModal(false);
                searchButtonTappedRef.current = false;
            } }),
        react_1.default.createElement(FormModal_1.FormModal, { model: relation, parentContext: __assign(__assign({}, getContext === null || getContext === void 0 ? void 0 : getContext()), context), id: value && value[0], visible: showFormModal, onSubmitSucceed: function (id) {
                setShowFormModal(false);
                fetchNameAndUpdate(id);
            }, onCancel: function () {
                setShowFormModal(false);
            }, mustClearAfterSave: true, readOnly: readOnly })));
};
exports.Many2oneInput = Many2oneInput;
var RequiredInput = styled_components_1.default(antd_1.Input)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .ant-input {\n    background-color: ", ";\n  }\n"], ["\n  .ant-input {\n    background-color: ", ";\n  }\n"])), Config_1.default.requiredColor);
var templateObject_1;
//# sourceMappingURL=Many2one.js.map