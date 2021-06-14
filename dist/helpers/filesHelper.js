"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openBase64InNewTab = exports.toBase64 = exports.getMimeType = exports.getFilesize = void 0;
var browser_1 = __importDefault(require("file-type/browser"));
function getFilesize(base64string) {
    var buffer = Buffer.from(base64string, "base64");
    var inKbs = buffer.length / 1e3;
    return Math.round((inKbs + Number.EPSILON) * 100) / 100 + " KB";
}
exports.getFilesize = getFilesize;
function getMimeType(base64string) {
    return browser_1.default.fromBuffer(Buffer.from(base64string, "base64"));
}
exports.getMimeType = getMimeType;
var toBase64 = function (file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) { return resolve(e.target.result.split(",")[1]); };
        reader.onerror = function (error) { return reject(error); };
    });
};
exports.toBase64 = toBase64;
function openBase64InNewTab(data, mimeType) {
    var byteCharacters = atob(data);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var file = new Blob([byteArray], { type: mimeType + ";base64" });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);
}
exports.openBase64InNewTab = openBase64InNewTab;
//# sourceMappingURL=filesHelper.js.map