"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ooui_1 = require("ooui");
var WidgetFactory_1 = require("@/widgets/WidgetFactory");
var react_responsive_1 = require("react-responsive");
function Group(props) {
    var responsiveBehaviour = react_responsive_1.useMediaQuery({ query: "(max-width: 1000px)" });
    var ooui = props.ooui, _a = props.showLabel, showLabel = _a === void 0 ? true : _a;
    var columns = ooui.container.columns;
    var expandLabelsInFields = function (row) {
        var rowWithExpandedLabels = [];
        var totalColSpan = 0;
        row.map(function (item, columnIndex) {
            if (item instanceof ooui_1.Field &&
                !(item instanceof ooui_1.Button) &&
                !(item instanceof ooui_1.Label)) {
                if (item instanceof ooui_1.Text && item.nolabel) {
                    rowWithExpandedLabels.push(item);
                    return;
                }
                totalColSpan += 1;
                totalColSpan += item.colspan - 1;
                var label = new ooui_1.Label({ string: item.label });
                label.align = responsiveBehaviour ? "left" : "right";
                rowWithExpandedLabels.push(label);
                var newItem = clone(item);
                newItem._colspan = item._colspan - 1;
                newItem._nolabel = true;
                rowWithExpandedLabels.push(newItem);
                if (columnIndex + 1 === row.length &&
                    totalColSpan < columns &&
                    !responsiveBehaviour) {
                    var gapsToFill = columns - totalColSpan;
                    for (var i = 0; i < gapsToFill; i += 1) {
                        rowWithExpandedLabels.push(new ooui_1.Label({ string: "" }));
                    }
                }
            }
            else {
                rowWithExpandedLabels.push(item);
            }
        });
        return rowWithExpandedLabels;
    };
    var templateColumns = getTemplateColumns(columns);
    var style = {
        display: "grid",
        gridTemplateColumns: responsiveBehaviour ? "auto" : templateColumns,
    };
    var content = (react_1.default.createElement("div", { style: style }, ooui.container.rows.map(function (row) {
        return expandLabelsInFields(row).map(function (item) {
            var responsiveSpan = 1;
            return (react_1.default.createElement("div", { style: {
                    alignSelf: "center",
                    padding: "0.5em",
                    gridColumnStart: "span " +
                        (responsiveBehaviour ? responsiveSpan : item.colspan),
                } }, WidgetFactory_1.createReactWidget(item)));
        });
    })));
    return (react_1.default.createElement(react_1.default.Fragment, null, ooui.label && showLabel ? (react_1.default.createElement("fieldset", { style: {
            border: "1px solid #ccc",
            paddingLeft: "0.5em",
            paddingRight: "0.5em",
        } },
        react_1.default.createElement("legend", { style: {
                all: "initial",
                marginLeft: "1em",
                paddingLeft: "0.5em",
                paddingRight: "0.5em",
                fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
            } }, ooui.label),
        content)) : (content)));
}
var getTemplateColumns = function (columns) {
    var odd = "1fr";
    var even = "auto";
    var templateColumns = "";
    for (var i = 0; i < columns; i++) {
        templateColumns += i % 2 ? odd : even;
        if (i < columns) {
            templateColumns += " ";
        }
    }
    return templateColumns;
};
var clone = function clone(instance) {
    var copy = new instance.constructor();
    Object.assign(copy, instance);
    return copy;
};
exports.default = Group;
//# sourceMappingURL=Group.js.map