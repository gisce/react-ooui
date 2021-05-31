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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEffectDebugger = void 0;
var react_1 = require("react");
var usePrevious = function (value, initialValue) {
    var ref = react_1.useRef(initialValue);
    react_1.useEffect(function () {
        ref.current = value;
    });
    return ref.current;
};
var useEffectDebugger = function (effectHook, dependencies, dependencyNames) {
    if (dependencyNames === void 0) { dependencyNames = []; }
    var previousDeps = usePrevious(dependencies, []);
    var changedDeps = dependencies.reduce(function (accum, dependency, index) {
        var _a;
        if (dependency !== previousDeps[index]) {
            var keyName = dependencyNames[index] || index;
            return __assign(__assign({}, accum), (_a = {}, _a[keyName] = {
                before: previousDeps[index],
                after: dependency,
            }, _a));
        }
        return accum;
    }, {});
    if (Object.keys(changedDeps).length) {
        console.log("[use-effect-debugger] ", changedDeps);
    }
    react_1.useEffect(effectHook, dependencies);
};
exports.useEffectDebugger = useEffectDebugger;
//# sourceMappingURL=useEffectDebugger.js.map