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
const react_1 = __importStar(require("react"));
const Char_1 = require("@/widgets/base/Char");
const Selection_1 = require("@/widgets/base/Selection");
const DateRangePicker_1 = require("./DateRangePicker");
const DateTimeRangePicker_1 = require("./DateTimeRangePicker");
const PairFields_1 = require("./PairFields");
const LocalesContext_1 = require("@/context/LocalesContext");
const ooui_1 = require("ooui");
const types = {
    text: "Text",
    many2one: "Many2one",
    char: "Char",
    boolean: "Boolean",
    selection: "Selection",
    float: "Float",
    float_time: "FloatTime",
    progressbar: "ProgressBar",
    integer: "Integer",
    date: "Date",
    datetime: "DateTime",
};
function SearchField(props) {
    const { field } = props;
    field.readOnly = false;
    const { getString } = react_1.useContext(LocalesContext_1.LocalesContext);
    const widgetType = field.constructor.name;
    switch (widgetType) {
        case types.text:
        case types.many2one:
        case types.char: {
            const char = field;
            return react_1.default.createElement(Char_1.Char, { ooui: char, layout: "vertical" });
        }
        case types.boolean: {
            const ooui = new ooui_1.Selection({
                name: field._id,
                string: field.label,
                selection: [
                    ["true", getString("true")],
                    ["false", getString("false")],
                ],
            });
            return react_1.default.createElement(Selection_1.Selection, { layout: "vertical", ooui: ooui });
        }
        case types.selection: {
            const selection = field;
            return react_1.default.createElement(Selection_1.Selection, { layout: "vertical", ooui: selection });
        }
        case types.float:
        case types.progressbar:
        case types.float_time:
        case types.integer: {
            return react_1.default.createElement(PairFields_1.PairFields, { ooui: field, id: field._id, label: field.label });
        }
        case types.date: {
            return (react_1.default.createElement(DateRangePicker_1.DateRangePicker, { id: field._id, label: field.label, layout: "vertical" }));
        }
        case types.datetime: {
            return (react_1.default.createElement(DateTimeRangePicker_1.DateTimeRangePicker, { id: field._id, label: field.label, layout: "vertical" }));
        }
        default: {
            const char = field;
            return react_1.default.createElement(Char_1.Char, { ooui: char, layout: "vertical" });
        }
    }
}
exports.SearchField = SearchField;
//# sourceMappingURL=SearchField.js.map