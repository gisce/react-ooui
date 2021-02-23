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
        var span = this._rows[this._index].reduce(function (prev, current) {
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
        if (props) {
            if (props.colspan) {
                this._colspan = +props.colspan;
            }
            if (props.readonly) {
                if (props.readonly === 1 || props.readonly === true) {
                    this._readOnly = true;
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
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var WidgetFactory_1 = __webpack_require__(/*! @/widgets/WidgetFactory */ "./src/widgets/WidgetFactory.tsx");
var react_responsive_1 = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
function Group(props) {
    var responsiveBehaviour = react_responsive_1.useMediaQuery({ query: "(max-width: 1000px)" });
    var ooui = props.ooui, _a = props.showLabel, showLabel = _a === void 0 ? true : _a;
    var columns = ooui.container.columns;
    var expandLabelsInFields = function (row) {
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
                label.align = responsiveBehaviour ? "left" : "right";
                rowWithExpandedLabels.push(label);
                var newItem = clone(item);
                newItem._colspan = item._colspan - 1;
                newItem._nolabel = true;
                rowWithExpandedLabels.push(newItem);
                if (columnIndex + 1 === row.length &&
                    totalColSpan < columns &&
                    !responsiveBehaviour) {
                    var gapsToFill = columns - totalColSpan;
                    for (var i = 0; i < gapsToFill; i += 1) {
                        rowWithExpandedLabels.push(new ooui_1.Label({ string: "" }));
                    }
                }
            }
            else {
                rowWithExpandedLabels.push(item);
            }
        });
        return rowWithExpandedLabels;
    };
    var templateColumns = getTemplateColumns(columns);
    var style = {
        display: "grid",
        gridTemplateColumns: responsiveBehaviour ? "auto" : templateColumns,
    };
    var content = (react_1.default.createElement("div", { style: style }, ooui.container.rows.map(function (row, i) {
        return expandLabelsInFields(row).map(function (item, j) {
            var responsiveSpan = 1;
            return (react_1.default.createElement("div", { style: {
                    alignSelf: "center",
                    padding: "0.5em",
                    gridColumnStart: "span " +
                        (responsiveBehaviour ? responsiveSpan : item.colspan),
                } }, WidgetFactory_1.createReactWidget({
                ooui: item,
                key: i.toString() + "-" + j.toString(),
            })));
        });
    })));
    return (react_1.default.createElement(react_1.default.Fragment, null, ooui.label && showLabel ? (react_1.default.createElement("fieldset", { style: {
            border: "1px solid #ccc",
            paddingLeft: "0.5em",
            paddingRight: "0.5em",
        } },
        react_1.default.createElement("legend", { style: {
                all: "initial",
                marginLeft: "1em",
                paddingLeft: "0.5em",
                paddingRight: "0.5em",
                fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
            } }, ooui.label),
        content)) : (content)));
}
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
var clone = function clone(instance) {
    var copy = new instance.constructor();
    Object.assign(copy, instance);
    return copy;
};
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var WidgetFactory_1 = __webpack_require__(/*! @/widgets/WidgetFactory */ "./src/widgets/WidgetFactory.tsx");
var antd_1 = __webpack_require__(/*! antd */ "antd");
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
    var getForm = function () {
        return form.container.rows.map(function (item, i) {
            return item.map(function (widget, j) {
                return WidgetFactory_1.createReactWidget({
                    ooui: widget,
                    key: i.toString() + "-" + j.toString(),
                });
            });
        });
    };
    react_1.useEffect(function () {
        var newForm = new ooui_1.Form(fields);
        newForm.parse(arch);
        setForm(newForm);
    }, [arch, fields]);
    return (react_1.default.createElement(antd_1.Form, { form: antForm, initialValues: processInitialValues(initialValues, fields) }, form && getForm()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Cb29sZWFuLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9DaGFyLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Db250YWluZXJXaWRnZXQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRGF0ZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9EYXRlVGltZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9GaWVsZC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9GbG9hdC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9GbG9hdFRpbWUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRm9ybS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Hcm91cC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9JbnRlZ2VyLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0xhYmVsLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L01hbnkybWFueS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9NYW55Mm9uZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9OZXdMaW5lLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L05vdGVib29rLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L09uZTJtYW55LmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvU2VhcmNoRmlsdGVyLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9TZXBhcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvVGV4dC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9UcmVlLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1dpZGdldC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9XaWRnZXRGYWN0b3J5LmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzcG9uc2l2ZS9kaXN0L3JlYWN0LXJlc3BvbnNpdmUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9jb21tb24vRmllbGQudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvY29udGV4dC9Mb2NhbGVzQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9oZWxwZXJzL3NlYXJjaEZpbHRlckhlbHBlci50cyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL2hlbHBlcnMvdHJlZUhlbHBlci50cyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9XaWRnZXRGYWN0b3J5LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9Cb29sZWFuLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9CdXR0b24udHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0NoYXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0Zsb2F0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9JbnRlZ2VyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9MYWJlbC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvTWFueTJvbmUudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL1NlbGVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvU2VwYXJhdG9yLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9UZXh0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvY29udGFpbmVycy9Hcm91cC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2NvbnRhaW5lcnMvTm90ZWJvb2sudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9Gb3JtLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3MvVHJlZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9EYXRlUmFuZ2VQaWNrZXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvRGF0ZVRpbWVSYW5nZVBpY2tlci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9QYWlyRmllbGRzLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL1NlYXJjaEJvdHRvbUJhci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9TZWFyY2hGaWVsZC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9TZWFyY2hGaWx0ZXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvU2VhcmNoUGFyYW1zLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL3JlYWN0LW9vdWkvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3JlYWN0LW9vdWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlYWN0LW9vdWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0I7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsOEVBQThFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUMyQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsMkNBQUs7QUFDUCxpRUFBZSxPQUFPLEVBQUM7QUFDdkIsbUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLDhFQUE4RTtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxnREFBZ0QsT0FBTztBQUN2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QkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImFudGRcIiksIHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcImFudGRcIiwgXCJAYW50LWRlc2lnbi9pY29uc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWFjdC1vb3VpXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJhbnRkXCIpLCByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInJlYWN0LW9vdWlcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcImFudGRcIl0sIHJvb3RbXCJAYW50LWRlc2lnbi9pY29uc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hbnRfZGVzaWduX2ljb25zX18pIHtcbnJldHVybiAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIEJvb2xlYW4gaW5wdXRcbiAqL1xudmFyIEJvb2xlYW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJvb2xlYW4sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQm9vbGVhbihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgaWYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgIGlmICghcHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbHNwYW4gPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEJvb2xlYW47XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBCb29sZWFuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Qm9vbGVhbi5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xudmFyIEJ1dHRvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnV0dG9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMpLCB7IG5vbGFiZWw6IChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMubm9sYWJlbCkgIT09IHVuZGVmaW5lZCA/IHByb3BzLm5vbGFiZWwgOiB0cnVlIH0pKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogVHlwZSAocHJpbWFyeSBvciBkZWZhdWx0KVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3R5cGUgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1dHRvbiBjYXB0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fY2FwdGlvbiA9IFwiXCI7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9jYXB0aW9uID0gcHJvcHMuc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbi5wcm90b3R5cGUsIFwidHlwZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLnByb3RvdHlwZSwgXCJjYXB0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FwdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBCdXR0b247XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CdXR0b24uanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBPbmUtbGluZSBpbnB1dCB3aXRoIGEgbGVuZ3RoIGxpbWl0LlxuICovXG52YXIgQ2hhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2hhciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDaGFyKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgcGxhY2UgaG9sZGVyXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fcGxhY2Vob2xkZXIgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIF90aGlzLl9pc1Bhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fc2l6ZSA9IHByb3BzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFwcm9wcy5jb2xzcGFuKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbHNwYW4gPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5wYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmlzUGFzc3dvcmQgPSBwcm9wcy5wYXNzd29yZCA9PT0gXCJUcnVlXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2hhci5wcm90b3R5cGUsIFwicGxhY2Vob2xkZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2hhci5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2hhci5wcm90b3R5cGUsIFwiaXNQYXNzd29yZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzUGFzc3dvcmQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1Bhc3N3b3JkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQ2hhcjtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IENoYXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DaGFyLmpzLm1hcCIsImltcG9ydCBOZXdMaW5lIGZyb20gXCIuL05ld0xpbmVcIjtcbnZhciBDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29udGFpbmVyKGNvbHVtbnMsIGNvbHNwYW4pIHtcbiAgICAgICAgaWYgKGNvbHVtbnMgPT09IHZvaWQgMCkgeyBjb2x1bW5zID0gNDsgfVxuICAgICAgICBpZiAoY29sc3BhbiA9PT0gdm9pZCAwKSB7IGNvbHNwYW4gPSA2OyB9XG4gICAgICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xuICAgICAgICB0aGlzLl9jb2xzcGFuID0gY29sc3BhbjtcbiAgICAgICAgdGhpcy5fcm93cyA9IFtbXV07XG4gICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lci5wcm90b3R5cGUsIFwiY29sdW1uc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2x1bW5zID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyLnByb3RvdHlwZSwgXCJjb2xzcGFuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sc3BhbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbHNwYW4gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXIucHJvdG90eXBlLCBcInJvd3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yb3dzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcm93cyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lci5wcm90b3R5cGUsIFwiaW5kZXhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbmRleDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgZnJlZSBwb3NpdGlvblxuICAgICAqL1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuZnJlZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3BhbiA9IHRoaXMuX3Jvd3NbdGhpcy5faW5kZXhdLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXYgKyBjdXJyZW50LmNvbHNwYW47XG4gICAgICAgIH0sIDApO1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1ucyAtIHNwYW47XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLmFkZFdpZGdldCA9IGZ1bmN0aW9uICh3aWRnZXQpIHtcbiAgICAgICAgaWYgKHdpZGdldCBpbnN0YW5jZW9mIE5ld0xpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd3MucHVzaChbXSk7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCsrO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aWRnZXQuY29sc3BhbiA+IHRoaXMuX2NvbHVtbnMpIHtcbiAgICAgICAgICAgIC8vIFdpZGdldCBjb2xzcGFuIGlzIGdyZWF0ZXIgdGhhbiBjb250YWluZXIgY29sdW1ucywgc28gd2UgY2hhbmdlIHdpZGdldFxuICAgICAgICAgICAgLy8gY29sc3BhbiB0byBmaXQgY29udGFpbmVyIGNvbHVtbnMuXG4gICAgICAgICAgICB3aWRnZXQuY29sc3BhbiA9IHRoaXMuX2NvbHVtbnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpZGdldC5jb2xzcGFuIDw9IHRoaXMuZnJlZVBvc2l0aW9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd3NbdGhpcy5faW5kZXhdLnB1c2god2lkZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd3MucHVzaChbXSk7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCsrO1xuICAgICAgICAgICAgdGhpcy5hZGRXaWRnZXQod2lkZ2V0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJhdmVyc2VzIGNoaWxkcmVuIHRvIGZpbmQgYSBtYXRjaGluZyBjb250YWluZXIgb3Igd2lkZ2V0IHdpdGggdGhlIGV4YWN0IHNhbWUgaWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIChuYW1lKSBvZiB0aGUgZmllbGQgb3IgY29udGFpbmVyIHRvIGZpbmRcbiAgICAgKi9cbiAgICBDb250YWluZXIucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX3Jvd3MgJiYgdGhpcy5fcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSXRlbSBoYXMgYmVlbiBmb3VuZC5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocm93ICYmIHJvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXRlbSBoYXMgYmVlbiBmb3VuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBpdGVtLmZpbmRCeUlkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udGFpbmVyO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbnRhaW5lci5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG52YXIgQ29udGFpbmVyV2lkZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb250YWluZXJXaWRnZXQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29udGFpbmVyV2lkZ2V0KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgaWRlbnRpZmllclxuICAgICAgICAgKlxuICAgICAgICAgKiBDb3JyZXNwb25kcyB0byB0aGUgZmllbGQncyBuYW1lIGF0dHJpYnV0ZSBmcm9tIHhtbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2lkID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnRhaW5lciBsYWJlbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2xhYmVsID0gXCJcIjtcbiAgICAgICAgX3RoaXMuX2NvbnRhaW5lciA9IG5ldyBDb250YWluZXIocHJvcHMgJiYgcHJvcHMuY29sLCBDb250YWluZXJXaWRnZXQuX2RlZmF1bHRDb2xzcGFuKTtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMubmFtZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9pZCA9IHByb3BzLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9jb250YWluZXIuY29sc3BhbiA9ICtwcm9wcy5jb2xzcGFuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9sYWJlbCA9IHByb3BzLnN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXJXaWRnZXQucHJvdG90eXBlLCBcImlkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lcldpZGdldCwgXCJkZWZhdWx0Q29sc3BhblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIENvbnRhaW5lcldpZGdldC5fZGVmYXVsdENvbHNwYW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBDb250YWluZXJXaWRnZXQuX2RlZmF1bHRDb2xzcGFuID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyV2lkZ2V0LnByb3RvdHlwZSwgXCJjb250YWluZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXJXaWRnZXQucHJvdG90eXBlLCBcImNvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXIuY29sc3BhbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5jb2xzcGFuID0gK3ZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lcldpZGdldC5wcm90b3R5cGUsIFwibGFiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBDYWxscyBjb250YWluZXIncyBmaW5kQnlJZCBtZXRob2QgdG8gZmluZCB0aGUgd2lkZ2V0cyBtYXRjaGluZyB3aXRoIHBhcmFtIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIHRvIGZpbmRcbiAgICAgKi9cbiAgICBDb250YWluZXJXaWRnZXQucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmIChpZCA9PT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmZpbmRCeUlkKGlkKTtcbiAgICB9O1xuICAgIENvbnRhaW5lcldpZGdldC5fZGVmYXVsdENvbHNwYW4gPSA2O1xuICAgIHJldHVybiBDb250YWluZXJXaWRnZXQ7XG59KFdpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyV2lkZ2V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29udGFpbmVyV2lkZ2V0LmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogRGF0ZSBpbnB1dFxuICovXG52YXIgRGF0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGF0ZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEYXRlKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICBpZiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgaWYgKCFwcm9wcy5jb2xzcGFuKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29sc3BhbiA9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gRGF0ZTtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IERhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EYXRlLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogRGF0ZVRpbWUgaW5wdXRcbiAqL1xudmFyIERhdGVUaW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEYXRlVGltZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEYXRlVGltZShwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgaWYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgIGlmICghcHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbHNwYW4gPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIERhdGVUaW1lO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EYXRlVGltZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbnZhciBGaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmllbGQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmllbGQocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBpZGVudGlmaWVyXG4gICAgICAgICAqXG4gICAgICAgICAqIENvcnJlc3BvbmRzIHRvIHRoZSBmaWVsZCdzIG5hbWUgYXR0cmlidXRlIGZyb20geG1sXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5faWQgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogTGFiZWxcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9sYWJlbCA9IFwiXCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBObyBsYWJlbFxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGZpZWxkIGhhc24ndCBnb3QgdG8gc2hvdyB0aGUgbGFiZWxcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9ub2xhYmVsID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBSZXF1aXJlZCBmaWVsZFxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3JlcXVpcmVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBY3RpdmF0ZWQgKGRlZmF1bHQgaXMgdHJ1ZSlcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9hY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICAvLyBBY3RpdmF0ZWQgYnkgZGVmYXVsdFxuICAgICAgICBfdGhpcy5fYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMubmFtZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9pZCA9IHByb3BzLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuYWN0aXZhdGVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2FjdGl2YXRlZCA9IHByb3BzLmFjdGl2YXRlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbGFiZWwgPSBwcm9wcy5zdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuaGVscCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl90b29sdGlwID0gcHJvcHMuaGVscDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5ub2xhYmVsICYmXG4gICAgICAgICAgICAgICAgKHByb3BzLm5vbGFiZWwgPT09IFwiMVwiIHx8XG4gICAgICAgICAgICAgICAgICAgICh0eXBlb2YgcHJvcHMubm9sYWJlbCA9PT0gXCJib29sZWFuXCIgJiYgcHJvcHMubm9sYWJlbCA9PT0gdHJ1ZSkpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX25vbGFiZWwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnJlcXVpcmVkICYmXG4gICAgICAgICAgICAgICAgKHByb3BzLnJlcXVpcmVkID09PSBcIjFcIiB8fCBwcm9wcy5yZXF1aXJlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpZWxkLnByb3RvdHlwZSwgXCJpZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWVsZC5wcm90b3R5cGUsIFwibGFiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmllbGQucHJvdG90eXBlLCBcIm5vbGFiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ub2xhYmVsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbm9sYWJlbCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpZWxkLnByb3RvdHlwZSwgXCJyZXF1aXJlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWVsZC5wcm90b3R5cGUsIFwidG9vbHRpcFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90b29sdGlwID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmllbGQucHJvdG90eXBlLCBcImFjdGl2YXRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2YXRlZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGlzIGluc3RhbmNlIGluIGNhc2UgdGhpcyBpZCBtYXRjaGVzIHBhcmFtIGlkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZCAobmFtZSkgdG8gZmluZFxuICAgICAqL1xuICAgIEZpZWxkLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgciA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHIgPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgcmV0dXJuIEZpZWxkO1xufShXaWRnZXQpKTtcbmV4cG9ydCBkZWZhdWx0IEZpZWxkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmllbGQuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBGbG9hdCBpbnB1dFxuICovXG52YXIgRmxvYXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZWdlciBkaWdpdHNcbiAgICAgICAgICpcbiAgICAgICAgICogTnVtYmVyIG9mIGludGVnZXIgZGlnaXRzIHRoYXQgd2lsbCBiZSBwYXJ0IG9mIHRoZSBmbG9hdFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2ludGVnZXJEaWdpdHMgPSAxNjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY2ltYWwgZGlnaXRzXG4gICAgICAgICAqXG4gICAgICAgICAqIE51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cyB0aGF0IHdpbGwgYmUgcGFydCBvZiB0aGUgZmxvYXRcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9kZWNpbWFsRGlnaXRzID0gMjtcbiAgICAgICAgaWYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgIGlmICghKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5jb2xzcGFuKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbHNwYW4gPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuZGlnaXRzKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBwcm9wcy5kaWdpdHMsIGludGVnZXJzID0gX2FbMF0sIGRlY2ltYWxzID0gX2FbMV07XG4gICAgICAgICAgICBfdGhpcy5faW50ZWdlckRpZ2l0cyA9IGludGVnZXJzO1xuICAgICAgICAgICAgX3RoaXMuX2RlY2ltYWxEaWdpdHMgPSBkZWNpbWFscztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGbG9hdC5wcm90b3R5cGUsIFwiaW50ZWdlckRpZ2l0c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVnZXJEaWdpdHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnRlZ2VyRGlnaXRzID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmxvYXQucHJvdG90eXBlLCBcImRlY2ltYWxEaWdpdHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWNpbWFsRGlnaXRzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZGVjaW1hbERpZ2l0cyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEZsb2F0O1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgRmxvYXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1GbG9hdC5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZsb2F0IGZyb20gXCIuL0Zsb2F0XCI7XG4vKipcbiAqIEZsb2F0VGltZSBpbnB1dFxuICovXG52YXIgRmxvYXRUaW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGbG9hdFRpbWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXRUaW1lKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBGbG9hdFRpbWU7XG59KEZsb2F0KSk7XG5leHBvcnQgZGVmYXVsdCBGbG9hdFRpbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1GbG9hdFRpbWUuanMubWFwIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCBXaWRnZXRGYWN0b3J5IGZyb20gXCIuL1dpZGdldEZhY3RvcnlcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgQ29udGFpbmVyV2lkZ2V0IGZyb20gXCIuL0NvbnRhaW5lcldpZGdldFwiO1xudmFyIEZvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICBfd2lkZ2V0cyA9IHtcbiAgICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciAmJiB0aGlzLl9jb250YWluZXIubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fY29udGFpbmVyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8geWllbGQgaXRlbVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBnZXQgd2lkZ2V0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl93aWRnZXRzO1xuICAgIH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIEZvcm0oZmllbGRzLCBjb2x1bW5zKSB7XG4gICAgICAgIGlmIChjb2x1bW5zID09PSB2b2lkIDApIHsgY29sdW1ucyA9IDg7IH1cbiAgICAgICAgdGhpcy5fZmllbGRzID0gZmllbGRzO1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBuZXcgQ29udGFpbmVyKGNvbHVtbnMpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybS5wcm90b3R5cGUsIFwiZmllbGRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmllbGRzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm0ucHJvdG90eXBlLCBcImNvbnRhaW5lclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEZvcm0ucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHhtbCkge1xuICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICB2YXIgdmlldyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sLCBcInRleHQveG1sXCIpO1xuICAgICAgICB0aGlzLnBhcnNlTm9kZSh2aWV3LmRvY3VtZW50RWxlbWVudCwgdGhpcy5fY29udGFpbmVyKTtcbiAgICB9O1xuICAgIEZvcm0ucHJvdG90eXBlLnBhcnNlTm9kZSA9IGZ1bmN0aW9uIChub2RlLCBjb250YWluZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHdpZGdldEZhY3RvcnkgPSBuZXcgV2lkZ2V0RmFjdG9yeSgpO1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGUuY2hpbGROb2RlcywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IGNoaWxkLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgICAgIHZhciB0YWcgPSBjaGlsZC5ub2RlTmFtZTtcbiAgICAgICAgICAgICAgICB2YXIgdGFnQXR0cmlidXRlc18xID0ge307XG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChjaGlsZC5hdHRyaWJ1dGVzLCBmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgICAgICB0YWdBdHRyaWJ1dGVzXzFbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJmaWVsZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lXzEgPSBjaGlsZC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cldpZGdldCA9IGNoaWxkLmdldEF0dHJpYnV0ZShcIndpZGdldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJXaWRnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyA9IGF0dHJXaWRnZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZV8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcgPSBfdGhpcy5fZmllbGRzW25hbWVfMV0udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWdBdHRyaWJ1dGVzXzEgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGFnQXR0cmlidXRlc18xKSwgX3RoaXMuX2ZpZWxkc1tuYW1lXzFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHdpZGdldCA9IHdpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KHRhZywgdGFnQXR0cmlidXRlc18xKTtcbiAgICAgICAgICAgICAgICBpZiAod2lkZ2V0IGluc3RhbmNlb2YgQ29udGFpbmVyV2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBhcnNlTm9kZShjaGlsZCwgd2lkZ2V0LmNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRXaWRnZXQod2lkZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxscyBjb250YWluZXIncyBmaW5kQnlJZCBtZXRob2QgdG8gZmluZCB0aGUgd2lkZ2V0cyBtYXRjaGluZyB3aXRoIHBhcmFtIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIHRvIGZpbmRcbiAgICAgKi9cbiAgICBGb3JtLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXIuZmluZEJ5SWQoaWQpO1xuICAgIH07XG4gICAgcmV0dXJuIEZvcm07XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm0uanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBDb250YWluZXJXaWRnZXQgZnJvbSBcIi4vQ29udGFpbmVyV2lkZ2V0XCI7XG52YXIgR3JvdXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEdyb3VwLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdyb3VwKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEdyb3VwO1xufShDb250YWluZXJXaWRnZXQpKTtcbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9R3JvdXAuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBJbnRlZ2VyIGlucHV0XG4gKi9cbnZhciBJbnRlZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbnRlZ2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludGVnZXIocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuc3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb2xzcGFuID0gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBJbnRlZ2VyO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgSW50ZWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUludGVnZXIuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xudmFyIExhYmVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMYWJlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMYWJlbChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExhYmVsIHRleHRcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl90ZXh0ID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsaWduIHRleHRcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9hbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMYWJlbC5wcm90b3R5cGUsIFwidGV4dFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGFiZWwucHJvdG90eXBlLCBcImFsaWduXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWxpZ247XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9hbGlnbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIExhYmVsO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1MYWJlbC5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIEEgTWFueTJtYW55IHJlbGF0aW9uc2hpcCBmaWVsZFxuICovXG52YXIgTWFueTJtYW55ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNYW55Mm1hbnksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWFueTJtYW55KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWxhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gXCJcIjtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zaXplID0gcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29sc3BhbiA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnJlbGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gcHJvcHMucmVsYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFueTJtYW55LnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYW55Mm1hbnkucHJvdG90eXBlLCBcInJlbGF0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVsYXRpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWxhdGlvbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE1hbnkybWFueTtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IE1hbnkybWFueTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1hbnkybWFueS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIEEgbWFueTJvbmUgcmVsYXRpb25zaGlwIGZpZWxkXG4gKi9cbnZhciBNYW55Mm9uZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWFueTJvbmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWFueTJvbmUocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBzaXplXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fc2l6ZSA9IDE1MDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbGF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fcmVsYXRpb24gPSBcIlwiO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NpemUgPSBwcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmICghcHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb2xzcGFuID0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMucmVsYXRpb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVsYXRpb24gPSBwcm9wcy5yZWxhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYW55Mm9uZS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFueTJvbmUucHJvdG90eXBlLCBcInJlbGF0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVsYXRpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWxhdGlvbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE1hbnkyb25lO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgTWFueTJvbmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NYW55Mm9uZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbnZhciBOZXdMaW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOZXdMaW5lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5ld0xpbmUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTmV3TGluZS5wcm90b3R5cGUuZmluZEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gTmV3TGluZTtcbn0oV2lkZ2V0KSk7XG5leHBvcnQgZGVmYXVsdCBOZXdMaW5lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TmV3TGluZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbnZhciBOb3RlYm9vayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm90ZWJvb2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTm90ZWJvb2socHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNvbHNwYW4gPSBOb3RlYm9vay5fZGVmYXVsdENvbHNwYW47XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb2xzcGFuID0gcHJvcHMuY29sc3BhbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RlYm9vaywgXCJkZWZhdWx0Q29sc3BhblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIE5vdGVib29rLl9kZWZhdWx0Q29sc3BhbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIE5vdGVib29rLl9kZWZhdWx0Q29sc3BhbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTm90ZWJvb2suX2RlZmF1bHRDb2xzcGFuID0gMztcbiAgICByZXR1cm4gTm90ZWJvb2s7XG59KENvbnRhaW5lcldpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgTm90ZWJvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob3RlYm9vay5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIEEgT25lMk1hbnkgcmVsYXRpb25zaGlwIGZpZWxkXG4gKi9cbnZhciBPbmUybWFueSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT25lMm1hbnksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT25lMm1hbnkocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBzaXplXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fc2l6ZSA9IDE1MDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbGF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fcmVsYXRpb24gPSBcIlwiO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NpemUgPSBwcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmICghcHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb2xzcGFuID0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMucmVsYXRpb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVsYXRpb24gPSBwcm9wcy5yZWxhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPbmUybWFueS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT25lMm1hbnkucHJvdG90eXBlLCBcInJlbGF0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVsYXRpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWxhdGlvbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE9uZTJtYW55O1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgT25lMm1hbnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PbmUybWFueS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbnZhciBQYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQYWdlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFBhZ2UocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gUGFnZTtcbn0oQ29udGFpbmVyV2lkZ2V0KSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGFnZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZsb2F0IGZyb20gXCIuL0Zsb2F0XCI7XG4vKipcbiAqIFByb2dyZXNzQmFyIGlucHV0XG4gKi9cbnZhciBQcm9ncmVzc0JhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUHJvZ3Jlc3NCYXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFByb2dyZXNzQmFyO1xufShGbG9hdCkpO1xuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9ncmVzc0Jhci5qcy5tYXAiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IFdpZGdldEZhY3RvcnkgZnJvbSBcIi4vV2lkZ2V0RmFjdG9yeVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbnZhciBTZWFyY2hGaWx0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VhcmNoRmlsdGVyKHNlYXJjaEZpZWxkcywgZmllbGRzLCBjb2x1bW5zKSB7XG4gICAgICAgIGlmIChjb2x1bW5zID09PSB2b2lkIDApIHsgY29sdW1ucyA9IDg7IH1cbiAgICAgICAgdGhpcy5fc2VhcmNoRmllbGRzID0gc2VhcmNoRmllbGRzO1xuICAgICAgICB0aGlzLl9maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMuX3NpbXBsZVNlYXJjaENvbnRhaW5lciA9IG5ldyBDb250YWluZXIoY29sdW1ucyk7XG4gICAgICAgIHRoaXMuX2FkdmFuY2VkU2VhcmNoQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcihjb2x1bW5zKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlYXJjaEZpbHRlci5wcm90b3R5cGUsIFwic2VhcmNoRmllbGRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VhcmNoRmllbGRzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlYXJjaEZpbHRlci5wcm90b3R5cGUsIFwiZmllbGRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmllbGRzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlYXJjaEZpbHRlci5wcm90b3R5cGUsIFwic2ltcGxlU2VhcmNoQ29udGFpbmVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2ltcGxlU2VhcmNoQ29udGFpbmVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlYXJjaEZpbHRlci5wcm90b3R5cGUsIFwiYWR2YW5jZWRTZWFyY2hDb250YWluZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZHZhbmNlZFNlYXJjaENvbnRhaW5lcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFNlYXJjaEZpbHRlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB3aWRnZXRGYWN0b3J5ID0gbmV3IFdpZGdldEZhY3RvcnkoKTtcbiAgICAgICAgdmFyIHNpbXBsZVNlYXJjaFdpZGdldHMgPSB0aGlzLnBhcnNlRmllbGRzKHRoaXMuc2VhcmNoRmllbGRzLnByaW1hcnksIHdpZGdldEZhY3RvcnkpO1xuICAgICAgICBzaW1wbGVTZWFyY2hXaWRnZXRzLmZvckVhY2goZnVuY3Rpb24gKHdpZGdldCkge1xuICAgICAgICAgICAgX3RoaXMuc2ltcGxlU2VhcmNoQ29udGFpbmVyLmFkZFdpZGdldCh3aWRnZXQpO1xuICAgICAgICAgICAgX3RoaXMuYWR2YW5jZWRTZWFyY2hDb250YWluZXIuYWRkV2lkZ2V0KHdpZGdldCk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYWR2YW5jZWRTZWFyY2hXaWRnZXRzID0gdGhpcy5wYXJzZUZpZWxkcyh0aGlzLnNlYXJjaEZpZWxkcy5zZWNvbmRhcnksIHdpZGdldEZhY3RvcnkpO1xuICAgICAgICBhZHZhbmNlZFNlYXJjaFdpZGdldHMuZm9yRWFjaChmdW5jdGlvbiAod2lkZ2V0KSB7XG4gICAgICAgICAgICBfdGhpcy5hZHZhbmNlZFNlYXJjaENvbnRhaW5lci5hZGRXaWRnZXQod2lkZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTZWFyY2hGaWx0ZXIucHJvdG90eXBlLnBhcnNlRmllbGRzID0gZnVuY3Rpb24gKHNlYXJjaEZpZWxkcywgd2lkZ2V0RmFjdG9yeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2VhcmNoRmllbGRzLm1hcChmdW5jdGlvbiAoc2VhcmNoRmllbGQpIHtcbiAgICAgICAgICAgIHZhciBmaWVsZEF0dHJpYnV0ZXMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMuZmllbGRzW3NlYXJjaEZpZWxkXSksIHsgbmFtZTogc2VhcmNoRmllbGQgfSk7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGZpZWxkQXR0cmlidXRlcy50eXBlO1xuICAgICAgICAgICAgcmV0dXJuIHdpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KHR5cGUsIGZpZWxkQXR0cmlidXRlcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbHMgY29udGFpbmVyJ3MgZmluZEJ5SWQgbWV0aG9kIHRvIGZpbmQgdGhlIHdpZGdldHMgbWF0Y2hpbmcgd2l0aCBwYXJhbSBpZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZCB0byBmaW5kXG4gICAgICovXG4gICAgU2VhcmNoRmlsdGVyLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZHZhbmNlZFNlYXJjaENvbnRhaW5lci5maW5kQnlJZChpZCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2VhcmNoRmlsdGVyO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZpbHRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNlYXJjaEZpbHRlci5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIFNlbGVjdGlvbiBmaWVsZCBmb3Iga2V5LXZhbHVlIGxpc3RzXG4gKi9cbnZhciBTZWxlY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNlbGVjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBzaXplXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fc2l6ZSA9IDE1MDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVlcyBhbmQga2V5c1xuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NlbGVjdGlvblZhbHVlcyA9IG5ldyBNYXAoW10pO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NpemUgPSBwcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmICghcHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb2xzcGFuID0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NlbGVjdGlvblZhbHVlcyA9IG5ldyBNYXAocHJvcHMuc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWxlY3Rpb24ucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdGlvbi5wcm90b3R5cGUsIFwic2VsZWN0aW9uVmFsdWVzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uVmFsdWVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uVmFsdWVzID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gU2VsZWN0aW9uO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2VsZWN0aW9uLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuL1dpZGdldFwiO1xudmFyIFNlcGFyYXRvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2VwYXJhdG9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNlcGFyYXRvcihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExhYmVsXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fbGFiZWwgPSBcIlwiO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbGFiZWwgPSBwcm9wcy5zdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VwYXJhdG9yLnByb3RvdHlwZSwgXCJsYWJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFNlcGFyYXRvci5wcm90b3R5cGUuZmluZEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gU2VwYXJhdG9yO1xufShXaWRnZXQpKTtcbmV4cG9ydCBkZWZhdWx0IFNlcGFyYXRvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNlcGFyYXRvci5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIE11bHRpbGluZSBpbnB1dCB3aXRoIG5vIGxlbmd0aCBsaW1pdC5cbiAqL1xudmFyIFRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRleHQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVGV4dChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIHBsYWNlIGhvbGRlclxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3BsYWNlaG9sZGVyID0gJyc7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLnBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3BsYWNlaG9sZGVyID0gcHJvcHMucGxhY2Vob2xkZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGV4dC5wcm90b3R5cGUsIFwicGxhY2Vob2xkZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gVGV4dDtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UZXh0LmpzLm1hcCIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgV2lkZ2V0RmFjdG9yeSBmcm9tIFwiLi9XaWRnZXRGYWN0b3J5XCI7XG52YXIgVHJlZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmVlKGZpZWxkcykge1xuICAgICAgICB0aGlzLl9jb2x1bW5zID0gW107XG4gICAgICAgIHRoaXMuX2ZpZWxkcyA9IGZpZWxkcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyZWUucHJvdG90eXBlLCBcImZpZWxkc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmVlLnByb3RvdHlwZSwgXCJjb2x1bW5zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFRyZWUucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHhtbCkge1xuICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICB2YXIgdmlldyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sLCBcInRleHQveG1sXCIpO1xuICAgICAgICB0aGlzLnBhcnNlTm9kZSh2aWV3LmRvY3VtZW50RWxlbWVudCk7XG4gICAgfTtcbiAgICBUcmVlLnByb3RvdHlwZS5wYXJzZU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgd2lkZ2V0RmFjdG9yeSA9IG5ldyBXaWRnZXRGYWN0b3J5KCk7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZS5jaGlsZE5vZGVzLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gY2hpbGQuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhZyA9IGNoaWxkLm5vZGVOYW1lO1xuICAgICAgICAgICAgICAgIHZhciB0YWdBdHRyaWJ1dGVzXzEgPSB7fTtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGNoaWxkLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhZ0F0dHJpYnV0ZXNfMVthdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAodGFnID09PSBcImZpZWxkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWVfMSA9IGNoaWxkLmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhdHRyV2lkZ2V0ID0gY2hpbGQuZ2V0QXR0cmlidXRlKFwid2lkZ2V0XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cldpZGdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnID0gYXR0cldpZGdldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZyA9IF90aGlzLl9maWVsZHNbbmFtZV8xXS50eXBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhZ0F0dHJpYnV0ZXNfMSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0YWdBdHRyaWJ1dGVzXzEpLCBfdGhpcy5fZmllbGRzW25hbWVfMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0ID0gd2lkZ2V0RmFjdG9yeS5jcmVhdGVXaWRnZXQodGFnLCB0YWdBdHRyaWJ1dGVzXzEpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9jb2x1bW5zLnB1c2god2lkZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSB3aWRnZXRzIG1hdGNoaW5nIHdpdGggcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgdG8gZmluZFxuICAgICAqL1xuICAgIFRyZWUucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmZpbmRCeUlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZmluZEJ5SWQoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUcmVlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UcmVlLmpzLm1hcCIsInZhciBXaWRnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV2lkZ2V0KHByb3BzKSB7XG4gICAgICAgIHRoaXMuX2NvbHNwYW4gPSBXaWRnZXQuX2RlZmF1bHRDb2xzcGFuO1xuICAgICAgICB0aGlzLl9yZWFkT25seSA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5jb2xzcGFuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29sc3BhbiA9ICtwcm9wcy5jb2xzcGFuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnJlYWRvbmx5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnJlYWRvbmx5ID09PSAxIHx8IHByb3BzLnJlYWRvbmx5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdpZGdldCwgXCJkZWZhdWx0Q29sc3BhblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFdpZGdldC5fZGVmYXVsdENvbHNwYW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBXaWRnZXQuX2RlZmF1bHRDb2xzcGFuID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2lkZ2V0LnByb3RvdHlwZSwgXCJyZWFkT25seVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVhZE9ubHkgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXaWRnZXQucHJvdG90eXBlLCBcImNvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2xzcGFuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY29sc3BhbiA9ICt2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgY29sc3BhblxuICAgICAqL1xuICAgIFdpZGdldC5fZGVmYXVsdENvbHNwYW4gPSAxO1xuICAgIHJldHVybiBXaWRnZXQ7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2lkZ2V0LmpzLm1hcCIsImltcG9ydCBOb3RlYm9vayBmcm9tIFwiLi9Ob3RlYm9va1wiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IEdyb3VwIGZyb20gXCIuL0dyb3VwXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgQ2hhciBmcm9tIFwiLi9DaGFyXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi9UZXh0XCI7XG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL1NlbGVjdGlvblwiO1xuaW1wb3J0IE1hbnkyb25lIGZyb20gXCIuL01hbnkyb25lXCI7XG5pbXBvcnQgQm9vbGVhbiBmcm9tIFwiLi9Cb29sZWFuXCI7XG5pbXBvcnQgSW50ZWdlciBmcm9tIFwiLi9JbnRlZ2VyXCI7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuL1dpZGdldFwiO1xuaW1wb3J0IEZsb2F0IGZyb20gXCIuL0Zsb2F0XCI7XG5pbXBvcnQgRmxvYXRUaW1lIGZyb20gXCIuL0Zsb2F0VGltZVwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgRGF0ZSBmcm9tIFwiLi9EYXRlXCI7XG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4vRGF0ZVRpbWVcIjtcbmltcG9ydCBNYW55Mm1hbnkgZnJvbSBcIi4vTWFueTJtYW55XCI7XG5pbXBvcnQgT25lMm1hbnkgZnJvbSBcIi4vT25lMm1hbnlcIjtcbmltcG9ydCBOZXdMaW5lIGZyb20gXCIuL05ld0xpbmVcIjtcbmltcG9ydCBTZXBhcmF0b3IgZnJvbSBcIi4vU2VwYXJhdG9yXCI7XG52YXIgV2lkZ2V0RmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXaWRnZXRGYWN0b3J5KCkge1xuICAgIH1cbiAgICBXaWRnZXRGYWN0b3J5LnByb3RvdHlwZS5zZXRXaWRnZXRDbGFzcyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5vdGVib29rXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBOb3RlYm9vaztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwYWdlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBQYWdlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdyb3VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBHcm91cDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsYWJlbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gTGFiZWw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2hhclwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gQ2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBUZXh0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ1dHRvblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gQnV0dG9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNlbGVjdGlvblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gU2VsZWN0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1hbnkyb25lXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBNYW55Mm9uZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBCb29sZWFuO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImludGVnZXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEludGVnZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZmxvYXRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEZsb2F0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImZsb2F0X3RpbWVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEZsb2F0VGltZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBEYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBEYXRlVGltZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcm9ncmVzc2JhclwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gUHJvZ3Jlc3NCYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWFueTJtYW55XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBNYW55Mm1hbnk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib25lMm1hbnlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE9uZTJtYW55O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm5ld2xpbmVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE5ld0xpbmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2VwYXJhdG9yXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBTZXBhcmF0b3I7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gV2lkZ2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXaWRnZXRGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVXaWRnZXQgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRXaWRnZXRDbGFzcyh0eXBlKTtcbiAgICAgICAgLy8gVE9ETzogV2lkZ2V0IENsYXNzIGNvbnN0cnVjdG9ycyBzaG91bGQgdXNlIG9ubHkgdGhlIHByb3BzIG5lZWRlZCwgbm90IGFsbCBwcm9wcy5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWZpYyBjYXNlcyAob25seSBzZWxlY3RlZCBwcm9wcyBzaG91bGQgYmUgdXNlZClcbiAgICAgICAgICAgIGNhc2UgXCJub3RlYm9va1wiOlxuICAgICAgICAgICAgY2FzZSBcInBhZ2VcIjpcbiAgICAgICAgICAgIGNhc2UgXCJncm91cFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5fd2lkZ2V0Q2xhc3MocHJvcHMpO1xuICAgICAgICAgICAgLy8gR2VuZXJpYyBjYXNlXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5fd2lkZ2V0Q2xhc3MocHJvcHMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gV2lkZ2V0RmFjdG9yeTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBXaWRnZXRGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2lkZ2V0RmFjdG9yeS5qcy5tYXAiLCJpbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgVHJlZSBmcm9tIFwiLi9UcmVlXCI7XG5pbXBvcnQgQ2hhciBmcm9tIFwiLi9DaGFyXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSBcIi4vU2VsZWN0aW9uXCI7XG5pbXBvcnQgTWFueTJvbmUgZnJvbSBcIi4vTWFueTJvbmVcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbmltcG9ydCBCb29sZWFuIGZyb20gXCIuL0Jvb2xlYW5cIjtcbmltcG9ydCBJbnRlZ2VyIGZyb20gXCIuL0ludGVnZXJcIjtcbmltcG9ydCBGbG9hdCBmcm9tIFwiLi9GbG9hdFwiO1xuaW1wb3J0IEZsb2F0VGltZSBmcm9tIFwiLi9GbG9hdFRpbWVcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IERhdGUgZnJvbSBcIi4vRGF0ZVwiO1xuaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuL0RhdGVUaW1lXCI7XG5pbXBvcnQgTWFueTJtYW55IGZyb20gXCIuL01hbnkybWFueVwiO1xuaW1wb3J0IE9uZTJtYW55IGZyb20gXCIuL09uZTJtYW55XCI7XG5pbXBvcnQgU2VhcmNoRmlsdGVyIGZyb20gXCIuL1NlYXJjaEZpbHRlclwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vVGV4dFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgTm90ZWJvb2sgZnJvbSBcIi4vTm90ZWJvb2tcIjtcbmltcG9ydCBHcm91cCBmcm9tIFwiLi9Hcm91cFwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IFNlcGFyYXRvciBmcm9tIFwiLi9TZXBhcmF0b3JcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5leHBvcnQgeyBDaGFyLCBTZWxlY3Rpb24sIE1hbnkyb25lLCBGaWVsZCwgV2lkZ2V0LCBGb3JtLCBUcmVlLCBCb29sZWFuLCBPbmUybWFueSwgSW50ZWdlciwgRmxvYXQsIEZsb2F0VGltZSwgRGF0ZSwgRGF0ZVRpbWUsIE1hbnkybWFueSwgU2VhcmNoRmlsdGVyLCBDb250YWluZXIsIENvbnRhaW5lcldpZGdldCwgVGV4dCwgUHJvZ3Jlc3NCYXIsIE5vdGVib29rLCBHcm91cCwgUGFnZSwgTGFiZWwsIFNlcGFyYXRvciwgQnV0dG9uLCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiIWZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbIFwicmVhY3RcIiBdLCBmYWN0b3J5KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzLk1lZGlhUXVlcnkgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSkgOiByb290Lk1lZGlhUXVlcnkgPSBmYWN0b3J5KHJvb3QuUmVhY3QpO1xufShcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG1vZHVsZXMpIHtcbiAgICAgICAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuICAgICAgICAgICAgaWYgKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSByZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiAgICAgICAgICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiAgICAgICAgICAgICAgICBpOiBtb2R1bGVJZCxcbiAgICAgICAgICAgICAgICBsOiAhMSxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSwgXG4gICAgICAgICAgICBtb2R1bGUubCA9ICEwLCBtb2R1bGUuZXhwb3J0cztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuICAgICAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcywgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcywgXG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuICAgICAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICBnZXQ6IGdldHRlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgdmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2R1bGUuZGVmYXVsdDtcbiAgICAgICAgICAgIH0gOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCBcImFcIiwgZ2V0dGVyKSwgZ2V0dGVyO1xuICAgICAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuICAgIH0oWyBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gICAgICAgICAgICBpZiAobykge1xuICAgICAgICAgICAgICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiBvKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT2JqZWN0XCIgPT09IG4gJiYgby5jb25zdHJ1Y3RvciAmJiAobiA9IG8uY29uc3RydWN0b3IubmFtZSksIFwiTWFwXCIgPT09IG4gfHwgXCJTZXRcIiA9PT0gbiA/IEFycmF5LmZyb20obykgOiBcIkFyZ3VtZW50c1wiID09PSBuIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pID8gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKSA6IHZvaWQgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICAgICAgICAgICAgKG51bGwgPT0gbGVuIHx8IGxlbiA+IGFyci5sZW5ndGgpICYmIChsZW4gPSBhcnIubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcbiAgICAgICAgICAgIHJldHVybiBhcnIyO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hcnIgPSBbXSwgX24gPSAhMCwgX2QgPSAhMSwgX2UgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX3MsIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSkgJiYgKF9hcnIucHVzaChfcy52YWx1ZSksIFxuICAgICAgICAgICAgICAgICAgICAhaSB8fCBfYXJyLmxlbmd0aCAhPT0gaSk7IF9uID0gITApIDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgX2QgPSAhMCwgX2UgPSBlcnI7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9uIHx8IG51bGwgPT0gX2kucmV0dXJuIHx8IF9pLnJldHVybigpO1xuICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX2FycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X18pLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfbWF0Y2htZWRpYXF1ZXJ5X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfbWF0Y2htZWRpYXF1ZXJ5X19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfbWF0Y2htZWRpYXF1ZXJ5X18pLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfaHlwaGVuYXRlX3N0eWxlX25hbWVfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMiksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19zaGFsbG93X2VxdWFsX29iamVjdHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfc2hhbGxvd19lcXVhbF9vYmplY3RzX19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfc2hhbGxvd19lcXVhbF9vYmplY3RzX18pLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX3RvUXVlcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMyksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fQ29udGV4dF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KSwgbWFrZVF1ZXJ5ID0gZnVuY3Rpb24oc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncy5xdWVyeSB8fCBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X190b1F1ZXJ5X18uYSkoc2V0dGluZ3MpO1xuICAgICAgICB9LCBoeXBoZW5hdGVLZXlzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICBpZiAoIW9iaikgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgICAgICByZXR1cm4gMCA9PT0ga2V5cy5sZW5ndGggPyBudWxsIDoga2V5cy5yZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0W09iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfaHlwaGVuYXRlX3N0eWxlX25hbWVfXy5hKShrZXkpXSA9IG9ialtrZXldLCBcbiAgICAgICAgICAgICAgICByZXN1bHQ7XG4gICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0sIHVzZUlzVXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcmVmID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZVJlZighMSk7XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZWYuY3VycmVudCA9ICEwO1xuICAgICAgICAgICAgfSwgW10pLCByZWYuY3VycmVudDtcbiAgICAgICAgfSwgdXNlRGV2aWNlID0gZnVuY3Rpb24oZGV2aWNlRnJvbVByb3BzKSB7XG4gICAgICAgICAgICB2YXIgZGV2aWNlRnJvbUNvbnRleHQgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlQ29udGV4dChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX0NvbnRleHRfXy5hKSwgZ2V0RGV2aWNlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh5cGhlbmF0ZUtleXMoZGV2aWNlRnJvbVByb3BzKSB8fCBoeXBoZW5hdGVLZXlzKGRldmljZUZyb21Db250ZXh0KTtcbiAgICAgICAgICAgIH0sIF9SZWFjdCR1c2VTdGF0ZSA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VTdGF0ZShnZXREZXZpY2UpLCBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSwgZGV2aWNlID0gX1JlYWN0JHVzZVN0YXRlMlswXSwgc2V0RGV2aWNlID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdEZXZpY2UgPSBnZXREZXZpY2UoKTtcbiAgICAgICAgICAgICAgICBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfc2hhbGxvd19lcXVhbF9vYmplY3RzX19fZGVmYXVsdCgpKGRldmljZSwgbmV3RGV2aWNlKSB8fCBzZXREZXZpY2UobmV3RGV2aWNlKTtcbiAgICAgICAgICAgIH0sIFsgZGV2aWNlRnJvbVByb3BzLCBkZXZpY2VGcm9tQ29udGV4dCBdKSwgZGV2aWNlO1xuICAgICAgICB9LCB1c2VRdWVyeSA9IGZ1bmN0aW9uKHNldHRpbmdzKSB7XG4gICAgICAgICAgICB2YXIgZ2V0UXVlcnkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFrZVF1ZXJ5KHNldHRpbmdzKTtcbiAgICAgICAgICAgIH0sIF9SZWFjdCR1c2VTdGF0ZTMgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlU3RhdGUoZ2V0UXVlcnkpLCBfUmVhY3QkdXNlU3RhdGU0ID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlMywgMiksIHF1ZXJ5ID0gX1JlYWN0JHVzZVN0YXRlNFswXSwgc2V0UXVlcnkgPSBfUmVhY3QkdXNlU3RhdGU0WzFdO1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1F1ZXJ5ID0gZ2V0UXVlcnkoKTtcbiAgICAgICAgICAgICAgICBxdWVyeSAhPT0gbmV3UXVlcnkgJiYgc2V0UXVlcnkobmV3UXVlcnkpO1xuICAgICAgICAgICAgfSwgWyBzZXR0aW5ncyBdKSwgcXVlcnk7XG4gICAgICAgIH0sIHVzZU1hdGNoTWVkaWEgPSBmdW5jdGlvbihxdWVyeSwgZGV2aWNlKSB7XG4gICAgICAgICAgICB2YXIgZ2V0TWF0Y2hNZWRpYSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfbWF0Y2htZWRpYXF1ZXJ5X19fZGVmYXVsdCgpKHF1ZXJ5LCBkZXZpY2UgfHwge30sICEhZGV2aWNlKTtcbiAgICAgICAgICAgIH0sIF9SZWFjdCR1c2VTdGF0ZTUgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlU3RhdGUoZ2V0TWF0Y2hNZWRpYSksIF9SZWFjdCR1c2VTdGF0ZTYgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGU1LCAyKSwgbXEgPSBfUmVhY3QkdXNlU3RhdGU2WzBdLCBzZXRNcSA9IF9SZWFjdCR1c2VTdGF0ZTZbMV0sIGlzVXBkYXRlID0gdXNlSXNVcGRhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1VwZGF0ZSAmJiBzZXRNcShnZXRNYXRjaE1lZGlhKCkpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbXEuZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCBbIHF1ZXJ5LCBkZXZpY2UgXSksIG1xO1xuICAgICAgICB9LCB1c2VNYXRjaGVzID0gZnVuY3Rpb24obWVkaWFRdWVyeSkge1xuICAgICAgICAgICAgdmFyIF9SZWFjdCR1c2VTdGF0ZTcgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlU3RhdGUobWVkaWFRdWVyeS5tYXRjaGVzKSwgX1JlYWN0JHVzZVN0YXRlOCA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZTcsIDIpLCBtYXRjaGVzID0gX1JlYWN0JHVzZVN0YXRlOFswXSwgc2V0TWF0Y2hlcyA9IF9SZWFjdCR1c2VTdGF0ZThbMV07XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXBkYXRlTWF0Y2hlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRNYXRjaGVzKG1lZGlhUXVlcnkubWF0Y2hlcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVkaWFRdWVyeS5hZGRMaXN0ZW5lcih1cGRhdGVNYXRjaGVzKSwgdXBkYXRlTWF0Y2hlcygpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVkaWFRdWVyeS5yZW1vdmVMaXN0ZW5lcih1cGRhdGVNYXRjaGVzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSwgWyBtZWRpYVF1ZXJ5IF0pLCBtYXRjaGVzO1xuICAgICAgICB9LCB1c2VNZWRpYVF1ZXJ5ID0gZnVuY3Rpb24oc2V0dGluZ3MsIGRldmljZSwgb25DaGFuZ2UpIHtcbiAgICAgICAgICAgIHZhciBkZXZpY2VTZXR0aW5ncyA9IHVzZURldmljZShkZXZpY2UpLCBxdWVyeSA9IHVzZVF1ZXJ5KHNldHRpbmdzKTtcbiAgICAgICAgICAgIGlmICghcXVlcnkpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3IgbWlzc2luZyBNZWRpYVF1ZXJ5IVwiKTtcbiAgICAgICAgICAgIHZhciBtcSA9IHVzZU1hdGNoTWVkaWEocXVlcnksIGRldmljZVNldHRpbmdzKSwgbWF0Y2hlcyA9IHVzZU1hdGNoZXMobXEpLCBpc1VwZGF0ZSA9IHVzZUlzVXBkYXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpc1VwZGF0ZSAmJiBvbkNoYW5nZSAmJiBvbkNoYW5nZShtYXRjaGVzKTtcbiAgICAgICAgICAgIH0sIFsgbWF0Y2hlcyBdKSwgbWF0Y2hlcztcbiAgICAgICAgfTtcbiAgICAgICAgX193ZWJwYWNrX2V4cG9ydHNfXy5hID0gdXNlTWVkaWFRdWVyeTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIHRvSHlwaGVuTG93ZXIobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBcIi1cIiArIG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkgcmV0dXJuIGNhY2hlW25hbWVdO1xuICAgICAgICAgICAgdmFyIGhOYW1lID0gbmFtZS5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sIHRvSHlwaGVuTG93ZXIpO1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlW25hbWVdID0gbXNQYXR0ZXJuLnRlc3QoaE5hbWUpID8gXCItXCIgKyBoTmFtZSA6IGhOYW1lO1xuICAgICAgICB9XG4gICAgICAgIHZhciB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2csIG1zUGF0dGVybiA9IC9ebXMtLywgY2FjaGUgPSB7fTtcbiAgICAgICAgX193ZWJwYWNrX2V4cG9ydHNfXy5hID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9oeXBoZW5hdGVfc3R5bGVfbmFtZV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19tZWRpYVF1ZXJ5X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKSwgbmVnYXRlID0gZnVuY3Rpb24oY29uZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwibm90IFwiLmNvbmNhdChjb25kKTtcbiAgICAgICAgfSwga2V5VmFsID0gZnVuY3Rpb24oaywgdikge1xuICAgICAgICAgICAgdmFyIHJlYWxLZXkgPSBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2h5cGhlbmF0ZV9zdHlsZV9uYW1lX18uYSkoayk7XG4gICAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIiA9PSB0eXBlb2YgdiAmJiAodiA9IFwiXCIuY29uY2F0KHYsIFwicHhcIikpLCAhMCA9PT0gdiA/IHJlYWxLZXkgOiAhMSA9PT0gdiA/IG5lZ2F0ZShyZWFsS2V5KSA6IFwiKFwiLmNvbmNhdChyZWFsS2V5LCBcIjogXCIpLmNvbmNhdCh2LCBcIilcIik7XG4gICAgICAgIH0sIGpvaW4gPSBmdW5jdGlvbihjb25kcykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbmRzLmpvaW4oXCIgYW5kIFwiKTtcbiAgICAgICAgfSwgdG9RdWVyeSA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgdmFyIHJ1bGVzID0gW107XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19tZWRpYVF1ZXJ5X18uYS5hbGwpLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gb2JqW2tdO1xuICAgICAgICAgICAgICAgIG51bGwgIT0gdiAmJiBydWxlcy5wdXNoKGtleVZhbChrLCB2KSk7XG4gICAgICAgICAgICB9KSwgam9pbihydWxlcyk7XG4gICAgICAgIH07XG4gICAgICAgIF9fd2VicGFja19leHBvcnRzX18uYSA9IHRvUXVlcnk7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBcIlNFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEXCI7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fKSwgQ29udGV4dCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS5jcmVhdGVDb250ZXh0KCk7XG4gICAgICAgIF9fd2VicGFja19leHBvcnRzX18uYSA9IENvbnRleHQ7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiAhMFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXNlTWVkaWFRdWVyeV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19Db21wb25lbnRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3RvUXVlcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMyksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fQ29udGV4dF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZGVmYXVsdFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX0NvbXBvbmVudF9fLmE7XG4gICAgICAgIH0pLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJ1c2VNZWRpYVF1ZXJ5XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXNlTWVkaWFRdWVyeV9fLmE7XG4gICAgICAgIH0pLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJ0b1F1ZXJ5XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdG9RdWVyeV9fLmE7XG4gICAgICAgIH0pLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJDb250ZXh0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fQ29udGV4dF9fLmE7XG4gICAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gTXFsKHF1ZXJ5LCB2YWx1ZXMsIGZvcmNlU3RhdGljKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIG1xbCAmJiBtcWwuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBtcWwgJiYgbXFsLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZShldnQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1hdGNoZXMgPSBldnQubWF0Y2hlcywgc2VsZi5tZWRpYSA9IGV2dC5tZWRpYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAgICAgICAgICAgbXFsICYmIG1xbC5yZW1vdmVMaXN0ZW5lcih1cGRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKGR5bmFtaWNNYXRjaCAmJiAhZm9yY2VTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbXFsID0gZHluYW1pY01hdGNoLmNhbGwod2luZG93LCBxdWVyeSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRjaGVzID0gbXFsLm1hdGNoZXMsIHRoaXMubWVkaWEgPSBtcWwubWVkaWEsIG1xbC5hZGRMaXN0ZW5lcih1cGRhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIHRoaXMubWF0Y2hlcyA9IHN0YXRpY01hdGNoKHF1ZXJ5LCB2YWx1ZXMpLCB0aGlzLm1lZGlhID0gcXVlcnk7XG4gICAgICAgICAgICB0aGlzLmFkZExpc3RlbmVyID0gYWRkTGlzdGVuZXIsIHRoaXMucmVtb3ZlTGlzdGVuZXIgPSByZW1vdmVMaXN0ZW5lciwgdGhpcy5kaXNwb3NlID0gZGlzcG9zZTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBtYXRjaE1lZGlhKHF1ZXJ5LCB2YWx1ZXMsIGZvcmNlU3RhdGljKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1xbChxdWVyeSwgdmFsdWVzLCBmb3JjZVN0YXRpYyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXRpY01hdGNoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KS5tYXRjaCwgZHluYW1pY01hdGNoID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93ID8gd2luZG93Lm1hdGNoTWVkaWEgOiBudWxsO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IG1hdGNoTWVkaWE7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBtYXRjaFF1ZXJ5KG1lZGlhUXVlcnksIHZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlUXVlcnkobWVkaWFRdWVyeSkuc29tZShmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICAgICAgICAgIHZhciBpbnZlcnNlID0gcXVlcnkuaW52ZXJzZSwgdHlwZU1hdGNoID0gXCJhbGxcIiA9PT0gcXVlcnkudHlwZSB8fCB2YWx1ZXMudHlwZSA9PT0gcXVlcnkudHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZU1hdGNoICYmIGludmVyc2UgfHwgIXR5cGVNYXRjaCAmJiAhaW52ZXJzZSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIHZhciBleHByZXNzaW9uc01hdGNoID0gcXVlcnkuZXhwcmVzc2lvbnMuZXZlcnkoZnVuY3Rpb24oZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmVhdHVyZSA9IGV4cHJlc3Npb24uZmVhdHVyZSwgbW9kaWZpZXIgPSBleHByZXNzaW9uLm1vZGlmaWVyLCBleHBWYWx1ZSA9IGV4cHJlc3Npb24udmFsdWUsIHZhbHVlID0gdmFsdWVzW2ZlYXR1cmVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJvcmllbnRhdGlvblwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzY2FuXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZXhwVmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ3aWR0aFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJoZWlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGV2aWNlLXdpZHRoXCI6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRldmljZS1oZWlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cFZhbHVlID0gdG9QeChleHBWYWx1ZSksIHZhbHVlID0gdG9QeCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZXNvbHV0aW9uXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBWYWx1ZSA9IHRvRHBpKGV4cFZhbHVlKSwgdmFsdWUgPSB0b0RwaSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhc3BlY3QtcmF0aW9cIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGV2aWNlLWFzcGVjdC1yYXRpb1wiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZXZpY2UtcGl4ZWwtcmF0aW9cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cFZhbHVlID0gdG9EZWNpbWFsKGV4cFZhbHVlKSwgdmFsdWUgPSB0b0RlY2ltYWwodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZ3JpZFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2xvclwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2xvci1pbmRleFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtb25vY2hyb21lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBWYWx1ZSA9IHBhcnNlSW50KGV4cFZhbHVlLCAxMCkgfHwgMSwgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSwgMTApIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtb2RpZmllcikge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtaW5cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA+PSBleHBWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA8PSBleHBWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IGV4cFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4cHJlc3Npb25zTWF0Y2ggJiYgIWludmVyc2UgfHwgIWV4cHJlc3Npb25zTWF0Y2ggJiYgaW52ZXJzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBhcnNlUXVlcnkobWVkaWFRdWVyeSkge1xuICAgICAgICAgICAgcmV0dXJuIG1lZGlhUXVlcnkuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbihxdWVyeSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkudHJpbSgpO1xuICAgICAgICAgICAgICAgIHZhciBjYXB0dXJlcyA9IHF1ZXJ5Lm1hdGNoKFJFX01FRElBX1FVRVJZKSwgbW9kaWZpZXIgPSBjYXB0dXJlc1sxXSwgdHlwZSA9IGNhcHR1cmVzWzJdLCBleHByZXNzaW9ucyA9IGNhcHR1cmVzWzNdIHx8IFwiXCIsIHBhcnNlZCA9IHt9O1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZWQuaW52ZXJzZSA9ICEhbW9kaWZpZXIgJiYgXCJub3RcIiA9PT0gbW9kaWZpZXIudG9Mb3dlckNhc2UoKSwgcGFyc2VkLnR5cGUgPSB0eXBlID8gdHlwZS50b0xvd2VyQ2FzZSgpIDogXCJhbGxcIiwgXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucy5tYXRjaCgvXFwoW15cXCldK1xcKS9nKSB8fCBbXSwgcGFyc2VkLmV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnMubWFwKGZ1bmN0aW9uKGV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhcHR1cmVzID0gZXhwcmVzc2lvbi5tYXRjaChSRV9NUV9FWFBSRVNTSU9OKSwgZmVhdHVyZSA9IGNhcHR1cmVzWzFdLnRvTG93ZXJDYXNlKCkubWF0Y2goUkVfTVFfRkVBVFVSRSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcjogZmVhdHVyZVsxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmU6IGZlYXR1cmVbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2FwdHVyZXNbMl1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KSwgcGFyc2VkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdG9EZWNpbWFsKHJhdGlvKSB7XG4gICAgICAgICAgICB2YXIgbnVtYmVycywgZGVjaW1hbCA9IE51bWJlcihyYXRpbyk7XG4gICAgICAgICAgICByZXR1cm4gZGVjaW1hbCB8fCAobnVtYmVycyA9IHJhdGlvLm1hdGNoKC9eKFxcZCspXFxzKlxcL1xccyooXFxkKykkLyksIGRlY2ltYWwgPSBudW1iZXJzWzFdIC8gbnVtYmVyc1syXSksIFxuICAgICAgICAgICAgZGVjaW1hbDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0b0RwaShyZXNvbHV0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KHJlc29sdXRpb24pO1xuICAgICAgICAgICAgc3dpdGNoIChTdHJpbmcocmVzb2x1dGlvbikubWF0Y2goUkVfUkVTT0xVVElPTl9VTklUKVsxXSkge1xuICAgICAgICAgICAgICBjYXNlIFwiZHBjbVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAvIDIuNTQ7XG5cbiAgICAgICAgICAgICAgY2FzZSBcImRwcHhcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gOTYgKiB2YWx1ZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0b1B4KGxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdChsZW5ndGgpO1xuICAgICAgICAgICAgc3dpdGNoIChTdHJpbmcobGVuZ3RoKS5tYXRjaChSRV9MRU5HVEhfVU5JVClbMV0pIHtcbiAgICAgICAgICAgICAgY2FzZSBcImVtXCI6XG4gICAgICAgICAgICAgIGNhc2UgXCJyZW1cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTYgKiB2YWx1ZTtcblxuICAgICAgICAgICAgICBjYXNlIFwiY21cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gOTYgKiB2YWx1ZSAvIDIuNTQ7XG5cbiAgICAgICAgICAgICAgY2FzZSBcIm1tXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDk2ICogdmFsdWUgLyAyLjU0IC8gMTA7XG5cbiAgICAgICAgICAgICAgY2FzZSBcImluXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDk2ICogdmFsdWU7XG5cbiAgICAgICAgICAgICAgY2FzZSBcInB0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDcyICogdmFsdWU7XG5cbiAgICAgICAgICAgICAgY2FzZSBcInBjXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDcyICogdmFsdWUgLyAxMjtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBleHBvcnRzLm1hdGNoID0gbWF0Y2hRdWVyeSwgZXhwb3J0cy5wYXJzZSA9IHBhcnNlUXVlcnk7XG4gICAgICAgIHZhciBSRV9NRURJQV9RVUVSWSA9IC8oPzoob25seXxub3QpP1xccyooW15cXHNcXChcXCldKykoPzpcXHMqYW5kKT9cXHMqKT8oLispPy9pLCBSRV9NUV9FWFBSRVNTSU9OID0gL1xcKFxccyooW15cXHNcXDpcXCldKylcXHMqKD86XFw6XFxzKihbXlxcc1xcKV0rKSk/XFxzKlxcKS8sIFJFX01RX0ZFQVRVUkUgPSAvXig/OihtaW58bWF4KS0pPyguKykvLCBSRV9MRU5HVEhfVU5JVCA9IC8oZW18cmVtfHB4fGNtfG1tfGlufHB0fHBjKT8kLywgUkVfUkVTT0xVVElPTl9VTklUID0gLyhkcGl8ZHBjbXxkcHB4KT8kLztcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIHNoYWxsb3dFcXVhbE9iamVjdHMob2JqQSwgb2JqQikge1xuICAgICAgICAgICAgaWYgKG9iakEgPT09IG9iakIpIHJldHVybiAhMDtcbiAgICAgICAgICAgIGlmICghb2JqQSB8fCAhb2JqQikgcmV0dXJuICExO1xuICAgICAgICAgICAgdmFyIGFLZXlzID0gT2JqZWN0LmtleXMob2JqQSksIGJLZXlzID0gT2JqZWN0LmtleXMob2JqQiksIGxlbiA9IGFLZXlzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChiS2V5cy5sZW5ndGggIT09IGxlbikgcmV0dXJuICExO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBhS2V5c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAob2JqQVtrZXldICE9PSBvYmpCW2tleV0gfHwgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXkpKSByZXR1cm4gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gITA7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBzaGFsbG93RXF1YWxPYmplY3RzO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpO1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgICAgIH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgICAgICAgICAgICAgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICAgICAgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSBpbiBvYmogPyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogITBcbiAgICAgICAgICAgIH0pIDogb2JqW2tleV0gPSB2YWx1ZSwgb2JqO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMiksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fKSwgc3RyaW5nT3JOdW1iZXIgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5vbmVPZlR5cGUoWyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm51bWJlciBdKSwgbWF0Y2hlcnMgPSB7XG4gICAgICAgICAgICBvcmllbnRhdGlvbjogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEub25lT2YoWyBcInBvcnRyYWl0XCIsIFwibGFuZHNjYXBlXCIgXSksXG4gICAgICAgICAgICBzY2FuOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5vbmVPZihbIFwicHJvZ3Jlc3NpdmVcIiwgXCJpbnRlcmxhY2VcIiBdKSxcbiAgICAgICAgICAgIGFzcGVjdFJhdGlvOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsXG4gICAgICAgICAgICBkZXZpY2VBc3BlY3RSYXRpbzogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuc3RyaW5nLFxuICAgICAgICAgICAgaGVpZ2h0OiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIGRldmljZUhlaWdodDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICB3aWR0aDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBkZXZpY2VXaWR0aDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBjb2xvcjogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIGNvbG9ySW5kZXg6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBtb25vY2hyb21lOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgcmVzb2x1dGlvbjogc3RyaW5nT3JOdW1iZXJcbiAgICAgICAgfSwgZmVhdHVyZXMgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIG1pbkFzcGVjdFJhdGlvOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsXG4gICAgICAgICAgICBtYXhBc3BlY3RSYXRpbzogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuc3RyaW5nLFxuICAgICAgICAgICAgbWluRGV2aWNlQXNwZWN0UmF0aW86IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLnN0cmluZyxcbiAgICAgICAgICAgIG1heERldmljZUFzcGVjdFJhdGlvOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIG1pbkRldmljZUhlaWdodDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBtYXhEZXZpY2VIZWlnaHQ6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWluV2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWF4V2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWluRGV2aWNlV2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWF4RGV2aWNlV2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWluQ29sb3I6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICAgICAgICAgIG1heENvbG9yOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtaW5Db2xvckluZGV4OiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtYXhDb2xvckluZGV4OiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtaW5Nb25vY2hyb21lOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtYXhNb25vY2hyb21lOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtaW5SZXNvbHV0aW9uOiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIG1heFJlc29sdXRpb246IHN0cmluZ09yTnVtYmVyXG4gICAgICAgIH0sIG1hdGNoZXJzKSwgdHlwZXMgPSB7XG4gICAgICAgICAgICBhbGw6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBncmlkOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgYXVyYWw6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBicmFpbGxlOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgaGFuZGhlbGQ6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBwcmludDogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIHByb2plY3Rpb246IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBzY3JlZW46IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICB0dHk6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICB0djogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIGVtYm9zc2VkOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sXG4gICAgICAgIH0sIGFsbCA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdHlwZXMpLCBmZWF0dXJlcyk7XG4gICAgICAgIG1hdGNoZXJzLnR5cGUgPSBPYmplY3Qua2V5cyh0eXBlcyksIF9fd2VicGFja19leHBvcnRzX18uYSA9IHtcbiAgICAgICAgICAgIGFsbDogYWxsLFxuICAgICAgICAgICAgdHlwZXM6IHR5cGVzLFxuICAgICAgICAgICAgbWF0Y2hlcnM6IG1hdGNoZXJzLFxuICAgICAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzXG4gICAgICAgIH07XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIHZhciBSZWFjdElzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KShSZWFjdElzLmlzRWxlbWVudCwgITApO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgIWZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgdHlwZSB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHR5cGUgfHwgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgXCJvYmplY3RcIiA9PSB0eXBlb2YgdHlwZSAmJiBudWxsICE9PSB0eXBlICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09IHR5cGVvZiBvYmplY3QgJiYgbnVsbCAhPT0gb2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSB8fCAoaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSAhMCwgXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS5cIikpLCBcbiAgICAgICAgICAgICAgICBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIm9iamVjdFwiID09IHR5cGVvZiBvYmplY3QgJiYgbnVsbCAhPT0gb2JqZWN0ICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhhc1N5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5mb3IsIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpIDogNjAxMDMsIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKSA6IDYwMTA2LCBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpIDogNjAxMDcsIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIikgOiA2MDEwOCwgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKSA6IDYwMTE0LCBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpIDogNjAxMDksIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpIDogNjAxMTAsIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpIDogNjAxMTEsIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKSA6IDYwMTExLCBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpIDogNjAxMTIsIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIikgOiA2MDExMywgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlX2xpc3RcIikgOiA2MDEyMCwgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikgOiA2MDExNSwgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmxhenlcIikgOiA2MDExNiwgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5ibG9ja1wiKSA6IDYwMTIxLCBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmZ1bmRhbWVudGFsXCIpIDogNjAxMTcsIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnJlc3BvbmRlclwiKSA6IDYwMTE4LCBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnNjb3BlXCIpIDogNjAxMTksIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRSwgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSwgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFLCBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFLCBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFLCBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSwgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFLCBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFLCBNZW1vID0gUkVBQ1RfTUVNT19UWVBFLCBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRSwgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFLCBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSwgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFLCBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9ICExO1xuICAgICAgICAgICAgZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGUsIGV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZSwgZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXIsIFxuICAgICAgICAgICAgZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXIsIGV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQsIGV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWYsIFxuICAgICAgICAgICAgZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50LCBleHBvcnRzLkxhenkgPSBMYXp5LCBleHBvcnRzLk1lbW8gPSBNZW1vLCBleHBvcnRzLlBvcnRhbCA9IFBvcnRhbCwgXG4gICAgICAgICAgICBleHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXIsIGV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGUsIGV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZSwgXG4gICAgICAgICAgICBleHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGUsIGV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGUsIFxuICAgICAgICAgICAgZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyLCBleHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXIsIFxuICAgICAgICAgICAgZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQsIGV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmLCBleHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50LCBcbiAgICAgICAgICAgIGV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5LCBleHBvcnRzLmlzTWVtbyA9IGlzTWVtbywgZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsLCBleHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyLCBcbiAgICAgICAgICAgIGV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlLCBleHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlLCBleHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSwgXG4gICAgICAgICAgICBleHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgICAgICAgfSgpO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBSZWFjdElzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSwgYXNzaWduID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSksIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KSwgY2hlY2tQcm9wVHlwZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KSwgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpLCBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiV2FybmluZzogXCIgKyB0ZXh0O1xuICAgICAgICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9LCBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGl0ZXJhdG9yRm4pIHJldHVybiBpdGVyYXRvckZuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4ID09PSB5ID8gMCAhPT0geCB8fCAxIC8geCA9PSAxIC8geSA6IHggIT09IHggJiYgeSAhPT0geTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2UsIHRoaXMuc3RhY2sgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUywgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lLCBcbiAgICAgICAgICAgICAgICAgICAgc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFwiQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiBSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVyci5uYW1lID0gXCJJbnZhcmlhbnQgVmlvbGF0aW9uXCIsIGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBjb25zb2xlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArIFwiOlwiICsgcHJvcE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJiBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDMgJiYgKHByaW50V2FybmluZyhcIllvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uIGZ1bmN0aW9uIGZvciB0aGUgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIHByb3Agb24gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYC4gVGhpcyBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiBZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzIGxpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyBmb3IgZGV0YWlscy5cIiksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9ICEwLCBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCA9PSBwcm9wc1twcm9wTmFtZV0gPyBpc1JlcXVpcmVkID8gbmV3IFByb3BUeXBlRXJyb3IobnVsbCA9PT0gcHJvcHNbcHJvcE5hbWVdID8gXCJUaGUgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuXCIgOiBcIlRoZSBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLlwiKSA6IG51bGwgOiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fSwgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwLCBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgITEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCAhMCksIGNoYWluZWRDaGVja1R5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSAhPT0gZXhwZWN0ZWRUeXBlKSByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGBcIiArIGV4cGVjdGVkVHlwZSArIFwiYC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHR5cGVDaGVja2VyKSByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJQcm9wZXJ0eSBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgY29tcG9uZW50IGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBhbiBhcnJheS5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArIFwiW1wiICsgaSArIFwiXVwiLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSkgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgaW5zdGFuY2Ugb2YgYFwiICsgZXhwZWN0ZWRDbGFzc05hbWUgKyBcImAuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXSwgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzeW1ib2xcIiA9PT0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHZhbHVlIGBcIiArIFN0cmluZyhwcm9wVmFsdWUpICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIG9uZSBvZiBcIiArIHZhbHVlc1N0cmluZyArIFwiLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpID8gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIDogKHByaW50V2FybmluZyhhcmd1bWVudHMubGVuZ3RoID4gMSA/IFwiSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgXCIgKyBhcmd1bWVudHMubGVuZ3RoICsgXCIgYXJndW1lbnRzLiBBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS5cIiA6IFwiSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuXCIpLCBcbiAgICAgICAgICAgICAgICBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdHlwZUNoZWNrZXIpIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIlByb3BlcnR5IGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiBjb21wb25lbnQgYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdLCBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiICE9PSBwcm9wVHlwZSkgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgcHJvcFR5cGUgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgXCIuXCIgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCA9PSAoMCwgYXJyYXlPZlR5cGVDaGVja2Vyc1tpXSkocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSByZXR1cm4gcHJpbnRXYXJuaW5nKFwiSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LlwiKSwgXG4gICAgICAgICAgICAgICAgZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBjaGVja2VyKSByZXR1cm4gcHJpbnRXYXJuaW5nKFwiSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0IHJlY2VpdmVkIFwiICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgXCIgYXQgaW5kZXggXCIgKyBpICsgXCIuXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdLCBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiICE9PSBwcm9wVHlwZSkgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgcHJvcFR5cGUgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYG9iamVjdGAuXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyBcIi5cIiArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV0sIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT09IHByb3BUeXBlKSByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBwcm9wVHlwZSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBgb2JqZWN0YC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoZWNrZXIpIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBrZXkgYFwiICsga2V5ICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAuXFxuQmFkIG9iamVjdDogXCIgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsIFwiICBcIikgKyBcIlxcblZhbGlkIGtleXM6IFwiICsgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsIFwiICBcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArIFwiLlwiICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudWxsID09PSBwcm9wVmFsdWUgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkgcmV0dXJuICEwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVyYXRvckZuKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGVwLCBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKSBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgZm9yICg7IShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkgJiYgIWlzTm9kZShlbnRyeVsxXSkpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3ltYm9sXCIgPT09IHByb3BUeXBlIHx8ICEhcHJvcFZhbHVlICYmIChcIlN5bWJvbFwiID09PSBwcm9wVmFsdWVbXCJAQHRvU3RyaW5nVGFnXCJdIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkgPyBcImFycmF5XCIgOiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHAgPyBcIm9iamVjdFwiIDogaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkgPyBcInN5bWJvbFwiIDogcHJvcFR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodm9pZCAwID09PSBwcm9wVmFsdWUgfHwgbnVsbCA9PT0gcHJvcFZhbHVlKSByZXR1cm4gXCJcIiArIHByb3BWYWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiID09PSBwcm9wVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkgcmV0dXJuIFwiZGF0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gXCJyZWdleHBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYW4gXCIgKyB0eXBlO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJyZWdleHBcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiYSBcIiArIHR5cGU7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yICYmIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lID8gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgOiBBTk9OWU1PVVM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yLCBGQVVYX0lURVJBVE9SX1NZTUJPTCA9IFwiQEBpdGVyYXRvclwiLCBBTk9OWU1PVVMgPSBcIjw8YW5vbnltb3VzPj5cIiwgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgICAgICAgICAgICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKFwiYXJyYXlcIiksXG4gICAgICAgICAgICAgICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoXCJib29sZWFuXCIpLFxuICAgICAgICAgICAgICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKFwiZnVuY3Rpb25cIiksXG4gICAgICAgICAgICAgICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihcIm51bWJlclwiKSxcbiAgICAgICAgICAgICAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKFwib2JqZWN0XCIpLFxuICAgICAgICAgICAgICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoXCJzdHJpbmdcIiksXG4gICAgICAgICAgICAgICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihcInN5bWJvbFwiKSxcbiAgICAgICAgICAgICAgICBhbnk6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gICAgICAgICAgICAgICAgfSgpLFxuICAgICAgICAgICAgICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgICAgICB9KCksXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBnZXRQcm9wVHlwZShwcm9wVmFsdWUpICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSgpLFxuICAgICAgICAgICAgICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgICAgICAgICAgICAgbm9kZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzTm9kZShwcm9wc1twcm9wTmFtZV0pID8gbnVsbCA6IG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgICAgIH0oKSxcbiAgICAgICAgICAgICAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgICAgICAgICAgICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZSwgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcywgXG4gICAgICAgICAgICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlLCBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcywgXG4gICAgICAgICAgICBSZWFjdFByb3BUeXBlcztcbiAgICAgICAgfTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuICAgICAgICAgICAgaWYgKG51bGwgPT09IHZhbCB8fCB2b2lkIDAgPT09IHZhbCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkXCIpO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdCh2YWwpO1xuICAgICAgICB9XG4gICAgICAgIC8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuICAgICAgICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scywgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LCBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3QuYXNzaWduKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3QxID0gbmV3IFN0cmluZyhcImFiY1wiKTtcbiAgICAgICAgICAgICAgICBpZiAodGVzdDFbNV0gPSBcImRlXCIsIFwiNVwiID09PSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0pIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0ZXN0MiA9IHt9LCBpID0gMDsgaSA8IDEwOyBpKyspIHRlc3QyW1wiX1wiICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuICAgICAgICAgICAgICAgIGlmIChcIjAxMjM0NTY3ODlcIiAhPT0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0MltuXTtcbiAgICAgICAgICAgICAgICB9KS5qb2luKFwiXCIpKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3QzID0ge307XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIi5zcGxpdChcIlwiKS5mb3JFYWNoKGZ1bmN0aW9uKGxldHRlcikge1xuICAgICAgICAgICAgICAgICAgICB0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuICAgICAgICAgICAgICAgIH0pLCBcImFiY2RlZmdoaWprbG1ub3BxcnN0XCIgPT09IE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uKHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBmcm9tLCBzeW1ib2xzLCB0byA9IHRvT2JqZWN0KHRhcmdldCksIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG4gICAgICAgICAgICAgICAgZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBmcm9tKSBoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkgJiYgKHRvW2tleV0gPSBmcm9tW2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSBwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkgJiYgKHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9O1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICAgICAgICAgICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCBcIlJlYWN0IGNsYXNzXCIpICsgXCI6IFwiICsgbG9jYXRpb24gKyBcIiB0eXBlIGBcIiArIHR5cGVTcGVjTmFtZSArIFwiYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgXCIgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyBcImAuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyLm5hbWUgPSBcIkludmFyaWFudCBWaW9sYXRpb25cIiwgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHByaW50V2FybmluZygoY29tcG9uZW50TmFtZSB8fCBcIlJlYWN0IGNsYXNzXCIpICsgXCI6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgdHlwZVNwZWNOYW1lICsgXCJgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgXCIgKyB0eXBlb2YgZXJyb3IgKyBcIi4gWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCBzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuXCIpLCBcbiAgICAgICAgICAgICAgICBlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9ICEwO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBwcmludFdhcm5pbmcoXCJGYWlsZWQgXCIgKyBsb2NhdGlvbiArIFwiIHR5cGU6IFwiICsgZXJyb3IubWVzc2FnZSArIChudWxsICE9IHN0YWNrID8gc3RhY2sgOiBcIlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9LCBSZWFjdFByb3BUeXBlc1NlY3JldCA9IF9fd2VicGFja19yZXF1aXJlX18oNSksIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9LCBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4gICAgICAgIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJXYXJuaW5nOiBcIiArIHRleHQ7XG4gICAgICAgICAgICBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH0sIGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgICAgICAgfSwgbW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBzb3VyY2UpIHJldHVybiB7fTtcbiAgICAgICAgICAgIHZhciBrZXksIGksIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXSwgZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDAgfHwgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSAmJiAodGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICAgICAgICAgIGlmIChudWxsID09IHNvdXJjZSkgcmV0dXJuIHt9O1xuICAgICAgICAgICAgdmFyIGtleSwgaSwgdGFyZ2V0ID0ge30sIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIGtleSA9IHNvdXJjZUtleXNbaV0sIGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwIHx8ICh0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gTWVkaWFRdWVyeShfcmVmKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLCBkZXZpY2UgPSBfcmVmLmRldmljZSwgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLCBzZXR0aW5ncyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbIFwiY2hpbGRyZW5cIiwgXCJkZXZpY2VcIiwgXCJvbkNoYW5nZVwiIF0pLCBtYXRjaGVzID0gT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXNlTWVkaWFRdWVyeV9fLmEpKHNldHRpbmdzLCBkZXZpY2UsIG9uQ2hhbmdlKTtcbiAgICAgICAgICAgIHJldHVybiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGNoaWxkcmVuID8gY2hpbGRyZW4obWF0Y2hlcykgOiBtYXRjaGVzID8gY2hpbGRyZW4gOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIF9fd2VicGFja19leHBvcnRzX18uYSA9IE1lZGlhUXVlcnk7XG4gICAgICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3VzZU1lZGlhUXVlcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4gICAgfSBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3QtcmVzcG9uc2l2ZS5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBUb29sdGlwLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBRdWVzdGlvbkNpcmNsZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBGaWVsZCBhcyBGaWVsZE9vdWkgfSBmcm9tIFwib291aVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWVsZCh7XG4gIG9vdWksXG4gIGNoaWxkcmVuLFxuICBsYXlvdXQgPSBcImhvcml6b250YWxcIixcbiAgdmFsdWVQcm9wTmFtZSxcbn06IHtcbiAgb291aTogRmllbGRPb3VpO1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbGF5b3V0PzogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG4gIHZhbHVlUHJvcE5hbWU/OiBzdHJpbmc7XG59KSB7XG4gIGNvbnN0IHsgaWQsIGxhYmVsLCB0b29sdGlwLCBub2xhYmVsIH0gPSBvb3VpO1xuXG4gIGNvbnN0IGxhYmVsVGV4dCA9IGxhYmVsICYmIGxhYmVsLmxlbmd0aCA+IDEgPyBsYWJlbCArIFwiIDpcIiA6IFwiIFwiO1xuXG4gIGNvbnN0IGZvcm1JdGVtID0gKCkgPT4gKFxuICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwibWItMFwiIG5hbWU9e2lkfSB2YWx1ZVByb3BOYW1lPXt2YWx1ZVByb3BOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Zvcm0uSXRlbT5cbiAgKTtcblxuICBjb25zdCBob3Jpem9udGFsTW9kZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdyBhbGlnbj1cIm1pZGRsZVwiIGNsYXNzTmFtZT1cInBiLTEgcHQtMVwiPlxuICAgICAgICB7IW5vbGFiZWwgPyAoXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC0yXCIgZmxleD1cIjdyZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgICAge2xhYmVsV2l0aFRvb2x0aXAobm9sYWJlbCA/IFwiXCIgOiBsYWJlbFRleHQsIHRvb2x0aXApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8Q29sIGZsZXg9XCJhdXRvXCI+e2Zvcm1JdGVtKCl9PC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHZlcnRpY2FsTW9kZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2xhYmVsV2l0aFRvb2x0aXAobm9sYWJlbCA/IFwiXCIgOiBsYWJlbFRleHQsIHRvb2x0aXApfVxuICAgICAgICB7Zm9ybUl0ZW0oKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgPyBob3Jpem9udGFsTW9kZSgpIDogdmVydGljYWxNb2RlKCk7XG59XG5cbmNvbnN0IGxhYmVsV2l0aFRvb2x0aXAgPSAobGFiZWw6IHN0cmluZywgdG9vbHRpcD86IHN0cmluZykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcGItMVwiPlxuICAgICAge3Rvb2x0aXAgJiYgKFxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17dG9vbHRpcH0+XG4gICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlT3V0bGluZWQgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWJsdWUtNDAwIHByLTFcIiAvPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICApfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yaWdodCBwci0yXCI+e2xhYmVsfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IGxhYmVsV2l0aFRvb2x0aXAgfTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFN0cmluZ3MgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQgdHlwZSBMb2NhbGVzQ29udGV4dFR5cGUgPSB7XG4gIGdldFN0cmluZzogKGtleTogc3RyaW5nKSA9PiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgTG9jYWxlc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PExvY2FsZXNDb250ZXh0VHlwZSB8IG51bGw+KFxuICBudWxsXG4pO1xuXG5jb25zdCBMb2NhbGVzUHJvdmlkZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgc3RyaW5nczogc3RyaW5nc1Byb3AsXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHN0cmluZ3M6IFN0cmluZ3M7XG59KTogYW55ID0+IHtcbiAgY29uc3QgW3N0cmluZ3MsIHNldFN0cmluZ3NdID0gdXNlU3RhdGU8U3RyaW5ncz4oe30pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U3RyaW5ncyhzdHJpbmdzUHJvcCk7XG4gIH0sIFtzdHJpbmdzUHJvcF0pO1xuXG4gIGNvbnN0IGdldFN0cmluZyA9IChrZXk6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiBnZXRMb2NhbGl6ZWRTdHJpbmcoa2V5LCBzdHJpbmdzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMb2NhbGVzQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgZ2V0U3RyaW5nLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Mb2NhbGVzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsZXNQcm92aWRlcjtcblxuZXhwb3J0IGNvbnN0IGdldExvY2FsaXplZFN0cmluZyA9IChrZXk6IHN0cmluZywgc3RyaW5nczogU3RyaW5ncykgPT4ge1xuICBjb25zdCBsb2NhbGl6ZWQgPSBzdHJpbmdzW2tleV07XG4gIGlmIChsb2NhbGl6ZWQpIHJldHVybiBsb2NhbGl6ZWQ7XG4gIGVsc2UgcmV0dXJuIGtleTtcbn07XG4iLCJjb25zdCBjb252ZXJ0Qm9vbGVhblBhcmFtSWZOZWVkZWQgPSAodmFsdWU6IGFueSkgPT4ge1xuICBpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSA9PT0gXCJ0cnVlXCIpIHx8IHZhbHVlID09PSBcImZhbHNlXCIpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IFwidHJ1ZVwiO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmNvbnN0IGdldFBhcmFtc0ZvckZpZWxkcyA9ICh2YWx1ZXM6IGFueSwgZmllbGRzOiBhbnkpID0+IHtcbiAgY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSByZW1vdmVVbmRlZmluZWRGaWVsZHModmFsdWVzKTtcbiAgY29uc3QgZ3JvdXBlZERhdGVUaW1lID0gZ3JvdXBEYXRlVGltZVZhbHVlc0lmTmVlZGVkKGZpbHRlcmVkVmFsdWVzKTtcbiAgY29uc3QgZ3JvdXBlZFZhbHVlcyA9IHVuZ3JvdXBEYXRlVmFsdWVzSWZOZWVkZWQoZ3JvdXBlZERhdGVUaW1lLCBmaWVsZHMpO1xuXG4gIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAuLi5PYmplY3Qua2V5cyhncm91cGVkVmFsdWVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIGdldFBhcmFtRm9yRmllbGQoa2V5LCBncm91cGVkVmFsdWVzW2tleV0sIGZpZWxkcyk7XG4gICAgfSksXG4gIF07XG5cbiAgLy8gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBpbiBjYXNlIG9mIGRhdGV0aW1lIHdlIHJlY2VpdmUgYW4gYXJyYXkgb2YgYXJyYXlzXG4gIHJldHVybiBwYXJhbXMucmVkdWNlKChhY2MsIGN1clZhbCkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGN1clZhbFswXSkpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KGN1clZhbCk7XG4gICAgfVxuICAgIHJldHVybiBbLi4uYWNjLCBjdXJWYWxdO1xuICB9LCBbXSk7XG59O1xuXG5jb25zdCBnZXRQYXJhbUZvckZpZWxkID0gKGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBmaWVsZHM6IGFueSkgPT4ge1xuICBjb25zdCBmaWx0ZXJlZEtleSA9IGtleS5zcGxpdChcIiNcIilbMF07XG4gIGNvbnN0IHR5cGUgPSBmaWVsZHNbZmlsdGVyZWRLZXldLnR5cGU7XG5cbiAgaWYgKFxuICAgIHR5cGUgPT09IFwiY2hhclwiIHx8XG4gICAgdHlwZSA9PT0gXCJ0ZXh0XCIgfHxcbiAgICB0eXBlID09PSBcIm1hbnkyb25lXCIgfHxcbiAgICB0eXBlID09PSBcIm1hbnkybWFueVwiIHx8XG4gICAgdHlwZSA9PT0gXCJvbmUybWFueVwiXG4gICkge1xuICAgIHJldHVybiBba2V5LCBcImlsaWtlXCIsIHZhbHVlXTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlID09PSBcImZsb2F0XCIgfHxcbiAgICB0eXBlID09PSBcImludGVnZXJcIiB8fFxuICAgIHR5cGUgPT09IFwiZmxvYXRfdGltZVwiIHx8XG4gICAgdHlwZSA9PT0gXCJwcm9ncmVzc2JhclwiXG4gICkge1xuICAgIGNvbnN0IG9wZXJhdG9yID0ga2V5LmluZGV4T2YoXCIjZnJvbVwiKSAhPT0gLTEgPyBcIj49XCIgOiBcIjw9XCI7XG4gICAgcmV0dXJuIFtmaWx0ZXJlZEtleSwgb3BlcmF0b3IsIHZhbHVlXTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImRhdGVcIikge1xuICAgIGNvbnN0IG9wZXJhdG9yID0ga2V5LmluZGV4T2YoXCIjZnJvbVwiKSAhPT0gLTEgPyBcIj49XCIgOiBcIjw9XCI7XG4gICAgcmV0dXJuIFtmaWx0ZXJlZEtleSwgb3BlcmF0b3IsIHZhbHVlLmZvcm1hdChcIllZWVktTU0tRERcIildO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZGF0ZXRpbWVcIikge1xuICAgIGNvbnN0IGZyb20gPSB2YWx1ZVswXTtcbiAgICBjb25zdCB0byA9IHZhbHVlWzFdO1xuICAgIHJldHVybiBbXG4gICAgICBbZmlsdGVyZWRLZXksIFwiPj1cIiwgZnJvbV0sXG4gICAgICBbZmlsdGVyZWRLZXksIFwiPD1cIiwgdG9dLFxuICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtrZXksIFwiPVwiLCBjb252ZXJ0Qm9vbGVhblBhcmFtSWZOZWVkZWQodmFsdWUpXTtcbiAgfVxufTtcblxuY29uc3QgZ2V0RGF0ZXRpbWVEYXRlRmllbGRzID0gKHZhbHVlczogYW55KSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZXMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgcmV0dXJuIGtleS5pbmRleE9mKFwiI2RhdGVcIikgIT09IC0xO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZURhdGVUaW1lU2luZ2xlRmllbGRzID0gKHZhbHVlczogYW55KSA9PiB7XG4gIGNvbnN0IG5ld1ZhbHVlcyA9IHsgLi4udmFsdWVzIH07XG4gIE9iamVjdC5rZXlzKG5ld1ZhbHVlcykuZm9yRWFjaChcbiAgICAoa2V5KSA9PlxuICAgICAgKGtleS5pbmRleE9mKFwiI3RpbWVcIikgIT09IC0xIHx8IGtleS5pbmRleE9mKFwiI2RhdGVcIikgIT09IC0xKSAmJlxuICAgICAgZGVsZXRlIG5ld1ZhbHVlc1trZXldXG4gICk7XG4gIHJldHVybiBuZXdWYWx1ZXM7XG59O1xuXG5jb25zdCBncm91cERhdGVUaW1lVmFsdWVzSWZOZWVkZWQgPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgY29uc3QgbmV3VmFsdWVzOiBhbnkgPSB7IC4uLnJlbW92ZURhdGVUaW1lU2luZ2xlRmllbGRzKHZhbHVlcykgfTtcblxuICBjb25zdCBkYXRldGltZURhdGVGaWVsZHMgPSBnZXREYXRldGltZURhdGVGaWVsZHModmFsdWVzKTtcblxuICBkYXRldGltZURhdGVGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBjb25zdCBkYXRlUGFpciA9IHZhbHVlc1tmaWVsZF07XG4gICAgY29uc3QgYmFzZUtleSA9IGZpZWxkLnNwbGl0KFwiI1wiKVswXTtcbiAgICBjb25zdCB0aW1lS2V5ID0gYmFzZUtleSArIFwiI3RpbWVcIjtcbiAgICBjb25zdCB0aW1lUGFpciA9IHZhbHVlc1t0aW1lS2V5XTtcbiAgICBjb25zdCBkYXRlVmFsdWVGcm9tID0gZGF0ZVBhaXJbMF0uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICBjb25zdCBkYXRlVmFsdWVUbyA9IGRhdGVQYWlyWzFdLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgY29uc3QgdGltZVZhbHVlRnJvbSA9IHRpbWVQYWlyWzBdLmZvcm1hdChcIkhIOm1tXCIpO1xuICAgIGNvbnN0IHRpbWVWYWx1ZVRvID0gdGltZVBhaXJbMV0uZm9ybWF0KFwiSEg6bW1cIik7XG4gICAgY29uc3QgZnJvbSA9IGRhdGVWYWx1ZUZyb20gKyBcIiBcIiArIHRpbWVWYWx1ZUZyb207XG4gICAgY29uc3QgdG8gPSBkYXRlVmFsdWVUbyArIFwiIFwiICsgdGltZVZhbHVlVG87XG4gICAgbmV3VmFsdWVzW2Jhc2VLZXkgKyBcIiNkYXRldGltZVwiXSA9IFtmcm9tLCB0b107XG4gIH0pO1xuXG4gIHJldHVybiBuZXdWYWx1ZXM7XG59O1xuXG5jb25zdCB1bmdyb3VwRGF0ZVZhbHVlc0lmTmVlZGVkID0gKHZhbHVlczogYW55LCBmaWVsZHM6IGFueSkgPT4ge1xuICBjb25zdCBkYXRlRmllbGRzID0gT2JqZWN0LmtleXModmFsdWVzKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgIHJldHVybiBmaWVsZHNba2V5XSAmJiBmaWVsZHNba2V5XS50eXBlID09PSBcImRhdGVcIjtcbiAgfSk7XG5cbiAgbGV0IG5ld1ZhbHVlczogYW55ID0geyAuLi52YWx1ZXMgfTtcblxuICBkYXRlRmllbGRzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGRlbGV0ZSBuZXdWYWx1ZXNba2V5XTtcbiAgICBuZXdWYWx1ZXNba2V5ICsgXCIjZnJvbVwiXSA9IHZhbHVlc1trZXldWzBdO1xuICAgIG5ld1ZhbHVlc1trZXkgKyBcIiN0b1wiXSA9IHZhbHVlc1trZXldWzFdO1xuICB9KTtcblxuICByZXR1cm4gbmV3VmFsdWVzO1xufTtcblxuY29uc3QgcmVtb3ZlVW5kZWZpbmVkRmllbGRzID0gKHZhbHVlczogYW55KSA9PiB7XG4gIGNvbnN0IG5ld1ZhbHVlcyA9IHsgLi4udmFsdWVzIH07XG4gIE9iamVjdC5rZXlzKG5ld1ZhbHVlcykuZm9yRWFjaChcbiAgICAoa2V5KSA9PlxuICAgICAgKG5ld1ZhbHVlc1trZXldID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgbmV3VmFsdWVzW2tleV0gPT09IG51bGwgfHxcbiAgICAgICAgbmV3VmFsdWVzW2tleV0gPT09IFwiXCIpICYmXG4gICAgICBkZWxldGUgbmV3VmFsdWVzW2tleV1cbiAgKTtcbiAgcmV0dXJuIG5ld1ZhbHVlcztcbn07XG5cbmV4cG9ydCB7XG4gIHJlbW92ZVVuZGVmaW5lZEZpZWxkcyxcbiAgZ3JvdXBEYXRlVGltZVZhbHVlc0lmTmVlZGVkLFxuICBnZXRQYXJhbXNGb3JGaWVsZHMsXG59O1xuIiwiaW1wb3J0IHsgVHJlZSBhcyBUcmVlT291aSwgU2VsZWN0aW9uLCBNYW55Mm9uZSwgQm9vbGVhbiB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBUcmVlVmlldywgQ29sdW1uIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuY29uc3QgZ2V0VHJlZSA9ICh0cmVlVmlldzogVHJlZVZpZXcpOiBUcmVlT291aSA9PiB7XG4gIGNvbnN0IHhtbCA9IHRyZWVWaWV3LmFyY2g7XG4gIGNvbnN0IGZpZWxkcyA9IHRyZWVWaWV3LmZpZWxkcztcbiAgY29uc3QgdHJlZSA9IG5ldyBUcmVlT291aShmaWVsZHMpO1xuICB0cmVlLnBhcnNlKHhtbCk7XG4gIHJldHVybiB0cmVlO1xufTtcblxuY29uc3QgZ2V0VGFibGVDb2x1bW5zID0gKFxuICB0cmVlOiBUcmVlT291aSxcbiAgYm9vbGVhbkNvbXBvbmVudDogYW55XG4pOiBBcnJheTxDb2x1bW4+ID0+IHtcbiAgY29uc3QgdGFibGVDb2x1bW5zID0gdHJlZS5jb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGNvbHVtbi5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGNvbnN0IGtleSA9IGNvbHVtbi5pZDtcbiAgICBjb25zdCByZW5kZXIgPVxuICAgICAgdHlwZSA9PT0gXCJCb29sZWFuXCJcbiAgICAgICAgPyAoYm9vbGVhbkZpZWxkOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYm9vbGVhbkNvbXBvbmVudChib29sZWFuRmllbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAga2V5LFxuICAgICAgZGF0YUluZGV4OiBrZXksXG4gICAgICB0aXRsZTogY29sdW1uLmxhYmVsLFxuICAgICAgdHlwZSxcbiAgICAgIHJlbmRlcixcbiAgICAgIHNvcnRlcjogKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIGlmIChhW2tleV0gPCBiW2tleV0pIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGFba2V5XSA+IGJba2V5XSkgcmV0dXJuIDE7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHRhYmxlQ29sdW1ucztcbn07XG5cbmNvbnN0IGdldFRhYmxlSXRlbXMgPSAodHJlZU9vdWk6IFRyZWVPb3VpLCByZXN1bHRzOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiA9PiB7XG4gIGNvbnN0IHRhYmxlSXRlbXMgPSByZXN1bHRzLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgY29uc3QgcGFyc2VkSXRlbTogYW55ID0ge307XG4gICAgT2JqZWN0LmtleXMoaXRlbSkubWFwKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgPT09IFwiaWRcIikge1xuICAgICAgICBwYXJzZWRJdGVtW2tleV0gPSBpdGVtW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB3aWRnZXQgPSB0cmVlT291aS5maW5kQnlJZChrZXkpO1xuXG4gICAgICAgIGlmICh3aWRnZXQgaW5zdGFuY2VvZiBTZWxlY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aWRnZXQ7XG4gICAgICAgICAgcGFyc2VkSXRlbVtrZXldID0gc2VsZWN0aW9uLnNlbGVjdGlvblZhbHVlcy5nZXQoaXRlbVtrZXldKTtcbiAgICAgICAgfSBlbHNlIGlmICh3aWRnZXQgaW5zdGFuY2VvZiBNYW55Mm9uZSkge1xuICAgICAgICAgIHBhcnNlZEl0ZW1ba2V5XSA9IGl0ZW1ba2V5XVsxXTtcbiAgICAgICAgfSBlbHNlIGlmICh3aWRnZXQgaW5zdGFuY2VvZiBCb29sZWFuKSB7XG4gICAgICAgICAgcGFyc2VkSXRlbVtrZXldID0gaXRlbVtrZXldO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZGdldCkge1xuICAgICAgICAgIHBhcnNlZEl0ZW1ba2V5XSA9IGl0ZW1ba2V5XSA9PT0gZmFsc2UgPyBcIlwiIDogaXRlbVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnNlZEl0ZW07XG4gIH0pO1xuXG4gIHJldHVybiB0YWJsZUl0ZW1zO1xufTtcblxuZXhwb3J0IHsgZ2V0VGFibGVDb2x1bW5zLCBnZXRUYWJsZUl0ZW1zLCBnZXRUcmVlIH07XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvQnV0dG9uXCI7XG5pbXBvcnQgeyBDaGFyIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0NoYXJcIjtcbmltcG9ydCB7IFNlbGVjdGlvbiB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9TZWxlY3Rpb25cIjtcbmltcG9ydCB7IEJvb2xlYW4gfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvQm9vbGVhblwiO1xuaW1wb3J0IHsgTWFueTJvbmUgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvTWFueTJvbmVcIjtcbmltcG9ydCBUcmVlIGZyb20gXCJAL3dpZGdldHMvdmlld3MvVHJlZVwiO1xuaW1wb3J0IHsgRmxvYXQgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvRmxvYXRcIjtcbmltcG9ydCB7IEludGVnZXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvSW50ZWdlclwiO1xuaW1wb3J0IEdyb3VwIGZyb20gXCJAL3dpZGdldHMvY29udGFpbmVycy9Hcm91cFwiO1xuaW1wb3J0IE5vdGVib29rIGZyb20gXCJAL3dpZGdldHMvY29udGFpbmVycy9Ob3RlYm9va1wiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIkAvd2lkZ2V0cy92aWV3cy9Gb3JtXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0xhYmVsXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvVGV4dFwiO1xuaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL1NlcGFyYXRvclwiO1xuaW1wb3J0IFNlYXJjaEZpbHRlciBmcm9tIFwiQC93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9TZWFyY2hGaWx0ZXJcIjtcbmltcG9ydCB7IFRyZWVWaWV3LCBTZWFyY2hGaWVsZHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQge1xuICBCdXR0b24sXG4gIENoYXIsXG4gIFNlbGVjdGlvbixcbiAgQm9vbGVhbixcbiAgTWFueTJvbmUsXG4gIFRyZWUsXG4gIEdyb3VwLFxuICBTZWFyY2hGaWx0ZXIsXG4gIEZvcm0sXG4gIE5vdGVib29rLFxuICBGbG9hdCxcbiAgSW50ZWdlcixcbiAgTGFiZWwsXG4gIFRleHQsXG4gIFRyZWVWaWV3LFxuICBTZWFyY2hGaWVsZHMsXG4gIFNlcGFyYXRvcixcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBXaWRnZXQgYXMgV2lkZ2V0T291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgKiBhcyBXaWRnZXRzIGZyb20gXCJAL2luZGV4XCI7XG5cbnR5cGUgd2lkZ2V0cyA9IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufTtcblxuY29uc3Qgd2lkZ2V0VHlwZXMgPSBXaWRnZXRzIGFzIHdpZGdldHM7XG5cbmNvbnN0IGNyZWF0ZVJlYWN0V2lkZ2V0ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgdHlwZSA9IG9vdWkuY29uc3RydWN0b3IubmFtZTtcbiAgY29uc3Qgd2lkZ2V0Q2xhc3MgPSB3aWRnZXRUeXBlc1t0eXBlXTtcbiAgaWYgKCF3aWRnZXRDbGFzcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHdpZGdldENsYXNzLCBwcm9wcyk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVSZWFjdFdpZGdldCB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hlY2tib3ggYXMgQW50Q2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgQm9vbGVhbiA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgeyBpZCwgcmVhZE9ubHkgfSA9IG9vdWk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgb291aT17b291aX0gdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8QW50Q2hlY2tib3ggZGlzYWJsZWQ9e3JlYWRPbmx5fSBpZD17aWR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IEJ1dHRvbiBhcyBBbnRCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IGxhYmVsLCBhY3RpdmF0ZWQgfSA9IG9vdWk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgb291aT17b291aX0+XG4gICAgICA8QW50QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbFwiIGRpc2FibGVkPXshYWN0aXZhdGVkfT5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9BbnRCdXR0b24+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBDaGFyIGFzIENoYXJPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IENoYXIgPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSwgbGF5b3V0IH0gPSBwcm9wcztcbiAgY29uc3QgeyBpZCwgcmVhZE9ubHksIGlzUGFzc3dvcmQgfSA9IG9vdWkgYXMgQ2hhck9vdWk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgb291aT17b291aX0gbGF5b3V0PXtsYXlvdXR9PlxuICAgICAge2lzUGFzc3dvcmQgPyAoXG4gICAgICAgIDxJbnB1dC5QYXNzd29yZCBkaXNhYmxlZD17cmVhZE9ubHl9IGlkPXtpZH0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxJbnB1dCBkaXNhYmxlZD17cmVhZE9ubHl9IGlkPXtpZH0gLz5cbiAgICAgICl9XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBGbG9hdCBhcyBGbG9hdE9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgRmxvYXQgPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSwgbGF5b3V0IH0gPSBwcm9wcztcbiAgY29uc3QgeyBpZCwgZGVjaW1hbERpZ2l0cywgcmVhZE9ubHkgfSA9IG9vdWkgYXMgRmxvYXRPb3VpO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIG9vdWk9e29vdWl9IGxheW91dD17bGF5b3V0fT5cbiAgICAgIDxJbnB1dE51bWJlclxuICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgcHJlY2lzaW9uPXtkZWNpbWFsRGlnaXRzfVxuICAgICAgICBmb3JtYXR0ZXI9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHt2YWx1ZX1gLnJlcGxhY2UoL1teMC05XFwuXFwtXSsvZywgXCJcIik7XG4gICAgICAgIH19XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cbiAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XG4gICAgICAvPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgSW50ZWdlciA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpLCBsYXlvdXQgfSA9IHByb3BzO1xuICBjb25zdCB7IGlkLCByZWFkT25seSB9ID0gb291aTtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZCBvb3VpPXtvb3VpfSBsYXlvdXQ9e2xheW91dH0+XG4gICAgICA8SW5wdXROdW1iZXJcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxuICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgIGZvcm1hdHRlcj17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfWAucmVwbGFjZSgvW14wLTldKy9nLCBcIlwiKTtcbiAgICAgICAgfX1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxuICAgICAgLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExhYmVsIGFzIExhYmVsT291aSB9IGZyb20gXCJvb3VpXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9vdWk6IExhYmVsT291aTtcbn07XG5cbmNvbnN0IExhYmVsID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCBzdHlsZSA9IHsgdGV4dEFsaWduOiBvb3VpLmFsaWduIH07XG4gIHJldHVybiA8cCBzdHlsZT17c3R5bGUgYXMgYW55fT57b291aS5sYWJlbH08L3A+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0LCBCdXR0b24sIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IFNlYXJjaE91dGxpbmVkLCBGb2xkZXJPcGVuT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IE1hbnkyb25lIGFzIE1hbnkyb25lT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9vdWk6IE1hbnkyb25lT291aTtcbiAgb25PcGVuRGV0YWlsQ2xpY2s/OlxuICAgIHwgKChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQpXG4gICAgfCB1bmRlZmluZWQ7XG4gIG9uU2VhcmNoQ2xpY2s/OlxuICAgIHwgKChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQpXG4gICAgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgTWFueTJvbmUgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZpZWxkIG9vdWk9e29vdWl9PlxuICAgICAgPE1hbnkyb25lSW5wdXQgLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcblxuaW50ZXJmYWNlIE1hbnkyb25lSW5wdXRQcm9wcyB7XG4gIHZhbHVlPzogYW55W107XG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBhbnlbXSkgPT4gdm9pZDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBNYW55Mm9uZUlucHV0OiBSZWFjdC5GQzxNYW55Mm9uZUlucHV0UHJvcHM+ID0gKFxuICBwcm9wczogTWFueTJvbmVJbnB1dFByb3BzXG4pID0+IHtcbiAgY29uc3QgeyB2YWx1ZSwgb25DaGFuZ2UsIGRpc2FibGVkIH0gPSBwcm9wcztcblxuICBjb25zdCBbbTJvVmFsdWUsIHNldE0yb1ZhbHVlXSA9IHVzZVN0YXRlPGFueVtdPigpO1xuXG4gIGNvbnN0IHRyaWdnZXJDaGFuZ2UgPSAoY2hhbmdlZFZhbHVlOiBhbnlbXSkgPT4ge1xuICAgIGlmIChvbkNoYW5nZSkge1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvblZhbHVlU3RyaW5nQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7fTtcblxuICByZXR1cm4gKFxuICAgIDxSb3cgZ3V0dGVyPXs4fSBjbGFzc05hbWU9XCJwdC0xIHBiLTFcIj5cbiAgICAgIDxDb2wgZmxleD1cImF1dG9cIj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXt2YWx1ZSAmJiB2YWx1ZVsxXX1cbiAgICAgICAgICBvbkNoYW5nZT17b25WYWx1ZVN0cmluZ0NoYW5nZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgZmxleD1cIjMycHhcIj5cbiAgICAgICAgPEJ1dHRvbiBpY29uPXs8Rm9sZGVyT3Blbk91dGxpbmVkIC8+fSBkaXNhYmxlZD17ZGlzYWJsZWR9IC8+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgZmxleD1cIjMycHhcIj5cbiAgICAgICAgPEJ1dHRvbiBpY29uPXs8U2VhcmNoT3V0bGluZWQgLz59IGRpc2FibGVkPXtkaXNhYmxlZH0gLz5cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBTZWxlY3Rpb24gYXMgU2VsZWN0aW9uT291aSB9IGZyb20gXCJvb3VpXCI7XG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuXG50eXBlIFByb3BzID0ge1xuICBsYXlvdXQ/OiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIjtcbiAgb291aTogU2VsZWN0aW9uT291aTtcbn07XG5cbmV4cG9ydCBjb25zdCBTZWxlY3Rpb24gPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSwgbGF5b3V0IH0gPSBwcm9wcztcbiAgY29uc3QgeyBzZWxlY3Rpb25WYWx1ZXMsIHJlYWRPbmx5IH0gPSBvb3VpO1xuICBjb25zdCB2YWx1ZXMgPSBBcnJheS5mcm9tKHNlbGVjdGlvblZhbHVlcy5lbnRyaWVzKCkpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPVxuICAgIHZhbHVlcyAmJlxuICAgIHZhbHVlcy5sZW5ndGggJiZcbiAgICB2YWx1ZXMubWFwKChlbnRyeTogc3RyaW5nW10pID0+IHtcbiAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2tleX0+XG4gICAgICAgICAge3ZhbHVlfVxuICAgICAgICA8L09wdGlvbj5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgb291aT17b291aX0gbGF5b3V0PXtsYXlvdXR9PlxuICAgICAgPFNlbGVjdCBkaXNhYmxlZD17cmVhZE9ubHl9PntvcHRpb25zfTwvU2VsZWN0PlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBTZXBhcmF0b3IgYXMgU2VwYXJhdG9yT291aSB9IGZyb20gXCJvb3VpXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9vdWk6IFNlcGFyYXRvck9vdWk7XG59O1xuXG5leHBvcnQgY29uc3QgU2VwYXJhdG9yID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IGxhYmVsIH0gPSBvb3VpO1xuXG4gIHJldHVybiAoXG4gICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCIgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAge2xhYmVsfVxuICAgIDwvRGl2aWRlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBUZXh0IGFzIFRleHRPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xuXG50eXBlIFByb3BzID0ge1xuICBvb3VpOiBUZXh0T291aTtcbn07XG5cbmNvbnN0IFRleHQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgcmVhZE9ubHkgfSA9IG9vdWk7XG4gIHJldHVybiAoXG4gICAgPEZpZWxkIG9vdWk9e29vdWl9PlxuICAgICAgPFRleHRBcmVhIGRpc2FibGVkPXtyZWFkT25seX0gcm93cz17NH0gLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyb3VwIGFzIEdyb3VwT291aSwgV2lkZ2V0LCBGaWVsZCwgTGFiZWwsIEJ1dHRvbiwgVGV4dCB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBjcmVhdGVSZWFjdFdpZGdldCB9IGZyb20gXCJAL3dpZGdldHMvV2lkZ2V0RmFjdG9yeVwiO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9vdWk6IEdyb3VwT291aTtcbiAgc2hvd0xhYmVsPzogYm9vbGVhbjtcbn07XG5cbmZ1bmN0aW9uIEdyb3VwKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHJlc3BvbnNpdmVCZWhhdmlvdXIgPSB1c2VNZWRpYVF1ZXJ5KHsgcXVlcnk6IFwiKG1heC13aWR0aDogMTAwMHB4KVwiIH0pO1xuICBjb25zdCB7IG9vdWksIHNob3dMYWJlbCA9IHRydWUgfSA9IHByb3BzO1xuICBjb25zdCB7IGNvbHVtbnMgfSA9IG9vdWkuY29udGFpbmVyO1xuXG4gIGNvbnN0IGV4cGFuZExhYmVsc0luRmllbGRzID0gKHJvdzogYW55KSA9PiB7XG4gICAgY29uc3Qgcm93V2l0aEV4cGFuZGVkTGFiZWxzOiBhbnkgPSBbXTtcbiAgICBsZXQgdG90YWxDb2xTcGFuID0gMDtcblxuICAgIHJvdy5tYXAoKGl0ZW06IFdpZGdldCwgY29sdW1uSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBpdGVtIGluc3RhbmNlb2YgRmllbGQgJiZcbiAgICAgICAgIShpdGVtIGluc3RhbmNlb2YgQnV0dG9uKSAmJlxuICAgICAgICAhKGl0ZW0gaW5zdGFuY2VvZiBMYWJlbClcbiAgICAgICkge1xuICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIFRleHQgJiYgaXRlbS5ub2xhYmVsKSB7XG4gICAgICAgICAgcm93V2l0aEV4cGFuZGVkTGFiZWxzLnB1c2goaXRlbSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdG90YWxDb2xTcGFuICs9IDE7XG4gICAgICAgIHRvdGFsQ29sU3BhbiArPSBpdGVtLmNvbHNwYW4gLSAxO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gbmV3IExhYmVsKHsgc3RyaW5nOiBpdGVtLmxhYmVsIH0pO1xuICAgICAgICBsYWJlbC5hbGlnbiA9IHJlc3BvbnNpdmVCZWhhdmlvdXIgPyBcImxlZnRcIiA6IFwicmlnaHRcIjtcbiAgICAgICAgcm93V2l0aEV4cGFuZGVkTGFiZWxzLnB1c2gobGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBjbG9uZShpdGVtKTtcbiAgICAgICAgbmV3SXRlbS5fY29sc3BhbiA9IGl0ZW0uX2NvbHNwYW4gLSAxO1xuICAgICAgICBuZXdJdGVtLl9ub2xhYmVsID0gdHJ1ZTtcbiAgICAgICAgcm93V2l0aEV4cGFuZGVkTGFiZWxzLnB1c2gobmV3SXRlbSk7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbHVtbkluZGV4ICsgMSA9PT0gcm93Lmxlbmd0aCAmJlxuICAgICAgICAgIHRvdGFsQ29sU3BhbiA8IGNvbHVtbnMgJiZcbiAgICAgICAgICAhcmVzcG9uc2l2ZUJlaGF2aW91clxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBnYXBzVG9GaWxsID0gY29sdW1ucyAtIHRvdGFsQ29sU3BhbjtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhcHNUb0ZpbGw7IGkgKz0gMSkge1xuICAgICAgICAgICAgcm93V2l0aEV4cGFuZGVkTGFiZWxzLnB1c2gobmV3IExhYmVsKHsgc3RyaW5nOiBcIlwiIH0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvd1dpdGhFeHBhbmRlZExhYmVscy5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJvd1dpdGhFeHBhbmRlZExhYmVscztcbiAgfTtcblxuICBjb25zdCB0ZW1wbGF0ZUNvbHVtbnMgPSBnZXRUZW1wbGF0ZUNvbHVtbnMoY29sdW1ucyk7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHJlc3BvbnNpdmVCZWhhdmlvdXIgPyBcImF1dG9cIiA6IHRlbXBsYXRlQ29sdW1ucyxcbiAgfTtcblxuICBjb25zdCBjb250ZW50ID0gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtvb3VpIS5jb250YWluZXIucm93cy5tYXAoKHJvdywgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBleHBhbmRMYWJlbHNJbkZpZWxkcyhyb3cpLm1hcCgoaXRlbTogV2lkZ2V0LCBqOiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zaXZlU3BhbiA9IDE7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAuNWVtXCIsXG4gICAgICAgICAgICAgICAgZ3JpZENvbHVtblN0YXJ0OlxuICAgICAgICAgICAgICAgICAgXCJzcGFuIFwiICtcbiAgICAgICAgICAgICAgICAgIChyZXNwb25zaXZlQmVoYXZpb3VyID8gcmVzcG9uc2l2ZVNwYW4gOiBpdGVtLmNvbHNwYW4pLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y3JlYXRlUmVhY3RXaWRnZXQoe1xuICAgICAgICAgICAgICAgIG9vdWk6IGl0ZW0sXG4gICAgICAgICAgICAgICAga2V5OiBgJHtpLnRvU3RyaW5nKCl9LSR7ai50b1N0cmluZygpfWAsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7b291aS5sYWJlbCAmJiBzaG93TGFiZWwgPyAoXG4gICAgICAgIDxmaWVsZHNldFxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNjY2NcIixcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjAuNWVtXCIsXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMC41ZW1cIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGxlZ2VuZFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYWxsOiBcImluaXRpYWxcIixcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxZW1cIixcbiAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMC41ZW1cIixcbiAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiBcIjAuNWVtXCIsXG4gICAgICAgICAgICAgIGZvbnRGYW1pbHk6XG4gICAgICAgICAgICAgICAgXCJzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sICdTZWdvZSBVSScsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJ1wiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b291aS5sYWJlbH1cbiAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICkgOiAoXG4gICAgICAgIGNvbnRlbnRcbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmNvbnN0IGdldFRlbXBsYXRlQ29sdW1ucyA9IChjb2x1bW5zOiBudW1iZXIpID0+IHtcbiAgY29uc3Qgb2RkID0gXCIxZnJcIjtcbiAgY29uc3QgZXZlbiA9IFwiYXV0b1wiO1xuICBsZXQgdGVtcGxhdGVDb2x1bW5zID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5zOyBpKyspIHtcbiAgICB0ZW1wbGF0ZUNvbHVtbnMgKz0gaSAlIDIgPyBvZGQgOiBldmVuO1xuICAgIGlmIChpIDwgY29sdW1ucykge1xuICAgICAgdGVtcGxhdGVDb2x1bW5zICs9IFwiIFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGVtcGxhdGVDb2x1bW5zO1xufTtcblxuY29uc3QgY2xvbmUgPSBmdW5jdGlvbiBjbG9uZTxUPihpbnN0YW5jZTogVCk6IFQge1xuICBjb25zdCBjb3B5ID0gbmV3ICgoaW5zdGFuY2UgYXMgYW55KS5jb25zdHJ1Y3RvciBhcyB7IG5ldyAoKTogVCB9KSgpO1xuICBPYmplY3QuYXNzaWduKGNvcHksIGluc3RhbmNlKTtcbiAgcmV0dXJuIGNvcHk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcm91cDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYnMgfSBmcm9tIFwiYW50ZFwiO1xuY29uc3QgeyBUYWJQYW5lIH0gPSBUYWJzO1xuXG5pbXBvcnQgeyBOb3RlYm9vayBhcyBOb3RlYm9va09vdWksIEdyb3VwIGFzIEdyb3VwT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCJAL2luZGV4XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9vdWk6IE5vdGVib29rT291aTtcbn07XG5cbmZ1bmN0aW9uIE5vdGVib29rKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHRhYnMgPSBbXS5jb25jYXQuYXBwbHkoW10sIG9vdWkhLmNvbnRhaW5lci5yb3dzKTtcbiAgcmV0dXJuIChcbiAgICA8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiPlxuICAgICAge3RhYnMubWFwKChwYWdlOiBhbnksIGtleTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYktleSA9IChrZXkgKyAxKS50b1N0cmluZygpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRhYlBhbmUgdGFiPXtwYWdlLmxhYmVsfSBrZXk9e3RhYktleX0+XG4gICAgICAgICAgICA8R3JvdXAgb291aT17cGFnZSBhcyBHcm91cE9vdWl9IHNob3dMYWJlbD17ZmFsc2V9IC8+XG4gICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9UYWJzPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RlYm9vaztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtIGFzIEZvcm1Pb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IGNyZWF0ZVJlYWN0V2lkZ2V0IH0gZnJvbSBcIkAvd2lkZ2V0cy9XaWRnZXRGYWN0b3J5XCI7XG5pbXBvcnQgeyBGb3JtIGFzIEFudEZvcm0sIEZvcm1JbnN0YW5jZSB9IGZyb20gXCJhbnRkXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFyY2g6IHN0cmluZztcbiAgZmllbGRzOiBhbnk7XG4gIGluaXRpYWxWYWx1ZXM/OiBhbnk7XG4gIGFudEZvcm06IEZvcm1JbnN0YW5jZTtcbn07XG5cbmNvbnN0IGZpbHRlcmVkVmFsdWVzID0gKHZhbHVlczogYW55LCBmaWVsZHM6IGFueSkgPT4ge1xuICBpZiAoIWZpZWxkcykge1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cbiAgY29uc3QgZmlsdGVyZWRWYWx1ZXM6IGFueSA9IHt9O1xuICBPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChcbiAgICAgIHZhbHVlc1trZXldICE9PSBmYWxzZSB8fFxuICAgICAgKGZpZWxkc1trZXldICYmIGZpZWxkc1trZXldLnR5cGUgPT09IFwiYm9vbGVhblwiKVxuICAgICkge1xuICAgICAgZmlsdGVyZWRWYWx1ZXNba2V5XSA9IHZhbHVlc1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmaWx0ZXJlZFZhbHVlcztcbn07XG5cbmNvbnN0IHByb2Nlc3NJbml0aWFsVmFsdWVzID0gKHZhbHVlczogYW55LCBmaWVsZHM6IGFueSkgPT4ge1xuICBjb25zdCBmaWx0ZXJCb29sZWFucyA9IGZpbHRlcmVkVmFsdWVzKHZhbHVlcywgZmllbGRzKTtcbiAgcmV0dXJuIGZpbHRlckJvb2xlYW5zO1xufTtcblxuZnVuY3Rpb24gRm9ybShwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7IGFyY2gsIGZpZWxkcywgaW5pdGlhbFZhbHVlcywgYW50Rm9ybSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGU8Rm9ybU9vdWk+KCk7XG5cbiAgY29uc3QgZ2V0Rm9ybSA9ICgpID0+IHtcbiAgICByZXR1cm4gZm9ybSEuY29udGFpbmVyLnJvd3MubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5tYXAoKHdpZGdldCwgaikgPT4ge1xuICAgICAgICByZXR1cm4gY3JlYXRlUmVhY3RXaWRnZXQoe1xuICAgICAgICAgIG9vdWk6IHdpZGdldCxcbiAgICAgICAgICBrZXk6IGAke2kudG9TdHJpbmcoKX0tJHtqLnRvU3RyaW5nKCl9YCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld0Zvcm0gPSBuZXcgRm9ybU9vdWkoZmllbGRzKTtcbiAgICBuZXdGb3JtLnBhcnNlKGFyY2gpO1xuICAgIHNldEZvcm0obmV3Rm9ybSk7XG4gIH0sIFthcmNoLCBmaWVsZHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxBbnRGb3JtXG4gICAgICBmb3JtPXthbnRGb3JtfVxuICAgICAgaW5pdGlhbFZhbHVlcz17cHJvY2Vzc0luaXRpYWxWYWx1ZXMoaW5pdGlhbFZhbHVlcywgZmllbGRzKX1cbiAgICA+XG4gICAgICB7Zm9ybSAmJiBnZXRGb3JtKCl9XG4gICAgPC9BbnRGb3JtPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBQYWdpbmF0aW9uLCBDaGVja2JveCwgU3BpbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBnZXRUcmVlLCBnZXRUYWJsZUNvbHVtbnMsIGdldFRhYmxlSXRlbXMgfSBmcm9tIFwiQC9oZWxwZXJzL3RyZWVIZWxwZXJcIjtcblxuaW1wb3J0IHsgU3RyaW5ncywgVHJlZVZpZXcsIENvbHVtbiB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRMb2NhbGl6ZWRTdHJpbmcgfSBmcm9tIFwiQC9jb250ZXh0L0xvY2FsZXNDb250ZXh0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRvdGFsOiBudW1iZXI7XG4gIGxpbWl0OiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgdHJlZVZpZXc6IFRyZWVWaWV3O1xuICByZXN1bHRzOiBBcnJheTxhbnk+O1xuICBvblJlcXVlc3RQYWdlQ2hhbmdlOiAocGFnZTogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgPT4gdm9pZDtcbiAgc3RyaW5nczogU3RyaW5ncztcbiAgb25Sb3dDbGlja2VkPzogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG59O1xuXG5mdW5jdGlvbiBUcmVlKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBwYWdlLFxuICAgIGxpbWl0LFxuICAgIHRvdGFsLFxuICAgIHRyZWVWaWV3LFxuICAgIHJlc3VsdHMsXG4gICAgb25SZXF1ZXN0UGFnZUNoYW5nZSxcbiAgICBsb2FkaW5nLFxuICAgIHN0cmluZ3MsXG4gICAgb25Sb3dDbGlja2VkLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZTxBcnJheTxhbnk+PihbXSk7XG4gIGNvbnN0IFtjb2x1bW5zLCBzZXRDb2x1bW5zXSA9IHVzZVN0YXRlPEFycmF5PENvbHVtbj4+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRyZWUgPSBnZXRUcmVlKHRyZWVWaWV3KTtcbiAgICBjb25zdCBib29sZWFuQ29tcG9uZW50Rm4gPSAoYm9vbGVhbkZpZWxkOiBib29sZWFuKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiA8Q2hlY2tib3ggZGVmYXVsdENoZWNrZWQ9e2Jvb2xlYW5GaWVsZH0gZGlzYWJsZWQgLz47XG4gICAgfTtcbiAgICBjb25zdCBjb2x1bW5zID0gZ2V0VGFibGVDb2x1bW5zKHRyZWUsIGJvb2xlYW5Db21wb25lbnRGbik7XG4gICAgY29uc3QgaXRlbXMgPSBnZXRUYWJsZUl0ZW1zKHRyZWUsIHJlc3VsdHMpO1xuXG4gICAgc2V0Q29sdW1ucyhjb2x1bW5zKTtcbiAgICBzZXRJdGVtcyhpdGVtcyk7XG4gIH0sIFt0cmVlVmlldywgcmVzdWx0c10pO1xuXG4gIGNvbnN0IGZyb20gPSAocGFnZSAtIDEpICogbGltaXQgKyAxO1xuICBjb25zdCB0byA9IGZyb20gLSAxICsgaXRlbXMubGVuZ3RoO1xuICBjb25zdCBzdW1tYXJ5ID0gbG9hZGluZyA/IChcbiAgICA8U3BpbiAvPlxuICApIDogdG90YWwgPT09IDAgPyAoXG4gICAgZ2V0TG9jYWxpemVkU3RyaW5nKFwibm9fcmVzdWx0c1wiLCBzdHJpbmdzKVxuICApIDogKFxuICAgIGdldExvY2FsaXplZFN0cmluZyhcInN1bW1hcnlcIiwgc3RyaW5ncylcbiAgICAgIC5yZXBsYWNlKFwie2Zyb219XCIsIGZyb20/LnRvU3RyaW5nKCkpXG4gICAgICAucmVwbGFjZShcInt0b31cIiwgdG8/LnRvU3RyaW5nKCkpXG4gICAgICAucmVwbGFjZShcInt0b3RhbH1cIiwgdG90YWw/LnRvU3RyaW5nKCkpXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3N1bW1hcnl9XG4gICAgICB7bG9hZGluZyA/IG51bGwgOiAoXG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgdG90YWw9e3RvdGFsfVxuICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cbiAgICAgICAgICBjdXJyZW50PXtwYWdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInBiLTUgcHQtNVwiXG4gICAgICAgICAgc2hvd1NpemVDaGFuZ2VyPXtmYWxzZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25SZXF1ZXN0UGFnZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8VGFibGVcbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgZGF0YVNvdXJjZT17aXRlbXN9XG4gICAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICByb3dDbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBzZWxlY3Qtbm9uZVwiXG4gICAgICAgIG9uUm93PXsocmVjb3JkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9uUm93Q2xpY2tlZCkgb25Sb3dDbGlja2VkKHJlY29yZC5pZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVlO1xuIiwiaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IERhdGVSYW5nZVBpY2tlciA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpLCBsYXlvdXQgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIG9vdWk9e29vdWl9IGxheW91dD17bGF5b3V0fT5cbiAgICAgIDxEYXRlUGlja2VyLlJhbmdlUGlja2VyIGZvcm1hdD17XCJERC9NTS9ZWVlZXCJ9PjwvRGF0ZVBpY2tlci5SYW5nZVBpY2tlcj5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCB7IERhdGVQaWNrZXIsIFRpbWVQaWNrZXIgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBGaWVsZCBhcyBGaWVsZE9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5cbmV4cG9ydCBjb25zdCBEYXRlVGltZVJhbmdlUGlja2VyID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWksIGxheW91dCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgbGFiZWwsIGlkIH0gPSBvb3VpO1xuXG4gIGNvbnN0IGZpZWxkcyA9IFtcbiAgICBuZXcgRmllbGRPb3VpKHtcbiAgICAgIG5hbWU6IGlkICsgXCIjZGF0ZVwiLFxuICAgICAgbGFiZWw6IFwiXCIsXG4gICAgfSksXG4gICAgbmV3IEZpZWxkT291aSh7XG4gICAgICBuYW1lOiBpZCArIFwiI3RpbWVcIixcbiAgICAgIGxhYmVsOiBcIlwiLFxuICAgIH0pLFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsYWJlbCArIFwiIDpcIn1cbiAgICAgIDxSb3cgYWxpZ249e1wiYm90dG9tXCJ9IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtci0yXCI+XG4gICAgICAgICAgPEZpZWxkIG9vdWk9e2ZpZWxkc1swXX0gbGF5b3V0PXtsYXlvdXR9PlxuICAgICAgICAgICAgPERhdGVQaWNrZXIuUmFuZ2VQaWNrZXJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02MFwiXG4gICAgICAgICAgICAgIGZvcm1hdD17XCJERC9NTS9ZWVlZXCJ9XG4gICAgICAgICAgICA+PC9EYXRlUGlja2VyLlJhbmdlUGlja2VyPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICA8RmllbGQgb291aT17ZmllbGRzWzFdfSBsYXlvdXQ9e2xheW91dH0+XG4gICAgICAgICAgICA8VGltZVBpY2tlci5SYW5nZVBpY2tlclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYwXCJcbiAgICAgICAgICAgICAgZm9ybWF0PXtcIkhIOm1tXCJ9XG4gICAgICAgICAgICA+PC9UaW1lUGlja2VyLlJhbmdlUGlja2VyPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgRmxvYXQgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvRmxvYXRcIjtcbmltcG9ydCB7IEludGVnZXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvSW50ZWdlclwiO1xuaW1wb3J0IHsgSW50ZWdlciBhcyBJbnRlZ2VyT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBsYWJlbFdpdGhUb29sdGlwIH0gZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9vdWk6IGFueTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQYWlyRmllbGRzKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIGxhYmVsLCB0b29sdGlwIH0gPSBvb3VpO1xuICBjb25zdCBXaWRnZXQgPSBvb3VpIGluc3RhbmNlb2YgSW50ZWdlck9vdWkgPyBJbnRlZ2VyIDogRmxvYXQ7XG5cbiAgY29uc3QgZ2V0V2lkZ2V0ID0gKHN1ZmZpeDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXaWRnZXRcbiAgICAgICAgb291aT17eyAuLi5vb3VpLCBpZDogaWQgKyBzdWZmaXgsIGxhYmVsOiBcIlwiLCB0b29sdGlwOiB1bmRlZmluZWQgfX1cbiAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsYWJlbFdpdGhUb29sdGlwKGxhYmVsLCB0b29sdGlwKX1cbiAgICAgIDxSb3cgYWxpZ249e1wiYm90dG9tXCJ9IGNsYXNzTmFtZT1cIm10LTBcIj5cbiAgICAgICAgPENvbD57Z2V0V2lkZ2V0KFwiI2Zyb21cIil9PC9Db2w+XG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicGItMVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTIgcHItMiBoLWZ1bGxcIj4gLSA8L3NwYW4+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sPntnZXRXaWRnZXQoXCIjdG9cIil9PC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFJvdywgQ29sLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHtcbiAgRG93bk91dGxpbmVkLFxuICBVcE91dGxpbmVkLFxuICBTZWFyY2hPdXRsaW5lZCxcbiAgQ2xlYXJPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmltcG9ydCB7XG4gIExvY2FsZXNDb250ZXh0LFxuICBMb2NhbGVzQ29udGV4dFR5cGUsXG59IGZyb20gXCJAL2NvbnRleHQvTG9jYWxlc0NvbnRleHRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgYWR2YW5jZWRGaWx0ZXI6IGJvb2xlYW47XG4gIGlzU2VhcmNoaW5nOiBib29sZWFuO1xuICBvbkFkdmFuY2VkRmlsdGVyVG9nZ2xlOiAoKSA9PiB2b2lkO1xuICBvbkNsZWFyOiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaEJvdHRvbUJhcihwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgb25BZHZhbmNlZEZpbHRlclRvZ2dsZSxcbiAgICBhZHZhbmNlZEZpbHRlcixcbiAgICBvbkNsZWFyLFxuICAgIGlzU2VhcmNoaW5nLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBnZXRTdHJpbmcgfSA9IHVzZUNvbnRleHQoTG9jYWxlc0NvbnRleHQpIGFzIExvY2FsZXNDb250ZXh0VHlwZTtcblxuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q29sIHNwYW49ezEyfSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHQtNCBwYi0yIHBsLTJcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC14c1wiIG9uQ2xpY2s9e29uQWR2YW5jZWRGaWx0ZXJUb2dnbGV9PlxuICAgICAgICAgIHthZHZhbmNlZEZpbHRlciA/IChcbiAgICAgICAgICAgIDxVcE91dGxpbmVkIGNsYXNzTmFtZT1cInByLTFcIiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8RG93bk91dGxpbmVkIGNsYXNzTmFtZT1cInByLTFcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2FkdmFuY2VkRmlsdGVyXG4gICAgICAgICAgICA/IGdldFN0cmluZyhcInNpbXBsZV9zZWFyY2hcIilcbiAgICAgICAgICAgIDogZ2V0U3RyaW5nKFwiYWR2YW5jZWRfc2VhcmNoXCIpfVxuICAgICAgICA8L2E+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgc3Bhbj17MTJ9IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgcGItMlwiPlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1yLTVcIiBpY29uPXs8Q2xlYXJPdXRsaW5lZCAvPn0gb25DbGljaz17b25DbGVhcn0+XG4gICAgICAgICAgQ2xlYXJcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBpY29uPXs8U2VhcmNoT3V0bGluZWQgLz59XG4gICAgICAgICAgbG9hZGluZz17aXNTZWFyY2hpbmd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtnZXRTdHJpbmcoXCJzZWFyY2hcIil9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Db2w+XG4gICAgPC9Sb3c+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBDaGFyIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0NoYXJcIjtcbmltcG9ydCB7IFNlbGVjdGlvbiB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9TZWxlY3Rpb25cIjtcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlciB9IGZyb20gXCIuL0RhdGVSYW5nZVBpY2tlclwiO1xuaW1wb3J0IHsgRGF0ZVRpbWVSYW5nZVBpY2tlciB9IGZyb20gXCIuL0RhdGVUaW1lUmFuZ2VQaWNrZXJcIjtcbmltcG9ydCB7IFBhaXJGaWVsZHMgfSBmcm9tIFwiLi9QYWlyRmllbGRzXCI7XG5cbmltcG9ydCB7IExvY2FsZXNDb250ZXh0LCBMb2NhbGVzQ29udGV4dFR5cGUgfSBmcm9tIFwiQC9jb250ZXh0L0xvY2FsZXNDb250ZXh0XCI7XG5cbmltcG9ydCB7IEZpZWxkLCBTZWxlY3Rpb24gYXMgU2VsZWN0aW9uT291aSwgQ2hhciBhcyBDaGFyT291aSB9IGZyb20gXCJvb3VpXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZpZWxkOiBGaWVsZDtcbn07XG5cbmNvbnN0IHR5cGVzID0ge1xuICB0ZXh0OiBcIlRleHRcIixcbiAgbWFueTJvbmU6IFwiTWFueTJvbmVcIixcbiAgY2hhcjogXCJDaGFyXCIsXG4gIGJvb2xlYW46IFwiQm9vbGVhblwiLFxuICBzZWxlY3Rpb246IFwiU2VsZWN0aW9uXCIsXG4gIGZsb2F0OiBcIkZsb2F0XCIsXG4gIGZsb2F0X3RpbWU6IFwiRmxvYXRUaW1lXCIsXG4gIHByb2dyZXNzYmFyOiBcIlByb2dyZXNzQmFyXCIsXG4gIGludGVnZXI6IFwiSW50ZWdlclwiLFxuICBkYXRlOiBcIkRhdGVcIixcbiAgZGF0ZXRpbWU6IFwiRGF0ZVRpbWVcIixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hGaWVsZChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBmaWVsZCB9ID0gcHJvcHM7XG4gIGZpZWxkLnJlYWRPbmx5ID0gZmFsc2U7XG5cbiAgY29uc3QgeyBnZXRTdHJpbmcgfSA9IHVzZUNvbnRleHQoTG9jYWxlc0NvbnRleHQpIGFzIExvY2FsZXNDb250ZXh0VHlwZTtcblxuICBjb25zdCB3aWRnZXRUeXBlID0gZmllbGQuY29uc3RydWN0b3IubmFtZTtcblxuICBzd2l0Y2ggKHdpZGdldFR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLmJvb2xlYW46IHtcbiAgICAgIGNvbnN0IG9vdWkgPSBuZXcgU2VsZWN0aW9uT291aSh7XG4gICAgICAgIG5hbWU6IGZpZWxkLl9pZCxcbiAgICAgICAgc3RyaW5nOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgc2VsZWN0aW9uOiBbXG4gICAgICAgICAgW1widHJ1ZVwiLCBnZXRTdHJpbmcoXCJ0cnVlXCIpXSxcbiAgICAgICAgICBbXCJmYWxzZVwiLCBnZXRTdHJpbmcoXCJmYWxzZVwiKV0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIDxTZWxlY3Rpb24gbGF5b3V0PVwidmVydGljYWxcIiBvb3VpPXtvb3VpfSAvPjtcbiAgICB9XG4gICAgY2FzZSB0eXBlcy5mbG9hdDpcbiAgICBjYXNlIHR5cGVzLnByb2dyZXNzYmFyOlxuICAgIGNhc2UgdHlwZXMuZmxvYXRfdGltZTpcbiAgICBjYXNlIHR5cGVzLmludGVnZXI6IHtcbiAgICAgIHJldHVybiA8UGFpckZpZWxkcyBvb3VpPXtmaWVsZH0gLz47XG4gICAgfVxuICAgIGNhc2UgdHlwZXMuZGF0ZToge1xuICAgICAgcmV0dXJuIDxEYXRlUmFuZ2VQaWNrZXIgb291aT17ZmllbGR9IGxheW91dD1cInZlcnRpY2FsXCIgLz47XG4gICAgfVxuICAgIGNhc2UgdHlwZXMuZGF0ZXRpbWU6IHtcbiAgICAgIHJldHVybiA8RGF0ZVRpbWVSYW5nZVBpY2tlciBvb3VpPXtmaWVsZH0gbGF5b3V0PVwidmVydGljYWxcIiAvPjtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIDxDaGFyIG9vdWk9e2ZpZWxkfSBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiIC8+O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5pbXBvcnQgXCJAL3RhaWx3aW5kLmdlbmVyYXRlZC5jc3NcIjtcblxuaW1wb3J0IHsgU2VhcmNoRmlsdGVyIGFzIFNlYXJjaEZpbHRlck9vdWksIENvbnRhaW5lciwgRmllbGQgfSBmcm9tIFwib291aVwiO1xuXG5pbXBvcnQgeyBTZWFyY2hGaWVsZCB9IGZyb20gXCIuL1NlYXJjaEZpZWxkXCI7XG5pbXBvcnQgeyBTZWFyY2hCb3R0b21CYXIgfSBmcm9tIFwiLi9TZWFyY2hCb3R0b21CYXJcIjtcbmltcG9ydCBMb2NhbGVzUHJvdmlkZXIgZnJvbSBcIkAvY29udGV4dC9Mb2NhbGVzQ29udGV4dFwiO1xuaW1wb3J0IHsgU3RyaW5ncywgU2VhcmNoRmllbGRzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IFNlYXJjaFBhcmFtcyB9IGZyb20gXCIuL1NlYXJjaFBhcmFtc1wiO1xuXG5pbXBvcnQgeyBnZXRQYXJhbXNGb3JGaWVsZHMgfSBmcm9tIFwiQC9oZWxwZXJzL3NlYXJjaEZpbHRlckhlbHBlclwiO1xuXG50eXBlIFByb3BzID0ge1xuICBmaWVsZHM6IGFueTtcbiAgc2VhcmNoRmllbGRzOiBTZWFyY2hGaWVsZHM7XG4gIG9uQ2xlYXI6ICgpID0+IHZvaWQ7XG4gIG9uU3VibWl0OiAodmFsdWVzOiBhbnkpID0+IHZvaWQ7XG4gIGlzU2VhcmNoaW5nOiBib29sZWFuO1xuICBzdHJpbmdzOiBTdHJpbmdzO1xuICBsaW1pdDogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcbn07XG5cbmZ1bmN0aW9uIFNlYXJjaEZpbHRlcihwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgZmllbGRzLFxuICAgIHNlYXJjaEZpZWxkcyxcbiAgICBvbkNsZWFyLFxuICAgIG9uU3VibWl0LFxuICAgIGlzU2VhcmNoaW5nLFxuICAgIG9mZnNldCxcbiAgICBsaW1pdCxcbiAgICBzdHJpbmdzLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3NpbXBsZVNlYXJjaEZpZWxkcywgc2V0U2ltcGxlU2VhcmNoRmllbGRzXSA9IHVzZVN0YXRlPENvbnRhaW5lcj4oKTtcbiAgY29uc3QgW2FkdmFuY2VkU2VhcmNoRmllbGRzLCBzZXRBZHZhbmNlZFNlYXJjaEZpZWxkc10gPSB1c2VTdGF0ZTxDb250YWluZXI+KCk7XG4gIGNvbnN0IFthZHZhbmNlZEZpbHRlciwgc2V0QWR2YW5jZWRGaWx0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xuXG4gIGNvbnN0IGdldFJvd3NBbmRDb2xzID0gKCkgPT4ge1xuICAgIGlmICghYWR2YW5jZWRTZWFyY2hGaWVsZHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZHMgPSBhZHZhbmNlZEZpbHRlciA/IGFkdmFuY2VkU2VhcmNoRmllbGRzIDogc2ltcGxlU2VhcmNoRmllbGRzO1xuICAgIGNvbnN0IHJvd3MgPSBmaWVsZHM/LnJvd3M7XG5cbiAgICByZXR1cm4gcm93cz8ubWFwKChyb3csIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cga2V5PXtpfT5cbiAgICAgICAgICB7cm93Lm1hcCgoaXRlbSwgaikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGNsYXNzTmFtZT1cInAtMlwiIHhsPXs2fSBrZXk9e2p9PlxuICAgICAgICAgICAgICAgIDxTZWFyY2hGaWVsZCBmaWVsZD17aXRlbSBhcyBGaWVsZH0gLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1Jvdz5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZm8gPSBuZXcgU2VhcmNoRmlsdGVyT291aShzZWFyY2hGaWVsZHMsIGZpZWxkcyk7XG4gICAgc2ZvLnBhcnNlKCk7XG4gICAgc2V0U2ltcGxlU2VhcmNoRmllbGRzKHNmby5fc2ltcGxlU2VhcmNoQ29udGFpbmVyKTtcbiAgICBzZXRBZHZhbmNlZFNlYXJjaEZpZWxkcyhzZm8uX2FkdmFuY2VkU2VhcmNoQ29udGFpbmVyKTtcbiAgfSwgW2ZpZWxkcywgc2VhcmNoRmllbGRzXSk7XG5cbiAgY29uc3Qgcm93cyA9IGdldFJvd3NBbmRDb2xzKCk7XG5cbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGxpbWl0LCBvZmZzZXQgfSA9IHZhbHVlcztcbiAgICBkZWxldGUgdmFsdWVzLm9mZnNldDtcbiAgICBkZWxldGUgdmFsdWVzLmxpbWl0O1xuICAgIGNvbnN0IG5ld1BhcmFtcyA9IGdldFBhcmFtc0ZvckZpZWxkcyh2YWx1ZXMsIGZpZWxkcyk7XG5cbiAgICBvblN1Ym1pdCh7IHBhcmFtczogbmV3UGFyYW1zLCBvZmZzZXQsIGxpbWl0IH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExvY2FsZXNQcm92aWRlciBzdHJpbmdzPXtzdHJpbmdzfT5cbiAgICAgIDxGb3JtXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHJvdW5kZWQgcC0zXCJcbiAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IG9mZnNldCwgbGltaXQgfX1cbiAgICAgID5cbiAgICAgICAge3Jvd3N9XG4gICAgICAgIHthZHZhbmNlZEZpbHRlciAmJiA8U2VhcmNoUGFyYW1zIC8+fVxuICAgICAgICA8U2VhcmNoQm90dG9tQmFyXG4gICAgICAgICAgYWR2YW5jZWRGaWx0ZXI9e2FkdmFuY2VkRmlsdGVyfVxuICAgICAgICAgIG9uQWR2YW5jZWRGaWx0ZXJUb2dnbGU9eygpID0+IHtcbiAgICAgICAgICAgIHNldEFkdmFuY2VkRmlsdGVyKCFhZHZhbmNlZEZpbHRlcik7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsZWFyPXsoKSA9PiB7XG4gICAgICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICAgICAgICBvbkNsZWFyKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBpc1NlYXJjaGluZz17aXNTZWFyY2hpbmd9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9Mb2NhbGVzUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZpbHRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEludGVnZXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvSW50ZWdlclwiO1xuaW1wb3J0IHsgUm93LCBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBJbnRlZ2VyIGFzIEludGVnZXJPb3VpIH0gZnJvbSBcIm9vdWlcIjtcblxuaW1wb3J0IHsgTG9jYWxlc0NvbnRleHQsIExvY2FsZXNDb250ZXh0VHlwZSB9IGZyb20gXCJAL2NvbnRleHQvTG9jYWxlc0NvbnRleHRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaFBhcmFtcygpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7IGdldFN0cmluZyB9ID0gdXNlQ29udGV4dChMb2NhbGVzQ29udGV4dCkgYXMgTG9jYWxlc0NvbnRleHRUeXBlO1xuXG4gIGNvbnN0IGxpbWl0T291aSA9IG5ldyBJbnRlZ2VyT291aSh7IG5hbWU6IFwibGltaXRcIiB9KTtcbiAgY29uc3Qgb2Zmc2V0T291aSA9IG5ldyBJbnRlZ2VyT291aSh7IG5hbWU6IFwib2Zmc2V0XCIgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIHB0LTJcIj5cbiAgICAgIDxSb3cga2V5PXtcImNvdW50X3BhcmFtc1wifT57Z2V0U3RyaW5nKFwicGFyYW1ldGVyc1wiKX08L1Jvdz5cbiAgICAgIDxTcGFjZSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICB7Z2V0U3RyaW5nKFwibGltaXRcIikgKyBcIiA6XCJ9XG4gICAgICAgIDxJbnRlZ2VyIG9vdWk9e2xpbWl0T291aX0gLz5cbiAgICAgICAge2dldFN0cmluZyhcImZpcnN0XCIpICsgXCIgOlwifVxuICAgICAgICA8SW50ZWdlciBvb3VpPXtvZmZzZXRPb3VpfSAvPlxuICAgICAgPC9TcGFjZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYW50X2Rlc2lnbl9pY29uc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9hbnRkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=