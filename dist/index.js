/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@ant-design/icons"), require("antd"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@ant-design/icons", "antd", "react"], factory);
	else if(typeof exports === 'object')
		exports["react-ooui"] = factory(require("@ant-design/icons"), require("antd"), require("react"));
	else
		root["react-ooui"] = factory(root["@ant-design/icons"], root["antd"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__ant_design_icons__, __WEBPACK_EXTERNAL_MODULE_antd__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ManyToOne = exports.Checkbox = exports.Selection = exports.Char = exports.Button = void 0;\nvar Button_1 = __webpack_require__(/*! ./widgets/Button */ \"./src/widgets/Button.tsx\");\nObject.defineProperty(exports, \"Button\", ({ enumerable: true, get: function () { return Button_1.Button; } }));\nvar Char_1 = __webpack_require__(/*! ./widgets/Char */ \"./src/widgets/Char.tsx\");\nObject.defineProperty(exports, \"Char\", ({ enumerable: true, get: function () { return Char_1.Char; } }));\nvar Selection_1 = __webpack_require__(/*! ./widgets/Selection */ \"./src/widgets/Selection.tsx\");\nObject.defineProperty(exports, \"Selection\", ({ enumerable: true, get: function () { return Selection_1.Selection; } }));\nvar Checkbox_1 = __webpack_require__(/*! ./widgets/Checkbox */ \"./src/widgets/Checkbox.tsx\");\nObject.defineProperty(exports, \"Checkbox\", ({ enumerable: true, get: function () { return Checkbox_1.Checkbox; } }));\nvar ManyToOne_1 = __webpack_require__(/*! ./widgets/ManyToOne */ \"./src/widgets/ManyToOne.tsx\");\nObject.defineProperty(exports, \"ManyToOne\", ({ enumerable: true, get: function () { return ManyToOne_1.ManyToOne; } }));\n\n\n//# sourceURL=webpack://react-ooui/./src/index.ts?");

/***/ }),

/***/ "./src/widgets/Button.tsx":
/*!********************************!*\
  !*** ./src/widgets/Button.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Button = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar antd_1 = __webpack_require__(/*! antd */ \"antd\");\nvar Button = function (_a) {\n    var type = _a.type, activated = _a.activated, onClick = _a.onClick, label = _a.label, props = __rest(_a, [\"type\", \"activated\", \"onClick\", \"label\"]);\n    return (react_1.default.createElement(antd_1.Form.Item, { label: label },\n        react_1.default.createElement(antd_1.Button, __assign({}, props, { type: type, disabled: !activated, onClick: onClick }), props.children)));\n};\nexports.Button = Button;\n\n\n//# sourceURL=webpack://react-ooui/./src/widgets/Button.tsx?");

/***/ }),

/***/ "./src/widgets/Char.tsx":
/*!******************************!*\
  !*** ./src/widgets/Char.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Char = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar antd_1 = __webpack_require__(/*! antd */ \"antd\");\nvar Char = function (_a) {\n    var id = _a.id, label = _a.label, value = _a.value, placeholder = _a.placeholder, onChange = _a.onChange, onPressEnter = _a.onPressEnter, props = __rest(_a, [\"id\", \"label\", \"value\", \"placeholder\", \"onChange\", \"onPressEnter\"]);\n    return (react_1.default.createElement(antd_1.Form.Item, { label: label },\n        react_1.default.createElement(antd_1.Input, __assign({}, props, { id: id, value: value, placeholder: placeholder, onChange: onChange, onPressEnter: onPressEnter }), props.children)));\n};\nexports.Char = Char;\n\n\n//# sourceURL=webpack://react-ooui/./src/widgets/Char.tsx?");

/***/ }),

/***/ "./src/widgets/Checkbox.tsx":
/*!**********************************!*\
  !*** ./src/widgets/Checkbox.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Checkbox = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar antd_1 = __webpack_require__(/*! antd */ \"antd\");\nvar Checkbox = function (_a) {\n    var id = _a.id, label = _a.label, description = _a.description, checked = _a.checked, activated = _a.activated, onChange = _a.onChange, props = __rest(_a, [\"id\", \"label\", \"description\", \"checked\", \"activated\", \"onChange\"]);\n    return (react_1.default.createElement(antd_1.Form.Item, { label: label },\n        react_1.default.createElement(antd_1.Checkbox, __assign({}, props, { id: id, checked: checked, disabled: !activated, onChange: onChange }), description)));\n};\nexports.Checkbox = Checkbox;\n\n\n//# sourceURL=webpack://react-ooui/./src/widgets/Checkbox.tsx?");

/***/ }),

/***/ "./src/widgets/ManyToOne.tsx":
/*!***********************************!*\
  !*** ./src/widgets/ManyToOne.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ManyToOne = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar antd_1 = __webpack_require__(/*! antd */ \"antd\");\nvar icons_1 = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\nvar ManyToOne = function (_a) {\n    var id = _a.id, label = _a.label, value = _a.value, placeholder = _a.placeholder, onChange = _a.onChange, onOpenDetailClick = _a.onOpenDetailClick, onSearchClick = _a.onSearchClick, props = __rest(_a, [\"id\", \"label\", \"value\", \"placeholder\", \"onChange\", \"onOpenDetailClick\", \"onSearchClick\"]);\n    return (react_1.default.createElement(antd_1.Form.Item, { label: label },\n        react_1.default.createElement(antd_1.Input.Group, null,\n            react_1.default.createElement(antd_1.Row, { gutter: 8 },\n                react_1.default.createElement(antd_1.Col, { flex: \"auto\" },\n                    react_1.default.createElement(antd_1.Input, { placeholder: placeholder, defaultValue: value, onChange: onChange })),\n                react_1.default.createElement(antd_1.Col, { flex: \"32px\" },\n                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FolderOpenOutlined, null), onClick: onOpenDetailClick, disabled: !value })),\n                react_1.default.createElement(antd_1.Col, { flex: \"32px\" },\n                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.SearchOutlined, null), onClick: onSearchClick }))))));\n};\nexports.ManyToOne = ManyToOne;\n\n\n//# sourceURL=webpack://react-ooui/./src/widgets/ManyToOne.tsx?");

/***/ }),

/***/ "./src/widgets/Selection.tsx":
/*!***********************************!*\
  !*** ./src/widgets/Selection.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Selection = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar antd_1 = __webpack_require__(/*! antd */ \"antd\");\nvar Selection = function (_a) {\n    var id = _a.id, label = _a.label, defaultValue = _a.defaultValue, values = _a.values, placeholder = _a.placeholder, onChange = _a.onChange, props = __rest(_a, [\"id\", \"label\", \"defaultValue\", \"values\", \"placeholder\", \"onChange\"]);\n    var Option = antd_1.Select.Option;\n    var options = values &&\n        values.length &&\n        values.map(function (v) {\n            return react_1.default.createElement(Option, { value: v.id }, v.name);\n        });\n    return (react_1.default.createElement(antd_1.Form.Item, { label: label },\n        react_1.default.createElement(antd_1.Select, __assign({}, props), options)));\n};\nexports.Selection = Selection;\n\n\n//# sourceURL=webpack://react-ooui/./src/widgets/Selection.tsx?");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__ant_design_icons__;

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_antd__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});