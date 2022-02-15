"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReactWidget = void 0;
var react_1 = __importDefault(require("react"));
var index_1 = require("@/index");
var Image_1 = require("./base/Image");
var FiberGrid_1 = require("./custom/FiberGrid");
var Timeline_1 = require("./custom/Timeline");
var getWidgetType = function (type) {
    switch (type) {
        case "form":
            return index_1.Form;
        case "tree":
            return index_1.Tree;
        case "notebook":
            return index_1.Notebook;
        case "group":
            return index_1.Group;
        case "label":
            return index_1.Label;
        case "char":
            return index_1.Char;
        case "text":
            return index_1.Text;
        case "button":
            return index_1.Button;
        case "selection":
            return index_1.Selection;
        case "many2one":
            return index_1.Many2one;
        case "boolean":
            return index_1.Boolean;
        case "integer":
            return index_1.Integer;
        case "float":
            return index_1.Float;
        case "progressbar":
            return index_1.ProgressBar;
        case "date":
            return index_1.Date;
        case "datetime":
            return index_1.DateTime;
        case "one2many":
        case "one2many_list":
        case "many2many":
            return index_1.One2many;
        case "separator":
            return index_1.Separator;
        case "reference":
            return index_1.Reference;
        case "binary":
            return index_1.Binary;
        case "image":
            return Image_1.Image;
        case "url":
            return index_1.Url;
        case "email":
            return index_1.Email;
        case "float_time":
            return index_1.FloatTime;
        case "fiber_grid":
            return FiberGrid_1.FiberGrid;
        case "timeline":
            return Timeline_1.Timeline;
        default:
            return undefined;
    }
};
var createReactWidget = function (props) {
    var ooui = props.ooui;
    var type = ooui.type;
    var widgetClass = getWidgetType(type);
    if (!widgetClass) {
        return null;
    }
    return react_1.default.createElement(widgetClass, props);
};
exports.createReactWidget = createReactWidget;
//# sourceMappingURL=WidgetFactory.js.map