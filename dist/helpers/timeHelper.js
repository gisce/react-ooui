"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFloatToString = exports.parseStringToFloat = void 0;
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
exports.parseStringToFloat = parseStringToFloat;
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
exports.parseFloatToString = parseFloatToString;
//# sourceMappingURL=timeHelper.js.map