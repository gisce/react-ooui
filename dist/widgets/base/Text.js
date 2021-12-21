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
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var Config_1 = __importDefault(require("@/Config"));
var ButtonWithTooltip_1 = __importDefault(require("@/common/ButtonWithTooltip"));
var icons_1 = require("@ant-design/icons");
var LocaleContext_1 = require("@/context/LocaleContext");
var TranslationModal_1 = require("../modals/TranslationModal");
var FormContext_1 = require("@/context/FormContext");
var TextArea = antd_1.Input.TextArea;
var Text = function (props) {
    var ooui = props.ooui;
    var id = ooui.id, readOnly = ooui.readOnly, required = ooui.required, height = ooui.height, translatable = ooui.translatable;
    var requiredClass = required && !readOnly ? Config_1.default.requiredClass : undefined;
    return (react_1.default.createElement(Field_1.default, __assign({ required: required }, props), translatable ? (react_1.default.createElement(TranslatableText, { field: id, requiredClass: requiredClass, height: height })) : (react_1.default.createElement(TextArea, { disabled: readOnly || translatable, className: requiredClass, style: { height: height ? height + "px" : "100%" }, rows: 4 }))));
};
var TranslatableText = function (_a) {
    var value = _a.value, field = _a.field, requiredClass = _a.requiredClass, onChange = _a.onChange, height = _a.height;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    var formContext = react_1.useContext(FormContext_1.FormContext);
    var _b = formContext || {}, activeId = _b.activeId, activeModel = _b.activeModel, submitForm = _b.submitForm, fetchValues = _b.fetchValues;
    var _c = react_1.useState(false), translationModalVisible = _c[0], setTranslationModalVisible = _c[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Row, { gutter: 8, wrap: false },
            react_1.default.createElement(TextArea, { value: value, onChange: function (event) {
                    onChange === null || onChange === void 0 ? void 0 : onChange(event.target.value);
                }, style: { height: height ? height + "px" : "100%" }, id: field, disabled: true, className: requiredClass, rows: 4 })),
        react_1.default.createElement(antd_1.Row, { justify: "end", style: { paddingTop: 5 } },
            react_1.default.createElement(ButtonWithTooltip_1.default, { tooltip: t("translate"), icon: react_1.default.createElement(icons_1.TranslationOutlined, null), onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                    var submittedSuccessfully;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, (submitForm === null || submitForm === void 0 ? void 0 : submitForm())];
                            case 1:
                                submittedSuccessfully = _a.sent();
                                if (submittedSuccessfully) {
                                    setTranslationModalVisible(true);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); } }, t("translate"))),
        react_1.default.createElement(TranslationModal_1.TranslationModal, { id: activeId, model: activeModel, field: field, visible: translationModalVisible, onCloseModal: function () {
                setTranslationModalVisible(false);
            }, onSubmitSucceed: function () {
                setTranslationModalVisible(false);
                fetchValues === null || fetchValues === void 0 ? void 0 : fetchValues();
            } })));
};
exports.default = Text;
//# sourceMappingURL=Text.js.map