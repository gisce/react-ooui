"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Container_1 = __importDefault(require("./Container"));
var Fieldset_1 = __importDefault(require("@/ui/Fieldset"));
function Group(props) {
    var ooui = props.ooui, _a = props.showLabel, showLabel = _a === void 0 ? true : _a;
    return (react_1.default.createElement(react_1.default.Fragment, null, ooui.label && showLabel ? (react_1.default.createElement(Fieldset_1.default, { label: ooui.label },
        react_1.default.createElement(Container_1.default, { container: ooui.container }))) : (react_1.default.createElement(Container_1.default, { container: ooui.container }))));
}
exports.default = Group;
//# sourceMappingURL=Group.js.map