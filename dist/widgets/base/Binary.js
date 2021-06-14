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
exports.BinaryInput = exports.Binary = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var Config_1 = __importDefault(require("@/Config"));
var ButtonWithTooltip_1 = __importDefault(require("@/common/ButtonWithTooltip"));
var icons_1 = require("@ant-design/icons");
var FormContext_1 = require("@/context/FormContext");
var filesHelper_1 = require("@/helpers/filesHelper");
var Binary = function (props) {
    var ooui = props.ooui;
    return (react_1.default.createElement(Field_1.default, __assign({}, props),
        react_1.default.createElement(exports.BinaryInput, { ooui: ooui })));
};
exports.Binary = Binary;
var BinaryInput = function (props) {
    var ooui = props.ooui, value = props.value, onChange = props.onChange;
    var _a = ooui, readOnly = _a.readOnly, required = _a.required, filenameField = _a.filenameField;
    var requiredClass = required && !readOnly ? Config_1.default.requiredClass : undefined;
    var inputFile = react_1.useRef(null);
    var _b = react_1.useContext(FormContext_1.FormContext), setFieldValue = _b.setFieldValue, getFieldValue = _b.getFieldValue;
    var filesize = value ? filesHelper_1.getFilesize(value) : "";
    var triggerChange = function (changedValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(changedValue);
    };
    function downloadFile() {
        return __awaiter(this, void 0, void 0, function () {
            var fileType, linkSource, downloadLink, fileName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, filesHelper_1.getMimeType(value)];
                    case 1:
                        fileType = _a.sent();
                        linkSource = "data:" + (fileType === null || fileType === void 0 ? void 0 : fileType.mime) + ";base64," + value;
                        downloadLink = document.createElement("a");
                        fileName = getFieldValue(filenameField);
                        downloadLink.href = linkSource;
                        downloadLink.download = fileName;
                        downloadLink.click();
                        return [2 /*return*/];
                }
            });
        });
    }
    function openFile() {
        return __awaiter(this, void 0, void 0, function () {
            var fileType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, filesHelper_1.getMimeType(value)];
                    case 1:
                        fileType = _a.sent();
                        filesHelper_1.openBase64InNewTab(value, fileType.mime);
                        return [2 /*return*/];
                }
            });
        });
    }
    function onChangeFile(event) {
        return __awaiter(this, void 0, void 0, function () {
            var file, b64;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.stopPropagation();
                        event.preventDefault();
                        file = event.target.files[0];
                        return [4 /*yield*/, filesHelper_1.toBase64(file)];
                    case 1:
                        b64 = _a.sent();
                        triggerChange(b64);
                        setFieldValue(filenameField, file.name);
                        return [2 /*return*/];
                }
            });
        });
    }
    function clearFile() {
        setFieldValue(filenameField, undefined);
        triggerChange(undefined);
    }
    return (react_1.default.createElement(antd_1.Row, { gutter: 8, wrap: false },
        react_1.default.createElement(antd_1.Col, { flex: "auto" },
            react_1.default.createElement("input", { type: "file", id: "file", ref: inputFile, style: { display: "none" }, onChange: onChangeFile }),
            react_1.default.createElement(antd_1.Input, { type: "text", disabled: true, className: requiredClass, value: filesize })),
        react_1.default.createElement(antd_1.Col, { flex: "256px" },
            react_1.default.createElement(antd_1.Space, null,
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FolderOpenOutlined, null), disabled: readOnly, onClick: function () {
                        var fileUploadField = inputFile.current;
                        fileUploadField.click();
                    } }, "Select"),
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.EyeOutlined, null), disabled: readOnly || !value, onClick: openFile }, "Open"),
                react_1.default.createElement(ButtonWithTooltip_1.default, { tooltip: "Download", disabled: readOnly || !value, onClick: downloadFile, icon: react_1.default.createElement(icons_1.DownloadOutlined, null) }),
                react_1.default.createElement(ButtonWithTooltip_1.default, { tooltip: "Clear", disabled: readOnly, onClick: clearFile, icon: react_1.default.createElement(icons_1.ClearOutlined, null) })))));
};
exports.BinaryInput = BinaryInput;
//# sourceMappingURL=Binary.js.map