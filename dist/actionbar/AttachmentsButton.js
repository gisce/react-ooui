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
var filesHelper_1 = require("@/helpers/filesHelper");
var ConnectionProvider_1 = __importDefault(require("@/ConnectionProvider"));
var ActionViewContext_1 = require("@/context/ActionViewContext");
var ActionErrorDialog_1 = __importDefault(require("@/ui/ActionErrorDialog"));
var AttachmentsButtonWrapper_1 = require("./AttachmentsButtonWrapper");
function AttachmentsButton(props) {
    var _this = this;
    var attachments = props.attachments, _a = props.disabled, disabled = _a === void 0 ? false : _a, onAddNewAttachment = props.onAddNewAttachment, onViewAttachmentDetails = props.onViewAttachmentDetails;
    var formRef = react_1.useContext(ActionViewContext_1.ActionViewContext).formRef;
    var _b = react_1.useState(false), preloading = _b[0], setPreloading = _b[1];
    var _c = react_1.useState([]), preloadedAttachments = _c[0], setPreloadedAttachments = _c[1];
    var preloadAttachments = react_1.useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        var results, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setPreloading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            model: "ir.attachment",
                            ids: attachments.map(function (a) { return a.id; }),
                            context: formRef.current.getContext(),
                        })];
                case 2:
                    results = _a.sent();
                    setPreloadedAttachments(results.map(function (r) { return ({
                        id: r.id,
                        name: r.name,
                        datas: r.datas,
                    }); }));
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    ActionErrorDialog_1.default(error_1);
                    return [3 /*break*/, 4];
                case 4:
                    setPreloading(false);
                    return [2 /*return*/];
            }
        });
    }); }, attachments);
    var downloadAttachment = react_1.useCallback(function (attachment) { return __awaiter(_this, void 0, void 0, function () {
        var fileType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, filesHelper_1.getMimeType(attachment.datas)];
                case 1:
                    fileType = _a.sent();
                    filesHelper_1.openBase64InNewTab(attachment.datas, fileType.mime);
                    return [2 /*return*/];
            }
        });
    }); }, attachments);
    var openAttachmentDetail = react_1.useCallback(function (attachment) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            onViewAttachmentDetails(attachment);
            return [2 /*return*/];
        });
    }); }, attachments);
    react_1.useEffect(function () {
        preloadAttachments();
    }, [attachments, preloadAttachments]);
    return (react_1.default.createElement(AttachmentsButtonWrapper_1.AttachmentsButtonWrapper, { numberOfAttachments: attachments.length, attachments: preloadedAttachments, disabled: disabled, loading: preloading, onAddNewAttachment: onAddNewAttachment, onDownloadAttachment: downloadAttachment, onOpenAttachmentDetail: openAttachmentDetail }));
}
exports.default = AttachmentsButton;
//# sourceMappingURL=AttachmentsButton.js.map