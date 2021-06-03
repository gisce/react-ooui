"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var MODAL_WIDTH_CONSTANT = 0.7;
function getWindowDimensions() {
    var width = window.innerWidth, height = window.innerHeight;
    return {
        width: width,
        height: height,
    };
}
function useModalWidthDimensions() {
    var _a = react_1.useState(getWindowDimensions()), windowDimensions = _a[0], setWindowDimensions = _a[1];
    react_1.useEffect(function () {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    return { modalWidth: windowDimensions.width * MODAL_WIDTH_CONSTANT, modalHeight: windowDimensions.height };
}
exports.default = useModalWidthDimensions;
//# sourceMappingURL=useModalWidthDimensions.js.map