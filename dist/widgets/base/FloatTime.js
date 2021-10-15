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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatTimeInput = exports.FloatTime = void 0;
var react_1 = __importStar(require("react"));
var antd_1 = require("antd");
var Field_1 = __importDefault(require("@/common/Field"));
var Config_1 = __importDefault(require("@/Config"));
var FloatTime = function (props) {
    var ooui = props.ooui;
    var required = ooui.required;
    return (react_1.default.createElement(Field_1.default, __assign({ required: required, type: "number" }, props),
        react_1.default.createElement(exports.FloatTimeInput, { ooui: ooui })));
};
exports.FloatTime = FloatTime;
var FloatTimeInput = function (props) {
    var ooui = props.ooui, value = props.value, onChange = props.onChange;
    var _a = ooui, id = _a.id, readOnly = _a.readOnly, required = _a.required;
    var requiredClass = required && !readOnly ? Config_1.default.requiredClass : undefined;
    var inputTextRef = react_1.useRef();
    var _b = react_1.useState(), inputText = _b[0], setInputText = _b[1];
    react_1.useEffect(function () {
        setInputText(parseFloatToString(value));
    }, [value]);
    var triggerChange = function (changedValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(changedValue);
    };
    function parseStringToFloat(text) {
        if (!text) {
            return undefined;
        }
        try {
            if (text.includes(":")) {
                var splitted = text.trim().split(":");
                return (Math.round((parseInt(splitted[0]) + parseInt(splitted[1]) / 60.0) * 10000) / 10000);
            }
            else {
                return parseFloat(text.trim());
            }
        }
        catch (err) {
            return 0;
        }
    }
    function parseFloatToString(num) {
        if (num === undefined) {
            return undefined;
        }
        var finalString;
        var hours = Math.floor(Math.abs(num));
        var mins = Math.round((Math.abs(num) % 1) * 100) / 100;
        if (mins >= 1) {
            hours = hours + 1;
            mins = 0.0;
        }
        else {
            mins = mins * 60;
        }
        var hoursString = hours.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            maximumFractionDigits: 0,
            useGrouping: false,
        });
        var minsStrings = mins.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            maximumFractionDigits: 0,
            useGrouping: false,
        });
        finalString = hoursString + ":" + minsStrings;
        if (num < 0) {
            finalString = "-" + finalString;
        }
        return finalString;
    }
    function onValueStringChange(e) {
        inputTextRef.current = e.target.value;
        setInputText(e.target.value);
    }
    function onElementLostFocus() {
        triggerChange(parseStringToFloat(inputText));
    }
    return (react_1.default.createElement(antd_1.Input, { value: inputText, disabled: readOnly, className: "w-full " + requiredClass, id: id, placeholder: "00:00", onChange: onValueStringChange, onBlur: onElementLostFocus }));
};
exports.FloatTimeInput = FloatTimeInput;
//# sourceMappingURL=FloatTime.js.map