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
exports.One2many = void 0;
var react_1 = __importStar(require("react"));
var Field_1 = __importDefault(require("@/common/Field"));
var antd_1 = require("antd");
var index_1 = require("@/index");
var index_2 = require("@/index");
var ooui_1 = require("ooui");
var icons_1 = require("@ant-design/icons");
var One2many = function (props) {
    var ooui = props.ooui;
    return (react_1.default.createElement(Field_1.default, __assign({}, props),
        react_1.default.createElement(One2manyInput, { ooui: ooui })));
};
exports.One2many = One2many;
var One2manyInput = function (props) {
    var _a = props.value, value = _a === void 0 ? [] : _a, onChange = props.onChange, ooui = props.ooui;
    var triggerChange = function (changedValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(__assign(__assign({}, value), changedValue));
    };
    var _b = ooui, id = _b.id, readOnly = _b.readOnly, required = _b.required, relation = _b.relation, views = _b.views, mode = _b.mode;
    var _c = react_1.useState(mode[0]), viewMode = _c[0], setViewMode = _c[1];
    var _d = react_1.useState(0), itemIndex = _d[0], setItemIndex = _d[1];
    var separator = function () {
        return react_1.default.createElement("div", { className: "inline-block w-3" });
    };
    var index = function () {
        return (react_1.default.createElement("span", { className: "pl-1 pr-1" },
            "(",
            itemIndex + 1,
            "/",
            value.length,
            ")"));
    };
    var toggleViewMode = function () {
        if (mode.length > 1) {
            setViewMode(viewMode === "form" ? "tree" : "form");
        }
    };
    var getTitle = function () {
        var type = viewMode === "form" ? ooui_1.Form : ooui_1.Tree;
        var ooui = new type(views[viewMode].fields);
        ooui.parse(views[viewMode].arch);
        return ooui.string;
    };
    var topBar = function () {
        return (react_1.default.createElement("div", { className: "flex mb-2" },
            react_1.default.createElement("div", { className: "h-8 flex flex-grow bg-gray-700 text-gray-200" },
                react_1.default.createElement("div", { className: "h-full flex flex-col justify-center items-center" },
                    react_1.default.createElement("span", { className: "pl-2 font-bold" }, getTitle()))),
            react_1.default.createElement("div", { className: "h-8 flex-none pl-2" },
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FileAddOutlined, null) }),
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.EditOutlined, null) }),
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.DeleteOutlined, null) }),
                separator(),
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.LeftOutlined, null) }),
                index(),
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.RightOutlined, null) }),
                separator(),
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.AlignLeftOutlined, null), onClick: toggleViewMode }))));
    };
    var content = function () {
        if (viewMode === "form") {
            return (react_1.default.createElement(index_1.Form, { model: relation, id: value[itemIndex], onCancel: function () {
                    console.log();
                }, onSubmitSucceed: function (value) {
                    console.log();
                } }));
        }
        return (react_1.default.createElement(index_2.SimpleTree, { model: relation, ids: value, formView: views.form, treeView: views.tree, onRowClicked: function () {
                console.log();
            } }));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        topBar(),
        content()));
};
//# sourceMappingURL=One2many.js.map