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
var Char_1 = require("../base/Char");
var Selection_1 = require("../base/Selection");
var RangePicker_1 = require("./RangePicker");
var PairFields_1 = require("./PairFields");
var LocalesContext_1 = require("../../context/LocalesContext");
var types = {
    text: "Text",
    many2one: "Many2one",
    char: "Char",
    boolean: "Boolean",
    selection: "Selection",
    float: "Float",
    integer: "Integer",
    date: "Date",
};
function SearchField(props) {
    var field = props.field;
    var getString = react_1.useContext(LocalesContext_1.LocalesContext).getString;
    var widgetType = field.constructor.name;
    switch (widgetType) {
        case types.text:
        case types.many2one:
        case types.char: {
            return react_1.default.createElement(Char_1.Char, { id: field._id, label: field.label });
        }
        case types.boolean: {
            return (react_1.default.createElement(Selection_1.Selection, { id: field._id, label: field.label, values: [
                    { id: "true", name: getString("true") },
                    { id: "false", name: getString("false") },
                ] }));
        }
        case types.selection: {
            var selection = field;
            return (react_1.default.createElement(Selection_1.Selection, { id: selection._id, label: selection.label, values: Array.from(selection.selectionValues).map(function (_a) {
                    var name = _a[0], value = _a[1];
                    return { id: name, name: value };
                }) }));
        }
        case types.float: {
            return (react_1.default.createElement(PairFields_1.PairFields, { id: field._id, label: field.label, defaultValue: 0.0, type: "float" }));
        }
        case types.integer: {
            return (react_1.default.createElement(PairFields_1.PairFields, { id: field._id, label: field.label, defaultValue: 0, type: "integer" }));
        }
        case types.date: {
            return react_1.default.createElement(RangePicker_1.RangePicker, { id: field._id, label: field.label });
        }
        default: {
            return react_1.default.createElement(Char_1.Char, { id: field._id, label: field.label || field._id });
        }
    }
}
exports.SearchField = SearchField;
//# sourceMappingURL=SearchField.js.map