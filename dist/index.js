(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("antd"), require("@ant-design/icons"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "antd", "@ant-design/icons"], factory);
	else if(typeof exports === 'object')
		exports["react-ooui"] = factory(require("react"), require("antd"), require("@ant-design/icons"));
	else
		root["react-ooui"] = factory(root["react"], root["antd"], root["@ant-design/icons"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_antd__, __WEBPACK_EXTERNAL_MODULE__ant_design_icons__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/tailwind.generated.css":
/*!************************************!*\
  !*** ./src/tailwind.generated.css ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/ooui/dist/Boolean.js":
/*!*******************************************!*\
  !*** ./node_modules/ooui/dist/Boolean.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Boolean input
 */
var Boolean = /** @class */ (function (_super) {
    __extends(Boolean, _super);
    function Boolean(props) {
        var _this = _super.call(this, props) || this;
        if (props === null || props === void 0 ? void 0 : props.string) {
            if (!props.colspan) {
                _this.colspan = 2;
            }
        }
        return _this;
    }
    return Boolean;
}(_Field__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Boolean);
//# sourceMappingURL=Boolean.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Button.js":
/*!******************************************!*\
  !*** ./node_modules/ooui/dist/Button.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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

var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, __assign(__assign({}, props), { nolabel: (props === null || props === void 0 ? void 0 : props.nolabel) !== undefined ? props.nolabel : true })) || this;
        /**
         * Type (primary or default)
         */
        _this._type = "default";
        /**
         * Button caption
         */
        _this._caption = "";
        if (props) {
            if (props.string) {
                _this._caption = props.string;
            }
        }
        return _this;
    }
    Object.defineProperty(Button.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "caption", {
        get: function () {
            return this._caption;
        },
        set: function (value) {
            this._caption = value;
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}(_Field__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);
//# sourceMappingURL=Button.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Char.js":
/*!****************************************!*\
  !*** ./node_modules/ooui/dist/Char.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * One-line input with a length limit.
 */
var Char = /** @class */ (function (_super) {
    __extends(Char, _super);
    function Char(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Field place holder
         */
        _this._placeholder = "";
        /**
         * Field size
         */
        _this._size = 150;
        _this._isPassword = false;
        if (props) {
            if (props.size) {
                _this._size = props.size;
            }
            if (props.string) {
                if (!props.colspan) {
                    _this.colspan = 2;
                }
            }
            if (props.password) {
                _this.isPassword = props.password === "True" ? true : false;
            }
        }
        return _this;
    }
    Object.defineProperty(Char.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            this._placeholder = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Char.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Char.prototype, "isPassword", {
        get: function () {
            return this._isPassword;
        },
        set: function (value) {
            this._isPassword = value;
        },
        enumerable: false,
        configurable: true
    });
    return Char;
}(_Field__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Char);
//# sourceMappingURL=Char.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Container.js":
/*!*********************************************!*\
  !*** ./node_modules/ooui/dist/Container.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewLine */ "./node_modules/ooui/dist/NewLine.js");

var Container = /** @class */ (function () {
    function Container(columns, colspan) {
        if (columns === void 0) { columns = 4; }
        if (colspan === void 0) { colspan = 6; }
        this._columns = columns;
        this._colspan = colspan;
        this._rows = [[]];
        this._index = 0;
    }
    Object.defineProperty(Container.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (value) {
            this._columns = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "colspan", {
        get: function () {
            return this._colspan;
        },
        set: function (value) {
            this._colspan = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        set: function (value) {
            this._rows = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Container.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the next free position
     */
    Container.prototype.freePosition = function () {
        var span = this._rows[this._index].filter(function (el) { return !el.invisible; }).reduce(function (prev, current) {
            return prev + current.colspan;
        }, 0);
        return this._columns - span;
    };
    Container.prototype.addWidget = function (widget) {
        if (widget instanceof _NewLine__WEBPACK_IMPORTED_MODULE_0__.default) {
            this._rows.push([]);
            this._index++;
            return;
        }
        if (widget.colspan > this._columns) {
            // Widget colspan is greater than container columns, so we change widget
            // colspan to fit container columns.
            widget.colspan = this._columns;
        }
        if (widget.colspan <= this.freePosition()) {
            this._rows[this._index].push(widget);
        }
        else {
            this._rows.push([]);
            this._index++;
            this.addWidget(widget);
        }
    };
    /**
     * Traverses children to find a matching container or widget with the exact same id.
     * @param {string} id id (name) of the field or container to find
     */
    Container.prototype.findById = function (id) {
        var r = null;
        if (this._rows && this._rows.length) {
            this._rows.forEach(function (row) {
                if (r) {
                    // Item has been found.
                    return;
                }
                if (row && row.length) {
                    row.forEach(function (item) {
                        if (r) {
                            // Item has been found.
                            return;
                        }
                        if (item) {
                            r = item.findById(id);
                        }
                    });
                }
            });
        }
        return r;
    };
    return Container;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);
//# sourceMappingURL=Container.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/ContainerWidget.js":
/*!***************************************************!*\
  !*** ./node_modules/ooui/dist/ContainerWidget.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget */ "./node_modules/ooui/dist/Widget.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ "./node_modules/ooui/dist/Container.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ContainerWidget = /** @class */ (function (_super) {
    __extends(ContainerWidget, _super);
    function ContainerWidget(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Field identifier
         *
         * Corresponds to the field's name attribute from xml
         */
        _this._id = "";
        /**
         * Container label
         */
        _this._label = "";
        _this._container = new _Container__WEBPACK_IMPORTED_MODULE_1__.default(props && props.col, ContainerWidget._defaultColspan);
        if (props) {
            if (props.name) {
                _this._id = props.name;
            }
            if (props.colspan) {
                _this._container.colspan = +props.colspan;
            }
            if (props.string) {
                _this._label = props.string;
            }
        }
        return _this;
    }
    Object.defineProperty(ContainerWidget.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerWidget, "defaultColspan", {
        get: function () {
            return ContainerWidget._defaultColspan;
        },
        set: function (value) {
            ContainerWidget._defaultColspan = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerWidget.prototype, "container", {
        get: function () {
            return this._container;
        },
        set: function (value) {
            this._container = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerWidget.prototype, "colspan", {
        get: function () {
            return this._container.colspan;
        },
        set: function (value) {
            this._container.colspan = +value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerWidget.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Calls container's findById method to find the widgets matching with param id
     * @param {string} id id to find
     */
    ContainerWidget.prototype.findById = function (id) {
        if (id === this.id) {
            return this;
        }
        return this.container.findById(id);
    };
    ContainerWidget._defaultColspan = 6;
    return ContainerWidget;
}(_Widget__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContainerWidget);
//# sourceMappingURL=ContainerWidget.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Date.js":
/*!****************************************!*\
  !*** ./node_modules/ooui/dist/Date.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Date input
 */
var Date = /** @class */ (function (_super) {
    __extends(Date, _super);
    function Date(props) {
        var _this = _super.call(this, props) || this;
        if (props === null || props === void 0 ? void 0 : props.string) {
            if (!props.colspan) {
                _this.colspan = 2;
            }
        }
        return _this;
    }
    return Date;
}(_Field__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Date);
//# sourceMappingURL=Date.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/DateTime.js":
/*!********************************************!*\
  !*** ./node_modules/ooui/dist/DateTime.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * DateTime input
 */
var DateTime = /** @class */ (function (_super) {
    __extends(DateTime, _super);
    function DateTime(props) {
        var _this = _super.call(this, props) || this;
        if (props === null || props === void 0 ? void 0 : props.string) {
            if (!props.colspan) {
                _this.colspan = 2;
            }
        }
        return _this;
    }
    return DateTime;
}(_Field__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateTime);
//# sourceMappingURL=DateTime.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Field.js":
/*!*****************************************!*\
  !*** ./node_modules/ooui/dist/Field.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget */ "./node_modules/ooui/dist/Widget.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Field identifier
         *
         * Corresponds to the field's name attribute from xml
         */
        _this._id = "";
        /**
         * Label
         */
        _this._label = "";
        /**
         * No label
         *
         * This field hasn't got to show the label
         *
         */
        _this._nolabel = false;
        /**
         *
         * Required field
         *
         */
        _this._required = false;
        /**
         * Activated (default is true)
         */
        _this._activated = true;
        // Activated by default
        _this._activated = true;
        if (props) {
            if (props.name) {
                _this._id = props.name;
            }
            if (props.activated) {
                _this._activated = props.activated;
            }
            if (props.string) {
                _this._label = props.string;
            }
            if (props.help) {
                _this._tooltip = props.help;
            }
            if (props.nolabel &&
                (props.nolabel === "1" ||
                    (typeof props.nolabel === "boolean" && props.nolabel === true))) {
                _this._nolabel = true;
            }
            if (props.required &&
                (props.required === "1" || props.required === true)) {
                _this._required = true;
            }
        }
        return _this;
    }
    Object.defineProperty(Field.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "nolabel", {
        get: function () {
            return this._nolabel;
        },
        set: function (value) {
            this._nolabel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (value) {
            this._required = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "tooltip", {
        get: function () {
            return this._tooltip;
        },
        set: function (value) {
            this._tooltip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Field.prototype, "activated", {
        get: function () {
            return this._activated;
        },
        set: function (value) {
            this._activated = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns this instance in case this id matches param id.
     * @param {string} id id (name) to find
     */
    Field.prototype.findById = function (id) {
        var r = null;
        if (this._id === id) {
            r = this;
        }
        return r;
    };
    return Field;
}(_Widget__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Field);
//# sourceMappingURL=Field.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Float.js":
/*!*****************************************!*\
  !*** ./node_modules/ooui/dist/Float.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Float input
 */
var Float = /** @class */ (function (_super) {
    __extends(Float, _super);
    function Float(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Integer digits
         *
         * Number of integer digits that will be part of the float
         */
        _this._integerDigits = 16;
        /**
         * Decimal digits
         *
         * Number of decimal digits that will be part of the float
         */
        _this._decimalDigits = 2;
        if (props === null || props === void 0 ? void 0 : props.string) {
            if (!(props === null || props === void 0 ? void 0 : props.colspan)) {
                _this.colspan = 2;
            }
        }
        if (props === null || props === void 0 ? void 0 : props.digits) {
            var _a = props.digits, integers = _a[0], decimals = _a[1];
            _this._integerDigits = integers;
            _this._decimalDigits = decimals;
        }
        return _this;
    }
    Object.defineProperty(Float.prototype, "integerDigits", {
        get: function () {
            return this._integerDigits;
        },
        set: function (value) {
            this._integerDigits = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Float.prototype, "decimalDigits", {
        get: function () {
            return this._decimalDigits;
        },
        set: function (value) {
            this._decimalDigits = value;
        },
        enumerable: false,
        configurable: true
    });
    return Float;
}(_Field__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Float);
//# sourceMappingURL=Float.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/FloatTime.js":
/*!*********************************************!*\
  !*** ./node_modules/ooui/dist/FloatTime.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Float */ "./node_modules/ooui/dist/Float.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * FloatTime input
 */
var FloatTime = /** @class */ (function (_super) {
    __extends(FloatTime, _super);
    function FloatTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FloatTime;
}(_Float__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatTime);
//# sourceMappingURL=FloatTime.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Form.js":
/*!****************************************!*\
  !*** ./node_modules/ooui/dist/Form.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WidgetFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WidgetFactory */ "./node_modules/ooui/dist/WidgetFactory.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ "./node_modules/ooui/dist/Container.js");
/* harmony import */ var _ContainerWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContainerWidget */ "./node_modules/ooui/dist/ContainerWidget.js");
var __assign = (undefined && undefined.__assign) || function () {
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



var Form = /** @class */ (function () {
    /*
    _widgets = {
      *[Symbol.iterator]() {
        if (this._container && this._container.length) {
          this._container.forEach((item) => {
            
            // yield item
          });
        }
      }
    };
    get widgets() {
      return this._widgets;
    }
    */
    function Form(fields, columns) {
        if (columns === void 0) { columns = 8; }
        this._fields = fields;
        this._container = new _Container__WEBPACK_IMPORTED_MODULE_1__.default(columns);
    }
    Object.defineProperty(Form.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Form.prototype, "container", {
        get: function () {
            return this._container;
        },
        enumerable: false,
        configurable: true
    });
    Form.prototype.parse = function (xml) {
        var parser = new DOMParser();
        var view = parser.parseFromString(xml, "text/xml");
        this.parseNode(view.documentElement, this._container);
    };
    Form.prototype.parseNode = function (node, container) {
        var _this = this;
        var widgetFactory = new _WidgetFactory__WEBPACK_IMPORTED_MODULE_0__.default();
        Array.prototype.forEach.call(node.childNodes, function (child) {
            if (child.nodeType === child.ELEMENT_NODE) {
                var tag = child.nodeName;
                var tagAttributes_1 = {};
                Array.prototype.forEach.call(child.attributes, function (attr) {
                    tagAttributes_1[attr.name] = attr.value;
                });
                if (tag === "field") {
                    var name_1 = child.getAttribute("name");
                    var attrWidget = child.getAttribute("widget");
                    if (attrWidget) {
                        tag = attrWidget;
                    }
                    else if (name_1) {
                        tag = _this._fields[name_1].type;
                    }
                    tagAttributes_1 = __assign(__assign({}, tagAttributes_1), _this._fields[name_1]);
                }
                var widget = widgetFactory.createWidget(tag, tagAttributes_1);
                if (widget instanceof _ContainerWidget__WEBPACK_IMPORTED_MODULE_2__.default) {
                    _this.parseNode(child, widget.container);
                }
                container.addWidget(widget);
            }
        });
    };
    /**
     * Calls container's findById method to find the widgets matching with param id
     * @param {string} id id to find
     */
    Form.prototype.findById = function (id) {
        return this.container.findById(id);
    };
    return Form;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);
//# sourceMappingURL=Form.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Group.js":
/*!*****************************************!*\
  !*** ./node_modules/ooui/dist/Group.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContainerWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerWidget */ "./node_modules/ooui/dist/ContainerWidget.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group(props) {
        return _super.call(this, props) || this;
    }
    return Group;
}(_ContainerWidget__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Group);
//# sourceMappingURL=Group.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Integer.js":
/*!*******************************************!*\
  !*** ./node_modules/ooui/dist/Integer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Integer input
 */
var Integer = /** @class */ (function (_super) {
    __extends(Integer, _super);
    function Integer(props) {
        var _this = _super.call(this, props) || this;
        if (props === null || props === void 0 ? void 0 : props.string) {
            if (!props.colspan) {
                _this.colspan = 2;
            }
        }
        return _this;
    }
    return Integer;
}(_Field__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Integer);
//# sourceMappingURL=Integer.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Label.js":
/*!*****************************************!*\
  !*** ./node_modules/ooui/dist/Label.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Label text
         */
        _this._text = "";
        /**
         * Align text
         */
        _this._align = "left";
        return _this;
    }
    Object.defineProperty(Label.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Label.prototype, "align", {
        get: function () {
            return this._align;
        },
        set: function (value) {
            this._align = value;
        },
        enumerable: false,
        configurable: true
    });
    return Label;
}(_Field__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);
//# sourceMappingURL=Label.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Many2many.js":
/*!*********************************************!*\
  !*** ./node_modules/ooui/dist/Many2many.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A Many2many relationship field
 */
var Many2many = /** @class */ (function (_super) {
    __extends(Many2many, _super);
    function Many2many(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Field size
         */
        _this._size = 150;
        /**
         * Relation
         */
        _this._relation = "";
        if (props) {
            if (props.size) {
                _this._size = props.size;
            }
            if (props.string) {
                if (!props.colspan) {
                    _this.colspan = 2;
                }
            }
            if (props.relation) {
                _this._relation = props.relation;
            }
        }
        return _this;
    }
    Object.defineProperty(Many2many.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Many2many.prototype, "relation", {
        get: function () {
            return this._relation;
        },
        set: function (value) {
            this._relation = value;
        },
        enumerable: false,
        configurable: true
    });
    return Many2many;
}(_Field__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Many2many);
//# sourceMappingURL=Many2many.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Many2one.js":
/*!********************************************!*\
  !*** ./node_modules/ooui/dist/Many2one.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A many2one relationship field
 */
var Many2one = /** @class */ (function (_super) {
    __extends(Many2one, _super);
    function Many2one(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Field size
         */
        _this._size = 150;
        /**
         * Relation
         */
        _this._relation = "";
        if (props) {
            if (props.size) {
                _this._size = props.size;
            }
            if (props.string) {
                if (!props.colspan) {
                    _this.colspan = 2;
                }
            }
            if (props.relation) {
                _this._relation = props.relation;
            }
        }
        return _this;
    }
    Object.defineProperty(Many2one.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Many2one.prototype, "relation", {
        get: function () {
            return this._relation;
        },
        set: function (value) {
            this._relation = value;
        },
        enumerable: false,
        configurable: true
    });
    return Many2one;
}(_Field__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Many2one);
//# sourceMappingURL=Many2one.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/NewLine.js":
/*!*******************************************!*\
  !*** ./node_modules/ooui/dist/NewLine.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget */ "./node_modules/ooui/dist/Widget.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NewLine = /** @class */ (function (_super) {
    __extends(NewLine, _super);
    function NewLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewLine.prototype.findById = function (id) {
        return null;
    };
    return NewLine;
}(_Widget__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewLine);
//# sourceMappingURL=NewLine.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Notebook.js":
/*!********************************************!*\
  !*** ./node_modules/ooui/dist/Notebook.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContainerWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerWidget */ "./node_modules/ooui/dist/ContainerWidget.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Notebook = /** @class */ (function (_super) {
    __extends(Notebook, _super);
    function Notebook(props) {
        var _this = _super.call(this, props) || this;
        _this.colspan = Notebook._defaultColspan;
        if (props) {
            if (props.colspan) {
                _this.colspan = props.colspan;
            }
        }
        return _this;
    }
    Object.defineProperty(Notebook, "defaultColspan", {
        get: function () {
            return Notebook._defaultColspan;
        },
        set: function (value) {
            Notebook._defaultColspan = value;
        },
        enumerable: false,
        configurable: true
    });
    Notebook._defaultColspan = 3;
    return Notebook;
}(_ContainerWidget__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notebook);
//# sourceMappingURL=Notebook.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/One2many.js":
/*!********************************************!*\
  !*** ./node_modules/ooui/dist/One2many.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A One2Many relationship field
 */
var One2many = /** @class */ (function (_super) {
    __extends(One2many, _super);
    function One2many(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Field size
         */
        _this._size = 150;
        /**
         * Relation
         */
        _this._relation = "";
        if (props) {
            if (props.size) {
                _this._size = props.size;
            }
            if (props.string) {
                if (!props.colspan) {
                    _this.colspan = 2;
                }
            }
            if (props.relation) {
                _this._relation = props.relation;
            }
        }
        return _this;
    }
    Object.defineProperty(One2many.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(One2many.prototype, "relation", {
        get: function () {
            return this._relation;
        },
        set: function (value) {
            this._relation = value;
        },
        enumerable: false,
        configurable: true
    });
    return One2many;
}(_Field__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (One2many);
//# sourceMappingURL=One2many.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Page.js":
/*!****************************************!*\
  !*** ./node_modules/ooui/dist/Page.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContainerWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContainerWidget */ "./node_modules/ooui/dist/ContainerWidget.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page(props) {
        return _super.call(this, props) || this;
    }
    return Page;
}(_ContainerWidget__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);
//# sourceMappingURL=Page.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/ProgressBar.js":
/*!***********************************************!*\
  !*** ./node_modules/ooui/dist/ProgressBar.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Float */ "./node_modules/ooui/dist/Float.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * ProgressBar input
 */
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ProgressBar;
}(_Float__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);
//# sourceMappingURL=ProgressBar.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/SearchFilter.js":
/*!************************************************!*\
  !*** ./node_modules/ooui/dist/SearchFilter.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WidgetFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WidgetFactory */ "./node_modules/ooui/dist/WidgetFactory.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ "./node_modules/ooui/dist/Container.js");
var __assign = (undefined && undefined.__assign) || function () {
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


var SearchFilter = /** @class */ (function () {
    function SearchFilter(searchFields, fields, columns) {
        if (columns === void 0) { columns = 8; }
        this._searchFields = searchFields;
        this._fields = fields;
        this._simpleSearchContainer = new _Container__WEBPACK_IMPORTED_MODULE_1__.default(columns);
        this._advancedSearchContainer = new _Container__WEBPACK_IMPORTED_MODULE_1__.default(columns);
    }
    Object.defineProperty(SearchFilter.prototype, "searchFields", {
        get: function () {
            return this._searchFields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchFilter.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchFilter.prototype, "simpleSearchContainer", {
        get: function () {
            return this._simpleSearchContainer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchFilter.prototype, "advancedSearchContainer", {
        get: function () {
            return this._advancedSearchContainer;
        },
        enumerable: false,
        configurable: true
    });
    SearchFilter.prototype.parse = function () {
        var _this = this;
        var widgetFactory = new _WidgetFactory__WEBPACK_IMPORTED_MODULE_0__.default();
        var simpleSearchWidgets = this.parseFields(this.searchFields.primary, widgetFactory);
        simpleSearchWidgets.forEach(function (widget) {
            _this.simpleSearchContainer.addWidget(widget);
            _this.advancedSearchContainer.addWidget(widget);
        });
        var advancedSearchWidgets = this.parseFields(this.searchFields.secondary, widgetFactory);
        advancedSearchWidgets.forEach(function (widget) {
            _this.advancedSearchContainer.addWidget(widget);
        });
    };
    SearchFilter.prototype.parseFields = function (searchFields, widgetFactory) {
        var _this = this;
        return searchFields.map(function (searchField) {
            var fieldAttributes = __assign(__assign({}, _this.fields[searchField]), { name: searchField });
            var type = fieldAttributes.type;
            return widgetFactory.createWidget(type, fieldAttributes);
        });
    };
    /**
     * Calls container's findById method to find the widgets matching with param id
     * @param {string} id id to find
     */
    SearchFilter.prototype.findById = function (id) {
        return this.advancedSearchContainer.findById(id);
    };
    return SearchFilter;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchFilter);
//# sourceMappingURL=SearchFilter.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Selection.js":
/*!*********************************************!*\
  !*** ./node_modules/ooui/dist/Selection.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Selection field for key-value lists
 */
var Selection = /** @class */ (function (_super) {
    __extends(Selection, _super);
    function Selection(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Field size
         */
        _this._size = 150;
        /**
         * Values and keys
         */
        _this._selectionValues = new Map([]);
        if (props) {
            if (props.size) {
                _this._size = props.size;
            }
            if (props.string) {
                if (!props.colspan) {
                    _this.colspan = 2;
                }
            }
            if (props.selection) {
                _this._selectionValues = new Map(props.selection);
            }
        }
        return _this;
    }
    Object.defineProperty(Selection.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "selectionValues", {
        get: function () {
            return this._selectionValues;
        },
        set: function (value) {
            this._selectionValues = value;
        },
        enumerable: false,
        configurable: true
    });
    return Selection;
}(_Field__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Selection);
//# sourceMappingURL=Selection.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Separator.js":
/*!*********************************************!*\
  !*** ./node_modules/ooui/dist/Separator.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget */ "./node_modules/ooui/dist/Widget.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Separator = /** @class */ (function (_super) {
    __extends(Separator, _super);
    function Separator(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Label
         */
        _this._label = "";
        if (props) {
            if (props.string) {
                _this._label = props.string;
            }
        }
        return _this;
    }
    Object.defineProperty(Separator.prototype, "label", {
        get: function () {
            return this._label;
        },
        set: function (value) {
            this._label = value;
        },
        enumerable: false,
        configurable: true
    });
    Separator.prototype.findById = function (id) {
        return null;
    };
    return Separator;
}(_Widget__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Separator);
//# sourceMappingURL=Separator.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Text.js":
/*!****************************************!*\
  !*** ./node_modules/ooui/dist/Text.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * Multiline input with no length limit.
 */
var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Field place holder
         */
        _this._placeholder = '';
        if (props) {
            if (props.placeholder) {
                _this._placeholder = props.placeholder;
            }
        }
        return _this;
    }
    Object.defineProperty(Text.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            this._placeholder = value;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(_Field__WEBPACK_IMPORTED_MODULE_0__.default));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);
//# sourceMappingURL=Text.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Tree.js":
/*!****************************************!*\
  !*** ./node_modules/ooui/dist/Tree.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WidgetFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WidgetFactory */ "./node_modules/ooui/dist/WidgetFactory.js");
var __assign = (undefined && undefined.__assign) || function () {
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

var Tree = /** @class */ (function () {
    function Tree(fields) {
        this._columns = [];
        this._fields = fields;
    }
    Object.defineProperty(Tree.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tree.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: false,
        configurable: true
    });
    Tree.prototype.parse = function (xml) {
        var parser = new DOMParser();
        var view = parser.parseFromString(xml, "text/xml");
        this.parseNode(view.documentElement);
    };
    Tree.prototype.parseNode = function (node) {
        var _this = this;
        var widgetFactory = new _WidgetFactory__WEBPACK_IMPORTED_MODULE_0__.default();
        Array.prototype.forEach.call(node.childNodes, function (child) {
            if (child.nodeType === child.ELEMENT_NODE) {
                var tag = child.nodeName;
                var tagAttributes_1 = {};
                Array.prototype.forEach.call(child.attributes, function (attr) {
                    tagAttributes_1[attr.name] = attr.value;
                });
                if (tag === "field") {
                    var name_1 = child.getAttribute("name");
                    var attrWidget = child.getAttribute("widget");
                    if (attrWidget) {
                        tag = attrWidget;
                    }
                    else if (name_1) {
                        tag = _this._fields[name_1].type;
                    }
                    tagAttributes_1 = __assign(__assign({}, tagAttributes_1), _this._fields[name_1]);
                }
                var widget = widgetFactory.createWidget(tag, tagAttributes_1);
                _this._columns.push(widget);
            }
        });
    };
    /**
     * Find the widgets matching with param id
     * @param {string} id id to find
     */
    Tree.prototype.findById = function (id) {
        return this._columns.find(function (item) {
            if (item.findById) {
                return item.findById(id);
            }
        });
    };
    return Tree;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tree);
//# sourceMappingURL=Tree.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/Widget.js":
/*!******************************************!*\
  !*** ./node_modules/ooui/dist/Widget.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Widget = /** @class */ (function () {
    function Widget(props) {
        this._colspan = Widget._defaultColspan;
        this._readOnly = false;
        this._invisible = false;
        if (props) {
            if (props.colspan) {
                this._colspan = +props.colspan;
            }
            if (props.readonly) {
                if (props.readonly === 1 || props.readonly === true) {
                    this._readOnly = true;
                }
            }
            if (props.invisible) {
                if (props.invisible === 1 ||
                    props.invisible === "1" ||
                    props.invisible === true) {
                    this._invisible = true;
                }
            }
        }
    }
    Object.defineProperty(Widget, "defaultColspan", {
        get: function () {
            return Widget._defaultColspan;
        },
        set: function (value) {
            Widget._defaultColspan = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (value) {
            this._readOnly = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "colspan", {
        get: function () {
            return this._colspan;
        },
        set: function (value) {
            this._colspan = +value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "invisible", {
        get: function () {
            return this._invisible;
        },
        set: function (value) {
            this._invisible = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Default colspan
     */
    Widget._defaultColspan = 1;
    return Widget;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);
//# sourceMappingURL=Widget.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/WidgetFactory.js":
/*!*************************************************!*\
  !*** ./node_modules/ooui/dist/WidgetFactory.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Notebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notebook */ "./node_modules/ooui/dist/Notebook.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./node_modules/ooui/dist/Page.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Group */ "./node_modules/ooui/dist/Group.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./node_modules/ooui/dist/Button.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Label */ "./node_modules/ooui/dist/Label.js");
/* harmony import */ var _Char__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Char */ "./node_modules/ooui/dist/Char.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Text */ "./node_modules/ooui/dist/Text.js");
/* harmony import */ var _Selection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Selection */ "./node_modules/ooui/dist/Selection.js");
/* harmony import */ var _Many2one__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Many2one */ "./node_modules/ooui/dist/Many2one.js");
/* harmony import */ var _Boolean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Boolean */ "./node_modules/ooui/dist/Boolean.js");
/* harmony import */ var _Integer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Integer */ "./node_modules/ooui/dist/Integer.js");
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Widget */ "./node_modules/ooui/dist/Widget.js");
/* harmony import */ var _Float__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Float */ "./node_modules/ooui/dist/Float.js");
/* harmony import */ var _FloatTime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FloatTime */ "./node_modules/ooui/dist/FloatTime.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ProgressBar */ "./node_modules/ooui/dist/ProgressBar.js");
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Date */ "./node_modules/ooui/dist/Date.js");
/* harmony import */ var _DateTime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DateTime */ "./node_modules/ooui/dist/DateTime.js");
/* harmony import */ var _Many2many__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Many2many */ "./node_modules/ooui/dist/Many2many.js");
/* harmony import */ var _One2many__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./One2many */ "./node_modules/ooui/dist/One2many.js");
/* harmony import */ var _NewLine__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./NewLine */ "./node_modules/ooui/dist/NewLine.js");
/* harmony import */ var _Separator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Separator */ "./node_modules/ooui/dist/Separator.js");





















var WidgetFactory = /** @class */ (function () {
    function WidgetFactory() {
    }
    WidgetFactory.prototype.setWidgetClass = function (type) {
        switch (type) {
            case "notebook":
                this._widgetClass = _Notebook__WEBPACK_IMPORTED_MODULE_0__.default;
                break;
            case "page":
                this._widgetClass = _Page__WEBPACK_IMPORTED_MODULE_1__.default;
                break;
            case "group":
                this._widgetClass = _Group__WEBPACK_IMPORTED_MODULE_2__.default;
                break;
            case "label":
                this._widgetClass = _Label__WEBPACK_IMPORTED_MODULE_4__.default;
                break;
            case "char":
                this._widgetClass = _Char__WEBPACK_IMPORTED_MODULE_5__.default;
                break;
            case "text":
                this._widgetClass = _Text__WEBPACK_IMPORTED_MODULE_6__.default;
                break;
            case "button":
                this._widgetClass = _Button__WEBPACK_IMPORTED_MODULE_3__.default;
                break;
            case "selection":
                this._widgetClass = _Selection__WEBPACK_IMPORTED_MODULE_7__.default;
                break;
            case "many2one":
                this._widgetClass = _Many2one__WEBPACK_IMPORTED_MODULE_8__.default;
                break;
            case "boolean":
                this._widgetClass = _Boolean__WEBPACK_IMPORTED_MODULE_9__.default;
                break;
            case "integer":
                this._widgetClass = _Integer__WEBPACK_IMPORTED_MODULE_10__.default;
                break;
            case "float":
                this._widgetClass = _Float__WEBPACK_IMPORTED_MODULE_12__.default;
                break;
            case "float_time":
                this._widgetClass = _FloatTime__WEBPACK_IMPORTED_MODULE_13__.default;
                break;
            case "date":
                this._widgetClass = _Date__WEBPACK_IMPORTED_MODULE_15__.default;
                break;
            case "datetime":
                this._widgetClass = _DateTime__WEBPACK_IMPORTED_MODULE_16__.default;
                break;
            case "progressbar":
                this._widgetClass = _ProgressBar__WEBPACK_IMPORTED_MODULE_14__.default;
                break;
            case "many2many":
                this._widgetClass = _Many2many__WEBPACK_IMPORTED_MODULE_17__.default;
                break;
            case "one2many":
                this._widgetClass = _One2many__WEBPACK_IMPORTED_MODULE_18__.default;
                break;
            case "newline":
                this._widgetClass = _NewLine__WEBPACK_IMPORTED_MODULE_19__.default;
                break;
            case "separator":
                this._widgetClass = _Separator__WEBPACK_IMPORTED_MODULE_20__.default;
                break;
            default:
                this._widgetClass = _Widget__WEBPACK_IMPORTED_MODULE_11__.default;
                break;
        }
    };
    WidgetFactory.prototype.createWidget = function (type, props) {
        this.setWidgetClass(type);
        // TODO: Widget Class constructors should use only the props needed, not all props.
        switch (type) {
            // Specific cases (only selected props should be used)
            case "notebook":
            case "page":
            case "group":
                return new this._widgetClass(props);
            // Generic case
            default:
                return new this._widgetClass(props);
        }
    };
    return WidgetFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetFactory);
//# sourceMappingURL=WidgetFactory.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/index.js":
/*!*****************************************!*\
  !*** ./node_modules/ooui/dist/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Char": () => (/* reexport safe */ _Char__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "Selection": () => (/* reexport safe */ _Selection__WEBPACK_IMPORTED_MODULE_5__.default),
/* harmony export */   "Many2one": () => (/* reexport safe */ _Many2one__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "Field": () => (/* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "Widget": () => (/* reexport safe */ _Widget__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "Form": () => (/* reexport safe */ _Form__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Tree": () => (/* reexport safe */ _Tree__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Boolean": () => (/* reexport safe */ _Boolean__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "One2many": () => (/* reexport safe */ _One2many__WEBPACK_IMPORTED_MODULE_17__.default),
/* harmony export */   "Integer": () => (/* reexport safe */ _Integer__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "Float": () => (/* reexport safe */ _Float__WEBPACK_IMPORTED_MODULE_11__.default),
/* harmony export */   "FloatTime": () => (/* reexport safe */ _FloatTime__WEBPACK_IMPORTED_MODULE_12__.default),
/* harmony export */   "Date": () => (/* reexport safe */ _Date__WEBPACK_IMPORTED_MODULE_14__.default),
/* harmony export */   "DateTime": () => (/* reexport safe */ _DateTime__WEBPACK_IMPORTED_MODULE_15__.default),
/* harmony export */   "Many2many": () => (/* reexport safe */ _Many2many__WEBPACK_IMPORTED_MODULE_16__.default),
/* harmony export */   "SearchFilter": () => (/* reexport safe */ _SearchFilter__WEBPACK_IMPORTED_MODULE_18__.default),
/* harmony export */   "Container": () => (/* reexport safe */ _Container__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "ContainerWidget": () => (/* reexport safe */ _ContainerWidget__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "Text": () => (/* reexport safe */ _Text__WEBPACK_IMPORTED_MODULE_19__.default),
/* harmony export */   "ProgressBar": () => (/* reexport safe */ _ProgressBar__WEBPACK_IMPORTED_MODULE_13__.default),
/* harmony export */   "Notebook": () => (/* reexport safe */ _Notebook__WEBPACK_IMPORTED_MODULE_21__.default),
/* harmony export */   "Group": () => (/* reexport safe */ _Group__WEBPACK_IMPORTED_MODULE_22__.default),
/* harmony export */   "Page": () => (/* reexport safe */ _Page__WEBPACK_IMPORTED_MODULE_23__.default),
/* harmony export */   "Label": () => (/* reexport safe */ _Label__WEBPACK_IMPORTED_MODULE_20__.default),
/* harmony export */   "Separator": () => (/* reexport safe */ _Separator__WEBPACK_IMPORTED_MODULE_24__.default),
/* harmony export */   "Button": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_25__.default)
/* harmony export */ });
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./node_modules/ooui/dist/Form.js");
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tree */ "./node_modules/ooui/dist/Tree.js");
/* harmony import */ var _Char__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Char */ "./node_modules/ooui/dist/Char.js");
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Container */ "./node_modules/ooui/dist/Container.js");
/* harmony import */ var _ContainerWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContainerWidget */ "./node_modules/ooui/dist/ContainerWidget.js");
/* harmony import */ var _Selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Selection */ "./node_modules/ooui/dist/Selection.js");
/* harmony import */ var _Many2one__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Many2one */ "./node_modules/ooui/dist/Many2one.js");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Widget */ "./node_modules/ooui/dist/Widget.js");
/* harmony import */ var _Boolean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Boolean */ "./node_modules/ooui/dist/Boolean.js");
/* harmony import */ var _Integer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Integer */ "./node_modules/ooui/dist/Integer.js");
/* harmony import */ var _Float__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Float */ "./node_modules/ooui/dist/Float.js");
/* harmony import */ var _FloatTime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FloatTime */ "./node_modules/ooui/dist/FloatTime.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ProgressBar */ "./node_modules/ooui/dist/ProgressBar.js");
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Date */ "./node_modules/ooui/dist/Date.js");
/* harmony import */ var _DateTime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./DateTime */ "./node_modules/ooui/dist/DateTime.js");
/* harmony import */ var _Many2many__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Many2many */ "./node_modules/ooui/dist/Many2many.js");
/* harmony import */ var _One2many__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./One2many */ "./node_modules/ooui/dist/One2many.js");
/* harmony import */ var _SearchFilter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SearchFilter */ "./node_modules/ooui/dist/SearchFilter.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Text */ "./node_modules/ooui/dist/Text.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Label */ "./node_modules/ooui/dist/Label.js");
/* harmony import */ var _Notebook__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Notebook */ "./node_modules/ooui/dist/Notebook.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Group */ "./node_modules/ooui/dist/Group.js");
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Page */ "./node_modules/ooui/dist/Page.js");
/* harmony import */ var _Separator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Separator */ "./node_modules/ooui/dist/Separator.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Button */ "./node_modules/ooui/dist/Button.js");



























//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-responsive/dist/react-responsive.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-responsive/dist/react-responsive.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(root, factory) {
     true ? module.exports = factory(__webpack_require__(/*! react */ "react")) : 0;
}("undefined" != typeof self ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
    return function(modules) {
        function __nested_webpack_require_451__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_451__), 
            module.l = !0, module.exports;
        }
        var installedModules = {};
        return __nested_webpack_require_451__.m = modules, __nested_webpack_require_451__.c = installedModules, 
        __nested_webpack_require_451__.d = function(exports, name, getter) {
            __nested_webpack_require_451__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __nested_webpack_require_451__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __nested_webpack_require_451__.d(getter, "a", getter), getter;
        }, __nested_webpack_require_451__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __nested_webpack_require_451__.p = "", __nested_webpack_require_451__(__nested_webpack_require_451__.s = 7);
    }([ function(module, __webpack_exports__, __nested_webpack_require_1860__) {
        "use strict";
        function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
            if (o) {
                if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
                var n = Object.prototype.toString.call(o).slice(8, -1);
                return "Object" === n && o.constructor && (n = o.constructor.name), "Map" === n || "Set" === n ? Array.from(o) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0;
            }
        }
        function _arrayLikeToArray(arr, len) {
            (null == len || len > arr.length) && (len = arr.length);
            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
            return arr2;
        }
        function _iterableToArrayLimit(arr, i) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(arr)) {
                var _arr = [], _n = !0, _d = !1, _e = void 0;
                try {
                    for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                    !i || _arr.length !== i); _n = !0) ;
                } catch (err) {
                    _d = !0, _e = err;
                } finally {
                    try {
                        _n || null == _i.return || _i.return();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
        }
        function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __nested_webpack_require_1860__(1), __WEBPACK_IMPORTED_MODULE_0_react___default = __nested_webpack_require_1860__.n(__WEBPACK_IMPORTED_MODULE_0_react__), __WEBPACK_IMPORTED_MODULE_1_matchmediaquery__ = __nested_webpack_require_1860__(8), __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default = __nested_webpack_require_1860__.n(__WEBPACK_IMPORTED_MODULE_1_matchmediaquery__), __WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__ = __nested_webpack_require_1860__(2), __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__ = __nested_webpack_require_1860__(10), __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default = __nested_webpack_require_1860__.n(__WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__), __WEBPACK_IMPORTED_MODULE_4__toQuery__ = __nested_webpack_require_1860__(3), __WEBPACK_IMPORTED_MODULE_5__Context__ = __nested_webpack_require_1860__(6), makeQuery = function(settings) {
            return settings.query || Object(__WEBPACK_IMPORTED_MODULE_4__toQuery__.a)(settings);
        }, hyphenateKeys = function(obj) {
            if (!obj) return null;
            var keys = Object.keys(obj);
            return 0 === keys.length ? null : keys.reduce(function(result, key) {
                return result[Object(__WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__.a)(key)] = obj[key], 
                result;
            }, {});
        }, useIsUpdate = function() {
            var ref = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useRef(!1);
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                ref.current = !0;
            }, []), ref.current;
        }, useDevice = function(deviceFromProps) {
            var deviceFromContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useContext(__WEBPACK_IMPORTED_MODULE_5__Context__.a), getDevice = function() {
                return hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
            }, _React$useState = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getDevice), _React$useState2 = _slicedToArray(_React$useState, 2), device = _React$useState2[0], setDevice = _React$useState2[1];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                var newDevice = getDevice();
                __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default()(device, newDevice) || setDevice(newDevice);
            }, [ deviceFromProps, deviceFromContext ]), device;
        }, useQuery = function(settings) {
            var getQuery = function() {
                return makeQuery(settings);
            }, _React$useState3 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getQuery), _React$useState4 = _slicedToArray(_React$useState3, 2), query = _React$useState4[0], setQuery = _React$useState4[1];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                var newQuery = getQuery();
                query !== newQuery && setQuery(newQuery);
            }, [ settings ]), query;
        }, useMatchMedia = function(query, device) {
            var getMatchMedia = function() {
                return __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default()(query, device || {}, !!device);
            }, _React$useState5 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getMatchMedia), _React$useState6 = _slicedToArray(_React$useState5, 2), mq = _React$useState6[0], setMq = _React$useState6[1], isUpdate = useIsUpdate();
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                return isUpdate && setMq(getMatchMedia()), function() {
                    mq.dispose();
                };
            }, [ query, device ]), mq;
        }, useMatches = function(mediaQuery) {
            var _React$useState7 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(mediaQuery.matches), _React$useState8 = _slicedToArray(_React$useState7, 2), matches = _React$useState8[0], setMatches = _React$useState8[1];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                var updateMatches = function() {
                    setMatches(mediaQuery.matches);
                };
                return mediaQuery.addListener(updateMatches), updateMatches(), function() {
                    mediaQuery.removeListener(updateMatches);
                };
            }, [ mediaQuery ]), matches;
        }, useMediaQuery = function(settings, device, onChange) {
            var deviceSettings = useDevice(device), query = useQuery(settings);
            if (!query) throw new Error("Invalid or missing MediaQuery!");
            var mq = useMatchMedia(query, deviceSettings), matches = useMatches(mq), isUpdate = useIsUpdate();
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                isUpdate && onChange && onChange(matches);
            }, [ matches ]), matches;
        };
        __webpack_exports__.a = useMediaQuery;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
    }, function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function toHyphenLower(match) {
            return "-" + match.toLowerCase();
        }
        function hyphenateStyleName(name) {
            if (cache.hasOwnProperty(name)) return cache[name];
            var hName = name.replace(uppercasePattern, toHyphenLower);
            return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
        }
        var uppercasePattern = /[A-Z]/g, msPattern = /^ms-/, cache = {};
        __webpack_exports__.a = hyphenateStyleName;
    }, function(module, __webpack_exports__, __nested_webpack_require_9551__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__ = __nested_webpack_require_9551__(2), __WEBPACK_IMPORTED_MODULE_1__mediaQuery__ = __nested_webpack_require_9551__(11), negate = function(cond) {
            return "not ".concat(cond);
        }, keyVal = function(k, v) {
            var realKey = Object(__WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__.a)(k);
            return "number" == typeof v && (v = "".concat(v, "px")), !0 === v ? realKey : !1 === v ? negate(realKey) : "(".concat(realKey, ": ").concat(v, ")");
        }, join = function(conds) {
            return conds.join(" and ");
        }, toQuery = function(obj) {
            var rules = [];
            return Object.keys(__WEBPACK_IMPORTED_MODULE_1__mediaQuery__.a.all).forEach(function(k) {
                var v = obj[k];
                null != v && rules.push(keyVal(k, v));
            }), join(rules);
        };
        __webpack_exports__.a = toQuery;
    }, function(module, exports, __nested_webpack_require_10553__) {
        "use strict";
        module.exports = __nested_webpack_require_10553__(13);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, function(module, __webpack_exports__, __nested_webpack_require_10844__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __nested_webpack_require_10844__(1), __WEBPACK_IMPORTED_MODULE_0_react___default = __nested_webpack_require_10844__.n(__WEBPACK_IMPORTED_MODULE_0_react__), Context = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();
        __webpack_exports__.a = Context;
    }, function(module, __webpack_exports__, __nested_webpack_require_11228__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __nested_webpack_require_11228__(0), __WEBPACK_IMPORTED_MODULE_1__Component__ = __nested_webpack_require_11228__(17), __WEBPACK_IMPORTED_MODULE_2__toQuery__ = __nested_webpack_require_11228__(3), __WEBPACK_IMPORTED_MODULE_3__Context__ = __nested_webpack_require_11228__(6);
        __nested_webpack_require_11228__.d(__webpack_exports__, "default", function() {
            return __WEBPACK_IMPORTED_MODULE_1__Component__.a;
        }), __nested_webpack_require_11228__.d(__webpack_exports__, "useMediaQuery", function() {
            return __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a;
        }), __nested_webpack_require_11228__.d(__webpack_exports__, "toQuery", function() {
            return __WEBPACK_IMPORTED_MODULE_2__toQuery__.a;
        }), __nested_webpack_require_11228__.d(__webpack_exports__, "Context", function() {
            return __WEBPACK_IMPORTED_MODULE_3__Context__.a;
        });
    }, function(module, exports, __nested_webpack_require_12270__) {
        "use strict";
        function Mql(query, values, forceStatic) {
            function addListener(listener) {
                mql && mql.addListener(listener);
            }
            function removeListener(listener) {
                mql && mql.removeListener(listener);
            }
            function update(evt) {
                self.matches = evt.matches, self.media = evt.media;
            }
            function dispose() {
                mql && mql.removeListener(update);
            }
            var self = this;
            if (dynamicMatch && !forceStatic) {
                var mql = dynamicMatch.call(window, query);
                this.matches = mql.matches, this.media = mql.media, mql.addListener(update);
            } else this.matches = staticMatch(query, values), this.media = query;
            this.addListener = addListener, this.removeListener = removeListener, this.dispose = dispose;
        }
        function matchMedia(query, values, forceStatic) {
            return new Mql(query, values, forceStatic);
        }
        var staticMatch = __nested_webpack_require_12270__(9).match, dynamicMatch = "undefined" != typeof window ? window.matchMedia : null;
        module.exports = matchMedia;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function matchQuery(mediaQuery, values) {
            return parseQuery(mediaQuery).some(function(query) {
                var inverse = query.inverse, typeMatch = "all" === query.type || values.type === query.type;
                if (typeMatch && inverse || !typeMatch && !inverse) return !1;
                var expressionsMatch = query.expressions.every(function(expression) {
                    var feature = expression.feature, modifier = expression.modifier, expValue = expression.value, value = values[feature];
                    if (!value) return !1;
                    switch (feature) {
                      case "orientation":
                      case "scan":
                        return value.toLowerCase() === expValue.toLowerCase();

                      case "width":
                      case "height":
                      case "device-width":
                      case "device-height":
                        expValue = toPx(expValue), value = toPx(value);
                        break;

                      case "resolution":
                        expValue = toDpi(expValue), value = toDpi(value);
                        break;

                      case "aspect-ratio":
                      case "device-aspect-ratio":
                      case "device-pixel-ratio":
                        expValue = toDecimal(expValue), value = toDecimal(value);
                        break;

                      case "grid":
                      case "color":
                      case "color-index":
                      case "monochrome":
                        expValue = parseInt(expValue, 10) || 1, value = parseInt(value, 10) || 0;
                    }
                    switch (modifier) {
                      case "min":
                        return value >= expValue;

                      case "max":
                        return value <= expValue;

                      default:
                        return value === expValue;
                    }
                });
                return expressionsMatch && !inverse || !expressionsMatch && inverse;
            });
        }
        function parseQuery(mediaQuery) {
            return mediaQuery.split(",").map(function(query) {
                query = query.trim();
                var captures = query.match(RE_MEDIA_QUERY), modifier = captures[1], type = captures[2], expressions = captures[3] || "", parsed = {};
                return parsed.inverse = !!modifier && "not" === modifier.toLowerCase(), parsed.type = type ? type.toLowerCase() : "all", 
                expressions = expressions.match(/\([^\)]+\)/g) || [], parsed.expressions = expressions.map(function(expression) {
                    var captures = expression.match(RE_MQ_EXPRESSION), feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
                    return {
                        modifier: feature[1],
                        feature: feature[2],
                        value: captures[2]
                    };
                }), parsed;
            });
        }
        function toDecimal(ratio) {
            var numbers, decimal = Number(ratio);
            return decimal || (numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/), decimal = numbers[1] / numbers[2]), 
            decimal;
        }
        function toDpi(resolution) {
            var value = parseFloat(resolution);
            switch (String(resolution).match(RE_RESOLUTION_UNIT)[1]) {
              case "dpcm":
                return value / 2.54;

              case "dppx":
                return 96 * value;

              default:
                return value;
            }
        }
        function toPx(length) {
            var value = parseFloat(length);
            switch (String(length).match(RE_LENGTH_UNIT)[1]) {
              case "em":
              case "rem":
                return 16 * value;

              case "cm":
                return 96 * value / 2.54;

              case "mm":
                return 96 * value / 2.54 / 10;

              case "in":
                return 96 * value;

              case "pt":
                return 72 * value;

              case "pc":
                return 72 * value / 12;

              default:
                return value;
            }
        }
        exports.match = matchQuery, exports.parse = parseQuery;
        var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/, RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/, RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function shallowEqualObjects(objA, objB) {
            if (objA === objB) return !0;
            if (!objA || !objB) return !1;
            var aKeys = Object.keys(objA), bKeys = Object.keys(objB), len = aKeys.length;
            if (bKeys.length !== len) return !1;
            for (var i = 0; i < len; i++) {
                var key = aKeys[i];
                if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) return !1;
            }
            return !0;
        }
        module.exports = shallowEqualObjects;
    }, function(module, __webpack_exports__, __nested_webpack_require_18935__) {
        "use strict";
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                })), keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
            return target;
        }
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __nested_webpack_require_18935__(12), __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __nested_webpack_require_18935__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__), stringOrNumber = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([ __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number ]), matchers = {
            orientation: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([ "portrait", "landscape" ]),
            scan: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([ "progressive", "interlace" ]),
            aspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            deviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            height: stringOrNumber,
            deviceHeight: stringOrNumber,
            width: stringOrNumber,
            deviceWidth: stringOrNumber,
            color: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            colorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            monochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            resolution: stringOrNumber
        }, features = _objectSpread({
            minAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            maxAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            minDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            maxDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            minHeight: stringOrNumber,
            maxHeight: stringOrNumber,
            minDeviceHeight: stringOrNumber,
            maxDeviceHeight: stringOrNumber,
            minWidth: stringOrNumber,
            maxWidth: stringOrNumber,
            minDeviceWidth: stringOrNumber,
            maxDeviceWidth: stringOrNumber,
            minColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            maxColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            minColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            maxColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            minMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            maxMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            minResolution: stringOrNumber,
            maxResolution: stringOrNumber
        }, matchers), types = {
            all: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            grid: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            aural: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            braille: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            handheld: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            print: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            projection: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            screen: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            tty: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            tv: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            embossed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
        }, all = _objectSpread(_objectSpread({}, types), features);
        matchers.type = Object.keys(types), __webpack_exports__.a = {
            all: all,
            types: types,
            matchers: matchers,
            features: features
        };
    }, function(module, exports, __nested_webpack_require_24129__) {
        var ReactIs = __nested_webpack_require_24129__(4);
        module.exports = __nested_webpack_require_24129__(14)(ReactIs.isElement, !0);
    }, function(module, exports, __webpack_require__) {
        "use strict";
        !function() {
            function isValidElementType(type) {
                return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" == typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
            }
            function typeOf(object) {
                if ("object" == typeof object && null !== object) {
                    var $$typeof = object.$$typeof;
                    switch ($$typeof) {
                      case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch (type) {
                          case REACT_ASYNC_MODE_TYPE:
                          case REACT_CONCURRENT_MODE_TYPE:
                          case REACT_FRAGMENT_TYPE:
                          case REACT_PROFILER_TYPE:
                          case REACT_STRICT_MODE_TYPE:
                          case REACT_SUSPENSE_TYPE:
                            return type;

                          default:
                            var $$typeofType = type && type.$$typeof;
                            switch ($$typeofType) {
                              case REACT_CONTEXT_TYPE:
                              case REACT_FORWARD_REF_TYPE:
                              case REACT_LAZY_TYPE:
                              case REACT_MEMO_TYPE:
                              case REACT_PROVIDER_TYPE:
                                return $$typeofType;

                              default:
                                return $$typeof;
                            }
                        }

                      case REACT_PORTAL_TYPE:
                        return $$typeof;
                    }
                }
            }
            function isAsyncMode(object) {
                return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, 
                console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), 
                isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
            }
            function isConcurrentMode(object) {
                return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
            }
            function isContextConsumer(object) {
                return typeOf(object) === REACT_CONTEXT_TYPE;
            }
            function isContextProvider(object) {
                return typeOf(object) === REACT_PROVIDER_TYPE;
            }
            function isElement(object) {
                return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
            }
            function isForwardRef(object) {
                return typeOf(object) === REACT_FORWARD_REF_TYPE;
            }
            function isFragment(object) {
                return typeOf(object) === REACT_FRAGMENT_TYPE;
            }
            function isLazy(object) {
                return typeOf(object) === REACT_LAZY_TYPE;
            }
            function isMemo(object) {
                return typeOf(object) === REACT_MEMO_TYPE;
            }
            function isPortal(object) {
                return typeOf(object) === REACT_PORTAL_TYPE;
            }
            function isProfiler(object) {
                return typeOf(object) === REACT_PROFILER_TYPE;
            }
            function isStrictMode(object) {
                return typeOf(object) === REACT_STRICT_MODE_TYPE;
            }
            function isSuspense(object) {
                return typeOf(object) === REACT_SUSPENSE_TYPE;
            }
            var hasSymbol = "function" == typeof Symbol && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113, REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120, REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116, REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121, REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117, REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118, REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119, AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element = REACT_ELEMENT_TYPE, ForwardRef = REACT_FORWARD_REF_TYPE, Fragment = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1;
            exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, exports.ContextConsumer = ContextConsumer, 
            exports.ContextProvider = ContextProvider, exports.Element = Element, exports.ForwardRef = ForwardRef, 
            exports.Fragment = Fragment, exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, 
            exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, 
            exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, 
            exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, 
            exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, 
            exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, 
            exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isValidElementType = isValidElementType, 
            exports.typeOf = typeOf;
        }();
    }, function(module, exports, __nested_webpack_require_31508__) {
        "use strict";
        function emptyFunctionThatReturnsNull() {
            return null;
        }
        var ReactIs = __nested_webpack_require_31508__(4), assign = __nested_webpack_require_31508__(15), ReactPropTypesSecret = __nested_webpack_require_31508__(5), checkPropTypes = __nested_webpack_require_31508__(16), has = Function.call.bind(Object.prototype.hasOwnProperty), printWarning = function() {};
        printWarning = function(text) {
            var message = "Warning: " + text;
            "undefined" != typeof console && console.error(message);
            try {
                throw new Error(message);
            } catch (x) {}
        }, module.exports = function(isValidElement, throwOnDirectAccess) {
            function getIteratorFn(maybeIterable) {
                var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                if ("function" == typeof iteratorFn) return iteratorFn;
            }
            function is(x, y) {
                return x === y ? 0 !== x || 1 / x == 1 / y : x !== x && y !== y;
            }
            function PropTypeError(message) {
                this.message = message, this.stack = "";
            }
            function createChainableTypeChecker(validate) {
                function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                    if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, 
                    secret !== ReactPropTypesSecret) {
                        if (throwOnDirectAccess) {
                            var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                            throw err.name = "Invariant Violation", err;
                        }
                        if ("undefined" != typeof console) {
                            var cacheKey = componentName + ":" + propName;
                            !manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3 && (printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), 
                            manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
                        }
                    }
                    return null == props[propName] ? isRequired ? new PropTypeError(null === props[propName] ? "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `null`." : "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `undefined`.") : null : validate(props, propName, componentName, location, propFullName);
                }
                var manualPropTypeCallCache = {}, manualPropTypeWarningCount = 0, chainedCheckType = checkType.bind(null, !1);
                return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
            }
            function createPrimitiveTypeChecker(expectedType) {
                function validate(props, propName, componentName, location, propFullName, secret) {
                    var propValue = props[propName];
                    if (getPropType(propValue) !== expectedType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPreciseType(propValue) + "` supplied to `" + componentName + "`, expected `" + expectedType + "`.");
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createArrayOfTypeChecker(typeChecker) {
                function validate(props, propName, componentName, location, propFullName) {
                    if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                    var propValue = props[propName];
                    if (!Array.isArray(propValue)) {
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected an array.");
                    }
                    for (var i = 0; i < propValue.length; i++) {
                        var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                        if (error instanceof Error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createInstanceTypeChecker(expectedClass) {
                function validate(props, propName, componentName, location, propFullName) {
                    if (!(props[propName] instanceof expectedClass)) {
                        var expectedClassName = expectedClass.name || ANONYMOUS;
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getClassName(props[propName]) + "` supplied to `" + componentName + "`, expected instance of `" + expectedClassName + "`.");
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createEnumTypeChecker(expectedValues) {
                function validate(props, propName, componentName, location, propFullName) {
                    for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
                    var valuesString = JSON.stringify(expectedValues, function(key, value) {
                        return "symbol" === getPreciseType(value) ? String(value) : value;
                    });
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` supplied to `" + componentName + "`, expected one of " + valuesString + ".");
                }
                return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : (printWarning(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), 
                emptyFunctionThatReturnsNull);
            }
            function createObjectOfTypeChecker(typeChecker) {
                function validate(props, propName, componentName, location, propFullName) {
                    if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected an object.");
                    for (var key in propValue) if (has(propValue, key)) {
                        var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error instanceof Error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createUnionTypeChecker(arrayOfTypeCheckers) {
                function validate(props, propName, componentName, location, propFullName) {
                    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                        if (null == (0, arrayOfTypeCheckers[i])(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
                    }
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`.");
                }
                if (!Array.isArray(arrayOfTypeCheckers)) return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), 
                emptyFunctionThatReturnsNull;
                for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                    var checker = arrayOfTypeCheckers[i];
                    if ("function" != typeof checker) return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."), 
                    emptyFunctionThatReturnsNull;
                }
                return createChainableTypeChecker(validate);
            }
            function createShapeTypeChecker(shapeTypes) {
                function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                    for (var key in shapeTypes) {
                        var checker = shapeTypes[key];
                        if (checker) {
                            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                            if (error) return error;
                        }
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createStrictShapeTypeChecker(shapeTypes) {
                function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                    var allKeys = assign({}, props[propName], shapeTypes);
                    for (var key in allKeys) {
                        var checker = shapeTypes[key];
                        if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
                        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function isNode(propValue) {
                switch (typeof propValue) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;

                  case "boolean":
                    return !propValue;

                  case "object":
                    if (Array.isArray(propValue)) return propValue.every(isNode);
                    if (null === propValue || isValidElement(propValue)) return !0;
                    var iteratorFn = getIteratorFn(propValue);
                    if (!iteratorFn) return !1;
                    var step, iterator = iteratorFn.call(propValue);
                    if (iteratorFn !== propValue.entries) {
                        for (;!(step = iterator.next()).done; ) if (!isNode(step.value)) return !1;
                    } else for (;!(step = iterator.next()).done; ) {
                        var entry = step.value;
                        if (entry && !isNode(entry[1])) return !1;
                    }
                    return !0;

                  default:
                    return !1;
                }
            }
            function isSymbol(propType, propValue) {
                return "symbol" === propType || !!propValue && ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
            }
            function getPropType(propValue) {
                var propType = typeof propValue;
                return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
            }
            function getPreciseType(propValue) {
                if (void 0 === propValue || null === propValue) return "" + propValue;
                var propType = getPropType(propValue);
                if ("object" === propType) {
                    if (propValue instanceof Date) return "date";
                    if (propValue instanceof RegExp) return "regexp";
                }
                return propType;
            }
            function getPostfixForTypeWarning(value) {
                var type = getPreciseType(value);
                switch (type) {
                  case "array":
                  case "object":
                    return "an " + type;

                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + type;

                  default:
                    return type;
                }
            }
            function getClassName(propValue) {
                return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
            }
            var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator", ANONYMOUS = "<<anonymous>>", ReactPropTypes = {
                array: createPrimitiveTypeChecker("array"),
                bool: createPrimitiveTypeChecker("boolean"),
                func: createPrimitiveTypeChecker("function"),
                number: createPrimitiveTypeChecker("number"),
                object: createPrimitiveTypeChecker("object"),
                string: createPrimitiveTypeChecker("string"),
                symbol: createPrimitiveTypeChecker("symbol"),
                any: function() {
                    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
                }(),
                arrayOf: createArrayOfTypeChecker,
                element: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!isValidElement(propValue)) {
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement.");
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }(),
                elementType: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!ReactIs.isValidElementType(propValue)) {
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement type.");
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }(),
                instanceOf: createInstanceTypeChecker,
                node: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`, expected a ReactNode.");
                    }
                    return createChainableTypeChecker(validate);
                }(),
                objectOf: createObjectOfTypeChecker,
                oneOf: createEnumTypeChecker,
                oneOfType: createUnionTypeChecker,
                shape: createShapeTypeChecker,
                exact: createStrictShapeTypeChecker
            };
            return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes, 
            ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, 
            ReactPropTypes;
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function toObject(val) {
            if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(val);
        }
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
        var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
        module.exports = function() {
            try {
                if (!Object.assign) return !1;
                var test1 = new String("abc");
                if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;
                for (var test2 = {}, i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(test2).map(function(n) {
                    return test2[n];
                }).join("")) return !1;
                var test3 = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                    test3[letter] = letter;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
            } catch (err) {
                return !1;
            }
        }() ? Object.assign : function(target, source) {
            for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);
                for (var key in from) hasOwnProperty.call(from, key) && (to[key] = from[key]);
                if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
                }
            }
            return to;
        };
    }, function(module, exports, __nested_webpack_require_50834__) {
        "use strict";
        function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
            for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
                var error;
                try {
                    if ("function" != typeof typeSpecs[typeSpecName]) {
                        var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                        throw err.name = "Invariant Violation", err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (!error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), 
                error instanceof Error && !(error.message in loggedTypeFailures)) {
                    loggedTypeFailures[error.message] = !0;
                    var stack = getStack ? getStack() : "";
                    printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
                }
            }
        }
        var printWarning = function() {}, ReactPropTypesSecret = __nested_webpack_require_50834__(5), loggedTypeFailures = {}, has = Function.call.bind(Object.prototype.hasOwnProperty);
        printWarning = function(text) {
            var message = "Warning: " + text;
            "undefined" != typeof console && console.error(message);
            try {
                throw new Error(message);
            } catch (x) {}
        }, checkPropTypes.resetWarningCache = function() {
            loggedTypeFailures = {};
        }, module.exports = checkPropTypes;
    }, function(module, __webpack_exports__, __nested_webpack_require_53126__) {
        "use strict";
        function _objectWithoutProperties(source, excluded) {
            if (null == source) return {};
            var key, i, target = _objectWithoutPropertiesLoose(source, excluded);
            if (Object.getOwnPropertySymbols) {
                var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                for (i = 0; i < sourceSymbolKeys.length; i++) key = sourceSymbolKeys[i], excluded.indexOf(key) >= 0 || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key, i, target = {}, sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
        }
        function MediaQuery(_ref) {
            var children = _ref.children, device = _ref.device, onChange = _ref.onChange, settings = _objectWithoutProperties(_ref, [ "children", "device", "onChange" ]), matches = Object(__WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a)(settings, device, onChange);
            return "function" == typeof children ? children(matches) : matches ? children : null;
        }
        __webpack_exports__.a = MediaQuery;
        var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __nested_webpack_require_53126__(0);
    } ]);
});
//# sourceMappingURL=react-responsive.js.map

/***/ }),

/***/ "./src/common/Field.tsx":
/*!******************************!*\
  !*** ./src/common/Field.tsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.labelWithTooltip = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var icons_1 = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
function Field(_a) {
    var ooui = _a.ooui, children = _a.children, _b = _a.layout, layout = _b === void 0 ? "horizontal" : _b, valuePropName = _a.valuePropName;
    var id = ooui.id, label = ooui.label, tooltip = ooui.tooltip, nolabel = ooui.nolabel;
    var labelText = label && label.length > 1 ? label + " :" : " ";
    var formItem = function () { return (react_1.default.createElement(antd_1.Form.Item, { className: "mb-0", name: id, valuePropName: valuePropName }, children)); };
    var horizontalMode = function () {
        return (react_1.default.createElement(antd_1.Row, { align: "middle", className: "pb-1 pt-1" },
            !nolabel ? (react_1.default.createElement(antd_1.Col, { className: "ml-2", flex: "7rem" },
                react_1.default.createElement("div", { className: "flex flex-col items-end" }, labelWithTooltip(nolabel ? "" : labelText, tooltip)))) : null,
            react_1.default.createElement(antd_1.Col, { flex: "auto" }, formItem())));
    };
    var verticalMode = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            labelWithTooltip(nolabel ? "" : labelText, tooltip),
            formItem()));
    };
    return layout === "horizontal" ? horizontalMode() : verticalMode();
}
exports.default = Field;
var labelWithTooltip = function (label, tooltip) {
    return (react_1.default.createElement("div", { className: "flex flex-row items-center pb-1" },
        tooltip && (react_1.default.createElement(antd_1.Tooltip, { title: tooltip },
            react_1.default.createElement(icons_1.QuestionCircleOutlined, { className: "text-xs text-blue-400 pr-1" }))),
        react_1.default.createElement("span", { className: "text-right pr-2" }, label)));
};
exports.labelWithTooltip = labelWithTooltip;


/***/ }),

/***/ "./src/context/LocalesContext.tsx":
/*!****************************************!*\
  !*** ./src/context/LocalesContext.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getLocalizedString = exports.LocalesContext = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
exports.LocalesContext = react_1.default.createContext(null);
var LocalesProvider = function (_a) {
    var children = _a.children, stringsProp = _a.strings;
    var _b = react_1.useState({}), strings = _b[0], setStrings = _b[1];
    react_1.useEffect(function () {
        setStrings(stringsProp);
    }, [stringsProp]);
    var getString = function (key) {
        return exports.getLocalizedString(key, strings);
    };
    return (react_1.default.createElement(exports.LocalesContext.Provider, { value: {
            getString: getString,
        } }, children));
};
exports.default = LocalesProvider;
var getLocalizedString = function (key, strings) {
    var localized = strings[key];
    if (localized)
        return localized;
    else
        return key;
};
exports.getLocalizedString = getLocalizedString;


/***/ }),

/***/ "./src/helpers/containerHelper.ts":
/*!****************************************!*\
  !*** ./src/helpers/containerHelper.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSpanStyleForItem = exports.expandLabelsInFields = exports.getTemplateColumns = void 0;
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var clone = function clone(instance) {
    var copy = new instance.constructor();
    Object.assign(copy, instance);
    return copy;
};
var getSpanStyleForItem = function (_a) {
    var item = _a.item, responsiveBehaviour = _a.responsiveBehaviour;
    return {
        gridColumnStart: "span " + (responsiveBehaviour ? 1 : item.colspan),
    };
};
exports.getSpanStyleForItem = getSpanStyleForItem;
var expandLabelsInFields = function (_a) {
    var row = _a.row, mustFillWithEmpties = _a.mustFillWithEmpties, numberOfColumns = _a.numberOfColumns;
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
            label.align = mustFillWithEmpties ? "left" : "right";
            rowWithExpandedLabels.push(label);
            var newItem = clone(item);
            newItem._colspan = item._colspan - 1;
            newItem._nolabel = true;
            rowWithExpandedLabels.push(newItem);
            if (columnIndex + 1 === row.length &&
                totalColSpan < numberOfColumns &&
                !mustFillWithEmpties) {
                var gapsToFill = numberOfColumns - totalColSpan;
                for (var i = 0; i < gapsToFill; i += 1) {
                    rowWithExpandedLabels.push(new ooui_1.Label({ string: "" }));
                }
            }
        }
        else {
            totalColSpan += item.colspan;
            rowWithExpandedLabels.push(item);
        }
    });
    return rowWithExpandedLabels;
};
exports.expandLabelsInFields = expandLabelsInFields;
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
exports.getTemplateColumns = getTemplateColumns;


/***/ }),

/***/ "./src/helpers/searchFilterHelper.ts":
/*!*******************************************!*\
  !*** ./src/helpers/searchFilterHelper.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports) {

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getParamsForFields = exports.groupDateTimeValuesIfNeeded = exports.removeUndefinedFields = void 0;
var convertBooleanParamIfNeeded = function (value) {
    if ((typeof value === "string" && value === "true") || value === "false") {
        return value === "true";
    }
    return value;
};
var getParamsForFields = function (values, fields) {
    var filteredValues = removeUndefinedFields(values);
    var groupedDateTime = groupDateTimeValuesIfNeeded(filteredValues);
    var groupedValues = ungroupDateValuesIfNeeded(groupedDateTime, fields);
    var params = __spreadArrays(Object.keys(groupedValues).map(function (key) {
        return getParamForField(key, groupedValues[key], fields);
    }));
    // This is needed because in case of datetime we receive an array of arrays
    return params.reduce(function (acc, curVal) {
        if (Array.isArray(curVal[0])) {
            return acc.concat(curVal);
        }
        return __spreadArrays(acc, [curVal]);
    }, []);
};
exports.getParamsForFields = getParamsForFields;
var getParamForField = function (key, value, fields) {
    var filteredKey = key.split("#")[0];
    var type = fields[filteredKey].type;
    if (type === "char" ||
        type === "text" ||
        type === "many2one" ||
        type === "many2many" ||
        type === "one2many") {
        return [key, "ilike", value];
    }
    else if (type === "float" ||
        type === "integer" ||
        type === "float_time" ||
        type === "progressbar") {
        var operator = key.indexOf("#from") !== -1 ? ">=" : "<=";
        return [filteredKey, operator, value];
    }
    else if (type === "date") {
        var operator = key.indexOf("#from") !== -1 ? ">=" : "<=";
        return [filteredKey, operator, value.format("YYYY-MM-DD")];
    }
    else if (type === "datetime") {
        var from = value[0];
        var to = value[1];
        return [
            [filteredKey, ">=", from],
            [filteredKey, "<=", to],
        ];
    }
    else {
        return [key, "=", convertBooleanParamIfNeeded(value)];
    }
};
var getDatetimeDateFields = function (values) {
    return Object.keys(values).filter(function (key) {
        return key.indexOf("#date") !== -1;
    });
};
var removeDateTimeSingleFields = function (values) {
    var newValues = __assign({}, values);
    Object.keys(newValues).forEach(function (key) {
        return (key.indexOf("#time") !== -1 || key.indexOf("#date") !== -1) &&
            delete newValues[key];
    });
    return newValues;
};
var groupDateTimeValuesIfNeeded = function (values) {
    var newValues = __assign({}, removeDateTimeSingleFields(values));
    var datetimeDateFields = getDatetimeDateFields(values);
    datetimeDateFields.forEach(function (field) {
        var datePair = values[field];
        var baseKey = field.split("#")[0];
        var timeKey = baseKey + "#time";
        var timePair = values[timeKey];
        var dateValueFrom = datePair[0].format("YYYY-MM-DD");
        var dateValueTo = datePair[1].format("YYYY-MM-DD");
        var timeValueFrom = timePair[0].format("HH:mm");
        var timeValueTo = timePair[1].format("HH:mm");
        var from = dateValueFrom + " " + timeValueFrom;
        var to = dateValueTo + " " + timeValueTo;
        newValues[baseKey + "#datetime"] = [from, to];
    });
    return newValues;
};
exports.groupDateTimeValuesIfNeeded = groupDateTimeValuesIfNeeded;
var ungroupDateValuesIfNeeded = function (values, fields) {
    var dateFields = Object.keys(values).filter(function (key) {
        return fields[key] && fields[key].type === "date";
    });
    var newValues = __assign({}, values);
    dateFields.forEach(function (key) {
        delete newValues[key];
        newValues[key + "#from"] = values[key][0];
        newValues[key + "#to"] = values[key][1];
    });
    return newValues;
};
var removeUndefinedFields = function (values) {
    var newValues = __assign({}, values);
    Object.keys(newValues).forEach(function (key) {
        return (newValues[key] === undefined ||
            newValues[key] === null ||
            newValues[key] === "") &&
            delete newValues[key];
    });
    return newValues;
};
exports.removeUndefinedFields = removeUndefinedFields;


/***/ }),

/***/ "./src/helpers/treeHelper.ts":
/*!***********************************!*\
  !*** ./src/helpers/treeHelper.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTree = exports.getTableItems = exports.getTableColumns = void 0;
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var getTree = function (treeView) {
    var xml = treeView.arch;
    var fields = treeView.fields;
    var tree = new ooui_1.Tree(fields);
    tree.parse(xml);
    return tree;
};
exports.getTree = getTree;
var getTableColumns = function (tree, booleanComponent) {
    var tableColumns = tree.columns.map(function (column) {
        var type = column.constructor.name;
        var key = column.id;
        var render = type === "Boolean"
            ? function (booleanField) {
                return booleanComponent(booleanField);
            }
            : undefined;
        return {
            key: key,
            dataIndex: key,
            title: column.label,
            type: type,
            render: render,
            sorter: function (a, b) {
                if (a[key] < b[key])
                    return -1;
                if (a[key] > b[key])
                    return 1;
                return 0;
            },
        };
    });
    return tableColumns;
};
exports.getTableColumns = getTableColumns;
var getTableItems = function (treeOoui, results) {
    var tableItems = results.map(function (item) {
        var parsedItem = {};
        Object.keys(item).map(function (key) {
            if (key === "id") {
                parsedItem[key] = item[key];
            }
            else {
                var widget = treeOoui.findById(key);
                if (widget instanceof ooui_1.Selection) {
                    var selection = widget;
                    parsedItem[key] = selection.selectionValues.get(item[key]);
                }
                else if (widget instanceof ooui_1.Many2one) {
                    parsedItem[key] = item[key][1];
                }
                else if (widget instanceof ooui_1.Boolean) {
                    parsedItem[key] = item[key];
                }
                else if (widget) {
                    parsedItem[key] = item[key] === false ? "" : item[key];
                }
            }
        });
        return parsedItem;
    });
    return tableItems;
};
exports.getTableItems = getTableItems;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Separator = exports.Text = exports.Label = exports.Integer = exports.Float = exports.Notebook = exports.Form = exports.SearchFilter = exports.Group = exports.Tree = exports.Many2one = exports.Boolean = exports.Selection = exports.Char = exports.Button = void 0;
var Button_1 = __webpack_require__(/*! @/widgets/base/Button */ "./src/widgets/base/Button.tsx");
Object.defineProperty(exports, "Button", ({ enumerable: true, get: function () { return Button_1.Button; } }));
var Char_1 = __webpack_require__(/*! @/widgets/base/Char */ "./src/widgets/base/Char.tsx");
Object.defineProperty(exports, "Char", ({ enumerable: true, get: function () { return Char_1.Char; } }));
var Selection_1 = __webpack_require__(/*! @/widgets/base/Selection */ "./src/widgets/base/Selection.tsx");
Object.defineProperty(exports, "Selection", ({ enumerable: true, get: function () { return Selection_1.Selection; } }));
var Boolean_1 = __webpack_require__(/*! @/widgets/base/Boolean */ "./src/widgets/base/Boolean.tsx");
Object.defineProperty(exports, "Boolean", ({ enumerable: true, get: function () { return Boolean_1.Boolean; } }));
var Many2one_1 = __webpack_require__(/*! @/widgets/base/Many2one */ "./src/widgets/base/Many2one.tsx");
Object.defineProperty(exports, "Many2one", ({ enumerable: true, get: function () { return Many2one_1.Many2one; } }));
var Tree_1 = __importDefault(__webpack_require__(/*! @/widgets/views/Tree */ "./src/widgets/views/Tree.tsx"));
exports.Tree = Tree_1.default;
var Float_1 = __webpack_require__(/*! @/widgets/base/Float */ "./src/widgets/base/Float.tsx");
Object.defineProperty(exports, "Float", ({ enumerable: true, get: function () { return Float_1.Float; } }));
var Integer_1 = __webpack_require__(/*! @/widgets/base/Integer */ "./src/widgets/base/Integer.tsx");
Object.defineProperty(exports, "Integer", ({ enumerable: true, get: function () { return Integer_1.Integer; } }));
var Group_1 = __importDefault(__webpack_require__(/*! @/widgets/containers/Group */ "./src/widgets/containers/Group.tsx"));
exports.Group = Group_1.default;
var Notebook_1 = __importDefault(__webpack_require__(/*! @/widgets/containers/Notebook */ "./src/widgets/containers/Notebook.tsx"));
exports.Notebook = Notebook_1.default;
var Form_1 = __importDefault(__webpack_require__(/*! @/widgets/views/Form */ "./src/widgets/views/Form.tsx"));
exports.Form = Form_1.default;
var Label_1 = __importDefault(__webpack_require__(/*! @/widgets/base/Label */ "./src/widgets/base/Label.tsx"));
exports.Label = Label_1.default;
var Text_1 = __importDefault(__webpack_require__(/*! @/widgets/base/Text */ "./src/widgets/base/Text.tsx"));
exports.Text = Text_1.default;
var Separator_1 = __webpack_require__(/*! @/widgets/base/Separator */ "./src/widgets/base/Separator.tsx");
Object.defineProperty(exports, "Separator", ({ enumerable: true, get: function () { return Separator_1.Separator; } }));
var SearchFilter_1 = __importDefault(__webpack_require__(/*! @/widgets/views/searchFilter/SearchFilter */ "./src/widgets/views/searchFilter/SearchFilter.tsx"));
exports.SearchFilter = SearchFilter_1.default;


/***/ }),

/***/ "./src/ui/Fieldset.tsx":
/*!*****************************!*\
  !*** ./src/ui/Fieldset.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Fieldset = function (props) {
    var label = props.label, children = props.children;
    return (
    // TODO: change in-line styles to TailWind classes
    react_1.default.createElement("fieldset", { className: "pl-2 pr-2 border-gray-400 border border-solid  font-sans" },
        react_1.default.createElement("legend", { style: {
                all: "initial",
                marginLeft: "1em",
                paddingLeft: "0.5em",
                paddingRight: "0.5em",
                fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
            } }, label),
        children));
};
exports.default = Fieldset;


/***/ }),

/***/ "./src/widgets/WidgetFactory.tsx":
/*!***************************************!*\
  !*** ./src/widgets/WidgetFactory.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createReactWidget = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Widgets = __importStar(__webpack_require__(/*! @/index */ "./src/index.ts"));
var widgetTypes = Widgets;
var createReactWidget = function (props) {
    var ooui = props.ooui;
    var type = ooui.constructor.name;
    var widgetClass = widgetTypes[type];
    if (!widgetClass) {
        return null;
    }
    return react_1.default.createElement(widgetClass, props);
};
exports.createReactWidget = createReactWidget;


/***/ }),

/***/ "./src/widgets/base/Boolean.tsx":
/*!**************************************!*\
  !*** ./src/widgets/base/Boolean.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Boolean = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var Boolean = function (props) {
    var ooui = props.ooui;
    var id = ooui.id, readOnly = ooui.readOnly;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui, valuePropName: "checked" },
        react_1.default.createElement("div", { className: "flex flex-row" },
            react_1.default.createElement(antd_1.Checkbox, { disabled: readOnly, id: id }))));
};
exports.Boolean = Boolean;


/***/ }),

/***/ "./src/widgets/base/Button.tsx":
/*!*************************************!*\
  !*** ./src/widgets/base/Button.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Button = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Button = function (props) {
    var ooui = props.ooui;
    var label = ooui.label, activated = ooui.activated;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui },
        react_1.default.createElement(antd_1.Button, { className: "w-full", disabled: !activated }, label)));
};
exports.Button = Button;


/***/ }),

/***/ "./src/widgets/base/Char.tsx":
/*!***********************************!*\
  !*** ./src/widgets/base/Char.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Char = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var Char = function (props) {
    var ooui = props.ooui, layout = props.layout;
    var _a = ooui, id = _a.id, readOnly = _a.readOnly, isPassword = _a.isPassword;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui, layout: layout }, isPassword ? (react_1.default.createElement(antd_1.Input.Password, { disabled: readOnly, id: id })) : (react_1.default.createElement(antd_1.Input, { disabled: readOnly, id: id }))));
};
exports.Char = Char;


/***/ }),

/***/ "./src/widgets/base/Float.tsx":
/*!************************************!*\
  !*** ./src/widgets/base/Float.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Float = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var Float = function (props) {
    var ooui = props.ooui, layout = props.layout;
    var _a = ooui, id = _a.id, decimalDigits = _a.decimalDigits, readOnly = _a.readOnly;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui, layout: layout },
        react_1.default.createElement(antd_1.InputNumber, { disabled: readOnly, className: "w-full", id: id, precision: decimalDigits, formatter: function (value) {
                return ("" + value).replace(/[^0-9\.\-]+/g, "");
            }, defaultValue: 0, decimalSeparator: "." })));
};
exports.Float = Float;


/***/ }),

/***/ "./src/widgets/base/Integer.tsx":
/*!**************************************!*\
  !*** ./src/widgets/base/Integer.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Integer = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var Integer = function (props) {
    var ooui = props.ooui, layout = props.layout;
    var id = ooui.id, readOnly = ooui.readOnly;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui, layout: layout },
        react_1.default.createElement(antd_1.InputNumber, { id: id, className: "w-full", disabled: readOnly, formatter: function (value) {
                return ("" + value).replace(/[^0-9]+/g, "");
            }, defaultValue: 0 })));
};
exports.Integer = Integer;


/***/ }),

/***/ "./src/widgets/base/Label.tsx":
/*!************************************!*\
  !*** ./src/widgets/base/Label.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Label = function (props) {
    var ooui = props.ooui;
    var style = { textAlign: ooui.align };
    return react_1.default.createElement("p", { style: style }, ooui.label);
};
exports.default = Label;


/***/ }),

/***/ "./src/widgets/base/Many2one.tsx":
/*!***************************************!*\
  !*** ./src/widgets/base/Many2one.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Many2one = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var icons_1 = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var Many2one = function (props) {
    var ooui = props.ooui;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui },
        react_1.default.createElement(Many2oneInput, null)));
};
exports.Many2one = Many2one;
var Many2oneInput = function (props) {
    var value = props.value, onChange = props.onChange, disabled = props.disabled;
    var _a = react_1.useState(), m2oValue = _a[0], setM2oValue = _a[1];
    var triggerChange = function (changedValue) {
        if (onChange) {
        }
    };
    var onValueStringChange = function (e) { };
    return (react_1.default.createElement(antd_1.Row, { gutter: 8, className: "pt-1 pb-1" },
        react_1.default.createElement(antd_1.Col, { flex: "auto" },
            react_1.default.createElement(antd_1.Input, { type: "text", value: value && value[1], onChange: onValueStringChange, disabled: disabled })),
        react_1.default.createElement(antd_1.Col, { flex: "32px" },
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FolderOpenOutlined, null), disabled: disabled })),
        react_1.default.createElement(antd_1.Col, { flex: "32px" },
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.SearchOutlined, null), disabled: disabled }))));
};


/***/ }),

/***/ "./src/widgets/base/Selection.tsx":
/*!****************************************!*\
  !*** ./src/widgets/base/Selection.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Selection = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var Option = antd_1.Select.Option;
var Selection = function (props) {
    var ooui = props.ooui, layout = props.layout;
    var selectionValues = ooui.selectionValues, readOnly = ooui.readOnly;
    var values = Array.from(selectionValues.entries());
    var options = values &&
        values.length &&
        values.map(function (entry) {
            var key = entry[0], value = entry[1];
            return (react_1.default.createElement(Option, { key: key, value: key }, value));
        });
    return (react_1.default.createElement(Field_1.default, { ooui: ooui, layout: layout },
        react_1.default.createElement(antd_1.Select, { disabled: readOnly }, options)));
};
exports.Selection = Selection;


/***/ }),

/***/ "./src/widgets/base/Separator.tsx":
/*!****************************************!*\
  !*** ./src/widgets/base/Separator.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Separator = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Separator = function (props) {
    var ooui = props.ooui;
    var label = ooui.label;
    return (react_1.default.createElement(antd_1.Divider, { orientation: "left", className: "text-sm" }, label));
};
exports.Separator = Separator;


/***/ }),

/***/ "./src/widgets/base/Text.tsx":
/*!***********************************!*\
  !*** ./src/widgets/base/Text.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var TextArea = antd_1.Input.TextArea;
var Text = function (props) {
    var ooui = props.ooui;
    var readOnly = ooui.readOnly;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui },
        react_1.default.createElement(TextArea, { disabled: readOnly, rows: 4 })));
};
exports.default = Text;


/***/ }),

/***/ "./src/widgets/containers/Container.tsx":
/*!**********************************************!*\
  !*** ./src/widgets/containers/Container.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var WidgetFactory_1 = __webpack_require__(/*! @/widgets/WidgetFactory */ "./src/widgets/WidgetFactory.tsx");
var react_responsive_1 = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
var containerHelper_1 = __webpack_require__(/*! @/helpers/containerHelper */ "./src/helpers/containerHelper.ts");
var Container = function (props) {
    var responsiveBehaviour = react_responsive_1.useMediaQuery({ query: "(max-width: 1000px)" });
    var container = props.container, _a = props.formWrapper, formWrapper = _a === void 0 ? false : _a;
    var columns = container.columns, rows = container.rows;
    var content = rows.map(function (row, i) {
        var rowWithoutInvisibleFields = row.filter(function (widget) {
            return !widget.invisible;
        });
        var rowWithExpandedFields = containerHelper_1.expandLabelsInFields({
            row: rowWithoutInvisibleFields,
            numberOfColumns: columns,
            mustFillWithEmpties: responsiveBehaviour,
        });
        return rowWithExpandedFields.map(function (item, j) {
            return (react_1.default.createElement("div", { key: i.toString() + "-" + j.toString(), className: "self-center p-2", style: containerHelper_1.getSpanStyleForItem({ item: item, responsiveBehaviour: responsiveBehaviour }) }, WidgetFactory_1.createReactWidget({
                ooui: item,
            })));
        });
    });
    if (formWrapper) {
        return content;
    }
    var templateColumns = containerHelper_1.getTemplateColumns(columns);
    var gridStyle = {
        display: "grid",
        gridTemplateColumns: responsiveBehaviour ? "auto" : templateColumns,
    };
    return react_1.default.createElement("div", { style: gridStyle }, content);
};
exports.default = Container;


/***/ }),

/***/ "./src/widgets/containers/Group.tsx":
/*!******************************************!*\
  !*** ./src/widgets/containers/Group.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Container_1 = __importDefault(__webpack_require__(/*! ./Container */ "./src/widgets/containers/Container.tsx"));
var Fieldset_1 = __importDefault(__webpack_require__(/*! @/ui/Fieldset */ "./src/ui/Fieldset.tsx"));
function Group(props) {
    var ooui = props.ooui, _a = props.showLabel, showLabel = _a === void 0 ? true : _a;
    return (react_1.default.createElement(react_1.default.Fragment, null, ooui.label && showLabel ? (react_1.default.createElement(Fieldset_1.default, { label: ooui.label },
        react_1.default.createElement(Container_1.default, { container: ooui.container }))) : (react_1.default.createElement(Container_1.default, { container: ooui.container }))));
}
exports.default = Group;


/***/ }),

/***/ "./src/widgets/containers/Notebook.tsx":
/*!*********************************************!*\
  !*** ./src/widgets/containers/Notebook.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var TabPane = antd_1.Tabs.TabPane;
var index_1 = __webpack_require__(/*! @/index */ "./src/index.ts");
function Notebook(props) {
    var ooui = props.ooui;
    var tabs = [].concat.apply([], ooui.container.rows);
    return (react_1.default.createElement(antd_1.Tabs, { defaultActiveKey: "1" }, tabs.map(function (page, key) {
        var tabKey = (key + 1).toString();
        return (react_1.default.createElement(TabPane, { tab: page.label, key: tabKey },
            react_1.default.createElement(index_1.Group, { ooui: page, showLabel: false })));
    })));
}
exports.default = Notebook;


/***/ }),

/***/ "./src/widgets/views/Form.tsx":
/*!************************************!*\
  !*** ./src/widgets/views/Form.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Container_1 = __importDefault(__webpack_require__(/*! ../containers/Container */ "./src/widgets/containers/Container.tsx"));
var filteredValues = function (values, fields) {
    if (!fields) {
        return values;
    }
    var filteredValues = {};
    Object.keys(values).forEach(function (key) {
        if (values[key] !== false ||
            (fields[key] && fields[key].type === "boolean")) {
            filteredValues[key] = values[key];
        }
    });
    return filteredValues;
};
var processInitialValues = function (values, fields) {
    var filterBooleans = filteredValues(values, fields);
    return filterBooleans;
};
function Form(props) {
    var arch = props.arch, fields = props.fields, initialValues = props.initialValues, antForm = props.antForm;
    var _a = react_1.useState(), form = _a[0], setForm = _a[1];
    react_1.useEffect(function () {
        var newForm = new ooui_1.Form(fields);
        newForm.parse(arch);
        setForm(newForm);
    }, [arch, fields]);
    return (react_1.default.createElement(antd_1.Form, { form: antForm, initialValues: processInitialValues(initialValues, fields) }, form && react_1.default.createElement(Container_1.default, { container: form.container, formWrapper: true })));
}
exports.default = Form;


/***/ }),

/***/ "./src/widgets/views/Tree.tsx":
/*!************************************!*\
  !*** ./src/widgets/views/Tree.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var treeHelper_1 = __webpack_require__(/*! @/helpers/treeHelper */ "./src/helpers/treeHelper.ts");
var LocalesContext_1 = __webpack_require__(/*! @/context/LocalesContext */ "./src/context/LocalesContext.tsx");
function Tree(props) {
    var page = props.page, limit = props.limit, total = props.total, treeView = props.treeView, results = props.results, onRequestPageChange = props.onRequestPageChange, loading = props.loading, strings = props.strings, onRowClicked = props.onRowClicked;
    var _a = react_1.useState([]), items = _a[0], setItems = _a[1];
    var _b = react_1.useState([]), columns = _b[0], setColumns = _b[1];
    react_1.useEffect(function () {
        var tree = treeHelper_1.getTree(treeView);
        var booleanComponentFn = function (booleanField) {
            return react_1.default.createElement(antd_1.Checkbox, { defaultChecked: booleanField, disabled: true });
        };
        var columns = treeHelper_1.getTableColumns(tree, booleanComponentFn);
        var items = treeHelper_1.getTableItems(tree, results);
        setColumns(columns);
        setItems(items);
    }, [treeView, results]);
    var from = (page - 1) * limit + 1;
    var to = from - 1 + items.length;
    var summary = loading ? (react_1.default.createElement(antd_1.Spin, null)) : total === 0 ? (LocalesContext_1.getLocalizedString("no_results", strings)) : (LocalesContext_1.getLocalizedString("summary", strings)
        .replace("{from}", from === null || from === void 0 ? void 0 : from.toString())
        .replace("{to}", to === null || to === void 0 ? void 0 : to.toString())
        .replace("{total}", total === null || total === void 0 ? void 0 : total.toString()));
    return (react_1.default.createElement(react_1.default.Fragment, null,
        summary,
        loading ? null : (react_1.default.createElement(antd_1.Pagination, { total: total, pageSize: limit, current: page, className: "pb-5 pt-5", showSizeChanger: false, onChange: onRequestPageChange })),
        react_1.default.createElement(antd_1.Table, { columns: columns, dataSource: items, pagination: false, loading: loading, rowClassName: "cursor-pointer select-none", onRow: function (record) {
                return {
                    onDoubleClick: function () {
                        if (onRowClicked)
                            onRowClicked(record.id);
                    },
                };
            } })));
}
exports.default = Tree;


/***/ }),

/***/ "./src/widgets/views/searchFilter/DateRangePicker.tsx":
/*!************************************************************!*\
  !*** ./src/widgets/views/searchFilter/DateRangePicker.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateRangePicker = void 0;
var antd_1 = __webpack_require__(/*! antd */ "antd");
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var DateRangePicker = function (props) {
    var ooui = props.ooui, layout = props.layout;
    return (react_1.default.createElement(Field_1.default, { ooui: ooui, layout: layout },
        react_1.default.createElement(antd_1.DatePicker.RangePicker, { format: "DD/MM/YYYY" })));
};
exports.DateRangePicker = DateRangePicker;


/***/ }),

/***/ "./src/widgets/views/searchFilter/DateTimeRangePicker.tsx":
/*!****************************************************************!*\
  !*** ./src/widgets/views/searchFilter/DateTimeRangePicker.tsx ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateTimeRangePicker = void 0;
var antd_1 = __webpack_require__(/*! antd */ "antd");
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var antd_2 = __webpack_require__(/*! antd */ "antd");
var DateTimeRangePicker = function (props) {
    var ooui = props.ooui, layout = props.layout;
    var label = ooui.label, id = ooui.id;
    var fields = [
        new ooui_1.Field({
            name: id + "#date",
            label: "",
        }),
        new ooui_1.Field({
            name: id + "#time",
            label: "",
        }),
    ];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        label + " :",
        react_1.default.createElement(antd_2.Row, { align: "bottom", className: "mt-1" },
            react_1.default.createElement(antd_2.Col, { className: "mr-2" },
                react_1.default.createElement(Field_1.default, { ooui: fields[0], layout: layout },
                    react_1.default.createElement(antd_1.DatePicker.RangePicker, { className: "w-60", format: "DD/MM/YYYY" }))),
            react_1.default.createElement(antd_2.Col, null,
                " ",
                react_1.default.createElement(Field_1.default, { ooui: fields[1], layout: layout },
                    react_1.default.createElement(antd_1.TimePicker.RangePicker, { className: "w-60", format: "HH:mm" }))))));
};
exports.DateTimeRangePicker = DateTimeRangePicker;


/***/ }),

/***/ "./src/widgets/views/searchFilter/PairFields.tsx":
/*!*******************************************************!*\
  !*** ./src/widgets/views/searchFilter/PairFields.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PairFields = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Float_1 = __webpack_require__(/*! @/widgets/base/Float */ "./src/widgets/base/Float.tsx");
var Integer_1 = __webpack_require__(/*! @/widgets/base/Integer */ "./src/widgets/base/Integer.tsx");
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var Field_1 = __webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx");
function PairFields(props) {
    var ooui = props.ooui;
    var id = ooui.id, label = ooui.label, tooltip = ooui.tooltip;
    var Widget = ooui instanceof ooui_1.Integer ? Integer_1.Integer : Float_1.Float;
    var getWidget = function (suffix) {
        return (react_1.default.createElement(Widget, { ooui: __assign(__assign({}, ooui), { id: id + suffix, label: "", tooltip: undefined }), layout: "vertical" }));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        Field_1.labelWithTooltip(label, tooltip),
        react_1.default.createElement(antd_1.Row, { align: "bottom", className: "mt-0" },
            react_1.default.createElement(antd_1.Col, null, getWidget("#from")),
            react_1.default.createElement(antd_1.Col, { className: "pb-1" },
                react_1.default.createElement("span", { className: "pl-2 pr-2 h-full" }, " - ")),
            react_1.default.createElement(antd_1.Col, null, getWidget("#to")))));
}
exports.PairFields = PairFields;


/***/ }),

/***/ "./src/widgets/views/searchFilter/SearchBottomBar.tsx":
/*!************************************************************!*\
  !*** ./src/widgets/views/searchFilter/SearchBottomBar.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchBottomBar = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var icons_1 = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
var LocalesContext_1 = __webpack_require__(/*! @/context/LocalesContext */ "./src/context/LocalesContext.tsx");
function SearchBottomBar(props) {
    var onAdvancedFilterToggle = props.onAdvancedFilterToggle, advancedFilter = props.advancedFilter, onClear = props.onClear, isSearching = props.isSearching;
    var getString = react_1.useContext(LocalesContext_1.LocalesContext).getString;
    return (react_1.default.createElement(antd_1.Row, null,
        react_1.default.createElement(antd_1.Col, { span: 12, className: "text-left pt-4 pb-2 pl-2" },
            react_1.default.createElement("a", { className: "text-xs", onClick: onAdvancedFilterToggle },
                advancedFilter ? (react_1.default.createElement(icons_1.UpOutlined, { className: "pr-1" })) : (react_1.default.createElement(icons_1.DownOutlined, { className: "pr-1" })),
                advancedFilter
                    ? getString("simple_search")
                    : getString("advanced_search"))),
        react_1.default.createElement(antd_1.Col, { span: 12, className: "text-right pb-2" },
            react_1.default.createElement(antd_1.Button, { className: "mr-5", icon: react_1.default.createElement(icons_1.ClearOutlined, null), onClick: onClear }, "Clear"),
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.SearchOutlined, null), loading: isSearching, className: "mr-2", type: "primary", htmlType: "submit" }, getString("search")))));
}
exports.SearchBottomBar = SearchBottomBar;


/***/ }),

/***/ "./src/widgets/views/searchFilter/SearchField.tsx":
/*!********************************************************!*\
  !*** ./src/widgets/views/searchFilter/SearchField.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchField = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var Char_1 = __webpack_require__(/*! @/widgets/base/Char */ "./src/widgets/base/Char.tsx");
var Selection_1 = __webpack_require__(/*! @/widgets/base/Selection */ "./src/widgets/base/Selection.tsx");
var DateRangePicker_1 = __webpack_require__(/*! ./DateRangePicker */ "./src/widgets/views/searchFilter/DateRangePicker.tsx");
var DateTimeRangePicker_1 = __webpack_require__(/*! ./DateTimeRangePicker */ "./src/widgets/views/searchFilter/DateTimeRangePicker.tsx");
var PairFields_1 = __webpack_require__(/*! ./PairFields */ "./src/widgets/views/searchFilter/PairFields.tsx");
var LocalesContext_1 = __webpack_require__(/*! @/context/LocalesContext */ "./src/context/LocalesContext.tsx");
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var types = {
    text: "Text",
    many2one: "Many2one",
    char: "Char",
    boolean: "Boolean",
    selection: "Selection",
    float: "Float",
    float_time: "FloatTime",
    progressbar: "ProgressBar",
    integer: "Integer",
    date: "Date",
    datetime: "DateTime",
};
function SearchField(props) {
    var field = props.field;
    field.readOnly = false;
    var getString = react_1.useContext(LocalesContext_1.LocalesContext).getString;
    var widgetType = field.constructor.name;
    switch (widgetType) {
        case types.boolean: {
            var ooui = new ooui_1.Selection({
                name: field._id,
                string: field.label,
                selection: [
                    ["true", getString("true")],
                    ["false", getString("false")],
                ],
            });
            return react_1.default.createElement(Selection_1.Selection, { layout: "vertical", ooui: ooui });
        }
        case types.float:
        case types.progressbar:
        case types.float_time:
        case types.integer: {
            return react_1.default.createElement(PairFields_1.PairFields, { ooui: field });
        }
        case types.date: {
            return react_1.default.createElement(DateRangePicker_1.DateRangePicker, { ooui: field, layout: "vertical" });
        }
        case types.datetime: {
            return react_1.default.createElement(DateTimeRangePicker_1.DateTimeRangePicker, { ooui: field, layout: "vertical" });
        }
        default: {
            return react_1.default.createElement(Char_1.Char, { ooui: field, layout: "vertical" });
        }
    }
}
exports.SearchField = SearchField;


/***/ }),

/***/ "./src/widgets/views/searchFilter/SearchFilter.tsx":
/*!*********************************************************!*\
  !*** ./src/widgets/views/searchFilter/SearchFilter.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
__webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
__webpack_require__(/*! @/tailwind.generated.css */ "./src/tailwind.generated.css");
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var SearchField_1 = __webpack_require__(/*! ./SearchField */ "./src/widgets/views/searchFilter/SearchField.tsx");
var SearchBottomBar_1 = __webpack_require__(/*! ./SearchBottomBar */ "./src/widgets/views/searchFilter/SearchBottomBar.tsx");
var LocalesContext_1 = __importDefault(__webpack_require__(/*! @/context/LocalesContext */ "./src/context/LocalesContext.tsx"));
var SearchParams_1 = __webpack_require__(/*! ./SearchParams */ "./src/widgets/views/searchFilter/SearchParams.tsx");
var searchFilterHelper_1 = __webpack_require__(/*! @/helpers/searchFilterHelper */ "./src/helpers/searchFilterHelper.ts");
function SearchFilter(props) {
    var fields = props.fields, searchFields = props.searchFields, onClear = props.onClear, onSubmit = props.onSubmit, isSearching = props.isSearching, offset = props.offset, limit = props.limit, strings = props.strings;
    var _a = react_1.useState(), simpleSearchFields = _a[0], setSimpleSearchFields = _a[1];
    var _b = react_1.useState(), advancedSearchFields = _b[0], setAdvancedSearchFields = _b[1];
    var _c = react_1.useState(false), advancedFilter = _c[0], setAdvancedFilter = _c[1];
    var form = antd_1.Form.useForm()[0];
    var getRowsAndCols = function () {
        if (!advancedSearchFields) {
            return;
        }
        var fields = advancedFilter ? advancedSearchFields : simpleSearchFields;
        var rows = fields === null || fields === void 0 ? void 0 : fields.rows;
        return rows === null || rows === void 0 ? void 0 : rows.map(function (row, i) {
            return (react_1.default.createElement(antd_1.Row, { key: i }, row.map(function (item, j) {
                return (react_1.default.createElement(antd_1.Col, { xs: 24, className: "p-2", xl: 6, key: j },
                    react_1.default.createElement(SearchField_1.SearchField, { field: item })));
            })));
        });
    };
    react_1.useEffect(function () {
        var sfo = new ooui_1.SearchFilter(searchFields, fields);
        sfo.parse();
        setSimpleSearchFields(sfo._simpleSearchContainer);
        setAdvancedSearchFields(sfo._advancedSearchContainer);
    }, [fields, searchFields]);
    var rows = getRowsAndCols();
    var onFinish = function (values) {
        var limit = values.limit, offset = values.offset;
        delete values.offset;
        delete values.limit;
        var newParams = searchFilterHelper_1.getParamsForFields(values, fields);
        onSubmit({ params: newParams, offset: offset, limit: limit });
    };
    return (react_1.default.createElement(LocalesContext_1.default, { strings: strings },
        react_1.default.createElement(antd_1.Form, { className: "bg-gray-100 rounded p-3", form: form, onFinish: onFinish, initialValues: { offset: offset, limit: limit } },
            rows,
            advancedFilter && react_1.default.createElement(SearchParams_1.SearchParams, null),
            react_1.default.createElement(SearchBottomBar_1.SearchBottomBar, { advancedFilter: advancedFilter, onAdvancedFilterToggle: function () {
                    setAdvancedFilter(!advancedFilter);
                }, onClear: function () {
                    form.resetFields();
                    onClear();
                }, isSearching: isSearching }))));
}
exports.default = SearchFilter;


/***/ }),

/***/ "./src/widgets/views/searchFilter/SearchParams.tsx":
/*!*********************************************************!*\
  !*** ./src/widgets/views/searchFilter/SearchParams.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchParams = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var Integer_1 = __webpack_require__(/*! @/widgets/base/Integer */ "./src/widgets/base/Integer.tsx");
var antd_1 = __webpack_require__(/*! antd */ "antd");
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var LocalesContext_1 = __webpack_require__(/*! @/context/LocalesContext */ "./src/context/LocalesContext.tsx");
function SearchParams() {
    var getString = react_1.useContext(LocalesContext_1.LocalesContext).getString;
    var limitOoui = new ooui_1.Integer({ name: "limit" });
    var offsetOoui = new ooui_1.Integer({ name: "offset" });
    return (react_1.default.createElement("div", { className: "pl-2 pt-2" },
        react_1.default.createElement(antd_1.Row, { key: "count_params" }, getString("parameters")),
        react_1.default.createElement(antd_1.Space, { align: "center" },
            getString("limit") + " :",
            react_1.default.createElement(Integer_1.Integer, { ooui: limitOoui }),
            getString("first") + " :",
            react_1.default.createElement(Integer_1.Integer, { ooui: offsetOoui }))));
}
exports.SearchParams = SearchParams;


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__ant_design_icons__;

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_antd__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Cb29sZWFuLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9DaGFyLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Db250YWluZXJXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRGF0ZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9EYXRlVGltZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9GaWVsZC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9GbG9hdC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9GbG9hdFRpbWUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRm9ybS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Hcm91cC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9JbnRlZ2VyLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0xhYmVsLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L01hbnkybWFueS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9NYW55Mm9uZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9OZXdMaW5lLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L05vdGVib29rLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L09uZTJtYW55LmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvU2VhcmNoRmlsdGVyLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9TZXBhcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvVGV4dC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9UcmVlLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1dpZGdldC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9XaWRnZXRGYWN0b3J5LmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS9kaXN0L3JlYWN0LXJlc3BvbnNpdmUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9jb21tb24vRmllbGQudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvY29udGV4dC9Mb2NhbGVzQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9oZWxwZXJzL2NvbnRhaW5lckhlbHBlci50cyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL2hlbHBlcnMvc2VhcmNoRmlsdGVySGVscGVyLnRzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvaGVscGVycy90cmVlSGVscGVyLnRzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy91aS9GaWVsZHNldC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL1dpZGdldEZhY3RvcnkudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0Jvb2xlYW4udHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvQ2hhci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvRmxvYXQudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0ludGVnZXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0xhYmVsLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9NYW55Mm9uZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvU2VsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9TZXBhcmF0b3IudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL1RleHQudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9jb250YWluZXJzL0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2NvbnRhaW5lcnMvR3JvdXAudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9jb250YWluZXJzL05vdGVib29rLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3MvRm9ybS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL1RyZWUudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvRGF0ZVJhbmdlUGlja2VyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL0RhdGVUaW1lUmFuZ2VQaWNrZXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvUGFpckZpZWxkcy50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9TZWFyY2hCb3R0b21CYXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvU2VhcmNoRmllbGQudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvU2VhcmNoRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL1NlYXJjaFBhcmFtcy50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWN0LW9vdWkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlYWN0LW9vdWkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDMkI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLDJDQUFLO0FBQ1AsaUVBQWUsT0FBTyxFQUFDO0FBQ3ZCLG1DOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNBO0FBQ0EsY0FB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Q0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJhbnRkXCIpLCByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJhbnRkXCIsIFwiQGFudC1kZXNpZ24vaWNvbnNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVhY3Qtb291aVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFjdC1vb3VpXCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0sIHJvb3RbXCJhbnRkXCJdLCByb290W1wiQGFudC1kZXNpZ24vaWNvbnNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2FudGRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYW50X2Rlc2lnbl9pY29uc19fKSB7XG5yZXR1cm4gIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBCb29sZWFuIGlucHV0XG4gKi9cbnZhciBCb29sZWFuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCb29sZWFuLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJvb2xlYW4ocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuc3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb2xzcGFuID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBCb29sZWFuO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJvb2xlYW4uanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbnZhciBCdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJ1dHRvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzKSwgeyBub2xhYmVsOiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLm5vbGFiZWwpICE9PSB1bmRlZmluZWQgPyBwcm9wcy5ub2xhYmVsIDogdHJ1ZSB9KSkgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFR5cGUgKHByaW1hcnkgb3IgZGVmYXVsdClcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl90eXBlID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdXR0b24gY2FwdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2NhcHRpb24gPSBcIlwiO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fY2FwdGlvbiA9IHByb3BzLnN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcInR5cGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbi5wcm90b3R5cGUsIFwiY2FwdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhcHRpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYXB0aW9uID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQnV0dG9uO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QnV0dG9uLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogT25lLWxpbmUgaW5wdXQgd2l0aCBhIGxlbmd0aCBsaW1pdC5cbiAqL1xudmFyIENoYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENoYXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2hhcihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIHBsYWNlIGhvbGRlclxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3BsYWNlaG9sZGVyID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIHNpemVcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9zaXplID0gMTUwO1xuICAgICAgICBfdGhpcy5faXNQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NpemUgPSBwcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmICghcHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb2xzcGFuID0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pc1Bhc3N3b3JkID0gcHJvcHMucGFzc3dvcmQgPT09IFwiVHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENoYXIucHJvdG90eXBlLCBcInBsYWNlaG9sZGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENoYXIucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENoYXIucHJvdG90eXBlLCBcImlzUGFzc3dvcmRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1Bhc3N3b3JkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faXNQYXNzd29yZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIENoYXI7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBDaGFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2hhci5qcy5tYXAiLCJpbXBvcnQgTmV3TGluZSBmcm9tIFwiLi9OZXdMaW5lXCI7XG52YXIgQ29udGFpbmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRhaW5lcihjb2x1bW5zLCBjb2xzcGFuKSB7XG4gICAgICAgIGlmIChjb2x1bW5zID09PSB2b2lkIDApIHsgY29sdW1ucyA9IDQ7IH1cbiAgICAgICAgaWYgKGNvbHNwYW4gPT09IHZvaWQgMCkgeyBjb2xzcGFuID0gNjsgfVxuICAgICAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICAgICAgdGhpcy5fY29sc3BhbiA9IGNvbHNwYW47XG4gICAgICAgIHRoaXMuX3Jvd3MgPSBbW11dO1xuICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXIucHJvdG90eXBlLCBcImNvbHVtbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY29sdW1ucyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lci5wcm90b3R5cGUsIFwiY29sc3BhblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHNwYW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2xzcGFuID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyLnByb3RvdHlwZSwgXCJyb3dzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcm93cztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd3MgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXIucHJvdG90eXBlLCBcImluZGV4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuZXh0IGZyZWUgcG9zaXRpb25cbiAgICAgKi9cbiAgICBDb250YWluZXIucHJvdG90eXBlLmZyZWVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNwYW4gPSB0aGlzLl9yb3dzW3RoaXMuX2luZGV4XS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiAhZWwuaW52aXNpYmxlOyB9KS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgY3VycmVudC5jb2xzcGFuO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnMgLSBzcGFuO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5hZGRXaWRnZXQgPSBmdW5jdGlvbiAod2lkZ2V0KSB7XG4gICAgICAgIGlmICh3aWRnZXQgaW5zdGFuY2VvZiBOZXdMaW5lKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzLnB1c2goW10pO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgrKztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2lkZ2V0LmNvbHNwYW4gPiB0aGlzLl9jb2x1bW5zKSB7XG4gICAgICAgICAgICAvLyBXaWRnZXQgY29sc3BhbiBpcyBncmVhdGVyIHRoYW4gY29udGFpbmVyIGNvbHVtbnMsIHNvIHdlIGNoYW5nZSB3aWRnZXRcbiAgICAgICAgICAgIC8vIGNvbHNwYW4gdG8gZml0IGNvbnRhaW5lciBjb2x1bW5zLlxuICAgICAgICAgICAgd2lkZ2V0LmNvbHNwYW4gPSB0aGlzLl9jb2x1bW5zO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aWRnZXQuY29sc3BhbiA8PSB0aGlzLmZyZWVQb3NpdGlvbigpKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzW3RoaXMuX2luZGV4XS5wdXNoKHdpZGdldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzLnB1c2goW10pO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgrKztcbiAgICAgICAgICAgIHRoaXMuYWRkV2lkZ2V0KHdpZGdldCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRyYXZlcnNlcyBjaGlsZHJlbiB0byBmaW5kIGEgbWF0Y2hpbmcgY29udGFpbmVyIG9yIHdpZGdldCB3aXRoIHRoZSBleGFjdCBzYW1lIGlkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZCAobmFtZSkgb2YgdGhlIGZpZWxkIG9yIGNvbnRhaW5lciB0byBmaW5kXG4gICAgICovXG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgciA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9yb3dzICYmIHRoaXMuX3Jvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEl0ZW0gaGFzIGJlZW4gZm91bmQuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvdyAmJiByb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0ZW0gaGFzIGJlZW4gZm91bmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gaXRlbS5maW5kQnlJZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRhaW5lcjtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db250YWluZXIuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4vV2lkZ2V0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xudmFyIENvbnRhaW5lcldpZGdldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29udGFpbmVyV2lkZ2V0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbnRhaW5lcldpZGdldChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIGlkZW50aWZpZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQ29ycmVzcG9uZHMgdG8gdGhlIGZpZWxkJ3MgbmFtZSBhdHRyaWJ1dGUgZnJvbSB4bWxcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9pZCA9IFwiXCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb250YWluZXIgbGFiZWxcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9sYWJlbCA9IFwiXCI7XG4gICAgICAgIF90aGlzLl9jb250YWluZXIgPSBuZXcgQ29udGFpbmVyKHByb3BzICYmIHByb3BzLmNvbCwgQ29udGFpbmVyV2lkZ2V0Ll9kZWZhdWx0Q29sc3Bhbik7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5faWQgPSBwcm9wcy5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fY29udGFpbmVyLmNvbHNwYW4gPSArcHJvcHMuY29sc3BhbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbGFiZWwgPSBwcm9wcy5zdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyV2lkZ2V0LnByb3RvdHlwZSwgXCJpZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXJXaWRnZXQsIFwiZGVmYXVsdENvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBDb250YWluZXJXaWRnZXQuX2RlZmF1bHRDb2xzcGFuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgQ29udGFpbmVyV2lkZ2V0Ll9kZWZhdWx0Q29sc3BhbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lcldpZGdldC5wcm90b3R5cGUsIFwiY29udGFpbmVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyV2lkZ2V0LnByb3RvdHlwZSwgXCJjb2xzcGFuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLmNvbHNwYW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIuY29sc3BhbiA9ICt2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXJXaWRnZXQucHJvdG90eXBlLCBcImxhYmVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQ2FsbHMgY29udGFpbmVyJ3MgZmluZEJ5SWQgbWV0aG9kIHRvIGZpbmQgdGhlIHdpZGdldHMgbWF0Y2hpbmcgd2l0aCBwYXJhbSBpZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZCB0byBmaW5kXG4gICAgICovXG4gICAgQ29udGFpbmVyV2lkZ2V0LnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAoaWQgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5maW5kQnlJZChpZCk7XG4gICAgfTtcbiAgICBDb250YWluZXJXaWRnZXQuX2RlZmF1bHRDb2xzcGFuID0gNjtcbiAgICByZXR1cm4gQ29udGFpbmVyV2lkZ2V0O1xufShXaWRnZXQpKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcldpZGdldDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbnRhaW5lcldpZGdldC5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIERhdGUgaW5wdXRcbiAqL1xudmFyIERhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERhdGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGF0ZShwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgaWYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgIGlmICghcHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbHNwYW4gPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIERhdGU7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBEYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGF0ZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIERhdGVUaW1lIGlucHV0XG4gKi9cbnZhciBEYXRlVGltZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGF0ZVRpbWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGF0ZVRpbWUocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuc3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb2xzcGFuID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBEYXRlVGltZTtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IERhdGVUaW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGF0ZVRpbWUuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4vV2lkZ2V0XCI7XG52YXIgRmllbGQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZpZWxkLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZpZWxkKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgaWRlbnRpZmllclxuICAgICAgICAgKlxuICAgICAgICAgKiBDb3JyZXNwb25kcyB0byB0aGUgZmllbGQncyBuYW1lIGF0dHJpYnV0ZSBmcm9tIHhtbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2lkID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExhYmVsXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fbGFiZWwgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogTm8gbGFiZWxcbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBmaWVsZCBoYXNuJ3QgZ290IHRvIHNob3cgdGhlIGxhYmVsXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fbm9sYWJlbCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogUmVxdWlyZWQgZmllbGRcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9yZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQWN0aXZhdGVkIChkZWZhdWx0IGlzIHRydWUpXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gQWN0aXZhdGVkIGJ5IGRlZmF1bHRcbiAgICAgICAgX3RoaXMuX2FjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5faWQgPSBwcm9wcy5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLmFjdGl2YXRlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9hY3RpdmF0ZWQgPSBwcm9wcy5hY3RpdmF0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2xhYmVsID0gcHJvcHMuc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLmhlbHApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdG9vbHRpcCA9IHByb3BzLmhlbHA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMubm9sYWJlbCAmJlxuICAgICAgICAgICAgICAgIChwcm9wcy5ub2xhYmVsID09PSBcIjFcIiB8fFxuICAgICAgICAgICAgICAgICAgICAodHlwZW9mIHByb3BzLm5vbGFiZWwgPT09IFwiYm9vbGVhblwiICYmIHByb3BzLm5vbGFiZWwgPT09IHRydWUpKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9ub2xhYmVsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgICAgIChwcm9wcy5yZXF1aXJlZCA9PT0gXCIxXCIgfHwgcHJvcHMucmVxdWlyZWQgPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWVsZC5wcm90b3R5cGUsIFwiaWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmllbGQucHJvdG90eXBlLCBcImxhYmVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpZWxkLnByb3RvdHlwZSwgXCJub2xhYmVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbm9sYWJlbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25vbGFiZWwgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWVsZC5wcm90b3R5cGUsIFwicmVxdWlyZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmVkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmllbGQucHJvdG90eXBlLCBcInRvb2x0aXBcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90b29sdGlwO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdG9vbHRpcCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpZWxkLnByb3RvdHlwZSwgXCJhY3RpdmF0ZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9hY3RpdmF0ZWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhpcyBpbnN0YW5jZSBpbiBjYXNlIHRoaXMgaWQgbWF0Y2hlcyBwYXJhbSBpZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgKG5hbWUpIHRvIGZpbmRcbiAgICAgKi9cbiAgICBGaWVsZC5wcm90b3R5cGUuZmluZEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHIgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5faWQgPT09IGlkKSB7XG4gICAgICAgICAgICByID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIHJldHVybiBGaWVsZDtcbn0oV2lkZ2V0KSk7XG5leHBvcnQgZGVmYXVsdCBGaWVsZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpZWxkLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogRmxvYXQgaW5wdXRcbiAqL1xudmFyIEZsb2F0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGbG9hdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGbG9hdChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVnZXIgZGlnaXRzXG4gICAgICAgICAqXG4gICAgICAgICAqIE51bWJlciBvZiBpbnRlZ2VyIGRpZ2l0cyB0aGF0IHdpbGwgYmUgcGFydCBvZiB0aGUgZmxvYXRcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9pbnRlZ2VyRGlnaXRzID0gMTY7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWNpbWFsIGRpZ2l0c1xuICAgICAgICAgKlxuICAgICAgICAgKiBOdW1iZXIgb2YgZGVjaW1hbCBkaWdpdHMgdGhhdCB3aWxsIGJlIHBhcnQgb2YgdGhlIGZsb2F0XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fZGVjaW1hbERpZ2l0cyA9IDI7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuc3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAoIShwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuY29sc3BhbikpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb2xzcGFuID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLmRpZ2l0cykge1xuICAgICAgICAgICAgdmFyIF9hID0gcHJvcHMuZGlnaXRzLCBpbnRlZ2VycyA9IF9hWzBdLCBkZWNpbWFscyA9IF9hWzFdO1xuICAgICAgICAgICAgX3RoaXMuX2ludGVnZXJEaWdpdHMgPSBpbnRlZ2VycztcbiAgICAgICAgICAgIF90aGlzLl9kZWNpbWFsRGlnaXRzID0gZGVjaW1hbHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmxvYXQucHJvdG90eXBlLCBcImludGVnZXJEaWdpdHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnRlZ2VyRGlnaXRzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faW50ZWdlckRpZ2l0cyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0LnByb3RvdHlwZSwgXCJkZWNpbWFsRGlnaXRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVjaW1hbERpZ2l0cztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlY2ltYWxEaWdpdHMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBGbG9hdDtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IEZsb2F0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmxvYXQuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGbG9hdCBmcm9tIFwiLi9GbG9hdFwiO1xuLyoqXG4gKiBGbG9hdFRpbWUgaW5wdXRcbiAqL1xudmFyIEZsb2F0VGltZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXRUaW1lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gRmxvYXRUaW1lO1xufShGbG9hdCkpO1xuZXhwb3J0IGRlZmF1bHQgRmxvYXRUaW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmxvYXRUaW1lLmpzLm1hcCIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgV2lkZ2V0RmFjdG9yeSBmcm9tIFwiLi9XaWRnZXRGYWN0b3J5XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbnZhciBGb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgX3dpZGdldHMgPSB7XG4gICAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIgJiYgdGhpcy5fY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHlpZWxkIGl0ZW1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZ2V0IHdpZGdldHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2lkZ2V0cztcbiAgICB9XG4gICAgKi9cbiAgICBmdW5jdGlvbiBGb3JtKGZpZWxkcywgY29sdW1ucykge1xuICAgICAgICBpZiAoY29sdW1ucyA9PT0gdm9pZCAwKSB7IGNvbHVtbnMgPSA4OyB9XG4gICAgICAgIHRoaXMuX2ZpZWxkcyA9IGZpZWxkcztcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gbmV3IENvbnRhaW5lcihjb2x1bW5zKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm0ucHJvdG90eXBlLCBcImZpZWxkc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtLnByb3RvdHlwZSwgXCJjb250YWluZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBGb3JtLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICh4bWwpIHtcbiAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgdmFyIHZpZXcgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbCwgXCJ0ZXh0L3htbFwiKTtcbiAgICAgICAgdGhpcy5wYXJzZU5vZGUodmlldy5kb2N1bWVudEVsZW1lbnQsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgfTtcbiAgICBGb3JtLnByb3RvdHlwZS5wYXJzZU5vZGUgPSBmdW5jdGlvbiAobm9kZSwgY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB3aWRnZXRGYWN0b3J5ID0gbmV3IFdpZGdldEZhY3RvcnkoKTtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlLmNoaWxkTm9kZXMsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSBjaGlsZC5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFnID0gY2hpbGQubm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgdmFyIHRhZ0F0dHJpYnV0ZXNfMSA9IHt9O1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoY2hpbGQuYXR0cmlidXRlcywgZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnQXR0cmlidXRlc18xW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0YWcgPT09IFwiZmllbGRcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZV8xID0gY2hpbGQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJXaWRnZXQgPSBjaGlsZC5nZXRBdHRyaWJ1dGUoXCJ3aWRnZXRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyV2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgPSBhdHRyV2lkZ2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWVfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnID0gX3RoaXMuX2ZpZWxkc1tuYW1lXzFdLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFnQXR0cmlidXRlc18xID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRhZ0F0dHJpYnV0ZXNfMSksIF90aGlzLl9maWVsZHNbbmFtZV8xXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB3aWRnZXQgPSB3aWRnZXRGYWN0b3J5LmNyZWF0ZVdpZGdldCh0YWcsIHRhZ0F0dHJpYnV0ZXNfMSk7XG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldCBpbnN0YW5jZW9mIENvbnRhaW5lcldpZGdldCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wYXJzZU5vZGUoY2hpbGQsIHdpZGdldC5jb250YWluZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkV2lkZ2V0KHdpZGdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbHMgY29udGFpbmVyJ3MgZmluZEJ5SWQgbWV0aG9kIHRvIGZpbmQgdGhlIHdpZGdldHMgbWF0Y2hpbmcgd2l0aCBwYXJhbSBpZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZCB0byBmaW5kXG4gICAgICovXG4gICAgRm9ybS5wcm90b3R5cGUuZmluZEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmZpbmRCeUlkKGlkKTtcbiAgICB9O1xuICAgIHJldHVybiBGb3JtO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgQ29udGFpbmVyV2lkZ2V0IGZyb20gXCIuL0NvbnRhaW5lcldpZGdldFwiO1xudmFyIEdyb3VwID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHcm91cCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHcm91cChwcm9wcykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBHcm91cDtcbn0oQ29udGFpbmVyV2lkZ2V0KSk7XG5leHBvcnQgZGVmYXVsdCBHcm91cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUdyb3VwLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogSW50ZWdlciBpbnB1dFxuICovXG52YXIgSW50ZWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW50ZWdlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbnRlZ2VyKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICBpZiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgaWYgKCFwcm9wcy5jb2xzcGFuKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29sc3BhbiA9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSW50ZWdlcjtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IEludGVnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JbnRlZ2VyLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbnZhciBMYWJlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTGFiZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGFiZWwocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMYWJlbCB0ZXh0XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fdGV4dCA9IFwiXCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGlnbiB0ZXh0XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fYWxpZ24gPSBcImxlZnRcIjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGFiZWwucHJvdG90eXBlLCBcInRleHRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExhYmVsLnByb3RvdHlwZSwgXCJhbGlnblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FsaWduO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYWxpZ24gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBMYWJlbDtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGFiZWwuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBBIE1hbnkybWFueSByZWxhdGlvbnNoaXAgZmllbGRcbiAqL1xudmFyIE1hbnkybWFueSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWFueTJtYW55LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1hbnkybWFueShwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIHNpemVcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9zaXplID0gMTUwO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVsYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9yZWxhdGlvbiA9IFwiXCI7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fc2l6ZSA9IHByb3BzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9wcy5jb2xzcGFuKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbHNwYW4gPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5yZWxhdGlvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9yZWxhdGlvbiA9IHByb3BzLnJlbGF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hbnkybWFueS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFueTJtYW55LnByb3RvdHlwZSwgXCJyZWxhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVsYXRpb24gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBNYW55Mm1hbnk7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBNYW55Mm1hbnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NYW55Mm1hbnkuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBBIG1hbnkyb25lIHJlbGF0aW9uc2hpcCBmaWVsZFxuICovXG52YXIgTWFueTJvbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1hbnkyb25lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1hbnkyb25lKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWxhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gXCJcIjtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zaXplID0gcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29sc3BhbiA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnJlbGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gcHJvcHMucmVsYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFueTJvbmUucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hbnkyb25lLnByb3RvdHlwZSwgXCJyZWxhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVsYXRpb24gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBNYW55Mm9uZTtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IE1hbnkyb25lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TWFueTJvbmUuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4vV2lkZ2V0XCI7XG52YXIgTmV3TGluZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTmV3TGluZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOZXdMaW5lKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE5ld0xpbmUucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIE5ld0xpbmU7XG59KFdpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgTmV3TGluZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5ld0xpbmUuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBDb250YWluZXJXaWRnZXQgZnJvbSBcIi4vQ29udGFpbmVyV2lkZ2V0XCI7XG52YXIgTm90ZWJvb2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vdGVib29rLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5vdGVib29rKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jb2xzcGFuID0gTm90ZWJvb2suX2RlZmF1bHRDb2xzcGFuO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5jb2xzcGFuKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29sc3BhbiA9IHByb3BzLmNvbHNwYW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm90ZWJvb2ssIFwiZGVmYXVsdENvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBOb3RlYm9vay5fZGVmYXVsdENvbHNwYW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBOb3RlYm9vay5fZGVmYXVsdENvbHNwYW4gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE5vdGVib29rLl9kZWZhdWx0Q29sc3BhbiA9IDM7XG4gICAgcmV0dXJuIE5vdGVib29rO1xufShDb250YWluZXJXaWRnZXQpKTtcbmV4cG9ydCBkZWZhdWx0IE5vdGVib29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Tm90ZWJvb2suanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBBIE9uZTJNYW55IHJlbGF0aW9uc2hpcCBmaWVsZFxuICovXG52YXIgT25lMm1hbnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9uZTJtYW55LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9uZTJtYW55KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWxhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gXCJcIjtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zaXplID0gcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29sc3BhbiA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnJlbGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gcHJvcHMucmVsYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT25lMm1hbnkucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9uZTJtYW55LnByb3RvdHlwZSwgXCJyZWxhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVsYXRpb24gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBPbmUybWFueTtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IE9uZTJtYW55O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T25lMm1hbnkuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBDb250YWluZXJXaWRnZXQgZnJvbSBcIi4vQ29udGFpbmVyV2lkZ2V0XCI7XG52YXIgUGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUGFnZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQYWdlKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFBhZ2U7XG59KENvbnRhaW5lcldpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBhZ2UuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGbG9hdCBmcm9tIFwiLi9GbG9hdFwiO1xuLyoqXG4gKiBQcm9ncmVzc0JhciBpbnB1dFxuICovXG52YXIgUHJvZ3Jlc3NCYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFByb2dyZXNzQmFyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByb2dyZXNzQmFyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBQcm9ncmVzc0Jhcjtcbn0oRmxvYXQpKTtcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHJvZ3Jlc3NCYXIuanMubWFwIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCBXaWRnZXRGYWN0b3J5IGZyb20gXCIuL1dpZGdldEZhY3RvcnlcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG52YXIgU2VhcmNoRmlsdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlYXJjaEZpbHRlcihzZWFyY2hGaWVsZHMsIGZpZWxkcywgY29sdW1ucykge1xuICAgICAgICBpZiAoY29sdW1ucyA9PT0gdm9pZCAwKSB7IGNvbHVtbnMgPSA4OyB9XG4gICAgICAgIHRoaXMuX3NlYXJjaEZpZWxkcyA9IHNlYXJjaEZpZWxkcztcbiAgICAgICAgdGhpcy5fZmllbGRzID0gZmllbGRzO1xuICAgICAgICB0aGlzLl9zaW1wbGVTZWFyY2hDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKGNvbHVtbnMpO1xuICAgICAgICB0aGlzLl9hZHZhbmNlZFNlYXJjaENvbnRhaW5lciA9IG5ldyBDb250YWluZXIoY29sdW1ucyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWFyY2hGaWx0ZXIucHJvdG90eXBlLCBcInNlYXJjaEZpZWxkc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaEZpZWxkcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWFyY2hGaWx0ZXIucHJvdG90eXBlLCBcImZpZWxkc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWFyY2hGaWx0ZXIucHJvdG90eXBlLCBcInNpbXBsZVNlYXJjaENvbnRhaW5lclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpbXBsZVNlYXJjaENvbnRhaW5lcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWFyY2hGaWx0ZXIucHJvdG90eXBlLCBcImFkdmFuY2VkU2VhcmNoQ29udGFpbmVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWR2YW5jZWRTZWFyY2hDb250YWluZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTZWFyY2hGaWx0ZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgd2lkZ2V0RmFjdG9yeSA9IG5ldyBXaWRnZXRGYWN0b3J5KCk7XG4gICAgICAgIHZhciBzaW1wbGVTZWFyY2hXaWRnZXRzID0gdGhpcy5wYXJzZUZpZWxkcyh0aGlzLnNlYXJjaEZpZWxkcy5wcmltYXJ5LCB3aWRnZXRGYWN0b3J5KTtcbiAgICAgICAgc2ltcGxlU2VhcmNoV2lkZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh3aWRnZXQpIHtcbiAgICAgICAgICAgIF90aGlzLnNpbXBsZVNlYXJjaENvbnRhaW5lci5hZGRXaWRnZXQod2lkZ2V0KTtcbiAgICAgICAgICAgIF90aGlzLmFkdmFuY2VkU2VhcmNoQ29udGFpbmVyLmFkZFdpZGdldCh3aWRnZXQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGFkdmFuY2VkU2VhcmNoV2lkZ2V0cyA9IHRoaXMucGFyc2VGaWVsZHModGhpcy5zZWFyY2hGaWVsZHMuc2Vjb25kYXJ5LCB3aWRnZXRGYWN0b3J5KTtcbiAgICAgICAgYWR2YW5jZWRTZWFyY2hXaWRnZXRzLmZvckVhY2goZnVuY3Rpb24gKHdpZGdldCkge1xuICAgICAgICAgICAgX3RoaXMuYWR2YW5jZWRTZWFyY2hDb250YWluZXIuYWRkV2lkZ2V0KHdpZGdldCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2VhcmNoRmlsdGVyLnByb3RvdHlwZS5wYXJzZUZpZWxkcyA9IGZ1bmN0aW9uIChzZWFyY2hGaWVsZHMsIHdpZGdldEZhY3RvcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNlYXJjaEZpZWxkcy5tYXAoZnVuY3Rpb24gKHNlYXJjaEZpZWxkKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRBdHRyaWJ1dGVzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLmZpZWxkc1tzZWFyY2hGaWVsZF0pLCB7IG5hbWU6IHNlYXJjaEZpZWxkIH0pO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBmaWVsZEF0dHJpYnV0ZXMudHlwZTtcbiAgICAgICAgICAgIHJldHVybiB3aWRnZXRGYWN0b3J5LmNyZWF0ZVdpZGdldCh0eXBlLCBmaWVsZEF0dHJpYnV0ZXMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxzIGNvbnRhaW5lcidzIGZpbmRCeUlkIG1ldGhvZCB0byBmaW5kIHRoZSB3aWRnZXRzIG1hdGNoaW5nIHdpdGggcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgdG8gZmluZFxuICAgICAqL1xuICAgIFNlYXJjaEZpbHRlci5wcm90b3R5cGUuZmluZEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWR2YW5jZWRTZWFyY2hDb250YWluZXIuZmluZEJ5SWQoaWQpO1xuICAgIH07XG4gICAgcmV0dXJuIFNlYXJjaEZpbHRlcjtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGaWx0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TZWFyY2hGaWx0ZXIuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBTZWxlY3Rpb24gZmllbGQgZm9yIGtleS12YWx1ZSBsaXN0c1xuICovXG52YXIgU2VsZWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2VsZWN0aW9uKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZXMgYW5kIGtleXNcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9zZWxlY3Rpb25WYWx1ZXMgPSBuZXcgTWFwKFtdKTtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zaXplID0gcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29sc3BhbiA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zZWxlY3Rpb25WYWx1ZXMgPSBuZXcgTWFwKHByb3BzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0aW9uLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWxlY3Rpb24ucHJvdG90eXBlLCBcInNlbGVjdGlvblZhbHVlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvblZhbHVlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvblZhbHVlcyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFNlbGVjdGlvbjtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNlbGVjdGlvbi5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbnZhciBTZXBhcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNlcGFyYXRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZXBhcmF0b3IocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMYWJlbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2xhYmVsID0gXCJcIjtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2xhYmVsID0gcHJvcHMuc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlcGFyYXRvci5wcm90b3R5cGUsIFwibGFiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTZXBhcmF0b3IucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIFNlcGFyYXRvcjtcbn0oV2lkZ2V0KSk7XG5leHBvcnQgZGVmYXVsdCBTZXBhcmF0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TZXBhcmF0b3IuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBNdWx0aWxpbmUgaW5wdXQgd2l0aCBubyBsZW5ndGggbGltaXQuXG4gKi9cbnZhciBUZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUZXh0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRleHQocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBwbGFjZSBob2xkZXJcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9wbGFjZWhvbGRlciA9IHByb3BzLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRleHQucHJvdG90eXBlLCBcInBsYWNlaG9sZGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFRleHQ7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGV4dC5qcy5tYXAiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IFdpZGdldEZhY3RvcnkgZnJvbSBcIi4vV2lkZ2V0RmFjdG9yeVwiO1xudmFyIFRyZWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJlZShmaWVsZHMpIHtcbiAgICAgICAgdGhpcy5fY29sdW1ucyA9IFtdO1xuICAgICAgICB0aGlzLl9maWVsZHMgPSBmaWVsZHM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmVlLnByb3RvdHlwZSwgXCJmaWVsZHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maWVsZHM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJlZS5wcm90b3R5cGUsIFwiY29sdW1uc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBUcmVlLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICh4bWwpIHtcbiAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgdmFyIHZpZXcgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbCwgXCJ0ZXh0L3htbFwiKTtcbiAgICAgICAgdGhpcy5wYXJzZU5vZGUodmlldy5kb2N1bWVudEVsZW1lbnQpO1xuICAgIH07XG4gICAgVHJlZS5wcm90b3R5cGUucGFyc2VOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHdpZGdldEZhY3RvcnkgPSBuZXcgV2lkZ2V0RmFjdG9yeSgpO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGUuY2hpbGROb2RlcywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IGNoaWxkLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHZhciB0YWcgPSBjaGlsZC5ub2RlTmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgdGFnQXR0cmlidXRlc18xID0ge307XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChjaGlsZC5hdHRyaWJ1dGVzLCBmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgICAgICB0YWdBdHRyaWJ1dGVzXzFbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJmaWVsZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lXzEgPSBjaGlsZC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cldpZGdldCA9IGNoaWxkLmdldEF0dHJpYnV0ZShcIndpZGdldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJXaWRnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyA9IGF0dHJXaWRnZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZV8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgPSBfdGhpcy5fZmllbGRzW25hbWVfMV0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWdBdHRyaWJ1dGVzXzEgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGFnQXR0cmlidXRlc18xKSwgX3RoaXMuX2ZpZWxkc1tuYW1lXzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHdpZGdldCA9IHdpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KHRhZywgdGFnQXR0cmlidXRlc18xKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fY29sdW1ucy5wdXNoKHdpZGdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgd2lkZ2V0cyBtYXRjaGluZyB3aXRoIHBhcmFtIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIHRvIGZpbmRcbiAgICAgKi9cbiAgICBUcmVlLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1ucy5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5maW5kQnlJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmZpbmRCeUlkKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVHJlZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBUcmVlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VHJlZS5qcy5tYXAiLCJ2YXIgV2lkZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdpZGdldChwcm9wcykge1xuICAgICAgICB0aGlzLl9jb2xzcGFuID0gV2lkZ2V0Ll9kZWZhdWx0Q29sc3BhbjtcbiAgICAgICAgdGhpcy5fcmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xzcGFuID0gK3Byb3BzLmNvbHNwYW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucmVhZG9ubHkgPT09IDEgfHwgcHJvcHMucmVhZG9ubHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5pbnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuaW52aXNpYmxlID09PSAxIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmludmlzaWJsZSA9PT0gXCIxXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaW52aXNpYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXaWRnZXQsIFwiZGVmYXVsdENvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBXaWRnZXQuX2RlZmF1bHRDb2xzcGFuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgV2lkZ2V0Ll9kZWZhdWx0Q29sc3BhbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdpZGdldC5wcm90b3R5cGUsIFwicmVhZE9ubHlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWFkT25seTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlYWRPbmx5ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2lkZ2V0LnByb3RvdHlwZSwgXCJjb2xzcGFuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sc3BhbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbHNwYW4gPSArdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2lkZ2V0LnByb3RvdHlwZSwgXCJpbnZpc2libGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZpc2libGU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnZpc2libGUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgY29sc3BhblxuICAgICAqL1xuICAgIFdpZGdldC5fZGVmYXVsdENvbHNwYW4gPSAxO1xuICAgIHJldHVybiBXaWRnZXQ7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2lkZ2V0LmpzLm1hcCIsImltcG9ydCBOb3RlYm9vayBmcm9tIFwiLi9Ob3RlYm9va1wiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IEdyb3VwIGZyb20gXCIuL0dyb3VwXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgQ2hhciBmcm9tIFwiLi9DaGFyXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi9UZXh0XCI7XG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL1NlbGVjdGlvblwiO1xuaW1wb3J0IE1hbnkyb25lIGZyb20gXCIuL01hbnkyb25lXCI7XG5pbXBvcnQgQm9vbGVhbiBmcm9tIFwiLi9Cb29sZWFuXCI7XG5pbXBvcnQgSW50ZWdlciBmcm9tIFwiLi9JbnRlZ2VyXCI7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuL1dpZGdldFwiO1xuaW1wb3J0IEZsb2F0IGZyb20gXCIuL0Zsb2F0XCI7XG5pbXBvcnQgRmxvYXRUaW1lIGZyb20gXCIuL0Zsb2F0VGltZVwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgRGF0ZSBmcm9tIFwiLi9EYXRlXCI7XG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4vRGF0ZVRpbWVcIjtcbmltcG9ydCBNYW55Mm1hbnkgZnJvbSBcIi4vTWFueTJtYW55XCI7XG5pbXBvcnQgT25lMm1hbnkgZnJvbSBcIi4vT25lMm1hbnlcIjtcbmltcG9ydCBOZXdMaW5lIGZyb20gXCIuL05ld0xpbmVcIjtcbmltcG9ydCBTZXBhcmF0b3IgZnJvbSBcIi4vU2VwYXJhdG9yXCI7XG52YXIgV2lkZ2V0RmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXaWRnZXRGYWN0b3J5KCkge1xuICAgIH1cbiAgICBXaWRnZXRGYWN0b3J5LnByb3RvdHlwZS5zZXRXaWRnZXRDbGFzcyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5vdGVib29rXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBOb3RlYm9vaztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwYWdlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBQYWdlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdyb3VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBHcm91cDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsYWJlbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gTGFiZWw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2hhclwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gQ2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBUZXh0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ1dHRvblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gQnV0dG9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNlbGVjdGlvblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gU2VsZWN0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1hbnkyb25lXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBNYW55Mm9uZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBCb29sZWFuO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImludGVnZXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEludGVnZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZmxvYXRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEZsb2F0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImZsb2F0X3RpbWVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEZsb2F0VGltZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBEYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBEYXRlVGltZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcm9ncmVzc2JhclwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gUHJvZ3Jlc3NCYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWFueTJtYW55XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBNYW55Mm1hbnk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib25lMm1hbnlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE9uZTJtYW55O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm5ld2xpbmVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE5ld0xpbmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2VwYXJhdG9yXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBTZXBhcmF0b3I7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gV2lkZ2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXaWRnZXRGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVXaWRnZXQgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRXaWRnZXRDbGFzcyh0eXBlKTtcbiAgICAgICAgLy8gVE9ETzogV2lkZ2V0IENsYXNzIGNvbnN0cnVjdG9ycyBzaG91bGQgdXNlIG9ubHkgdGhlIHByb3BzIG5lZWRlZCwgbm90IGFsbCBwcm9wcy5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWZpYyBjYXNlcyAob25seSBzZWxlY3RlZCBwcm9wcyBzaG91bGQgYmUgdXNlZClcbiAgICAgICAgICAgIGNhc2UgXCJub3RlYm9va1wiOlxuICAgICAgICAgICAgY2FzZSBcInBhZ2VcIjpcbiAgICAgICAgICAgIGNhc2UgXCJncm91cFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5fd2lkZ2V0Q2xhc3MocHJvcHMpO1xuICAgICAgICAgICAgLy8gR2VuZXJpYyBjYXNlXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5fd2lkZ2V0Q2xhc3MocHJvcHMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gV2lkZ2V0RmFjdG9yeTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBXaWRnZXRGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2lkZ2V0RmFjdG9yeS5qcy5tYXAiLCJpbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgVHJlZSBmcm9tIFwiLi9UcmVlXCI7XG5pbXBvcnQgQ2hhciBmcm9tIFwiLi9DaGFyXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSBcIi4vU2VsZWN0aW9uXCI7XG5pbXBvcnQgTWFueTJvbmUgZnJvbSBcIi4vTWFueTJvbmVcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbmltcG9ydCBCb29sZWFuIGZyb20gXCIuL0Jvb2xlYW5cIjtcbmltcG9ydCBJbnRlZ2VyIGZyb20gXCIuL0ludGVnZXJcIjtcbmltcG9ydCBGbG9hdCBmcm9tIFwiLi9GbG9hdFwiO1xuaW1wb3J0IEZsb2F0VGltZSBmcm9tIFwiLi9GbG9hdFRpbWVcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IERhdGUgZnJvbSBcIi4vRGF0ZVwiO1xuaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuL0RhdGVUaW1lXCI7XG5pbXBvcnQgTWFueTJtYW55IGZyb20gXCIuL01hbnkybWFueVwiO1xuaW1wb3J0IE9uZTJtYW55IGZyb20gXCIuL09uZTJtYW55XCI7XG5pbXBvcnQgU2VhcmNoRmlsdGVyIGZyb20gXCIuL1NlYXJjaEZpbHRlclwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vVGV4dFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgTm90ZWJvb2sgZnJvbSBcIi4vTm90ZWJvb2tcIjtcbmltcG9ydCBHcm91cCBmcm9tIFwiLi9Hcm91cFwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IFNlcGFyYXRvciBmcm9tIFwiLi9TZXBhcmF0b3JcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5leHBvcnQgeyBDaGFyLCBTZWxlY3Rpb24sIE1hbnkyb25lLCBGaWVsZCwgV2lkZ2V0LCBGb3JtLCBUcmVlLCBCb29sZWFuLCBPbmUybWFueSwgSW50ZWdlciwgRmxvYXQsIEZsb2F0VGltZSwgRGF0ZSwgRGF0ZVRpbWUsIE1hbnkybWFueSwgU2VhcmNoRmlsdGVyLCBDb250YWluZXIsIENvbnRhaW5lcldpZGdldCwgVGV4dCwgUHJvZ3Jlc3NCYXIsIE5vdGVib29rLCBHcm91cCwgUGFnZSwgTGFiZWwsIFNlcGFyYXRvciwgQnV0dG9uLCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiIWZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbIFwicmVhY3RcIiBdLCBmYWN0b3J5KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzLk1lZGlhUXVlcnkgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSkgOiByb290Lk1lZGlhUXVlcnkgPSBmYWN0b3J5KHJvb3QuUmVhY3QpO1xufShcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG1vZHVsZXMpIHtcbiAgICAgICAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuICAgICAgICAgICAgaWYgKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSByZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiAgICAgICAgICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiAgICAgICAgICAgICAgICBpOiBtb2R1bGVJZCxcbiAgICAgICAgICAgICAgICBsOiAhMSxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSwgXG4gICAgICAgICAgICBtb2R1bGUubCA9ICEwLCBtb2R1bGUuZXhwb3J0cztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuICAgICAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcywgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcywgXG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuICAgICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICBnZXQ6IGdldHRlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgdmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2R1bGUuZGVmYXVsdDtcbiAgICAgICAgICAgIH0gOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCBcImFcIiwgZ2V0dGVyKSwgZ2V0dGVyO1xuICAgICAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuICAgIH0oWyBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBvKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT2JqZWN0XCIgPT09IG4gJiYgby5jb25zdHJ1Y3RvciAmJiAobiA9IG8uY29uc3RydWN0b3IubmFtZSksIFwiTWFwXCIgPT09IG4gfHwgXCJTZXRcIiA9PT0gbiA/IEFycmF5LmZyb20obykgOiBcIkFyZ3VtZW50c1wiID09PSBuIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pID8gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKSA6IHZvaWQgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICAgICAgICAgICAgKG51bGwgPT0gbGVuIHx8IGxlbiA+IGFyci5sZW5ndGgpICYmIChsZW4gPSBhcnIubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgICAgICAgICAgIHJldHVybiBhcnIyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hcnIgPSBbXSwgX24gPSAhMCwgX2QgPSAhMSwgX2UgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX3MsIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSkgJiYgKF9hcnIucHVzaChfcy52YWx1ZSksIFxuICAgICAgICAgICAgICAgICAgICAhaSB8fCBfYXJyLmxlbmd0aCAhPT0gaSk7IF9uID0gITApIDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgX2QgPSAhMCwgX2UgPSBlcnI7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9uIHx8IG51bGwgPT0gX2kucmV0dXJuIHx8IF9pLnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX2FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X18pLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfbWF0Y2htZWRpYXF1ZXJ5X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfbWF0Y2htZWRpYXF1ZXJ5X19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfbWF0Y2htZWRpYXF1ZXJ5X18pLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfaHlwaGVuYXRlX3N0eWxlX25hbWVfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMiksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19zaGFsbG93X2VxdWFsX29iamVjdHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfc2hhbGxvd19lcXVhbF9vYmplY3RzX19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfc2hhbGxvd19lcXVhbF9vYmplY3RzX18pLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX3RvUXVlcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMyksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fQ29udGV4dF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KSwgbWFrZVF1ZXJ5ID0gZnVuY3Rpb24oc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncy5xdWVyeSB8fCBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X190b1F1ZXJ5X18uYSkoc2V0dGluZ3MpO1xuICAgICAgICB9LCBoeXBoZW5hdGVLZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICBpZiAoIW9iaikgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgICAgICByZXR1cm4gMCA9PT0ga2V5cy5sZW5ndGggPyBudWxsIDoga2V5cy5yZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0W09iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfaHlwaGVuYXRlX3N0eWxlX25hbWVfXy5hKShrZXkpXSA9IG9ialtrZXldLCBcbiAgICAgICAgICAgICAgICByZXN1bHQ7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0sIHVzZUlzVXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVmID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZVJlZighMSk7XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9ICEwO1xuICAgICAgICAgICAgfSwgW10pLCByZWYuY3VycmVudDtcbiAgICAgICAgfSwgdXNlRGV2aWNlID0gZnVuY3Rpb24oZGV2aWNlRnJvbVByb3BzKSB7XG4gICAgICAgICAgICB2YXIgZGV2aWNlRnJvbUNvbnRleHQgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlQ29udGV4dChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX0NvbnRleHRfXy5hKSwgZ2V0RGV2aWNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh5cGhlbmF0ZUtleXMoZGV2aWNlRnJvbVByb3BzKSB8fCBoeXBoZW5hdGVLZXlzKGRldmljZUZyb21Db250ZXh0KTtcbiAgICAgICAgICAgIH0sIF9SZWFjdCR1c2VTdGF0ZSA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VTdGF0ZShnZXREZXZpY2UpLCBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSwgZGV2aWNlID0gX1JlYWN0JHVzZVN0YXRlMlswXSwgc2V0RGV2aWNlID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdEZXZpY2UgPSBnZXREZXZpY2UoKTtcbiAgICAgICAgICAgICAgICBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfc2hhbGxvd19lcXVhbF9vYmplY3RzX19fZGVmYXVsdCgpKGRldmljZSwgbmV3RGV2aWNlKSB8fCBzZXREZXZpY2UobmV3RGV2aWNlKTtcbiAgICAgICAgICAgIH0sIFsgZGV2aWNlRnJvbVByb3BzLCBkZXZpY2VGcm9tQ29udGV4dCBdKSwgZGV2aWNlO1xuICAgICAgICB9LCB1c2VRdWVyeSA9IGZ1bmN0aW9uKHNldHRpbmdzKSB7XG4gICAgICAgICAgICB2YXIgZ2V0UXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZVF1ZXJ5KHNldHRpbmdzKTtcbiAgICAgICAgICAgIH0sIF9SZWFjdCR1c2VTdGF0ZTMgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlU3RhdGUoZ2V0UXVlcnkpLCBfUmVhY3QkdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlMywgMiksIHF1ZXJ5ID0gX1JlYWN0JHVzZVN0YXRlNFswXSwgc2V0UXVlcnkgPSBfUmVhY3QkdXNlU3RhdGU0WzFdO1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1F1ZXJ5ID0gZ2V0UXVlcnkoKTtcbiAgICAgICAgICAgICAgICBxdWVyeSAhPT0gbmV3UXVlcnkgJiYgc2V0UXVlcnkobmV3UXVlcnkpO1xuICAgICAgICAgICAgfSwgWyBzZXR0aW5ncyBdKSwgcXVlcnk7XG4gICAgICAgIH0sIHVzZU1hdGNoTWVkaWEgPSBmdW5jdGlvbihxdWVyeSwgZGV2aWNlKSB7XG4gICAgICAgICAgICB2YXIgZ2V0TWF0Y2hNZWRpYSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfbWF0Y2htZWRpYXF1ZXJ5X19fZGVmYXVsdCgpKHF1ZXJ5LCBkZXZpY2UgfHwge30sICEhZGV2aWNlKTtcbiAgICAgICAgICAgIH0sIF9SZWFjdCR1c2VTdGF0ZTUgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlU3RhdGUoZ2V0TWF0Y2hNZWRpYSksIF9SZWFjdCR1c2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGU1LCAyKSwgbXEgPSBfUmVhY3QkdXNlU3RhdGU2WzBdLCBzZXRNcSA9IF9SZWFjdCR1c2VTdGF0ZTZbMV0sIGlzVXBkYXRlID0gdXNlSXNVcGRhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1VwZGF0ZSAmJiBzZXRNcShnZXRNYXRjaE1lZGlhKCkpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbXEuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCBbIHF1ZXJ5LCBkZXZpY2UgXSksIG1xO1xuICAgICAgICB9LCB1c2VNYXRjaGVzID0gZnVuY3Rpb24obWVkaWFRdWVyeSkge1xuICAgICAgICAgICAgdmFyIF9SZWFjdCR1c2VTdGF0ZTcgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlU3RhdGUobWVkaWFRdWVyeS5tYXRjaGVzKSwgX1JlYWN0JHVzZVN0YXRlOCA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZTcsIDIpLCBtYXRjaGVzID0gX1JlYWN0JHVzZVN0YXRlOFswXSwgc2V0TWF0Y2hlcyA9IF9SZWFjdCR1c2VTdGF0ZThbMV07XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlTWF0Y2hlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRNYXRjaGVzKG1lZGlhUXVlcnkubWF0Y2hlcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVkaWFRdWVyeS5hZGRMaXN0ZW5lcih1cGRhdGVNYXRjaGVzKSwgdXBkYXRlTWF0Y2hlcygpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFRdWVyeS5yZW1vdmVMaXN0ZW5lcih1cGRhdGVNYXRjaGVzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSwgWyBtZWRpYVF1ZXJ5IF0pLCBtYXRjaGVzO1xuICAgICAgICB9LCB1c2VNZWRpYVF1ZXJ5ID0gZnVuY3Rpb24oc2V0dGluZ3MsIGRldmljZSwgb25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHZhciBkZXZpY2VTZXR0aW5ncyA9IHVzZURldmljZShkZXZpY2UpLCBxdWVyeSA9IHVzZVF1ZXJ5KHNldHRpbmdzKTtcbiAgICAgICAgICAgIGlmICghcXVlcnkpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3IgbWlzc2luZyBNZWRpYVF1ZXJ5IVwiKTtcbiAgICAgICAgICAgIHZhciBtcSA9IHVzZU1hdGNoTWVkaWEocXVlcnksIGRldmljZVNldHRpbmdzKSwgbWF0Y2hlcyA9IHVzZU1hdGNoZXMobXEpLCBpc1VwZGF0ZSA9IHVzZUlzVXBkYXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpc1VwZGF0ZSAmJiBvbkNoYW5nZSAmJiBvbkNoYW5nZShtYXRjaGVzKTtcbiAgICAgICAgICAgIH0sIFsgbWF0Y2hlcyBdKSwgbWF0Y2hlcztcbiAgICAgICAgfTtcbiAgICAgICAgX193ZWJwYWNrX2V4cG9ydHNfXy5hID0gdXNlTWVkaWFRdWVyeTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIHRvSHlwaGVuTG93ZXIobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBcIi1cIiArIG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuIGNhY2hlW25hbWVdO1xuICAgICAgICAgICAgdmFyIGhOYW1lID0gbmFtZS5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sIHRvSHlwaGVuTG93ZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlW25hbWVdID0gbXNQYXR0ZXJuLnRlc3QoaE5hbWUpID8gXCItXCIgKyBoTmFtZSA6IGhOYW1lO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2csIG1zUGF0dGVybiA9IC9ebXMtLywgY2FjaGUgPSB7fTtcbiAgICAgICAgX193ZWJwYWNrX2V4cG9ydHNfXy5hID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9oeXBoZW5hdGVfc3R5bGVfbmFtZV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19tZWRpYVF1ZXJ5X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKSwgbmVnYXRlID0gZnVuY3Rpb24oY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibm90IFwiLmNvbmNhdChjb25kKTtcbiAgICAgICAgfSwga2V5VmFsID0gZnVuY3Rpb24oaywgdikge1xuICAgICAgICAgICAgdmFyIHJlYWxLZXkgPSBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2h5cGhlbmF0ZV9zdHlsZV9uYW1lX18uYSkoayk7XG4gICAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIiA9PSB0eXBlb2YgdiAmJiAodiA9IFwiXCIuY29uY2F0KHYsIFwicHhcIikpLCAhMCA9PT0gdiA/IHJlYWxLZXkgOiAhMSA9PT0gdiA/IG5lZ2F0ZShyZWFsS2V5KSA6IFwiKFwiLmNvbmNhdChyZWFsS2V5LCBcIjogXCIpLmNvbmNhdCh2LCBcIilcIik7XG4gICAgICAgIH0sIGpvaW4gPSBmdW5jdGlvbihjb25kcykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmRzLmpvaW4oXCIgYW5kIFwiKTtcbiAgICAgICAgfSwgdG9RdWVyeSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgdmFyIHJ1bGVzID0gW107XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19tZWRpYVF1ZXJ5X18uYS5hbGwpLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gb2JqW2tdO1xuICAgICAgICAgICAgICAgIG51bGwgIT0gdiAmJiBydWxlcy5wdXNoKGtleVZhbChrLCB2KSk7XG4gICAgICAgICAgICB9KSwgam9pbihydWxlcyk7XG4gICAgICAgIH07XG4gICAgICAgIF9fd2VicGFja19leHBvcnRzX18uYSA9IHRvUXVlcnk7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBcIlNFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEXCI7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fKSwgQ29udGV4dCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS5jcmVhdGVDb250ZXh0KCk7XG4gICAgICAgIF9fd2VicGFja19leHBvcnRzX18uYSA9IENvbnRleHQ7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXNlTWVkaWFRdWVyeV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19Db21wb25lbnRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3RvUXVlcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMyksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fQ29udGV4dF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX0NvbXBvbmVudF9fLmE7XG4gICAgICAgIH0pLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJ1c2VNZWRpYVF1ZXJ5XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXNlTWVkaWFRdWVyeV9fLmE7XG4gICAgICAgIH0pLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJ0b1F1ZXJ5XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdG9RdWVyeV9fLmE7XG4gICAgICAgIH0pLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJDb250ZXh0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fQ29udGV4dF9fLmE7XG4gICAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gTXFsKHF1ZXJ5LCB2YWx1ZXMsIGZvcmNlU3RhdGljKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIG1xbCAmJiBtcWwuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBtcWwgJiYgbXFsLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZShldnQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1hdGNoZXMgPSBldnQubWF0Y2hlcywgc2VsZi5tZWRpYSA9IGV2dC5tZWRpYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAgICAgICAgICAgbXFsICYmIG1xbC5yZW1vdmVMaXN0ZW5lcih1cGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKGR5bmFtaWNNYXRjaCAmJiAhZm9yY2VTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbXFsID0gZHluYW1pY01hdGNoLmNhbGwod2luZG93LCBxdWVyeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVzID0gbXFsLm1hdGNoZXMsIHRoaXMubWVkaWEgPSBtcWwubWVkaWEsIG1xbC5hZGRMaXN0ZW5lcih1cGRhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIHRoaXMubWF0Y2hlcyA9IHN0YXRpY01hdGNoKHF1ZXJ5LCB2YWx1ZXMpLCB0aGlzLm1lZGlhID0gcXVlcnk7XG4gICAgICAgICAgICB0aGlzLmFkZExpc3RlbmVyID0gYWRkTGlzdGVuZXIsIHRoaXMucmVtb3ZlTGlzdGVuZXIgPSByZW1vdmVMaXN0ZW5lciwgdGhpcy5kaXNwb3NlID0gZGlzcG9zZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYXRjaE1lZGlhKHF1ZXJ5LCB2YWx1ZXMsIGZvcmNlU3RhdGljKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1xbChxdWVyeSwgdmFsdWVzLCBmb3JjZVN0YXRpYyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXRpY01hdGNoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5tYXRjaCwgZHluYW1pY01hdGNoID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ID8gd2luZG93Lm1hdGNoTWVkaWEgOiBudWxsO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IG1hdGNoTWVkaWE7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBtYXRjaFF1ZXJ5KG1lZGlhUXVlcnksIHZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlUXVlcnkobWVkaWFRdWVyeSkuc29tZShmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnZlcnNlID0gcXVlcnkuaW52ZXJzZSwgdHlwZU1hdGNoID0gXCJhbGxcIiA9PT0gcXVlcnkudHlwZSB8fCB2YWx1ZXMudHlwZSA9PT0gcXVlcnkudHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZU1hdGNoICYmIGludmVyc2UgfHwgIXR5cGVNYXRjaCAmJiAhaW52ZXJzZSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIHZhciBleHByZXNzaW9uc01hdGNoID0gcXVlcnkuZXhwcmVzc2lvbnMuZXZlcnkoZnVuY3Rpb24oZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmVhdHVyZSA9IGV4cHJlc3Npb24uZmVhdHVyZSwgbW9kaWZpZXIgPSBleHByZXNzaW9uLm1vZGlmaWVyLCBleHBWYWx1ZSA9IGV4cHJlc3Npb24udmFsdWUsIHZhbHVlID0gdmFsdWVzW2ZlYXR1cmVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJvcmllbnRhdGlvblwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzY2FuXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZXhwVmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ3aWR0aFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoZWlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGV2aWNlLXdpZHRoXCI6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRldmljZS1oZWlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cFZhbHVlID0gdG9QeChleHBWYWx1ZSksIHZhbHVlID0gdG9QeCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZXNvbHV0aW9uXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBWYWx1ZSA9IHRvRHBpKGV4cFZhbHVlKSwgdmFsdWUgPSB0b0RwaSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhc3BlY3QtcmF0aW9cIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGV2aWNlLWFzcGVjdC1yYXRpb1wiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZXZpY2UtcGl4ZWwtcmF0aW9cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cFZhbHVlID0gdG9EZWNpbWFsKGV4cFZhbHVlKSwgdmFsdWUgPSB0b0RlY2ltYWwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZ3JpZFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2xvclwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2xvci1pbmRleFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtb25vY2hyb21lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBWYWx1ZSA9IHBhcnNlSW50KGV4cFZhbHVlLCAxMCkgfHwgMSwgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSwgMTApIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RpZmllcikge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtaW5cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA+PSBleHBWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA8PSBleHBWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IGV4cFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb25zTWF0Y2ggJiYgIWludmVyc2UgfHwgIWV4cHJlc3Npb25zTWF0Y2ggJiYgaW52ZXJzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlUXVlcnkobWVkaWFRdWVyeSkge1xuICAgICAgICAgICAgcmV0dXJuIG1lZGlhUXVlcnkuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkudHJpbSgpO1xuICAgICAgICAgICAgICAgIHZhciBjYXB0dXJlcyA9IHF1ZXJ5Lm1hdGNoKFJFX01FRElBX1FVRVJZKSwgbW9kaWZpZXIgPSBjYXB0dXJlc1sxXSwgdHlwZSA9IGNhcHR1cmVzWzJdLCBleHByZXNzaW9ucyA9IGNhcHR1cmVzWzNdIHx8IFwiXCIsIHBhcnNlZCA9IHt9O1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQuaW52ZXJzZSA9ICEhbW9kaWZpZXIgJiYgXCJub3RcIiA9PT0gbW9kaWZpZXIudG9Mb3dlckNhc2UoKSwgcGFyc2VkLnR5cGUgPSB0eXBlID8gdHlwZS50b0xvd2VyQ2FzZSgpIDogXCJhbGxcIiwgXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucy5tYXRjaCgvXFwoW15cXCldK1xcKS9nKSB8fCBbXSwgcGFyc2VkLmV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnMubWFwKGZ1bmN0aW9uKGV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcHR1cmVzID0gZXhwcmVzc2lvbi5tYXRjaChSRV9NUV9FWFBSRVNTSU9OKSwgZmVhdHVyZSA9IGNhcHR1cmVzWzFdLnRvTG93ZXJDYXNlKCkubWF0Y2goUkVfTVFfRkVBVFVSRSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcjogZmVhdHVyZVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGZlYXR1cmVbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2FwdHVyZXNbMl1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KSwgcGFyc2VkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdG9EZWNpbWFsKHJhdGlvKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVycywgZGVjaW1hbCA9IE51bWJlcihyYXRpbyk7XG4gICAgICAgICAgICByZXR1cm4gZGVjaW1hbCB8fCAobnVtYmVycyA9IHJhdGlvLm1hdGNoKC9eKFxcZCspXFxzKlxcL1xccyooXFxkKykkLyksIGRlY2ltYWwgPSBudW1iZXJzWzFdIC8gbnVtYmVyc1syXSksIFxuICAgICAgICAgICAgZGVjaW1hbDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0b0RwaShyZXNvbHV0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KHJlc29sdXRpb24pO1xuICAgICAgICAgICAgc3dpdGNoIChTdHJpbmcocmVzb2x1dGlvbikubWF0Y2goUkVfUkVTT0xVVElPTl9VTklUKVsxXSkge1xuICAgICAgICAgICAgICBjYXNlIFwiZHBjbVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAvIDIuNTQ7XG5cbiAgICAgICAgICAgICAgY2FzZSBcImRwcHhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gOTYgKiB2YWx1ZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0b1B4KGxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdChsZW5ndGgpO1xuICAgICAgICAgICAgc3dpdGNoIChTdHJpbmcobGVuZ3RoKS5tYXRjaChSRV9MRU5HVEhfVU5JVClbMV0pIHtcbiAgICAgICAgICAgICAgY2FzZSBcImVtXCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJyZW1cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTYgKiB2YWx1ZTtcblxuICAgICAgICAgICAgICBjYXNlIFwiY21cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gOTYgKiB2YWx1ZSAvIDIuNTQ7XG5cbiAgICAgICAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDk2ICogdmFsdWUgLyAyLjU0IC8gMTA7XG5cbiAgICAgICAgICAgICAgY2FzZSBcImluXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDk2ICogdmFsdWU7XG5cbiAgICAgICAgICAgICAgY2FzZSBcInB0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDcyICogdmFsdWU7XG5cbiAgICAgICAgICAgICAgY2FzZSBcInBjXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDcyICogdmFsdWUgLyAxMjtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLm1hdGNoID0gbWF0Y2hRdWVyeSwgZXhwb3J0cy5wYXJzZSA9IHBhcnNlUXVlcnk7XG4gICAgICAgIHZhciBSRV9NRURJQV9RVUVSWSA9IC8oPzoob25seXxub3QpP1xccyooW15cXHNcXChcXCldKykoPzpcXHMqYW5kKT9cXHMqKT8oLispPy9pLCBSRV9NUV9FWFBSRVNTSU9OID0gL1xcKFxccyooW15cXHNcXDpcXCldKylcXHMqKD86XFw6XFxzKihbXlxcc1xcKV0rKSk/XFxzKlxcKS8sIFJFX01RX0ZFQVRVUkUgPSAvXig/OihtaW58bWF4KS0pPyguKykvLCBSRV9MRU5HVEhfVU5JVCA9IC8oZW18cmVtfHB4fGNtfG1tfGlufHB0fHBjKT8kLywgUkVfUkVTT0xVVElPTl9VTklUID0gLyhkcGl8ZHBjbXxkcHB4KT8kLztcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIHNoYWxsb3dFcXVhbE9iamVjdHMob2JqQSwgb2JqQikge1xuICAgICAgICAgICAgaWYgKG9iakEgPT09IG9iakIpIHJldHVybiAhMDtcbiAgICAgICAgICAgIGlmICghb2JqQSB8fCAhb2JqQikgcmV0dXJuICExO1xuICAgICAgICAgICAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMob2JqQSksIGJLZXlzID0gT2JqZWN0LmtleXMob2JqQiksIGxlbiA9IGFLZXlzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChiS2V5cy5sZW5ndGggIT09IGxlbikgcmV0dXJuICExO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBhS2V5c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAob2JqQVtrZXldICE9PSBvYmpCW2tleV0gfHwgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXkpKSByZXR1cm4gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBzaGFsbG93RXF1YWxPYmplY3RzO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgICAgIH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgICAgICAgICAgICAgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSBpbiBvYmogPyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogITBcbiAgICAgICAgICAgIH0pIDogb2JqW2tleV0gPSB2YWx1ZSwgb2JqO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMiksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fKSwgc3RyaW5nT3JOdW1iZXIgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5vbmVPZlR5cGUoWyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm51bWJlciBdKSwgbWF0Y2hlcnMgPSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbjogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEub25lT2YoWyBcInBvcnRyYWl0XCIsIFwibGFuZHNjYXBlXCIgXSksXG4gICAgICAgICAgICBzY2FuOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5vbmVPZihbIFwicHJvZ3Jlc3NpdmVcIiwgXCJpbnRlcmxhY2VcIiBdKSxcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsXG4gICAgICAgICAgICBkZXZpY2VBc3BlY3RSYXRpbzogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuc3RyaW5nLFxuICAgICAgICAgICAgaGVpZ2h0OiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIGRldmljZUhlaWdodDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICB3aWR0aDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBkZXZpY2VXaWR0aDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBjb2xvcjogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIGNvbG9ySW5kZXg6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBtb25vY2hyb21lOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgcmVzb2x1dGlvbjogc3RyaW5nT3JOdW1iZXJcbiAgICAgICAgfSwgZmVhdHVyZXMgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIG1pbkFzcGVjdFJhdGlvOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsXG4gICAgICAgICAgICBtYXhBc3BlY3RSYXRpbzogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuc3RyaW5nLFxuICAgICAgICAgICAgbWluRGV2aWNlQXNwZWN0UmF0aW86IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLnN0cmluZyxcbiAgICAgICAgICAgIG1heERldmljZUFzcGVjdFJhdGlvOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIG1pbkRldmljZUhlaWdodDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBtYXhEZXZpY2VIZWlnaHQ6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWluV2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWF4V2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWluRGV2aWNlV2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWF4RGV2aWNlV2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWluQ29sb3I6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICAgICAgICAgIG1heENvbG9yOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtaW5Db2xvckluZGV4OiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtYXhDb2xvckluZGV4OiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtaW5Nb25vY2hyb21lOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtYXhNb25vY2hyb21lOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtaW5SZXNvbHV0aW9uOiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIG1heFJlc29sdXRpb246IHN0cmluZ09yTnVtYmVyXG4gICAgICAgIH0sIG1hdGNoZXJzKSwgdHlwZXMgPSB7XG4gICAgICAgICAgICBhbGw6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBncmlkOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgYXVyYWw6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBicmFpbGxlOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgaGFuZGhlbGQ6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBwcmludDogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIHByb2plY3Rpb246IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBzY3JlZW46IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICB0dHk6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICB0djogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIGVtYm9zc2VkOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sXG4gICAgICAgIH0sIGFsbCA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdHlwZXMpLCBmZWF0dXJlcyk7XG4gICAgICAgIG1hdGNoZXJzLnR5cGUgPSBPYmplY3Qua2V5cyh0eXBlcyksIF9fd2VicGFja19leHBvcnRzX18uYSA9IHtcbiAgICAgICAgICAgIGFsbDogYWxsLFxuICAgICAgICAgICAgdHlwZXM6IHR5cGVzLFxuICAgICAgICAgICAgbWF0Y2hlcnM6IG1hdGNoZXJzLFxuICAgICAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzXG4gICAgICAgIH07XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIHZhciBSZWFjdElzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KShSZWFjdElzLmlzRWxlbWVudCwgITApO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgIWZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdHlwZSB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHR5cGUgfHwgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgXCJvYmplY3RcIiA9PSB0eXBlb2YgdHlwZSAmJiBudWxsICE9PSB0eXBlICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBvYmplY3QgJiYgbnVsbCAhPT0gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSB8fCAoaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSAhMCwgXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS5cIikpLCBcbiAgICAgICAgICAgICAgICBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBvYmplY3QgJiYgbnVsbCAhPT0gb2JqZWN0ICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhc1N5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5mb3IsIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpIDogNjAxMDMsIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKSA6IDYwMTA2LCBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpIDogNjAxMDcsIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIikgOiA2MDEwOCwgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKSA6IDYwMTE0LCBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpIDogNjAxMDksIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpIDogNjAxMTAsIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpIDogNjAxMTEsIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKSA6IDYwMTExLCBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpIDogNjAxMTIsIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIikgOiA2MDExMywgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIikgOiA2MDEyMCwgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikgOiA2MDExNSwgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmxhenlcIikgOiA2MDExNiwgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5ibG9ja1wiKSA6IDYwMTIxLCBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmZ1bmRhbWVudGFsXCIpIDogNjAxMTcsIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnJlc3BvbmRlclwiKSA6IDYwMTE4LCBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnNjb3BlXCIpIDogNjAxMTksIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRSwgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSwgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFLCBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFLCBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFLCBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSwgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFLCBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFLCBNZW1vID0gUkVBQ1RfTUVNT19UWVBFLCBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRSwgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFLCBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSwgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFLCBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9ICExO1xuICAgICAgICAgICAgZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGUsIGV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZSwgZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXIsIFxuICAgICAgICAgICAgZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXIsIGV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQsIGV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWYsIFxuICAgICAgICAgICAgZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50LCBleHBvcnRzLkxhenkgPSBMYXp5LCBleHBvcnRzLk1lbW8gPSBNZW1vLCBleHBvcnRzLlBvcnRhbCA9IFBvcnRhbCwgXG4gICAgICAgICAgICBleHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXIsIGV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGUsIGV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZSwgXG4gICAgICAgICAgICBleHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGUsIGV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGUsIFxuICAgICAgICAgICAgZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyLCBleHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXIsIFxuICAgICAgICAgICAgZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQsIGV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmLCBleHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50LCBcbiAgICAgICAgICAgIGV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5LCBleHBvcnRzLmlzTWVtbyA9IGlzTWVtbywgZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsLCBleHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyLCBcbiAgICAgICAgICAgIGV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlLCBleHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlLCBleHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSwgXG4gICAgICAgICAgICBleHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgICAgICAgfSgpO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBSZWFjdElzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSwgYXNzaWduID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSksIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KSwgY2hlY2tQcm9wVHlwZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KSwgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpLCBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiV2FybmluZzogXCIgKyB0ZXh0O1xuICAgICAgICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9LCBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGl0ZXJhdG9yRm4pIHJldHVybiBpdGVyYXRvckZuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4ID09PSB5ID8gMCAhPT0geCB8fCAxIC8geCA9PSAxIC8geSA6IHggIT09IHggJiYgeSAhPT0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UsIHRoaXMuc3RhY2sgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUywgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lLCBcbiAgICAgICAgICAgICAgICAgICAgc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFwiQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiBSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVyci5uYW1lID0gXCJJbnZhcmlhbnQgVmlvbGF0aW9uXCIsIGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBjb25zb2xlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArIFwiOlwiICsgcHJvcE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJiBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDMgJiYgKHByaW50V2FybmluZyhcIllvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uIGZ1bmN0aW9uIGZvciB0aGUgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIHByb3Agb24gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiBZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzIGxpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyBmb3IgZGV0YWlscy5cIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9ICEwLCBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCA9PSBwcm9wc1twcm9wTmFtZV0gPyBpc1JlcXVpcmVkID8gbmV3IFByb3BUeXBlRXJyb3IobnVsbCA9PT0gcHJvcHNbcHJvcE5hbWVdID8gXCJUaGUgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuXCIgOiBcIlRoZSBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLlwiKSA6IG51bGwgOiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fSwgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwLCBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgITEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCAhMCksIGNoYWluZWRDaGVja1R5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSAhPT0gZXhwZWN0ZWRUeXBlKSByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGBcIiArIGV4cGVjdGVkVHlwZSArIFwiYC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHR5cGVDaGVja2VyKSByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJQcm9wZXJ0eSBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgY29tcG9uZW50IGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBhbiBhcnJheS5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArIFwiW1wiICsgaSArIFwiXVwiLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSkgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgaW5zdGFuY2Ugb2YgYFwiICsgZXhwZWN0ZWRDbGFzc05hbWUgKyBcImAuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXSwgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzeW1ib2xcIiA9PT0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHZhbHVlIGBcIiArIFN0cmluZyhwcm9wVmFsdWUpICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIG9uZSBvZiBcIiArIHZhbHVlc1N0cmluZyArIFwiLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpID8gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIDogKHByaW50V2FybmluZyhhcmd1bWVudHMubGVuZ3RoID4gMSA/IFwiSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgXCIgKyBhcmd1bWVudHMubGVuZ3RoICsgXCIgYXJndW1lbnRzLiBBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS5cIiA6IFwiSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuXCIpLCBcbiAgICAgICAgICAgICAgICBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdHlwZUNoZWNrZXIpIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIlByb3BlcnR5IGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiBjb21wb25lbnQgYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdLCBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiICE9PSBwcm9wVHlwZSkgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgcHJvcFR5cGUgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgXCIuXCIgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSAoMCwgYXJyYXlPZlR5cGVDaGVja2Vyc1tpXSkocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSByZXR1cm4gcHJpbnRXYXJuaW5nKFwiSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LlwiKSwgXG4gICAgICAgICAgICAgICAgZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBjaGVja2VyKSByZXR1cm4gcHJpbnRXYXJuaW5nKFwiSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0IHJlY2VpdmVkIFwiICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgXCIgYXQgaW5kZXggXCIgKyBpICsgXCIuXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdLCBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiICE9PSBwcm9wVHlwZSkgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgcHJvcFR5cGUgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYG9iamVjdGAuXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyBcIi5cIiArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV0sIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT09IHByb3BUeXBlKSByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBwcm9wVHlwZSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBgb2JqZWN0YC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoZWNrZXIpIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBrZXkgYFwiICsga2V5ICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAuXFxuQmFkIG9iamVjdDogXCIgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsIFwiICBcIikgKyBcIlxcblZhbGlkIGtleXM6IFwiICsgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsIFwiICBcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArIFwiLlwiICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudWxsID09PSBwcm9wVmFsdWUgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVyYXRvckZuKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGVwLCBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKSBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZm9yICg7IShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkgJiYgIWlzTm9kZShlbnRyeVsxXSkpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3ltYm9sXCIgPT09IHByb3BUeXBlIHx8ICEhcHJvcFZhbHVlICYmIChcIlN5bWJvbFwiID09PSBwcm9wVmFsdWVbXCJAQHRvU3RyaW5nVGFnXCJdIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkgPyBcImFycmF5XCIgOiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHAgPyBcIm9iamVjdFwiIDogaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkgPyBcInN5bWJvbFwiIDogcHJvcFR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBwcm9wVmFsdWUgfHwgbnVsbCA9PT0gcHJvcFZhbHVlKSByZXR1cm4gXCJcIiArIHByb3BWYWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09PSBwcm9wVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIFwiZGF0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gXCJyZWdleHBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYW4gXCIgKyB0eXBlO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZWdleHBcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYSBcIiArIHR5cGU7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yICYmIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID8gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgOiBBTk9OWU1PVVM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yLCBGQVVYX0lURVJBVE9SX1NZTUJPTCA9IFwiQEBpdGVyYXRvclwiLCBBTk9OWU1PVVMgPSBcIjw8YW5vbnltb3VzPj5cIiwgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgICAgICAgICAgICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKFwiYXJyYXlcIiksXG4gICAgICAgICAgICAgICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoXCJib29sZWFuXCIpLFxuICAgICAgICAgICAgICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKFwiZnVuY3Rpb25cIiksXG4gICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihcIm51bWJlclwiKSxcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKFwib2JqZWN0XCIpLFxuICAgICAgICAgICAgICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoXCJzdHJpbmdcIiksXG4gICAgICAgICAgICAgICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihcInN5bWJvbFwiKSxcbiAgICAgICAgICAgICAgICBhbnk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gICAgICAgICAgICAgICAgfSgpLFxuICAgICAgICAgICAgICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgICAgICB9KCksXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBnZXRQcm9wVHlwZShwcm9wVmFsdWUpICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSgpLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgICAgICAgICAgICAgbm9kZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzTm9kZShwcm9wc1twcm9wTmFtZV0pID8gbnVsbCA6IG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgICAgIH0oKSxcbiAgICAgICAgICAgICAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgICAgICAgICAgICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZSwgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcywgXG4gICAgICAgICAgICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlLCBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcywgXG4gICAgICAgICAgICBSZWFjdFByb3BUeXBlcztcbiAgICAgICAgfTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuICAgICAgICAgICAgaWYgKG51bGwgPT09IHZhbCB8fCB2b2lkIDAgPT09IHZhbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdCh2YWwpO1xuICAgICAgICB9XG4gICAgICAgIC8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuICAgICAgICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scywgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LCBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3QuYXNzaWduKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3QxID0gbmV3IFN0cmluZyhcImFiY1wiKTtcbiAgICAgICAgICAgICAgICBpZiAodGVzdDFbNV0gPSBcImRlXCIsIFwiNVwiID09PSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0pIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0ZXN0MiA9IHt9LCBpID0gMDsgaSA8IDEwOyBpKyspIHRlc3QyW1wiX1wiICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuICAgICAgICAgICAgICAgIGlmIChcIjAxMjM0NTY3ODlcIiAhPT0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0MltuXTtcbiAgICAgICAgICAgICAgICB9KS5qb2luKFwiXCIpKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3QzID0ge307XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIi5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKGxldHRlcikge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuICAgICAgICAgICAgICAgIH0pLCBcImFiY2RlZmdoaWprbG1ub3BxcnN0XCIgPT09IE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uKHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBmcm9tLCBzeW1ib2xzLCB0byA9IHRvT2JqZWN0KHRhcmdldCksIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICAgICAgZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBmcm9tKSBoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkgJiYgKHRvW2tleV0gPSBmcm9tW2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSBwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkgJiYgKHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9O1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICAgICAgICAgICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCBcIlJlYWN0IGNsYXNzXCIpICsgXCI6IFwiICsgbG9jYXRpb24gKyBcIiB0eXBlIGBcIiArIHR5cGVTcGVjTmFtZSArIFwiYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgXCIgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyBcImAuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyLm5hbWUgPSBcIkludmFyaWFudCBWaW9sYXRpb25cIiwgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHByaW50V2FybmluZygoY29tcG9uZW50TmFtZSB8fCBcIlJlYWN0IGNsYXNzXCIpICsgXCI6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgdHlwZVNwZWNOYW1lICsgXCJgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgXCIgKyB0eXBlb2YgZXJyb3IgKyBcIi4gWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCBzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuXCIpLCBcbiAgICAgICAgICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBwcmludFdhcm5pbmcoXCJGYWlsZWQgXCIgKyBsb2NhdGlvbiArIFwiIHR5cGU6IFwiICsgZXJyb3IubWVzc2FnZSArIChudWxsICE9IHN0YWNrID8gc3RhY2sgOiBcIlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9LCBSZWFjdFByb3BUeXBlc1NlY3JldCA9IF9fd2VicGFja19yZXF1aXJlX18oNSksIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9LCBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4gICAgICAgIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJXYXJuaW5nOiBcIiArIHRleHQ7XG4gICAgICAgICAgICBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH0sIGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgICAgICAgfSwgbW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBzb3VyY2UpIHJldHVybiB7fTtcbiAgICAgICAgICAgIHZhciBrZXksIGksIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXSwgZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDAgfHwgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSAmJiAodGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICAgICAgICAgIGlmIChudWxsID09IHNvdXJjZSkgcmV0dXJuIHt9O1xuICAgICAgICAgICAgdmFyIGtleSwgaSwgdGFyZ2V0ID0ge30sIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIGtleSA9IHNvdXJjZUtleXNbaV0sIGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwIHx8ICh0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gTWVkaWFRdWVyeShfcmVmKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLCBkZXZpY2UgPSBfcmVmLmRldmljZSwgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLCBzZXR0aW5ncyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbIFwiY2hpbGRyZW5cIiwgXCJkZXZpY2VcIiwgXCJvbkNoYW5nZVwiIF0pLCBtYXRjaGVzID0gT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXNlTWVkaWFRdWVyeV9fLmEpKHNldHRpbmdzLCBkZXZpY2UsIG9uQ2hhbmdlKTtcbiAgICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGNoaWxkcmVuID8gY2hpbGRyZW4obWF0Y2hlcykgOiBtYXRjaGVzID8gY2hpbGRyZW4gOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIF9fd2VicGFja19leHBvcnRzX18uYSA9IE1lZGlhUXVlcnk7XG4gICAgICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3VzZU1lZGlhUXVlcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4gICAgfSBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtcmVzcG9uc2l2ZS5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBUb29sdGlwLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBRdWVzdGlvbkNpcmNsZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBGaWVsZCBhcyBGaWVsZE9vdWkgfSBmcm9tIFwib291aVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWVsZCh7XG4gIG9vdWksXG4gIGNoaWxkcmVuLFxuICBsYXlvdXQgPSBcImhvcml6b250YWxcIixcbiAgdmFsdWVQcm9wTmFtZSxcbn06IHtcbiAgb291aTogRmllbGRPb3VpO1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbGF5b3V0PzogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG4gIHZhbHVlUHJvcE5hbWU/OiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IHsgaWQsIGxhYmVsLCB0b29sdGlwLCBub2xhYmVsIH0gPSBvb3VpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGxhYmVsICYmIGxhYmVsLmxlbmd0aCA+IDEgPyBsYWJlbCArIFwiIDpcIiA6IFwiIFwiO1xuXG4gIGNvbnN0IGZvcm1JdGVtID0gKCkgPT4gKFxuICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwibWItMFwiIG5hbWU9e2lkfSB2YWx1ZVByb3BOYW1lPXt2YWx1ZVByb3BOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Zvcm0uSXRlbT5cbiAgKTtcblxuICBjb25zdCBob3Jpem9udGFsTW9kZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdyBhbGlnbj1cIm1pZGRsZVwiIGNsYXNzTmFtZT1cInBiLTEgcHQtMVwiPlxuICAgICAgICB7IW5vbGFiZWwgPyAoXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC0yXCIgZmxleD1cIjdyZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAge2xhYmVsV2l0aFRvb2x0aXAobm9sYWJlbCA/IFwiXCIgOiBsYWJlbFRleHQsIHRvb2x0aXApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8Q29sIGZsZXg9XCJhdXRvXCI+e2Zvcm1JdGVtKCl9PC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHZlcnRpY2FsTW9kZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2xhYmVsV2l0aFRvb2x0aXAobm9sYWJlbCA/IFwiXCIgOiBsYWJlbFRleHQsIHRvb2x0aXApfVxuICAgICAgICB7Zm9ybUl0ZW0oKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgPyBob3Jpem9udGFsTW9kZSgpIDogdmVydGljYWxNb2RlKCk7XG59XG5cbmNvbnN0IGxhYmVsV2l0aFRvb2x0aXAgPSAobGFiZWw6IHN0cmluZywgdG9vbHRpcD86IHN0cmluZykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcGItMVwiPlxuICAgICAge3Rvb2x0aXAgJiYgKFxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17dG9vbHRpcH0+XG4gICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlT3V0bGluZWQgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWJsdWUtNDAwIHByLTFcIiAvPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICApfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yaWdodCBwci0yXCI+e2xhYmVsfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IGxhYmVsV2l0aFRvb2x0aXAgfTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFN0cmluZ3MgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQgdHlwZSBMb2NhbGVzQ29udGV4dFR5cGUgPSB7XG4gIGdldFN0cmluZzogKGtleTogc3RyaW5nKSA9PiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgTG9jYWxlc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PExvY2FsZXNDb250ZXh0VHlwZSB8IG51bGw+KFxuICBudWxsXG4pO1xuXG5jb25zdCBMb2NhbGVzUHJvdmlkZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgc3RyaW5nczogc3RyaW5nc1Byb3AsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHN0cmluZ3M6IFN0cmluZ3M7XG59KTogYW55ID0+IHtcbiAgY29uc3QgW3N0cmluZ3MsIHNldFN0cmluZ3NdID0gdXNlU3RhdGU8U3RyaW5ncz4oe30pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RyaW5ncyhzdHJpbmdzUHJvcCk7XG4gIH0sIFtzdHJpbmdzUHJvcF0pO1xuXG4gIGNvbnN0IGdldFN0cmluZyA9IChrZXk6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBnZXRMb2NhbGl6ZWRTdHJpbmcoa2V5LCBzdHJpbmdzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMb2NhbGVzQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZ2V0U3RyaW5nLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Mb2NhbGVzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsZXNQcm92aWRlcjtcblxuZXhwb3J0IGNvbnN0IGdldExvY2FsaXplZFN0cmluZyA9IChrZXk6IHN0cmluZywgc3RyaW5nczogU3RyaW5ncykgPT4ge1xuICBjb25zdCBsb2NhbGl6ZWQgPSBzdHJpbmdzW2tleV07XG4gIGlmIChsb2NhbGl6ZWQpIHJldHVybiBsb2NhbGl6ZWQ7XG4gIGVsc2UgcmV0dXJuIGtleTtcbn07XG4iLCJpbXBvcnQgeyBXaWRnZXQsIEZpZWxkLCBMYWJlbCwgQnV0dG9uLCBUZXh0IH0gZnJvbSBcIm9vdWlcIjtcblxuY29uc3QgY2xvbmUgPSBmdW5jdGlvbiBjbG9uZTxUPihpbnN0YW5jZTogVCk6IFQge1xuICBjb25zdCBjb3B5ID0gbmV3ICgoaW5zdGFuY2UgYXMgYW55KS5jb25zdHJ1Y3RvciBhcyB7IG5ldyAoKTogVCB9KSgpO1xuICBPYmplY3QuYXNzaWduKGNvcHksIGluc3RhbmNlKTtcbiAgcmV0dXJuIGNvcHk7XG59O1xuXG5jb25zdCBnZXRTcGFuU3R5bGVGb3JJdGVtID0gKHtcbiAgaXRlbSxcbiAgcmVzcG9uc2l2ZUJlaGF2aW91cixcbn06IHtcbiAgaXRlbTogV2lkZ2V0O1xuICByZXNwb25zaXZlQmVoYXZpb3VyOiBib29sZWFuO1xufSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGdyaWRDb2x1bW5TdGFydDogXCJzcGFuIFwiICsgKHJlc3BvbnNpdmVCZWhhdmlvdXIgPyAxIDogaXRlbS5jb2xzcGFuKSxcbiAgfTtcbn07XG5cbmNvbnN0IGV4cGFuZExhYmVsc0luRmllbGRzID0gKHtcbiAgcm93LFxuICBtdXN0RmlsbFdpdGhFbXB0aWVzLFxuICBudW1iZXJPZkNvbHVtbnMsXG59OiB7XG4gIHJvdzogYW55O1xuICBtdXN0RmlsbFdpdGhFbXB0aWVzOiBib29sZWFuO1xuICBudW1iZXJPZkNvbHVtbnM6IG51bWJlcjtcbn0pID0+IHtcbiAgY29uc3Qgcm93V2l0aEV4cGFuZGVkTGFiZWxzOiBhbnkgPSBbXTtcbiAgbGV0IHRvdGFsQ29sU3BhbiA9IDA7XG5cbiAgcm93Lm1hcCgoaXRlbTogV2lkZ2V0LCBjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKFxuICAgICAgaXRlbSBpbnN0YW5jZW9mIEZpZWxkICYmXG4gICAgICAhKGl0ZW0gaW5zdGFuY2VvZiBCdXR0b24pICYmXG4gICAgICAhKGl0ZW0gaW5zdGFuY2VvZiBMYWJlbClcbiAgICApIHtcbiAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgVGV4dCAmJiBpdGVtLm5vbGFiZWwpIHtcbiAgICAgICAgcm93V2l0aEV4cGFuZGVkTGFiZWxzLnB1c2goaXRlbSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdG90YWxDb2xTcGFuICs9IDE7XG4gICAgICB0b3RhbENvbFNwYW4gKz0gaXRlbS5jb2xzcGFuIC0gMTtcblxuICAgICAgY29uc3QgbGFiZWwgPSBuZXcgTGFiZWwoeyBzdHJpbmc6IGl0ZW0ubGFiZWwgfSk7XG4gICAgICBsYWJlbC5hbGlnbiA9IG11c3RGaWxsV2l0aEVtcHRpZXMgPyBcImxlZnRcIiA6IFwicmlnaHRcIjtcbiAgICAgIHJvd1dpdGhFeHBhbmRlZExhYmVscy5wdXNoKGxhYmVsKTtcblxuICAgICAgY29uc3QgbmV3SXRlbSA9IGNsb25lKGl0ZW0pO1xuICAgICAgbmV3SXRlbS5fY29sc3BhbiA9IGl0ZW0uX2NvbHNwYW4gLSAxO1xuICAgICAgbmV3SXRlbS5fbm9sYWJlbCA9IHRydWU7XG4gICAgICByb3dXaXRoRXhwYW5kZWRMYWJlbHMucHVzaChuZXdJdGVtKTtcblxuICAgICAgaWYgKFxuICAgICAgICBjb2x1bW5JbmRleCArIDEgPT09IHJvdy5sZW5ndGggJiZcbiAgICAgICAgdG90YWxDb2xTcGFuIDwgbnVtYmVyT2ZDb2x1bW5zICYmXG4gICAgICAgICFtdXN0RmlsbFdpdGhFbXB0aWVzXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZ2Fwc1RvRmlsbCA9IG51bWJlck9mQ29sdW1ucyAtIHRvdGFsQ29sU3BhbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYXBzVG9GaWxsOyBpICs9IDEpIHtcbiAgICAgICAgICByb3dXaXRoRXhwYW5kZWRMYWJlbHMucHVzaChuZXcgTGFiZWwoeyBzdHJpbmc6IFwiXCIgfSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdGFsQ29sU3BhbiArPSBpdGVtLmNvbHNwYW47XG4gICAgICByb3dXaXRoRXhwYW5kZWRMYWJlbHMucHVzaChpdGVtKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByb3dXaXRoRXhwYW5kZWRMYWJlbHM7XG59O1xuXG5jb25zdCBnZXRUZW1wbGF0ZUNvbHVtbnMgPSAoY29sdW1uczogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IG9kZCA9IFwiMWZyXCI7XG4gIGNvbnN0IGV2ZW4gPSBcImF1dG9cIjtcbiAgbGV0IHRlbXBsYXRlQ29sdW1ucyA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uczsgaSsrKSB7XG4gICAgdGVtcGxhdGVDb2x1bW5zICs9IGkgJSAyID8gb2RkIDogZXZlbjtcbiAgICBpZiAoaSA8IGNvbHVtbnMpIHtcbiAgICAgIHRlbXBsYXRlQ29sdW1ucyArPSBcIiBcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlQ29sdW1ucztcbn07XG5cbmV4cG9ydCB7IGdldFRlbXBsYXRlQ29sdW1ucywgZXhwYW5kTGFiZWxzSW5GaWVsZHMsIGdldFNwYW5TdHlsZUZvckl0ZW0gfTtcbiIsImNvbnN0IGNvbnZlcnRCb29sZWFuUGFyYW1JZk5lZWRlZCA9ICh2YWx1ZTogYW55KSA9PiB7XG4gIGlmICgodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlID09PSBcInRydWVcIikgfHwgdmFsdWUgPT09IFwiZmFsc2VcIikge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gXCJ0cnVlXCI7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuY29uc3QgZ2V0UGFyYW1zRm9yRmllbGRzID0gKHZhbHVlczogYW55LCBmaWVsZHM6IGFueSkgPT4ge1xuICBjb25zdCBmaWx0ZXJlZFZhbHVlcyA9IHJlbW92ZVVuZGVmaW5lZEZpZWxkcyh2YWx1ZXMpO1xuICBjb25zdCBncm91cGVkRGF0ZVRpbWUgPSBncm91cERhdGVUaW1lVmFsdWVzSWZOZWVkZWQoZmlsdGVyZWRWYWx1ZXMpO1xuICBjb25zdCBncm91cGVkVmFsdWVzID0gdW5ncm91cERhdGVWYWx1ZXNJZk5lZWRlZChncm91cGVkRGF0ZVRpbWUsIGZpZWxkcyk7XG5cbiAgY29uc3QgcGFyYW1zID0gW1xuICAgIC4uLk9iamVjdC5rZXlzKGdyb3VwZWRWYWx1ZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gZ2V0UGFyYW1Gb3JGaWVsZChrZXksIGdyb3VwZWRWYWx1ZXNba2V5XSwgZmllbGRzKTtcbiAgICB9KSxcbiAgXTtcblxuICAvLyBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIGluIGNhc2Ugb2YgZGF0ZXRpbWUgd2UgcmVjZWl2ZSBhbiBhcnJheSBvZiBhcnJheXNcbiAgcmV0dXJuIHBhcmFtcy5yZWR1Y2UoKGFjYywgY3VyVmFsKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VyVmFsWzBdKSkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoY3VyVmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5hY2MsIGN1clZhbF07XG4gIH0sIFtdKTtcbn07XG5cbmNvbnN0IGdldFBhcmFtRm9yRmllbGQgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGZpZWxkczogYW55KSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkS2V5ID0ga2V5LnNwbGl0KFwiI1wiKVswXTtcbiAgY29uc3QgdHlwZSA9IGZpZWxkc1tmaWx0ZXJlZEtleV0udHlwZTtcblxuICBpZiAoXG4gICAgdHlwZSA9PT0gXCJjaGFyXCIgfHxcbiAgICB0eXBlID09PSBcInRleHRcIiB8fFxuICAgIHR5cGUgPT09IFwibWFueTJvbmVcIiB8fFxuICAgIHR5cGUgPT09IFwibWFueTJtYW55XCIgfHxcbiAgICB0eXBlID09PSBcIm9uZTJtYW55XCJcbiAgKSB7XG4gICAgcmV0dXJuIFtrZXksIFwiaWxpa2VcIiwgdmFsdWVdO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGUgPT09IFwiZmxvYXRcIiB8fFxuICAgIHR5cGUgPT09IFwiaW50ZWdlclwiIHx8XG4gICAgdHlwZSA9PT0gXCJmbG9hdF90aW1lXCIgfHxcbiAgICB0eXBlID09PSBcInByb2dyZXNzYmFyXCJcbiAgKSB7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSBrZXkuaW5kZXhPZihcIiNmcm9tXCIpICE9PSAtMSA/IFwiPj1cIiA6IFwiPD1cIjtcbiAgICByZXR1cm4gW2ZpbHRlcmVkS2V5LCBvcGVyYXRvciwgdmFsdWVdO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZGF0ZVwiKSB7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSBrZXkuaW5kZXhPZihcIiNmcm9tXCIpICE9PSAtMSA/IFwiPj1cIiA6IFwiPD1cIjtcbiAgICByZXR1cm4gW2ZpbHRlcmVkS2V5LCBvcGVyYXRvciwgdmFsdWUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKV07XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJkYXRldGltZVwiKSB7XG4gICAgY29uc3QgZnJvbSA9IHZhbHVlWzBdO1xuICAgIGNvbnN0IHRvID0gdmFsdWVbMV07XG4gICAgcmV0dXJuIFtcbiAgICAgIFtmaWx0ZXJlZEtleSwgXCI+PVwiLCBmcm9tXSxcbiAgICAgIFtmaWx0ZXJlZEtleSwgXCI8PVwiLCB0b10sXG4gICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW2tleSwgXCI9XCIsIGNvbnZlcnRCb29sZWFuUGFyYW1JZk5lZWRlZCh2YWx1ZSldO1xuICB9XG59O1xuXG5jb25zdCBnZXREYXRldGltZURhdGVGaWVsZHMgPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlcykuZmlsdGVyKChrZXkpID0+IHtcbiAgICByZXR1cm4ga2V5LmluZGV4T2YoXCIjZGF0ZVwiKSAhPT0gLTE7XG4gIH0pO1xufTtcblxuY29uc3QgcmVtb3ZlRGF0ZVRpbWVTaW5nbGVGaWVsZHMgPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgY29uc3QgbmV3VmFsdWVzID0geyAuLi52YWx1ZXMgfTtcbiAgT2JqZWN0LmtleXMobmV3VmFsdWVzKS5mb3JFYWNoKFxuICAgIChrZXkpID0+XG4gICAgICAoa2V5LmluZGV4T2YoXCIjdGltZVwiKSAhPT0gLTEgfHwga2V5LmluZGV4T2YoXCIjZGF0ZVwiKSAhPT0gLTEpICYmXG4gICAgICBkZWxldGUgbmV3VmFsdWVzW2tleV1cbiAgKTtcbiAgcmV0dXJuIG5ld1ZhbHVlcztcbn07XG5cbmNvbnN0IGdyb3VwRGF0ZVRpbWVWYWx1ZXNJZk5lZWRlZCA9ICh2YWx1ZXM6IGFueSkgPT4ge1xuICBjb25zdCBuZXdWYWx1ZXM6IGFueSA9IHsgLi4ucmVtb3ZlRGF0ZVRpbWVTaW5nbGVGaWVsZHModmFsdWVzKSB9O1xuXG4gIGNvbnN0IGRhdGV0aW1lRGF0ZUZpZWxkcyA9IGdldERhdGV0aW1lRGF0ZUZpZWxkcyh2YWx1ZXMpO1xuXG4gIGRhdGV0aW1lRGF0ZUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGNvbnN0IGRhdGVQYWlyID0gdmFsdWVzW2ZpZWxkXTtcbiAgICBjb25zdCBiYXNlS2V5ID0gZmllbGQuc3BsaXQoXCIjXCIpWzBdO1xuICAgIGNvbnN0IHRpbWVLZXkgPSBiYXNlS2V5ICsgXCIjdGltZVwiO1xuICAgIGNvbnN0IHRpbWVQYWlyID0gdmFsdWVzW3RpbWVLZXldO1xuICAgIGNvbnN0IGRhdGVWYWx1ZUZyb20gPSBkYXRlUGFpclswXS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgIGNvbnN0IGRhdGVWYWx1ZVRvID0gZGF0ZVBhaXJbMV0uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICBjb25zdCB0aW1lVmFsdWVGcm9tID0gdGltZVBhaXJbMF0uZm9ybWF0KFwiSEg6bW1cIik7XG4gICAgY29uc3QgdGltZVZhbHVlVG8gPSB0aW1lUGFpclsxXS5mb3JtYXQoXCJISDptbVwiKTtcbiAgICBjb25zdCBmcm9tID0gZGF0ZVZhbHVlRnJvbSArIFwiIFwiICsgdGltZVZhbHVlRnJvbTtcbiAgICBjb25zdCB0byA9IGRhdGVWYWx1ZVRvICsgXCIgXCIgKyB0aW1lVmFsdWVUbztcbiAgICBuZXdWYWx1ZXNbYmFzZUtleSArIFwiI2RhdGV0aW1lXCJdID0gW2Zyb20sIHRvXTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld1ZhbHVlcztcbn07XG5cbmNvbnN0IHVuZ3JvdXBEYXRlVmFsdWVzSWZOZWVkZWQgPSAodmFsdWVzOiBhbnksIGZpZWxkczogYW55KSA9PiB7XG4gIGNvbnN0IGRhdGVGaWVsZHMgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgcmV0dXJuIGZpZWxkc1trZXldICYmIGZpZWxkc1trZXldLnR5cGUgPT09IFwiZGF0ZVwiO1xuICB9KTtcblxuICBsZXQgbmV3VmFsdWVzOiBhbnkgPSB7IC4uLnZhbHVlcyB9O1xuXG4gIGRhdGVGaWVsZHMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgZGVsZXRlIG5ld1ZhbHVlc1trZXldO1xuICAgIG5ld1ZhbHVlc1trZXkgKyBcIiNmcm9tXCJdID0gdmFsdWVzW2tleV1bMF07XG4gICAgbmV3VmFsdWVzW2tleSArIFwiI3RvXCJdID0gdmFsdWVzW2tleV1bMV07XG4gIH0pO1xuXG4gIHJldHVybiBuZXdWYWx1ZXM7XG59O1xuXG5jb25zdCByZW1vdmVVbmRlZmluZWRGaWVsZHMgPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgY29uc3QgbmV3VmFsdWVzID0geyAuLi52YWx1ZXMgfTtcbiAgT2JqZWN0LmtleXMobmV3VmFsdWVzKS5mb3JFYWNoKFxuICAgIChrZXkpID0+XG4gICAgICAobmV3VmFsdWVzW2tleV0gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBuZXdWYWx1ZXNba2V5XSA9PT0gbnVsbCB8fFxuICAgICAgICBuZXdWYWx1ZXNba2V5XSA9PT0gXCJcIikgJiZcbiAgICAgIGRlbGV0ZSBuZXdWYWx1ZXNba2V5XVxuICApO1xuICByZXR1cm4gbmV3VmFsdWVzO1xufTtcblxuZXhwb3J0IHtcbiAgcmVtb3ZlVW5kZWZpbmVkRmllbGRzLFxuICBncm91cERhdGVUaW1lVmFsdWVzSWZOZWVkZWQsXG4gIGdldFBhcmFtc0ZvckZpZWxkcyxcbn07XG4iLCJpbXBvcnQgeyBUcmVlIGFzIFRyZWVPb3VpLCBTZWxlY3Rpb24sIE1hbnkyb25lLCBCb29sZWFuIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IFRyZWVWaWV3LCBDb2x1bW4gfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5jb25zdCBnZXRUcmVlID0gKHRyZWVWaWV3OiBUcmVlVmlldyk6IFRyZWVPb3VpID0+IHtcbiAgY29uc3QgeG1sID0gdHJlZVZpZXcuYXJjaDtcbiAgY29uc3QgZmllbGRzID0gdHJlZVZpZXcuZmllbGRzO1xuICBjb25zdCB0cmVlID0gbmV3IFRyZWVPb3VpKGZpZWxkcyk7XG4gIHRyZWUucGFyc2UoeG1sKTtcbiAgcmV0dXJuIHRyZWU7XG59O1xuXG5jb25zdCBnZXRUYWJsZUNvbHVtbnMgPSAoXG4gIHRyZWU6IFRyZWVPb3VpLFxuICBib29sZWFuQ29tcG9uZW50OiBhbnlcbik6IEFycmF5PENvbHVtbj4gPT4ge1xuICBjb25zdCB0YWJsZUNvbHVtbnMgPSB0cmVlLmNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcbiAgICBjb25zdCB0eXBlID0gY29sdW1uLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgY29uc3Qga2V5ID0gY29sdW1uLmlkO1xuICAgIGNvbnN0IHJlbmRlciA9XG4gICAgICB0eXBlID09PSBcIkJvb2xlYW5cIlxuICAgICAgICA/IChib29sZWFuRmllbGQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBib29sZWFuQ29tcG9uZW50KGJvb2xlYW5GaWVsZCk7XG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiB7XG4gICAgICBrZXksXG4gICAgICBkYXRhSW5kZXg6IGtleSxcbiAgICAgIHRpdGxlOiBjb2x1bW4ubGFiZWwsXG4gICAgICB0eXBlLFxuICAgICAgcmVuZGVyLFxuICAgICAgc29ydGVyOiAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGFba2V5XSA8IGJba2V5XSkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoYVtrZXldID4gYltrZXldKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9LFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gdGFibGVDb2x1bW5zO1xufTtcblxuY29uc3QgZ2V0VGFibGVJdGVtcyA9ICh0cmVlT291aTogVHJlZU9vdWksIHJlc3VsdHM6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+ID0+IHtcbiAgY29uc3QgdGFibGVJdGVtcyA9IHJlc3VsdHMubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICBjb25zdCBwYXJzZWRJdGVtOiBhbnkgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhpdGVtKS5tYXAoKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gXCJpZFwiKSB7XG4gICAgICAgIHBhcnNlZEl0ZW1ba2V5XSA9IGl0ZW1ba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHdpZGdldCA9IHRyZWVPb3VpLmZpbmRCeUlkKGtleSk7XG5cbiAgICAgICAgaWYgKHdpZGdldCBpbnN0YW5jZW9mIFNlbGVjdGlvbikge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpZGdldDtcbiAgICAgICAgICBwYXJzZWRJdGVtW2tleV0gPSBzZWxlY3Rpb24uc2VsZWN0aW9uVmFsdWVzLmdldChpdGVtW2tleV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZGdldCBpbnN0YW5jZW9mIE1hbnkyb25lKSB7XG4gICAgICAgICAgcGFyc2VkSXRlbVtrZXldID0gaXRlbVtrZXldWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZGdldCBpbnN0YW5jZW9mIEJvb2xlYW4pIHtcbiAgICAgICAgICBwYXJzZWRJdGVtW2tleV0gPSBpdGVtW2tleV07XG4gICAgICAgIH0gZWxzZSBpZiAod2lkZ2V0KSB7XG4gICAgICAgICAgcGFyc2VkSXRlbVtrZXldID0gaXRlbVtrZXldID09PSBmYWxzZSA/IFwiXCIgOiBpdGVtW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyc2VkSXRlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhYmxlSXRlbXM7XG59O1xuXG5leHBvcnQgeyBnZXRUYWJsZUNvbHVtbnMsIGdldFRhYmxlSXRlbXMsIGdldFRyZWUgfTtcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9CdXR0b25cIjtcbmltcG9ydCB7IENoYXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvQ2hhclwiO1xuaW1wb3J0IHsgU2VsZWN0aW9uIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL1NlbGVjdGlvblwiO1xuaW1wb3J0IHsgQm9vbGVhbiB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9Cb29sZWFuXCI7XG5pbXBvcnQgeyBNYW55Mm9uZSB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9NYW55Mm9uZVwiO1xuaW1wb3J0IFRyZWUgZnJvbSBcIkAvd2lkZ2V0cy92aWV3cy9UcmVlXCI7XG5pbXBvcnQgeyBGbG9hdCB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9GbG9hdFwiO1xuaW1wb3J0IHsgSW50ZWdlciB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9JbnRlZ2VyXCI7XG5pbXBvcnQgR3JvdXAgZnJvbSBcIkAvd2lkZ2V0cy9jb250YWluZXJzL0dyb3VwXCI7XG5pbXBvcnQgTm90ZWJvb2sgZnJvbSBcIkAvd2lkZ2V0cy9jb250YWluZXJzL05vdGVib29rXCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiQC93aWRnZXRzL3ZpZXdzL0Zvcm1cIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvTGFiZWxcIjtcbmltcG9ydCBUZXh0IGZyb20gXCJAL3dpZGdldHMvYmFzZS9UZXh0XCI7XG5pbXBvcnQgeyBTZXBhcmF0b3IgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvU2VwYXJhdG9yXCI7XG5pbXBvcnQgU2VhcmNoRmlsdGVyIGZyb20gXCJAL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL1NlYXJjaEZpbHRlclwiO1xuaW1wb3J0IHsgVHJlZVZpZXcsIFNlYXJjaEZpZWxkcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5cbmV4cG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2hhcixcbiAgU2VsZWN0aW9uLFxuICBCb29sZWFuLFxuICBNYW55Mm9uZSxcbiAgVHJlZSxcbiAgR3JvdXAsXG4gIFNlYXJjaEZpbHRlcixcbiAgRm9ybSxcbiAgTm90ZWJvb2ssXG4gIEZsb2F0LFxuICBJbnRlZ2VyLFxuICBMYWJlbCxcbiAgVGV4dCxcbiAgVHJlZVZpZXcsXG4gIFNlYXJjaEZpZWxkcyxcbiAgU2VwYXJhdG9yLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2hpbGRyZW46IGFueTtcbn07XG5cbmNvbnN0IEZpZWxkc2V0ID0gKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgbGFiZWwsIGNoaWxkcmVuIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIC8vIFRPRE86IGNoYW5nZSBpbi1saW5lIHN0eWxlcyB0byBUYWlsV2luZCBjbGFzc2VzXG4gICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cInBsLTIgcHItMiBib3JkZXItZ3JheS00MDAgYm9yZGVyIGJvcmRlci1zb2xpZCAgZm9udC1zYW5zXCI+XG4gICAgICA8bGVnZW5kXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYWxsOiBcImluaXRpYWxcIixcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjFlbVwiLFxuICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjAuNWVtXCIsXG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjAuNWVtXCIsXG4gICAgICAgICAgZm9udEZhbWlseTpcbiAgICAgICAgICAgIFwic3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCAnU2Vnb2UgVUknLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsICdBcHBsZSBDb2xvciBFbW9qaScsICdTZWdvZSBVSSBFbW9qaSdcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sZWdlbmQ+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9maWVsZHNldD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkc2V0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgV2lkZ2V0IGFzIFdpZGdldE9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0ICogYXMgV2lkZ2V0cyBmcm9tIFwiQC9pbmRleFwiO1xuXG50eXBlIHdpZGdldHMgPSB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn07XG5cbmNvbnN0IHdpZGdldFR5cGVzID0gV2lkZ2V0cyBhcyB3aWRnZXRzO1xuXG5jb25zdCBjcmVhdGVSZWFjdFdpZGdldCA9IChwcm9wczogYW55KSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHR5cGUgPSBvb3VpLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGNvbnN0IHdpZGdldENsYXNzID0gd2lkZ2V0VHlwZXNbdHlwZV07XG4gIGlmICghd2lkZ2V0Q2xhc3MpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh3aWRnZXRDbGFzcywgcHJvcHMpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlUmVhY3RXaWRnZXQgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZWNrYm94IGFzIEFudENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEJvb2xlYW4gPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIHJlYWRPbmx5IH0gPSBvb3VpO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIG9vdWk9e29vdWl9IHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgPEFudENoZWNrYm94IGRpc2FibGVkPXtyZWFkT25seX0gaWQ9e2lkfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBCdXR0b24gYXMgQW50QnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgeyBsYWJlbCwgYWN0aXZhdGVkIH0gPSBvb3VpO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIG9vdWk9e29vdWl9PlxuICAgICAgPEFudEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBkaXNhYmxlZD17IWFjdGl2YXRlZH0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvQW50QnV0dG9uPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgQ2hhciBhcyBDaGFyT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBDaGFyID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWksIGxheW91dCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIHJlYWRPbmx5LCBpc1Bhc3N3b3JkIH0gPSBvb3VpIGFzIENoYXJPb3VpO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIG9vdWk9e29vdWl9IGxheW91dD17bGF5b3V0fT5cbiAgICAgIHtpc1Bhc3N3b3JkID8gKFxuICAgICAgICA8SW5wdXQuUGFzc3dvcmQgZGlzYWJsZWQ9e3JlYWRPbmx5fSBpZD17aWR9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8SW5wdXQgZGlzYWJsZWQ9e3JlYWRPbmx5fSBpZD17aWR9IC8+XG4gICAgICApfVxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgRmxvYXQgYXMgRmxvYXRPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEZsb2F0ID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWksIGxheW91dCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIGRlY2ltYWxEaWdpdHMsIHJlYWRPbmx5IH0gPSBvb3VpIGFzIEZsb2F0T291aTtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZCBvb3VpPXtvb3VpfSBsYXlvdXQ9e2xheW91dH0+XG4gICAgICA8SW5wdXROdW1iZXJcbiAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHByZWNpc2lvbj17ZGVjaW1hbERpZ2l0c31cbiAgICAgICAgZm9ybWF0dGVyPXsodmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gYCR7dmFsdWV9YC5yZXBsYWNlKC9bXjAtOVxcLlxcLV0rL2csIFwiXCIpO1xuICAgICAgICB9fVxuICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XG4gICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxuICAgICAgLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEludGVnZXIgPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSwgbGF5b3V0IH0gPSBwcm9wcztcbiAgY29uc3QgeyBpZCwgcmVhZE9ubHkgfSA9IG9vdWk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgb291aT17b291aX0gbGF5b3V0PXtsYXlvdXR9PlxuICAgICAgPElucHV0TnVtYmVyXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICBmb3JtYXR0ZXI9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHt2YWx1ZX1gLnJlcGxhY2UoL1teMC05XSsvZywgXCJcIik7XG4gICAgICAgIH19XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cbiAgICAgIC8+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYWJlbCBhcyBMYWJlbE9vdWkgfSBmcm9tIFwib291aVwiO1xuXG50eXBlIFByb3BzID0ge1xuICBvb3VpOiBMYWJlbE9vdWk7XG59O1xuXG5jb25zdCBMYWJlbCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3Qgc3R5bGUgPSB7IHRleHRBbGlnbjogb291aS5hbGlnbiB9O1xuICByZXR1cm4gPHAgc3R5bGU9e3N0eWxlIGFzIGFueX0+e29vdWkubGFiZWx9PC9wPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBTZWFyY2hPdXRsaW5lZCwgRm9sZGVyT3Blbk91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBNYW55Mm9uZSBhcyBNYW55Mm9uZU9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBvb3VpOiBNYW55Mm9uZU9vdWk7XG4gIG9uT3BlbkRldGFpbENsaWNrPzpcbiAgICB8ICgoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkKVxuICAgIHwgdW5kZWZpbmVkO1xuICBvblNlYXJjaENsaWNrPzpcbiAgICB8ICgoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkKVxuICAgIHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IE1hbnkyb25lID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGaWVsZCBvb3VpPXtvb3VpfT5cbiAgICAgIDxNYW55Mm9uZUlucHV0IC8+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBNYW55Mm9uZUlucHV0UHJvcHMge1xuICB2YWx1ZT86IGFueVtdO1xuICBvbkNoYW5nZT86ICh2YWx1ZTogYW55W10pID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuY29uc3QgTWFueTJvbmVJbnB1dDogUmVhY3QuRkM8TWFueTJvbmVJbnB1dFByb3BzPiA9IChcbiAgcHJvcHM6IE1hbnkyb25lSW5wdXRQcm9wc1xuKSA9PiB7XG4gIGNvbnN0IHsgdmFsdWUsIG9uQ2hhbmdlLCBkaXNhYmxlZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW20yb1ZhbHVlLCBzZXRNMm9WYWx1ZV0gPSB1c2VTdGF0ZTxhbnlbXT4oKTtcblxuICBjb25zdCB0cmlnZ2VyQ2hhbmdlID0gKGNoYW5nZWRWYWx1ZTogYW55W10pID0+IHtcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25WYWx1ZVN0cmluZ0NoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge307XG5cbiAgcmV0dXJuIChcbiAgICA8Um93IGd1dHRlcj17OH0gY2xhc3NOYW1lPVwicHQtMSBwYi0xXCI+XG4gICAgICA8Q29sIGZsZXg9XCJhdXRvXCI+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWUgJiYgdmFsdWVbMV19XG4gICAgICAgICAgb25DaGFuZ2U9e29uVmFsdWVTdHJpbmdDaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAvPlxuICAgICAgPC9Db2w+XG4gICAgICA8Q29sIGZsZXg9XCIzMnB4XCI+XG4gICAgICAgIDxCdXR0b24gaWNvbj17PEZvbGRlck9wZW5PdXRsaW5lZCAvPn0gZGlzYWJsZWQ9e2Rpc2FibGVkfSAvPlxuICAgICAgPC9Db2w+XG4gICAgICA8Q29sIGZsZXg9XCIzMnB4XCI+XG4gICAgICAgIDxCdXR0b24gaWNvbj17PFNlYXJjaE91dGxpbmVkIC8+fSBkaXNhYmxlZD17ZGlzYWJsZWR9IC8+XG4gICAgICA8L0NvbD5cbiAgICA8L1Jvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgU2VsZWN0aW9uIGFzIFNlbGVjdGlvbk9vdWkgfSBmcm9tIFwib291aVwiO1xuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcblxudHlwZSBQcm9wcyA9IHtcbiAgbGF5b3V0PzogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG4gIG9vdWk6IFNlbGVjdGlvbk9vdWk7XG59O1xuXG5leHBvcnQgY29uc3QgU2VsZWN0aW9uID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWksIGxheW91dCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgc2VsZWN0aW9uVmFsdWVzLCByZWFkT25seSB9ID0gb291aTtcbiAgY29uc3QgdmFsdWVzID0gQXJyYXkuZnJvbShzZWxlY3Rpb25WYWx1ZXMuZW50cmllcygpKTtcblxuICBjb25zdCBvcHRpb25zID1cbiAgICB2YWx1ZXMgJiZcbiAgICB2YWx1ZXMubGVuZ3RoICYmXG4gICAgdmFsdWVzLm1hcCgoZW50cnk6IHN0cmluZ1tdKSA9PiB7XG4gICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxPcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtrZXl9PlxuICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgPC9PcHRpb24+XG4gICAgICApO1xuICAgIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIG9vdWk9e29vdWl9IGxheW91dD17bGF5b3V0fT5cbiAgICAgIDxTZWxlY3QgZGlzYWJsZWQ9e3JlYWRPbmx5fT57b3B0aW9uc308L1NlbGVjdD5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgU2VwYXJhdG9yIGFzIFNlcGFyYXRvck9vdWkgfSBmcm9tIFwib291aVwiO1xuXG50eXBlIFByb3BzID0ge1xuICBvb3VpOiBTZXBhcmF0b3JPb3VpO1xufTtcblxuZXhwb3J0IGNvbnN0IFNlcGFyYXRvciA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgeyBsYWJlbCB9ID0gb291aTtcblxuICByZXR1cm4gKFxuICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwibGVmdFwiIGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0RpdmlkZXI+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgVGV4dCBhcyBUZXh0T291aSB9IGZyb20gXCJvb3VpXCI7XG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogVGV4dE9vdWk7XG59O1xuXG5jb25zdCBUZXh0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IHJlYWRPbmx5IH0gPSBvb3VpO1xuICByZXR1cm4gKFxuICAgIDxGaWVsZCBvb3VpPXtvb3VpfT5cbiAgICAgIDxUZXh0QXJlYSBkaXNhYmxlZD17cmVhZE9ubHl9IHJvd3M9ezR9IC8+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIgYXMgQ29udGFpbmVyT291aSwgV2lkZ2V0IH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IGNyZWF0ZVJlYWN0V2lkZ2V0IH0gZnJvbSBcIkAvd2lkZ2V0cy9XaWRnZXRGYWN0b3J5XCI7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmVcIjtcbmltcG9ydCB7XG4gIGdldFRlbXBsYXRlQ29sdW1ucyxcbiAgZXhwYW5kTGFiZWxzSW5GaWVsZHMsXG4gIGdldFNwYW5TdHlsZUZvckl0ZW0sXG59IGZyb20gXCJAL2hlbHBlcnMvY29udGFpbmVySGVscGVyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbnRhaW5lcjogQ29udGFpbmVyT291aTtcbiAgZm9ybVdyYXBwZXI/OiBib29sZWFuO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IHJlc3BvbnNpdmVCZWhhdmlvdXIgPSB1c2VNZWRpYVF1ZXJ5KHsgcXVlcnk6IFwiKG1heC13aWR0aDogMTAwMHB4KVwiIH0pO1xuICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybVdyYXBwZXIgPSBmYWxzZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgY29sdW1ucywgcm93cyB9ID0gY29udGFpbmVyO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSByb3dzLm1hcCgocm93OiBXaWRnZXRbXSwgaSkgPT4ge1xuICAgIGNvbnN0IHJvd1dpdGhvdXRJbnZpc2libGVGaWVsZHMgPSByb3cuZmlsdGVyKCh3aWRnZXQpID0+IHtcbiAgICAgIHJldHVybiAhd2lkZ2V0LmludmlzaWJsZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJvd1dpdGhFeHBhbmRlZEZpZWxkcyA9IGV4cGFuZExhYmVsc0luRmllbGRzKHtcbiAgICAgIHJvdzogcm93V2l0aG91dEludmlzaWJsZUZpZWxkcyxcbiAgICAgIG51bWJlck9mQ29sdW1uczogY29sdW1ucyxcbiAgICAgIG11c3RGaWxsV2l0aEVtcHRpZXM6IHJlc3BvbnNpdmVCZWhhdmlvdXIsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcm93V2l0aEV4cGFuZGVkRmllbGRzLm1hcCgoaXRlbTogV2lkZ2V0LCBqOiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2Ake2kudG9TdHJpbmcoKX0tJHtqLnRvU3RyaW5nKCl9YH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWxmLWNlbnRlciBwLTJcIlxuICAgICAgICAgIHN0eWxlPXtnZXRTcGFuU3R5bGVGb3JJdGVtKHsgaXRlbSwgcmVzcG9uc2l2ZUJlaGF2aW91ciB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjcmVhdGVSZWFjdFdpZGdldCh7XG4gICAgICAgICAgICBvb3VpOiBpdGVtLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmIChmb3JtV3JhcHBlcikge1xuICAgIHJldHVybiBjb250ZW50IGFzIGFueTtcbiAgfVxuXG4gIGNvbnN0IHRlbXBsYXRlQ29sdW1ucyA9IGdldFRlbXBsYXRlQ29sdW1ucyhjb2x1bW5zKTtcbiAgY29uc3QgZ3JpZFN0eWxlID0ge1xuICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHJlc3BvbnNpdmVCZWhhdmlvdXIgPyBcImF1dG9cIiA6IHRlbXBsYXRlQ29sdW1ucyxcbiAgfTtcblxuICByZXR1cm4gPGRpdiBzdHlsZT17Z3JpZFN0eWxlfT57Y29udGVudH08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHcm91cCBhcyBHcm91cE9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBGaWVsZHNldCBmcm9tIFwiQC91aS9GaWVsZHNldFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBvb3VpOiBHcm91cE9vdWk7XG4gIHNob3dMYWJlbD86IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiBHcm91cChwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7IG9vdWksIHNob3dMYWJlbCA9IHRydWUgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtvb3VpLmxhYmVsICYmIHNob3dMYWJlbCA/IChcbiAgICAgICAgPEZpZWxkc2V0IGxhYmVsPXtvb3VpLmxhYmVsfT5cbiAgICAgICAgICA8Q29udGFpbmVyIGNvbnRhaW5lcj17b291aSEuY29udGFpbmVyfSAvPlxuICAgICAgICA8L0ZpZWxkc2V0PlxuICAgICAgKSA6IChcbiAgICAgICAgPENvbnRhaW5lciBjb250YWluZXI9e29vdWkhLmNvbnRhaW5lcn0gLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFicyB9IGZyb20gXCJhbnRkXCI7XG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XG5cbmltcG9ydCB7IE5vdGVib29rIGFzIE5vdGVib29rT291aSwgR3JvdXAgYXMgR3JvdXBPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcIkAvaW5kZXhcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogTm90ZWJvb2tPb3VpO1xufTtcblxuZnVuY3Rpb24gTm90ZWJvb2socHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgdGFicyA9IFtdLmNvbmNhdC5hcHBseShbXSwgb291aSEuY29udGFpbmVyLnJvd3MpO1xuICByZXR1cm4gKFxuICAgIDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCI+XG4gICAgICB7dGFicy5tYXAoKHBhZ2U6IGFueSwga2V5OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgdGFiS2V5ID0gKGtleSArIDEpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VGFiUGFuZSB0YWI9e3BhZ2UubGFiZWx9IGtleT17dGFiS2V5fT5cbiAgICAgICAgICAgIDxHcm91cCBvb3VpPXtwYWdlIGFzIEdyb3VwT291aX0gc2hvd0xhYmVsPXtmYWxzZX0gLz5cbiAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L1RhYnM+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGVib29rO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0gYXMgRm9ybU9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IHsgRm9ybSBhcyBBbnRGb3JtLCBGb3JtSW5zdGFuY2UgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9Db250YWluZXJcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgYXJjaDogc3RyaW5nO1xuICBmaWVsZHM6IGFueTtcbiAgaW5pdGlhbFZhbHVlcz86IGFueTtcbiAgYW50Rm9ybTogRm9ybUluc3RhbmNlO1xufTtcblxuY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSAodmFsdWVzOiBhbnksIGZpZWxkczogYW55KSA9PiB7XG4gIGlmICghZmllbGRzKSB7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuICBjb25zdCBmaWx0ZXJlZFZhbHVlczogYW55ID0ge307XG4gIE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKFxuICAgICAgdmFsdWVzW2tleV0gIT09IGZhbHNlIHx8XG4gICAgICAoZmllbGRzW2tleV0gJiYgZmllbGRzW2tleV0udHlwZSA9PT0gXCJib29sZWFuXCIpXG4gICAgKSB7XG4gICAgICBmaWx0ZXJlZFZhbHVlc1trZXldID0gdmFsdWVzW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZpbHRlcmVkVmFsdWVzO1xufTtcblxuY29uc3QgcHJvY2Vzc0luaXRpYWxWYWx1ZXMgPSAodmFsdWVzOiBhbnksIGZpZWxkczogYW55KSA9PiB7XG4gIGNvbnN0IGZpbHRlckJvb2xlYW5zID0gZmlsdGVyZWRWYWx1ZXModmFsdWVzLCBmaWVsZHMpO1xuICByZXR1cm4gZmlsdGVyQm9vbGVhbnM7XG59O1xuXG5mdW5jdGlvbiBGb3JtKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHsgYXJjaCwgZmllbGRzLCBpbml0aWFsVmFsdWVzLCBhbnRGb3JtIH0gPSBwcm9wcztcblxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZTxGb3JtT291aT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld0Zvcm0gPSBuZXcgRm9ybU9vdWkoZmllbGRzKTtcbiAgICBuZXdGb3JtLnBhcnNlKGFyY2gpO1xuICAgIHNldEZvcm0obmV3Rm9ybSk7XG4gIH0sIFthcmNoLCBmaWVsZHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxBbnRGb3JtXG4gICAgICBmb3JtPXthbnRGb3JtfVxuICAgICAgaW5pdGlhbFZhbHVlcz17cHJvY2Vzc0luaXRpYWxWYWx1ZXMoaW5pdGlhbFZhbHVlcywgZmllbGRzKX1cbiAgICA+XG4gICAgICB7Zm9ybSAmJiA8Q29udGFpbmVyIGNvbnRhaW5lcj17Zm9ybSEuY29udGFpbmVyfSBmb3JtV3JhcHBlciAvPn1cbiAgICA8L0FudEZvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIFBhZ2luYXRpb24sIENoZWNrYm94LCBTcGluIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IGdldFRyZWUsIGdldFRhYmxlQ29sdW1ucywgZ2V0VGFibGVJdGVtcyB9IGZyb20gXCJAL2hlbHBlcnMvdHJlZUhlbHBlclwiO1xuXG5pbXBvcnQgeyBTdHJpbmdzLCBUcmVlVmlldywgQ29sdW1uIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IGdldExvY2FsaXplZFN0cmluZyB9IGZyb20gXCJAL2NvbnRleHQvTG9jYWxlc0NvbnRleHRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdG90YWw6IG51bWJlcjtcbiAgbGltaXQ6IG51bWJlcjtcbiAgcGFnZTogbnVtYmVyO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICB0cmVlVmlldzogVHJlZVZpZXc7XG4gIHJlc3VsdHM6IEFycmF5PGFueT47XG4gIG9uUmVxdWVzdFBhZ2VDaGFuZ2U6IChwYWdlOiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSA9PiB2b2lkO1xuICBzdHJpbmdzOiBTdHJpbmdzO1xuICBvblJvd0NsaWNrZWQ/OiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbn07XG5cbmZ1bmN0aW9uIFRyZWUocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgdG90YWwsXG4gICAgdHJlZVZpZXcsXG4gICAgcmVzdWx0cyxcbiAgICBvblJlcXVlc3RQYWdlQ2hhbmdlLFxuICAgIGxvYWRpbmcsXG4gICAgc3RyaW5ncyxcbiAgICBvblJvd0NsaWNrZWQsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPEFycmF5PGFueT4+KFtdKTtcbiAgY29uc3QgW2NvbHVtbnMsIHNldENvbHVtbnNdID0gdXNlU3RhdGU8QXJyYXk8Q29sdW1uPj4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdHJlZSA9IGdldFRyZWUodHJlZVZpZXcpO1xuICAgIGNvbnN0IGJvb2xlYW5Db21wb25lbnRGbiA9IChib29sZWFuRmllbGQ6IGJvb2xlYW4pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIDxDaGVja2JveCBkZWZhdWx0Q2hlY2tlZD17Ym9vbGVhbkZpZWxkfSBkaXNhYmxlZCAvPjtcbiAgICB9O1xuICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRUYWJsZUNvbHVtbnModHJlZSwgYm9vbGVhbkNvbXBvbmVudEZuKTtcbiAgICBjb25zdCBpdGVtcyA9IGdldFRhYmxlSXRlbXModHJlZSwgcmVzdWx0cyk7XG5cbiAgICBzZXRDb2x1bW5zKGNvbHVtbnMpO1xuICAgIHNldEl0ZW1zKGl0ZW1zKTtcbiAgfSwgW3RyZWVWaWV3LCByZXN1bHRzXSk7XG5cbiAgY29uc3QgZnJvbSA9IChwYWdlIC0gMSkgKiBsaW1pdCArIDE7XG4gIGNvbnN0IHRvID0gZnJvbSAtIDEgKyBpdGVtcy5sZW5ndGg7XG4gIGNvbnN0IHN1bW1hcnkgPSBsb2FkaW5nID8gKFxuICAgIDxTcGluIC8+XG4gICkgOiB0b3RhbCA9PT0gMCA/IChcbiAgICBnZXRMb2NhbGl6ZWRTdHJpbmcoXCJub19yZXN1bHRzXCIsIHN0cmluZ3MpXG4gICkgOiAoXG4gICAgZ2V0TG9jYWxpemVkU3RyaW5nKFwic3VtbWFyeVwiLCBzdHJpbmdzKVxuICAgICAgLnJlcGxhY2UoXCJ7ZnJvbX1cIiwgZnJvbT8udG9TdHJpbmcoKSlcbiAgICAgIC5yZXBsYWNlKFwie3RvfVwiLCB0bz8udG9TdHJpbmcoKSlcbiAgICAgIC5yZXBsYWNlKFwie3RvdGFsfVwiLCB0b3RhbD8udG9TdHJpbmcoKSlcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c3VtbWFyeX1cbiAgICAgIHtsb2FkaW5nID8gbnVsbCA6IChcbiAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICB0b3RhbD17dG90YWx9XG4gICAgICAgICAgcGFnZVNpemU9e2xpbWl0fVxuICAgICAgICAgIGN1cnJlbnQ9e3BhZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicGItNSBwdC01XCJcbiAgICAgICAgICBzaG93U2l6ZUNoYW5nZXI9e2ZhbHNlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblJlcXVlc3RQYWdlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxUYWJsZVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBkYXRhU291cmNlPXtpdGVtc31cbiAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIHJvd0NsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHNlbGVjdC1ub25lXCJcbiAgICAgICAgb25Sb3c9eyhyZWNvcmQpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25Eb3VibGVDbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAob25Sb3dDbGlja2VkKSBvblJvd0NsaWNrZWQocmVjb3JkLmlkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4iLCJpbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgRGF0ZVJhbmdlUGlja2VyID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWksIGxheW91dCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgb291aT17b291aX0gbGF5b3V0PXtsYXlvdXR9PlxuICAgICAgPERhdGVQaWNrZXIuUmFuZ2VQaWNrZXIgZm9ybWF0PXtcIkREL01NL1lZWVlcIn0+PC9EYXRlUGlja2VyLlJhbmdlUGlja2VyPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgRGF0ZVBpY2tlciwgVGltZVBpY2tlciB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IEZpZWxkIGFzIEZpZWxkT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5cbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuZXhwb3J0IGNvbnN0IERhdGVUaW1lUmFuZ2VQaWNrZXIgPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSwgbGF5b3V0IH0gPSBwcm9wcztcbiAgY29uc3QgeyBsYWJlbCwgaWQgfSA9IG9vdWk7XG5cbiAgY29uc3QgZmllbGRzID0gW1xuICAgIG5ldyBGaWVsZE9vdWkoe1xuICAgICAgbmFtZTogaWQgKyBcIiNkYXRlXCIsXG4gICAgICBsYWJlbDogXCJcIixcbiAgICB9KSxcbiAgICBuZXcgRmllbGRPb3VpKHtcbiAgICAgIG5hbWU6IGlkICsgXCIjdGltZVwiLFxuICAgICAgbGFiZWw6IFwiXCIsXG4gICAgfSksXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xhYmVsICsgXCIgOlwifVxuICAgICAgPFJvdyBhbGlnbj17XCJib3R0b21cIn0gY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1yLTJcIj5cbiAgICAgICAgICA8RmllbGQgb291aT17ZmllbGRzWzBdfSBsYXlvdXQ9e2xheW91dH0+XG4gICAgICAgICAgICA8RGF0ZVBpY2tlci5SYW5nZVBpY2tlclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYwXCJcbiAgICAgICAgICAgICAgZm9ybWF0PXtcIkREL01NL1lZWVlcIn1cbiAgICAgICAgICAgID48L0RhdGVQaWNrZXIuUmFuZ2VQaWNrZXI+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2w+XG4gICAgICAgICAge1wiIFwifVxuICAgICAgICAgIDxGaWVsZCBvb3VpPXtmaWVsZHNbMV19IGxheW91dD17bGF5b3V0fT5cbiAgICAgICAgICAgIDxUaW1lUGlja2VyLlJhbmdlUGlja2VyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNjBcIlxuICAgICAgICAgICAgICBmb3JtYXQ9e1wiSEg6bW1cIn1cbiAgICAgICAgICAgID48L1RpbWVQaWNrZXIuUmFuZ2VQaWNrZXI+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBGbG9hdCB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9GbG9hdFwiO1xuaW1wb3J0IHsgSW50ZWdlciB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9JbnRlZ2VyXCI7XG5pbXBvcnQgeyBJbnRlZ2VyIGFzIEludGVnZXJPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IGxhYmVsV2l0aFRvb2x0aXAgfSBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogYW55O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBhaXJGaWVsZHMocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgeyBpZCwgbGFiZWwsIHRvb2x0aXAgfSA9IG9vdWk7XG4gIGNvbnN0IFdpZGdldCA9IG9vdWkgaW5zdGFuY2VvZiBJbnRlZ2VyT291aSA/IEludGVnZXIgOiBGbG9hdDtcblxuICBjb25zdCBnZXRXaWRnZXQgPSAoc3VmZml4OiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFdpZGdldFxuICAgICAgICBvb3VpPXt7IC4uLm9vdWksIGlkOiBpZCArIHN1ZmZpeCwgbGFiZWw6IFwiXCIsIHRvb2x0aXA6IHVuZGVmaW5lZCB9fVxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xhYmVsV2l0aFRvb2x0aXAobGFiZWwsIHRvb2x0aXApfVxuICAgICAgPFJvdyBhbGlnbj17XCJib3R0b21cIn0gY2xhc3NOYW1lPVwibXQtMFwiPlxuICAgICAgICA8Q29sPntnZXRXaWRnZXQoXCIjZnJvbVwiKX08L0NvbD5cbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJwYi0xXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtMiBwci0yIGgtZnVsbFwiPiAtIDwvc3Bhbj5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2w+e2dldFdpZGdldChcIiN0b1wiKX08L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgUm93LCBDb2wsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQge1xuICBEb3duT3V0bGluZWQsXG4gIFVwT3V0bGluZWQsXG4gIFNlYXJjaE91dGxpbmVkLFxuICBDbGVhck91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcblxuaW1wb3J0IHtcbiAgTG9jYWxlc0NvbnRleHQsXG4gIExvY2FsZXNDb250ZXh0VHlwZSxcbn0gZnJvbSBcIkAvY29udGV4dC9Mb2NhbGVzQ29udGV4dFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBhZHZhbmNlZEZpbHRlcjogYm9vbGVhbjtcbiAgaXNTZWFyY2hpbmc6IGJvb2xlYW47XG4gIG9uQWR2YW5jZWRGaWx0ZXJUb2dnbGU6ICgpID0+IHZvaWQ7XG4gIG9uQ2xlYXI6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoQm90dG9tQmFyKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBvbkFkdmFuY2VkRmlsdGVyVG9nZ2xlLFxuICAgIGFkdmFuY2VkRmlsdGVyLFxuICAgIG9uQ2xlYXIsXG4gICAgaXNTZWFyY2hpbmcsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGdldFN0cmluZyB9ID0gdXNlQ29udGV4dChMb2NhbGVzQ29udGV4dCkgYXMgTG9jYWxlc0NvbnRleHRUeXBlO1xuXG4gIHJldHVybiAoXG4gICAgPFJvdz5cbiAgICAgIDxDb2wgc3Bhbj17MTJ9IGNsYXNzTmFtZT1cInRleHQtbGVmdCBwdC00IHBiLTIgcGwtMlwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXhzXCIgb25DbGljaz17b25BZHZhbmNlZEZpbHRlclRvZ2dsZX0+XG4gICAgICAgICAge2FkdmFuY2VkRmlsdGVyID8gKFxuICAgICAgICAgICAgPFVwT3V0bGluZWQgY2xhc3NOYW1lPVwicHItMVwiIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxEb3duT3V0bGluZWQgY2xhc3NOYW1lPVwicHItMVwiIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YWR2YW5jZWRGaWx0ZXJcbiAgICAgICAgICAgID8gZ2V0U3RyaW5nKFwic2ltcGxlX3NlYXJjaFwiKVxuICAgICAgICAgICAgOiBnZXRTdHJpbmcoXCJhZHZhbmNlZF9zZWFyY2hcIil9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCBzcGFuPXsxMn0gY2xhc3NOYW1lPVwidGV4dC1yaWdodCBwYi0yXCI+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXItNVwiIGljb249ezxDbGVhck91dGxpbmVkIC8+fSBvbkNsaWNrPXtvbkNsZWFyfT5cbiAgICAgICAgICBDbGVhclxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb249ezxTZWFyY2hPdXRsaW5lZCAvPn1cbiAgICAgICAgICBsb2FkaW5nPXtpc1NlYXJjaGluZ31cbiAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICA+XG4gICAgICAgICAge2dldFN0cmluZyhcInNlYXJjaFwiKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0NvbD5cbiAgICA8L1Jvdz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IENoYXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvQ2hhclwiO1xuaW1wb3J0IHsgU2VsZWN0aW9uIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL1NlbGVjdGlvblwiO1xuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyIH0gZnJvbSBcIi4vRGF0ZVJhbmdlUGlja2VyXCI7XG5pbXBvcnQgeyBEYXRlVGltZVJhbmdlUGlja2VyIH0gZnJvbSBcIi4vRGF0ZVRpbWVSYW5nZVBpY2tlclwiO1xuaW1wb3J0IHsgUGFpckZpZWxkcyB9IGZyb20gXCIuL1BhaXJGaWVsZHNcIjtcblxuaW1wb3J0IHsgTG9jYWxlc0NvbnRleHQsIExvY2FsZXNDb250ZXh0VHlwZSB9IGZyb20gXCJAL2NvbnRleHQvTG9jYWxlc0NvbnRleHRcIjtcblxuaW1wb3J0IHsgRmllbGQsIFNlbGVjdGlvbiBhcyBTZWxlY3Rpb25Pb3VpLCBDaGFyIGFzIENoYXJPb3VpIH0gZnJvbSBcIm9vdWlcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgZmllbGQ6IEZpZWxkO1xufTtcblxuY29uc3QgdHlwZXMgPSB7XG4gIHRleHQ6IFwiVGV4dFwiLFxuICBtYW55Mm9uZTogXCJNYW55Mm9uZVwiLFxuICBjaGFyOiBcIkNoYXJcIixcbiAgYm9vbGVhbjogXCJCb29sZWFuXCIsXG4gIHNlbGVjdGlvbjogXCJTZWxlY3Rpb25cIixcbiAgZmxvYXQ6IFwiRmxvYXRcIixcbiAgZmxvYXRfdGltZTogXCJGbG9hdFRpbWVcIixcbiAgcHJvZ3Jlc3NiYXI6IFwiUHJvZ3Jlc3NCYXJcIixcbiAgaW50ZWdlcjogXCJJbnRlZ2VyXCIsXG4gIGRhdGU6IFwiRGF0ZVwiLFxuICBkYXRldGltZTogXCJEYXRlVGltZVwiLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaEZpZWxkKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGZpZWxkIH0gPSBwcm9wcztcbiAgZmllbGQucmVhZE9ubHkgPSBmYWxzZTtcblxuICBjb25zdCB7IGdldFN0cmluZyB9ID0gdXNlQ29udGV4dChMb2NhbGVzQ29udGV4dCkgYXMgTG9jYWxlc0NvbnRleHRUeXBlO1xuXG4gIGNvbnN0IHdpZGdldFR5cGUgPSBmaWVsZC5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gIHN3aXRjaCAod2lkZ2V0VHlwZSkge1xuICAgIGNhc2UgdHlwZXMuYm9vbGVhbjoge1xuICAgICAgY29uc3Qgb291aSA9IG5ldyBTZWxlY3Rpb25Pb3VpKHtcbiAgICAgICAgbmFtZTogZmllbGQuX2lkLFxuICAgICAgICBzdHJpbmc6IGZpZWxkLmxhYmVsLFxuICAgICAgICBzZWxlY3Rpb246IFtcbiAgICAgICAgICBbXCJ0cnVlXCIsIGdldFN0cmluZyhcInRydWVcIildLFxuICAgICAgICAgIFtcImZhbHNlXCIsIGdldFN0cmluZyhcImZhbHNlXCIpXSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gPFNlbGVjdGlvbiBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiIG9vdWk9e29vdWl9IC8+O1xuICAgIH1cbiAgICBjYXNlIHR5cGVzLmZsb2F0OlxuICAgIGNhc2UgdHlwZXMucHJvZ3Jlc3NiYXI6XG4gICAgY2FzZSB0eXBlcy5mbG9hdF90aW1lOlxuICAgIGNhc2UgdHlwZXMuaW50ZWdlcjoge1xuICAgICAgcmV0dXJuIDxQYWlyRmllbGRzIG9vdWk9e2ZpZWxkfSAvPjtcbiAgICB9XG4gICAgY2FzZSB0eXBlcy5kYXRlOiB7XG4gICAgICByZXR1cm4gPERhdGVSYW5nZVBpY2tlciBvb3VpPXtmaWVsZH0gbGF5b3V0PVwidmVydGljYWxcIiAvPjtcbiAgICB9XG4gICAgY2FzZSB0eXBlcy5kYXRldGltZToge1xuICAgICAgcmV0dXJuIDxEYXRlVGltZVJhbmdlUGlja2VyIG9vdWk9e2ZpZWxkfSBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiIC8+O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gPENoYXIgb291aT17ZmllbGR9IGxheW91dD1cInZlcnRpY2FsXCIgLz47XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcbmltcG9ydCBcIkAvdGFpbHdpbmQuZ2VuZXJhdGVkLmNzc1wiO1xuXG5pbXBvcnQgeyBTZWFyY2hGaWx0ZXIgYXMgU2VhcmNoRmlsdGVyT291aSwgQ29udGFpbmVyLCBGaWVsZCB9IGZyb20gXCJvb3VpXCI7XG5cbmltcG9ydCB7IFNlYXJjaEZpZWxkIH0gZnJvbSBcIi4vU2VhcmNoRmllbGRcIjtcbmltcG9ydCB7IFNlYXJjaEJvdHRvbUJhciB9IGZyb20gXCIuL1NlYXJjaEJvdHRvbUJhclwiO1xuaW1wb3J0IExvY2FsZXNQcm92aWRlciBmcm9tIFwiQC9jb250ZXh0L0xvY2FsZXNDb250ZXh0XCI7XG5pbXBvcnQgeyBTdHJpbmdzLCBTZWFyY2hGaWVsZHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgU2VhcmNoUGFyYW1zIH0gZnJvbSBcIi4vU2VhcmNoUGFyYW1zXCI7XG5cbmltcG9ydCB7IGdldFBhcmFtc0ZvckZpZWxkcyB9IGZyb20gXCJAL2hlbHBlcnMvc2VhcmNoRmlsdGVySGVscGVyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZpZWxkczogYW55O1xuICBzZWFyY2hGaWVsZHM6IFNlYXJjaEZpZWxkcztcbiAgb25DbGVhcjogKCkgPT4gdm9pZDtcbiAgb25TdWJtaXQ6ICh2YWx1ZXM6IGFueSkgPT4gdm9pZDtcbiAgaXNTZWFyY2hpbmc6IGJvb2xlYW47XG4gIHN0cmluZ3M6IFN0cmluZ3M7XG4gIGxpbWl0OiBudW1iZXI7XG4gIG9mZnNldDogbnVtYmVyO1xufTtcblxuZnVuY3Rpb24gU2VhcmNoRmlsdGVyKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZHMsXG4gICAgc2VhcmNoRmllbGRzLFxuICAgIG9uQ2xlYXIsXG4gICAgb25TdWJtaXQsXG4gICAgaXNTZWFyY2hpbmcsXG4gICAgb2Zmc2V0LFxuICAgIGxpbWl0LFxuICAgIHN0cmluZ3MsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbc2ltcGxlU2VhcmNoRmllbGRzLCBzZXRTaW1wbGVTZWFyY2hGaWVsZHNdID0gdXNlU3RhdGU8Q29udGFpbmVyPigpO1xuICBjb25zdCBbYWR2YW5jZWRTZWFyY2hGaWVsZHMsIHNldEFkdmFuY2VkU2VhcmNoRmllbGRzXSA9IHVzZVN0YXRlPENvbnRhaW5lcj4oKTtcbiAgY29uc3QgW2FkdmFuY2VkRmlsdGVyLCBzZXRBZHZhbmNlZEZpbHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XG5cbiAgY29uc3QgZ2V0Um93c0FuZENvbHMgPSAoKSA9PiB7XG4gICAgaWYgKCFhZHZhbmNlZFNlYXJjaEZpZWxkcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkcyA9IGFkdmFuY2VkRmlsdGVyID8gYWR2YW5jZWRTZWFyY2hGaWVsZHMgOiBzaW1wbGVTZWFyY2hGaWVsZHM7XG4gICAgY29uc3Qgcm93cyA9IGZpZWxkcz8ucm93cztcblxuICAgIHJldHVybiByb3dzPy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJvdyBrZXk9e2l9PlxuICAgICAgICAgIHtyb3cubWFwKChpdGVtLCBqKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gY2xhc3NOYW1lPVwicC0yXCIgeGw9ezZ9IGtleT17an0+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEZpZWxkIGZpZWxkPXtpdGVtIGFzIEZpZWxkfSAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvUm93PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNmbyA9IG5ldyBTZWFyY2hGaWx0ZXJPb3VpKHNlYXJjaEZpZWxkcywgZmllbGRzKTtcbiAgICBzZm8ucGFyc2UoKTtcbiAgICBzZXRTaW1wbGVTZWFyY2hGaWVsZHMoc2ZvLl9zaW1wbGVTZWFyY2hDb250YWluZXIpO1xuICAgIHNldEFkdmFuY2VkU2VhcmNoRmllbGRzKHNmby5fYWR2YW5jZWRTZWFyY2hDb250YWluZXIpO1xuICB9LCBbZmllbGRzLCBzZWFyY2hGaWVsZHNdKTtcblxuICBjb25zdCByb3dzID0gZ2V0Um93c0FuZENvbHMoKTtcblxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXM6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgbGltaXQsIG9mZnNldCB9ID0gdmFsdWVzO1xuICAgIGRlbGV0ZSB2YWx1ZXMub2Zmc2V0O1xuICAgIGRlbGV0ZSB2YWx1ZXMubGltaXQ7XG4gICAgY29uc3QgbmV3UGFyYW1zID0gZ2V0UGFyYW1zRm9yRmllbGRzKHZhbHVlcywgZmllbGRzKTtcblxuICAgIG9uU3VibWl0KHsgcGFyYW1zOiBuZXdQYXJhbXMsIG9mZnNldCwgbGltaXQgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TG9jYWxlc1Byb3ZpZGVyIHN0cmluZ3M9e3N0cmluZ3N9PlxuICAgICAgPEZvcm1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgcm91bmRlZCBwLTNcIlxuICAgICAgICBmb3JtPXtmb3JtfVxuICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgb2Zmc2V0LCBsaW1pdCB9fVxuICAgICAgPlxuICAgICAgICB7cm93c31cbiAgICAgICAge2FkdmFuY2VkRmlsdGVyICYmIDxTZWFyY2hQYXJhbXMgLz59XG4gICAgICAgIDxTZWFyY2hCb3R0b21CYXJcbiAgICAgICAgICBhZHZhbmNlZEZpbHRlcj17YWR2YW5jZWRGaWx0ZXJ9XG4gICAgICAgICAgb25BZHZhbmNlZEZpbHRlclRvZ2dsZT17KCkgPT4ge1xuICAgICAgICAgICAgc2V0QWR2YW5jZWRGaWx0ZXIoIWFkdmFuY2VkRmlsdGVyKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xlYXI9eygpID0+IHtcbiAgICAgICAgICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcbiAgICAgICAgICAgIG9uQ2xlYXIoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGlzU2VhcmNoaW5nPXtpc1NlYXJjaGluZ31cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0xvY2FsZXNQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRmlsdGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgSW50ZWdlciB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9JbnRlZ2VyXCI7XG5pbXBvcnQgeyBSb3csIFNwYWNlIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEludGVnZXIgYXMgSW50ZWdlck9vdWkgfSBmcm9tIFwib291aVwiO1xuXG5pbXBvcnQgeyBMb2NhbGVzQ29udGV4dCwgTG9jYWxlc0NvbnRleHRUeXBlIH0gZnJvbSBcIkAvY29udGV4dC9Mb2NhbGVzQ29udGV4dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoUGFyYW1zKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHsgZ2V0U3RyaW5nIH0gPSB1c2VDb250ZXh0KExvY2FsZXNDb250ZXh0KSBhcyBMb2NhbGVzQ29udGV4dFR5cGU7XG5cbiAgY29uc3QgbGltaXRPb3VpID0gbmV3IEludGVnZXJPb3VpKHsgbmFtZTogXCJsaW1pdFwiIH0pO1xuICBjb25zdCBvZmZzZXRPb3VpID0gbmV3IEludGVnZXJPb3VpKHsgbmFtZTogXCJvZmZzZXRcIiB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTIgcHQtMlwiPlxuICAgICAgPFJvdyBrZXk9e1wiY291bnRfcGFyYW1zXCJ9PntnZXRTdHJpbmcoXCJwYXJhbWV0ZXJzXCIpfTwvUm93PlxuICAgICAgPFNwYWNlIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgIHtnZXRTdHJpbmcoXCJsaW1pdFwiKSArIFwiIDpcIn1cbiAgICAgICAgPEludGVnZXIgb291aT17bGltaXRPb3VpfSAvPlxuICAgICAgICB7Z2V0U3RyaW5nKFwiZmlyc3RcIikgKyBcIiA6XCJ9XG4gICAgICAgIDxJbnRlZ2VyIG9vdWk9e29mZnNldE9vdWl9IC8+XG4gICAgICA8L1NwYWNlPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hbnRfZGVzaWduX2ljb25zX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2FudGRfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==