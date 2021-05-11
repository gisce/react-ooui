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

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = (0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__.default)(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

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
        return _super.call(this, props) || this;
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
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/ooui/dist/Field.js");
/* harmony import */ var _NewLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewLine */ "./node_modules/ooui/dist/NewLine.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Label */ "./node_modules/ooui/dist/Label.js");



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
    Container.prototype.addWidget = function (widget, options) {
        var widgetsToAdd = [];
        var addLabel = options ? options.addLabel : true;
        if (widget instanceof _NewLine__WEBPACK_IMPORTED_MODULE_1__.default) {
            this._rows.push([]);
            this._index++;
            return;
        }
        if (widget.colspan > this._columns) {
            // Widget colspan is greater than container columns, so we change widget
            // colspan to fit container columns.
            widget.colspan = this._columns;
        }
        // For fields without nolabel we add a preceding label widget
        if (addLabel && widget instanceof _Field__WEBPACK_IMPORTED_MODULE_0__.default && !widget.nolabel) {
            if (widget.colspan > 1) {
                widget.colspan -= 1; // We substract one colspan for the corresponding label
            }
            var label = new _Label__WEBPACK_IMPORTED_MODULE_2__.default({
                name: widget.id + "_label",
                string: widget.label,
                invisible: widget.invisible,
                help: widget.tooltip,
                fieldForLabel: widget.id,
            });
            widgetsToAdd.push(label);
            widgetsToAdd.push(widget);
        }
        else {
            widgetsToAdd.push(widget);
        }
        var widgetsColspan = widgetsToAdd.reduce(function (accumulator, currentWidget) {
            return accumulator + currentWidget.colspan;
        }, 0);
        if (widgetsColspan > this.freePosition()) {
            this._rows.push([]);
            this._index++;
        }
        this._rows[this._index] = this._rows[this._index].concat(widgetsToAdd);
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
        return _super.call(this, props) || this;
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
        return _super.call(this, props) || this;
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
/* harmony import */ var _helpers_domainParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/domainParser */ "./node_modules/ooui/dist/helpers/domainParser.js");
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
            if (props.domain) {
                _this._domain = (0,_helpers_domainParser__WEBPACK_IMPORTED_MODULE_1__.parseDomain)(props.domain);
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
    Object.defineProperty(Field.prototype, "domain", {
        get: function () {
            return this._domain;
        },
        set: function (value) {
            this._domain = value;
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
/* harmony import */ var _helpers_nodeParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/nodeParser */ "./node_modules/ooui/dist/helpers/nodeParser.js");




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
        this._string = null;
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
    Object.defineProperty(Form.prototype, "string", {
        get: function () {
            return this._string;
        },
        enumerable: false,
        configurable: true
    });
    Form.prototype.parse = function (xml) {
        var parser = new DOMParser();
        var view = parser.parseFromString(xml, "text/xml");
        this.parseNode(view.documentElement, this._container);
        this._string = view.documentElement.getAttribute("string");
    };
    Form.prototype.parseNode = function (node, container) {
        var _this = this;
        var widgetFactory = new _WidgetFactory__WEBPACK_IMPORTED_MODULE_0__.default();
        var nodesParsed = (0,_helpers_nodeParser__WEBPACK_IMPORTED_MODULE_3__.parseNodes)(node.childNodes, this._fields);
        nodesParsed.forEach(function (nodeParsed) {
            var tag = nodeParsed.tag, tagAttributes = nodeParsed.tagAttributes, child = nodeParsed.child;
            var widget = widgetFactory.createWidget(tag, tagAttributes);
            if (widget instanceof _ContainerWidget__WEBPACK_IMPORTED_MODULE_2__.default) {
                _this.parseNode(child, widget.container);
            }
            container.addWidget(widget);
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
        return _super.call(this, props) || this;
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

var Label = /** @class */ (function (_super) {
    __extends(Label, _super);
    function Label(props) {
        var _this = _super.call(this, __assign(__assign({}, props), { nolabel: true })) || this;
        /**
         * Label text
         */
        _this._text = "";
        /**
         * Align text
         */
        _this._align = "left";
        /**
         * Id of the field that this label goes with. Null if it's an independent label
         */
        _this._fieldForLabel = null;
        if (props === null || props === void 0 ? void 0 : props.fieldForLabel) {
            _this._fieldForLabel = props.fieldForLabel;
        }
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
    Object.defineProperty(Label.prototype, "fieldForLabel", {
        get: function () {
            return this._fieldForLabel;
        },
        set: function (value) {
            this._fieldForLabel = value;
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
        /**
         * Must expand widget
         */
        _this._mustExpand = true;
        if (props) {
            if (props.size) {
                _this._size = props.size;
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
        /**
         * Views
         */
        _this._views = null;
        /**
         * Mode
         */
        _this._mode = [];
        /**
         * Must expand widget
         */
        _this._mustExpand = true;
        if (props) {
            if (props.size) {
                _this._size = props.size;
            }
            if (props.relation) {
                _this._relation = props.relation;
            }
            if (props.mode) {
                _this._mode = props.mode.split(",");
            }
            if (props.views) {
                _this._views = props.views;
            }
            if (props.colspan) {
                _this.colspan = props.colspan;
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
    Object.defineProperty(One2many.prototype, "views", {
        get: function () {
            return this._views;
        },
        set: function (value) {
            this._views = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(One2many.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
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
            _this.simpleSearchContainer.addWidget(widget, { addLabel: false });
            _this.advancedSearchContainer.addWidget(widget, { addLabel: false });
        });
        var advancedSearchWidgets = this.parseFields(this.searchFields.secondary, widgetFactory);
        advancedSearchWidgets.forEach(function (widget) {
            _this.advancedSearchContainer.addWidget(widget, { addLabel: false });
        });
    };
    SearchFilter.prototype.parseFields = function (searchFields, widgetFactory) {
        var _this = this;
        return searchFields.map(function (searchField) {
            var fieldAttributes = __assign(__assign({}, _this.fields[searchField]), { name: searchField, colspan: 2 });
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
/* harmony import */ var _helpers_nodeParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/nodeParser */ "./node_modules/ooui/dist/helpers/nodeParser.js");


var Tree = /** @class */ (function () {
    function Tree(fields) {
        this._columns = [];
        this._string = null;
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
    Object.defineProperty(Tree.prototype, "string", {
        get: function () {
            return this._string;
        },
        enumerable: false,
        configurable: true
    });
    Tree.prototype.parse = function (xml) {
        var parser = new DOMParser();
        var view = parser.parseFromString(xml, "text/xml");
        this.parseNode(view.documentElement);
        this._string = view.documentElement.getAttribute("string");
    };
    Tree.prototype.parseNode = function (node) {
        var _this = this;
        var widgetFactory = new _WidgetFactory__WEBPACK_IMPORTED_MODULE_0__.default();
        var nodesParsed = (0,_helpers_nodeParser__WEBPACK_IMPORTED_MODULE_1__.parseNodes)(node.childNodes, this._fields);
        nodesParsed.forEach(function (nodeParsed) {
            var tag = nodeParsed.tag, tagAttributes = nodeParsed.tagAttributes;
            var widget = widgetFactory.createWidget(tag, tagAttributes);
            _this._columns.push(widget);
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
            case "one2many_list":
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

/***/ "./node_modules/ooui/dist/helpers/domainParser.js":
/*!********************************************************!*\
  !*** ./node_modules/ooui/dist/helpers/domainParser.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseDomain": () => (/* binding */ parseDomain),
/* harmony export */   "getParamsForDomain": () => (/* binding */ getParamsForDomain)
/* harmony export */ });
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
var isNumeric = function (str) {
    if (typeof str !== "string")
        return false; // we only process strings!
    return !isNaN(str) && !isNaN(parseFloat(str));
};
var parseDomain = function (domainValue) {
    if (!domainValue || typeof domainValue !== "string") {
        return [];
    }
    var parsedDomain = [];
    var regex = /\(([^\)]+)\)/g;
    var tupples = [];
    var matches;
    while ((matches = regex.exec(domainValue))) {
        tupples.push(matches[1]);
    }
    tupples.forEach(function (tupple) {
        var splitted = tupple.replace(/\s/g, "").split(",");
        var field = splitted[0].replace(/'/g, "");
        var operator = splitted[1].replace(/'/g, "");
        var value = splitted[2];
        if (value.indexOf("'") === -1 && isNumeric(value)) {
            // Do nothing
        }
        else if (value.indexOf("'") === -1 &&
            !(value === "True" || value === "False")) {
            // If the value references to an actual field, add curly braces around it
            value = "{" + value + "}";
        }
        else {
            value = value.replace(/'/g, "");
        }
        parsedDomain.push([field, operator, value]);
    });
    return parsedDomain;
};
var getParamsForDomain = function (_a) {
    var values = _a.values, domain = _a.domain;
    var valuesToSearchIn = __assign(__assign({}, values), { active_id: values.id });
    return domain.map(function (entry) {
        var field = entry[0], operator = entry[1], value = entry[2];
        var resolvedValue = value;
        if (typeof value === "string" && value.indexOf("{") !== -1) {
            var key = value.replace("{", "").replace("}", "");
            if (valuesToSearchIn[key])
                resolvedValue = valuesToSearchIn[key];
        }
        return [field, operator, resolvedValue];
    });
};

//# sourceMappingURL=domainParser.js.map

/***/ }),

/***/ "./node_modules/ooui/dist/helpers/nodeParser.js":
/*!******************************************************!*\
  !*** ./node_modules/ooui/dist/helpers/nodeParser.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseNodes": () => (/* binding */ parseNodes)
/* harmony export */ });
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
var parseNodes = function (nodes, fields) {
    var parsedNodes = [];
    Array.prototype.forEach.call(nodes, function (child) {
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
                    if (!fields[name_1]) {
                        throw new Error("Field " + name_1 + " doesn't exist in fields defintion");
                    }
                    tag = fields[name_1].type;
                }
                // We do this in order to ignore the blank domain attribute in fields and to prioritize the attributes value 
                if (((Array.isArray(fields[name_1].domain) &&
                    fields[name_1].domain.length === 0) ||
                    fields[name_1].domain === false) &&
                    tagAttributes_1["domain"] &&
                    tagAttributes_1["domain"].length > 0) {
                    delete fields[name_1].domain;
                }
                tagAttributes_1 = __assign(__assign({}, tagAttributes_1), fields[name_1]);
            }
            parsedNodes.push({ tag: tag, tagAttributes: tagAttributes_1, child: child });
        }
    });
    return parsedNodes;
};

//# sourceMappingURL=nodeParser.js.map

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
/* harmony export */   "Button": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_25__.default),
/* harmony export */   "DomainParser": () => (/* reexport module object */ _helpers_domainParser__WEBPACK_IMPORTED_MODULE_26__)
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
/* harmony import */ var _helpers_domainParser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helpers/domainParser */ "./node_modules/ooui/dist/helpers/domainParser.js");




























//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-cool-dimensions/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-cool-dimensions/dist/index.esm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "borderBoxWarn": () => (/* binding */ borderBoxWarn),
/* harmony export */   "observerErr": () => (/* binding */ observerErr)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var observerErr = "💡 react-cool-dimensions: the browser doesn't support Resize Observer, please use polyfill: https://github.com/wellyshen/react-cool-dimensions#resizeobserver-polyfill";
var borderBoxWarn = "💡 react-cool-dimensions: the browser doesn't support border-box size, fallback to content-box size. Please see: https://github.com/wellyshen/react-cool-dimensions#border-box-size-measurement";

var getCurrentBreakpoint = function getCurrentBreakpoint(bps, w) {
  var curBp = "";
  var max = -1;
  Object.keys(bps).forEach(function (key) {
    var val = bps[key];

    if (w >= val && val > max) {
      curBp = key;
      max = val;
    }
  });
  return curBp;
};

var useDimensions = function useDimensions(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      refOpt = _ref.ref,
      useBorderBoxSize = _ref.useBorderBoxSize,
      breakpoints = _ref.breakpoints,
      updateOnBreakpointChange = _ref.updateOnBreakpointChange,
      shouldUpdate = _ref.shouldUpdate,
      onResize = _ref.onResize,
      polyfill = _ref.polyfill;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    currentBreakpoint: "",
    width: 0,
    height: 0
  }),
      state = _useState[0],
      setState = _useState[1];

  var prevSizeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
  var prevBreakpointRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var onResizeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var shouldUpdateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var warnedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var refVar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(refVar == null ? void 0 : refVar.current);
  ref = refOpt || ref;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (onResize) onResizeRef.current = onResize;
  }, [onResize]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (shouldUpdate) shouldUpdateRef.current = shouldUpdate;
  }, [shouldUpdate]);
  var observe = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (element) {
    if (element) ref.current = element;
    if (observerRef.current && ref.current) observerRef.current.observe(ref.current);
  }, [ref]);
  var unobserve = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    if (observerRef.current) observerRef.current.disconnect();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!ref.current) return function () {
      return null;
    };

    if ((!("ResizeObserver" in window) || !("ResizeObserverEntry" in window)) && !polyfill) {
      console.error(observerErr);
      return function () {
        return null;
      };
    } // eslint-disable-next-line compat/compat


    observerRef.current = new (polyfill || window.ResizeObserver)(function (_ref2) {
      var entry = _ref2[0];
      var contentBoxSize = entry.contentBoxSize,
          borderBoxSize = entry.borderBoxSize,
          contentRect = entry.contentRect;
      var boxSize = contentBoxSize;
      if (useBorderBoxSize) if (borderBoxSize) {
        boxSize = borderBoxSize;
      } else if (!warnedRef.current) {
        console.warn(borderBoxWarn);
        warnedRef.current = true;
      } // @juggle/resize-observer polyfill has different data structure

      boxSize = Array.isArray(boxSize) ? boxSize[0] : boxSize;
      var width = boxSize ? boxSize.inlineSize : contentRect.width;
      var height = boxSize ? boxSize.blockSize : contentRect.height;
      if (width === prevSizeRef.current.width && height === prevSizeRef.current.height) return;
      prevSizeRef.current = {
        width: width,
        height: height
      };
      var e = {
        currentBreakpoint: "",
        width: width,
        height: height,
        entry: entry,
        observe: observe,
        unobserve: unobserve
      };

      if (breakpoints) {
        e.currentBreakpoint = getCurrentBreakpoint(breakpoints, width);

        if (e.currentBreakpoint !== prevBreakpointRef.current) {
          if (onResizeRef.current) onResizeRef.current(e);
          prevBreakpointRef.current = e.currentBreakpoint;
        }
      } else if (onResizeRef.current) {
        onResizeRef.current(e);
      }

      var next = {
        currentBreakpoint: e.currentBreakpoint,
        width: width,
        height: height,
        entry: entry
      };
      if (shouldUpdateRef.current && !shouldUpdateRef.current(next)) return;

      if (!shouldUpdateRef.current && breakpoints && updateOnBreakpointChange) {
        setState(function (prev) {
          return prev.currentBreakpoint !== next.currentBreakpoint ? next : prev;
        });
        return;
      }

      setState(next);
    });
    observe();
    return function () {
      return unobserve();
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [// eslint-disable-next-line react-hooks/exhaustive-deps
  JSON.stringify(breakpoints), useBorderBoxSize, observe, unobserve, updateOnBreakpointChange]);
  return _extends({
    ref: ref
  }, state, {
    observe: observe,
    unobserve: unobserve
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDimensions);



/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
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

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
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
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
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

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ServerStyleSheet": () => (/* binding */ Ue),
/* harmony export */   "StyleSheetConsumer": () => (/* binding */ le),
/* harmony export */   "StyleSheetContext": () => (/* binding */ ue),
/* harmony export */   "StyleSheetManager": () => (/* binding */ ye),
/* harmony export */   "ThemeConsumer": () => (/* binding */ Le),
/* harmony export */   "ThemeContext": () => (/* binding */ ze),
/* harmony export */   "ThemeProvider": () => (/* binding */ Ge),
/* harmony export */   "__PRIVATE__": () => (/* binding */ Ze),
/* harmony export */   "createGlobalStyle": () => (/* binding */ $e),
/* harmony export */   "css": () => (/* binding */ Ae),
/* harmony export */   "isStyledComponent": () => (/* binding */ N),
/* harmony export */   "keyframes": () => (/* binding */ We),
/* harmony export */   "useTheme": () => (/* binding */ Xe),
/* harmony export */   "version": () => (/* binding */ C),
/* harmony export */   "withTheme": () => (/* binding */ Je)
/* harmony export */ });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.typeOf)(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return"function"==typeof e}function _(e){return true&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",C="5.2.1",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!=="development"),O={},R= true?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:0;function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw false?0:new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),k=new Map,x=new Map,V=1,B=function(e){if(k.has(e))return k.get(e);for(;x.has(V);)V++;var t=V++;return true&&((0|t)<0||t>1<<30)&&j(16,""+t),k.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},z=function(e,t){k.set(e,t),x.set(t,e)},L="style["+A+'][data-styled-version="5.2.1"]',G=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},Y=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},q=function(){return true?__webpack_require__.nc:0},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.2.1");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=M(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(void 0!==i&&0!==a.length){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return!1}return!0}var oe=ne("5.2.1"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= false&&0,this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s.length)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, true&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__.default(a),d=[],h=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&ae.includes(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),le=ue.Consumer,de=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ue)||he}function me(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(de)||pe}function ye(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(e.stylisPlugins),n=t[0],s=t[1],c=fe(),u=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return ce({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ue.Provider,{value:u},react__WEBPACK_IMPORTED_MODULE_1___default().createElement(de.Provider,{value:l}, true?react__WEBPACK_IMPORTED_MODULE_1___default().Children.only(e.children):0))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return"";if(N(e))return"."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return true&&(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isElement)(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(S(t[i])?s.push.apply(s,e(t[i],i)):b(t[i])?s.push(be(i)+":",t[i],";"):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__.default?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}function Ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ne(g(w,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(g(e,n))}var Ce=/invalid hook call/i,Ie=new Set,Pe=function(e,t){if(true){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.";try{(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),Ie.has(n)||(console.warn(n),Ie.add(n))}catch(e){Ce.test(e.message)&&Ie.delete(n)}}},Oe=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},Re=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,De=/(^-|-$)/g;function je(e){return e.replace(Re,"-").replace(De,"")}var Te=function(e){return ee(ne(e)>>>0)};function ke(e){return"string"==typeof e&&( false||e.charAt(0)===e.charAt(0).toLowerCase())}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ve=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Be(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(xe(i))for(var a in i)Ve(a)&&Be(e,i[a],a)}return e}var ze=react__WEBPACK_IMPORTED_MODULE_1___default().createContext(),Le=ze.Consumer;function Ge(e){var t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),n=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((function(){return function(e,t){if(!e)return j(14);if(b(e)){var n=e(t);return false||null!==n&&!Array.isArray(n)&&"object"==typeof n?n:j(7)}return Array.isArray(e)||"object"!=typeof e?j(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ze.Provider,{value:n},e.children):null}var Fe={};function Ye(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":je(e);Fe[n]=(Fe[n]||0)+1;var r=n+"-"+Te("5.2.1"+n+Fe[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?je(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r){return e.shouldForwardProp(n,r)&&t.shouldForwardProp(n,r)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Oe(t,(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return true&&(0,react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue)(i), true&&!t&&r&&r(i),i}(i,r,y, true?e.warnTooManyClasses:0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default):!N||(0,_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__.default)(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_,C)}(C,e,t,P)};return O.displayName=f,(C=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(ke(e)?e:je(_(e)));return Ye(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), true&&(Pe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={}}}}(f,g)),C.toString=function(){return"."+C.styledComponentId},i&&hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var qe=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!(0,react_is__WEBPACK_IMPORTED_MODULE_0__.isValidElementType)(r))return j(1,String(r));var s=function(){return t(r,o,Ae.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Ye,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){qe[e]=qe(e)}));var He=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=re(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function $e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=Ae.apply(void 0,[e].concat(n)),a="sc-global-"+Te(JSON.stringify(i)),u=new He(i,a);function l(e){var t=fe(),n=me(),o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),l=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(t.allocateGSInstance(a)).current;return true&&react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(e.children)&&console.warn("The global style component "+a+" was given child JSX. createGlobalStyle does not render children."), true&&i.some((function(e){return"string"==typeof e&&-1!==e.indexOf("@import")}))&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)((function(){return h(l,e,t,o,n),function(){return u.removeStyles(l,t)}}),[l,e,t,o,n]),null}function h(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,O,n,o);else{var s=v({},t,{theme:Oe(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return true&&Pe(a),react__WEBPACK_IMPORTED_MODULE_1___default().memo(l)}function We(e){ true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Ae.apply(void 0,[e].concat(n)).join(""),s=Te(o);return new ve(s,o)}var Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=q();return"<style "+[n&&'nonce="'+n+'"',A+'="true"','data-styled-version="5.2.1"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?j(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return j(2);var n=((t={})[A]="",t["data-styled-version"]="5.2.1",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=q();return o&&(n.nonce=o),[react__WEBPACK_IMPORTED_MODULE_1___default().createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?j(2):react__WEBPACK_IMPORTED_MODULE_1___default().createElement(ye,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return j(3)},e}(),Je=function(e){var t=react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((function(t,n){var o=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze),i=e.defaultProps,a=Oe(t,o,i);return true&&void 0===a&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'+_(e)+'"'),react__WEBPACK_IMPORTED_MODULE_1___default().createElement(e,v({},t,{theme:a,ref:n}))}));return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(t,e),t.displayName="WithTheme("+_(e)+")",t},Xe=function(){return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ze)},Ze={StyleSheet:Z,masterSheet:he}; true&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), true&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (qe);
//# sourceMappingURL=styled-components.browser.esm.js.map


/***/ }),

/***/ "./src/Config.ts":
/*!***********************!*\
  !*** ./src/Config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = {
    requiredClass: "bg-blue-100",
    requiredColor: "#DBEAFE",
};


/***/ }),

/***/ "./src/ConnectionProvider.ts":
/*!***********************************!*\
  !*** ./src/ConnectionProvider.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ConnectionProvider = /** @class */ (function () {
    function ConnectionProvider() {
    }
    ConnectionProvider.init = function (handler) {
        ConnectionProvider.handler = handler;
    };
    ConnectionProvider.getHandler = function () {
        if (!ConnectionProvider.handler) {
            throw 'Must call init() first with a valid ConnectionProvider instance';
        }
        return ConnectionProvider.handler;
    };
    return ConnectionProvider;
}());
exports.default = ConnectionProvider;


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
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var Label_1 = __importDefault(__webpack_require__(/*! @/widgets/base/Label */ "./src/widgets/base/Label.tsx"));
function Field(_a) {
    var ooui = _a.ooui, children = _a.children, _b = _a.layout, layout = _b === void 0 ? "horizontal" : _b, valuePropName = _a.valuePropName, _c = _a.showLabel, showLabel = _c === void 0 ? false : _c, _d = _a.alignLabel, alignLabel = _d === void 0 ? "left" : _d;
    var id = ooui.id, label = ooui.label, tooltip = ooui.tooltip;
    var formItem = function () { return (react_1.default.createElement(antd_1.Form.Item, { className: "mb-0", name: id, valuePropName: valuePropName }, children)); };
    if (!showLabel) {
        return formItem();
    }
    var labelWidget = (react_1.default.createElement(Label_1.default, { ooui: new ooui_1.Label({
            name: id + "_label",
            string: label,
            help: tooltip,
            fieldForLabel: id,
        }), align: alignLabel }));
    var horizontalMode = function () {
        return (react_1.default.createElement(antd_1.Row, { align: "middle", className: "pb-1 pt-1" },
            react_1.default.createElement(antd_1.Col, { className: "ml-2", flex: "7rem" },
                react_1.default.createElement("div", { className: "flex flex-col items-end" }, labelWidget)),
            react_1.default.createElement(antd_1.Col, { flex: "auto" }, formItem())));
    };
    var verticalMode = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            labelWidget,
            formItem()));
    };
    return layout === "horizontal" ? horizontalMode() : verticalMode();
}
exports.default = Field;


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
exports.expandWidgetsIfNeeded = exports.getSpanStyleForItem = exports.fillRowWithEmptiesToFit = exports.getTemplateColumns = void 0;
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
var fillRowWithEmptiesToFit = function (_a) {
    var row = _a.row, mustFillWithEmpties = _a.mustFillWithEmpties, numberOfColumns = _a.numberOfColumns;
    var rowWithEmptiesToFit = [];
    var totalColSpan = 0;
    row.map(function (item, columnIndex) {
        totalColSpan += item.colspan;
        rowWithEmptiesToFit.push(item);
        if (columnIndex + 1 === row.length &&
            totalColSpan < numberOfColumns &&
            !mustFillWithEmpties) {
            var gapsToFill = numberOfColumns - totalColSpan;
            for (var i = 0; i < gapsToFill; i += 1) {
                rowWithEmptiesToFit.push(new ooui_1.Label({ string: "" }));
            }
        }
    });
    return rowWithEmptiesToFit;
};
exports.fillRowWithEmptiesToFit = fillRowWithEmptiesToFit;
var expandWidgetsIfNeeded = function (_a) {
    var row = _a.row, numberOfColumns = _a.numberOfColumns;
    return row.map(function (item) {
        if (item._mustExpand) {
            item.colspan = numberOfColumns;
            return item;
        }
        return item;
    });
};
exports.expandWidgetsIfNeeded = expandWidgetsIfNeeded;
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

/***/ "./src/helpers/formHelper.ts":
/*!***********************************!*\
  !*** ./src/helpers/formHelper.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTouchedValues = exports.processValues = void 0;
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
var processValues = function (values, fields) {
    var filterBooleans = filteredValues(values, fields);
    return filterBooleans;
};
exports.processValues = processValues;
var getTouchedValues = function (antForm) {
    var values = antForm.getFieldsValue(true);
    var touchedValues = {};
    Object.keys(values).map(function (key) {
        if (antForm.isFieldTouched(key)) {
            touchedValues[key] = values[key];
        }
    });
    return touchedValues;
};
exports.getTouchedValues = getTouchedValues;


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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
    var params = __spreadArray([], Object.keys(groupedValues).map(function (key) {
        return getParamForField(key, groupedValues[key], fields);
    }));
    // This is needed because in case of datetime we receive an array of arrays
    return params.reduce(function (acc, curVal) {
        if (Array.isArray(curVal[0])) {
            return acc.concat(curVal);
        }
        return __spreadArray(__spreadArray([], acc), [curVal]);
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
exports.SimpleTree = exports.One2many = exports.SearchModal = exports.FormModal = exports.ConnectionProvider = exports.SearchTree = exports.Separator = exports.Text = exports.Label = exports.Integer = exports.Float = exports.Notebook = exports.Form = exports.SearchFilter = exports.Group = exports.Tree = exports.Many2one = exports.Boolean = exports.Selection = exports.Char = exports.Button = void 0;
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
var One2many_1 = __webpack_require__(/*! @/widgets/base/One2many */ "./src/widgets/base/One2many.tsx");
Object.defineProperty(exports, "One2many", ({ enumerable: true, get: function () { return One2many_1.One2many; } }));
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
var SearchTree_1 = __importDefault(__webpack_require__(/*! @/widgets/views/SearchTree */ "./src/widgets/views/SearchTree.tsx"));
exports.SearchTree = SearchTree_1.default;
var FormModal_1 = __webpack_require__(/*! @/widgets/modals/FormModal */ "./src/widgets/modals/FormModal.tsx");
Object.defineProperty(exports, "FormModal", ({ enumerable: true, get: function () { return FormModal_1.FormModal; } }));
var SearchModal_1 = __webpack_require__(/*! @/widgets/modals/SearchModal */ "./src/widgets/modals/SearchModal.tsx");
Object.defineProperty(exports, "SearchModal", ({ enumerable: true, get: function () { return SearchModal_1.SearchModal; } }));
var SimpleTree_1 = __importDefault(__webpack_require__(/*! @/widgets/views/SimpleTree */ "./src/widgets/views/SimpleTree.tsx"));
exports.SimpleTree = SimpleTree_1.default;
var ConnectionProvider_1 = __importDefault(__webpack_require__(/*! @/ConnectionProvider */ "./src/ConnectionProvider.ts"));
exports.ConnectionProvider = ConnectionProvider_1.default;


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

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.Boolean = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var Config_1 = __importDefault(__webpack_require__(/*! @/Config */ "./src/Config.ts"));
var Boolean = function (props) {
    var ooui = props.ooui;
    var id = ooui.id, readOnly = ooui.readOnly, required = ooui.required;
    return (react_1.default.createElement(Field_1.default, __assign({}, props, { valuePropName: "checked" }),
        react_1.default.createElement("div", { className: "flex flex-row" },
            react_1.default.createElement(RequiredCheckbox, { disabled: readOnly, id: id }))));
};
exports.Boolean = Boolean;
var RequiredCheckbox = styled_components_1.default(antd_1.Checkbox)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .ant-checkbox-inner {\n    background-color: ", ";\n  }\n\n  .ant-checkbox-checked .ant-checkbox-inner {\n    background-color: #089CFF;\n  }\n"], ["\n  .ant-checkbox-inner {\n    background-color: ", ";\n  }\n\n  .ant-checkbox-checked .ant-checkbox-inner {\n    background-color: #089CFF;\n  }\n"])), Config_1.default.requiredColor);
var templateObject_1;


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
exports.Char = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var Config_1 = __importDefault(__webpack_require__(/*! @/Config */ "./src/Config.ts"));
var Char = function (props) {
    var ooui = props.ooui;
    var _a = ooui, id = _a.id, readOnly = _a.readOnly, isPassword = _a.isPassword, required = _a.required;
    var requiredClass = required ? Config_1.default.requiredClass : undefined;
    return (react_1.default.createElement(Field_1.default, __assign({}, props), isPassword ? (react_1.default.createElement(antd_1.Input.Password, { disabled: readOnly, id: id })) : (react_1.default.createElement(antd_1.Input, { disabled: readOnly, id: id, className: requiredClass }))));
};
exports.Char = Char;


/***/ }),

/***/ "./src/widgets/base/Float.tsx":
/*!************************************!*\
  !*** ./src/widgets/base/Float.tsx ***!
  \************************************/
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
exports.Float = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var Config_1 = __importDefault(__webpack_require__(/*! @/Config */ "./src/Config.ts"));
var Float = function (props) {
    var ooui = props.ooui;
    var _a = ooui, id = _a.id, decimalDigits = _a.decimalDigits, readOnly = _a.readOnly, required = _a.required;
    var requiredClass = required ? Config_1.default.requiredClass : undefined;
    return (react_1.default.createElement(Field_1.default, __assign({}, props),
        react_1.default.createElement(antd_1.InputNumber, { disabled: readOnly, className: "w-full " + requiredClass, id: id, precision: decimalDigits, formatter: function (value) {
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
exports.Integer = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var Config_1 = __importDefault(__webpack_require__(/*! @/Config */ "./src/Config.ts"));
var Integer = function (props) {
    var ooui = props.ooui;
    var id = ooui.id, readOnly = ooui.readOnly, required = ooui.required;
    var requiredClass = required ? Config_1.default.requiredClass : undefined;
    return (react_1.default.createElement(Field_1.default, __assign({}, props),
        react_1.default.createElement(antd_1.InputNumber, { id: id, className: "w-full " + requiredClass, disabled: readOnly, formatter: function (value) {
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
var antd_1 = __webpack_require__(/*! antd */ "antd");
var icons_1 = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
var alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
};
var Label = function (props) {
    var ooui = props.ooui, align = props.align, responsiveBehaviour = props.responsiveBehaviour;
    var _a = ooui, label = _a.label, tooltip = _a.tooltip, fieldForLabel = _a.fieldForLabel;
    var addColon = fieldForLabel !== null ? true : false;
    var labelText = addColon && label.length > 1 ? label + " :" : label;
    var responsiveAlign = responsiveBehaviour ? "left" : "right";
    var labelAlgin = align ? align : fieldForLabel ? responsiveAlign : "left";
    return (react_1.default.createElement("div", { className: "flex flex-row items-center pb-1 " + alignClass[labelAlgin] },
        tooltip && (react_1.default.createElement(antd_1.Tooltip, { title: tooltip },
            react_1.default.createElement(icons_1.QuestionCircleOutlined, { className: "text-xs text-blue-400 pr-1" }))),
        react_1.default.createElement("span", { className: "pr-2" }, labelText)));
};
exports.default = Label;


/***/ }),

/***/ "./src/widgets/base/Many2one.tsx":
/*!***************************************!*\
  !*** ./src/widgets/base/Many2one.tsx ***!
  \***************************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var Config_1 = __importDefault(__webpack_require__(/*! @/Config */ "./src/Config.ts"));
var SearchModal_1 = __webpack_require__(/*! @/widgets/modals/SearchModal */ "./src/widgets/modals/SearchModal.tsx");
var FormModal_1 = __webpack_require__(/*! @/widgets/modals/FormModal */ "./src/widgets/modals/FormModal.tsx");
var ConnectionProvider_1 = __importDefault(__webpack_require__(/*! @/ConnectionProvider */ "./src/ConnectionProvider.ts"));
var Many2one = function (props) {
    var ooui = props.ooui;
    return (react_1.default.createElement(Field_1.default, __assign({}, props),
        react_1.default.createElement(Many2oneInput, { ooui: ooui })));
};
exports.Many2one = Many2one;
var SEARCH_BUTTON_TAPPED_FLAG = false;
var Many2oneInput = function (props) {
    var value = props.value, onChange = props.onChange, ooui = props.ooui;
    var required = ooui.required, relation = ooui.relation, readOnly = ooui.readOnly;
    var requiredClass = required ? Config_1.default.requiredClass : undefined;
    var _a = react_1.useState(false), showSearchModal = _a[0], setShowSearchModal = _a[1];
    var _b = react_1.useState(false), showFormModal = _b[0], setShowFormModal = _b[1];
    var _c = react_1.useState(false), searching = _c[0], setSearching = _c[1];
    var _d = react_1.useState(), searchText = _d[0], setSearchText = _d[1];
    var triggerChange = function (changedValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(__assign(__assign({}, value), changedValue));
    };
    var onValueStringChange = function (e) {
        triggerChange([undefined, e.target.value]);
    };
    var id = value && value[0];
    var text = (value && value[1]) || "";
    var onElementLostFocus = function () { return __awaiter(void 0, void 0, void 0, function () {
        var results, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!id && !searching && text.trim().length > 0)) return [3 /*break*/, 6];
                    // Debounce this event to give time to the search button onClick to set the flag
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
                case 1:
                    // Debounce this event to give time to the search button onClick to set the flag
                    _a.sent();
                    // If the focus is lost because the user tapped the search button, we don't need to do nothing here
                    if (SEARCH_BUTTON_TAPPED_FLAG) {
                        triggerChange([undefined, ""]);
                        return [2 /*return*/];
                    }
                    setSearching(true);
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, 5, 6]);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                            model: relation,
                            action: "name_search",
                            payload: text,
                        })];
                case 3:
                    results = _a.sent();
                    if (results.length > 0) {
                        triggerChange(results[0]);
                    }
                    else {
                        setSearchText(text);
                        setShowSearchModal(true);
                        triggerChange([undefined, ""]);
                    }
                    return [3 /*break*/, 6];
                case 4:
                    err_1 = _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    setSearching(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement(antd_1.Row, { gutter: 8, className: "pt-1 pb-1" },
        react_1.default.createElement(antd_1.Col, { flex: "auto" },
            react_1.default.createElement(antd_1.Input, { type: "text", value: text, onChange: onValueStringChange, disabled: readOnly, className: requiredClass, onBlur: onElementLostFocus })),
        react_1.default.createElement(antd_1.Col, { flex: "32px" },
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FolderOpenOutlined, null), disabled: readOnly || id === undefined, onClick: function () {
                    setShowFormModal(true);
                }, tabIndex: -1 })),
        react_1.default.createElement(antd_1.Col, { flex: "32px" },
            react_1.default.createElement(antd_1.Button, { icon: searching ? react_1.default.createElement(icons_1.LoadingOutlined, null) : react_1.default.createElement(icons_1.SearchOutlined, null), disabled: readOnly || searching, onClick: function () {
                    SEARCH_BUTTON_TAPPED_FLAG = true;
                    setSearchText(text);
                    setShowSearchModal(true);
                }, tabIndex: -1 })),
        react_1.default.createElement(SearchModal_1.SearchModal, { model: relation, visible: showSearchModal, nameSearch: !id ? searchText : undefined, onSelectValue: function (value) {
                triggerChange(value);
                setShowSearchModal(false);
                SEARCH_BUTTON_TAPPED_FLAG = false;
            }, onCloseModal: function () {
                setShowSearchModal(false);
                SEARCH_BUTTON_TAPPED_FLAG = false;
            } }),
        react_1.default.createElement(FormModal_1.FormModal, { model: relation, id: value && value[0], visible: showFormModal, onSubmitSucceed: function (value) {
                triggerChange(value);
                setShowFormModal(false);
            }, onCancel: function () {
                setShowFormModal(false);
            } })));
};


/***/ }),

/***/ "./src/widgets/base/One2many.tsx":
/*!***************************************!*\
  !*** ./src/widgets/base/One2many.tsx ***!
  \***************************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.One2many = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var index_1 = __webpack_require__(/*! @/index */ "./src/index.ts");
var index_2 = __webpack_require__(/*! @/index */ "./src/index.ts");
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var ConnectionProvider_1 = __importDefault(__webpack_require__(/*! @/ConnectionProvider */ "./src/ConnectionProvider.ts"));
var FormModal_1 = __webpack_require__(/*! @/widgets/modals/FormModal */ "./src/widgets/modals/FormModal.tsx");
var icons_1 = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
var confirm = antd_1.Modal.confirm;
var One2many = function (props) {
    var ooui = props.ooui;
    return (react_1.default.createElement(Field_1.default, __assign({}, props),
        react_1.default.createElement(One2manyInput, { ooui: ooui })));
};
exports.One2many = One2many;
var One2manyInput = function (props) {
    var _a = props.value, value = _a === void 0 ? [] : _a, onChange = props.onChange, ooui = props.ooui;
    var triggerChange = function (changedValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(changedValue);
    };
    var _b = ooui, id = _b.id, readOnly = _b.readOnly, required = _b.required, relation = _b.relation, oouiViews = _b.views, mode = _b.mode;
    var _c = react_1.useState(new Map()), views = _c[0], setViews = _c[1];
    var _d = react_1.useState("tree"), currentView = _d[0], setCurrentView = _d[1];
    var _e = react_1.useState(0), itemIndex = _e[0], setItemIndex = _e[1];
    var _f = react_1.useState(true), isLoading = _f[0], setIsLoading = _f[1];
    var _g = react_1.useState(), error = _g[0], setError = _g[1];
    var _h = react_1.useState(false), showFormModal = _h[0], setShowFormModal = _h[1];
    var _j = react_1.useState(), modalItemId = _j[0], setModalItemId = _j[1];
    var showRemoveConfirm = function () {
        confirm({
            title: "Remove item",
            icon: react_1.default.createElement(icons_1.ExclamationCircleOutlined, null),
            centered: true,
            content: "Are you sure you want to remove this item?",
            okText: "Yes, remove it",
            onOk: function () {
                onConfirmRemove();
            },
        });
    };
    var getViewData = function (type) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (oouiViews[type]) {
                        return [2 /*return*/, oouiViews[type]];
                    }
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView(relation, type)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formView, treeView, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    setError(undefined);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    if (mode && mode.length > 0) {
                        setCurrentView(mode[0]);
                    }
                    return [4 /*yield*/, getViewData("form")];
                case 2:
                    formView = _a.sent();
                    return [4 /*yield*/, getViewData("tree")];
                case 3:
                    treeView = _a.sent();
                    views.set("form", formView);
                    views.set("tree", treeView);
                    setViews(views);
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    setError(err_1);
                    return [3 /*break*/, 5];
                case 5:
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchData();
    }, [ooui]);
    var separator = function () {
        return react_1.default.createElement("div", { className: "inline-block w-3" });
    };
    var index = function () {
        var itemToShow = "_";
        if (value.length === 0) {
            itemToShow = "_";
        }
        else {
            itemToShow = (itemIndex + 1).toString();
        }
        return (react_1.default.createElement("span", { className: "pl-1 pr-1" },
            "(",
            itemToShow,
            "/",
            value.length,
            ")"));
    };
    var toggleViewMode = function () {
        if (currentView === "form" && views.get("tree")) {
            setCurrentView("tree");
        }
        else if (currentView === "tree" && views.get("form")) {
            setCurrentView("form");
        }
    };
    var getTitle = function () {
        var type = currentView === "form" ? ooui_1.Form : ooui_1.Tree;
        var ooui = new type(views.get(currentView).fields);
        ooui.parse(views.get(currentView).arch);
        return ooui.string;
    };
    var previousItem = function () {
        if (itemIndex > 0) {
            setItemIndex(itemIndex - 1);
        }
    };
    var nextItem = function () {
        var totalItems = value.length;
        if (itemIndex < totalItems - 1) {
            setItemIndex(itemIndex + 1);
        }
    };
    var editItem = function () {
        setModalItemId(value[itemIndex]);
        setShowFormModal(true);
    };
    var createItem = function () {
        setModalItemId(undefined);
        setShowFormModal(true);
    };
    var onConfirmRemove = function () { return __awaiter(void 0, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    setError(undefined);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().delete({
                            model: relation,
                            ids: [value[itemIndex]],
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    setError(err_2);
                    return [3 /*break*/, 4];
                case 4:
                    setItemIndex(0);
                    triggerChange(value.filter(function (id) { return id !== value[itemIndex]; }));
                    setIsLoading(false);
                    fetchData();
                    return [2 /*return*/];
            }
        });
    }); };
    var topBar = function () {
        return (react_1.default.createElement("div", { className: "flex mb-2" },
            react_1.default.createElement("div", { className: "h-8 flex flex-grow bg-gray-700 text-gray-200" },
                react_1.default.createElement("div", { className: "h-full flex flex-col justify-center items-center" },
                    react_1.default.createElement("span", { className: "pl-2 font-bold" }, getTitle()))),
            react_1.default.createElement("div", { className: "h-8 flex-none pl-2" },
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FileAddOutlined, { onClick: createItem }) }),
                currentView === "form" && (react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.EditOutlined, null), onClick: editItem })),
                currentView === "form" && (react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.DeleteOutlined, { onClick: showRemoveConfirm }) })),
                separator(),
                currentView === "form" && (react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.LeftOutlined, null), onClick: previousItem }),
                    index(),
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.RightOutlined, null), onClick: nextItem }),
                    separator())),
                react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.AlignLeftOutlined, null), onClick: toggleViewMode }))));
    };
    var content = function () {
        if (currentView === "form") {
            return (react_1.default.createElement(index_1.Form, { model: relation, id: value[itemIndex], onCancel: function () { }, onSubmitSucceed: function () {
                    fetchData();
                } }));
        }
        return (react_1.default.createElement(index_2.SimpleTree, { model: relation, ids: value, formView: views.get("form"), treeView: views.get("tree"), onRowClicked: function (event) {
                var id = event.id;
                setModalItemId(id);
                setShowFormModal(true);
            } }));
    };
    if (isLoading) {
        return react_1.default.createElement(antd_1.Spin, null);
    }
    if (error) {
        return react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: error, type: "error", banner: true });
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        topBar(),
        content(),
        react_1.default.createElement(FormModal_1.FormModal, { model: relation, id: modalItemId, visible: showFormModal, onSubmitSucceed: function (event) {
                var id = event[0];
                if (!value.includes(id)) {
                    triggerChange(value.concat(id));
                }
                setShowFormModal(false);
                fetchData();
            }, onCancel: function () {
                setShowFormModal(false);
            } })));
};


/***/ }),

/***/ "./src/widgets/base/Selection.tsx":
/*!****************************************!*\
  !*** ./src/widgets/base/Selection.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
exports.Selection = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"));
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var Config_1 = __importDefault(__webpack_require__(/*! @/Config */ "./src/Config.ts"));
var Option = antd_1.Select.Option;
var Selection = function (props) {
    var ooui = props.ooui;
    var _a = ooui, selectionValues = _a.selectionValues, readOnly = _a.readOnly, required = _a.required;
    var values = Array.from(selectionValues.entries());
    var options = values &&
        values.length &&
        values.map(function (entry) {
            var key = entry[0], value = entry[1];
            return (react_1.default.createElement(Option, { key: key, value: key }, value));
        });
    var CustomSelect = required ? RequiredSelect : antd_1.Select;
    return (react_1.default.createElement(Field_1.default, __assign({}, props),
        react_1.default.createElement(CustomSelect, { disabled: readOnly }, options)));
};
exports.Selection = Selection;
var RequiredSelect = styled_components_1.default(antd_1.Select)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {\n    background-color: ", ";\n  }\n"], ["\n  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {\n    background-color: ", ";\n  }\n"])), Config_1.default.requiredColor);
var templateObject_1;


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
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var Config_1 = __importDefault(__webpack_require__(/*! @/Config */ "./src/Config.ts"));
var TextArea = antd_1.Input.TextArea;
var Text = function (props) {
    var ooui = props.ooui;
    var readOnly = ooui.readOnly, required = ooui.required;
    var requiredClass = required ? Config_1.default.requiredClass : undefined;
    return (react_1.default.createElement(Field_1.default, __assign({}, props),
        react_1.default.createElement(TextArea, { disabled: readOnly, className: requiredClass, rows: 4 })));
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
var containerHelper_1 = __webpack_require__(/*! @/helpers/containerHelper */ "./src/helpers/containerHelper.ts");
var Container = function (props) {
    var container = props.container, _a = props.formWrapper, formWrapper = _a === void 0 ? false : _a, responsiveBehaviour = props.responsiveBehaviour;
    var rows = container.rows;
    var columns = container.columns;
    var content = rows.map(function (row, i) {
        var rowWithoutInvisibleFields = row.filter(function (widget) {
            return !widget.invisible;
        });
        var rowWithExpandedItems = containerHelper_1.expandWidgetsIfNeeded({
            row: rowWithoutInvisibleFields,
            numberOfColumns: columns,
        });
        var rowWithEmptiesToFit = containerHelper_1.fillRowWithEmptiesToFit({
            row: rowWithExpandedItems,
            numberOfColumns: columns,
            mustFillWithEmpties: responsiveBehaviour,
        });
        return rowWithEmptiesToFit.map(function (item, j) {
            return (react_1.default.createElement("div", { key: i.toString() + "-" + j.toString(), className: "self-center p-2", style: containerHelper_1.getSpanStyleForItem({ item: item, responsiveBehaviour: responsiveBehaviour }) }, WidgetFactory_1.createReactWidget({
                ooui: item,
                responsiveBehaviour: responsiveBehaviour,
            })));
        });
    });
    // TODO: Review this behaviour if it's needed
    if (formWrapper) {
        columns = 4;
        // return content as any;
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
    var ooui = props.ooui, _a = props.showLabel, showLabel = _a === void 0 ? true : _a, responsiveBehaviour = props.responsiveBehaviour;
    return (react_1.default.createElement(react_1.default.Fragment, null, ooui.label && showLabel ? (react_1.default.createElement(Fieldset_1.default, { label: ooui.label },
        react_1.default.createElement(Container_1.default, { container: ooui.container, responsiveBehaviour: responsiveBehaviour }))) : (react_1.default.createElement(Container_1.default, { container: ooui.container, responsiveBehaviour: responsiveBehaviour }))));
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
    var ooui = props.ooui, responsiveBehaviour = props.responsiveBehaviour;
    var tabs = [].concat.apply([], ooui.container.rows);
    return (react_1.default.createElement(antd_1.Tabs, { defaultActiveKey: "1" }, tabs.map(function (page, key) {
        var tabKey = (key + 1).toString();
        return (react_1.default.createElement(TabPane, { tab: page.label, key: tabKey },
            react_1.default.createElement(index_1.Group, { ooui: page, showLabel: false, responsiveBehaviour: responsiveBehaviour })));
    })));
}
exports.default = Notebook;


/***/ }),

/***/ "./src/widgets/modals/FormModal.tsx":
/*!******************************************!*\
  !*** ./src/widgets/modals/FormModal.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormModal = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Form_1 = __importDefault(__webpack_require__(/*! @/widgets/views/Form */ "./src/widgets/views/Form.tsx"));
var FormModal = function (props) {
    var visible = props.visible, onCancel = props.onCancel, onSubmitSucceed = props.onSubmitSucceed, id = props.id, model = props.model, _a = props.title, title = _a === void 0 ? id ? "Detail" : "New" : _a, getDataFromAction = props.getDataFromAction;
    return (react_1.default.createElement(antd_1.Modal, { title: title, centered: true, width: 1000, visible: visible, closable: false, onCancel: onCancel, footer: null },
        react_1.default.createElement(Form_1.default
        // key={Math.random() * 10000} // This forces the Form component to be unique each time the modal is shown
        , { 
            // key={Math.random() * 10000} // This forces the Form component to be unique each time the modal is shown
            id: id, model: model, getDataFromAction: getDataFromAction, onCancel: onCancel, onSubmitSucceed: onSubmitSucceed, showFooter: true })));
};
exports.FormModal = FormModal;


/***/ }),

/***/ "./src/widgets/modals/SearchModal.tsx":
/*!********************************************!*\
  !*** ./src/widgets/modals/SearchModal.tsx ***!
  \********************************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchModal = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var FormModal_1 = __webpack_require__(/*! ./FormModal */ "./src/widgets/modals/FormModal.tsx");
var SearchTree_1 = __importDefault(__webpack_require__(/*! @/widgets/views/SearchTree */ "./src/widgets/views/SearchTree.tsx"));
var ConnectionProvider_1 = __importDefault(__webpack_require__(/*! @/ConnectionProvider */ "./src/ConnectionProvider.ts"));
var icons_1 = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
var SearchModal = function (props) {
    var visible = props.visible, onCloseModal = props.onCloseModal, onSelectValue = props.onSelectValue, model = props.model, nameSearch = props.nameSearch;
    var _a = react_1.useState(false), showCreateModal = _a[0], setShowCreateModal = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(), error = _c[0], setError = _c[1];
    var onRowClicked = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var id, model_1, value, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    setError(undefined);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    id = event.id, model_1 = event.model;
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                            action: "name_get",
                            payload: [id],
                            model: model_1,
                        })];
                case 2:
                    value = _a.sent();
                    onSelectValue(value[0]);
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    setError(err_1);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var content = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            error && (react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: error, type: "error", banner: true })),
            visible && (react_1.default.createElement(SearchTree_1.default, { model: model, nameSearch: nameSearch, onRowClicked: onRowClicked })),
            react_1.default.createElement(antd_1.Divider, null),
            react_1.default.createElement(antd_1.Row, { justify: "end" },
                react_1.default.createElement(antd_1.Space, null,
                    react_1.default.createElement(antd_1.Button, { disabled: loading, icon: react_1.default.createElement(icons_1.FileAddOutlined, null), onClick: function () {
                            setShowCreateModal(true);
                        } }, "New"),
                    react_1.default.createElement(antd_1.Button, { disabled: loading, icon: react_1.default.createElement(icons_1.CloseOutlined, null), onClick: onCloseModal }, "Cancel")))));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Modal, { title: "Search", centered: true, width: 1400, visible: visible && !showCreateModal, closable: true, onCancel: onCloseModal, footer: null },
            react_1.default.createElement("div", null, loading ? react_1.default.createElement(antd_1.Spin, null) : content())),
        react_1.default.createElement(FormModal_1.FormModal, { model: model, visible: showCreateModal, onSubmitSucceed: function (value) {
                setShowCreateModal(false);
                onCloseModal();
                onSelectValue(value);
            }, onCancel: function () {
                setShowCreateModal(false);
                onCloseModal();
            } })));
};
exports.SearchModal = SearchModal;


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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var antd_1 = __webpack_require__(/*! antd */ "antd");
var react_cool_dimensions_1 = __importDefault(__webpack_require__(/*! react-cool-dimensions */ "./node_modules/react-cool-dimensions/dist/index.esm.js"));
var icons_1 = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
var Container_1 = __importDefault(__webpack_require__(/*! @/widgets/containers/Container */ "./src/widgets/containers/Container.tsx"));
var formHelper_1 = __webpack_require__(/*! @/helpers/formHelper */ "./src/helpers/formHelper.ts");
var ConnectionProvider_1 = __importDefault(__webpack_require__(/*! @/ConnectionProvider */ "./src/ConnectionProvider.ts"));
var confirm = antd_1.Modal.confirm;
var WIDTH_BREAKPOINT = 1000;
function Form(props) {
    var _this = this;
    var model = props.model, id = props.id, onCancel = props.onCancel, onSubmitSucceed = props.onSubmitSucceed, _a = props.showFooter, showFooter = _a === void 0 ? false : _a, _b = props.getDataFromAction, getDataFromAction = _b === void 0 ? false : _b;
    var _c = react_1.useState(false), isSubmitting = _c[0], setIsSubmitting = _c[1];
    var _d = react_1.useState(), error = _d[0], setError = _d[1];
    var _e = react_1.useState(false), loading = _e[0], setLoading = _e[1];
    var _f = react_1.useState(), form = _f[0], setForm = _f[1];
    var antForm = antd_1.Form.useForm()[0];
    var _g = react_cool_dimensions_1.default({
        breakpoints: { XS: 0, SM: 320, MD: 480, LG: 1000 },
        updateOnBreakpointChange: true,
    }), width = _g.width, ref = _g.ref;
    var responsiveBehaviour = width < WIDTH_BREAKPOINT;
    var showConfirm = function () {
        confirm({
            title: "There are unsaved changes",
            icon: react_1.default.createElement(icons_1.ExclamationCircleOutlined, null),
            centered: true,
            content: "Do you really want to close this window without saving?",
            okText: "Close without saving",
            onOk: function () {
                onCancel === null || onCancel === void 0 ? void 0 : onCancel();
            },
        });
    };
    var cancel = function () {
        if (Object.keys(formHelper_1.getTouchedValues(antForm)).length > 0) {
            showConfirm();
            return;
        }
        onCancel === null || onCancel === void 0 ? void 0 : onCancel();
    };
    var getFormView = function () { return __awaiter(_this, void 0, void 0, function () {
        var action, viewsForAction;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!getDataFromAction) return [3 /*break*/, 3];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getAction(model)];
                case 1:
                    action = _a.sent();
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getViewsForAction(action)];
                case 2:
                    viewsForAction = _a.sent();
                    return [2 /*return*/, viewsForAction.views.get("form")];
                case 3: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView(model, "form")];
                case 4: return [2 /*return*/, (_a.sent())];
            }
        });
    }); };
    var fetchData = function () { return __awaiter(_this, void 0, void 0, function () {
        var view, ooui, _values, valuesProcessed, mustClearFieldsFirst, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, 8, 9]);
                    return [4 /*yield*/, getFormView()];
                case 2:
                    view = _a.sent();
                    ooui = new ooui_1.Form(view.fields);
                    ooui.parse(view.arch);
                    setForm({ ooui: ooui, view: view });
                    _values = {};
                    if (!id) return [3 /*break*/, 4];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            arch: view.arch,
                            model: model,
                            ids: [id],
                        })];
                case 3:
                    _values = (_a.sent())[0];
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                        model: model,
                        action: "default_get",
                        payload: Object.keys(view.fields),
                    })];
                case 5:
                    _values = _a.sent();
                    _a.label = 6;
                case 6:
                    valuesProcessed = formHelper_1.processValues(_values, view.fields);
                    mustClearFieldsFirst = Object.keys(antForm.getFieldsValue(true)).length > 0;
                    if (mustClearFieldsFirst) {
                        antForm.resetFields();
                    }
                    antForm.setFieldsValue(valuesProcessed);
                    return [3 /*break*/, 9];
                case 7:
                    err_1 = _a.sent();
                    setError(err_1);
                    return [3 /*break*/, 9];
                case 8:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchData();
    }, [id, model]);
    var submitForm = function () { return __awaiter(_this, void 0, void 0, function () {
        var touchedValues, objectId, newId, value, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 7, 8, 9]);
                    touchedValues = formHelper_1.getTouchedValues(antForm);
                    objectId = id;
                    if (!(Object.keys(touchedValues).length !== 0)) return [3 /*break*/, 5];
                    if (!id) return [3 /*break*/, 3];
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().update({
                            model: model,
                            id: id,
                            values: touchedValues,
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().create({
                        model: model,
                        values: touchedValues,
                    })];
                case 4:
                    newId = _a.sent();
                    objectId = newId;
                    _a.label = 5;
                case 5: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                        action: "name_get",
                        payload: [objectId],
                        model: model,
                    })];
                case 6:
                    value = _a.sent();
                    onSubmitSucceed === null || onSubmitSucceed === void 0 ? void 0 : onSubmitSucceed(value[0]);
                    return [3 /*break*/, 9];
                case 7:
                    err_2 = _a.sent();
                    setError(err_2);
                    return [3 /*break*/, 9];
                case 8:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
            }
        });
    }); };
    var content = function () {
        if (!form) {
            return null;
        }
        return (react_1.default.createElement(antd_1.Form, { form: antForm }, form && (react_1.default.createElement(Container_1.default, { container: form.ooui.container, formWrapper: true, responsiveBehaviour: responsiveBehaviour }))));
    };
    var footer = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(antd_1.Divider, null),
            react_1.default.createElement(antd_1.Row, { justify: "end" },
                react_1.default.createElement(antd_1.Space, null,
                    react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.CloseOutlined, null), disabled: isSubmitting || loading, onClick: cancel }, "Cancel"),
                    react_1.default.createElement(antd_1.Button, { disabled: isSubmitting || loading, loading: isSubmitting, icon: react_1.default.createElement(icons_1.CheckOutlined, null), onClick: submitForm }, "OK")))));
    };
    return (react_1.default.createElement("div", { ref: ref },
        error && react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: error, type: "error", banner: true }),
        loading ? react_1.default.createElement(antd_1.Spin, null) : content(),
        showFooter && footer()));
}
exports.default = Form;


/***/ }),

/***/ "./src/widgets/views/SearchTree.tsx":
/*!******************************************!*\
  !*** ./src/widgets/views/SearchTree.tsx ***!
  \******************************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var SearchFilter_1 = __importDefault(__webpack_require__(/*! @/widgets/views/searchFilter/SearchFilter */ "./src/widgets/views/searchFilter/SearchFilter.tsx"));
var Tree_1 = __importDefault(__webpack_require__(/*! @/widgets/views/Tree */ "./src/widgets/views/Tree.tsx"));
var ConnectionProvider_1 = __importDefault(__webpack_require__(/*! @/ConnectionProvider */ "./src/ConnectionProvider.ts"));
var DEFAULT_SEARCH_LIMIT = 80;
function SearchTree(props) {
    var _this = this;
    var action = props.action, model = props.model, onRowClicked = props.onRowClicked, nameSearch = props.nameSearch;
    var _a = react_1.useState(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = react_1.useState(false), initialFetchDone = _b[0], setInitialFetchDone = _b[1];
    var _c = react_1.useState(false), searchNameGetDone = _c[0], setSearchNameGetDone = _c[1];
    var _d = react_1.useState(), currentModel = _d[0], setCurrentModel = _d[1];
    var _e = react_1.useState(), treeView = _e[0], setTreeView = _e[1];
    var _f = react_1.useState(), formView = _f[0], setFormView = _f[1];
    var _g = react_1.useState(1), page = _g[0], setPage = _g[1];
    var _h = react_1.useState(0), offset = _h[0], setOffset = _h[1];
    var _j = react_1.useState(DEFAULT_SEARCH_LIMIT), limit = _j[0], setLimit = _j[1];
    var _k = react_1.useState(), limitFromAction = _k[0], setLimitFromAction = _k[1];
    var _l = react_1.useState([]), params = _l[0], setParams = _l[1];
    var _m = react_1.useState(0), totalItems = _m[0], setTotalItems = _m[1];
    var _o = react_1.useState([]), results = _o[0], setResults = _o[1];
    var _p = react_1.useState(false), searchFilterLoading = _p[0], setSearchFilterLoading = _p[1];
    var _q = react_1.useState(), searchError = _q[0], setSearchError = _q[1];
    var _r = react_1.useState(), initialError = _r[0], setInitialError = _r[1];
    var _s = react_1.useState(false), tableRefreshing = _s[0], setTableRefreshing = _s[1];
    var onRequestPageChange = function (page) {
        setTableRefreshing(true);
        setPage(page);
        setOffset((page - 1) * limit);
    };
    var searchByNameSearch = function () { return __awaiter(_this, void 0, void 0, function () {
        var searchResults, resultsIds, resultsWithData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().execute({
                        model: currentModel,
                        action: "name_search",
                        payload: nameSearch,
                    })];
                case 1:
                    searchResults = _a.sent();
                    setTotalItems(searchResults.length);
                    if (!(searchResults.length > 0)) return [3 /*break*/, 3];
                    resultsIds = searchResults.map(function (item) {
                        return item === null || item === void 0 ? void 0 : item[0];
                    });
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                            model: currentModel,
                            ids: resultsIds,
                            arch: treeView === null || treeView === void 0 ? void 0 : treeView.arch,
                        })];
                case 2:
                    resultsWithData = _a.sent();
                    setResults(resultsWithData);
                    return [3 /*break*/, 4];
                case 3:
                    setResults([]);
                    _a.label = 4;
                case 4:
                    setSearchNameGetDone(true);
                    return [2 /*return*/];
            }
        });
    }); };
    var searchResults = function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, totalItems, results;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().search({
                        params: params,
                        limit: limit,
                        offset: offset,
                        model: currentModel,
                        fields: treeView.fields,
                    })];
                case 1:
                    _a = _b.sent(), totalItems = _a.totalItems, results = _a.results;
                    setTotalItems(totalItems);
                    setResults(results);
                    return [2 /*return*/];
            }
        });
    }); };
    var fetchResults = function () { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, 6, 7]);
                    setTableRefreshing(true);
                    if (!(!searchNameGetDone && nameSearch)) return [3 /*break*/, 2];
                    return [4 /*yield*/, searchByNameSearch()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, searchResults()];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5:
                    error_1 = _a.sent();
                    setSearchError(error_1);
                    return [3 /*break*/, 7];
                case 6:
                    setTableRefreshing(false);
                    setSearchFilterLoading(false);
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (!initialFetchDone) {
            return;
        }
        fetchResults();
    }, [page, limit, offset, params, initialFetchDone]);
    var fetchData = function (type) { return __awaiter(_this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setInitialFetchDone(false);
                    setIsLoading(true);
                    setInitialError(undefined);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, 7, 8]);
                    if (!(type === "action")) return [3 /*break*/, 3];
                    return [4 /*yield*/, fetchActionData()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, fetchModelData()];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    setInitialFetchDone(true);
                    return [3 /*break*/, 8];
                case 6:
                    error_2 = _a.sent();
                    setInitialError(error_2);
                    return [3 /*break*/, 8];
                case 7:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var fetchActionData = function () { return __awaiter(_this, void 0, void 0, function () {
        var dataForAction;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getViewsForAction(action)];
                case 1:
                    dataForAction = _a.sent();
                    setFormView(dataForAction.views.get("form"));
                    setTreeView(dataForAction.views.get("tree"));
                    setCurrentModel(dataForAction.model);
                    setLimitFromAction(dataForAction.limit);
                    setLimit(dataForAction.limit);
                    return [2 /*return*/];
            }
        });
    }); };
    var fetchModelData = function () { return __awaiter(_this, void 0, void 0, function () {
        var _formView, _treeView;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setCurrentModel(model);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView(model, "form")];
                case 1:
                    _formView = _a.sent();
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().getView(model, "tree")];
                case 2:
                    _treeView = _a.sent();
                    setFormView(_formView);
                    setTreeView(_treeView);
                    setLimitFromAction(undefined);
                    setLimit(DEFAULT_SEARCH_LIMIT);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (action) {
            fetchData("action");
        }
        else {
            fetchData("model");
        }
    }, [action, model]);
    var onClear = function () {
        if (tableRefreshing)
            return;
        setSearchError(undefined);
        setParams([]);
        setOffset(0);
        setPage(1);
        setLimit(limitFromAction || DEFAULT_SEARCH_LIMIT);
    };
    var onSubmit = function (_a) {
        var newParams = _a.params, newLimit = _a.limit, newOffset = _a.offset;
        if (tableRefreshing)
            return;
        setSearchFilterLoading(true);
        setSearchError(undefined);
        setPage(1);
        if (newLimit)
            setLimit(newLimit);
        if (newOffset)
            setOffset(newOffset);
        setParams(newParams);
    };
    var onRowClickedHandler = function (id) {
        onRowClicked({
            id: id,
            model: currentModel,
            formView: formView,
            treeView: treeView,
        });
    };
    var content = function () {
        if (!treeView || !formView) {
            return null;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(SearchFilter_1.default, { fields: __assign(__assign({}, treeView.fields), formView.fields), searchFields: formView.search_fields, onClear: onClear, limit: limit, offset: offset, isSearching: searchFilterLoading, onSubmit: onSubmit }),
            searchError && (react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: searchError, type: "error", banner: true })),
            react_1.default.createElement("div", { className: "pb-10" }),
            react_1.default.createElement(Tree_1.default, { total: totalItems, limit: limit, page: page, treeView: treeView, results: results, onRequestPageChange: onRequestPageChange, loading: tableRefreshing, onRowClicked: onRowClickedHandler })));
    };
    if (initialError) {
        return (react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: initialError, type: "error", banner: true }));
    }
    return isLoading ? react_1.default.createElement(antd_1.Spin, null) : content();
}
exports.default = SearchTree;


/***/ }),

/***/ "./src/widgets/views/SimpleTree.tsx":
/*!******************************************!*\
  !*** ./src/widgets/views/SimpleTree.tsx ***!
  \******************************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var Tree_1 = __importDefault(__webpack_require__(/*! @/widgets/views/Tree */ "./src/widgets/views/Tree.tsx"));
var ConnectionProvider_1 = __importDefault(__webpack_require__(/*! @/ConnectionProvider */ "./src/ConnectionProvider.ts"));
function SimpleTree(props) {
    var _this = this;
    var ids = props.ids, model = props.model, treeView = props.treeView, formView = props.formView, onRowClicked = props.onRowClicked;
    var _a = react_1.useState([]), results = _a[0], setResults = _a[1];
    var _b = react_1.useState(), error = _b[0], setError = _b[1];
    var _c = react_1.useState(false), tableRefreshing = _c[0], setTableRefreshing = _c[1];
    var readObjects = function () { return __awaiter(_this, void 0, void 0, function () {
        var values;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, ConnectionProvider_1.default.getHandler().readObjects({
                        arch: treeView.arch,
                        model: model,
                        ids: ids,
                    })];
                case 1:
                    values = _a.sent();
                    setResults(values);
                    return [2 /*return*/];
            }
        });
    }); };
    var fetchResults = function () { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    setTableRefreshing(true);
                    return [4 /*yield*/, readObjects()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    setError(error_1);
                    return [3 /*break*/, 4];
                case 3:
                    setTableRefreshing(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchResults();
    }, [ids, model]);
    var onRowClickedHandler = function (id) {
        onRowClicked({
            id: id,
            model: model,
            formView: formView,
            treeView: treeView,
        });
    };
    var content = function () {
        if (!treeView || !formView) {
            return null;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Tree_1.default, { total: ids.length, limit: ids.length, treeView: treeView, results: results, loading: tableRefreshing, onRowClicked: onRowClickedHandler, showPagination: false })));
    };
    if (error) {
        return react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: error, type: "error", banner: true });
    }
    return content();
}
exports.default = SimpleTree;


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
var strings = {
    no_results: "No results",
    summary: "Showing registers from {from} to {to} of {total} registers",
};
function Tree(props) {
    var _a = props.page, page = _a === void 0 ? 1 : _a, limit = props.limit, total = props.total, treeView = props.treeView, results = props.results, onRequestPageChange = props.onRequestPageChange, loading = props.loading, onRowClicked = props.onRowClicked, _b = props.showPagination, showPagination = _b === void 0 ? true : _b;
    var _c = react_1.useState([]), items = _c[0], setItems = _c[1];
    var _d = react_1.useState([]), columns = _d[0], setColumns = _d[1];
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
    var summary = loading
        ? null
        : total === 0
            ? LocalesContext_1.getLocalizedString("no_results", strings)
            : LocalesContext_1.getLocalizedString("summary", strings)
                .replace("{from}", from === null || from === void 0 ? void 0 : from.toString())
                .replace("{to}", to === null || to === void 0 ? void 0 : to.toString())
                .replace("{total}", total === null || total === void 0 ? void 0 : total.toString());
    var pagination = function () {
        if (!showPagination) {
            return null;
        }
        return loading ? null : (react_1.default.createElement(react_1.default.Fragment, null,
            summary,
            react_1.default.createElement(antd_1.Pagination, { total: total, pageSize: limit, current: page, className: "pb-5 pt-5", showSizeChanger: false, onChange: onRequestPageChange })));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        pagination(),
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
exports.DateRangePicker = void 0;
var antd_1 = __webpack_require__(/*! antd */ "antd");
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var DateRangePicker = function (props) {
    return (react_1.default.createElement(Field_1.default, __assign({}, props, { layout: "vertical" }),
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
exports.DateTimeRangePicker = void 0;
var antd_1 = __webpack_require__(/*! antd */ "antd");
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var Field_1 = __importDefault(__webpack_require__(/*! @/common/Field */ "./src/common/Field.tsx"));
var ooui_1 = __webpack_require__(/*! ooui */ "./node_modules/ooui/dist/index.js");
var Label_1 = __importDefault(__webpack_require__(/*! @/widgets/base/Label */ "./src/widgets/base/Label.tsx"));
var antd_2 = __webpack_require__(/*! antd */ "antd");
var DateTimeRangePicker = function (props) {
    var ooui = props.ooui, _a = props.showLabel, showLabel = _a === void 0 ? false : _a;
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
        showLabel && (react_1.default.createElement(Label_1.default, { ooui: new ooui_1.Label({
                name: id + "_label",
                string: label,
                help: ooui.tooltip,
                fieldForLabel: id,
            }), align: "left" })),
        react_1.default.createElement(antd_2.Row, { align: "bottom", className: "p-0" },
            react_1.default.createElement(antd_2.Col, { className: "mr-2" },
                react_1.default.createElement(Field_1.default, __assign({}, props, { ooui: fields[0], showLabel: false }),
                    react_1.default.createElement(antd_1.DatePicker.RangePicker, { className: "w-60", format: "DD/MM/YYYY" }))),
            react_1.default.createElement(antd_2.Col, null,
                react_1.default.createElement(Field_1.default, __assign({}, props, { ooui: fields[1], showLabel: false }),
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
var Label_1 = __importDefault(__webpack_require__(/*! @/widgets/base/Label */ "./src/widgets/base/Label.tsx"));
function PairFields(props) {
    var ooui = props.ooui, showLabel = props.showLabel;
    var id = ooui.id, label = ooui.label, tooltip = ooui.tooltip;
    var Widget = ooui instanceof ooui_1.Integer ? Integer_1.Integer : Float_1.Float;
    var getWidget = function (suffix) {
        return (react_1.default.createElement(Widget, { ooui: __assign(__assign({}, ooui), { id: id + suffix, label: "", tooltip: undefined }), layout: "vertical" }));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        showLabel && (react_1.default.createElement(Label_1.default, { ooui: new ooui_1.Label({
                name: id + "_label",
                string: label,
                help: tooltip,
                fieldForLabel: id,
            }), align: "left" })),
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
    field.required = false;
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
            return react_1.default.createElement(Selection_1.Selection, { layout: "vertical", ooui: ooui, showLabel: true });
        }
        case types.float:
        case types.progressbar:
        case types.float_time:
        case types.integer: {
            return react_1.default.createElement(PairFields_1.PairFields, { ooui: field, showLabel: true });
        }
        case types.date: {
            return react_1.default.createElement(DateRangePicker_1.DateRangePicker, { ooui: field, layout: "vertical", showLabel: true });
        }
        case types.datetime: {
            return react_1.default.createElement(DateTimeRangePicker_1.DateTimeRangePicker, { ooui: field, layout: "vertical", showLabel: true });
        }
        default: {
            return react_1.default.createElement(Char_1.Char, { ooui: field, layout: "vertical", showLabel: true });
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
var strings = {
    true: "Yes",
    false: "No",
    simple_search: "Simple search",
    advanced_search: "Advanced search",
    search: "Search",
    parameters: "Parameters",
    limit: "Limit",
    first: "First",
};
function SearchFilter(props) {
    var fields = props.fields, searchFields = props.searchFields, onClear = props.onClear, onSubmit = props.onSubmit, isSearching = props.isSearching, offset = props.offset, limit = props.limit;
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
        form.resetFields();
        setAdvancedFilter(false);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9pcy1wcm9wLXZhbGlkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvQm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvQ2hhci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvQ29udGFpbmVyV2lkZ2V0LmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0RhdGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRmllbGQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRmxvYXQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRmxvYXRUaW1lLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvR3JvdXAuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9MYWJlbC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9NYW55Mm1hbnkuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvTWFueTJvbmUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvTmV3TGluZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Ob3RlYm9vay5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9PbmUybWFueS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9QYWdlLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1NlYXJjaEZpbHRlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9TZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvU2VwYXJhdG9yLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1RleHQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvVHJlZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9XaWRnZXQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvV2lkZ2V0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9oZWxwZXJzL2RvbWFpblBhcnNlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9oZWxwZXJzL25vZGVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9yZWFjdC1jb29sLWRpbWVuc2lvbnMvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3dlcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2Rpc3Qvc3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9Db25uZWN0aW9uUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9jb21tb24vRmllbGQudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvY29udGV4dC9Mb2NhbGVzQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9oZWxwZXJzL2NvbnRhaW5lckhlbHBlci50cyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL2hlbHBlcnMvZm9ybUhlbHBlci50cyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL2hlbHBlcnMvc2VhcmNoRmlsdGVySGVscGVyLnRzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvaGVscGVycy90cmVlSGVscGVyLnRzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy91aS9GaWVsZHNldC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL1dpZGdldEZhY3RvcnkudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0Jvb2xlYW4udHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvQ2hhci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvRmxvYXQudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0ludGVnZXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0xhYmVsLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9NYW55Mm9uZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvT25lMm1hbnkudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL1NlbGVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvU2VwYXJhdG9yLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9UZXh0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvY29udGFpbmVycy9Db250YWluZXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9jb250YWluZXJzL0dyb3VwLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvY29udGFpbmVycy9Ob3RlYm9vay50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL21vZGFscy9Gb3JtTW9kYWwudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9tb2RhbHMvU2VhcmNoTW9kYWwudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9Gb3JtLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3MvU2VhcmNoVHJlZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL1NpbXBsZVRyZWUudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9UcmVlLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL0RhdGVSYW5nZVBpY2tlci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9EYXRlVGltZVJhbmdlUGlja2VyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL1BhaXJGaWVsZHMudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvU2VhcmNoQm90dG9tQmFyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL1NlYXJjaEZpZWxkLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL1NlYXJjaEZpbHRlci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9TZWFyY2hQYXJhbXMudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovL3JlYWN0LW9vdWkvZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlYWN0LW9vdWkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlYWN0LW9vdWkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7OztBQ1Z1Qzs7QUFFdkMsazdIQUFrN0g7O0FBRWw3SCxZQUFZLHlEQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZHJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1J2QjtBQUNBO0FBQ0EseUtBQXlLLE9BQU87QUFDaEw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsT0FBTztBQUNs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Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwiYW50ZFwiLCBcIkBhbnQtZGVzaWduL2ljb25zXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInJlYWN0LW9vdWlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImFudGRcIiksIHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicmVhY3Qtb291aVwiXSA9IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdLCByb290W1wiYW50ZFwiXSwgcm9vdFtcIkBhbnQtZGVzaWduL2ljb25zXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9hbnRkX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FudF9kZXNpZ25faWNvbnNfXykge1xucmV0dXJuICIsImltcG9ydCBtZW1vaXplIGZyb20gJ0BlbW90aW9uL21lbW9pemUnO1xuXG52YXIgcmVhY3RQcm9wc1JlZ2V4ID0gL14oKGNoaWxkcmVufGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MfGtleXxyZWZ8YXV0b0ZvY3VzfGRlZmF1bHRWYWx1ZXxkZWZhdWx0Q2hlY2tlZHxpbm5lckhUTUx8c3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nfHN1cHByZXNzSHlkcmF0aW9uV2FybmluZ3x2YWx1ZUxpbmt8YWNjZXB0fGFjY2VwdENoYXJzZXR8YWNjZXNzS2V5fGFjdGlvbnxhbGxvd3xhbGxvd1VzZXJNZWRpYXxhbGxvd1BheW1lbnRSZXF1ZXN0fGFsbG93RnVsbFNjcmVlbnxhbGxvd1RyYW5zcGFyZW5jeXxhbHR8YXN5bmN8YXV0b0NvbXBsZXRlfGF1dG9QbGF5fGNhcHR1cmV8Y2VsbFBhZGRpbmd8Y2VsbFNwYWNpbmd8Y2hhbGxlbmdlfGNoYXJTZXR8Y2hlY2tlZHxjaXRlfGNsYXNzSUR8Y2xhc3NOYW1lfGNvbHN8Y29sU3Bhbnxjb250ZW50fGNvbnRlbnRFZGl0YWJsZXxjb250ZXh0TWVudXxjb250cm9sc3xjb250cm9sc0xpc3R8Y29vcmRzfGNyb3NzT3JpZ2lufGRhdGF8ZGF0ZVRpbWV8ZGVjb2Rpbmd8ZGVmYXVsdHxkZWZlcnxkaXJ8ZGlzYWJsZWR8ZGlzYWJsZVBpY3R1cmVJblBpY3R1cmV8ZG93bmxvYWR8ZHJhZ2dhYmxlfGVuY1R5cGV8Zm9ybXxmb3JtQWN0aW9ufGZvcm1FbmNUeXBlfGZvcm1NZXRob2R8Zm9ybU5vVmFsaWRhdGV8Zm9ybVRhcmdldHxmcmFtZUJvcmRlcnxoZWFkZXJzfGhlaWdodHxoaWRkZW58aGlnaHxocmVmfGhyZWZMYW5nfGh0bWxGb3J8aHR0cEVxdWl2fGlkfGlucHV0TW9kZXxpbnRlZ3JpdHl8aXN8a2V5UGFyYW1zfGtleVR5cGV8a2luZHxsYWJlbHxsYW5nfGxpc3R8bG9hZGluZ3xsb29wfGxvd3xtYXJnaW5IZWlnaHR8bWFyZ2luV2lkdGh8bWF4fG1heExlbmd0aHxtZWRpYXxtZWRpYUdyb3VwfG1ldGhvZHxtaW58bWluTGVuZ3RofG11bHRpcGxlfG11dGVkfG5hbWV8bm9uY2V8bm9WYWxpZGF0ZXxvcGVufG9wdGltdW18cGF0dGVybnxwbGFjZWhvbGRlcnxwbGF5c0lubGluZXxwb3N0ZXJ8cHJlbG9hZHxwcm9maWxlfHJhZGlvR3JvdXB8cmVhZE9ubHl8cmVmZXJyZXJQb2xpY3l8cmVsfHJlcXVpcmVkfHJldmVyc2VkfHJvbGV8cm93c3xyb3dTcGFufHNhbmRib3h8c2NvcGV8c2NvcGVkfHNjcm9sbGluZ3xzZWFtbGVzc3xzZWxlY3RlZHxzaGFwZXxzaXplfHNpemVzfHNsb3R8c3BhbnxzcGVsbENoZWNrfHNyY3xzcmNEb2N8c3JjTGFuZ3xzcmNTZXR8c3RhcnR8c3RlcHxzdHlsZXxzdW1tYXJ5fHRhYkluZGV4fHRhcmdldHx0aXRsZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGluZXJ0fGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxvbnxyZXN1bHRzfHNlY3VyaXR5fHVuc2VsZWN0YWJsZXxhY2NlbnRIZWlnaHR8YWNjdW11bGF0ZXxhZGRpdGl2ZXxhbGlnbm1lbnRCYXNlbGluZXxhbGxvd1Jlb3JkZXJ8YWxwaGFiZXRpY3xhbXBsaXR1ZGV8YXJhYmljRm9ybXxhc2NlbnR8YXR0cmlidXRlTmFtZXxhdHRyaWJ1dGVUeXBlfGF1dG9SZXZlcnNlfGF6aW11dGh8YmFzZUZyZXF1ZW5jeXxiYXNlbGluZVNoaWZ0fGJhc2VQcm9maWxlfGJib3h8YmVnaW58Ymlhc3xieXxjYWxjTW9kZXxjYXBIZWlnaHR8Y2xpcHxjbGlwUGF0aFVuaXRzfGNsaXBQYXRofGNsaXBSdWxlfGNvbG9ySW50ZXJwb2xhdGlvbnxjb2xvckludGVycG9sYXRpb25GaWx0ZXJzfGNvbG9yUHJvZmlsZXxjb2xvclJlbmRlcmluZ3xjb250ZW50U2NyaXB0VHlwZXxjb250ZW50U3R5bGVUeXBlfGN1cnNvcnxjeHxjeXxkfGRlY2VsZXJhdGV8ZGVzY2VudHxkaWZmdXNlQ29uc3RhbnR8ZGlyZWN0aW9ufGRpc3BsYXl8ZGl2aXNvcnxkb21pbmFudEJhc2VsaW5lfGR1cnxkeHxkeXxlZGdlTW9kZXxlbGV2YXRpb258ZW5hYmxlQmFja2dyb3VuZHxlbmR8ZXhwb25lbnR8ZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZHxmaWxsfGZpbGxPcGFjaXR5fGZpbGxSdWxlfGZpbHRlcnxmaWx0ZXJSZXN8ZmlsdGVyVW5pdHN8Zmxvb2RDb2xvcnxmbG9vZE9wYWNpdHl8Zm9jdXNhYmxlfGZvbnRGYW1pbHl8Zm9udFNpemV8Zm9udFNpemVBZGp1c3R8Zm9udFN0cmV0Y2h8Zm9udFN0eWxlfGZvbnRWYXJpYW50fGZvbnRXZWlnaHR8Zm9ybWF0fGZyb218ZnJ8Znh8Znl8ZzF8ZzJ8Z2x5cGhOYW1lfGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsfGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbHxnbHlwaFJlZnxncmFkaWVudFRyYW5zZm9ybXxncmFkaWVudFVuaXRzfGhhbmdpbmd8aG9yaXpBZHZYfGhvcml6T3JpZ2luWHxpZGVvZ3JhcGhpY3xpbWFnZVJlbmRlcmluZ3xpbnxpbjJ8aW50ZXJjZXB0fGt8azF8azJ8azN8azR8a2VybmVsTWF0cml4fGtlcm5lbFVuaXRMZW5ndGh8a2VybmluZ3xrZXlQb2ludHN8a2V5U3BsaW5lc3xrZXlUaW1lc3xsZW5ndGhBZGp1c3R8bGV0dGVyU3BhY2luZ3xsaWdodGluZ0NvbG9yfGxpbWl0aW5nQ29uZUFuZ2xlfGxvY2FsfG1hcmtlckVuZHxtYXJrZXJNaWR8bWFya2VyU3RhcnR8bWFya2VySGVpZ2h0fG1hcmtlclVuaXRzfG1hcmtlcldpZHRofG1hc2t8bWFza0NvbnRlbnRVbml0c3xtYXNrVW5pdHN8bWF0aGVtYXRpY2FsfG1vZGV8bnVtT2N0YXZlc3xvZmZzZXR8b3BhY2l0eXxvcGVyYXRvcnxvcmRlcnxvcmllbnR8b3JpZW50YXRpb258b3JpZ2lufG92ZXJmbG93fG92ZXJsaW5lUG9zaXRpb258b3ZlcmxpbmVUaGlja25lc3N8cGFub3NlMXxwYWludE9yZGVyfHBhdGhMZW5ndGh8cGF0dGVybkNvbnRlbnRVbml0c3xwYXR0ZXJuVHJhbnNmb3JtfHBhdHRlcm5Vbml0c3xwb2ludGVyRXZlbnRzfHBvaW50c3xwb2ludHNBdFh8cG9pbnRzQXRZfHBvaW50c0F0WnxwcmVzZXJ2ZUFscGhhfHByZXNlcnZlQXNwZWN0UmF0aW98cHJpbWl0aXZlVW5pdHN8cnxyYWRpdXN8cmVmWHxyZWZZfHJlbmRlcmluZ0ludGVudHxyZXBlYXRDb3VudHxyZXBlYXREdXJ8cmVxdWlyZWRFeHRlbnNpb25zfHJlcXVpcmVkRmVhdHVyZXN8cmVzdGFydHxyZXN1bHR8cm90YXRlfHJ4fHJ5fHNjYWxlfHNlZWR8c2hhcGVSZW5kZXJpbmd8c2xvcGV8c3BhY2luZ3xzcGVjdWxhckNvbnN0YW50fHNwZWN1bGFyRXhwb25lbnR8c3BlZWR8c3ByZWFkTWV0aG9kfHN0YXJ0T2Zmc2V0fHN0ZERldmlhdGlvbnxzdGVtaHxzdGVtdnxzdGl0Y2hUaWxlc3xzdG9wQ29sb3J8c3RvcE9wYWNpdHl8c3RyaWtldGhyb3VnaFBvc2l0aW9ufHN0cmlrZXRocm91Z2hUaGlja25lc3N8c3RyaW5nfHN0cm9rZXxzdHJva2VEYXNoYXJyYXl8c3Ryb2tlRGFzaG9mZnNldHxzdHJva2VMaW5lY2FwfHN0cm9rZUxpbmVqb2lufHN0cm9rZU1pdGVybGltaXR8c3Ryb2tlT3BhY2l0eXxzdHJva2VXaWR0aHxzdXJmYWNlU2NhbGV8c3lzdGVtTGFuZ3VhZ2V8dGFibGVWYWx1ZXN8dGFyZ2V0WHx0YXJnZXRZfHRleHRBbmNob3J8dGV4dERlY29yYXRpb258dGV4dFJlbmRlcmluZ3x0ZXh0TGVuZ3RofHRvfHRyYW5zZm9ybXx1MXx1Mnx1bmRlcmxpbmVQb3NpdGlvbnx1bmRlcmxpbmVUaGlja25lc3N8dW5pY29kZXx1bmljb2RlQmlkaXx1bmljb2RlUmFuZ2V8dW5pdHNQZXJFbXx2QWxwaGFiZXRpY3x2SGFuZ2luZ3x2SWRlb2dyYXBoaWN8dk1hdGhlbWF0aWNhbHx2YWx1ZXN8dmVjdG9yRWZmZWN0fHZlcnNpb258dmVydEFkdll8dmVydE9yaWdpblh8dmVydE9yaWdpbll8dmlld0JveHx2aWV3VGFyZ2V0fHZpc2liaWxpdHl8d2lkdGhzfHdvcmRTcGFjaW5nfHdyaXRpbmdNb2RlfHh8eEhlaWdodHx4MXx4Mnx4Q2hhbm5lbFNlbGVjdG9yfHhsaW5rQWN0dWF0ZXx4bGlua0FyY3JvbGV8eGxpbmtIcmVmfHhsaW5rUm9sZXx4bGlua1Nob3d8eGxpbmtUaXRsZXx4bGlua1R5cGV8eG1sQmFzZXx4bWxuc3x4bWxuc1hsaW5rfHhtbExhbmd8eG1sU3BhY2V8eXx5MXx5Mnx5Q2hhbm5lbFNlbGVjdG9yfHp8em9vbUFuZFBhbnxmb3J8Y2xhc3N8YXV0b2ZvY3VzKXwoKFtEZF1bQWFdW1R0XVtBYV18W0FhXVtScl1bSWldW0FhXXx4KS0uKikpJC87IC8vIGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNWJmZWU2OGE0Y2Q3ZTYwMDllZjYxZDIzXG5cbnZhciBpbmRleCA9IG1lbW9pemUoZnVuY3Rpb24gKHByb3ApIHtcbiAgcmV0dXJuIHJlYWN0UHJvcHNSZWdleC50ZXN0KHByb3ApIHx8IHByb3AuY2hhckNvZGVBdCgwKSA9PT0gMTExXG4gIC8qIG8gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDEpID09PSAxMTBcbiAgLyogbiAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMikgPCA5MTtcbn1cbi8qIForMSAqL1xuKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChjYWNoZVthcmddID09PSB1bmRlZmluZWQpIGNhY2hlW2FyZ10gPSBmbihhcmcpO1xuICAgIHJldHVybiBjYWNoZVthcmddO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplO1xuIiwiZnVuY3Rpb24gc3R5bGlzX21pbiAoVykge1xuICBmdW5jdGlvbiBNKGQsIGMsIGUsIGgsIGEpIHtcbiAgICBmb3IgKHZhciBtID0gMCwgYiA9IDAsIHYgPSAwLCBuID0gMCwgcSwgZywgeCA9IDAsIEsgPSAwLCBrLCB1ID0gayA9IHEgPSAwLCBsID0gMCwgciA9IDAsIEkgPSAwLCB0ID0gMCwgQiA9IGUubGVuZ3RoLCBKID0gQiAtIDEsIHksIGYgPSAnJywgcCA9ICcnLCBGID0gJycsIEcgPSAnJywgQzsgbCA8IEI7KSB7XG4gICAgICBnID0gZS5jaGFyQ29kZUF0KGwpO1xuICAgICAgbCA9PT0gSiAmJiAwICE9PSBiICsgbiArIHYgKyBtICYmICgwICE9PSBiICYmIChnID0gNDcgPT09IGIgPyAxMCA6IDQ3KSwgbiA9IHYgPSBtID0gMCwgQisrLCBKKyspO1xuXG4gICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICBpZiAobCA9PT0gSiAmJiAoMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKSwgMCA8IGYudHJpbSgpLmxlbmd0aCkpIHtcbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICBmICs9IGUuY2hhckF0KGwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGcgPSA1OTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgZiA9IGYudHJpbSgpO1xuICAgICAgICAgICAgcSA9IGYuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGsgPSAxO1xuXG4gICAgICAgICAgICBmb3IgKHQgPSArK2w7IGwgPCBCOykge1xuICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgICAgICAgICBrLS07XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKGcgPSBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh1ID0gbCArIDE7IHUgPCBKOyArK3UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLmNoYXJDb2RlQXQodSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQyID09PSBnICYmIDQyID09PSBlLmNoYXJDb2RlQXQodSAtIDEpICYmIGwgKyAyICE9PSB1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKDQ3ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSB1O1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgZm9yICg7IGwrKyA8IEogJiYgZS5jaGFyQ29kZUF0KGwpICE9PSBnOykge1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoMCA9PT0gaykgYnJlYWs7XG4gICAgICAgICAgICAgIGwrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgayA9IGUuc3Vic3RyaW5nKHQsIGwpO1xuICAgICAgICAgICAgMCA9PT0gcSAmJiAocSA9IChmID0gZi5yZXBsYWNlKGNhLCAnJykudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgICAgICAgICAgc3dpdGNoIChxKSB7XG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgMCA8IHIgJiYgKGYgPSBmLnJlcGxhY2UoTiwgJycpKTtcbiAgICAgICAgICAgICAgICBnID0gZi5jaGFyQ29kZUF0KDEpO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICByID0gYztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBPO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIHIsIGssIGcsIGEgKyAxKTtcbiAgICAgICAgICAgICAgICB0ID0gay5sZW5ndGg7XG4gICAgICAgICAgICAgICAgMCA8IEEgJiYgKHIgPSBYKE8sIGYsIEkpLCBDID0gSCgzLCBrLCByLCBjLCBELCB6LCB0LCBnLCBhLCBoKSwgZiA9IHIuam9pbignJyksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAodCA9IChrID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGcgPSAwLCBrID0gJycpKTtcbiAgICAgICAgICAgICAgICBpZiAoMCA8IHQpIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZGEsIGVhKTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA3OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGZhLCAnJDEgJDInKTtcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBrID0gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoJ0AnICsgaywgMykgPyAnQC13ZWJraXQtJyArIGsgKyAnQCcgKyBrIDogJ0AnICsgaztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgaywgMTEyID09PSBoICYmIChrID0gKHAgKz0gaywgJycpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgayA9ICcnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgayA9IE0oYywgWChjLCBmLCBJKSwgaywgaCwgYSArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBGICs9IGs7XG4gICAgICAgICAgICBrID0gSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBmID0gKDAgPCByID8gZi5yZXBsYWNlKE4sICcnKSA6IGYpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICgxIDwgKHQgPSBmLmxlbmd0aCkpIHN3aXRjaCAoMCA9PT0gdSAmJiAocSA9IGYuY2hhckNvZGVBdCgwKSwgNDUgPT09IHEgfHwgOTYgPCBxICYmIDEyMyA+IHEpICYmICh0ID0gKGYgPSBmLnJlcGxhY2UoJyAnLCAnOicpKS5sZW5ndGgpLCAwIDwgQSAmJiB2b2lkIDAgIT09IChDID0gSCgxLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCkpICYmIDAgPT09ICh0ID0gKGYgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZiA9ICdcXHgwMFxceDAwJyksIHEgPSBmLmNoYXJDb2RlQXQoMCksIGcgPSBmLmNoYXJDb2RlQXQoMSksIHEpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgICAgaWYgKDEwNSA9PT0gZyB8fCA5OSA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgRyArPSBmICsgZS5jaGFyQXQobCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICA1OCAhPT0gZi5jaGFyQ29kZUF0KHQgLSAxKSAmJiAocCArPSBQKGYsIHEsIGcsIGYuY2hhckNvZGVBdCgyKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSSA9IHIgPSB1ID0gcSA9IDA7XG4gICAgICAgICAgICBmID0gJyc7XG4gICAgICAgICAgICBnID0gZS5jaGFyQ29kZUF0KCsrbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgNDcgPT09IGIgPyBiID0gMCA6IDAgPT09IDEgKyBxICYmIDEwNyAhPT0gaCAmJiAwIDwgZi5sZW5ndGggJiYgKHIgPSAxLCBmICs9ICdcXHgwMCcpO1xuICAgICAgICAgIDAgPCBBICogWSAmJiBIKDAsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKTtcbiAgICAgICAgICB6ID0gMTtcbiAgICAgICAgICBEKys7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgICAgIHorKztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHorKztcbiAgICAgICAgICB5ID0gZS5jaGFyQXQobCk7XG5cbiAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgbSArIGIpIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgIHkgPSAnJztcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIDMyICE9PSBnICYmICh5ID0gJyAnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFwwJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXGYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcdic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHIgPSBJID0gMSwgeSA9ICdcXGYnICsgeSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSArIEUgJiYgMCA8IHUpIHN3aXRjaCAobCAtIHUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAxMTIgPT09IHggJiYgNTggPT09IGUuY2hhckNvZGVBdChsIC0gMykgJiYgKEUgPSB4KTtcblxuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgIDExMSA9PT0gSyAmJiAoRSA9IEspO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgKHUgPSBsKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gJiYgKHIgPSAxLCB5ICs9ICdcXHInKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAwID09PSBiICYmIChuID0gbiA9PT0gZyA/IDAgOiAwID09PSBuID8gZyA6IG4pO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0rKztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTM6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtLS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIG0gJiYgdi0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBiICsgbSkge1xuICAgICAgICAgICAgICAgIGlmICgwID09PSBxKSBzd2l0Y2ggKDIgKiB4ICsgMyAqIEspIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgNTMzOlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHYrKztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICsgdSArIGsgJiYgKGsgPSAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICBpZiAoISgwIDwgbiArIG0gKyB2KSkgc3dpdGNoIChiKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgc3dpdGNoICgyICogZyArIDMgKiBlLmNoYXJDb2RlQXQobCArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjM1OlxuICAgICAgICAgICAgICAgICAgICAgIGIgPSA0NztcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgICAgICAgICAgICB0ID0gbCwgYiA9IDQyO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDI6XG4gICAgICAgICAgICAgICAgICA0NyA9PT0gZyAmJiA0MiA9PT0geCAmJiB0ICsgMiAhPT0gbCAmJiAoMzMgPT09IGUuY2hhckNvZGVBdCh0ICsgMikgJiYgKHAgKz0gZS5zdWJzdHJpbmcodCwgbCArIDEpKSwgeSA9ICcnLCBiID0gMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAwID09PSBiICYmIChmICs9IHkpO1xuICAgICAgfVxuXG4gICAgICBLID0geDtcbiAgICAgIHggPSBnO1xuICAgICAgbCsrO1xuICAgIH1cblxuICAgIHQgPSBwLmxlbmd0aDtcblxuICAgIGlmICgwIDwgdCkge1xuICAgICAgciA9IGM7XG4gICAgICBpZiAoMCA8IEEgJiYgKEMgPSBIKDIsIHAsIHIsIGQsIEQsIHosIHQsIGgsIGEsIGgpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHAgPSBDKS5sZW5ndGgpKSByZXR1cm4gRyArIHAgKyBGO1xuICAgICAgcCA9IHIuam9pbignLCcpICsgJ3snICsgcCArICd9JztcblxuICAgICAgaWYgKDAgIT09IHcgKiBFKSB7XG4gICAgICAgIDIgIT09IHcgfHwgTChwLCAyKSB8fCAoRSA9IDApO1xuXG4gICAgICAgIHN3aXRjaCAoRSkge1xuICAgICAgICAgIGNhc2UgMTExOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShoYSwgJzotbW96LSQxJykgKyBwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExMjpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoUSwgJzo6LXdlYmtpdC1pbnB1dC0kMScpICsgcC5yZXBsYWNlKFEsICc6Oi1tb3otJDEnKSArIHAucmVwbGFjZShRLCAnOi1tcy1pbnB1dC0kMScpICsgcDtcbiAgICAgICAgfVxuXG4gICAgICAgIEUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBHICsgcCArIEY7XG4gIH1cblxuICBmdW5jdGlvbiBYKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMudHJpbSgpLnNwbGl0KGlhKTtcbiAgICBjID0gaDtcbiAgICB2YXIgYSA9IGgubGVuZ3RoLFxuICAgICAgICBtID0gZC5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdmFyIGIgPSAwO1xuXG4gICAgICAgIGZvciAoZCA9IDAgPT09IG0gPyAnJyA6IGRbMF0gKyAnICc7IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBjW2JdID0gWihkLCBjW2JdLCBlKS50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdmFyIHYgPSBiID0gMDtcblxuICAgICAgICBmb3IgKGMgPSBbXTsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgbTsgKytuKSB7XG4gICAgICAgICAgICBjW3YrK10gPSBaKGRbbl0gKyAnICcsIGhbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBjO1xuICB9XG5cbiAgZnVuY3Rpb24gWihkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgMzMgPiBoICYmIChoID0gKGMgPSBjLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICBzd2l0Y2ggKGgpIHtcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIHJldHVybiBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgY2FzZSA1ODpcbiAgICAgICAgcmV0dXJuIGQudHJpbSgpICsgYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgwIDwgMSAqIGUgJiYgMCA8IGMuaW5kZXhPZignXFxmJykpIHJldHVybiBjLnJlcGxhY2UoRiwgKDU4ID09PSBkLmNoYXJDb2RlQXQoMCkgPyAnJyA6ICckMScpICsgZC50cmltKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBkICsgYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFAoZCwgYywgZSwgaCkge1xuICAgIHZhciBhID0gZCArICc7JyxcbiAgICAgICAgbSA9IDIgKiBjICsgMyAqIGUgKyA0ICogaDtcblxuICAgIGlmICg5NDQgPT09IG0pIHtcbiAgICAgIGQgPSBhLmluZGV4T2YoJzonLCA5KSArIDE7XG4gICAgICB2YXIgYiA9IGEuc3Vic3RyaW5nKGQsIGEubGVuZ3RoIC0gMSkudHJpbSgpO1xuICAgICAgYiA9IGEuc3Vic3RyaW5nKDAsIGQpLnRyaW0oKSArIGIgKyAnOyc7XG4gICAgICByZXR1cm4gMSA9PT0gdyB8fCAyID09PSB3ICYmIEwoYiwgMSkgPyAnLXdlYmtpdC0nICsgYiArIGIgOiBiO1xuICAgIH1cblxuICAgIGlmICgwID09PSB3IHx8IDIgPT09IHcgJiYgIUwoYSwgMSkpIHJldHVybiBhO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDEwMTU6XG4gICAgICAgIHJldHVybiA5NyA9PT0gYS5jaGFyQ29kZUF0KDEwKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTUxOlxuICAgICAgICByZXR1cm4gMTE2ID09PSBhLmNoYXJDb2RlQXQoMykgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk2MzpcbiAgICAgICAgcmV0dXJuIDExMCA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSAxMDA5OlxuICAgICAgICBpZiAoMTAwICE9PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2OTpcbiAgICAgIGNhc2UgOTQyOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk3ODpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMTk6XG4gICAgICBjYXNlIDk4MzpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tb3otJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA4ODM6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDgpKSByZXR1cm4gJy13ZWJraXQtJyArIGEgKyBhO1xuICAgICAgICBpZiAoMCA8IGEuaW5kZXhPZignaW1hZ2Utc2V0KCcsIDExKSkgcmV0dXJuIGEucmVwbGFjZShqYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMyOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg0KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNSkpIHtcbiAgICAgICAgICBjYXNlIDEwMzpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtJyArIGEucmVwbGFjZSgnLWdyb3cnLCAnJykgKyAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnZ3JvdycsICdwb3NpdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdzaHJpbmsnLCAnbmVnYXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDk4OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdiYXNpcycsICdwcmVmZXJyZWQtc2l6ZScpICsgYTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5NjQ6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAyMzpcbiAgICAgICAgaWYgKDk5ICE9PSBhLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuICAgICAgICBiID0gYS5zdWJzdHJpbmcoYS5pbmRleE9mKCc6JywgMTUpKS5yZXBsYWNlKCdmbGV4LScsICcnKS5yZXBsYWNlKCdzcGFjZS1iZXR3ZWVuJywgJ2p1c3RpZnknKTtcbiAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC1wYWNrJyArIGIgKyAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1wYWNrJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMDU6XG4gICAgICAgIHJldHVybiBrYS50ZXN0KGEpID8gYS5yZXBsYWNlKGFhLCAnOi13ZWJraXQtJykgKyBhLnJlcGxhY2UoYWEsICc6LW1vei0nKSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDFlMzpcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKDEzKS50cmltKCk7XG4gICAgICAgIGMgPSBiLmluZGV4T2YoJy0nKSArIDE7XG5cbiAgICAgICAgc3dpdGNoIChiLmNoYXJDb2RlQXQoMCkgKyBiLmNoYXJDb2RlQXQoYykpIHtcbiAgICAgICAgICBjYXNlIDIyNjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjMyOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGItcmwnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICdscicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDE3OlxuICAgICAgICBpZiAoLTEgPT09IGEuaW5kZXhPZignc3RpY2t5JywgOSkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3NTpcbiAgICAgICAgYyA9IChhID0gZCkubGVuZ3RoIC0gMTA7XG4gICAgICAgIGIgPSAoMzMgPT09IGEuY2hhckNvZGVBdChjKSA/IGEuc3Vic3RyaW5nKDAsIGMpIDogYSkuc3Vic3RyaW5nKGQuaW5kZXhPZignOicsIDcpICsgMSkudHJpbSgpO1xuXG4gICAgICAgIHN3aXRjaCAobSA9IGIuY2hhckNvZGVBdCgwKSArIChiLmNoYXJDb2RlQXQoNykgfCAwKSkge1xuICAgICAgICAgIGNhc2UgMjAzOlxuICAgICAgICAgICAgaWYgKDExMSA+IGIuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMDc6XG4gICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyAoMTAyIDwgbSA/ICdpbmxpbmUtJyA6ICcnKSArICdib3gnKSArICc7JyArIGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy1tcy0nICsgYiArICdib3gnKSArICc7JyArIGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYSArICc7JztcblxuICAgICAgY2FzZSA5Mzg6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDUpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg2KSkge1xuICAgICAgICAgIGNhc2UgMTA1OlxuICAgICAgICAgICAgcmV0dXJuIGIgPSBhLnJlcGxhY2UoJy1pdGVtcycsICcnKSwgJy13ZWJraXQtJyArIGEgKyAnLXdlYmtpdC1ib3gtJyArIGIgKyAnLW1zLWZsZXgtJyArIGIgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtaXRlbS0nICsgYS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1saW5lLXBhY2snICsgYS5yZXBsYWNlKCdhbGlnbi1jb250ZW50JywgJycpLnJlcGxhY2UoYmEsICcnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTczOlxuICAgICAgY2FzZSA5ODk6XG4gICAgICAgIGlmICg0NSAhPT0gYS5jaGFyQ29kZUF0KDMpIHx8IDEyMiA9PT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5MzE6XG4gICAgICBjYXNlIDk1MzpcbiAgICAgICAgaWYgKCEwID09PSBsYS50ZXN0KGQpKSByZXR1cm4gMTE1ID09PSAoYiA9IGQuc3Vic3RyaW5nKGQuaW5kZXhPZignOicpICsgMSkpLmNoYXJDb2RlQXQoMCkgPyBQKGQucmVwbGFjZSgnc3RyZXRjaCcsICdmaWxsLWF2YWlsYWJsZScpLCBjLCBlLCBoKS5yZXBsYWNlKCc6ZmlsbC1hdmFpbGFibGUnLCAnOnN0cmV0Y2gnKSA6IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyBhLnJlcGxhY2UoYiwgJy1tb3otJyArIGIucmVwbGFjZSgnZmlsbC0nLCAnJykpICsgYTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTYyOlxuICAgICAgICBpZiAoYSA9ICctd2Via2l0LScgKyBhICsgKDEwMiA9PT0gYS5jaGFyQ29kZUF0KDUpID8gJy1tcy0nICsgYSA6ICcnKSArIGEsIDIxMSA9PT0gZSArIGggJiYgMTA1ID09PSBhLmNoYXJDb2RlQXQoMTMpICYmIDAgPCBhLmluZGV4T2YoJ3RyYW5zZm9ybScsIDEwKSkgcmV0dXJuIGEuc3Vic3RyaW5nKDAsIGEuaW5kZXhPZignOycsIDI3KSArIDEpLnJlcGxhY2UobWEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICBmdW5jdGlvbiBMKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQuaW5kZXhPZigxID09PSBjID8gJzonIDogJ3snKSxcbiAgICAgICAgaCA9IGQuc3Vic3RyaW5nKDAsIDMgIT09IGMgPyBlIDogMTApO1xuICAgIGUgPSBkLnN1YnN0cmluZyhlICsgMSwgZC5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gUigyICE9PSBjID8gaCA6IGgucmVwbGFjZShuYSwgJyQxJyksIGUsIGMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWEoZCwgYykge1xuICAgIHZhciBlID0gUChjLCBjLmNoYXJDb2RlQXQoMCksIGMuY2hhckNvZGVBdCgxKSwgYy5jaGFyQ29kZUF0KDIpKTtcbiAgICByZXR1cm4gZSAhPT0gYyArICc7JyA/IGUucmVwbGFjZShvYSwgJyBvciAoJDEpJykuc3Vic3RyaW5nKDQpIDogJygnICsgYyArICcpJztcbiAgfVxuXG4gIGZ1bmN0aW9uIEgoZCwgYywgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkge1xuICAgIGZvciAodmFyIGcgPSAwLCB4ID0gYywgdzsgZyA8IEE7ICsrZykge1xuICAgICAgc3dpdGNoICh3ID0gU1tnXS5jYWxsKEIsIGQsIHgsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpKSB7XG4gICAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgICBjYXNlICExOlxuICAgICAgICBjYXNlICEwOlxuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB4ID0gdztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoeCAhPT0gYykgcmV0dXJuIHg7XG4gIH1cblxuICBmdW5jdGlvbiBUKGQpIHtcbiAgICBzd2l0Y2ggKGQpIHtcbiAgICAgIGNhc2Ugdm9pZCAwOlxuICAgICAgY2FzZSBudWxsOlxuICAgICAgICBBID0gUy5sZW5ndGggPSAwO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkKSBTW0ErK10gPSBkO2Vsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgZCkgZm9yICh2YXIgYyA9IDAsIGUgPSBkLmxlbmd0aDsgYyA8IGU7ICsrYykge1xuICAgICAgICAgIFQoZFtjXSk7XG4gICAgICAgIH0gZWxzZSBZID0gISFkIHwgMDtcbiAgICB9XG5cbiAgICByZXR1cm4gVDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFUoZCkge1xuICAgIGQgPSBkLnByZWZpeDtcbiAgICB2b2lkIDAgIT09IGQgJiYgKFIgPSBudWxsLCBkID8gJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGQgPyB3ID0gMSA6ICh3ID0gMiwgUiA9IGQpIDogdyA9IDApO1xuICAgIHJldHVybiBVO1xuICB9XG5cbiAgZnVuY3Rpb24gQihkLCBjKSB7XG4gICAgdmFyIGUgPSBkO1xuICAgIDMzID4gZS5jaGFyQ29kZUF0KDApICYmIChlID0gZS50cmltKCkpO1xuICAgIFYgPSBlO1xuICAgIGUgPSBbVl07XG5cbiAgICBpZiAoMCA8IEEpIHtcbiAgICAgIHZhciBoID0gSCgtMSwgYywgZSwgZSwgRCwgeiwgMCwgMCwgMCwgMCk7XG4gICAgICB2b2lkIDAgIT09IGggJiYgJ3N0cmluZycgPT09IHR5cGVvZiBoICYmIChjID0gaCk7XG4gICAgfVxuXG4gICAgdmFyIGEgPSBNKE8sIGUsIGMsIDAsIDApO1xuICAgIDAgPCBBICYmIChoID0gSCgtMiwgYSwgZSwgZSwgRCwgeiwgYS5sZW5ndGgsIDAsIDAsIDApLCB2b2lkIDAgIT09IGggJiYgKGEgPSBoKSk7XG4gICAgViA9ICcnO1xuICAgIEUgPSAwO1xuICAgIHogPSBEID0gMTtcbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIHZhciBjYSA9IC9eXFwwKy9nLFxuICAgICAgTiA9IC9bXFwwXFxyXFxmXS9nLFxuICAgICAgYWEgPSAvOiAqL2csXG4gICAgICBrYSA9IC96b298Z3JhLyxcbiAgICAgIG1hID0gLyhbLDogXSkodHJhbnNmb3JtKS9nLFxuICAgICAgaWEgPSAvLFxccis/L2csXG4gICAgICBGID0gLyhbXFx0XFxyXFxuIF0pKlxcZj8mL2csXG4gICAgICBmYSA9IC9AKGtcXHcrKVxccyooXFxTKilcXHMqLyxcbiAgICAgIFEgPSAvOjoocGxhY2UpL2csXG4gICAgICBoYSA9IC86KHJlYWQtb25seSkvZyxcbiAgICAgIEcgPSAvW3N2aF1cXHcrLVt0YmxyXXsyfS8sXG4gICAgICBkYSA9IC9cXChcXHMqKC4qKVxccypcXCkvZyxcbiAgICAgIG9hID0gLyhbXFxzXFxTXSo/KTsvZyxcbiAgICAgIGJhID0gLy1zZWxmfGZsZXgtL2csXG4gICAgICBuYSA9IC9bXl0qPyg6W3JwXVtlbF1hW1xcdy1dKylbXl0qLyxcbiAgICAgIGxhID0gL3N0cmV0Y2h8OlxccypcXHcrXFwtKD86Y29udGV8YXZhaWwpLyxcbiAgICAgIGphID0gLyhbXi1dKShpbWFnZS1zZXRcXCgpLyxcbiAgICAgIHogPSAxLFxuICAgICAgRCA9IDEsXG4gICAgICBFID0gMCxcbiAgICAgIHcgPSAxLFxuICAgICAgTyA9IFtdLFxuICAgICAgUyA9IFtdLFxuICAgICAgQSA9IDAsXG4gICAgICBSID0gbnVsbCxcbiAgICAgIFkgPSAwLFxuICAgICAgViA9ICcnO1xuICBCLnVzZSA9IFQ7XG4gIEIuc2V0ID0gVTtcbiAgdm9pZCAwICE9PSBXICYmIFUoVyk7XG4gIHJldHVybiBCO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXNfbWluO1xuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBCb29sZWFuIGlucHV0XG4gKi9cbnZhciBCb29sZWFuID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCb29sZWFuLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJvb2xlYW4ocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQm9vbGVhbjtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Cb29sZWFuLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG52YXIgQnV0dG9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCdXR0b24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm9wcyksIHsgbm9sYWJlbDogKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5ub2xhYmVsKSAhPT0gdW5kZWZpbmVkID8gcHJvcHMubm9sYWJlbCA6IHRydWUgfSkpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUeXBlIChwcmltYXJ5IG9yIGRlZmF1bHQpXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fdHlwZSA9IFwiZGVmYXVsdFwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogQnV0dG9uIGNhcHRpb25cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9jYXB0aW9uID0gXCJcIjtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2NhcHRpb24gPSBwcm9wcy5zdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLnByb3RvdHlwZSwgXCJ0eXBlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcImNhcHRpb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYXB0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY2FwdGlvbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEJ1dHRvbjtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJ1dHRvbi5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIE9uZS1saW5lIGlucHV0IHdpdGggYSBsZW5ndGggbGltaXQuXG4gKi9cbnZhciBDaGFyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDaGFyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoYXIocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBwbGFjZSBob2xkZXJcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9wbGFjZWhvbGRlciA9IFwiXCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBzaXplXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fc2l6ZSA9IDE1MDtcbiAgICAgICAgX3RoaXMuX2lzUGFzc3dvcmQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zaXplID0gcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5wYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmlzUGFzc3dvcmQgPSBwcm9wcy5wYXNzd29yZCA9PT0gXCJUcnVlXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2hhci5wcm90b3R5cGUsIFwicGxhY2Vob2xkZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2hhci5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2hhci5wcm90b3R5cGUsIFwiaXNQYXNzd29yZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzUGFzc3dvcmQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pc1Bhc3N3b3JkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQ2hhcjtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IENoYXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DaGFyLmpzLm1hcCIsImltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuaW1wb3J0IE5ld0xpbmUgZnJvbSBcIi4vTmV3TGluZVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG52YXIgQ29udGFpbmVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbnRhaW5lcihjb2x1bW5zLCBjb2xzcGFuKSB7XG4gICAgICAgIGlmIChjb2x1bW5zID09PSB2b2lkIDApIHsgY29sdW1ucyA9IDQ7IH1cbiAgICAgICAgaWYgKGNvbHNwYW4gPT09IHZvaWQgMCkgeyBjb2xzcGFuID0gNjsgfVxuICAgICAgICB0aGlzLl9jb2x1bW5zID0gY29sdW1ucztcbiAgICAgICAgdGhpcy5fY29sc3BhbiA9IGNvbHNwYW47XG4gICAgICAgIHRoaXMuX3Jvd3MgPSBbW11dO1xuICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXIucHJvdG90eXBlLCBcImNvbHVtbnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY29sdW1ucyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lci5wcm90b3R5cGUsIFwiY29sc3BhblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHNwYW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2xzcGFuID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyLnByb3RvdHlwZSwgXCJyb3dzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcm93cztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd3MgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXIucHJvdG90eXBlLCBcImluZGV4XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5kZXg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuZXh0IGZyZWUgcG9zaXRpb25cbiAgICAgKi9cbiAgICBDb250YWluZXIucHJvdG90eXBlLmZyZWVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNwYW4gPSB0aGlzLl9yb3dzW3RoaXMuX2luZGV4XS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiAhZWwuaW52aXNpYmxlOyB9KS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgY3VycmVudC5jb2xzcGFuO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnMgLSBzcGFuO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5hZGRXaWRnZXQgPSBmdW5jdGlvbiAod2lkZ2V0LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciB3aWRnZXRzVG9BZGQgPSBbXTtcbiAgICAgICAgdmFyIGFkZExhYmVsID0gb3B0aW9ucyA/IG9wdGlvbnMuYWRkTGFiZWwgOiB0cnVlO1xuICAgICAgICBpZiAod2lkZ2V0IGluc3RhbmNlb2YgTmV3TGluZSkge1xuICAgICAgICAgICAgdGhpcy5fcm93cy5wdXNoKFtdKTtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpZGdldC5jb2xzcGFuID4gdGhpcy5fY29sdW1ucykge1xuICAgICAgICAgICAgLy8gV2lkZ2V0IGNvbHNwYW4gaXMgZ3JlYXRlciB0aGFuIGNvbnRhaW5lciBjb2x1bW5zLCBzbyB3ZSBjaGFuZ2Ugd2lkZ2V0XG4gICAgICAgICAgICAvLyBjb2xzcGFuIHRvIGZpdCBjb250YWluZXIgY29sdW1ucy5cbiAgICAgICAgICAgIHdpZGdldC5jb2xzcGFuID0gdGhpcy5fY29sdW1ucztcbiAgICAgICAgfVxuICAgICAgICAvLyBGb3IgZmllbGRzIHdpdGhvdXQgbm9sYWJlbCB3ZSBhZGQgYSBwcmVjZWRpbmcgbGFiZWwgd2lkZ2V0XG4gICAgICAgIGlmIChhZGRMYWJlbCAmJiB3aWRnZXQgaW5zdGFuY2VvZiBGaWVsZCAmJiAhd2lkZ2V0Lm5vbGFiZWwpIHtcbiAgICAgICAgICAgIGlmICh3aWRnZXQuY29sc3BhbiA+IDEpIHtcbiAgICAgICAgICAgICAgICB3aWRnZXQuY29sc3BhbiAtPSAxOyAvLyBXZSBzdWJzdHJhY3Qgb25lIGNvbHNwYW4gZm9yIHRoZSBjb3JyZXNwb25kaW5nIGxhYmVsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSBuZXcgTGFiZWwoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHdpZGdldC5pZCArIFwiX2xhYmVsXCIsXG4gICAgICAgICAgICAgICAgc3RyaW5nOiB3aWRnZXQubGFiZWwsXG4gICAgICAgICAgICAgICAgaW52aXNpYmxlOiB3aWRnZXQuaW52aXNpYmxlLFxuICAgICAgICAgICAgICAgIGhlbHA6IHdpZGdldC50b29sdGlwLFxuICAgICAgICAgICAgICAgIGZpZWxkRm9yTGFiZWw6IHdpZGdldC5pZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2lkZ2V0c1RvQWRkLnB1c2gobGFiZWwpO1xuICAgICAgICAgICAgd2lkZ2V0c1RvQWRkLnB1c2god2lkZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdpZGdldHNUb0FkZC5wdXNoKHdpZGdldCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdpZGdldHNDb2xzcGFuID0gd2lkZ2V0c1RvQWRkLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGN1cnJlbnRXaWRnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvciArIGN1cnJlbnRXaWRnZXQuY29sc3BhbjtcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIGlmICh3aWRnZXRzQ29sc3BhbiA+IHRoaXMuZnJlZVBvc2l0aW9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd3MucHVzaChbXSk7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Jvd3NbdGhpcy5faW5kZXhdID0gdGhpcy5fcm93c1t0aGlzLl9pbmRleF0uY29uY2F0KHdpZGdldHNUb0FkZCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdG8gZmluZCBhIG1hdGNoaW5nIGNvbnRhaW5lciBvciB3aWRnZXQgd2l0aCB0aGUgZXhhY3Qgc2FtZSBpZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgKG5hbWUpIG9mIHRoZSBmaWVsZCBvciBjb250YWluZXIgdG8gZmluZFxuICAgICAqL1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuZmluZEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHIgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fcm93cyAmJiB0aGlzLl9yb3dzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICAvLyBJdGVtIGhhcyBiZWVuIGZvdW5kLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyb3cgJiYgcm93Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByb3cuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJdGVtIGhhcyBiZWVuIGZvdW5kLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgciA9IGl0ZW0uZmluZEJ5SWQoaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIHJldHVybiBDb250YWluZXI7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29udGFpbmVyLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuL1dpZGdldFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbnZhciBDb250YWluZXJXaWRnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnRhaW5lcldpZGdldCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb250YWluZXJXaWRnZXQocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBpZGVudGlmaWVyXG4gICAgICAgICAqXG4gICAgICAgICAqIENvcnJlc3BvbmRzIHRvIHRoZSBmaWVsZCdzIG5hbWUgYXR0cmlidXRlIGZyb20geG1sXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5faWQgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ29udGFpbmVyIGxhYmVsXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fbGFiZWwgPSBcIlwiO1xuICAgICAgICBfdGhpcy5fY29udGFpbmVyID0gbmV3IENvbnRhaW5lcihwcm9wcyAmJiBwcm9wcy5jb2wsIENvbnRhaW5lcldpZGdldC5fZGVmYXVsdENvbHNwYW4pO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2lkID0gcHJvcHMubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5jb2xzcGFuKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2NvbnRhaW5lci5jb2xzcGFuID0gK3Byb3BzLmNvbHNwYW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2xhYmVsID0gcHJvcHMuc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lcldpZGdldC5wcm90b3R5cGUsIFwiaWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyV2lkZ2V0LCBcImRlZmF1bHRDb2xzcGFuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29udGFpbmVyV2lkZ2V0Ll9kZWZhdWx0Q29sc3BhbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIENvbnRhaW5lcldpZGdldC5fZGVmYXVsdENvbHNwYW4gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXJXaWRnZXQucHJvdG90eXBlLCBcImNvbnRhaW5lclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lciA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lcldpZGdldC5wcm90b3R5cGUsIFwiY29sc3BhblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5jb2xzcGFuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyLmNvbHNwYW4gPSArdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyV2lkZ2V0LnByb3RvdHlwZSwgXCJsYWJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIENhbGxzIGNvbnRhaW5lcidzIGZpbmRCeUlkIG1ldGhvZCB0byBmaW5kIHRoZSB3aWRnZXRzIG1hdGNoaW5nIHdpdGggcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgdG8gZmluZFxuICAgICAqL1xuICAgIENvbnRhaW5lcldpZGdldC5wcm90b3R5cGUuZmluZEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB0aGlzLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXIuZmluZEJ5SWQoaWQpO1xuICAgIH07XG4gICAgQ29udGFpbmVyV2lkZ2V0Ll9kZWZhdWx0Q29sc3BhbiA9IDY7XG4gICAgcmV0dXJuIENvbnRhaW5lcldpZGdldDtcbn0oV2lkZ2V0KSk7XG5leHBvcnQgZGVmYXVsdCBDb250YWluZXJXaWRnZXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db250YWluZXJXaWRnZXQuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBEYXRlIGlucHV0XG4gKi9cbnZhciBEYXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEYXRlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERhdGUocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gRGF0ZTtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IERhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EYXRlLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogRGF0ZVRpbWUgaW5wdXRcbiAqL1xudmFyIERhdGVUaW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEYXRlVGltZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEYXRlVGltZShwcm9wcykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBEYXRlVGltZTtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IERhdGVUaW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGF0ZVRpbWUuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4vV2lkZ2V0XCI7XG5pbXBvcnQgeyBwYXJzZURvbWFpbiB9IGZyb20gXCIuL2hlbHBlcnMvZG9tYWluUGFyc2VyXCI7XG52YXIgRmllbGQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZpZWxkLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZpZWxkKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgaWRlbnRpZmllclxuICAgICAgICAgKlxuICAgICAgICAgKiBDb3JyZXNwb25kcyB0byB0aGUgZmllbGQncyBuYW1lIGF0dHJpYnV0ZSBmcm9tIHhtbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2lkID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExhYmVsXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fbGFiZWwgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogTm8gbGFiZWxcbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBmaWVsZCBoYXNuJ3QgZ290IHRvIHNob3cgdGhlIGxhYmVsXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fbm9sYWJlbCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogUmVxdWlyZWQgZmllbGRcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9yZXF1aXJlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQWN0aXZhdGVkIChkZWZhdWx0IGlzIHRydWUpXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gQWN0aXZhdGVkIGJ5IGRlZmF1bHRcbiAgICAgICAgX3RoaXMuX2FjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5faWQgPSBwcm9wcy5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLmFjdGl2YXRlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9hY3RpdmF0ZWQgPSBwcm9wcy5hY3RpdmF0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2xhYmVsID0gcHJvcHMuc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLmhlbHApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdG9vbHRpcCA9IHByb3BzLmhlbHA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2RvbWFpbiA9IHBhcnNlRG9tYWluKHByb3BzLmRvbWFpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMubm9sYWJlbCAmJlxuICAgICAgICAgICAgICAgIChwcm9wcy5ub2xhYmVsID09PSBcIjFcIiB8fFxuICAgICAgICAgICAgICAgICAgICAodHlwZW9mIHByb3BzLm5vbGFiZWwgPT09IFwiYm9vbGVhblwiICYmIHByb3BzLm5vbGFiZWwgPT09IHRydWUpKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9ub2xhYmVsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgICAgIChwcm9wcy5yZXF1aXJlZCA9PT0gXCIxXCIgfHwgcHJvcHMucmVxdWlyZWQgPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWVsZC5wcm90b3R5cGUsIFwiaWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmllbGQucHJvdG90eXBlLCBcImxhYmVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpZWxkLnByb3RvdHlwZSwgXCJub2xhYmVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbm9sYWJlbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX25vbGFiZWwgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWVsZC5wcm90b3R5cGUsIFwicmVxdWlyZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcXVpcmVkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmllbGQucHJvdG90eXBlLCBcInRvb2x0aXBcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90b29sdGlwO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdG9vbHRpcCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpZWxkLnByb3RvdHlwZSwgXCJkb21haW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kb21haW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kb21haW4gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWVsZC5wcm90b3R5cGUsIFwiYWN0aXZhdGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZhdGVkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZhdGVkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoaXMgaW5zdGFuY2UgaW4gY2FzZSB0aGlzIGlkIG1hdGNoZXMgcGFyYW0gaWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIChuYW1lKSB0byBmaW5kXG4gICAgICovXG4gICAgRmllbGQucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX2lkID09PSBpZCkge1xuICAgICAgICAgICAgciA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICByZXR1cm4gRmllbGQ7XG59KFdpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgRmllbGQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWVsZC5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIEZsb2F0IGlucHV0XG4gKi9cbnZhciBGbG9hdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXQocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlZ2VyIGRpZ2l0c1xuICAgICAgICAgKlxuICAgICAgICAgKiBOdW1iZXIgb2YgaW50ZWdlciBkaWdpdHMgdGhhdCB3aWxsIGJlIHBhcnQgb2YgdGhlIGZsb2F0XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5faW50ZWdlckRpZ2l0cyA9IDE2O1xuICAgICAgICAvKipcbiAgICAgICAgICogRGVjaW1hbCBkaWdpdHNcbiAgICAgICAgICpcbiAgICAgICAgICogTnVtYmVyIG9mIGRlY2ltYWwgZGlnaXRzIHRoYXQgd2lsbCBiZSBwYXJ0IG9mIHRoZSBmbG9hdFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2RlY2ltYWxEaWdpdHMgPSAyO1xuICAgICAgICBpZiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLmRpZ2l0cykge1xuICAgICAgICAgICAgdmFyIF9hID0gcHJvcHMuZGlnaXRzLCBpbnRlZ2VycyA9IF9hWzBdLCBkZWNpbWFscyA9IF9hWzFdO1xuICAgICAgICAgICAgX3RoaXMuX2ludGVnZXJEaWdpdHMgPSBpbnRlZ2VycztcbiAgICAgICAgICAgIF90aGlzLl9kZWNpbWFsRGlnaXRzID0gZGVjaW1hbHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmxvYXQucHJvdG90eXBlLCBcImludGVnZXJEaWdpdHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnRlZ2VyRGlnaXRzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faW50ZWdlckRpZ2l0cyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0LnByb3RvdHlwZSwgXCJkZWNpbWFsRGlnaXRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVjaW1hbERpZ2l0cztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlY2ltYWxEaWdpdHMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBGbG9hdDtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IEZsb2F0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmxvYXQuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGbG9hdCBmcm9tIFwiLi9GbG9hdFwiO1xuLyoqXG4gKiBGbG9hdFRpbWUgaW5wdXRcbiAqL1xudmFyIEZsb2F0VGltZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXRUaW1lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gRmxvYXRUaW1lO1xufShGbG9hdCkpO1xuZXhwb3J0IGRlZmF1bHQgRmxvYXRUaW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmxvYXRUaW1lLmpzLm1hcCIsImltcG9ydCBXaWRnZXRGYWN0b3J5IGZyb20gXCIuL1dpZGdldEZhY3RvcnlcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgQ29udGFpbmVyV2lkZ2V0IGZyb20gXCIuL0NvbnRhaW5lcldpZGdldFwiO1xuaW1wb3J0IHsgcGFyc2VOb2RlcyB9IGZyb20gXCIuL2hlbHBlcnMvbm9kZVBhcnNlclwiO1xudmFyIEZvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICBfd2lkZ2V0cyA9IHtcbiAgICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciAmJiB0aGlzLl9jb250YWluZXIubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fY29udGFpbmVyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8geWllbGQgaXRlbVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBnZXQgd2lkZ2V0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl93aWRnZXRzO1xuICAgIH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIEZvcm0oZmllbGRzLCBjb2x1bW5zKSB7XG4gICAgICAgIGlmIChjb2x1bW5zID09PSB2b2lkIDApIHsgY29sdW1ucyA9IDg7IH1cbiAgICAgICAgdGhpcy5fc3RyaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZmllbGRzID0gZmllbGRzO1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBuZXcgQ29udGFpbmVyKGNvbHVtbnMpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybS5wcm90b3R5cGUsIFwiZmllbGRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmllbGRzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm0ucHJvdG90eXBlLCBcImNvbnRhaW5lclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtLnByb3RvdHlwZSwgXCJzdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmc7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBGb3JtLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICh4bWwpIHtcbiAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgdmFyIHZpZXcgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbCwgXCJ0ZXh0L3htbFwiKTtcbiAgICAgICAgdGhpcy5wYXJzZU5vZGUodmlldy5kb2N1bWVudEVsZW1lbnQsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuX3N0cmluZyA9IHZpZXcuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcInN0cmluZ1wiKTtcbiAgICB9O1xuICAgIEZvcm0ucHJvdG90eXBlLnBhcnNlTm9kZSA9IGZ1bmN0aW9uIChub2RlLCBjb250YWluZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHdpZGdldEZhY3RvcnkgPSBuZXcgV2lkZ2V0RmFjdG9yeSgpO1xuICAgICAgICB2YXIgbm9kZXNQYXJzZWQgPSBwYXJzZU5vZGVzKG5vZGUuY2hpbGROb2RlcywgdGhpcy5fZmllbGRzKTtcbiAgICAgICAgbm9kZXNQYXJzZWQuZm9yRWFjaChmdW5jdGlvbiAobm9kZVBhcnNlZCkge1xuICAgICAgICAgICAgdmFyIHRhZyA9IG5vZGVQYXJzZWQudGFnLCB0YWdBdHRyaWJ1dGVzID0gbm9kZVBhcnNlZC50YWdBdHRyaWJ1dGVzLCBjaGlsZCA9IG5vZGVQYXJzZWQuY2hpbGQ7XG4gICAgICAgICAgICB2YXIgd2lkZ2V0ID0gd2lkZ2V0RmFjdG9yeS5jcmVhdGVXaWRnZXQodGFnLCB0YWdBdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIGlmICh3aWRnZXQgaW5zdGFuY2VvZiBDb250YWluZXJXaWRnZXQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wYXJzZU5vZGUoY2hpbGQsIHdpZGdldC5jb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLmFkZFdpZGdldCh3aWRnZXQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxzIGNvbnRhaW5lcidzIGZpbmRCeUlkIG1ldGhvZCB0byBmaW5kIHRoZSB3aWRnZXRzIG1hdGNoaW5nIHdpdGggcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgdG8gZmluZFxuICAgICAqL1xuICAgIEZvcm0ucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5maW5kQnlJZChpZCk7XG4gICAgfTtcbiAgICByZXR1cm4gRm9ybTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbnZhciBHcm91cCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoR3JvdXAsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR3JvdXAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gR3JvdXA7XG59KENvbnRhaW5lcldpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Hcm91cC5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIEludGVnZXIgaW5wdXRcbiAqL1xudmFyIEludGVnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEludGVnZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW50ZWdlcihwcm9wcykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBJbnRlZ2VyO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgSW50ZWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUludGVnZXIuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbnZhciBMYWJlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTGFiZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGFiZWwocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzKSwgeyBub2xhYmVsOiB0cnVlIH0pKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogTGFiZWwgdGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3RleHQgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogQWxpZ24gdGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2FsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZCBvZiB0aGUgZmllbGQgdGhhdCB0aGlzIGxhYmVsIGdvZXMgd2l0aC4gTnVsbCBpZiBpdCdzIGFuIGluZGVwZW5kZW50IGxhYmVsXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fZmllbGRGb3JMYWJlbCA9IG51bGw7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuZmllbGRGb3JMYWJlbCkge1xuICAgICAgICAgICAgX3RoaXMuX2ZpZWxkRm9yTGFiZWwgPSBwcm9wcy5maWVsZEZvckxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExhYmVsLnByb3RvdHlwZSwgXCJ0ZXh0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMYWJlbC5wcm90b3R5cGUsIFwiYWxpZ25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbGlnbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FsaWduID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGFiZWwucHJvdG90eXBlLCBcImZpZWxkRm9yTGFiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maWVsZEZvckxhYmVsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZmllbGRGb3JMYWJlbCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIExhYmVsO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1MYWJlbC5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIEEgTWFueTJtYW55IHJlbGF0aW9uc2hpcCBmaWVsZFxuICovXG52YXIgTWFueTJtYW55ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNYW55Mm1hbnksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWFueTJtYW55KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWxhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11c3QgZXhwYW5kIHdpZGdldFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX211c3RFeHBhbmQgPSB0cnVlO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NpemUgPSBwcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnJlbGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gcHJvcHMucmVsYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFueTJtYW55LnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYW55Mm1hbnkucHJvdG90eXBlLCBcInJlbGF0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVsYXRpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWxhdGlvbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE1hbnkybWFueTtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IE1hbnkybWFueTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1hbnkybWFueS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIEEgbWFueTJvbmUgcmVsYXRpb25zaGlwIGZpZWxkXG4gKi9cbnZhciBNYW55Mm9uZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWFueTJvbmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWFueTJvbmUocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBzaXplXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fc2l6ZSA9IDE1MDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbGF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fcmVsYXRpb24gPSBcIlwiO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NpemUgPSBwcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnJlbGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gcHJvcHMucmVsYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFueTJvbmUucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hbnkyb25lLnByb3RvdHlwZSwgXCJyZWxhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVsYXRpb24gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBNYW55Mm9uZTtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IE1hbnkyb25lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TWFueTJvbmUuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4vV2lkZ2V0XCI7XG52YXIgTmV3TGluZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTmV3TGluZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOZXdMaW5lKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE5ld0xpbmUucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIE5ld0xpbmU7XG59KFdpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgTmV3TGluZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5ld0xpbmUuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBDb250YWluZXJXaWRnZXQgZnJvbSBcIi4vQ29udGFpbmVyV2lkZ2V0XCI7XG52YXIgTm90ZWJvb2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5vdGVib29rLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5vdGVib29rKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jb2xzcGFuID0gTm90ZWJvb2suX2RlZmF1bHRDb2xzcGFuO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5jb2xzcGFuKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29sc3BhbiA9IHByb3BzLmNvbHNwYW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTm90ZWJvb2ssIFwiZGVmYXVsdENvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBOb3RlYm9vay5fZGVmYXVsdENvbHNwYW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBOb3RlYm9vay5fZGVmYXVsdENvbHNwYW4gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE5vdGVib29rLl9kZWZhdWx0Q29sc3BhbiA9IDM7XG4gICAgcmV0dXJuIE5vdGVib29rO1xufShDb250YWluZXJXaWRnZXQpKTtcbmV4cG9ydCBkZWZhdWx0IE5vdGVib29rO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Tm90ZWJvb2suanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBBIE9uZTJNYW55IHJlbGF0aW9uc2hpcCBmaWVsZFxuICovXG52YXIgT25lMm1hbnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE9uZTJtYW55LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9uZTJtYW55KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWxhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZpZXdzXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fdmlld3MgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogTW9kZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX21vZGUgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11c3QgZXhwYW5kIHdpZGdldFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX211c3RFeHBhbmQgPSB0cnVlO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NpemUgPSBwcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnJlbGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gcHJvcHMucmVsYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMubW9kZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9tb2RlID0gcHJvcHMubW9kZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMudmlld3MpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fdmlld3MgPSBwcm9wcy52aWV3cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5jb2xzcGFuKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29sc3BhbiA9IHByb3BzLmNvbHNwYW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT25lMm1hbnkucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9uZTJtYW55LnByb3RvdHlwZSwgXCJyZWxhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVsYXRpb24gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPbmUybWFueS5wcm90b3R5cGUsIFwidmlld3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92aWV3cztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdzID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT25lMm1hbnkucHJvdG90eXBlLCBcIm1vZGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb2RlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbW9kZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE9uZTJtYW55O1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgT25lMm1hbnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PbmUybWFueS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbnZhciBQYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQYWdlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFBhZ2UocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gUGFnZTtcbn0oQ29udGFpbmVyV2lkZ2V0KSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGFnZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZsb2F0IGZyb20gXCIuL0Zsb2F0XCI7XG4vKipcbiAqIFByb2dyZXNzQmFyIGlucHV0XG4gKi9cbnZhciBQcm9ncmVzc0JhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUHJvZ3Jlc3NCYXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFByb2dyZXNzQmFyO1xufShGbG9hdCkpO1xuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9ncmVzc0Jhci5qcy5tYXAiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IFdpZGdldEZhY3RvcnkgZnJvbSBcIi4vV2lkZ2V0RmFjdG9yeVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbnZhciBTZWFyY2hGaWx0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VhcmNoRmlsdGVyKHNlYXJjaEZpZWxkcywgZmllbGRzLCBjb2x1bW5zKSB7XG4gICAgICAgIGlmIChjb2x1bW5zID09PSB2b2lkIDApIHsgY29sdW1ucyA9IDg7IH1cbiAgICAgICAgdGhpcy5fc2VhcmNoRmllbGRzID0gc2VhcmNoRmllbGRzO1xuICAgICAgICB0aGlzLl9maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMuX3NpbXBsZVNlYXJjaENvbnRhaW5lciA9IG5ldyBDb250YWluZXIoY29sdW1ucyk7XG4gICAgICAgIHRoaXMuX2FkdmFuY2VkU2VhcmNoQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcihjb2x1bW5zKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlYXJjaEZpbHRlci5wcm90b3R5cGUsIFwic2VhcmNoRmllbGRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VhcmNoRmllbGRzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlYXJjaEZpbHRlci5wcm90b3R5cGUsIFwiZmllbGRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmllbGRzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlYXJjaEZpbHRlci5wcm90b3R5cGUsIFwic2ltcGxlU2VhcmNoQ29udGFpbmVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2ltcGxlU2VhcmNoQ29udGFpbmVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlYXJjaEZpbHRlci5wcm90b3R5cGUsIFwiYWR2YW5jZWRTZWFyY2hDb250YWluZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZHZhbmNlZFNlYXJjaENvbnRhaW5lcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFNlYXJjaEZpbHRlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB3aWRnZXRGYWN0b3J5ID0gbmV3IFdpZGdldEZhY3RvcnkoKTtcbiAgICAgICAgdmFyIHNpbXBsZVNlYXJjaFdpZGdldHMgPSB0aGlzLnBhcnNlRmllbGRzKHRoaXMuc2VhcmNoRmllbGRzLnByaW1hcnksIHdpZGdldEZhY3RvcnkpO1xuICAgICAgICBzaW1wbGVTZWFyY2hXaWRnZXRzLmZvckVhY2goZnVuY3Rpb24gKHdpZGdldCkge1xuICAgICAgICAgICAgX3RoaXMuc2ltcGxlU2VhcmNoQ29udGFpbmVyLmFkZFdpZGdldCh3aWRnZXQsIHsgYWRkTGFiZWw6IGZhbHNlIH0pO1xuICAgICAgICAgICAgX3RoaXMuYWR2YW5jZWRTZWFyY2hDb250YWluZXIuYWRkV2lkZ2V0KHdpZGdldCwgeyBhZGRMYWJlbDogZmFsc2UgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYWR2YW5jZWRTZWFyY2hXaWRnZXRzID0gdGhpcy5wYXJzZUZpZWxkcyh0aGlzLnNlYXJjaEZpZWxkcy5zZWNvbmRhcnksIHdpZGdldEZhY3RvcnkpO1xuICAgICAgICBhZHZhbmNlZFNlYXJjaFdpZGdldHMuZm9yRWFjaChmdW5jdGlvbiAod2lkZ2V0KSB7XG4gICAgICAgICAgICBfdGhpcy5hZHZhbmNlZFNlYXJjaENvbnRhaW5lci5hZGRXaWRnZXQod2lkZ2V0LCB7IGFkZExhYmVsOiBmYWxzZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTZWFyY2hGaWx0ZXIucHJvdG90eXBlLnBhcnNlRmllbGRzID0gZnVuY3Rpb24gKHNlYXJjaEZpZWxkcywgd2lkZ2V0RmFjdG9yeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2VhcmNoRmllbGRzLm1hcChmdW5jdGlvbiAoc2VhcmNoRmllbGQpIHtcbiAgICAgICAgICAgIHZhciBmaWVsZEF0dHJpYnV0ZXMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMuZmllbGRzW3NlYXJjaEZpZWxkXSksIHsgbmFtZTogc2VhcmNoRmllbGQsIGNvbHNwYW46IDIgfSk7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGZpZWxkQXR0cmlidXRlcy50eXBlO1xuICAgICAgICAgICAgcmV0dXJuIHdpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KHR5cGUsIGZpZWxkQXR0cmlidXRlcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbHMgY29udGFpbmVyJ3MgZmluZEJ5SWQgbWV0aG9kIHRvIGZpbmQgdGhlIHdpZGdldHMgbWF0Y2hpbmcgd2l0aCBwYXJhbSBpZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZCB0byBmaW5kXG4gICAgICovXG4gICAgU2VhcmNoRmlsdGVyLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZHZhbmNlZFNlYXJjaENvbnRhaW5lci5maW5kQnlJZChpZCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2VhcmNoRmlsdGVyO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZpbHRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNlYXJjaEZpbHRlci5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIFNlbGVjdGlvbiBmaWVsZCBmb3Iga2V5LXZhbHVlIGxpc3RzXG4gKi9cbnZhciBTZWxlY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNlbGVjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBzaXplXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fc2l6ZSA9IDE1MDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVlcyBhbmQga2V5c1xuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NlbGVjdGlvblZhbHVlcyA9IG5ldyBNYXAoW10pO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NpemUgPSBwcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zZWxlY3Rpb25WYWx1ZXMgPSBuZXcgTWFwKHByb3BzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0aW9uLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWxlY3Rpb24ucHJvdG90eXBlLCBcInNlbGVjdGlvblZhbHVlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvblZhbHVlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvblZhbHVlcyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFNlbGVjdGlvbjtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNlbGVjdGlvbi5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbnZhciBTZXBhcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNlcGFyYXRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZXBhcmF0b3IocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMYWJlbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2xhYmVsID0gXCJcIjtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2xhYmVsID0gcHJvcHMuc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlcGFyYXRvci5wcm90b3R5cGUsIFwibGFiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTZXBhcmF0b3IucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIFNlcGFyYXRvcjtcbn0oV2lkZ2V0KSk7XG5leHBvcnQgZGVmYXVsdCBTZXBhcmF0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TZXBhcmF0b3IuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBNdWx0aWxpbmUgaW5wdXQgd2l0aCBubyBsZW5ndGggbGltaXQuXG4gKi9cbnZhciBUZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUZXh0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRleHQocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBwbGFjZSBob2xkZXJcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9wbGFjZWhvbGRlciA9IHByb3BzLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRleHQucHJvdG90eXBlLCBcInBsYWNlaG9sZGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFRleHQ7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGV4dC5qcy5tYXAiLCJpbXBvcnQgV2lkZ2V0RmFjdG9yeSBmcm9tIFwiLi9XaWRnZXRGYWN0b3J5XCI7XG5pbXBvcnQgeyBwYXJzZU5vZGVzIH0gZnJvbSBcIi4vaGVscGVycy9ub2RlUGFyc2VyXCI7XG52YXIgVHJlZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmVlKGZpZWxkcykge1xuICAgICAgICB0aGlzLl9jb2x1bW5zID0gW107XG4gICAgICAgIHRoaXMuX3N0cmluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2ZpZWxkcyA9IGZpZWxkcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyZWUucHJvdG90eXBlLCBcImZpZWxkc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmVlLnByb3RvdHlwZSwgXCJjb2x1bW5zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmVlLnByb3RvdHlwZSwgXCJzdHJpbmdcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmc7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBUcmVlLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICh4bWwpIHtcbiAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgdmFyIHZpZXcgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbCwgXCJ0ZXh0L3htbFwiKTtcbiAgICAgICAgdGhpcy5wYXJzZU5vZGUodmlldy5kb2N1bWVudEVsZW1lbnQpO1xuICAgICAgICB0aGlzLl9zdHJpbmcgPSB2aWV3LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHJpbmdcIik7XG4gICAgfTtcbiAgICBUcmVlLnByb3RvdHlwZS5wYXJzZU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgd2lkZ2V0RmFjdG9yeSA9IG5ldyBXaWRnZXRGYWN0b3J5KCk7XG4gICAgICAgIHZhciBub2Rlc1BhcnNlZCA9IHBhcnNlTm9kZXMobm9kZS5jaGlsZE5vZGVzLCB0aGlzLl9maWVsZHMpO1xuICAgICAgICBub2Rlc1BhcnNlZC5mb3JFYWNoKGZ1bmN0aW9uIChub2RlUGFyc2VkKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gbm9kZVBhcnNlZC50YWcsIHRhZ0F0dHJpYnV0ZXMgPSBub2RlUGFyc2VkLnRhZ0F0dHJpYnV0ZXM7XG4gICAgICAgICAgICB2YXIgd2lkZ2V0ID0gd2lkZ2V0RmFjdG9yeS5jcmVhdGVXaWRnZXQodGFnLCB0YWdBdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIF90aGlzLl9jb2x1bW5zLnB1c2god2lkZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSB3aWRnZXRzIG1hdGNoaW5nIHdpdGggcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgdG8gZmluZFxuICAgICAqL1xuICAgIFRyZWUucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmZpbmRCeUlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZmluZEJ5SWQoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUcmVlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UcmVlLmpzLm1hcCIsInZhciBXaWRnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV2lkZ2V0KHByb3BzKSB7XG4gICAgICAgIHRoaXMuX2NvbHNwYW4gPSBXaWRnZXQuX2RlZmF1bHRDb2xzcGFuO1xuICAgICAgICB0aGlzLl9yZWFkT25seSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pbnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbHNwYW4gPSArcHJvcHMuY29sc3BhbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5yZWFkb25seSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5yZWFkb25seSA9PT0gMSB8fCBwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFkT25seSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLmludmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5pbnZpc2libGUgPT09IDEgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaW52aXNpYmxlID09PSBcIjFcIiB8fFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5pbnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdpZGdldCwgXCJkZWZhdWx0Q29sc3BhblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFdpZGdldC5fZGVmYXVsdENvbHNwYW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBXaWRnZXQuX2RlZmF1bHRDb2xzcGFuID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2lkZ2V0LnByb3RvdHlwZSwgXCJyZWFkT25seVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVhZE9ubHkgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXaWRnZXQucHJvdG90eXBlLCBcImNvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2xzcGFuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY29sc3BhbiA9ICt2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXaWRnZXQucHJvdG90eXBlLCBcImludmlzaWJsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludmlzaWJsZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2ludmlzaWJsZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBjb2xzcGFuXG4gICAgICovXG4gICAgV2lkZ2V0Ll9kZWZhdWx0Q29sc3BhbiA9IDE7XG4gICAgcmV0dXJuIFdpZGdldDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XaWRnZXQuanMubWFwIiwiaW1wb3J0IE5vdGVib29rIGZyb20gXCIuL05vdGVib29rXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9QYWdlXCI7XG5pbXBvcnQgR3JvdXAgZnJvbSBcIi4vR3JvdXBcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBDaGFyIGZyb20gXCIuL0NoYXJcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuL1RleHRcIjtcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSBcIi4vU2VsZWN0aW9uXCI7XG5pbXBvcnQgTWFueTJvbmUgZnJvbSBcIi4vTWFueTJvbmVcIjtcbmltcG9ydCBCb29sZWFuIGZyb20gXCIuL0Jvb2xlYW5cIjtcbmltcG9ydCBJbnRlZ2VyIGZyb20gXCIuL0ludGVnZXJcIjtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4vV2lkZ2V0XCI7XG5pbXBvcnQgRmxvYXQgZnJvbSBcIi4vRmxvYXRcIjtcbmltcG9ydCBGbG9hdFRpbWUgZnJvbSBcIi4vRmxvYXRUaW1lXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBEYXRlIGZyb20gXCIuL0RhdGVcIjtcbmltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi9EYXRlVGltZVwiO1xuaW1wb3J0IE1hbnkybWFueSBmcm9tIFwiLi9NYW55Mm1hbnlcIjtcbmltcG9ydCBPbmUybWFueSBmcm9tIFwiLi9PbmUybWFueVwiO1xuaW1wb3J0IE5ld0xpbmUgZnJvbSBcIi4vTmV3TGluZVwiO1xuaW1wb3J0IFNlcGFyYXRvciBmcm9tIFwiLi9TZXBhcmF0b3JcIjtcbnZhciBXaWRnZXRGYWN0b3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdpZGdldEZhY3RvcnkoKSB7XG4gICAgfVxuICAgIFdpZGdldEZhY3RvcnkucHJvdG90eXBlLnNldFdpZGdldENsYXNzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwibm90ZWJvb2tcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE5vdGVib29rO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBhZ2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IFBhZ2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ3JvdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEdyb3VwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxhYmVsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBMYWJlbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjaGFyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBDaGFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IFRleHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnV0dG9uXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBCdXR0b247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2VsZWN0aW9uXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBTZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWFueTJvbmVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE1hbnkyb25lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEJvb2xlYW47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW50ZWdlclwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gSW50ZWdlcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJmbG9hdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gRmxvYXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZmxvYXRfdGltZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gRmxvYXRUaW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IERhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZGF0ZXRpbWVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IERhdGVUaW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInByb2dyZXNzYmFyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBQcm9ncmVzc0JhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtYW55Mm1hbnlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE1hbnkybWFueTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvbmUybWFueVwiOlxuICAgICAgICAgICAgY2FzZSBcIm9uZTJtYW55X2xpc3RcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE9uZTJtYW55O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm5ld2xpbmVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE5ld0xpbmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2VwYXJhdG9yXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBTZXBhcmF0b3I7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gV2lkZ2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXaWRnZXRGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVXaWRnZXQgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRXaWRnZXRDbGFzcyh0eXBlKTtcbiAgICAgICAgLy8gVE9ETzogV2lkZ2V0IENsYXNzIGNvbnN0cnVjdG9ycyBzaG91bGQgdXNlIG9ubHkgdGhlIHByb3BzIG5lZWRlZCwgbm90IGFsbCBwcm9wcy5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWZpYyBjYXNlcyAob25seSBzZWxlY3RlZCBwcm9wcyBzaG91bGQgYmUgdXNlZClcbiAgICAgICAgICAgIGNhc2UgXCJub3RlYm9va1wiOlxuICAgICAgICAgICAgY2FzZSBcInBhZ2VcIjpcbiAgICAgICAgICAgIGNhc2UgXCJncm91cFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5fd2lkZ2V0Q2xhc3MocHJvcHMpO1xuICAgICAgICAgICAgLy8gR2VuZXJpYyBjYXNlXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5fd2lkZ2V0Q2xhc3MocHJvcHMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gV2lkZ2V0RmFjdG9yeTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBXaWRnZXRGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2lkZ2V0RmFjdG9yeS5qcy5tYXAiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIGlzTnVtZXJpYyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICBpZiAodHlwZW9mIHN0ciAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyB3ZSBvbmx5IHByb2Nlc3Mgc3RyaW5ncyFcbiAgICByZXR1cm4gIWlzTmFOKHN0cikgJiYgIWlzTmFOKHBhcnNlRmxvYXQoc3RyKSk7XG59O1xudmFyIHBhcnNlRG9tYWluID0gZnVuY3Rpb24gKGRvbWFpblZhbHVlKSB7XG4gICAgaWYgKCFkb21haW5WYWx1ZSB8fCB0eXBlb2YgZG9tYWluVmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgcGFyc2VkRG9tYWluID0gW107XG4gICAgdmFyIHJlZ2V4ID0gL1xcKChbXlxcKV0rKVxcKS9nO1xuICAgIHZhciB0dXBwbGVzID0gW107XG4gICAgdmFyIG1hdGNoZXM7XG4gICAgd2hpbGUgKChtYXRjaGVzID0gcmVnZXguZXhlYyhkb21haW5WYWx1ZSkpKSB7XG4gICAgICAgIHR1cHBsZXMucHVzaChtYXRjaGVzWzFdKTtcbiAgICB9XG4gICAgdHVwcGxlcy5mb3JFYWNoKGZ1bmN0aW9uICh0dXBwbGUpIHtcbiAgICAgICAgdmFyIHNwbGl0dGVkID0gdHVwcGxlLnJlcGxhY2UoL1xccy9nLCBcIlwiKS5zcGxpdChcIixcIik7XG4gICAgICAgIHZhciBmaWVsZCA9IHNwbGl0dGVkWzBdLnJlcGxhY2UoLycvZywgXCJcIik7XG4gICAgICAgIHZhciBvcGVyYXRvciA9IHNwbGl0dGVkWzFdLnJlcGxhY2UoLycvZywgXCJcIik7XG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0dGVkWzJdO1xuICAgICAgICBpZiAodmFsdWUuaW5kZXhPZihcIidcIikgPT09IC0xICYmIGlzTnVtZXJpYyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIC8vIERvIG5vdGhpbmdcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS5pbmRleE9mKFwiJ1wiKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICEodmFsdWUgPT09IFwiVHJ1ZVwiIHx8IHZhbHVlID09PSBcIkZhbHNlXCIpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdmFsdWUgcmVmZXJlbmNlcyB0byBhbiBhY3R1YWwgZmllbGQsIGFkZCBjdXJseSBicmFjZXMgYXJvdW5kIGl0XG4gICAgICAgICAgICB2YWx1ZSA9IFwie1wiICsgdmFsdWUgKyBcIn1cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvJy9nLCBcIlwiKTtcbiAgICAgICAgfVxuICAgICAgICBwYXJzZWREb21haW4ucHVzaChbZmllbGQsIG9wZXJhdG9yLCB2YWx1ZV0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwYXJzZWREb21haW47XG59O1xudmFyIGdldFBhcmFtc0ZvckRvbWFpbiA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB2YWx1ZXMgPSBfYS52YWx1ZXMsIGRvbWFpbiA9IF9hLmRvbWFpbjtcbiAgICB2YXIgdmFsdWVzVG9TZWFyY2hJbiA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB2YWx1ZXMpLCB7IGFjdGl2ZV9pZDogdmFsdWVzLmlkIH0pO1xuICAgIHJldHVybiBkb21haW4ubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICB2YXIgZmllbGQgPSBlbnRyeVswXSwgb3BlcmF0b3IgPSBlbnRyeVsxXSwgdmFsdWUgPSBlbnRyeVsyXTtcbiAgICAgICAgdmFyIHJlc29sdmVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZS5pbmRleE9mKFwie1wiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB2YWx1ZS5yZXBsYWNlKFwie1wiLCBcIlwiKS5yZXBsYWNlKFwifVwiLCBcIlwiKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZXNUb1NlYXJjaEluW2tleV0pXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRWYWx1ZSA9IHZhbHVlc1RvU2VhcmNoSW5ba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2ZpZWxkLCBvcGVyYXRvciwgcmVzb2x2ZWRWYWx1ZV07XG4gICAgfSk7XG59O1xuZXhwb3J0IHsgcGFyc2VEb21haW4sIGdldFBhcmFtc0ZvckRvbWFpbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG9tYWluUGFyc2VyLmpzLm1hcCIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgcGFyc2VOb2RlcyA9IGZ1bmN0aW9uIChub2RlcywgZmllbGRzKSB7XG4gICAgdmFyIHBhcnNlZE5vZGVzID0gW107XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlcywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gY2hpbGQuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gY2hpbGQubm9kZU5hbWU7XG4gICAgICAgICAgICB2YXIgdGFnQXR0cmlidXRlc18xID0ge307XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGNoaWxkLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgdGFnQXR0cmlidXRlc18xW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGFnID09PSBcImZpZWxkXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZV8xID0gY2hpbGQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cldpZGdldCA9IGNoaWxkLmdldEF0dHJpYnV0ZShcIndpZGdldFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cldpZGdldCkge1xuICAgICAgICAgICAgICAgICAgICB0YWcgPSBhdHRyV2lkZ2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZHNbbmFtZV8xXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmllbGQgXCIgKyBuYW1lXzEgKyBcIiBkb2Vzbid0IGV4aXN0IGluIGZpZWxkcyBkZWZpbnRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFnID0gZmllbGRzW25hbWVfMV0udHlwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gV2UgZG8gdGhpcyBpbiBvcmRlciB0byBpZ25vcmUgdGhlIGJsYW5rIGRvbWFpbiBhdHRyaWJ1dGUgaW4gZmllbGRzIGFuZCB0byBwcmlvcml0aXplIHRoZSBhdHRyaWJ1dGVzIHZhbHVlIFxuICAgICAgICAgICAgICAgIGlmICgoKEFycmF5LmlzQXJyYXkoZmllbGRzW25hbWVfMV0uZG9tYWluKSAmJlxuICAgICAgICAgICAgICAgICAgICBmaWVsZHNbbmFtZV8xXS5kb21haW4ubGVuZ3RoID09PSAwKSB8fFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHNbbmFtZV8xXS5kb21haW4gPT09IGZhbHNlKSAmJlxuICAgICAgICAgICAgICAgICAgICB0YWdBdHRyaWJ1dGVzXzFbXCJkb21haW5cIl0gJiZcbiAgICAgICAgICAgICAgICAgICAgdGFnQXR0cmlidXRlc18xW1wiZG9tYWluXCJdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGZpZWxkc1tuYW1lXzFdLmRvbWFpbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFnQXR0cmlidXRlc18xID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRhZ0F0dHJpYnV0ZXNfMSksIGZpZWxkc1tuYW1lXzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlZE5vZGVzLnB1c2goeyB0YWc6IHRhZywgdGFnQXR0cmlidXRlczogdGFnQXR0cmlidXRlc18xLCBjaGlsZDogY2hpbGQgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyc2VkTm9kZXM7XG59O1xuZXhwb3J0IHsgcGFyc2VOb2RlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZVBhcnNlci5qcy5tYXAiLCJpbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgVHJlZSBmcm9tIFwiLi9UcmVlXCI7XG5pbXBvcnQgQ2hhciBmcm9tIFwiLi9DaGFyXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSBcIi4vU2VsZWN0aW9uXCI7XG5pbXBvcnQgTWFueTJvbmUgZnJvbSBcIi4vTWFueTJvbmVcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbmltcG9ydCBCb29sZWFuIGZyb20gXCIuL0Jvb2xlYW5cIjtcbmltcG9ydCBJbnRlZ2VyIGZyb20gXCIuL0ludGVnZXJcIjtcbmltcG9ydCBGbG9hdCBmcm9tIFwiLi9GbG9hdFwiO1xuaW1wb3J0IEZsb2F0VGltZSBmcm9tIFwiLi9GbG9hdFRpbWVcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IERhdGUgZnJvbSBcIi4vRGF0ZVwiO1xuaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuL0RhdGVUaW1lXCI7XG5pbXBvcnQgTWFueTJtYW55IGZyb20gXCIuL01hbnkybWFueVwiO1xuaW1wb3J0IE9uZTJtYW55IGZyb20gXCIuL09uZTJtYW55XCI7XG5pbXBvcnQgU2VhcmNoRmlsdGVyIGZyb20gXCIuL1NlYXJjaEZpbHRlclwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vVGV4dFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgTm90ZWJvb2sgZnJvbSBcIi4vTm90ZWJvb2tcIjtcbmltcG9ydCBHcm91cCBmcm9tIFwiLi9Hcm91cFwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IFNlcGFyYXRvciBmcm9tIFwiLi9TZXBhcmF0b3JcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgKiBhcyBEb21haW5QYXJzZXIgZnJvbSBcIi4vaGVscGVycy9kb21haW5QYXJzZXJcIjtcbmV4cG9ydCB7IENoYXIsIFNlbGVjdGlvbiwgTWFueTJvbmUsIEZpZWxkLCBXaWRnZXQsIEZvcm0sIFRyZWUsIEJvb2xlYW4sIE9uZTJtYW55LCBJbnRlZ2VyLCBGbG9hdCwgRmxvYXRUaW1lLCBEYXRlLCBEYXRlVGltZSwgTWFueTJtYW55LCBTZWFyY2hGaWx0ZXIsIENvbnRhaW5lciwgQ29udGFpbmVyV2lkZ2V0LCBUZXh0LCBQcm9ncmVzc0JhciwgTm90ZWJvb2ssIEdyb3VwLCBQYWdlLCBMYWJlbCwgU2VwYXJhdG9yLCBCdXR0b24sIERvbWFpblBhcnNlciwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbnZhciBvYnNlcnZlckVyciA9IFwi8J+SoSByZWFjdC1jb29sLWRpbWVuc2lvbnM6IHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBSZXNpemUgT2JzZXJ2ZXIsIHBsZWFzZSB1c2UgcG9seWZpbGw6IGh0dHBzOi8vZ2l0aHViLmNvbS93ZWxseXNoZW4vcmVhY3QtY29vbC1kaW1lbnNpb25zI3Jlc2l6ZW9ic2VydmVyLXBvbHlmaWxsXCI7XG52YXIgYm9yZGVyQm94V2FybiA9IFwi8J+SoSByZWFjdC1jb29sLWRpbWVuc2lvbnM6IHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBib3JkZXItYm94IHNpemUsIGZhbGxiYWNrIHRvIGNvbnRlbnQtYm94IHNpemUuIFBsZWFzZSBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS93ZWxseXNoZW4vcmVhY3QtY29vbC1kaW1lbnNpb25zI2JvcmRlci1ib3gtc2l6ZS1tZWFzdXJlbWVudFwiO1xuXG52YXIgZ2V0Q3VycmVudEJyZWFrcG9pbnQgPSBmdW5jdGlvbiBnZXRDdXJyZW50QnJlYWtwb2ludChicHMsIHcpIHtcbiAgdmFyIGN1ckJwID0gXCJcIjtcbiAgdmFyIG1heCA9IC0xO1xuICBPYmplY3Qua2V5cyhicHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB2YWwgPSBicHNba2V5XTtcblxuICAgIGlmICh3ID49IHZhbCAmJiB2YWwgPiBtYXgpIHtcbiAgICAgIGN1ckJwID0ga2V5O1xuICAgICAgbWF4ID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjdXJCcDtcbn07XG5cbnZhciB1c2VEaW1lbnNpb25zID0gZnVuY3Rpb24gdXNlRGltZW5zaW9ucyhfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgcmVmT3B0ID0gX3JlZi5yZWYsXG4gICAgICB1c2VCb3JkZXJCb3hTaXplID0gX3JlZi51c2VCb3JkZXJCb3hTaXplLFxuICAgICAgYnJlYWtwb2ludHMgPSBfcmVmLmJyZWFrcG9pbnRzLFxuICAgICAgdXBkYXRlT25CcmVha3BvaW50Q2hhbmdlID0gX3JlZi51cGRhdGVPbkJyZWFrcG9pbnRDaGFuZ2UsXG4gICAgICBzaG91bGRVcGRhdGUgPSBfcmVmLnNob3VsZFVwZGF0ZSxcbiAgICAgIG9uUmVzaXplID0gX3JlZi5vblJlc2l6ZSxcbiAgICAgIHBvbHlmaWxsID0gX3JlZi5wb2x5ZmlsbDtcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoe1xuICAgIGN1cnJlbnRCcmVha3BvaW50OiBcIlwiLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9KSxcbiAgICAgIHN0YXRlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0U3RhdGUgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIHByZXZTaXplUmVmID0gdXNlUmVmKHt9KTtcbiAgdmFyIHByZXZCcmVha3BvaW50UmVmID0gdXNlUmVmKCk7XG4gIHZhciBvYnNlcnZlclJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIG9uUmVzaXplUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgc2hvdWxkVXBkYXRlUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgd2FybmVkUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgdmFyIHJlZlZhciA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHJlZiA9IHVzZVJlZihyZWZWYXIgPT0gbnVsbCA/IHZvaWQgMCA6IHJlZlZhci5jdXJyZW50KTtcbiAgcmVmID0gcmVmT3B0IHx8IHJlZjtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob25SZXNpemUpIG9uUmVzaXplUmVmLmN1cnJlbnQgPSBvblJlc2l6ZTtcbiAgfSwgW29uUmVzaXplXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNob3VsZFVwZGF0ZSkgc2hvdWxkVXBkYXRlUmVmLmN1cnJlbnQgPSBzaG91bGRVcGRhdGU7XG4gIH0sIFtzaG91bGRVcGRhdGVdKTtcbiAgdmFyIG9ic2VydmUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSByZWYuY3VycmVudCA9IGVsZW1lbnQ7XG4gICAgaWYgKG9ic2VydmVyUmVmLmN1cnJlbnQgJiYgcmVmLmN1cnJlbnQpIG9ic2VydmVyUmVmLmN1cnJlbnQub2JzZXJ2ZShyZWYuY3VycmVudCk7XG4gIH0sIFtyZWZdKTtcbiAgdmFyIHVub2JzZXJ2ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAob2JzZXJ2ZXJSZWYuY3VycmVudCkgb2JzZXJ2ZXJSZWYuY3VycmVudC5kaXNjb25uZWN0KCk7XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXJlZi5jdXJyZW50KSByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIGlmICgoIShcIlJlc2l6ZU9ic2VydmVyXCIgaW4gd2luZG93KSB8fCAhKFwiUmVzaXplT2JzZXJ2ZXJFbnRyeVwiIGluIHdpbmRvdykpICYmICFwb2x5ZmlsbCkge1xuICAgICAgY29uc29sZS5lcnJvcihvYnNlcnZlckVycik7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH07XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGF0L2NvbXBhdFxuXG5cbiAgICBvYnNlcnZlclJlZi5jdXJyZW50ID0gbmV3IChwb2x5ZmlsbCB8fCB3aW5kb3cuUmVzaXplT2JzZXJ2ZXIpKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgdmFyIGVudHJ5ID0gX3JlZjJbMF07XG4gICAgICB2YXIgY29udGVudEJveFNpemUgPSBlbnRyeS5jb250ZW50Qm94U2l6ZSxcbiAgICAgICAgICBib3JkZXJCb3hTaXplID0gZW50cnkuYm9yZGVyQm94U2l6ZSxcbiAgICAgICAgICBjb250ZW50UmVjdCA9IGVudHJ5LmNvbnRlbnRSZWN0O1xuICAgICAgdmFyIGJveFNpemUgPSBjb250ZW50Qm94U2l6ZTtcbiAgICAgIGlmICh1c2VCb3JkZXJCb3hTaXplKSBpZiAoYm9yZGVyQm94U2l6ZSkge1xuICAgICAgICBib3hTaXplID0gYm9yZGVyQm94U2l6ZTtcbiAgICAgIH0gZWxzZSBpZiAoIXdhcm5lZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNvbnNvbGUud2Fybihib3JkZXJCb3hXYXJuKTtcbiAgICAgICAgd2FybmVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgfSAvLyBAanVnZ2xlL3Jlc2l6ZS1vYnNlcnZlciBwb2x5ZmlsbCBoYXMgZGlmZmVyZW50IGRhdGEgc3RydWN0dXJlXG5cbiAgICAgIGJveFNpemUgPSBBcnJheS5pc0FycmF5KGJveFNpemUpID8gYm94U2l6ZVswXSA6IGJveFNpemU7XG4gICAgICB2YXIgd2lkdGggPSBib3hTaXplID8gYm94U2l6ZS5pbmxpbmVTaXplIDogY29udGVudFJlY3Qud2lkdGg7XG4gICAgICB2YXIgaGVpZ2h0ID0gYm94U2l6ZSA/IGJveFNpemUuYmxvY2tTaXplIDogY29udGVudFJlY3QuaGVpZ2h0O1xuICAgICAgaWYgKHdpZHRoID09PSBwcmV2U2l6ZVJlZi5jdXJyZW50LndpZHRoICYmIGhlaWdodCA9PT0gcHJldlNpemVSZWYuY3VycmVudC5oZWlnaHQpIHJldHVybjtcbiAgICAgIHByZXZTaXplUmVmLmN1cnJlbnQgPSB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH07XG4gICAgICB2YXIgZSA9IHtcbiAgICAgICAgY3VycmVudEJyZWFrcG9pbnQ6IFwiXCIsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIGVudHJ5OiBlbnRyeSxcbiAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcbiAgICAgICAgdW5vYnNlcnZlOiB1bm9ic2VydmVcbiAgICAgIH07XG5cbiAgICAgIGlmIChicmVha3BvaW50cykge1xuICAgICAgICBlLmN1cnJlbnRCcmVha3BvaW50ID0gZ2V0Q3VycmVudEJyZWFrcG9pbnQoYnJlYWtwb2ludHMsIHdpZHRoKTtcblxuICAgICAgICBpZiAoZS5jdXJyZW50QnJlYWtwb2ludCAhPT0gcHJldkJyZWFrcG9pbnRSZWYuY3VycmVudCkge1xuICAgICAgICAgIGlmIChvblJlc2l6ZVJlZi5jdXJyZW50KSBvblJlc2l6ZVJlZi5jdXJyZW50KGUpO1xuICAgICAgICAgIHByZXZCcmVha3BvaW50UmVmLmN1cnJlbnQgPSBlLmN1cnJlbnRCcmVha3BvaW50O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9uUmVzaXplUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgb25SZXNpemVSZWYuY3VycmVudChlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG5leHQgPSB7XG4gICAgICAgIGN1cnJlbnRCcmVha3BvaW50OiBlLmN1cnJlbnRCcmVha3BvaW50LFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICBlbnRyeTogZW50cnlcbiAgICAgIH07XG4gICAgICBpZiAoc2hvdWxkVXBkYXRlUmVmLmN1cnJlbnQgJiYgIXNob3VsZFVwZGF0ZVJlZi5jdXJyZW50KG5leHQpKSByZXR1cm47XG5cbiAgICAgIGlmICghc2hvdWxkVXBkYXRlUmVmLmN1cnJlbnQgJiYgYnJlYWtwb2ludHMgJiYgdXBkYXRlT25CcmVha3BvaW50Q2hhbmdlKSB7XG4gICAgICAgIHNldFN0YXRlKGZ1bmN0aW9uIChwcmV2KSB7XG4gICAgICAgICAgcmV0dXJuIHByZXYuY3VycmVudEJyZWFrcG9pbnQgIT09IG5leHQuY3VycmVudEJyZWFrcG9pbnQgPyBuZXh0IDogcHJldjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0U3RhdGUobmV4dCk7XG4gICAgfSk7XG4gICAgb2JzZXJ2ZSgpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdW5vYnNlcnZlKCk7XG4gICAgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBKU09OLnN0cmluZ2lmeShicmVha3BvaW50cyksIHVzZUJvcmRlckJveFNpemUsIG9ic2VydmUsIHVub2JzZXJ2ZSwgdXBkYXRlT25CcmVha3BvaW50Q2hhbmdlXSk7XG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgcmVmOiByZWZcbiAgfSwgc3RhdGUsIHtcbiAgICBvYnNlcnZlOiBvYnNlcnZlLFxuICAgIHVub2JzZXJ2ZTogdW5vYnNlcnZlXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlRGltZW5zaW9ucztcbmV4cG9ydCB7IGJvcmRlckJveFdhcm4sIG9ic2VydmVyRXJyIH07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLy9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQiwgY29tcGFyZSwgY29tcGFyZUNvbnRleHQpIHtcbiAgdmFyIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIG9iakEsIG9iakIpIDogdm9pZCAwO1xuXG4gIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgIHJldHVybiAhIXJldDtcbiAgfVxuXG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgIW9iakEgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG5cbiAgICBpZiAoIWJIYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlQSA9IG9iakFba2V5XTtcbiAgICB2YXIgdmFsdWVCID0gb2JqQltrZXldO1xuXG4gICAgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgdmFsdWVBLCB2YWx1ZUIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICBpZiAocmV0ID09PSBmYWxzZSB8fCAocmV0ID09PSB2b2lkIDAgJiYgdmFsdWVBICE9PSB2YWx1ZUIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiaW1wb3J0e3R5cGVPZiBhcyBlLGlzRWxlbWVudCBhcyB0LGlzVmFsaWRFbGVtZW50VHlwZSBhcyBufWZyb21cInJlYWN0LWlzXCI7aW1wb3J0IHIse3VzZVN0YXRlIGFzIG8sdXNlQ29udGV4dCBhcyBzLHVzZU1lbW8gYXMgaSx1c2VFZmZlY3QgYXMgYSx1c2VSZWYgYXMgYyxjcmVhdGVFbGVtZW50IGFzIHUsdXNlRGVidWdWYWx1ZSBhcyBsLHVzZUxheW91dEVmZmVjdCBhcyBkfWZyb21cInJlYWN0XCI7aW1wb3J0IGggZnJvbVwic2hhbGxvd2VxdWFsXCI7aW1wb3J0IHAgZnJvbVwiQGVtb3Rpb24vc3R5bGlzXCI7aW1wb3J0IGYgZnJvbVwiQGVtb3Rpb24vdW5pdGxlc3NcIjtpbXBvcnQgbSBmcm9tXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCI7aW1wb3J0IHkgZnJvbVwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjtmdW5jdGlvbiB2KCl7cmV0dXJuKHY9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYoZVtyXT1uW3JdKX1yZXR1cm4gZX0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgZz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bZVswXV0scj0wLG89dC5sZW5ndGg7cjxvO3IrPTEpbi5wdXNoKHRbcl0sZVtyKzFdKTtyZXR1cm4gbn0sUz1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9PXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZcIltvYmplY3QgT2JqZWN0XVwiPT09KHQudG9TdHJpbmc/dC50b1N0cmluZygpOk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSkmJiFlKHQpfSx3PU9iamVjdC5mcmVlemUoW10pLEU9T2JqZWN0LmZyZWV6ZSh7fSk7ZnVuY3Rpb24gYihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlfWZ1bmN0aW9uIF8oZSl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJmV8fGUuZGlzcGxheU5hbWV8fGUubmFtZXx8XCJDb21wb25lbnRcIn1mdW5jdGlvbiBOKGUpe3JldHVybiBlJiZcInN0cmluZ1wiPT10eXBlb2YgZS5zdHlsZWRDb21wb25lbnRJZH12YXIgQT1cInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19BVFRSfHxwcm9jZXNzLmVudi5TQ19BVFRSKXx8XCJkYXRhLXN0eWxlZFwiLEM9XCI1LjIuMVwiLEk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJIVE1MRWxlbWVudFwiaW4gd2luZG93LFA9Qm9vbGVhbihcImJvb2xlYW5cIj09dHlwZW9mIFNDX0RJU0FCTEVfU1BFRURZP1NDX0RJU0FCTEVfU1BFRURZOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiZ2b2lkIDAhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFkmJlwiXCIhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZJiZwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJnZvaWQgMCE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZJiZcIlwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFkmJnByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZOlwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpLE89e30sUj1cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP3sxOlwiQ2Fubm90IGNyZWF0ZSBzdHlsZWQtY29tcG9uZW50IGZvciBjb21wb25lbnQ6ICVzLlxcblxcblwiLDI6XCJDYW4ndCBjb2xsZWN0IHN0eWxlcyBvbmNlIHlvdSd2ZSBjb25zdW1lZCBhIGBTZXJ2ZXJTdHlsZVNoZWV0YCdzIHN0eWxlcyEgYFNlcnZlclN0eWxlU2hlZXRgIGlzIGEgb25lIG9mZiBpbnN0YW5jZSBmb3IgZWFjaCBzZXJ2ZXItc2lkZSByZW5kZXIgY3ljbGUuXFxuXFxuLSBBcmUgeW91IHRyeWluZyB0byByZXVzZSBpdCBhY3Jvc3MgcmVuZGVycz9cXG4tIEFyZSB5b3UgYWNjaWRlbnRhbGx5IGNhbGxpbmcgY29sbGVjdFN0eWxlcyB0d2ljZT9cXG5cXG5cIiwzOlwiU3RyZWFtaW5nIFNTUiBpcyBvbmx5IHN1cHBvcnRlZCBpbiBhIE5vZGUuanMgZW52aXJvbm1lbnQ7IFBsZWFzZSBkbyBub3QgdHJ5IHRvIGNhbGwgdGhpcyBtZXRob2QgaW4gdGhlIGJyb3dzZXIuXFxuXFxuXCIsNDpcIlRoZSBgU3R5bGVTaGVldE1hbmFnZXJgIGV4cGVjdHMgYSB2YWxpZCB0YXJnZXQgb3Igc2hlZXQgcHJvcCFcXG5cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgY2xpZW50IGFuZCBpcyB5b3VyIHRhcmdldCBmYWxzeT9cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgc2VydmVyIGFuZCBpcyB0aGUgc2hlZXQgZmFsc3k/XFxuXFxuXCIsNTpcIlRoZSBjbG9uZSBtZXRob2QgY2Fubm90IGJlIHVzZWQgb24gdGhlIGNsaWVudCFcXG5cXG4tIEFyZSB5b3UgcnVubmluZyBpbiBhIGNsaWVudC1saWtlIGVudmlyb25tZW50IG9uIHRoZSBzZXJ2ZXI/XFxuLSBBcmUgeW91IHRyeWluZyB0byBydW4gU1NSIG9uIHRoZSBjbGllbnQ/XFxuXFxuXCIsNjpcIlRyeWluZyB0byBpbnNlcnQgYSBuZXcgc3R5bGUgdGFnLCBidXQgdGhlIGdpdmVuIE5vZGUgaXMgdW5tb3VudGVkIVxcblxcbi0gQXJlIHlvdSB1c2luZyBhIGN1c3RvbSB0YXJnZXQgdGhhdCBpc24ndCBtb3VudGVkP1xcbi0gRG9lcyB5b3VyIGRvY3VtZW50IG5vdCBoYXZlIGEgdmFsaWQgaGVhZCBlbGVtZW50P1xcbi0gSGF2ZSB5b3UgYWNjaWRlbnRhbGx5IHJlbW92ZWQgYSBzdHlsZSB0YWcgbWFudWFsbHk/XFxuXFxuXCIsNzonVGhlbWVQcm92aWRlcjogUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIFwidGhlbWVcIiBwcm9wIGZ1bmN0aW9uLCBlLmcuXFxuXFxuYGBganNcXG50aGVtZT17KCkgPT4gKHt9KX1cXG5gYGBcXG5cXG4nLDg6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHlvdXIgXCJ0aGVtZVwiIHByb3AgYW4gb2JqZWN0LlxcblxcbicsOTpcIk1pc3NpbmcgZG9jdW1lbnQgYDxoZWFkPmBcXG5cXG5cIiwxMDpcIkNhbm5vdCBmaW5kIGEgU3R5bGVTaGVldCBpbnN0YW5jZS4gVXN1YWxseSB0aGlzIGhhcHBlbnMgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGNvcGllcyBvZiBzdHlsZWQtY29tcG9uZW50cyBsb2FkZWQgYXQgb25jZS4gQ2hlY2sgb3V0IHRoaXMgaXNzdWUgZm9yIGhvdyB0byB0cm91Ymxlc2hvb3QgYW5kIGZpeCB0aGUgY29tbW9uIGNhc2VzIHdoZXJlIHRoaXMgc2l0dWF0aW9uIGNhbiBoYXBwZW46IGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9pc3N1ZXMvMTk0MSNpc3N1ZWNvbW1lbnQtNDE3ODYyMDIxXFxuXFxuXCIsMTE6XCJfVGhpcyBlcnJvciB3YXMgcmVwbGFjZWQgd2l0aCBhIGRldi10aW1lIHdhcm5pbmcsIGl0IHdpbGwgYmUgZGVsZXRlZCBmb3IgdjQgZmluYWwuXyBbY3JlYXRlR2xvYmFsU3R5bGVdIHJlY2VpdmVkIGNoaWxkcmVuIHdoaWNoIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBQbGVhc2UgdXNlIHRoZSBjb21wb25lbnQgd2l0aG91dCBwYXNzaW5nIGNoaWxkcmVuIGVsZW1lbnRzLlxcblxcblwiLDEyOlwiSXQgc2VlbXMgeW91IGFyZSBpbnRlcnBvbGF0aW5nIGEga2V5ZnJhbWUgZGVjbGFyYXRpb24gKCVzKSBpbnRvIGFuIHVudGFnZ2VkIHN0cmluZy4gVGhpcyB3YXMgc3VwcG9ydGVkIGluIHN0eWxlZC1jb21wb25lbnRzIHYzLCBidXQgaXMgbm90IGxvbmdlciBzdXBwb3J0ZWQgaW4gdjQgYXMga2V5ZnJhbWVzIGFyZSBub3cgaW5qZWN0ZWQgb24tZGVtYW5kLiBQbGVhc2Ugd3JhcCB5b3VyIHN0cmluZyBpbiB0aGUgY3NzXFxcXGBcXFxcYCBoZWxwZXIgd2hpY2ggZW5zdXJlcyB0aGUgc3R5bGVzIGFyZSBpbmplY3RlZCBjb3JyZWN0bHkuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hcGkjY3NzXFxuXFxuXCIsMTM6XCIlcyBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXFxuXFxuXCIsMTQ6J1RoZW1lUHJvdmlkZXI6IFwidGhlbWVcIiBwcm9wIGlzIHJlcXVpcmVkLlxcblxcbicsMTU6XCJBIHN0eWxpcyBwbHVnaW4gaGFzIGJlZW4gc3VwcGxpZWQgdGhhdCBpcyBub3QgbmFtZWQuIFdlIG5lZWQgYSBuYW1lIGZvciBlYWNoIHBsdWdpbiB0byBiZSBhYmxlIHRvIHByZXZlbnQgc3R5bGluZyBjb2xsaXNpb25zIGJldHdlZW4gZGlmZmVyZW50IHN0eWxpcyBjb25maWd1cmF0aW9ucyB3aXRoaW4gdGhlIHNhbWUgYXBwLiBCZWZvcmUgeW91IHBhc3MgeW91ciBwbHVnaW4gdG8gYDxTdHlsZVNoZWV0TWFuYWdlciBzdHlsaXNQbHVnaW5zPXtbXX0+YCwgcGxlYXNlIG1ha2Ugc3VyZSBlYWNoIHBsdWdpbiBpcyB1bmlxdWVseS1uYW1lZCwgZS5nLlxcblxcbmBgYGpzXFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGltcG9ydGVkUGx1Z2luLCAnbmFtZScsIHsgdmFsdWU6ICdzb21lLXVuaXF1ZS1uYW1lJyB9KTtcXG5gYGBcXG5cXG5cIiwxNjpcIlJlYWNoZWQgdGhlIGxpbWl0IG9mIGhvdyBtYW55IHN0eWxlZCBjb21wb25lbnRzIG1heSBiZSBjcmVhdGVkIGF0IGdyb3VwICVzLlxcbllvdSBtYXkgb25seSBjcmVhdGUgdXAgdG8gMSwwNzMsNzQxLDgyNCBjb21wb25lbnRzLiBJZiB5b3UncmUgY3JlYXRpbmcgY29tcG9uZW50cyBkeW5hbWljYWxseSxcXG5hcyBmb3IgaW5zdGFuY2UgaW4geW91ciByZW5kZXIgbWV0aG9kIHRoZW4geW91IG1heSBiZSBydW5uaW5nIGludG8gdGhpcyBsaW1pdGF0aW9uLlxcblxcblwiLDE3OlwiQ1NTU3R5bGVTaGVldCBjb3VsZCBub3QgYmUgZm91bmQgb24gSFRNTFN0eWxlRWxlbWVudC5cXG5IYXMgc3R5bGVkLWNvbXBvbmVudHMnIHN0eWxlIHRhZyBiZWVuIHVubW91bnRlZCBvciBhbHRlcmVkIGJ5IGFub3RoZXIgc2NyaXB0P1xcblwifTp7fTtmdW5jdGlvbiBEKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTA/dm9pZCAwOmFyZ3VtZW50c1swXSx0PVtdLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rPTEpdC5wdXNoKG48MHx8YXJndW1lbnRzLmxlbmd0aDw9bj92b2lkIDA6YXJndW1lbnRzW25dKTtyZXR1cm4gdC5mb3JFYWNoKChmdW5jdGlvbih0KXtlPWUucmVwbGFjZSgvJVthLXpdLyx0KX0pKSxlfWZ1bmN0aW9uIGooZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3Rocm93XCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVj9uZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZC4gU2VlIGh0dHBzOi8vZ2l0LmlvL0pVSWFFI1wiK2UrXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIrKG4ubGVuZ3RoPjA/XCIgQXJnczogXCIrbi5qb2luKFwiLCBcIik6XCJcIikpOm5ldyBFcnJvcihELmFwcGx5KHZvaWQgMCxbUltlXV0uY29uY2F0KG4pKS50cmltKCkpfXZhciBUPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLmdyb3VwU2l6ZXM9bmV3IFVpbnQzMkFycmF5KDUxMiksdGhpcy5sZW5ndGg9NTEyLHRoaXMudGFnPWV9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5kZXhPZkdyb3VwPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtuPGU7bisrKXQrPXRoaXMuZ3JvdXBTaXplc1tuXTtyZXR1cm4gdH0sdC5pbnNlcnRSdWxlcz1mdW5jdGlvbihlLHQpe2lmKGU+PXRoaXMuZ3JvdXBTaXplcy5sZW5ndGgpe2Zvcih2YXIgbj10aGlzLmdyb3VwU2l6ZXMscj1uLmxlbmd0aCxvPXI7ZT49bzspKG88PD0xKTwwJiZqKDE2LFwiXCIrZSk7dGhpcy5ncm91cFNpemVzPW5ldyBVaW50MzJBcnJheShvKSx0aGlzLmdyb3VwU2l6ZXMuc2V0KG4pLHRoaXMubGVuZ3RoPW87Zm9yKHZhciBzPXI7czxvO3MrKyl0aGlzLmdyb3VwU2l6ZXNbc109MH1mb3IodmFyIGk9dGhpcy5pbmRleE9mR3JvdXAoZSsxKSxhPTAsYz10Lmxlbmd0aDthPGM7YSsrKXRoaXMudGFnLmluc2VydFJ1bGUoaSx0W2FdKSYmKHRoaXMuZ3JvdXBTaXplc1tlXSsrLGkrKyl9LHQuY2xlYXJHcm91cD1mdW5jdGlvbihlKXtpZihlPHRoaXMubGVuZ3RoKXt2YXIgdD10aGlzLmdyb3VwU2l6ZXNbZV0sbj10aGlzLmluZGV4T2ZHcm91cChlKSxyPW4rdDt0aGlzLmdyb3VwU2l6ZXNbZV09MDtmb3IodmFyIG89bjtvPHI7bysrKXRoaXMudGFnLmRlbGV0ZVJ1bGUobil9fSx0LmdldEdyb3VwPWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7aWYoZT49dGhpcy5sZW5ndGh8fDA9PT10aGlzLmdyb3VwU2l6ZXNbZV0pcmV0dXJuIHQ7Zm9yKHZhciBuPXRoaXMuZ3JvdXBTaXplc1tlXSxyPXRoaXMuaW5kZXhPZkdyb3VwKGUpLG89cituLHM9cjtzPG87cysrKXQrPXRoaXMudGFnLmdldFJ1bGUocykrXCIvKiFzYyovXFxuXCI7cmV0dXJuIHR9LGV9KCksaz1uZXcgTWFwLHg9bmV3IE1hcCxWPTEsQj1mdW5jdGlvbihlKXtpZihrLmhhcyhlKSlyZXR1cm4gay5nZXQoZSk7Zm9yKDt4LmhhcyhWKTspVisrO3ZhciB0PVYrKztyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoKDB8dCk8MHx8dD4xPDwzMCkmJmooMTYsXCJcIit0KSxrLnNldChlLHQpLHguc2V0KHQsZSksdH0sTT1mdW5jdGlvbihlKXtyZXR1cm4geC5nZXQoZSl9LHo9ZnVuY3Rpb24oZSx0KXtrLnNldChlLHQpLHguc2V0KHQsZSl9LEw9XCJzdHlsZVtcIitBKyddW2RhdGEtc3R5bGVkLXZlcnNpb249XCI1LjIuMVwiXScsRz1uZXcgUmVnRXhwKFwiXlwiK0ErJ1xcXFwuZyhcXFxcZCspXFxcXFtpZD1cIihbXFxcXHdcXFxcZC1dKylcIlxcXFxdLio/XCIoW15cIl0qKScpLEY9ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcixvPW4uc3BsaXQoXCIsXCIpLHM9MCxpPW8ubGVuZ3RoO3M8aTtzKyspKHI9b1tzXSkmJmUucmVnaXN0ZXJOYW1lKHQscil9LFk9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dC5pbm5lckhUTUwuc3BsaXQoXCIvKiFzYyovXFxuXCIpLHI9W10sbz0wLHM9bi5sZW5ndGg7bzxzO28rKyl7dmFyIGk9bltvXS50cmltKCk7aWYoaSl7dmFyIGE9aS5tYXRjaChHKTtpZihhKXt2YXIgYz0wfHBhcnNlSW50KGFbMV0sMTApLHU9YVsyXTswIT09YyYmKHoodSxjKSxGKGUsdSxhWzNdKSxlLmdldFRhZygpLmluc2VydFJ1bGVzKGMscikpLHIubGVuZ3RoPTB9ZWxzZSByLnB1c2goaSl9fX0scT1mdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsfSxIPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmhlYWQsbj1lfHx0LHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLG89ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY2hpbGROb2RlcyxuPXQubGVuZ3RoO24+PTA7bi0tKXt2YXIgcj10W25dO2lmKHImJjE9PT1yLm5vZGVUeXBlJiZyLmhhc0F0dHJpYnV0ZShBKSlyZXR1cm4gcn19KG4pLHM9dm9pZCAwIT09bz9vLm5leHRTaWJsaW5nOm51bGw7ci5zZXRBdHRyaWJ1dGUoQSxcImFjdGl2ZVwiKSxyLnNldEF0dHJpYnV0ZShcImRhdGEtc3R5bGVkLXZlcnNpb25cIixcIjUuMi4xXCIpO3ZhciBpPXEoKTtyZXR1cm4gaSYmci5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLGkpLG4uaW5zZXJ0QmVmb3JlKHIscykscn0sJD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5lbGVtZW50PUgoZSk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSksdGhpcy5zaGVldD1mdW5jdGlvbihlKXtpZihlLnNoZWV0KXJldHVybiBlLnNoZWV0O2Zvcih2YXIgdD1kb2N1bWVudC5zdHlsZVNoZWV0cyxuPTAscj10Lmxlbmd0aDtuPHI7bisrKXt2YXIgbz10W25dO2lmKG8ub3duZXJOb2RlPT09ZSlyZXR1cm4gb31qKDE3KX0odCksdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7dHJ5e3JldHVybiB0aGlzLnNoZWV0Lmluc2VydFJ1bGUodCxlKSx0aGlzLmxlbmd0aCsrLCEwfWNhdGNoKGUpe3JldHVybiExfX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuc2hlZXQuZGVsZXRlUnVsZShlKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5zaGVldC5jc3NSdWxlc1tlXTtyZXR1cm4gdm9pZCAwIT09dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQuY3NzVGV4dD90LmNzc1RleHQ6XCJcIn0sZX0oKSxXPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzLmVsZW1lbnQ9SChlKTt0aGlzLm5vZGVzPXQuY2hpbGROb2Rlcyx0aGlzLmxlbmd0aD0wfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0Lmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXtpZihlPD10aGlzLmxlbmd0aCYmZT49MCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkscj10aGlzLm5vZGVzW2VdO3JldHVybiB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKG4scnx8bnVsbCksdGhpcy5sZW5ndGgrKywhMH1yZXR1cm4hMX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGVzW2VdKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ub2Rlc1tlXS50ZXh0Q29udGVudDpcIlwifSxlfSgpLFU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMucnVsZXM9W10sdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8PXRoaXMubGVuZ3RoJiYodGhpcy5ydWxlcy5zcGxpY2UoZSwwLHQpLHRoaXMubGVuZ3RoKyssITApfSx0LmRlbGV0ZVJ1bGU9ZnVuY3Rpb24oZSl7dGhpcy5ydWxlcy5zcGxpY2UoZSwxKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ydWxlc1tlXTpcIlwifSxlfSgpLEo9SSxYPXtpc1NlcnZlcjohSSx1c2VDU1NPTUluamVjdGlvbjohUH0sWj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4pe3ZvaWQgMD09PWUmJihlPUUpLHZvaWQgMD09PXQmJih0PXt9KSx0aGlzLm9wdGlvbnM9dih7fSxYLHt9LGUpLHRoaXMuZ3M9dCx0aGlzLm5hbWVzPW5ldyBNYXAobiksIXRoaXMub3B0aW9ucy5pc1NlcnZlciYmSSYmSiYmKEo9ITEsZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoTCksbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIG89dFtuXTtvJiZcImFjdGl2ZVwiIT09by5nZXRBdHRyaWJ1dGUoQSkmJihZKGUsbyksby5wYXJlbnROb2RlJiZvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobykpfX0odGhpcykpfWUucmVnaXN0ZXJJZD1mdW5jdGlvbihlKXtyZXR1cm4gQihlKX07dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucz1mdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj0hMCksbmV3IGUodih7fSx0aGlzLm9wdGlvbnMse30sdCksdGhpcy5ncyxuJiZ0aGlzLm5hbWVzfHx2b2lkIDApfSx0LmFsbG9jYXRlR1NJbnN0YW5jZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nc1tlXT0odGhpcy5nc1tlXXx8MCkrMX0sdC5nZXRUYWc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50YWd8fCh0aGlzLnRhZz0obj0odD10aGlzLm9wdGlvbnMpLmlzU2VydmVyLHI9dC51c2VDU1NPTUluamVjdGlvbixvPXQudGFyZ2V0LGU9bj9uZXcgVShvKTpyP25ldyAkKG8pOm5ldyBXKG8pLG5ldyBUKGUpKSk7dmFyIGUsdCxuLHIsb30sdC5oYXNOYW1lRm9ySWQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmhhcyh0KX0sdC5yZWdpc3Rlck5hbWU9ZnVuY3Rpb24oZSx0KXtpZihCKGUpLHRoaXMubmFtZXMuaGFzKGUpKXRoaXMubmFtZXMuZ2V0KGUpLmFkZCh0KTtlbHNle3ZhciBuPW5ldyBTZXQ7bi5hZGQodCksdGhpcy5uYW1lcy5zZXQoZSxuKX19LHQuaW5zZXJ0UnVsZXM9ZnVuY3Rpb24oZSx0LG4pe3RoaXMucmVnaXN0ZXJOYW1lKGUsdCksdGhpcy5nZXRUYWcoKS5pbnNlcnRSdWxlcyhCKGUpLG4pfSx0LmNsZWFyTmFtZXM9ZnVuY3Rpb24oZSl7dGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmNsZWFyKCl9LHQuY2xlYXJSdWxlcz1mdW5jdGlvbihlKXt0aGlzLmdldFRhZygpLmNsZWFyR3JvdXAoQihlKSksdGhpcy5jbGVhck5hbWVzKGUpfSx0LmNsZWFyVGFnPWZ1bmN0aW9uKCl7dGhpcy50YWc9dm9pZCAwfSx0LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmdldFRhZygpLG49dC5sZW5ndGgscj1cIlwiLG89MDtvPG47bysrKXt2YXIgcz1NKG8pO2lmKHZvaWQgMCE9PXMpe3ZhciBpPWUubmFtZXMuZ2V0KHMpLGE9dC5nZXRHcm91cChvKTtpZih2b2lkIDAhPT1pJiYwIT09YS5sZW5ndGgpe3ZhciBjPUErXCIuZ1wiK28rJ1tpZD1cIicrcysnXCJdJyx1PVwiXCI7dm9pZCAwIT09aSYmaS5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmxlbmd0aD4wJiYodSs9ZStcIixcIil9KSkscis9XCJcIithK2MrJ3tjb250ZW50OlwiJyt1KydcIn0vKiFzYyovXFxuJ319fXJldHVybiByfSh0aGlzKX0sZX0oKSxLPS8oYSkoZCkvZ2ksUT1mdW5jdGlvbihlKXtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlKyhlPjI1PzM5Ojk3KSl9O2Z1bmN0aW9uIGVlKGUpe3ZhciB0LG49XCJcIjtmb3IodD1NYXRoLmFicyhlKTt0PjUyO3Q9dC81MnwwKW49USh0JTUyKStuO3JldHVybihRKHQlNTIpK24pLnJlcGxhY2UoSyxcIiQxLSQyXCIpfXZhciB0ZT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj10Lmxlbmd0aDtuOyllPTMzKmVedC5jaGFyQ29kZUF0KC0tbik7cmV0dXJuIGV9LG5lPWZ1bmN0aW9uKGUpe3JldHVybiB0ZSg1MzgxLGUpfTtmdW5jdGlvbiByZShlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrPTEpe3ZhciBuPWVbdF07aWYoYihuKSYmIU4obikpcmV0dXJuITF9cmV0dXJuITB9dmFyIG9lPW5lKFwiNS4yLjFcIiksc2U9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt0aGlzLnJ1bGVzPWUsdGhpcy5zdGF0aWNSdWxlc0lkPVwiXCIsdGhpcy5pc1N0YXRpYz1cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodm9pZCAwPT09bnx8bi5pc1N0YXRpYykmJnJlKGUpLHRoaXMuY29tcG9uZW50SWQ9dCx0aGlzLmJhc2VIYXNoPXRlKG9lLHQpLHRoaXMuYmFzZVN0eWxlPW4sWi5yZWdpc3RlcklkKHQpfXJldHVybiBlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcz1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcy5jb21wb25lbnRJZCxvPVtdO2lmKHRoaXMuYmFzZVN0eWxlJiZvLnB1c2godGhpcy5iYXNlU3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoZSx0LG4pKSx0aGlzLmlzU3RhdGljJiYhbi5oYXNoKWlmKHRoaXMuc3RhdGljUnVsZXNJZCYmdC5oYXNOYW1lRm9ySWQocix0aGlzLnN0YXRpY1J1bGVzSWQpKW8ucHVzaCh0aGlzLnN0YXRpY1J1bGVzSWQpO2Vsc2V7dmFyIHM9TmUodGhpcy5ydWxlcyxlLHQsbikuam9pbihcIlwiKSxpPWVlKHRlKHRoaXMuYmFzZUhhc2gscy5sZW5ndGgpPj4+MCk7aWYoIXQuaGFzTmFtZUZvcklkKHIsaSkpe3ZhciBhPW4ocyxcIi5cIitpLHZvaWQgMCxyKTt0Lmluc2VydFJ1bGVzKHIsaSxhKX1vLnB1c2goaSksdGhpcy5zdGF0aWNSdWxlc0lkPWl9ZWxzZXtmb3IodmFyIGM9dGhpcy5ydWxlcy5sZW5ndGgsdT10ZSh0aGlzLmJhc2VIYXNoLG4uaGFzaCksbD1cIlwiLGQ9MDtkPGM7ZCsrKXt2YXIgaD10aGlzLnJ1bGVzW2RdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBoKWwrPWgsXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKHU9dGUodSxoK2QpKTtlbHNlIGlmKGgpe3ZhciBwPU5lKGgsZSx0LG4pLGY9QXJyYXkuaXNBcnJheShwKT9wLmpvaW4oXCJcIik6cDt1PXRlKHUsZitkKSxsKz1mfX1pZihsKXt2YXIgbT1lZSh1Pj4+MCk7aWYoIXQuaGFzTmFtZUZvcklkKHIsbSkpe3ZhciB5PW4obCxcIi5cIittLHZvaWQgMCxyKTt0Lmluc2VydFJ1bGVzKHIsbSx5KX1vLnB1c2gobSl9fXJldHVybiBvLmpvaW4oXCIgXCIpfSxlfSgpLGllPS9eXFxzKlxcL1xcLy4qJC9nbSxhZT1bXCI6XCIsXCJbXCIsXCIuXCIsXCIjXCJdO2Z1bmN0aW9uIGNlKGUpe3ZhciB0LG4scixvLHM9dm9pZCAwPT09ZT9FOmUsaT1zLm9wdGlvbnMsYT12b2lkIDA9PT1pP0U6aSxjPXMucGx1Z2lucyx1PXZvaWQgMD09PWM/dzpjLGw9bmV3IHAoYSksZD1bXSxoPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQodCl7aWYodCl0cnl7ZSh0K1wifVwiKX1jYXRjaChlKXt9fXJldHVybiBmdW5jdGlvbihuLHIsbyxzLGksYSxjLHUsbCxkKXtzd2l0Y2gobil7Y2FzZSAxOmlmKDA9PT1sJiY2ND09PXIuY2hhckNvZGVBdCgwKSlyZXR1cm4gZShyK1wiO1wiKSxcIlwiO2JyZWFrO2Nhc2UgMjppZigwPT09dSlyZXR1cm4gcitcIi8qfCovXCI7YnJlYWs7Y2FzZSAzOnN3aXRjaCh1KXtjYXNlIDEwMjpjYXNlIDExMjpyZXR1cm4gZShvWzBdK3IpLFwiXCI7ZGVmYXVsdDpyZXR1cm4gcisoMD09PWQ/XCIvKnwqL1wiOlwiXCIpfWNhc2UtMjpyLnNwbGl0KFwiLyp8Ki99XCIpLmZvckVhY2godCl9fX0oKGZ1bmN0aW9uKGUpe2QucHVzaChlKX0pKSxmPWZ1bmN0aW9uKGUscixzKXtyZXR1cm4gMD09PXImJmFlLmluY2x1ZGVzKHNbbi5sZW5ndGhdKXx8cy5tYXRjaChvKT9lOlwiLlwiK3R9O2Z1bmN0aW9uIG0oZSxzLGksYSl7dm9pZCAwPT09YSYmKGE9XCImXCIpO3ZhciBjPWUucmVwbGFjZShpZSxcIlwiKSx1PXMmJmk/aStcIiBcIitzK1wiIHsgXCIrYytcIiB9XCI6YztyZXR1cm4gdD1hLG49cyxyPW5ldyBSZWdFeHAoXCJcXFxcXCIrbitcIlxcXFxiXCIsXCJnXCIpLG89bmV3IFJlZ0V4cChcIihcXFxcXCIrbitcIlxcXFxiKXsyLH1cIiksbChpfHwhcz9cIlwiOnMsdSl9cmV0dXJuIGwudXNlKFtdLmNvbmNhdCh1LFtmdW5jdGlvbihlLHQsbyl7Mj09PWUmJm8ubGVuZ3RoJiZvWzBdLmxhc3RJbmRleE9mKG4pPjAmJihvWzBdPW9bMF0ucmVwbGFjZShyLGYpKX0saCxmdW5jdGlvbihlKXtpZigtMj09PWUpe3ZhciB0PWQ7cmV0dXJuIGQ9W10sdH19XSkpLG0uaGFzaD11Lmxlbmd0aD91LnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5uYW1lfHxqKDE1KSx0ZShlLHQubmFtZSl9KSw1MzgxKS50b1N0cmluZygpOlwiXCIsbX12YXIgdWU9ci5jcmVhdGVDb250ZXh0KCksbGU9dWUuQ29uc3VtZXIsZGU9ci5jcmVhdGVDb250ZXh0KCksaGU9KGRlLkNvbnN1bWVyLG5ldyBaKSxwZT1jZSgpO2Z1bmN0aW9uIGZlKCl7cmV0dXJuIHModWUpfHxoZX1mdW5jdGlvbiBtZSgpe3JldHVybiBzKGRlKXx8cGV9ZnVuY3Rpb24geWUoZSl7dmFyIHQ9byhlLnN0eWxpc1BsdWdpbnMpLG49dFswXSxzPXRbMV0sYz1mZSgpLHU9aSgoZnVuY3Rpb24oKXt2YXIgdD1jO3JldHVybiBlLnNoZWV0P3Q9ZS5zaGVldDplLnRhcmdldCYmKHQ9dC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHt0YXJnZXQ6ZS50YXJnZXR9LCExKSksZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24mJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dXNlQ1NTT01JbmplY3Rpb246ITF9KSksdH0pLFtlLmRpc2FibGVDU1NPTUluamVjdGlvbixlLnNoZWV0LGUudGFyZ2V0XSksbD1pKChmdW5jdGlvbigpe3JldHVybiBjZSh7b3B0aW9uczp7cHJlZml4OiFlLmRpc2FibGVWZW5kb3JQcmVmaXhlc30scGx1Z2luczpufSl9KSxbZS5kaXNhYmxlVmVuZG9yUHJlZml4ZXMsbl0pO3JldHVybiBhKChmdW5jdGlvbigpe2gobixlLnN0eWxpc1BsdWdpbnMpfHxzKGUuc3R5bGlzUGx1Z2lucyl9KSxbZS5zdHlsaXNQbHVnaW5zXSksci5jcmVhdGVFbGVtZW50KHVlLlByb3ZpZGVyLHt2YWx1ZTp1fSxyLmNyZWF0ZUVsZW1lbnQoZGUuUHJvdmlkZXIse3ZhbHVlOmx9LFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ci5DaGlsZHJlbi5vbmx5KGUuY2hpbGRyZW4pOmUuY2hpbGRyZW4pKX12YXIgdmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dmFyIG49dGhpczt0aGlzLmluamVjdD1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PXBlKTt2YXIgcj1uLm5hbWUrdC5oYXNoO2UuaGFzTmFtZUZvcklkKG4uaWQscil8fGUuaW5zZXJ0UnVsZXMobi5pZCxyLHQobi5ydWxlcyxyLFwiQGtleWZyYW1lc1wiKSl9LHRoaXMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gaigxMixTdHJpbmcobi5uYW1lKSl9LHRoaXMubmFtZT1lLHRoaXMuaWQ9XCJzYy1rZXlmcmFtZXMtXCIrZSx0aGlzLnJ1bGVzPXR9cmV0dXJuIGUucHJvdG90eXBlLmdldE5hbWU9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXBlKSx0aGlzLm5hbWUrZS5oYXNofSxlfSgpLGdlPS8oW0EtWl0pLyxTZT0vKFtBLVpdKS9nLHdlPS9ebXMtLyxFZT1mdW5jdGlvbihlKXtyZXR1cm5cIi1cIitlLnRvTG93ZXJDYXNlKCl9O2Z1bmN0aW9uIGJlKGUpe3JldHVybiBnZS50ZXN0KGUpP2UucmVwbGFjZShTZSxFZSkucmVwbGFjZSh3ZSxcIi1tcy1cIik6ZX12YXIgX2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWV8fCExPT09ZXx8XCJcIj09PWV9O2Z1bmN0aW9uIE5lKGUsbixyLG8pe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgcyxpPVtdLGE9MCxjPWUubGVuZ3RoO2E8YzthKz0xKVwiXCIhPT0ocz1OZShlW2FdLG4scixvKSkmJihBcnJheS5pc0FycmF5KHMpP2kucHVzaC5hcHBseShpLHMpOmkucHVzaChzKSk7cmV0dXJuIGl9aWYoX2UoZSkpcmV0dXJuXCJcIjtpZihOKGUpKXJldHVyblwiLlwiK2Uuc3R5bGVkQ29tcG9uZW50SWQ7aWYoYihlKSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YobD1lKXx8bC5wcm90b3R5cGUmJmwucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR8fCFuKXJldHVybiBlO3ZhciB1PWUobik7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdCh1KSYmY29uc29sZS53YXJuKF8oZSkrXCIgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlwiKSxOZSh1LG4scixvKX12YXIgbDtyZXR1cm4gZSBpbnN0YW5jZW9mIHZlP3I/KGUuaW5qZWN0KHIsbyksZS5nZXROYW1lKG8pKTplOlMoZSk/ZnVuY3Rpb24gZSh0LG4pe3ZhciByLG8scz1bXTtmb3IodmFyIGkgaW4gdCl0Lmhhc093blByb3BlcnR5KGkpJiYhX2UodFtpXSkmJihTKHRbaV0pP3MucHVzaC5hcHBseShzLGUodFtpXSxpKSk6Yih0W2ldKT9zLnB1c2goYmUoaSkrXCI6XCIsdFtpXSxcIjtcIik6cy5wdXNoKGJlKGkpK1wiOiBcIisocj1pLG51bGw9PShvPXRbaV0pfHxcImJvb2xlYW5cIj09dHlwZW9mIG98fFwiXCI9PT1vP1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIG98fDA9PT1vfHxyIGluIGY/U3RyaW5nKG8pLnRyaW0oKTpvK1wicHhcIikrXCI7XCIpKTtyZXR1cm4gbj9bbitcIiB7XCJdLmNvbmNhdChzLFtcIn1cIl0pOnN9KGUpOmUudG9TdHJpbmcoKX1mdW5jdGlvbiBBZShlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKW5bci0xXT1hcmd1bWVudHNbcl07cmV0dXJuIGIoZSl8fFMoZSk/TmUoZyh3LFtlXS5jb25jYXQobikpKTowPT09bi5sZW5ndGgmJjE9PT1lLmxlbmd0aCYmXCJzdHJpbmdcIj09dHlwZW9mIGVbMF0/ZTpOZShnKGUsbikpfXZhciBDZT0vaW52YWxpZCBob29rIGNhbGwvaSxJZT1uZXcgU2V0LFBlPWZ1bmN0aW9uKGUsdCl7aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVil7dmFyIG49XCJUaGUgY29tcG9uZW50IFwiK2UrKHQ/JyB3aXRoIHRoZSBpZCBvZiBcIicrdCsnXCInOlwiXCIpK1wiIGhhcyBiZWVuIGNyZWF0ZWQgZHluYW1pY2FsbHkuXFxuWW91IG1heSBzZWUgdGhpcyB3YXJuaW5nIGJlY2F1c2UgeW91J3ZlIGNhbGxlZCBzdHlsZWQgaW5zaWRlIGFub3RoZXIgY29tcG9uZW50LlxcblRvIHJlc29sdmUgdGhpcyBvbmx5IGNyZWF0ZSBuZXcgU3R5bGVkQ29tcG9uZW50cyBvdXRzaWRlIG9mIGFueSByZW5kZXIgbWV0aG9kIGFuZCBmdW5jdGlvbiBjb21wb25lbnQuXCI7dHJ5e2MoKSxJZS5oYXMobil8fChjb25zb2xlLndhcm4obiksSWUuYWRkKG4pKX1jYXRjaChlKXtDZS50ZXN0KGUubWVzc2FnZSkmJkllLmRlbGV0ZShuKX19fSxPZT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPUUpLGUudGhlbWUhPT1uLnRoZW1lJiZlLnRoZW1lfHx0fHxuLnRoZW1lfSxSZT0vWyFcIiMkJSYnKCkqKywuLzo7PD0+P0BbXFxcXFxcXV5ge3x9fi1dKy9nLERlPS8oXi18LSQpL2c7ZnVuY3Rpb24gamUoZSl7cmV0dXJuIGUucmVwbGFjZShSZSxcIi1cIikucmVwbGFjZShEZSxcIlwiKX12YXIgVGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGVlKG5lKGUpPj4+MCl9O2Z1bmN0aW9uIGtlKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYoXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8ZS5jaGFyQXQoMCk9PT1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpKX12YXIgeGU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZXx8XCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPT1lJiYhQXJyYXkuaXNBcnJheShlKX0sVmU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJfX3Byb3RvX19cIiE9PWUmJlwiY29uc3RydWN0b3JcIiE9PWUmJlwicHJvdG90eXBlXCIhPT1lfTtmdW5jdGlvbiBCZShlLHQsbil7dmFyIHI9ZVtuXTt4ZSh0KSYmeGUocik/TWUocix0KTplW25dPXR9ZnVuY3Rpb24gTWUoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO2Zvcih2YXIgbz0wLHM9bjtvPHMubGVuZ3RoO28rKyl7dmFyIGk9c1tvXTtpZih4ZShpKSlmb3IodmFyIGEgaW4gaSlWZShhKSYmQmUoZSxpW2FdLGEpfXJldHVybiBlfXZhciB6ZT1yLmNyZWF0ZUNvbnRleHQoKSxMZT16ZS5Db25zdW1lcjtmdW5jdGlvbiBHZShlKXt2YXIgdD1zKHplKSxuPWkoKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuIGooMTQpO2lmKGIoZSkpe3ZhciBuPWUodCk7cmV0dXJuXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8bnVsbCE9PW4mJiFBcnJheS5pc0FycmF5KG4pJiZcIm9iamVjdFwiPT10eXBlb2Ygbj9uOmooNyl9cmV0dXJuIEFycmF5LmlzQXJyYXkoZSl8fFwib2JqZWN0XCIhPXR5cGVvZiBlP2ooOCk6dD92KHt9LHQse30sZSk6ZX0oZS50aGVtZSx0KX0pLFtlLnRoZW1lLHRdKTtyZXR1cm4gZS5jaGlsZHJlbj9yLmNyZWF0ZUVsZW1lbnQoemUuUHJvdmlkZXIse3ZhbHVlOm59LGUuY2hpbGRyZW4pOm51bGx9dmFyIEZlPXt9O2Z1bmN0aW9uIFllKGUsdCxuKXt2YXIgbz1OKGUpLGk9IWtlKGUpLGE9dC5hdHRycyxjPXZvaWQgMD09PWE/dzphLGQ9dC5jb21wb25lbnRJZCxoPXZvaWQgMD09PWQ/ZnVuY3Rpb24oZSx0KXt2YXIgbj1cInN0cmluZ1wiIT10eXBlb2YgZT9cInNjXCI6amUoZSk7RmVbbl09KEZlW25dfHwwKSsxO3ZhciByPW4rXCItXCIrVGUoXCI1LjIuMVwiK24rRmVbbl0pO3JldHVybiB0P3QrXCItXCIrcjpyfSh0LmRpc3BsYXlOYW1lLHQucGFyZW50Q29tcG9uZW50SWQpOmQscD10LmRpc3BsYXlOYW1lLGY9dm9pZCAwPT09cD9mdW5jdGlvbihlKXtyZXR1cm4ga2UoZSk/XCJzdHlsZWQuXCIrZTpcIlN0eWxlZChcIitfKGUpK1wiKVwifShlKTpwLGc9dC5kaXNwbGF5TmFtZSYmdC5jb21wb25lbnRJZD9qZSh0LmRpc3BsYXlOYW1lKStcIi1cIit0LmNvbXBvbmVudElkOnQuY29tcG9uZW50SWR8fGgsUz1vJiZlLmF0dHJzP0FycmF5LnByb3RvdHlwZS5jb25jYXQoZS5hdHRycyxjKS5maWx0ZXIoQm9vbGVhbik6YyxBPXQuc2hvdWxkRm9yd2FyZFByb3A7byYmZS5zaG91bGRGb3J3YXJkUHJvcCYmKEE9dC5zaG91bGRGb3J3YXJkUHJvcD9mdW5jdGlvbihuLHIpe3JldHVybiBlLnNob3VsZEZvcndhcmRQcm9wKG4scikmJnQuc2hvdWxkRm9yd2FyZFByb3AobixyKX06ZS5zaG91bGRGb3J3YXJkUHJvcCk7dmFyIEMsST1uZXcgc2UobixnLG8/ZS5jb21wb25lbnRTdHlsZTp2b2lkIDApLFA9SS5pc1N0YXRpYyYmMD09PWMubGVuZ3RoLE89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSx0LG4scil7dmFyIG89ZS5hdHRycyxpPWUuY29tcG9uZW50U3R5bGUsYT1lLmRlZmF1bHRQcm9wcyxjPWUuZm9sZGVkQ29tcG9uZW50SWRzLGQ9ZS5zaG91bGRGb3J3YXJkUHJvcCxoPWUuc3R5bGVkQ29tcG9uZW50SWQscD1lLnRhcmdldDtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZsKGgpO3ZhciBmPWZ1bmN0aW9uKGUsdCxuKXt2b2lkIDA9PT1lJiYoZT1FKTt2YXIgcj12KHt9LHQse3RoZW1lOmV9KSxvPXt9O3JldHVybiBuLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0LG4scyxpPWU7Zm9yKHQgaW4gYihpKSYmKGk9aShyKSksaSlyW3RdPW9bdF09XCJjbGFzc05hbWVcIj09PXQ/KG49b1t0XSxzPWlbdF0sbiYmcz9uK1wiIFwiK3M6bnx8cyk6aVt0XX0pKSxbcixvXX0oT2UodCxzKHplKSxhKXx8RSx0LG8pLHk9ZlswXSxnPWZbMV0sUz1mdW5jdGlvbihlLHQsbixyKXt2YXIgbz1mZSgpLHM9bWUoKSxpPXQ/ZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhFLG8scyk6ZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhuLG8scyk7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbChpKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYhdCYmciYmcihpKSxpfShpLHIseSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP2Uud2FyblRvb01hbnlDbGFzc2VzOnZvaWQgMCksdz1uLF89Zy4kYXN8fHQuJGFzfHxnLmFzfHx0LmFzfHxwLE49a2UoXyksQT1nIT09dD92KHt9LHQse30sZyk6dCxDPXt9O2Zvcih2YXIgSSBpbiBBKVwiJFwiIT09SVswXSYmXCJhc1wiIT09SSYmKFwiZm9yd2FyZGVkQXNcIj09PUk/Qy5hcz1BW0ldOihkP2QoSSxtKTohTnx8bShJKSkmJihDW0ldPUFbSV0pKTtyZXR1cm4gdC5zdHlsZSYmZy5zdHlsZSE9PXQuc3R5bGUmJihDLnN0eWxlPXYoe30sdC5zdHlsZSx7fSxnLnN0eWxlKSksQy5jbGFzc05hbWU9QXJyYXkucHJvdG90eXBlLmNvbmNhdChjLGgsUyE9PWg/UzpudWxsLHQuY2xhc3NOYW1lLGcuY2xhc3NOYW1lKS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIiksQy5yZWY9dyx1KF8sQyl9KEMsZSx0LFApfTtyZXR1cm4gTy5kaXNwbGF5TmFtZT1mLChDPXIuZm9yd2FyZFJlZihPKSkuYXR0cnM9UyxDLmNvbXBvbmVudFN0eWxlPUksQy5kaXNwbGF5TmFtZT1mLEMuc2hvdWxkRm9yd2FyZFByb3A9QSxDLmZvbGRlZENvbXBvbmVudElkcz1vP0FycmF5LnByb3RvdHlwZS5jb25jYXQoZS5mb2xkZWRDb21wb25lbnRJZHMsZS5zdHlsZWRDb21wb25lbnRJZCk6dyxDLnN0eWxlZENvbXBvbmVudElkPWcsQy50YXJnZXQ9bz9lLnRhcmdldDplLEMud2l0aENvbXBvbmVudD1mdW5jdGlvbihlKXt2YXIgcj10LmNvbXBvbmVudElkLG89ZnVuY3Rpb24oZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciBuLHIsbz17fSxzPU9iamVjdC5rZXlzKGUpO2ZvcihyPTA7cjxzLmxlbmd0aDtyKyspbj1zW3JdLHQuaW5kZXhPZihuKT49MHx8KG9bbl09ZVtuXSk7cmV0dXJuIG99KHQsW1wiY29tcG9uZW50SWRcIl0pLHM9ciYmcitcIi1cIisoa2UoZSk/ZTpqZShfKGUpKSk7cmV0dXJuIFllKGUsdih7fSxvLHthdHRyczpTLGNvbXBvbmVudElkOnN9KSxuKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KEMsXCJkZWZhdWx0UHJvcHNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2ZvbGRlZERlZmF1bHRQcm9wc30sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuX2ZvbGRlZERlZmF1bHRQcm9wcz1vP01lKHt9LGUuZGVmYXVsdFByb3BzLHQpOnR9fSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKFBlKGYsZyksQy53YXJuVG9vTWFueUNsYXNzZXM9ZnVuY3Rpb24oZSx0KXt2YXIgbj17fSxyPSExO3JldHVybiBmdW5jdGlvbihvKXtpZighciYmKG5bb109ITAsT2JqZWN0LmtleXMobikubGVuZ3RoPj0yMDApKXt2YXIgcz10Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiO2NvbnNvbGUud2FybihcIk92ZXIgMjAwIGNsYXNzZXMgd2VyZSBnZW5lcmF0ZWQgZm9yIGNvbXBvbmVudCBcIitlK3MrXCIuXFxuQ29uc2lkZXIgdXNpbmcgdGhlIGF0dHJzIG1ldGhvZCwgdG9nZXRoZXIgd2l0aCBhIHN0eWxlIG9iamVjdCBmb3IgZnJlcXVlbnRseSBjaGFuZ2VkIHN0eWxlcy5cXG5FeGFtcGxlOlxcbiAgY29uc3QgQ29tcG9uZW50ID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xcbiAgICBzdHlsZToge1xcbiAgICAgIGJhY2tncm91bmQ6IHByb3BzLmJhY2tncm91bmQsXFxuICAgIH0sXFxuICB9KSlgd2lkdGg6IDEwMCU7YFxcblxcbiAgPENvbXBvbmVudCAvPlwiKSxyPSEwLG49e319fX0oZixnKSksQy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiLlwiK0Muc3R5bGVkQ29tcG9uZW50SWR9LGkmJnkoQyxlLHthdHRyczohMCxjb21wb25lbnRTdHlsZTohMCxkaXNwbGF5TmFtZTohMCxmb2xkZWRDb21wb25lbnRJZHM6ITAsc2hvdWxkRm9yd2FyZFByb3A6ITAsc3R5bGVkQ29tcG9uZW50SWQ6ITAsdGFyZ2V0OiEwLHdpdGhDb21wb25lbnQ6ITB9KSxDfXZhciBxZT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24gZSh0LHIsbyl7aWYodm9pZCAwPT09byYmKG89RSksIW4ocikpcmV0dXJuIGooMSxTdHJpbmcocikpO3ZhciBzPWZ1bmN0aW9uKCl7cmV0dXJuIHQocixvLEFlLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpKX07cmV0dXJuIHMud2l0aENvbmZpZz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHt9LG4pKX0scy5hdHRycz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHthdHRyczpBcnJheS5wcm90b3R5cGUuY29uY2F0KG8uYXR0cnMsbikuZmlsdGVyKEJvb2xlYW4pfSkpfSxzfShZZSxlKX07W1wiYVwiLFwiYWJiclwiLFwiYWRkcmVzc1wiLFwiYXJlYVwiLFwiYXJ0aWNsZVwiLFwiYXNpZGVcIixcImF1ZGlvXCIsXCJiXCIsXCJiYXNlXCIsXCJiZGlcIixcImJkb1wiLFwiYmlnXCIsXCJibG9ja3F1b3RlXCIsXCJib2R5XCIsXCJiclwiLFwiYnV0dG9uXCIsXCJjYW52YXNcIixcImNhcHRpb25cIixcImNpdGVcIixcImNvZGVcIixcImNvbFwiLFwiY29sZ3JvdXBcIixcImRhdGFcIixcImRhdGFsaXN0XCIsXCJkZFwiLFwiZGVsXCIsXCJkZXRhaWxzXCIsXCJkZm5cIixcImRpYWxvZ1wiLFwiZGl2XCIsXCJkbFwiLFwiZHRcIixcImVtXCIsXCJlbWJlZFwiLFwiZmllbGRzZXRcIixcImZpZ2NhcHRpb25cIixcImZpZ3VyZVwiLFwiZm9vdGVyXCIsXCJmb3JtXCIsXCJoMVwiLFwiaDJcIixcImgzXCIsXCJoNFwiLFwiaDVcIixcImg2XCIsXCJoZWFkXCIsXCJoZWFkZXJcIixcImhncm91cFwiLFwiaHJcIixcImh0bWxcIixcImlcIixcImlmcmFtZVwiLFwiaW1nXCIsXCJpbnB1dFwiLFwiaW5zXCIsXCJrYmRcIixcImtleWdlblwiLFwibGFiZWxcIixcImxlZ2VuZFwiLFwibGlcIixcImxpbmtcIixcIm1haW5cIixcIm1hcFwiLFwibWFya1wiLFwibWFycXVlZVwiLFwibWVudVwiLFwibWVudWl0ZW1cIixcIm1ldGFcIixcIm1ldGVyXCIsXCJuYXZcIixcIm5vc2NyaXB0XCIsXCJvYmplY3RcIixcIm9sXCIsXCJvcHRncm91cFwiLFwib3B0aW9uXCIsXCJvdXRwdXRcIixcInBcIixcInBhcmFtXCIsXCJwaWN0dXJlXCIsXCJwcmVcIixcInByb2dyZXNzXCIsXCJxXCIsXCJycFwiLFwicnRcIixcInJ1YnlcIixcInNcIixcInNhbXBcIixcInNjcmlwdFwiLFwic2VjdGlvblwiLFwic2VsZWN0XCIsXCJzbWFsbFwiLFwic291cmNlXCIsXCJzcGFuXCIsXCJzdHJvbmdcIixcInN0eWxlXCIsXCJzdWJcIixcInN1bW1hcnlcIixcInN1cFwiLFwidGFibGVcIixcInRib2R5XCIsXCJ0ZFwiLFwidGV4dGFyZWFcIixcInRmb290XCIsXCJ0aFwiLFwidGhlYWRcIixcInRpbWVcIixcInRpdGxlXCIsXCJ0clwiLFwidHJhY2tcIixcInVcIixcInVsXCIsXCJ2YXJcIixcInZpZGVvXCIsXCJ3YnJcIixcImNpcmNsZVwiLFwiY2xpcFBhdGhcIixcImRlZnNcIixcImVsbGlwc2VcIixcImZvcmVpZ25PYmplY3RcIixcImdcIixcImltYWdlXCIsXCJsaW5lXCIsXCJsaW5lYXJHcmFkaWVudFwiLFwibWFya2VyXCIsXCJtYXNrXCIsXCJwYXRoXCIsXCJwYXR0ZXJuXCIsXCJwb2x5Z29uXCIsXCJwb2x5bGluZVwiLFwicmFkaWFsR3JhZGllbnRcIixcInJlY3RcIixcInN0b3BcIixcInN2Z1wiLFwidGV4dFwiLFwidHNwYW5cIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7cWVbZV09cWUoZSl9KSk7dmFyIEhlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3RoaXMucnVsZXM9ZSx0aGlzLmNvbXBvbmVudElkPXQsdGhpcy5pc1N0YXRpYz1yZShlKSxaLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCsxKX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jcmVhdGVTdHlsZXM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89cihOZSh0aGlzLnJ1bGVzLHQsbixyKS5qb2luKFwiXCIpLFwiXCIpLHM9dGhpcy5jb21wb25lbnRJZCtlO24uaW5zZXJ0UnVsZXMocyxzLG8pfSx0LnJlbW92ZVN0eWxlcz1mdW5jdGlvbihlLHQpe3QuY2xlYXJSdWxlcyh0aGlzLmNvbXBvbmVudElkK2UpfSx0LnJlbmRlclN0eWxlcz1mdW5jdGlvbihlLHQsbixyKXtlPjImJloucmVnaXN0ZXJJZCh0aGlzLmNvbXBvbmVudElkK2UpLHRoaXMucmVtb3ZlU3R5bGVzKGUsbiksdGhpcy5jcmVhdGVTdHlsZXMoZSx0LG4scil9LGV9KCk7ZnVuY3Rpb24gJGUoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxvPTE7bzx0O28rKyluW28tMV09YXJndW1lbnRzW29dO3ZhciBpPUFlLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KG4pKSxhPVwic2MtZ2xvYmFsLVwiK1RlKEpTT04uc3RyaW5naWZ5KGkpKSx1PW5ldyBIZShpLGEpO2Z1bmN0aW9uIGwoZSl7dmFyIHQ9ZmUoKSxuPW1lKCksbz1zKHplKSxsPWModC5hbGxvY2F0ZUdTSW5zdGFuY2UoYSkpLmN1cnJlbnQ7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmci5DaGlsZHJlbi5jb3VudChlLmNoaWxkcmVuKSYmY29uc29sZS53YXJuKFwiVGhlIGdsb2JhbCBzdHlsZSBjb21wb25lbnQgXCIrYStcIiB3YXMgZ2l2ZW4gY2hpbGQgSlNYLiBjcmVhdGVHbG9iYWxTdHlsZSBkb2VzIG5vdCByZW5kZXIgY2hpbGRyZW4uXCIpLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmkuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJi0xIT09ZS5pbmRleE9mKFwiQGltcG9ydFwiKX0pKSYmY29uc29sZS53YXJuKFwiUGxlYXNlIGRvIG5vdCB1c2UgQGltcG9ydCBDU1Mgc3ludGF4IGluIGNyZWF0ZUdsb2JhbFN0eWxlIGF0IHRoaXMgdGltZSwgYXMgdGhlIENTU09NIEFQSXMgd2UgdXNlIGluIHByb2R1Y3Rpb24gZG8gbm90IGhhbmRsZSBpdCB3ZWxsLiBJbnN0ZWFkLCB3ZSByZWNvbW1lbmQgdXNpbmcgYSBsaWJyYXJ5IHN1Y2ggYXMgcmVhY3QtaGVsbWV0IHRvIGluamVjdCBhIHR5cGljYWwgPGxpbms+IG1ldGEgdGFnIHRvIHRoZSBzdHlsZXNoZWV0LCBvciBzaW1wbHkgZW1iZWRkaW5nIGl0IG1hbnVhbGx5IGluIHlvdXIgaW5kZXguaHRtbCA8aGVhZD4gc2VjdGlvbiBmb3IgYSBzaW1wbGVyIGFwcC5cIiksZCgoZnVuY3Rpb24oKXtyZXR1cm4gaChsLGUsdCxvLG4pLGZ1bmN0aW9uKCl7cmV0dXJuIHUucmVtb3ZlU3R5bGVzKGwsdCl9fSksW2wsZSx0LG8sbl0pLG51bGx9ZnVuY3Rpb24gaChlLHQsbixyLG8pe2lmKHUuaXNTdGF0aWMpdS5yZW5kZXJTdHlsZXMoZSxPLG4sbyk7ZWxzZXt2YXIgcz12KHt9LHQse3RoZW1lOk9lKHQscixsLmRlZmF1bHRQcm9wcyl9KTt1LnJlbmRlclN0eWxlcyhlLHMsbixvKX19cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmUGUoYSksci5tZW1vKGwpfWZ1bmN0aW9uIFdlKGUpe1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0JiZjb25zb2xlLndhcm4oXCJga2V5ZnJhbWVzYCBjYW5ub3QgYmUgdXNlZCBvbiBSZWFjdE5hdGl2ZSwgb25seSBvbiB0aGUgd2ViLiBUbyBkbyBhbmltYXRpb24gaW4gUmVhY3ROYXRpdmUgcGxlYXNlIHVzZSBBbmltYXRlZC5cIik7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3ZhciBvPUFlLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KG4pKS5qb2luKFwiXCIpLHM9VGUobyk7cmV0dXJuIG5ldyB2ZShzLG8pfXZhciBVZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt2YXIgZT10aGlzO3RoaXMuX2VtaXRTaGVldENTUz1mdW5jdGlvbigpe3ZhciB0PWUuaW5zdGFuY2UudG9TdHJpbmcoKSxuPXEoKTtyZXR1cm5cIjxzdHlsZSBcIitbbiYmJ25vbmNlPVwiJytuKydcIicsQSsnPVwidHJ1ZVwiJywnZGF0YS1zdHlsZWQtdmVyc2lvbj1cIjUuMi4xXCInXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIikrXCI+XCIrdCtcIjwvc3R5bGU+XCJ9LHRoaXMuZ2V0U3R5bGVUYWdzPWZ1bmN0aW9uKCl7cmV0dXJuIGUuc2VhbGVkP2ooMik6ZS5fZW1pdFNoZWV0Q1NTKCl9LHRoaXMuZ2V0U3R5bGVFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIHQ7aWYoZS5zZWFsZWQpcmV0dXJuIGooMik7dmFyIG49KCh0PXt9KVtBXT1cIlwiLHRbXCJkYXRhLXN0eWxlZC12ZXJzaW9uXCJdPVwiNS4yLjFcIix0LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtfX2h0bWw6ZS5pbnN0YW5jZS50b1N0cmluZygpfSx0KSxvPXEoKTtyZXR1cm4gbyYmKG4ubm9uY2U9byksW3IuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsdih7fSxuLHtrZXk6XCJzYy0wLTBcIn0pKV19LHRoaXMuc2VhbD1mdW5jdGlvbigpe2Uuc2VhbGVkPSEwfSx0aGlzLmluc3RhbmNlPW5ldyBaKHtpc1NlcnZlcjohMH0pLHRoaXMuc2VhbGVkPSExfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LmNvbGxlY3RTdHlsZXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2VhbGVkP2ooMik6ci5jcmVhdGVFbGVtZW50KHllLHtzaGVldDp0aGlzLmluc3RhbmNlfSxlKX0sdC5pbnRlcmxlYXZlV2l0aE5vZGVTdHJlYW09ZnVuY3Rpb24oZSl7cmV0dXJuIGooMyl9LGV9KCksSmU9ZnVuY3Rpb24oZSl7dmFyIHQ9ci5mb3J3YXJkUmVmKChmdW5jdGlvbih0LG4pe3ZhciBvPXMoemUpLGk9ZS5kZWZhdWx0UHJvcHMsYT1PZSh0LG8saSk7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdm9pZCAwPT09YSYmY29uc29sZS53YXJuKCdbd2l0aFRoZW1lXSBZb3UgYXJlIG5vdCB1c2luZyBhIFRoZW1lUHJvdmlkZXIgbm9yIHBhc3NpbmcgYSB0aGVtZSBwcm9wIG9yIGEgdGhlbWUgaW4gZGVmYXVsdFByb3BzIGluIGNvbXBvbmVudCBjbGFzcyBcIicrXyhlKSsnXCInKSxyLmNyZWF0ZUVsZW1lbnQoZSx2KHt9LHQse3RoZW1lOmEscmVmOm59KSl9KSk7cmV0dXJuIHkodCxlKSx0LmRpc3BsYXlOYW1lPVwiV2l0aFRoZW1lKFwiK18oZSkrXCIpXCIsdH0sWGU9ZnVuY3Rpb24oKXtyZXR1cm4gcyh6ZSl9LFplPXtTdHlsZVNoZWV0OlosbWFzdGVyU2hlZXQ6aGV9O1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0JiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHlvdSd2ZSBpbXBvcnRlZCAnc3R5bGVkLWNvbXBvbmVudHMnIG9uIFJlYWN0IE5hdGl2ZS5cXG5QZXJoYXBzIHlvdSdyZSBsb29raW5nIHRvIGltcG9ydCAnc3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlJz9cXG5SZWFkIG1vcmUgYWJvdXQgdGhpcyBhdCBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9iYXNpY3MjcmVhY3QtbmF0aXZlXCIpLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidGVzdFwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJih3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXT13aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXXx8MCwxPT09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl0mJmNvbnNvbGUud2FybihcIkl0IGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mICdzdHlsZWQtY29tcG9uZW50cycgaW5pdGlhbGl6ZWQgaW4gdGhpcyBhcHBsaWNhdGlvbi4gVGhpcyBtYXkgY2F1c2UgZHluYW1pYyBzdHlsZXMgdG8gbm90IHJlbmRlciBwcm9wZXJseSwgZXJyb3JzIGR1cmluZyB0aGUgcmVoeWRyYXRpb24gcHJvY2VzcywgYSBtaXNzaW5nIHRoZW1lIHByb3AsIGFuZCBtYWtlcyB5b3VyIGFwcGxpY2F0aW9uIGJpZ2dlciB3aXRob3V0IGdvb2QgcmVhc29uLlxcblxcblNlZSBodHRwczovL3MtYy5zaC8yQkFYemVkIGZvciBtb3JlIGluZm8uXCIpLHdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdKz0xKTtleHBvcnQgZGVmYXVsdCBxZTtleHBvcnR7VWUgYXMgU2VydmVyU3R5bGVTaGVldCxsZSBhcyBTdHlsZVNoZWV0Q29uc3VtZXIsdWUgYXMgU3R5bGVTaGVldENvbnRleHQseWUgYXMgU3R5bGVTaGVldE1hbmFnZXIsTGUgYXMgVGhlbWVDb25zdW1lcix6ZSBhcyBUaGVtZUNvbnRleHQsR2UgYXMgVGhlbWVQcm92aWRlcixaZSBhcyBfX1BSSVZBVEVfXywkZSBhcyBjcmVhdGVHbG9iYWxTdHlsZSxBZSBhcyBjc3MsTiBhcyBpc1N0eWxlZENvbXBvbmVudCxXZSBhcyBrZXlmcmFtZXMsWGUgYXMgdXNlVGhlbWUsQyBhcyB2ZXJzaW9uLEplIGFzIHdpdGhUaGVtZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcy5tYXBcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmVxdWlyZWRDbGFzczogXCJiZy1ibHVlLTEwMFwiLFxuICByZXF1aXJlZENvbG9yOiBcIiNEQkVBRkVcIixcbn07XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uUHJvdmlkZXJUeXBlIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdGlvblByb3ZpZGVyIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaGFuZGxlcjogQ29ubmVjdGlvblByb3ZpZGVyVHlwZTtcblxuICBwdWJsaWMgc3RhdGljIGluaXQoaGFuZGxlcjogQ29ubmVjdGlvblByb3ZpZGVyVHlwZSk6IHZvaWQge1xuICAgIENvbm5lY3Rpb25Qcm92aWRlci5oYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SGFuZGxlcigpOiBDb25uZWN0aW9uUHJvdmlkZXJUeXBlIHtcbiAgICBpZiAoIUNvbm5lY3Rpb25Qcm92aWRlci5oYW5kbGVyKSB7XG4gICAgICB0aHJvdyAnTXVzdCBjYWxsIGluaXQoKSBmaXJzdCB3aXRoIGEgdmFsaWQgQ29ubmVjdGlvblByb3ZpZGVyIGluc3RhbmNlJztcbiAgICB9XG4gICAgcmV0dXJuIENvbm5lY3Rpb25Qcm92aWRlci5oYW5kbGVyO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBGaWVsZCBhcyBGaWVsZE9vdWksIExhYmVsIGFzIExhYmVsT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0xhYmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpZWxkKHtcbiAgb291aSxcbiAgY2hpbGRyZW4sXG4gIGxheW91dCA9IFwiaG9yaXpvbnRhbFwiLFxuICB2YWx1ZVByb3BOYW1lLFxuICBzaG93TGFiZWwgPSBmYWxzZSxcbiAgYWxpZ25MYWJlbCA9IFwibGVmdFwiLFxufToge1xuICBvb3VpOiBGaWVsZE9vdWk7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xuICBsYXlvdXQ/OiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIjtcbiAgdmFsdWVQcm9wTmFtZT86IHN0cmluZztcbiAgc2hvd0xhYmVsPzogYm9vbGVhbjtcbiAgYWxpZ25MYWJlbD86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcbn0pIHtcbiAgY29uc3QgeyBpZCwgbGFiZWwsIHRvb2x0aXAgfSA9IG9vdWk7XG5cbiAgY29uc3QgZm9ybUl0ZW0gPSAoKSA9PiAoXG4gICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJtYi0wXCIgbmFtZT17aWR9IHZhbHVlUHJvcE5hbWU9e3ZhbHVlUHJvcE5hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRm9ybS5JdGVtPlxuICApO1xuXG4gIGlmICghc2hvd0xhYmVsKSB7XG4gICAgcmV0dXJuIGZvcm1JdGVtKCk7XG4gIH1cblxuICBjb25zdCBsYWJlbFdpZGdldCA9IChcbiAgICA8TGFiZWxcbiAgICAgIG9vdWk9e1xuICAgICAgICBuZXcgTGFiZWxPb3VpKHtcbiAgICAgICAgICBuYW1lOiBpZCArIFwiX2xhYmVsXCIsXG4gICAgICAgICAgc3RyaW5nOiBsYWJlbCxcbiAgICAgICAgICBoZWxwOiB0b29sdGlwLFxuICAgICAgICAgIGZpZWxkRm9yTGFiZWw6IGlkLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgYWxpZ249e2FsaWduTGFiZWx9XG4gICAgLz5cbiAgKTtcblxuICBjb25zdCBob3Jpem9udGFsTW9kZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdyBhbGlnbj1cIm1pZGRsZVwiIGNsYXNzTmFtZT1cInBiLTEgcHQtMVwiPlxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLTJcIiBmbGV4PVwiN3JlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmRcIj57bGFiZWxXaWRnZXR9PC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIGZsZXg9XCJhdXRvXCI+e2Zvcm1JdGVtKCl9PC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHZlcnRpY2FsTW9kZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2xhYmVsV2lkZ2V0fVxuICAgICAgICB7Zm9ybUl0ZW0oKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgPyBob3Jpem9udGFsTW9kZSgpIDogdmVydGljYWxNb2RlKCk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBTdHJpbmdzIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IHR5cGUgTG9jYWxlc0NvbnRleHRUeXBlID0ge1xuICBnZXRTdHJpbmc6IChrZXk6IHN0cmluZykgPT4gc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IExvY2FsZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxMb2NhbGVzQ29udGV4dFR5cGUgfCBudWxsPihcbiAgbnVsbFxuKTtcblxuY29uc3QgTG9jYWxlc1Byb3ZpZGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIHN0cmluZ3M6IHN0cmluZ3NQcm9wLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBzdHJpbmdzOiBTdHJpbmdzO1xufSk6IGFueSA9PiB7XG4gIGNvbnN0IFtzdHJpbmdzLCBzZXRTdHJpbmdzXSA9IHVzZVN0YXRlPFN0cmluZ3M+KHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0cmluZ3Moc3RyaW5nc1Byb3ApO1xuICB9LCBbc3RyaW5nc1Byb3BdKTtcblxuICBjb25zdCBnZXRTdHJpbmcgPSAoa2V5OiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gZ2V0TG9jYWxpemVkU3RyaW5nKGtleSwgc3RyaW5ncyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TG9jYWxlc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGdldFN0cmluZyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTG9jYWxlc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhbGVzUHJvdmlkZXI7XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhbGl6ZWRTdHJpbmcgPSAoa2V5OiBzdHJpbmcsIHN0cmluZ3M6IFN0cmluZ3MpID0+IHtcbiAgY29uc3QgbG9jYWxpemVkID0gc3RyaW5nc1trZXldO1xuICBpZiAobG9jYWxpemVkKSByZXR1cm4gbG9jYWxpemVkO1xuICBlbHNlIHJldHVybiBrZXk7XG59O1xuIiwiaW1wb3J0IHsgV2lkZ2V0LCBMYWJlbCwgT25lMm1hbnksIE1hbnkybWFueSB9IGZyb20gXCJvb3VpXCI7XG5cbmNvbnN0IGNsb25lID0gZnVuY3Rpb24gY2xvbmU8VD4oaW5zdGFuY2U6IFQpOiBUIHtcbiAgY29uc3QgY29weSA9IG5ldyAoKGluc3RhbmNlIGFzIGFueSkuY29uc3RydWN0b3IgYXMgeyBuZXcgKCk6IFQgfSkoKTtcbiAgT2JqZWN0LmFzc2lnbihjb3B5LCBpbnN0YW5jZSk7XG4gIHJldHVybiBjb3B5O1xufTtcblxuY29uc3QgZ2V0U3BhblN0eWxlRm9ySXRlbSA9ICh7XG4gIGl0ZW0sXG4gIHJlc3BvbnNpdmVCZWhhdmlvdXIsXG59OiB7XG4gIGl0ZW06IFdpZGdldDtcbiAgcmVzcG9uc2l2ZUJlaGF2aW91cjogYm9vbGVhbjtcbn0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBncmlkQ29sdW1uU3RhcnQ6IFwic3BhbiBcIiArIChyZXNwb25zaXZlQmVoYXZpb3VyID8gMSA6IGl0ZW0uY29sc3BhbiksXG4gIH07XG59O1xuXG5jb25zdCBmaWxsUm93V2l0aEVtcHRpZXNUb0ZpdCA9ICh7XG4gIHJvdyxcbiAgbXVzdEZpbGxXaXRoRW1wdGllcyxcbiAgbnVtYmVyT2ZDb2x1bW5zLFxufToge1xuICByb3c6IGFueTtcbiAgbXVzdEZpbGxXaXRoRW1wdGllczogYm9vbGVhbjtcbiAgbnVtYmVyT2ZDb2x1bW5zOiBudW1iZXI7XG59KSA9PiB7XG4gIGNvbnN0IHJvd1dpdGhFbXB0aWVzVG9GaXQ6IGFueSA9IFtdO1xuICBsZXQgdG90YWxDb2xTcGFuID0gMDtcblxuICByb3cubWFwKChpdGVtOiBXaWRnZXQsIGNvbHVtbkluZGV4OiBudW1iZXIpID0+IHtcbiAgICB0b3RhbENvbFNwYW4gKz0gaXRlbS5jb2xzcGFuO1xuICAgIHJvd1dpdGhFbXB0aWVzVG9GaXQucHVzaChpdGVtKTtcblxuICAgIGlmIChcbiAgICAgIGNvbHVtbkluZGV4ICsgMSA9PT0gcm93Lmxlbmd0aCAmJlxuICAgICAgdG90YWxDb2xTcGFuIDwgbnVtYmVyT2ZDb2x1bW5zICYmXG4gICAgICAhbXVzdEZpbGxXaXRoRW1wdGllc1xuICAgICkge1xuICAgICAgY29uc3QgZ2Fwc1RvRmlsbCA9IG51bWJlck9mQ29sdW1ucyAtIHRvdGFsQ29sU3BhbjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2Fwc1RvRmlsbDsgaSArPSAxKSB7XG4gICAgICAgIHJvd1dpdGhFbXB0aWVzVG9GaXQucHVzaChuZXcgTGFiZWwoeyBzdHJpbmc6IFwiXCIgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJvd1dpdGhFbXB0aWVzVG9GaXQ7XG59O1xuXG5jb25zdCBleHBhbmRXaWRnZXRzSWZOZWVkZWQgPSAoe1xuICByb3csXG4gIG51bWJlck9mQ29sdW1ucyxcbn06IHtcbiAgcm93OiBhbnk7XG4gIG51bWJlck9mQ29sdW1uczogbnVtYmVyO1xufSkgPT4ge1xuICByZXR1cm4gcm93Lm1hcCgoaXRlbTogV2lkZ2V0KSA9PiB7XG4gICAgaWYgKChpdGVtIGFzIGFueSkuX211c3RFeHBhbmQpIHtcbiAgICAgIChpdGVtIGFzIGFueSkuY29sc3BhbiA9IG51bWJlck9mQ29sdW1ucztcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRUZW1wbGF0ZUNvbHVtbnMgPSAoY29sdW1uczogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IG9kZCA9IFwiMWZyXCI7XG4gIGNvbnN0IGV2ZW4gPSBcImF1dG9cIjtcbiAgbGV0IHRlbXBsYXRlQ29sdW1ucyA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uczsgaSsrKSB7XG4gICAgdGVtcGxhdGVDb2x1bW5zICs9IGkgJSAyID8gb2RkIDogZXZlbjtcbiAgICBpZiAoaSA8IGNvbHVtbnMpIHtcbiAgICAgIHRlbXBsYXRlQ29sdW1ucyArPSBcIiBcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlQ29sdW1ucztcbn07XG5cbmV4cG9ydCB7IGdldFRlbXBsYXRlQ29sdW1ucywgZmlsbFJvd1dpdGhFbXB0aWVzVG9GaXQsIGdldFNwYW5TdHlsZUZvckl0ZW0sIGV4cGFuZFdpZGdldHNJZk5lZWRlZH07XG4iLCJpbXBvcnQgeyBGb3JtSW5zdGFuY2UgfSBmcm9tIFwiYW50ZFwiO1xuXG5jb25zdCBmaWx0ZXJlZFZhbHVlcyA9ICh2YWx1ZXM6IGFueSwgZmllbGRzOiBhbnkpID0+IHtcbiAgaWYgKCFmaWVsZHMpIHtcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9XG4gIGNvbnN0IGZpbHRlcmVkVmFsdWVzOiBhbnkgPSB7fTtcbiAgT2JqZWN0LmtleXModmFsdWVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoXG4gICAgICB2YWx1ZXNba2V5XSAhPT0gZmFsc2UgfHxcbiAgICAgIChmaWVsZHNba2V5XSAmJiBmaWVsZHNba2V5XS50eXBlID09PSBcImJvb2xlYW5cIilcbiAgICApIHtcbiAgICAgIGZpbHRlcmVkVmFsdWVzW2tleV0gPSB2YWx1ZXNba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZmlsdGVyZWRWYWx1ZXM7XG59O1xuXG5leHBvcnQgY29uc3QgcHJvY2Vzc1ZhbHVlcyA9ICh2YWx1ZXM6IGFueSwgZmllbGRzOiBhbnkpID0+IHtcbiAgY29uc3QgZmlsdGVyQm9vbGVhbnMgPSBmaWx0ZXJlZFZhbHVlcyh2YWx1ZXMsIGZpZWxkcyk7XG4gIHJldHVybiBmaWx0ZXJCb29sZWFucztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUb3VjaGVkVmFsdWVzID0gKGFudEZvcm06IEZvcm1JbnN0YW5jZSkgPT4ge1xuICBjb25zdCB2YWx1ZXMgPSBhbnRGb3JtLmdldEZpZWxkc1ZhbHVlKHRydWUpO1xuICBjb25zdCB0b3VjaGVkVmFsdWVzOiBhbnkgPSB7fTtcbiAgT2JqZWN0LmtleXModmFsdWVzKS5tYXAoKGtleSkgPT4ge1xuICAgIGlmIChhbnRGb3JtLmlzRmllbGRUb3VjaGVkKGtleSkpIHtcbiAgICAgIHRvdWNoZWRWYWx1ZXNba2V5XSA9IHZhbHVlc1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0b3VjaGVkVmFsdWVzO1xufTtcbiIsImNvbnN0IGNvbnZlcnRCb29sZWFuUGFyYW1JZk5lZWRlZCA9ICh2YWx1ZTogYW55KSA9PiB7XG4gIGlmICgodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlID09PSBcInRydWVcIikgfHwgdmFsdWUgPT09IFwiZmFsc2VcIikge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gXCJ0cnVlXCI7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuY29uc3QgZ2V0UGFyYW1zRm9yRmllbGRzID0gKHZhbHVlczogYW55LCBmaWVsZHM6IGFueSkgPT4ge1xuICBjb25zdCBmaWx0ZXJlZFZhbHVlcyA9IHJlbW92ZVVuZGVmaW5lZEZpZWxkcyh2YWx1ZXMpO1xuICBjb25zdCBncm91cGVkRGF0ZVRpbWUgPSBncm91cERhdGVUaW1lVmFsdWVzSWZOZWVkZWQoZmlsdGVyZWRWYWx1ZXMpO1xuICBjb25zdCBncm91cGVkVmFsdWVzID0gdW5ncm91cERhdGVWYWx1ZXNJZk5lZWRlZChncm91cGVkRGF0ZVRpbWUsIGZpZWxkcyk7XG5cbiAgY29uc3QgcGFyYW1zID0gW1xuICAgIC4uLk9iamVjdC5rZXlzKGdyb3VwZWRWYWx1ZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gZ2V0UGFyYW1Gb3JGaWVsZChrZXksIGdyb3VwZWRWYWx1ZXNba2V5XSwgZmllbGRzKTtcbiAgICB9KSxcbiAgXTtcblxuICAvLyBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIGluIGNhc2Ugb2YgZGF0ZXRpbWUgd2UgcmVjZWl2ZSBhbiBhcnJheSBvZiBhcnJheXNcbiAgcmV0dXJuIHBhcmFtcy5yZWR1Y2UoKGFjYywgY3VyVmFsKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VyVmFsWzBdKSkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoY3VyVmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5hY2MsIGN1clZhbF07XG4gIH0sIFtdKTtcbn07XG5cbmNvbnN0IGdldFBhcmFtRm9yRmllbGQgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGZpZWxkczogYW55KSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkS2V5ID0ga2V5LnNwbGl0KFwiI1wiKVswXTtcbiAgY29uc3QgdHlwZSA9IGZpZWxkc1tmaWx0ZXJlZEtleV0udHlwZTtcblxuICBpZiAoXG4gICAgdHlwZSA9PT0gXCJjaGFyXCIgfHxcbiAgICB0eXBlID09PSBcInRleHRcIiB8fFxuICAgIHR5cGUgPT09IFwibWFueTJvbmVcIiB8fFxuICAgIHR5cGUgPT09IFwibWFueTJtYW55XCIgfHxcbiAgICB0eXBlID09PSBcIm9uZTJtYW55XCJcbiAgKSB7XG4gICAgcmV0dXJuIFtrZXksIFwiaWxpa2VcIiwgdmFsdWVdO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGUgPT09IFwiZmxvYXRcIiB8fFxuICAgIHR5cGUgPT09IFwiaW50ZWdlclwiIHx8XG4gICAgdHlwZSA9PT0gXCJmbG9hdF90aW1lXCIgfHxcbiAgICB0eXBlID09PSBcInByb2dyZXNzYmFyXCJcbiAgKSB7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSBrZXkuaW5kZXhPZihcIiNmcm9tXCIpICE9PSAtMSA/IFwiPj1cIiA6IFwiPD1cIjtcbiAgICByZXR1cm4gW2ZpbHRlcmVkS2V5LCBvcGVyYXRvciwgdmFsdWVdO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZGF0ZVwiKSB7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSBrZXkuaW5kZXhPZihcIiNmcm9tXCIpICE9PSAtMSA/IFwiPj1cIiA6IFwiPD1cIjtcbiAgICByZXR1cm4gW2ZpbHRlcmVkS2V5LCBvcGVyYXRvciwgdmFsdWUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKV07XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJkYXRldGltZVwiKSB7XG4gICAgY29uc3QgZnJvbSA9IHZhbHVlWzBdO1xuICAgIGNvbnN0IHRvID0gdmFsdWVbMV07XG4gICAgcmV0dXJuIFtcbiAgICAgIFtmaWx0ZXJlZEtleSwgXCI+PVwiLCBmcm9tXSxcbiAgICAgIFtmaWx0ZXJlZEtleSwgXCI8PVwiLCB0b10sXG4gICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW2tleSwgXCI9XCIsIGNvbnZlcnRCb29sZWFuUGFyYW1JZk5lZWRlZCh2YWx1ZSldO1xuICB9XG59O1xuXG5jb25zdCBnZXREYXRldGltZURhdGVGaWVsZHMgPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlcykuZmlsdGVyKChrZXkpID0+IHtcbiAgICByZXR1cm4ga2V5LmluZGV4T2YoXCIjZGF0ZVwiKSAhPT0gLTE7XG4gIH0pO1xufTtcblxuY29uc3QgcmVtb3ZlRGF0ZVRpbWVTaW5nbGVGaWVsZHMgPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgY29uc3QgbmV3VmFsdWVzID0geyAuLi52YWx1ZXMgfTtcbiAgT2JqZWN0LmtleXMobmV3VmFsdWVzKS5mb3JFYWNoKFxuICAgIChrZXkpID0+XG4gICAgICAoa2V5LmluZGV4T2YoXCIjdGltZVwiKSAhPT0gLTEgfHwga2V5LmluZGV4T2YoXCIjZGF0ZVwiKSAhPT0gLTEpICYmXG4gICAgICBkZWxldGUgbmV3VmFsdWVzW2tleV1cbiAgKTtcbiAgcmV0dXJuIG5ld1ZhbHVlcztcbn07XG5cbmNvbnN0IGdyb3VwRGF0ZVRpbWVWYWx1ZXNJZk5lZWRlZCA9ICh2YWx1ZXM6IGFueSkgPT4ge1xuICBjb25zdCBuZXdWYWx1ZXM6IGFueSA9IHsgLi4ucmVtb3ZlRGF0ZVRpbWVTaW5nbGVGaWVsZHModmFsdWVzKSB9O1xuXG4gIGNvbnN0IGRhdGV0aW1lRGF0ZUZpZWxkcyA9IGdldERhdGV0aW1lRGF0ZUZpZWxkcyh2YWx1ZXMpO1xuXG4gIGRhdGV0aW1lRGF0ZUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGNvbnN0IGRhdGVQYWlyID0gdmFsdWVzW2ZpZWxkXTtcbiAgICBjb25zdCBiYXNlS2V5ID0gZmllbGQuc3BsaXQoXCIjXCIpWzBdO1xuICAgIGNvbnN0IHRpbWVLZXkgPSBiYXNlS2V5ICsgXCIjdGltZVwiO1xuICAgIGNvbnN0IHRpbWVQYWlyID0gdmFsdWVzW3RpbWVLZXldO1xuICAgIGNvbnN0IGRhdGVWYWx1ZUZyb20gPSBkYXRlUGFpclswXS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgIGNvbnN0IGRhdGVWYWx1ZVRvID0gZGF0ZVBhaXJbMV0uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICBjb25zdCB0aW1lVmFsdWVGcm9tID0gdGltZVBhaXJbMF0uZm9ybWF0KFwiSEg6bW1cIik7XG4gICAgY29uc3QgdGltZVZhbHVlVG8gPSB0aW1lUGFpclsxXS5mb3JtYXQoXCJISDptbVwiKTtcbiAgICBjb25zdCBmcm9tID0gZGF0ZVZhbHVlRnJvbSArIFwiIFwiICsgdGltZVZhbHVlRnJvbTtcbiAgICBjb25zdCB0byA9IGRhdGVWYWx1ZVRvICsgXCIgXCIgKyB0aW1lVmFsdWVUbztcbiAgICBuZXdWYWx1ZXNbYmFzZUtleSArIFwiI2RhdGV0aW1lXCJdID0gW2Zyb20sIHRvXTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld1ZhbHVlcztcbn07XG5cbmNvbnN0IHVuZ3JvdXBEYXRlVmFsdWVzSWZOZWVkZWQgPSAodmFsdWVzOiBhbnksIGZpZWxkczogYW55KSA9PiB7XG4gIGNvbnN0IGRhdGVGaWVsZHMgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgcmV0dXJuIGZpZWxkc1trZXldICYmIGZpZWxkc1trZXldLnR5cGUgPT09IFwiZGF0ZVwiO1xuICB9KTtcblxuICBsZXQgbmV3VmFsdWVzOiBhbnkgPSB7IC4uLnZhbHVlcyB9O1xuXG4gIGRhdGVGaWVsZHMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgZGVsZXRlIG5ld1ZhbHVlc1trZXldO1xuICAgIG5ld1ZhbHVlc1trZXkgKyBcIiNmcm9tXCJdID0gdmFsdWVzW2tleV1bMF07XG4gICAgbmV3VmFsdWVzW2tleSArIFwiI3RvXCJdID0gdmFsdWVzW2tleV1bMV07XG4gIH0pO1xuXG4gIHJldHVybiBuZXdWYWx1ZXM7XG59O1xuXG5jb25zdCByZW1vdmVVbmRlZmluZWRGaWVsZHMgPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgY29uc3QgbmV3VmFsdWVzID0geyAuLi52YWx1ZXMgfTtcbiAgT2JqZWN0LmtleXMobmV3VmFsdWVzKS5mb3JFYWNoKFxuICAgIChrZXkpID0+XG4gICAgICAobmV3VmFsdWVzW2tleV0gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBuZXdWYWx1ZXNba2V5XSA9PT0gbnVsbCB8fFxuICAgICAgICBuZXdWYWx1ZXNba2V5XSA9PT0gXCJcIikgJiZcbiAgICAgIGRlbGV0ZSBuZXdWYWx1ZXNba2V5XVxuICApO1xuICByZXR1cm4gbmV3VmFsdWVzO1xufTtcblxuZXhwb3J0IHtcbiAgcmVtb3ZlVW5kZWZpbmVkRmllbGRzLFxuICBncm91cERhdGVUaW1lVmFsdWVzSWZOZWVkZWQsXG4gIGdldFBhcmFtc0ZvckZpZWxkcyxcbn07XG4iLCJpbXBvcnQgeyBUcmVlIGFzIFRyZWVPb3VpLCBTZWxlY3Rpb24sIE1hbnkyb25lLCBCb29sZWFuIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IFRyZWVWaWV3LCBDb2x1bW4gfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5jb25zdCBnZXRUcmVlID0gKHRyZWVWaWV3OiBUcmVlVmlldyk6IFRyZWVPb3VpID0+IHtcbiAgY29uc3QgeG1sID0gdHJlZVZpZXcuYXJjaDtcbiAgY29uc3QgZmllbGRzID0gdHJlZVZpZXcuZmllbGRzO1xuICBjb25zdCB0cmVlID0gbmV3IFRyZWVPb3VpKGZpZWxkcyk7XG4gIHRyZWUucGFyc2UoeG1sKTtcbiAgcmV0dXJuIHRyZWU7XG59O1xuXG5jb25zdCBnZXRUYWJsZUNvbHVtbnMgPSAoXG4gIHRyZWU6IFRyZWVPb3VpLFxuICBib29sZWFuQ29tcG9uZW50OiBhbnlcbik6IEFycmF5PENvbHVtbj4gPT4ge1xuICBjb25zdCB0YWJsZUNvbHVtbnMgPSB0cmVlLmNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcbiAgICBjb25zdCB0eXBlID0gY29sdW1uLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgY29uc3Qga2V5ID0gY29sdW1uLmlkO1xuICAgIGNvbnN0IHJlbmRlciA9XG4gICAgICB0eXBlID09PSBcIkJvb2xlYW5cIlxuICAgICAgICA/IChib29sZWFuRmllbGQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBib29sZWFuQ29tcG9uZW50KGJvb2xlYW5GaWVsZCk7XG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiB7XG4gICAgICBrZXksXG4gICAgICBkYXRhSW5kZXg6IGtleSxcbiAgICAgIHRpdGxlOiBjb2x1bW4ubGFiZWwsXG4gICAgICB0eXBlLFxuICAgICAgcmVuZGVyLFxuICAgICAgc29ydGVyOiAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGFba2V5XSA8IGJba2V5XSkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoYVtrZXldID4gYltrZXldKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9LFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gdGFibGVDb2x1bW5zO1xufTtcblxuY29uc3QgZ2V0VGFibGVJdGVtcyA9ICh0cmVlT291aTogVHJlZU9vdWksIHJlc3VsdHM6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+ID0+IHtcbiAgY29uc3QgdGFibGVJdGVtcyA9IHJlc3VsdHMubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICBjb25zdCBwYXJzZWRJdGVtOiBhbnkgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhpdGVtKS5tYXAoKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gXCJpZFwiKSB7XG4gICAgICAgIHBhcnNlZEl0ZW1ba2V5XSA9IGl0ZW1ba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHdpZGdldCA9IHRyZWVPb3VpLmZpbmRCeUlkKGtleSk7XG5cbiAgICAgICAgaWYgKHdpZGdldCBpbnN0YW5jZW9mIFNlbGVjdGlvbikge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpZGdldDtcbiAgICAgICAgICBwYXJzZWRJdGVtW2tleV0gPSBzZWxlY3Rpb24uc2VsZWN0aW9uVmFsdWVzLmdldChpdGVtW2tleV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZGdldCBpbnN0YW5jZW9mIE1hbnkyb25lKSB7XG4gICAgICAgICAgcGFyc2VkSXRlbVtrZXldID0gaXRlbVtrZXldWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZGdldCBpbnN0YW5jZW9mIEJvb2xlYW4pIHtcbiAgICAgICAgICBwYXJzZWRJdGVtW2tleV0gPSBpdGVtW2tleV07XG4gICAgICAgIH0gZWxzZSBpZiAod2lkZ2V0KSB7XG4gICAgICAgICAgcGFyc2VkSXRlbVtrZXldID0gaXRlbVtrZXldID09PSBmYWxzZSA/IFwiXCIgOiBpdGVtW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyc2VkSXRlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhYmxlSXRlbXM7XG59O1xuXG5leHBvcnQgeyBnZXRUYWJsZUNvbHVtbnMsIGdldFRhYmxlSXRlbXMsIGdldFRyZWUgfTtcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9CdXR0b25cIjtcbmltcG9ydCB7IENoYXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvQ2hhclwiO1xuaW1wb3J0IHsgU2VsZWN0aW9uIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL1NlbGVjdGlvblwiO1xuaW1wb3J0IHsgQm9vbGVhbiB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9Cb29sZWFuXCI7XG5pbXBvcnQgeyBNYW55Mm9uZSB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9NYW55Mm9uZVwiO1xuaW1wb3J0IHsgT25lMm1hbnkgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvT25lMm1hbnlcIjtcbmltcG9ydCBUcmVlIGZyb20gXCJAL3dpZGdldHMvdmlld3MvVHJlZVwiO1xuaW1wb3J0IHsgRmxvYXQgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvRmxvYXRcIjtcbmltcG9ydCB7IEludGVnZXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvSW50ZWdlclwiO1xuaW1wb3J0IEdyb3VwIGZyb20gXCJAL3dpZGdldHMvY29udGFpbmVycy9Hcm91cFwiO1xuaW1wb3J0IE5vdGVib29rIGZyb20gXCJAL3dpZGdldHMvY29udGFpbmVycy9Ob3RlYm9va1wiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIkAvd2lkZ2V0cy92aWV3cy9Gb3JtXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0xhYmVsXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvVGV4dFwiO1xuaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL1NlcGFyYXRvclwiO1xuaW1wb3J0IFNlYXJjaEZpbHRlciBmcm9tIFwiQC93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9TZWFyY2hGaWx0ZXJcIjtcbmltcG9ydCBTZWFyY2hUcmVlIGZyb20gXCJAL3dpZGdldHMvdmlld3MvU2VhcmNoVHJlZVwiO1xuaW1wb3J0IHsgRm9ybU1vZGFsIH0gZnJvbSBcIkAvd2lkZ2V0cy9tb2RhbHMvRm9ybU1vZGFsXCI7XG5pbXBvcnQgeyBTZWFyY2hNb2RhbCB9IGZyb20gXCJAL3dpZGdldHMvbW9kYWxzL1NlYXJjaE1vZGFsXCI7XG5pbXBvcnQgU2ltcGxlVHJlZSBmcm9tIFwiQC93aWRnZXRzL3ZpZXdzL1NpbXBsZVRyZWVcIjtcblxuaW1wb3J0IHtcbiAgVHJlZVZpZXcsXG4gIFNlYXJjaEZpZWxkcyxcbiAgRm9ybVZpZXcsXG4gIENvbm5lY3Rpb25Qcm92aWRlclR5cGUsXG4gIFNlYXJjaFJlcXVlc3QsXG4gIFNlYXJjaFJlc3BvbnNlLFxuICBDcmVhdGVPYmplY3RSZXF1ZXN0LFxuICBVcGRhdGVPYmplY3RSZXF1ZXN0LFxuICBWaWV3RGF0YSxcbiAgVmlld3MsXG4gIEV4ZWN1dGVSZXF1ZXN0LFxuICBSZWFkT2JqZWN0c1JlcXVlc3QsXG4gIERlbGV0ZU9iamVjdHNSZXF1ZXN0LFxufSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IENvbm5lY3Rpb25Qcm92aWRlciBmcm9tIFwiQC9Db25uZWN0aW9uUHJvdmlkZXJcIjtcblxuZXhwb3J0IHtcbiAgQnV0dG9uLFxuICBDaGFyLFxuICBTZWxlY3Rpb24sXG4gIEJvb2xlYW4sXG4gIE1hbnkyb25lLFxuICBUcmVlLFxuICBHcm91cCxcbiAgU2VhcmNoRmlsdGVyLFxuICBGb3JtLFxuICBOb3RlYm9vayxcbiAgRmxvYXQsXG4gIEludGVnZXIsXG4gIExhYmVsLFxuICBUZXh0LFxuICBUcmVlVmlldyxcbiAgRm9ybVZpZXcsXG4gIFNlYXJjaEZpZWxkcyxcbiAgU2VwYXJhdG9yLFxuICBTZWFyY2hUcmVlLFxuICBTZWFyY2hSZXF1ZXN0LFxuICBTZWFyY2hSZXNwb25zZSxcbiAgQ3JlYXRlT2JqZWN0UmVxdWVzdCxcbiAgVXBkYXRlT2JqZWN0UmVxdWVzdCxcbiAgQ29ubmVjdGlvblByb3ZpZGVyLFxuICBDb25uZWN0aW9uUHJvdmlkZXJUeXBlLFxuICBWaWV3RGF0YSxcbiAgVmlld3MsXG4gIEV4ZWN1dGVSZXF1ZXN0LFxuICBSZWFkT2JqZWN0c1JlcXVlc3QsXG4gIERlbGV0ZU9iamVjdHNSZXF1ZXN0LFxuICBGb3JtTW9kYWwsXG4gIFNlYXJjaE1vZGFsLFxuICBPbmUybWFueSxcbiAgU2ltcGxlVHJlZSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBhbnk7XG59O1xuXG5jb25zdCBGaWVsZHNldCA9IChwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCB7IGxhYmVsLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICAvLyBUT0RPOiBjaGFuZ2UgaW4tbGluZSBzdHlsZXMgdG8gVGFpbFdpbmQgY2xhc3Nlc1xuICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJwbC0yIHByLTIgYm9yZGVyLWdyYXktNDAwIGJvcmRlciBib3JkZXItc29saWQgIGZvbnQtc2Fuc1wiPlxuICAgICAgPGxlZ2VuZFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGFsbDogXCJpbml0aWFsXCIsXG4gICAgICAgICAgbWFyZ2luTGVmdDogXCIxZW1cIixcbiAgICAgICAgICBwYWRkaW5nTGVmdDogXCIwLjVlbVwiLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIwLjVlbVwiLFxuICAgICAgICAgIGZvbnRGYW1pbHk6XG4gICAgICAgICAgICBcInN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGVnZW5kPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZmllbGRzZXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWVsZHNldDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFdpZGdldHMgZnJvbSBcIkAvaW5kZXhcIjtcblxudHlwZSB3aWRnZXRzID0ge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59O1xuXG5jb25zdCB3aWRnZXRUeXBlcyA9IFdpZGdldHMgYXMgd2lkZ2V0cztcblxuY29uc3QgY3JlYXRlUmVhY3RXaWRnZXQgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB0eXBlID0gb291aS5jb25zdHJ1Y3Rvci5uYW1lO1xuICBjb25zdCB3aWRnZXRDbGFzcyA9IHdpZGdldFR5cGVzW3R5cGVdO1xuICBpZiAoIXdpZGdldENsYXNzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQod2lkZ2V0Q2xhc3MsIHByb3BzKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVJlYWN0V2lkZ2V0IH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGVja2JveCBhcyBBbnRDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCJAL0NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgQm9vbGVhbiA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgeyBpZCwgcmVhZE9ubHksIHJlcXVpcmVkIH0gPSBvb3VpO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIHsuLi5wcm9wc30gdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8UmVxdWlyZWRDaGVja2JveCBkaXNhYmxlZD17cmVhZE9ubHl9IGlkPXtpZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuXG5jb25zdCBSZXF1aXJlZENoZWNrYm94ID0gc3R5bGVkKEFudENoZWNrYm94KWBcbiAgLmFudC1jaGVja2JveC1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb25maWcucmVxdWlyZWRDb2xvcn07XG4gIH1cblxuICAuYW50LWNoZWNrYm94LWNoZWNrZWQgLmFudC1jaGVja2JveC1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4OUNGRjtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IEJ1dHRvbiBhcyBBbnRCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IGxhYmVsLCBhY3RpdmF0ZWQgfSA9IG9vdWk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgb291aT17b291aX0+XG4gICAgICA8QW50QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbFwiIGRpc2FibGVkPXshYWN0aXZhdGVkfT5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9BbnRCdXR0b24+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBDaGFyIGFzIENoYXJPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIkAvQ29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBDaGFyID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IGlkLCByZWFkT25seSwgaXNQYXNzd29yZCwgcmVxdWlyZWQgfSA9IG9vdWkgYXMgQ2hhck9vdWk7XG4gIGNvbnN0IHJlcXVpcmVkQ2xhc3MgPSByZXF1aXJlZCA/IENvbmZpZy5yZXF1aXJlZENsYXNzIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIHsuLi5wcm9wc30+XG4gICAgICB7aXNQYXNzd29yZCA/IChcbiAgICAgICAgPElucHV0LlBhc3N3b3JkIGRpc2FibGVkPXtyZWFkT25seX0gaWQ9e2lkfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPElucHV0IGRpc2FibGVkPXtyZWFkT25seX0gaWQ9e2lkfSBjbGFzc05hbWU9e3JlcXVpcmVkQ2xhc3N9IC8+XG4gICAgICApfVxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgRmxvYXQgYXMgRmxvYXRPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIkAvQ29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBGbG9hdCA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgeyBpZCwgZGVjaW1hbERpZ2l0cywgcmVhZE9ubHksIHJlcXVpcmVkfSA9IG9vdWkgYXMgRmxvYXRPb3VpO1xuICBjb25zdCByZXF1aXJlZENsYXNzID0gcmVxdWlyZWQgPyBDb25maWcucmVxdWlyZWRDbGFzcyA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9PlxuICAgICAgPElucHV0TnVtYmVyXG4gICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgY2xhc3NOYW1lPXtcInctZnVsbCBcIiArIHJlcXVpcmVkQ2xhc3N9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgcHJlY2lzaW9uPXtkZWNpbWFsRGlnaXRzfVxuICAgICAgICBmb3JtYXR0ZXI9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHt2YWx1ZX1gLnJlcGxhY2UoL1teMC05XFwuXFwtXSsvZywgXCJcIik7XG4gICAgICAgIH19XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cbiAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XG4gICAgICAvPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiQC9Db25maWdcIjtcblxuZXhwb3J0IGNvbnN0IEludGVnZXIgPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIHJlYWRPbmx5LCByZXF1aXJlZCB9ID0gb291aTtcbiAgY29uc3QgcmVxdWlyZWRDbGFzcyA9IHJlcXVpcmVkID8gQ29uZmlnLnJlcXVpcmVkQ2xhc3MgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgey4uLnByb3BzfT5cbiAgICAgIDxJbnB1dE51bWJlclxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGNsYXNzTmFtZT17XCJ3LWZ1bGwgXCIgKyByZXF1aXJlZENsYXNzfVxuICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgIGZvcm1hdHRlcj17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfWAucmVwbGFjZSgvW14wLTldKy9nLCBcIlwiKTtcbiAgICAgICAgfX1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxuICAgICAgLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgUXVlc3Rpb25DaXJjbGVPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgTGFiZWwgYXMgTGFiZWxPb3VpIH0gZnJvbSBcIm9vdWlcIjtcblxudHlwZSBQcm9wcyA9IFdpZGdldFByb3BzICYge1xuICBhbGlnbj86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcbiAgcmVzcG9uc2l2ZUJlaGF2aW91cj86IGJvb2xlYW47XG59O1xuXG5jb25zdCBhbGlnbkNsYXNzID0ge1xuICBsZWZ0OiBcImp1c3RpZnktc3RhcnRcIixcbiAgY2VudGVyOiBcImp1c3RpZnktY2VudGVyXCIsXG4gIHJpZ2h0OiBcImp1c3RpZnktZW5kXCIsXG59O1xuXG5jb25zdCBMYWJlbCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpLCBhbGlnbiwgcmVzcG9uc2l2ZUJlaGF2aW91ciB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgbGFiZWwsIHRvb2x0aXAsIGZpZWxkRm9yTGFiZWwgfSA9IG9vdWkgYXMgTGFiZWxPb3VpO1xuICBjb25zdCBhZGRDb2xvbiA9IGZpZWxkRm9yTGFiZWwgIT09IG51bGwgPyB0cnVlIDogZmFsc2U7XG4gIGNvbnN0IGxhYmVsVGV4dCA9IGFkZENvbG9uICYmIGxhYmVsLmxlbmd0aCA+IDEgPyBsYWJlbCArIFwiIDpcIiA6IGxhYmVsO1xuICBjb25zdCByZXNwb25zaXZlQWxpZ24gPSByZXNwb25zaXZlQmVoYXZpb3VyID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCI7XG4gIGNvbnN0IGxhYmVsQWxnaW4gPSBhbGlnbiA/IGFsaWduIDogZmllbGRGb3JMYWJlbCA/IHJlc3BvbnNpdmVBbGlnbiA6IFwibGVmdFwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBwYi0xICR7YWxpZ25DbGFzc1tsYWJlbEFsZ2luXX1gfT5cbiAgICAgIHt0b29sdGlwICYmIChcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9e3Rvb2x0aXB9PlxuICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZU91dGxpbmVkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ibHVlLTQwMCBwci0xXCIgLz5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKX1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTJcIj57bGFiZWxUZXh0fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQge1xuICBTZWFyY2hPdXRsaW5lZCxcbiAgRm9sZGVyT3Blbk91dGxpbmVkLFxuICBMb2FkaW5nT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgTWFueTJvbmUgYXMgTWFueTJvbmVPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIkAvQ29uZmlnXCI7XG5pbXBvcnQgeyBTZWFyY2hNb2RhbCB9IGZyb20gXCJAL3dpZGdldHMvbW9kYWxzL1NlYXJjaE1vZGFsXCI7XG5pbXBvcnQgeyBGb3JtTW9kYWwgfSBmcm9tIFwiQC93aWRnZXRzL21vZGFscy9Gb3JtTW9kYWxcIjtcbmltcG9ydCBDb25uZWN0aW9uUHJvdmlkZXIgZnJvbSBcIkAvQ29ubmVjdGlvblByb3ZpZGVyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9vdWk6IE1hbnkyb25lT291aTtcbiAgb25PcGVuRGV0YWlsQ2xpY2s/OlxuICAgIHwgKChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQpXG4gICAgfCB1bmRlZmluZWQ7XG4gIG9uU2VhcmNoQ2xpY2s/OlxuICAgIHwgKChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQpXG4gICAgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgTWFueTJvbmUgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZpZWxkIHsuLi5wcm9wc30+XG4gICAgICA8TWFueTJvbmVJbnB1dCBvb3VpPXtvb3VpfSAvPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgTWFueTJvbmVJbnB1dFByb3BzIHtcbiAgb291aTogTWFueTJvbmVPb3VpO1xuICB2YWx1ZT86IGFueVtdO1xuICBvbkNoYW5nZT86ICh2YWx1ZTogYW55W10pID0+IHZvaWQ7XG59XG5cbmxldCBTRUFSQ0hfQlVUVE9OX1RBUFBFRF9GTEFHID0gZmFsc2U7XG5cbmNvbnN0IE1hbnkyb25lSW5wdXQ6IFJlYWN0LkZDPE1hbnkyb25lSW5wdXRQcm9wcz4gPSAoXG4gIHByb3BzOiBNYW55Mm9uZUlucHV0UHJvcHNcbikgPT4ge1xuICBjb25zdCB7IHZhbHVlLCBvbkNoYW5nZSwgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgcmVxdWlyZWQsIHJlbGF0aW9uLCByZWFkT25seSB9ID0gb291aTtcbiAgY29uc3QgcmVxdWlyZWRDbGFzcyA9IHJlcXVpcmVkID8gQ29uZmlnLnJlcXVpcmVkQ2xhc3MgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IFtzaG93U2VhcmNoTW9kYWwsIHNldFNob3dTZWFyY2hNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzaG93Rm9ybU1vZGFsLCBzZXRTaG93Rm9ybU1vZGFsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaGluZywgc2V0U2VhcmNoaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIGNvbnN0IHRyaWdnZXJDaGFuZ2UgPSAoY2hhbmdlZFZhbHVlOiBhbnlbXSkgPT4ge1xuICAgIG9uQ2hhbmdlPy4oeyAuLi52YWx1ZSwgLi4uY2hhbmdlZFZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uVmFsdWVTdHJpbmdDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB0cmlnZ2VyQ2hhbmdlKFt1bmRlZmluZWQsIGUudGFyZ2V0LnZhbHVlXSk7XG4gIH07XG5cbiAgY29uc3QgaWQgPSB2YWx1ZSAmJiB2YWx1ZVswXTtcbiAgY29uc3QgdGV4dCA9ICh2YWx1ZSAmJiB2YWx1ZVsxXSkgfHwgXCJcIjtcblxuICBjb25zdCBvbkVsZW1lbnRMb3N0Rm9jdXMgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFpZCAmJiAhc2VhcmNoaW5nICYmIHRleHQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIERlYm91bmNlIHRoaXMgZXZlbnQgdG8gZ2l2ZSB0aW1lIHRvIHRoZSBzZWFyY2ggYnV0dG9uIG9uQ2xpY2sgdG8gc2V0IHRoZSBmbGFnXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDApKTtcblxuICAgICAgLy8gSWYgdGhlIGZvY3VzIGlzIGxvc3QgYmVjYXVzZSB0aGUgdXNlciB0YXBwZWQgdGhlIHNlYXJjaCBidXR0b24sIHdlIGRvbid0IG5lZWQgdG8gZG8gbm90aGluZyBoZXJlXG4gICAgICBpZiAoU0VBUkNIX0JVVFRPTl9UQVBQRURfRkxBRykge1xuICAgICAgICB0cmlnZ2VyQ2hhbmdlKFt1bmRlZmluZWQsIFwiXCJdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZXRTZWFyY2hpbmcodHJ1ZSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IGFueVtdID0gYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5leGVjdXRlKHtcbiAgICAgICAgICBtb2RlbDogcmVsYXRpb24sXG4gICAgICAgICAgYWN0aW9uOiBcIm5hbWVfc2VhcmNoXCIsXG4gICAgICAgICAgcGF5bG9hZDogdGV4dCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRyaWdnZXJDaGFuZ2UocmVzdWx0c1swXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0U2VhcmNoVGV4dCh0ZXh0KTtcbiAgICAgICAgICBzZXRTaG93U2VhcmNoTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgdHJpZ2dlckNoYW5nZShbdW5kZWZpbmVkLCBcIlwiXSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgZXJyb3JcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldFNlYXJjaGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFJvdyBndXR0ZXI9ezh9IGNsYXNzTmFtZT1cInB0LTEgcGItMVwiPlxuICAgICAgPENvbCBmbGV4PVwiYXV0b1wiPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgb25DaGFuZ2U9e29uVmFsdWVTdHJpbmdDaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgIGNsYXNzTmFtZT17cmVxdWlyZWRDbGFzc31cbiAgICAgICAgICBvbkJsdXI9e29uRWxlbWVudExvc3RGb2N1c31cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCBmbGV4PVwiMzJweFwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWNvbj17PEZvbGRlck9wZW5PdXRsaW5lZCAvPn1cbiAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHkgfHwgaWQgPT09IHVuZGVmaW5lZH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93Rm9ybU1vZGFsKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAvPlxuICAgICAgPC9Db2w+XG4gICAgICA8Q29sIGZsZXg9XCIzMnB4XCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBpY29uPXtzZWFyY2hpbmcgPyA8TG9hZGluZ091dGxpbmVkIC8+IDogPFNlYXJjaE91dGxpbmVkIC8+fVxuICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seSB8fCBzZWFyY2hpbmd9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgU0VBUkNIX0JVVFRPTl9UQVBQRURfRkxBRyA9IHRydWU7XG4gICAgICAgICAgICBzZXRTZWFyY2hUZXh0KHRleHQpO1xuICAgICAgICAgICAgc2V0U2hvd1NlYXJjaE1vZGFsKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAvPlxuICAgICAgPC9Db2w+XG4gICAgICA8U2VhcmNoTW9kYWxcbiAgICAgICAgbW9kZWw9e3JlbGF0aW9ufVxuICAgICAgICB2aXNpYmxlPXtzaG93U2VhcmNoTW9kYWx9XG4gICAgICAgIG5hbWVTZWFyY2g9eyFpZCA/IHNlYXJjaFRleHQgOiB1bmRlZmluZWR9XG4gICAgICAgIG9uU2VsZWN0VmFsdWU9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRyaWdnZXJDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIHNldFNob3dTZWFyY2hNb2RhbChmYWxzZSk7XG4gICAgICAgICAgU0VBUkNIX0JVVFRPTl9UQVBQRURfRkxBRyA9IGZhbHNlO1xuICAgICAgICB9fVxuICAgICAgICBvbkNsb3NlTW9kYWw9eygpID0+IHtcbiAgICAgICAgICBzZXRTaG93U2VhcmNoTW9kYWwoZmFsc2UpO1xuICAgICAgICAgIFNFQVJDSF9CVVRUT05fVEFQUEVEX0ZMQUcgPSBmYWxzZTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8Rm9ybU1vZGFsXG4gICAgICAgIG1vZGVsPXtyZWxhdGlvbn1cbiAgICAgICAgaWQ9e3ZhbHVlICYmIHZhbHVlWzBdfVxuICAgICAgICB2aXNpYmxlPXtzaG93Rm9ybU1vZGFsfVxuICAgICAgICBvblN1Ym1pdFN1Y2NlZWQ9eyh2YWx1ZTogYW55KSA9PiB7XG4gICAgICAgICAgdHJpZ2dlckNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgc2V0U2hvd0Zvcm1Nb2RhbChmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd0Zvcm1Nb2RhbChmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBPbmUybWFueSBhcyBPbmUybWFueU9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBTcGluLCBBbGVydCwgTW9kYWwgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJAL2luZGV4XCI7XG5pbXBvcnQgeyBTaW1wbGVUcmVlIH0gZnJvbSBcIkAvaW5kZXhcIjtcbmltcG9ydCB7IEZvcm0gYXMgRm9ybU9vdWksIFRyZWUgYXMgVHJlZU9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IHsgVmlld3MgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IENvbm5lY3Rpb25Qcm92aWRlciBmcm9tIFwiQC9Db25uZWN0aW9uUHJvdmlkZXJcIjtcbmltcG9ydCB7IEZvcm1Nb2RhbCB9IGZyb20gXCJAL3dpZGdldHMvbW9kYWxzL0Zvcm1Nb2RhbFwiO1xuXG5pbXBvcnQge1xuICBGaWxlQWRkT3V0bGluZWQsXG4gIEVkaXRPdXRsaW5lZCxcbiAgRGVsZXRlT3V0bGluZWQsXG4gIExlZnRPdXRsaW5lZCxcbiAgUmlnaHRPdXRsaW5lZCxcbiAgQWxpZ25MZWZ0T3V0bGluZWQsXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG50eXBlIFByb3BzID0ge1xuICBvb3VpOiBPbmUybWFueU9vdWk7XG59O1xuXG5jb25zdCB7IGNvbmZpcm0gfSA9IE1vZGFsO1xuXG5leHBvcnQgY29uc3QgT25lMm1hbnkgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZpZWxkIHsuLi5wcm9wc30+XG4gICAgICA8T25lMm1hbnlJbnB1dCBvb3VpPXtvb3VpfSAvPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgT25lMk1hbnlJbnB1dFByb3BzIHtcbiAgb291aTogT25lMm1hbnlPb3VpO1xuICB2YWx1ZT86IG51bWJlcltdO1xuICBvbkNoYW5nZT86ICh2YWx1ZTogYW55W10pID0+IHZvaWQ7XG59XG5cbmNvbnN0IE9uZTJtYW55SW5wdXQ6IFJlYWN0LkZDPE9uZTJNYW55SW5wdXRQcm9wcz4gPSAoXG4gIHByb3BzOiBPbmUyTWFueUlucHV0UHJvcHNcbikgPT4ge1xuICBjb25zdCB7IHZhbHVlID0gW10sIG9uQ2hhbmdlLCBvb3VpIH0gPSBwcm9wcztcblxuICBjb25zdCB0cmlnZ2VyQ2hhbmdlID0gKGNoYW5nZWRWYWx1ZTogbnVtYmVyW10pID0+IHtcbiAgICBvbkNoYW5nZT8uKGNoYW5nZWRWYWx1ZSk7XG4gIH07XG5cbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIHJlYWRPbmx5LFxuICAgIHJlcXVpcmVkLFxuICAgIHJlbGF0aW9uLFxuICAgIHZpZXdzOiBvb3VpVmlld3MsXG4gICAgbW9kZSxcbiAgfSA9IG9vdWkgYXMgT25lMm1hbnlPb3VpO1xuXG4gIGNvbnN0IFt2aWV3cywgc2V0Vmlld3NdID0gdXNlU3RhdGU8Vmlld3M+KG5ldyBNYXA8c3RyaW5nLCBhbnk+KCkpO1xuXG4gIGNvbnN0IFtjdXJyZW50Vmlldywgc2V0Q3VycmVudFZpZXddID0gdXNlU3RhdGU8c3RyaW5nPihcInRyZWVcIik7XG4gIGNvbnN0IFtpdGVtSW5kZXgsIHNldEl0ZW1JbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbc2hvd0Zvcm1Nb2RhbCwgc2V0U2hvd0Zvcm1Nb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFttb2RhbEl0ZW1JZCwgc2V0TW9kYWxJdGVtSWRdID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuXG4gIGNvbnN0IHNob3dSZW1vdmVDb25maXJtID0gKCkgPT4ge1xuICAgIGNvbmZpcm0oe1xuICAgICAgdGl0bGU6IFwiUmVtb3ZlIGl0ZW1cIixcbiAgICAgIGljb246IDxFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkIC8+LFxuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBjb250ZW50OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBpdGVtP1wiLFxuICAgICAgb2tUZXh0OiBcIlllcywgcmVtb3ZlIGl0XCIsXG4gICAgICBvbk9rKCkge1xuICAgICAgICBvbkNvbmZpcm1SZW1vdmUoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Vmlld0RhdGEgPSBhc3luYyAodHlwZTogXCJmb3JtXCIgfCBcInRyZWVcIikgPT4ge1xuICAgIGlmIChvb3VpVmlld3NbdHlwZV0pIHtcbiAgICAgIHJldHVybiBvb3VpVmlld3NbdHlwZV07XG4gICAgfVxuICAgIHJldHVybiBhd2FpdCBDb25uZWN0aW9uUHJvdmlkZXIuZ2V0SGFuZGxlcigpLmdldFZpZXcocmVsYXRpb24sIHR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RXJyb3IodW5kZWZpbmVkKTtcblxuICAgIHRyeSB7XG4gICAgICBpZiAobW9kZSAmJiBtb2RlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2V0Q3VycmVudFZpZXcobW9kZVswXSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcm1WaWV3ID0gYXdhaXQgZ2V0Vmlld0RhdGEoXCJmb3JtXCIpO1xuICAgICAgY29uc3QgdHJlZVZpZXcgPSBhd2FpdCBnZXRWaWV3RGF0YShcInRyZWVcIik7XG4gICAgICB2aWV3cy5zZXQoXCJmb3JtXCIsIGZvcm1WaWV3KTtcbiAgICAgIHZpZXdzLnNldChcInRyZWVcIiwgdHJlZVZpZXcpO1xuICAgICAgc2V0Vmlld3Modmlld3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoZXJyKTtcbiAgICB9XG5cbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtvb3VpXSk7XG5cbiAgY29uc3Qgc2VwYXJhdG9yID0gKCkgPT4ge1xuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTNcIiAvPjtcbiAgfTtcblxuICBjb25zdCBpbmRleCA9ICgpID0+IHtcbiAgICBsZXQgaXRlbVRvU2hvdyA9IFwiX1wiO1xuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIGl0ZW1Ub1Nob3cgPSBcIl9cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbVRvU2hvdyA9IChpdGVtSW5kZXggKyAxKS50b1N0cmluZygpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtMSBwci0xXCI+XG4gICAgICAgICh7aXRlbVRvU2hvd30ve3ZhbHVlLmxlbmd0aH0pXG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVWaWV3TW9kZSA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFZpZXcgPT09IFwiZm9ybVwiICYmIHZpZXdzLmdldChcInRyZWVcIikpIHtcbiAgICAgIHNldEN1cnJlbnRWaWV3KFwidHJlZVwiKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID09PSBcInRyZWVcIiAmJiB2aWV3cy5nZXQoXCJmb3JtXCIpKSB7XG4gICAgICBzZXRDdXJyZW50VmlldyhcImZvcm1cIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBjdXJyZW50VmlldyA9PT0gXCJmb3JtXCIgPyBGb3JtT291aSA6IFRyZWVPb3VpO1xuICAgIGNvbnN0IG9vdWkgPSBuZXcgdHlwZSh2aWV3cy5nZXQoY3VycmVudFZpZXcpLmZpZWxkcyk7XG4gICAgb291aS5wYXJzZSh2aWV3cy5nZXQoY3VycmVudFZpZXcpLmFyY2gpO1xuICAgIHJldHVybiAob291aSBhcyBhbnkpLnN0cmluZztcbiAgfTtcblxuICBjb25zdCBwcmV2aW91c0l0ZW0gPSAoKSA9PiB7XG4gICAgaWYgKGl0ZW1JbmRleCA+IDApIHtcbiAgICAgIHNldEl0ZW1JbmRleChpdGVtSW5kZXggLSAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbmV4dEl0ZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgdG90YWxJdGVtcyA9IHZhbHVlLmxlbmd0aDtcbiAgICBpZiAoaXRlbUluZGV4IDwgdG90YWxJdGVtcyAtIDEpIHtcbiAgICAgIHNldEl0ZW1JbmRleChpdGVtSW5kZXggKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZWRpdEl0ZW0gPSAoKSA9PiB7XG4gICAgc2V0TW9kYWxJdGVtSWQodmFsdWVbaXRlbUluZGV4XSk7XG4gICAgc2V0U2hvd0Zvcm1Nb2RhbCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVJdGVtID0gKCkgPT4ge1xuICAgIHNldE1vZGFsSXRlbUlkKHVuZGVmaW5lZCk7XG4gICAgc2V0U2hvd0Zvcm1Nb2RhbCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvbkNvbmZpcm1SZW1vdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKHVuZGVmaW5lZCk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5kZWxldGUoe1xuICAgICAgICBtb2RlbDogcmVsYXRpb24sXG4gICAgICAgIGlkczogW3ZhbHVlW2l0ZW1JbmRleF1dLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihlcnIpO1xuICAgIH1cblxuICAgIHNldEl0ZW1JbmRleCgwKTtcbiAgICB0cmlnZ2VyQ2hhbmdlKHZhbHVlLmZpbHRlcigoaWQpID0+IGlkICE9PSB2YWx1ZVtpdGVtSW5kZXhdKSk7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICBmZXRjaERhdGEoKTtcbiAgfTtcblxuICBjb25zdCB0b3BCYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYi0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC04IGZsZXggZmxleC1ncm93IGJnLWdyYXktNzAwIHRleHQtZ3JheS0yMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtMiBmb250LWJvbGRcIj57Z2V0VGl0bGUoKX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOCBmbGV4LW5vbmUgcGwtMlwiPlxuICAgICAgICAgIDxCdXR0b24gaWNvbj17PEZpbGVBZGRPdXRsaW5lZCBvbkNsaWNrPXtjcmVhdGVJdGVtfSAvPn0gLz5cbiAgICAgICAgICB7Y3VycmVudFZpZXcgPT09IFwiZm9ybVwiICYmIChcbiAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PEVkaXRPdXRsaW5lZCAvPn0gb25DbGljaz17ZWRpdEl0ZW19IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y3VycmVudFZpZXcgPT09IFwiZm9ybVwiICYmIChcbiAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PERlbGV0ZU91dGxpbmVkIG9uQ2xpY2s9e3Nob3dSZW1vdmVDb25maXJtfSAvPn0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtzZXBhcmF0b3IoKX1cbiAgICAgICAgICB7Y3VycmVudFZpZXcgPT09IFwiZm9ybVwiICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PExlZnRPdXRsaW5lZCAvPn0gb25DbGljaz17cHJldmlvdXNJdGVtfSAvPlxuICAgICAgICAgICAgICB7aW5kZXgoKX1cbiAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPXs8UmlnaHRPdXRsaW5lZCAvPn0gb25DbGljaz17bmV4dEl0ZW19IC8+XG4gICAgICAgICAgICAgIHtzZXBhcmF0b3IoKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEJ1dHRvbiBpY29uPXs8QWxpZ25MZWZ0T3V0bGluZWQgLz59IG9uQ2xpY2s9e3RvZ2dsZVZpZXdNb2RlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgY29udGVudCA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFZpZXcgPT09IFwiZm9ybVwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rm9ybVxuICAgICAgICAgIG1vZGVsPXtyZWxhdGlvbn1cbiAgICAgICAgICBpZD17dmFsdWVbaXRlbUluZGV4XX1cbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge319XG4gICAgICAgICAgb25TdWJtaXRTdWNjZWVkPXsoKSA9PiB7XG4gICAgICAgICAgICBmZXRjaERhdGEoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNpbXBsZVRyZWVcbiAgICAgICAgbW9kZWw9e3JlbGF0aW9ufVxuICAgICAgICBpZHM9e3ZhbHVlfVxuICAgICAgICBmb3JtVmlldz17dmlld3MuZ2V0KFwiZm9ybVwiKX1cbiAgICAgICAgdHJlZVZpZXc9e3ZpZXdzLmdldChcInRyZWVcIil9XG4gICAgICAgIG9uUm93Q2xpY2tlZD17KGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCB7IGlkIH0gPSBldmVudDtcbiAgICAgICAgICBzZXRNb2RhbEl0ZW1JZChpZCk7XG4gICAgICAgICAgc2V0U2hvd0Zvcm1Nb2RhbCh0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxTcGluIC8+O1xuICB9XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxBbGVydCBjbGFzc05hbWU9XCJtdC0xMFwiIG1lc3NhZ2U9e2Vycm9yfSB0eXBlPVwiZXJyb3JcIiBiYW5uZXIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7dG9wQmFyKCl9XG4gICAgICB7Y29udGVudCgpfVxuICAgICAgPEZvcm1Nb2RhbFxuICAgICAgICBtb2RlbD17cmVsYXRpb259XG4gICAgICAgIGlkPXttb2RhbEl0ZW1JZH1cbiAgICAgICAgdmlzaWJsZT17c2hvd0Zvcm1Nb2RhbH1cbiAgICAgICAgb25TdWJtaXRTdWNjZWVkPXsoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnN0IFtpZF0gPSBldmVudDtcbiAgICAgICAgICBpZiAoIXZhbHVlLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgdHJpZ2dlckNoYW5nZSh2YWx1ZS5jb25jYXQoaWQpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRTaG93Rm9ybU1vZGFsKGZhbHNlKTtcbiAgICAgICAgICBmZXRjaERhdGEoKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICBzZXRTaG93Rm9ybU1vZGFsKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IFNlbGVjdGlvbiBhcyBTZWxlY3Rpb25Pb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIkAvQ29uZmlnXCI7XG5cbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3Rpb24gPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgc2VsZWN0aW9uVmFsdWVzLCByZWFkT25seSwgcmVxdWlyZWQgfSA9IG9vdWkgYXMgU2VsZWN0aW9uT291aTtcblxuICBjb25zdCB2YWx1ZXMgPSBBcnJheS5mcm9tKHNlbGVjdGlvblZhbHVlcy5lbnRyaWVzKCkpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPVxuICAgIHZhbHVlcyAmJlxuICAgIHZhbHVlcy5sZW5ndGggJiZcbiAgICB2YWx1ZXMubWFwKChlbnRyeTogc3RyaW5nW10pID0+IHtcbiAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2tleX0+XG4gICAgICAgICAge3ZhbHVlfVxuICAgICAgICA8L09wdGlvbj5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgY29uc3QgQ3VzdG9tU2VsZWN0OiBhbnkgPSByZXF1aXJlZCA/IFJlcXVpcmVkU2VsZWN0IDogU2VsZWN0O1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIHsuLi5wcm9wc30+XG4gICAgICA8Q3VzdG9tU2VsZWN0IGRpc2FibGVkPXtyZWFkT25seX0+e29wdGlvbnN9PC9DdXN0b21TZWxlY3Q+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG5cbmNvbnN0IFJlcXVpcmVkU2VsZWN0ID0gc3R5bGVkKFNlbGVjdClgXG4gICYuYW50LXNlbGVjdDpub3QoLmFudC1zZWxlY3QtY3VzdG9taXplLWlucHV0KSAuYW50LXNlbGVjdC1zZWxlY3RvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb25maWcucmVxdWlyZWRDb2xvcn07XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IFNlcGFyYXRvciBhcyBTZXBhcmF0b3JPb3VpIH0gZnJvbSBcIm9vdWlcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogU2VwYXJhdG9yT291aTtcbn07XG5cbmV4cG9ydCBjb25zdCBTZXBhcmF0b3IgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgbGFiZWwgfSA9IG9vdWk7XG5cbiAgcmV0dXJuIChcbiAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICB7bGFiZWx9XG4gICAgPC9EaXZpZGVyPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIkAvQ29uZmlnXCI7XG5pbXBvcnQgeyBUZXh0IGFzIFRleHRPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xuXG50eXBlIFByb3BzID0ge1xuICBvb3VpOiBUZXh0T291aTtcbn07XG5cbmNvbnN0IFRleHQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgcmVhZE9ubHksIHJlcXVpcmVkIH0gPSBvb3VpO1xuICBjb25zdCByZXF1aXJlZENsYXNzID0gcmVxdWlyZWQgPyBDb25maWcucmVxdWlyZWRDbGFzcyA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9PlxuICAgICAgPFRleHRBcmVhIGRpc2FibGVkPXtyZWFkT25seX0gY2xhc3NOYW1lPXtyZXF1aXJlZENsYXNzfSByb3dzPXs0fSAvPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIGFzIENvbnRhaW5lck9vdWksIFdpZGdldCB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBjcmVhdGVSZWFjdFdpZGdldCB9IGZyb20gXCJAL3dpZGdldHMvV2lkZ2V0RmFjdG9yeVwiO1xuXG5pbXBvcnQge1xuICBnZXRUZW1wbGF0ZUNvbHVtbnMsXG4gIGZpbGxSb3dXaXRoRW1wdGllc1RvRml0LFxuICBnZXRTcGFuU3R5bGVGb3JJdGVtLFxuICBleHBhbmRXaWRnZXRzSWZOZWVkZWQsXG59IGZyb20gXCJAL2hlbHBlcnMvY29udGFpbmVySGVscGVyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNvbnRhaW5lcjogQ29udGFpbmVyT291aTtcbiAgZm9ybVdyYXBwZXI/OiBib29sZWFuO1xuICByZXNwb25zaXZlQmVoYXZpb3VyOiBib29sZWFuO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XG4gIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtV3JhcHBlciA9IGZhbHNlLCByZXNwb25zaXZlQmVoYXZpb3VyIH0gPSBwcm9wcztcbiAgY29uc3QgeyByb3dzIH0gPSBjb250YWluZXI7XG4gIGxldCB7IGNvbHVtbnMgfSA9IGNvbnRhaW5lcjtcblxuICBjb25zdCBjb250ZW50ID0gcm93cy5tYXAoKHJvdzogV2lkZ2V0W10sIGkpID0+IHtcbiAgICBjb25zdCByb3dXaXRob3V0SW52aXNpYmxlRmllbGRzID0gcm93LmZpbHRlcigod2lkZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gIXdpZGdldC5pbnZpc2libGU7XG4gICAgfSk7XG5cbiAgICBjb25zdCByb3dXaXRoRXhwYW5kZWRJdGVtcyA9IGV4cGFuZFdpZGdldHNJZk5lZWRlZCh7XG4gICAgICByb3c6IHJvd1dpdGhvdXRJbnZpc2libGVGaWVsZHMsXG4gICAgICBudW1iZXJPZkNvbHVtbnM6IGNvbHVtbnMsXG4gICAgfSk7XG5cbiAgICBjb25zdCByb3dXaXRoRW1wdGllc1RvRml0ID0gZmlsbFJvd1dpdGhFbXB0aWVzVG9GaXQoe1xuICAgICAgcm93OiByb3dXaXRoRXhwYW5kZWRJdGVtcyxcbiAgICAgIG51bWJlck9mQ29sdW1uczogY29sdW1ucyxcbiAgICAgIG11c3RGaWxsV2l0aEVtcHRpZXM6IHJlc3BvbnNpdmVCZWhhdmlvdXIsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcm93V2l0aEVtcHRpZXNUb0ZpdC5tYXAoKGl0ZW06IFdpZGdldCwgajogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtgJHtpLnRvU3RyaW5nKCl9LSR7ai50b1N0cmluZygpfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VsZi1jZW50ZXIgcC0yXCJcbiAgICAgICAgICBzdHlsZT17Z2V0U3BhblN0eWxlRm9ySXRlbSh7IGl0ZW0sIHJlc3BvbnNpdmVCZWhhdmlvdXIgfSl9XG4gICAgICAgID5cbiAgICAgICAgICB7Y3JlYXRlUmVhY3RXaWRnZXQoe1xuICAgICAgICAgICAgb291aTogaXRlbSxcbiAgICAgICAgICAgIHJlc3BvbnNpdmVCZWhhdmlvdXIsXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gVE9ETzogUmV2aWV3IHRoaXMgYmVoYXZpb3VyIGlmIGl0J3MgbmVlZGVkXG4gIGlmIChmb3JtV3JhcHBlcikge1xuICAgIGNvbHVtbnMgPSA0O1xuICAgIC8vIHJldHVybiBjb250ZW50IGFzIGFueTtcbiAgfVxuXG4gIGNvbnN0IHRlbXBsYXRlQ29sdW1ucyA9IGdldFRlbXBsYXRlQ29sdW1ucyhjb2x1bW5zKTtcbiAgY29uc3QgZ3JpZFN0eWxlID0ge1xuICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHJlc3BvbnNpdmVCZWhhdmlvdXIgPyBcImF1dG9cIiA6IHRlbXBsYXRlQ29sdW1ucyxcbiAgfTtcblxuICByZXR1cm4gPGRpdiBzdHlsZT17Z3JpZFN0eWxlfT57Y29udGVudH08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHcm91cCBhcyBHcm91cE9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBGaWVsZHNldCBmcm9tIFwiQC91aS9GaWVsZHNldFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBvb3VpOiBHcm91cE9vdWk7XG4gIHNob3dMYWJlbD86IGJvb2xlYW47XG4gIHJlc3BvbnNpdmVCZWhhdmlvdXI6IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiBHcm91cChwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7IG9vdWksIHNob3dMYWJlbCA9IHRydWUsIHJlc3BvbnNpdmVCZWhhdmlvdXIgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtvb3VpLmxhYmVsICYmIHNob3dMYWJlbCA/IChcbiAgICAgICAgPEZpZWxkc2V0IGxhYmVsPXtvb3VpLmxhYmVsfT5cbiAgICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgICBjb250YWluZXI9e29vdWkhLmNvbnRhaW5lcn1cbiAgICAgICAgICAgIHJlc3BvbnNpdmVCZWhhdmlvdXI9e3Jlc3BvbnNpdmVCZWhhdmlvdXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GaWVsZHNldD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICBjb250YWluZXI9e29vdWkhLmNvbnRhaW5lcn1cbiAgICAgICAgICByZXNwb25zaXZlQmVoYXZpb3VyPXtyZXNwb25zaXZlQmVoYXZpb3VyfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJzIH0gZnJvbSBcImFudGRcIjtcbmNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcblxuaW1wb3J0IHsgTm90ZWJvb2sgYXMgTm90ZWJvb2tPb3VpLCBHcm91cCBhcyBHcm91cE9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiQC9pbmRleFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBvb3VpOiBOb3RlYm9va09vdWk7XG4gIHJlc3BvbnNpdmVCZWhhdmlvdXI6IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiBOb3RlYm9vayhwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7IG9vdWksIHJlc3BvbnNpdmVCZWhhdmlvdXIgfSA9IHByb3BzO1xuICBjb25zdCB0YWJzID0gW10uY29uY2F0LmFwcGx5KFtdLCBvb3VpIS5jb250YWluZXIucm93cyk7XG4gIHJldHVybiAoXG4gICAgPFRhYnMgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIj5cbiAgICAgIHt0YWJzLm1hcCgocGFnZTogYW55LCBrZXk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCB0YWJLZXkgPSAoa2V5ICsgMSkudG9TdHJpbmcoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxUYWJQYW5lIHRhYj17cGFnZS5sYWJlbH0ga2V5PXt0YWJLZXl9PlxuICAgICAgICAgICAgPEdyb3VwIG9vdWk9e3BhZ2UgYXMgR3JvdXBPb3VpfSBzaG93TGFiZWw9e2ZhbHNlfSByZXNwb25zaXZlQmVoYXZpb3VyPXtyZXNwb25zaXZlQmVoYXZpb3VyfSAvPlxuICAgICAgICAgIDwvVGFiUGFuZT5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvVGFicz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90ZWJvb2s7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiQC93aWRnZXRzL3ZpZXdzL0Zvcm1cIjtcblxudHlwZSBGb3JtTW9kYWxQcm9wcyA9IHtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgbW9kZWw6IHN0cmluZztcbiAgaWQ/OiBudW1iZXI7XG4gIGdldERhdGFGcm9tQWN0aW9uPzogYm9vbGVhbjtcbiAgb25DYW5jZWw/OiAoKSA9PiB2b2lkO1xuICBvblN1Ym1pdFN1Y2NlZWQ/OiAodXBkYXRlZE9iamVjdDogYW55KSA9PiB2b2lkO1xuICB0aXRsZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBGb3JtTW9kYWwgPSAocHJvcHM6IEZvcm1Nb2RhbFByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB2aXNpYmxlLFxuICAgIG9uQ2FuY2VsLFxuICAgIG9uU3VibWl0U3VjY2VlZCxcbiAgICBpZCxcbiAgICBtb2RlbCxcbiAgICB0aXRsZSA9IGlkID8gXCJEZXRhaWxcIiA6IFwiTmV3XCIsXG4gICAgZ2V0RGF0YUZyb21BY3Rpb24sXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgY2VudGVyZWRcbiAgICAgIHdpZHRoPXsxMDAwfVxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgIGNsb3NhYmxlPXtmYWxzZX1cbiAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICA+XG4gICAgICA8Rm9ybVxuICAgICAgICAvLyBrZXk9e01hdGgucmFuZG9tKCkgKiAxMDAwMH0gLy8gVGhpcyBmb3JjZXMgdGhlIEZvcm0gY29tcG9uZW50IHRvIGJlIHVuaXF1ZSBlYWNoIHRpbWUgdGhlIG1vZGFsIGlzIHNob3duXG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgbW9kZWw9e21vZGVsfVxuICAgICAgICBnZXREYXRhRnJvbUFjdGlvbj17Z2V0RGF0YUZyb21BY3Rpb259XG4gICAgICAgIG9uQ2FuY2VsPXtvbkNhbmNlbH1cbiAgICAgICAgb25TdWJtaXRTdWNjZWVkPXtvblN1Ym1pdFN1Y2NlZWR9XG4gICAgICAgIHNob3dGb290ZXJcbiAgICAgIC8+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIERpdmlkZXIsIEFsZXJ0LCBTcGluLCBSb3csIFNwYWNlIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEZvcm1Nb2RhbCB9IGZyb20gXCIuL0Zvcm1Nb2RhbFwiO1xuaW1wb3J0IFNlYXJjaFRyZWUgZnJvbSBcIkAvd2lkZ2V0cy92aWV3cy9TZWFyY2hUcmVlXCI7XG5pbXBvcnQgQ29ubmVjdGlvblByb3ZpZGVyIGZyb20gXCJAL0Nvbm5lY3Rpb25Qcm92aWRlclwiO1xuaW1wb3J0IHsgRmlsZUFkZE91dGxpbmVkLCBDbG9zZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbnR5cGUgU2VhcmNoU2VsZWN0aW9uUHJvcHMgPSB7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIG1vZGVsOiBzdHJpbmc7XG4gIG5hbWVTZWFyY2g/OiBzdHJpbmc7XG4gIG9uU2VsZWN0VmFsdWU6ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xuICBvbkNsb3NlTW9kYWw6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgU2VhcmNoTW9kYWwgPSAocHJvcHM6IFNlYXJjaFNlbGVjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdmlzaWJsZSwgb25DbG9zZU1vZGFsLCBvblNlbGVjdFZhbHVlLCBtb2RlbCwgbmFtZVNlYXJjaCB9ID0gcHJvcHM7XG4gIGNvbnN0IFtzaG93Q3JlYXRlTW9kYWwsIHNldFNob3dDcmVhdGVNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgY29uc3Qgb25Sb3dDbGlja2VkID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKHVuZGVmaW5lZCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgaWQsIG1vZGVsIH0gPSBldmVudDtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5leGVjdXRlKHtcbiAgICAgICAgYWN0aW9uOiBcIm5hbWVfZ2V0XCIsXG4gICAgICAgIHBheWxvYWQ6IFtpZF0sXG4gICAgICAgIG1vZGVsLFxuICAgICAgfSk7XG4gICAgICBvblNlbGVjdFZhbHVlKHZhbHVlWzBdKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb250ZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7ZXJyb3IgJiYgKFxuICAgICAgICAgIDxBbGVydCBjbGFzc05hbWU9XCJtdC0xMFwiIG1lc3NhZ2U9e2Vycm9yfSB0eXBlPVwiZXJyb3JcIiBiYW5uZXIgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3Zpc2libGUgJiYgKFxuICAgICAgICAgIDxTZWFyY2hUcmVlXG4gICAgICAgICAgICBtb2RlbD17bW9kZWx9XG4gICAgICAgICAgICBuYW1lU2VhcmNoPXtuYW1lU2VhcmNofVxuICAgICAgICAgICAgb25Sb3dDbGlja2VkPXtvblJvd0NsaWNrZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPFJvdyBqdXN0aWZ5PVwiZW5kXCI+XG4gICAgICAgICAgPFNwYWNlPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgaWNvbj17PEZpbGVBZGRPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNob3dDcmVhdGVNb2RhbCh0cnVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmV3XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgIGljb249ezxDbG9zZU91dGxpbmVkIC8+fVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlTW9kYWx9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9TcGFjZT5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbFxuICAgICAgICB0aXRsZT1cIlNlYXJjaFwiXG4gICAgICAgIGNlbnRlcmVkXG4gICAgICAgIHdpZHRoPXsxNDAwfVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlICYmICFzaG93Q3JlYXRlTW9kYWx9XG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxuICAgICAgICBvbkNhbmNlbD17b25DbG9zZU1vZGFsfVxuICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAvLyBrZXk9e01hdGgucmFuZG9tKCkgKiAxMDAwMH0gLy8gVGhpcyBmb3JjZXMgdGhlIGNvbXBvbmVudCB0byBiZSB1bmlxdWUgZWFjaCB0aW1lIHRoZSBtb2RhbCBpcyBzaG93blxuICAgICAgICA+XG4gICAgICAgICAge2xvYWRpbmcgPyA8U3BpbiAvPiA6IGNvbnRlbnQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgICAgPEZvcm1Nb2RhbFxuICAgICAgICBtb2RlbD17bW9kZWx9XG4gICAgICAgIHZpc2libGU9e3Nob3dDcmVhdGVNb2RhbH1cbiAgICAgICAgb25TdWJtaXRTdWNjZWVkPXsodmFsdWUpID0+IHtcbiAgICAgICAgICBzZXRTaG93Q3JlYXRlTW9kYWwoZmFsc2UpO1xuICAgICAgICAgIG9uQ2xvc2VNb2RhbCgpO1xuICAgICAgICAgIG9uU2VsZWN0VmFsdWUodmFsdWUpO1xuICAgICAgICB9fVxuICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgIHNldFNob3dDcmVhdGVNb2RhbChmYWxzZSk7XG4gICAgICAgICAgb25DbG9zZU1vZGFsKCk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtIGFzIEZvcm1Pb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7XG4gIEZvcm0gYXMgQW50Rm9ybSxcbiAgQnV0dG9uLFxuICBEaXZpZGVyLFxuICBTcGFjZSxcbiAgUm93LFxuICBBbGVydCxcbiAgU3BpbixcbiAgTW9kYWwsXG59IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgdXNlRGltZW5zaW9ucyBmcm9tIFwicmVhY3QtY29vbC1kaW1lbnNpb25zXCI7XG5pbXBvcnQge1xuICBDaGVja091dGxpbmVkLFxuICBDbG9zZU91dGxpbmVkLFxuICBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiQC93aWRnZXRzL2NvbnRhaW5lcnMvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBwcm9jZXNzVmFsdWVzLCBnZXRUb3VjaGVkVmFsdWVzIH0gZnJvbSBcIkAvaGVscGVycy9mb3JtSGVscGVyXCI7XG5pbXBvcnQgeyBGb3JtVmlldyB9IGZyb20gXCJAL3R5cGVzL2luZGV4XCI7XG5pbXBvcnQgQ29ubmVjdGlvblByb3ZpZGVyIGZyb20gXCJAL0Nvbm5lY3Rpb25Qcm92aWRlclwiO1xuXG5jb25zdCB7IGNvbmZpcm0gfSA9IE1vZGFsO1xuXG50eXBlIFByb3BzID0ge1xuICBtb2RlbDogc3RyaW5nO1xuICBpZD86IG51bWJlcjtcbiAgb25TdWJtaXRTdWNjZWVkPzogKHVwZGF0ZWRPYmplY3Q6IGFueSkgPT4gdm9pZDtcbiAgb25DYW5jZWw/OiAoKSA9PiB2b2lkO1xuICBzaG93Rm9vdGVyPzogYm9vbGVhbjtcbiAgZ2V0RGF0YUZyb21BY3Rpb24/OiBib29sZWFuO1xufTtcblxuY29uc3QgV0lEVEhfQlJFQUtQT0lOVCA9IDEwMDA7XG5cbnR5cGUgRm9ybVZpZXdBbmRPb3VpID0ge1xuICBvb3VpOiBGb3JtT291aTtcbiAgdmlldzogRm9ybVZpZXc7XG59O1xuXG5mdW5jdGlvbiBGb3JtKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBtb2RlbCxcbiAgICBpZCxcbiAgICBvbkNhbmNlbCxcbiAgICBvblN1Ym1pdFN1Y2NlZWQsXG4gICAgc2hvd0Zvb3RlciA9IGZhbHNlLFxuICAgIGdldERhdGFGcm9tQWN0aW9uID0gZmFsc2UsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZTxGb3JtVmlld0FuZE9vdWk+KCk7XG4gIGNvbnN0IFthbnRGb3JtXSA9IEFudEZvcm0udXNlRm9ybSgpO1xuXG4gIGNvbnN0IHsgd2lkdGgsIHJlZiB9ID0gdXNlRGltZW5zaW9uczxIVE1MRGl2RWxlbWVudD4oe1xuICAgIGJyZWFrcG9pbnRzOiB7IFhTOiAwLCBTTTogMzIwLCBNRDogNDgwLCBMRzogMTAwMCB9LFxuICAgIHVwZGF0ZU9uQnJlYWtwb2ludENoYW5nZTogdHJ1ZSxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNpdmVCZWhhdmlvdXIgPSB3aWR0aCA8IFdJRFRIX0JSRUFLUE9JTlQ7XG5cbiAgY29uc3Qgc2hvd0NvbmZpcm0gPSAoKSA9PiB7XG4gICAgY29uZmlybSh7XG4gICAgICB0aXRsZTogXCJUaGVyZSBhcmUgdW5zYXZlZCBjaGFuZ2VzXCIsXG4gICAgICBpY29uOiA8RXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCAvPixcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgY29udGVudDogXCJEbyB5b3UgcmVhbGx5IHdhbnQgdG8gY2xvc2UgdGhpcyB3aW5kb3cgd2l0aG91dCBzYXZpbmc/XCIsXG4gICAgICBva1RleHQ6IFwiQ2xvc2Ugd2l0aG91dCBzYXZpbmdcIixcbiAgICAgIG9uT2soKSB7XG4gICAgICAgIG9uQ2FuY2VsPy4oKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhnZXRUb3VjaGVkVmFsdWVzKGFudEZvcm0pKS5sZW5ndGggPiAwKSB7XG4gICAgICBzaG93Q29uZmlybSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsPy4oKTtcbiAgfTtcblxuICBjb25zdCBnZXRGb3JtVmlldyA9IGFzeW5jICgpOiBQcm9taXNlPEZvcm1WaWV3PiA9PiB7XG4gICAgaWYgKGdldERhdGFGcm9tQWN0aW9uKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBhd2FpdCBDb25uZWN0aW9uUHJvdmlkZXIuZ2V0SGFuZGxlcigpLmdldEFjdGlvbihtb2RlbCk7XG4gICAgICBjb25zdCB2aWV3c0ZvckFjdGlvbiA9IGF3YWl0IENvbm5lY3Rpb25Qcm92aWRlci5nZXRIYW5kbGVyKCkuZ2V0Vmlld3NGb3JBY3Rpb24oXG4gICAgICAgIGFjdGlvblxuICAgICAgKTtcbiAgICAgIHJldHVybiB2aWV3c0ZvckFjdGlvbi52aWV3cy5nZXQoXCJmb3JtXCIpO1xuICAgIH1cblxuICAgIHJldHVybiAoYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5nZXRWaWV3KFxuICAgICAgbW9kZWwsXG4gICAgICBcImZvcm1cIlxuICAgICkpIGFzIEZvcm1WaWV3O1xuICB9O1xuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZpZXcgPSBhd2FpdCBnZXRGb3JtVmlldygpO1xuXG4gICAgICBjb25zdCBvb3VpID0gbmV3IEZvcm1Pb3VpKHZpZXcuZmllbGRzKTtcbiAgICAgIG9vdWkucGFyc2Uodmlldy5hcmNoKTtcbiAgICAgIHNldEZvcm0oeyBvb3VpLCB2aWV3IH0pO1xuXG4gICAgICBsZXQgX3ZhbHVlcyA9IHt9O1xuICAgICAgaWYgKGlkKSB7XG4gICAgICAgIF92YWx1ZXMgPSAoXG4gICAgICAgICAgYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5yZWFkT2JqZWN0cyh7XG4gICAgICAgICAgICBhcmNoOiB2aWV3IS5hcmNoLFxuICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICBpZHM6IFtpZF0sXG4gICAgICAgICAgfSlcbiAgICAgICAgKVswXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF92YWx1ZXMgPSBhd2FpdCBDb25uZWN0aW9uUHJvdmlkZXIuZ2V0SGFuZGxlcigpLmV4ZWN1dGUoe1xuICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgIGFjdGlvbjogXCJkZWZhdWx0X2dldFwiLFxuICAgICAgICAgIHBheWxvYWQ6IE9iamVjdC5rZXlzKHZpZXcuZmllbGRzKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbHVlc1Byb2Nlc3NlZCA9IHByb2Nlc3NWYWx1ZXMoX3ZhbHVlcywgdmlldy5maWVsZHMpO1xuXG4gICAgICBjb25zdCBtdXN0Q2xlYXJGaWVsZHNGaXJzdCA9XG4gICAgICAgIE9iamVjdC5rZXlzKGFudEZvcm0uZ2V0RmllbGRzVmFsdWUodHJ1ZSkpLmxlbmd0aCA+IDA7IC8vIFdlIGNoZWNrIGlmIGl0J3MgYSByZXVzZWQgZm9ybSBhbmQgd2UgYWxyZWFkeSBoYXZlIHZhbHVlcyBmaWxsZWRcblxuICAgICAgaWYgKG11c3RDbGVhckZpZWxkc0ZpcnN0KSB7XG4gICAgICAgIGFudEZvcm0ucmVzZXRGaWVsZHMoKTtcbiAgICAgIH1cblxuICAgICAgYW50Rm9ybS5zZXRGaWVsZHNWYWx1ZSh2YWx1ZXNQcm9jZXNzZWQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtpZCwgbW9kZWxdKTtcblxuICBjb25zdCBzdWJtaXRGb3JtID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG91Y2hlZFZhbHVlcyA9IGdldFRvdWNoZWRWYWx1ZXMoYW50Rm9ybSk7XG5cbiAgICAgIGxldCBvYmplY3RJZCA9IGlkO1xuXG4gICAgICBpZiAoT2JqZWN0LmtleXModG91Y2hlZFZhbHVlcykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgIGF3YWl0IENvbm5lY3Rpb25Qcm92aWRlci5nZXRIYW5kbGVyKCkudXBkYXRlKHtcbiAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB2YWx1ZXM6IHRvdWNoZWRWYWx1ZXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmV3SWQgPSBhd2FpdCBDb25uZWN0aW9uUHJvdmlkZXIuZ2V0SGFuZGxlcigpLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgIHZhbHVlczogdG91Y2hlZFZhbHVlcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBvYmplY3RJZCA9IG5ld0lkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5leGVjdXRlKHtcbiAgICAgICAgYWN0aW9uOiBcIm5hbWVfZ2V0XCIsXG4gICAgICAgIHBheWxvYWQ6IFtvYmplY3RJZF0sXG4gICAgICAgIG1vZGVsLFxuICAgICAgfSk7XG5cbiAgICAgIG9uU3VibWl0U3VjY2VlZD8uKHZhbHVlWzBdKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbnRlbnQgPSAoKSA9PiB7XG4gICAgaWYgKCFmb3JtKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFudEZvcm1cbiAgICAgICAgZm9ybT17YW50Rm9ybX1cbiAgICAgICAgLy8gaW5pdGlhbFZhbHVlcz17dmFsdWVzfVxuICAgICAgPlxuICAgICAgICB7Zm9ybSAmJiAoXG4gICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgY29udGFpbmVyPXtmb3JtLm9vdWkuY29udGFpbmVyfVxuICAgICAgICAgICAgZm9ybVdyYXBwZXJcbiAgICAgICAgICAgIHJlc3BvbnNpdmVCZWhhdmlvdXI9e3Jlc3BvbnNpdmVCZWhhdmlvdXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvQW50Rm9ybT5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPFJvdyBqdXN0aWZ5PVwiZW5kXCI+XG4gICAgICAgICAgPFNwYWNlPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBpY29uPXs8Q2xvc2VPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZyB8fCBsb2FkaW5nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtjYW5jZWx9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmcgfHwgbG9hZGluZ31cbiAgICAgICAgICAgICAgbG9hZGluZz17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgICAgICBpY29uPXs8Q2hlY2tPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17c3VibWl0Rm9ybX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgT0tcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtyZWZ9PlxuICAgICAge2Vycm9yICYmIDxBbGVydCBjbGFzc05hbWU9XCJtdC0xMFwiIG1lc3NhZ2U9e2Vycm9yfSB0eXBlPVwiZXJyb3JcIiBiYW5uZXIgLz59XG4gICAgICB7bG9hZGluZyA/IDxTcGluIC8+IDogY29udGVudCgpfVxuICAgICAge3Nob3dGb290ZXIgJiYgZm9vdGVyKCl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnQsIFNwaW4gfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgU2VhcmNoRmlsdGVyIGZyb20gXCJAL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL1NlYXJjaEZpbHRlclwiO1xuaW1wb3J0IFRyZWUgZnJvbSBcIkAvd2lkZ2V0cy92aWV3cy9UcmVlXCI7XG5pbXBvcnQgeyBGb3JtVmlldywgVHJlZVZpZXcgfSBmcm9tIFwiQC90eXBlcy9pbmRleFwiO1xuaW1wb3J0IENvbm5lY3Rpb25Qcm92aWRlciBmcm9tIFwiQC9Db25uZWN0aW9uUHJvdmlkZXJcIjtcblxuY29uc3QgREVGQVVMVF9TRUFSQ0hfTElNSVQgPSA4MDtcblxudHlwZSBPblJvd0NsaWNrZWREYXRhID0ge1xuICBpZDogbnVtYmVyO1xuICBtb2RlbDogc3RyaW5nO1xuICBmb3JtVmlldzogRm9ybVZpZXc7XG4gIHRyZWVWaWV3OiBUcmVlVmlldztcbn07XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFjdGlvbj86IHN0cmluZztcbiAgbW9kZWw/OiBzdHJpbmc7XG4gIG9uUm93Q2xpY2tlZDogKGRhdGE6IE9uUm93Q2xpY2tlZERhdGEpID0+IHZvaWQ7XG4gIG5hbWVTZWFyY2g/OiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBTZWFyY2hUcmVlKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGFjdGlvbiwgbW9kZWwsIG9uUm93Q2xpY2tlZCwgbmFtZVNlYXJjaCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2luaXRpYWxGZXRjaERvbmUsIHNldEluaXRpYWxGZXRjaERvbmVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2VhcmNoTmFtZUdldERvbmUsIHNldFNlYXJjaE5hbWVHZXREb25lXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBbY3VycmVudE1vZGVsLCBzZXRDdXJyZW50TW9kZWxdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbdHJlZVZpZXcsIHNldFRyZWVWaWV3XSA9IHVzZVN0YXRlPFRyZWVWaWV3PigpO1xuICBjb25zdCBbZm9ybVZpZXcsIHNldEZvcm1WaWV3XSA9IHVzZVN0YXRlPEZvcm1WaWV3PigpO1xuXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlPG51bWJlcj4oREVGQVVMVF9TRUFSQ0hfTElNSVQpO1xuICBjb25zdCBbbGltaXRGcm9tQWN0aW9uLCBzZXRMaW1pdEZyb21BY3Rpb25dID0gdXNlU3RhdGU8bnVtYmVyPigpO1xuXG4gIGNvbnN0IFtwYXJhbXMsIHNldFBhcmFtc10gPSB1c2VTdGF0ZTxBcnJheTxhbnk+PihbXSk7XG5cbiAgY29uc3QgW3RvdGFsSXRlbXMsIHNldFRvdGFsSXRlbXNdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGU8YW55PihbXSk7XG5cbiAgY29uc3QgW3NlYXJjaEZpbHRlckxvYWRpbmcsIHNldFNlYXJjaEZpbHRlckxvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oXG4gICAgZmFsc2VcbiAgKTtcbiAgY29uc3QgW3NlYXJjaEVycm9yLCBzZXRTZWFyY2hFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtpbml0aWFsRXJyb3IsIHNldEluaXRpYWxFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgY29uc3QgW3RhYmxlUmVmcmVzaGluZywgc2V0VGFibGVSZWZyZXNoaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBvblJlcXVlc3RQYWdlQ2hhbmdlID0gKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIHNldFRhYmxlUmVmcmVzaGluZyh0cnVlKTtcbiAgICBzZXRQYWdlKHBhZ2UpO1xuICAgIHNldE9mZnNldCgocGFnZSAtIDEpICogbGltaXQhKTtcbiAgfTtcblxuICBjb25zdCBzZWFyY2hCeU5hbWVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGF3YWl0IENvbm5lY3Rpb25Qcm92aWRlci5nZXRIYW5kbGVyKCkuZXhlY3V0ZSh7XG4gICAgICBtb2RlbDogY3VycmVudE1vZGVsISxcbiAgICAgIGFjdGlvbjogXCJuYW1lX3NlYXJjaFwiLFxuICAgICAgcGF5bG9hZDogbmFtZVNlYXJjaCxcbiAgICB9KTtcblxuICAgIHNldFRvdGFsSXRlbXMoc2VhcmNoUmVzdWx0cy5sZW5ndGgpO1xuXG4gICAgaWYgKHNlYXJjaFJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVzdWx0c0lkcyA9IHNlYXJjaFJlc3VsdHMubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0/LlswXTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzdWx0c1dpdGhEYXRhID0gYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5yZWFkT2JqZWN0cyh7XG4gICAgICAgIG1vZGVsOiBjdXJyZW50TW9kZWwhLFxuICAgICAgICBpZHM6IHJlc3VsdHNJZHMsXG4gICAgICAgIGFyY2g6IHRyZWVWaWV3Py5hcmNoISxcbiAgICAgIH0pO1xuICAgICAgc2V0UmVzdWx0cyhyZXN1bHRzV2l0aERhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRSZXN1bHRzKFtdKTtcbiAgICB9XG5cbiAgICBzZXRTZWFyY2hOYW1lR2V0RG9uZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBzZWFyY2hSZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRvdGFsSXRlbXMsXG4gICAgICByZXN1bHRzLFxuICAgIH0gPSBhd2FpdCBDb25uZWN0aW9uUHJvdmlkZXIuZ2V0SGFuZGxlcigpLnNlYXJjaCh7XG4gICAgICBwYXJhbXMsXG4gICAgICBsaW1pdCxcbiAgICAgIG9mZnNldCxcbiAgICAgIG1vZGVsOiBjdXJyZW50TW9kZWwhLFxuICAgICAgZmllbGRzOiB0cmVlVmlldyEuZmllbGRzLFxuICAgIH0pO1xuICAgIHNldFRvdGFsSXRlbXModG90YWxJdGVtcyk7XG4gICAgc2V0UmVzdWx0cyhyZXN1bHRzKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaFJlc3VsdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldFRhYmxlUmVmcmVzaGluZyh0cnVlKTtcbiAgICAgIGlmICghc2VhcmNoTmFtZUdldERvbmUgJiYgbmFtZVNlYXJjaCkge1xuICAgICAgICBhd2FpdCBzZWFyY2hCeU5hbWVTZWFyY2goKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IHNlYXJjaFJlc3VsdHMoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0U2VhcmNoRXJyb3IoZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRUYWJsZVJlZnJlc2hpbmcoZmFsc2UpO1xuICAgICAgc2V0U2VhcmNoRmlsdGVyTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpbml0aWFsRmV0Y2hEb25lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2hSZXN1bHRzKCk7XG4gIH0sIFtwYWdlLCBsaW1pdCwgb2Zmc2V0LCBwYXJhbXMsIGluaXRpYWxGZXRjaERvbmVdKTtcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAodHlwZTogXCJhY3Rpb25cIiB8IFwibW9kZWxcIikgPT4ge1xuICAgIHNldEluaXRpYWxGZXRjaERvbmUoZmFsc2UpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBzZXRJbml0aWFsRXJyb3IodW5kZWZpbmVkKTtcblxuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZSA9PT0gXCJhY3Rpb25cIikge1xuICAgICAgICBhd2FpdCBmZXRjaEFjdGlvbkRhdGEoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IGZldGNoTW9kZWxEYXRhKCk7XG4gICAgICB9XG4gICAgICBzZXRJbml0aWFsRmV0Y2hEb25lKHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRJbml0aWFsRXJyb3IoZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmZXRjaEFjdGlvbkRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZGF0YUZvckFjdGlvbiA9IGF3YWl0IENvbm5lY3Rpb25Qcm92aWRlci5nZXRIYW5kbGVyKCkuZ2V0Vmlld3NGb3JBY3Rpb24oXG4gICAgICBhY3Rpb24hXG4gICAgKTtcbiAgICBzZXRGb3JtVmlldyhkYXRhRm9yQWN0aW9uLnZpZXdzLmdldChcImZvcm1cIikpO1xuICAgIHNldFRyZWVWaWV3KGRhdGFGb3JBY3Rpb24udmlld3MuZ2V0KFwidHJlZVwiKSk7XG4gICAgc2V0Q3VycmVudE1vZGVsKGRhdGFGb3JBY3Rpb24ubW9kZWwpO1xuICAgIHNldExpbWl0RnJvbUFjdGlvbihkYXRhRm9yQWN0aW9uLmxpbWl0KTtcbiAgICBzZXRMaW1pdChkYXRhRm9yQWN0aW9uLmxpbWl0KTtcbiAgfTtcblxuICBjb25zdCBmZXRjaE1vZGVsRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRDdXJyZW50TW9kZWwobW9kZWwpO1xuICAgIGNvbnN0IF9mb3JtVmlldyA9IGF3YWl0IENvbm5lY3Rpb25Qcm92aWRlci5nZXRIYW5kbGVyKCkuZ2V0VmlldyhcbiAgICAgIG1vZGVsISxcbiAgICAgIFwiZm9ybVwiXG4gICAgKTtcbiAgICBjb25zdCBfdHJlZVZpZXcgPSBhd2FpdCBDb25uZWN0aW9uUHJvdmlkZXIuZ2V0SGFuZGxlcigpLmdldFZpZXcoXG4gICAgICBtb2RlbCEsXG4gICAgICBcInRyZWVcIlxuICAgICk7XG4gICAgc2V0Rm9ybVZpZXcoX2Zvcm1WaWV3IGFzIEZvcm1WaWV3KTtcbiAgICBzZXRUcmVlVmlldyhfdHJlZVZpZXcgYXMgVHJlZVZpZXcpO1xuICAgIHNldExpbWl0RnJvbUFjdGlvbih1bmRlZmluZWQpO1xuICAgIHNldExpbWl0KERFRkFVTFRfU0VBUkNIX0xJTUlUKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgIGZldGNoRGF0YShcImFjdGlvblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmV0Y2hEYXRhKFwibW9kZWxcIik7XG4gICAgfVxuICB9LCBbYWN0aW9uLCBtb2RlbF0pO1xuXG4gIGNvbnN0IG9uQ2xlYXIgPSAoKSA9PiB7XG4gICAgaWYgKHRhYmxlUmVmcmVzaGluZykgcmV0dXJuO1xuICAgIHNldFNlYXJjaEVycm9yKHVuZGVmaW5lZCk7XG4gICAgc2V0UGFyYW1zKFtdKTtcbiAgICBzZXRPZmZzZXQoMCk7XG4gICAgc2V0UGFnZSgxKTtcbiAgICBzZXRMaW1pdChsaW1pdEZyb21BY3Rpb24gfHwgREVGQVVMVF9TRUFSQ0hfTElNSVQpO1xuICB9O1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gKHtcbiAgICBwYXJhbXM6IG5ld1BhcmFtcyxcbiAgICBsaW1pdDogbmV3TGltaXQsXG4gICAgb2Zmc2V0OiBuZXdPZmZzZXQsXG4gIH06IHtcbiAgICBwYXJhbXM6IGFueTtcbiAgICBsaW1pdDogbnVtYmVyO1xuICAgIG9mZnNldDogbnVtYmVyO1xuICB9KSA9PiB7XG4gICAgaWYgKHRhYmxlUmVmcmVzaGluZykgcmV0dXJuO1xuICAgIHNldFNlYXJjaEZpbHRlckxvYWRpbmcodHJ1ZSk7XG4gICAgc2V0U2VhcmNoRXJyb3IodW5kZWZpbmVkKTtcbiAgICBzZXRQYWdlKDEpO1xuICAgIGlmIChuZXdMaW1pdCkgc2V0TGltaXQobmV3TGltaXQpO1xuICAgIGlmIChuZXdPZmZzZXQpIHNldE9mZnNldChuZXdPZmZzZXQpO1xuICAgIHNldFBhcmFtcyhuZXdQYXJhbXMpO1xuICB9O1xuXG4gIGNvbnN0IG9uUm93Q2xpY2tlZEhhbmRsZXIgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIG9uUm93Q2xpY2tlZCh7XG4gICAgICBpZCxcbiAgICAgIG1vZGVsOiBjdXJyZW50TW9kZWwhLFxuICAgICAgZm9ybVZpZXc6IGZvcm1WaWV3ISxcbiAgICAgIHRyZWVWaWV3OiB0cmVlVmlldyEsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY29udGVudCA9ICgpID0+IHtcbiAgICBpZiAoIXRyZWVWaWV3IHx8ICFmb3JtVmlldykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxTZWFyY2hGaWx0ZXJcbiAgICAgICAgICBmaWVsZHM9e3sgLi4udHJlZVZpZXcuZmllbGRzLCAuLi5mb3JtVmlldy5maWVsZHMgfX1cbiAgICAgICAgICBzZWFyY2hGaWVsZHM9e2Zvcm1WaWV3LnNlYXJjaF9maWVsZHN9XG4gICAgICAgICAgb25DbGVhcj17b25DbGVhcn1cbiAgICAgICAgICBsaW1pdD17bGltaXR9XG4gICAgICAgICAgb2Zmc2V0PXtvZmZzZXR9XG4gICAgICAgICAgaXNTZWFyY2hpbmc9e3NlYXJjaEZpbHRlckxvYWRpbmd9XG4gICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICAvPlxuICAgICAgICB7c2VhcmNoRXJyb3IgJiYgKFxuICAgICAgICAgIDxBbGVydCBjbGFzc05hbWU9XCJtdC0xMFwiIG1lc3NhZ2U9e3NlYXJjaEVycm9yfSB0eXBlPVwiZXJyb3JcIiBiYW5uZXIgLz5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0xMFwiIC8+XG4gICAgICAgIDxUcmVlXG4gICAgICAgICAgdG90YWw9e3RvdGFsSXRlbXN9XG4gICAgICAgICAgbGltaXQ9e2xpbWl0fVxuICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgdHJlZVZpZXc9e3RyZWVWaWV3fVxuICAgICAgICAgIHJlc3VsdHM9e3Jlc3VsdHN9XG4gICAgICAgICAgb25SZXF1ZXN0UGFnZUNoYW5nZT17b25SZXF1ZXN0UGFnZUNoYW5nZX1cbiAgICAgICAgICBsb2FkaW5nPXt0YWJsZVJlZnJlc2hpbmd9XG4gICAgICAgICAgb25Sb3dDbGlja2VkPXtvblJvd0NsaWNrZWRIYW5kbGVyfVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICBpZiAoaW5pdGlhbEVycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbGVydCBjbGFzc05hbWU9XCJtdC0xMFwiIG1lc3NhZ2U9e2luaXRpYWxFcnJvcn0gdHlwZT1cImVycm9yXCIgYmFubmVyIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBpc0xvYWRpbmcgPyA8U3BpbiAvPiA6IGNvbnRlbnQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoVHJlZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbGVydCB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCBUcmVlIGZyb20gXCJAL3dpZGdldHMvdmlld3MvVHJlZVwiO1xuaW1wb3J0IHsgRm9ybVZpZXcsIFRyZWVWaWV3IH0gZnJvbSBcIkAvdHlwZXMvaW5kZXhcIjtcbmltcG9ydCBDb25uZWN0aW9uUHJvdmlkZXIgZnJvbSBcIkAvQ29ubmVjdGlvblByb3ZpZGVyXCI7XG5cbnR5cGUgT25Sb3dDbGlja2VkRGF0YSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbW9kZWw6IHN0cmluZztcbiAgZm9ybVZpZXc6IEZvcm1WaWV3O1xuICB0cmVlVmlldzogVHJlZVZpZXc7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBpZHM6IEFycmF5PG51bWJlcj47XG4gIG1vZGVsOiBzdHJpbmc7XG4gIGZvcm1WaWV3OiBGb3JtVmlldztcbiAgdHJlZVZpZXc6IFRyZWVWaWV3O1xuICBvblJvd0NsaWNrZWQ6IChkYXRhOiBPblJvd0NsaWNrZWREYXRhKSA9PiB2b2lkO1xufTtcblxuZnVuY3Rpb24gU2ltcGxlVHJlZShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBpZHMsIG1vZGVsLCB0cmVlVmlldywgZm9ybVZpZXcsIG9uUm93Q2xpY2tlZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGU8YW55PihbXSk7XG5cbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG5cbiAgY29uc3QgW3RhYmxlUmVmcmVzaGluZywgc2V0VGFibGVSZWZyZXNoaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCByZWFkT2JqZWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCBDb25uZWN0aW9uUHJvdmlkZXIuZ2V0SGFuZGxlcigpLnJlYWRPYmplY3RzKHtcbiAgICAgIGFyY2g6IHRyZWVWaWV3LmFyY2gsXG4gICAgICBtb2RlbCxcbiAgICAgIGlkcyxcbiAgICB9KTtcblxuICAgIHNldFJlc3VsdHModmFsdWVzKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaFJlc3VsdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldFRhYmxlUmVmcmVzaGluZyh0cnVlKTtcbiAgICAgIGF3YWl0IHJlYWRPYmplY3RzKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0VGFibGVSZWZyZXNoaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFJlc3VsdHMoKTtcbiAgfSwgW2lkcywgbW9kZWxdKTtcblxuICBjb25zdCBvblJvd0NsaWNrZWRIYW5kbGVyID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBvblJvd0NsaWNrZWQoe1xuICAgICAgaWQsXG4gICAgICBtb2RlbCxcbiAgICAgIGZvcm1WaWV3LFxuICAgICAgdHJlZVZpZXcsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY29udGVudCA9ICgpID0+IHtcbiAgICBpZiAoIXRyZWVWaWV3IHx8ICFmb3JtVmlldykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxUcmVlXG4gICAgICAgICAgdG90YWw9e2lkcy5sZW5ndGh9XG4gICAgICAgICAgbGltaXQ9e2lkcy5sZW5ndGh9XG4gICAgICAgICAgdHJlZVZpZXc9e3RyZWVWaWV3fVxuICAgICAgICAgIHJlc3VsdHM9e3Jlc3VsdHN9XG4gICAgICAgICAgbG9hZGluZz17dGFibGVSZWZyZXNoaW5nfVxuICAgICAgICAgIG9uUm93Q2xpY2tlZD17b25Sb3dDbGlja2VkSGFuZGxlcn1cbiAgICAgICAgICBzaG93UGFnaW5hdGlvbj17ZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8QWxlcnQgY2xhc3NOYW1lPVwibXQtMTBcIiBtZXNzYWdlPXtlcnJvcn0gdHlwZT1cImVycm9yXCIgYmFubmVyIC8+O1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlVHJlZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSwgUGFnaW5hdGlvbiwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgZ2V0VHJlZSwgZ2V0VGFibGVDb2x1bW5zLCBnZXRUYWJsZUl0ZW1zIH0gZnJvbSBcIkAvaGVscGVycy90cmVlSGVscGVyXCI7XG5cbmltcG9ydCB7IFN0cmluZ3MsIFRyZWVWaWV3LCBDb2x1bW4gfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0TG9jYWxpemVkU3RyaW5nIH0gZnJvbSBcIkAvY29udGV4dC9Mb2NhbGVzQ29udGV4dFwiO1xuXG50eXBlIFByb3BzID0ge1xuICB0b3RhbDogbnVtYmVyO1xuICBsaW1pdDogbnVtYmVyO1xuICBwYWdlPzogbnVtYmVyO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICB0cmVlVmlldzogVHJlZVZpZXc7XG4gIHJlc3VsdHM6IEFycmF5PGFueT47XG4gIHNob3dQYWdpbmF0aW9uPzogYm9vbGVhbjtcbiAgb25SZXF1ZXN0UGFnZUNoYW5nZT86IChwYWdlOiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSA9PiB2b2lkO1xuICBvblJvd0NsaWNrZWQ/OiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbn07XG5cbmNvbnN0IHN0cmluZ3M6IFN0cmluZ3MgPSB7XG4gIG5vX3Jlc3VsdHM6IFwiTm8gcmVzdWx0c1wiLFxuICBzdW1tYXJ5OiBcIlNob3dpbmcgcmVnaXN0ZXJzIGZyb20ge2Zyb219IHRvIHt0b30gb2Yge3RvdGFsfSByZWdpc3RlcnNcIixcbn07XG5cbmZ1bmN0aW9uIFRyZWUocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIHBhZ2UgPSAxLFxuICAgIGxpbWl0LFxuICAgIHRvdGFsLFxuICAgIHRyZWVWaWV3LFxuICAgIHJlc3VsdHMsXG4gICAgb25SZXF1ZXN0UGFnZUNoYW5nZSxcbiAgICBsb2FkaW5nLFxuICAgIG9uUm93Q2xpY2tlZCxcbiAgICBzaG93UGFnaW5hdGlvbiA9IHRydWUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPEFycmF5PGFueT4+KFtdKTtcbiAgY29uc3QgW2NvbHVtbnMsIHNldENvbHVtbnNdID0gdXNlU3RhdGU8QXJyYXk8Q29sdW1uPj4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdHJlZSA9IGdldFRyZWUodHJlZVZpZXcpO1xuICAgIGNvbnN0IGJvb2xlYW5Db21wb25lbnRGbiA9IChib29sZWFuRmllbGQ6IGJvb2xlYW4pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIDxDaGVja2JveCBkZWZhdWx0Q2hlY2tlZD17Ym9vbGVhbkZpZWxkfSBkaXNhYmxlZCAvPjtcbiAgICB9O1xuICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRUYWJsZUNvbHVtbnModHJlZSwgYm9vbGVhbkNvbXBvbmVudEZuKTtcbiAgICBjb25zdCBpdGVtcyA9IGdldFRhYmxlSXRlbXModHJlZSwgcmVzdWx0cyk7XG5cbiAgICBzZXRDb2x1bW5zKGNvbHVtbnMpO1xuICAgIHNldEl0ZW1zKGl0ZW1zKTtcbiAgfSwgW3RyZWVWaWV3LCByZXN1bHRzXSk7XG5cbiAgY29uc3QgZnJvbSA9IChwYWdlIC0gMSkgKiBsaW1pdCArIDE7XG4gIGNvbnN0IHRvID0gZnJvbSAtIDEgKyBpdGVtcy5sZW5ndGg7XG4gIGNvbnN0IHN1bW1hcnkgPSBsb2FkaW5nXG4gICAgPyBudWxsXG4gICAgOiB0b3RhbCA9PT0gMFxuICAgID8gZ2V0TG9jYWxpemVkU3RyaW5nKFwibm9fcmVzdWx0c1wiLCBzdHJpbmdzKVxuICAgIDogZ2V0TG9jYWxpemVkU3RyaW5nKFwic3VtbWFyeVwiLCBzdHJpbmdzKVxuICAgICAgICAucmVwbGFjZShcIntmcm9tfVwiLCBmcm9tPy50b1N0cmluZygpKVxuICAgICAgICAucmVwbGFjZShcInt0b31cIiwgdG8/LnRvU3RyaW5nKCkpXG4gICAgICAgIC5yZXBsYWNlKFwie3RvdGFsfVwiLCB0b3RhbD8udG9TdHJpbmcoKSk7XG5cbiAgY29uc3QgcGFnaW5hdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoIXNob3dQYWdpbmF0aW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9hZGluZyA/IG51bGwgOiAoXG4gICAgICA8PlxuICAgICAgICB7c3VtbWFyeX1cbiAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICB0b3RhbD17dG90YWx9XG4gICAgICAgICAgcGFnZVNpemU9e2xpbWl0fVxuICAgICAgICAgIGN1cnJlbnQ9e3BhZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicGItNSBwdC01XCJcbiAgICAgICAgICBzaG93U2l6ZUNoYW5nZXI9e2ZhbHNlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblJlcXVlc3RQYWdlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cGFnaW5hdGlvbigpfVxuICAgICAgPFRhYmxlXG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIGRhdGFTb3VyY2U9e2l0ZW1zfVxuICAgICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cbiAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgcm93Q2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgc2VsZWN0LW5vbmVcIlxuICAgICAgICBvblJvdz17KHJlY29yZCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvbkRvdWJsZUNsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChvblJvd0NsaWNrZWQpIG9uUm93Q2xpY2tlZChyZWNvcmQuaWQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJlZTtcbiIsImltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBEYXRlUmFuZ2VQaWNrZXIgPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZpZWxkIHsuLi5wcm9wc30gbGF5b3V0PXtcInZlcnRpY2FsXCJ9PlxuICAgICAgPERhdGVQaWNrZXIuUmFuZ2VQaWNrZXIgZm9ybWF0PXtcIkREL01NL1lZWVlcIn0+PC9EYXRlUGlja2VyLlJhbmdlUGlja2VyPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IHsgRGF0ZVBpY2tlciwgVGltZVBpY2tlciB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IEZpZWxkIGFzIEZpZWxkT291aSwgTGFiZWwgYXMgTGFiZWxPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvTGFiZWxcIjtcblxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuXG5leHBvcnQgY29uc3QgRGF0ZVRpbWVSYW5nZVBpY2tlciA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpLCBzaG93TGFiZWwgPSBmYWxzZSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgbGFiZWwsIGlkIH0gPSBvb3VpO1xuXG4gIGNvbnN0IGZpZWxkcyA9IFtcbiAgICBuZXcgRmllbGRPb3VpKHtcbiAgICAgIG5hbWU6IGlkICsgXCIjZGF0ZVwiLFxuICAgICAgbGFiZWw6IFwiXCIsXG4gICAgfSksXG4gICAgbmV3IEZpZWxkT291aSh7XG4gICAgICBuYW1lOiBpZCArIFwiI3RpbWVcIixcbiAgICAgIGxhYmVsOiBcIlwiLFxuICAgIH0pLFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG93TGFiZWwgJiYgKFxuICAgICAgICA8TGFiZWxcbiAgICAgICAgICBvb3VpPXtcbiAgICAgICAgICAgIG5ldyBMYWJlbE9vdWkoe1xuICAgICAgICAgICAgICBuYW1lOiBpZCArIFwiX2xhYmVsXCIsXG4gICAgICAgICAgICAgIHN0cmluZzogbGFiZWwsXG4gICAgICAgICAgICAgIGhlbHA6IG9vdWkudG9vbHRpcCxcbiAgICAgICAgICAgICAgZmllbGRGb3JMYWJlbDogaWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBhbGlnbj17XCJsZWZ0XCJ9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPFJvdyBhbGlnbj17XCJib3R0b21cIn0gY2xhc3NOYW1lPVwicC0wXCI+XG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwibXItMlwiPlxuICAgICAgICAgIDxGaWVsZCB7Li4ucHJvcHN9IG9vdWk9e2ZpZWxkc1swXX0gc2hvd0xhYmVsPXtmYWxzZX0+XG4gICAgICAgICAgICA8RGF0ZVBpY2tlci5SYW5nZVBpY2tlclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYwXCJcbiAgICAgICAgICAgICAgZm9ybWF0PXtcIkREL01NL1lZWVlcIn1cbiAgICAgICAgICAgID48L0RhdGVQaWNrZXIuUmFuZ2VQaWNrZXI+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2w+XG4gICAgICAgICAgPEZpZWxkIHsuLi5wcm9wc30gb291aT17ZmllbGRzWzFdfSBzaG93TGFiZWw9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxUaW1lUGlja2VyLlJhbmdlUGlja2VyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNjBcIlxuICAgICAgICAgICAgICBmb3JtYXQ9e1wiSEg6bW1cIn1cbiAgICAgICAgICAgID48L1RpbWVQaWNrZXIuUmFuZ2VQaWNrZXI+XG4gICAgICAgICAgPC9GaWVsZD5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBGbG9hdCB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9GbG9hdFwiO1xuaW1wb3J0IHsgSW50ZWdlciB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9JbnRlZ2VyXCI7XG5pbXBvcnQgeyBJbnRlZ2VyIGFzIEludGVnZXJPb3VpLCBMYWJlbCBhcyBMYWJlbE9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCJAL3dpZGdldHMvYmFzZS9MYWJlbFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG50eXBlIFByb3BzID0ge1xuICBvb3VpOiBhbnk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUGFpckZpZWxkcyhwcm9wczogV2lkZ2V0UHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7IG9vdWksIHNob3dMYWJlbCB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIGxhYmVsLCB0b29sdGlwIH0gPSBvb3VpO1xuICBjb25zdCBXaWRnZXQgPSBvb3VpIGluc3RhbmNlb2YgSW50ZWdlck9vdWkgPyBJbnRlZ2VyIDogRmxvYXQ7XG5cbiAgY29uc3QgZ2V0V2lkZ2V0ID0gKHN1ZmZpeDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXaWRnZXRcbiAgICAgICAgb291aT17e1xuICAgICAgICAgIC4uLihvb3VpIGFzIGFueSksXG4gICAgICAgICAgaWQ6IGlkICsgc3VmZml4LFxuICAgICAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAgICAgIHRvb2x0aXA6IHVuZGVmaW5lZCxcbiAgICAgICAgfX1cbiAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzaG93TGFiZWwgJiYgKFxuICAgICAgICA8TGFiZWxcbiAgICAgICAgICBvb3VpPXtcbiAgICAgICAgICAgIG5ldyBMYWJlbE9vdWkoe1xuICAgICAgICAgICAgICBuYW1lOiBpZCArIFwiX2xhYmVsXCIsXG4gICAgICAgICAgICAgIHN0cmluZzogbGFiZWwsXG4gICAgICAgICAgICAgIGhlbHA6IHRvb2x0aXAsXG4gICAgICAgICAgICAgIGZpZWxkRm9yTGFiZWw6IGlkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxpZ249e1wibGVmdFwifVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxSb3cgYWxpZ249e1wiYm90dG9tXCJ9IGNsYXNzTmFtZT1cIm10LTBcIj5cbiAgICAgICAgPENvbD57Z2V0V2lkZ2V0KFwiI2Zyb21cIil9PC9Db2w+XG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicGItMVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTIgcHItMiBoLWZ1bGxcIj4gLSA8L3NwYW4+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sPntnZXRXaWRnZXQoXCIjdG9cIil9PC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFJvdywgQ29sLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHtcbiAgRG93bk91dGxpbmVkLFxuICBVcE91dGxpbmVkLFxuICBTZWFyY2hPdXRsaW5lZCxcbiAgQ2xlYXJPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmltcG9ydCB7XG4gIExvY2FsZXNDb250ZXh0LFxuICBMb2NhbGVzQ29udGV4dFR5cGUsXG59IGZyb20gXCJAL2NvbnRleHQvTG9jYWxlc0NvbnRleHRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgYWR2YW5jZWRGaWx0ZXI6IGJvb2xlYW47XG4gIGlzU2VhcmNoaW5nOiBib29sZWFuO1xuICBvbkFkdmFuY2VkRmlsdGVyVG9nZ2xlOiAoKSA9PiB2b2lkO1xuICBvbkNsZWFyOiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaEJvdHRvbUJhcihwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgb25BZHZhbmNlZEZpbHRlclRvZ2dsZSxcbiAgICBhZHZhbmNlZEZpbHRlcixcbiAgICBvbkNsZWFyLFxuICAgIGlzU2VhcmNoaW5nLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBnZXRTdHJpbmcgfSA9IHVzZUNvbnRleHQoTG9jYWxlc0NvbnRleHQpIGFzIExvY2FsZXNDb250ZXh0VHlwZTtcblxuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q29sIHNwYW49ezEyfSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgcHQtNCBwYi0yIHBsLTJcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC14c1wiIG9uQ2xpY2s9e29uQWR2YW5jZWRGaWx0ZXJUb2dnbGV9PlxuICAgICAgICAgIHthZHZhbmNlZEZpbHRlciA/IChcbiAgICAgICAgICAgIDxVcE91dGxpbmVkIGNsYXNzTmFtZT1cInByLTFcIiAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8RG93bk91dGxpbmVkIGNsYXNzTmFtZT1cInByLTFcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2FkdmFuY2VkRmlsdGVyXG4gICAgICAgICAgICA/IGdldFN0cmluZyhcInNpbXBsZV9zZWFyY2hcIilcbiAgICAgICAgICAgIDogZ2V0U3RyaW5nKFwiYWR2YW5jZWRfc2VhcmNoXCIpfVxuICAgICAgICA8L2E+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgc3Bhbj17MTJ9IGNsYXNzTmFtZT1cInRleHQtcmlnaHQgcGItMlwiPlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1yLTVcIiBpY29uPXs8Q2xlYXJPdXRsaW5lZCAvPn0gb25DbGljaz17b25DbGVhcn0+XG4gICAgICAgICAgQ2xlYXJcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBpY29uPXs8U2VhcmNoT3V0bGluZWQgLz59XG4gICAgICAgICAgbG9hZGluZz17aXNTZWFyY2hpbmd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtnZXRTdHJpbmcoXCJzZWFyY2hcIil9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Db2w+XG4gICAgPC9Sb3c+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBDaGFyIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0NoYXJcIjtcbmltcG9ydCB7IFNlbGVjdGlvbiB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9TZWxlY3Rpb25cIjtcbmltcG9ydCB7IERhdGVSYW5nZVBpY2tlciB9IGZyb20gXCIuL0RhdGVSYW5nZVBpY2tlclwiO1xuaW1wb3J0IHsgRGF0ZVRpbWVSYW5nZVBpY2tlciB9IGZyb20gXCIuL0RhdGVUaW1lUmFuZ2VQaWNrZXJcIjtcbmltcG9ydCB7IFBhaXJGaWVsZHMgfSBmcm9tIFwiLi9QYWlyRmllbGRzXCI7XG5cbmltcG9ydCB7IExvY2FsZXNDb250ZXh0LCBMb2NhbGVzQ29udGV4dFR5cGUgfSBmcm9tIFwiQC9jb250ZXh0L0xvY2FsZXNDb250ZXh0XCI7XG5cbmltcG9ydCB7IEZpZWxkLCBTZWxlY3Rpb24gYXMgU2VsZWN0aW9uT291aSB9IGZyb20gXCJvb3VpXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZpZWxkOiBGaWVsZDtcbn07XG5cbmNvbnN0IHR5cGVzID0ge1xuICB0ZXh0OiBcIlRleHRcIixcbiAgbWFueTJvbmU6IFwiTWFueTJvbmVcIixcbiAgY2hhcjogXCJDaGFyXCIsXG4gIGJvb2xlYW46IFwiQm9vbGVhblwiLFxuICBzZWxlY3Rpb246IFwiU2VsZWN0aW9uXCIsXG4gIGZsb2F0OiBcIkZsb2F0XCIsXG4gIGZsb2F0X3RpbWU6IFwiRmxvYXRUaW1lXCIsXG4gIHByb2dyZXNzYmFyOiBcIlByb2dyZXNzQmFyXCIsXG4gIGludGVnZXI6IFwiSW50ZWdlclwiLFxuICBkYXRlOiBcIkRhdGVcIixcbiAgZGF0ZXRpbWU6IFwiRGF0ZVRpbWVcIixcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hGaWVsZChwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBmaWVsZCB9ID0gcHJvcHM7XG4gIGZpZWxkLnJlYWRPbmx5ID0gZmFsc2U7XG4gIGZpZWxkLnJlcXVpcmVkID0gZmFsc2U7XG5cbiAgY29uc3QgeyBnZXRTdHJpbmcgfSA9IHVzZUNvbnRleHQoTG9jYWxlc0NvbnRleHQpIGFzIExvY2FsZXNDb250ZXh0VHlwZTtcblxuICBjb25zdCB3aWRnZXRUeXBlID0gZmllbGQuY29uc3RydWN0b3IubmFtZTtcblxuICBzd2l0Y2ggKHdpZGdldFR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLmJvb2xlYW46IHtcbiAgICAgIGNvbnN0IG9vdWkgPSBuZXcgU2VsZWN0aW9uT291aSh7XG4gICAgICAgIG5hbWU6IGZpZWxkLl9pZCxcbiAgICAgICAgc3RyaW5nOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgc2VsZWN0aW9uOiBbXG4gICAgICAgICAgW1widHJ1ZVwiLCBnZXRTdHJpbmcoXCJ0cnVlXCIpXSxcbiAgICAgICAgICBbXCJmYWxzZVwiLCBnZXRTdHJpbmcoXCJmYWxzZVwiKV0sXG4gICAgICAgIF0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIDxTZWxlY3Rpb24gbGF5b3V0PVwidmVydGljYWxcIiBvb3VpPXtvb3VpfSBzaG93TGFiZWwgLz47XG4gICAgfVxuICAgIGNhc2UgdHlwZXMuZmxvYXQ6XG4gICAgY2FzZSB0eXBlcy5wcm9ncmVzc2JhcjpcbiAgICBjYXNlIHR5cGVzLmZsb2F0X3RpbWU6XG4gICAgY2FzZSB0eXBlcy5pbnRlZ2VyOiB7XG4gICAgICByZXR1cm4gPFBhaXJGaWVsZHMgb291aT17ZmllbGR9IHNob3dMYWJlbCAvPjtcbiAgICB9XG4gICAgY2FzZSB0eXBlcy5kYXRlOiB7XG4gICAgICByZXR1cm4gPERhdGVSYW5nZVBpY2tlciBvb3VpPXtmaWVsZH0gbGF5b3V0PVwidmVydGljYWxcIiBzaG93TGFiZWwgLz47XG4gICAgfVxuICAgIGNhc2UgdHlwZXMuZGF0ZXRpbWU6IHtcbiAgICAgIHJldHVybiA8RGF0ZVRpbWVSYW5nZVBpY2tlciBvb3VpPXtmaWVsZH0gbGF5b3V0PVwidmVydGljYWxcIiBzaG93TGFiZWwgLz47XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiA8Q2hhciBvb3VpPXtmaWVsZH0gbGF5b3V0PVwidmVydGljYWxcIiBzaG93TGFiZWwgLz47XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcbmltcG9ydCBcIkAvdGFpbHdpbmQuZ2VuZXJhdGVkLmNzc1wiO1xuXG5pbXBvcnQgeyBTZWFyY2hGaWx0ZXIgYXMgU2VhcmNoRmlsdGVyT291aSwgQ29udGFpbmVyLCBGaWVsZCB9IGZyb20gXCJvb3VpXCI7XG5cbmltcG9ydCB7IFNlYXJjaEZpZWxkIH0gZnJvbSBcIi4vU2VhcmNoRmllbGRcIjtcbmltcG9ydCB7IFNlYXJjaEJvdHRvbUJhciB9IGZyb20gXCIuL1NlYXJjaEJvdHRvbUJhclwiO1xuaW1wb3J0IExvY2FsZXNQcm92aWRlciBmcm9tIFwiQC9jb250ZXh0L0xvY2FsZXNDb250ZXh0XCI7XG5pbXBvcnQgeyBTdHJpbmdzLCBTZWFyY2hGaWVsZHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgU2VhcmNoUGFyYW1zIH0gZnJvbSBcIi4vU2VhcmNoUGFyYW1zXCI7XG5cbmltcG9ydCB7IGdldFBhcmFtc0ZvckZpZWxkcyB9IGZyb20gXCJAL2hlbHBlcnMvc2VhcmNoRmlsdGVySGVscGVyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZpZWxkczogYW55O1xuICBzZWFyY2hGaWVsZHM6IFNlYXJjaEZpZWxkcztcbiAgb25DbGVhcjogKCkgPT4gdm9pZDtcbiAgb25TdWJtaXQ6ICh2YWx1ZXM6IGFueSkgPT4gdm9pZDtcbiAgaXNTZWFyY2hpbmc6IGJvb2xlYW47XG4gIGxpbWl0OiBudW1iZXI7XG4gIG9mZnNldDogbnVtYmVyO1xufTtcblxuY29uc3Qgc3RyaW5nczogU3RyaW5ncyA9IHtcbiAgdHJ1ZTogXCJZZXNcIixcbiAgZmFsc2U6IFwiTm9cIixcbiAgc2ltcGxlX3NlYXJjaDogXCJTaW1wbGUgc2VhcmNoXCIsXG4gIGFkdmFuY2VkX3NlYXJjaDogXCJBZHZhbmNlZCBzZWFyY2hcIixcbiAgc2VhcmNoOiBcIlNlYXJjaFwiLFxuICBwYXJhbWV0ZXJzOiBcIlBhcmFtZXRlcnNcIixcbiAgbGltaXQ6IFwiTGltaXRcIixcbiAgZmlyc3Q6IFwiRmlyc3RcIixcbn07XG5cbmZ1bmN0aW9uIFNlYXJjaEZpbHRlcihwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgZmllbGRzLFxuICAgIHNlYXJjaEZpZWxkcyxcbiAgICBvbkNsZWFyLFxuICAgIG9uU3VibWl0LFxuICAgIGlzU2VhcmNoaW5nLFxuICAgIG9mZnNldCxcbiAgICBsaW1pdCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtzaW1wbGVTZWFyY2hGaWVsZHMsIHNldFNpbXBsZVNlYXJjaEZpZWxkc10gPSB1c2VTdGF0ZTxDb250YWluZXI+KCk7XG4gIGNvbnN0IFthZHZhbmNlZFNlYXJjaEZpZWxkcywgc2V0QWR2YW5jZWRTZWFyY2hGaWVsZHNdID0gdXNlU3RhdGU8Q29udGFpbmVyPigpO1xuICBjb25zdCBbYWR2YW5jZWRGaWx0ZXIsIHNldEFkdmFuY2VkRmlsdGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcblxuICBjb25zdCBnZXRSb3dzQW5kQ29scyA9ICgpID0+IHtcbiAgICBpZiAoIWFkdmFuY2VkU2VhcmNoRmllbGRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRzID0gYWR2YW5jZWRGaWx0ZXIgPyBhZHZhbmNlZFNlYXJjaEZpZWxkcyA6IHNpbXBsZVNlYXJjaEZpZWxkcztcbiAgICBjb25zdCByb3dzID0gZmllbGRzPy5yb3dzO1xuXG4gICAgcmV0dXJuIHJvd3M/Lm1hcCgocm93LCBpKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Um93IGtleT17aX0+XG4gICAgICAgICAge3Jvdy5tYXAoKGl0ZW0sIGopID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBjbGFzc05hbWU9XCJwLTJcIiB4bD17Nn0ga2V5PXtqfT5cbiAgICAgICAgICAgICAgICA8U2VhcmNoRmllbGQgZmllbGQ9e2l0ZW0gYXMgRmllbGR9IC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZm9ybS5yZXNldEZpZWxkcygpO1xuICAgIHNldEFkdmFuY2VkRmlsdGVyKGZhbHNlKTtcbiAgICBjb25zdCBzZm8gPSBuZXcgU2VhcmNoRmlsdGVyT291aShzZWFyY2hGaWVsZHMsIGZpZWxkcyk7XG4gICAgc2ZvLnBhcnNlKCk7XG4gICAgc2V0U2ltcGxlU2VhcmNoRmllbGRzKHNmby5fc2ltcGxlU2VhcmNoQ29udGFpbmVyKTtcbiAgICBzZXRBZHZhbmNlZFNlYXJjaEZpZWxkcyhzZm8uX2FkdmFuY2VkU2VhcmNoQ29udGFpbmVyKTtcbiAgfSwgW2ZpZWxkcywgc2VhcmNoRmllbGRzXSk7XG5cbiAgY29uc3Qgcm93cyA9IGdldFJvd3NBbmRDb2xzKCk7XG5cbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGxpbWl0LCBvZmZzZXQgfSA9IHZhbHVlcztcbiAgICBkZWxldGUgdmFsdWVzLm9mZnNldDtcbiAgICBkZWxldGUgdmFsdWVzLmxpbWl0O1xuICAgIGNvbnN0IG5ld1BhcmFtcyA9IGdldFBhcmFtc0ZvckZpZWxkcyh2YWx1ZXMsIGZpZWxkcyk7XG5cbiAgICBvblN1Ym1pdCh7IHBhcmFtczogbmV3UGFyYW1zLCBvZmZzZXQsIGxpbWl0IH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExvY2FsZXNQcm92aWRlciBzdHJpbmdzPXtzdHJpbmdzfT5cbiAgICAgIDxGb3JtXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHJvdW5kZWQgcC0zXCJcbiAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IG9mZnNldCwgbGltaXQgfX1cbiAgICAgID5cbiAgICAgICAge3Jvd3N9XG4gICAgICAgIHthZHZhbmNlZEZpbHRlciAmJiA8U2VhcmNoUGFyYW1zIC8+fVxuICAgICAgICA8U2VhcmNoQm90dG9tQmFyXG4gICAgICAgICAgYWR2YW5jZWRGaWx0ZXI9e2FkdmFuY2VkRmlsdGVyfVxuICAgICAgICAgIG9uQWR2YW5jZWRGaWx0ZXJUb2dnbGU9eygpID0+IHtcbiAgICAgICAgICAgIHNldEFkdmFuY2VkRmlsdGVyKCFhZHZhbmNlZEZpbHRlcik7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsZWFyPXsoKSA9PiB7XG4gICAgICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICAgICAgICBvbkNsZWFyKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBpc1NlYXJjaGluZz17aXNTZWFyY2hpbmd9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9Mb2NhbGVzUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZpbHRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEludGVnZXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvSW50ZWdlclwiO1xuaW1wb3J0IHsgUm93LCBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBJbnRlZ2VyIGFzIEludGVnZXJPb3VpIH0gZnJvbSBcIm9vdWlcIjtcblxuaW1wb3J0IHsgTG9jYWxlc0NvbnRleHQsIExvY2FsZXNDb250ZXh0VHlwZSB9IGZyb20gXCJAL2NvbnRleHQvTG9jYWxlc0NvbnRleHRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaFBhcmFtcygpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7IGdldFN0cmluZyB9ID0gdXNlQ29udGV4dChMb2NhbGVzQ29udGV4dCkgYXMgTG9jYWxlc0NvbnRleHRUeXBlO1xuXG4gIGNvbnN0IGxpbWl0T291aSA9IG5ldyBJbnRlZ2VyT291aSh7IG5hbWU6IFwibGltaXRcIiB9KTtcbiAgY29uc3Qgb2Zmc2V0T291aSA9IG5ldyBJbnRlZ2VyT291aSh7IG5hbWU6IFwib2Zmc2V0XCIgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIHB0LTJcIj5cbiAgICAgIDxSb3cga2V5PXtcImNvdW50X3BhcmFtc1wifT57Z2V0U3RyaW5nKFwicGFyYW1ldGVyc1wiKX08L1Jvdz5cbiAgICAgIDxTcGFjZSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICB7Z2V0U3RyaW5nKFwibGltaXRcIikgKyBcIiA6XCJ9XG4gICAgICAgIDxJbnRlZ2VyIG9vdWk9e2xpbWl0T291aX0gLz5cbiAgICAgICAge2dldFN0cmluZyhcImZpcnN0XCIpICsgXCIgOlwifVxuICAgICAgICA8SW50ZWdlciBvb3VpPXtvZmZzZXRPb3VpfSAvPlxuICAgICAgPC9TcGFjZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYW50X2Rlc2lnbl9pY29uc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9hbnRkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=