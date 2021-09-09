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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Many2oneSuffix = void 0;
var react_1 = __importStar(require("react"));
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var TabManagerContext_1 = require("@/context/TabManagerContext");
var Many2oneSuffixModal_1 = require("./Many2oneSuffixModal");
var ActionViewContext_1 = require("@/context/ActionViewContext");
var Many2oneSuffix = function (props) {
    var id = props.id, formView = props.formView, targetValues = props.targetValues;
    var _a = react_1.useState(false), actionModalVisible = _a[0], setActionModalVisible = _a[1];
    var _b = react_1.useState(false), printModalVisible = _b[0], setPrintModalVisible = _b[1];
    var tabManagerContext = react_1.useContext(TabManagerContext_1.TabManagerContext);
    var openRelate = (tabManagerContext || {}).openRelate;
    var actionViewContext = react_1.useContext(ActionViewContext_1.ActionViewContext);
    var generateReport = actionViewContext.generateReport;
    if (!id || !(formView === null || formView === void 0 ? void 0 : formView.toolbar)) {
        return null;
    }
    function menu() {
        var relateItems = formView.toolbar.relate.map(function (item) {
            return react_1.default.createElement(antd_1.Menu.Item, { key: item.id },
                "... ",
                item.name);
        });
        return (react_1.default.createElement(antd_1.Menu, { onClick: handleMenuClick }, __spreadArray([
            react_1.default.createElement(antd_1.Menu.Item, { key: "action", disabled: !formView.toolbar.action || formView.toolbar.action.length === 0 }, "Acci\u00F3"),
            react_1.default.createElement(antd_1.Menu.Item, { key: "print", disabled: !formView.toolbar.print || formView.toolbar.print.length === 0 }, "Informe"),
            react_1.default.createElement(antd_1.Menu.Divider, null)
        ], relateItems)));
    }
    function handleMenuClick(event) {
        if (event.key === "action") {
            setActionModalVisible(true);
        }
        else if (event.key === "print") {
            setPrintModalVisible(true);
        }
        else {
            var relateItemClicked = formView.toolbar.relate.find(function (item) {
                return item.id === parseInt(event.key);
            });
            if (!relateItemClicked) {
                return;
            }
            openRelate({
                relateData: relateItemClicked,
                values: targetValues,
                fields: formView.fields,
            });
        }
    }
    function onActionItemClicked() {
        setActionModalVisible(false);
    }
    function onPrintItemClicked(reportData) {
        setPrintModalVisible(false);
        generateReport === null || generateReport === void 0 ? void 0 : generateReport({
            reportData: reportData,
            ids: [id],
            values: targetValues,
            fields: formView.fields,
        });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Dropdown, { overlay: menu(), trigger: ["click"] },
            react_1.default.createElement(icons_1.RightCircleOutlined, { style: { color: "rgba(0,0,0,.45)" }, onClick: function (e) { return e.preventDefault(); } })),
        react_1.default.createElement(Many2oneSuffixModal_1.Many2oneSuffixModal, { visible: actionModalVisible, items: formView.toolbar.action, onItemClicked: onActionItemClicked, onCancel: function () { return setActionModalVisible(false); } }),
        react_1.default.createElement(Many2oneSuffixModal_1.Many2oneSuffixModal, { visible: printModalVisible, items: formView.toolbar.print, onItemClicked: onPrintItemClicked, onCancel: function () { return setPrintModalVisible(false); } })));
};
exports.Many2oneSuffix = Many2oneSuffix;
//# sourceMappingURL=Many2oneSuffix.js.map