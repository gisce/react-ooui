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
                    valuesProcessed = formHelper_1.processValues(_values, form === null || form === void 0 ? void 0 : form.view.fields);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9pcy1wcm9wLXZhbGlkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvQm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvQ2hhci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvQ29udGFpbmVyV2lkZ2V0LmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0RhdGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRmllbGQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRmxvYXQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRmxvYXRUaW1lLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvR3JvdXAuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9MYWJlbC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9NYW55Mm1hbnkuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvTWFueTJvbmUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvTmV3TGluZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Ob3RlYm9vay5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9PbmUybWFueS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9QYWdlLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1NlYXJjaEZpbHRlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9TZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvU2VwYXJhdG9yLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1RleHQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvVHJlZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9XaWRnZXQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvV2lkZ2V0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9oZWxwZXJzL2RvbWFpblBhcnNlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9oZWxwZXJzL25vZGVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9yZWFjdC1jb29sLWRpbWVuc2lvbnMvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3dlcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL3N0eWxlZC1jb21wb25lbnRzL2Rpc3Qvc3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9Db25maWcudHMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9Db25uZWN0aW9uUHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9jb21tb24vRmllbGQudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvY29udGV4dC9Mb2NhbGVzQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9oZWxwZXJzL2NvbnRhaW5lckhlbHBlci50cyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL2hlbHBlcnMvZm9ybUhlbHBlci50cyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL2hlbHBlcnMvc2VhcmNoRmlsdGVySGVscGVyLnRzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvaGVscGVycy90cmVlSGVscGVyLnRzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy91aS9GaWVsZHNldC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL1dpZGdldEZhY3RvcnkudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0Jvb2xlYW4udHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvQ2hhci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvRmxvYXQudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0ludGVnZXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL0xhYmVsLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9NYW55Mm9uZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvT25lMm1hbnkudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL1NlbGVjdGlvbi50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvU2VwYXJhdG9yLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9UZXh0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvY29udGFpbmVycy9Db250YWluZXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9jb250YWluZXJzL0dyb3VwLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvY29udGFpbmVycy9Ob3RlYm9vay50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL21vZGFscy9Gb3JtTW9kYWwudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9tb2RhbHMvU2VhcmNoTW9kYWwudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9Gb3JtLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3MvU2VhcmNoVHJlZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL1NpbXBsZVRyZWUudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9UcmVlLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL0RhdGVSYW5nZVBpY2tlci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9EYXRlVGltZVJhbmdlUGlja2VyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL1BhaXJGaWVsZHMudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvU2VhcmNoQm90dG9tQmFyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL1NlYXJjaEZpZWxkLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL1NlYXJjaEZpbHRlci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9TZWFyY2hQYXJhbXMudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovL3JlYWN0LW9vdWkvZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlYWN0LW9vdWkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlYWN0LW9vdWkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7OztBQ1Z1Qzs7QUFFdkMsazdIQUFrN0g7O0FBRWw3SCxZQUFZLHlEQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZHJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1J2QjtBQUNBO0FBQ0EseUtBQXlLLE9BQU87QUFDaEw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTs7QUFFcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsT0FBTztBQUNs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Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcImFudGRcIiksIHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcImFudGRcIiwgXCJAYW50LWRlc2lnbi9pY29uc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJyZWFjdC1vb3VpXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJhbnRkXCIpLCByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInJlYWN0LW9vdWlcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcImFudGRcIl0sIHJvb3RbXCJAYW50LWRlc2lnbi9pY29uc1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19hbnRfZGVzaWduX2ljb25zX18pIHtcbnJldHVybiAiLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFjY2VwdHxhY2NlcHRDaGFyc2V0fGFjY2Vzc0tleXxhY3Rpb258YWxsb3d8YWxsb3dVc2VyTWVkaWF8YWxsb3dQYXltZW50UmVxdWVzdHxhbGxvd0Z1bGxTY3JlZW58YWxsb3dUcmFuc3BhcmVuY3l8YWx0fGFzeW5jfGF1dG9Db21wbGV0ZXxhdXRvUGxheXxjYXB0dXJlfGNlbGxQYWRkaW5nfGNlbGxTcGFjaW5nfGNoYWxsZW5nZXxjaGFyU2V0fGNoZWNrZWR8Y2l0ZXxjbGFzc0lEfGNsYXNzTmFtZXxjb2xzfGNvbFNwYW58Y29udGVudHxjb250ZW50RWRpdGFibGV8Y29udGV4dE1lbnV8Y29udHJvbHN8Y29udHJvbHNMaXN0fGNvb3Jkc3xjcm9zc09yaWdpbnxkYXRhfGRhdGVUaW1lfGRlY29kaW5nfGRlZmF1bHR8ZGVmZXJ8ZGlyfGRpc2FibGVkfGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHlwZXx1c2VNYXB8dmFsdWV8d2lkdGh8d21vZGV8d3JhcHxhYm91dHxkYXRhdHlwZXxpbmxpc3R8cHJlZml4fHByb3BlcnR5fHJlc291cmNlfHR5cGVvZnx2b2NhYnxhdXRvQ2FwaXRhbGl6ZXxhdXRvQ29ycmVjdHxhdXRvU2F2ZXxjb2xvcnxpbmVydHxpdGVtUHJvcHxpdGVtU2NvcGV8aXRlbVR5cGV8aXRlbUlEfGl0ZW1SZWZ8b258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaW5kZXggPSBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsImZ1bmN0aW9uIHN0eWxpc19taW4gKFcpIHtcbiAgZnVuY3Rpb24gTShkLCBjLCBlLCBoLCBhKSB7XG4gICAgZm9yICh2YXIgbSA9IDAsIGIgPSAwLCB2ID0gMCwgbiA9IDAsIHEsIGcsIHggPSAwLCBLID0gMCwgaywgdSA9IGsgPSBxID0gMCwgbCA9IDAsIHIgPSAwLCBJID0gMCwgdCA9IDAsIEIgPSBlLmxlbmd0aCwgSiA9IEIgLSAxLCB5LCBmID0gJycsIHAgPSAnJywgRiA9ICcnLCBHID0gJycsIEM7IGwgPCBCOykge1xuICAgICAgZyA9IGUuY2hhckNvZGVBdChsKTtcbiAgICAgIGwgPT09IEogJiYgMCAhPT0gYiArIG4gKyB2ICsgbSAmJiAoMCAhPT0gYiAmJiAoZyA9IDQ3ID09PSBiID8gMTAgOiA0NyksIG4gPSB2ID0gbSA9IDAsIEIrKywgSisrKTtcblxuICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgaWYgKGwgPT09IEogJiYgKDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSksIDAgPCBmLnRyaW0oKS5sZW5ndGgpKSB7XG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgZiArPSBlLmNoYXJBdChsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnID0gNTk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgIGYgPSBmLnRyaW0oKTtcbiAgICAgICAgICAgIHEgPSBmLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgZm9yICh0ID0gKytsOyBsIDwgQjspIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodSA9IGwgKyAxOyB1IDwgSjsgKyt1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5jaGFyQ29kZUF0KHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0MiA9PT0gZyAmJiA0MiA9PT0gZS5jaGFyQ29kZUF0KHUgLSAxKSAmJiBsICsgMiAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0NyA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgIGZvciAoOyBsKysgPCBKICYmIGUuY2hhckNvZGVBdChsKSAhPT0gZzspIHtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKDAgPT09IGspIGJyZWFrO1xuICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGsgPSBlLnN1YnN0cmluZyh0LCBsKTtcbiAgICAgICAgICAgIDAgPT09IHEgJiYgKHEgPSAoZiA9IGYucmVwbGFjZShjYSwgJycpLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocSkge1xuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSk7XG4gICAgICAgICAgICAgICAgZyA9IGYuY2hhckNvZGVBdCgxKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgciA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByID0gTztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrID0gTShjLCByLCBrLCBnLCBhICsgMSk7XG4gICAgICAgICAgICAgICAgdCA9IGsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIDAgPCBBICYmIChyID0gWChPLCBmLCBJKSwgQyA9IEgoMywgaywgciwgYywgRCwgeiwgdCwgZywgYSwgaCksIGYgPSByLmpvaW4oJycpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHQgPSAoayA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChnID0gMCwgayA9ICcnKSk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0KSBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGRhLCBlYSk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShmYSwgJyQxICQyJyk7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgayA9IDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKCdAJyArIGssIDMpID8gJ0Atd2Via2l0LScgKyBrICsgJ0AnICsgayA6ICdAJyArIGs7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArIGssIDExMiA9PT0gaCAmJiAoayA9IChwICs9IGssICcnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGsgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIFgoYywgZiwgSSksIGssIGgsIGEgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRiArPSBrO1xuICAgICAgICAgICAgayA9IEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgZiA9ICgwIDwgciA/IGYucmVwbGFjZShOLCAnJykgOiBmKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoMSA8ICh0ID0gZi5sZW5ndGgpKSBzd2l0Y2ggKDAgPT09IHUgJiYgKHEgPSBmLmNoYXJDb2RlQXQoMCksIDQ1ID09PSBxIHx8IDk2IDwgcSAmJiAxMjMgPiBxKSAmJiAodCA9IChmID0gZi5yZXBsYWNlKCcgJywgJzonKSkubGVuZ3RoKSwgMCA8IEEgJiYgdm9pZCAwICE9PSAoQyA9IEgoMSwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpKSAmJiAwID09PSAodCA9IChmID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGYgPSAnXFx4MDBcXHgwMCcpLCBxID0gZi5jaGFyQ29kZUF0KDApLCBnID0gZi5jaGFyQ29kZUF0KDEpLCBxKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIGlmICgxMDUgPT09IGcgfHwgOTkgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgIEcgKz0gZiArIGUuY2hhckF0KGwpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgNTggIT09IGYuY2hhckNvZGVBdCh0IC0gMSkgJiYgKHAgKz0gUChmLCBxLCBnLCBmLmNoYXJDb2RlQXQoMikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIDQ3ID09PSBiID8gYiA9IDAgOiAwID09PSAxICsgcSAmJiAxMDcgIT09IGggJiYgMCA8IGYubGVuZ3RoICYmIChyID0gMSwgZiArPSAnXFx4MDAnKTtcbiAgICAgICAgICAwIDwgQSAqIFkgJiYgSCgwLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCk7XG4gICAgICAgICAgeiA9IDE7XG4gICAgICAgICAgRCsrO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTk6XG4gICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgICAgICB6Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB6Kys7XG4gICAgICAgICAgeSA9IGUuY2hhckF0KGwpO1xuXG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIG0gKyBiKSBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICB5ID0gJyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAzMiAhPT0gZyAmJiAoeSA9ICcgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFxmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXHYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIChyID0gSSA9IDEsIHkgPSAnXFxmJyArIHkpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0gKyBFICYmIDAgPCB1KSBzd2l0Y2ggKGwgLSB1KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgMTEyID09PSB4ICYmIDU4ID09PSBlLmNoYXJDb2RlQXQobCAtIDMpICYmIChFID0geCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAxMTEgPT09IEsgJiYgKEUgPSBLKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmICh1ID0gbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICYmIChyID0gMSwgeSArPSAnXFxyJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgMCA9PT0gYiAmJiAobiA9IG4gPT09IGcgPyAwIDogMCA9PT0gbiA/IGcgOiBuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbS0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIHYtLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcSkgc3dpdGNoICgyICogeCArIDMgKiBLKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHEgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSArIHUgKyBrICYmIChrID0gMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgaWYgKCEoMCA8IG4gKyBtICsgdikpIHN3aXRjaCAoYikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoMiAqIGcgKyAzICogZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzNTpcbiAgICAgICAgICAgICAgICAgICAgICBiID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgICAgICAgdCA9IGwsIGIgPSA0MjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgNDcgPT09IGcgJiYgNDIgPT09IHggJiYgdCArIDIgIT09IGwgJiYgKDMzID09PSBlLmNoYXJDb2RlQXQodCArIDIpICYmIChwICs9IGUuc3Vic3RyaW5nKHQsIGwgKyAxKSksIHkgPSAnJywgYiA9IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMCA9PT0gYiAmJiAoZiArPSB5KTtcbiAgICAgIH1cblxuICAgICAgSyA9IHg7XG4gICAgICB4ID0gZztcbiAgICAgIGwrKztcbiAgICB9XG5cbiAgICB0ID0gcC5sZW5ndGg7XG5cbiAgICBpZiAoMCA8IHQpIHtcbiAgICAgIHIgPSBjO1xuICAgICAgaWYgKDAgPCBBICYmIChDID0gSCgyLCBwLCByLCBkLCBELCB6LCB0LCBoLCBhLCBoKSwgdm9pZCAwICE9PSBDICYmIDAgPT09IChwID0gQykubGVuZ3RoKSkgcmV0dXJuIEcgKyBwICsgRjtcbiAgICAgIHAgPSByLmpvaW4oJywnKSArICd7JyArIHAgKyAnfSc7XG5cbiAgICAgIGlmICgwICE9PSB3ICogRSkge1xuICAgICAgICAyICE9PSB3IHx8IEwocCwgMikgfHwgKEUgPSAwKTtcblxuICAgICAgICBzd2l0Y2ggKEUpIHtcbiAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoaGEsICc6LW1vei0kMScpICsgcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKFEsICc6Oi13ZWJraXQtaW5wdXQtJDEnKSArIHAucmVwbGFjZShRLCAnOjotbW96LSQxJykgKyBwLnJlcGxhY2UoUSwgJzotbXMtaW5wdXQtJDEnKSArIHA7XG4gICAgICAgIH1cblxuICAgICAgICBFID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRyArIHAgKyBGO1xuICB9XG5cbiAgZnVuY3Rpb24gWChkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLnRyaW0oKS5zcGxpdChpYSk7XG4gICAgYyA9IGg7XG4gICAgdmFyIGEgPSBoLmxlbmd0aCxcbiAgICAgICAgbSA9IGQubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHZhciBiID0gMDtcblxuICAgICAgICBmb3IgKGQgPSAwID09PSBtID8gJycgOiBkWzBdICsgJyAnOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgY1tiXSA9IFooZCwgY1tiXSwgZSkudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2ID0gYiA9IDA7XG5cbiAgICAgICAgZm9yIChjID0gW107IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG07ICsrbikge1xuICAgICAgICAgICAgY1t2KytdID0gWihkW25dICsgJyAnLCBoW2JdLCBlKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFooZCwgYywgZSkge1xuICAgIHZhciBoID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIDMzID4gaCAmJiAoaCA9IChjID0gYy50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgc3dpdGNoIChoKSB7XG4gICAgICBjYXNlIDM4OlxuICAgICAgICByZXR1cm4gYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIHJldHVybiBkLnRyaW0oKSArIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoMCA8IDEgKiBlICYmIDAgPCBjLmluZGV4T2YoJ1xcZicpKSByZXR1cm4gYy5yZXBsYWNlKEYsICg1OCA9PT0gZC5jaGFyQ29kZUF0KDApID8gJycgOiAnJDEnKSArIGQudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZCArIGM7XG4gIH1cblxuICBmdW5jdGlvbiBQKGQsIGMsIGUsIGgpIHtcbiAgICB2YXIgYSA9IGQgKyAnOycsXG4gICAgICAgIG0gPSAyICogYyArIDMgKiBlICsgNCAqIGg7XG5cbiAgICBpZiAoOTQ0ID09PSBtKSB7XG4gICAgICBkID0gYS5pbmRleE9mKCc6JywgOSkgKyAxO1xuICAgICAgdmFyIGIgPSBhLnN1YnN0cmluZyhkLCBhLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgIGIgPSBhLnN1YnN0cmluZygwLCBkKS50cmltKCkgKyBiICsgJzsnO1xuICAgICAgcmV0dXJuIDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKGIsIDEpID8gJy13ZWJraXQtJyArIGIgKyBiIDogYjtcbiAgICB9XG5cbiAgICBpZiAoMCA9PT0gdyB8fCAyID09PSB3ICYmICFMKGEsIDEpKSByZXR1cm4gYTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAxMDE1OlxuICAgICAgICByZXR1cm4gOTcgPT09IGEuY2hhckNvZGVBdCgxMCkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk1MTpcbiAgICAgICAgcmV0dXJuIDExNiA9PT0gYS5jaGFyQ29kZUF0KDMpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NjM6XG4gICAgICAgIHJldHVybiAxMTAgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMTAwOTpcbiAgICAgICAgaWYgKDEwMCAhPT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5Njk6XG4gICAgICBjYXNlIDk0MjpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5Nzg6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDE5OlxuICAgICAgY2FzZSA5ODM6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgODgzOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg4KSkgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcbiAgICAgICAgaWYgKDAgPCBhLmluZGV4T2YoJ2ltYWdlLXNldCgnLCAxMSkpIHJldHVybiBhLnJlcGxhY2UoamEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMjpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNCkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDUpKSB7XG4gICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LScgKyBhLnJlcGxhY2UoJy1ncm93JywgJycpICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2dyb3cnLCAncG9zaXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTY0OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMjM6XG4gICAgICAgIGlmICg5OSAhPT0gYS5jaGFyQ29kZUF0KDgpKSBicmVhaztcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKGEuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jyk7XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtcGFjaycgKyBiICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtcGFjaycgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDA1OlxuICAgICAgICByZXR1cm4ga2EudGVzdChhKSA/IGEucmVwbGFjZShhYSwgJzotd2Via2l0LScpICsgYS5yZXBsYWNlKGFhLCAnOi1tb3otJykgKyBhIDogYTtcblxuICAgICAgY2FzZSAxZTM6XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZygxMykudHJpbSgpO1xuICAgICAgICBjID0gYi5pbmRleE9mKCctJykgKyAxO1xuXG4gICAgICAgIHN3aXRjaCAoYi5jaGFyQ29kZUF0KDApICsgYi5jaGFyQ29kZUF0KGMpKSB7XG4gICAgICAgICAgY2FzZSAyMjY6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0YicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIzMjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiLXJsJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAnbHInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAxNzpcbiAgICAgICAgaWYgKC0xID09PSBhLmluZGV4T2YoJ3N0aWNreScsIDkpKSBicmVhaztcblxuICAgICAgY2FzZSA5NzU6XG4gICAgICAgIGMgPSAoYSA9IGQpLmxlbmd0aCAtIDEwO1xuICAgICAgICBiID0gKDMzID09PSBhLmNoYXJDb2RlQXQoYykgPyBhLnN1YnN0cmluZygwLCBjKSA6IGEpLnN1YnN0cmluZyhkLmluZGV4T2YoJzonLCA3KSArIDEpLnRyaW0oKTtcblxuICAgICAgICBzd2l0Y2ggKG0gPSBiLmNoYXJDb2RlQXQoMCkgKyAoYi5jaGFyQ29kZUF0KDcpIHwgMCkpIHtcbiAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgIGlmICgxMTEgPiBiLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjA3OlxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgKDEwMiA8IG0gPyAnaW5saW5lLScgOiAnJykgKyAnYm94JykgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYS5yZXBsYWNlKGIsICctbXMtJyArIGIgKyAnYm94JykgKyAnOycgKyBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEgKyAnOyc7XG5cbiAgICAgIGNhc2UgOTM4OlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg1KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNikpIHtcbiAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgIHJldHVybiBiID0gYS5yZXBsYWNlKCctaXRlbXMnLCAnJyksICctd2Via2l0LScgKyBhICsgJy13ZWJraXQtYm94LScgKyBiICsgJy1tcy1mbGV4LScgKyBiICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWl0ZW0tJyArIGEucmVwbGFjZShiYSwgJycpICsgYTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtbGluZS1wYWNrJyArIGEucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3MzpcbiAgICAgIGNhc2UgOTg5OlxuICAgICAgICBpZiAoNDUgIT09IGEuY2hhckNvZGVBdCgzKSB8fCAxMjIgPT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMxOlxuICAgICAgY2FzZSA5NTM6XG4gICAgICAgIGlmICghMCA9PT0gbGEudGVzdChkKSkgcmV0dXJuIDExNSA9PT0gKGIgPSBkLnN1YnN0cmluZyhkLmluZGV4T2YoJzonKSArIDEpKS5jaGFyQ29kZUF0KDApID8gUChkLnJlcGxhY2UoJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgYywgZSwgaCkucmVwbGFjZSgnOmZpbGwtYXZhaWxhYmxlJywgJzpzdHJldGNoJykgOiBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgYS5yZXBsYWNlKGIsICctbW96LScgKyBiLnJlcGxhY2UoJ2ZpbGwtJywgJycpKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2MjpcbiAgICAgICAgaWYgKGEgPSAnLXdlYmtpdC0nICsgYSArICgxMDIgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctbXMtJyArIGEgOiAnJykgKyBhLCAyMTEgPT09IGUgKyBoICYmIDEwNSA9PT0gYS5jaGFyQ29kZUF0KDEzKSAmJiAwIDwgYS5pbmRleE9mKCd0cmFuc2Zvcm0nLCAxMCkpIHJldHVybiBhLnN1YnN0cmluZygwLCBhLmluZGV4T2YoJzsnLCAyNykgKyAxKS5yZXBsYWNlKG1hLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgZnVuY3Rpb24gTChkLCBjKSB7XG4gICAgdmFyIGUgPSBkLmluZGV4T2YoMSA9PT0gYyA/ICc6JyA6ICd7JyksXG4gICAgICAgIGggPSBkLnN1YnN0cmluZygwLCAzICE9PSBjID8gZSA6IDEwKTtcbiAgICBlID0gZC5zdWJzdHJpbmcoZSArIDEsIGQubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIFIoMiAhPT0gYyA/IGggOiBoLnJlcGxhY2UobmEsICckMScpLCBlLCBjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhKGQsIGMpIHtcbiAgICB2YXIgZSA9IFAoYywgYy5jaGFyQ29kZUF0KDApLCBjLmNoYXJDb2RlQXQoMSksIGMuY2hhckNvZGVBdCgyKSk7XG4gICAgcmV0dXJuIGUgIT09IGMgKyAnOycgPyBlLnJlcGxhY2Uob2EsICcgb3IgKCQxKScpLnN1YnN0cmluZyg0KSA6ICcoJyArIGMgKyAnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBIKGQsIGMsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpIHtcbiAgICBmb3IgKHZhciBnID0gMCwgeCA9IGMsIHc7IGcgPCBBOyArK2cpIHtcbiAgICAgIHN3aXRjaCAodyA9IFNbZ10uY2FsbChCLCBkLCB4LCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSkge1xuICAgICAgICBjYXNlIHZvaWQgMDpcbiAgICAgICAgY2FzZSAhMTpcbiAgICAgICAgY2FzZSAhMDpcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeCA9IHc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggIT09IGMpIHJldHVybiB4O1xuICB9XG5cbiAgZnVuY3Rpb24gVChkKSB7XG4gICAgc3dpdGNoIChkKSB7XG4gICAgICBjYXNlIHZvaWQgMDpcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgQSA9IFMubGVuZ3RoID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZCkgU1tBKytdID0gZDtlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGQpIGZvciAodmFyIGMgPSAwLCBlID0gZC5sZW5ndGg7IGMgPCBlOyArK2MpIHtcbiAgICAgICAgICBUKGRbY10pO1xuICAgICAgICB9IGVsc2UgWSA9ICEhZCB8IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFQ7XG4gIH1cblxuICBmdW5jdGlvbiBVKGQpIHtcbiAgICBkID0gZC5wcmVmaXg7XG4gICAgdm9pZCAwICE9PSBkICYmIChSID0gbnVsbCwgZCA/ICdmdW5jdGlvbicgIT09IHR5cGVvZiBkID8gdyA9IDEgOiAodyA9IDIsIFIgPSBkKSA6IHcgPSAwKTtcbiAgICByZXR1cm4gVTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEIoZCwgYykge1xuICAgIHZhciBlID0gZDtcbiAgICAzMyA+IGUuY2hhckNvZGVBdCgwKSAmJiAoZSA9IGUudHJpbSgpKTtcbiAgICBWID0gZTtcbiAgICBlID0gW1ZdO1xuXG4gICAgaWYgKDAgPCBBKSB7XG4gICAgICB2YXIgaCA9IEgoLTEsIGMsIGUsIGUsIEQsIHosIDAsIDAsIDAsIDApO1xuICAgICAgdm9pZCAwICE9PSBoICYmICdzdHJpbmcnID09PSB0eXBlb2YgaCAmJiAoYyA9IGgpO1xuICAgIH1cblxuICAgIHZhciBhID0gTShPLCBlLCBjLCAwLCAwKTtcbiAgICAwIDwgQSAmJiAoaCA9IEgoLTIsIGEsIGUsIGUsIEQsIHosIGEubGVuZ3RoLCAwLCAwLCAwKSwgdm9pZCAwICE9PSBoICYmIChhID0gaCkpO1xuICAgIFYgPSAnJztcbiAgICBFID0gMDtcbiAgICB6ID0gRCA9IDE7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICB2YXIgY2EgPSAvXlxcMCsvZyxcbiAgICAgIE4gPSAvW1xcMFxcclxcZl0vZyxcbiAgICAgIGFhID0gLzogKi9nLFxuICAgICAga2EgPSAvem9vfGdyYS8sXG4gICAgICBtYSA9IC8oWyw6IF0pKHRyYW5zZm9ybSkvZyxcbiAgICAgIGlhID0gLyxcXHIrPy9nLFxuICAgICAgRiA9IC8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLFxuICAgICAgZmEgPSAvQChrXFx3KylcXHMqKFxcUyopXFxzKi8sXG4gICAgICBRID0gLzo6KHBsYWNlKS9nLFxuICAgICAgaGEgPSAvOihyZWFkLW9ubHkpL2csXG4gICAgICBHID0gL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFxuICAgICAgZGEgPSAvXFwoXFxzKiguKilcXHMqXFwpL2csXG4gICAgICBvYSA9IC8oW1xcc1xcU10qPyk7L2csXG4gICAgICBiYSA9IC8tc2VsZnxmbGV4LS9nLFxuICAgICAgbmEgPSAvW15dKj8oOltycF1bZWxdYVtcXHctXSspW15dKi8sXG4gICAgICBsYSA9IC9zdHJldGNofDpcXHMqXFx3K1xcLSg/OmNvbnRlfGF2YWlsKS8sXG4gICAgICBqYSA9IC8oW14tXSkoaW1hZ2Utc2V0XFwoKS8sXG4gICAgICB6ID0gMSxcbiAgICAgIEQgPSAxLFxuICAgICAgRSA9IDAsXG4gICAgICB3ID0gMSxcbiAgICAgIE8gPSBbXSxcbiAgICAgIFMgPSBbXSxcbiAgICAgIEEgPSAwLFxuICAgICAgUiA9IG51bGwsXG4gICAgICBZID0gMCxcbiAgICAgIFYgPSAnJztcbiAgQi51c2UgPSBUO1xuICBCLnNldCA9IFU7XG4gIHZvaWQgMCAhPT0gVyAmJiBVKFcpO1xuICByZXR1cm4gQjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGlzX21pbjtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogQm9vbGVhbiBpbnB1dFxuICovXG52YXIgQm9vbGVhbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQm9vbGVhbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCb29sZWFuKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEJvb2xlYW47XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBCb29sZWFuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Qm9vbGVhbi5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xudmFyIEJ1dHRvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnV0dG9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMpLCB7IG5vbGFiZWw6IChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMubm9sYWJlbCkgIT09IHVuZGVmaW5lZCA/IHByb3BzLm5vbGFiZWwgOiB0cnVlIH0pKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogVHlwZSAocHJpbWFyeSBvciBkZWZhdWx0KVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3R5cGUgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJ1dHRvbiBjYXB0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fY2FwdGlvbiA9IFwiXCI7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9jYXB0aW9uID0gcHJvcHMuc3RyaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbi5wcm90b3R5cGUsIFwidHlwZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90eXBlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnV0dG9uLnByb3RvdHlwZSwgXCJjYXB0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FwdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhcHRpb24gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBCdXR0b247XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1CdXR0b24uanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBPbmUtbGluZSBpbnB1dCB3aXRoIGEgbGVuZ3RoIGxpbWl0LlxuICovXG52YXIgQ2hhciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2hhciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDaGFyKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgcGxhY2UgaG9sZGVyXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fcGxhY2Vob2xkZXIgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIF90aGlzLl9pc1Bhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fc2l6ZSA9IHByb3BzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pc1Bhc3N3b3JkID0gcHJvcHMucGFzc3dvcmQgPT09IFwiVHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENoYXIucHJvdG90eXBlLCBcInBsYWNlaG9sZGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENoYXIucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENoYXIucHJvdG90eXBlLCBcImlzUGFzc3dvcmRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1Bhc3N3b3JkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faXNQYXNzd29yZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIENoYXI7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBDaGFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2hhci5qcy5tYXAiLCJpbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbmltcG9ydCBOZXdMaW5lIGZyb20gXCIuL05ld0xpbmVcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xudmFyIENvbnRhaW5lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb250YWluZXIoY29sdW1ucywgY29sc3Bhbikge1xuICAgICAgICBpZiAoY29sdW1ucyA9PT0gdm9pZCAwKSB7IGNvbHVtbnMgPSA0OyB9XG4gICAgICAgIGlmIChjb2xzcGFuID09PSB2b2lkIDApIHsgY29sc3BhbiA9IDY7IH1cbiAgICAgICAgdGhpcy5fY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgICAgIHRoaXMuX2NvbHNwYW4gPSBjb2xzcGFuO1xuICAgICAgICB0aGlzLl9yb3dzID0gW1tdXTtcbiAgICAgICAgdGhpcy5faW5kZXggPSAwO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyLnByb3RvdHlwZSwgXCJjb2x1bW5zXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1ucztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbHVtbnMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXIucHJvdG90eXBlLCBcImNvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2xzcGFuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY29sc3BhbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lci5wcm90b3R5cGUsIFwicm93c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jvd3M7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyLnByb3RvdHlwZSwgXCJpbmRleFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV4dCBmcmVlIHBvc2l0aW9uXG4gICAgICovXG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5mcmVlUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzcGFuID0gdGhpcy5fcm93c1t0aGlzLl9pbmRleF0uZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gIWVsLmludmlzaWJsZTsgfSkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldiArIGN1cnJlbnQuY29sc3BhbjtcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb2x1bW5zIC0gc3BhbjtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuYWRkV2lkZ2V0ID0gZnVuY3Rpb24gKHdpZGdldCwgb3B0aW9ucykge1xuICAgICAgICB2YXIgd2lkZ2V0c1RvQWRkID0gW107XG4gICAgICAgIHZhciBhZGRMYWJlbCA9IG9wdGlvbnMgPyBvcHRpb25zLmFkZExhYmVsIDogdHJ1ZTtcbiAgICAgICAgaWYgKHdpZGdldCBpbnN0YW5jZW9mIE5ld0xpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd3MucHVzaChbXSk7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCsrO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aWRnZXQuY29sc3BhbiA+IHRoaXMuX2NvbHVtbnMpIHtcbiAgICAgICAgICAgIC8vIFdpZGdldCBjb2xzcGFuIGlzIGdyZWF0ZXIgdGhhbiBjb250YWluZXIgY29sdW1ucywgc28gd2UgY2hhbmdlIHdpZGdldFxuICAgICAgICAgICAgLy8gY29sc3BhbiB0byBmaXQgY29udGFpbmVyIGNvbHVtbnMuXG4gICAgICAgICAgICB3aWRnZXQuY29sc3BhbiA9IHRoaXMuX2NvbHVtbnM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGZpZWxkcyB3aXRob3V0IG5vbGFiZWwgd2UgYWRkIGEgcHJlY2VkaW5nIGxhYmVsIHdpZGdldFxuICAgICAgICBpZiAoYWRkTGFiZWwgJiYgd2lkZ2V0IGluc3RhbmNlb2YgRmllbGQgJiYgIXdpZGdldC5ub2xhYmVsKSB7XG4gICAgICAgICAgICBpZiAod2lkZ2V0LmNvbHNwYW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LmNvbHNwYW4gLT0gMTsgLy8gV2Ugc3Vic3RyYWN0IG9uZSBjb2xzcGFuIGZvciB0aGUgY29ycmVzcG9uZGluZyBsYWJlbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxhYmVsID0gbmV3IExhYmVsKHtcbiAgICAgICAgICAgICAgICBuYW1lOiB3aWRnZXQuaWQgKyBcIl9sYWJlbFwiLFxuICAgICAgICAgICAgICAgIHN0cmluZzogd2lkZ2V0LmxhYmVsLFxuICAgICAgICAgICAgICAgIGludmlzaWJsZTogd2lkZ2V0LmludmlzaWJsZSxcbiAgICAgICAgICAgICAgICBoZWxwOiB3aWRnZXQudG9vbHRpcCxcbiAgICAgICAgICAgICAgICBmaWVsZEZvckxhYmVsOiB3aWRnZXQuaWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpZGdldHNUb0FkZC5wdXNoKGxhYmVsKTtcbiAgICAgICAgICAgIHdpZGdldHNUb0FkZC5wdXNoKHdpZGdldCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWRnZXRzVG9BZGQucHVzaCh3aWRnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3aWRnZXRzQ29sc3BhbiA9IHdpZGdldHNUb0FkZC5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBjdXJyZW50V2lkZ2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBjdXJyZW50V2lkZ2V0LmNvbHNwYW47XG4gICAgICAgIH0sIDApO1xuICAgICAgICBpZiAod2lkZ2V0c0NvbHNwYW4gPiB0aGlzLmZyZWVQb3NpdGlvbigpKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzLnB1c2goW10pO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yb3dzW3RoaXMuX2luZGV4XSA9IHRoaXMuX3Jvd3NbdGhpcy5faW5kZXhdLmNvbmNhdCh3aWRnZXRzVG9BZGQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJhdmVyc2VzIGNoaWxkcmVuIHRvIGZpbmQgYSBtYXRjaGluZyBjb250YWluZXIgb3Igd2lkZ2V0IHdpdGggdGhlIGV4YWN0IHNhbWUgaWQuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIChuYW1lKSBvZiB0aGUgZmllbGQgb3IgY29udGFpbmVyIHRvIGZpbmRcbiAgICAgKi9cbiAgICBDb250YWluZXIucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX3Jvd3MgJiYgdGhpcy5fcm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd3MuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSXRlbSBoYXMgYmVlbiBmb3VuZC5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocm93ICYmIHJvdy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcm93LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXRlbSBoYXMgYmVlbiBmb3VuZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIgPSBpdGVtLmZpbmRCeUlkKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udGFpbmVyO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbnRhaW5lci5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG52YXIgQ29udGFpbmVyV2lkZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb250YWluZXJXaWRnZXQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29udGFpbmVyV2lkZ2V0KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgaWRlbnRpZmllclxuICAgICAgICAgKlxuICAgICAgICAgKiBDb3JyZXNwb25kcyB0byB0aGUgZmllbGQncyBuYW1lIGF0dHJpYnV0ZSBmcm9tIHhtbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2lkID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnRhaW5lciBsYWJlbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2xhYmVsID0gXCJcIjtcbiAgICAgICAgX3RoaXMuX2NvbnRhaW5lciA9IG5ldyBDb250YWluZXIocHJvcHMgJiYgcHJvcHMuY29sLCBDb250YWluZXJXaWRnZXQuX2RlZmF1bHRDb2xzcGFuKTtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMubmFtZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9pZCA9IHByb3BzLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9jb250YWluZXIuY29sc3BhbiA9ICtwcm9wcy5jb2xzcGFuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9sYWJlbCA9IHByb3BzLnN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXJXaWRnZXQucHJvdG90eXBlLCBcImlkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lcldpZGdldCwgXCJkZWZhdWx0Q29sc3BhblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIENvbnRhaW5lcldpZGdldC5fZGVmYXVsdENvbHNwYW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBDb250YWluZXJXaWRnZXQuX2RlZmF1bHRDb2xzcGFuID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyV2lkZ2V0LnByb3RvdHlwZSwgXCJjb250YWluZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXJXaWRnZXQucHJvdG90eXBlLCBcImNvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXIuY29sc3BhbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5jb2xzcGFuID0gK3ZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lcldpZGdldC5wcm90b3R5cGUsIFwibGFiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBDYWxscyBjb250YWluZXIncyBmaW5kQnlJZCBtZXRob2QgdG8gZmluZCB0aGUgd2lkZ2V0cyBtYXRjaGluZyB3aXRoIHBhcmFtIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIHRvIGZpbmRcbiAgICAgKi9cbiAgICBDb250YWluZXJXaWRnZXQucHJvdG90eXBlLmZpbmRCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmIChpZCA9PT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmZpbmRCeUlkKGlkKTtcbiAgICB9O1xuICAgIENvbnRhaW5lcldpZGdldC5fZGVmYXVsdENvbHNwYW4gPSA2O1xuICAgIHJldHVybiBDb250YWluZXJXaWRnZXQ7XG59KFdpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyV2lkZ2V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29udGFpbmVyV2lkZ2V0LmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogRGF0ZSBpbnB1dFxuICovXG52YXIgRGF0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGF0ZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEYXRlKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIERhdGU7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBEYXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGF0ZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIERhdGVUaW1lIGlucHV0XG4gKi9cbnZhciBEYXRlVGltZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGF0ZVRpbWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGF0ZVRpbWUocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gRGF0ZVRpbWU7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURhdGVUaW1lLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuL1dpZGdldFwiO1xuaW1wb3J0IHsgcGFyc2VEb21haW4gfSBmcm9tIFwiLi9oZWxwZXJzL2RvbWFpblBhcnNlclwiO1xudmFyIEZpZWxkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGaWVsZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGaWVsZChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIGlkZW50aWZpZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQ29ycmVzcG9uZHMgdG8gdGhlIGZpZWxkJ3MgbmFtZSBhdHRyaWJ1dGUgZnJvbSB4bWxcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9pZCA9IFwiXCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMYWJlbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2xhYmVsID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE5vIGxhYmVsXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgZmllbGQgaGFzbid0IGdvdCB0byBzaG93IHRoZSBsYWJlbFxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX25vbGFiZWwgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIFJlcXVpcmVkIGZpZWxkXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fcmVxdWlyZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFjdGl2YXRlZCAoZGVmYXVsdCBpcyB0cnVlKVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2FjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgIC8vIEFjdGl2YXRlZCBieSBkZWZhdWx0XG4gICAgICAgIF90aGlzLl9hY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2lkID0gcHJvcHMubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5hY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fYWN0aXZhdGVkID0gcHJvcHMuYWN0aXZhdGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9sYWJlbCA9IHByb3BzLnN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5oZWxwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3Rvb2x0aXAgPSBwcm9wcy5oZWxwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLmRvbWFpbikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9kb21haW4gPSBwYXJzZURvbWFpbihwcm9wcy5kb21haW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLm5vbGFiZWwgJiZcbiAgICAgICAgICAgICAgICAocHJvcHMubm9sYWJlbCA9PT0gXCIxXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBwcm9wcy5ub2xhYmVsID09PSBcImJvb2xlYW5cIiAmJiBwcm9wcy5ub2xhYmVsID09PSB0cnVlKSkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbm9sYWJlbCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMucmVxdWlyZWQgJiZcbiAgICAgICAgICAgICAgICAocHJvcHMucmVxdWlyZWQgPT09IFwiMVwiIHx8IHByb3BzLnJlcXVpcmVkID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmllbGQucHJvdG90eXBlLCBcImlkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpZWxkLnByb3RvdHlwZSwgXCJsYWJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWVsZC5wcm90b3R5cGUsIFwibm9sYWJlbFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25vbGFiZWw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9ub2xhYmVsID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmllbGQucHJvdG90eXBlLCBcInJlcXVpcmVkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1aXJlZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpZWxkLnByb3RvdHlwZSwgXCJ0b29sdGlwXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdG9vbHRpcDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Rvb2x0aXAgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWVsZC5wcm90b3R5cGUsIFwiZG9tYWluXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZG9tYWluO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fZG9tYWluID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmllbGQucHJvdG90eXBlLCBcImFjdGl2YXRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2YXRlZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGlzIGluc3RhbmNlIGluIGNhc2UgdGhpcyBpZCBtYXRjaGVzIHBhcmFtIGlkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZCAobmFtZSkgdG8gZmluZFxuICAgICAqL1xuICAgIEZpZWxkLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgciA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHIgPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgcmV0dXJuIEZpZWxkO1xufShXaWRnZXQpKTtcbmV4cG9ydCBkZWZhdWx0IEZpZWxkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmllbGQuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBGbG9hdCBpbnB1dFxuICovXG52YXIgRmxvYXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZWdlciBkaWdpdHNcbiAgICAgICAgICpcbiAgICAgICAgICogTnVtYmVyIG9mIGludGVnZXIgZGlnaXRzIHRoYXQgd2lsbCBiZSBwYXJ0IG9mIHRoZSBmbG9hdFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2ludGVnZXJEaWdpdHMgPSAxNjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY2ltYWwgZGlnaXRzXG4gICAgICAgICAqXG4gICAgICAgICAqIE51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cyB0aGF0IHdpbGwgYmUgcGFydCBvZiB0aGUgZmxvYXRcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9kZWNpbWFsRGlnaXRzID0gMjtcbiAgICAgICAgaWYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5kaWdpdHMpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHByb3BzLmRpZ2l0cywgaW50ZWdlcnMgPSBfYVswXSwgZGVjaW1hbHMgPSBfYVsxXTtcbiAgICAgICAgICAgIF90aGlzLl9pbnRlZ2VyRGlnaXRzID0gaW50ZWdlcnM7XG4gICAgICAgICAgICBfdGhpcy5fZGVjaW1hbERpZ2l0cyA9IGRlY2ltYWxzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0LnByb3RvdHlwZSwgXCJpbnRlZ2VyRGlnaXRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW50ZWdlckRpZ2l0cztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2ludGVnZXJEaWdpdHMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGbG9hdC5wcm90b3R5cGUsIFwiZGVjaW1hbERpZ2l0c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlY2ltYWxEaWdpdHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWNpbWFsRGlnaXRzID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRmxvYXQ7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBGbG9hdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZsb2F0LmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmxvYXQgZnJvbSBcIi4vRmxvYXRcIjtcbi8qKlxuICogRmxvYXRUaW1lIGlucHV0XG4gKi9cbnZhciBGbG9hdFRpbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0VGltZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGbG9hdFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEZsb2F0VGltZTtcbn0oRmxvYXQpKTtcbmV4cG9ydCBkZWZhdWx0IEZsb2F0VGltZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZsb2F0VGltZS5qcy5tYXAiLCJpbXBvcnQgV2lkZ2V0RmFjdG9yeSBmcm9tIFwiLi9XaWRnZXRGYWN0b3J5XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbmltcG9ydCB7IHBhcnNlTm9kZXMgfSBmcm9tIFwiLi9oZWxwZXJzL25vZGVQYXJzZXJcIjtcbnZhciBGb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgX3dpZGdldHMgPSB7XG4gICAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIgJiYgdGhpcy5fY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHlpZWxkIGl0ZW1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZ2V0IHdpZGdldHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2lkZ2V0cztcbiAgICB9XG4gICAgKi9cbiAgICBmdW5jdGlvbiBGb3JtKGZpZWxkcywgY29sdW1ucykge1xuICAgICAgICBpZiAoY29sdW1ucyA9PT0gdm9pZCAwKSB7IGNvbHVtbnMgPSA4OyB9XG4gICAgICAgIHRoaXMuX3N0cmluZyA9IG51bGw7XG4gICAgICAgIHRoaXMuX2ZpZWxkcyA9IGZpZWxkcztcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gbmV3IENvbnRhaW5lcihjb2x1bW5zKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm0ucHJvdG90eXBlLCBcImZpZWxkc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtLnByb3RvdHlwZSwgXCJjb250YWluZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRm9ybS5wcm90b3R5cGUsIFwic3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgRm9ybS5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoeG1sKSB7XG4gICAgICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIHZhciB2aWV3ID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWwsIFwidGV4dC94bWxcIik7XG4gICAgICAgIHRoaXMucGFyc2VOb2RlKHZpZXcuZG9jdW1lbnRFbGVtZW50LCB0aGlzLl9jb250YWluZXIpO1xuICAgICAgICB0aGlzLl9zdHJpbmcgPSB2aWV3LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzdHJpbmdcIik7XG4gICAgfTtcbiAgICBGb3JtLnByb3RvdHlwZS5wYXJzZU5vZGUgPSBmdW5jdGlvbiAobm9kZSwgY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB3aWRnZXRGYWN0b3J5ID0gbmV3IFdpZGdldEZhY3RvcnkoKTtcbiAgICAgICAgdmFyIG5vZGVzUGFyc2VkID0gcGFyc2VOb2Rlcyhub2RlLmNoaWxkTm9kZXMsIHRoaXMuX2ZpZWxkcyk7XG4gICAgICAgIG5vZGVzUGFyc2VkLmZvckVhY2goZnVuY3Rpb24gKG5vZGVQYXJzZWQpIHtcbiAgICAgICAgICAgIHZhciB0YWcgPSBub2RlUGFyc2VkLnRhZywgdGFnQXR0cmlidXRlcyA9IG5vZGVQYXJzZWQudGFnQXR0cmlidXRlcywgY2hpbGQgPSBub2RlUGFyc2VkLmNoaWxkO1xuICAgICAgICAgICAgdmFyIHdpZGdldCA9IHdpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KHRhZywgdGFnQXR0cmlidXRlcyk7XG4gICAgICAgICAgICBpZiAod2lkZ2V0IGluc3RhbmNlb2YgQ29udGFpbmVyV2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFyc2VOb2RlKGNoaWxkLCB3aWRnZXQuY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRXaWRnZXQod2lkZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxscyBjb250YWluZXIncyBmaW5kQnlJZCBtZXRob2QgdG8gZmluZCB0aGUgd2lkZ2V0cyBtYXRjaGluZyB3aXRoIHBhcmFtIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIHRvIGZpbmRcbiAgICAgKi9cbiAgICBGb3JtLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXIuZmluZEJ5SWQoaWQpO1xuICAgIH07XG4gICAgcmV0dXJuIEZvcm07XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm0uanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBDb250YWluZXJXaWRnZXQgZnJvbSBcIi4vQ29udGFpbmVyV2lkZ2V0XCI7XG52YXIgR3JvdXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEdyb3VwLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdyb3VwKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEdyb3VwO1xufShDb250YWluZXJXaWRnZXQpKTtcbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9R3JvdXAuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBJbnRlZ2VyIGlucHV0XG4gKi9cbnZhciBJbnRlZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbnRlZ2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludGVnZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSW50ZWdlcjtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IEludGVnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JbnRlZ2VyLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG52YXIgTGFiZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExhYmVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExhYmVsKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm9wcyksIHsgbm9sYWJlbDogdHJ1ZSB9KSkgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExhYmVsIHRleHRcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl90ZXh0ID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsaWduIHRleHRcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9hbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWQgb2YgdGhlIGZpZWxkIHRoYXQgdGhpcyBsYWJlbCBnb2VzIHdpdGguIE51bGwgaWYgaXQncyBhbiBpbmRlcGVuZGVudCBsYWJlbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2ZpZWxkRm9yTGFiZWwgPSBudWxsO1xuICAgICAgICBpZiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLmZpZWxkRm9yTGFiZWwpIHtcbiAgICAgICAgICAgIF90aGlzLl9maWVsZEZvckxhYmVsID0gcHJvcHMuZmllbGRGb3JMYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMYWJlbC5wcm90b3R5cGUsIFwidGV4dFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGFiZWwucHJvdG90eXBlLCBcImFsaWduXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWxpZ247XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9hbGlnbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExhYmVsLnByb3RvdHlwZSwgXCJmaWVsZEZvckxhYmVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmllbGRGb3JMYWJlbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkRm9yTGFiZWwgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBMYWJlbDtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGFiZWwuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBBIE1hbnkybWFueSByZWxhdGlvbnNoaXAgZmllbGRcbiAqL1xudmFyIE1hbnkybWFueSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWFueTJtYW55LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1hbnkybWFueShwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIHNpemVcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9zaXplID0gMTUwO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVsYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9yZWxhdGlvbiA9IFwiXCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdXN0IGV4cGFuZCB3aWRnZXRcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9tdXN0RXhwYW5kID0gdHJ1ZTtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zaXplID0gcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5yZWxhdGlvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9yZWxhdGlvbiA9IHByb3BzLnJlbGF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hbnkybWFueS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFueTJtYW55LnByb3RvdHlwZSwgXCJyZWxhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVsYXRpb24gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBNYW55Mm1hbnk7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBNYW55Mm1hbnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NYW55Mm1hbnkuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBBIG1hbnkyb25lIHJlbGF0aW9uc2hpcCBmaWVsZFxuICovXG52YXIgTWFueTJvbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1hbnkyb25lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1hbnkyb25lKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWxhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gXCJcIjtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zaXplID0gcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5yZWxhdGlvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9yZWxhdGlvbiA9IHByb3BzLnJlbGF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hbnkyb25lLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYW55Mm9uZS5wcm90b3R5cGUsIFwicmVsYXRpb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWxhdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbGF0aW9uID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTWFueTJvbmU7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBNYW55Mm9uZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1hbnkyb25lLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuL1dpZGdldFwiO1xudmFyIE5ld0xpbmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE5ld0xpbmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTmV3TGluZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBOZXdMaW5lLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBOZXdMaW5lO1xufShXaWRnZXQpKTtcbmV4cG9ydCBkZWZhdWx0IE5ld0xpbmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1OZXdMaW5lLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgQ29udGFpbmVyV2lkZ2V0IGZyb20gXCIuL0NvbnRhaW5lcldpZGdldFwiO1xudmFyIE5vdGVib29rID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOb3RlYm9vaywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOb3RlYm9vayhwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY29sc3BhbiA9IE5vdGVib29rLl9kZWZhdWx0Q29sc3BhbjtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbHNwYW4gPSBwcm9wcy5jb2xzcGFuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE5vdGVib29rLCBcImRlZmF1bHRDb2xzcGFuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gTm90ZWJvb2suX2RlZmF1bHRDb2xzcGFuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgTm90ZWJvb2suX2RlZmF1bHRDb2xzcGFuID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBOb3RlYm9vay5fZGVmYXVsdENvbHNwYW4gPSAzO1xuICAgIHJldHVybiBOb3RlYm9vaztcbn0oQ29udGFpbmVyV2lkZ2V0KSk7XG5leHBvcnQgZGVmYXVsdCBOb3RlYm9vaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5vdGVib29rLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogQSBPbmUyTWFueSByZWxhdGlvbnNoaXAgZmllbGRcbiAqL1xudmFyIE9uZTJtYW55ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhPbmUybWFueSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPbmUybWFueShwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIHNpemVcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9zaXplID0gMTUwO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVsYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9yZWxhdGlvbiA9IFwiXCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWaWV3c1xuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3ZpZXdzID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZGVcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9tb2RlID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdXN0IGV4cGFuZCB3aWRnZXRcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9tdXN0RXhwYW5kID0gdHJ1ZTtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zaXplID0gcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5yZWxhdGlvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLl9yZWxhdGlvbiA9IHByb3BzLnJlbGF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLm1vZGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbW9kZSA9IHByb3BzLm1vZGUuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnZpZXdzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3ZpZXdzID0gcHJvcHMudmlld3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuY29sc3Bhbikge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbHNwYW4gPSBwcm9wcy5jb2xzcGFuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9uZTJtYW55LnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPbmUybWFueS5wcm90b3R5cGUsIFwicmVsYXRpb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWxhdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbGF0aW9uID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT25lMm1hbnkucHJvdG90eXBlLCBcInZpZXdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmlld3M7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl92aWV3cyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9uZTJtYW55LnByb3RvdHlwZSwgXCJtb2RlXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21vZGUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBPbmUybWFueTtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IE9uZTJtYW55O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T25lMm1hbnkuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBDb250YWluZXJXaWRnZXQgZnJvbSBcIi4vQ29udGFpbmVyV2lkZ2V0XCI7XG52YXIgUGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUGFnZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQYWdlKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFBhZ2U7XG59KENvbnRhaW5lcldpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBhZ2UuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGbG9hdCBmcm9tIFwiLi9GbG9hdFwiO1xuLyoqXG4gKiBQcm9ncmVzc0JhciBpbnB1dFxuICovXG52YXIgUHJvZ3Jlc3NCYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFByb2dyZXNzQmFyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByb2dyZXNzQmFyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBQcm9ncmVzc0Jhcjtcbn0oRmxvYXQpKTtcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHJvZ3Jlc3NCYXIuanMubWFwIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCBXaWRnZXRGYWN0b3J5IGZyb20gXCIuL1dpZGdldEZhY3RvcnlcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG52YXIgU2VhcmNoRmlsdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlYXJjaEZpbHRlcihzZWFyY2hGaWVsZHMsIGZpZWxkcywgY29sdW1ucykge1xuICAgICAgICBpZiAoY29sdW1ucyA9PT0gdm9pZCAwKSB7IGNvbHVtbnMgPSA4OyB9XG4gICAgICAgIHRoaXMuX3NlYXJjaEZpZWxkcyA9IHNlYXJjaEZpZWxkcztcbiAgICAgICAgdGhpcy5fZmllbGRzID0gZmllbGRzO1xuICAgICAgICB0aGlzLl9zaW1wbGVTZWFyY2hDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKGNvbHVtbnMpO1xuICAgICAgICB0aGlzLl9hZHZhbmNlZFNlYXJjaENvbnRhaW5lciA9IG5ldyBDb250YWluZXIoY29sdW1ucyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWFyY2hGaWx0ZXIucHJvdG90eXBlLCBcInNlYXJjaEZpZWxkc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaEZpZWxkcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWFyY2hGaWx0ZXIucHJvdG90eXBlLCBcImZpZWxkc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWFyY2hGaWx0ZXIucHJvdG90eXBlLCBcInNpbXBsZVNlYXJjaENvbnRhaW5lclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpbXBsZVNlYXJjaENvbnRhaW5lcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWFyY2hGaWx0ZXIucHJvdG90eXBlLCBcImFkdmFuY2VkU2VhcmNoQ29udGFpbmVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWR2YW5jZWRTZWFyY2hDb250YWluZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTZWFyY2hGaWx0ZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgd2lkZ2V0RmFjdG9yeSA9IG5ldyBXaWRnZXRGYWN0b3J5KCk7XG4gICAgICAgIHZhciBzaW1wbGVTZWFyY2hXaWRnZXRzID0gdGhpcy5wYXJzZUZpZWxkcyh0aGlzLnNlYXJjaEZpZWxkcy5wcmltYXJ5LCB3aWRnZXRGYWN0b3J5KTtcbiAgICAgICAgc2ltcGxlU2VhcmNoV2lkZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh3aWRnZXQpIHtcbiAgICAgICAgICAgIF90aGlzLnNpbXBsZVNlYXJjaENvbnRhaW5lci5hZGRXaWRnZXQod2lkZ2V0LCB7IGFkZExhYmVsOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIF90aGlzLmFkdmFuY2VkU2VhcmNoQ29udGFpbmVyLmFkZFdpZGdldCh3aWRnZXQsIHsgYWRkTGFiZWw6IGZhbHNlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGFkdmFuY2VkU2VhcmNoV2lkZ2V0cyA9IHRoaXMucGFyc2VGaWVsZHModGhpcy5zZWFyY2hGaWVsZHMuc2Vjb25kYXJ5LCB3aWRnZXRGYWN0b3J5KTtcbiAgICAgICAgYWR2YW5jZWRTZWFyY2hXaWRnZXRzLmZvckVhY2goZnVuY3Rpb24gKHdpZGdldCkge1xuICAgICAgICAgICAgX3RoaXMuYWR2YW5jZWRTZWFyY2hDb250YWluZXIuYWRkV2lkZ2V0KHdpZGdldCwgeyBhZGRMYWJlbDogZmFsc2UgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2VhcmNoRmlsdGVyLnByb3RvdHlwZS5wYXJzZUZpZWxkcyA9IGZ1bmN0aW9uIChzZWFyY2hGaWVsZHMsIHdpZGdldEZhY3RvcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNlYXJjaEZpZWxkcy5tYXAoZnVuY3Rpb24gKHNlYXJjaEZpZWxkKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRBdHRyaWJ1dGVzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLmZpZWxkc1tzZWFyY2hGaWVsZF0pLCB7IG5hbWU6IHNlYXJjaEZpZWxkLCBjb2xzcGFuOiAyIH0pO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBmaWVsZEF0dHJpYnV0ZXMudHlwZTtcbiAgICAgICAgICAgIHJldHVybiB3aWRnZXRGYWN0b3J5LmNyZWF0ZVdpZGdldCh0eXBlLCBmaWVsZEF0dHJpYnV0ZXMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxzIGNvbnRhaW5lcidzIGZpbmRCeUlkIG1ldGhvZCB0byBmaW5kIHRoZSB3aWRnZXRzIG1hdGNoaW5nIHdpdGggcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgdG8gZmluZFxuICAgICAqL1xuICAgIFNlYXJjaEZpbHRlci5wcm90b3R5cGUuZmluZEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWR2YW5jZWRTZWFyY2hDb250YWluZXIuZmluZEJ5SWQoaWQpO1xuICAgIH07XG4gICAgcmV0dXJuIFNlYXJjaEZpbHRlcjtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGaWx0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TZWFyY2hGaWx0ZXIuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBTZWxlY3Rpb24gZmllbGQgZm9yIGtleS12YWx1ZSBsaXN0c1xuICovXG52YXIgU2VsZWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2VsZWN0aW9uKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZXMgYW5kIGtleXNcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9zZWxlY3Rpb25WYWx1ZXMgPSBuZXcgTWFwKFtdKTtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zaXplID0gcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fc2VsZWN0aW9uVmFsdWVzID0gbmV3IE1hcChwcm9wcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdGlvbi5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0aW9uLnByb3RvdHlwZSwgXCJzZWxlY3Rpb25WYWx1ZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25WYWx1ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25WYWx1ZXMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBTZWxlY3Rpb247XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBTZWxlY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TZWxlY3Rpb24uanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4vV2lkZ2V0XCI7XG52YXIgU2VwYXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZXBhcmF0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2VwYXJhdG9yKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogTGFiZWxcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9sYWJlbCA9IFwiXCI7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9sYWJlbCA9IHByb3BzLnN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXBhcmF0b3IucHJvdG90eXBlLCBcImxhYmVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU2VwYXJhdG9yLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBTZXBhcmF0b3I7XG59KFdpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgU2VwYXJhdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2VwYXJhdG9yLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogTXVsdGlsaW5lIGlucHV0IHdpdGggbm8gbGVuZ3RoIGxpbWl0LlxuICovXG52YXIgVGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGV4dCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUZXh0KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgcGxhY2UgaG9sZGVyXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fcGxhY2Vob2xkZXIgPSAnJztcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUZXh0LnByb3RvdHlwZSwgXCJwbGFjZWhvbGRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBUZXh0O1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRleHQuanMubWFwIiwiaW1wb3J0IFdpZGdldEZhY3RvcnkgZnJvbSBcIi4vV2lkZ2V0RmFjdG9yeVwiO1xuaW1wb3J0IHsgcGFyc2VOb2RlcyB9IGZyb20gXCIuL2hlbHBlcnMvbm9kZVBhcnNlclwiO1xudmFyIFRyZWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJlZShmaWVsZHMpIHtcbiAgICAgICAgdGhpcy5fY29sdW1ucyA9IFtdO1xuICAgICAgICB0aGlzLl9zdHJpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLl9maWVsZHMgPSBmaWVsZHM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmVlLnByb3RvdHlwZSwgXCJmaWVsZHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maWVsZHM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJlZS5wcm90b3R5cGUsIFwiY29sdW1uc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJlZS5wcm90b3R5cGUsIFwic3RyaW5nXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgVHJlZS5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoeG1sKSB7XG4gICAgICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIHZhciB2aWV3ID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh4bWwsIFwidGV4dC94bWxcIik7XG4gICAgICAgIHRoaXMucGFyc2VOb2RlKHZpZXcuZG9jdW1lbnRFbGVtZW50KTtcbiAgICAgICAgdGhpcy5fc3RyaW5nID0gdmlldy5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3RyaW5nXCIpO1xuICAgIH07XG4gICAgVHJlZS5wcm90b3R5cGUucGFyc2VOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHdpZGdldEZhY3RvcnkgPSBuZXcgV2lkZ2V0RmFjdG9yeSgpO1xuICAgICAgICB2YXIgbm9kZXNQYXJzZWQgPSBwYXJzZU5vZGVzKG5vZGUuY2hpbGROb2RlcywgdGhpcy5fZmllbGRzKTtcbiAgICAgICAgbm9kZXNQYXJzZWQuZm9yRWFjaChmdW5jdGlvbiAobm9kZVBhcnNlZCkge1xuICAgICAgICAgICAgdmFyIHRhZyA9IG5vZGVQYXJzZWQudGFnLCB0YWdBdHRyaWJ1dGVzID0gbm9kZVBhcnNlZC50YWdBdHRyaWJ1dGVzO1xuICAgICAgICAgICAgdmFyIHdpZGdldCA9IHdpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KHRhZywgdGFnQXR0cmlidXRlcyk7XG4gICAgICAgICAgICBfdGhpcy5fY29sdW1ucy5wdXNoKHdpZGdldCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgd2lkZ2V0cyBtYXRjaGluZyB3aXRoIHBhcmFtIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIHRvIGZpbmRcbiAgICAgKi9cbiAgICBUcmVlLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1ucy5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5maW5kQnlJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmZpbmRCeUlkKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVHJlZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBUcmVlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VHJlZS5qcy5tYXAiLCJ2YXIgV2lkZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdpZGdldChwcm9wcykge1xuICAgICAgICB0aGlzLl9jb2xzcGFuID0gV2lkZ2V0Ll9kZWZhdWx0Q29sc3BhbjtcbiAgICAgICAgdGhpcy5fcmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xzcGFuID0gK3Byb3BzLmNvbHNwYW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucmVhZG9ubHkgPT09IDEgfHwgcHJvcHMucmVhZG9ubHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5pbnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuaW52aXNpYmxlID09PSAxIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmludmlzaWJsZSA9PT0gXCIxXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaW52aXNpYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXaWRnZXQsIFwiZGVmYXVsdENvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBXaWRnZXQuX2RlZmF1bHRDb2xzcGFuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgV2lkZ2V0Ll9kZWZhdWx0Q29sc3BhbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdpZGdldC5wcm90b3R5cGUsIFwicmVhZE9ubHlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWFkT25seTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlYWRPbmx5ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2lkZ2V0LnByb3RvdHlwZSwgXCJjb2xzcGFuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sc3BhbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbHNwYW4gPSArdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2lkZ2V0LnByb3RvdHlwZSwgXCJpbnZpc2libGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZpc2libGU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnZpc2libGUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgY29sc3BhblxuICAgICAqL1xuICAgIFdpZGdldC5fZGVmYXVsdENvbHNwYW4gPSAxO1xuICAgIHJldHVybiBXaWRnZXQ7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2lkZ2V0LmpzLm1hcCIsImltcG9ydCBOb3RlYm9vayBmcm9tIFwiLi9Ob3RlYm9va1wiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IEdyb3VwIGZyb20gXCIuL0dyb3VwXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgQ2hhciBmcm9tIFwiLi9DaGFyXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi9UZXh0XCI7XG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL1NlbGVjdGlvblwiO1xuaW1wb3J0IE1hbnkyb25lIGZyb20gXCIuL01hbnkyb25lXCI7XG5pbXBvcnQgQm9vbGVhbiBmcm9tIFwiLi9Cb29sZWFuXCI7XG5pbXBvcnQgSW50ZWdlciBmcm9tIFwiLi9JbnRlZ2VyXCI7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuL1dpZGdldFwiO1xuaW1wb3J0IEZsb2F0IGZyb20gXCIuL0Zsb2F0XCI7XG5pbXBvcnQgRmxvYXRUaW1lIGZyb20gXCIuL0Zsb2F0VGltZVwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgRGF0ZSBmcm9tIFwiLi9EYXRlXCI7XG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4vRGF0ZVRpbWVcIjtcbmltcG9ydCBNYW55Mm1hbnkgZnJvbSBcIi4vTWFueTJtYW55XCI7XG5pbXBvcnQgT25lMm1hbnkgZnJvbSBcIi4vT25lMm1hbnlcIjtcbmltcG9ydCBOZXdMaW5lIGZyb20gXCIuL05ld0xpbmVcIjtcbmltcG9ydCBTZXBhcmF0b3IgZnJvbSBcIi4vU2VwYXJhdG9yXCI7XG52YXIgV2lkZ2V0RmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXaWRnZXRGYWN0b3J5KCkge1xuICAgIH1cbiAgICBXaWRnZXRGYWN0b3J5LnByb3RvdHlwZS5zZXRXaWRnZXRDbGFzcyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5vdGVib29rXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBOb3RlYm9vaztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwYWdlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBQYWdlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdyb3VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBHcm91cDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsYWJlbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gTGFiZWw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2hhclwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gQ2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBUZXh0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ1dHRvblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gQnV0dG9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNlbGVjdGlvblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gU2VsZWN0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1hbnkyb25lXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBNYW55Mm9uZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBCb29sZWFuO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImludGVnZXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEludGVnZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZmxvYXRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEZsb2F0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImZsb2F0X3RpbWVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEZsb2F0VGltZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBEYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBEYXRlVGltZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcm9ncmVzc2JhclwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gUHJvZ3Jlc3NCYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWFueTJtYW55XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBNYW55Mm1hbnk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib25lMm1hbnlcIjpcbiAgICAgICAgICAgIGNhc2UgXCJvbmUybWFueV9saXN0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBPbmUybWFueTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJuZXdsaW5lXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBOZXdMaW5lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNlcGFyYXRvclwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gU2VwYXJhdG9yO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IFdpZGdldDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgV2lkZ2V0RmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlV2lkZ2V0ID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0V2lkZ2V0Q2xhc3ModHlwZSk7XG4gICAgICAgIC8vIFRPRE86IFdpZGdldCBDbGFzcyBjb25zdHJ1Y3RvcnMgc2hvdWxkIHVzZSBvbmx5IHRoZSBwcm9wcyBuZWVkZWQsIG5vdCBhbGwgcHJvcHMuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgLy8gU3BlY2lmaWMgY2FzZXMgKG9ubHkgc2VsZWN0ZWQgcHJvcHMgc2hvdWxkIGJlIHVzZWQpXG4gICAgICAgICAgICBjYXNlIFwibm90ZWJvb2tcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwYWdlXCI6XG4gICAgICAgICAgICBjYXNlIFwiZ3JvdXBcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMuX3dpZGdldENsYXNzKHByb3BzKTtcbiAgICAgICAgICAgIC8vIEdlbmVyaWMgY2FzZVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMuX3dpZGdldENsYXNzKHByb3BzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFdpZGdldEZhY3Rvcnk7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0RmFjdG9yeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVdpZGdldEZhY3RvcnkuanMubWFwIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBpc051bWVyaWMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgaWYgKHR5cGVvZiBzdHIgIT09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gd2Ugb25seSBwcm9jZXNzIHN0cmluZ3MhXG4gICAgcmV0dXJuICFpc05hTihzdHIpICYmICFpc05hTihwYXJzZUZsb2F0KHN0cikpO1xufTtcbnZhciBwYXJzZURvbWFpbiA9IGZ1bmN0aW9uIChkb21haW5WYWx1ZSkge1xuICAgIGlmICghZG9tYWluVmFsdWUgfHwgdHlwZW9mIGRvbWFpblZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIHBhcnNlZERvbWFpbiA9IFtdO1xuICAgIHZhciByZWdleCA9IC9cXCgoW15cXCldKylcXCkvZztcbiAgICB2YXIgdHVwcGxlcyA9IFtdO1xuICAgIHZhciBtYXRjaGVzO1xuICAgIHdoaWxlICgobWF0Y2hlcyA9IHJlZ2V4LmV4ZWMoZG9tYWluVmFsdWUpKSkge1xuICAgICAgICB0dXBwbGVzLnB1c2gobWF0Y2hlc1sxXSk7XG4gICAgfVxuICAgIHR1cHBsZXMuZm9yRWFjaChmdW5jdGlvbiAodHVwcGxlKSB7XG4gICAgICAgIHZhciBzcGxpdHRlZCA9IHR1cHBsZS5yZXBsYWNlKC9cXHMvZywgXCJcIikuc3BsaXQoXCIsXCIpO1xuICAgICAgICB2YXIgZmllbGQgPSBzcGxpdHRlZFswXS5yZXBsYWNlKC8nL2csIFwiXCIpO1xuICAgICAgICB2YXIgb3BlcmF0b3IgPSBzcGxpdHRlZFsxXS5yZXBsYWNlKC8nL2csIFwiXCIpO1xuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdHRlZFsyXTtcbiAgICAgICAgaWYgKHZhbHVlLmluZGV4T2YoXCInXCIpID09PSAtMSAmJiBpc051bWVyaWModmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUuaW5kZXhPZihcIidcIikgPT09IC0xICYmXG4gICAgICAgICAgICAhKHZhbHVlID09PSBcIlRydWVcIiB8fCB2YWx1ZSA9PT0gXCJGYWxzZVwiKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIHZhbHVlIHJlZmVyZW5jZXMgdG8gYW4gYWN0dWFsIGZpZWxkLCBhZGQgY3VybHkgYnJhY2VzIGFyb3VuZCBpdFxuICAgICAgICAgICAgdmFsdWUgPSBcIntcIiArIHZhbHVlICsgXCJ9XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLycvZywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgcGFyc2VkRG9tYWluLnB1c2goW2ZpZWxkLCBvcGVyYXRvciwgdmFsdWVdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcGFyc2VkRG9tYWluO1xufTtcbnZhciBnZXRQYXJhbXNGb3JEb21haW4gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdmFsdWVzID0gX2EudmFsdWVzLCBkb21haW4gPSBfYS5kb21haW47XG4gICAgdmFyIHZhbHVlc1RvU2VhcmNoSW4gPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdmFsdWVzKSwgeyBhY3RpdmVfaWQ6IHZhbHVlcy5pZCB9KTtcbiAgICByZXR1cm4gZG9tYWluLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgdmFyIGZpZWxkID0gZW50cnlbMF0sIG9wZXJhdG9yID0gZW50cnlbMV0sIHZhbHVlID0gZW50cnlbMl07XG4gICAgICAgIHZhciByZXNvbHZlZFZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUuaW5kZXhPZihcIntcIikgIT09IC0xKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdmFsdWUucmVwbGFjZShcIntcIiwgXCJcIikucmVwbGFjZShcIn1cIiwgXCJcIik7XG4gICAgICAgICAgICBpZiAodmFsdWVzVG9TZWFyY2hJbltrZXldKVxuICAgICAgICAgICAgICAgIHJlc29sdmVkVmFsdWUgPSB2YWx1ZXNUb1NlYXJjaEluW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtmaWVsZCwgb3BlcmF0b3IsIHJlc29sdmVkVmFsdWVdO1xuICAgIH0pO1xufTtcbmV4cG9ydCB7IHBhcnNlRG9tYWluLCBnZXRQYXJhbXNGb3JEb21haW4gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvbWFpblBhcnNlci5qcy5tYXAiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIHBhcnNlTm9kZXMgPSBmdW5jdGlvbiAobm9kZXMsIGZpZWxkcykge1xuICAgIHZhciBwYXJzZWROb2RlcyA9IFtdO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IGNoaWxkLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIHRhZyA9IGNoaWxkLm5vZGVOYW1lO1xuICAgICAgICAgICAgdmFyIHRhZ0F0dHJpYnV0ZXNfMSA9IHt9O1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChjaGlsZC5hdHRyaWJ1dGVzLCBmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIHRhZ0F0dHJpYnV0ZXNfMVthdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJmaWVsZFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVfMSA9IGNoaWxkLmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJXaWRnZXQgPSBjaGlsZC5nZXRBdHRyaWJ1dGUoXCJ3aWRnZXRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJXaWRnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnID0gYXR0cldpZGdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZV8xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmllbGRzW25hbWVfMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZpZWxkIFwiICsgbmFtZV8xICsgXCIgZG9lc24ndCBleGlzdCBpbiBmaWVsZHMgZGVmaW50aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhZyA9IGZpZWxkc1tuYW1lXzFdLnR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFdlIGRvIHRoaXMgaW4gb3JkZXIgdG8gaWdub3JlIHRoZSBibGFuayBkb21haW4gYXR0cmlidXRlIGluIGZpZWxkcyBhbmQgdG8gcHJpb3JpdGl6ZSB0aGUgYXR0cmlidXRlcyB2YWx1ZSBcbiAgICAgICAgICAgICAgICBpZiAoKChBcnJheS5pc0FycmF5KGZpZWxkc1tuYW1lXzFdLmRvbWFpbikgJiZcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzW25hbWVfMV0uZG9tYWluLmxlbmd0aCA9PT0gMCkgfHxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzW25hbWVfMV0uZG9tYWluID09PSBmYWxzZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgdGFnQXR0cmlidXRlc18xW1wiZG9tYWluXCJdICYmXG4gICAgICAgICAgICAgICAgICAgIHRhZ0F0dHJpYnV0ZXNfMVtcImRvbWFpblwiXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmaWVsZHNbbmFtZV8xXS5kb21haW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhZ0F0dHJpYnV0ZXNfMSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0YWdBdHRyaWJ1dGVzXzEpLCBmaWVsZHNbbmFtZV8xXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZWROb2Rlcy5wdXNoKHsgdGFnOiB0YWcsIHRhZ0F0dHJpYnV0ZXM6IHRhZ0F0dHJpYnV0ZXNfMSwgY2hpbGQ6IGNoaWxkIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnNlZE5vZGVzO1xufTtcbmV4cG9ydCB7IHBhcnNlTm9kZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGVQYXJzZXIuanMubWFwIiwiaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IFRyZWUgZnJvbSBcIi4vVHJlZVwiO1xuaW1wb3J0IENoYXIgZnJvbSBcIi4vQ2hhclwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBDb250YWluZXJXaWRnZXQgZnJvbSBcIi4vQ29udGFpbmVyV2lkZ2V0XCI7XG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL1NlbGVjdGlvblwiO1xuaW1wb3J0IE1hbnkyb25lIGZyb20gXCIuL01hbnkyb25lXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4vV2lkZ2V0XCI7XG5pbXBvcnQgQm9vbGVhbiBmcm9tIFwiLi9Cb29sZWFuXCI7XG5pbXBvcnQgSW50ZWdlciBmcm9tIFwiLi9JbnRlZ2VyXCI7XG5pbXBvcnQgRmxvYXQgZnJvbSBcIi4vRmxvYXRcIjtcbmltcG9ydCBGbG9hdFRpbWUgZnJvbSBcIi4vRmxvYXRUaW1lXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBEYXRlIGZyb20gXCIuL0RhdGVcIjtcbmltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi9EYXRlVGltZVwiO1xuaW1wb3J0IE1hbnkybWFueSBmcm9tIFwiLi9NYW55Mm1hbnlcIjtcbmltcG9ydCBPbmUybWFueSBmcm9tIFwiLi9PbmUybWFueVwiO1xuaW1wb3J0IFNlYXJjaEZpbHRlciBmcm9tIFwiLi9TZWFyY2hGaWx0ZXJcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuL1RleHRcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IE5vdGVib29rIGZyb20gXCIuL05vdGVib29rXCI7XG5pbXBvcnQgR3JvdXAgZnJvbSBcIi4vR3JvdXBcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2VcIjtcbmltcG9ydCBTZXBhcmF0b3IgZnJvbSBcIi4vU2VwYXJhdG9yXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0ICogYXMgRG9tYWluUGFyc2VyIGZyb20gXCIuL2hlbHBlcnMvZG9tYWluUGFyc2VyXCI7XG5leHBvcnQgeyBDaGFyLCBTZWxlY3Rpb24sIE1hbnkyb25lLCBGaWVsZCwgV2lkZ2V0LCBGb3JtLCBUcmVlLCBCb29sZWFuLCBPbmUybWFueSwgSW50ZWdlciwgRmxvYXQsIEZsb2F0VGltZSwgRGF0ZSwgRGF0ZVRpbWUsIE1hbnkybWFueSwgU2VhcmNoRmlsdGVyLCBDb250YWluZXIsIENvbnRhaW5lcldpZGdldCwgVGV4dCwgUHJvZ3Jlc3NCYXIsIE5vdGVib29rLCBHcm91cCwgUGFnZSwgTGFiZWwsIFNlcGFyYXRvciwgQnV0dG9uLCBEb21haW5QYXJzZXIsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG52YXIgb2JzZXJ2ZXJFcnIgPSBcIvCfkqEgcmVhY3QtY29vbC1kaW1lbnNpb25zOiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgUmVzaXplIE9ic2VydmVyLCBwbGVhc2UgdXNlIHBvbHlmaWxsOiBodHRwczovL2dpdGh1Yi5jb20vd2VsbHlzaGVuL3JlYWN0LWNvb2wtZGltZW5zaW9ucyNyZXNpemVvYnNlcnZlci1wb2x5ZmlsbFwiO1xudmFyIGJvcmRlckJveFdhcm4gPSBcIvCfkqEgcmVhY3QtY29vbC1kaW1lbnNpb25zOiB0aGUgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgYm9yZGVyLWJveCBzaXplLCBmYWxsYmFjayB0byBjb250ZW50LWJveCBzaXplLiBQbGVhc2Ugc2VlOiBodHRwczovL2dpdGh1Yi5jb20vd2VsbHlzaGVuL3JlYWN0LWNvb2wtZGltZW5zaW9ucyNib3JkZXItYm94LXNpemUtbWVhc3VyZW1lbnRcIjtcblxudmFyIGdldEN1cnJlbnRCcmVha3BvaW50ID0gZnVuY3Rpb24gZ2V0Q3VycmVudEJyZWFrcG9pbnQoYnBzLCB3KSB7XG4gIHZhciBjdXJCcCA9IFwiXCI7XG4gIHZhciBtYXggPSAtMTtcbiAgT2JqZWN0LmtleXMoYnBzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgdmFsID0gYnBzW2tleV07XG5cbiAgICBpZiAodyA+PSB2YWwgJiYgdmFsID4gbWF4KSB7XG4gICAgICBjdXJCcCA9IGtleTtcbiAgICAgIG1heCA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY3VyQnA7XG59O1xuXG52YXIgdXNlRGltZW5zaW9ucyA9IGZ1bmN0aW9uIHVzZURpbWVuc2lvbnMoX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIHJlZk9wdCA9IF9yZWYucmVmLFxuICAgICAgdXNlQm9yZGVyQm94U2l6ZSA9IF9yZWYudXNlQm9yZGVyQm94U2l6ZSxcbiAgICAgIGJyZWFrcG9pbnRzID0gX3JlZi5icmVha3BvaW50cyxcbiAgICAgIHVwZGF0ZU9uQnJlYWtwb2ludENoYW5nZSA9IF9yZWYudXBkYXRlT25CcmVha3BvaW50Q2hhbmdlLFxuICAgICAgc2hvdWxkVXBkYXRlID0gX3JlZi5zaG91bGRVcGRhdGUsXG4gICAgICBvblJlc2l6ZSA9IF9yZWYub25SZXNpemUsXG4gICAgICBwb2x5ZmlsbCA9IF9yZWYucG9seWZpbGw7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHtcbiAgICBjdXJyZW50QnJlYWtwb2ludDogXCJcIixcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDBcbiAgfSksXG4gICAgICBzdGF0ZSA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciBwcmV2U2l6ZVJlZiA9IHVzZVJlZih7fSk7XG4gIHZhciBwcmV2QnJlYWtwb2ludFJlZiA9IHVzZVJlZigpO1xuICB2YXIgb2JzZXJ2ZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBvblJlc2l6ZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHNob3VsZFVwZGF0ZVJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHdhcm5lZFJlZiA9IHVzZVJlZihmYWxzZSk7XG4gIHZhciByZWZWYXIgPSB1c2VSZWYobnVsbCk7XG4gIHZhciByZWYgPSB1c2VSZWYocmVmVmFyID09IG51bGwgPyB2b2lkIDAgOiByZWZWYXIuY3VycmVudCk7XG4gIHJlZiA9IHJlZk9wdCB8fCByZWY7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9uUmVzaXplKSBvblJlc2l6ZVJlZi5jdXJyZW50ID0gb25SZXNpemU7XG4gIH0sIFtvblJlc2l6ZV0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChzaG91bGRVcGRhdGUpIHNob3VsZFVwZGF0ZVJlZi5jdXJyZW50ID0gc2hvdWxkVXBkYXRlO1xuICB9LCBbc2hvdWxkVXBkYXRlXSk7XG4gIHZhciBvYnNlcnZlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkgcmVmLmN1cnJlbnQgPSBlbGVtZW50O1xuICAgIGlmIChvYnNlcnZlclJlZi5jdXJyZW50ICYmIHJlZi5jdXJyZW50KSBvYnNlcnZlclJlZi5jdXJyZW50Lm9ic2VydmUocmVmLmN1cnJlbnQpO1xuICB9LCBbcmVmXSk7XG4gIHZhciB1bm9ic2VydmUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9ic2VydmVyUmVmLmN1cnJlbnQpIG9ic2VydmVyUmVmLmN1cnJlbnQuZGlzY29ubmVjdCgpO1xuICB9LCBbXSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFyZWYuY3VycmVudCkgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICBpZiAoKCEoXCJSZXNpemVPYnNlcnZlclwiIGluIHdpbmRvdykgfHwgIShcIlJlc2l6ZU9ic2VydmVyRW50cnlcIiBpbiB3aW5kb3cpKSAmJiAhcG9seWZpbGwpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3Iob2JzZXJ2ZXJFcnIpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9O1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBhdC9jb21wYXRcblxuXG4gICAgb2JzZXJ2ZXJSZWYuY3VycmVudCA9IG5ldyAocG9seWZpbGwgfHwgd2luZG93LlJlc2l6ZU9ic2VydmVyKShmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBlbnRyeSA9IF9yZWYyWzBdO1xuICAgICAgdmFyIGNvbnRlbnRCb3hTaXplID0gZW50cnkuY29udGVudEJveFNpemUsXG4gICAgICAgICAgYm9yZGVyQm94U2l6ZSA9IGVudHJ5LmJvcmRlckJveFNpemUsXG4gICAgICAgICAgY29udGVudFJlY3QgPSBlbnRyeS5jb250ZW50UmVjdDtcbiAgICAgIHZhciBib3hTaXplID0gY29udGVudEJveFNpemU7XG4gICAgICBpZiAodXNlQm9yZGVyQm94U2l6ZSkgaWYgKGJvcmRlckJveFNpemUpIHtcbiAgICAgICAgYm94U2l6ZSA9IGJvcmRlckJveFNpemU7XG4gICAgICB9IGVsc2UgaWYgKCF3YXJuZWRSZWYuY3VycmVudCkge1xuICAgICAgICBjb25zb2xlLndhcm4oYm9yZGVyQm94V2Fybik7XG4gICAgICAgIHdhcm5lZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIH0gLy8gQGp1Z2dsZS9yZXNpemUtb2JzZXJ2ZXIgcG9seWZpbGwgaGFzIGRpZmZlcmVudCBkYXRhIHN0cnVjdHVyZVxuXG4gICAgICBib3hTaXplID0gQXJyYXkuaXNBcnJheShib3hTaXplKSA/IGJveFNpemVbMF0gOiBib3hTaXplO1xuICAgICAgdmFyIHdpZHRoID0gYm94U2l6ZSA/IGJveFNpemUuaW5saW5lU2l6ZSA6IGNvbnRlbnRSZWN0LndpZHRoO1xuICAgICAgdmFyIGhlaWdodCA9IGJveFNpemUgPyBib3hTaXplLmJsb2NrU2l6ZSA6IGNvbnRlbnRSZWN0LmhlaWdodDtcbiAgICAgIGlmICh3aWR0aCA9PT0gcHJldlNpemVSZWYuY3VycmVudC53aWR0aCAmJiBoZWlnaHQgPT09IHByZXZTaXplUmVmLmN1cnJlbnQuaGVpZ2h0KSByZXR1cm47XG4gICAgICBwcmV2U2l6ZVJlZi5jdXJyZW50ID0ge1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9O1xuICAgICAgdmFyIGUgPSB7XG4gICAgICAgIGN1cnJlbnRCcmVha3BvaW50OiBcIlwiLFxuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICBlbnRyeTogZW50cnksXG4gICAgICAgIG9ic2VydmU6IG9ic2VydmUsXG4gICAgICAgIHVub2JzZXJ2ZTogdW5vYnNlcnZlXG4gICAgICB9O1xuXG4gICAgICBpZiAoYnJlYWtwb2ludHMpIHtcbiAgICAgICAgZS5jdXJyZW50QnJlYWtwb2ludCA9IGdldEN1cnJlbnRCcmVha3BvaW50KGJyZWFrcG9pbnRzLCB3aWR0aCk7XG5cbiAgICAgICAgaWYgKGUuY3VycmVudEJyZWFrcG9pbnQgIT09IHByZXZCcmVha3BvaW50UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICBpZiAob25SZXNpemVSZWYuY3VycmVudCkgb25SZXNpemVSZWYuY3VycmVudChlKTtcbiAgICAgICAgICBwcmV2QnJlYWtwb2ludFJlZi5jdXJyZW50ID0gZS5jdXJyZW50QnJlYWtwb2ludDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvblJlc2l6ZVJlZi5jdXJyZW50KSB7XG4gICAgICAgIG9uUmVzaXplUmVmLmN1cnJlbnQoZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXh0ID0ge1xuICAgICAgICBjdXJyZW50QnJlYWtwb2ludDogZS5jdXJyZW50QnJlYWtwb2ludCxcbiAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgZW50cnk6IGVudHJ5XG4gICAgICB9O1xuICAgICAgaWYgKHNob3VsZFVwZGF0ZVJlZi5jdXJyZW50ICYmICFzaG91bGRVcGRhdGVSZWYuY3VycmVudChuZXh0KSkgcmV0dXJuO1xuXG4gICAgICBpZiAoIXNob3VsZFVwZGF0ZVJlZi5jdXJyZW50ICYmIGJyZWFrcG9pbnRzICYmIHVwZGF0ZU9uQnJlYWtwb2ludENoYW5nZSkge1xuICAgICAgICBzZXRTdGF0ZShmdW5jdGlvbiAocHJldikge1xuICAgICAgICAgIHJldHVybiBwcmV2LmN1cnJlbnRCcmVha3BvaW50ICE9PSBuZXh0LmN1cnJlbnRCcmVha3BvaW50ID8gbmV4dCA6IHByZXY7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNldFN0YXRlKG5leHQpO1xuICAgIH0pO1xuICAgIG9ic2VydmUoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHVub2JzZXJ2ZSgpO1xuICAgIH07IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgWy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgSlNPTi5zdHJpbmdpZnkoYnJlYWtwb2ludHMpLCB1c2VCb3JkZXJCb3hTaXplLCBvYnNlcnZlLCB1bm9ic2VydmUsIHVwZGF0ZU9uQnJlYWtwb2ludENoYW5nZV0pO1xuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmXG4gIH0sIHN0YXRlLCB7XG4gICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcbiAgICB1bm9ic2VydmU6IHVub2JzZXJ2ZVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURpbWVuc2lvbnM7XG5leHBvcnQgeyBib3JkZXJCb3hXYXJuLCBvYnNlcnZlckVyciB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8vXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIsIGNvbXBhcmUsIGNvbXBhcmVDb250ZXh0KSB7XG4gIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICBpZiAocmV0ICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gISFyZXQ7XG4gIH1cblxuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8ICFvYmpCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5c0EubGVuZ3RoOyBpZHgrKykge1xuICAgIHZhciBrZXkgPSBrZXlzQVtpZHhdO1xuXG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgdmFyIHZhbHVlQiA9IG9iakJba2V5XTtcblxuICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgKHJldCA9PT0gdm9pZCAwICYmIHZhbHVlQSAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsImltcG9ydHt0eXBlT2YgYXMgZSxpc0VsZW1lbnQgYXMgdCxpc1ZhbGlkRWxlbWVudFR5cGUgYXMgbn1mcm9tXCJyZWFjdC1pc1wiO2ltcG9ydCByLHt1c2VTdGF0ZSBhcyBvLHVzZUNvbnRleHQgYXMgcyx1c2VNZW1vIGFzIGksdXNlRWZmZWN0IGFzIGEsdXNlUmVmIGFzIGMsY3JlYXRlRWxlbWVudCBhcyB1LHVzZURlYnVnVmFsdWUgYXMgbCx1c2VMYXlvdXRFZmZlY3QgYXMgZH1mcm9tXCJyZWFjdFwiO2ltcG9ydCBoIGZyb21cInNoYWxsb3dlcXVhbFwiO2ltcG9ydCBwIGZyb21cIkBlbW90aW9uL3N0eWxpc1wiO2ltcG9ydCBmIGZyb21cIkBlbW90aW9uL3VuaXRsZXNzXCI7aW1wb3J0IG0gZnJvbVwiQGVtb3Rpb24vaXMtcHJvcC12YWxpZFwiO2ltcG9ydCB5IGZyb21cImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCI7ZnVuY3Rpb24gdigpe3JldHVybih2PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKGVbcl09bltyXSl9cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIGc9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49W2VbMF1dLHI9MCxvPXQubGVuZ3RoO3I8bztyKz0xKW4ucHVzaCh0W3JdLGVbcisxXSk7cmV0dXJuIG59LFM9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPT10JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmXCJbb2JqZWN0IE9iamVjdF1cIj09PSh0LnRvU3RyaW5nP3QudG9TdHJpbmcoKTpPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpJiYhZSh0KX0sdz1PYmplY3QuZnJlZXplKFtdKSxFPU9iamVjdC5mcmVlemUoe30pO2Z1bmN0aW9uIGIoZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1mdW5jdGlvbiBfKGUpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwic3RyaW5nXCI9PXR5cGVvZiBlJiZlfHxlLmRpc3BsYXlOYW1lfHxlLm5hbWV8fFwiQ29tcG9uZW50XCJ9ZnVuY3Rpb24gTihlKXtyZXR1cm4gZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUuc3R5bGVkQ29tcG9uZW50SWR9dmFyIEE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJihwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfQVRUUnx8cHJvY2Vzcy5lbnYuU0NfQVRUUil8fFwiZGF0YS1zdHlsZWRcIixDPVwiNS4yLjFcIixJPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwiSFRNTEVsZW1lbnRcImluIHdpbmRvdyxQPUJvb2xlYW4oXCJib29sZWFuXCI9PXR5cGVvZiBTQ19ESVNBQkxFX1NQRUVEWT9TQ19ESVNBQkxFX1NQRUVEWTpcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZJiZcIlwiIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZP1wiZmFsc2VcIiE9PXByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWSYmcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiZ2b2lkIDAhPT1wcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWSYmXCJcIiE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZP1wiZmFsc2VcIiE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZJiZwcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWTpcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKSxPPXt9LFI9XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj97MTpcIkNhbm5vdCBjcmVhdGUgc3R5bGVkLWNvbXBvbmVudCBmb3IgY29tcG9uZW50OiAlcy5cXG5cXG5cIiwyOlwiQ2FuJ3QgY29sbGVjdCBzdHlsZXMgb25jZSB5b3UndmUgY29uc3VtZWQgYSBgU2VydmVyU3R5bGVTaGVldGAncyBzdHlsZXMhIGBTZXJ2ZXJTdHlsZVNoZWV0YCBpcyBhIG9uZSBvZmYgaW5zdGFuY2UgZm9yIGVhY2ggc2VydmVyLXNpZGUgcmVuZGVyIGN5Y2xlLlxcblxcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcmV1c2UgaXQgYWNyb3NzIHJlbmRlcnM/XFxuLSBBcmUgeW91IGFjY2lkZW50YWxseSBjYWxsaW5nIGNvbGxlY3RTdHlsZXMgdHdpY2U/XFxuXFxuXCIsMzpcIlN0cmVhbWluZyBTU1IgaXMgb25seSBzdXBwb3J0ZWQgaW4gYSBOb2RlLmpzIGVudmlyb25tZW50OyBQbGVhc2UgZG8gbm90IHRyeSB0byBjYWxsIHRoaXMgbWV0aG9kIGluIHRoZSBicm93c2VyLlxcblxcblwiLDQ6XCJUaGUgYFN0eWxlU2hlZXRNYW5hZ2VyYCBleHBlY3RzIGEgdmFsaWQgdGFyZ2V0IG9yIHNoZWV0IHByb3AhXFxuXFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIGNsaWVudCBhbmQgaXMgeW91ciB0YXJnZXQgZmFsc3k/XFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIHNlcnZlciBhbmQgaXMgdGhlIHNoZWV0IGZhbHN5P1xcblxcblwiLDU6XCJUaGUgY2xvbmUgbWV0aG9kIGNhbm5vdCBiZSB1c2VkIG9uIHRoZSBjbGllbnQhXFxuXFxuLSBBcmUgeW91IHJ1bm5pbmcgaW4gYSBjbGllbnQtbGlrZSBlbnZpcm9ubWVudCBvbiB0aGUgc2VydmVyP1xcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcnVuIFNTUiBvbiB0aGUgY2xpZW50P1xcblxcblwiLDY6XCJUcnlpbmcgdG8gaW5zZXJ0IGEgbmV3IHN0eWxlIHRhZywgYnV0IHRoZSBnaXZlbiBOb2RlIGlzIHVubW91bnRlZCFcXG5cXG4tIEFyZSB5b3UgdXNpbmcgYSBjdXN0b20gdGFyZ2V0IHRoYXQgaXNuJ3QgbW91bnRlZD9cXG4tIERvZXMgeW91ciBkb2N1bWVudCBub3QgaGF2ZSBhIHZhbGlkIGhlYWQgZWxlbWVudD9cXG4tIEhhdmUgeW91IGFjY2lkZW50YWxseSByZW1vdmVkIGEgc3R5bGUgdGFnIG1hbnVhbGx5P1xcblxcblwiLDc6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciBcInRoZW1lXCIgcHJvcCBmdW5jdGlvbiwgZS5nLlxcblxcbmBgYGpzXFxudGhlbWU9eygpID0+ICh7fSl9XFxuYGBgXFxuXFxuJyw4OidUaGVtZVByb3ZpZGVyOiBQbGVhc2UgbWFrZSB5b3VyIFwidGhlbWVcIiBwcm9wIGFuIG9iamVjdC5cXG5cXG4nLDk6XCJNaXNzaW5nIGRvY3VtZW50IGA8aGVhZD5gXFxuXFxuXCIsMTA6XCJDYW5ub3QgZmluZCBhIFN0eWxlU2hlZXQgaW5zdGFuY2UuIFVzdWFsbHkgdGhpcyBoYXBwZW5zIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBjb3BpZXMgb2Ygc3R5bGVkLWNvbXBvbmVudHMgbG9hZGVkIGF0IG9uY2UuIENoZWNrIG91dCB0aGlzIGlzc3VlIGZvciBob3cgdG8gdHJvdWJsZXNob290IGFuZCBmaXggdGhlIGNvbW1vbiBjYXNlcyB3aGVyZSB0aGlzIHNpdHVhdGlvbiBjYW4gaGFwcGVuOiBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvaXNzdWVzLzE5NDEjaXNzdWVjb21tZW50LTQxNzg2MjAyMVxcblxcblwiLDExOlwiX1RoaXMgZXJyb3Igd2FzIHJlcGxhY2VkIHdpdGggYSBkZXYtdGltZSB3YXJuaW5nLCBpdCB3aWxsIGJlIGRlbGV0ZWQgZm9yIHY0IGZpbmFsLl8gW2NyZWF0ZUdsb2JhbFN0eWxlXSByZWNlaXZlZCBjaGlsZHJlbiB3aGljaCB3aWxsIG5vdCBiZSByZW5kZXJlZC4gUGxlYXNlIHVzZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgcGFzc2luZyBjaGlsZHJlbiBlbGVtZW50cy5cXG5cXG5cIiwxMjpcIkl0IHNlZW1zIHlvdSBhcmUgaW50ZXJwb2xhdGluZyBhIGtleWZyYW1lIGRlY2xhcmF0aW9uICglcykgaW50byBhbiB1bnRhZ2dlZCBzdHJpbmcuIFRoaXMgd2FzIHN1cHBvcnRlZCBpbiBzdHlsZWQtY29tcG9uZW50cyB2MywgYnV0IGlzIG5vdCBsb25nZXIgc3VwcG9ydGVkIGluIHY0IGFzIGtleWZyYW1lcyBhcmUgbm93IGluamVjdGVkIG9uLWRlbWFuZC4gUGxlYXNlIHdyYXAgeW91ciBzdHJpbmcgaW4gdGhlIGNzc1xcXFxgXFxcXGAgaGVscGVyIHdoaWNoIGVuc3VyZXMgdGhlIHN0eWxlcyBhcmUgaW5qZWN0ZWQgY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYXBpI2Nzc1xcblxcblwiLDEzOlwiJXMgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlxcblxcblwiLDE0OidUaGVtZVByb3ZpZGVyOiBcInRoZW1lXCIgcHJvcCBpcyByZXF1aXJlZC5cXG5cXG4nLDE1OlwiQSBzdHlsaXMgcGx1Z2luIGhhcyBiZWVuIHN1cHBsaWVkIHRoYXQgaXMgbm90IG5hbWVkLiBXZSBuZWVkIGEgbmFtZSBmb3IgZWFjaCBwbHVnaW4gdG8gYmUgYWJsZSB0byBwcmV2ZW50IHN0eWxpbmcgY29sbGlzaW9ucyBiZXR3ZWVuIGRpZmZlcmVudCBzdHlsaXMgY29uZmlndXJhdGlvbnMgd2l0aGluIHRoZSBzYW1lIGFwcC4gQmVmb3JlIHlvdSBwYXNzIHlvdXIgcGx1Z2luIHRvIGA8U3R5bGVTaGVldE1hbmFnZXIgc3R5bGlzUGx1Z2lucz17W119PmAsIHBsZWFzZSBtYWtlIHN1cmUgZWFjaCBwbHVnaW4gaXMgdW5pcXVlbHktbmFtZWQsIGUuZy5cXG5cXG5gYGBqc1xcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbXBvcnRlZFBsdWdpbiwgJ25hbWUnLCB7IHZhbHVlOiAnc29tZS11bmlxdWUtbmFtZScgfSk7XFxuYGBgXFxuXFxuXCIsMTY6XCJSZWFjaGVkIHRoZSBsaW1pdCBvZiBob3cgbWFueSBzdHlsZWQgY29tcG9uZW50cyBtYXkgYmUgY3JlYXRlZCBhdCBncm91cCAlcy5cXG5Zb3UgbWF5IG9ubHkgY3JlYXRlIHVwIHRvIDEsMDczLDc0MSw4MjQgY29tcG9uZW50cy4gSWYgeW91J3JlIGNyZWF0aW5nIGNvbXBvbmVudHMgZHluYW1pY2FsbHksXFxuYXMgZm9yIGluc3RhbmNlIGluIHlvdXIgcmVuZGVyIG1ldGhvZCB0aGVuIHlvdSBtYXkgYmUgcnVubmluZyBpbnRvIHRoaXMgbGltaXRhdGlvbi5cXG5cXG5cIiwxNzpcIkNTU1N0eWxlU2hlZXQgY291bGQgbm90IGJlIGZvdW5kIG9uIEhUTUxTdHlsZUVsZW1lbnQuXFxuSGFzIHN0eWxlZC1jb21wb25lbnRzJyBzdHlsZSB0YWcgYmVlbiB1bm1vdW50ZWQgb3IgYWx0ZXJlZCBieSBhbm90aGVyIHNjcmlwdD9cXG5cIn06e307ZnVuY3Rpb24gRCgpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wP3ZvaWQgMDphcmd1bWVudHNbMF0sdD1bXSxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKz0xKXQucHVzaChuPDB8fGFyZ3VtZW50cy5sZW5ndGg8PW4/dm9pZCAwOmFyZ3VtZW50c1tuXSk7cmV0dXJuIHQuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZT1lLnJlcGxhY2UoLyVbYS16XS8sdCl9KSksZX1mdW5jdGlvbiBqKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt0aHJvd1wicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/bmV3IEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdC5pby9KVUlhRSNcIitlK1wiIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKyhuLmxlbmd0aD4wP1wiIEFyZ3M6IFwiK24uam9pbihcIiwgXCIpOlwiXCIpKTpuZXcgRXJyb3IoRC5hcHBseSh2b2lkIDAsW1JbZV1dLmNvbmNhdChuKSkudHJpbSgpKX12YXIgVD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dGhpcy5ncm91cFNpemVzPW5ldyBVaW50MzJBcnJheSg1MTIpLHRoaXMubGVuZ3RoPTUxMix0aGlzLnRhZz1lfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LmluZGV4T2ZHcm91cD1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPTA7bjxlO24rKyl0Kz10aGlzLmdyb3VwU2l6ZXNbbl07cmV0dXJuIHR9LHQuaW5zZXJ0UnVsZXM9ZnVuY3Rpb24oZSx0KXtpZihlPj10aGlzLmdyb3VwU2l6ZXMubGVuZ3RoKXtmb3IodmFyIG49dGhpcy5ncm91cFNpemVzLHI9bi5sZW5ndGgsbz1yO2U+PW87KShvPDw9MSk8MCYmaigxNixcIlwiK2UpO3RoaXMuZ3JvdXBTaXplcz1uZXcgVWludDMyQXJyYXkobyksdGhpcy5ncm91cFNpemVzLnNldChuKSx0aGlzLmxlbmd0aD1vO2Zvcih2YXIgcz1yO3M8bztzKyspdGhpcy5ncm91cFNpemVzW3NdPTB9Zm9yKHZhciBpPXRoaXMuaW5kZXhPZkdyb3VwKGUrMSksYT0wLGM9dC5sZW5ndGg7YTxjO2ErKyl0aGlzLnRhZy5pbnNlcnRSdWxlKGksdFthXSkmJih0aGlzLmdyb3VwU2l6ZXNbZV0rKyxpKyspfSx0LmNsZWFyR3JvdXA9ZnVuY3Rpb24oZSl7aWYoZTx0aGlzLmxlbmd0aCl7dmFyIHQ9dGhpcy5ncm91cFNpemVzW2VdLG49dGhpcy5pbmRleE9mR3JvdXAoZSkscj1uK3Q7dGhpcy5ncm91cFNpemVzW2VdPTA7Zm9yKHZhciBvPW47bzxyO28rKyl0aGlzLnRhZy5kZWxldGVSdWxlKG4pfX0sdC5nZXRHcm91cD1mdW5jdGlvbihlKXt2YXIgdD1cIlwiO2lmKGU+PXRoaXMubGVuZ3RofHwwPT09dGhpcy5ncm91cFNpemVzW2VdKXJldHVybiB0O2Zvcih2YXIgbj10aGlzLmdyb3VwU2l6ZXNbZV0scj10aGlzLmluZGV4T2ZHcm91cChlKSxvPXIrbixzPXI7czxvO3MrKyl0Kz10aGlzLnRhZy5nZXRSdWxlKHMpK1wiLyohc2MqL1xcblwiO3JldHVybiB0fSxlfSgpLGs9bmV3IE1hcCx4PW5ldyBNYXAsVj0xLEI9ZnVuY3Rpb24oZSl7aWYoay5oYXMoZSkpcmV0dXJuIGsuZ2V0KGUpO2Zvcig7eC5oYXMoVik7KVYrKzt2YXIgdD1WKys7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKCgwfHQpPDB8fHQ+MTw8MzApJiZqKDE2LFwiXCIrdCksay5zZXQoZSx0KSx4LnNldCh0LGUpLHR9LE09ZnVuY3Rpb24oZSl7cmV0dXJuIHguZ2V0KGUpfSx6PWZ1bmN0aW9uKGUsdCl7ay5zZXQoZSx0KSx4LnNldCh0LGUpfSxMPVwic3R5bGVbXCIrQSsnXVtkYXRhLXN0eWxlZC12ZXJzaW9uPVwiNS4yLjFcIl0nLEc9bmV3IFJlZ0V4cChcIl5cIitBKydcXFxcLmcoXFxcXGQrKVxcXFxbaWQ9XCIoW1xcXFx3XFxcXGQtXSspXCJcXFxcXS4qP1wiKFteXCJdKiknKSxGPWZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHIsbz1uLnNwbGl0KFwiLFwiKSxzPTAsaT1vLmxlbmd0aDtzPGk7cysrKShyPW9bc10pJiZlLnJlZ2lzdGVyTmFtZSh0LHIpfSxZPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPXQuaW5uZXJIVE1MLnNwbGl0KFwiLyohc2MqL1xcblwiKSxyPVtdLG89MCxzPW4ubGVuZ3RoO288cztvKyspe3ZhciBpPW5bb10udHJpbSgpO2lmKGkpe3ZhciBhPWkubWF0Y2goRyk7aWYoYSl7dmFyIGM9MHxwYXJzZUludChhWzFdLDEwKSx1PWFbMl07MCE9PWMmJih6KHUsYyksRihlLHUsYVszXSksZS5nZXRUYWcoKS5pbnNlcnRSdWxlcyhjLHIpKSxyLmxlbmd0aD0wfWVsc2Ugci5wdXNoKGkpfX19LHE9ZnVuY3Rpb24oKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgX193ZWJwYWNrX25vbmNlX18/X193ZWJwYWNrX25vbmNlX186bnVsbH0sSD1mdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5oZWFkLG49ZXx8dCxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmNoaWxkTm9kZXMsbj10Lmxlbmd0aDtuPj0wO24tLSl7dmFyIHI9dFtuXTtpZihyJiYxPT09ci5ub2RlVHlwZSYmci5oYXNBdHRyaWJ1dGUoQSkpcmV0dXJuIHJ9fShuKSxzPXZvaWQgMCE9PW8/by5uZXh0U2libGluZzpudWxsO3Iuc2V0QXR0cmlidXRlKEEsXCJhY3RpdmVcIiksci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlZC12ZXJzaW9uXCIsXCI1LjIuMVwiKTt2YXIgaT1xKCk7cmV0dXJuIGkmJnIuc2V0QXR0cmlidXRlKFwibm9uY2VcIixpKSxuLmluc2VydEJlZm9yZShyLHMpLHJ9LCQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3ZhciB0PXRoaXMuZWxlbWVudD1IKGUpO3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpLHRoaXMuc2hlZXQ9ZnVuY3Rpb24oZSl7aWYoZS5zaGVldClyZXR1cm4gZS5zaGVldDtmb3IodmFyIHQ9ZG9jdW1lbnQuc3R5bGVTaGVldHMsbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIG89dFtuXTtpZihvLm93bmVyTm9kZT09PWUpcmV0dXJuIG99aigxNyl9KHQpLHRoaXMubGVuZ3RoPTB9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5zZXJ0UnVsZT1mdW5jdGlvbihlLHQpe3RyeXtyZXR1cm4gdGhpcy5zaGVldC5pbnNlcnRSdWxlKHQsZSksdGhpcy5sZW5ndGgrKywhMH1jYXRjaChlKXtyZXR1cm4hMX19LHQuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLnNoZWV0LmRlbGV0ZVJ1bGUoZSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuc2hlZXQuY3NzUnVsZXNbZV07cmV0dXJuIHZvaWQgMCE9PXQmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmNzc1RleHQ/dC5jc3NUZXh0OlwiXCJ9LGV9KCksVz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5lbGVtZW50PUgoZSk7dGhpcy5ub2Rlcz10LmNoaWxkTm9kZXMsdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7aWYoZTw9dGhpcy5sZW5ndGgmJmU+PTApe3ZhciBuPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpLHI9dGhpcy5ub2Rlc1tlXTtyZXR1cm4gdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShuLHJ8fG51bGwpLHRoaXMubGVuZ3RoKyssITB9cmV0dXJuITF9LHQuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5ub2Rlc1tlXSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3JldHVybiBlPHRoaXMubGVuZ3RoP3RoaXMubm9kZXNbZV0udGV4dENvbnRlbnQ6XCJcIn0sZX0oKSxVPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLnJ1bGVzPVtdLHRoaXMubGVuZ3RoPTB9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5zZXJ0UnVsZT1mdW5jdGlvbihlLHQpe3JldHVybiBlPD10aGlzLmxlbmd0aCYmKHRoaXMucnVsZXMuc3BsaWNlKGUsMCx0KSx0aGlzLmxlbmd0aCsrLCEwKX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMucnVsZXMuc3BsaWNlKGUsMSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3JldHVybiBlPHRoaXMubGVuZ3RoP3RoaXMucnVsZXNbZV06XCJcIn0sZX0oKSxKPUksWD17aXNTZXJ2ZXI6IUksdXNlQ1NTT01JbmplY3Rpb246IVB9LFo9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt2b2lkIDA9PT1lJiYoZT1FKSx2b2lkIDA9PT10JiYodD17fSksdGhpcy5vcHRpb25zPXYoe30sWCx7fSxlKSx0aGlzLmdzPXQsdGhpcy5uYW1lcz1uZXcgTWFwKG4pLCF0aGlzLm9wdGlvbnMuaXNTZXJ2ZXImJkkmJkomJihKPSExLGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKEwpLG49MCxyPXQubGVuZ3RoO248cjtuKyspe3ZhciBvPXRbbl07byYmXCJhY3RpdmVcIiE9PW8uZ2V0QXR0cmlidXRlKEEpJiYoWShlLG8pLG8ucGFyZW50Tm9kZSYmby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pKX19KHRoaXMpKX1lLnJlZ2lzdGVySWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIEIoZSl9O3ZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LnJlY29uc3RydWN0V2l0aE9wdGlvbnM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49ITApLG5ldyBlKHYoe30sdGhpcy5vcHRpb25zLHt9LHQpLHRoaXMuZ3MsbiYmdGhpcy5uYW1lc3x8dm9pZCAwKX0sdC5hbGxvY2F0ZUdTSW5zdGFuY2U9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZ3NbZV09KHRoaXMuZ3NbZV18fDApKzF9LHQuZ2V0VGFnPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGFnfHwodGhpcy50YWc9KG49KHQ9dGhpcy5vcHRpb25zKS5pc1NlcnZlcixyPXQudXNlQ1NTT01JbmplY3Rpb24sbz10LnRhcmdldCxlPW4/bmV3IFUobyk6cj9uZXcgJChvKTpuZXcgVyhvKSxuZXcgVChlKSkpO3ZhciBlLHQsbixyLG99LHQuaGFzTmFtZUZvcklkPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubmFtZXMuaGFzKGUpJiZ0aGlzLm5hbWVzLmdldChlKS5oYXModCl9LHQucmVnaXN0ZXJOYW1lPWZ1bmN0aW9uKGUsdCl7aWYoQihlKSx0aGlzLm5hbWVzLmhhcyhlKSl0aGlzLm5hbWVzLmdldChlKS5hZGQodCk7ZWxzZXt2YXIgbj1uZXcgU2V0O24uYWRkKHQpLHRoaXMubmFtZXMuc2V0KGUsbil9fSx0Lmluc2VydFJ1bGVzPWZ1bmN0aW9uKGUsdCxuKXt0aGlzLnJlZ2lzdGVyTmFtZShlLHQpLHRoaXMuZ2V0VGFnKCkuaW5zZXJ0UnVsZXMoQihlKSxuKX0sdC5jbGVhck5hbWVzPWZ1bmN0aW9uKGUpe3RoaXMubmFtZXMuaGFzKGUpJiZ0aGlzLm5hbWVzLmdldChlKS5jbGVhcigpfSx0LmNsZWFyUnVsZXM9ZnVuY3Rpb24oZSl7dGhpcy5nZXRUYWcoKS5jbGVhckdyb3VwKEIoZSkpLHRoaXMuY2xlYXJOYW1lcyhlKX0sdC5jbGVhclRhZz1mdW5jdGlvbigpe3RoaXMudGFnPXZvaWQgMH0sdC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5nZXRUYWcoKSxuPXQubGVuZ3RoLHI9XCJcIixvPTA7bzxuO28rKyl7dmFyIHM9TShvKTtpZih2b2lkIDAhPT1zKXt2YXIgaT1lLm5hbWVzLmdldChzKSxhPXQuZ2V0R3JvdXAobyk7aWYodm9pZCAwIT09aSYmMCE9PWEubGVuZ3RoKXt2YXIgYz1BK1wiLmdcIitvKydbaWQ9XCInK3MrJ1wiXScsdT1cIlwiO3ZvaWQgMCE9PWkmJmkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5sZW5ndGg+MCYmKHUrPWUrXCIsXCIpfSkpLHIrPVwiXCIrYStjKyd7Y29udGVudDpcIicrdSsnXCJ9Lyohc2MqL1xcbid9fX1yZXR1cm4gcn0odGhpcyl9LGV9KCksSz0vKGEpKGQpL2dpLFE9ZnVuY3Rpb24oZSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZSsoZT4yNT8zOTo5NykpfTtmdW5jdGlvbiBlZShlKXt2YXIgdCxuPVwiXCI7Zm9yKHQ9TWF0aC5hYnMoZSk7dD41Mjt0PXQvNTJ8MCluPVEodCU1MikrbjtyZXR1cm4oUSh0JTUyKStuKS5yZXBsYWNlKEssXCIkMS0kMlwiKX12YXIgdGU9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dC5sZW5ndGg7bjspZT0zMyplXnQuY2hhckNvZGVBdCgtLW4pO3JldHVybiBlfSxuZT1mdW5jdGlvbihlKXtyZXR1cm4gdGUoNTM4MSxlKX07ZnVuY3Rpb24gcmUoZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kz0xKXt2YXIgbj1lW3RdO2lmKGIobikmJiFOKG4pKXJldHVybiExfXJldHVybiEwfXZhciBvZT1uZShcIjUuMi4xXCIpLHNlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsbil7dGhpcy5ydWxlcz1lLHRoaXMuc3RhdGljUnVsZXNJZD1cIlwiLHRoaXMuaXNTdGF0aWM9XCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKHZvaWQgMD09PW58fG4uaXNTdGF0aWMpJiZyZShlKSx0aGlzLmNvbXBvbmVudElkPXQsdGhpcy5iYXNlSGFzaD10ZShvZSx0KSx0aGlzLmJhc2VTdHlsZT1uLFoucmVnaXN0ZXJJZCh0KX1yZXR1cm4gZS5wcm90b3R5cGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXM9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRoaXMuY29tcG9uZW50SWQsbz1bXTtpZih0aGlzLmJhc2VTdHlsZSYmby5wdXNoKHRoaXMuYmFzZVN0eWxlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGUsdCxuKSksdGhpcy5pc1N0YXRpYyYmIW4uaGFzaClpZih0aGlzLnN0YXRpY1J1bGVzSWQmJnQuaGFzTmFtZUZvcklkKHIsdGhpcy5zdGF0aWNSdWxlc0lkKSlvLnB1c2godGhpcy5zdGF0aWNSdWxlc0lkKTtlbHNle3ZhciBzPU5lKHRoaXMucnVsZXMsZSx0LG4pLmpvaW4oXCJcIiksaT1lZSh0ZSh0aGlzLmJhc2VIYXNoLHMubGVuZ3RoKT4+PjApO2lmKCF0Lmhhc05hbWVGb3JJZChyLGkpKXt2YXIgYT1uKHMsXCIuXCIraSx2b2lkIDAscik7dC5pbnNlcnRSdWxlcyhyLGksYSl9by5wdXNoKGkpLHRoaXMuc3RhdGljUnVsZXNJZD1pfWVsc2V7Zm9yKHZhciBjPXRoaXMucnVsZXMubGVuZ3RoLHU9dGUodGhpcy5iYXNlSGFzaCxuLmhhc2gpLGw9XCJcIixkPTA7ZDxjO2QrKyl7dmFyIGg9dGhpcy5ydWxlc1tkXTtpZihcInN0cmluZ1wiPT10eXBlb2YgaClsKz1oLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJih1PXRlKHUsaCtkKSk7ZWxzZSBpZihoKXt2YXIgcD1OZShoLGUsdCxuKSxmPUFycmF5LmlzQXJyYXkocCk/cC5qb2luKFwiXCIpOnA7dT10ZSh1LGYrZCksbCs9Zn19aWYobCl7dmFyIG09ZWUodT4+PjApO2lmKCF0Lmhhc05hbWVGb3JJZChyLG0pKXt2YXIgeT1uKGwsXCIuXCIrbSx2b2lkIDAscik7dC5pbnNlcnRSdWxlcyhyLG0seSl9by5wdXNoKG0pfX1yZXR1cm4gby5qb2luKFwiIFwiKX0sZX0oKSxpZT0vXlxccypcXC9cXC8uKiQvZ20sYWU9W1wiOlwiLFwiW1wiLFwiLlwiLFwiI1wiXTtmdW5jdGlvbiBjZShlKXt2YXIgdCxuLHIsbyxzPXZvaWQgMD09PWU/RTplLGk9cy5vcHRpb25zLGE9dm9pZCAwPT09aT9FOmksYz1zLnBsdWdpbnMsdT12b2lkIDA9PT1jP3c6YyxsPW5ldyBwKGEpLGQ9W10saD1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe2lmKHQpdHJ5e2UodCtcIn1cIil9Y2F0Y2goZSl7fX1yZXR1cm4gZnVuY3Rpb24obixyLG8scyxpLGEsYyx1LGwsZCl7c3dpdGNoKG4pe2Nhc2UgMTppZigwPT09bCYmNjQ9PT1yLmNoYXJDb2RlQXQoMCkpcmV0dXJuIGUocitcIjtcIiksXCJcIjticmVhaztjYXNlIDI6aWYoMD09PXUpcmV0dXJuIHIrXCIvKnwqL1wiO2JyZWFrO2Nhc2UgMzpzd2l0Y2godSl7Y2FzZSAxMDI6Y2FzZSAxMTI6cmV0dXJuIGUob1swXStyKSxcIlwiO2RlZmF1bHQ6cmV0dXJuIHIrKDA9PT1kP1wiLyp8Ki9cIjpcIlwiKX1jYXNlLTI6ci5zcGxpdChcIi8qfCovfVwiKS5mb3JFYWNoKHQpfX19KChmdW5jdGlvbihlKXtkLnB1c2goZSl9KSksZj1mdW5jdGlvbihlLHIscyl7cmV0dXJuIDA9PT1yJiZhZS5pbmNsdWRlcyhzW24ubGVuZ3RoXSl8fHMubWF0Y2gobyk/ZTpcIi5cIit0fTtmdW5jdGlvbiBtKGUscyxpLGEpe3ZvaWQgMD09PWEmJihhPVwiJlwiKTt2YXIgYz1lLnJlcGxhY2UoaWUsXCJcIiksdT1zJiZpP2krXCIgXCIrcytcIiB7IFwiK2MrXCIgfVwiOmM7cmV0dXJuIHQ9YSxuPXMscj1uZXcgUmVnRXhwKFwiXFxcXFwiK24rXCJcXFxcYlwiLFwiZ1wiKSxvPW5ldyBSZWdFeHAoXCIoXFxcXFwiK24rXCJcXFxcYil7Mix9XCIpLGwoaXx8IXM/XCJcIjpzLHUpfXJldHVybiBsLnVzZShbXS5jb25jYXQodSxbZnVuY3Rpb24oZSx0LG8pezI9PT1lJiZvLmxlbmd0aCYmb1swXS5sYXN0SW5kZXhPZihuKT4wJiYob1swXT1vWzBdLnJlcGxhY2UocixmKSl9LGgsZnVuY3Rpb24oZSl7aWYoLTI9PT1lKXt2YXIgdD1kO3JldHVybiBkPVtdLHR9fV0pKSxtLmhhc2g9dS5sZW5ndGg/dS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQubmFtZXx8aigxNSksdGUoZSx0Lm5hbWUpfSksNTM4MSkudG9TdHJpbmcoKTpcIlwiLG19dmFyIHVlPXIuY3JlYXRlQ29udGV4dCgpLGxlPXVlLkNvbnN1bWVyLGRlPXIuY3JlYXRlQ29udGV4dCgpLGhlPShkZS5Db25zdW1lcixuZXcgWikscGU9Y2UoKTtmdW5jdGlvbiBmZSgpe3JldHVybiBzKHVlKXx8aGV9ZnVuY3Rpb24gbWUoKXtyZXR1cm4gcyhkZSl8fHBlfWZ1bmN0aW9uIHllKGUpe3ZhciB0PW8oZS5zdHlsaXNQbHVnaW5zKSxuPXRbMF0scz10WzFdLGM9ZmUoKSx1PWkoKGZ1bmN0aW9uKCl7dmFyIHQ9YztyZXR1cm4gZS5zaGVldD90PWUuc2hlZXQ6ZS50YXJnZXQmJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dGFyZ2V0OmUudGFyZ2V0fSwhMSkpLGUuZGlzYWJsZUNTU09NSW5qZWN0aW9uJiYodD10LnJlY29uc3RydWN0V2l0aE9wdGlvbnMoe3VzZUNTU09NSW5qZWN0aW9uOiExfSkpLHR9KSxbZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24sZS5zaGVldCxlLnRhcmdldF0pLGw9aSgoZnVuY3Rpb24oKXtyZXR1cm4gY2Uoe29wdGlvbnM6e3ByZWZpeDohZS5kaXNhYmxlVmVuZG9yUHJlZml4ZXN9LHBsdWdpbnM6bn0pfSksW2UuZGlzYWJsZVZlbmRvclByZWZpeGVzLG5dKTtyZXR1cm4gYSgoZnVuY3Rpb24oKXtoKG4sZS5zdHlsaXNQbHVnaW5zKXx8cyhlLnN0eWxpc1BsdWdpbnMpfSksW2Uuc3R5bGlzUGx1Z2luc10pLHIuY3JlYXRlRWxlbWVudCh1ZS5Qcm92aWRlcix7dmFsdWU6dX0sci5jcmVhdGVFbGVtZW50KGRlLlByb3ZpZGVyLHt2YWx1ZTpsfSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP3IuQ2hpbGRyZW4ub25seShlLmNoaWxkcmVuKTplLmNoaWxkcmVuKSl9dmFyIHZlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3ZhciBuPXRoaXM7dGhpcy5pbmplY3Q9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1wZSk7dmFyIHI9bi5uYW1lK3QuaGFzaDtlLmhhc05hbWVGb3JJZChuLmlkLHIpfHxlLmluc2VydFJ1bGVzKG4uaWQscix0KG4ucnVsZXMscixcIkBrZXlmcmFtZXNcIikpfSx0aGlzLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIGooMTIsU3RyaW5nKG4ubmFtZSkpfSx0aGlzLm5hbWU9ZSx0aGlzLmlkPVwic2Mta2V5ZnJhbWVzLVwiK2UsdGhpcy5ydWxlcz10fXJldHVybiBlLnByb3RvdHlwZS5nZXROYW1lPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1wZSksdGhpcy5uYW1lK2UuaGFzaH0sZX0oKSxnZT0vKFtBLVpdKS8sU2U9LyhbQS1aXSkvZyx3ZT0vXm1zLS8sRWU9ZnVuY3Rpb24oZSl7cmV0dXJuXCItXCIrZS50b0xvd2VyQ2FzZSgpfTtmdW5jdGlvbiBiZShlKXtyZXR1cm4gZ2UudGVzdChlKT9lLnJlcGxhY2UoU2UsRWUpLnJlcGxhY2Uod2UsXCItbXMtXCIpOmV9dmFyIF9lPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lfHwhMT09PWV8fFwiXCI9PT1lfTtmdW5jdGlvbiBOZShlLG4scixvKXtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHMsaT1bXSxhPTAsYz1lLmxlbmd0aDthPGM7YSs9MSlcIlwiIT09KHM9TmUoZVthXSxuLHIsbykpJiYoQXJyYXkuaXNBcnJheShzKT9pLnB1c2guYXBwbHkoaSxzKTppLnB1c2gocykpO3JldHVybiBpfWlmKF9lKGUpKXJldHVyblwiXCI7aWYoTihlKSlyZXR1cm5cIi5cIitlLnN0eWxlZENvbXBvbmVudElkO2lmKGIoZSkpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mKGw9ZSl8fGwucHJvdG90eXBlJiZsLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fHwhbilyZXR1cm4gZTt2YXIgdT1lKG4pO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnQodSkmJmNvbnNvbGUud2FybihfKGUpK1wiIGlzIG5vdCBhIHN0eWxlZCBjb21wb25lbnQgYW5kIGNhbm5vdCBiZSByZWZlcnJlZCB0byB2aWEgY29tcG9uZW50IHNlbGVjdG9yLiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYWR2YW5jZWQjcmVmZXJyaW5nLXRvLW90aGVyLWNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscy5cIiksTmUodSxuLHIsbyl9dmFyIGw7cmV0dXJuIGUgaW5zdGFuY2VvZiB2ZT9yPyhlLmluamVjdChyLG8pLGUuZ2V0TmFtZShvKSk6ZTpTKGUpP2Z1bmN0aW9uIGUodCxuKXt2YXIgcixvLHM9W107Zm9yKHZhciBpIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShpKSYmIV9lKHRbaV0pJiYoUyh0W2ldKT9zLnB1c2guYXBwbHkocyxlKHRbaV0saSkpOmIodFtpXSk/cy5wdXNoKGJlKGkpK1wiOlwiLHRbaV0sXCI7XCIpOnMucHVzaChiZShpKStcIjogXCIrKHI9aSxudWxsPT0obz10W2ldKXx8XCJib29sZWFuXCI9PXR5cGVvZiBvfHxcIlwiPT09bz9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiBvfHwwPT09b3x8ciBpbiBmP1N0cmluZyhvKS50cmltKCk6bytcInB4XCIpK1wiO1wiKSk7cmV0dXJuIG4/W24rXCIge1wiXS5jb25jYXQocyxbXCJ9XCJdKTpzfShlKTplLnRvU3RyaW5nKCl9ZnVuY3Rpb24gQWUoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3JldHVybiBiKGUpfHxTKGUpP05lKGcodyxbZV0uY29uY2F0KG4pKSk6MD09PW4ubGVuZ3RoJiYxPT09ZS5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBlWzBdP2U6TmUoZyhlLG4pKX12YXIgQ2U9L2ludmFsaWQgaG9vayBjYWxsL2ksSWU9bmV3IFNldCxQZT1mdW5jdGlvbihlLHQpe2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpe3ZhciBuPVwiVGhlIGNvbXBvbmVudCBcIitlKyh0Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiKStcIiBoYXMgYmVlbiBjcmVhdGVkIGR5bmFtaWNhbGx5LlxcbllvdSBtYXkgc2VlIHRoaXMgd2FybmluZyBiZWNhdXNlIHlvdSd2ZSBjYWxsZWQgc3R5bGVkIGluc2lkZSBhbm90aGVyIGNvbXBvbmVudC5cXG5UbyByZXNvbHZlIHRoaXMgb25seSBjcmVhdGUgbmV3IFN0eWxlZENvbXBvbmVudHMgb3V0c2lkZSBvZiBhbnkgcmVuZGVyIG1ldGhvZCBhbmQgZnVuY3Rpb24gY29tcG9uZW50LlwiO3RyeXtjKCksSWUuaGFzKG4pfHwoY29uc29sZS53YXJuKG4pLEllLmFkZChuKSl9Y2F0Y2goZSl7Q2UudGVzdChlLm1lc3NhZ2UpJiZJZS5kZWxldGUobil9fX0sT2U9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj1FKSxlLnRoZW1lIT09bi50aGVtZSYmZS50aGVtZXx8dHx8bi50aGVtZX0sUmU9L1shXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX4tXSsvZyxEZT0vKF4tfC0kKS9nO2Z1bmN0aW9uIGplKGUpe3JldHVybiBlLnJlcGxhY2UoUmUsXCItXCIpLnJlcGxhY2UoRGUsXCJcIil9dmFyIFRlPWZ1bmN0aW9uKGUpe3JldHVybiBlZShuZShlKT4+PjApfTtmdW5jdGlvbiBrZShlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKFwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fGUuY2hhckF0KDApPT09ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSl9dmFyIHhlPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmIUFycmF5LmlzQXJyYXkoZSl9LFZlPWZ1bmN0aW9uKGUpe3JldHVyblwiX19wcm90b19fXCIhPT1lJiZcImNvbnN0cnVjdG9yXCIhPT1lJiZcInByb3RvdHlwZVwiIT09ZX07ZnVuY3Rpb24gQmUoZSx0LG4pe3ZhciByPWVbbl07eGUodCkmJnhlKHIpP01lKHIsdCk6ZVtuXT10fWZ1bmN0aW9uIE1lKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtmb3IodmFyIG89MCxzPW47bzxzLmxlbmd0aDtvKyspe3ZhciBpPXNbb107aWYoeGUoaSkpZm9yKHZhciBhIGluIGkpVmUoYSkmJkJlKGUsaVthXSxhKX1yZXR1cm4gZX12YXIgemU9ci5jcmVhdGVDb250ZXh0KCksTGU9emUuQ29uc3VtZXI7ZnVuY3Rpb24gR2UoZSl7dmFyIHQ9cyh6ZSksbj1pKChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybiBqKDE0KTtpZihiKGUpKXt2YXIgbj1lKHQpO3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fG51bGwhPT1uJiYhQXJyYXkuaXNBcnJheShuKSYmXCJvYmplY3RcIj09dHlwZW9mIG4/bjpqKDcpfXJldHVybiBBcnJheS5pc0FycmF5KGUpfHxcIm9iamVjdFwiIT10eXBlb2YgZT9qKDgpOnQ/dih7fSx0LHt9LGUpOmV9KGUudGhlbWUsdCl9KSxbZS50aGVtZSx0XSk7cmV0dXJuIGUuY2hpbGRyZW4/ci5jcmVhdGVFbGVtZW50KHplLlByb3ZpZGVyLHt2YWx1ZTpufSxlLmNoaWxkcmVuKTpudWxsfXZhciBGZT17fTtmdW5jdGlvbiBZZShlLHQsbil7dmFyIG89TihlKSxpPSFrZShlKSxhPXQuYXR0cnMsYz12b2lkIDA9PT1hP3c6YSxkPXQuY29tcG9uZW50SWQsaD12b2lkIDA9PT1kP2Z1bmN0aW9uKGUsdCl7dmFyIG49XCJzdHJpbmdcIiE9dHlwZW9mIGU/XCJzY1wiOmplKGUpO0ZlW25dPShGZVtuXXx8MCkrMTt2YXIgcj1uK1wiLVwiK1RlKFwiNS4yLjFcIituK0ZlW25dKTtyZXR1cm4gdD90K1wiLVwiK3I6cn0odC5kaXNwbGF5TmFtZSx0LnBhcmVudENvbXBvbmVudElkKTpkLHA9dC5kaXNwbGF5TmFtZSxmPXZvaWQgMD09PXA/ZnVuY3Rpb24oZSl7cmV0dXJuIGtlKGUpP1wic3R5bGVkLlwiK2U6XCJTdHlsZWQoXCIrXyhlKStcIilcIn0oZSk6cCxnPXQuZGlzcGxheU5hbWUmJnQuY29tcG9uZW50SWQ/amUodC5kaXNwbGF5TmFtZSkrXCItXCIrdC5jb21wb25lbnRJZDp0LmNvbXBvbmVudElkfHxoLFM9byYmZS5hdHRycz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuYXR0cnMsYykuZmlsdGVyKEJvb2xlYW4pOmMsQT10LnNob3VsZEZvcndhcmRQcm9wO28mJmUuc2hvdWxkRm9yd2FyZFByb3AmJihBPXQuc2hvdWxkRm9yd2FyZFByb3A/ZnVuY3Rpb24obixyKXtyZXR1cm4gZS5zaG91bGRGb3J3YXJkUHJvcChuLHIpJiZ0LnNob3VsZEZvcndhcmRQcm9wKG4scil9OmUuc2hvdWxkRm9yd2FyZFByb3ApO3ZhciBDLEk9bmV3IHNlKG4sZyxvP2UuY29tcG9uZW50U3R5bGU6dm9pZCAwKSxQPUkuaXNTdGF0aWMmJjA9PT1jLmxlbmd0aCxPPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPWUuYXR0cnMsaT1lLmNvbXBvbmVudFN0eWxlLGE9ZS5kZWZhdWx0UHJvcHMsYz1lLmZvbGRlZENvbXBvbmVudElkcyxkPWUuc2hvdWxkRm9yd2FyZFByb3AsaD1lLnN0eWxlZENvbXBvbmVudElkLHA9ZS50YXJnZXQ7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbChoKTt2YXIgZj1mdW5jdGlvbihlLHQsbil7dm9pZCAwPT09ZSYmKGU9RSk7dmFyIHI9dih7fSx0LHt0aGVtZTplfSksbz17fTtyZXR1cm4gbi5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdCxuLHMsaT1lO2Zvcih0IGluIGIoaSkmJihpPWkocikpLGkpclt0XT1vW3RdPVwiY2xhc3NOYW1lXCI9PT10PyhuPW9bdF0scz1pW3RdLG4mJnM/bitcIiBcIitzOm58fHMpOmlbdF19KSksW3Isb119KE9lKHQscyh6ZSksYSl8fEUsdCxvKSx5PWZbMF0sZz1mWzFdLFM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89ZmUoKSxzPW1lKCksaT10P2UuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoRSxvLHMpOmUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMobixvLHMpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmwoaSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmIXQmJnImJnIoaSksaX0oaSxyLHksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9lLndhcm5Ub29NYW55Q2xhc3Nlczp2b2lkIDApLHc9bixfPWcuJGFzfHx0LiRhc3x8Zy5hc3x8dC5hc3x8cCxOPWtlKF8pLEE9ZyE9PXQ/dih7fSx0LHt9LGcpOnQsQz17fTtmb3IodmFyIEkgaW4gQSlcIiRcIiE9PUlbMF0mJlwiYXNcIiE9PUkmJihcImZvcndhcmRlZEFzXCI9PT1JP0MuYXM9QVtJXTooZD9kKEksbSk6IU58fG0oSSkpJiYoQ1tJXT1BW0ldKSk7cmV0dXJuIHQuc3R5bGUmJmcuc3R5bGUhPT10LnN0eWxlJiYoQy5zdHlsZT12KHt9LHQuc3R5bGUse30sZy5zdHlsZSkpLEMuY2xhc3NOYW1lPUFycmF5LnByb3RvdHlwZS5jb25jYXQoYyxoLFMhPT1oP1M6bnVsbCx0LmNsYXNzTmFtZSxnLmNsYXNzTmFtZSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpLEMucmVmPXcsdShfLEMpfShDLGUsdCxQKX07cmV0dXJuIE8uZGlzcGxheU5hbWU9ZiwoQz1yLmZvcndhcmRSZWYoTykpLmF0dHJzPVMsQy5jb21wb25lbnRTdHlsZT1JLEMuZGlzcGxheU5hbWU9ZixDLnNob3VsZEZvcndhcmRQcm9wPUEsQy5mb2xkZWRDb21wb25lbnRJZHM9bz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuZm9sZGVkQ29tcG9uZW50SWRzLGUuc3R5bGVkQ29tcG9uZW50SWQpOncsQy5zdHlsZWRDb21wb25lbnRJZD1nLEMudGFyZ2V0PW8/ZS50YXJnZXQ6ZSxDLndpdGhDb21wb25lbnQ9ZnVuY3Rpb24oZSl7dmFyIHI9dC5jb21wb25lbnRJZCxvPWZ1bmN0aW9uKGUsdCl7aWYobnVsbD09ZSlyZXR1cm57fTt2YXIgbixyLG89e30scz1PYmplY3Qua2V5cyhlKTtmb3Iocj0wO3I8cy5sZW5ndGg7cisrKW49c1tyXSx0LmluZGV4T2Yobik+PTB8fChvW25dPWVbbl0pO3JldHVybiBvfSh0LFtcImNvbXBvbmVudElkXCJdKSxzPXImJnIrXCItXCIrKGtlKGUpP2U6amUoXyhlKSkpO3JldHVybiBZZShlLHYoe30sbyx7YXR0cnM6Uyxjb21wb25lbnRJZDpzfSksbil9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDLFwiZGVmYXVsdFByb3BzXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHN9LHNldDpmdW5jdGlvbih0KXt0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHM9bz9NZSh7fSxlLmRlZmF1bHRQcm9wcyx0KTp0fX0pLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJihQZShmLGcpLEMud2FyblRvb01hbnlDbGFzc2VzPWZ1bmN0aW9uKGUsdCl7dmFyIG49e30scj0hMTtyZXR1cm4gZnVuY3Rpb24obyl7aWYoIXImJihuW29dPSEwLE9iamVjdC5rZXlzKG4pLmxlbmd0aD49MjAwKSl7dmFyIHM9dD8nIHdpdGggdGhlIGlkIG9mIFwiJyt0KydcIic6XCJcIjtjb25zb2xlLndhcm4oXCJPdmVyIDIwMCBjbGFzc2VzIHdlcmUgZ2VuZXJhdGVkIGZvciBjb21wb25lbnQgXCIrZStzK1wiLlxcbkNvbnNpZGVyIHVzaW5nIHRoZSBhdHRycyBtZXRob2QsIHRvZ2V0aGVyIHdpdGggYSBzdHlsZSBvYmplY3QgZm9yIGZyZXF1ZW50bHkgY2hhbmdlZCBzdHlsZXMuXFxuRXhhbXBsZTpcXG4gIGNvbnN0IENvbXBvbmVudCA9IHN0eWxlZC5kaXYuYXR0cnMocHJvcHMgPT4gKHtcXG4gICAgc3R5bGU6IHtcXG4gICAgICBiYWNrZ3JvdW5kOiBwcm9wcy5iYWNrZ3JvdW5kLFxcbiAgICB9LFxcbiAgfSkpYHdpZHRoOiAxMDAlO2BcXG5cXG4gIDxDb21wb25lbnQgLz5cIikscj0hMCxuPXt9fX19KGYsZykpLEMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIi5cIitDLnN0eWxlZENvbXBvbmVudElkfSxpJiZ5KEMsZSx7YXR0cnM6ITAsY29tcG9uZW50U3R5bGU6ITAsZGlzcGxheU5hbWU6ITAsZm9sZGVkQ29tcG9uZW50SWRzOiEwLHNob3VsZEZvcndhcmRQcm9wOiEwLHN0eWxlZENvbXBvbmVudElkOiEwLHRhcmdldDohMCx3aXRoQ29tcG9uZW50OiEwfSksQ312YXIgcWU9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uIGUodCxyLG8pe2lmKHZvaWQgMD09PW8mJihvPUUpLCFuKHIpKXJldHVybiBqKDEsU3RyaW5nKHIpKTt2YXIgcz1mdW5jdGlvbigpe3JldHVybiB0KHIsbyxBZS5hcHBseSh2b2lkIDAsYXJndW1lbnRzKSl9O3JldHVybiBzLndpdGhDb25maWc9ZnVuY3Rpb24obil7cmV0dXJuIGUodCxyLHYoe30sbyx7fSxuKSl9LHMuYXR0cnM9ZnVuY3Rpb24obil7cmV0dXJuIGUodCxyLHYoe30sbyx7YXR0cnM6QXJyYXkucHJvdG90eXBlLmNvbmNhdChvLmF0dHJzLG4pLmZpbHRlcihCb29sZWFuKX0pKX0sc30oWWUsZSl9O1tcImFcIixcImFiYnJcIixcImFkZHJlc3NcIixcImFyZWFcIixcImFydGljbGVcIixcImFzaWRlXCIsXCJhdWRpb1wiLFwiYlwiLFwiYmFzZVwiLFwiYmRpXCIsXCJiZG9cIixcImJpZ1wiLFwiYmxvY2txdW90ZVwiLFwiYm9keVwiLFwiYnJcIixcImJ1dHRvblwiLFwiY2FudmFzXCIsXCJjYXB0aW9uXCIsXCJjaXRlXCIsXCJjb2RlXCIsXCJjb2xcIixcImNvbGdyb3VwXCIsXCJkYXRhXCIsXCJkYXRhbGlzdFwiLFwiZGRcIixcImRlbFwiLFwiZGV0YWlsc1wiLFwiZGZuXCIsXCJkaWFsb2dcIixcImRpdlwiLFwiZGxcIixcImR0XCIsXCJlbVwiLFwiZW1iZWRcIixcImZpZWxkc2V0XCIsXCJmaWdjYXB0aW9uXCIsXCJmaWd1cmVcIixcImZvb3RlclwiLFwiZm9ybVwiLFwiaDFcIixcImgyXCIsXCJoM1wiLFwiaDRcIixcImg1XCIsXCJoNlwiLFwiaGVhZFwiLFwiaGVhZGVyXCIsXCJoZ3JvdXBcIixcImhyXCIsXCJodG1sXCIsXCJpXCIsXCJpZnJhbWVcIixcImltZ1wiLFwiaW5wdXRcIixcImluc1wiLFwia2JkXCIsXCJrZXlnZW5cIixcImxhYmVsXCIsXCJsZWdlbmRcIixcImxpXCIsXCJsaW5rXCIsXCJtYWluXCIsXCJtYXBcIixcIm1hcmtcIixcIm1hcnF1ZWVcIixcIm1lbnVcIixcIm1lbnVpdGVtXCIsXCJtZXRhXCIsXCJtZXRlclwiLFwibmF2XCIsXCJub3NjcmlwdFwiLFwib2JqZWN0XCIsXCJvbFwiLFwib3B0Z3JvdXBcIixcIm9wdGlvblwiLFwib3V0cHV0XCIsXCJwXCIsXCJwYXJhbVwiLFwicGljdHVyZVwiLFwicHJlXCIsXCJwcm9ncmVzc1wiLFwicVwiLFwicnBcIixcInJ0XCIsXCJydWJ5XCIsXCJzXCIsXCJzYW1wXCIsXCJzY3JpcHRcIixcInNlY3Rpb25cIixcInNlbGVjdFwiLFwic21hbGxcIixcInNvdXJjZVwiLFwic3BhblwiLFwic3Ryb25nXCIsXCJzdHlsZVwiLFwic3ViXCIsXCJzdW1tYXJ5XCIsXCJzdXBcIixcInRhYmxlXCIsXCJ0Ym9keVwiLFwidGRcIixcInRleHRhcmVhXCIsXCJ0Zm9vdFwiLFwidGhcIixcInRoZWFkXCIsXCJ0aW1lXCIsXCJ0aXRsZVwiLFwidHJcIixcInRyYWNrXCIsXCJ1XCIsXCJ1bFwiLFwidmFyXCIsXCJ2aWRlb1wiLFwid2JyXCIsXCJjaXJjbGVcIixcImNsaXBQYXRoXCIsXCJkZWZzXCIsXCJlbGxpcHNlXCIsXCJmb3JlaWduT2JqZWN0XCIsXCJnXCIsXCJpbWFnZVwiLFwibGluZVwiLFwibGluZWFyR3JhZGllbnRcIixcIm1hcmtlclwiLFwibWFza1wiLFwicGF0aFwiLFwicGF0dGVyblwiLFwicG9seWdvblwiLFwicG9seWxpbmVcIixcInJhZGlhbEdyYWRpZW50XCIsXCJyZWN0XCIsXCJzdG9wXCIsXCJzdmdcIixcInRleHRcIixcInRzcGFuXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe3FlW2VdPXFlKGUpfSkpO3ZhciBIZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLnJ1bGVzPWUsdGhpcy5jb21wb25lbnRJZD10LHRoaXMuaXNTdGF0aWM9cmUoZSksWi5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQrMSl9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuY3JlYXRlU3R5bGVzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPXIoTmUodGhpcy5ydWxlcyx0LG4scikuam9pbihcIlwiKSxcIlwiKSxzPXRoaXMuY29tcG9uZW50SWQrZTtuLmluc2VydFJ1bGVzKHMscyxvKX0sdC5yZW1vdmVTdHlsZXM9ZnVuY3Rpb24oZSx0KXt0LmNsZWFyUnVsZXModGhpcy5jb21wb25lbnRJZCtlKX0sdC5yZW5kZXJTdHlsZXM9ZnVuY3Rpb24oZSx0LG4scil7ZT4yJiZaLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCtlKSx0aGlzLnJlbW92ZVN0eWxlcyhlLG4pLHRoaXMuY3JlYXRlU3R5bGVzKGUsdCxuLHIpfSxlfSgpO2Z1bmN0aW9uICRlKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCksbz0xO288dDtvKyspbltvLTFdPWFyZ3VtZW50c1tvXTt2YXIgaT1BZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSksYT1cInNjLWdsb2JhbC1cIitUZShKU09OLnN0cmluZ2lmeShpKSksdT1uZXcgSGUoaSxhKTtmdW5jdGlvbiBsKGUpe3ZhciB0PWZlKCksbj1tZSgpLG89cyh6ZSksbD1jKHQuYWxsb2NhdGVHU0luc3RhbmNlKGEpKS5jdXJyZW50O3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnIuQ2hpbGRyZW4uY291bnQoZS5jaGlsZHJlbikmJmNvbnNvbGUud2FybihcIlRoZSBnbG9iYWwgc3R5bGUgY29tcG9uZW50IFwiK2ErXCIgd2FzIGdpdmVuIGNoaWxkIEpTWC4gY3JlYXRlR2xvYmFsU3R5bGUgZG9lcyBub3QgcmVuZGVyIGNoaWxkcmVuLlwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZpLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYtMSE9PWUuaW5kZXhPZihcIkBpbXBvcnRcIil9KSkmJmNvbnNvbGUud2FybihcIlBsZWFzZSBkbyBub3QgdXNlIEBpbXBvcnQgQ1NTIHN5bnRheCBpbiBjcmVhdGVHbG9iYWxTdHlsZSBhdCB0aGlzIHRpbWUsIGFzIHRoZSBDU1NPTSBBUElzIHdlIHVzZSBpbiBwcm9kdWN0aW9uIGRvIG5vdCBoYW5kbGUgaXQgd2VsbC4gSW5zdGVhZCwgd2UgcmVjb21tZW5kIHVzaW5nIGEgbGlicmFyeSBzdWNoIGFzIHJlYWN0LWhlbG1ldCB0byBpbmplY3QgYSB0eXBpY2FsIDxsaW5rPiBtZXRhIHRhZyB0byB0aGUgc3R5bGVzaGVldCwgb3Igc2ltcGx5IGVtYmVkZGluZyBpdCBtYW51YWxseSBpbiB5b3VyIGluZGV4Lmh0bWwgPGhlYWQ+IHNlY3Rpb24gZm9yIGEgc2ltcGxlciBhcHAuXCIpLGQoKGZ1bmN0aW9uKCl7cmV0dXJuIGgobCxlLHQsbyxuKSxmdW5jdGlvbigpe3JldHVybiB1LnJlbW92ZVN0eWxlcyhsLHQpfX0pLFtsLGUsdCxvLG5dKSxudWxsfWZ1bmN0aW9uIGgoZSx0LG4scixvKXtpZih1LmlzU3RhdGljKXUucmVuZGVyU3R5bGVzKGUsTyxuLG8pO2Vsc2V7dmFyIHM9dih7fSx0LHt0aGVtZTpPZSh0LHIsbC5kZWZhdWx0UHJvcHMpfSk7dS5yZW5kZXJTdHlsZXMoZSxzLG4sbyl9fXJldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlBlKGEpLHIubWVtbyhsKX1mdW5jdGlvbiBXZShlKXtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiYGtleWZyYW1lc2AgY2Fubm90IGJlIHVzZWQgb24gUmVhY3ROYXRpdmUsIG9ubHkgb24gdGhlIHdlYi4gVG8gZG8gYW5pbWF0aW9uIGluIFJlYWN0TmF0aXZlIHBsZWFzZSB1c2UgQW5pbWF0ZWQuXCIpO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt2YXIgbz1BZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSkuam9pbihcIlwiKSxzPVRlKG8pO3JldHVybiBuZXcgdmUocyxvKX12YXIgVWU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGU9dGhpczt0aGlzLl9lbWl0U2hlZXRDU1M9ZnVuY3Rpb24oKXt2YXIgdD1lLmluc3RhbmNlLnRvU3RyaW5nKCksbj1xKCk7cmV0dXJuXCI8c3R5bGUgXCIrW24mJidub25jZT1cIicrbisnXCInLEErJz1cInRydWVcIicsJ2RhdGEtc3R5bGVkLXZlcnNpb249XCI1LjIuMVwiJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpK1wiPlwiK3QrXCI8L3N0eWxlPlwifSx0aGlzLmdldFN0eWxlVGFncz1mdW5jdGlvbigpe3JldHVybiBlLnNlYWxlZD9qKDIpOmUuX2VtaXRTaGVldENTUygpfSx0aGlzLmdldFN0eWxlRWxlbWVudD1mdW5jdGlvbigpe3ZhciB0O2lmKGUuc2VhbGVkKXJldHVybiBqKDIpO3ZhciBuPSgodD17fSlbQV09XCJcIix0W1wiZGF0YS1zdHlsZWQtdmVyc2lvblwiXT1cIjUuMi4xXCIsdC5kYW5nZXJvdXNseVNldElubmVySFRNTD17X19odG1sOmUuaW5zdGFuY2UudG9TdHJpbmcoKX0sdCksbz1xKCk7cmV0dXJuIG8mJihuLm5vbmNlPW8pLFtyLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHYoe30sbix7a2V5Olwic2MtMC0wXCJ9KSldfSx0aGlzLnNlYWw9ZnVuY3Rpb24oKXtlLnNlYWxlZD0hMH0sdGhpcy5pbnN0YW5jZT1uZXcgWih7aXNTZXJ2ZXI6ITB9KSx0aGlzLnNlYWxlZD0hMX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jb2xsZWN0U3R5bGVzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNlYWxlZD9qKDIpOnIuY3JlYXRlRWxlbWVudCh5ZSx7c2hlZXQ6dGhpcy5pbnN0YW5jZX0sZSl9LHQuaW50ZXJsZWF2ZVdpdGhOb2RlU3RyZWFtPWZ1bmN0aW9uKGUpe3JldHVybiBqKDMpfSxlfSgpLEplPWZ1bmN0aW9uKGUpe3ZhciB0PXIuZm9yd2FyZFJlZigoZnVuY3Rpb24odCxuKXt2YXIgbz1zKHplKSxpPWUuZGVmYXVsdFByb3BzLGE9T2UodCxvLGkpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnZvaWQgMD09PWEmJmNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInK18oZSkrJ1wiJyksci5jcmVhdGVFbGVtZW50KGUsdih7fSx0LHt0aGVtZTphLHJlZjpufSkpfSkpO3JldHVybiB5KHQsZSksdC5kaXNwbGF5TmFtZT1cIldpdGhUaGVtZShcIitfKGUpK1wiKVwiLHR9LFhlPWZ1bmN0aW9uKCl7cmV0dXJuIHMoemUpfSxaZT17U3R5bGVTaGVldDpaLG1hc3RlclNoZWV0OmhlfTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB5b3UndmUgaW1wb3J0ZWQgJ3N0eWxlZC1jb21wb25lbnRzJyBvbiBSZWFjdCBOYXRpdmUuXFxuUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZVwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInRlc3RcIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYod2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl18fDAsMT09PXdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdJiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiAnc3R5bGVkLWNvbXBvbmVudHMnIGluaXRpYWxpemVkIGluIHRoaXMgYXBwbGljYXRpb24uIFRoaXMgbWF5IGNhdXNlIGR5bmFtaWMgc3R5bGVzIHRvIG5vdCByZW5kZXIgcHJvcGVybHksIGVycm9ycyBkdXJpbmcgdGhlIHJlaHlkcmF0aW9uIHByb2Nlc3MsIGEgbWlzc2luZyB0aGVtZSBwcm9wLCBhbmQgbWFrZXMgeW91ciBhcHBsaWNhdGlvbiBiaWdnZXIgd2l0aG91dCBnb29kIHJlYXNvbi5cXG5cXG5TZWUgaHR0cHM6Ly9zLWMuc2gvMkJBWHplZCBmb3IgbW9yZSBpbmZvLlwiKSx3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXSs9MSk7ZXhwb3J0IGRlZmF1bHQgcWU7ZXhwb3J0e1VlIGFzIFNlcnZlclN0eWxlU2hlZXQsbGUgYXMgU3R5bGVTaGVldENvbnN1bWVyLHVlIGFzIFN0eWxlU2hlZXRDb250ZXh0LHllIGFzIFN0eWxlU2hlZXRNYW5hZ2VyLExlIGFzIFRoZW1lQ29uc3VtZXIsemUgYXMgVGhlbWVDb250ZXh0LEdlIGFzIFRoZW1lUHJvdmlkZXIsWmUgYXMgX19QUklWQVRFX18sJGUgYXMgY3JlYXRlR2xvYmFsU3R5bGUsQWUgYXMgY3NzLE4gYXMgaXNTdHlsZWRDb21wb25lbnQsV2UgYXMga2V5ZnJhbWVzLFhlIGFzIHVzZVRoZW1lLEMgYXMgdmVyc2lvbixKZSBhcyB3aXRoVGhlbWV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMubWFwXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlcXVpcmVkQ2xhc3M6IFwiYmctYmx1ZS0xMDBcIixcbiAgcmVxdWlyZWRDb2xvcjogXCIjREJFQUZFXCIsXG59O1xuIiwiaW1wb3J0IHsgQ29ubmVjdGlvblByb3ZpZGVyVHlwZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3Rpb25Qcm92aWRlciB7XG4gIHByaXZhdGUgc3RhdGljIGhhbmRsZXI6IENvbm5lY3Rpb25Qcm92aWRlclR5cGU7XG5cbiAgcHVibGljIHN0YXRpYyBpbml0KGhhbmRsZXI6IENvbm5lY3Rpb25Qcm92aWRlclR5cGUpOiB2b2lkIHtcbiAgICBDb25uZWN0aW9uUHJvdmlkZXIuaGFuZGxlciA9IGhhbmRsZXI7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEhhbmRsZXIoKTogQ29ubmVjdGlvblByb3ZpZGVyVHlwZSB7XG4gICAgaWYgKCFDb25uZWN0aW9uUHJvdmlkZXIuaGFuZGxlcikge1xuICAgICAgdGhyb3cgJ011c3QgY2FsbCBpbml0KCkgZmlyc3Qgd2l0aCBhIHZhbGlkIENvbm5lY3Rpb25Qcm92aWRlciBpbnN0YW5jZSc7XG4gICAgfVxuICAgIHJldHVybiBDb25uZWN0aW9uUHJvdmlkZXIuaGFuZGxlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgRmllbGQgYXMgRmllbGRPb3VpLCBMYWJlbCBhcyBMYWJlbE9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCJAL3dpZGdldHMvYmFzZS9MYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWVsZCh7XG4gIG9vdWksXG4gIGNoaWxkcmVuLFxuICBsYXlvdXQgPSBcImhvcml6b250YWxcIixcbiAgdmFsdWVQcm9wTmFtZSxcbiAgc2hvd0xhYmVsID0gZmFsc2UsXG4gIGFsaWduTGFiZWwgPSBcImxlZnRcIixcbn06IHtcbiAgb291aTogRmllbGRPb3VpO1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbGF5b3V0PzogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG4gIHZhbHVlUHJvcE5hbWU/OiBzdHJpbmc7XG4gIHNob3dMYWJlbD86IGJvb2xlYW47XG4gIGFsaWduTGFiZWw/OiBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XG59KSB7XG4gIGNvbnN0IHsgaWQsIGxhYmVsLCB0b29sdGlwIH0gPSBvb3VpO1xuXG4gIGNvbnN0IGZvcm1JdGVtID0gKCkgPT4gKFxuICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwibWItMFwiIG5hbWU9e2lkfSB2YWx1ZVByb3BOYW1lPXt2YWx1ZVByb3BOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Zvcm0uSXRlbT5cbiAgKTtcblxuICBpZiAoIXNob3dMYWJlbCkge1xuICAgIHJldHVybiBmb3JtSXRlbSgpO1xuICB9XG5cbiAgY29uc3QgbGFiZWxXaWRnZXQgPSAoXG4gICAgPExhYmVsXG4gICAgICBvb3VpPXtcbiAgICAgICAgbmV3IExhYmVsT291aSh7XG4gICAgICAgICAgbmFtZTogaWQgKyBcIl9sYWJlbFwiLFxuICAgICAgICAgIHN0cmluZzogbGFiZWwsXG4gICAgICAgICAgaGVscDogdG9vbHRpcCxcbiAgICAgICAgICBmaWVsZEZvckxhYmVsOiBpZCxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGFsaWduPXthbGlnbkxhYmVsfVxuICAgIC8+XG4gICk7XG5cbiAgY29uc3QgaG9yaXpvbnRhbE1vZGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3cgYWxpZ249XCJtaWRkbGVcIiBjbGFzc05hbWU9XCJwYi0xIHB0LTFcIj5cbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC0yXCIgZmxleD1cIjdyZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtZW5kXCI+e2xhYmVsV2lkZ2V0fTwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBmbGV4PVwiYXV0b1wiPntmb3JtSXRlbSgpfTwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCB2ZXJ0aWNhbE1vZGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtsYWJlbFdpZGdldH1cbiAgICAgICAge2Zvcm1JdGVtKCl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiID8gaG9yaXpvbnRhbE1vZGUoKSA6IHZlcnRpY2FsTW9kZSgpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU3RyaW5ncyB9IGZyb20gXCJAL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIExvY2FsZXNDb250ZXh0VHlwZSA9IHtcbiAgZ2V0U3RyaW5nOiAoa2V5OiBzdHJpbmcpID0+IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBMb2NhbGVzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8TG9jYWxlc0NvbnRleHRUeXBlIHwgbnVsbD4oXG4gIG51bGxcbik7XG5cbmNvbnN0IExvY2FsZXNQcm92aWRlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBzdHJpbmdzOiBzdHJpbmdzUHJvcCxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgc3RyaW5nczogU3RyaW5ncztcbn0pOiBhbnkgPT4ge1xuICBjb25zdCBbc3RyaW5ncywgc2V0U3RyaW5nc10gPSB1c2VTdGF0ZTxTdHJpbmdzPih7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdHJpbmdzKHN0cmluZ3NQcm9wKTtcbiAgfSwgW3N0cmluZ3NQcm9wXSk7XG5cbiAgY29uc3QgZ2V0U3RyaW5nID0gKGtleTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGdldExvY2FsaXplZFN0cmluZyhrZXksIHN0cmluZ3MpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExvY2FsZXNDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBnZXRTdHJpbmcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xvY2FsZXNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxlc1Byb3ZpZGVyO1xuXG5leHBvcnQgY29uc3QgZ2V0TG9jYWxpemVkU3RyaW5nID0gKGtleTogc3RyaW5nLCBzdHJpbmdzOiBTdHJpbmdzKSA9PiB7XG4gIGNvbnN0IGxvY2FsaXplZCA9IHN0cmluZ3Nba2V5XTtcbiAgaWYgKGxvY2FsaXplZCkgcmV0dXJuIGxvY2FsaXplZDtcbiAgZWxzZSByZXR1cm4ga2V5O1xufTtcbiIsImltcG9ydCB7IFdpZGdldCwgTGFiZWwsIE9uZTJtYW55LCBNYW55Mm1hbnkgfSBmcm9tIFwib291aVwiO1xuXG5jb25zdCBjbG9uZSA9IGZ1bmN0aW9uIGNsb25lPFQ+KGluc3RhbmNlOiBUKTogVCB7XG4gIGNvbnN0IGNvcHkgPSBuZXcgKChpbnN0YW5jZSBhcyBhbnkpLmNvbnN0cnVjdG9yIGFzIHsgbmV3ICgpOiBUIH0pKCk7XG4gIE9iamVjdC5hc3NpZ24oY29weSwgaW5zdGFuY2UpO1xuICByZXR1cm4gY29weTtcbn07XG5cbmNvbnN0IGdldFNwYW5TdHlsZUZvckl0ZW0gPSAoe1xuICBpdGVtLFxuICByZXNwb25zaXZlQmVoYXZpb3VyLFxufToge1xuICBpdGVtOiBXaWRnZXQ7XG4gIHJlc3BvbnNpdmVCZWhhdmlvdXI6IGJvb2xlYW47XG59KSA9PiB7XG4gIHJldHVybiB7XG4gICAgZ3JpZENvbHVtblN0YXJ0OiBcInNwYW4gXCIgKyAocmVzcG9uc2l2ZUJlaGF2aW91ciA/IDEgOiBpdGVtLmNvbHNwYW4pLFxuICB9O1xufTtcblxuY29uc3QgZmlsbFJvd1dpdGhFbXB0aWVzVG9GaXQgPSAoe1xuICByb3csXG4gIG11c3RGaWxsV2l0aEVtcHRpZXMsXG4gIG51bWJlck9mQ29sdW1ucyxcbn06IHtcbiAgcm93OiBhbnk7XG4gIG11c3RGaWxsV2l0aEVtcHRpZXM6IGJvb2xlYW47XG4gIG51bWJlck9mQ29sdW1uczogbnVtYmVyO1xufSkgPT4ge1xuICBjb25zdCByb3dXaXRoRW1wdGllc1RvRml0OiBhbnkgPSBbXTtcbiAgbGV0IHRvdGFsQ29sU3BhbiA9IDA7XG5cbiAgcm93Lm1hcCgoaXRlbTogV2lkZ2V0LCBjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgdG90YWxDb2xTcGFuICs9IGl0ZW0uY29sc3BhbjtcbiAgICByb3dXaXRoRW1wdGllc1RvRml0LnB1c2goaXRlbSk7XG5cbiAgICBpZiAoXG4gICAgICBjb2x1bW5JbmRleCArIDEgPT09IHJvdy5sZW5ndGggJiZcbiAgICAgIHRvdGFsQ29sU3BhbiA8IG51bWJlck9mQ29sdW1ucyAmJlxuICAgICAgIW11c3RGaWxsV2l0aEVtcHRpZXNcbiAgICApIHtcbiAgICAgIGNvbnN0IGdhcHNUb0ZpbGwgPSBudW1iZXJPZkNvbHVtbnMgLSB0b3RhbENvbFNwYW47XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhcHNUb0ZpbGw7IGkgKz0gMSkge1xuICAgICAgICByb3dXaXRoRW1wdGllc1RvRml0LnB1c2gobmV3IExhYmVsKHsgc3RyaW5nOiBcIlwiIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByb3dXaXRoRW1wdGllc1RvRml0O1xufTtcblxuY29uc3QgZXhwYW5kV2lkZ2V0c0lmTmVlZGVkID0gKHtcbiAgcm93LFxuICBudW1iZXJPZkNvbHVtbnMsXG59OiB7XG4gIHJvdzogYW55O1xuICBudW1iZXJPZkNvbHVtbnM6IG51bWJlcjtcbn0pID0+IHtcbiAgcmV0dXJuIHJvdy5tYXAoKGl0ZW06IFdpZGdldCkgPT4ge1xuICAgIGlmICgoaXRlbSBhcyBhbnkpLl9tdXN0RXhwYW5kKSB7XG4gICAgICAoaXRlbSBhcyBhbnkpLmNvbHNwYW4gPSBudW1iZXJPZkNvbHVtbnM7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0VGVtcGxhdGVDb2x1bW5zID0gKGNvbHVtbnM6IG51bWJlcikgPT4ge1xuICBjb25zdCBvZGQgPSBcIjFmclwiO1xuICBjb25zdCBldmVuID0gXCJhdXRvXCI7XG4gIGxldCB0ZW1wbGF0ZUNvbHVtbnMgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgIHRlbXBsYXRlQ29sdW1ucyArPSBpICUgMiA/IG9kZCA6IGV2ZW47XG4gICAgaWYgKGkgPCBjb2x1bW5zKSB7XG4gICAgICB0ZW1wbGF0ZUNvbHVtbnMgKz0gXCIgXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiB0ZW1wbGF0ZUNvbHVtbnM7XG59O1xuXG5leHBvcnQgeyBnZXRUZW1wbGF0ZUNvbHVtbnMsIGZpbGxSb3dXaXRoRW1wdGllc1RvRml0LCBnZXRTcGFuU3R5bGVGb3JJdGVtLCBleHBhbmRXaWRnZXRzSWZOZWVkZWR9O1xuIiwiaW1wb3J0IHsgRm9ybUluc3RhbmNlIH0gZnJvbSBcImFudGRcIjtcblxuY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSAodmFsdWVzOiBhbnksIGZpZWxkczogYW55KSA9PiB7XG4gIGlmICghZmllbGRzKSB7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuICBjb25zdCBmaWx0ZXJlZFZhbHVlczogYW55ID0ge307XG4gIE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKFxuICAgICAgdmFsdWVzW2tleV0gIT09IGZhbHNlIHx8XG4gICAgICAoZmllbGRzW2tleV0gJiYgZmllbGRzW2tleV0udHlwZSA9PT0gXCJib29sZWFuXCIpXG4gICAgKSB7XG4gICAgICBmaWx0ZXJlZFZhbHVlc1trZXldID0gdmFsdWVzW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZpbHRlcmVkVmFsdWVzO1xufTtcblxuZXhwb3J0IGNvbnN0IHByb2Nlc3NWYWx1ZXMgPSAodmFsdWVzOiBhbnksIGZpZWxkczogYW55KSA9PiB7XG4gIGNvbnN0IGZpbHRlckJvb2xlYW5zID0gZmlsdGVyZWRWYWx1ZXModmFsdWVzLCBmaWVsZHMpO1xuICByZXR1cm4gZmlsdGVyQm9vbGVhbnM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VG91Y2hlZFZhbHVlcyA9IChhbnRGb3JtOiBGb3JtSW5zdGFuY2UpID0+IHtcbiAgY29uc3QgdmFsdWVzID0gYW50Rm9ybS5nZXRGaWVsZHNWYWx1ZSh0cnVlKTtcbiAgY29uc3QgdG91Y2hlZFZhbHVlczogYW55ID0ge307XG4gIE9iamVjdC5rZXlzKHZhbHVlcykubWFwKChrZXkpID0+IHtcbiAgICBpZiAoYW50Rm9ybS5pc0ZpZWxkVG91Y2hlZChrZXkpKSB7XG4gICAgICB0b3VjaGVkVmFsdWVzW2tleV0gPSB2YWx1ZXNba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdG91Y2hlZFZhbHVlcztcbn07XG4iLCJjb25zdCBjb252ZXJ0Qm9vbGVhblBhcmFtSWZOZWVkZWQgPSAodmFsdWU6IGFueSkgPT4ge1xuICBpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSA9PT0gXCJ0cnVlXCIpIHx8IHZhbHVlID09PSBcImZhbHNlXCIpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IFwidHJ1ZVwiO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmNvbnN0IGdldFBhcmFtc0ZvckZpZWxkcyA9ICh2YWx1ZXM6IGFueSwgZmllbGRzOiBhbnkpID0+IHtcbiAgY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSByZW1vdmVVbmRlZmluZWRGaWVsZHModmFsdWVzKTtcbiAgY29uc3QgZ3JvdXBlZERhdGVUaW1lID0gZ3JvdXBEYXRlVGltZVZhbHVlc0lmTmVlZGVkKGZpbHRlcmVkVmFsdWVzKTtcbiAgY29uc3QgZ3JvdXBlZFZhbHVlcyA9IHVuZ3JvdXBEYXRlVmFsdWVzSWZOZWVkZWQoZ3JvdXBlZERhdGVUaW1lLCBmaWVsZHMpO1xuXG4gIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAuLi5PYmplY3Qua2V5cyhncm91cGVkVmFsdWVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIGdldFBhcmFtRm9yRmllbGQoa2V5LCBncm91cGVkVmFsdWVzW2tleV0sIGZpZWxkcyk7XG4gICAgfSksXG4gIF07XG5cbiAgLy8gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBpbiBjYXNlIG9mIGRhdGV0aW1lIHdlIHJlY2VpdmUgYW4gYXJyYXkgb2YgYXJyYXlzXG4gIHJldHVybiBwYXJhbXMucmVkdWNlKChhY2MsIGN1clZhbCkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGN1clZhbFswXSkpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KGN1clZhbCk7XG4gICAgfVxuICAgIHJldHVybiBbLi4uYWNjLCBjdXJWYWxdO1xuICB9LCBbXSk7XG59O1xuXG5jb25zdCBnZXRQYXJhbUZvckZpZWxkID0gKGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBmaWVsZHM6IGFueSkgPT4ge1xuICBjb25zdCBmaWx0ZXJlZEtleSA9IGtleS5zcGxpdChcIiNcIilbMF07XG4gIGNvbnN0IHR5cGUgPSBmaWVsZHNbZmlsdGVyZWRLZXldLnR5cGU7XG5cbiAgaWYgKFxuICAgIHR5cGUgPT09IFwiY2hhclwiIHx8XG4gICAgdHlwZSA9PT0gXCJ0ZXh0XCIgfHxcbiAgICB0eXBlID09PSBcIm1hbnkyb25lXCIgfHxcbiAgICB0eXBlID09PSBcIm1hbnkybWFueVwiIHx8XG4gICAgdHlwZSA9PT0gXCJvbmUybWFueVwiXG4gICkge1xuICAgIHJldHVybiBba2V5LCBcImlsaWtlXCIsIHZhbHVlXTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlID09PSBcImZsb2F0XCIgfHxcbiAgICB0eXBlID09PSBcImludGVnZXJcIiB8fFxuICAgIHR5cGUgPT09IFwiZmxvYXRfdGltZVwiIHx8XG4gICAgdHlwZSA9PT0gXCJwcm9ncmVzc2JhclwiXG4gICkge1xuICAgIGNvbnN0IG9wZXJhdG9yID0ga2V5LmluZGV4T2YoXCIjZnJvbVwiKSAhPT0gLTEgPyBcIj49XCIgOiBcIjw9XCI7XG4gICAgcmV0dXJuIFtmaWx0ZXJlZEtleSwgb3BlcmF0b3IsIHZhbHVlXTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImRhdGVcIikge1xuICAgIGNvbnN0IG9wZXJhdG9yID0ga2V5LmluZGV4T2YoXCIjZnJvbVwiKSAhPT0gLTEgPyBcIj49XCIgOiBcIjw9XCI7XG4gICAgcmV0dXJuIFtmaWx0ZXJlZEtleSwgb3BlcmF0b3IsIHZhbHVlLmZvcm1hdChcIllZWVktTU0tRERcIildO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZGF0ZXRpbWVcIikge1xuICAgIGNvbnN0IGZyb20gPSB2YWx1ZVswXTtcbiAgICBjb25zdCB0byA9IHZhbHVlWzFdO1xuICAgIHJldHVybiBbXG4gICAgICBbZmlsdGVyZWRLZXksIFwiPj1cIiwgZnJvbV0sXG4gICAgICBbZmlsdGVyZWRLZXksIFwiPD1cIiwgdG9dLFxuICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtrZXksIFwiPVwiLCBjb252ZXJ0Qm9vbGVhblBhcmFtSWZOZWVkZWQodmFsdWUpXTtcbiAgfVxufTtcblxuY29uc3QgZ2V0RGF0ZXRpbWVEYXRlRmllbGRzID0gKHZhbHVlczogYW55KSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZXMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgcmV0dXJuIGtleS5pbmRleE9mKFwiI2RhdGVcIikgIT09IC0xO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZURhdGVUaW1lU2luZ2xlRmllbGRzID0gKHZhbHVlczogYW55KSA9PiB7XG4gIGNvbnN0IG5ld1ZhbHVlcyA9IHsgLi4udmFsdWVzIH07XG4gIE9iamVjdC5rZXlzKG5ld1ZhbHVlcykuZm9yRWFjaChcbiAgICAoa2V5KSA9PlxuICAgICAgKGtleS5pbmRleE9mKFwiI3RpbWVcIikgIT09IC0xIHx8IGtleS5pbmRleE9mKFwiI2RhdGVcIikgIT09IC0xKSAmJlxuICAgICAgZGVsZXRlIG5ld1ZhbHVlc1trZXldXG4gICk7XG4gIHJldHVybiBuZXdWYWx1ZXM7XG59O1xuXG5jb25zdCBncm91cERhdGVUaW1lVmFsdWVzSWZOZWVkZWQgPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgY29uc3QgbmV3VmFsdWVzOiBhbnkgPSB7IC4uLnJlbW92ZURhdGVUaW1lU2luZ2xlRmllbGRzKHZhbHVlcykgfTtcblxuICBjb25zdCBkYXRldGltZURhdGVGaWVsZHMgPSBnZXREYXRldGltZURhdGVGaWVsZHModmFsdWVzKTtcblxuICBkYXRldGltZURhdGVGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBjb25zdCBkYXRlUGFpciA9IHZhbHVlc1tmaWVsZF07XG4gICAgY29uc3QgYmFzZUtleSA9IGZpZWxkLnNwbGl0KFwiI1wiKVswXTtcbiAgICBjb25zdCB0aW1lS2V5ID0gYmFzZUtleSArIFwiI3RpbWVcIjtcbiAgICBjb25zdCB0aW1lUGFpciA9IHZhbHVlc1t0aW1lS2V5XTtcbiAgICBjb25zdCBkYXRlVmFsdWVGcm9tID0gZGF0ZVBhaXJbMF0uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICBjb25zdCBkYXRlVmFsdWVUbyA9IGRhdGVQYWlyWzFdLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgY29uc3QgdGltZVZhbHVlRnJvbSA9IHRpbWVQYWlyWzBdLmZvcm1hdChcIkhIOm1tXCIpO1xuICAgIGNvbnN0IHRpbWVWYWx1ZVRvID0gdGltZVBhaXJbMV0uZm9ybWF0KFwiSEg6bW1cIik7XG4gICAgY29uc3QgZnJvbSA9IGRhdGVWYWx1ZUZyb20gKyBcIiBcIiArIHRpbWVWYWx1ZUZyb207XG4gICAgY29uc3QgdG8gPSBkYXRlVmFsdWVUbyArIFwiIFwiICsgdGltZVZhbHVlVG87XG4gICAgbmV3VmFsdWVzW2Jhc2VLZXkgKyBcIiNkYXRldGltZVwiXSA9IFtmcm9tLCB0b107XG4gIH0pO1xuXG4gIHJldHVybiBuZXdWYWx1ZXM7XG59O1xuXG5jb25zdCB1bmdyb3VwRGF0ZVZhbHVlc0lmTmVlZGVkID0gKHZhbHVlczogYW55LCBmaWVsZHM6IGFueSkgPT4ge1xuICBjb25zdCBkYXRlRmllbGRzID0gT2JqZWN0LmtleXModmFsdWVzKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgIHJldHVybiBmaWVsZHNba2V5XSAmJiBmaWVsZHNba2V5XS50eXBlID09PSBcImRhdGVcIjtcbiAgfSk7XG5cbiAgbGV0IG5ld1ZhbHVlczogYW55ID0geyAuLi52YWx1ZXMgfTtcblxuICBkYXRlRmllbGRzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGRlbGV0ZSBuZXdWYWx1ZXNba2V5XTtcbiAgICBuZXdWYWx1ZXNba2V5ICsgXCIjZnJvbVwiXSA9IHZhbHVlc1trZXldWzBdO1xuICAgIG5ld1ZhbHVlc1trZXkgKyBcIiN0b1wiXSA9IHZhbHVlc1trZXldWzFdO1xuICB9KTtcblxuICByZXR1cm4gbmV3VmFsdWVzO1xufTtcblxuY29uc3QgcmVtb3ZlVW5kZWZpbmVkRmllbGRzID0gKHZhbHVlczogYW55KSA9PiB7XG4gIGNvbnN0IG5ld1ZhbHVlcyA9IHsgLi4udmFsdWVzIH07XG4gIE9iamVjdC5rZXlzKG5ld1ZhbHVlcykuZm9yRWFjaChcbiAgICAoa2V5KSA9PlxuICAgICAgKG5ld1ZhbHVlc1trZXldID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgbmV3VmFsdWVzW2tleV0gPT09IG51bGwgfHxcbiAgICAgICAgbmV3VmFsdWVzW2tleV0gPT09IFwiXCIpICYmXG4gICAgICBkZWxldGUgbmV3VmFsdWVzW2tleV1cbiAgKTtcbiAgcmV0dXJuIG5ld1ZhbHVlcztcbn07XG5cbmV4cG9ydCB7XG4gIHJlbW92ZVVuZGVmaW5lZEZpZWxkcyxcbiAgZ3JvdXBEYXRlVGltZVZhbHVlc0lmTmVlZGVkLFxuICBnZXRQYXJhbXNGb3JGaWVsZHMsXG59O1xuIiwiaW1wb3J0IHsgVHJlZSBhcyBUcmVlT291aSwgU2VsZWN0aW9uLCBNYW55Mm9uZSwgQm9vbGVhbiB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBUcmVlVmlldywgQ29sdW1uIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuY29uc3QgZ2V0VHJlZSA9ICh0cmVlVmlldzogVHJlZVZpZXcpOiBUcmVlT291aSA9PiB7XG4gIGNvbnN0IHhtbCA9IHRyZWVWaWV3LmFyY2g7XG4gIGNvbnN0IGZpZWxkcyA9IHRyZWVWaWV3LmZpZWxkcztcbiAgY29uc3QgdHJlZSA9IG5ldyBUcmVlT291aShmaWVsZHMpO1xuICB0cmVlLnBhcnNlKHhtbCk7XG4gIHJldHVybiB0cmVlO1xufTtcblxuY29uc3QgZ2V0VGFibGVDb2x1bW5zID0gKFxuICB0cmVlOiBUcmVlT291aSxcbiAgYm9vbGVhbkNvbXBvbmVudDogYW55XG4pOiBBcnJheTxDb2x1bW4+ID0+IHtcbiAgY29uc3QgdGFibGVDb2x1bW5zID0gdHJlZS5jb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGNvbHVtbi5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGNvbnN0IGtleSA9IGNvbHVtbi5pZDtcbiAgICBjb25zdCByZW5kZXIgPVxuICAgICAgdHlwZSA9PT0gXCJCb29sZWFuXCJcbiAgICAgICAgPyAoYm9vbGVhbkZpZWxkOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYm9vbGVhbkNvbXBvbmVudChib29sZWFuRmllbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAga2V5LFxuICAgICAgZGF0YUluZGV4OiBrZXksXG4gICAgICB0aXRsZTogY29sdW1uLmxhYmVsLFxuICAgICAgdHlwZSxcbiAgICAgIHJlbmRlcixcbiAgICAgIHNvcnRlcjogKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIGlmIChhW2tleV0gPCBiW2tleV0pIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGFba2V5XSA+IGJba2V5XSkgcmV0dXJuIDE7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHRhYmxlQ29sdW1ucztcbn07XG5cbmNvbnN0IGdldFRhYmxlSXRlbXMgPSAodHJlZU9vdWk6IFRyZWVPb3VpLCByZXN1bHRzOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiA9PiB7XG4gIGNvbnN0IHRhYmxlSXRlbXMgPSByZXN1bHRzLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgY29uc3QgcGFyc2VkSXRlbTogYW55ID0ge307XG4gICAgT2JqZWN0LmtleXMoaXRlbSkubWFwKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgPT09IFwiaWRcIikge1xuICAgICAgICBwYXJzZWRJdGVtW2tleV0gPSBpdGVtW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB3aWRnZXQgPSB0cmVlT291aS5maW5kQnlJZChrZXkpO1xuXG4gICAgICAgIGlmICh3aWRnZXQgaW5zdGFuY2VvZiBTZWxlY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aWRnZXQ7XG4gICAgICAgICAgcGFyc2VkSXRlbVtrZXldID0gc2VsZWN0aW9uLnNlbGVjdGlvblZhbHVlcy5nZXQoaXRlbVtrZXldKTtcbiAgICAgICAgfSBlbHNlIGlmICh3aWRnZXQgaW5zdGFuY2VvZiBNYW55Mm9uZSkge1xuICAgICAgICAgIHBhcnNlZEl0ZW1ba2V5XSA9IGl0ZW1ba2V5XVsxXTtcbiAgICAgICAgfSBlbHNlIGlmICh3aWRnZXQgaW5zdGFuY2VvZiBCb29sZWFuKSB7XG4gICAgICAgICAgcGFyc2VkSXRlbVtrZXldID0gaXRlbVtrZXldO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZGdldCkge1xuICAgICAgICAgIHBhcnNlZEl0ZW1ba2V5XSA9IGl0ZW1ba2V5XSA9PT0gZmFsc2UgPyBcIlwiIDogaXRlbVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnNlZEl0ZW07XG4gIH0pO1xuXG4gIHJldHVybiB0YWJsZUl0ZW1zO1xufTtcblxuZXhwb3J0IHsgZ2V0VGFibGVDb2x1bW5zLCBnZXRUYWJsZUl0ZW1zLCBnZXRUcmVlIH07XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvQnV0dG9uXCI7XG5pbXBvcnQgeyBDaGFyIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0NoYXJcIjtcbmltcG9ydCB7IFNlbGVjdGlvbiB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9TZWxlY3Rpb25cIjtcbmltcG9ydCB7IEJvb2xlYW4gfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvQm9vbGVhblwiO1xuaW1wb3J0IHsgTWFueTJvbmUgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvTWFueTJvbmVcIjtcbmltcG9ydCB7IE9uZTJtYW55IH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL09uZTJtYW55XCI7XG5pbXBvcnQgVHJlZSBmcm9tIFwiQC93aWRnZXRzL3ZpZXdzL1RyZWVcIjtcbmltcG9ydCB7IEZsb2F0IH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0Zsb2F0XCI7XG5pbXBvcnQgeyBJbnRlZ2VyIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0ludGVnZXJcIjtcbmltcG9ydCBHcm91cCBmcm9tIFwiQC93aWRnZXRzL2NvbnRhaW5lcnMvR3JvdXBcIjtcbmltcG9ydCBOb3RlYm9vayBmcm9tIFwiQC93aWRnZXRzL2NvbnRhaW5lcnMvTm90ZWJvb2tcIjtcbmltcG9ydCBGb3JtIGZyb20gXCJAL3dpZGdldHMvdmlld3MvRm9ybVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCJAL3dpZGdldHMvYmFzZS9MYWJlbFwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL1RleHRcIjtcbmltcG9ydCB7IFNlcGFyYXRvciB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9TZXBhcmF0b3JcIjtcbmltcG9ydCBTZWFyY2hGaWx0ZXIgZnJvbSBcIkAvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvU2VhcmNoRmlsdGVyXCI7XG5pbXBvcnQgU2VhcmNoVHJlZSBmcm9tIFwiQC93aWRnZXRzL3ZpZXdzL1NlYXJjaFRyZWVcIjtcbmltcG9ydCB7IEZvcm1Nb2RhbCB9IGZyb20gXCJAL3dpZGdldHMvbW9kYWxzL0Zvcm1Nb2RhbFwiO1xuaW1wb3J0IHsgU2VhcmNoTW9kYWwgfSBmcm9tIFwiQC93aWRnZXRzL21vZGFscy9TZWFyY2hNb2RhbFwiO1xuaW1wb3J0IFNpbXBsZVRyZWUgZnJvbSBcIkAvd2lkZ2V0cy92aWV3cy9TaW1wbGVUcmVlXCI7XG5cbmltcG9ydCB7XG4gIFRyZWVWaWV3LFxuICBTZWFyY2hGaWVsZHMsXG4gIEZvcm1WaWV3LFxuICBDb25uZWN0aW9uUHJvdmlkZXJUeXBlLFxuICBTZWFyY2hSZXF1ZXN0LFxuICBTZWFyY2hSZXNwb25zZSxcbiAgQ3JlYXRlT2JqZWN0UmVxdWVzdCxcbiAgVXBkYXRlT2JqZWN0UmVxdWVzdCxcbiAgVmlld0RhdGEsXG4gIFZpZXdzLFxuICBFeGVjdXRlUmVxdWVzdCxcbiAgUmVhZE9iamVjdHNSZXF1ZXN0LFxuICBEZWxldGVPYmplY3RzUmVxdWVzdCxcbn0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBDb25uZWN0aW9uUHJvdmlkZXIgZnJvbSBcIkAvQ29ubmVjdGlvblByb3ZpZGVyXCI7XG5cbmV4cG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2hhcixcbiAgU2VsZWN0aW9uLFxuICBCb29sZWFuLFxuICBNYW55Mm9uZSxcbiAgVHJlZSxcbiAgR3JvdXAsXG4gIFNlYXJjaEZpbHRlcixcbiAgRm9ybSxcbiAgTm90ZWJvb2ssXG4gIEZsb2F0LFxuICBJbnRlZ2VyLFxuICBMYWJlbCxcbiAgVGV4dCxcbiAgVHJlZVZpZXcsXG4gIEZvcm1WaWV3LFxuICBTZWFyY2hGaWVsZHMsXG4gIFNlcGFyYXRvcixcbiAgU2VhcmNoVHJlZSxcbiAgU2VhcmNoUmVxdWVzdCxcbiAgU2VhcmNoUmVzcG9uc2UsXG4gIENyZWF0ZU9iamVjdFJlcXVlc3QsXG4gIFVwZGF0ZU9iamVjdFJlcXVlc3QsXG4gIENvbm5lY3Rpb25Qcm92aWRlcixcbiAgQ29ubmVjdGlvblByb3ZpZGVyVHlwZSxcbiAgVmlld0RhdGEsXG4gIFZpZXdzLFxuICBFeGVjdXRlUmVxdWVzdCxcbiAgUmVhZE9iamVjdHNSZXF1ZXN0LFxuICBEZWxldGVPYmplY3RzUmVxdWVzdCxcbiAgRm9ybU1vZGFsLFxuICBTZWFyY2hNb2RhbCxcbiAgT25lMm1hbnksXG4gIFNpbXBsZVRyZWUsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBjaGlsZHJlbjogYW55O1xufTtcblxuY29uc3QgRmllbGRzZXQgPSAocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgY29uc3QgeyBsYWJlbCwgY2hpbGRyZW4gfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgLy8gVE9ETzogY2hhbmdlIGluLWxpbmUgc3R5bGVzIHRvIFRhaWxXaW5kIGNsYXNzZXNcbiAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwicGwtMiBwci0yIGJvcmRlci1ncmF5LTQwMCBib3JkZXIgYm9yZGVyLXNvbGlkICBmb250LXNhbnNcIj5cbiAgICAgIDxsZWdlbmRcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBhbGw6IFwiaW5pdGlhbFwiLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMWVtXCIsXG4gICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMC41ZW1cIixcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMC41ZW1cIixcbiAgICAgICAgICBmb250RmFtaWx5OlxuICAgICAgICAgICAgXCJzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sICdTZWdvZSBVSScsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJ1wiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xlZ2VuZD5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2ZpZWxkc2V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmllbGRzZXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBXaWRnZXRzIGZyb20gXCJAL2luZGV4XCI7XG5cbnR5cGUgd2lkZ2V0cyA9IHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufTtcblxuY29uc3Qgd2lkZ2V0VHlwZXMgPSBXaWRnZXRzIGFzIHdpZGdldHM7XG5cbmNvbnN0IGNyZWF0ZVJlYWN0V2lkZ2V0ID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgdHlwZSA9IG9vdWkuY29uc3RydWN0b3IubmFtZTtcbiAgY29uc3Qgd2lkZ2V0Q2xhc3MgPSB3aWRnZXRUeXBlc1t0eXBlXTtcbiAgaWYgKCF3aWRnZXRDbGFzcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHdpZGdldENsYXNzLCBwcm9wcyk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVSZWFjdFdpZGdldCB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hlY2tib3ggYXMgQW50Q2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiQC9Db25maWdcIjtcblxuZXhwb3J0IGNvbnN0IEJvb2xlYW4gPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIHJlYWRPbmx5LCByZXF1aXJlZCB9ID0gb291aTtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9IHZhbHVlUHJvcE5hbWU9XCJjaGVja2VkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgPFJlcXVpcmVkQ2hlY2tib3ggZGlzYWJsZWQ9e3JlYWRPbmx5fSBpZD17aWR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcblxuY29uc3QgUmVxdWlyZWRDaGVja2JveCA9IHN0eWxlZChBbnRDaGVja2JveClgXG4gIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29uZmlnLnJlcXVpcmVkQ29sb3J9O1xuICB9XG5cbiAgLmFudC1jaGVja2JveC1jaGVja2VkIC5hbnQtY2hlY2tib3gtaW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODlDRkY7XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBCdXR0b24gYXMgQW50QnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgeyBsYWJlbCwgYWN0aXZhdGVkIH0gPSBvb3VpO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIG9vdWk9e29vdWl9PlxuICAgICAgPEFudEJ1dHRvbiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBkaXNhYmxlZD17IWFjdGl2YXRlZH0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvQW50QnV0dG9uPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgQ2hhciBhcyBDaGFyT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCJAL0NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgQ2hhciA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgeyBpZCwgcmVhZE9ubHksIGlzUGFzc3dvcmQsIHJlcXVpcmVkIH0gPSBvb3VpIGFzIENoYXJPb3VpO1xuICBjb25zdCByZXF1aXJlZENsYXNzID0gcmVxdWlyZWQgPyBDb25maWcucmVxdWlyZWRDbGFzcyA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9PlxuICAgICAge2lzUGFzc3dvcmQgPyAoXG4gICAgICAgIDxJbnB1dC5QYXNzd29yZCBkaXNhYmxlZD17cmVhZE9ubHl9IGlkPXtpZH0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxJbnB1dCBkaXNhYmxlZD17cmVhZE9ubHl9IGlkPXtpZH0gY2xhc3NOYW1lPXtyZXF1aXJlZENsYXNzfSAvPlxuICAgICAgKX1cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IEZsb2F0IGFzIEZsb2F0T291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCJAL0NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgRmxvYXQgPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIGRlY2ltYWxEaWdpdHMsIHJlYWRPbmx5LCByZXF1aXJlZH0gPSBvb3VpIGFzIEZsb2F0T291aTtcbiAgY29uc3QgcmVxdWlyZWRDbGFzcyA9IHJlcXVpcmVkID8gQ29uZmlnLnJlcXVpcmVkQ2xhc3MgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgey4uLnByb3BzfT5cbiAgICAgIDxJbnB1dE51bWJlclxuICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgIGNsYXNzTmFtZT17XCJ3LWZ1bGwgXCIgKyByZXF1aXJlZENsYXNzfVxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHByZWNpc2lvbj17ZGVjaW1hbERpZ2l0c31cbiAgICAgICAgZm9ybWF0dGVyPXsodmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gYCR7dmFsdWV9YC5yZXBsYWNlKC9bXjAtOVxcLlxcLV0rL2csIFwiXCIpO1xuICAgICAgICB9fVxuICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XG4gICAgICAgIGRlY2ltYWxTZXBhcmF0b3I9e1wiLlwifVxuICAgICAgLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIkAvQ29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBJbnRlZ2VyID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IGlkLCByZWFkT25seSwgcmVxdWlyZWQgfSA9IG9vdWk7XG4gIGNvbnN0IHJlcXVpcmVkQ2xhc3MgPSByZXF1aXJlZCA/IENvbmZpZy5yZXF1aXJlZENsYXNzIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIHsuLi5wcm9wc30+XG4gICAgICA8SW5wdXROdW1iZXJcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICBjbGFzc05hbWU9e1widy1mdWxsIFwiICsgcmVxdWlyZWRDbGFzc31cbiAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICBmb3JtYXR0ZXI9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHt2YWx1ZX1gLnJlcGxhY2UoL1teMC05XSsvZywgXCJcIik7XG4gICAgICAgIH19XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cbiAgICAgIC8+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IFF1ZXN0aW9uQ2lyY2xlT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IExhYmVsIGFzIExhYmVsT291aSB9IGZyb20gXCJvb3VpXCI7XG5cbnR5cGUgUHJvcHMgPSBXaWRnZXRQcm9wcyAmIHtcbiAgYWxpZ24/OiBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XG4gIHJlc3BvbnNpdmVCZWhhdmlvdXI/OiBib29sZWFuO1xufTtcblxuY29uc3QgYWxpZ25DbGFzcyA9IHtcbiAgbGVmdDogXCJqdXN0aWZ5LXN0YXJ0XCIsXG4gIGNlbnRlcjogXCJqdXN0aWZ5LWNlbnRlclwiLFxuICByaWdodDogXCJqdXN0aWZ5LWVuZFwiLFxufTtcblxuY29uc3QgTGFiZWwgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSwgYWxpZ24sIHJlc3BvbnNpdmVCZWhhdmlvdXIgfSA9IHByb3BzO1xuICBjb25zdCB7IGxhYmVsLCB0b29sdGlwLCBmaWVsZEZvckxhYmVsIH0gPSBvb3VpIGFzIExhYmVsT291aTtcbiAgY29uc3QgYWRkQ29sb24gPSBmaWVsZEZvckxhYmVsICE9PSBudWxsID8gdHJ1ZSA6IGZhbHNlO1xuICBjb25zdCBsYWJlbFRleHQgPSBhZGRDb2xvbiAmJiBsYWJlbC5sZW5ndGggPiAxID8gbGFiZWwgKyBcIiA6XCIgOiBsYWJlbDtcbiAgY29uc3QgcmVzcG9uc2l2ZUFsaWduID0gcmVzcG9uc2l2ZUJlaGF2aW91ciA/IFwibGVmdFwiIDogXCJyaWdodFwiO1xuICBjb25zdCBsYWJlbEFsZ2luID0gYWxpZ24gPyBhbGlnbiA6IGZpZWxkRm9yTGFiZWwgPyByZXNwb25zaXZlQWxpZ24gOiBcImxlZnRcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcGItMSAke2FsaWduQ2xhc3NbbGFiZWxBbGdpbl19YH0+XG4gICAgICB7dG9vbHRpcCAmJiAoXG4gICAgICAgIDxUb29sdGlwIHRpdGxlPXt0b29sdGlwfT5cbiAgICAgICAgICA8UXVlc3Rpb25DaXJjbGVPdXRsaW5lZCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtYmx1ZS00MDAgcHItMVwiIC8+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICl9XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJwci0yXCI+e2xhYmVsVGV4dH08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYWJlbDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHtcbiAgU2VhcmNoT3V0bGluZWQsXG4gIEZvbGRlck9wZW5PdXRsaW5lZCxcbiAgTG9hZGluZ091dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IE1hbnkyb25lIGFzIE1hbnkyb25lT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCJAL0NvbmZpZ1wiO1xuaW1wb3J0IHsgU2VhcmNoTW9kYWwgfSBmcm9tIFwiQC93aWRnZXRzL21vZGFscy9TZWFyY2hNb2RhbFwiO1xuaW1wb3J0IHsgRm9ybU1vZGFsIH0gZnJvbSBcIkAvd2lkZ2V0cy9tb2RhbHMvRm9ybU1vZGFsXCI7XG5pbXBvcnQgQ29ubmVjdGlvblByb3ZpZGVyIGZyb20gXCJAL0Nvbm5lY3Rpb25Qcm92aWRlclwiO1xuXG50eXBlIFByb3BzID0ge1xuICBvb3VpOiBNYW55Mm9uZU9vdWk7XG4gIG9uT3BlbkRldGFpbENsaWNrPzpcbiAgICB8ICgoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkKVxuICAgIHwgdW5kZWZpbmVkO1xuICBvblNlYXJjaENsaWNrPzpcbiAgICB8ICgoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkKVxuICAgIHwgdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IE1hbnkyb25lID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9PlxuICAgICAgPE1hbnkyb25lSW5wdXQgb291aT17b291aX0gLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcblxuaW50ZXJmYWNlIE1hbnkyb25lSW5wdXRQcm9wcyB7XG4gIG9vdWk6IE1hbnkyb25lT291aTtcbiAgdmFsdWU/OiBhbnlbXTtcbiAgb25DaGFuZ2U/OiAodmFsdWU6IGFueVtdKSA9PiB2b2lkO1xufVxuXG5sZXQgU0VBUkNIX0JVVFRPTl9UQVBQRURfRkxBRyA9IGZhbHNlO1xuXG5jb25zdCBNYW55Mm9uZUlucHV0OiBSZWFjdC5GQzxNYW55Mm9uZUlucHV0UHJvcHM+ID0gKFxuICBwcm9wczogTWFueTJvbmVJbnB1dFByb3BzXG4pID0+IHtcbiAgY29uc3QgeyB2YWx1ZSwgb25DaGFuZ2UsIG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IHJlcXVpcmVkLCByZWxhdGlvbiwgcmVhZE9ubHkgfSA9IG9vdWk7XG4gIGNvbnN0IHJlcXVpcmVkQ2xhc3MgPSByZXF1aXJlZCA/IENvbmZpZy5yZXF1aXJlZENsYXNzIDogdW5kZWZpbmVkO1xuICBjb25zdCBbc2hvd1NlYXJjaE1vZGFsLCBzZXRTaG93U2VhcmNoTW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbc2hvd0Zvcm1Nb2RhbCwgc2V0U2hvd0Zvcm1Nb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzZWFyY2hpbmcsIHNldFNlYXJjaGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzZWFyY2hUZXh0LCBzZXRTZWFyY2hUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcblxuICBjb25zdCB0cmlnZ2VyQ2hhbmdlID0gKGNoYW5nZWRWYWx1ZTogYW55W10pID0+IHtcbiAgICBvbkNoYW5nZT8uKHsgLi4udmFsdWUsIC4uLmNoYW5nZWRWYWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBvblZhbHVlU3RyaW5nQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgdHJpZ2dlckNoYW5nZShbdW5kZWZpbmVkLCBlLnRhcmdldC52YWx1ZV0pO1xuICB9O1xuXG4gIGNvbnN0IGlkID0gdmFsdWUgJiYgdmFsdWVbMF07XG4gIGNvbnN0IHRleHQgPSAodmFsdWUgJiYgdmFsdWVbMV0pIHx8IFwiXCI7XG5cbiAgY29uc3Qgb25FbGVtZW50TG9zdEZvY3VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaWQgJiYgIXNlYXJjaGluZyAmJiB0ZXh0LnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBEZWJvdW5jZSB0aGlzIGV2ZW50IHRvIGdpdmUgdGltZSB0byB0aGUgc2VhcmNoIGJ1dHRvbiBvbkNsaWNrIHRvIHNldCB0aGUgZmxhZ1xuICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwKSk7XG5cbiAgICAgIC8vIElmIHRoZSBmb2N1cyBpcyBsb3N0IGJlY2F1c2UgdGhlIHVzZXIgdGFwcGVkIHRoZSBzZWFyY2ggYnV0dG9uLCB3ZSBkb24ndCBuZWVkIHRvIGRvIG5vdGhpbmcgaGVyZVxuICAgICAgaWYgKFNFQVJDSF9CVVRUT05fVEFQUEVEX0ZMQUcpIHtcbiAgICAgICAgdHJpZ2dlckNoYW5nZShbdW5kZWZpbmVkLCBcIlwiXSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2V0U2VhcmNoaW5nKHRydWUpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHRzOiBhbnlbXSA9IGF3YWl0IENvbm5lY3Rpb25Qcm92aWRlci5nZXRIYW5kbGVyKCkuZXhlY3V0ZSh7XG4gICAgICAgICAgbW9kZWw6IHJlbGF0aW9uLFxuICAgICAgICAgIGFjdGlvbjogXCJuYW1lX3NlYXJjaFwiLFxuICAgICAgICAgIHBheWxvYWQ6IHRleHQsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0cmlnZ2VyQ2hhbmdlKHJlc3VsdHNbMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFNlYXJjaFRleHQodGV4dCk7XG4gICAgICAgICAgc2V0U2hvd1NlYXJjaE1vZGFsKHRydWUpO1xuICAgICAgICAgIHRyaWdnZXJDaGFuZ2UoW3VuZGVmaW5lZCwgXCJcIl0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIGVycm9yXG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRTZWFyY2hpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSb3cgZ3V0dGVyPXs4fSBjbGFzc05hbWU9XCJwdC0xIHBiLTFcIj5cbiAgICAgIDxDb2wgZmxleD1cImF1dG9cIj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblZhbHVlU3RyaW5nQ2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICBjbGFzc05hbWU9e3JlcXVpcmVkQ2xhc3N9XG4gICAgICAgICAgb25CbHVyPXtvbkVsZW1lbnRMb3N0Rm9jdXN9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgZmxleD1cIjMycHhcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb249ezxGb2xkZXJPcGVuT3V0bGluZWQgLz59XG4gICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5IHx8IGlkID09PSB1bmRlZmluZWR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd0Zvcm1Nb2RhbCh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCBmbGV4PVwiMzJweFwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWNvbj17c2VhcmNoaW5nID8gPExvYWRpbmdPdXRsaW5lZCAvPiA6IDxTZWFyY2hPdXRsaW5lZCAvPn1cbiAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHkgfHwgc2VhcmNoaW5nfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIFNFQVJDSF9CVVRUT05fVEFQUEVEX0ZMQUcgPSB0cnVlO1xuICAgICAgICAgICAgc2V0U2VhcmNoVGV4dCh0ZXh0KTtcbiAgICAgICAgICAgIHNldFNob3dTZWFyY2hNb2RhbCh0cnVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sPlxuICAgICAgPFNlYXJjaE1vZGFsXG4gICAgICAgIG1vZGVsPXtyZWxhdGlvbn1cbiAgICAgICAgdmlzaWJsZT17c2hvd1NlYXJjaE1vZGFsfVxuICAgICAgICBuYW1lU2VhcmNoPXshaWQgPyBzZWFyY2hUZXh0IDogdW5kZWZpbmVkfVxuICAgICAgICBvblNlbGVjdFZhbHVlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICB0cmlnZ2VyQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICBzZXRTaG93U2VhcmNoTW9kYWwoZmFsc2UpO1xuICAgICAgICAgIFNFQVJDSF9CVVRUT05fVEFQUEVEX0ZMQUcgPSBmYWxzZTtcbiAgICAgICAgfX1cbiAgICAgICAgb25DbG9zZU1vZGFsPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd1NlYXJjaE1vZGFsKGZhbHNlKTtcbiAgICAgICAgICBTRUFSQ0hfQlVUVE9OX1RBUFBFRF9GTEFHID0gZmFsc2U7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPEZvcm1Nb2RhbFxuICAgICAgICBtb2RlbD17cmVsYXRpb259XG4gICAgICAgIGlkPXt2YWx1ZSAmJiB2YWx1ZVswXX1cbiAgICAgICAgdmlzaWJsZT17c2hvd0Zvcm1Nb2RhbH1cbiAgICAgICAgb25TdWJtaXRTdWNjZWVkPXsodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgIHRyaWdnZXJDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIHNldFNob3dGb3JtTW9kYWwoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgIHNldFNob3dGb3JtTW9kYWwoZmFsc2UpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L1Jvdz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgT25lMm1hbnkgYXMgT25lMm1hbnlPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IEJ1dHRvbiwgU3BpbiwgQWxlcnQsIE1vZGFsIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiQC9pbmRleFwiO1xuaW1wb3J0IHsgU2ltcGxlVHJlZSB9IGZyb20gXCJAL2luZGV4XCI7XG5pbXBvcnQgeyBGb3JtIGFzIEZvcm1Pb3VpLCBUcmVlIGFzIFRyZWVPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IFZpZXdzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBDb25uZWN0aW9uUHJvdmlkZXIgZnJvbSBcIkAvQ29ubmVjdGlvblByb3ZpZGVyXCI7XG5pbXBvcnQgeyBGb3JtTW9kYWwgfSBmcm9tIFwiQC93aWRnZXRzL21vZGFscy9Gb3JtTW9kYWxcIjtcblxuaW1wb3J0IHtcbiAgRmlsZUFkZE91dGxpbmVkLFxuICBFZGl0T3V0bGluZWQsXG4gIERlbGV0ZU91dGxpbmVkLFxuICBMZWZ0T3V0bGluZWQsXG4gIFJpZ2h0T3V0bGluZWQsXG4gIEFsaWduTGVmdE91dGxpbmVkLFxuICBFeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogT25lMm1hbnlPb3VpO1xufTtcblxuY29uc3QgeyBjb25maXJtIH0gPSBNb2RhbDtcblxuZXhwb3J0IGNvbnN0IE9uZTJtYW55ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9PlxuICAgICAgPE9uZTJtYW55SW5wdXQgb291aT17b291aX0gLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcblxuaW50ZXJmYWNlIE9uZTJNYW55SW5wdXRQcm9wcyB7XG4gIG9vdWk6IE9uZTJtYW55T291aTtcbiAgdmFsdWU/OiBudW1iZXJbXTtcbiAgb25DaGFuZ2U/OiAodmFsdWU6IGFueVtdKSA9PiB2b2lkO1xufVxuXG5jb25zdCBPbmUybWFueUlucHV0OiBSZWFjdC5GQzxPbmUyTWFueUlucHV0UHJvcHM+ID0gKFxuICBwcm9wczogT25lMk1hbnlJbnB1dFByb3BzXG4pID0+IHtcbiAgY29uc3QgeyB2YWx1ZSA9IFtdLCBvbkNoYW5nZSwgb291aSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgdHJpZ2dlckNoYW5nZSA9IChjaGFuZ2VkVmFsdWU6IG51bWJlcltdKSA9PiB7XG4gICAgb25DaGFuZ2U/LihjaGFuZ2VkVmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICByZWFkT25seSxcbiAgICByZXF1aXJlZCxcbiAgICByZWxhdGlvbixcbiAgICB2aWV3czogb291aVZpZXdzLFxuICAgIG1vZGUsXG4gIH0gPSBvb3VpIGFzIE9uZTJtYW55T291aTtcblxuICBjb25zdCBbdmlld3MsIHNldFZpZXdzXSA9IHVzZVN0YXRlPFZpZXdzPihuZXcgTWFwPHN0cmluZywgYW55PigpKTtcblxuICBjb25zdCBbY3VycmVudFZpZXcsIHNldEN1cnJlbnRWaWV3XSA9IHVzZVN0YXRlPHN0cmluZz4oXCJ0cmVlXCIpO1xuICBjb25zdCBbaXRlbUluZGV4LCBzZXRJdGVtSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW3Nob3dGb3JtTW9kYWwsIHNldFNob3dGb3JtTW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbbW9kYWxJdGVtSWQsIHNldE1vZGFsSXRlbUlkXSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcblxuICBjb25zdCBzaG93UmVtb3ZlQ29uZmlybSA9ICgpID0+IHtcbiAgICBjb25maXJtKHtcbiAgICAgIHRpdGxlOiBcIlJlbW92ZSBpdGVtXCIsXG4gICAgICBpY29uOiA8RXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCAvPixcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgY29udGVudDogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgaXRlbT9cIixcbiAgICAgIG9rVGV4dDogXCJZZXMsIHJlbW92ZSBpdFwiLFxuICAgICAgb25PaygpIHtcbiAgICAgICAgb25Db25maXJtUmVtb3ZlKCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFZpZXdEYXRhID0gYXN5bmMgKHR5cGU6IFwiZm9ybVwiIHwgXCJ0cmVlXCIpID0+IHtcbiAgICBpZiAob291aVZpZXdzW3R5cGVdKSB7XG4gICAgICByZXR1cm4gb291aVZpZXdzW3R5cGVdO1xuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5nZXRWaWV3KHJlbGF0aW9uLCB0eXBlKTtcbiAgfTtcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKHVuZGVmaW5lZCk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKG1vZGUgJiYgbW9kZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldEN1cnJlbnRWaWV3KG1vZGVbMF0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtVmlldyA9IGF3YWl0IGdldFZpZXdEYXRhKFwiZm9ybVwiKTtcbiAgICAgIGNvbnN0IHRyZWVWaWV3ID0gYXdhaXQgZ2V0Vmlld0RhdGEoXCJ0cmVlXCIpO1xuICAgICAgdmlld3Muc2V0KFwiZm9ybVwiLCBmb3JtVmlldyk7XG4gICAgICB2aWV3cy5zZXQoXCJ0cmVlXCIsIHRyZWVWaWV3KTtcbiAgICAgIHNldFZpZXdzKHZpZXdzKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKGVycik7XG4gICAgfVxuXG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbb291aV0pO1xuXG4gIGNvbnN0IHNlcGFyYXRvciA9ICgpID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy0zXCIgLz47XG4gIH07XG5cbiAgY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gICAgbGV0IGl0ZW1Ub1Nob3cgPSBcIl9cIjtcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICBpdGVtVG9TaG93ID0gXCJfXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0ZW1Ub1Nob3cgPSAoaXRlbUluZGV4ICsgMSkudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTEgcHItMVwiPlxuICAgICAgICAoe2l0ZW1Ub1Nob3d9L3t2YWx1ZS5sZW5ndGh9KVxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlVmlld01vZGUgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRWaWV3ID09PSBcImZvcm1cIiAmJiB2aWV3cy5nZXQoXCJ0cmVlXCIpKSB7XG4gICAgICBzZXRDdXJyZW50VmlldyhcInRyZWVcIik7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9PT0gXCJ0cmVlXCIgJiYgdmlld3MuZ2V0KFwiZm9ybVwiKSkge1xuICAgICAgc2V0Q3VycmVudFZpZXcoXCJmb3JtXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICBjb25zdCB0eXBlID0gY3VycmVudFZpZXcgPT09IFwiZm9ybVwiID8gRm9ybU9vdWkgOiBUcmVlT291aTtcbiAgICBjb25zdCBvb3VpID0gbmV3IHR5cGUodmlld3MuZ2V0KGN1cnJlbnRWaWV3KS5maWVsZHMpO1xuICAgIG9vdWkucGFyc2Uodmlld3MuZ2V0KGN1cnJlbnRWaWV3KS5hcmNoKTtcbiAgICByZXR1cm4gKG9vdWkgYXMgYW55KS5zdHJpbmc7XG4gIH07XG5cbiAgY29uc3QgcHJldmlvdXNJdGVtID0gKCkgPT4ge1xuICAgIGlmIChpdGVtSW5kZXggPiAwKSB7XG4gICAgICBzZXRJdGVtSW5kZXgoaXRlbUluZGV4IC0gMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG5leHRJdGVtID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvdGFsSXRlbXMgPSB2YWx1ZS5sZW5ndGg7XG4gICAgaWYgKGl0ZW1JbmRleCA8IHRvdGFsSXRlbXMgLSAxKSB7XG4gICAgICBzZXRJdGVtSW5kZXgoaXRlbUluZGV4ICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGVkaXRJdGVtID0gKCkgPT4ge1xuICAgIHNldE1vZGFsSXRlbUlkKHZhbHVlW2l0ZW1JbmRleF0pO1xuICAgIHNldFNob3dGb3JtTW9kYWwodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlSXRlbSA9ICgpID0+IHtcbiAgICBzZXRNb2RhbEl0ZW1JZCh1bmRlZmluZWQpO1xuICAgIHNldFNob3dGb3JtTW9kYWwodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgb25Db25maXJtUmVtb3ZlID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcih1bmRlZmluZWQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IENvbm5lY3Rpb25Qcm92aWRlci5nZXRIYW5kbGVyKCkuZGVsZXRlKHtcbiAgICAgICAgbW9kZWw6IHJlbGF0aW9uLFxuICAgICAgICBpZHM6IFt2YWx1ZVtpdGVtSW5kZXhdXSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoZXJyKTtcbiAgICB9XG5cbiAgICBzZXRJdGVtSW5kZXgoMCk7XG4gICAgdHJpZ2dlckNoYW5nZSh2YWx1ZS5maWx0ZXIoKGlkKSA9PiBpZCAhPT0gdmFsdWVbaXRlbUluZGV4XSkpO1xuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH07XG5cbiAgY29uc3QgdG9wQmFyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWItMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOCBmbGV4IGZsZXgtZ3JvdyBiZy1ncmF5LTcwMCB0ZXh0LWdyYXktMjAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsLTIgZm9udC1ib2xkXCI+e2dldFRpdGxlKCl9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTggZmxleC1ub25lIHBsLTJcIj5cbiAgICAgICAgICA8QnV0dG9uIGljb249ezxGaWxlQWRkT3V0bGluZWQgb25DbGljaz17Y3JlYXRlSXRlbX0gLz59IC8+XG4gICAgICAgICAge2N1cnJlbnRWaWV3ID09PSBcImZvcm1cIiAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uIGljb249ezxFZGl0T3V0bGluZWQgLz59IG9uQ2xpY2s9e2VkaXRJdGVtfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2N1cnJlbnRWaWV3ID09PSBcImZvcm1cIiAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uIGljb249ezxEZWxldGVPdXRsaW5lZCBvbkNsaWNrPXtzaG93UmVtb3ZlQ29uZmlybX0gLz59IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7c2VwYXJhdG9yKCl9XG4gICAgICAgICAge2N1cnJlbnRWaWV3ID09PSBcImZvcm1cIiAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8QnV0dG9uIGljb249ezxMZWZ0T3V0bGluZWQgLz59IG9uQ2xpY2s9e3ByZXZpb3VzSXRlbX0gLz5cbiAgICAgICAgICAgICAge2luZGV4KCl9XG4gICAgICAgICAgICAgIDxCdXR0b24gaWNvbj17PFJpZ2h0T3V0bGluZWQgLz59IG9uQ2xpY2s9e25leHRJdGVtfSAvPlxuICAgICAgICAgICAgICB7c2VwYXJhdG9yKCl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxCdXR0b24gaWNvbj17PEFsaWduTGVmdE91dGxpbmVkIC8+fSBvbkNsaWNrPXt0b2dnbGVWaWV3TW9kZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGNvbnRlbnQgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRWaWV3ID09PSBcImZvcm1cIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBtb2RlbD17cmVsYXRpb259XG4gICAgICAgICAgaWQ9e3ZhbHVlW2l0ZW1JbmRleF19XG4gICAgICAgICAgb25DYW5jZWw9eygpID0+IHt9fVxuICAgICAgICAgIG9uU3VibWl0U3VjY2VlZD17KCkgPT4ge1xuICAgICAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTaW1wbGVUcmVlXG4gICAgICAgIG1vZGVsPXtyZWxhdGlvbn1cbiAgICAgICAgaWRzPXt2YWx1ZX1cbiAgICAgICAgZm9ybVZpZXc9e3ZpZXdzLmdldChcImZvcm1cIil9XG4gICAgICAgIHRyZWVWaWV3PXt2aWV3cy5nZXQoXCJ0cmVlXCIpfVxuICAgICAgICBvblJvd0NsaWNrZWQ9eyhldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBpZCB9ID0gZXZlbnQ7XG4gICAgICAgICAgc2V0TW9kYWxJdGVtSWQoaWQpO1xuICAgICAgICAgIHNldFNob3dGb3JtTW9kYWwodHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgaWYgKGlzTG9hZGluZykge1xuICAgIHJldHVybiA8U3BpbiAvPjtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8QWxlcnQgY2xhc3NOYW1lPVwibXQtMTBcIiBtZXNzYWdlPXtlcnJvcn0gdHlwZT1cImVycm9yXCIgYmFubmVyIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3RvcEJhcigpfVxuICAgICAge2NvbnRlbnQoKX1cbiAgICAgIDxGb3JtTW9kYWxcbiAgICAgICAgbW9kZWw9e3JlbGF0aW9ufVxuICAgICAgICBpZD17bW9kYWxJdGVtSWR9XG4gICAgICAgIHZpc2libGU9e3Nob3dGb3JtTW9kYWx9XG4gICAgICAgIG9uU3VibWl0U3VjY2VlZD17KGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBbaWRdID0gZXZlbnQ7XG4gICAgICAgICAgaWYgKCF2YWx1ZS5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2UodmFsdWUuY29uY2F0KGlkKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2V0U2hvd0Zvcm1Nb2RhbChmYWxzZSk7XG4gICAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd0Zvcm1Nb2RhbChmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBTZWxlY3Rpb24gYXMgU2VsZWN0aW9uT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCJAL0NvbmZpZ1wiO1xuXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuXG5leHBvcnQgY29uc3QgU2VsZWN0aW9uID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IHNlbGVjdGlvblZhbHVlcywgcmVhZE9ubHksIHJlcXVpcmVkIH0gPSBvb3VpIGFzIFNlbGVjdGlvbk9vdWk7XG5cbiAgY29uc3QgdmFsdWVzID0gQXJyYXkuZnJvbShzZWxlY3Rpb25WYWx1ZXMuZW50cmllcygpKTtcblxuICBjb25zdCBvcHRpb25zID1cbiAgICB2YWx1ZXMgJiZcbiAgICB2YWx1ZXMubGVuZ3RoICYmXG4gICAgdmFsdWVzLm1hcCgoZW50cnk6IHN0cmluZ1tdKSA9PiB7XG4gICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxPcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtrZXl9PlxuICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgPC9PcHRpb24+XG4gICAgICApO1xuICAgIH0pO1xuXG4gIGNvbnN0IEN1c3RvbVNlbGVjdDogYW55ID0gcmVxdWlyZWQgPyBSZXF1aXJlZFNlbGVjdCA6IFNlbGVjdDtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9PlxuICAgICAgPEN1c3RvbVNlbGVjdCBkaXNhYmxlZD17cmVhZE9ubHl9PntvcHRpb25zfTwvQ3VzdG9tU2VsZWN0PlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuXG5jb25zdCBSZXF1aXJlZFNlbGVjdCA9IHN0eWxlZChTZWxlY3QpYFxuICAmLmFudC1zZWxlY3Q6bm90KC5hbnQtc2VsZWN0LWN1c3RvbWl6ZS1pbnB1dCkgLmFudC1zZWxlY3Qtc2VsZWN0b3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29uZmlnLnJlcXVpcmVkQ29sb3J9O1xuICB9XG5gO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBTZXBhcmF0b3IgYXMgU2VwYXJhdG9yT291aSB9IGZyb20gXCJvb3VpXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG9vdWk6IFNlcGFyYXRvck9vdWk7XG59O1xuXG5leHBvcnQgY29uc3QgU2VwYXJhdG9yID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IGxhYmVsIH0gPSBvb3VpO1xuXG4gIHJldHVybiAoXG4gICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJsZWZ0XCIgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAge2xhYmVsfVxuICAgIDwvRGl2aWRlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCJAL0NvbmZpZ1wiO1xuaW1wb3J0IHsgVGV4dCBhcyBUZXh0T291aSB9IGZyb20gXCJvb3VpXCI7XG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogVGV4dE9vdWk7XG59O1xuXG5jb25zdCBUZXh0ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IHJlYWRPbmx5LCByZXF1aXJlZCB9ID0gb291aTtcbiAgY29uc3QgcmVxdWlyZWRDbGFzcyA9IHJlcXVpcmVkID8gQ29uZmlnLnJlcXVpcmVkQ2xhc3MgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgey4uLnByb3BzfT5cbiAgICAgIDxUZXh0QXJlYSBkaXNhYmxlZD17cmVhZE9ubHl9IGNsYXNzTmFtZT17cmVxdWlyZWRDbGFzc30gcm93cz17NH0gLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciBhcyBDb250YWluZXJPb3VpLCBXaWRnZXQgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IHsgY3JlYXRlUmVhY3RXaWRnZXQgfSBmcm9tIFwiQC93aWRnZXRzL1dpZGdldEZhY3RvcnlcIjtcblxuaW1wb3J0IHtcbiAgZ2V0VGVtcGxhdGVDb2x1bW5zLFxuICBmaWxsUm93V2l0aEVtcHRpZXNUb0ZpdCxcbiAgZ2V0U3BhblN0eWxlRm9ySXRlbSxcbiAgZXhwYW5kV2lkZ2V0c0lmTmVlZGVkLFxufSBmcm9tIFwiQC9oZWxwZXJzL2NvbnRhaW5lckhlbHBlclwiO1xuXG50eXBlIFByb3BzID0ge1xuICBjb250YWluZXI6IENvbnRhaW5lck9vdWk7XG4gIGZvcm1XcmFwcGVyPzogYm9vbGVhbjtcbiAgcmVzcG9uc2l2ZUJlaGF2aW91cjogYm9vbGVhbjtcbn07XG5cbmNvbnN0IENvbnRhaW5lciA9IChwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCB7IGNvbnRhaW5lciwgZm9ybVdyYXBwZXIgPSBmYWxzZSwgcmVzcG9uc2l2ZUJlaGF2aW91ciB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgcm93cyB9ID0gY29udGFpbmVyO1xuICBsZXQgeyBjb2x1bW5zIH0gPSBjb250YWluZXI7XG5cbiAgY29uc3QgY29udGVudCA9IHJvd3MubWFwKChyb3c6IFdpZGdldFtdLCBpKSA9PiB7XG4gICAgY29uc3Qgcm93V2l0aG91dEludmlzaWJsZUZpZWxkcyA9IHJvdy5maWx0ZXIoKHdpZGdldCkgPT4ge1xuICAgICAgcmV0dXJuICF3aWRnZXQuaW52aXNpYmxlO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgcm93V2l0aEV4cGFuZGVkSXRlbXMgPSBleHBhbmRXaWRnZXRzSWZOZWVkZWQoe1xuICAgICAgcm93OiByb3dXaXRob3V0SW52aXNpYmxlRmllbGRzLFxuICAgICAgbnVtYmVyT2ZDb2x1bW5zOiBjb2x1bW5zLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgcm93V2l0aEVtcHRpZXNUb0ZpdCA9IGZpbGxSb3dXaXRoRW1wdGllc1RvRml0KHtcbiAgICAgIHJvdzogcm93V2l0aEV4cGFuZGVkSXRlbXMsXG4gICAgICBudW1iZXJPZkNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICBtdXN0RmlsbFdpdGhFbXB0aWVzOiByZXNwb25zaXZlQmVoYXZpb3VyLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJvd1dpdGhFbXB0aWVzVG9GaXQubWFwKChpdGVtOiBXaWRnZXQsIGo6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17YCR7aS50b1N0cmluZygpfS0ke2oudG9TdHJpbmcoKX1gfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGYtY2VudGVyIHAtMlwiXG4gICAgICAgICAgc3R5bGU9e2dldFNwYW5TdHlsZUZvckl0ZW0oeyBpdGVtLCByZXNwb25zaXZlQmVoYXZpb3VyIH0pfVxuICAgICAgICA+XG4gICAgICAgICAge2NyZWF0ZVJlYWN0V2lkZ2V0KHtcbiAgICAgICAgICAgIG9vdWk6IGl0ZW0sXG4gICAgICAgICAgICByZXNwb25zaXZlQmVoYXZpb3VyLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFRPRE86IFJldmlldyB0aGlzIGJlaGF2aW91ciBpZiBpdCdzIG5lZWRlZFxuICBpZiAoZm9ybVdyYXBwZXIpIHtcbiAgICBjb2x1bW5zID0gNDtcbiAgICAvLyByZXR1cm4gY29udGVudCBhcyBhbnk7XG4gIH1cblxuICBjb25zdCB0ZW1wbGF0ZUNvbHVtbnMgPSBnZXRUZW1wbGF0ZUNvbHVtbnMoY29sdW1ucyk7XG4gIGNvbnN0IGdyaWRTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiByZXNwb25zaXZlQmVoYXZpb3VyID8gXCJhdXRvXCIgOiB0ZW1wbGF0ZUNvbHVtbnMsXG4gIH07XG5cbiAgcmV0dXJuIDxkaXYgc3R5bGU9e2dyaWRTdHlsZX0+e2NvbnRlbnR9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR3JvdXAgYXMgR3JvdXBPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG5pbXBvcnQgRmllbGRzZXQgZnJvbSBcIkAvdWkvRmllbGRzZXRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogR3JvdXBPb3VpO1xuICBzaG93TGFiZWw/OiBib29sZWFuO1xuICByZXNwb25zaXZlQmVoYXZpb3VyOiBib29sZWFuO1xufTtcblxuZnVuY3Rpb24gR3JvdXAocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBvb3VpLCBzaG93TGFiZWwgPSB0cnVlLCByZXNwb25zaXZlQmVoYXZpb3VyIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7b291aS5sYWJlbCAmJiBzaG93TGFiZWwgPyAoXG4gICAgICAgIDxGaWVsZHNldCBsYWJlbD17b291aS5sYWJlbH0+XG4gICAgICAgICAgPENvbnRhaW5lclxuICAgICAgICAgICAgY29udGFpbmVyPXtvb3VpIS5jb250YWluZXJ9XG4gICAgICAgICAgICByZXNwb25zaXZlQmVoYXZpb3VyPXtyZXNwb25zaXZlQmVoYXZpb3VyfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRmllbGRzZXQ+XG4gICAgICApIDogKFxuICAgICAgICA8Q29udGFpbmVyXG4gICAgICAgICAgY29udGFpbmVyPXtvb3VpIS5jb250YWluZXJ9XG4gICAgICAgICAgcmVzcG9uc2l2ZUJlaGF2aW91cj17cmVzcG9uc2l2ZUJlaGF2aW91cn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFicyB9IGZyb20gXCJhbnRkXCI7XG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XG5cbmltcG9ydCB7IE5vdGVib29rIGFzIE5vdGVib29rT291aSwgR3JvdXAgYXMgR3JvdXBPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcIkAvaW5kZXhcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogTm90ZWJvb2tPb3VpO1xuICByZXNwb25zaXZlQmVoYXZpb3VyOiBib29sZWFuO1xufTtcblxuZnVuY3Rpb24gTm90ZWJvb2socHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBvb3VpLCByZXNwb25zaXZlQmVoYXZpb3VyIH0gPSBwcm9wcztcbiAgY29uc3QgdGFicyA9IFtdLmNvbmNhdC5hcHBseShbXSwgb291aSEuY29udGFpbmVyLnJvd3MpO1xuICByZXR1cm4gKFxuICAgIDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCI+XG4gICAgICB7dGFicy5tYXAoKHBhZ2U6IGFueSwga2V5OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgdGFiS2V5ID0gKGtleSArIDEpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VGFiUGFuZSB0YWI9e3BhZ2UubGFiZWx9IGtleT17dGFiS2V5fT5cbiAgICAgICAgICAgIDxHcm91cCBvb3VpPXtwYWdlIGFzIEdyb3VwT291aX0gc2hvd0xhYmVsPXtmYWxzZX0gcmVzcG9uc2l2ZUJlaGF2aW91cj17cmVzcG9uc2l2ZUJlaGF2aW91cn0gLz5cbiAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L1RhYnM+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGVib29rO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIkAvd2lkZ2V0cy92aWV3cy9Gb3JtXCI7XG5cbnR5cGUgRm9ybU1vZGFsUHJvcHMgPSB7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIG1vZGVsOiBzdHJpbmc7XG4gIGlkPzogbnVtYmVyO1xuICBnZXREYXRhRnJvbUFjdGlvbj86IGJvb2xlYW47XG4gIG9uQ2FuY2VsPzogKCkgPT4gdm9pZDtcbiAgb25TdWJtaXRTdWNjZWVkPzogKHVwZGF0ZWRPYmplY3Q6IGFueSkgPT4gdm9pZDtcbiAgdGl0bGU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgRm9ybU1vZGFsID0gKHByb3BzOiBGb3JtTW9kYWxQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdmlzaWJsZSxcbiAgICBvbkNhbmNlbCxcbiAgICBvblN1Ym1pdFN1Y2NlZWQsXG4gICAgaWQsXG4gICAgbW9kZWwsXG4gICAgdGl0bGUgPSBpZCA/IFwiRGV0YWlsXCIgOiBcIk5ld1wiLFxuICAgIGdldERhdGFGcm9tQWN0aW9uLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIGNlbnRlcmVkXG4gICAgICB3aWR0aD17MTAwMH1cbiAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICBmb290ZXI9e251bGx9XG4gICAgPlxuICAgICAgPEZvcm1cbiAgICAgICAgLy8ga2V5PXtNYXRoLnJhbmRvbSgpICogMTAwMDB9IC8vIFRoaXMgZm9yY2VzIHRoZSBGb3JtIGNvbXBvbmVudCB0byBiZSB1bmlxdWUgZWFjaCB0aW1lIHRoZSBtb2RhbCBpcyBzaG93blxuICAgICAgICBpZD17aWR9XG4gICAgICAgIG1vZGVsPXttb2RlbH1cbiAgICAgICAgZ2V0RGF0YUZyb21BY3Rpb249e2dldERhdGFGcm9tQWN0aW9ufVxuICAgICAgICBvbkNhbmNlbD17b25DYW5jZWx9XG4gICAgICAgIG9uU3VibWl0U3VjY2VlZD17b25TdWJtaXRTdWNjZWVkfVxuICAgICAgICBzaG93Rm9vdGVyXG4gICAgICAvPlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBEaXZpZGVyLCBBbGVydCwgU3BpbiwgUm93LCBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBGb3JtTW9kYWwgfSBmcm9tIFwiLi9Gb3JtTW9kYWxcIjtcbmltcG9ydCBTZWFyY2hUcmVlIGZyb20gXCJAL3dpZGdldHMvdmlld3MvU2VhcmNoVHJlZVwiO1xuaW1wb3J0IENvbm5lY3Rpb25Qcm92aWRlciBmcm9tIFwiQC9Db25uZWN0aW9uUHJvdmlkZXJcIjtcbmltcG9ydCB7IEZpbGVBZGRPdXRsaW5lZCwgQ2xvc2VPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG50eXBlIFNlYXJjaFNlbGVjdGlvblByb3BzID0ge1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBtb2RlbDogc3RyaW5nO1xuICBuYW1lU2VhcmNoPzogc3RyaW5nO1xuICBvblNlbGVjdFZhbHVlOiAodmFsdWU6IGFueSkgPT4gdm9pZDtcbiAgb25DbG9zZU1vZGFsOiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IFNlYXJjaE1vZGFsID0gKHByb3BzOiBTZWFyY2hTZWxlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB7IHZpc2libGUsIG9uQ2xvc2VNb2RhbCwgb25TZWxlY3RWYWx1ZSwgbW9kZWwsIG5hbWVTZWFyY2ggfSA9IHByb3BzO1xuICBjb25zdCBbc2hvd0NyZWF0ZU1vZGFsLCBzZXRTaG93Q3JlYXRlTW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIGNvbnN0IG9uUm93Q2xpY2tlZCA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvcih1bmRlZmluZWQpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGlkLCBtb2RlbCB9ID0gZXZlbnQ7XG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IENvbm5lY3Rpb25Qcm92aWRlci5nZXRIYW5kbGVyKCkuZXhlY3V0ZSh7XG4gICAgICAgIGFjdGlvbjogXCJuYW1lX2dldFwiLFxuICAgICAgICBwYXlsb2FkOiBbaWRdLFxuICAgICAgICBtb2RlbCxcbiAgICAgIH0pO1xuICAgICAgb25TZWxlY3RWYWx1ZSh2YWx1ZVswXSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29udGVudCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICA8QWxlcnQgY2xhc3NOYW1lPVwibXQtMTBcIiBtZXNzYWdlPXtlcnJvcn0gdHlwZT1cImVycm9yXCIgYmFubmVyIC8+XG4gICAgICAgICl9XG4gICAgICAgIHt2aXNpYmxlICYmIChcbiAgICAgICAgICA8U2VhcmNoVHJlZVxuICAgICAgICAgICAgbW9kZWw9e21vZGVsfVxuICAgICAgICAgICAgbmFtZVNlYXJjaD17bmFtZVNlYXJjaH1cbiAgICAgICAgICAgIG9uUm93Q2xpY2tlZD17b25Sb3dDbGlja2VkfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDxSb3cganVzdGlmeT1cImVuZFwiPlxuICAgICAgICAgIDxTcGFjZT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgIGljb249ezxGaWxlQWRkT3V0bGluZWQgLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTaG93Q3JlYXRlTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5ld1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICBpY29uPXs8Q2xvc2VPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZU1vZGFsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvU3BhY2U+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TW9kYWxcbiAgICAgICAgdGl0bGU9XCJTZWFyY2hcIlxuICAgICAgICBjZW50ZXJlZFxuICAgICAgICB3aWR0aD17MTQwMH1cbiAgICAgICAgdmlzaWJsZT17dmlzaWJsZSAmJiAhc2hvd0NyZWF0ZU1vZGFsfVxuICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cbiAgICAgICAgb25DYW5jZWw9e29uQ2xvc2VNb2RhbH1cbiAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgLy8ga2V5PXtNYXRoLnJhbmRvbSgpICogMTAwMDB9IC8vIFRoaXMgZm9yY2VzIHRoZSBjb21wb25lbnQgdG8gYmUgdW5pcXVlIGVhY2ggdGltZSB0aGUgbW9kYWwgaXMgc2hvd25cbiAgICAgICAgPlxuICAgICAgICAgIHtsb2FkaW5nID8gPFNwaW4gLz4gOiBjb250ZW50KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxGb3JtTW9kYWxcbiAgICAgICAgbW9kZWw9e21vZGVsfVxuICAgICAgICB2aXNpYmxlPXtzaG93Q3JlYXRlTW9kYWx9XG4gICAgICAgIG9uU3VibWl0U3VjY2VlZD17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd0NyZWF0ZU1vZGFsKGZhbHNlKTtcbiAgICAgICAgICBvbkNsb3NlTW9kYWwoKTtcbiAgICAgICAgICBvblNlbGVjdFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICBzZXRTaG93Q3JlYXRlTW9kYWwoZmFsc2UpO1xuICAgICAgICAgIG9uQ2xvc2VNb2RhbCgpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSBhcyBGb3JtT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQge1xuICBGb3JtIGFzIEFudEZvcm0sXG4gIEJ1dHRvbixcbiAgRGl2aWRlcixcbiAgU3BhY2UsXG4gIFJvdyxcbiAgQWxlcnQsXG4gIFNwaW4sXG4gIE1vZGFsLFxufSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHVzZURpbWVuc2lvbnMgZnJvbSBcInJlYWN0LWNvb2wtZGltZW5zaW9uc1wiO1xuaW1wb3J0IHtcbiAgQ2hlY2tPdXRsaW5lZCxcbiAgQ2xvc2VPdXRsaW5lZCxcbiAgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmltcG9ydCBDb250YWluZXIgZnJvbSBcIkAvd2lkZ2V0cy9jb250YWluZXJzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgcHJvY2Vzc1ZhbHVlcywgZ2V0VG91Y2hlZFZhbHVlcyB9IGZyb20gXCJAL2hlbHBlcnMvZm9ybUhlbHBlclwiO1xuaW1wb3J0IHsgRm9ybVZpZXcgfSBmcm9tIFwiQC90eXBlcy9pbmRleFwiO1xuaW1wb3J0IENvbm5lY3Rpb25Qcm92aWRlciBmcm9tIFwiQC9Db25uZWN0aW9uUHJvdmlkZXJcIjtcblxuY29uc3QgeyBjb25maXJtIH0gPSBNb2RhbDtcblxudHlwZSBQcm9wcyA9IHtcbiAgbW9kZWw6IHN0cmluZztcbiAgaWQ/OiBudW1iZXI7XG4gIG9uU3VibWl0U3VjY2VlZD86ICh1cGRhdGVkT2JqZWN0OiBhbnkpID0+IHZvaWQ7XG4gIG9uQ2FuY2VsPzogKCkgPT4gdm9pZDtcbiAgc2hvd0Zvb3Rlcj86IGJvb2xlYW47XG4gIGdldERhdGFGcm9tQWN0aW9uPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IFdJRFRIX0JSRUFLUE9JTlQgPSAxMDAwO1xuXG50eXBlIEZvcm1WaWV3QW5kT291aSA9IHtcbiAgb291aTogRm9ybU9vdWk7XG4gIHZpZXc6IEZvcm1WaWV3O1xufTtcblxuZnVuY3Rpb24gRm9ybShwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgbW9kZWwsXG4gICAgaWQsXG4gICAgb25DYW5jZWwsXG4gICAgb25TdWJtaXRTdWNjZWVkLFxuICAgIHNob3dGb290ZXIgPSBmYWxzZSxcbiAgICBnZXREYXRhRnJvbUFjdGlvbiA9IGZhbHNlLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGU8Rm9ybVZpZXdBbmRPb3VpPigpO1xuICBjb25zdCBbYW50Rm9ybV0gPSBBbnRGb3JtLnVzZUZvcm0oKTtcblxuICBjb25zdCB7IHdpZHRoLCByZWYgfSA9IHVzZURpbWVuc2lvbnM8SFRNTERpdkVsZW1lbnQ+KHtcbiAgICBicmVha3BvaW50czogeyBYUzogMCwgU006IDMyMCwgTUQ6IDQ4MCwgTEc6IDEwMDAgfSxcbiAgICB1cGRhdGVPbkJyZWFrcG9pbnRDaGFuZ2U6IHRydWUsXG4gIH0pO1xuICBjb25zdCByZXNwb25zaXZlQmVoYXZpb3VyID0gd2lkdGggPCBXSURUSF9CUkVBS1BPSU5UO1xuXG4gIGNvbnN0IHNob3dDb25maXJtID0gKCkgPT4ge1xuICAgIGNvbmZpcm0oe1xuICAgICAgdGl0bGU6IFwiVGhlcmUgYXJlIHVuc2F2ZWQgY2hhbmdlc1wiLFxuICAgICAgaWNvbjogPEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWQgLz4sXG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIGNvbnRlbnQ6IFwiRG8geW91IHJlYWxseSB3YW50IHRvIGNsb3NlIHRoaXMgd2luZG93IHdpdGhvdXQgc2F2aW5nP1wiLFxuICAgICAgb2tUZXh0OiBcIkNsb3NlIHdpdGhvdXQgc2F2aW5nXCIsXG4gICAgICBvbk9rKCkge1xuICAgICAgICBvbkNhbmNlbD8uKCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZ2V0VG91Y2hlZFZhbHVlcyhhbnRGb3JtKSkubGVuZ3RoID4gMCkge1xuICAgICAgc2hvd0NvbmZpcm0oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvbkNhbmNlbD8uKCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0Rm9ybVZpZXcgPSBhc3luYyAoKTogUHJvbWlzZTxGb3JtVmlldz4gPT4ge1xuICAgIGlmIChnZXREYXRhRnJvbUFjdGlvbikge1xuICAgICAgY29uc3QgYWN0aW9uID0gYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5nZXRBY3Rpb24obW9kZWwpO1xuICAgICAgY29uc3Qgdmlld3NGb3JBY3Rpb24gPSBhd2FpdCBDb25uZWN0aW9uUHJvdmlkZXIuZ2V0SGFuZGxlcigpLmdldFZpZXdzRm9yQWN0aW9uKFxuICAgICAgICBhY3Rpb25cbiAgICAgICk7XG4gICAgICByZXR1cm4gdmlld3NGb3JBY3Rpb24udmlld3MuZ2V0KFwiZm9ybVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGF3YWl0IENvbm5lY3Rpb25Qcm92aWRlci5nZXRIYW5kbGVyKCkuZ2V0VmlldyhcbiAgICAgIG1vZGVsLFxuICAgICAgXCJmb3JtXCJcbiAgICApKSBhcyBGb3JtVmlldztcbiAgfTtcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB2aWV3ID0gYXdhaXQgZ2V0Rm9ybVZpZXcoKTtcblxuICAgICAgY29uc3Qgb291aSA9IG5ldyBGb3JtT291aSh2aWV3LmZpZWxkcyk7XG4gICAgICBvb3VpLnBhcnNlKHZpZXcuYXJjaCk7XG4gICAgICBzZXRGb3JtKHsgb291aSwgdmlldyB9KTtcblxuICAgICAgbGV0IF92YWx1ZXMgPSB7fTtcbiAgICAgIGlmIChpZCkge1xuICAgICAgICBfdmFsdWVzID0gKFxuICAgICAgICAgIGF3YWl0IENvbm5lY3Rpb25Qcm92aWRlci5nZXRIYW5kbGVyKCkucmVhZE9iamVjdHMoe1xuICAgICAgICAgICAgYXJjaDogdmlldyEuYXJjaCxcbiAgICAgICAgICAgIG1vZGVsLFxuICAgICAgICAgICAgaWRzOiBbaWRdLFxuICAgICAgICAgIH0pXG4gICAgICAgIClbMF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdmFsdWVzID0gYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5leGVjdXRlKHtcbiAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICBhY3Rpb246IFwiZGVmYXVsdF9nZXRcIixcbiAgICAgICAgICBwYXlsb2FkOiBPYmplY3Qua2V5cyh2aWV3LmZpZWxkcyksXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWx1ZXNQcm9jZXNzZWQgPSBwcm9jZXNzVmFsdWVzKF92YWx1ZXMsIGZvcm0/LnZpZXcuZmllbGRzKTtcblxuICAgICAgY29uc3QgbXVzdENsZWFyRmllbGRzRmlyc3QgPVxuICAgICAgICBPYmplY3Qua2V5cyhhbnRGb3JtLmdldEZpZWxkc1ZhbHVlKHRydWUpKS5sZW5ndGggPiAwOyAvLyBXZSBjaGVjayBpZiBpdCdzIGEgcmV1c2VkIGZvcm0gYW5kIHdlIGFscmVhZHkgaGF2ZSB2YWx1ZXMgZmlsbGVkXG5cbiAgICAgIGlmIChtdXN0Q2xlYXJGaWVsZHNGaXJzdCkge1xuICAgICAgICBhbnRGb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICB9XG5cbiAgICAgIGFudEZvcm0uc2V0RmllbGRzVmFsdWUodmFsdWVzUHJvY2Vzc2VkKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbaWQsIG1vZGVsXSk7XG5cbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRvdWNoZWRWYWx1ZXMgPSBnZXRUb3VjaGVkVmFsdWVzKGFudEZvcm0pO1xuXG4gICAgICBsZXQgb2JqZWN0SWQgPSBpZDtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKHRvdWNoZWRWYWx1ZXMpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICBhd2FpdCBDb25uZWN0aW9uUHJvdmlkZXIuZ2V0SGFuZGxlcigpLnVwZGF0ZSh7XG4gICAgICAgICAgICBtb2RlbCxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgdmFsdWVzOiB0b3VjaGVkVmFsdWVzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5ld0lkID0gYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgICB2YWx1ZXM6IHRvdWNoZWRWYWx1ZXMsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgb2JqZWN0SWQgPSBuZXdJZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IENvbm5lY3Rpb25Qcm92aWRlci5nZXRIYW5kbGVyKCkuZXhlY3V0ZSh7XG4gICAgICAgIGFjdGlvbjogXCJuYW1lX2dldFwiLFxuICAgICAgICBwYXlsb2FkOiBbb2JqZWN0SWRdLFxuICAgICAgICBtb2RlbCxcbiAgICAgIH0pO1xuXG4gICAgICBvblN1Ym1pdFN1Y2NlZWQ/Lih2YWx1ZVswXSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb250ZW50ID0gKCkgPT4ge1xuICAgIGlmICghZm9ybSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBbnRGb3JtXG4gICAgICAgIGZvcm09e2FudEZvcm19XG4gICAgICAgIC8vIGluaXRpYWxWYWx1ZXM9e3ZhbHVlc31cbiAgICAgID5cbiAgICAgICAge2Zvcm0gJiYgKFxuICAgICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICAgIGNvbnRhaW5lcj17Zm9ybS5vb3VpLmNvbnRhaW5lcn1cbiAgICAgICAgICAgIGZvcm1XcmFwcGVyXG4gICAgICAgICAgICByZXNwb25zaXZlQmVoYXZpb3VyPXtyZXNwb25zaXZlQmVoYXZpb3VyfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0FudEZvcm0+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgIDxSb3cganVzdGlmeT1cImVuZFwiPlxuICAgICAgICAgIDxTcGFjZT5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgaWNvbj17PENsb3NlT3V0bGluZWQgLz59XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmcgfHwgbG9hZGluZ31cbiAgICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nIHx8IGxvYWRpbmd9XG4gICAgICAgICAgICAgIGxvYWRpbmc9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgaWNvbj17PENoZWNrT3V0bGluZWQgLz59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEZvcm19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE9LXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1NwYWNlPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgIHtlcnJvciAmJiA8QWxlcnQgY2xhc3NOYW1lPVwibXQtMTBcIiBtZXNzYWdlPXtlcnJvcn0gdHlwZT1cImVycm9yXCIgYmFubmVyIC8+fVxuICAgICAge2xvYWRpbmcgPyA8U3BpbiAvPiA6IGNvbnRlbnQoKX1cbiAgICAgIHtzaG93Rm9vdGVyICYmIGZvb3RlcigpfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFsZXJ0LCBTcGluIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IFNlYXJjaEZpbHRlciBmcm9tIFwiQC93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9TZWFyY2hGaWx0ZXJcIjtcbmltcG9ydCBUcmVlIGZyb20gXCJAL3dpZGdldHMvdmlld3MvVHJlZVwiO1xuaW1wb3J0IHsgRm9ybVZpZXcsIFRyZWVWaWV3IH0gZnJvbSBcIkAvdHlwZXMvaW5kZXhcIjtcbmltcG9ydCBDb25uZWN0aW9uUHJvdmlkZXIgZnJvbSBcIkAvQ29ubmVjdGlvblByb3ZpZGVyXCI7XG5cbmNvbnN0IERFRkFVTFRfU0VBUkNIX0xJTUlUID0gODA7XG5cbnR5cGUgT25Sb3dDbGlja2VkRGF0YSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbW9kZWw6IHN0cmluZztcbiAgZm9ybVZpZXc6IEZvcm1WaWV3O1xuICB0cmVlVmlldzogVHJlZVZpZXc7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBhY3Rpb24/OiBzdHJpbmc7XG4gIG1vZGVsPzogc3RyaW5nO1xuICBvblJvd0NsaWNrZWQ6IChkYXRhOiBPblJvd0NsaWNrZWREYXRhKSA9PiB2b2lkO1xuICBuYW1lU2VhcmNoPzogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gU2VhcmNoVHJlZShwcm9wczogUHJvcHMpIHtcbiAgY29uc3QgeyBhY3Rpb24sIG1vZGVsLCBvblJvd0NsaWNrZWQsIG5hbWVTZWFyY2ggfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtpbml0aWFsRmV0Y2hEb25lLCBzZXRJbml0aWFsRmV0Y2hEb25lXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW3NlYXJjaE5hbWVHZXREb25lLCBzZXRTZWFyY2hOYW1lR2V0RG9uZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgW2N1cnJlbnRNb2RlbCwgc2V0Q3VycmVudE1vZGVsXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW3RyZWVWaWV3LCBzZXRUcmVlVmlld10gPSB1c2VTdGF0ZTxUcmVlVmlldz4oKTtcbiAgY29uc3QgW2Zvcm1WaWV3LCBzZXRGb3JtVmlld10gPSB1c2VTdGF0ZTxGb3JtVmlldz4oKTtcblxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDEpO1xuICBjb25zdCBbb2Zmc2V0LCBzZXRPZmZzZXRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZTxudW1iZXI+KERFRkFVTFRfU0VBUkNIX0xJTUlUKTtcbiAgY29uc3QgW2xpbWl0RnJvbUFjdGlvbiwgc2V0TGltaXRGcm9tQWN0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oKTtcblxuICBjb25zdCBbcGFyYW1zLCBzZXRQYXJhbXNdID0gdXNlU3RhdGU8QXJyYXk8YW55Pj4oW10pO1xuXG4gIGNvbnN0IFt0b3RhbEl0ZW1zLCBzZXRUb3RhbEl0ZW1zXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuXG4gIGNvbnN0IFtzZWFyY2hGaWx0ZXJMb2FkaW5nLCBzZXRTZWFyY2hGaWx0ZXJMb2FkaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KFxuICAgIGZhbHNlXG4gICk7XG4gIGNvbnN0IFtzZWFyY2hFcnJvciwgc2V0U2VhcmNoRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbaW5pdGlhbEVycm9yLCBzZXRJbml0aWFsRXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIGNvbnN0IFt0YWJsZVJlZnJlc2hpbmcsIHNldFRhYmxlUmVmcmVzaGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3Qgb25SZXF1ZXN0UGFnZUNoYW5nZSA9IChwYWdlOiBudW1iZXIpID0+IHtcbiAgICBzZXRUYWJsZVJlZnJlc2hpbmcodHJ1ZSk7XG4gICAgc2V0UGFnZShwYWdlKTtcbiAgICBzZXRPZmZzZXQoKHBhZ2UgLSAxKSAqIGxpbWl0ISk7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoQnlOYW1lU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBhd2FpdCBDb25uZWN0aW9uUHJvdmlkZXIuZ2V0SGFuZGxlcigpLmV4ZWN1dGUoe1xuICAgICAgbW9kZWw6IGN1cnJlbnRNb2RlbCEsXG4gICAgICBhY3Rpb246IFwibmFtZV9zZWFyY2hcIixcbiAgICAgIHBheWxvYWQ6IG5hbWVTZWFyY2gsXG4gICAgfSk7XG5cbiAgICBzZXRUb3RhbEl0ZW1zKHNlYXJjaFJlc3VsdHMubGVuZ3RoKTtcblxuICAgIGlmIChzZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJlc3VsdHNJZHMgPSBzZWFyY2hSZXN1bHRzLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtPy5bMF07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdHNXaXRoRGF0YSA9IGF3YWl0IENvbm5lY3Rpb25Qcm92aWRlci5nZXRIYW5kbGVyKCkucmVhZE9iamVjdHMoe1xuICAgICAgICBtb2RlbDogY3VycmVudE1vZGVsISxcbiAgICAgICAgaWRzOiByZXN1bHRzSWRzLFxuICAgICAgICBhcmNoOiB0cmVlVmlldz8uYXJjaCEsXG4gICAgICB9KTtcbiAgICAgIHNldFJlc3VsdHMocmVzdWx0c1dpdGhEYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UmVzdWx0cyhbXSk7XG4gICAgfVxuXG4gICAgc2V0U2VhcmNoTmFtZUdldERvbmUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0b3RhbEl0ZW1zLFxuICAgICAgcmVzdWx0cyxcbiAgICB9ID0gYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5zZWFyY2goe1xuICAgICAgcGFyYW1zLFxuICAgICAgbGltaXQsXG4gICAgICBvZmZzZXQsXG4gICAgICBtb2RlbDogY3VycmVudE1vZGVsISxcbiAgICAgIGZpZWxkczogdHJlZVZpZXchLmZpZWxkcyxcbiAgICB9KTtcbiAgICBzZXRUb3RhbEl0ZW1zKHRvdGFsSXRlbXMpO1xuICAgIHNldFJlc3VsdHMocmVzdWx0cyk7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hSZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRUYWJsZVJlZnJlc2hpbmcodHJ1ZSk7XG4gICAgICBpZiAoIXNlYXJjaE5hbWVHZXREb25lICYmIG5hbWVTZWFyY2gpIHtcbiAgICAgICAgYXdhaXQgc2VhcmNoQnlOYW1lU2VhcmNoKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBzZWFyY2hSZXN1bHRzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldFNlYXJjaEVycm9yKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0VGFibGVSZWZyZXNoaW5nKGZhbHNlKTtcbiAgICAgIHNldFNlYXJjaEZpbHRlckxvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaW5pdGlhbEZldGNoRG9uZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZldGNoUmVzdWx0cygpO1xuICB9LCBbcGFnZSwgbGltaXQsIG9mZnNldCwgcGFyYW1zLCBpbml0aWFsRmV0Y2hEb25lXSk7XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHR5cGU6IFwiYWN0aW9uXCIgfCBcIm1vZGVsXCIpID0+IHtcbiAgICBzZXRJbml0aWFsRmV0Y2hEb25lKGZhbHNlKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgc2V0SW5pdGlhbEVycm9yKHVuZGVmaW5lZCk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGUgPT09IFwiYWN0aW9uXCIpIHtcbiAgICAgICAgYXdhaXQgZmV0Y2hBY3Rpb25EYXRhKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBmZXRjaE1vZGVsRGF0YSgpO1xuICAgICAgfVxuICAgICAgc2V0SW5pdGlhbEZldGNoRG9uZSh0cnVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0SW5pdGlhbEVycm9yKGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hBY3Rpb25EYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGFGb3JBY3Rpb24gPSBhd2FpdCBDb25uZWN0aW9uUHJvdmlkZXIuZ2V0SGFuZGxlcigpLmdldFZpZXdzRm9yQWN0aW9uKFxuICAgICAgYWN0aW9uIVxuICAgICk7XG4gICAgc2V0Rm9ybVZpZXcoZGF0YUZvckFjdGlvbi52aWV3cy5nZXQoXCJmb3JtXCIpKTtcbiAgICBzZXRUcmVlVmlldyhkYXRhRm9yQWN0aW9uLnZpZXdzLmdldChcInRyZWVcIikpO1xuICAgIHNldEN1cnJlbnRNb2RlbChkYXRhRm9yQWN0aW9uLm1vZGVsKTtcbiAgICBzZXRMaW1pdEZyb21BY3Rpb24oZGF0YUZvckFjdGlvbi5saW1pdCk7XG4gICAgc2V0TGltaXQoZGF0YUZvckFjdGlvbi5saW1pdCk7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hNb2RlbERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0Q3VycmVudE1vZGVsKG1vZGVsKTtcbiAgICBjb25zdCBfZm9ybVZpZXcgPSBhd2FpdCBDb25uZWN0aW9uUHJvdmlkZXIuZ2V0SGFuZGxlcigpLmdldFZpZXcoXG4gICAgICBtb2RlbCEsXG4gICAgICBcImZvcm1cIlxuICAgICk7XG4gICAgY29uc3QgX3RyZWVWaWV3ID0gYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5nZXRWaWV3KFxuICAgICAgbW9kZWwhLFxuICAgICAgXCJ0cmVlXCJcbiAgICApO1xuICAgIHNldEZvcm1WaWV3KF9mb3JtVmlldyBhcyBGb3JtVmlldyk7XG4gICAgc2V0VHJlZVZpZXcoX3RyZWVWaWV3IGFzIFRyZWVWaWV3KTtcbiAgICBzZXRMaW1pdEZyb21BY3Rpb24odW5kZWZpbmVkKTtcbiAgICBzZXRMaW1pdChERUZBVUxUX1NFQVJDSF9MSU1JVCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBmZXRjaERhdGEoXCJhY3Rpb25cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZldGNoRGF0YShcIm1vZGVsXCIpO1xuICAgIH1cbiAgfSwgW2FjdGlvbiwgbW9kZWxdKTtcblxuICBjb25zdCBvbkNsZWFyID0gKCkgPT4ge1xuICAgIGlmICh0YWJsZVJlZnJlc2hpbmcpIHJldHVybjtcbiAgICBzZXRTZWFyY2hFcnJvcih1bmRlZmluZWQpO1xuICAgIHNldFBhcmFtcyhbXSk7XG4gICAgc2V0T2Zmc2V0KDApO1xuICAgIHNldFBhZ2UoMSk7XG4gICAgc2V0TGltaXQobGltaXRGcm9tQWN0aW9uIHx8IERFRkFVTFRfU0VBUkNIX0xJTUlUKTtcbiAgfTtcblxuICBjb25zdCBvblN1Ym1pdCA9ICh7XG4gICAgcGFyYW1zOiBuZXdQYXJhbXMsXG4gICAgbGltaXQ6IG5ld0xpbWl0LFxuICAgIG9mZnNldDogbmV3T2Zmc2V0LFxuICB9OiB7XG4gICAgcGFyYW1zOiBhbnk7XG4gICAgbGltaXQ6IG51bWJlcjtcbiAgICBvZmZzZXQ6IG51bWJlcjtcbiAgfSkgPT4ge1xuICAgIGlmICh0YWJsZVJlZnJlc2hpbmcpIHJldHVybjtcbiAgICBzZXRTZWFyY2hGaWx0ZXJMb2FkaW5nKHRydWUpO1xuICAgIHNldFNlYXJjaEVycm9yKHVuZGVmaW5lZCk7XG4gICAgc2V0UGFnZSgxKTtcbiAgICBpZiAobmV3TGltaXQpIHNldExpbWl0KG5ld0xpbWl0KTtcbiAgICBpZiAobmV3T2Zmc2V0KSBzZXRPZmZzZXQobmV3T2Zmc2V0KTtcbiAgICBzZXRQYXJhbXMobmV3UGFyYW1zKTtcbiAgfTtcblxuICBjb25zdCBvblJvd0NsaWNrZWRIYW5kbGVyID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICBvblJvd0NsaWNrZWQoe1xuICAgICAgaWQsXG4gICAgICBtb2RlbDogY3VycmVudE1vZGVsISxcbiAgICAgIGZvcm1WaWV3OiBmb3JtVmlldyEsXG4gICAgICB0cmVlVmlldzogdHJlZVZpZXchLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNvbnRlbnQgPSAoKSA9PiB7XG4gICAgaWYgKCF0cmVlVmlldyB8fCAhZm9ybVZpZXcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8U2VhcmNoRmlsdGVyXG4gICAgICAgICAgZmllbGRzPXt7IC4uLnRyZWVWaWV3LmZpZWxkcywgLi4uZm9ybVZpZXcuZmllbGRzIH19XG4gICAgICAgICAgc2VhcmNoRmllbGRzPXtmb3JtVmlldy5zZWFyY2hfZmllbGRzfVxuICAgICAgICAgIG9uQ2xlYXI9e29uQ2xlYXJ9XG4gICAgICAgICAgbGltaXQ9e2xpbWl0fVxuICAgICAgICAgIG9mZnNldD17b2Zmc2V0fVxuICAgICAgICAgIGlzU2VhcmNoaW5nPXtzZWFyY2hGaWx0ZXJMb2FkaW5nfVxuICAgICAgICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICAgICAgLz5cbiAgICAgICAge3NlYXJjaEVycm9yICYmIChcbiAgICAgICAgICA8QWxlcnQgY2xhc3NOYW1lPVwibXQtMTBcIiBtZXNzYWdlPXtzZWFyY2hFcnJvcn0gdHlwZT1cImVycm9yXCIgYmFubmVyIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMTBcIiAvPlxuICAgICAgICA8VHJlZVxuICAgICAgICAgIHRvdGFsPXt0b3RhbEl0ZW1zfVxuICAgICAgICAgIGxpbWl0PXtsaW1pdH1cbiAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgIHRyZWVWaWV3PXt0cmVlVmlld31cbiAgICAgICAgICByZXN1bHRzPXtyZXN1bHRzfVxuICAgICAgICAgIG9uUmVxdWVzdFBhZ2VDaGFuZ2U9e29uUmVxdWVzdFBhZ2VDaGFuZ2V9XG4gICAgICAgICAgbG9hZGluZz17dGFibGVSZWZyZXNoaW5nfVxuICAgICAgICAgIG9uUm93Q2xpY2tlZD17b25Sb3dDbGlja2VkSGFuZGxlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgaWYgKGluaXRpYWxFcnJvcikge1xuICAgIHJldHVybiAoXG4gICAgICA8QWxlcnQgY2xhc3NOYW1lPVwibXQtMTBcIiBtZXNzYWdlPXtpbml0aWFsRXJyb3J9IHR5cGU9XCJlcnJvclwiIGJhbm5lciAvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gaXNMb2FkaW5nID8gPFNwaW4gLz4gOiBjb250ZW50KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFRyZWU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgVHJlZSBmcm9tIFwiQC93aWRnZXRzL3ZpZXdzL1RyZWVcIjtcbmltcG9ydCB7IEZvcm1WaWV3LCBUcmVlVmlldyB9IGZyb20gXCJAL3R5cGVzL2luZGV4XCI7XG5pbXBvcnQgQ29ubmVjdGlvblByb3ZpZGVyIGZyb20gXCJAL0Nvbm5lY3Rpb25Qcm92aWRlclwiO1xuXG50eXBlIE9uUm93Q2xpY2tlZERhdGEgPSB7XG4gIGlkOiBudW1iZXI7XG4gIG1vZGVsOiBzdHJpbmc7XG4gIGZvcm1WaWV3OiBGb3JtVmlldztcbiAgdHJlZVZpZXc6IFRyZWVWaWV3O1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgaWRzOiBBcnJheTxudW1iZXI+O1xuICBtb2RlbDogc3RyaW5nO1xuICBmb3JtVmlldzogRm9ybVZpZXc7XG4gIHRyZWVWaWV3OiBUcmVlVmlldztcbiAgb25Sb3dDbGlja2VkOiAoZGF0YTogT25Sb3dDbGlja2VkRGF0YSkgPT4gdm9pZDtcbn07XG5cbmZ1bmN0aW9uIFNpbXBsZVRyZWUocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgaWRzLCBtb2RlbCwgdHJlZVZpZXcsIGZvcm1WaWV3LCBvblJvd0NsaWNrZWQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIGNvbnN0IFt0YWJsZVJlZnJlc2hpbmcsIHNldFRhYmxlUmVmcmVzaGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgcmVhZE9iamVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgdmFsdWVzID0gYXdhaXQgQ29ubmVjdGlvblByb3ZpZGVyLmdldEhhbmRsZXIoKS5yZWFkT2JqZWN0cyh7XG4gICAgICBhcmNoOiB0cmVlVmlldy5hcmNoLFxuICAgICAgbW9kZWwsXG4gICAgICBpZHMsXG4gICAgfSk7XG5cbiAgICBzZXRSZXN1bHRzKHZhbHVlcyk7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hSZXN1bHRzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRUYWJsZVJlZnJlc2hpbmcodHJ1ZSk7XG4gICAgICBhd2FpdCByZWFkT2JqZWN0cygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRFcnJvcihlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFRhYmxlUmVmcmVzaGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hSZXN1bHRzKCk7XG4gIH0sIFtpZHMsIG1vZGVsXSk7XG5cbiAgY29uc3Qgb25Sb3dDbGlja2VkSGFuZGxlciA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgb25Sb3dDbGlja2VkKHtcbiAgICAgIGlkLFxuICAgICAgbW9kZWwsXG4gICAgICBmb3JtVmlldyxcbiAgICAgIHRyZWVWaWV3LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNvbnRlbnQgPSAoKSA9PiB7XG4gICAgaWYgKCF0cmVlVmlldyB8fCAhZm9ybVZpZXcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8VHJlZVxuICAgICAgICAgIHRvdGFsPXtpZHMubGVuZ3RofVxuICAgICAgICAgIGxpbWl0PXtpZHMubGVuZ3RofVxuICAgICAgICAgIHRyZWVWaWV3PXt0cmVlVmlld31cbiAgICAgICAgICByZXN1bHRzPXtyZXN1bHRzfVxuICAgICAgICAgIGxvYWRpbmc9e3RhYmxlUmVmcmVzaGluZ31cbiAgICAgICAgICBvblJvd0NsaWNrZWQ9e29uUm93Q2xpY2tlZEhhbmRsZXJ9XG4gICAgICAgICAgc2hvd1BhZ2luYXRpb249e2ZhbHNlfVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPEFsZXJ0IGNsYXNzTmFtZT1cIm10LTEwXCIgbWVzc2FnZT17ZXJyb3J9IHR5cGU9XCJlcnJvclwiIGJhbm5lciAvPjtcbiAgfVxuXG4gIHJldHVybiBjb250ZW50KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZVRyZWU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIFBhZ2luYXRpb24sIENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IGdldFRyZWUsIGdldFRhYmxlQ29sdW1ucywgZ2V0VGFibGVJdGVtcyB9IGZyb20gXCJAL2hlbHBlcnMvdHJlZUhlbHBlclwiO1xuXG5pbXBvcnQgeyBTdHJpbmdzLCBUcmVlVmlldywgQ29sdW1uIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IGdldExvY2FsaXplZFN0cmluZyB9IGZyb20gXCJAL2NvbnRleHQvTG9jYWxlc0NvbnRleHRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdG90YWw6IG51bWJlcjtcbiAgbGltaXQ6IG51bWJlcjtcbiAgcGFnZT86IG51bWJlcjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgdHJlZVZpZXc6IFRyZWVWaWV3O1xuICByZXN1bHRzOiBBcnJheTxhbnk+O1xuICBzaG93UGFnaW5hdGlvbj86IGJvb2xlYW47XG4gIG9uUmVxdWVzdFBhZ2VDaGFuZ2U/OiAocGFnZTogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikgPT4gdm9pZDtcbiAgb25Sb3dDbGlja2VkPzogKGlkOiBudW1iZXIpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBzdHJpbmdzOiBTdHJpbmdzID0ge1xuICBub19yZXN1bHRzOiBcIk5vIHJlc3VsdHNcIixcbiAgc3VtbWFyeTogXCJTaG93aW5nIHJlZ2lzdGVycyBmcm9tIHtmcm9tfSB0byB7dG99IG9mIHt0b3RhbH0gcmVnaXN0ZXJzXCIsXG59O1xuXG5mdW5jdGlvbiBUcmVlKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHtcbiAgICBwYWdlID0gMSxcbiAgICBsaW1pdCxcbiAgICB0b3RhbCxcbiAgICB0cmVlVmlldyxcbiAgICByZXN1bHRzLFxuICAgIG9uUmVxdWVzdFBhZ2VDaGFuZ2UsXG4gICAgbG9hZGluZyxcbiAgICBvblJvd0NsaWNrZWQsXG4gICAgc2hvd1BhZ2luYXRpb24gPSB0cnVlLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZTxBcnJheTxhbnk+PihbXSk7XG4gIGNvbnN0IFtjb2x1bW5zLCBzZXRDb2x1bW5zXSA9IHVzZVN0YXRlPEFycmF5PENvbHVtbj4+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRyZWUgPSBnZXRUcmVlKHRyZWVWaWV3KTtcbiAgICBjb25zdCBib29sZWFuQ29tcG9uZW50Rm4gPSAoYm9vbGVhbkZpZWxkOiBib29sZWFuKTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcbiAgICAgIHJldHVybiA8Q2hlY2tib3ggZGVmYXVsdENoZWNrZWQ9e2Jvb2xlYW5GaWVsZH0gZGlzYWJsZWQgLz47XG4gICAgfTtcbiAgICBjb25zdCBjb2x1bW5zID0gZ2V0VGFibGVDb2x1bW5zKHRyZWUsIGJvb2xlYW5Db21wb25lbnRGbik7XG4gICAgY29uc3QgaXRlbXMgPSBnZXRUYWJsZUl0ZW1zKHRyZWUsIHJlc3VsdHMpO1xuXG4gICAgc2V0Q29sdW1ucyhjb2x1bW5zKTtcbiAgICBzZXRJdGVtcyhpdGVtcyk7XG4gIH0sIFt0cmVlVmlldywgcmVzdWx0c10pO1xuXG4gIGNvbnN0IGZyb20gPSAocGFnZSAtIDEpICogbGltaXQgKyAxO1xuICBjb25zdCB0byA9IGZyb20gLSAxICsgaXRlbXMubGVuZ3RoO1xuICBjb25zdCBzdW1tYXJ5ID0gbG9hZGluZ1xuICAgID8gbnVsbFxuICAgIDogdG90YWwgPT09IDBcbiAgICA/IGdldExvY2FsaXplZFN0cmluZyhcIm5vX3Jlc3VsdHNcIiwgc3RyaW5ncylcbiAgICA6IGdldExvY2FsaXplZFN0cmluZyhcInN1bW1hcnlcIiwgc3RyaW5ncylcbiAgICAgICAgLnJlcGxhY2UoXCJ7ZnJvbX1cIiwgZnJvbT8udG9TdHJpbmcoKSlcbiAgICAgICAgLnJlcGxhY2UoXCJ7dG99XCIsIHRvPy50b1N0cmluZygpKVxuICAgICAgICAucmVwbGFjZShcInt0b3RhbH1cIiwgdG90YWw/LnRvU3RyaW5nKCkpO1xuXG4gIGNvbnN0IHBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgaWYgKCFzaG93UGFnaW5hdGlvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvYWRpbmcgPyBudWxsIDogKFxuICAgICAgPD5cbiAgICAgICAge3N1bW1hcnl9XG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgdG90YWw9e3RvdGFsfVxuICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cbiAgICAgICAgICBjdXJyZW50PXtwYWdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInBiLTUgcHQtNVwiXG4gICAgICAgICAgc2hvd1NpemVDaGFuZ2VyPXtmYWxzZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25SZXF1ZXN0UGFnZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3BhZ2luYXRpb24oKX1cbiAgICAgIDxUYWJsZVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBkYXRhU291cmNlPXtpdGVtc31cbiAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIHJvd0NsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHNlbGVjdC1ub25lXCJcbiAgICAgICAgb25Sb3c9eyhyZWNvcmQpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25Eb3VibGVDbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAob25Sb3dDbGlja2VkKSBvblJvd0NsaWNrZWQocmVjb3JkLmlkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4iLCJpbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgRGF0ZVJhbmdlUGlja2VyID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9IGxheW91dD17XCJ2ZXJ0aWNhbFwifT5cbiAgICAgIDxEYXRlUGlja2VyLlJhbmdlUGlja2VyIGZvcm1hdD17XCJERC9NTS9ZWVlZXCJ9PjwvRGF0ZVBpY2tlci5SYW5nZVBpY2tlcj5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCB7IERhdGVQaWNrZXIsIFRpbWVQaWNrZXIgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBGaWVsZCBhcyBGaWVsZE9vdWksIExhYmVsIGFzIExhYmVsT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0xhYmVsXCI7XG5cbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuZXhwb3J0IGNvbnN0IERhdGVUaW1lUmFuZ2VQaWNrZXIgPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSwgc2hvd0xhYmVsID0gZmFsc2UgfSA9IHByb3BzO1xuICBjb25zdCB7IGxhYmVsLCBpZCB9ID0gb291aTtcblxuICBjb25zdCBmaWVsZHMgPSBbXG4gICAgbmV3IEZpZWxkT291aSh7XG4gICAgICBuYW1lOiBpZCArIFwiI2RhdGVcIixcbiAgICAgIGxhYmVsOiBcIlwiLFxuICAgIH0pLFxuICAgIG5ldyBGaWVsZE9vdWkoe1xuICAgICAgbmFtZTogaWQgKyBcIiN0aW1lXCIsXG4gICAgICBsYWJlbDogXCJcIixcbiAgICB9KSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd0xhYmVsICYmIChcbiAgICAgICAgPExhYmVsXG4gICAgICAgICAgb291aT17XG4gICAgICAgICAgICBuZXcgTGFiZWxPb3VpKHtcbiAgICAgICAgICAgICAgbmFtZTogaWQgKyBcIl9sYWJlbFwiLFxuICAgICAgICAgICAgICBzdHJpbmc6IGxhYmVsLFxuICAgICAgICAgICAgICBoZWxwOiBvb3VpLnRvb2x0aXAsXG4gICAgICAgICAgICAgIGZpZWxkRm9yTGFiZWw6IGlkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxpZ249e1wibGVmdFwifVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxSb3cgYWxpZ249e1wiYm90dG9tXCJ9IGNsYXNzTmFtZT1cInAtMFwiPlxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1yLTJcIj5cbiAgICAgICAgICA8RmllbGQgey4uLnByb3BzfSBvb3VpPXtmaWVsZHNbMF19IHNob3dMYWJlbD17ZmFsc2V9PlxuICAgICAgICAgICAgPERhdGVQaWNrZXIuUmFuZ2VQaWNrZXJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02MFwiXG4gICAgICAgICAgICAgIGZvcm1hdD17XCJERC9NTS9ZWVlZXCJ9XG4gICAgICAgICAgICA+PC9EYXRlUGlja2VyLlJhbmdlUGlja2VyPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sPlxuICAgICAgICAgIDxGaWVsZCB7Li4ucHJvcHN9IG9vdWk9e2ZpZWxkc1sxXX0gc2hvd0xhYmVsPXtmYWxzZX0+XG4gICAgICAgICAgICA8VGltZVBpY2tlci5SYW5nZVBpY2tlclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYwXCJcbiAgICAgICAgICAgICAgZm9ybWF0PXtcIkhIOm1tXCJ9XG4gICAgICAgICAgICA+PC9UaW1lUGlja2VyLlJhbmdlUGlja2VyPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgRmxvYXQgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvRmxvYXRcIjtcbmltcG9ydCB7IEludGVnZXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvSW50ZWdlclwiO1xuaW1wb3J0IHsgSW50ZWdlciBhcyBJbnRlZ2VyT291aSwgTGFiZWwgYXMgTGFiZWxPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvTGFiZWxcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogYW55O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBhaXJGaWVsZHMocHJvcHM6IFdpZGdldFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBvb3VpLCBzaG93TGFiZWwgfSA9IHByb3BzO1xuICBjb25zdCB7IGlkLCBsYWJlbCwgdG9vbHRpcCB9ID0gb291aTtcbiAgY29uc3QgV2lkZ2V0ID0gb291aSBpbnN0YW5jZW9mIEludGVnZXJPb3VpID8gSW50ZWdlciA6IEZsb2F0O1xuXG4gIGNvbnN0IGdldFdpZGdldCA9IChzdWZmaXg6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8V2lkZ2V0XG4gICAgICAgIG9vdWk9e3tcbiAgICAgICAgICAuLi4ob291aSBhcyBhbnkpLFxuICAgICAgICAgIGlkOiBpZCArIHN1ZmZpeCxcbiAgICAgICAgICBsYWJlbDogXCJcIixcbiAgICAgICAgICB0b29sdGlwOiB1bmRlZmluZWQsXG4gICAgICAgIH19XG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd0xhYmVsICYmIChcbiAgICAgICAgPExhYmVsXG4gICAgICAgICAgb291aT17XG4gICAgICAgICAgICBuZXcgTGFiZWxPb3VpKHtcbiAgICAgICAgICAgICAgbmFtZTogaWQgKyBcIl9sYWJlbFwiLFxuICAgICAgICAgICAgICBzdHJpbmc6IGxhYmVsLFxuICAgICAgICAgICAgICBoZWxwOiB0b29sdGlwLFxuICAgICAgICAgICAgICBmaWVsZEZvckxhYmVsOiBpZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGFsaWduPXtcImxlZnRcIn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8Um93IGFsaWduPXtcImJvdHRvbVwifSBjbGFzc05hbWU9XCJtdC0wXCI+XG4gICAgICAgIDxDb2w+e2dldFdpZGdldChcIiNmcm9tXCIpfTwvQ29sPlxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInBiLTFcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC0yIHByLTIgaC1mdWxsXCI+IC0gPC9zcGFuPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbD57Z2V0V2lkZ2V0KFwiI3RvXCIpfTwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBSb3csIENvbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7XG4gIERvd25PdXRsaW5lZCxcbiAgVXBPdXRsaW5lZCxcbiAgU2VhcmNoT3V0bGluZWQsXG4gIENsZWFyT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5pbXBvcnQge1xuICBMb2NhbGVzQ29udGV4dCxcbiAgTG9jYWxlc0NvbnRleHRUeXBlLFxufSBmcm9tIFwiQC9jb250ZXh0L0xvY2FsZXNDb250ZXh0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFkdmFuY2VkRmlsdGVyOiBib29sZWFuO1xuICBpc1NlYXJjaGluZzogYm9vbGVhbjtcbiAgb25BZHZhbmNlZEZpbHRlclRvZ2dsZTogKCkgPT4gdm9pZDtcbiAgb25DbGVhcjogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hCb3R0b21CYXIocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIG9uQWR2YW5jZWRGaWx0ZXJUb2dnbGUsXG4gICAgYWR2YW5jZWRGaWx0ZXIsXG4gICAgb25DbGVhcixcbiAgICBpc1NlYXJjaGluZyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgZ2V0U3RyaW5nIH0gPSB1c2VDb250ZXh0KExvY2FsZXNDb250ZXh0KSBhcyBMb2NhbGVzQ29udGV4dFR5cGU7XG5cbiAgcmV0dXJuIChcbiAgICA8Um93PlxuICAgICAgPENvbCBzcGFuPXsxMn0gY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB0LTQgcGItMiBwbC0yXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQteHNcIiBvbkNsaWNrPXtvbkFkdmFuY2VkRmlsdGVyVG9nZ2xlfT5cbiAgICAgICAgICB7YWR2YW5jZWRGaWx0ZXIgPyAoXG4gICAgICAgICAgICA8VXBPdXRsaW5lZCBjbGFzc05hbWU9XCJwci0xXCIgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPERvd25PdXRsaW5lZCBjbGFzc05hbWU9XCJwci0xXCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthZHZhbmNlZEZpbHRlclxuICAgICAgICAgICAgPyBnZXRTdHJpbmcoXCJzaW1wbGVfc2VhcmNoXCIpXG4gICAgICAgICAgICA6IGdldFN0cmluZyhcImFkdmFuY2VkX3NlYXJjaFwiKX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9Db2w+XG4gICAgICA8Q29sIHNwYW49ezEyfSBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IHBiLTJcIj5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtci01XCIgaWNvbj17PENsZWFyT3V0bGluZWQgLz59IG9uQ2xpY2s9e29uQ2xlYXJ9PlxuICAgICAgICAgIENsZWFyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWNvbj17PFNlYXJjaE91dGxpbmVkIC8+fVxuICAgICAgICAgIGxvYWRpbmc9e2lzU2VhcmNoaW5nfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgID5cbiAgICAgICAgICB7Z2V0U3RyaW5nKFwic2VhcmNoXCIpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ2hhciB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9DaGFyXCI7XG5pbXBvcnQgeyBTZWxlY3Rpb24gfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvU2VsZWN0aW9uXCI7XG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIgfSBmcm9tIFwiLi9EYXRlUmFuZ2VQaWNrZXJcIjtcbmltcG9ydCB7IERhdGVUaW1lUmFuZ2VQaWNrZXIgfSBmcm9tIFwiLi9EYXRlVGltZVJhbmdlUGlja2VyXCI7XG5pbXBvcnQgeyBQYWlyRmllbGRzIH0gZnJvbSBcIi4vUGFpckZpZWxkc1wiO1xuXG5pbXBvcnQgeyBMb2NhbGVzQ29udGV4dCwgTG9jYWxlc0NvbnRleHRUeXBlIH0gZnJvbSBcIkAvY29udGV4dC9Mb2NhbGVzQ29udGV4dFwiO1xuXG5pbXBvcnQgeyBGaWVsZCwgU2VsZWN0aW9uIGFzIFNlbGVjdGlvbk9vdWkgfSBmcm9tIFwib291aVwiO1xuXG50eXBlIFByb3BzID0ge1xuICBmaWVsZDogRmllbGQ7XG59O1xuXG5jb25zdCB0eXBlcyA9IHtcbiAgdGV4dDogXCJUZXh0XCIsXG4gIG1hbnkyb25lOiBcIk1hbnkyb25lXCIsXG4gIGNoYXI6IFwiQ2hhclwiLFxuICBib29sZWFuOiBcIkJvb2xlYW5cIixcbiAgc2VsZWN0aW9uOiBcIlNlbGVjdGlvblwiLFxuICBmbG9hdDogXCJGbG9hdFwiLFxuICBmbG9hdF90aW1lOiBcIkZsb2F0VGltZVwiLFxuICBwcm9ncmVzc2JhcjogXCJQcm9ncmVzc0JhclwiLFxuICBpbnRlZ2VyOiBcIkludGVnZXJcIixcbiAgZGF0ZTogXCJEYXRlXCIsXG4gIGRhdGV0aW1lOiBcIkRhdGVUaW1lXCIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoRmllbGQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgZmllbGQgfSA9IHByb3BzO1xuICBmaWVsZC5yZWFkT25seSA9IGZhbHNlO1xuICBmaWVsZC5yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHsgZ2V0U3RyaW5nIH0gPSB1c2VDb250ZXh0KExvY2FsZXNDb250ZXh0KSBhcyBMb2NhbGVzQ29udGV4dFR5cGU7XG5cbiAgY29uc3Qgd2lkZ2V0VHlwZSA9IGZpZWxkLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgc3dpdGNoICh3aWRnZXRUeXBlKSB7XG4gICAgY2FzZSB0eXBlcy5ib29sZWFuOiB7XG4gICAgICBjb25zdCBvb3VpID0gbmV3IFNlbGVjdGlvbk9vdWkoe1xuICAgICAgICBuYW1lOiBmaWVsZC5faWQsXG4gICAgICAgIHN0cmluZzogZmllbGQubGFiZWwsXG4gICAgICAgIHNlbGVjdGlvbjogW1xuICAgICAgICAgIFtcInRydWVcIiwgZ2V0U3RyaW5nKFwidHJ1ZVwiKV0sXG4gICAgICAgICAgW1wiZmFsc2VcIiwgZ2V0U3RyaW5nKFwiZmFsc2VcIildLFxuICAgICAgICBdLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiA8U2VsZWN0aW9uIGxheW91dD1cInZlcnRpY2FsXCIgb291aT17b291aX0gc2hvd0xhYmVsIC8+O1xuICAgIH1cbiAgICBjYXNlIHR5cGVzLmZsb2F0OlxuICAgIGNhc2UgdHlwZXMucHJvZ3Jlc3NiYXI6XG4gICAgY2FzZSB0eXBlcy5mbG9hdF90aW1lOlxuICAgIGNhc2UgdHlwZXMuaW50ZWdlcjoge1xuICAgICAgcmV0dXJuIDxQYWlyRmllbGRzIG9vdWk9e2ZpZWxkfSBzaG93TGFiZWwgLz47XG4gICAgfVxuICAgIGNhc2UgdHlwZXMuZGF0ZToge1xuICAgICAgcmV0dXJuIDxEYXRlUmFuZ2VQaWNrZXIgb291aT17ZmllbGR9IGxheW91dD1cInZlcnRpY2FsXCIgc2hvd0xhYmVsIC8+O1xuICAgIH1cbiAgICBjYXNlIHR5cGVzLmRhdGV0aW1lOiB7XG4gICAgICByZXR1cm4gPERhdGVUaW1lUmFuZ2VQaWNrZXIgb291aT17ZmllbGR9IGxheW91dD1cInZlcnRpY2FsXCIgc2hvd0xhYmVsIC8+O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gPENoYXIgb291aT17ZmllbGR9IGxheW91dD1cInZlcnRpY2FsXCIgc2hvd0xhYmVsIC8+O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5pbXBvcnQgXCJAL3RhaWx3aW5kLmdlbmVyYXRlZC5jc3NcIjtcblxuaW1wb3J0IHsgU2VhcmNoRmlsdGVyIGFzIFNlYXJjaEZpbHRlck9vdWksIENvbnRhaW5lciwgRmllbGQgfSBmcm9tIFwib291aVwiO1xuXG5pbXBvcnQgeyBTZWFyY2hGaWVsZCB9IGZyb20gXCIuL1NlYXJjaEZpZWxkXCI7XG5pbXBvcnQgeyBTZWFyY2hCb3R0b21CYXIgfSBmcm9tIFwiLi9TZWFyY2hCb3R0b21CYXJcIjtcbmltcG9ydCBMb2NhbGVzUHJvdmlkZXIgZnJvbSBcIkAvY29udGV4dC9Mb2NhbGVzQ29udGV4dFwiO1xuaW1wb3J0IHsgU3RyaW5ncywgU2VhcmNoRmllbGRzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IFNlYXJjaFBhcmFtcyB9IGZyb20gXCIuL1NlYXJjaFBhcmFtc1wiO1xuXG5pbXBvcnQgeyBnZXRQYXJhbXNGb3JGaWVsZHMgfSBmcm9tIFwiQC9oZWxwZXJzL3NlYXJjaEZpbHRlckhlbHBlclwiO1xuXG50eXBlIFByb3BzID0ge1xuICBmaWVsZHM6IGFueTtcbiAgc2VhcmNoRmllbGRzOiBTZWFyY2hGaWVsZHM7XG4gIG9uQ2xlYXI6ICgpID0+IHZvaWQ7XG4gIG9uU3VibWl0OiAodmFsdWVzOiBhbnkpID0+IHZvaWQ7XG4gIGlzU2VhcmNoaW5nOiBib29sZWFuO1xuICBsaW1pdDogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcbn07XG5cbmNvbnN0IHN0cmluZ3M6IFN0cmluZ3MgPSB7XG4gIHRydWU6IFwiWWVzXCIsXG4gIGZhbHNlOiBcIk5vXCIsXG4gIHNpbXBsZV9zZWFyY2g6IFwiU2ltcGxlIHNlYXJjaFwiLFxuICBhZHZhbmNlZF9zZWFyY2g6IFwiQWR2YW5jZWQgc2VhcmNoXCIsXG4gIHNlYXJjaDogXCJTZWFyY2hcIixcbiAgcGFyYW1ldGVyczogXCJQYXJhbWV0ZXJzXCIsXG4gIGxpbWl0OiBcIkxpbWl0XCIsXG4gIGZpcnN0OiBcIkZpcnN0XCIsXG59O1xuXG5mdW5jdGlvbiBTZWFyY2hGaWx0ZXIocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIGZpZWxkcyxcbiAgICBzZWFyY2hGaWVsZHMsXG4gICAgb25DbGVhcixcbiAgICBvblN1Ym1pdCxcbiAgICBpc1NlYXJjaGluZyxcbiAgICBvZmZzZXQsXG4gICAgbGltaXQsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbc2ltcGxlU2VhcmNoRmllbGRzLCBzZXRTaW1wbGVTZWFyY2hGaWVsZHNdID0gdXNlU3RhdGU8Q29udGFpbmVyPigpO1xuICBjb25zdCBbYWR2YW5jZWRTZWFyY2hGaWVsZHMsIHNldEFkdmFuY2VkU2VhcmNoRmllbGRzXSA9IHVzZVN0YXRlPENvbnRhaW5lcj4oKTtcbiAgY29uc3QgW2FkdmFuY2VkRmlsdGVyLCBzZXRBZHZhbmNlZEZpbHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKCk7XG5cbiAgY29uc3QgZ2V0Um93c0FuZENvbHMgPSAoKSA9PiB7XG4gICAgaWYgKCFhZHZhbmNlZFNlYXJjaEZpZWxkcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkcyA9IGFkdmFuY2VkRmlsdGVyID8gYWR2YW5jZWRTZWFyY2hGaWVsZHMgOiBzaW1wbGVTZWFyY2hGaWVsZHM7XG4gICAgY29uc3Qgcm93cyA9IGZpZWxkcz8ucm93cztcblxuICAgIHJldHVybiByb3dzPy5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJvdyBrZXk9e2l9PlxuICAgICAgICAgIHtyb3cubWFwKChpdGVtLCBqKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q29sIHhzPXsyNH0gY2xhc3NOYW1lPVwicC0yXCIgeGw9ezZ9IGtleT17an0+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEZpZWxkIGZpZWxkPXtpdGVtIGFzIEZpZWxkfSAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvUm93PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZvcm0ucmVzZXRGaWVsZHMoKTtcbiAgICBzZXRBZHZhbmNlZEZpbHRlcihmYWxzZSk7XG4gICAgY29uc3Qgc2ZvID0gbmV3IFNlYXJjaEZpbHRlck9vdWkoc2VhcmNoRmllbGRzLCBmaWVsZHMpO1xuICAgIHNmby5wYXJzZSgpO1xuICAgIHNldFNpbXBsZVNlYXJjaEZpZWxkcyhzZm8uX3NpbXBsZVNlYXJjaENvbnRhaW5lcik7XG4gICAgc2V0QWR2YW5jZWRTZWFyY2hGaWVsZHMoc2ZvLl9hZHZhbmNlZFNlYXJjaENvbnRhaW5lcik7XG4gIH0sIFtmaWVsZHMsIHNlYXJjaEZpZWxkc10pO1xuXG4gIGNvbnN0IHJvd3MgPSBnZXRSb3dzQW5kQ29scygpO1xuXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlczogYW55KSA9PiB7XG4gICAgY29uc3QgeyBsaW1pdCwgb2Zmc2V0IH0gPSB2YWx1ZXM7XG4gICAgZGVsZXRlIHZhbHVlcy5vZmZzZXQ7XG4gICAgZGVsZXRlIHZhbHVlcy5saW1pdDtcbiAgICBjb25zdCBuZXdQYXJhbXMgPSBnZXRQYXJhbXNGb3JGaWVsZHModmFsdWVzLCBmaWVsZHMpO1xuXG4gICAgb25TdWJtaXQoeyBwYXJhbXM6IG5ld1BhcmFtcywgb2Zmc2V0LCBsaW1pdCB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMb2NhbGVzUHJvdmlkZXIgc3RyaW5ncz17c3RyaW5nc30+XG4gICAgICA8Rm9ybVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCByb3VuZGVkIHAtM1wiXG4gICAgICAgIGZvcm09e2Zvcm19XG4gICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBvZmZzZXQsIGxpbWl0IH19XG4gICAgICA+XG4gICAgICAgIHtyb3dzfVxuICAgICAgICB7YWR2YW5jZWRGaWx0ZXIgJiYgPFNlYXJjaFBhcmFtcyAvPn1cbiAgICAgICAgPFNlYXJjaEJvdHRvbUJhclxuICAgICAgICAgIGFkdmFuY2VkRmlsdGVyPXthZHZhbmNlZEZpbHRlcn1cbiAgICAgICAgICBvbkFkdmFuY2VkRmlsdGVyVG9nZ2xlPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRBZHZhbmNlZEZpbHRlcighYWR2YW5jZWRGaWx0ZXIpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25DbGVhcj17KCkgPT4ge1xuICAgICAgICAgICAgZm9ybS5yZXNldEZpZWxkcygpO1xuICAgICAgICAgICAgb25DbGVhcigpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgaXNTZWFyY2hpbmc9e2lzU2VhcmNoaW5nfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvTG9jYWxlc1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGaWx0ZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBJbnRlZ2VyIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0ludGVnZXJcIjtcbmltcG9ydCB7IFJvdywgU3BhY2UgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgSW50ZWdlciBhcyBJbnRlZ2VyT291aSB9IGZyb20gXCJvb3VpXCI7XG5cbmltcG9ydCB7IExvY2FsZXNDb250ZXh0LCBMb2NhbGVzQ29udGV4dFR5cGUgfSBmcm9tIFwiQC9jb250ZXh0L0xvY2FsZXNDb250ZXh0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hQYXJhbXMoKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBnZXRTdHJpbmcgfSA9IHVzZUNvbnRleHQoTG9jYWxlc0NvbnRleHQpIGFzIExvY2FsZXNDb250ZXh0VHlwZTtcblxuICBjb25zdCBsaW1pdE9vdWkgPSBuZXcgSW50ZWdlck9vdWkoeyBuYW1lOiBcImxpbWl0XCIgfSk7XG4gIGNvbnN0IG9mZnNldE9vdWkgPSBuZXcgSW50ZWdlck9vdWkoeyBuYW1lOiBcIm9mZnNldFwiIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMiBwdC0yXCI+XG4gICAgICA8Um93IGtleT17XCJjb3VudF9wYXJhbXNcIn0+e2dldFN0cmluZyhcInBhcmFtZXRlcnNcIil9PC9Sb3c+XG4gICAgICA8U3BhY2UgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAge2dldFN0cmluZyhcImxpbWl0XCIpICsgXCIgOlwifVxuICAgICAgICA8SW50ZWdlciBvb3VpPXtsaW1pdE9vdWl9IC8+XG4gICAgICAgIHtnZXRTdHJpbmcoXCJmaXJzdFwiKSArIFwiIDpcIn1cbiAgICAgICAgPEludGVnZXIgb291aT17b2Zmc2V0T291aX0gLz5cbiAgICAgIDwvU3BhY2U+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2FudF9kZXNpZ25faWNvbnNfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfYW50ZF9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9