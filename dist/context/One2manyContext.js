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
Object.defineProperty(exports, "__esModule", { value: true });
exports.One2manyContext = void 0;
var react_1 = __importStar(require("react"));
exports.One2manyContext = react_1.default.createContext(null);
var One2manyProvider = function (_a) {
    var children = _a.children, initialView = _a.initialView;
    var _b = react_1.useState(initialView), currentView = _b[0], setCurrentView = _b[1];
    var _c = react_1.useState(false), manualTrigger = _c[0], setManualTrigger = _c[1];
    var _d = react_1.useState(0), itemIndex = _d[0], setItemIndex = _d[1];
    return (react_1.default.createElement(exports.One2manyContext.Provider, { value: {
            currentView: currentView,
            setCurrentView: setCurrentView,
            manualTrigger: manualTrigger,
            setManualTrigger: setManualTrigger,
            itemIndex: itemIndex,
            setItemIndex: setItemIndex,
        } }, children));
};
exports.default = One2manyProvider;
//# sourceMappingURL=One2manyContext.js.map