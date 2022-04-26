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
exports.AttachmentsButtonWrapper = void 0;
var react_1 = __importStar(require("react"));
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var LocaleContext_1 = require("@/context/LocaleContext");
var AttachmentsButtonWrapper = function (props) {
    var numberOfAttachments = props.numberOfAttachments, disabled = props.disabled;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    var _a = react_1.useState(false), popoverVisible = _a[0], setPopoverVisible = _a[1];
    var button = (react_1.default.createElement(antd_1.Button, { disabled: disabled },
        react_1.default.createElement(icons_1.LinkOutlined, null), "(" + numberOfAttachments + ")",
        react_1.default.createElement(icons_1.DownOutlined, { style: { fontSize: 12 } })));
    if (disabled) {
        return button;
    }
    return (react_1.default.createElement(antd_1.Popover, { onVisibleChange: function (visible) { return setPopoverVisible(visible); }, visible: popoverVisible, placement: "bottom", content: Content(props, setPopoverVisible), title: t("attachments"), arrowContent: null }, button));
};
exports.AttachmentsButtonWrapper = AttachmentsButtonWrapper;
var Content = function (props, setPopoverVisible) {
    var _a = props.attachments, attachments = _a === void 0 ? [] : _a, loading = props.loading, onAddNewAttachment = props.onAddNewAttachment, onDownloadAttachment = props.onDownloadAttachment, onOpenAttachmentDetail = props.onOpenAttachmentDetail;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    if (loading) {
        return react_1.default.createElement(antd_1.Spin, { style: { padding: 20 } });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("a", { href: "#", onClick: function () {
                setPopoverVisible(false);
                onAddNewAttachment();
            } }, t("addNewAttachment")),
        attachments.length > 0 && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("li", { className: " ant-dropdown-menu-item-divider" }),
            attachments.map(function (attachment) { return (react_1.default.createElement(antd_1.Row, { style: { paddingTop: 4, paddingBottom: 4 }, wrap: false, align: "middle", key: attachment.id },
                react_1.default.createElement(antd_1.Col, { flex: "auto" }, attachment.name),
                react_1.default.createElement(antd_1.Col, { flex: "25px", style: { textAlign: "center" } }, attachment.datas && (react_1.default.createElement(antd_1.Tooltip, { title: t("download") },
                    react_1.default.createElement(icons_1.DownloadOutlined, { style: { cursor: "pointer" }, onClick: function () {
                            setPopoverVisible(false);
                            onDownloadAttachment(attachment);
                        } })))),
                react_1.default.createElement(antd_1.Col, { flex: "25px", style: { textAlign: "center" } },
                    react_1.default.createElement(antd_1.Tooltip, { title: t("openAttachment") },
                        react_1.default.createElement(icons_1.FormOutlined, { style: { cursor: "pointer" }, onClick: function () {
                                setPopoverVisible(false);
                                onOpenAttachmentDetail(attachment);
                            } }))))); })))));
};
//# sourceMappingURL=AttachmentsButtonWrapper.js.map