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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var icons_1 = require("@ant-design/icons");
var DropdownButton_1 = __importDefault(require("./DropdownButton"));
var LocaleContext_1 = require("@/context/LocaleContext");
var filesHelper_1 = require("@/helpers/filesHelper");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var ActionViewContext_1 = require("@/context/ActionViewContext");
var antd_1 = require("antd");
var ActionErrorDialog_1 = __importDefault(require("@/ui/ActionErrorDialog"));
function AttachmentsButton(props) {
    var _this = this;
    var attachments = props.attachments, disabled = props.disabled, onAddNewAttachment = props.onAddNewAttachment;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    var formRef = react_1.useContext(ActionViewContext_1.ActionViewContext).formRef;
    var _a = react_1.useState(false), downloading = _a[0], setDownloading = _a[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(DropdownButton_1.default, { icon: react_1.default.createElement(icons_1.LinkOutlined, null), disabled: disabled, label: "(" + attachments.length + ")", tooltip: t("attachments"), items: __spreadArray([
                { id: "addNewAttachment", name: t("addNewAttachment") },
                { id: "divider0", name: "divider" }
            ], attachments), onItemClick: function (itemClicked) { return __awaiter(_this, void 0, void 0, function () {
                var result, fileType, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!itemClicked) {
                                return [2 /*return*/];
                            }
                            if (itemClicked.id === "addNewAttachment") {
                                onAddNewAttachment();
                                return [2 /*return*/];
                            }
                            setDownloading(true);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                                    model: "ir.attachment",
                                    ids: [itemClicked.id],
                                    context: formRef.current.getContext(),
                                })];
                        case 2:
                            result = (_a.sent())[0];
                            if (!result.datas) {
                                // TODO: maybe open a dialog message to inform that the attachment hasn't got data? or maybe open the attachment in a new form-tab?
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, filesHelper_1.getMimeType(result.datas)];
                        case 3:
                            fileType = _a.sent();
                            filesHelper_1.openBase64InNewTab(result.datas, fileType.mime);
                            return [3 /*break*/, 5];
                        case 4:
                            error_1 = _a.sent();
                            ActionErrorDialog_1.default(error_1);
                            return [3 /*break*/, 5];
                        case 5:
                            setDownloading(false);
                            return [2 /*return*/];
                    }
                });
            }); } }),
        react_1.default.createElement(antd_1.Modal, { title: t("downloadingAttachment"), visible: downloading, footer: null, closable: false, centered: true },
            react_1.default.createElement(antd_1.Spin, null))));
}
exports.default = AttachmentsButton;
//# sourceMappingURL=AttachmentsButton.js.map