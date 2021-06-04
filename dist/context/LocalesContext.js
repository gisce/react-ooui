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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalizedString = exports.LocalesContext = void 0;
var react_1 = __importStar(require("react"));
var use_deep_compare_effect_1 = __importDefault(require("use-deep-compare-effect"));
exports.LocalesContext = react_1.default.createContext(null);
var LocalesProvider = function (_a) {
    var children = _a.children, stringsProp = _a.strings;
    var _b = react_1.useState({}), strings = _b[0], setStrings = _b[1];
    use_deep_compare_effect_1.default(function () {
        setStrings(stringsProp);
    }, [stringsProp]);
    var getString = function (key) {
        return exports.getLocalizedString(key, strings);
    };
    return (react_1.default.createElement(exports.LocalesContext.Provider, { value: {
            getString: getString,
        } }, children));
};
exports.default = LocalesProvider;
var getLocalizedString = function (key, strings) {
    var localized = strings[key];
    if (localized)
        return localized;
    else
        return key;
};
exports.getLocalizedString = getLocalizedString;
//# sourceMappingURL=LocalesContext.js.map