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
exports.TranslationModal = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var useWindowDimensions_1 = __importDefault(require("@/hooks/useWindowDimensions"));
var LocaleContext_1 = require("@/context/LocaleContext");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var TextArea_1 = __importDefault(require("antd/lib/input/TextArea"));
var ActionErrorDialog_1 = __importDefault(require("@/ui/ActionErrorDialog"));
var TranslationModal = function (props) {
    var visible = props.visible, onCloseModal = props.onCloseModal, model = props.model, id = props.id, field = props.field, onSubmitSucceed = props.onSubmitSucceed;
    var modalWidth = useWindowDimensions_1.default().modalWidth;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    var _a = react_1.useState([]), langs = _a[0], setLangs = _a[1];
    var _b = react_1.useState(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = react_1.useState(false), submitLoading = _c[0], setSubmitLoading = _c[1];
    var _d = react_1.useState({}), valuesForLangs = _d[0], setValuesForLangs = _d[1];
    var originalValuesForLangs = react_1.useRef();
    react_1.useEffect(function () {
        if (visible) {
            fetchData();
        }
        else {
            setValuesForLangs({});
        }
    }, [visible]);
    function fetchData() {
        return __awaiter(this, void 0, void 0, function () {
            var langs_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setIsLoading(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, getLangs()];
                    case 2:
                        langs_1 = _a.sent();
                        return [4 /*yield*/, getValuesForLangs(langs_1)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        ActionErrorDialog_1.default(err_1);
                        return [3 /*break*/, 5];
                    case 5:
                        setIsLoading(false);
                        return [2 /*return*/];
                }
            });
        });
    }
    function getLangs() {
        return __awaiter(this, void 0, void 0, function () {
            var results, langs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().search({
                            params: [["translatable", "=", "1"]],
                            fields: ["code", "name"],
                            model: "res.lang",
                        })];
                    case 1:
                        results = (_a.sent());
                        langs = results.map(function (item) {
                            return {
                                code: item.code,
                                name: item.name,
                            };
                        });
                        setLangs === null || setLangs === void 0 ? void 0 : setLangs(langs);
                        return [2 /*return*/, langs];
                }
            });
        });
    }
    function getValuesForLangs(langs) {
        return __awaiter(this, void 0, void 0, function () {
            var retrievedValuesForLang, _i, langs_2, lang, retrievedValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        retrievedValuesForLang = {};
                        _i = 0, langs_2 = langs;
                        _a.label = 1;
                    case 1:
                        if (!(_i < langs_2.length)) return [3 /*break*/, 4];
                        lang = langs_2[_i];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                                model: model,
                                ids: [id],
                                fieldsToRetrieve: [field],
                                context: { lang: lang.code },
                            })];
                    case 2:
                        retrievedValue = (_a.sent())[0];
                        retrievedValuesForLang[lang.code] = retrievedValue[field] || "";
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        originalValuesForLangs.current = retrievedValuesForLang;
                        setValuesForLangs(retrievedValuesForLang);
                        return [2 /*return*/];
                }
            });
        });
    }
    function getInputsForLangs() {
        return langs.map(function (lang, i) {
            return (react_1.default.createElement(antd_1.Row, { key: i, style: { paddingBottom: 20 } },
                react_1.default.createElement(antd_1.Col, { flex: "8rem", style: { paddingRight: 10 } }, lang.name),
                react_1.default.createElement(antd_1.Col, { flex: "auto" },
                    react_1.default.createElement(TextArea_1.default, { rows: 4, value: valuesForLangs[lang.code] || "", onChange: function (event) {
                            var _a;
                            setValuesForLangs(__assign(__assign({}, valuesForLangs), (_a = {}, _a[lang.code] = event.target.value, _a)));
                        }, disabled: submitLoading }))));
        });
    }
    function onSubmit() {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, langCode, err_2;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        setSubmitLoading(true);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, , 7]);
                        _i = 0, _a = Object.keys(valuesForLangs);
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        langCode = _a[_i];
                        if (!(valuesForLangs[langCode] !== originalValuesForLangs.current[langCode])) return [3 /*break*/, 4];
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().update({
                                model: model,
                                id: id,
                                values: (_b = {}, _b[field] = valuesForLangs[langCode], _b),
                                context: {
                                    lang: langCode,
                                },
                                fields: {},
                            })];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        err_2 = _c.sent();
                        ActionErrorDialog_1.default(err_2);
                        return [3 /*break*/, 7];
                    case 7:
                        setSubmitLoading(false);
                        onSubmitSucceed();
                        return [2 /*return*/];
                }
            });
        });
    }
    function content() {
        if (isLoading) {
            return react_1.default.createElement(antd_1.Spin, null);
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            getInputsForLangs(),
            react_1.default.createElement(antd_1.Divider, null),
            react_1.default.createElement(antd_1.Row, { justify: "end" },
                react_1.default.createElement(antd_1.Space, null,
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.CloseOutlined, null), onClick: onCloseModal, disabled: submitLoading }, t("cancel")),
                    react_1.default.createElement(antd_1.Button, { icon: submitLoading ? react_1.default.createElement(icons_1.LoadingOutlined, null) : react_1.default.createElement(icons_1.CheckOutlined, null), disabled: submitLoading, onClick: onSubmit, style: { marginLeft: 15 }, type: "primary" }, t("ok"))))));
    }
    return (react_1.default.createElement(antd_1.Modal, { title: t("translate"), centered: true, width: modalWidth, visible: visible, closable: true, onCancel: onCloseModal, footer: null, destroyOnClose: true }, content()));
};
exports.TranslationModal = TranslationModal;
//# sourceMappingURL=TranslationModal.js.map