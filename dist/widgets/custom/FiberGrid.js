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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiberGridInput = exports.FiberGrid = void 0;
var react_1 = __importDefault(require("react"));
var Field_1 = __importDefault(require("@/common/Field"));
var fiber_diagram_1 = require("fiber-diagram");
var FiberGrid = function (props) {
    var ooui = props.ooui;
    var _a = ooui, id = _a.id, readOnly = _a.readOnly, required = _a.required;
    // const requiredClass =
    //   required && !readOnly ? Config.requiredClass : undefined;
    return (react_1.default.createElement(Field_1.default, __assign({ required: required }, props),
        react_1.default.createElement(exports.FiberGridInput, null)));
};
exports.FiberGrid = FiberGrid;
var FiberGridInput = function (props) {
    var value = props.value, onChange = props.onChange;
    if (!value) {
        return null;
    }
    // Validate string json
    try {
        JSON.parse(value);
    }
    catch (e) {
        console.log(e);
        return null;
    }
    return (react_1.default.createElement(fiber_diagram_1.GridUi, { inputJson: value, onChange: function (newValue) {
            if (onChange) {
                onChange(newValue);
            }
        } }));
};
exports.FiberGridInput = FiberGridInput;
//# sourceMappingURL=FiberGrid.js.map