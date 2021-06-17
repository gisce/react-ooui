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
var antd_1 = require("antd");
var react_1 = __importDefault(require("react"));
var Field_1 = __importDefault(require("@/common/Field"));
var Config_1 = __importDefault(require("@/Config"));
var moment_1 = __importDefault(require("moment"));
var DatePickerConfig = {
    date: {
        placeholder: "__/__/____",
        dateDisplayFormat: "",
        dateInternalFormat: "",
    },
    time: {
        placeholder: "__/__/____ __:__:__",
        dateDisplayFormat: "",
        dateInternalFormat: "",
    },
};
var DatePicker = function (props) {
    var ooui = props.ooui, _a = props.showTime, showTime = _a === void 0 ? false : _a;
    var required = ooui.required;
    return (react_1.default.createElement(Field_1.default, __assign({ required: required }, props),
        react_1.default.createElement(DatePickerInput, { ooui: ooui, showTime: showTime })));
};
var DatePickerInput = function (props) {
    var value = props.value, onChange = props.onChange, ooui = props.ooui, showTime = props.showTime;
    var _a = ooui, id = _a.id, readOnly = _a.readOnly, required = _a.required;
    var requiredClass = required && !readOnly ? Config_1.default.requiredClass : undefined;
    var mode = showTime ? "time" : "date";
    var triggerChange = function (changedValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(changedValue);
    };
    var onValueStringChange = function (momentDate) {
        if (momentDate === null) {
            triggerChange(undefined);
            return;
        }
        triggerChange(momentDate.format(DatePickerConfig[mode].dateInternalFormat));
    };
    var showTimeParms = showTime
        ? { defaultValue: moment_1.default("00:00:00", "HH:mm:ss") }
        : undefined;
    var dateValue = value ? moment_1.default(value) : undefined;
    return (react_1.default.createElement(antd_1.DatePicker, { style: { width: "100%" }, placeholder: showTime
            ? DatePickerConfig.time.placeholder
            : DatePickerConfig.date.placeholder, disabled: readOnly, id: id, showTime: showTimeParms, className: requiredClass, format: DatePickerConfig[mode].dateDisplayFormat, value: dateValue, onChange: onValueStringChange }));
};
exports.default = DatePicker;
//# sourceMappingURL=DatePicker.js.map