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
exports.ActionViewContext = void 0;
var react_1 = __importStar(require("react"));
exports.ActionViewContext = react_1.default.createContext(null);
var ActionViewProvider = function (props) {
    var _a = react_1.useState(false), formIsSaving = _a[0], setFormIsSaving = _a[1];
    var _b = react_1.useState(false), formHasChanges = _b[0], setFormHasChanges = _b[1];
    var _c = react_1.useState(false), removingItem = _c[0], setRemovingItem = _c[1];
    var children = props.children, currentView = props.currentView, title = props.title, setCurrentView = props.setCurrentView, availableViews = props.availableViews, formRef = props.formRef, onNewClicked = props.onNewClicked, currentId = props.currentId, setCurrentId = props.setCurrentId, setResults = props.setResults, results = props.results, currentItemIndex = props.currentItemIndex, setCurrentItemIndex = props.setCurrentItemIndex, currentModel = props.currentModel;
    react_1.useEffect(function () {
        if (results && results.length > 0 && !currentItemIndex) {
            setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(0);
            setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(results[0]);
        }
    }, [results]);
    var callOnFormSave = function () {
        var _a;
        (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submitForm();
    };
    return (react_1.default.createElement(exports.ActionViewContext.Provider, { value: {
            title: title,
            currentView: currentView,
            setCurrentView: setCurrentView,
            availableViews: availableViews,
            formIsSaving: formIsSaving,
            setFormIsSaving: setFormIsSaving,
            formHasChanges: formHasChanges,
            setFormHasChanges: setFormHasChanges,
            formRef: formRef,
            onFormSave: callOnFormSave,
            onNewClicked: onNewClicked,
            currentId: currentId,
            setCurrentId: setCurrentId,
            currentItemIndex: currentItemIndex,
            setCurrentItemIndex: setCurrentItemIndex,
            results: results,
            setResults: setResults,
            currentModel: currentModel,
            removingItem: removingItem,
            setRemovingItem: setRemovingItem,
        } }, children));
};
exports.default = ActionViewProvider;
//# sourceMappingURL=ActionViewContext.js.map