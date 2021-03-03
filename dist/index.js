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
exports.getSpanStyleForItem = exports.fillRowWithEmptiesToFit = exports.getTemplateColumns = void 0;
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
exports.ConnectionProvider = exports.SearchTree = exports.Separator = exports.Text = exports.Label = exports.Integer = exports.Float = exports.Notebook = exports.Form = exports.SearchFilter = exports.Group = exports.Tree = exports.Many2one = exports.Boolean = exports.Selection = exports.Char = exports.Button = void 0;
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
var SearchTree_1 = __importDefault(__webpack_require__(/*! @/widgets/views/SearchTree */ "./src/widgets/views/SearchTree.tsx"));
exports.SearchTree = SearchTree_1.default;
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
var react_responsive_1 = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
var alignClass = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
};
var Label = function (props) {
    var responsiveBehaviour = react_responsive_1.useMediaQuery({ query: "(max-width: 1000px)" });
    var ooui = props.ooui, align = props.align;
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
var DetailModal_1 = __webpack_require__(/*! @/widgets/modals/DetailModal */ "./src/widgets/modals/DetailModal.tsx");
var Many2one = function (props) {
    var ooui = props.ooui;
    return (react_1.default.createElement(Field_1.default, __assign({}, props),
        react_1.default.createElement(Many2oneInput, { ooui: ooui })));
};
exports.Many2one = Many2one;
var Many2oneInput = function (props) {
    var value = props.value, onChange = props.onChange, disabled = props.disabled, ooui = props.ooui;
    var required = ooui.required;
    var requiredClass = required ? Config_1.default.requiredClass : undefined;
    var _a = react_1.useState(false), showSearchModal = _a[0], setShowSearchModal = _a[1];
    var _b = react_1.useState(false), showDetailModal = _b[0], setShowDetailModal = _b[1];
    var triggerChange = function (changedValue) {
        onChange === null || onChange === void 0 ? void 0 : onChange(__assign(__assign({}, value), changedValue));
    };
    var onValueStringChange = function (e) { };
    return (react_1.default.createElement(antd_1.Row, { gutter: 8, className: "pt-1 pb-1" },
        react_1.default.createElement(antd_1.Col, { flex: "auto" },
            react_1.default.createElement(antd_1.Input, { type: "text", value: value && value[1], onChange: onValueStringChange, disabled: disabled, className: requiredClass })),
        react_1.default.createElement(antd_1.Col, { flex: "32px" },
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.FolderOpenOutlined, null), disabled: disabled, onClick: function () {
                    setShowDetailModal(true);
                } })),
        react_1.default.createElement(antd_1.Col, { flex: "32px" },
            react_1.default.createElement(antd_1.Button, { icon: react_1.default.createElement(icons_1.SearchOutlined, null), disabled: disabled, onClick: function () {
                    setShowSearchModal(true);
                } })),
        react_1.default.createElement(SearchModal_1.SearchModal, { visible: showSearchModal, onSelectValue: function (value) {
                triggerChange(value);
                setShowSearchModal(false);
            }, onCloseModal: function () {
                setShowSearchModal(false);
            } }),
        react_1.default.createElement(DetailModal_1.DetailModal, { visible: showDetailModal, onSelectValue: function (value) {
                triggerChange(value);
                setShowDetailModal(false);
            }, onCloseModal: function () {
                setShowDetailModal(false);
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
        var rowWithEmptiesToFit = containerHelper_1.fillRowWithEmptiesToFit({
            row: rowWithoutInvisibleFields,
            numberOfColumns: columns,
            mustFillWithEmpties: responsiveBehaviour,
        });
        return rowWithEmptiesToFit.map(function (item, j) {
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

/***/ "./src/widgets/modals/CreateModal.tsx":
/*!********************************************!*\
  !*** ./src/widgets/modals/CreateModal.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateModal = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var CreateModal = function (props) {
    var visible = props.visible, onCloseModal = props.onCloseModal, onSelectValue = props.onSelectValue;
    return (react_1.default.createElement(antd_1.Modal, { title: "Create", centered: true, width: 1000, visible: visible, closable: true, onCancel: onCloseModal, footer: null },
        react_1.default.createElement(antd_1.Button, { onClick: function () {
                var random = Math.floor((Math.random() * 100000) + 1);
                onSelectValue([random, "New created item " + random.toString()]);
            } }, "save & select value"),
        react_1.default.createElement(antd_1.Button, { onClick: onCloseModal }, "close")));
};
exports.CreateModal = CreateModal;


/***/ }),

/***/ "./src/widgets/modals/DetailModal.tsx":
/*!********************************************!*\
  !*** ./src/widgets/modals/DetailModal.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DetailModal = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var DetailModal = function (props) {
    var visible = props.visible, onCloseModal = props.onCloseModal, onSelectValue = props.onSelectValue;
    return (react_1.default.createElement(antd_1.Modal, { title: "Detail", centered: true, width: 1000, visible: visible, closable: true, onCancel: onCloseModal, footer: null },
        react_1.default.createElement(antd_1.Button, { onClick: onCloseModal }, "cancel"),
        react_1.default.createElement(antd_1.Button, { onClick: function () {
                onSelectValue([1, "Updated value"]);
            } }, "ok")));
};
exports.DetailModal = DetailModal;


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchModal = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var antd_1 = __webpack_require__(/*! antd */ "antd");
var CreateModal_1 = __webpack_require__(/*! ./CreateModal */ "./src/widgets/modals/CreateModal.tsx");
var SearchModal = function (props) {
    var visible = props.visible, onCloseModal = props.onCloseModal, onSelectValue = props.onSelectValue;
    var _a = react_1.useState(false), showCreateModal = _a[0], setShowCreateModal = _a[1];
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(antd_1.Modal, { title: "Search", centered: true, width: 1000, visible: visible && !showCreateModal, closable: true, onCancel: onCloseModal, footer: null },
            react_1.default.createElement(antd_1.Button, { onClick: function () {
                    var random = Math.floor(Math.random() * 100000 + 1);
                    onSelectValue([random, "Test value " + random.toString()]);
                } }, "select value"),
            react_1.default.createElement(antd_1.Button, { onClick: function () {
                    setShowCreateModal(true);
                } }, "new item"),
            react_1.default.createElement(antd_1.Button, { onClick: onCloseModal }, "close")),
        react_1.default.createElement(CreateModal_1.CreateModal, { visible: showCreateModal, onSelectValue: function (value) {
                setShowCreateModal(false);
                onCloseModal();
                onSelectValue(value);
            }, onCloseModal: function () {
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

/***/ "./src/widgets/views/SearchTree.tsx":
/*!******************************************!*\
  !*** ./src/widgets/views/SearchTree.tsx ***!
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
var SearchFilter_1 = __importDefault(__webpack_require__(/*! @/widgets/views/searchFilter/SearchFilter */ "./src/widgets/views/searchFilter/SearchFilter.tsx"));
var Tree_1 = __importDefault(__webpack_require__(/*! @/widgets/views/Tree */ "./src/widgets/views/Tree.tsx"));
var ConnectionProvider_1 = __importDefault(__webpack_require__(/*! @/ConnectionProvider */ "./src/ConnectionProvider.ts"));
function SearchTree(props) {
    var _this = this;
    var arch = props.arch, fields = props.fields, searchFields = props.searchFields, _a = props.limit, originalLimit = _a === void 0 ? 80 : _a, model = props.model, onRowClicked = props.onRowClicked;
    var _b = react_1.useState(1), page = _b[0], setPage = _b[1];
    var _c = react_1.useState(0), offset = _c[0], setOffset = _c[1];
    var _d = react_1.useState(80), limit = _d[0], setLimit = _d[1];
    var _e = react_1.useState([]), params = _e[0], setParams = _e[1];
    var _f = react_1.useState(0), totalItems = _f[0], setTotalItems = _f[1];
    var _g = react_1.useState(), results = _g[0], setResults = _g[1];
    var _h = react_1.useState(false), searchFilterLoading = _h[0], setSearchFilterLoading = _h[1];
    var _j = react_1.useState(), error = _j[0], setError = _j[1];
    var _k = react_1.useState(false), tableRefreshing = _k[0], setTableRefreshing = _k[1];
    var onRequestPageChange = function (page) {
        setTableRefreshing(true);
        setPage(page);
        setOffset((page - 1) * limit);
    };
    var fetchResults = function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, totalItems_1, results_1, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, 3, 4]);
                    setTableRefreshing(true);
                    return [4 /*yield*/, ConnectionProvider_1.default.getHandler().search({
                            params: params,
                            limit: limit,
                            offset: offset,
                            model: model,
                            fields: fields,
                        })];
                case 1:
                    _a = _b.sent(), totalItems_1 = _a.totalItems, results_1 = _a.results;
                    setTotalItems(totalItems_1);
                    setResults(results_1);
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _b.sent();
                    setError(error_1);
                    return [3 /*break*/, 4];
                case 3:
                    setTableRefreshing(false);
                    setSearchFilterLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchResults();
    }, [page, limit, offset, params]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SearchFilter_1.default, { fields: fields, searchFields: searchFields, onClear: function () {
                if (tableRefreshing)
                    return;
                setError(undefined);
                setParams([]);
                setOffset(0);
                setPage(1);
                setLimit(originalLimit);
            }, limit: limit, offset: offset, isSearching: searchFilterLoading, onSubmit: function (_a) {
                var newParams = _a.params, limit = _a.limit, offset = _a.offset;
                if (tableRefreshing)
                    return;
                setSearchFilterLoading(true);
                setError(undefined);
                setPage(1);
                if (limit)
                    setLimit(limit);
                if (offset)
                    setOffset(offset);
                setParams(newParams);
            }, strings: {
                true: "Yes",
                false: "No",
                simple_search: "Simple search",
                advanced_search: "Advanced search",
                search: "Search",
                parameters: "Parameters",
                limit: "Limit",
                first: "First",
            } }),
        error && react_1.default.createElement(antd_1.Alert, { className: "mt-10", message: error, type: "error", banner: true }),
        react_1.default.createElement("div", { className: "pb-10" }),
        react_1.default.createElement(Tree_1.default, { total: totalItems, limit: limit, page: page, treeView: { arch: arch, fields: fields }, results: results || [], onRequestPageChange: onRequestPageChange, loading: tableRefreshing, strings: {
                no_results: "No results",
                summary: "Showing registers from {from} to {to} of {total} registers",
            }, onRowClicked: onRowClicked })));
}
exports.default = SearchTree;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9pcy1wcm9wLXZhbGlkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvQm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvQ2hhci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvQ29udGFpbmVyV2lkZ2V0LmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0RhdGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRmllbGQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRmxvYXQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRmxvYXRUaW1lLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvR3JvdXAuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9MYWJlbC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9NYW55Mm1hbnkuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvTWFueTJvbmUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvTmV3TGluZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Ob3RlYm9vay5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9PbmUybWFueS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9QYWdlLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1NlYXJjaEZpbHRlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9TZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvU2VwYXJhdG9yLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1RleHQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvVHJlZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9XaWRnZXQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvV2lkZ2V0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9oZWxwZXJzL25vZGVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUvZGlzdC9yZWFjdC1yZXNwb25zaXZlLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvc2hhbGxvd2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvZGlzdC9zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL0NvbmZpZy50cyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL0Nvbm5lY3Rpb25Qcm92aWRlci50cyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL2NvbW1vbi9GaWVsZC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9jb250ZXh0L0xvY2FsZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL2hlbHBlcnMvY29udGFpbmVySGVscGVyLnRzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvaGVscGVycy9zZWFyY2hGaWx0ZXJIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9oZWxwZXJzL3RyZWVIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3VpL0ZpZWxkc2V0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvV2lkZ2V0RmFjdG9yeS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvQm9vbGVhbi50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9DaGFyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9GbG9hdC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvSW50ZWdlci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvTGFiZWwudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL01hbnkyb25lLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9TZWxlY3Rpb24udHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL1NlcGFyYXRvci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvVGV4dC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2NvbnRhaW5lcnMvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvY29udGFpbmVycy9Hcm91cC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2NvbnRhaW5lcnMvTm90ZWJvb2sudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9tb2RhbHMvQ3JlYXRlTW9kYWwudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9tb2RhbHMvRGV0YWlsTW9kYWwudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9tb2RhbHMvU2VhcmNoTW9kYWwudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9Gb3JtLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3MvU2VhcmNoVHJlZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL1RyZWUudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvRGF0ZVJhbmdlUGlja2VyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL0RhdGVUaW1lUmFuZ2VQaWNrZXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvUGFpckZpZWxkcy50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9TZWFyY2hCb3R0b21CYXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvU2VhcmNoRmllbGQudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvU2VhcmNoRmlsdGVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL1NlYXJjaFBhcmFtcy50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlYWN0LW9vdWkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlYWN0LW9vdWkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7O0FDVnVDOztBQUV2QyxrN0hBQWs3SDs7QUFFbDdILFlBQVkseURBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUnZCO0FBQ0E7QUFDQSx5S0FBeUssT0FBTztBQUNoTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGtDQUFrQztBQUMxRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxPQUFPO0FBQ2xEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsT0FBTztBQUMzQix5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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QzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImFudGRcIiksIHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcImFudGRcIiwgXCJAYW50LWRlc2lnbi9pY29uc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWFjdC1vb3VpXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJhbnRkXCIpLCByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInJlYWN0LW9vdWlcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcImFudGRcIl0sIHJvb3RbXCJAYW50LWRlc2lnbi9pY29uc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hbnRfZGVzaWduX2ljb25zX18pIHtcbnJldHVybiAiLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFjY2VwdHxhY2NlcHRDaGFyc2V0fGFjY2Vzc0tleXxhY3Rpb258YWxsb3d8YWxsb3dVc2VyTWVkaWF8YWxsb3dQYXltZW50UmVxdWVzdHxhbGxvd0Z1bGxTY3JlZW58YWxsb3dUcmFuc3BhcmVuY3l8YWx0fGFzeW5jfGF1dG9Db21wbGV0ZXxhdXRvUGxheXxjYXB0dXJlfGNlbGxQYWRkaW5nfGNlbGxTcGFjaW5nfGNoYWxsZW5nZXxjaGFyU2V0fGNoZWNrZWR8Y2l0ZXxjbGFzc0lEfGNsYXNzTmFtZXxjb2xzfGNvbFNwYW58Y29udGVudHxjb250ZW50RWRpdGFibGV8Y29udGV4dE1lbnV8Y29udHJvbHN8Y29udHJvbHNMaXN0fGNvb3Jkc3xjcm9zc09yaWdpbnxkYXRhfGRhdGVUaW1lfGRlY29kaW5nfGRlZmF1bHR8ZGVmZXJ8ZGlyfGRpc2FibGVkfGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHlwZXx1c2VNYXB8dmFsdWV8d2lkdGh8d21vZGV8d3JhcHxhYm91dHxkYXRhdHlwZXxpbmxpc3R8cHJlZml4fHByb3BlcnR5fHJlc291cmNlfHR5cGVvZnx2b2NhYnxhdXRvQ2FwaXRhbGl6ZXxhdXRvQ29ycmVjdHxhdXRvU2F2ZXxjb2xvcnxpbmVydHxpdGVtUHJvcHxpdGVtU2NvcGV8aXRlbVR5cGV8aXRlbUlEfGl0ZW1SZWZ8b258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaW5kZXggPSBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsImZ1bmN0aW9uIHN0eWxpc19taW4gKFcpIHtcbiAgZnVuY3Rpb24gTShkLCBjLCBlLCBoLCBhKSB7XG4gICAgZm9yICh2YXIgbSA9IDAsIGIgPSAwLCB2ID0gMCwgbiA9IDAsIHEsIGcsIHggPSAwLCBLID0gMCwgaywgdSA9IGsgPSBxID0gMCwgbCA9IDAsIHIgPSAwLCBJID0gMCwgdCA9IDAsIEIgPSBlLmxlbmd0aCwgSiA9IEIgLSAxLCB5LCBmID0gJycsIHAgPSAnJywgRiA9ICcnLCBHID0gJycsIEM7IGwgPCBCOykge1xuICAgICAgZyA9IGUuY2hhckNvZGVBdChsKTtcbiAgICAgIGwgPT09IEogJiYgMCAhPT0gYiArIG4gKyB2ICsgbSAmJiAoMCAhPT0gYiAmJiAoZyA9IDQ3ID09PSBiID8gMTAgOiA0NyksIG4gPSB2ID0gbSA9IDAsIEIrKywgSisrKTtcblxuICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgaWYgKGwgPT09IEogJiYgKDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSksIDAgPCBmLnRyaW0oKS5sZW5ndGgpKSB7XG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgZiArPSBlLmNoYXJBdChsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnID0gNTk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgIGYgPSBmLnRyaW0oKTtcbiAgICAgICAgICAgIHEgPSBmLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgZm9yICh0ID0gKytsOyBsIDwgQjspIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodSA9IGwgKyAxOyB1IDwgSjsgKyt1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5jaGFyQ29kZUF0KHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0MiA9PT0gZyAmJiA0MiA9PT0gZS5jaGFyQ29kZUF0KHUgLSAxKSAmJiBsICsgMiAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0NyA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgIGZvciAoOyBsKysgPCBKICYmIGUuY2hhckNvZGVBdChsKSAhPT0gZzspIHtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKDAgPT09IGspIGJyZWFrO1xuICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGsgPSBlLnN1YnN0cmluZyh0LCBsKTtcbiAgICAgICAgICAgIDAgPT09IHEgJiYgKHEgPSAoZiA9IGYucmVwbGFjZShjYSwgJycpLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocSkge1xuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSk7XG4gICAgICAgICAgICAgICAgZyA9IGYuY2hhckNvZGVBdCgxKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgciA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByID0gTztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrID0gTShjLCByLCBrLCBnLCBhICsgMSk7XG4gICAgICAgICAgICAgICAgdCA9IGsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIDAgPCBBICYmIChyID0gWChPLCBmLCBJKSwgQyA9IEgoMywgaywgciwgYywgRCwgeiwgdCwgZywgYSwgaCksIGYgPSByLmpvaW4oJycpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHQgPSAoayA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChnID0gMCwgayA9ICcnKSk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0KSBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGRhLCBlYSk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShmYSwgJyQxICQyJyk7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgayA9IDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKCdAJyArIGssIDMpID8gJ0Atd2Via2l0LScgKyBrICsgJ0AnICsgayA6ICdAJyArIGs7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArIGssIDExMiA9PT0gaCAmJiAoayA9IChwICs9IGssICcnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGsgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIFgoYywgZiwgSSksIGssIGgsIGEgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRiArPSBrO1xuICAgICAgICAgICAgayA9IEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgZiA9ICgwIDwgciA/IGYucmVwbGFjZShOLCAnJykgOiBmKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoMSA8ICh0ID0gZi5sZW5ndGgpKSBzd2l0Y2ggKDAgPT09IHUgJiYgKHEgPSBmLmNoYXJDb2RlQXQoMCksIDQ1ID09PSBxIHx8IDk2IDwgcSAmJiAxMjMgPiBxKSAmJiAodCA9IChmID0gZi5yZXBsYWNlKCcgJywgJzonKSkubGVuZ3RoKSwgMCA8IEEgJiYgdm9pZCAwICE9PSAoQyA9IEgoMSwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpKSAmJiAwID09PSAodCA9IChmID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGYgPSAnXFx4MDBcXHgwMCcpLCBxID0gZi5jaGFyQ29kZUF0KDApLCBnID0gZi5jaGFyQ29kZUF0KDEpLCBxKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIGlmICgxMDUgPT09IGcgfHwgOTkgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgIEcgKz0gZiArIGUuY2hhckF0KGwpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgNTggIT09IGYuY2hhckNvZGVBdCh0IC0gMSkgJiYgKHAgKz0gUChmLCBxLCBnLCBmLmNoYXJDb2RlQXQoMikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIDQ3ID09PSBiID8gYiA9IDAgOiAwID09PSAxICsgcSAmJiAxMDcgIT09IGggJiYgMCA8IGYubGVuZ3RoICYmIChyID0gMSwgZiArPSAnXFx4MDAnKTtcbiAgICAgICAgICAwIDwgQSAqIFkgJiYgSCgwLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCk7XG4gICAgICAgICAgeiA9IDE7XG4gICAgICAgICAgRCsrO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTk6XG4gICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgICAgICB6Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB6Kys7XG4gICAgICAgICAgeSA9IGUuY2hhckF0KGwpO1xuXG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIG0gKyBiKSBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICB5ID0gJyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAzMiAhPT0gZyAmJiAoeSA9ICcgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFxmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXHYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIChyID0gSSA9IDEsIHkgPSAnXFxmJyArIHkpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0gKyBFICYmIDAgPCB1KSBzd2l0Y2ggKGwgLSB1KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgMTEyID09PSB4ICYmIDU4ID09PSBlLmNoYXJDb2RlQXQobCAtIDMpICYmIChFID0geCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAxMTEgPT09IEsgJiYgKEUgPSBLKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmICh1ID0gbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICYmIChyID0gMSwgeSArPSAnXFxyJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgMCA9PT0gYiAmJiAobiA9IG4gPT09IGcgPyAwIDogMCA9PT0gbiA/IGcgOiBuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbS0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIHYtLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcSkgc3dpdGNoICgyICogeCArIDMgKiBLKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHEgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSArIHUgKyBrICYmIChrID0gMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgaWYgKCEoMCA8IG4gKyBtICsgdikpIHN3aXRjaCAoYikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoMiAqIGcgKyAzICogZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzNTpcbiAgICAgICAgICAgICAgICAgICAgICBiID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgICAgICAgdCA9IGwsIGIgPSA0MjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgNDcgPT09IGcgJiYgNDIgPT09IHggJiYgdCArIDIgIT09IGwgJiYgKDMzID09PSBlLmNoYXJDb2RlQXQodCArIDIpICYmIChwICs9IGUuc3Vic3RyaW5nKHQsIGwgKyAxKSksIHkgPSAnJywgYiA9IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMCA9PT0gYiAmJiAoZiArPSB5KTtcbiAgICAgIH1cblxuICAgICAgSyA9IHg7XG4gICAgICB4ID0gZztcbiAgICAgIGwrKztcbiAgICB9XG5cbiAgICB0ID0gcC5sZW5ndGg7XG5cbiAgICBpZiAoMCA8IHQpIHtcbiAgICAgIHIgPSBjO1xuICAgICAgaWYgKDAgPCBBICYmIChDID0gSCgyLCBwLCByLCBkLCBELCB6LCB0LCBoLCBhLCBoKSwgdm9pZCAwICE9PSBDICYmIDAgPT09IChwID0gQykubGVuZ3RoKSkgcmV0dXJuIEcgKyBwICsgRjtcbiAgICAgIHAgPSByLmpvaW4oJywnKSArICd7JyArIHAgKyAnfSc7XG5cbiAgICAgIGlmICgwICE9PSB3ICogRSkge1xuICAgICAgICAyICE9PSB3IHx8IEwocCwgMikgfHwgKEUgPSAwKTtcblxuICAgICAgICBzd2l0Y2ggKEUpIHtcbiAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoaGEsICc6LW1vei0kMScpICsgcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKFEsICc6Oi13ZWJraXQtaW5wdXQtJDEnKSArIHAucmVwbGFjZShRLCAnOjotbW96LSQxJykgKyBwLnJlcGxhY2UoUSwgJzotbXMtaW5wdXQtJDEnKSArIHA7XG4gICAgICAgIH1cblxuICAgICAgICBFID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRyArIHAgKyBGO1xuICB9XG5cbiAgZnVuY3Rpb24gWChkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLnRyaW0oKS5zcGxpdChpYSk7XG4gICAgYyA9IGg7XG4gICAgdmFyIGEgPSBoLmxlbmd0aCxcbiAgICAgICAgbSA9IGQubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHZhciBiID0gMDtcblxuICAgICAgICBmb3IgKGQgPSAwID09PSBtID8gJycgOiBkWzBdICsgJyAnOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgY1tiXSA9IFooZCwgY1tiXSwgZSkudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2ID0gYiA9IDA7XG5cbiAgICAgICAgZm9yIChjID0gW107IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG07ICsrbikge1xuICAgICAgICAgICAgY1t2KytdID0gWihkW25dICsgJyAnLCBoW2JdLCBlKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFooZCwgYywgZSkge1xuICAgIHZhciBoID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIDMzID4gaCAmJiAoaCA9IChjID0gYy50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgc3dpdGNoIChoKSB7XG4gICAgICBjYXNlIDM4OlxuICAgICAgICByZXR1cm4gYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIHJldHVybiBkLnRyaW0oKSArIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoMCA8IDEgKiBlICYmIDAgPCBjLmluZGV4T2YoJ1xcZicpKSByZXR1cm4gYy5yZXBsYWNlKEYsICg1OCA9PT0gZC5jaGFyQ29kZUF0KDApID8gJycgOiAnJDEnKSArIGQudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZCArIGM7XG4gIH1cblxuICBmdW5jdGlvbiBQKGQsIGMsIGUsIGgpIHtcbiAgICB2YXIgYSA9IGQgKyAnOycsXG4gICAgICAgIG0gPSAyICogYyArIDMgKiBlICsgNCAqIGg7XG5cbiAgICBpZiAoOTQ0ID09PSBtKSB7XG4gICAgICBkID0gYS5pbmRleE9mKCc6JywgOSkgKyAxO1xuICAgICAgdmFyIGIgPSBhLnN1YnN0cmluZyhkLCBhLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgIGIgPSBhLnN1YnN0cmluZygwLCBkKS50cmltKCkgKyBiICsgJzsnO1xuICAgICAgcmV0dXJuIDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKGIsIDEpID8gJy13ZWJraXQtJyArIGIgKyBiIDogYjtcbiAgICB9XG5cbiAgICBpZiAoMCA9PT0gdyB8fCAyID09PSB3ICYmICFMKGEsIDEpKSByZXR1cm4gYTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAxMDE1OlxuICAgICAgICByZXR1cm4gOTcgPT09IGEuY2hhckNvZGVBdCgxMCkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk1MTpcbiAgICAgICAgcmV0dXJuIDExNiA9PT0gYS5jaGFyQ29kZUF0KDMpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NjM6XG4gICAgICAgIHJldHVybiAxMTAgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMTAwOTpcbiAgICAgICAgaWYgKDEwMCAhPT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5Njk6XG4gICAgICBjYXNlIDk0MjpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5Nzg6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDE5OlxuICAgICAgY2FzZSA5ODM6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgODgzOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg4KSkgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcbiAgICAgICAgaWYgKDAgPCBhLmluZGV4T2YoJ2ltYWdlLXNldCgnLCAxMSkpIHJldHVybiBhLnJlcGxhY2UoamEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMjpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNCkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDUpKSB7XG4gICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LScgKyBhLnJlcGxhY2UoJy1ncm93JywgJycpICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2dyb3cnLCAncG9zaXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTY0OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMjM6XG4gICAgICAgIGlmICg5OSAhPT0gYS5jaGFyQ29kZUF0KDgpKSBicmVhaztcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKGEuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jyk7XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtcGFjaycgKyBiICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtcGFjaycgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDA1OlxuICAgICAgICByZXR1cm4ga2EudGVzdChhKSA/IGEucmVwbGFjZShhYSwgJzotd2Via2l0LScpICsgYS5yZXBsYWNlKGFhLCAnOi1tb3otJykgKyBhIDogYTtcblxuICAgICAgY2FzZSAxZTM6XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZygxMykudHJpbSgpO1xuICAgICAgICBjID0gYi5pbmRleE9mKCctJykgKyAxO1xuXG4gICAgICAgIHN3aXRjaCAoYi5jaGFyQ29kZUF0KDApICsgYi5jaGFyQ29kZUF0KGMpKSB7XG4gICAgICAgICAgY2FzZSAyMjY6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0YicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIzMjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiLXJsJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAnbHInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAxNzpcbiAgICAgICAgaWYgKC0xID09PSBhLmluZGV4T2YoJ3N0aWNreScsIDkpKSBicmVhaztcblxuICAgICAgY2FzZSA5NzU6XG4gICAgICAgIGMgPSAoYSA9IGQpLmxlbmd0aCAtIDEwO1xuICAgICAgICBiID0gKDMzID09PSBhLmNoYXJDb2RlQXQoYykgPyBhLnN1YnN0cmluZygwLCBjKSA6IGEpLnN1YnN0cmluZyhkLmluZGV4T2YoJzonLCA3KSArIDEpLnRyaW0oKTtcblxuICAgICAgICBzd2l0Y2ggKG0gPSBiLmNoYXJDb2RlQXQoMCkgKyAoYi5jaGFyQ29kZUF0KDcpIHwgMCkpIHtcbiAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgIGlmICgxMTEgPiBiLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjA3OlxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgKDEwMiA8IG0gPyAnaW5saW5lLScgOiAnJykgKyAnYm94JykgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYS5yZXBsYWNlKGIsICctbXMtJyArIGIgKyAnYm94JykgKyAnOycgKyBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEgKyAnOyc7XG5cbiAgICAgIGNhc2UgOTM4OlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg1KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNikpIHtcbiAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgIHJldHVybiBiID0gYS5yZXBsYWNlKCctaXRlbXMnLCAnJyksICctd2Via2l0LScgKyBhICsgJy13ZWJraXQtYm94LScgKyBiICsgJy1tcy1mbGV4LScgKyBiICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWl0ZW0tJyArIGEucmVwbGFjZShiYSwgJycpICsgYTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtbGluZS1wYWNrJyArIGEucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3MzpcbiAgICAgIGNhc2UgOTg5OlxuICAgICAgICBpZiAoNDUgIT09IGEuY2hhckNvZGVBdCgzKSB8fCAxMjIgPT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMxOlxuICAgICAgY2FzZSA5NTM6XG4gICAgICAgIGlmICghMCA9PT0gbGEudGVzdChkKSkgcmV0dXJuIDExNSA9PT0gKGIgPSBkLnN1YnN0cmluZyhkLmluZGV4T2YoJzonKSArIDEpKS5jaGFyQ29kZUF0KDApID8gUChkLnJlcGxhY2UoJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgYywgZSwgaCkucmVwbGFjZSgnOmZpbGwtYXZhaWxhYmxlJywgJzpzdHJldGNoJykgOiBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgYS5yZXBsYWNlKGIsICctbW96LScgKyBiLnJlcGxhY2UoJ2ZpbGwtJywgJycpKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2MjpcbiAgICAgICAgaWYgKGEgPSAnLXdlYmtpdC0nICsgYSArICgxMDIgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctbXMtJyArIGEgOiAnJykgKyBhLCAyMTEgPT09IGUgKyBoICYmIDEwNSA9PT0gYS5jaGFyQ29kZUF0KDEzKSAmJiAwIDwgYS5pbmRleE9mKCd0cmFuc2Zvcm0nLCAxMCkpIHJldHVybiBhLnN1YnN0cmluZygwLCBhLmluZGV4T2YoJzsnLCAyNykgKyAxKS5yZXBsYWNlKG1hLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgZnVuY3Rpb24gTChkLCBjKSB7XG4gICAgdmFyIGUgPSBkLmluZGV4T2YoMSA9PT0gYyA/ICc6JyA6ICd7JyksXG4gICAgICAgIGggPSBkLnN1YnN0cmluZygwLCAzICE9PSBjID8gZSA6IDEwKTtcbiAgICBlID0gZC5zdWJzdHJpbmcoZSArIDEsIGQubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIFIoMiAhPT0gYyA/IGggOiBoLnJlcGxhY2UobmEsICckMScpLCBlLCBjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhKGQsIGMpIHtcbiAgICB2YXIgZSA9IFAoYywgYy5jaGFyQ29kZUF0KDApLCBjLmNoYXJDb2RlQXQoMSksIGMuY2hhckNvZGVBdCgyKSk7XG4gICAgcmV0dXJuIGUgIT09IGMgKyAnOycgPyBlLnJlcGxhY2Uob2EsICcgb3IgKCQxKScpLnN1YnN0cmluZyg0KSA6ICcoJyArIGMgKyAnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBIKGQsIGMsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpIHtcbiAgICBmb3IgKHZhciBnID0gMCwgeCA9IGMsIHc7IGcgPCBBOyArK2cpIHtcbiAgICAgIHN3aXRjaCAodyA9IFNbZ10uY2FsbChCLCBkLCB4LCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSkge1xuICAgICAgICBjYXNlIHZvaWQgMDpcbiAgICAgICAgY2FzZSAhMTpcbiAgICAgICAgY2FzZSAhMDpcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeCA9IHc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggIT09IGMpIHJldHVybiB4O1xuICB9XG5cbiAgZnVuY3Rpb24gVChkKSB7XG4gICAgc3dpdGNoIChkKSB7XG4gICAgICBjYXNlIHZvaWQgMDpcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgQSA9IFMubGVuZ3RoID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZCkgU1tBKytdID0gZDtlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGQpIGZvciAodmFyIGMgPSAwLCBlID0gZC5sZW5ndGg7IGMgPCBlOyArK2MpIHtcbiAgICAgICAgICBUKGRbY10pO1xuICAgICAgICB9IGVsc2UgWSA9ICEhZCB8IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFQ7XG4gIH1cblxuICBmdW5jdGlvbiBVKGQpIHtcbiAgICBkID0gZC5wcmVmaXg7XG4gICAgdm9pZCAwICE9PSBkICYmIChSID0gbnVsbCwgZCA/ICdmdW5jdGlvbicgIT09IHR5cGVvZiBkID8gdyA9IDEgOiAodyA9IDIsIFIgPSBkKSA6IHcgPSAwKTtcbiAgICByZXR1cm4gVTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEIoZCwgYykge1xuICAgIHZhciBlID0gZDtcbiAgICAzMyA+IGUuY2hhckNvZGVBdCgwKSAmJiAoZSA9IGUudHJpbSgpKTtcbiAgICBWID0gZTtcbiAgICBlID0gW1ZdO1xuXG4gICAgaWYgKDAgPCBBKSB7XG4gICAgICB2YXIgaCA9IEgoLTEsIGMsIGUsIGUsIEQsIHosIDAsIDAsIDAsIDApO1xuICAgICAgdm9pZCAwICE9PSBoICYmICdzdHJpbmcnID09PSB0eXBlb2YgaCAmJiAoYyA9IGgpO1xuICAgIH1cblxuICAgIHZhciBhID0gTShPLCBlLCBjLCAwLCAwKTtcbiAgICAwIDwgQSAmJiAoaCA9IEgoLTIsIGEsIGUsIGUsIEQsIHosIGEubGVuZ3RoLCAwLCAwLCAwKSwgdm9pZCAwICE9PSBoICYmIChhID0gaCkpO1xuICAgIFYgPSAnJztcbiAgICBFID0gMDtcbiAgICB6ID0gRCA9IDE7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICB2YXIgY2EgPSAvXlxcMCsvZyxcbiAgICAgIE4gPSAvW1xcMFxcclxcZl0vZyxcbiAgICAgIGFhID0gLzogKi9nLFxuICAgICAga2EgPSAvem9vfGdyYS8sXG4gICAgICBtYSA9IC8oWyw6IF0pKHRyYW5zZm9ybSkvZyxcbiAgICAgIGlhID0gLyxcXHIrPy9nLFxuICAgICAgRiA9IC8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLFxuICAgICAgZmEgPSAvQChrXFx3KylcXHMqKFxcUyopXFxzKi8sXG4gICAgICBRID0gLzo6KHBsYWNlKS9nLFxuICAgICAgaGEgPSAvOihyZWFkLW9ubHkpL2csXG4gICAgICBHID0gL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFxuICAgICAgZGEgPSAvXFwoXFxzKiguKilcXHMqXFwpL2csXG4gICAgICBvYSA9IC8oW1xcc1xcU10qPyk7L2csXG4gICAgICBiYSA9IC8tc2VsZnxmbGV4LS9nLFxuICAgICAgbmEgPSAvW15dKj8oOltycF1bZWxdYVtcXHctXSspW15dKi8sXG4gICAgICBsYSA9IC9zdHJldGNofDpcXHMqXFx3K1xcLSg/OmNvbnRlfGF2YWlsKS8sXG4gICAgICBqYSA9IC8oW14tXSkoaW1hZ2Utc2V0XFwoKS8sXG4gICAgICB6ID0gMSxcbiAgICAgIEQgPSAxLFxuICAgICAgRSA9IDAsXG4gICAgICB3ID0gMSxcbiAgICAgIE8gPSBbXSxcbiAgICAgIFMgPSBbXSxcbiAgICAgIEEgPSAwLFxuICAgICAgUiA9IG51bGwsXG4gICAgICBZID0gMCxcbiAgICAgIFYgPSAnJztcbiAgQi51c2UgPSBUO1xuICBCLnNldCA9IFU7XG4gIHZvaWQgMCAhPT0gVyAmJiBVKFcpO1xuICByZXR1cm4gQjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGlzX21pbjtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogQm9vbGVhbiBpbnB1dFxuICovXG52YXIgQm9vbGVhbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQm9vbGVhbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCb29sZWFuKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEJvb2xlYW47XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBCb29sZWFuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Qm9vbGVhbi5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xudmFyIEJ1dHRvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnV0dG9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMpLCB7IG5vbGFiZWw6IChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMubm9sYWJlbCkgIT09IHVuZGVmaW5lZCA/IHByb3BzLm5vbGFiZWwgOiB0cnVlIH0pKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogVHlwZSAocHJpbWFyeSBvciBkZWZhdWx0KVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3R5cGUgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1dHRvbiBjYXB0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fY2FwdGlvbiA9IFwiXCI7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9jYXB0aW9uID0gcHJvcHMuc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbi5wcm90b3R5cGUsIFwidHlwZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLnByb3RvdHlwZSwgXCJjYXB0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FwdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBCdXR0b247XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CdXR0b24uanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBPbmUtbGluZSBpbnB1dCB3aXRoIGEgbGVuZ3RoIGxpbWl0LlxuICovXG52YXIgQ2hhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2hhciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDaGFyKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgcGxhY2UgaG9sZGVyXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fcGxhY2Vob2xkZXIgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIF90aGlzLl9pc1Bhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fc2l6ZSA9IHByb3BzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pc1Bhc3N3b3JkID0gcHJvcHMucGFzc3dvcmQgPT09IFwiVHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENoYXIucHJvdG90eXBlLCBcInBsYWNlaG9sZGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENoYXIucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENoYXIucHJvdG90eXBlLCBcImlzUGFzc3dvcmRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1Bhc3N3b3JkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faXNQYXNzd29yZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIENoYXI7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBDaGFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2hhci5qcy5tYXAiLCJpbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbmltcG9ydCBOZXdMaW5lIGZyb20gXCIuL05ld0xpbmVcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xudmFyIENvbnRhaW5lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb250YWluZXIoY29sdW1ucywgY29sc3Bhbikge1xuICAgICAgICBpZiAoY29sdW1ucyA9PT0gdm9pZCAwKSB7IGNvbHVtbnMgPSA0OyB9XG4gICAgICAgIGlmIChjb2xzcGFuID09PSB2b2lkIDApIHsgY29sc3BhbiA9IDY7IH1cbiAgICAgICAgdGhpcy5fY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgICAgIHRoaXMuX2NvbHNwYW4gPSBjb2xzcGFuO1xuICAgICAgICB0aGlzLl9yb3dzID0gW1tdXTtcbiAgICAgICAgdGhpcy5faW5kZXggPSAwO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyLnByb3RvdHlwZSwgXCJjb2x1bW5zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbHVtbnMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXIucHJvdG90eXBlLCBcImNvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2xzcGFuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY29sc3BhbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lci5wcm90b3R5cGUsIFwicm93c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jvd3M7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyLnByb3RvdHlwZSwgXCJpbmRleFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV4dCBmcmVlIHBvc2l0aW9uXG4gICAgICovXG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5mcmVlUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzcGFuID0gdGhpcy5fcm93c1t0aGlzLl9pbmRleF0uZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gIWVsLmludmlzaWJsZTsgfSkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldiArIGN1cnJlbnQuY29sc3BhbjtcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zIC0gc3BhbjtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuYWRkV2lkZ2V0ID0gZnVuY3Rpb24gKHdpZGdldCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgd2lkZ2V0c1RvQWRkID0gW107XG4gICAgICAgIHZhciBhZGRMYWJlbCA9IG9wdGlvbnMgPyBvcHRpb25zLmFkZExhYmVsIDogdHJ1ZTtcbiAgICAgICAgaWYgKHdpZGdldCBpbnN0YW5jZW9mIE5ld0xpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd3MucHVzaChbXSk7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCsrO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aWRnZXQuY29sc3BhbiA+IHRoaXMuX2NvbHVtbnMpIHtcbiAgICAgICAgICAgIC8vIFdpZGdldCBjb2xzcGFuIGlzIGdyZWF0ZXIgdGhhbiBjb250YWluZXIgY29sdW1ucywgc28gd2UgY2hhbmdlIHdpZGdldFxuICAgICAgICAgICAgLy8gY29sc3BhbiB0byBmaXQgY29udGFpbmVyIGNvbHVtbnMuXG4gICAgICAgICAgICB3aWRnZXQuY29sc3BhbiA9IHRoaXMuX2NvbHVtbnM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGZpZWxkcyB3aXRob3V0IG5vbGFiZWwgd2UgYWRkIGEgcHJlY2VkaW5nIGxhYmVsIHdpZGdldFxuICAgICAgICBpZiAoYWRkTGFiZWwgJiYgd2lkZ2V0IGluc3RhbmNlb2YgRmllbGQgJiYgIXdpZGdldC5ub2xhYmVsKSB7XG4gICAgICAgICAgICBpZiAod2lkZ2V0LmNvbHNwYW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmNvbHNwYW4gLT0gMTsgLy8gV2Ugc3Vic3RyYWN0IG9uZSBjb2xzcGFuIGZvciB0aGUgY29ycmVzcG9uZGluZyBsYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxhYmVsID0gbmV3IExhYmVsKHtcbiAgICAgICAgICAgICAgICBuYW1lOiB3aWRnZXQuaWQgKyBcIl9sYWJlbFwiLFxuICAgICAgICAgICAgICAgIHN0cmluZzogd2lkZ2V0LmxhYmVsLFxuICAgICAgICAgICAgICAgIGludmlzaWJsZTogd2lkZ2V0LmludmlzaWJsZSxcbiAgICAgICAgICAgICAgICBoZWxwOiB3aWRnZXQudG9vbHRpcCxcbiAgICAgICAgICAgICAgICBmaWVsZEZvckxhYmVsOiB3aWRnZXQuaWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpZGdldHNUb0FkZC5wdXNoKGxhYmVsKTtcbiAgICAgICAgICAgIHdpZGdldHNUb0FkZC5wdXNoKHdpZGdldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWRnZXRzVG9BZGQucHVzaCh3aWRnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3aWRnZXRzQ29sc3BhbiA9IHdpZGdldHNUb0FkZC5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBjdXJyZW50V2lkZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBjdXJyZW50V2lkZ2V0LmNvbHNwYW47XG4gICAgICAgIH0sIDApO1xuICAgICAgICBpZiAod2lkZ2V0c0NvbHNwYW4gPiB0aGlzLmZyZWVQb3NpdGlvbigpKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzLnB1c2goW10pO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb3dzW3RoaXMuX2luZGV4XSA9IHRoaXMuX3Jvd3NbdGhpcy5faW5kZXhdLmNvbmNhdCh3aWRnZXRzVG9BZGQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJhdmVyc2VzIGNoaWxkcmVuIHRvIGZpbmQgYSBtYXRjaGluZyBjb250YWluZXIgb3Igd2lkZ2V0IHdpdGggdGhlIGV4YWN0IHNhbWUgaWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIChuYW1lKSBvZiB0aGUgZmllbGQgb3IgY29udGFpbmVyIHRvIGZpbmRcbiAgICAgKi9cbiAgICBDb250YWluZXIucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX3Jvd3MgJiYgdGhpcy5fcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSXRlbSBoYXMgYmVlbiBmb3VuZC5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocm93ICYmIHJvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXRlbSBoYXMgYmVlbiBmb3VuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBpdGVtLmZpbmRCeUlkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udGFpbmVyO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbnRhaW5lci5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG52YXIgQ29udGFpbmVyV2lkZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb250YWluZXJXaWRnZXQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29udGFpbmVyV2lkZ2V0KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgaWRlbnRpZmllclxuICAgICAgICAgKlxuICAgICAgICAgKiBDb3JyZXNwb25kcyB0byB0aGUgZmllbGQncyBuYW1lIGF0dHJpYnV0ZSBmcm9tIHhtbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2lkID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnRhaW5lciBsYWJlbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2xhYmVsID0gXCJcIjtcbiAgICAgICAgX3RoaXMuX2NvbnRhaW5lciA9IG5ldyBDb250YWluZXIocHJvcHMgJiYgcHJvcHMuY29sLCBDb250YWluZXJXaWRnZXQuX2RlZmF1bHRDb2xzcGFuKTtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMubmFtZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9pZCA9IHByb3BzLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9jb250YWluZXIuY29sc3BhbiA9ICtwcm9wcy5jb2xzcGFuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9sYWJlbCA9IHByb3BzLnN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXJXaWRnZXQucHJvdG90eXBlLCBcImlkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lcldpZGdldCwgXCJkZWZhdWx0Q29sc3BhblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIENvbnRhaW5lcldpZGdldC5fZGVmYXVsdENvbHNwYW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBDb250YWluZXJXaWRnZXQuX2RlZmF1bHRDb2xzcGFuID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyV2lkZ2V0LnByb3RvdHlwZSwgXCJjb250YWluZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXJXaWRnZXQucHJvdG90eXBlLCBcImNvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXIuY29sc3BhbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5jb2xzcGFuID0gK3ZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lcldpZGdldC5wcm90b3R5cGUsIFwibGFiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBDYWxscyBjb250YWluZXIncyBmaW5kQnlJZCBtZXRob2QgdG8gZmluZCB0aGUgd2lkZ2V0cyBtYXRjaGluZyB3aXRoIHBhcmFtIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIHRvIGZpbmRcbiAgICAgKi9cbiAgICBDb250YWluZXJXaWRnZXQucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmIChpZCA9PT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmZpbmRCeUlkKGlkKTtcbiAgICB9O1xuICAgIENvbnRhaW5lcldpZGdldC5fZGVmYXVsdENvbHNwYW4gPSA2O1xuICAgIHJldHVybiBDb250YWluZXJXaWRnZXQ7XG59KFdpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyV2lkZ2V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29udGFpbmVyV2lkZ2V0LmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogRGF0ZSBpbnB1dFxuICovXG52YXIgRGF0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGF0ZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEYXRlKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIERhdGU7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBEYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGF0ZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIERhdGVUaW1lIGlucHV0XG4gKi9cbnZhciBEYXRlVGltZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGF0ZVRpbWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGF0ZVRpbWUocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gRGF0ZVRpbWU7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURhdGVUaW1lLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuL1dpZGdldFwiO1xudmFyIEZpZWxkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGaWVsZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGaWVsZChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIGlkZW50aWZpZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQ29ycmVzcG9uZHMgdG8gdGhlIGZpZWxkJ3MgbmFtZSBhdHRyaWJ1dGUgZnJvbSB4bWxcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9pZCA9IFwiXCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMYWJlbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2xhYmVsID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5vIGxhYmVsXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgZmllbGQgaGFzbid0IGdvdCB0byBzaG93IHRoZSBsYWJlbFxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX25vbGFiZWwgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIFJlcXVpcmVkIGZpZWxkXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fcmVxdWlyZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFjdGl2YXRlZCAoZGVmYXVsdCBpcyB0cnVlKVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2FjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgIC8vIEFjdGl2YXRlZCBieSBkZWZhdWx0XG4gICAgICAgIF90aGlzLl9hY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2lkID0gcHJvcHMubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5hY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fYWN0aXZhdGVkID0gcHJvcHMuYWN0aXZhdGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9sYWJlbCA9IHByb3BzLnN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5oZWxwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3Rvb2x0aXAgPSBwcm9wcy5oZWxwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLm5vbGFiZWwgJiZcbiAgICAgICAgICAgICAgICAocHJvcHMubm9sYWJlbCA9PT0gXCIxXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBwcm9wcy5ub2xhYmVsID09PSBcImJvb2xlYW5cIiAmJiBwcm9wcy5ub2xhYmVsID09PSB0cnVlKSkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbm9sYWJlbCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMucmVxdWlyZWQgJiZcbiAgICAgICAgICAgICAgICAocHJvcHMucmVxdWlyZWQgPT09IFwiMVwiIHx8IHByb3BzLnJlcXVpcmVkID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmllbGQucHJvdG90eXBlLCBcImlkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpZWxkLnByb3RvdHlwZSwgXCJsYWJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWVsZC5wcm90b3R5cGUsIFwibm9sYWJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vbGFiZWw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9ub2xhYmVsID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmllbGQucHJvdG90eXBlLCBcInJlcXVpcmVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpZWxkLnByb3RvdHlwZSwgXCJ0b29sdGlwXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdG9vbHRpcDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rvb2x0aXAgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWVsZC5wcm90b3R5cGUsIFwiYWN0aXZhdGVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZhdGVkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZhdGVkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoaXMgaW5zdGFuY2UgaW4gY2FzZSB0aGlzIGlkIG1hdGNoZXMgcGFyYW0gaWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIChuYW1lKSB0byBmaW5kXG4gICAgICovXG4gICAgRmllbGQucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX2lkID09PSBpZCkge1xuICAgICAgICAgICAgciA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICByZXR1cm4gRmllbGQ7XG59KFdpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgRmllbGQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWVsZC5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIEZsb2F0IGlucHV0XG4gKi9cbnZhciBGbG9hdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXQocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlZ2VyIGRpZ2l0c1xuICAgICAgICAgKlxuICAgICAgICAgKiBOdW1iZXIgb2YgaW50ZWdlciBkaWdpdHMgdGhhdCB3aWxsIGJlIHBhcnQgb2YgdGhlIGZsb2F0XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5faW50ZWdlckRpZ2l0cyA9IDE2O1xuICAgICAgICAvKipcbiAgICAgICAgICogRGVjaW1hbCBkaWdpdHNcbiAgICAgICAgICpcbiAgICAgICAgICogTnVtYmVyIG9mIGRlY2ltYWwgZGlnaXRzIHRoYXQgd2lsbCBiZSBwYXJ0IG9mIHRoZSBmbG9hdFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2RlY2ltYWxEaWdpdHMgPSAyO1xuICAgICAgICBpZiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLmRpZ2l0cykge1xuICAgICAgICAgICAgdmFyIF9hID0gcHJvcHMuZGlnaXRzLCBpbnRlZ2VycyA9IF9hWzBdLCBkZWNpbWFscyA9IF9hWzFdO1xuICAgICAgICAgICAgX3RoaXMuX2ludGVnZXJEaWdpdHMgPSBpbnRlZ2VycztcbiAgICAgICAgICAgIF90aGlzLl9kZWNpbWFsRGlnaXRzID0gZGVjaW1hbHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmxvYXQucHJvdG90eXBlLCBcImludGVnZXJEaWdpdHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnRlZ2VyRGlnaXRzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faW50ZWdlckRpZ2l0cyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0LnByb3RvdHlwZSwgXCJkZWNpbWFsRGlnaXRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGVjaW1hbERpZ2l0cztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlY2ltYWxEaWdpdHMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBGbG9hdDtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IEZsb2F0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmxvYXQuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGbG9hdCBmcm9tIFwiLi9GbG9hdFwiO1xuLyoqXG4gKiBGbG9hdFRpbWUgaW5wdXRcbiAqL1xudmFyIEZsb2F0VGltZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXRUaW1lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0VGltZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gRmxvYXRUaW1lO1xufShGbG9hdCkpO1xuZXhwb3J0IGRlZmF1bHQgRmxvYXRUaW1lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmxvYXRUaW1lLmpzLm1hcCIsImltcG9ydCBXaWRnZXRGYWN0b3J5IGZyb20gXCIuL1dpZGdldEZhY3RvcnlcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgQ29udGFpbmVyV2lkZ2V0IGZyb20gXCIuL0NvbnRhaW5lcldpZGdldFwiO1xuaW1wb3J0IHsgcGFyc2VOb2RlcyB9IGZyb20gXCIuL2hlbHBlcnMvbm9kZVBhcnNlclwiO1xudmFyIEZvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICBfd2lkZ2V0cyA9IHtcbiAgICAgICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRhaW5lciAmJiB0aGlzLl9jb250YWluZXIubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5fY29udGFpbmVyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8geWllbGQgaXRlbVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBnZXQgd2lkZ2V0cygpIHtcbiAgICAgIHJldHVybiB0aGlzLl93aWRnZXRzO1xuICAgIH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIEZvcm0oZmllbGRzLCBjb2x1bW5zKSB7XG4gICAgICAgIGlmIChjb2x1bW5zID09PSB2b2lkIDApIHsgY29sdW1ucyA9IDg7IH1cbiAgICAgICAgdGhpcy5fZmllbGRzID0gZmllbGRzO1xuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBuZXcgQ29udGFpbmVyKGNvbHVtbnMpO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybS5wcm90b3R5cGUsIFwiZmllbGRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmllbGRzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm0ucHJvdG90eXBlLCBcImNvbnRhaW5lclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEZvcm0ucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHhtbCkge1xuICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICB2YXIgdmlldyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sLCBcInRleHQveG1sXCIpO1xuICAgICAgICB0aGlzLnBhcnNlTm9kZSh2aWV3LmRvY3VtZW50RWxlbWVudCwgdGhpcy5fY29udGFpbmVyKTtcbiAgICB9O1xuICAgIEZvcm0ucHJvdG90eXBlLnBhcnNlTm9kZSA9IGZ1bmN0aW9uIChub2RlLCBjb250YWluZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHdpZGdldEZhY3RvcnkgPSBuZXcgV2lkZ2V0RmFjdG9yeSgpO1xuICAgICAgICB2YXIgbm9kZXNQYXJzZWQgPSBwYXJzZU5vZGVzKG5vZGUuY2hpbGROb2RlcywgdGhpcy5fZmllbGRzKTtcbiAgICAgICAgbm9kZXNQYXJzZWQuZm9yRWFjaChmdW5jdGlvbiAobm9kZVBhcnNlZCkge1xuICAgICAgICAgICAgdmFyIHRhZyA9IG5vZGVQYXJzZWQudGFnLCB0YWdBdHRyaWJ1dGVzID0gbm9kZVBhcnNlZC50YWdBdHRyaWJ1dGVzLCBjaGlsZCA9IG5vZGVQYXJzZWQuY2hpbGQ7XG4gICAgICAgICAgICB2YXIgd2lkZ2V0ID0gd2lkZ2V0RmFjdG9yeS5jcmVhdGVXaWRnZXQodGFnLCB0YWdBdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIGlmICh3aWRnZXQgaW5zdGFuY2VvZiBDb250YWluZXJXaWRnZXQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wYXJzZU5vZGUoY2hpbGQsIHdpZGdldC5jb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLmFkZFdpZGdldCh3aWRnZXQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxzIGNvbnRhaW5lcidzIGZpbmRCeUlkIG1ldGhvZCB0byBmaW5kIHRoZSB3aWRnZXRzIG1hdGNoaW5nIHdpdGggcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgdG8gZmluZFxuICAgICAqL1xuICAgIEZvcm0ucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5maW5kQnlJZChpZCk7XG4gICAgfTtcbiAgICByZXR1cm4gRm9ybTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbnZhciBHcm91cCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoR3JvdXAsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR3JvdXAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gR3JvdXA7XG59KENvbnRhaW5lcldpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Hcm91cC5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIEludGVnZXIgaW5wdXRcbiAqL1xudmFyIEludGVnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEludGVnZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW50ZWdlcihwcm9wcykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBJbnRlZ2VyO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgSW50ZWdlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUludGVnZXIuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbnZhciBMYWJlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTGFiZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGFiZWwocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzKSwgeyBub2xhYmVsOiB0cnVlIH0pKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogTGFiZWwgdGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3RleHQgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogQWxpZ24gdGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2FsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZCBvZiB0aGUgZmllbGQgdGhhdCB0aGlzIGxhYmVsIGdvZXMgd2l0aC4gTnVsbCBpZiBpdCdzIGFuIGluZGVwZW5kZW50IGxhYmVsXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fZmllbGRGb3JMYWJlbCA9IG51bGw7XG4gICAgICAgIGlmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMuZmllbGRGb3JMYWJlbCkge1xuICAgICAgICAgICAgX3RoaXMuX2ZpZWxkRm9yTGFiZWwgPSBwcm9wcy5maWVsZEZvckxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExhYmVsLnByb3RvdHlwZSwgXCJ0ZXh0XCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMYWJlbC5wcm90b3R5cGUsIFwiYWxpZ25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbGlnbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FsaWduID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGFiZWwucHJvdG90eXBlLCBcImZpZWxkRm9yTGFiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maWVsZEZvckxhYmVsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZmllbGRGb3JMYWJlbCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIExhYmVsO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1MYWJlbC5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIEEgTWFueTJtYW55IHJlbGF0aW9uc2hpcCBmaWVsZFxuICovXG52YXIgTWFueTJtYW55ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNYW55Mm1hbnksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWFueTJtYW55KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWxhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gXCJcIjtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zaXplID0gcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5yZWxhdGlvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9yZWxhdGlvbiA9IHByb3BzLnJlbGF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hbnkybWFueS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFueTJtYW55LnByb3RvdHlwZSwgXCJyZWxhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVsYXRpb24gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBNYW55Mm1hbnk7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBNYW55Mm1hbnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NYW55Mm1hbnkuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBBIG1hbnkyb25lIHJlbGF0aW9uc2hpcCBmaWVsZFxuICovXG52YXIgTWFueTJvbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1hbnkyb25lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1hbnkyb25lKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWxhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gXCJcIjtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zaXplID0gcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5yZWxhdGlvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9yZWxhdGlvbiA9IHByb3BzLnJlbGF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hbnkyb25lLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYW55Mm9uZS5wcm90b3R5cGUsIFwicmVsYXRpb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWxhdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbGF0aW9uID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTWFueTJvbmU7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBNYW55Mm9uZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1hbnkyb25lLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuL1dpZGdldFwiO1xudmFyIE5ld0xpbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5ld0xpbmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTmV3TGluZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBOZXdMaW5lLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBOZXdMaW5lO1xufShXaWRnZXQpKTtcbmV4cG9ydCBkZWZhdWx0IE5ld0xpbmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1OZXdMaW5lLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgQ29udGFpbmVyV2lkZ2V0IGZyb20gXCIuL0NvbnRhaW5lcldpZGdldFwiO1xudmFyIE5vdGVib29rID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb3RlYm9vaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOb3RlYm9vayhwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY29sc3BhbiA9IE5vdGVib29rLl9kZWZhdWx0Q29sc3BhbjtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbHNwYW4gPSBwcm9wcy5jb2xzcGFuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vdGVib29rLCBcImRlZmF1bHRDb2xzcGFuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gTm90ZWJvb2suX2RlZmF1bHRDb2xzcGFuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgTm90ZWJvb2suX2RlZmF1bHRDb2xzcGFuID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBOb3RlYm9vay5fZGVmYXVsdENvbHNwYW4gPSAzO1xuICAgIHJldHVybiBOb3RlYm9vaztcbn0oQ29udGFpbmVyV2lkZ2V0KSk7XG5leHBvcnQgZGVmYXVsdCBOb3RlYm9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5vdGVib29rLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogQSBPbmUyTWFueSByZWxhdGlvbnNoaXAgZmllbGRcbiAqL1xudmFyIE9uZTJtYW55ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPbmUybWFueSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPbmUybWFueShwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIHNpemVcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9zaXplID0gMTUwO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVsYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9yZWxhdGlvbiA9IFwiXCI7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fc2l6ZSA9IHByb3BzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMucmVsYXRpb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVsYXRpb24gPSBwcm9wcy5yZWxhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPbmUybWFueS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT25lMm1hbnkucHJvdG90eXBlLCBcInJlbGF0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVsYXRpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWxhdGlvbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE9uZTJtYW55O1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgT25lMm1hbnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PbmUybWFueS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbnZhciBQYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQYWdlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFBhZ2UocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gUGFnZTtcbn0oQ29udGFpbmVyV2lkZ2V0KSk7XG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UGFnZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZsb2F0IGZyb20gXCIuL0Zsb2F0XCI7XG4vKipcbiAqIFByb2dyZXNzQmFyIGlucHV0XG4gKi9cbnZhciBQcm9ncmVzc0JhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUHJvZ3Jlc3NCYXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFByb2dyZXNzQmFyO1xufShGbG9hdCkpO1xuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9ncmVzc0Jhci5qcy5tYXAiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IFdpZGdldEZhY3RvcnkgZnJvbSBcIi4vV2lkZ2V0RmFjdG9yeVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbnZhciBTZWFyY2hGaWx0ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VhcmNoRmlsdGVyKHNlYXJjaEZpZWxkcywgZmllbGRzLCBjb2x1bW5zKSB7XG4gICAgICAgIGlmIChjb2x1bW5zID09PSB2b2lkIDApIHsgY29sdW1ucyA9IDg7IH1cbiAgICAgICAgdGhpcy5fc2VhcmNoRmllbGRzID0gc2VhcmNoRmllbGRzO1xuICAgICAgICB0aGlzLl9maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMuX3NpbXBsZVNlYXJjaENvbnRhaW5lciA9IG5ldyBDb250YWluZXIoY29sdW1ucyk7XG4gICAgICAgIHRoaXMuX2FkdmFuY2VkU2VhcmNoQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcihjb2x1bW5zKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlYXJjaEZpbHRlci5wcm90b3R5cGUsIFwic2VhcmNoRmllbGRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2VhcmNoRmllbGRzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlYXJjaEZpbHRlci5wcm90b3R5cGUsIFwiZmllbGRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmllbGRzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlYXJjaEZpbHRlci5wcm90b3R5cGUsIFwic2ltcGxlU2VhcmNoQ29udGFpbmVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2ltcGxlU2VhcmNoQ29udGFpbmVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlYXJjaEZpbHRlci5wcm90b3R5cGUsIFwiYWR2YW5jZWRTZWFyY2hDb250YWluZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hZHZhbmNlZFNlYXJjaENvbnRhaW5lcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFNlYXJjaEZpbHRlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB3aWRnZXRGYWN0b3J5ID0gbmV3IFdpZGdldEZhY3RvcnkoKTtcbiAgICAgICAgdmFyIHNpbXBsZVNlYXJjaFdpZGdldHMgPSB0aGlzLnBhcnNlRmllbGRzKHRoaXMuc2VhcmNoRmllbGRzLnByaW1hcnksIHdpZGdldEZhY3RvcnkpO1xuICAgICAgICBzaW1wbGVTZWFyY2hXaWRnZXRzLmZvckVhY2goZnVuY3Rpb24gKHdpZGdldCkge1xuICAgICAgICAgICAgX3RoaXMuc2ltcGxlU2VhcmNoQ29udGFpbmVyLmFkZFdpZGdldCh3aWRnZXQsIHsgYWRkTGFiZWw6IGZhbHNlIH0pO1xuICAgICAgICAgICAgX3RoaXMuYWR2YW5jZWRTZWFyY2hDb250YWluZXIuYWRkV2lkZ2V0KHdpZGdldCwgeyBhZGRMYWJlbDogZmFsc2UgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYWR2YW5jZWRTZWFyY2hXaWRnZXRzID0gdGhpcy5wYXJzZUZpZWxkcyh0aGlzLnNlYXJjaEZpZWxkcy5zZWNvbmRhcnksIHdpZGdldEZhY3RvcnkpO1xuICAgICAgICBhZHZhbmNlZFNlYXJjaFdpZGdldHMuZm9yRWFjaChmdW5jdGlvbiAod2lkZ2V0KSB7XG4gICAgICAgICAgICBfdGhpcy5hZHZhbmNlZFNlYXJjaENvbnRhaW5lci5hZGRXaWRnZXQod2lkZ2V0LCB7IGFkZExhYmVsOiBmYWxzZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTZWFyY2hGaWx0ZXIucHJvdG90eXBlLnBhcnNlRmllbGRzID0gZnVuY3Rpb24gKHNlYXJjaEZpZWxkcywgd2lkZ2V0RmFjdG9yeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2VhcmNoRmllbGRzLm1hcChmdW5jdGlvbiAoc2VhcmNoRmllbGQpIHtcbiAgICAgICAgICAgIHZhciBmaWVsZEF0dHJpYnV0ZXMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgX3RoaXMuZmllbGRzW3NlYXJjaEZpZWxkXSksIHsgbmFtZTogc2VhcmNoRmllbGQsIGNvbHNwYW46IDIgfSk7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGZpZWxkQXR0cmlidXRlcy50eXBlO1xuICAgICAgICAgICAgcmV0dXJuIHdpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KHR5cGUsIGZpZWxkQXR0cmlidXRlcyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbHMgY29udGFpbmVyJ3MgZmluZEJ5SWQgbWV0aG9kIHRvIGZpbmQgdGhlIHdpZGdldHMgbWF0Y2hpbmcgd2l0aCBwYXJhbSBpZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZCB0byBmaW5kXG4gICAgICovXG4gICAgU2VhcmNoRmlsdGVyLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZHZhbmNlZFNlYXJjaENvbnRhaW5lci5maW5kQnlJZChpZCk7XG4gICAgfTtcbiAgICByZXR1cm4gU2VhcmNoRmlsdGVyO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZpbHRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNlYXJjaEZpbHRlci5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIFNlbGVjdGlvbiBmaWVsZCBmb3Iga2V5LXZhbHVlIGxpc3RzXG4gKi9cbnZhciBTZWxlY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNlbGVjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBzaXplXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fc2l6ZSA9IDE1MDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVlcyBhbmQga2V5c1xuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NlbGVjdGlvblZhbHVlcyA9IG5ldyBNYXAoW10pO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NpemUgPSBwcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zZWxlY3Rpb25WYWx1ZXMgPSBuZXcgTWFwKHByb3BzLnNlbGVjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0aW9uLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWxlY3Rpb24ucHJvdG90eXBlLCBcInNlbGVjdGlvblZhbHVlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvblZhbHVlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvblZhbHVlcyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFNlbGVjdGlvbjtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNlbGVjdGlvbi5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbnZhciBTZXBhcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNlcGFyYXRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZXBhcmF0b3IocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMYWJlbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2xhYmVsID0gXCJcIjtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2xhYmVsID0gcHJvcHMuc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlcGFyYXRvci5wcm90b3R5cGUsIFwibGFiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTZXBhcmF0b3IucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIFNlcGFyYXRvcjtcbn0oV2lkZ2V0KSk7XG5leHBvcnQgZGVmYXVsdCBTZXBhcmF0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TZXBhcmF0b3IuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBNdWx0aWxpbmUgaW5wdXQgd2l0aCBubyBsZW5ndGggbGltaXQuXG4gKi9cbnZhciBUZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUZXh0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRleHQocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBwbGFjZSBob2xkZXJcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9wbGFjZWhvbGRlciA9ICcnO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5wbGFjZWhvbGRlcikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9wbGFjZWhvbGRlciA9IHByb3BzLnBsYWNlaG9sZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRleHQucHJvdG90eXBlLCBcInBsYWNlaG9sZGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIFRleHQ7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGV4dC5qcy5tYXAiLCJpbXBvcnQgV2lkZ2V0RmFjdG9yeSBmcm9tIFwiLi9XaWRnZXRGYWN0b3J5XCI7XG5pbXBvcnQgeyBwYXJzZU5vZGVzIH0gZnJvbSBcIi4vaGVscGVycy9ub2RlUGFyc2VyXCI7XG52YXIgVHJlZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmVlKGZpZWxkcykge1xuICAgICAgICB0aGlzLl9jb2x1bW5zID0gW107XG4gICAgICAgIHRoaXMuX2ZpZWxkcyA9IGZpZWxkcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyZWUucHJvdG90eXBlLCBcImZpZWxkc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmVlLnByb3RvdHlwZSwgXCJjb2x1bW5zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIFRyZWUucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKHhtbCkge1xuICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICB2YXIgdmlldyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoeG1sLCBcInRleHQveG1sXCIpO1xuICAgICAgICB0aGlzLnBhcnNlTm9kZSh2aWV3LmRvY3VtZW50RWxlbWVudCk7XG4gICAgfTtcbiAgICBUcmVlLnByb3RvdHlwZS5wYXJzZU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgd2lkZ2V0RmFjdG9yeSA9IG5ldyBXaWRnZXRGYWN0b3J5KCk7XG4gICAgICAgIHZhciBub2Rlc1BhcnNlZCA9IHBhcnNlTm9kZXMobm9kZS5jaGlsZE5vZGVzLCB0aGlzLl9maWVsZHMpO1xuICAgICAgICBub2Rlc1BhcnNlZC5mb3JFYWNoKGZ1bmN0aW9uIChub2RlUGFyc2VkKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gbm9kZVBhcnNlZC50YWcsIHRhZ0F0dHJpYnV0ZXMgPSBub2RlUGFyc2VkLnRhZ0F0dHJpYnV0ZXM7XG4gICAgICAgICAgICB2YXIgd2lkZ2V0ID0gd2lkZ2V0RmFjdG9yeS5jcmVhdGVXaWRnZXQodGFnLCB0YWdBdHRyaWJ1dGVzKTtcbiAgICAgICAgICAgIF90aGlzLl9jb2x1bW5zLnB1c2god2lkZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSB3aWRnZXRzIG1hdGNoaW5nIHdpdGggcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgdG8gZmluZFxuICAgICAqL1xuICAgIFRyZWUucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLmZpbmRCeUlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZmluZEJ5SWQoaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUcmVlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1UcmVlLmpzLm1hcCIsInZhciBXaWRnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gV2lkZ2V0KHByb3BzKSB7XG4gICAgICAgIHRoaXMuX2NvbHNwYW4gPSBXaWRnZXQuX2RlZmF1bHRDb2xzcGFuO1xuICAgICAgICB0aGlzLl9yZWFkT25seSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pbnZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbHNwYW4gPSArcHJvcHMuY29sc3BhbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5yZWFkb25seSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5yZWFkb25seSA9PT0gMSB8fCBwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWFkT25seSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLmludmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5pbnZpc2libGUgPT09IDEgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaW52aXNpYmxlID09PSBcIjFcIiB8fFxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5pbnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW52aXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdpZGdldCwgXCJkZWZhdWx0Q29sc3BhblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFdpZGdldC5fZGVmYXVsdENvbHNwYW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBXaWRnZXQuX2RlZmF1bHRDb2xzcGFuID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2lkZ2V0LnByb3RvdHlwZSwgXCJyZWFkT25seVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRPbmx5O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVhZE9ubHkgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXaWRnZXQucHJvdG90eXBlLCBcImNvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2xzcGFuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY29sc3BhbiA9ICt2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXaWRnZXQucHJvdG90eXBlLCBcImludmlzaWJsZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludmlzaWJsZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2ludmlzaWJsZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBjb2xzcGFuXG4gICAgICovXG4gICAgV2lkZ2V0Ll9kZWZhdWx0Q29sc3BhbiA9IDE7XG4gICAgcmV0dXJuIFdpZGdldDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XaWRnZXQuanMubWFwIiwiaW1wb3J0IE5vdGVib29rIGZyb20gXCIuL05vdGVib29rXCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi9QYWdlXCI7XG5pbXBvcnQgR3JvdXAgZnJvbSBcIi4vR3JvdXBcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbmltcG9ydCBDaGFyIGZyb20gXCIuL0NoYXJcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuL1RleHRcIjtcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSBcIi4vU2VsZWN0aW9uXCI7XG5pbXBvcnQgTWFueTJvbmUgZnJvbSBcIi4vTWFueTJvbmVcIjtcbmltcG9ydCBCb29sZWFuIGZyb20gXCIuL0Jvb2xlYW5cIjtcbmltcG9ydCBJbnRlZ2VyIGZyb20gXCIuL0ludGVnZXJcIjtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4vV2lkZ2V0XCI7XG5pbXBvcnQgRmxvYXQgZnJvbSBcIi4vRmxvYXRcIjtcbmltcG9ydCBGbG9hdFRpbWUgZnJvbSBcIi4vRmxvYXRUaW1lXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBEYXRlIGZyb20gXCIuL0RhdGVcIjtcbmltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi9EYXRlVGltZVwiO1xuaW1wb3J0IE1hbnkybWFueSBmcm9tIFwiLi9NYW55Mm1hbnlcIjtcbmltcG9ydCBPbmUybWFueSBmcm9tIFwiLi9PbmUybWFueVwiO1xuaW1wb3J0IE5ld0xpbmUgZnJvbSBcIi4vTmV3TGluZVwiO1xuaW1wb3J0IFNlcGFyYXRvciBmcm9tIFwiLi9TZXBhcmF0b3JcIjtcbnZhciBXaWRnZXRGYWN0b3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdpZGdldEZhY3RvcnkoKSB7XG4gICAgfVxuICAgIFdpZGdldEZhY3RvcnkucHJvdG90eXBlLnNldFdpZGdldENsYXNzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwibm90ZWJvb2tcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE5vdGVib29rO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInBhZ2VcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IFBhZ2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ3JvdXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEdyb3VwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxhYmVsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBMYWJlbDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjaGFyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBDaGFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IFRleHQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYnV0dG9uXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBCdXR0b247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2VsZWN0aW9uXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBTZWxlY3Rpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWFueTJvbmVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE1hbnkyb25lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEJvb2xlYW47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiaW50ZWdlclwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gSW50ZWdlcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJmbG9hdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gRmxvYXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZmxvYXRfdGltZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gRmxvYXRUaW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IERhdGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZGF0ZXRpbWVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IERhdGVUaW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInByb2dyZXNzYmFyXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBQcm9ncmVzc0JhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtYW55Mm1hbnlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE1hbnkybWFueTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvbmUybWFueVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gT25lMm1hbnk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibmV3bGluZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gTmV3TGluZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzZXBhcmF0b3JcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IFNlcGFyYXRvcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBXaWRnZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFdpZGdldEZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZVdpZGdldCA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcykge1xuICAgICAgICB0aGlzLnNldFdpZGdldENsYXNzKHR5cGUpO1xuICAgICAgICAvLyBUT0RPOiBXaWRnZXQgQ2xhc3MgY29uc3RydWN0b3JzIHNob3VsZCB1c2Ugb25seSB0aGUgcHJvcHMgbmVlZGVkLCBub3QgYWxsIHByb3BzLlxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIC8vIFNwZWNpZmljIGNhc2VzIChvbmx5IHNlbGVjdGVkIHByb3BzIHNob3VsZCBiZSB1c2VkKVxuICAgICAgICAgICAgY2FzZSBcIm5vdGVib29rXCI6XG4gICAgICAgICAgICBjYXNlIFwicGFnZVwiOlxuICAgICAgICAgICAgY2FzZSBcImdyb3VwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzLl93aWRnZXRDbGFzcyhwcm9wcyk7XG4gICAgICAgICAgICAvLyBHZW5lcmljIGNhc2VcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzLl93aWRnZXRDbGFzcyhwcm9wcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBXaWRnZXRGYWN0b3J5O1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IFdpZGdldEZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1XaWRnZXRGYWN0b3J5LmpzLm1hcCIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgcGFyc2VOb2RlcyA9IGZ1bmN0aW9uIChub2RlcywgZmllbGRzKSB7XG4gICAgdmFyIHBhcnNlZE5vZGVzID0gW107XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlcywgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gY2hpbGQuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgICAgICB2YXIgdGFnID0gY2hpbGQubm9kZU5hbWU7XG4gICAgICAgICAgICB2YXIgdGFnQXR0cmlidXRlc18xID0ge307XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGNoaWxkLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgdGFnQXR0cmlidXRlc18xW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGFnID09PSBcImZpZWxkXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmFtZV8xID0gY2hpbGQuZ2V0QXR0cmlidXRlKFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cldpZGdldCA9IGNoaWxkLmdldEF0dHJpYnV0ZShcIndpZGdldFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cldpZGdldCkge1xuICAgICAgICAgICAgICAgICAgICB0YWcgPSBhdHRyV2lkZ2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZHNbbmFtZV8xXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmllbGQgXCIgKyBuYW1lXzEgKyBcIiBkb2Vzbid0IGV4aXN0IGluIGZpZWxkcyBkZWZpbnRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFnID0gZmllbGRzW25hbWVfMV0udHlwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFnQXR0cmlidXRlc18xID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRhZ0F0dHJpYnV0ZXNfMSksIGZpZWxkc1tuYW1lXzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlZE5vZGVzLnB1c2goeyB0YWc6IHRhZywgdGFnQXR0cmlidXRlczogdGFnQXR0cmlidXRlc18xLCBjaGlsZDogY2hpbGQgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyc2VkTm9kZXM7XG59O1xuZXhwb3J0IHsgcGFyc2VOb2RlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9kZVBhcnNlci5qcy5tYXAiLCJpbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQgVHJlZSBmcm9tIFwiLi9UcmVlXCI7XG5pbXBvcnQgQ2hhciBmcm9tIFwiLi9DaGFyXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbmltcG9ydCBTZWxlY3Rpb24gZnJvbSBcIi4vU2VsZWN0aW9uXCI7XG5pbXBvcnQgTWFueTJvbmUgZnJvbSBcIi4vTWFueTJvbmVcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbmltcG9ydCBCb29sZWFuIGZyb20gXCIuL0Jvb2xlYW5cIjtcbmltcG9ydCBJbnRlZ2VyIGZyb20gXCIuL0ludGVnZXJcIjtcbmltcG9ydCBGbG9hdCBmcm9tIFwiLi9GbG9hdFwiO1xuaW1wb3J0IEZsb2F0VGltZSBmcm9tIFwiLi9GbG9hdFRpbWVcIjtcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IERhdGUgZnJvbSBcIi4vRGF0ZVwiO1xuaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuL0RhdGVUaW1lXCI7XG5pbXBvcnQgTWFueTJtYW55IGZyb20gXCIuL01hbnkybWFueVwiO1xuaW1wb3J0IE9uZTJtYW55IGZyb20gXCIuL09uZTJtYW55XCI7XG5pbXBvcnQgU2VhcmNoRmlsdGVyIGZyb20gXCIuL1NlYXJjaEZpbHRlclwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vVGV4dFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgTm90ZWJvb2sgZnJvbSBcIi4vTm90ZWJvb2tcIjtcbmltcG9ydCBHcm91cCBmcm9tIFwiLi9Hcm91cFwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IFNlcGFyYXRvciBmcm9tIFwiLi9TZXBhcmF0b3JcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5leHBvcnQgeyBDaGFyLCBTZWxlY3Rpb24sIE1hbnkyb25lLCBGaWVsZCwgV2lkZ2V0LCBGb3JtLCBUcmVlLCBCb29sZWFuLCBPbmUybWFueSwgSW50ZWdlciwgRmxvYXQsIEZsb2F0VGltZSwgRGF0ZSwgRGF0ZVRpbWUsIE1hbnkybWFueSwgU2VhcmNoRmlsdGVyLCBDb250YWluZXIsIENvbnRhaW5lcldpZGdldCwgVGV4dCwgUHJvZ3Jlc3NCYXIsIE5vdGVib29rLCBHcm91cCwgUGFnZSwgTGFiZWwsIFNlcGFyYXRvciwgQnV0dG9uLCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWyBcInJlYWN0XCIgXSwgZmFjdG9yeSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gZXhwb3J0cy5NZWRpYVF1ZXJ5ID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpIDogcm9vdC5NZWRpYVF1ZXJ5ID0gZmFjdG9yeShyb290LlJlYWN0KTtcbn0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXykge1xuICAgIHJldHVybiBmdW5jdGlvbihtb2R1bGVzKSB7XG4gICAgICAgIGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbiAgICAgICAgICAgIGlmIChpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkgcmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gICAgICAgICAgICB2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gICAgICAgICAgICAgICAgaTogbW9kdWxlSWQsXG4gICAgICAgICAgICAgICAgbDogITEsXG4gICAgICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyksIFxuICAgICAgICAgICAgbW9kdWxlLmwgPSAhMCwgbW9kdWxlLmV4cG9ydHM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbiAgICAgICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXMsIF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXMsIFxuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiAgICAgICAgICAgIF9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITEsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICAgICAgZ2V0OiBnZXR0ZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgICAgIHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgPyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kdWxlLmRlZmF1bHQ7XG4gICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgXCJhXCIsIGdldHRlciksIGdldHRlcjtcbiAgICAgICAgfSwgX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgICAgfSwgX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIiwgX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiAgICB9KFsgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgICAgICAgICAgaWYgKG8pIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgbykgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gICAgICAgICAgICAgICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIk9iamVjdFwiID09PSBuICYmIG8uY29uc3RydWN0b3IgJiYgKG4gPSBvLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSBuIHx8IFwiU2V0XCIgPT09IG4gPyBBcnJheS5mcm9tKG8pIDogXCJBcmd1bWVudHNcIiA9PT0gbiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSA/IF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbikgOiB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgICAgICAgICAgIChudWxsID09IGxlbiB8fCBsZW4gPiBhcnIubGVuZ3RoKSAmJiAobGVuID0gYXJyLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gICAgICAgICAgICByZXR1cm4gYXJyMjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkge1xuICAgICAgICAgICAgICAgIHZhciBfYXJyID0gW10sIF9uID0gITAsIF9kID0gITEsIF9lID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9zLCBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCk7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpICYmIChfYXJyLnB1c2goX3MudmFsdWUpLCBcbiAgICAgICAgICAgICAgICAgICAgIWkgfHwgX2Fyci5sZW5ndGggIT09IGkpOyBfbiA9ICEwKSA7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIF9kID0gITAsIF9lID0gZXJyO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfbiB8fCBudWxsID09IF9pLnJldHVybiB8fCBfaS5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9hcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX21hdGNobWVkaWFxdWVyeV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX21hdGNobWVkaWFxdWVyeV9fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX21hdGNobWVkaWFxdWVyeV9fKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX2h5cGhlbmF0ZV9zdHlsZV9uYW1lX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfc2hhbGxvd19lcXVhbF9vYmplY3RzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX3NoYWxsb3dfZXF1YWxfb2JqZWN0c19fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX3NoYWxsb3dfZXF1YWxfb2JqZWN0c19fKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X190b1F1ZXJ5X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX0NvbnRleHRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNiksIG1ha2VRdWVyeSA9IGZ1bmN0aW9uKHNldHRpbmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZ3MucXVlcnkgfHwgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fdG9RdWVyeV9fLmEpKHNldHRpbmdzKTtcbiAgICAgICAgfSwgaHlwaGVuYXRlS2V5cyA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgaWYgKCFvYmopIHJldHVybiBudWxsO1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICAgICAgcmV0dXJuIDAgPT09IGtleXMubGVuZ3RoID8gbnVsbCA6IGtleXMucmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFtPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX2h5cGhlbmF0ZV9zdHlsZV9uYW1lX18uYSkoa2V5KV0gPSBvYmpba2V5XSwgXG4gICAgICAgICAgICAgICAgcmVzdWx0O1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9LCB1c2VJc1VwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlZiA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VSZWYoITEpO1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmVmLmN1cnJlbnQgPSAhMDtcbiAgICAgICAgICAgIH0sIFtdKSwgcmVmLmN1cnJlbnQ7XG4gICAgICAgIH0sIHVzZURldmljZSA9IGZ1bmN0aW9uKGRldmljZUZyb21Qcm9wcykge1xuICAgICAgICAgICAgdmFyIGRldmljZUZyb21Db250ZXh0ID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZUNvbnRleHQoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19Db250ZXh0X18uYSksIGdldERldmljZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBoeXBoZW5hdGVLZXlzKGRldmljZUZyb21Qcm9wcykgfHwgaHlwaGVuYXRlS2V5cyhkZXZpY2VGcm9tQ29udGV4dCk7XG4gICAgICAgICAgICB9LCBfUmVhY3QkdXNlU3RhdGUgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlU3RhdGUoZ2V0RGV2aWNlKSwgX1JlYWN0JHVzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZSwgMiksIGRldmljZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sIHNldERldmljZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3RGV2aWNlID0gZ2V0RGV2aWNlKCk7XG4gICAgICAgICAgICAgICAgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX3NoYWxsb3dfZXF1YWxfb2JqZWN0c19fX2RlZmF1bHQoKShkZXZpY2UsIG5ld0RldmljZSkgfHwgc2V0RGV2aWNlKG5ld0RldmljZSk7XG4gICAgICAgICAgICB9LCBbIGRldmljZUZyb21Qcm9wcywgZGV2aWNlRnJvbUNvbnRleHQgXSksIGRldmljZTtcbiAgICAgICAgfSwgdXNlUXVlcnkgPSBmdW5jdGlvbihzZXR0aW5ncykge1xuICAgICAgICAgICAgdmFyIGdldFF1ZXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VRdWVyeShzZXR0aW5ncyk7XG4gICAgICAgICAgICB9LCBfUmVhY3QkdXNlU3RhdGUzID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZVN0YXRlKGdldFF1ZXJ5KSwgX1JlYWN0JHVzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZTMsIDIpLCBxdWVyeSA9IF9SZWFjdCR1c2VTdGF0ZTRbMF0sIHNldFF1ZXJ5ID0gX1JlYWN0JHVzZVN0YXRlNFsxXTtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdRdWVyeSA9IGdldFF1ZXJ5KCk7XG4gICAgICAgICAgICAgICAgcXVlcnkgIT09IG5ld1F1ZXJ5ICYmIHNldFF1ZXJ5KG5ld1F1ZXJ5KTtcbiAgICAgICAgICAgIH0sIFsgc2V0dGluZ3MgXSksIHF1ZXJ5O1xuICAgICAgICB9LCB1c2VNYXRjaE1lZGlhID0gZnVuY3Rpb24ocXVlcnksIGRldmljZSkge1xuICAgICAgICAgICAgdmFyIGdldE1hdGNoTWVkaWEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX21hdGNobWVkaWFxdWVyeV9fX2RlZmF1bHQoKShxdWVyeSwgZGV2aWNlIHx8IHt9LCAhIWRldmljZSk7XG4gICAgICAgICAgICB9LCBfUmVhY3QkdXNlU3RhdGU1ID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZVN0YXRlKGdldE1hdGNoTWVkaWEpLCBfUmVhY3QkdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlNSwgMiksIG1xID0gX1JlYWN0JHVzZVN0YXRlNlswXSwgc2V0TXEgPSBfUmVhY3QkdXNlU3RhdGU2WzFdLCBpc1VwZGF0ZSA9IHVzZUlzVXBkYXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNVcGRhdGUgJiYgc2V0TXEoZ2V0TWF0Y2hNZWRpYSgpKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG1xLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSwgWyBxdWVyeSwgZGV2aWNlIF0pLCBtcTtcbiAgICAgICAgfSwgdXNlTWF0Y2hlcyA9IGZ1bmN0aW9uKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICAgIHZhciBfUmVhY3QkdXNlU3RhdGU3ID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZVN0YXRlKG1lZGlhUXVlcnkubWF0Y2hlcyksIF9SZWFjdCR1c2VTdGF0ZTggPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGU3LCAyKSwgbWF0Y2hlcyA9IF9SZWFjdCR1c2VTdGF0ZThbMF0sIHNldE1hdGNoZXMgPSBfUmVhY3QkdXNlU3RhdGU4WzFdO1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHVwZGF0ZU1hdGNoZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2hlcyhtZWRpYVF1ZXJ5Lm1hdGNoZXMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lZGlhUXVlcnkuYWRkTGlzdGVuZXIodXBkYXRlTWF0Y2hlcyksIHVwZGF0ZU1hdGNoZXMoKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lZGlhUXVlcnkucmVtb3ZlTGlzdGVuZXIodXBkYXRlTWF0Y2hlcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIFsgbWVkaWFRdWVyeSBdKSwgbWF0Y2hlcztcbiAgICAgICAgfSwgdXNlTWVkaWFRdWVyeSA9IGZ1bmN0aW9uKHNldHRpbmdzLCBkZXZpY2UsIG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICB2YXIgZGV2aWNlU2V0dGluZ3MgPSB1c2VEZXZpY2UoZGV2aWNlKSwgcXVlcnkgPSB1c2VRdWVyeShzZXR0aW5ncyk7XG4gICAgICAgICAgICBpZiAoIXF1ZXJ5KSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG9yIG1pc3NpbmcgTWVkaWFRdWVyeSFcIik7XG4gICAgICAgICAgICB2YXIgbXEgPSB1c2VNYXRjaE1lZGlhKHF1ZXJ5LCBkZXZpY2VTZXR0aW5ncyksIG1hdGNoZXMgPSB1c2VNYXRjaGVzKG1xKSwgaXNVcGRhdGUgPSB1c2VJc1VwZGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaXNVcGRhdGUgJiYgb25DaGFuZ2UgJiYgb25DaGFuZ2UobWF0Y2hlcyk7XG4gICAgICAgICAgICB9LCBbIG1hdGNoZXMgXSksIG1hdGNoZXM7XG4gICAgICAgIH07XG4gICAgICAgIF9fd2VicGFja19leHBvcnRzX18uYSA9IHVzZU1lZGlhUXVlcnk7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiB0b0h5cGhlbkxvd2VyKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gXCItXCIgKyBtYXRjaC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShuYW1lKSB7XG4gICAgICAgICAgICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHJldHVybiBjYWNoZVtuYW1lXTtcbiAgICAgICAgICAgIHZhciBoTmFtZSA9IG5hbWUucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCB0b0h5cGhlbkxvd2VyKTtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZVtuYW1lXSA9IG1zUGF0dGVybi50ZXN0KGhOYW1lKSA/IFwiLVwiICsgaE5hbWUgOiBoTmFtZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXBwZXJjYXNlUGF0dGVybiA9IC9bQS1aXS9nLCBtc1BhdHRlcm4gPSAvXm1zLS8sIGNhY2hlID0ge307XG4gICAgICAgIF9fd2VicGFja19leHBvcnRzX18uYSA9IGh5cGhlbmF0ZVN0eWxlTmFtZTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfaHlwaGVuYXRlX3N0eWxlX25hbWVfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMiksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fbWVkaWFRdWVyeV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSksIG5lZ2F0ZSA9IGZ1bmN0aW9uKGNvbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIm5vdCBcIi5jb25jYXQoY29uZCk7XG4gICAgICAgIH0sIGtleVZhbCA9IGZ1bmN0aW9uKGssIHYpIHtcbiAgICAgICAgICAgIHZhciByZWFsS2V5ID0gT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9oeXBoZW5hdGVfc3R5bGVfbmFtZV9fLmEpKGspO1xuICAgICAgICAgICAgcmV0dXJuIFwibnVtYmVyXCIgPT0gdHlwZW9mIHYgJiYgKHYgPSBcIlwiLmNvbmNhdCh2LCBcInB4XCIpKSwgITAgPT09IHYgPyByZWFsS2V5IDogITEgPT09IHYgPyBuZWdhdGUocmVhbEtleSkgOiBcIihcIi5jb25jYXQocmVhbEtleSwgXCI6IFwiKS5jb25jYXQodiwgXCIpXCIpO1xuICAgICAgICB9LCBqb2luID0gZnVuY3Rpb24oY29uZHMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25kcy5qb2luKFwiIGFuZCBcIik7XG4gICAgICAgIH0sIHRvUXVlcnkgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIHZhciBydWxlcyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fbWVkaWFRdWVyeV9fLmEuYWxsKS5mb3JFYWNoKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgICAgICB2YXIgdiA9IG9ialtrXTtcbiAgICAgICAgICAgICAgICBudWxsICE9IHYgJiYgcnVsZXMucHVzaChrZXlWYWwoaywgdikpO1xuICAgICAgICAgICAgfSksIGpvaW4ocnVsZXMpO1xuICAgICAgICB9O1xuICAgICAgICBfX3dlYnBhY2tfZXhwb3J0c19fLmEgPSB0b1F1ZXJ5O1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gXCJTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRFwiO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfXyksIENvbnRleHQgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEuY3JlYXRlQ29udGV4dCgpO1xuICAgICAgICBfX3dlYnBhY2tfZXhwb3J0c19fLmEgPSBDb250ZXh0O1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fd2VicGFja19leHBvcnRzX18sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgICAgICB2YWx1ZTogITBcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3VzZU1lZGlhUXVlcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fQ29tcG9uZW50X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX190b1F1ZXJ5X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX0NvbnRleHRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImRlZmF1bHRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19Db21wb25lbnRfXy5hO1xuICAgICAgICB9KSwgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwidXNlTWVkaWFRdWVyeVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3VzZU1lZGlhUXVlcnlfXy5hO1xuICAgICAgICB9KSwgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwidG9RdWVyeVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3RvUXVlcnlfXy5hO1xuICAgICAgICB9KSwgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQ29udGV4dFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX0NvbnRleHRfXy5hO1xuICAgICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIE1xbChxdWVyeSwgdmFsdWVzLCBmb3JjZVN0YXRpYykge1xuICAgICAgICAgICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBtcWwgJiYgbXFsLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgbXFsICYmIG1xbC5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGUoZXZ0KSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tYXRjaGVzID0gZXZ0Lm1hdGNoZXMsIHNlbGYubWVkaWEgPSBldnQubWVkaWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgICAgICAgICAgICAgIG1xbCAmJiBtcWwucmVtb3ZlTGlzdGVuZXIodXBkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGlmIChkeW5hbWljTWF0Y2ggJiYgIWZvcmNlU3RhdGljKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1xbCA9IGR5bmFtaWNNYXRjaC5jYWxsKHdpbmRvdywgcXVlcnkpO1xuICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IG1xbC5tYXRjaGVzLCB0aGlzLm1lZGlhID0gbXFsLm1lZGlhLCBtcWwuYWRkTGlzdGVuZXIodXBkYXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLm1hdGNoZXMgPSBzdGF0aWNNYXRjaChxdWVyeSwgdmFsdWVzKSwgdGhpcy5tZWRpYSA9IHF1ZXJ5O1xuICAgICAgICAgICAgdGhpcy5hZGRMaXN0ZW5lciA9IGFkZExpc3RlbmVyLCB0aGlzLnJlbW92ZUxpc3RlbmVyID0gcmVtb3ZlTGlzdGVuZXIsIHRoaXMuZGlzcG9zZSA9IGRpc3Bvc2U7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbWF0Y2hNZWRpYShxdWVyeSwgdmFsdWVzLCBmb3JjZVN0YXRpYykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNcWwocXVlcnksIHZhbHVlcywgZm9yY2VTdGF0aWMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGF0aWNNYXRjaCA9IF9fd2VicGFja19yZXF1aXJlX18oOSkubWF0Y2gsIGR5bmFtaWNNYXRjaCA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdyA/IHdpbmRvdy5tYXRjaE1lZGlhIDogbnVsbDtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBtYXRjaE1lZGlhO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gbWF0Y2hRdWVyeShtZWRpYVF1ZXJ5LCB2YWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVF1ZXJ5KG1lZGlhUXVlcnkpLnNvbWUoZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW52ZXJzZSA9IHF1ZXJ5LmludmVyc2UsIHR5cGVNYXRjaCA9IFwiYWxsXCIgPT09IHF1ZXJ5LnR5cGUgfHwgdmFsdWVzLnR5cGUgPT09IHF1ZXJ5LnR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVNYXRjaCAmJiBpbnZlcnNlIHx8ICF0eXBlTWF0Y2ggJiYgIWludmVyc2UpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB2YXIgZXhwcmVzc2lvbnNNYXRjaCA9IHF1ZXJ5LmV4cHJlc3Npb25zLmV2ZXJ5KGZ1bmN0aW9uKGV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZlYXR1cmUgPSBleHByZXNzaW9uLmZlYXR1cmUsIG1vZGlmaWVyID0gZXhwcmVzc2lvbi5tb2RpZmllciwgZXhwVmFsdWUgPSBleHByZXNzaW9uLnZhbHVlLCB2YWx1ZSA9IHZhbHVlc1tmZWF0dXJlXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwib3JpZW50YXRpb25cIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2NhblwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGV4cFZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwid2lkdGhcIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaGVpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRldmljZS13aWR0aFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZXZpY2UtaGVpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBWYWx1ZSA9IHRvUHgoZXhwVmFsdWUpLCB2YWx1ZSA9IHRvUHgodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicmVzb2x1dGlvblwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwVmFsdWUgPSB0b0RwaShleHBWYWx1ZSksIHZhbHVlID0gdG9EcGkodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYXNwZWN0LXJhdGlvXCI6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRldmljZS1hc3BlY3QtcmF0aW9cIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGV2aWNlLXBpeGVsLXJhdGlvXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBWYWx1ZSA9IHRvRGVjaW1hbChleHBWYWx1ZSksIHZhbHVlID0gdG9EZWNpbWFsKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImdyaWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29sb3JcIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29sb3ItaW5kZXhcIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibW9ub2Nocm9tZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwVmFsdWUgPSBwYXJzZUludChleHBWYWx1ZSwgMTApIHx8IDEsIHZhbHVlID0gcGFyc2VJbnQodmFsdWUsIDEwKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobW9kaWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWluXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPj0gZXhwVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWF4XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPD0gZXhwVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBleHBWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBleHByZXNzaW9uc01hdGNoICYmICFpbnZlcnNlIHx8ICFleHByZXNzaW9uc01hdGNoICYmIGludmVyc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBwYXJzZVF1ZXJ5KG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICAgIHJldHVybiBtZWRpYVF1ZXJ5LnNwbGl0KFwiLFwiKS5tYXAoZnVuY3Rpb24ocXVlcnkpIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnRyaW0oKTtcbiAgICAgICAgICAgICAgICB2YXIgY2FwdHVyZXMgPSBxdWVyeS5tYXRjaChSRV9NRURJQV9RVUVSWSksIG1vZGlmaWVyID0gY2FwdHVyZXNbMV0sIHR5cGUgPSBjYXB0dXJlc1syXSwgZXhwcmVzc2lvbnMgPSBjYXB0dXJlc1szXSB8fCBcIlwiLCBwYXJzZWQgPSB7fTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkLmludmVyc2UgPSAhIW1vZGlmaWVyICYmIFwibm90XCIgPT09IG1vZGlmaWVyLnRvTG93ZXJDYXNlKCksIHBhcnNlZC50eXBlID0gdHlwZSA/IHR5cGUudG9Mb3dlckNhc2UoKSA6IFwiYWxsXCIsIFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb25zID0gZXhwcmVzc2lvbnMubWF0Y2goL1xcKFteXFwpXStcXCkvZykgfHwgW10sIHBhcnNlZC5leHByZXNzaW9ucyA9IGV4cHJlc3Npb25zLm1hcChmdW5jdGlvbihleHByZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXB0dXJlcyA9IGV4cHJlc3Npb24ubWF0Y2goUkVfTVFfRVhQUkVTU0lPTiksIGZlYXR1cmUgPSBjYXB0dXJlc1sxXS50b0xvd2VyQ2FzZSgpLm1hdGNoKFJFX01RX0ZFQVRVUkUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXI6IGZlYXR1cmVbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlOiBmZWF0dXJlWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNhcHR1cmVzWzJdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSksIHBhcnNlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRvRGVjaW1hbChyYXRpbykge1xuICAgICAgICAgICAgdmFyIG51bWJlcnMsIGRlY2ltYWwgPSBOdW1iZXIocmF0aW8pO1xuICAgICAgICAgICAgcmV0dXJuIGRlY2ltYWwgfHwgKG51bWJlcnMgPSByYXRpby5tYXRjaCgvXihcXGQrKVxccypcXC9cXHMqKFxcZCspJC8pLCBkZWNpbWFsID0gbnVtYmVyc1sxXSAvIG51bWJlcnNbMl0pLCBcbiAgICAgICAgICAgIGRlY2ltYWw7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdG9EcGkocmVzb2x1dGlvbikge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VGbG9hdChyZXNvbHV0aW9uKTtcbiAgICAgICAgICAgIHN3aXRjaCAoU3RyaW5nKHJlc29sdXRpb24pLm1hdGNoKFJFX1JFU09MVVRJT05fVU5JVClbMV0pIHtcbiAgICAgICAgICAgICAgY2FzZSBcImRwY21cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgLyAyLjU0O1xuXG4gICAgICAgICAgICAgIGNhc2UgXCJkcHB4XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDk2ICogdmFsdWU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdG9QeChsZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlRmxvYXQobGVuZ3RoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoU3RyaW5nKGxlbmd0aCkubWF0Y2goUkVfTEVOR1RIX1VOSVQpWzFdKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJlbVwiOlxuICAgICAgICAgICAgICBjYXNlIFwicmVtXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE2ICogdmFsdWU7XG5cbiAgICAgICAgICAgICAgY2FzZSBcImNtXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDk2ICogdmFsdWUgLyAyLjU0O1xuXG4gICAgICAgICAgICAgIGNhc2UgXCJtbVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiA5NiAqIHZhbHVlIC8gMi41NCAvIDEwO1xuXG4gICAgICAgICAgICAgIGNhc2UgXCJpblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiA5NiAqIHZhbHVlO1xuXG4gICAgICAgICAgICAgIGNhc2UgXCJwdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiA3MiAqIHZhbHVlO1xuXG4gICAgICAgICAgICAgIGNhc2UgXCJwY1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiA3MiAqIHZhbHVlIC8gMTI7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0cy5tYXRjaCA9IG1hdGNoUXVlcnksIGV4cG9ydHMucGFyc2UgPSBwYXJzZVF1ZXJ5O1xuICAgICAgICB2YXIgUkVfTUVESUFfUVVFUlkgPSAvKD86KG9ubHl8bm90KT9cXHMqKFteXFxzXFwoXFwpXSspKD86XFxzKmFuZCk/XFxzKik/KC4rKT8vaSwgUkVfTVFfRVhQUkVTU0lPTiA9IC9cXChcXHMqKFteXFxzXFw6XFwpXSspXFxzKig/OlxcOlxccyooW15cXHNcXCldKykpP1xccypcXCkvLCBSRV9NUV9GRUFUVVJFID0gL14oPzoobWlufG1heCktKT8oLispLywgUkVfTEVOR1RIX1VOSVQgPSAvKGVtfHJlbXxweHxjbXxtbXxpbnxwdHxwYyk/JC8sIFJFX1JFU09MVVRJT05fVU5JVCA9IC8oZHBpfGRwY218ZHBweCk/JC87XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBzaGFsbG93RXF1YWxPYmplY3RzKG9iakEsIG9iakIpIHtcbiAgICAgICAgICAgIGlmIChvYmpBID09PSBvYmpCKSByZXR1cm4gITA7XG4gICAgICAgICAgICBpZiAoIW9iakEgfHwgIW9iakIpIHJldHVybiAhMTtcbiAgICAgICAgICAgIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKG9iakEpLCBiS2V5cyA9IE9iamVjdC5rZXlzKG9iakIpLCBsZW4gPSBhS2V5cy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoYktleXMubGVuZ3RoICE9PSBsZW4pIHJldHVybiAhMTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gYUtleXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKG9iakFba2V5XSAhPT0gb2JqQltrZXldIHx8ICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5KSkgcmV0dXJuICExO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICEwO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gc2hhbGxvd0VxdWFsT2JqZWN0cztcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgICAgICB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgICAgICAgICAgICAgIGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICAgICAgICAgIH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgaW4gb2JqID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6ICEwXG4gICAgICAgICAgICB9KSA6IG9ialtrZXldID0gdmFsdWUsIG9iajtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfXyksIHN0cmluZ09yTnVtYmVyID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEub25lT2ZUeXBlKFsgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuc3RyaW5nLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIgXSksIG1hdGNoZXJzID0ge1xuICAgICAgICAgICAgb3JpZW50YXRpb246IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm9uZU9mKFsgXCJwb3J0cmFpdFwiLCBcImxhbmRzY2FwZVwiIF0pLFxuICAgICAgICAgICAgc2NhbjogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEub25lT2YoWyBcInByb2dyZXNzaXZlXCIsIFwiaW50ZXJsYWNlXCIgXSksXG4gICAgICAgICAgICBhc3BlY3RSYXRpbzogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuc3RyaW5nLFxuICAgICAgICAgICAgZGV2aWNlQXNwZWN0UmF0aW86IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLnN0cmluZyxcbiAgICAgICAgICAgIGhlaWdodDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBkZXZpY2VIZWlnaHQ6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgd2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgZGV2aWNlV2lkdGg6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgY29sb3I6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBjb2xvckluZGV4OiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgbW9ub2Nocm9tZTogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIHJlc29sdXRpb246IHN0cmluZ09yTnVtYmVyXG4gICAgICAgIH0sIGZlYXR1cmVzID0gX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICBtaW5Bc3BlY3RSYXRpbzogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuc3RyaW5nLFxuICAgICAgICAgICAgbWF4QXNwZWN0UmF0aW86IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLnN0cmluZyxcbiAgICAgICAgICAgIG1pbkRldmljZUFzcGVjdFJhdGlvOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsXG4gICAgICAgICAgICBtYXhEZXZpY2VBc3BlY3RSYXRpbzogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuc3RyaW5nLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIG1heEhlaWdodDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBtaW5EZXZpY2VIZWlnaHQ6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWF4RGV2aWNlSGVpZ2h0OiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIG1pbldpZHRoOiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIG1heFdpZHRoOiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIG1pbkRldmljZVdpZHRoOiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIG1heERldmljZVdpZHRoOiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIG1pbkNvbG9yOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5udW1iZXIsXG4gICAgICAgICAgICBtYXhDb2xvcjogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgICAgICAgICAgbWluQ29sb3JJbmRleDogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgICAgICAgICAgbWF4Q29sb3JJbmRleDogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgICAgICAgICAgbWluTW9ub2Nocm9tZTogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgICAgICAgICAgbWF4TW9ub2Nocm9tZTogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgICAgICAgICAgbWluUmVzb2x1dGlvbjogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBtYXhSZXNvbHV0aW9uOiBzdHJpbmdPck51bWJlclxuICAgICAgICB9LCBtYXRjaGVycyksIHR5cGVzID0ge1xuICAgICAgICAgICAgYWxsOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgZ3JpZDogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIGF1cmFsOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgYnJhaWxsZTogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIGhhbmRoZWxkOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgcHJpbnQ6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBwcm9qZWN0aW9uOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgc2NyZWVuOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgdHR5OiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgdHY6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBlbWJvc3NlZDogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbFxuICAgICAgICB9LCBhbGwgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHR5cGVzKSwgZmVhdHVyZXMpO1xuICAgICAgICBtYXRjaGVycy50eXBlID0gT2JqZWN0LmtleXModHlwZXMpLCBfX3dlYnBhY2tfZXhwb3J0c19fLmEgPSB7XG4gICAgICAgICAgICBhbGw6IGFsbCxcbiAgICAgICAgICAgIHR5cGVzOiB0eXBlcyxcbiAgICAgICAgICAgIG1hdGNoZXJzOiBtYXRjaGVycyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlc1xuICAgICAgICB9O1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICB2YXIgUmVhY3RJcyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCkoUmVhY3RJcy5pc0VsZW1lbnQsICEwKTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgICFmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIHR5cGUgfHwgXCJmdW5jdGlvblwiID09IHR5cGVvZiB0eXBlIHx8IHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IFwib2JqZWN0XCIgPT0gdHlwZW9mIHR5cGUgJiYgbnVsbCAhPT0gdHlwZSAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiA9PSB0eXBlb2Ygb2JqZWN0ICYmIG51bGwgIT09IG9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgfHwgKGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gITAsIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlIFJlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuXCIpKSwgXG4gICAgICAgICAgICAgICAgaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJvYmplY3RcIiA9PSB0eXBlb2Ygb2JqZWN0ICYmIG51bGwgIT09IG9iamVjdCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBoYXNTeW1ib2wgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wuZm9yLCBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKSA6IDYwMTAzLCBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIikgOiA2MDEwNiwgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKSA6IDYwMTA3LCBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpIDogNjAxMDgsIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIikgOiA2MDExNCwgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKSA6IDYwMTA5LCBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKSA6IDYwMTEwLCBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QuYXN5bmNfbW9kZVwiKSA6IDYwMTExLCBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIikgOiA2MDExMSwgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSA6IDYwMTEyLCBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpIDogNjAxMTMsIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpIDogNjAxMjAsIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpIDogNjAxMTUsIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpIDogNjAxMTYsIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QuYmxvY2tcIikgOiA2MDEyMSwgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5mdW5kYW1lbnRhbFwiKSA6IDYwMTE3LCBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5yZXNwb25kZXJcIikgOiA2MDExOCwgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5zY29wZVwiKSA6IDYwMTE5LCBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEUsIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUsIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRSwgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRSwgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRSwgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUsIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRSwgTGF6eSA9IFJFQUNUX0xBWllfVFlQRSwgTWVtbyA9IFJFQUNUX01FTU9fVFlQRSwgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEUsIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRSwgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUsIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRSwgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSAhMTtcbiAgICAgICAgICAgIGV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlLCBleHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGUsIGV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyLCBcbiAgICAgICAgICAgIGV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyLCBleHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50LCBleHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmLCBcbiAgICAgICAgICAgIGV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudCwgZXhwb3J0cy5MYXp5ID0gTGF6eSwgZXhwb3J0cy5NZW1vID0gTWVtbywgZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWwsIFxuICAgICAgICAgICAgZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyLCBleHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlLCBleHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2UsIFxuICAgICAgICAgICAgZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlLCBleHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlLCBcbiAgICAgICAgICAgIGV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lciwgZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyLCBcbiAgICAgICAgICAgIGV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50LCBleHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZiwgZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudCwgXG4gICAgICAgICAgICBleHBvcnRzLmlzTGF6eSA9IGlzTGF6eSwgZXhwb3J0cy5pc01lbW8gPSBpc01lbW8sIGV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbCwgZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlciwgXG4gICAgICAgICAgICBleHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZSwgZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZSwgZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUsIFxuICAgICAgICAgICAgZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gICAgICAgIH0oKTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgUmVhY3RJcyA9IF9fd2VicGFja19yZXF1aXJlX18oNCksIGFzc2lnbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpLCBSZWFjdFByb3BUeXBlc1NlY3JldCA9IF9fd2VicGFja19yZXF1aXJlX18oNSksIGNoZWNrUHJvcFR5cGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNiksIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KSwgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIldhcm5pbmc6IFwiICsgdGV4dDtcbiAgICAgICAgICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfSwgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpdGVyYXRvckZuKSByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PT0geSA/IDAgIT09IHggfHwgMSAvIHggPT0gMSAvIHkgOiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlLCB0aGlzLnN0YWNrID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVMsIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZSwgXG4gICAgICAgICAgICAgICAgICAgIHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcIkNhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuIFVzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnIubmFtZSA9IFwiSW52YXJpYW50IFZpb2xhdGlvblwiLCBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgY29uc29sZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyBcIjpcIiArIHByb3BOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiYgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzICYmIChwcmludFdhcm5pbmcoXCJZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiBmdW5jdGlvbiBmb3IgdGhlIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBwcm9wIG9uIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAuIFRoaXMgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyBsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgZm9yIGRldGFpbHMuXCIpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSAhMCwgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgPT0gcHJvcHNbcHJvcE5hbWVdID8gaXNSZXF1aXJlZCA/IG5ldyBQcm9wVHlwZUVycm9yKG51bGwgPT09IHByb3BzW3Byb3BOYW1lXSA/IFwiVGhlIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLlwiIDogXCJUaGUgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC5cIikgOiBudWxsIDogdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge30sIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMCwgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsICExKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgITApLCBjaGFpbmVkQ2hlY2tUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldFByb3BUeXBlKHByb3BWYWx1ZSkgIT09IGV4cGVjdGVkVHlwZSkgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBgXCIgKyBleHBlY3RlZFR5cGUgKyBcImAuXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0eXBlQ2hlY2tlcikgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiUHJvcGVydHkgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIGNvbXBvbmVudCBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiB0eXBlIGBcIiArIGdldFByb3BUeXBlKHByb3BWYWx1ZSkgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYW4gYXJyYXkuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyBcIltcIiArIGkgKyBcIl1cIiwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiB0eXBlIGBcIiArIGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGluc3RhbmNlIG9mIGBcIiArIGV4cGVjdGVkQ2xhc3NOYW1lICsgXCJgLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV0sIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwic3ltYm9sXCIgPT09IGdldFByZWNpc2VUeXBlKHZhbHVlKSA/IFN0cmluZyh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiB2YWx1ZSBgXCIgKyBTdHJpbmcocHJvcFZhbHVlKSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBvbmUgb2YgXCIgKyB2YWx1ZXNTdHJpbmcgKyBcIi5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSA/IGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSA6IChwcmludFdhcm5pbmcoYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBcIkludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290IFwiICsgYXJndW1lbnRzLmxlbmd0aCArIFwiIGFyZ3VtZW50cy4gQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuXCIgOiBcIkludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LlwiKSwgXG4gICAgICAgICAgICAgICAgZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHR5cGVDaGVja2VyKSByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJQcm9wZXJ0eSBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgY29tcG9uZW50IGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXSwgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiAhPT0gcHJvcFR5cGUpIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiB0eXBlIGBcIiArIHByb3BUeXBlICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGFuIG9iamVjdC5cIik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArIFwiLlwiICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gKDAsIGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV0pKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkgcmV0dXJuIHByaW50V2FybmluZyhcIkludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS5cIiksIFxuICAgICAgICAgICAgICAgIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgY2hlY2tlcikgcmV0dXJuIHByaW50V2FybmluZyhcIkludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCByZWNlaXZlZCBcIiArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArIFwiIGF0IGluZGV4IFwiICsgaSArIFwiLlwiKSwgXG4gICAgICAgICAgICAgICAgICAgIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXSwgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiAhPT0gcHJvcFR5cGUpIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiB0eXBlIGBcIiArIHByb3BUeXBlICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGBvYmplY3RgLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgXCIuXCIgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdLCBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcIm9iamVjdFwiICE9PSBwcm9wVHlwZSkgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgcHJvcFR5cGUgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYG9iamVjdGAuXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGVja2VyKSByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAga2V5IGBcIiArIGtleSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLlxcbkJhZCBvYmplY3Q6IFwiICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCBcIiAgXCIpICsgXCJcXG5WYWxpZCBrZXlzOiBcIiArIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCBcIiAgXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyBcIi5cIiArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgICBjYXNlIFwidW5kZWZpbmVkXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcblxuICAgICAgICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobnVsbCA9PT0gcHJvcFZhbHVlIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHJldHVybiAhMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXRlcmF0b3JGbikgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RlcCwgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDshKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICkgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGZvciAoOyEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5ICYmICFpc05vZGUoZW50cnlbMV0pKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEwO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcInN5bWJvbFwiID09PSBwcm9wVHlwZSB8fCAhIXByb3BWYWx1ZSAmJiAoXCJTeW1ib2xcIiA9PT0gcHJvcFZhbHVlW1wiQEB0b1N0cmluZ1RhZ1wiXSB8fCBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpID8gXCJhcnJheVwiIDogcHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwID8gXCJvYmplY3RcIiA6IGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpID8gXCJzeW1ib2xcIiA6IHByb3BUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gcHJvcFZhbHVlIHx8IG51bGwgPT09IHByb3BWYWx1ZSkgcmV0dXJuIFwiXCIgKyBwcm9wVmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiA9PT0gcHJvcFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHJldHVybiBcImRhdGVcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIFwicmVnZXhwXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcImFycmF5XCI6XG4gICAgICAgICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImFuIFwiICsgdHlwZTtcblxuICAgICAgICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICAgICAgICAgICAgICBjYXNlIFwicmVnZXhwXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImEgXCIgKyB0eXBlO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3RvciAmJiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSA/IHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIDogQU5PTllNT1VTO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIElURVJBVE9SX1NZTUJPTCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC5pdGVyYXRvciwgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSBcIkBAaXRlcmF0b3JcIiwgQU5PTllNT1VTID0gXCI8PGFub255bW91cz4+XCIsIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgICAgICAgICAgICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihcImFycmF5XCIpLFxuICAgICAgICAgICAgICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKFwiYm9vbGVhblwiKSxcbiAgICAgICAgICAgICAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihcImZ1bmN0aW9uXCIpLFxuICAgICAgICAgICAgICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoXCJudW1iZXJcIiksXG4gICAgICAgICAgICAgICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihcIm9iamVjdFwiKSxcbiAgICAgICAgICAgICAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKFwic3RyaW5nXCIpLFxuICAgICAgICAgICAgICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoXCJzeW1ib2xcIiksXG4gICAgICAgICAgICAgICAgYW55OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICAgICAgICAgICAgICAgIH0oKSxcbiAgICAgICAgICAgICAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiB0eXBlIGBcIiArIGdldFByb3BUeXBlKHByb3BWYWx1ZSkgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSgpLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgICAgIH0oKSxcbiAgICAgICAgICAgICAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgICAgICAgICAgICAgIG5vZGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpc05vZGUocHJvcHNbcHJvcE5hbWVdKSA/IG51bGwgOiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgICAgICB9KCksXG4gICAgICAgICAgICAgICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgICAgICAgICAgICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgICAgICAgICAgICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgICAgICAgICAgICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGUsIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXMsIFxuICAgICAgICAgICAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSwgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXMsIFxuICAgICAgICAgICAgUmVhY3RQcm9wVHlwZXM7XG4gICAgICAgIH07XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcbiAgICAgICAgICAgIGlmIChudWxsID09PSB2YWwgfHwgdm9pZCAwID09PSB2YWwpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZFwiKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QodmFsKTtcbiAgICAgICAgfVxuICAgICAgICAvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cbiAgICAgICAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSwgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghT2JqZWN0LmFzc2lnbikgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoXCJhYmNcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRlc3QxWzVdID0gXCJkZVwiLCBcIjVcIiA9PT0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdGVzdDIgPSB7fSwgaSA9IDA7IGkgPCAxMDsgaSsrKSB0ZXN0MltcIl9cIiArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcbiAgICAgICAgICAgICAgICBpZiAoXCIwMTIzNDU2Nzg5XCIgIT09IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24obikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGVzdDJbbl07XG4gICAgICAgICAgICAgICAgfSkuam9pbihcIlwiKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0MyA9IHt9O1xuICAgICAgICAgICAgICAgIHJldHVybiBcImFiY2RlZmdoaWprbG1ub3BxcnN0XCIuc3BsaXQoXCJcIikuZm9yRWFjaChmdW5jdGlvbihsZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcbiAgICAgICAgICAgICAgICB9KSwgXCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiID09PSBPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0oKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgZnJvbSwgc3ltYm9scywgdG8gPSB0b09iamVjdCh0YXJnZXQpLCBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuICAgICAgICAgICAgICAgIGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZnJvbSkgaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpICYmICh0b1trZXldID0gZnJvbVtrZXldKTtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykgcHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pICYmICh0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0bztcbiAgICAgICAgfTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgICAgICAgICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgXCJSZWFjdCBjbGFzc1wiKSArIFwiOiBcIiArIGxvY2F0aW9uICsgXCIgdHlwZSBgXCIgKyB0eXBlU3BlY05hbWUgKyBcImAgaXMgaW52YWxpZDsgaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYFwiICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgXCJgLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVyci5uYW1lID0gXCJJbnZhcmlhbnQgVmlvbGF0aW9uXCIsIGVycjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghZXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciB8fCBwcmludFdhcm5pbmcoKGNvbXBvbmVudE5hbWUgfHwgXCJSZWFjdCBjbGFzc1wiKSArIFwiOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHR5cGVTcGVjTmFtZSArIFwiYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhIFwiICsgdHlwZW9mIGVycm9yICsgXCIuIFlvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyIGNyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLlwiKSwgXG4gICAgICAgICAgICAgICAgZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSAhMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFwiRmFpbGVkIFwiICsgbG9jYXRpb24gKyBcIiB0eXBlOiBcIiArIGVycm9yLm1lc3NhZ2UgKyAobnVsbCAhPSBzdGFjayA/IHN0YWNrIDogXCJcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpLCBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fSwgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuICAgICAgICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiV2FybmluZzogXCIgKyB0ZXh0O1xuICAgICAgICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9LCBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gICAgICAgIH0sIG1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgICAgICAgICAgaWYgKG51bGwgPT0gc291cmNlKSByZXR1cm4ge307XG4gICAgICAgICAgICB2YXIga2V5LCBpLCB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV0sIGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwIHx8IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkgJiYgKHRhcmdldFtrZXldID0gc291cmNlW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgICAgICAgICBpZiAobnVsbCA9PSBzb3VyY2UpIHJldHVybiB7fTtcbiAgICAgICAgICAgIHZhciBrZXksIGksIHRhcmdldCA9IHt9LCBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSBrZXkgPSBzb3VyY2VLZXlzW2ldLCBleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCB8fCAodGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XSk7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIE1lZGlhUXVlcnkoX3JlZikge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbiwgZGV2aWNlID0gX3JlZi5kZXZpY2UsIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSwgc2V0dGluZ3MgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWyBcImNoaWxkcmVuXCIsIFwiZGV2aWNlXCIsIFwib25DaGFuZ2VcIiBdKSwgbWF0Y2hlcyA9IE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3VzZU1lZGlhUXVlcnlfXy5hKShzZXR0aW5ncywgZGV2aWNlLCBvbkNoYW5nZSk7XG4gICAgICAgICAgICByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiBjaGlsZHJlbiA/IGNoaWxkcmVuKG1hdGNoZXMpIDogbWF0Y2hlcyA/IGNoaWxkcmVuIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBfX3dlYnBhY2tfZXhwb3J0c19fLmEgPSBNZWRpYVF1ZXJ5O1xuICAgICAgICB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191c2VNZWRpYVF1ZXJ5X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuICAgIH0gXSk7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlYWN0LXJlc3BvbnNpdmUuanMubWFwIiwiLy9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQiwgY29tcGFyZSwgY29tcGFyZUNvbnRleHQpIHtcbiAgdmFyIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIG9iakEsIG9iakIpIDogdm9pZCAwO1xuXG4gIGlmIChyZXQgIT09IHZvaWQgMCkge1xuICAgIHJldHVybiAhIXJldDtcbiAgfVxuXG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09IFwib2JqZWN0XCIgfHwgIW9iakEgfHwgdHlwZW9mIG9iakIgIT09IFwib2JqZWN0XCIgfHwgIW9iakIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcblxuICAvLyBUZXN0IGZvciBBJ3Mga2V5cyBkaWZmZXJlbnQgZnJvbSBCLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBrZXlzQS5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG5cbiAgICBpZiAoIWJIYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlQSA9IG9iakFba2V5XTtcbiAgICB2YXIgdmFsdWVCID0gb2JqQltrZXldO1xuXG4gICAgcmV0ID0gY29tcGFyZSA/IGNvbXBhcmUuY2FsbChjb21wYXJlQ29udGV4dCwgdmFsdWVBLCB2YWx1ZUIsIGtleSkgOiB2b2lkIDA7XG5cbiAgICBpZiAocmV0ID09PSBmYWxzZSB8fCAocmV0ID09PSB2b2lkIDAgJiYgdmFsdWVBICE9PSB2YWx1ZUIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuIiwiaW1wb3J0e3R5cGVPZiBhcyBlLGlzRWxlbWVudCBhcyB0LGlzVmFsaWRFbGVtZW50VHlwZSBhcyBufWZyb21cInJlYWN0LWlzXCI7aW1wb3J0IHIse3VzZVN0YXRlIGFzIG8sdXNlQ29udGV4dCBhcyBzLHVzZU1lbW8gYXMgaSx1c2VFZmZlY3QgYXMgYSx1c2VSZWYgYXMgYyxjcmVhdGVFbGVtZW50IGFzIHUsdXNlRGVidWdWYWx1ZSBhcyBsLHVzZUxheW91dEVmZmVjdCBhcyBkfWZyb21cInJlYWN0XCI7aW1wb3J0IGggZnJvbVwic2hhbGxvd2VxdWFsXCI7aW1wb3J0IHAgZnJvbVwiQGVtb3Rpb24vc3R5bGlzXCI7aW1wb3J0IGYgZnJvbVwiQGVtb3Rpb24vdW5pdGxlc3NcIjtpbXBvcnQgbSBmcm9tXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCI7aW1wb3J0IHkgZnJvbVwiaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3NcIjtmdW5jdGlvbiB2KCl7cmV0dXJuKHY9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgciBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLHIpJiYoZVtyXT1uW3JdKX1yZXR1cm4gZX0pLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgZz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bZVswXV0scj0wLG89dC5sZW5ndGg7cjxvO3IrPTEpbi5wdXNoKHRbcl0sZVtyKzFdKTtyZXR1cm4gbn0sUz1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9PXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZcIltvYmplY3QgT2JqZWN0XVwiPT09KHQudG9TdHJpbmc/dC50b1N0cmluZygpOk9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSkmJiFlKHQpfSx3PU9iamVjdC5mcmVlemUoW10pLEU9T2JqZWN0LmZyZWV6ZSh7fSk7ZnVuY3Rpb24gYihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlfWZ1bmN0aW9uIF8oZSl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJmV8fGUuZGlzcGxheU5hbWV8fGUubmFtZXx8XCJDb21wb25lbnRcIn1mdW5jdGlvbiBOKGUpe3JldHVybiBlJiZcInN0cmluZ1wiPT10eXBlb2YgZS5zdHlsZWRDb21wb25lbnRJZH12YXIgQT1cInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19BVFRSfHxwcm9jZXNzLmVudi5TQ19BVFRSKXx8XCJkYXRhLXN0eWxlZFwiLEM9XCI1LjIuMVwiLEk9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJIVE1MRWxlbWVudFwiaW4gd2luZG93LFA9Qm9vbGVhbihcImJvb2xlYW5cIj09dHlwZW9mIFNDX0RJU0FCTEVfU1BFRURZP1NDX0RJU0FCTEVfU1BFRURZOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiZ2b2lkIDAhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFkmJlwiXCIhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZJiZwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJnZvaWQgMCE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZJiZcIlwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFkmJnByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZOlwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpLE89e30sUj1cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP3sxOlwiQ2Fubm90IGNyZWF0ZSBzdHlsZWQtY29tcG9uZW50IGZvciBjb21wb25lbnQ6ICVzLlxcblxcblwiLDI6XCJDYW4ndCBjb2xsZWN0IHN0eWxlcyBvbmNlIHlvdSd2ZSBjb25zdW1lZCBhIGBTZXJ2ZXJTdHlsZVNoZWV0YCdzIHN0eWxlcyEgYFNlcnZlclN0eWxlU2hlZXRgIGlzIGEgb25lIG9mZiBpbnN0YW5jZSBmb3IgZWFjaCBzZXJ2ZXItc2lkZSByZW5kZXIgY3ljbGUuXFxuXFxuLSBBcmUgeW91IHRyeWluZyB0byByZXVzZSBpdCBhY3Jvc3MgcmVuZGVycz9cXG4tIEFyZSB5b3UgYWNjaWRlbnRhbGx5IGNhbGxpbmcgY29sbGVjdFN0eWxlcyB0d2ljZT9cXG5cXG5cIiwzOlwiU3RyZWFtaW5nIFNTUiBpcyBvbmx5IHN1cHBvcnRlZCBpbiBhIE5vZGUuanMgZW52aXJvbm1lbnQ7IFBsZWFzZSBkbyBub3QgdHJ5IHRvIGNhbGwgdGhpcyBtZXRob2QgaW4gdGhlIGJyb3dzZXIuXFxuXFxuXCIsNDpcIlRoZSBgU3R5bGVTaGVldE1hbmFnZXJgIGV4cGVjdHMgYSB2YWxpZCB0YXJnZXQgb3Igc2hlZXQgcHJvcCFcXG5cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgY2xpZW50IGFuZCBpcyB5b3VyIHRhcmdldCBmYWxzeT9cXG4tIERvZXMgdGhpcyBlcnJvciBvY2N1ciBvbiB0aGUgc2VydmVyIGFuZCBpcyB0aGUgc2hlZXQgZmFsc3k/XFxuXFxuXCIsNTpcIlRoZSBjbG9uZSBtZXRob2QgY2Fubm90IGJlIHVzZWQgb24gdGhlIGNsaWVudCFcXG5cXG4tIEFyZSB5b3UgcnVubmluZyBpbiBhIGNsaWVudC1saWtlIGVudmlyb25tZW50IG9uIHRoZSBzZXJ2ZXI/XFxuLSBBcmUgeW91IHRyeWluZyB0byBydW4gU1NSIG9uIHRoZSBjbGllbnQ/XFxuXFxuXCIsNjpcIlRyeWluZyB0byBpbnNlcnQgYSBuZXcgc3R5bGUgdGFnLCBidXQgdGhlIGdpdmVuIE5vZGUgaXMgdW5tb3VudGVkIVxcblxcbi0gQXJlIHlvdSB1c2luZyBhIGN1c3RvbSB0YXJnZXQgdGhhdCBpc24ndCBtb3VudGVkP1xcbi0gRG9lcyB5b3VyIGRvY3VtZW50IG5vdCBoYXZlIGEgdmFsaWQgaGVhZCBlbGVtZW50P1xcbi0gSGF2ZSB5b3UgYWNjaWRlbnRhbGx5IHJlbW92ZWQgYSBzdHlsZSB0YWcgbWFudWFsbHk/XFxuXFxuXCIsNzonVGhlbWVQcm92aWRlcjogUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIFwidGhlbWVcIiBwcm9wIGZ1bmN0aW9uLCBlLmcuXFxuXFxuYGBganNcXG50aGVtZT17KCkgPT4gKHt9KX1cXG5gYGBcXG5cXG4nLDg6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHlvdXIgXCJ0aGVtZVwiIHByb3AgYW4gb2JqZWN0LlxcblxcbicsOTpcIk1pc3NpbmcgZG9jdW1lbnQgYDxoZWFkPmBcXG5cXG5cIiwxMDpcIkNhbm5vdCBmaW5kIGEgU3R5bGVTaGVldCBpbnN0YW5jZS4gVXN1YWxseSB0aGlzIGhhcHBlbnMgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGNvcGllcyBvZiBzdHlsZWQtY29tcG9uZW50cyBsb2FkZWQgYXQgb25jZS4gQ2hlY2sgb3V0IHRoaXMgaXNzdWUgZm9yIGhvdyB0byB0cm91Ymxlc2hvb3QgYW5kIGZpeCB0aGUgY29tbW9uIGNhc2VzIHdoZXJlIHRoaXMgc2l0dWF0aW9uIGNhbiBoYXBwZW46IGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9pc3N1ZXMvMTk0MSNpc3N1ZWNvbW1lbnQtNDE3ODYyMDIxXFxuXFxuXCIsMTE6XCJfVGhpcyBlcnJvciB3YXMgcmVwbGFjZWQgd2l0aCBhIGRldi10aW1lIHdhcm5pbmcsIGl0IHdpbGwgYmUgZGVsZXRlZCBmb3IgdjQgZmluYWwuXyBbY3JlYXRlR2xvYmFsU3R5bGVdIHJlY2VpdmVkIGNoaWxkcmVuIHdoaWNoIHdpbGwgbm90IGJlIHJlbmRlcmVkLiBQbGVhc2UgdXNlIHRoZSBjb21wb25lbnQgd2l0aG91dCBwYXNzaW5nIGNoaWxkcmVuIGVsZW1lbnRzLlxcblxcblwiLDEyOlwiSXQgc2VlbXMgeW91IGFyZSBpbnRlcnBvbGF0aW5nIGEga2V5ZnJhbWUgZGVjbGFyYXRpb24gKCVzKSBpbnRvIGFuIHVudGFnZ2VkIHN0cmluZy4gVGhpcyB3YXMgc3VwcG9ydGVkIGluIHN0eWxlZC1jb21wb25lbnRzIHYzLCBidXQgaXMgbm90IGxvbmdlciBzdXBwb3J0ZWQgaW4gdjQgYXMga2V5ZnJhbWVzIGFyZSBub3cgaW5qZWN0ZWQgb24tZGVtYW5kLiBQbGVhc2Ugd3JhcCB5b3VyIHN0cmluZyBpbiB0aGUgY3NzXFxcXGBcXFxcYCBoZWxwZXIgd2hpY2ggZW5zdXJlcyB0aGUgc3R5bGVzIGFyZSBpbmplY3RlZCBjb3JyZWN0bHkuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hcGkjY3NzXFxuXFxuXCIsMTM6XCIlcyBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXFxuXFxuXCIsMTQ6J1RoZW1lUHJvdmlkZXI6IFwidGhlbWVcIiBwcm9wIGlzIHJlcXVpcmVkLlxcblxcbicsMTU6XCJBIHN0eWxpcyBwbHVnaW4gaGFzIGJlZW4gc3VwcGxpZWQgdGhhdCBpcyBub3QgbmFtZWQuIFdlIG5lZWQgYSBuYW1lIGZvciBlYWNoIHBsdWdpbiB0byBiZSBhYmxlIHRvIHByZXZlbnQgc3R5bGluZyBjb2xsaXNpb25zIGJldHdlZW4gZGlmZmVyZW50IHN0eWxpcyBjb25maWd1cmF0aW9ucyB3aXRoaW4gdGhlIHNhbWUgYXBwLiBCZWZvcmUgeW91IHBhc3MgeW91ciBwbHVnaW4gdG8gYDxTdHlsZVNoZWV0TWFuYWdlciBzdHlsaXNQbHVnaW5zPXtbXX0+YCwgcGxlYXNlIG1ha2Ugc3VyZSBlYWNoIHBsdWdpbiBpcyB1bmlxdWVseS1uYW1lZCwgZS5nLlxcblxcbmBgYGpzXFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGltcG9ydGVkUGx1Z2luLCAnbmFtZScsIHsgdmFsdWU6ICdzb21lLXVuaXF1ZS1uYW1lJyB9KTtcXG5gYGBcXG5cXG5cIiwxNjpcIlJlYWNoZWQgdGhlIGxpbWl0IG9mIGhvdyBtYW55IHN0eWxlZCBjb21wb25lbnRzIG1heSBiZSBjcmVhdGVkIGF0IGdyb3VwICVzLlxcbllvdSBtYXkgb25seSBjcmVhdGUgdXAgdG8gMSwwNzMsNzQxLDgyNCBjb21wb25lbnRzLiBJZiB5b3UncmUgY3JlYXRpbmcgY29tcG9uZW50cyBkeW5hbWljYWxseSxcXG5hcyBmb3IgaW5zdGFuY2UgaW4geW91ciByZW5kZXIgbWV0aG9kIHRoZW4geW91IG1heSBiZSBydW5uaW5nIGludG8gdGhpcyBsaW1pdGF0aW9uLlxcblxcblwiLDE3OlwiQ1NTU3R5bGVTaGVldCBjb3VsZCBub3QgYmUgZm91bmQgb24gSFRNTFN0eWxlRWxlbWVudC5cXG5IYXMgc3R5bGVkLWNvbXBvbmVudHMnIHN0eWxlIHRhZyBiZWVuIHVubW91bnRlZCBvciBhbHRlcmVkIGJ5IGFub3RoZXIgc2NyaXB0P1xcblwifTp7fTtmdW5jdGlvbiBEKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGg8PTA/dm9pZCAwOmFyZ3VtZW50c1swXSx0PVtdLG49MSxyPWFyZ3VtZW50cy5sZW5ndGg7bjxyO24rPTEpdC5wdXNoKG48MHx8YXJndW1lbnRzLmxlbmd0aDw9bj92b2lkIDA6YXJndW1lbnRzW25dKTtyZXR1cm4gdC5mb3JFYWNoKChmdW5jdGlvbih0KXtlPWUucmVwbGFjZSgvJVthLXpdLyx0KX0pKSxlfWZ1bmN0aW9uIGooZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3Rocm93XCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVj9uZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZC4gU2VlIGh0dHBzOi8vZ2l0LmlvL0pVSWFFI1wiK2UrXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIrKG4ubGVuZ3RoPjA/XCIgQXJnczogXCIrbi5qb2luKFwiLCBcIik6XCJcIikpOm5ldyBFcnJvcihELmFwcGx5KHZvaWQgMCxbUltlXV0uY29uY2F0KG4pKS50cmltKCkpfXZhciBUPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLmdyb3VwU2l6ZXM9bmV3IFVpbnQzMkFycmF5KDUxMiksdGhpcy5sZW5ndGg9NTEyLHRoaXMudGFnPWV9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5kZXhPZkdyb3VwPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtuPGU7bisrKXQrPXRoaXMuZ3JvdXBTaXplc1tuXTtyZXR1cm4gdH0sdC5pbnNlcnRSdWxlcz1mdW5jdGlvbihlLHQpe2lmKGU+PXRoaXMuZ3JvdXBTaXplcy5sZW5ndGgpe2Zvcih2YXIgbj10aGlzLmdyb3VwU2l6ZXMscj1uLmxlbmd0aCxvPXI7ZT49bzspKG88PD0xKTwwJiZqKDE2LFwiXCIrZSk7dGhpcy5ncm91cFNpemVzPW5ldyBVaW50MzJBcnJheShvKSx0aGlzLmdyb3VwU2l6ZXMuc2V0KG4pLHRoaXMubGVuZ3RoPW87Zm9yKHZhciBzPXI7czxvO3MrKyl0aGlzLmdyb3VwU2l6ZXNbc109MH1mb3IodmFyIGk9dGhpcy5pbmRleE9mR3JvdXAoZSsxKSxhPTAsYz10Lmxlbmd0aDthPGM7YSsrKXRoaXMudGFnLmluc2VydFJ1bGUoaSx0W2FdKSYmKHRoaXMuZ3JvdXBTaXplc1tlXSsrLGkrKyl9LHQuY2xlYXJHcm91cD1mdW5jdGlvbihlKXtpZihlPHRoaXMubGVuZ3RoKXt2YXIgdD10aGlzLmdyb3VwU2l6ZXNbZV0sbj10aGlzLmluZGV4T2ZHcm91cChlKSxyPW4rdDt0aGlzLmdyb3VwU2l6ZXNbZV09MDtmb3IodmFyIG89bjtvPHI7bysrKXRoaXMudGFnLmRlbGV0ZVJ1bGUobil9fSx0LmdldEdyb3VwPWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7aWYoZT49dGhpcy5sZW5ndGh8fDA9PT10aGlzLmdyb3VwU2l6ZXNbZV0pcmV0dXJuIHQ7Zm9yKHZhciBuPXRoaXMuZ3JvdXBTaXplc1tlXSxyPXRoaXMuaW5kZXhPZkdyb3VwKGUpLG89cituLHM9cjtzPG87cysrKXQrPXRoaXMudGFnLmdldFJ1bGUocykrXCIvKiFzYyovXFxuXCI7cmV0dXJuIHR9LGV9KCksaz1uZXcgTWFwLHg9bmV3IE1hcCxWPTEsQj1mdW5jdGlvbihlKXtpZihrLmhhcyhlKSlyZXR1cm4gay5nZXQoZSk7Zm9yKDt4LmhhcyhWKTspVisrO3ZhciB0PVYrKztyZXR1cm5cInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoKDB8dCk8MHx8dD4xPDwzMCkmJmooMTYsXCJcIit0KSxrLnNldChlLHQpLHguc2V0KHQsZSksdH0sTT1mdW5jdGlvbihlKXtyZXR1cm4geC5nZXQoZSl9LHo9ZnVuY3Rpb24oZSx0KXtrLnNldChlLHQpLHguc2V0KHQsZSl9LEw9XCJzdHlsZVtcIitBKyddW2RhdGEtc3R5bGVkLXZlcnNpb249XCI1LjIuMVwiXScsRz1uZXcgUmVnRXhwKFwiXlwiK0ErJ1xcXFwuZyhcXFxcZCspXFxcXFtpZD1cIihbXFxcXHdcXFxcZC1dKylcIlxcXFxdLio/XCIoW15cIl0qKScpLEY9ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcixvPW4uc3BsaXQoXCIsXCIpLHM9MCxpPW8ubGVuZ3RoO3M8aTtzKyspKHI9b1tzXSkmJmUucmVnaXN0ZXJOYW1lKHQscil9LFk9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dC5pbm5lckhUTUwuc3BsaXQoXCIvKiFzYyovXFxuXCIpLHI9W10sbz0wLHM9bi5sZW5ndGg7bzxzO28rKyl7dmFyIGk9bltvXS50cmltKCk7aWYoaSl7dmFyIGE9aS5tYXRjaChHKTtpZihhKXt2YXIgYz0wfHBhcnNlSW50KGFbMV0sMTApLHU9YVsyXTswIT09YyYmKHoodSxjKSxGKGUsdSxhWzNdKSxlLmdldFRhZygpLmluc2VydFJ1bGVzKGMscikpLHIubGVuZ3RoPTB9ZWxzZSByLnB1c2goaSl9fX0scT1mdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsfSxIPWZ1bmN0aW9uKGUpe3ZhciB0PWRvY3VtZW50LmhlYWQsbj1lfHx0LHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLG89ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY2hpbGROb2RlcyxuPXQubGVuZ3RoO24+PTA7bi0tKXt2YXIgcj10W25dO2lmKHImJjE9PT1yLm5vZGVUeXBlJiZyLmhhc0F0dHJpYnV0ZShBKSlyZXR1cm4gcn19KG4pLHM9dm9pZCAwIT09bz9vLm5leHRTaWJsaW5nOm51bGw7ci5zZXRBdHRyaWJ1dGUoQSxcImFjdGl2ZVwiKSxyLnNldEF0dHJpYnV0ZShcImRhdGEtc3R5bGVkLXZlcnNpb25cIixcIjUuMi4xXCIpO3ZhciBpPXEoKTtyZXR1cm4gaSYmci5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLGkpLG4uaW5zZXJ0QmVmb3JlKHIscykscn0sJD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5lbGVtZW50PUgoZSk7dC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSksdGhpcy5zaGVldD1mdW5jdGlvbihlKXtpZihlLnNoZWV0KXJldHVybiBlLnNoZWV0O2Zvcih2YXIgdD1kb2N1bWVudC5zdHlsZVNoZWV0cyxuPTAscj10Lmxlbmd0aDtuPHI7bisrKXt2YXIgbz10W25dO2lmKG8ub3duZXJOb2RlPT09ZSlyZXR1cm4gb31qKDE3KX0odCksdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7dHJ5e3JldHVybiB0aGlzLnNoZWV0Lmluc2VydFJ1bGUodCxlKSx0aGlzLmxlbmd0aCsrLCEwfWNhdGNoKGUpe3JldHVybiExfX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuc2hlZXQuZGVsZXRlUnVsZShlKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5zaGVldC5jc3NSdWxlc1tlXTtyZXR1cm4gdm9pZCAwIT09dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQuY3NzVGV4dD90LmNzc1RleHQ6XCJcIn0sZX0oKSxXPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgdD10aGlzLmVsZW1lbnQ9SChlKTt0aGlzLm5vZGVzPXQuY2hpbGROb2Rlcyx0aGlzLmxlbmd0aD0wfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0Lmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXtpZihlPD10aGlzLmxlbmd0aCYmZT49MCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkscj10aGlzLm5vZGVzW2VdO3JldHVybiB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKG4scnx8bnVsbCksdGhpcy5sZW5ndGgrKywhMH1yZXR1cm4hMX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGVzW2VdKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ub2Rlc1tlXS50ZXh0Q29udGVudDpcIlwifSxlfSgpLFU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMucnVsZXM9W10sdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8PXRoaXMubGVuZ3RoJiYodGhpcy5ydWxlcy5zcGxpY2UoZSwwLHQpLHRoaXMubGVuZ3RoKyssITApfSx0LmRlbGV0ZVJ1bGU9ZnVuY3Rpb24oZSl7dGhpcy5ydWxlcy5zcGxpY2UoZSwxKSx0aGlzLmxlbmd0aC0tfSx0LmdldFJ1bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGU8dGhpcy5sZW5ndGg/dGhpcy5ydWxlc1tlXTpcIlwifSxlfSgpLEo9SSxYPXtpc1NlcnZlcjohSSx1c2VDU1NPTUluamVjdGlvbjohUH0sWj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0LG4pe3ZvaWQgMD09PWUmJihlPUUpLHZvaWQgMD09PXQmJih0PXt9KSx0aGlzLm9wdGlvbnM9dih7fSxYLHt9LGUpLHRoaXMuZ3M9dCx0aGlzLm5hbWVzPW5ldyBNYXAobiksIXRoaXMub3B0aW9ucy5pc1NlcnZlciYmSSYmSiYmKEo9ITEsZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoTCksbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIG89dFtuXTtvJiZcImFjdGl2ZVwiIT09by5nZXRBdHRyaWJ1dGUoQSkmJihZKGUsbyksby5wYXJlbnROb2RlJiZvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobykpfX0odGhpcykpfWUucmVnaXN0ZXJJZD1mdW5jdGlvbihlKXtyZXR1cm4gQihlKX07dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucz1mdW5jdGlvbih0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj0hMCksbmV3IGUodih7fSx0aGlzLm9wdGlvbnMse30sdCksdGhpcy5ncyxuJiZ0aGlzLm5hbWVzfHx2b2lkIDApfSx0LmFsbG9jYXRlR1NJbnN0YW5jZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nc1tlXT0odGhpcy5nc1tlXXx8MCkrMX0sdC5nZXRUYWc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50YWd8fCh0aGlzLnRhZz0obj0odD10aGlzLm9wdGlvbnMpLmlzU2VydmVyLHI9dC51c2VDU1NPTUluamVjdGlvbixvPXQudGFyZ2V0LGU9bj9uZXcgVShvKTpyP25ldyAkKG8pOm5ldyBXKG8pLG5ldyBUKGUpKSk7dmFyIGUsdCxuLHIsb30sdC5oYXNOYW1lRm9ySWQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmhhcyh0KX0sdC5yZWdpc3Rlck5hbWU9ZnVuY3Rpb24oZSx0KXtpZihCKGUpLHRoaXMubmFtZXMuaGFzKGUpKXRoaXMubmFtZXMuZ2V0KGUpLmFkZCh0KTtlbHNle3ZhciBuPW5ldyBTZXQ7bi5hZGQodCksdGhpcy5uYW1lcy5zZXQoZSxuKX19LHQuaW5zZXJ0UnVsZXM9ZnVuY3Rpb24oZSx0LG4pe3RoaXMucmVnaXN0ZXJOYW1lKGUsdCksdGhpcy5nZXRUYWcoKS5pbnNlcnRSdWxlcyhCKGUpLG4pfSx0LmNsZWFyTmFtZXM9ZnVuY3Rpb24oZSl7dGhpcy5uYW1lcy5oYXMoZSkmJnRoaXMubmFtZXMuZ2V0KGUpLmNsZWFyKCl9LHQuY2xlYXJSdWxlcz1mdW5jdGlvbihlKXt0aGlzLmdldFRhZygpLmNsZWFyR3JvdXAoQihlKSksdGhpcy5jbGVhck5hbWVzKGUpfSx0LmNsZWFyVGFnPWZ1bmN0aW9uKCl7dGhpcy50YWc9dm9pZCAwfSx0LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmdldFRhZygpLG49dC5sZW5ndGgscj1cIlwiLG89MDtvPG47bysrKXt2YXIgcz1NKG8pO2lmKHZvaWQgMCE9PXMpe3ZhciBpPWUubmFtZXMuZ2V0KHMpLGE9dC5nZXRHcm91cChvKTtpZih2b2lkIDAhPT1pJiYwIT09YS5sZW5ndGgpe3ZhciBjPUErXCIuZ1wiK28rJ1tpZD1cIicrcysnXCJdJyx1PVwiXCI7dm9pZCAwIT09aSYmaS5mb3JFYWNoKChmdW5jdGlvbihlKXtlLmxlbmd0aD4wJiYodSs9ZStcIixcIil9KSkscis9XCJcIithK2MrJ3tjb250ZW50OlwiJyt1KydcIn0vKiFzYyovXFxuJ319fXJldHVybiByfSh0aGlzKX0sZX0oKSxLPS8oYSkoZCkvZ2ksUT1mdW5jdGlvbihlKXtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlKyhlPjI1PzM5Ojk3KSl9O2Z1bmN0aW9uIGVlKGUpe3ZhciB0LG49XCJcIjtmb3IodD1NYXRoLmFicyhlKTt0PjUyO3Q9dC81MnwwKW49USh0JTUyKStuO3JldHVybihRKHQlNTIpK24pLnJlcGxhY2UoSyxcIiQxLSQyXCIpfXZhciB0ZT1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj10Lmxlbmd0aDtuOyllPTMzKmVedC5jaGFyQ29kZUF0KC0tbik7cmV0dXJuIGV9LG5lPWZ1bmN0aW9uKGUpe3JldHVybiB0ZSg1MzgxLGUpfTtmdW5jdGlvbiByZShlKXtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrPTEpe3ZhciBuPWVbdF07aWYoYihuKSYmIU4obikpcmV0dXJuITF9cmV0dXJuITB9dmFyIG9lPW5lKFwiNS4yLjFcIiksc2U9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt0aGlzLnJ1bGVzPWUsdGhpcy5zdGF0aWNSdWxlc0lkPVwiXCIsdGhpcy5pc1N0YXRpYz1cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodm9pZCAwPT09bnx8bi5pc1N0YXRpYykmJnJlKGUpLHRoaXMuY29tcG9uZW50SWQ9dCx0aGlzLmJhc2VIYXNoPXRlKG9lLHQpLHRoaXMuYmFzZVN0eWxlPW4sWi5yZWdpc3RlcklkKHQpfXJldHVybiBlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcz1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcy5jb21wb25lbnRJZCxvPVtdO2lmKHRoaXMuYmFzZVN0eWxlJiZvLnB1c2godGhpcy5iYXNlU3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoZSx0LG4pKSx0aGlzLmlzU3RhdGljJiYhbi5oYXNoKWlmKHRoaXMuc3RhdGljUnVsZXNJZCYmdC5oYXNOYW1lRm9ySWQocix0aGlzLnN0YXRpY1J1bGVzSWQpKW8ucHVzaCh0aGlzLnN0YXRpY1J1bGVzSWQpO2Vsc2V7dmFyIHM9TmUodGhpcy5ydWxlcyxlLHQsbikuam9pbihcIlwiKSxpPWVlKHRlKHRoaXMuYmFzZUhhc2gscy5sZW5ndGgpPj4+MCk7aWYoIXQuaGFzTmFtZUZvcklkKHIsaSkpe3ZhciBhPW4ocyxcIi5cIitpLHZvaWQgMCxyKTt0Lmluc2VydFJ1bGVzKHIsaSxhKX1vLnB1c2goaSksdGhpcy5zdGF0aWNSdWxlc0lkPWl9ZWxzZXtmb3IodmFyIGM9dGhpcy5ydWxlcy5sZW5ndGgsdT10ZSh0aGlzLmJhc2VIYXNoLG4uaGFzaCksbD1cIlwiLGQ9MDtkPGM7ZCsrKXt2YXIgaD10aGlzLnJ1bGVzW2RdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBoKWwrPWgsXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKHU9dGUodSxoK2QpKTtlbHNlIGlmKGgpe3ZhciBwPU5lKGgsZSx0LG4pLGY9QXJyYXkuaXNBcnJheShwKT9wLmpvaW4oXCJcIik6cDt1PXRlKHUsZitkKSxsKz1mfX1pZihsKXt2YXIgbT1lZSh1Pj4+MCk7aWYoIXQuaGFzTmFtZUZvcklkKHIsbSkpe3ZhciB5PW4obCxcIi5cIittLHZvaWQgMCxyKTt0Lmluc2VydFJ1bGVzKHIsbSx5KX1vLnB1c2gobSl9fXJldHVybiBvLmpvaW4oXCIgXCIpfSxlfSgpLGllPS9eXFxzKlxcL1xcLy4qJC9nbSxhZT1bXCI6XCIsXCJbXCIsXCIuXCIsXCIjXCJdO2Z1bmN0aW9uIGNlKGUpe3ZhciB0LG4scixvLHM9dm9pZCAwPT09ZT9FOmUsaT1zLm9wdGlvbnMsYT12b2lkIDA9PT1pP0U6aSxjPXMucGx1Z2lucyx1PXZvaWQgMD09PWM/dzpjLGw9bmV3IHAoYSksZD1bXSxoPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQodCl7aWYodCl0cnl7ZSh0K1wifVwiKX1jYXRjaChlKXt9fXJldHVybiBmdW5jdGlvbihuLHIsbyxzLGksYSxjLHUsbCxkKXtzd2l0Y2gobil7Y2FzZSAxOmlmKDA9PT1sJiY2ND09PXIuY2hhckNvZGVBdCgwKSlyZXR1cm4gZShyK1wiO1wiKSxcIlwiO2JyZWFrO2Nhc2UgMjppZigwPT09dSlyZXR1cm4gcitcIi8qfCovXCI7YnJlYWs7Y2FzZSAzOnN3aXRjaCh1KXtjYXNlIDEwMjpjYXNlIDExMjpyZXR1cm4gZShvWzBdK3IpLFwiXCI7ZGVmYXVsdDpyZXR1cm4gcisoMD09PWQ/XCIvKnwqL1wiOlwiXCIpfWNhc2UtMjpyLnNwbGl0KFwiLyp8Ki99XCIpLmZvckVhY2godCl9fX0oKGZ1bmN0aW9uKGUpe2QucHVzaChlKX0pKSxmPWZ1bmN0aW9uKGUscixzKXtyZXR1cm4gMD09PXImJmFlLmluY2x1ZGVzKHNbbi5sZW5ndGhdKXx8cy5tYXRjaChvKT9lOlwiLlwiK3R9O2Z1bmN0aW9uIG0oZSxzLGksYSl7dm9pZCAwPT09YSYmKGE9XCImXCIpO3ZhciBjPWUucmVwbGFjZShpZSxcIlwiKSx1PXMmJmk/aStcIiBcIitzK1wiIHsgXCIrYytcIiB9XCI6YztyZXR1cm4gdD1hLG49cyxyPW5ldyBSZWdFeHAoXCJcXFxcXCIrbitcIlxcXFxiXCIsXCJnXCIpLG89bmV3IFJlZ0V4cChcIihcXFxcXCIrbitcIlxcXFxiKXsyLH1cIiksbChpfHwhcz9cIlwiOnMsdSl9cmV0dXJuIGwudXNlKFtdLmNvbmNhdCh1LFtmdW5jdGlvbihlLHQsbyl7Mj09PWUmJm8ubGVuZ3RoJiZvWzBdLmxhc3RJbmRleE9mKG4pPjAmJihvWzBdPW9bMF0ucmVwbGFjZShyLGYpKX0saCxmdW5jdGlvbihlKXtpZigtMj09PWUpe3ZhciB0PWQ7cmV0dXJuIGQ9W10sdH19XSkpLG0uaGFzaD11Lmxlbmd0aD91LnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdC5uYW1lfHxqKDE1KSx0ZShlLHQubmFtZSl9KSw1MzgxKS50b1N0cmluZygpOlwiXCIsbX12YXIgdWU9ci5jcmVhdGVDb250ZXh0KCksbGU9dWUuQ29uc3VtZXIsZGU9ci5jcmVhdGVDb250ZXh0KCksaGU9KGRlLkNvbnN1bWVyLG5ldyBaKSxwZT1jZSgpO2Z1bmN0aW9uIGZlKCl7cmV0dXJuIHModWUpfHxoZX1mdW5jdGlvbiBtZSgpe3JldHVybiBzKGRlKXx8cGV9ZnVuY3Rpb24geWUoZSl7dmFyIHQ9byhlLnN0eWxpc1BsdWdpbnMpLG49dFswXSxzPXRbMV0sYz1mZSgpLHU9aSgoZnVuY3Rpb24oKXt2YXIgdD1jO3JldHVybiBlLnNoZWV0P3Q9ZS5zaGVldDplLnRhcmdldCYmKHQ9dC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHt0YXJnZXQ6ZS50YXJnZXR9LCExKSksZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24mJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dXNlQ1NTT01JbmplY3Rpb246ITF9KSksdH0pLFtlLmRpc2FibGVDU1NPTUluamVjdGlvbixlLnNoZWV0LGUudGFyZ2V0XSksbD1pKChmdW5jdGlvbigpe3JldHVybiBjZSh7b3B0aW9uczp7cHJlZml4OiFlLmRpc2FibGVWZW5kb3JQcmVmaXhlc30scGx1Z2luczpufSl9KSxbZS5kaXNhYmxlVmVuZG9yUHJlZml4ZXMsbl0pO3JldHVybiBhKChmdW5jdGlvbigpe2gobixlLnN0eWxpc1BsdWdpbnMpfHxzKGUuc3R5bGlzUGx1Z2lucyl9KSxbZS5zdHlsaXNQbHVnaW5zXSksci5jcmVhdGVFbGVtZW50KHVlLlByb3ZpZGVyLHt2YWx1ZTp1fSxyLmNyZWF0ZUVsZW1lbnQoZGUuUHJvdmlkZXIse3ZhbHVlOmx9LFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/ci5DaGlsZHJlbi5vbmx5KGUuY2hpbGRyZW4pOmUuY2hpbGRyZW4pKX12YXIgdmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7dmFyIG49dGhpczt0aGlzLmluamVjdD1mdW5jdGlvbihlLHQpe3ZvaWQgMD09PXQmJih0PXBlKTt2YXIgcj1uLm5hbWUrdC5oYXNoO2UuaGFzTmFtZUZvcklkKG4uaWQscil8fGUuaW5zZXJ0UnVsZXMobi5pZCxyLHQobi5ydWxlcyxyLFwiQGtleWZyYW1lc1wiKSl9LHRoaXMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gaigxMixTdHJpbmcobi5uYW1lKSl9LHRoaXMubmFtZT1lLHRoaXMuaWQ9XCJzYy1rZXlmcmFtZXMtXCIrZSx0aGlzLnJ1bGVzPXR9cmV0dXJuIGUucHJvdG90eXBlLmdldE5hbWU9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXBlKSx0aGlzLm5hbWUrZS5oYXNofSxlfSgpLGdlPS8oW0EtWl0pLyxTZT0vKFtBLVpdKS9nLHdlPS9ebXMtLyxFZT1mdW5jdGlvbihlKXtyZXR1cm5cIi1cIitlLnRvTG93ZXJDYXNlKCl9O2Z1bmN0aW9uIGJlKGUpe3JldHVybiBnZS50ZXN0KGUpP2UucmVwbGFjZShTZSxFZSkucmVwbGFjZSh3ZSxcIi1tcy1cIik6ZX12YXIgX2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWV8fCExPT09ZXx8XCJcIj09PWV9O2Z1bmN0aW9uIE5lKGUsbixyLG8pe2lmKEFycmF5LmlzQXJyYXkoZSkpe2Zvcih2YXIgcyxpPVtdLGE9MCxjPWUubGVuZ3RoO2E8YzthKz0xKVwiXCIhPT0ocz1OZShlW2FdLG4scixvKSkmJihBcnJheS5pc0FycmF5KHMpP2kucHVzaC5hcHBseShpLHMpOmkucHVzaChzKSk7cmV0dXJuIGl9aWYoX2UoZSkpcmV0dXJuXCJcIjtpZihOKGUpKXJldHVyblwiLlwiK2Uuc3R5bGVkQ29tcG9uZW50SWQ7aWYoYihlKSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YobD1lKXx8bC5wcm90b3R5cGUmJmwucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnR8fCFuKXJldHVybiBlO3ZhciB1PWUobik7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdCh1KSYmY29uc29sZS53YXJuKF8oZSkrXCIgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlwiKSxOZSh1LG4scixvKX12YXIgbDtyZXR1cm4gZSBpbnN0YW5jZW9mIHZlP3I/KGUuaW5qZWN0KHIsbyksZS5nZXROYW1lKG8pKTplOlMoZSk/ZnVuY3Rpb24gZSh0LG4pe3ZhciByLG8scz1bXTtmb3IodmFyIGkgaW4gdCl0Lmhhc093blByb3BlcnR5KGkpJiYhX2UodFtpXSkmJihTKHRbaV0pP3MucHVzaC5hcHBseShzLGUodFtpXSxpKSk6Yih0W2ldKT9zLnB1c2goYmUoaSkrXCI6XCIsdFtpXSxcIjtcIik6cy5wdXNoKGJlKGkpK1wiOiBcIisocj1pLG51bGw9PShvPXRbaV0pfHxcImJvb2xlYW5cIj09dHlwZW9mIG98fFwiXCI9PT1vP1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIG98fDA9PT1vfHxyIGluIGY/U3RyaW5nKG8pLnRyaW0oKTpvK1wicHhcIikrXCI7XCIpKTtyZXR1cm4gbj9bbitcIiB7XCJdLmNvbmNhdChzLFtcIn1cIl0pOnN9KGUpOmUudG9TdHJpbmcoKX1mdW5jdGlvbiBBZShlKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheSh0PjE/dC0xOjApLHI9MTtyPHQ7cisrKW5bci0xXT1hcmd1bWVudHNbcl07cmV0dXJuIGIoZSl8fFMoZSk/TmUoZyh3LFtlXS5jb25jYXQobikpKTowPT09bi5sZW5ndGgmJjE9PT1lLmxlbmd0aCYmXCJzdHJpbmdcIj09dHlwZW9mIGVbMF0/ZTpOZShnKGUsbikpfXZhciBDZT0vaW52YWxpZCBob29rIGNhbGwvaSxJZT1uZXcgU2V0LFBlPWZ1bmN0aW9uKGUsdCl7aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVil7dmFyIG49XCJUaGUgY29tcG9uZW50IFwiK2UrKHQ/JyB3aXRoIHRoZSBpZCBvZiBcIicrdCsnXCInOlwiXCIpK1wiIGhhcyBiZWVuIGNyZWF0ZWQgZHluYW1pY2FsbHkuXFxuWW91IG1heSBzZWUgdGhpcyB3YXJuaW5nIGJlY2F1c2UgeW91J3ZlIGNhbGxlZCBzdHlsZWQgaW5zaWRlIGFub3RoZXIgY29tcG9uZW50LlxcblRvIHJlc29sdmUgdGhpcyBvbmx5IGNyZWF0ZSBuZXcgU3R5bGVkQ29tcG9uZW50cyBvdXRzaWRlIG9mIGFueSByZW5kZXIgbWV0aG9kIGFuZCBmdW5jdGlvbiBjb21wb25lbnQuXCI7dHJ5e2MoKSxJZS5oYXMobil8fChjb25zb2xlLndhcm4obiksSWUuYWRkKG4pKX1jYXRjaChlKXtDZS50ZXN0KGUubWVzc2FnZSkmJkllLmRlbGV0ZShuKX19fSxPZT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPUUpLGUudGhlbWUhPT1uLnRoZW1lJiZlLnRoZW1lfHx0fHxuLnRoZW1lfSxSZT0vWyFcIiMkJSYnKCkqKywuLzo7PD0+P0BbXFxcXFxcXV5ge3x9fi1dKy9nLERlPS8oXi18LSQpL2c7ZnVuY3Rpb24gamUoZSl7cmV0dXJuIGUucmVwbGFjZShSZSxcIi1cIikucmVwbGFjZShEZSxcIlwiKX12YXIgVGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGVlKG5lKGUpPj4+MCl9O2Z1bmN0aW9uIGtlKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYoXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8ZS5jaGFyQXQoMCk9PT1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpKX12YXIgeGU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZXx8XCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPT1lJiYhQXJyYXkuaXNBcnJheShlKX0sVmU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJfX3Byb3RvX19cIiE9PWUmJlwiY29uc3RydWN0b3JcIiE9PWUmJlwicHJvdG90eXBlXCIhPT1lfTtmdW5jdGlvbiBCZShlLHQsbil7dmFyIHI9ZVtuXTt4ZSh0KSYmeGUocik/TWUocix0KTplW25dPXR9ZnVuY3Rpb24gTWUoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO2Zvcih2YXIgbz0wLHM9bjtvPHMubGVuZ3RoO28rKyl7dmFyIGk9c1tvXTtpZih4ZShpKSlmb3IodmFyIGEgaW4gaSlWZShhKSYmQmUoZSxpW2FdLGEpfXJldHVybiBlfXZhciB6ZT1yLmNyZWF0ZUNvbnRleHQoKSxMZT16ZS5Db25zdW1lcjtmdW5jdGlvbiBHZShlKXt2YXIgdD1zKHplKSxuPWkoKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7aWYoIWUpcmV0dXJuIGooMTQpO2lmKGIoZSkpe3ZhciBuPWUodCk7cmV0dXJuXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8bnVsbCE9PW4mJiFBcnJheS5pc0FycmF5KG4pJiZcIm9iamVjdFwiPT10eXBlb2Ygbj9uOmooNyl9cmV0dXJuIEFycmF5LmlzQXJyYXkoZSl8fFwib2JqZWN0XCIhPXR5cGVvZiBlP2ooOCk6dD92KHt9LHQse30sZSk6ZX0oZS50aGVtZSx0KX0pLFtlLnRoZW1lLHRdKTtyZXR1cm4gZS5jaGlsZHJlbj9yLmNyZWF0ZUVsZW1lbnQoemUuUHJvdmlkZXIse3ZhbHVlOm59LGUuY2hpbGRyZW4pOm51bGx9dmFyIEZlPXt9O2Z1bmN0aW9uIFllKGUsdCxuKXt2YXIgbz1OKGUpLGk9IWtlKGUpLGE9dC5hdHRycyxjPXZvaWQgMD09PWE/dzphLGQ9dC5jb21wb25lbnRJZCxoPXZvaWQgMD09PWQ/ZnVuY3Rpb24oZSx0KXt2YXIgbj1cInN0cmluZ1wiIT10eXBlb2YgZT9cInNjXCI6amUoZSk7RmVbbl09KEZlW25dfHwwKSsxO3ZhciByPW4rXCItXCIrVGUoXCI1LjIuMVwiK24rRmVbbl0pO3JldHVybiB0P3QrXCItXCIrcjpyfSh0LmRpc3BsYXlOYW1lLHQucGFyZW50Q29tcG9uZW50SWQpOmQscD10LmRpc3BsYXlOYW1lLGY9dm9pZCAwPT09cD9mdW5jdGlvbihlKXtyZXR1cm4ga2UoZSk/XCJzdHlsZWQuXCIrZTpcIlN0eWxlZChcIitfKGUpK1wiKVwifShlKTpwLGc9dC5kaXNwbGF5TmFtZSYmdC5jb21wb25lbnRJZD9qZSh0LmRpc3BsYXlOYW1lKStcIi1cIit0LmNvbXBvbmVudElkOnQuY29tcG9uZW50SWR8fGgsUz1vJiZlLmF0dHJzP0FycmF5LnByb3RvdHlwZS5jb25jYXQoZS5hdHRycyxjKS5maWx0ZXIoQm9vbGVhbik6YyxBPXQuc2hvdWxkRm9yd2FyZFByb3A7byYmZS5zaG91bGRGb3J3YXJkUHJvcCYmKEE9dC5zaG91bGRGb3J3YXJkUHJvcD9mdW5jdGlvbihuLHIpe3JldHVybiBlLnNob3VsZEZvcndhcmRQcm9wKG4scikmJnQuc2hvdWxkRm9yd2FyZFByb3AobixyKX06ZS5zaG91bGRGb3J3YXJkUHJvcCk7dmFyIEMsST1uZXcgc2UobixnLG8/ZS5jb21wb25lbnRTdHlsZTp2b2lkIDApLFA9SS5pc1N0YXRpYyYmMD09PWMubGVuZ3RoLE89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSx0LG4scil7dmFyIG89ZS5hdHRycyxpPWUuY29tcG9uZW50U3R5bGUsYT1lLmRlZmF1bHRQcm9wcyxjPWUuZm9sZGVkQ29tcG9uZW50SWRzLGQ9ZS5zaG91bGRGb3J3YXJkUHJvcCxoPWUuc3R5bGVkQ29tcG9uZW50SWQscD1lLnRhcmdldDtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZsKGgpO3ZhciBmPWZ1bmN0aW9uKGUsdCxuKXt2b2lkIDA9PT1lJiYoZT1FKTt2YXIgcj12KHt9LHQse3RoZW1lOmV9KSxvPXt9O3JldHVybiBuLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0LG4scyxpPWU7Zm9yKHQgaW4gYihpKSYmKGk9aShyKSksaSlyW3RdPW9bdF09XCJjbGFzc05hbWVcIj09PXQ/KG49b1t0XSxzPWlbdF0sbiYmcz9uK1wiIFwiK3M6bnx8cyk6aVt0XX0pKSxbcixvXX0oT2UodCxzKHplKSxhKXx8RSx0LG8pLHk9ZlswXSxnPWZbMV0sUz1mdW5jdGlvbihlLHQsbixyKXt2YXIgbz1mZSgpLHM9bWUoKSxpPXQ/ZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhFLG8scyk6ZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyhuLG8scyk7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbChpKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYhdCYmciYmcihpKSxpfShpLHIseSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP2Uud2FyblRvb01hbnlDbGFzc2VzOnZvaWQgMCksdz1uLF89Zy4kYXN8fHQuJGFzfHxnLmFzfHx0LmFzfHxwLE49a2UoXyksQT1nIT09dD92KHt9LHQse30sZyk6dCxDPXt9O2Zvcih2YXIgSSBpbiBBKVwiJFwiIT09SVswXSYmXCJhc1wiIT09SSYmKFwiZm9yd2FyZGVkQXNcIj09PUk/Qy5hcz1BW0ldOihkP2QoSSxtKTohTnx8bShJKSkmJihDW0ldPUFbSV0pKTtyZXR1cm4gdC5zdHlsZSYmZy5zdHlsZSE9PXQuc3R5bGUmJihDLnN0eWxlPXYoe30sdC5zdHlsZSx7fSxnLnN0eWxlKSksQy5jbGFzc05hbWU9QXJyYXkucHJvdG90eXBlLmNvbmNhdChjLGgsUyE9PWg/UzpudWxsLHQuY2xhc3NOYW1lLGcuY2xhc3NOYW1lKS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIiksQy5yZWY9dyx1KF8sQyl9KEMsZSx0LFApfTtyZXR1cm4gTy5kaXNwbGF5TmFtZT1mLChDPXIuZm9yd2FyZFJlZihPKSkuYXR0cnM9UyxDLmNvbXBvbmVudFN0eWxlPUksQy5kaXNwbGF5TmFtZT1mLEMuc2hvdWxkRm9yd2FyZFByb3A9QSxDLmZvbGRlZENvbXBvbmVudElkcz1vP0FycmF5LnByb3RvdHlwZS5jb25jYXQoZS5mb2xkZWRDb21wb25lbnRJZHMsZS5zdHlsZWRDb21wb25lbnRJZCk6dyxDLnN0eWxlZENvbXBvbmVudElkPWcsQy50YXJnZXQ9bz9lLnRhcmdldDplLEMud2l0aENvbXBvbmVudD1mdW5jdGlvbihlKXt2YXIgcj10LmNvbXBvbmVudElkLG89ZnVuY3Rpb24oZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciBuLHIsbz17fSxzPU9iamVjdC5rZXlzKGUpO2ZvcihyPTA7cjxzLmxlbmd0aDtyKyspbj1zW3JdLHQuaW5kZXhPZihuKT49MHx8KG9bbl09ZVtuXSk7cmV0dXJuIG99KHQsW1wiY29tcG9uZW50SWRcIl0pLHM9ciYmcitcIi1cIisoa2UoZSk/ZTpqZShfKGUpKSk7cmV0dXJuIFllKGUsdih7fSxvLHthdHRyczpTLGNvbXBvbmVudElkOnN9KSxuKX0sT2JqZWN0LmRlZmluZVByb3BlcnR5KEMsXCJkZWZhdWx0UHJvcHNcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2ZvbGRlZERlZmF1bHRQcm9wc30sc2V0OmZ1bmN0aW9uKHQpe3RoaXMuX2ZvbGRlZERlZmF1bHRQcm9wcz1vP01lKHt9LGUuZGVmYXVsdFByb3BzLHQpOnR9fSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKFBlKGYsZyksQy53YXJuVG9vTWFueUNsYXNzZXM9ZnVuY3Rpb24oZSx0KXt2YXIgbj17fSxyPSExO3JldHVybiBmdW5jdGlvbihvKXtpZighciYmKG5bb109ITAsT2JqZWN0LmtleXMobikubGVuZ3RoPj0yMDApKXt2YXIgcz10Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiO2NvbnNvbGUud2FybihcIk92ZXIgMjAwIGNsYXNzZXMgd2VyZSBnZW5lcmF0ZWQgZm9yIGNvbXBvbmVudCBcIitlK3MrXCIuXFxuQ29uc2lkZXIgdXNpbmcgdGhlIGF0dHJzIG1ldGhvZCwgdG9nZXRoZXIgd2l0aCBhIHN0eWxlIG9iamVjdCBmb3IgZnJlcXVlbnRseSBjaGFuZ2VkIHN0eWxlcy5cXG5FeGFtcGxlOlxcbiAgY29uc3QgQ29tcG9uZW50ID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xcbiAgICBzdHlsZToge1xcbiAgICAgIGJhY2tncm91bmQ6IHByb3BzLmJhY2tncm91bmQsXFxuICAgIH0sXFxuICB9KSlgd2lkdGg6IDEwMCU7YFxcblxcbiAgPENvbXBvbmVudCAvPlwiKSxyPSEwLG49e319fX0oZixnKSksQy50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiLlwiK0Muc3R5bGVkQ29tcG9uZW50SWR9LGkmJnkoQyxlLHthdHRyczohMCxjb21wb25lbnRTdHlsZTohMCxkaXNwbGF5TmFtZTohMCxmb2xkZWRDb21wb25lbnRJZHM6ITAsc2hvdWxkRm9yd2FyZFByb3A6ITAsc3R5bGVkQ29tcG9uZW50SWQ6ITAsdGFyZ2V0OiEwLHdpdGhDb21wb25lbnQ6ITB9KSxDfXZhciBxZT1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24gZSh0LHIsbyl7aWYodm9pZCAwPT09byYmKG89RSksIW4ocikpcmV0dXJuIGooMSxTdHJpbmcocikpO3ZhciBzPWZ1bmN0aW9uKCl7cmV0dXJuIHQocixvLEFlLmFwcGx5KHZvaWQgMCxhcmd1bWVudHMpKX07cmV0dXJuIHMud2l0aENvbmZpZz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHt9LG4pKX0scy5hdHRycz1mdW5jdGlvbihuKXtyZXR1cm4gZSh0LHIsdih7fSxvLHthdHRyczpBcnJheS5wcm90b3R5cGUuY29uY2F0KG8uYXR0cnMsbikuZmlsdGVyKEJvb2xlYW4pfSkpfSxzfShZZSxlKX07W1wiYVwiLFwiYWJiclwiLFwiYWRkcmVzc1wiLFwiYXJlYVwiLFwiYXJ0aWNsZVwiLFwiYXNpZGVcIixcImF1ZGlvXCIsXCJiXCIsXCJiYXNlXCIsXCJiZGlcIixcImJkb1wiLFwiYmlnXCIsXCJibG9ja3F1b3RlXCIsXCJib2R5XCIsXCJiclwiLFwiYnV0dG9uXCIsXCJjYW52YXNcIixcImNhcHRpb25cIixcImNpdGVcIixcImNvZGVcIixcImNvbFwiLFwiY29sZ3JvdXBcIixcImRhdGFcIixcImRhdGFsaXN0XCIsXCJkZFwiLFwiZGVsXCIsXCJkZXRhaWxzXCIsXCJkZm5cIixcImRpYWxvZ1wiLFwiZGl2XCIsXCJkbFwiLFwiZHRcIixcImVtXCIsXCJlbWJlZFwiLFwiZmllbGRzZXRcIixcImZpZ2NhcHRpb25cIixcImZpZ3VyZVwiLFwiZm9vdGVyXCIsXCJmb3JtXCIsXCJoMVwiLFwiaDJcIixcImgzXCIsXCJoNFwiLFwiaDVcIixcImg2XCIsXCJoZWFkXCIsXCJoZWFkZXJcIixcImhncm91cFwiLFwiaHJcIixcImh0bWxcIixcImlcIixcImlmcmFtZVwiLFwiaW1nXCIsXCJpbnB1dFwiLFwiaW5zXCIsXCJrYmRcIixcImtleWdlblwiLFwibGFiZWxcIixcImxlZ2VuZFwiLFwibGlcIixcImxpbmtcIixcIm1haW5cIixcIm1hcFwiLFwibWFya1wiLFwibWFycXVlZVwiLFwibWVudVwiLFwibWVudWl0ZW1cIixcIm1ldGFcIixcIm1ldGVyXCIsXCJuYXZcIixcIm5vc2NyaXB0XCIsXCJvYmplY3RcIixcIm9sXCIsXCJvcHRncm91cFwiLFwib3B0aW9uXCIsXCJvdXRwdXRcIixcInBcIixcInBhcmFtXCIsXCJwaWN0dXJlXCIsXCJwcmVcIixcInByb2dyZXNzXCIsXCJxXCIsXCJycFwiLFwicnRcIixcInJ1YnlcIixcInNcIixcInNhbXBcIixcInNjcmlwdFwiLFwic2VjdGlvblwiLFwic2VsZWN0XCIsXCJzbWFsbFwiLFwic291cmNlXCIsXCJzcGFuXCIsXCJzdHJvbmdcIixcInN0eWxlXCIsXCJzdWJcIixcInN1bW1hcnlcIixcInN1cFwiLFwidGFibGVcIixcInRib2R5XCIsXCJ0ZFwiLFwidGV4dGFyZWFcIixcInRmb290XCIsXCJ0aFwiLFwidGhlYWRcIixcInRpbWVcIixcInRpdGxlXCIsXCJ0clwiLFwidHJhY2tcIixcInVcIixcInVsXCIsXCJ2YXJcIixcInZpZGVvXCIsXCJ3YnJcIixcImNpcmNsZVwiLFwiY2xpcFBhdGhcIixcImRlZnNcIixcImVsbGlwc2VcIixcImZvcmVpZ25PYmplY3RcIixcImdcIixcImltYWdlXCIsXCJsaW5lXCIsXCJsaW5lYXJHcmFkaWVudFwiLFwibWFya2VyXCIsXCJtYXNrXCIsXCJwYXRoXCIsXCJwYXR0ZXJuXCIsXCJwb2x5Z29uXCIsXCJwb2x5bGluZVwiLFwicmFkaWFsR3JhZGllbnRcIixcInJlY3RcIixcInN0b3BcIixcInN2Z1wiLFwidGV4dFwiLFwidHNwYW5cIl0uZm9yRWFjaCgoZnVuY3Rpb24oZSl7cWVbZV09cWUoZSl9KSk7dmFyIEhlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3RoaXMucnVsZXM9ZSx0aGlzLmNvbXBvbmVudElkPXQsdGhpcy5pc1N0YXRpYz1yZShlKSxaLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCsxKX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jcmVhdGVTdHlsZXM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89cihOZSh0aGlzLnJ1bGVzLHQsbixyKS5qb2luKFwiXCIpLFwiXCIpLHM9dGhpcy5jb21wb25lbnRJZCtlO24uaW5zZXJ0UnVsZXMocyxzLG8pfSx0LnJlbW92ZVN0eWxlcz1mdW5jdGlvbihlLHQpe3QuY2xlYXJSdWxlcyh0aGlzLmNvbXBvbmVudElkK2UpfSx0LnJlbmRlclN0eWxlcz1mdW5jdGlvbihlLHQsbixyKXtlPjImJloucmVnaXN0ZXJJZCh0aGlzLmNvbXBvbmVudElkK2UpLHRoaXMucmVtb3ZlU3R5bGVzKGUsbiksdGhpcy5jcmVhdGVTdHlsZXMoZSx0LG4scil9LGV9KCk7ZnVuY3Rpb24gJGUoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxvPTE7bzx0O28rKyluW28tMV09YXJndW1lbnRzW29dO3ZhciBpPUFlLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KG4pKSxhPVwic2MtZ2xvYmFsLVwiK1RlKEpTT04uc3RyaW5naWZ5KGkpKSx1PW5ldyBIZShpLGEpO2Z1bmN0aW9uIGwoZSl7dmFyIHQ9ZmUoKSxuPW1lKCksbz1zKHplKSxsPWModC5hbGxvY2F0ZUdTSW5zdGFuY2UoYSkpLmN1cnJlbnQ7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmci5DaGlsZHJlbi5jb3VudChlLmNoaWxkcmVuKSYmY29uc29sZS53YXJuKFwiVGhlIGdsb2JhbCBzdHlsZSBjb21wb25lbnQgXCIrYStcIiB3YXMgZ2l2ZW4gY2hpbGQgSlNYLiBjcmVhdGVHbG9iYWxTdHlsZSBkb2VzIG5vdCByZW5kZXIgY2hpbGRyZW4uXCIpLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmkuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJi0xIT09ZS5pbmRleE9mKFwiQGltcG9ydFwiKX0pKSYmY29uc29sZS53YXJuKFwiUGxlYXNlIGRvIG5vdCB1c2UgQGltcG9ydCBDU1Mgc3ludGF4IGluIGNyZWF0ZUdsb2JhbFN0eWxlIGF0IHRoaXMgdGltZSwgYXMgdGhlIENTU09NIEFQSXMgd2UgdXNlIGluIHByb2R1Y3Rpb24gZG8gbm90IGhhbmRsZSBpdCB3ZWxsLiBJbnN0ZWFkLCB3ZSByZWNvbW1lbmQgdXNpbmcgYSBsaWJyYXJ5IHN1Y2ggYXMgcmVhY3QtaGVsbWV0IHRvIGluamVjdCBhIHR5cGljYWwgPGxpbms+IG1ldGEgdGFnIHRvIHRoZSBzdHlsZXNoZWV0LCBvciBzaW1wbHkgZW1iZWRkaW5nIGl0IG1hbnVhbGx5IGluIHlvdXIgaW5kZXguaHRtbCA8aGVhZD4gc2VjdGlvbiBmb3IgYSBzaW1wbGVyIGFwcC5cIiksZCgoZnVuY3Rpb24oKXtyZXR1cm4gaChsLGUsdCxvLG4pLGZ1bmN0aW9uKCl7cmV0dXJuIHUucmVtb3ZlU3R5bGVzKGwsdCl9fSksW2wsZSx0LG8sbl0pLG51bGx9ZnVuY3Rpb24gaChlLHQsbixyLG8pe2lmKHUuaXNTdGF0aWMpdS5yZW5kZXJTdHlsZXMoZSxPLG4sbyk7ZWxzZXt2YXIgcz12KHt9LHQse3RoZW1lOk9lKHQscixsLmRlZmF1bHRQcm9wcyl9KTt1LnJlbmRlclN0eWxlcyhlLHMsbixvKX19cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmUGUoYSksci5tZW1vKGwpfWZ1bmN0aW9uIFdlKGUpe1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0JiZjb25zb2xlLndhcm4oXCJga2V5ZnJhbWVzYCBjYW5ub3QgYmUgdXNlZCBvbiBSZWFjdE5hdGl2ZSwgb25seSBvbiB0aGUgd2ViLiBUbyBkbyBhbmltYXRpb24gaW4gUmVhY3ROYXRpdmUgcGxlYXNlIHVzZSBBbmltYXRlZC5cIik7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3ZhciBvPUFlLmFwcGx5KHZvaWQgMCxbZV0uY29uY2F0KG4pKS5qb2luKFwiXCIpLHM9VGUobyk7cmV0dXJuIG5ldyB2ZShzLG8pfXZhciBVZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt2YXIgZT10aGlzO3RoaXMuX2VtaXRTaGVldENTUz1mdW5jdGlvbigpe3ZhciB0PWUuaW5zdGFuY2UudG9TdHJpbmcoKSxuPXEoKTtyZXR1cm5cIjxzdHlsZSBcIitbbiYmJ25vbmNlPVwiJytuKydcIicsQSsnPVwidHJ1ZVwiJywnZGF0YS1zdHlsZWQtdmVyc2lvbj1cIjUuMi4xXCInXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIikrXCI+XCIrdCtcIjwvc3R5bGU+XCJ9LHRoaXMuZ2V0U3R5bGVUYWdzPWZ1bmN0aW9uKCl7cmV0dXJuIGUuc2VhbGVkP2ooMik6ZS5fZW1pdFNoZWV0Q1NTKCl9LHRoaXMuZ2V0U3R5bGVFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIHQ7aWYoZS5zZWFsZWQpcmV0dXJuIGooMik7dmFyIG49KCh0PXt9KVtBXT1cIlwiLHRbXCJkYXRhLXN0eWxlZC12ZXJzaW9uXCJdPVwiNS4yLjFcIix0LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtfX2h0bWw6ZS5pbnN0YW5jZS50b1N0cmluZygpfSx0KSxvPXEoKTtyZXR1cm4gbyYmKG4ubm9uY2U9byksW3IuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsdih7fSxuLHtrZXk6XCJzYy0wLTBcIn0pKV19LHRoaXMuc2VhbD1mdW5jdGlvbigpe2Uuc2VhbGVkPSEwfSx0aGlzLmluc3RhbmNlPW5ldyBaKHtpc1NlcnZlcjohMH0pLHRoaXMuc2VhbGVkPSExfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LmNvbGxlY3RTdHlsZXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuc2VhbGVkP2ooMik6ci5jcmVhdGVFbGVtZW50KHllLHtzaGVldDp0aGlzLmluc3RhbmNlfSxlKX0sdC5pbnRlcmxlYXZlV2l0aE5vZGVTdHJlYW09ZnVuY3Rpb24oZSl7cmV0dXJuIGooMyl9LGV9KCksSmU9ZnVuY3Rpb24oZSl7dmFyIHQ9ci5mb3J3YXJkUmVmKChmdW5jdGlvbih0LG4pe3ZhciBvPXMoemUpLGk9ZS5kZWZhdWx0UHJvcHMsYT1PZSh0LG8saSk7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmdm9pZCAwPT09YSYmY29uc29sZS53YXJuKCdbd2l0aFRoZW1lXSBZb3UgYXJlIG5vdCB1c2luZyBhIFRoZW1lUHJvdmlkZXIgbm9yIHBhc3NpbmcgYSB0aGVtZSBwcm9wIG9yIGEgdGhlbWUgaW4gZGVmYXVsdFByb3BzIGluIGNvbXBvbmVudCBjbGFzcyBcIicrXyhlKSsnXCInKSxyLmNyZWF0ZUVsZW1lbnQoZSx2KHt9LHQse3RoZW1lOmEscmVmOm59KSl9KSk7cmV0dXJuIHkodCxlKSx0LmRpc3BsYXlOYW1lPVwiV2l0aFRoZW1lKFwiK18oZSkrXCIpXCIsdH0sWGU9ZnVuY3Rpb24oKXtyZXR1cm4gcyh6ZSl9LFplPXtTdHlsZVNoZWV0OlosbWFzdGVyU2hlZXQ6aGV9O1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0JiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHlvdSd2ZSBpbXBvcnRlZCAnc3R5bGVkLWNvbXBvbmVudHMnIG9uIFJlYWN0IE5hdGl2ZS5cXG5QZXJoYXBzIHlvdSdyZSBsb29raW5nIHRvIGltcG9ydCAnc3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlJz9cXG5SZWFkIG1vcmUgYWJvdXQgdGhpcyBhdCBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9iYXNpY3MjcmVhY3QtbmF0aXZlXCIpLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidGVzdFwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJih3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXT13aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXXx8MCwxPT09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl0mJmNvbnNvbGUud2FybihcIkl0IGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mICdzdHlsZWQtY29tcG9uZW50cycgaW5pdGlhbGl6ZWQgaW4gdGhpcyBhcHBsaWNhdGlvbi4gVGhpcyBtYXkgY2F1c2UgZHluYW1pYyBzdHlsZXMgdG8gbm90IHJlbmRlciBwcm9wZXJseSwgZXJyb3JzIGR1cmluZyB0aGUgcmVoeWRyYXRpb24gcHJvY2VzcywgYSBtaXNzaW5nIHRoZW1lIHByb3AsIGFuZCBtYWtlcyB5b3VyIGFwcGxpY2F0aW9uIGJpZ2dlciB3aXRob3V0IGdvb2QgcmVhc29uLlxcblxcblNlZSBodHRwczovL3MtYy5zaC8yQkFYemVkIGZvciBtb3JlIGluZm8uXCIpLHdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdKz0xKTtleHBvcnQgZGVmYXVsdCBxZTtleHBvcnR7VWUgYXMgU2VydmVyU3R5bGVTaGVldCxsZSBhcyBTdHlsZVNoZWV0Q29uc3VtZXIsdWUgYXMgU3R5bGVTaGVldENvbnRleHQseWUgYXMgU3R5bGVTaGVldE1hbmFnZXIsTGUgYXMgVGhlbWVDb25zdW1lcix6ZSBhcyBUaGVtZUNvbnRleHQsR2UgYXMgVGhlbWVQcm92aWRlcixaZSBhcyBfX1BSSVZBVEVfXywkZSBhcyBjcmVhdGVHbG9iYWxTdHlsZSxBZSBhcyBjc3MsTiBhcyBpc1N0eWxlZENvbXBvbmVudCxXZSBhcyBrZXlmcmFtZXMsWGUgYXMgdXNlVGhlbWUsQyBhcyB2ZXJzaW9uLEplIGFzIHdpdGhUaGVtZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcy5tYXBcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgcmVxdWlyZWRDbGFzczogXCJiZy1ibHVlLTEwMFwiLFxuICByZXF1aXJlZENvbG9yOiBcIiNEQkVBRkVcIixcbn07XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uUHJvdmlkZXJUeXBlIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdGlvblByb3ZpZGVyIHtcbiAgcHJpdmF0ZSBzdGF0aWMgaGFuZGxlcjogQ29ubmVjdGlvblByb3ZpZGVyVHlwZTtcblxuICBwdWJsaWMgc3RhdGljIGluaXQoaGFuZGxlcjogQ29ubmVjdGlvblByb3ZpZGVyVHlwZSk6IHZvaWQge1xuICAgIENvbm5lY3Rpb25Qcm92aWRlci5oYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SGFuZGxlcigpOiBDb25uZWN0aW9uUHJvdmlkZXJUeXBlIHtcbiAgICBpZiAoIUNvbm5lY3Rpb25Qcm92aWRlci5oYW5kbGVyKSB7XG4gICAgICB0aHJvdyAnTXVzdCBjYWxsIGluaXQoKSBmaXJzdCB3aXRoIGEgdmFsaWQgQ29ubmVjdGlvblByb3ZpZGVyIGluc3RhbmNlJztcbiAgICB9XG4gICAgcmV0dXJuIENvbm5lY3Rpb25Qcm92aWRlci5oYW5kbGVyO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBGaWVsZCBhcyBGaWVsZE9vdWksIExhYmVsIGFzIExhYmVsT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0xhYmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpZWxkKHtcbiAgb291aSxcbiAgY2hpbGRyZW4sXG4gIGxheW91dCA9IFwiaG9yaXpvbnRhbFwiLFxuICB2YWx1ZVByb3BOYW1lLFxuICBzaG93TGFiZWwgPSBmYWxzZSxcbiAgYWxpZ25MYWJlbCA9IFwibGVmdFwiLFxufToge1xuICBvb3VpOiBGaWVsZE9vdWk7XG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xuICBsYXlvdXQ/OiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIjtcbiAgdmFsdWVQcm9wTmFtZT86IHN0cmluZztcbiAgc2hvd0xhYmVsPzogYm9vbGVhbjtcbiAgYWxpZ25MYWJlbD86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcbn0pIHtcbiAgY29uc3QgeyBpZCwgbGFiZWwsIHRvb2x0aXAgfSA9IG9vdWk7XG5cbiAgY29uc3QgZm9ybUl0ZW0gPSAoKSA9PiAoXG4gICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJtYi0wXCIgbmFtZT17aWR9IHZhbHVlUHJvcE5hbWU9e3ZhbHVlUHJvcE5hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRm9ybS5JdGVtPlxuICApO1xuXG4gIGlmICghc2hvd0xhYmVsKSB7XG4gICAgcmV0dXJuIGZvcm1JdGVtKCk7XG4gIH1cblxuICBjb25zdCBsYWJlbFdpZGdldCA9IChcbiAgICA8TGFiZWxcbiAgICAgIG9vdWk9e1xuICAgICAgICBuZXcgTGFiZWxPb3VpKHtcbiAgICAgICAgICBuYW1lOiBpZCArIFwiX2xhYmVsXCIsXG4gICAgICAgICAgc3RyaW5nOiBsYWJlbCxcbiAgICAgICAgICBoZWxwOiB0b29sdGlwLFxuICAgICAgICAgIGZpZWxkRm9yTGFiZWw6IGlkLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgYWxpZ249e2FsaWduTGFiZWx9XG4gICAgLz5cbiAgKTtcblxuICBjb25zdCBob3Jpem9udGFsTW9kZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdyBhbGlnbj1cIm1pZGRsZVwiIGNsYXNzTmFtZT1cInBiLTEgcHQtMVwiPlxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1sLTJcIiBmbGV4PVwiN3JlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmRcIj57bGFiZWxXaWRnZXR9PC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIGZsZXg9XCJhdXRvXCI+e2Zvcm1JdGVtKCl9PC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IHZlcnRpY2FsTW9kZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2xhYmVsV2lkZ2V0fVxuICAgICAgICB7Zm9ybUl0ZW0oKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIGxheW91dCA9PT0gXCJob3Jpem9udGFsXCIgPyBob3Jpem9udGFsTW9kZSgpIDogdmVydGljYWxNb2RlKCk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBTdHJpbmdzIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IHR5cGUgTG9jYWxlc0NvbnRleHRUeXBlID0ge1xuICBnZXRTdHJpbmc6IChrZXk6IHN0cmluZykgPT4gc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IExvY2FsZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxMb2NhbGVzQ29udGV4dFR5cGUgfCBudWxsPihcbiAgbnVsbFxuKTtcblxuY29uc3QgTG9jYWxlc1Byb3ZpZGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIHN0cmluZ3M6IHN0cmluZ3NQcm9wLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBzdHJpbmdzOiBTdHJpbmdzO1xufSk6IGFueSA9PiB7XG4gIGNvbnN0IFtzdHJpbmdzLCBzZXRTdHJpbmdzXSA9IHVzZVN0YXRlPFN0cmluZ3M+KHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0cmluZ3Moc3RyaW5nc1Byb3ApO1xuICB9LCBbc3RyaW5nc1Byb3BdKTtcblxuICBjb25zdCBnZXRTdHJpbmcgPSAoa2V5OiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gZ2V0TG9jYWxpemVkU3RyaW5nKGtleSwgc3RyaW5ncyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TG9jYWxlc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGdldFN0cmluZyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTG9jYWxlc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhbGVzUHJvdmlkZXI7XG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhbGl6ZWRTdHJpbmcgPSAoa2V5OiBzdHJpbmcsIHN0cmluZ3M6IFN0cmluZ3MpID0+IHtcbiAgY29uc3QgbG9jYWxpemVkID0gc3RyaW5nc1trZXldO1xuICBpZiAobG9jYWxpemVkKSByZXR1cm4gbG9jYWxpemVkO1xuICBlbHNlIHJldHVybiBrZXk7XG59O1xuIiwiaW1wb3J0IHsgV2lkZ2V0LCBGaWVsZCwgTGFiZWwsIEJ1dHRvbiwgVGV4dCB9IGZyb20gXCJvb3VpXCI7XG5cbmNvbnN0IGNsb25lID0gZnVuY3Rpb24gY2xvbmU8VD4oaW5zdGFuY2U6IFQpOiBUIHtcbiAgY29uc3QgY29weSA9IG5ldyAoKGluc3RhbmNlIGFzIGFueSkuY29uc3RydWN0b3IgYXMgeyBuZXcgKCk6IFQgfSkoKTtcbiAgT2JqZWN0LmFzc2lnbihjb3B5LCBpbnN0YW5jZSk7XG4gIHJldHVybiBjb3B5O1xufTtcblxuY29uc3QgZ2V0U3BhblN0eWxlRm9ySXRlbSA9ICh7XG4gIGl0ZW0sXG4gIHJlc3BvbnNpdmVCZWhhdmlvdXIsXG59OiB7XG4gIGl0ZW06IFdpZGdldDtcbiAgcmVzcG9uc2l2ZUJlaGF2aW91cjogYm9vbGVhbjtcbn0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBncmlkQ29sdW1uU3RhcnQ6IFwic3BhbiBcIiArIChyZXNwb25zaXZlQmVoYXZpb3VyID8gMSA6IGl0ZW0uY29sc3BhbiksXG4gIH07XG59O1xuXG5jb25zdCBmaWxsUm93V2l0aEVtcHRpZXNUb0ZpdCA9ICh7XG4gIHJvdyxcbiAgbXVzdEZpbGxXaXRoRW1wdGllcyxcbiAgbnVtYmVyT2ZDb2x1bW5zLFxufToge1xuICByb3c6IGFueTtcbiAgbXVzdEZpbGxXaXRoRW1wdGllczogYm9vbGVhbjtcbiAgbnVtYmVyT2ZDb2x1bW5zOiBudW1iZXI7XG59KSA9PiB7XG4gIGNvbnN0IHJvd1dpdGhFbXB0aWVzVG9GaXQ6IGFueSA9IFtdO1xuICBsZXQgdG90YWxDb2xTcGFuID0gMDtcblxuICByb3cubWFwKChpdGVtOiBXaWRnZXQsIGNvbHVtbkluZGV4OiBudW1iZXIpID0+IHtcbiAgICB0b3RhbENvbFNwYW4gKz0gaXRlbS5jb2xzcGFuO1xuICAgIHJvd1dpdGhFbXB0aWVzVG9GaXQucHVzaChpdGVtKTtcblxuICAgIGlmIChcbiAgICAgIGNvbHVtbkluZGV4ICsgMSA9PT0gcm93Lmxlbmd0aCAmJlxuICAgICAgdG90YWxDb2xTcGFuIDwgbnVtYmVyT2ZDb2x1bW5zICYmXG4gICAgICAhbXVzdEZpbGxXaXRoRW1wdGllc1xuICAgICkge1xuICAgICAgY29uc3QgZ2Fwc1RvRmlsbCA9IG51bWJlck9mQ29sdW1ucyAtIHRvdGFsQ29sU3BhbjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2Fwc1RvRmlsbDsgaSArPSAxKSB7XG4gICAgICAgIHJvd1dpdGhFbXB0aWVzVG9GaXQucHVzaChuZXcgTGFiZWwoeyBzdHJpbmc6IFwiXCIgfSkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJvd1dpdGhFbXB0aWVzVG9GaXQ7XG59O1xuXG5jb25zdCBnZXRUZW1wbGF0ZUNvbHVtbnMgPSAoY29sdW1uczogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IG9kZCA9IFwiMWZyXCI7XG4gIGNvbnN0IGV2ZW4gPSBcImF1dG9cIjtcbiAgbGV0IHRlbXBsYXRlQ29sdW1ucyA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uczsgaSsrKSB7XG4gICAgdGVtcGxhdGVDb2x1bW5zICs9IGkgJSAyID8gb2RkIDogZXZlbjtcbiAgICBpZiAoaSA8IGNvbHVtbnMpIHtcbiAgICAgIHRlbXBsYXRlQ29sdW1ucyArPSBcIiBcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlQ29sdW1ucztcbn07XG5cbmV4cG9ydCB7IGdldFRlbXBsYXRlQ29sdW1ucywgZmlsbFJvd1dpdGhFbXB0aWVzVG9GaXQsIGdldFNwYW5TdHlsZUZvckl0ZW0gfTtcbiIsImNvbnN0IGNvbnZlcnRCb29sZWFuUGFyYW1JZk5lZWRlZCA9ICh2YWx1ZTogYW55KSA9PiB7XG4gIGlmICgodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlID09PSBcInRydWVcIikgfHwgdmFsdWUgPT09IFwiZmFsc2VcIikge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gXCJ0cnVlXCI7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuY29uc3QgZ2V0UGFyYW1zRm9yRmllbGRzID0gKHZhbHVlczogYW55LCBmaWVsZHM6IGFueSkgPT4ge1xuICBjb25zdCBmaWx0ZXJlZFZhbHVlcyA9IHJlbW92ZVVuZGVmaW5lZEZpZWxkcyh2YWx1ZXMpO1xuICBjb25zdCBncm91cGVkRGF0ZVRpbWUgPSBncm91cERhdGVUaW1lVmFsdWVzSWZOZWVkZWQoZmlsdGVyZWRWYWx1ZXMpO1xuICBjb25zdCBncm91cGVkVmFsdWVzID0gdW5ncm91cERhdGVWYWx1ZXNJZk5lZWRlZChncm91cGVkRGF0ZVRpbWUsIGZpZWxkcyk7XG5cbiAgY29uc3QgcGFyYW1zID0gW1xuICAgIC4uLk9iamVjdC5rZXlzKGdyb3VwZWRWYWx1ZXMpLm1hcCgoa2V5KSA9PiB7XG4gICAgICByZXR1cm4gZ2V0UGFyYW1Gb3JGaWVsZChrZXksIGdyb3VwZWRWYWx1ZXNba2V5XSwgZmllbGRzKTtcbiAgICB9KSxcbiAgXTtcblxuICAvLyBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIGluIGNhc2Ugb2YgZGF0ZXRpbWUgd2UgcmVjZWl2ZSBhbiBhcnJheSBvZiBhcnJheXNcbiAgcmV0dXJuIHBhcmFtcy5yZWR1Y2UoKGFjYywgY3VyVmFsKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VyVmFsWzBdKSkge1xuICAgICAgcmV0dXJuIGFjYy5jb25jYXQoY3VyVmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIFsuLi5hY2MsIGN1clZhbF07XG4gIH0sIFtdKTtcbn07XG5cbmNvbnN0IGdldFBhcmFtRm9yRmllbGQgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIGZpZWxkczogYW55KSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkS2V5ID0ga2V5LnNwbGl0KFwiI1wiKVswXTtcbiAgY29uc3QgdHlwZSA9IGZpZWxkc1tmaWx0ZXJlZEtleV0udHlwZTtcblxuICBpZiAoXG4gICAgdHlwZSA9PT0gXCJjaGFyXCIgfHxcbiAgICB0eXBlID09PSBcInRleHRcIiB8fFxuICAgIHR5cGUgPT09IFwibWFueTJvbmVcIiB8fFxuICAgIHR5cGUgPT09IFwibWFueTJtYW55XCIgfHxcbiAgICB0eXBlID09PSBcIm9uZTJtYW55XCJcbiAgKSB7XG4gICAgcmV0dXJuIFtrZXksIFwiaWxpa2VcIiwgdmFsdWVdO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGUgPT09IFwiZmxvYXRcIiB8fFxuICAgIHR5cGUgPT09IFwiaW50ZWdlclwiIHx8XG4gICAgdHlwZSA9PT0gXCJmbG9hdF90aW1lXCIgfHxcbiAgICB0eXBlID09PSBcInByb2dyZXNzYmFyXCJcbiAgKSB7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSBrZXkuaW5kZXhPZihcIiNmcm9tXCIpICE9PSAtMSA/IFwiPj1cIiA6IFwiPD1cIjtcbiAgICByZXR1cm4gW2ZpbHRlcmVkS2V5LCBvcGVyYXRvciwgdmFsdWVdO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZGF0ZVwiKSB7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSBrZXkuaW5kZXhPZihcIiNmcm9tXCIpICE9PSAtMSA/IFwiPj1cIiA6IFwiPD1cIjtcbiAgICByZXR1cm4gW2ZpbHRlcmVkS2V5LCBvcGVyYXRvciwgdmFsdWUuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKV07XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJkYXRldGltZVwiKSB7XG4gICAgY29uc3QgZnJvbSA9IHZhbHVlWzBdO1xuICAgIGNvbnN0IHRvID0gdmFsdWVbMV07XG4gICAgcmV0dXJuIFtcbiAgICAgIFtmaWx0ZXJlZEtleSwgXCI+PVwiLCBmcm9tXSxcbiAgICAgIFtmaWx0ZXJlZEtleSwgXCI8PVwiLCB0b10sXG4gICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW2tleSwgXCI9XCIsIGNvbnZlcnRCb29sZWFuUGFyYW1JZk5lZWRlZCh2YWx1ZSldO1xuICB9XG59O1xuXG5jb25zdCBnZXREYXRldGltZURhdGVGaWVsZHMgPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlcykuZmlsdGVyKChrZXkpID0+IHtcbiAgICByZXR1cm4ga2V5LmluZGV4T2YoXCIjZGF0ZVwiKSAhPT0gLTE7XG4gIH0pO1xufTtcblxuY29uc3QgcmVtb3ZlRGF0ZVRpbWVTaW5nbGVGaWVsZHMgPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgY29uc3QgbmV3VmFsdWVzID0geyAuLi52YWx1ZXMgfTtcbiAgT2JqZWN0LmtleXMobmV3VmFsdWVzKS5mb3JFYWNoKFxuICAgIChrZXkpID0+XG4gICAgICAoa2V5LmluZGV4T2YoXCIjdGltZVwiKSAhPT0gLTEgfHwga2V5LmluZGV4T2YoXCIjZGF0ZVwiKSAhPT0gLTEpICYmXG4gICAgICBkZWxldGUgbmV3VmFsdWVzW2tleV1cbiAgKTtcbiAgcmV0dXJuIG5ld1ZhbHVlcztcbn07XG5cbmNvbnN0IGdyb3VwRGF0ZVRpbWVWYWx1ZXNJZk5lZWRlZCA9ICh2YWx1ZXM6IGFueSkgPT4ge1xuICBjb25zdCBuZXdWYWx1ZXM6IGFueSA9IHsgLi4ucmVtb3ZlRGF0ZVRpbWVTaW5nbGVGaWVsZHModmFsdWVzKSB9O1xuXG4gIGNvbnN0IGRhdGV0aW1lRGF0ZUZpZWxkcyA9IGdldERhdGV0aW1lRGF0ZUZpZWxkcyh2YWx1ZXMpO1xuXG4gIGRhdGV0aW1lRGF0ZUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGNvbnN0IGRhdGVQYWlyID0gdmFsdWVzW2ZpZWxkXTtcbiAgICBjb25zdCBiYXNlS2V5ID0gZmllbGQuc3BsaXQoXCIjXCIpWzBdO1xuICAgIGNvbnN0IHRpbWVLZXkgPSBiYXNlS2V5ICsgXCIjdGltZVwiO1xuICAgIGNvbnN0IHRpbWVQYWlyID0gdmFsdWVzW3RpbWVLZXldO1xuICAgIGNvbnN0IGRhdGVWYWx1ZUZyb20gPSBkYXRlUGFpclswXS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgIGNvbnN0IGRhdGVWYWx1ZVRvID0gZGF0ZVBhaXJbMV0uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICBjb25zdCB0aW1lVmFsdWVGcm9tID0gdGltZVBhaXJbMF0uZm9ybWF0KFwiSEg6bW1cIik7XG4gICAgY29uc3QgdGltZVZhbHVlVG8gPSB0aW1lUGFpclsxXS5mb3JtYXQoXCJISDptbVwiKTtcbiAgICBjb25zdCBmcm9tID0gZGF0ZVZhbHVlRnJvbSArIFwiIFwiICsgdGltZVZhbHVlRnJvbTtcbiAgICBjb25zdCB0byA9IGRhdGVWYWx1ZVRvICsgXCIgXCIgKyB0aW1lVmFsdWVUbztcbiAgICBuZXdWYWx1ZXNbYmFzZUtleSArIFwiI2RhdGV0aW1lXCJdID0gW2Zyb20sIHRvXTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld1ZhbHVlcztcbn07XG5cbmNvbnN0IHVuZ3JvdXBEYXRlVmFsdWVzSWZOZWVkZWQgPSAodmFsdWVzOiBhbnksIGZpZWxkczogYW55KSA9PiB7XG4gIGNvbnN0IGRhdGVGaWVsZHMgPSBPYmplY3Qua2V5cyh2YWx1ZXMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgcmV0dXJuIGZpZWxkc1trZXldICYmIGZpZWxkc1trZXldLnR5cGUgPT09IFwiZGF0ZVwiO1xuICB9KTtcblxuICBsZXQgbmV3VmFsdWVzOiBhbnkgPSB7IC4uLnZhbHVlcyB9O1xuXG4gIGRhdGVGaWVsZHMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgZGVsZXRlIG5ld1ZhbHVlc1trZXldO1xuICAgIG5ld1ZhbHVlc1trZXkgKyBcIiNmcm9tXCJdID0gdmFsdWVzW2tleV1bMF07XG4gICAgbmV3VmFsdWVzW2tleSArIFwiI3RvXCJdID0gdmFsdWVzW2tleV1bMV07XG4gIH0pO1xuXG4gIHJldHVybiBuZXdWYWx1ZXM7XG59O1xuXG5jb25zdCByZW1vdmVVbmRlZmluZWRGaWVsZHMgPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgY29uc3QgbmV3VmFsdWVzID0geyAuLi52YWx1ZXMgfTtcbiAgT2JqZWN0LmtleXMobmV3VmFsdWVzKS5mb3JFYWNoKFxuICAgIChrZXkpID0+XG4gICAgICAobmV3VmFsdWVzW2tleV0gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICBuZXdWYWx1ZXNba2V5XSA9PT0gbnVsbCB8fFxuICAgICAgICBuZXdWYWx1ZXNba2V5XSA9PT0gXCJcIikgJiZcbiAgICAgIGRlbGV0ZSBuZXdWYWx1ZXNba2V5XVxuICApO1xuICByZXR1cm4gbmV3VmFsdWVzO1xufTtcblxuZXhwb3J0IHtcbiAgcmVtb3ZlVW5kZWZpbmVkRmllbGRzLFxuICBncm91cERhdGVUaW1lVmFsdWVzSWZOZWVkZWQsXG4gIGdldFBhcmFtc0ZvckZpZWxkcyxcbn07XG4iLCJpbXBvcnQgeyBUcmVlIGFzIFRyZWVPb3VpLCBTZWxlY3Rpb24sIE1hbnkyb25lLCBCb29sZWFuIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IFRyZWVWaWV3LCBDb2x1bW4gfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5jb25zdCBnZXRUcmVlID0gKHRyZWVWaWV3OiBUcmVlVmlldyk6IFRyZWVPb3VpID0+IHtcbiAgY29uc3QgeG1sID0gdHJlZVZpZXcuYXJjaDtcbiAgY29uc3QgZmllbGRzID0gdHJlZVZpZXcuZmllbGRzO1xuICBjb25zdCB0cmVlID0gbmV3IFRyZWVPb3VpKGZpZWxkcyk7XG4gIHRyZWUucGFyc2UoeG1sKTtcbiAgcmV0dXJuIHRyZWU7XG59O1xuXG5jb25zdCBnZXRUYWJsZUNvbHVtbnMgPSAoXG4gIHRyZWU6IFRyZWVPb3VpLFxuICBib29sZWFuQ29tcG9uZW50OiBhbnlcbik6IEFycmF5PENvbHVtbj4gPT4ge1xuICBjb25zdCB0YWJsZUNvbHVtbnMgPSB0cmVlLmNvbHVtbnMubWFwKChjb2x1bW4pID0+IHtcbiAgICBjb25zdCB0eXBlID0gY29sdW1uLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgY29uc3Qga2V5ID0gY29sdW1uLmlkO1xuICAgIGNvbnN0IHJlbmRlciA9XG4gICAgICB0eXBlID09PSBcIkJvb2xlYW5cIlxuICAgICAgICA/IChib29sZWFuRmllbGQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBib29sZWFuQ29tcG9uZW50KGJvb2xlYW5GaWVsZCk7XG4gICAgICAgICAgfVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiB7XG4gICAgICBrZXksXG4gICAgICBkYXRhSW5kZXg6IGtleSxcbiAgICAgIHRpdGxlOiBjb2x1bW4ubGFiZWwsXG4gICAgICB0eXBlLFxuICAgICAgcmVuZGVyLFxuICAgICAgc29ydGVyOiAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGFba2V5XSA8IGJba2V5XSkgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoYVtrZXldID4gYltrZXldKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9LFxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gdGFibGVDb2x1bW5zO1xufTtcblxuY29uc3QgZ2V0VGFibGVJdGVtcyA9ICh0cmVlT291aTogVHJlZU9vdWksIHJlc3VsdHM6IEFycmF5PGFueT4pOiBBcnJheTxhbnk+ID0+IHtcbiAgY29uc3QgdGFibGVJdGVtcyA9IHJlc3VsdHMubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICBjb25zdCBwYXJzZWRJdGVtOiBhbnkgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhpdGVtKS5tYXAoKGtleSkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gXCJpZFwiKSB7XG4gICAgICAgIHBhcnNlZEl0ZW1ba2V5XSA9IGl0ZW1ba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHdpZGdldCA9IHRyZWVPb3VpLmZpbmRCeUlkKGtleSk7XG5cbiAgICAgICAgaWYgKHdpZGdldCBpbnN0YW5jZW9mIFNlbGVjdGlvbikge1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpZGdldDtcbiAgICAgICAgICBwYXJzZWRJdGVtW2tleV0gPSBzZWxlY3Rpb24uc2VsZWN0aW9uVmFsdWVzLmdldChpdGVtW2tleV0pO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZGdldCBpbnN0YW5jZW9mIE1hbnkyb25lKSB7XG4gICAgICAgICAgcGFyc2VkSXRlbVtrZXldID0gaXRlbVtrZXldWzFdO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZGdldCBpbnN0YW5jZW9mIEJvb2xlYW4pIHtcbiAgICAgICAgICBwYXJzZWRJdGVtW2tleV0gPSBpdGVtW2tleV07XG4gICAgICAgIH0gZWxzZSBpZiAod2lkZ2V0KSB7XG4gICAgICAgICAgcGFyc2VkSXRlbVtrZXldID0gaXRlbVtrZXldID09PSBmYWxzZSA/IFwiXCIgOiBpdGVtW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFyc2VkSXRlbTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhYmxlSXRlbXM7XG59O1xuXG5leHBvcnQgeyBnZXRUYWJsZUNvbHVtbnMsIGdldFRhYmxlSXRlbXMsIGdldFRyZWUgfTtcbiIsImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9CdXR0b25cIjtcbmltcG9ydCB7IENoYXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvQ2hhclwiO1xuaW1wb3J0IHsgU2VsZWN0aW9uIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL1NlbGVjdGlvblwiO1xuaW1wb3J0IHsgQm9vbGVhbiB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9Cb29sZWFuXCI7XG5pbXBvcnQgeyBNYW55Mm9uZSB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9NYW55Mm9uZVwiO1xuaW1wb3J0IFRyZWUgZnJvbSBcIkAvd2lkZ2V0cy92aWV3cy9UcmVlXCI7XG5pbXBvcnQgeyBGbG9hdCB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9GbG9hdFwiO1xuaW1wb3J0IHsgSW50ZWdlciB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9JbnRlZ2VyXCI7XG5pbXBvcnQgR3JvdXAgZnJvbSBcIkAvd2lkZ2V0cy9jb250YWluZXJzL0dyb3VwXCI7XG5pbXBvcnQgTm90ZWJvb2sgZnJvbSBcIkAvd2lkZ2V0cy9jb250YWluZXJzL05vdGVib29rXCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiQC93aWRnZXRzL3ZpZXdzL0Zvcm1cIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvTGFiZWxcIjtcbmltcG9ydCBUZXh0IGZyb20gXCJAL3dpZGdldHMvYmFzZS9UZXh0XCI7XG5pbXBvcnQgeyBTZXBhcmF0b3IgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvU2VwYXJhdG9yXCI7XG5pbXBvcnQgU2VhcmNoRmlsdGVyIGZyb20gXCJAL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL1NlYXJjaEZpbHRlclwiO1xuaW1wb3J0IFNlYXJjaFRyZWUgZnJvbSBcIkAvd2lkZ2V0cy92aWV3cy9TZWFyY2hUcmVlXCI7XG5pbXBvcnQge1xuICBUcmVlVmlldyxcbiAgU2VhcmNoRmllbGRzLFxuICBGb3JtVmlldyxcbiAgQ29ubmVjdGlvblByb3ZpZGVyVHlwZSxcbiAgU2VhcmNoUmVxdWVzdCxcbiAgU2VhcmNoUmVzcG9uc2UsXG4gIENyZWF0ZU9iamVjdFJlcXVlc3QsXG4gIFVwZGF0ZU9iamVjdFJlcXVlc3QsXG59IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgQ29ubmVjdGlvblByb3ZpZGVyIGZyb20gXCJAL0Nvbm5lY3Rpb25Qcm92aWRlclwiO1xuXG5leHBvcnQge1xuICBCdXR0b24sXG4gIENoYXIsXG4gIFNlbGVjdGlvbixcbiAgQm9vbGVhbixcbiAgTWFueTJvbmUsXG4gIFRyZWUsXG4gIEdyb3VwLFxuICBTZWFyY2hGaWx0ZXIsXG4gIEZvcm0sXG4gIE5vdGVib29rLFxuICBGbG9hdCxcbiAgSW50ZWdlcixcbiAgTGFiZWwsXG4gIFRleHQsXG4gIFRyZWVWaWV3LFxuICBGb3JtVmlldyxcbiAgU2VhcmNoRmllbGRzLFxuICBTZXBhcmF0b3IsXG4gIFNlYXJjaFRyZWUsXG4gIFNlYXJjaFJlcXVlc3QsXG4gIFNlYXJjaFJlc3BvbnNlLFxuICBDcmVhdGVPYmplY3RSZXF1ZXN0LFxuICBVcGRhdGVPYmplY3RSZXF1ZXN0LFxuICBDb25uZWN0aW9uUHJvdmlkZXIsXG4gIENvbm5lY3Rpb25Qcm92aWRlclR5cGUsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBjaGlsZHJlbjogYW55O1xufTtcblxuY29uc3QgRmllbGRzZXQgPSAocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgeyBsYWJlbCwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgLy8gVE9ETzogY2hhbmdlIGluLWxpbmUgc3R5bGVzIHRvIFRhaWxXaW5kIGNsYXNzZXNcbiAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwicGwtMiBwci0yIGJvcmRlci1ncmF5LTQwMCBib3JkZXIgYm9yZGVyLXNvbGlkICBmb250LXNhbnNcIj5cbiAgICAgIDxsZWdlbmRcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBhbGw6IFwiaW5pdGlhbFwiLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMWVtXCIsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMC41ZW1cIixcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMC41ZW1cIixcbiAgICAgICAgICBmb250RmFtaWx5OlxuICAgICAgICAgICAgXCJzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sICdTZWdvZSBVSScsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJ1wiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xlZ2VuZD5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2ZpZWxkc2V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmllbGRzZXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBXaWRnZXRzIGZyb20gXCJAL2luZGV4XCI7XG5cbnR5cGUgd2lkZ2V0cyA9IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufTtcblxuY29uc3Qgd2lkZ2V0VHlwZXMgPSBXaWRnZXRzIGFzIHdpZGdldHM7XG5cbmNvbnN0IGNyZWF0ZVJlYWN0V2lkZ2V0ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgdHlwZSA9IG9vdWkuY29uc3RydWN0b3IubmFtZTtcbiAgY29uc3Qgd2lkZ2V0Q2xhc3MgPSB3aWRnZXRUeXBlc1t0eXBlXTtcbiAgaWYgKCF3aWRnZXRDbGFzcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHdpZGdldENsYXNzLCBwcm9wcyk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVSZWFjdFdpZGdldCB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hlY2tib3ggYXMgQW50Q2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiQC9Db25maWdcIjtcblxuZXhwb3J0IGNvbnN0IEJvb2xlYW4gPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIHJlYWRPbmx5LCByZXF1aXJlZCB9ID0gb291aTtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9IHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgPFJlcXVpcmVkQ2hlY2tib3ggZGlzYWJsZWQ9e3JlYWRPbmx5fSBpZD17aWR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcblxuY29uc3QgUmVxdWlyZWRDaGVja2JveCA9IHN0eWxlZChBbnRDaGVja2JveClgXG4gIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29uZmlnLnJlcXVpcmVkQ29sb3J9O1xuICB9XG5cbiAgLmFudC1jaGVja2JveC1jaGVja2VkIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODlDRkY7XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBCdXR0b24gYXMgQW50QnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgeyBsYWJlbCwgYWN0aXZhdGVkIH0gPSBvb3VpO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIG9vdWk9e29vdWl9PlxuICAgICAgPEFudEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBkaXNhYmxlZD17IWFjdGl2YXRlZH0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvQW50QnV0dG9uPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgQ2hhciBhcyBDaGFyT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCJAL0NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgQ2hhciA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgeyBpZCwgcmVhZE9ubHksIGlzUGFzc3dvcmQsIHJlcXVpcmVkIH0gPSBvb3VpIGFzIENoYXJPb3VpO1xuICBjb25zdCByZXF1aXJlZENsYXNzID0gcmVxdWlyZWQgPyBDb25maWcucmVxdWlyZWRDbGFzcyA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9PlxuICAgICAge2lzUGFzc3dvcmQgPyAoXG4gICAgICAgIDxJbnB1dC5QYXNzd29yZCBkaXNhYmxlZD17cmVhZE9ubHl9IGlkPXtpZH0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxJbnB1dCBkaXNhYmxlZD17cmVhZE9ubHl9IGlkPXtpZH0gY2xhc3NOYW1lPXtyZXF1aXJlZENsYXNzfSAvPlxuICAgICAgKX1cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IEZsb2F0IGFzIEZsb2F0T291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCJAL0NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgRmxvYXQgPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIGRlY2ltYWxEaWdpdHMsIHJlYWRPbmx5LCByZXF1aXJlZH0gPSBvb3VpIGFzIEZsb2F0T291aTtcbiAgY29uc3QgcmVxdWlyZWRDbGFzcyA9IHJlcXVpcmVkID8gQ29uZmlnLnJlcXVpcmVkQ2xhc3MgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgey4uLnByb3BzfT5cbiAgICAgIDxJbnB1dE51bWJlclxuICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgIGNsYXNzTmFtZT17XCJ3LWZ1bGwgXCIgKyByZXF1aXJlZENsYXNzfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHByZWNpc2lvbj17ZGVjaW1hbERpZ2l0c31cbiAgICAgICAgZm9ybWF0dGVyPXsodmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gYCR7dmFsdWV9YC5yZXBsYWNlKC9bXjAtOVxcLlxcLV0rL2csIFwiXCIpO1xuICAgICAgICB9fVxuICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XG4gICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxuICAgICAgLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIkAvQ29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBJbnRlZ2VyID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IGlkLCByZWFkT25seSwgcmVxdWlyZWQgfSA9IG9vdWk7XG4gIGNvbnN0IHJlcXVpcmVkQ2xhc3MgPSByZXF1aXJlZCA/IENvbmZpZy5yZXF1aXJlZENsYXNzIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIHsuLi5wcm9wc30+XG4gICAgICA8SW5wdXROdW1iZXJcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBjbGFzc05hbWU9e1widy1mdWxsIFwiICsgcmVxdWlyZWRDbGFzc31cbiAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICBmb3JtYXR0ZXI9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHt2YWx1ZX1gLnJlcGxhY2UoL1teMC05XSsvZywgXCJcIik7XG4gICAgICAgIH19XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cbiAgICAgIC8+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IFF1ZXN0aW9uQ2lyY2xlT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IExhYmVsIGFzIExhYmVsT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmVcIjtcblxudHlwZSBQcm9wcyA9IFdpZGdldFByb3BzICYge1xuICBhbGlnbj86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcbn07XG5cbmNvbnN0IGFsaWduQ2xhc3MgPSB7XG4gIGxlZnQ6IFwianVzdGlmeS1zdGFydFwiLFxuICBjZW50ZXI6IFwianVzdGlmeS1jZW50ZXJcIixcbiAgcmlnaHQ6IFwianVzdGlmeS1lbmRcIixcbn07XG5cbmNvbnN0IExhYmVsID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCByZXNwb25zaXZlQmVoYXZpb3VyID0gdXNlTWVkaWFRdWVyeSh7IHF1ZXJ5OiBcIihtYXgtd2lkdGg6IDEwMDBweClcIiB9KTtcbiAgY29uc3QgeyBvb3VpLCBhbGlnbiB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgbGFiZWwsIHRvb2x0aXAsIGZpZWxkRm9yTGFiZWwgfSA9IG9vdWkgYXMgTGFiZWxPb3VpO1xuICBjb25zdCBhZGRDb2xvbiA9IGZpZWxkRm9yTGFiZWwgIT09IG51bGwgPyB0cnVlIDogZmFsc2U7XG4gIGNvbnN0IGxhYmVsVGV4dCA9IGFkZENvbG9uICYmIGxhYmVsLmxlbmd0aCA+IDEgPyBsYWJlbCArIFwiIDpcIiA6IGxhYmVsO1xuICBjb25zdCByZXNwb25zaXZlQWxpZ24gPSByZXNwb25zaXZlQmVoYXZpb3VyID8gXCJsZWZ0XCIgOiBcInJpZ2h0XCI7XG4gIGNvbnN0IGxhYmVsQWxnaW4gPSBhbGlnbiA/IGFsaWduIDogZmllbGRGb3JMYWJlbCA/IHJlc3BvbnNpdmVBbGlnbiA6IFwibGVmdFwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBwYi0xICR7YWxpZ25DbGFzc1tsYWJlbEFsZ2luXX1gfT5cbiAgICAgIHt0b29sdGlwICYmIChcbiAgICAgICAgPFRvb2x0aXAgdGl0bGU9e3Rvb2x0aXB9PlxuICAgICAgICAgIDxRdWVzdGlvbkNpcmNsZU91dGxpbmVkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ibHVlLTQwMCBwci0xXCIgLz5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKX1cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTJcIj57bGFiZWxUZXh0fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uLCBSb3csIENvbCwgTW9kYWwgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgU2VhcmNoT3V0bGluZWQsIEZvbGRlck9wZW5PdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgTWFueTJvbmUgYXMgTWFueTJvbmVPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIkAvQ29uZmlnXCI7XG5pbXBvcnQgeyBTZWFyY2hNb2RhbCB9IGZyb20gXCJAL3dpZGdldHMvbW9kYWxzL1NlYXJjaE1vZGFsXCI7XG5pbXBvcnQgeyBEZXRhaWxNb2RhbCB9IGZyb20gXCJAL3dpZGdldHMvbW9kYWxzL0RldGFpbE1vZGFsXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9vdWk6IE1hbnkyb25lT291aTtcbiAgb25PcGVuRGV0YWlsQ2xpY2s/OlxuICAgIHwgKChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQpXG4gICAgfCB1bmRlZmluZWQ7XG4gIG9uU2VhcmNoQ2xpY2s/OlxuICAgIHwgKChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQpXG4gICAgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgTWFueTJvbmUgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEZpZWxkIHsuLi5wcm9wc30+XG4gICAgICA8TWFueTJvbmVJbnB1dCBvb3VpPXtvb3VpfSAvPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgTWFueTJvbmVJbnB1dFByb3BzIHtcbiAgb291aTogTWFueTJvbmVPb3VpO1xuICB2YWx1ZT86IGFueVtdO1xuICBvbkNoYW5nZT86ICh2YWx1ZTogYW55W10pID0+IHZvaWQ7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuY29uc3QgTWFueTJvbmVJbnB1dDogUmVhY3QuRkM8TWFueTJvbmVJbnB1dFByb3BzPiA9IChcbiAgcHJvcHM6IE1hbnkyb25lSW5wdXRQcm9wc1xuKSA9PiB7XG4gIGNvbnN0IHsgdmFsdWUsIG9uQ2hhbmdlLCBkaXNhYmxlZCwgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgcmVxdWlyZWQgfSA9IG9vdWk7XG4gIGNvbnN0IHJlcXVpcmVkQ2xhc3MgPSByZXF1aXJlZCA/IENvbmZpZy5yZXF1aXJlZENsYXNzIDogdW5kZWZpbmVkO1xuICBjb25zdCBbc2hvd1NlYXJjaE1vZGFsLCBzZXRTaG93U2VhcmNoTW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2hvd0RldGFpbE1vZGFsLCBzZXRTaG93RGV0YWlsTW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IHRyaWdnZXJDaGFuZ2UgPSAoY2hhbmdlZFZhbHVlOiBhbnlbXSkgPT4ge1xuICAgIG9uQ2hhbmdlPy4oeyAuLi52YWx1ZSwgLi4uY2hhbmdlZFZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uVmFsdWVTdHJpbmdDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPFJvdyBndXR0ZXI9ezh9IGNsYXNzTmFtZT1cInB0LTEgcGItMVwiPlxuICAgICAgPENvbCBmbGV4PVwiYXV0b1wiPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlICYmIHZhbHVlWzFdfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblZhbHVlU3RyaW5nQ2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBjbGFzc05hbWU9e3JlcXVpcmVkQ2xhc3N9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgZmxleD1cIjMycHhcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb249ezxGb2xkZXJPcGVuT3V0bGluZWQgLz59XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldFNob3dEZXRhaWxNb2RhbCh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9Db2w+XG4gICAgICA8Q29sIGZsZXg9XCIzMnB4XCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBpY29uPXs8U2VhcmNoT3V0bGluZWQgLz59XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldFNob3dTZWFyY2hNb2RhbCh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9Db2w+XG4gICAgICA8U2VhcmNoTW9kYWxcbiAgICAgICAgdmlzaWJsZT17c2hvd1NlYXJjaE1vZGFsfVxuICAgICAgICBvblNlbGVjdFZhbHVlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICB0cmlnZ2VyQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICBzZXRTaG93U2VhcmNoTW9kYWwoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgICBvbkNsb3NlTW9kYWw9eygpID0+IHtcbiAgICAgICAgICBzZXRTaG93U2VhcmNoTW9kYWwoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxEZXRhaWxNb2RhbFxuICAgICAgICB2aXNpYmxlPXtzaG93RGV0YWlsTW9kYWx9XG4gICAgICAgIG9uU2VsZWN0VmFsdWU9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRyaWdnZXJDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIHNldFNob3dEZXRhaWxNb2RhbChmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xvc2VNb2RhbD17KCkgPT4ge1xuICAgICAgICAgIHNldFNob3dEZXRhaWxNb2RhbChmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvUm93PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBTZWxlY3Rpb24gYXMgU2VsZWN0aW9uT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCJAL0NvbmZpZ1wiO1xuXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuXG5leHBvcnQgY29uc3QgU2VsZWN0aW9uID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IHNlbGVjdGlvblZhbHVlcywgcmVhZE9ubHksIHJlcXVpcmVkIH0gPSBvb3VpIGFzIFNlbGVjdGlvbk9vdWk7XG5cbiAgY29uc3QgdmFsdWVzID0gQXJyYXkuZnJvbShzZWxlY3Rpb25WYWx1ZXMuZW50cmllcygpKTtcblxuICBjb25zdCBvcHRpb25zID1cbiAgICB2YWx1ZXMgJiZcbiAgICB2YWx1ZXMubGVuZ3RoICYmXG4gICAgdmFsdWVzLm1hcCgoZW50cnk6IHN0cmluZ1tdKSA9PiB7XG4gICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxPcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtrZXl9PlxuICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgPC9PcHRpb24+XG4gICAgICApO1xuICAgIH0pO1xuXG4gIGNvbnN0IEN1c3RvbVNlbGVjdDogYW55ID0gcmVxdWlyZWQgPyBSZXF1aXJlZFNlbGVjdCA6IFNlbGVjdDtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9PlxuICAgICAgPEN1c3RvbVNlbGVjdCBkaXNhYmxlZD17cmVhZE9ubHl9PntvcHRpb25zfTwvQ3VzdG9tU2VsZWN0PlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuXG5jb25zdCBSZXF1aXJlZFNlbGVjdCA9IHN0eWxlZChTZWxlY3QpYFxuICAmLmFudC1zZWxlY3Q6bm90KC5hbnQtc2VsZWN0LWN1c3RvbWl6ZS1pbnB1dCkgLmFudC1zZWxlY3Qtc2VsZWN0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29uZmlnLnJlcXVpcmVkQ29sb3J9O1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBTZXBhcmF0b3IgYXMgU2VwYXJhdG9yT291aSB9IGZyb20gXCJvb3VpXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9vdWk6IFNlcGFyYXRvck9vdWk7XG59O1xuXG5leHBvcnQgY29uc3QgU2VwYXJhdG9yID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IGxhYmVsIH0gPSBvb3VpO1xuXG4gIHJldHVybiAoXG4gICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCIgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAge2xhYmVsfVxuICAgIDwvRGl2aWRlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCJAL0NvbmZpZ1wiO1xuaW1wb3J0IHsgVGV4dCBhcyBUZXh0T291aSB9IGZyb20gXCJvb3VpXCI7XG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogVGV4dE9vdWk7XG59O1xuXG5jb25zdCBUZXh0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IHJlYWRPbmx5LCByZXF1aXJlZCB9ID0gb291aTtcbiAgY29uc3QgcmVxdWlyZWRDbGFzcyA9IHJlcXVpcmVkID8gQ29uZmlnLnJlcXVpcmVkQ2xhc3MgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgey4uLnByb3BzfT5cbiAgICAgIDxUZXh0QXJlYSBkaXNhYmxlZD17cmVhZE9ubHl9IGNsYXNzTmFtZT17cmVxdWlyZWRDbGFzc30gcm93cz17NH0gLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciBhcyBDb250YWluZXJPb3VpLCBXaWRnZXQgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IHsgY3JlYXRlUmVhY3RXaWRnZXQgfSBmcm9tIFwiQC93aWRnZXRzL1dpZGdldEZhY3RvcnlcIjtcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZVwiO1xuaW1wb3J0IHtcbiAgZ2V0VGVtcGxhdGVDb2x1bW5zLFxuICBmaWxsUm93V2l0aEVtcHRpZXNUb0ZpdCxcbiAgZ2V0U3BhblN0eWxlRm9ySXRlbSxcbn0gZnJvbSBcIkAvaGVscGVycy9jb250YWluZXJIZWxwZXJcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgY29udGFpbmVyOiBDb250YWluZXJPb3VpO1xuICBmb3JtV3JhcHBlcj86IGJvb2xlYW47XG59O1xuXG5jb25zdCBDb250YWluZXIgPSAocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgcmVzcG9uc2l2ZUJlaGF2aW91ciA9IHVzZU1lZGlhUXVlcnkoeyBxdWVyeTogXCIobWF4LXdpZHRoOiAxMDAwcHgpXCIgfSk7XG4gIGNvbnN0IHsgY29udGFpbmVyLCBmb3JtV3JhcHBlciA9IGZhbHNlIH0gPSBwcm9wcztcbiAgY29uc3QgeyBjb2x1bW5zLCByb3dzIH0gPSBjb250YWluZXI7XG5cbiAgY29uc3QgY29udGVudCA9IHJvd3MubWFwKChyb3c6IFdpZGdldFtdLCBpKSA9PiB7XG4gICAgY29uc3Qgcm93V2l0aG91dEludmlzaWJsZUZpZWxkcyA9IHJvdy5maWx0ZXIoKHdpZGdldCkgPT4ge1xuICAgICAgcmV0dXJuICF3aWRnZXQuaW52aXNpYmxlO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgcm93V2l0aEVtcHRpZXNUb0ZpdCA9IGZpbGxSb3dXaXRoRW1wdGllc1RvRml0KHtcbiAgICAgIHJvdzogcm93V2l0aG91dEludmlzaWJsZUZpZWxkcyxcbiAgICAgIG51bWJlck9mQ29sdW1uczogY29sdW1ucyxcbiAgICAgIG11c3RGaWxsV2l0aEVtcHRpZXM6IHJlc3BvbnNpdmVCZWhhdmlvdXIsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcm93V2l0aEVtcHRpZXNUb0ZpdC5tYXAoKGl0ZW06IFdpZGdldCwgajogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtgJHtpLnRvU3RyaW5nKCl9LSR7ai50b1N0cmluZygpfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VsZi1jZW50ZXIgcC0yXCJcbiAgICAgICAgICBzdHlsZT17Z2V0U3BhblN0eWxlRm9ySXRlbSh7IGl0ZW0sIHJlc3BvbnNpdmVCZWhhdmlvdXIgfSl9XG4gICAgICAgID5cbiAgICAgICAgICB7Y3JlYXRlUmVhY3RXaWRnZXQoe1xuICAgICAgICAgICAgb291aTogaXRlbSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0pO1xuICB9KTtcblxuICBpZiAoZm9ybVdyYXBwZXIpIHtcbiAgICByZXR1cm4gY29udGVudCBhcyBhbnk7XG4gIH1cblxuICBjb25zdCB0ZW1wbGF0ZUNvbHVtbnMgPSBnZXRUZW1wbGF0ZUNvbHVtbnMoY29sdW1ucyk7XG4gIGNvbnN0IGdyaWRTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiByZXNwb25zaXZlQmVoYXZpb3VyID8gXCJhdXRvXCIgOiB0ZW1wbGF0ZUNvbHVtbnMsXG4gIH07XG5cbiAgcmV0dXJuIDxkaXYgc3R5bGU9e2dyaWRTdHlsZX0+e2NvbnRlbnR9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR3JvdXAgYXMgR3JvdXBPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgRmllbGRzZXQgZnJvbSBcIkAvdWkvRmllbGRzZXRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogR3JvdXBPb3VpO1xuICBzaG93TGFiZWw/OiBib29sZWFuO1xufTtcblxuZnVuY3Rpb24gR3JvdXAocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBvb3VpLCBzaG93TGFiZWwgPSB0cnVlIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7b291aS5sYWJlbCAmJiBzaG93TGFiZWwgPyAoXG4gICAgICAgIDxGaWVsZHNldCBsYWJlbD17b291aS5sYWJlbH0+XG4gICAgICAgICAgPENvbnRhaW5lciBjb250YWluZXI9e29vdWkhLmNvbnRhaW5lcn0gLz5cbiAgICAgICAgPC9GaWVsZHNldD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDb250YWluZXIgY29udGFpbmVyPXtvb3VpIS5jb250YWluZXJ9IC8+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBHcm91cDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYnMgfSBmcm9tIFwiYW50ZFwiO1xuY29uc3QgeyBUYWJQYW5lIH0gPSBUYWJzO1xuXG5pbXBvcnQgeyBOb3RlYm9vayBhcyBOb3RlYm9va09vdWksIEdyb3VwIGFzIEdyb3VwT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gXCJAL2luZGV4XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9vdWk6IE5vdGVib29rT291aTtcbn07XG5cbmZ1bmN0aW9uIE5vdGVib29rKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHRhYnMgPSBbXS5jb25jYXQuYXBwbHkoW10sIG9vdWkhLmNvbnRhaW5lci5yb3dzKTtcbiAgcmV0dXJuIChcbiAgICA8VGFicyBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiPlxuICAgICAge3RhYnMubWFwKChwYWdlOiBhbnksIGtleTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYktleSA9IChrZXkgKyAxKS50b1N0cmluZygpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRhYlBhbmUgdGFiPXtwYWdlLmxhYmVsfSBrZXk9e3RhYktleX0+XG4gICAgICAgICAgICA8R3JvdXAgb291aT17cGFnZSBhcyBHcm91cE9vdWl9IHNob3dMYWJlbD17ZmFsc2V9IC8+XG4gICAgICAgICAgPC9UYWJQYW5lPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9UYWJzPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RlYm9vaztcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuXG50eXBlIFNlYXJjaFNlbGVjdGlvblByb3BzID0ge1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBvblNlbGVjdFZhbHVlOiAodmFsdWU6IGFueSkgPT4gdm9pZDtcbiAgb25DbG9zZU1vZGFsOiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IENyZWF0ZU1vZGFsID0gKHByb3BzOiBTZWFyY2hTZWxlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB7IHZpc2libGUsIG9uQ2xvc2VNb2RhbCwgb25TZWxlY3RWYWx1ZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIHRpdGxlPVwiQ3JlYXRlXCJcbiAgICAgIGNlbnRlcmVkXG4gICAgICB3aWR0aD17MTAwMH1cbiAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICBjbG9zYWJsZT17dHJ1ZX1cbiAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlTW9kYWx9XG4gICAgICBmb290ZXI9e251bGx9XG4gICAgPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkgKyAxKTtcbiAgICAgICAgICBvblNlbGVjdFZhbHVlKFtyYW5kb20sIFwiTmV3IGNyZWF0ZWQgaXRlbSBcIiArIHJhbmRvbS50b1N0cmluZygpXSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHNhdmUgJiBzZWxlY3QgdmFsdWVcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlTW9kYWx9PmNsb3NlPC9CdXR0b24+XG4gICAgPC9Nb2RhbD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcblxudHlwZSBTZWFyY2hTZWxlY3Rpb25Qcm9wcyA9IHtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgb25TZWxlY3RWYWx1ZTogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XG4gIG9uQ2xvc2VNb2RhbDogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBEZXRhaWxNb2RhbCA9IChwcm9wczogU2VhcmNoU2VsZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgeyB2aXNpYmxlLCBvbkNsb3NlTW9kYWwsIG9uU2VsZWN0VmFsdWUgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPE1vZGFsXG4gICAgICB0aXRsZT1cIkRldGFpbFwiXG4gICAgICBjZW50ZXJlZFxuICAgICAgd2lkdGg9ezEwMDB9XG4gICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgY2xvc2FibGU9e3RydWV9XG4gICAgICBvbkNhbmNlbD17b25DbG9zZU1vZGFsfVxuICAgICAgZm9vdGVyPXtudWxsfVxuICAgID5cbiAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZU1vZGFsfT5jYW5jZWw8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIG9uU2VsZWN0VmFsdWUoWzEsIFwiVXBkYXRlZCB2YWx1ZVwiXSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIG9rXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L01vZGFsPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBDcmVhdGVNb2RhbCB9IGZyb20gXCIuL0NyZWF0ZU1vZGFsXCI7XG5cbnR5cGUgU2VhcmNoU2VsZWN0aW9uUHJvcHMgPSB7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIG9uU2VsZWN0VmFsdWU6ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xuICBvbkNsb3NlTW9kYWw6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgU2VhcmNoTW9kYWwgPSAocHJvcHM6IFNlYXJjaFNlbGVjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdmlzaWJsZSwgb25DbG9zZU1vZGFsLCBvblNlbGVjdFZhbHVlIH0gPSBwcm9wcztcbiAgY29uc3QgW3Nob3dDcmVhdGVNb2RhbCwgc2V0U2hvd0NyZWF0ZU1vZGFsXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TW9kYWxcbiAgICAgICAgdGl0bGU9XCJTZWFyY2hcIlxuICAgICAgICBjZW50ZXJlZFxuICAgICAgICB3aWR0aD17MTAwMH1cbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZSAmJiAhc2hvd0NyZWF0ZU1vZGFsfVxuICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cbiAgICAgICAgb25DYW5jZWw9e29uQ2xvc2VNb2RhbH1cbiAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwICsgMSk7XG4gICAgICAgICAgICBvblNlbGVjdFZhbHVlKFtyYW5kb20sIFwiVGVzdCB2YWx1ZSBcIiArIHJhbmRvbS50b1N0cmluZygpXSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHNlbGVjdCB2YWx1ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldFNob3dDcmVhdGVNb2RhbCh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgbmV3IGl0ZW1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZU1vZGFsfT5jbG9zZTwvQnV0dG9uPlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxDcmVhdGVNb2RhbFxuICAgICAgICB2aXNpYmxlPXtzaG93Q3JlYXRlTW9kYWx9XG4gICAgICAgIG9uU2VsZWN0VmFsdWU9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHNldFNob3dDcmVhdGVNb2RhbChmYWxzZSk7XG4gICAgICAgICAgb25DbG9zZU1vZGFsKCk7XG4gICAgICAgICAgb25TZWxlY3RWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xvc2VNb2RhbD17KCkgPT4ge1xuICAgICAgICAgIHNldFNob3dDcmVhdGVNb2RhbChmYWxzZSk7XG4gICAgICAgICAgb25DbG9zZU1vZGFsKCk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtIGFzIEZvcm1Pb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IEZvcm0gYXMgQW50Rm9ybSwgRm9ybUluc3RhbmNlIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvQ29udGFpbmVyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFyY2g6IHN0cmluZztcbiAgZmllbGRzOiBhbnk7XG4gIGluaXRpYWxWYWx1ZXM/OiBhbnk7XG4gIGFudEZvcm06IEZvcm1JbnN0YW5jZTtcbn07XG5cbmNvbnN0IGZpbHRlcmVkVmFsdWVzID0gKHZhbHVlczogYW55LCBmaWVsZHM6IGFueSkgPT4ge1xuICBpZiAoIWZpZWxkcykge1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cbiAgY29uc3QgZmlsdGVyZWRWYWx1ZXM6IGFueSA9IHt9O1xuICBPYmplY3Qua2V5cyh2YWx1ZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChcbiAgICAgIHZhbHVlc1trZXldICE9PSBmYWxzZSB8fFxuICAgICAgKGZpZWxkc1trZXldICYmIGZpZWxkc1trZXldLnR5cGUgPT09IFwiYm9vbGVhblwiKVxuICAgICkge1xuICAgICAgZmlsdGVyZWRWYWx1ZXNba2V5XSA9IHZhbHVlc1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmaWx0ZXJlZFZhbHVlcztcbn07XG5cbmNvbnN0IHByb2Nlc3NJbml0aWFsVmFsdWVzID0gKHZhbHVlczogYW55LCBmaWVsZHM6IGFueSkgPT4ge1xuICBjb25zdCBmaWx0ZXJCb29sZWFucyA9IGZpbHRlcmVkVmFsdWVzKHZhbHVlcywgZmllbGRzKTtcbiAgcmV0dXJuIGZpbHRlckJvb2xlYW5zO1xufTtcblxuZnVuY3Rpb24gRm9ybShwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7IGFyY2gsIGZpZWxkcywgaW5pdGlhbFZhbHVlcywgYW50Rm9ybSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGU8Rm9ybU9vdWk+KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuZXdGb3JtID0gbmV3IEZvcm1Pb3VpKGZpZWxkcyk7XG4gICAgbmV3Rm9ybS5wYXJzZShhcmNoKTtcbiAgICBzZXRGb3JtKG5ld0Zvcm0pO1xuICB9LCBbYXJjaCwgZmllbGRzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QW50Rm9ybVxuICAgICAgZm9ybT17YW50Rm9ybX1cbiAgICAgIGluaXRpYWxWYWx1ZXM9e3Byb2Nlc3NJbml0aWFsVmFsdWVzKGluaXRpYWxWYWx1ZXMsIGZpZWxkcyl9XG4gICAgPlxuICAgICAge2Zvcm0gJiYgPENvbnRhaW5lciBjb250YWluZXI9e2Zvcm0hLmNvbnRhaW5lcn0gZm9ybVdyYXBwZXIgLz59XG4gICAgPC9BbnRGb3JtPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IFNlYXJjaEZpbHRlciBmcm9tIFwiQC93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9TZWFyY2hGaWx0ZXJcIjtcbmltcG9ydCBUcmVlIGZyb20gXCJAL3dpZGdldHMvdmlld3MvVHJlZVwiO1xuaW1wb3J0IHsgU2VhcmNoRmllbGRzIH0gZnJvbSBcIkAvdHlwZXMvaW5kZXhcIjtcbmltcG9ydCBDb25uZWN0aW9uUHJvdmlkZXIgZnJvbSBcIkAvQ29ubmVjdGlvblByb3ZpZGVyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFyY2g6IHN0cmluZztcbiAgZmllbGRzOiBhbnk7XG4gIHNlYXJjaEZpZWxkczogU2VhcmNoRmllbGRzO1xuICBsaW1pdD86IG51bWJlcjtcbiAgbW9kZWw6IHN0cmluZztcbiAgb25Sb3dDbGlja2VkOiAodmFsdWU6IGFueSkgPT4gdm9pZDtcbn07XG5cbmZ1bmN0aW9uIFNlYXJjaFRyZWUocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIGFyY2gsXG4gICAgZmllbGRzLFxuICAgIHNlYXJjaEZpZWxkcyxcbiAgICBsaW1pdDogb3JpZ2luYWxMaW1pdCA9IDgwLFxuICAgIG1vZGVsLFxuICAgIG9uUm93Q2xpY2tlZCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPG51bWJlcj4oMSk7XG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbbGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlPG51bWJlcj4oODApO1xuICBjb25zdCBbcGFyYW1zLCBzZXRQYXJhbXNdID0gdXNlU3RhdGU8QXJyYXk8YW55Pj4oW10pO1xuXG4gIGNvbnN0IFt0b3RhbEl0ZW1zLCBzZXRUb3RhbEl0ZW1zXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlPGFueT4oKTtcblxuICBjb25zdCBbc2VhcmNoRmlsdGVyTG9hZGluZywgc2V0U2VhcmNoRmlsdGVyTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihcbiAgICBmYWxzZVxuICApO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW3RhYmxlUmVmcmVzaGluZywgc2V0VGFibGVSZWZyZXNoaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBvblJlcXVlc3RQYWdlQ2hhbmdlID0gKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgIHNldFRhYmxlUmVmcmVzaGluZyh0cnVlKTtcbiAgICBzZXRQYWdlKHBhZ2UpO1xuICAgIHNldE9mZnNldCgocGFnZSAtIDEpICogbGltaXQhKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaFJlc3VsdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldFRhYmxlUmVmcmVzaGluZyh0cnVlKTtcblxuICAgICAgY29uc3QgeyB0b3RhbEl0ZW1zLCByZXN1bHRzIH0gPSBhd2FpdCBDb25uZWN0aW9uUHJvdmlkZXIuZ2V0SGFuZGxlcigpLnNlYXJjaCh7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgbGltaXQsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgbW9kZWwsXG4gICAgICAgIGZpZWxkcyxcbiAgICAgIH0pO1xuICAgICAgc2V0VG90YWxJdGVtcyh0b3RhbEl0ZW1zKTtcbiAgICAgIHNldFJlc3VsdHMocmVzdWx0cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0VGFibGVSZWZyZXNoaW5nKGZhbHNlKTtcbiAgICAgIHNldFNlYXJjaEZpbHRlckxvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUmVzdWx0cygpO1xuICB9LCBbcGFnZSwgbGltaXQsIG9mZnNldCwgcGFyYW1zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNlYXJjaEZpbHRlclxuICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgc2VhcmNoRmllbGRzPXtzZWFyY2hGaWVsZHN9XG4gICAgICAgIG9uQ2xlYXI9eygpID0+IHtcbiAgICAgICAgICBpZiAodGFibGVSZWZyZXNoaW5nKSByZXR1cm47XG4gICAgICAgICAgc2V0RXJyb3IodW5kZWZpbmVkKTtcbiAgICAgICAgICBzZXRQYXJhbXMoW10pO1xuICAgICAgICAgIHNldE9mZnNldCgwKTtcbiAgICAgICAgICBzZXRQYWdlKDEpO1xuICAgICAgICAgIHNldExpbWl0KG9yaWdpbmFsTGltaXQpO1xuICAgICAgICB9fVxuICAgICAgICBsaW1pdD17bGltaXQhfVxuICAgICAgICBvZmZzZXQ9e29mZnNldCF9XG4gICAgICAgIGlzU2VhcmNoaW5nPXtzZWFyY2hGaWx0ZXJMb2FkaW5nfVxuICAgICAgICBvblN1Ym1pdD17KHtcbiAgICAgICAgICBwYXJhbXM6IG5ld1BhcmFtcyxcbiAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICBvZmZzZXQsXG4gICAgICAgIH06IHtcbiAgICAgICAgICBwYXJhbXM6IGFueTtcbiAgICAgICAgICBsaW1pdDogbnVtYmVyO1xuICAgICAgICAgIG9mZnNldDogbnVtYmVyO1xuICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgaWYgKHRhYmxlUmVmcmVzaGluZykgcmV0dXJuO1xuICAgICAgICAgIHNldFNlYXJjaEZpbHRlckxvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgc2V0RXJyb3IodW5kZWZpbmVkKTtcbiAgICAgICAgICBzZXRQYWdlKDEpO1xuICAgICAgICAgIGlmIChsaW1pdCkgc2V0TGltaXQobGltaXQpO1xuICAgICAgICAgIGlmIChvZmZzZXQpIHNldE9mZnNldChvZmZzZXQpO1xuICAgICAgICAgIHNldFBhcmFtcyhuZXdQYXJhbXMpO1xuICAgICAgICB9fVxuICAgICAgICBzdHJpbmdzPXt7XG4gICAgICAgICAgdHJ1ZTogXCJZZXNcIixcbiAgICAgICAgICBmYWxzZTogXCJOb1wiLFxuICAgICAgICAgIHNpbXBsZV9zZWFyY2g6IFwiU2ltcGxlIHNlYXJjaFwiLFxuICAgICAgICAgIGFkdmFuY2VkX3NlYXJjaDogXCJBZHZhbmNlZCBzZWFyY2hcIixcbiAgICAgICAgICBzZWFyY2g6IFwiU2VhcmNoXCIsXG4gICAgICAgICAgcGFyYW1ldGVyczogXCJQYXJhbWV0ZXJzXCIsXG4gICAgICAgICAgbGltaXQ6IFwiTGltaXRcIixcbiAgICAgICAgICBmaXJzdDogXCJGaXJzdFwiLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIHtlcnJvciAmJiA8QWxlcnQgY2xhc3NOYW1lPVwibXQtMTBcIiBtZXNzYWdlPXtlcnJvcn0gdHlwZT1cImVycm9yXCIgYmFubmVyIC8+fVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0xMFwiIC8+XG4gICAgICA8VHJlZVxuICAgICAgICB0b3RhbD17dG90YWxJdGVtc31cbiAgICAgICAgbGltaXQ9e2xpbWl0IX1cbiAgICAgICAgcGFnZT17cGFnZSF9XG4gICAgICAgIHRyZWVWaWV3PXt7IGFyY2gsIGZpZWxkcyB9fVxuICAgICAgICByZXN1bHRzPXtyZXN1bHRzIHx8IFtdfVxuICAgICAgICBvblJlcXVlc3RQYWdlQ2hhbmdlPXtvblJlcXVlc3RQYWdlQ2hhbmdlfVxuICAgICAgICBsb2FkaW5nPXt0YWJsZVJlZnJlc2hpbmd9XG4gICAgICAgIHN0cmluZ3M9e3tcbiAgICAgICAgICBub19yZXN1bHRzOiBcIk5vIHJlc3VsdHNcIixcbiAgICAgICAgICBzdW1tYXJ5OiBcIlNob3dpbmcgcmVnaXN0ZXJzIGZyb20ge2Zyb219IHRvIHt0b30gb2Yge3RvdGFsfSByZWdpc3RlcnNcIixcbiAgICAgICAgfX1cbiAgICAgICAgb25Sb3dDbGlja2VkPXtvblJvd0NsaWNrZWR9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hUcmVlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRhYmxlLCBQYWdpbmF0aW9uLCBDaGVja2JveCwgU3BpbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBnZXRUcmVlLCBnZXRUYWJsZUNvbHVtbnMsIGdldFRhYmxlSXRlbXMgfSBmcm9tIFwiQC9oZWxwZXJzL3RyZWVIZWxwZXJcIjtcblxuaW1wb3J0IHsgU3RyaW5ncywgVHJlZVZpZXcsIENvbHVtbiB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRMb2NhbGl6ZWRTdHJpbmcgfSBmcm9tIFwiQC9jb250ZXh0L0xvY2FsZXNDb250ZXh0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRvdGFsOiBudW1iZXI7XG4gIGxpbWl0OiBudW1iZXI7XG4gIHBhZ2U6IG51bWJlcjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgdHJlZVZpZXc6IFRyZWVWaWV3O1xuICByZXN1bHRzOiBBcnJheTxhbnk+O1xuICBvblJlcXVlc3RQYWdlQ2hhbmdlOiAocGFnZTogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgPT4gdm9pZDtcbiAgc3RyaW5nczogU3RyaW5ncztcbiAgb25Sb3dDbGlja2VkPzogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG59O1xuXG5mdW5jdGlvbiBUcmVlKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBwYWdlLFxuICAgIGxpbWl0LFxuICAgIHRvdGFsLFxuICAgIHRyZWVWaWV3LFxuICAgIHJlc3VsdHMsXG4gICAgb25SZXF1ZXN0UGFnZUNoYW5nZSxcbiAgICBsb2FkaW5nLFxuICAgIHN0cmluZ3MsXG4gICAgb25Sb3dDbGlja2VkLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZTxBcnJheTxhbnk+PihbXSk7XG4gIGNvbnN0IFtjb2x1bW5zLCBzZXRDb2x1bW5zXSA9IHVzZVN0YXRlPEFycmF5PENvbHVtbj4+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRyZWUgPSBnZXRUcmVlKHRyZWVWaWV3KTtcbiAgICBjb25zdCBib29sZWFuQ29tcG9uZW50Rm4gPSAoYm9vbGVhbkZpZWxkOiBib29sZWFuKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiA8Q2hlY2tib3ggZGVmYXVsdENoZWNrZWQ9e2Jvb2xlYW5GaWVsZH0gZGlzYWJsZWQgLz47XG4gICAgfTtcbiAgICBjb25zdCBjb2x1bW5zID0gZ2V0VGFibGVDb2x1bW5zKHRyZWUsIGJvb2xlYW5Db21wb25lbnRGbik7XG4gICAgY29uc3QgaXRlbXMgPSBnZXRUYWJsZUl0ZW1zKHRyZWUsIHJlc3VsdHMpO1xuXG4gICAgc2V0Q29sdW1ucyhjb2x1bW5zKTtcbiAgICBzZXRJdGVtcyhpdGVtcyk7XG4gIH0sIFt0cmVlVmlldywgcmVzdWx0c10pO1xuXG4gIGNvbnN0IGZyb20gPSAocGFnZSAtIDEpICogbGltaXQgKyAxO1xuICBjb25zdCB0byA9IGZyb20gLSAxICsgaXRlbXMubGVuZ3RoO1xuICBjb25zdCBzdW1tYXJ5ID0gbG9hZGluZyA/IChcbiAgICA8U3BpbiAvPlxuICApIDogdG90YWwgPT09IDAgPyAoXG4gICAgZ2V0TG9jYWxpemVkU3RyaW5nKFwibm9fcmVzdWx0c1wiLCBzdHJpbmdzKVxuICApIDogKFxuICAgIGdldExvY2FsaXplZFN0cmluZyhcInN1bW1hcnlcIiwgc3RyaW5ncylcbiAgICAgIC5yZXBsYWNlKFwie2Zyb219XCIsIGZyb20/LnRvU3RyaW5nKCkpXG4gICAgICAucmVwbGFjZShcInt0b31cIiwgdG8/LnRvU3RyaW5nKCkpXG4gICAgICAucmVwbGFjZShcInt0b3RhbH1cIiwgdG90YWw/LnRvU3RyaW5nKCkpXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3N1bW1hcnl9XG4gICAgICB7bG9hZGluZyA/IG51bGwgOiAoXG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgdG90YWw9e3RvdGFsfVxuICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cbiAgICAgICAgICBjdXJyZW50PXtwYWdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInBiLTUgcHQtNVwiXG4gICAgICAgICAgc2hvd1NpemVDaGFuZ2VyPXtmYWxzZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25SZXF1ZXN0UGFnZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8VGFibGVcbiAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgZGF0YVNvdXJjZT17aXRlbXN9XG4gICAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICByb3dDbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBzZWxlY3Qtbm9uZVwiXG4gICAgICAgIG9uUm93PXsocmVjb3JkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9uRG91YmxlQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG9uUm93Q2xpY2tlZCkgb25Sb3dDbGlja2VkKHJlY29yZC5pZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVlO1xuIiwiaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IERhdGVSYW5nZVBpY2tlciA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RmllbGQgey4uLnByb3BzfSBsYXlvdXQ9e1widmVydGljYWxcIn0+XG4gICAgICA8RGF0ZVBpY2tlci5SYW5nZVBpY2tlciBmb3JtYXQ9e1wiREQvTU0vWVlZWVwifT48L0RhdGVQaWNrZXIuUmFuZ2VQaWNrZXI+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBEYXRlUGlja2VyLCBUaW1lUGlja2VyIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgRmllbGQgYXMgRmllbGRPb3VpLCBMYWJlbCBhcyBMYWJlbE9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IExhYmVsIGZyb20gXCJAL3dpZGdldHMvYmFzZS9MYWJlbFwiO1xuXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5cbmV4cG9ydCBjb25zdCBEYXRlVGltZVJhbmdlUGlja2VyID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWksIHNob3dMYWJlbCA9IGZhbHNlIH0gPSBwcm9wcztcbiAgY29uc3QgeyBsYWJlbCwgaWQgfSA9IG9vdWk7XG5cbiAgY29uc3QgZmllbGRzID0gW1xuICAgIG5ldyBGaWVsZE9vdWkoe1xuICAgICAgbmFtZTogaWQgKyBcIiNkYXRlXCIsXG4gICAgICBsYWJlbDogXCJcIixcbiAgICB9KSxcbiAgICBuZXcgRmllbGRPb3VpKHtcbiAgICAgIG5hbWU6IGlkICsgXCIjdGltZVwiLFxuICAgICAgbGFiZWw6IFwiXCIsXG4gICAgfSksXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dMYWJlbCAmJiAoXG4gICAgICAgIDxMYWJlbFxuICAgICAgICAgIG9vdWk9e1xuICAgICAgICAgICAgbmV3IExhYmVsT291aSh7XG4gICAgICAgICAgICAgIG5hbWU6IGlkICsgXCJfbGFiZWxcIixcbiAgICAgICAgICAgICAgc3RyaW5nOiBsYWJlbCxcbiAgICAgICAgICAgICAgaGVscDogb291aS50b29sdGlwLFxuICAgICAgICAgICAgICBmaWVsZEZvckxhYmVsOiBpZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGFsaWduPXtcImxlZnRcIn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8Um93IGFsaWduPXtcImJvdHRvbVwifSBjbGFzc05hbWU9XCJwLTBcIj5cbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtci0yXCI+XG4gICAgICAgICAgPEZpZWxkIHsuLi5wcm9wc30gb291aT17ZmllbGRzWzBdfSBzaG93TGFiZWw9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxEYXRlUGlja2VyLlJhbmdlUGlja2VyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNjBcIlxuICAgICAgICAgICAgICBmb3JtYXQ9e1wiREQvTU0vWVlZWVwifVxuICAgICAgICAgICAgPjwvRGF0ZVBpY2tlci5SYW5nZVBpY2tlcj5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbD5cbiAgICAgICAgICA8RmllbGQgey4uLnByb3BzfSBvb3VpPXtmaWVsZHNbMV19IHNob3dMYWJlbD17ZmFsc2V9PlxuICAgICAgICAgICAgPFRpbWVQaWNrZXIuUmFuZ2VQaWNrZXJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02MFwiXG4gICAgICAgICAgICAgIGZvcm1hdD17XCJISDptbVwifVxuICAgICAgICAgICAgPjwvVGltZVBpY2tlci5SYW5nZVBpY2tlcj5cbiAgICAgICAgICA8L0ZpZWxkPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEZsb2F0IH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0Zsb2F0XCI7XG5pbXBvcnQgeyBJbnRlZ2VyIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0ludGVnZXJcIjtcbmltcG9ydCB7IEludGVnZXIgYXMgSW50ZWdlck9vdWksIExhYmVsIGFzIExhYmVsT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0xhYmVsXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9vdWk6IGFueTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBQYWlyRmllbGRzKHByb3BzOiBXaWRnZXRQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHsgb291aSwgc2hvd0xhYmVsIH0gPSBwcm9wcztcbiAgY29uc3QgeyBpZCwgbGFiZWwsIHRvb2x0aXAgfSA9IG9vdWk7XG4gIGNvbnN0IFdpZGdldCA9IG9vdWkgaW5zdGFuY2VvZiBJbnRlZ2VyT291aSA/IEludGVnZXIgOiBGbG9hdDtcblxuICBjb25zdCBnZXRXaWRnZXQgPSAoc3VmZml4OiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFdpZGdldFxuICAgICAgICBvb3VpPXt7XG4gICAgICAgICAgLi4uKG9vdWkgYXMgYW55KSxcbiAgICAgICAgICBpZDogaWQgKyBzdWZmaXgsXG4gICAgICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICAgICAgdG9vbHRpcDogdW5kZWZpbmVkLFxuICAgICAgICB9fVxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Nob3dMYWJlbCAmJiAoXG4gICAgICAgIDxMYWJlbFxuICAgICAgICAgIG9vdWk9e1xuICAgICAgICAgICAgbmV3IExhYmVsT291aSh7XG4gICAgICAgICAgICAgIG5hbWU6IGlkICsgXCJfbGFiZWxcIixcbiAgICAgICAgICAgICAgc3RyaW5nOiBsYWJlbCxcbiAgICAgICAgICAgICAgaGVscDogdG9vbHRpcCxcbiAgICAgICAgICAgICAgZmllbGRGb3JMYWJlbDogaWQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBhbGlnbj17XCJsZWZ0XCJ9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgPFJvdyBhbGlnbj17XCJib3R0b21cIn0gY2xhc3NOYW1lPVwibXQtMFwiPlxuICAgICAgICA8Q29sPntnZXRXaWRnZXQoXCIjZnJvbVwiKX08L0NvbD5cbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJwYi0xXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGwtMiBwci0yIGgtZnVsbFwiPiAtIDwvc3Bhbj5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2w+e2dldFdpZGdldChcIiN0b1wiKX08L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgUm93LCBDb2wsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQge1xuICBEb3duT3V0bGluZWQsXG4gIFVwT3V0bGluZWQsXG4gIFNlYXJjaE91dGxpbmVkLFxuICBDbGVhck91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcblxuaW1wb3J0IHtcbiAgTG9jYWxlc0NvbnRleHQsXG4gIExvY2FsZXNDb250ZXh0VHlwZSxcbn0gZnJvbSBcIkAvY29udGV4dC9Mb2NhbGVzQ29udGV4dFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBhZHZhbmNlZEZpbHRlcjogYm9vbGVhbjtcbiAgaXNTZWFyY2hpbmc6IGJvb2xlYW47XG4gIG9uQWR2YW5jZWRGaWx0ZXJUb2dnbGU6ICgpID0+IHZvaWQ7XG4gIG9uQ2xlYXI6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoQm90dG9tQmFyKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBvbkFkdmFuY2VkRmlsdGVyVG9nZ2xlLFxuICAgIGFkdmFuY2VkRmlsdGVyLFxuICAgIG9uQ2xlYXIsXG4gICAgaXNTZWFyY2hpbmcsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGdldFN0cmluZyB9ID0gdXNlQ29udGV4dChMb2NhbGVzQ29udGV4dCkgYXMgTG9jYWxlc0NvbnRleHRUeXBlO1xuXG4gIHJldHVybiAoXG4gICAgPFJvdz5cbiAgICAgIDxDb2wgc3Bhbj17MTJ9IGNsYXNzTmFtZT1cInRleHQtbGVmdCBwdC00IHBiLTIgcGwtMlwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXhzXCIgb25DbGljaz17b25BZHZhbmNlZEZpbHRlclRvZ2dsZX0+XG4gICAgICAgICAge2FkdmFuY2VkRmlsdGVyID8gKFxuICAgICAgICAgICAgPFVwT3V0bGluZWQgY2xhc3NOYW1lPVwicHItMVwiIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxEb3duT3V0bGluZWQgY2xhc3NOYW1lPVwicHItMVwiIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YWR2YW5jZWRGaWx0ZXJcbiAgICAgICAgICAgID8gZ2V0U3RyaW5nKFwic2ltcGxlX3NlYXJjaFwiKVxuICAgICAgICAgICAgOiBnZXRTdHJpbmcoXCJhZHZhbmNlZF9zZWFyY2hcIil9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCBzcGFuPXsxMn0gY2xhc3NOYW1lPVwidGV4dC1yaWdodCBwYi0yXCI+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXItNVwiIGljb249ezxDbGVhck91dGxpbmVkIC8+fSBvbkNsaWNrPXtvbkNsZWFyfT5cbiAgICAgICAgICBDbGVhclxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb249ezxTZWFyY2hPdXRsaW5lZCAvPn1cbiAgICAgICAgICBsb2FkaW5nPXtpc1NlYXJjaGluZ31cbiAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxuICAgICAgICA+XG4gICAgICAgICAge2dldFN0cmluZyhcInNlYXJjaFwiKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0NvbD5cbiAgICA8L1Jvdz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IENoYXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvQ2hhclwiO1xuaW1wb3J0IHsgU2VsZWN0aW9uIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL1NlbGVjdGlvblwiO1xuaW1wb3J0IHsgRGF0ZVJhbmdlUGlja2VyIH0gZnJvbSBcIi4vRGF0ZVJhbmdlUGlja2VyXCI7XG5pbXBvcnQgeyBEYXRlVGltZVJhbmdlUGlja2VyIH0gZnJvbSBcIi4vRGF0ZVRpbWVSYW5nZVBpY2tlclwiO1xuaW1wb3J0IHsgUGFpckZpZWxkcyB9IGZyb20gXCIuL1BhaXJGaWVsZHNcIjtcblxuaW1wb3J0IHsgTG9jYWxlc0NvbnRleHQsIExvY2FsZXNDb250ZXh0VHlwZSB9IGZyb20gXCJAL2NvbnRleHQvTG9jYWxlc0NvbnRleHRcIjtcblxuaW1wb3J0IHsgRmllbGQsIFNlbGVjdGlvbiBhcyBTZWxlY3Rpb25Pb3VpIH0gZnJvbSBcIm9vdWlcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgZmllbGQ6IEZpZWxkO1xufTtcblxuY29uc3QgdHlwZXMgPSB7XG4gIHRleHQ6IFwiVGV4dFwiLFxuICBtYW55Mm9uZTogXCJNYW55Mm9uZVwiLFxuICBjaGFyOiBcIkNoYXJcIixcbiAgYm9vbGVhbjogXCJCb29sZWFuXCIsXG4gIHNlbGVjdGlvbjogXCJTZWxlY3Rpb25cIixcbiAgZmxvYXQ6IFwiRmxvYXRcIixcbiAgZmxvYXRfdGltZTogXCJGbG9hdFRpbWVcIixcbiAgcHJvZ3Jlc3NiYXI6IFwiUHJvZ3Jlc3NCYXJcIixcbiAgaW50ZWdlcjogXCJJbnRlZ2VyXCIsXG4gIGRhdGU6IFwiRGF0ZVwiLFxuICBkYXRldGltZTogXCJEYXRlVGltZVwiLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaEZpZWxkKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGZpZWxkIH0gPSBwcm9wcztcbiAgZmllbGQucmVhZE9ubHkgPSBmYWxzZTtcbiAgZmllbGQucmVxdWlyZWQgPSBmYWxzZTtcblxuICBjb25zdCB7IGdldFN0cmluZyB9ID0gdXNlQ29udGV4dChMb2NhbGVzQ29udGV4dCkgYXMgTG9jYWxlc0NvbnRleHRUeXBlO1xuXG4gIGNvbnN0IHdpZGdldFR5cGUgPSBmaWVsZC5jb25zdHJ1Y3Rvci5uYW1lO1xuXG4gIHN3aXRjaCAod2lkZ2V0VHlwZSkge1xuICAgIGNhc2UgdHlwZXMuYm9vbGVhbjoge1xuICAgICAgY29uc3Qgb291aSA9IG5ldyBTZWxlY3Rpb25Pb3VpKHtcbiAgICAgICAgbmFtZTogZmllbGQuX2lkLFxuICAgICAgICBzdHJpbmc6IGZpZWxkLmxhYmVsLFxuICAgICAgICBzZWxlY3Rpb246IFtcbiAgICAgICAgICBbXCJ0cnVlXCIsIGdldFN0cmluZyhcInRydWVcIildLFxuICAgICAgICAgIFtcImZhbHNlXCIsIGdldFN0cmluZyhcImZhbHNlXCIpXSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gPFNlbGVjdGlvbiBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiIG9vdWk9e29vdWl9IHNob3dMYWJlbCAvPjtcbiAgICB9XG4gICAgY2FzZSB0eXBlcy5mbG9hdDpcbiAgICBjYXNlIHR5cGVzLnByb2dyZXNzYmFyOlxuICAgIGNhc2UgdHlwZXMuZmxvYXRfdGltZTpcbiAgICBjYXNlIHR5cGVzLmludGVnZXI6IHtcbiAgICAgIHJldHVybiA8UGFpckZpZWxkcyBvb3VpPXtmaWVsZH0gc2hvd0xhYmVsIC8+O1xuICAgIH1cbiAgICBjYXNlIHR5cGVzLmRhdGU6IHtcbiAgICAgIHJldHVybiA8RGF0ZVJhbmdlUGlja2VyIG9vdWk9e2ZpZWxkfSBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiIHNob3dMYWJlbCAvPjtcbiAgICB9XG4gICAgY2FzZSB0eXBlcy5kYXRldGltZToge1xuICAgICAgcmV0dXJuIDxEYXRlVGltZVJhbmdlUGlja2VyIG9vdWk9e2ZpZWxkfSBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiIHNob3dMYWJlbCAvPjtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIDxDaGFyIG9vdWk9e2ZpZWxkfSBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiIHNob3dMYWJlbCAvPjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5cbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuaW1wb3J0IFwiQC90YWlsd2luZC5nZW5lcmF0ZWQuY3NzXCI7XG5cbmltcG9ydCB7IFNlYXJjaEZpbHRlciBhcyBTZWFyY2hGaWx0ZXJPb3VpLCBDb250YWluZXIsIEZpZWxkIH0gZnJvbSBcIm9vdWlcIjtcblxuaW1wb3J0IHsgU2VhcmNoRmllbGQgfSBmcm9tIFwiLi9TZWFyY2hGaWVsZFwiO1xuaW1wb3J0IHsgU2VhcmNoQm90dG9tQmFyIH0gZnJvbSBcIi4vU2VhcmNoQm90dG9tQmFyXCI7XG5pbXBvcnQgTG9jYWxlc1Byb3ZpZGVyIGZyb20gXCJAL2NvbnRleHQvTG9jYWxlc0NvbnRleHRcIjtcbmltcG9ydCB7IFN0cmluZ3MsIFNlYXJjaEZpZWxkcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyBTZWFyY2hQYXJhbXMgfSBmcm9tIFwiLi9TZWFyY2hQYXJhbXNcIjtcblxuaW1wb3J0IHsgZ2V0UGFyYW1zRm9yRmllbGRzIH0gZnJvbSBcIkAvaGVscGVycy9zZWFyY2hGaWx0ZXJIZWxwZXJcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgZmllbGRzOiBhbnk7XG4gIHNlYXJjaEZpZWxkczogU2VhcmNoRmllbGRzO1xuICBvbkNsZWFyOiAoKSA9PiB2b2lkO1xuICBvblN1Ym1pdDogKHZhbHVlczogYW55KSA9PiB2b2lkO1xuICBpc1NlYXJjaGluZzogYm9vbGVhbjtcbiAgc3RyaW5nczogU3RyaW5ncztcbiAgbGltaXQ6IG51bWJlcjtcbiAgb2Zmc2V0OiBudW1iZXI7XG59O1xuXG5mdW5jdGlvbiBTZWFyY2hGaWx0ZXIocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIGZpZWxkcyxcbiAgICBzZWFyY2hGaWVsZHMsXG4gICAgb25DbGVhcixcbiAgICBvblN1Ym1pdCxcbiAgICBpc1NlYXJjaGluZyxcbiAgICBvZmZzZXQsXG4gICAgbGltaXQsXG4gICAgc3RyaW5ncyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtzaW1wbGVTZWFyY2hGaWVsZHMsIHNldFNpbXBsZVNlYXJjaEZpZWxkc10gPSB1c2VTdGF0ZTxDb250YWluZXI+KCk7XG4gIGNvbnN0IFthZHZhbmNlZFNlYXJjaEZpZWxkcywgc2V0QWR2YW5jZWRTZWFyY2hGaWVsZHNdID0gdXNlU3RhdGU8Q29udGFpbmVyPigpO1xuICBjb25zdCBbYWR2YW5jZWRGaWx0ZXIsIHNldEFkdmFuY2VkRmlsdGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBbZm9ybV0gPSBGb3JtLnVzZUZvcm0oKTtcblxuICBjb25zdCBnZXRSb3dzQW5kQ29scyA9ICgpID0+IHtcbiAgICBpZiAoIWFkdmFuY2VkU2VhcmNoRmllbGRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmllbGRzID0gYWR2YW5jZWRGaWx0ZXIgPyBhZHZhbmNlZFNlYXJjaEZpZWxkcyA6IHNpbXBsZVNlYXJjaEZpZWxkcztcbiAgICBjb25zdCByb3dzID0gZmllbGRzPy5yb3dzO1xuXG4gICAgcmV0dXJuIHJvd3M/Lm1hcCgocm93LCBpKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Um93IGtleT17aX0+XG4gICAgICAgICAge3Jvdy5tYXAoKGl0ZW0sIGopID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxDb2wgeHM9ezI0fSBjbGFzc05hbWU9XCJwLTJcIiB4bD17Nn0ga2V5PXtqfT5cbiAgICAgICAgICAgICAgICA8U2VhcmNoRmllbGQgZmllbGQ9e2l0ZW0gYXMgRmllbGR9IC8+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9Sb3c+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2ZvID0gbmV3IFNlYXJjaEZpbHRlck9vdWkoc2VhcmNoRmllbGRzLCBmaWVsZHMpO1xuICAgIHNmby5wYXJzZSgpO1xuICAgIHNldFNpbXBsZVNlYXJjaEZpZWxkcyhzZm8uX3NpbXBsZVNlYXJjaENvbnRhaW5lcik7XG4gICAgc2V0QWR2YW5jZWRTZWFyY2hGaWVsZHMoc2ZvLl9hZHZhbmNlZFNlYXJjaENvbnRhaW5lcik7XG4gIH0sIFtmaWVsZHMsIHNlYXJjaEZpZWxkc10pO1xuXG4gIGNvbnN0IHJvd3MgPSBnZXRSb3dzQW5kQ29scygpO1xuXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlczogYW55KSA9PiB7XG4gICAgY29uc3QgeyBsaW1pdCwgb2Zmc2V0IH0gPSB2YWx1ZXM7XG4gICAgZGVsZXRlIHZhbHVlcy5vZmZzZXQ7XG4gICAgZGVsZXRlIHZhbHVlcy5saW1pdDtcbiAgICBjb25zdCBuZXdQYXJhbXMgPSBnZXRQYXJhbXNGb3JGaWVsZHModmFsdWVzLCBmaWVsZHMpO1xuXG4gICAgb25TdWJtaXQoeyBwYXJhbXM6IG5ld1BhcmFtcywgb2Zmc2V0LCBsaW1pdCB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMb2NhbGVzUHJvdmlkZXIgc3RyaW5ncz17c3RyaW5nc30+XG4gICAgICA8Rm9ybVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCByb3VuZGVkIHAtM1wiXG4gICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBvZmZzZXQsIGxpbWl0IH19XG4gICAgICA+XG4gICAgICAgIHtyb3dzfVxuICAgICAgICB7YWR2YW5jZWRGaWx0ZXIgJiYgPFNlYXJjaFBhcmFtcyAvPn1cbiAgICAgICAgPFNlYXJjaEJvdHRvbUJhclxuICAgICAgICAgIGFkdmFuY2VkRmlsdGVyPXthZHZhbmNlZEZpbHRlcn1cbiAgICAgICAgICBvbkFkdmFuY2VkRmlsdGVyVG9nZ2xlPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRBZHZhbmNlZEZpbHRlcighYWR2YW5jZWRGaWx0ZXIpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGVhcj17KCkgPT4ge1xuICAgICAgICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgb25DbGVhcigpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgaXNTZWFyY2hpbmc9e2lzU2VhcmNoaW5nfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvTG9jYWxlc1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGaWx0ZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBJbnRlZ2VyIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0ludGVnZXJcIjtcbmltcG9ydCB7IFJvdywgU3BhY2UgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgSW50ZWdlciBhcyBJbnRlZ2VyT291aSB9IGZyb20gXCJvb3VpXCI7XG5cbmltcG9ydCB7IExvY2FsZXNDb250ZXh0LCBMb2NhbGVzQ29udGV4dFR5cGUgfSBmcm9tIFwiQC9jb250ZXh0L0xvY2FsZXNDb250ZXh0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hQYXJhbXMoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBnZXRTdHJpbmcgfSA9IHVzZUNvbnRleHQoTG9jYWxlc0NvbnRleHQpIGFzIExvY2FsZXNDb250ZXh0VHlwZTtcblxuICBjb25zdCBsaW1pdE9vdWkgPSBuZXcgSW50ZWdlck9vdWkoeyBuYW1lOiBcImxpbWl0XCIgfSk7XG4gIGNvbnN0IG9mZnNldE9vdWkgPSBuZXcgSW50ZWdlck9vdWkoeyBuYW1lOiBcIm9mZnNldFwiIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMiBwdC0yXCI+XG4gICAgICA8Um93IGtleT17XCJjb3VudF9wYXJhbXNcIn0+e2dldFN0cmluZyhcInBhcmFtZXRlcnNcIil9PC9Sb3c+XG4gICAgICA8U3BhY2UgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAge2dldFN0cmluZyhcImxpbWl0XCIpICsgXCIgOlwifVxuICAgICAgICA8SW50ZWdlciBvb3VpPXtsaW1pdE9vdWl9IC8+XG4gICAgICAgIHtnZXRTdHJpbmcoXCJmaXJzdFwiKSArIFwiIDpcIn1cbiAgICAgICAgPEludGVnZXIgb291aT17b2Zmc2V0T291aX0gLz5cbiAgICAgIDwvU3BhY2U+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FudF9kZXNpZ25faWNvbnNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9