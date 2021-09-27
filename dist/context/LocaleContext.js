"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tForLang = exports.LocaleContext = void 0;
var react_1 = __importDefault(require("react"));
var ca_ES_1 = __importDefault(require("@/locales/ca_ES"));
var en_US_1 = __importDefault(require("@/locales/en_US"));
var es_ES_1 = __importDefault(require("@/locales/es_ES"));
var localeStrings = {
    ca_ES: ca_ES_1.default,
    en_US: en_US_1.default,
    es_ES: es_ES_1.default,
};
exports.LocaleContext = react_1.default.createContext(null);
var LocaleContextProvider = function (props) {
    var children = props.children, lang = props.lang;
    function t(key) {
        return exports.tForLang(key, lang);
    }
    return (react_1.default.createElement(exports.LocaleContext.Provider, { value: {
            lang: lang,
            t: t,
        } }, children));
};
var tForLang = function (key, lang) {
    var _a;
    var translated = (_a = localeStrings[lang]) === null || _a === void 0 ? void 0 : _a[key];
    return translated || key;
};
exports.tForLang = tForLang;
exports.default = LocaleContextProvider;
//# sourceMappingURL=LocaleContext.js.map