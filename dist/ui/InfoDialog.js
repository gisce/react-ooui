"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var info = antd_1.Modal.info;
var showDialog = function (content) {
    info({
        title: "",
        centered: true,
        content: content,
    });
};
exports.default = showDialog;
//# sourceMappingURL=InfoDialog.js.map