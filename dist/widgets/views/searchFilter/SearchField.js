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
exports.SearchField = void 0;
var react_1 = __importStar(require("react"));
var Char_1 = require("@/widgets/base/Char");
var Selection_1 = require("@/widgets/base/Selection");
var DateRangePicker_1 = require("./DateRangePicker");
var DateTimeRangePicker_1 = require("./DateTimeRangePicker");
var PairFields_1 = require("./PairFields");
var LocaleContext_1 = require("@/context/LocaleContext");
var ooui_1 = require("ooui");
var MultiSelection_1 = require("@/widgets/base/MultiSelection");
var types = {
    text: "text",
    many2one: "many2one",
    char: "char",
    boolean: "boolean",
    selection: "selection",
    float: "float",
    float_time: "float_time",
    progressbar: "progressbar",
    integer: "integer",
    date: "date",
    datetime: "datetime",
};
function SearchField(props) {
    var field = props.field;
    field.readOnly = false;
    field.required = false;
    var t = react_1.useContext(LocaleContext_1.LocaleContext).t;
    var widgetType = field.type;
    switch (widgetType) {
        case types.boolean: {
            var ooui = new ooui_1.Selection({
                name: field._id,
                string: field.label,
                selection: [
                    ["true", t("true")],
                    ["false", t("false")],
                ],
            });
            return react_1.default.createElement(Selection_1.Selection, { layout: "vertical", ooui: ooui, showLabel: true });
        }
        case types.float:
        case types.progressbar:
        case types.float_time:
        case types.integer: {
            return react_1.default.createElement(PairFields_1.PairFields, { ooui: field, showLabel: true });
        }
        case types.date: {
            return react_1.default.createElement(DateRangePicker_1.DateRangePicker, { ooui: field, layout: "vertical", showLabel: true });
        }
        case types.datetime: {
            return react_1.default.createElement(DateTimeRangePicker_1.DateTimeRangePicker, { ooui: field, layout: "vertical", showLabel: true });
        }
        case types.selection: {
            return react_1.default.createElement(MultiSelection_1.MultiSelection, { layout: "vertical", ooui: field, showLabel: true });
        }
        default: {
            return react_1.default.createElement(Char_1.Char, { ooui: field, layout: "vertical", showLabel: true, isSearchField: true });
        }
    }
}
exports.SearchField = SearchField;
//# sourceMappingURL=SearchField.js.map