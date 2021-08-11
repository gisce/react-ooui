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
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var ChangeViewButton_1 = __importDefault(require("./ChangeViewButton"));
var DropdownButton_1 = __importDefault(require("./DropdownButton"));
var ActionButton_1 = __importDefault(require("./ActionButton"));
var ActionViewContext_1 = require("@/context/ActionViewContext");
var NewButton_1 = __importDefault(require("./NewButton"));
var UnsavedChangesDialog_1 = __importDefault(require("@/ui/UnsavedChangesDialog"));
var ConfirmDialog_1 = __importDefault(require("@/ui/ConfirmDialog"));
var GenericErrorDialog_1 = __importDefault(require("@/ui/GenericErrorDialog"));
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var filesHelper_1 = require("@/helpers/filesHelper");
function FormActionBar() {
    var _this = this;
    var _a = react_1.useContext(ActionViewContext_1.ActionViewContext), availableViews = _a.availableViews, currentView = _a.currentView, setCurrentView = _a.setCurrentView, onFormSave = _a.onFormSave, formHasChanges = _a.formHasChanges, formIsSaving = _a.formIsSaving, currentId = _a.currentId, results = _a.results, setCurrentItemIndex = _a.setCurrentItemIndex, currentItemIndex = _a.currentItemIndex, setCurrentId = _a.setCurrentId, currentModel = _a.currentModel, setRemovingItem = _a.setRemovingItem, removingItem = _a.removingItem, setResults = _a.setResults, formIsLoading = _a.formIsLoading, toolbar = _a.toolbar, attachments = _a.attachments, formRef = _a.formRef;
    function tryNavigate(callback) {
        if (formHasChanges) {
            UnsavedChangesDialog_1.default({
                onOk: function () {
                    callback();
                },
            });
            return;
        }
        callback();
    }
    function onNextClick() {
        if (results && results.length > currentItemIndex + 1) {
            setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(currentItemIndex + 1);
            setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(results[currentItemIndex + 1]);
        }
    }
    function onPreviousClick() {
        if (results && currentItemIndex > 0) {
            setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(currentItemIndex - 1);
            setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(results[currentItemIndex - 1]);
        }
    }
    function tryDelete() {
        ConfirmDialog_1.default({
            confirmMessage: "Are you sure to remove this item?",
            onOk: function () {
                remove();
            },
        });
    }
    function remove() {
        return __awaiter(this, void 0, void 0, function () {
            var filteredResults, newIndex, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        setRemovingItem === null || setRemovingItem === void 0 ? void 0 : setRemovingItem(true);
                        return [4 /*yield*/, ConnectionProvider_1.default.getHandler().delete({
                                model: currentModel,
                                ids: [currentId],
                            })];
                    case 1:
                        _a.sent();
                        filteredResults = results === null || results === void 0 ? void 0 : results.filter(function (item) {
                            return item !== currentId;
                        });
                        setResults === null || setResults === void 0 ? void 0 : setResults(filteredResults);
                        newIndex = 0;
                        if (currentItemIndex > 0 && currentItemIndex <= results.length - 1) {
                            newIndex = currentItemIndex - 1;
                        }
                        if (!(filteredResults === null || filteredResults === void 0 ? void 0 : filteredResults[newIndex])) {
                            setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(undefined);
                            setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(undefined);
                        }
                        else {
                            setCurrentId === null || setCurrentId === void 0 ? void 0 : setCurrentId(filteredResults === null || filteredResults === void 0 ? void 0 : filteredResults[newIndex]);
                            setCurrentItemIndex === null || setCurrentItemIndex === void 0 ? void 0 : setCurrentItemIndex(newIndex);
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        e_1 = _a.sent();
                        GenericErrorDialog_1.default(JSON.stringify(e_1));
                        return [3 /*break*/, 4];
                    case 3:
                        setRemovingItem === null || setRemovingItem === void 0 ? void 0 : setRemovingItem(false);
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    var mustDisableButtons = formIsSaving || removingItem || formIsLoading;
    return (react_1.default.createElement(antd_1.Space, null,
        formIsLoading && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(antd_1.Spin, null),
            separator(),
            separator())),
        react_1.default.createElement(NewButton_1.default, { disabled: formIsSaving || formIsLoading || removingItem }),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.SaveOutlined, null), tooltip: "Save", disabled: !formHasChanges || mustDisableButtons, loading: formIsSaving, onClick: onFormSave }),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.DeleteOutlined, null), tooltip: "Delete", disabled: formIsSaving ||
                currentId === undefined ||
                removingItem ||
                formIsLoading, loading: removingItem, onClick: tryDelete }),
        separator(),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.LeftOutlined, null), tooltip: "Previous", disabled: mustDisableButtons, loading: false, onClick: function () {
                tryNavigate(onPreviousClick);
            } }),
        react_1.default.createElement(ActionButton_1.default, { icon: react_1.default.createElement(icons_1.RightOutlined, null), tooltip: "Next", disabled: mustDisableButtons, loading: false, onClick: function () {
                tryNavigate(onNextClick);
            } }),
        separator(),
        react_1.default.createElement(ChangeViewButton_1.default, { currentView: currentView, availableViews: availableViews, onChangeView: setCurrentView, disabled: mustDisableButtons }),
        separator(),
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.ThunderboltOutlined, null), disabled: mustDisableButtons, tooltip: "Actions", items: toolbar === null || toolbar === void 0 ? void 0 : toolbar.action, onItemClick: function (event) {
                var _a;
                var action = (_a = toolbar === null || toolbar === void 0 ? void 0 : toolbar.action) === null || _a === void 0 ? void 0 : _a.find(function (item) {
                    return item.id === parseInt(event.key);
                });
                if (!action) {
                    return;
                }
                formRef.current.runAction(action, {});
            } }),
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.PrinterOutlined, null), disabled: mustDisableButtons, tooltip: "Reports", items: toolbar === null || toolbar === void 0 ? void 0 : toolbar.print, onItemClick: function (event) {
                var _a;
                var report = (_a = toolbar === null || toolbar === void 0 ? void 0 : toolbar.print) === null || _a === void 0 ? void 0 : _a.find(function (item) {
                    return item.id === parseInt(event.key);
                });
                if (!report) {
                    return;
                }
                var report_name = report.report_name, model = report.model, context = report.context;
                formRef.current.generateReport({
                    model: model,
                    name: report_name,
                    ids: [currentId],
                    contextReport: context ? JSON.parse(context) : {},
                    context: {},
                });
            } }),
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.EnterOutlined, null), disabled: mustDisableButtons, tooltip: "Related", items: toolbar === null || toolbar === void 0 ? void 0 : toolbar.relate, onItemClick: function () { } }),
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.LinkOutlined, null), disabled: mustDisableButtons, label: "(" + attachments.length + ")", tooltip: "Attachments", items: attachments, onItemClick: function (event) { return __awaiter(_this, void 0, void 0, function () {
                var attachment, fileType;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            attachment = attachments.find(function (item) {
                                return item.id === parseInt(event.key);
                            });
                            if (!attachment) {
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, filesHelper_1.getMimeType(attachment.datas)];
                        case 1:
                            fileType = _a.sent();
                            filesHelper_1.openBase64InNewTab(attachment.datas, fileType.mime);
                            return [2 /*return*/];
                    }
                });
            }); } })));
}
function separator() {
    return react_1.default.createElement("div", { className: "inline-block w-2" });
}
exports.default = FormActionBar;
//# sourceMappingURL=FormActionBar.js.map