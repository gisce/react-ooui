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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL2lzLXByb3AtdmFsaWQvZGlzdC9pcy1wcm9wLXZhbGlkLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vbWVtb2l6ZS9kaXN0L21lbW9pemUuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi91bml0bGVzcy9kaXN0L3VuaXRsZXNzLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvQm9vbGVhbi5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvQ2hhci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvQ29udGFpbmVyV2lkZ2V0LmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0RhdGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRmllbGQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRmxvYXQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvRmxvYXRUaW1lLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L0Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvR3JvdXAuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9MYWJlbC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9NYW55Mm1hbnkuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvTWFueTJvbmUuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvTmV3TGluZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9Ob3RlYm9vay5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9PbmUybWFueS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9QYWdlLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1NlYXJjaEZpbHRlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9TZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvU2VwYXJhdG9yLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvb291aS9kaXN0L1RleHQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvVHJlZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9XaWRnZXQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvV2lkZ2V0RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL29vdWkvZGlzdC9oZWxwZXJzL25vZGVQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9vb3VpL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc3BvbnNpdmUvZGlzdC9yZWFjdC1yZXNwb25zaXZlLmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvc2hhbGxvd2VxdWFsL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvZGlzdC9zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL0NvbmZpZy50cyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL2NvbW1vbi9GaWVsZC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9jb250ZXh0L0xvY2FsZXNDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL2hlbHBlcnMvY29udGFpbmVySGVscGVyLnRzIiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvaGVscGVycy9zZWFyY2hGaWx0ZXJIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9oZWxwZXJzL3RyZWVIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3VpL0ZpZWxkc2V0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvV2lkZ2V0RmFjdG9yeS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvQm9vbGVhbi50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9DaGFyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9GbG9hdC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvSW50ZWdlci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvTGFiZWwudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL01hbnkyb25lLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvYmFzZS9TZWxlY3Rpb24udHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9iYXNlL1NlcGFyYXRvci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2Jhc2UvVGV4dC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2NvbnRhaW5lcnMvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvY29udGFpbmVycy9Hcm91cC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL2NvbnRhaW5lcnMvTm90ZWJvb2sudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9tb2RhbHMvQ3JlYXRlTW9kYWwudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9tb2RhbHMvRGV0YWlsTW9kYWwudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy9tb2RhbHMvU2VhcmNoTW9kYWwudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9Gb3JtLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3MvVHJlZS50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9EYXRlUmFuZ2VQaWNrZXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvRGF0ZVRpbWVSYW5nZVBpY2tlci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9QYWlyRmllbGRzLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpLy4vc3JjL3dpZGdldHMvdmlld3Mvc2VhcmNoRmlsdGVyL1NlYXJjaEJvdHRvbUJhci50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9TZWFyY2hGaWVsZC50c3giLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS8uL3NyYy93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9TZWFyY2hGaWx0ZXIudHN4Iiwid2VicGFjazovL3JlYWN0LW9vdWkvLi9zcmMvd2lkZ2V0cy92aWV3cy9zZWFyY2hGaWx0ZXIvU2VhcmNoUGFyYW1zLnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnNcIiIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL3JlYWN0LW9vdWkvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3JlYWN0LW9vdWkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWFjdC1vb3VpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVhY3Qtb291aS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlYWN0LW9vdWkvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNWdUM7O0FBRXZDLGs3SEFBazdIOztBQUVsN0gsWUFBWSx5REFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2RyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7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QTtBQUNBO0FBQ0EsMkJBQTJCLEVBQUU7QUFDN0I7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdG1CMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7O0FDakRmOztBQUViLGNBQWMsbUJBQU8sQ0FBQyxrREFBVTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7O0FB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QTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJhbnRkXCIpLCByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJhbnRkXCIsIFwiQGFudC1kZXNpZ24vaWNvbnNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicmVhY3Qtb291aVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwiYW50ZFwiKSwgcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJyZWFjdC1vb3VpXCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0sIHJvb3RbXCJhbnRkXCJdLCByb290W1wiQGFudC1kZXNpZ24vaWNvbnNcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2FudGRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYW50X2Rlc2lnbl9pY29uc19fKSB7XG5yZXR1cm4gIiwiaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciByZWFjdFByb3BzUmVnZXggPSAvXigoY2hpbGRyZW58ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx8a2V5fHJlZnxhdXRvRm9jdXN8ZGVmYXVsdFZhbHVlfGRlZmF1bHRDaGVja2VkfGlubmVySFRNTHxzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmd8c3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nfHZhbHVlTGlua3xhY2NlcHR8YWNjZXB0Q2hhcnNldHxhY2Nlc3NLZXl8YWN0aW9ufGFsbG93fGFsbG93VXNlck1lZGlhfGFsbG93UGF5bWVudFJlcXVlc3R8YWxsb3dGdWxsU2NyZWVufGFsbG93VHJhbnNwYXJlbmN5fGFsdHxhc3luY3xhdXRvQ29tcGxldGV8YXV0b1BsYXl8Y2FwdHVyZXxjZWxsUGFkZGluZ3xjZWxsU3BhY2luZ3xjaGFsbGVuZ2V8Y2hhclNldHxjaGVja2VkfGNpdGV8Y2xhc3NJRHxjbGFzc05hbWV8Y29sc3xjb2xTcGFufGNvbnRlbnR8Y29udGVudEVkaXRhYmxlfGNvbnRleHRNZW51fGNvbnRyb2xzfGNvbnRyb2xzTGlzdHxjb29yZHN8Y3Jvc3NPcmlnaW58ZGF0YXxkYXRlVGltZXxkZWNvZGluZ3xkZWZhdWx0fGRlZmVyfGRpcnxkaXNhYmxlZHxkaXNhYmxlUGljdHVyZUluUGljdHVyZXxkb3dubG9hZHxkcmFnZ2FibGV8ZW5jVHlwZXxmb3JtfGZvcm1BY3Rpb258Zm9ybUVuY1R5cGV8Zm9ybU1ldGhvZHxmb3JtTm9WYWxpZGF0ZXxmb3JtVGFyZ2V0fGZyYW1lQm9yZGVyfGhlYWRlcnN8aGVpZ2h0fGhpZGRlbnxoaWdofGhyZWZ8aHJlZkxhbmd8aHRtbEZvcnxodHRwRXF1aXZ8aWR8aW5wdXRNb2RlfGludGVncml0eXxpc3xrZXlQYXJhbXN8a2V5VHlwZXxraW5kfGxhYmVsfGxhbmd8bGlzdHxsb2FkaW5nfGxvb3B8bG93fG1hcmdpbkhlaWdodHxtYXJnaW5XaWR0aHxtYXh8bWF4TGVuZ3RofG1lZGlhfG1lZGlhR3JvdXB8bWV0aG9kfG1pbnxtaW5MZW5ndGh8bXVsdGlwbGV8bXV0ZWR8bmFtZXxub25jZXxub1ZhbGlkYXRlfG9wZW58b3B0aW11bXxwYXR0ZXJufHBsYWNlaG9sZGVyfHBsYXlzSW5saW5lfHBvc3RlcnxwcmVsb2FkfHByb2ZpbGV8cmFkaW9Hcm91cHxyZWFkT25seXxyZWZlcnJlclBvbGljeXxyZWx8cmVxdWlyZWR8cmV2ZXJzZWR8cm9sZXxyb3dzfHJvd1NwYW58c2FuZGJveHxzY29wZXxzY29wZWR8c2Nyb2xsaW5nfHNlYW1sZXNzfHNlbGVjdGVkfHNoYXBlfHNpemV8c2l6ZXN8c2xvdHxzcGFufHNwZWxsQ2hlY2t8c3JjfHNyY0RvY3xzcmNMYW5nfHNyY1NldHxzdGFydHxzdGVwfHN0eWxlfHN1bW1hcnl8dGFiSW5kZXh8dGFyZ2V0fHRpdGxlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aW5lcnR8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfG9ufHJlc3VsdHN8c2VjdXJpdHl8dW5zZWxlY3RhYmxlfGFjY2VudEhlaWdodHxhY2N1bXVsYXRlfGFkZGl0aXZlfGFsaWdubWVudEJhc2VsaW5lfGFsbG93UmVvcmRlcnxhbHBoYWJldGljfGFtcGxpdHVkZXxhcmFiaWNGb3JtfGFzY2VudHxhdHRyaWJ1dGVOYW1lfGF0dHJpYnV0ZVR5cGV8YXV0b1JldmVyc2V8YXppbXV0aHxiYXNlRnJlcXVlbmN5fGJhc2VsaW5lU2hpZnR8YmFzZVByb2ZpbGV8YmJveHxiZWdpbnxiaWFzfGJ5fGNhbGNNb2RlfGNhcEhlaWdodHxjbGlwfGNsaXBQYXRoVW5pdHN8Y2xpcFBhdGh8Y2xpcFJ1bGV8Y29sb3JJbnRlcnBvbGF0aW9ufGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnN8Y29sb3JQcm9maWxlfGNvbG9yUmVuZGVyaW5nfGNvbnRlbnRTY3JpcHRUeXBlfGNvbnRlbnRTdHlsZVR5cGV8Y3Vyc29yfGN4fGN5fGR8ZGVjZWxlcmF0ZXxkZXNjZW50fGRpZmZ1c2VDb25zdGFudHxkaXJlY3Rpb258ZGlzcGxheXxkaXZpc29yfGRvbWluYW50QmFzZWxpbmV8ZHVyfGR4fGR5fGVkZ2VNb2RlfGVsZXZhdGlvbnxlbmFibGVCYWNrZ3JvdW5kfGVuZHxleHBvbmVudHxleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkfGZpbGx8ZmlsbE9wYWNpdHl8ZmlsbFJ1bGV8ZmlsdGVyfGZpbHRlclJlc3xmaWx0ZXJVbml0c3xmbG9vZENvbG9yfGZsb29kT3BhY2l0eXxmb2N1c2FibGV8Zm9udEZhbWlseXxmb250U2l6ZXxmb250U2l6ZUFkanVzdHxmb250U3RyZXRjaHxmb250U3R5bGV8Zm9udFZhcmlhbnR8Zm9udFdlaWdodHxmb3JtYXR8ZnJvbXxmcnxmeHxmeXxnMXxnMnxnbHlwaE5hbWV8Z2x5cGhPcmllbnRhdGlvbkhvcml6b250YWx8Z2x5cGhPcmllbnRhdGlvblZlcnRpY2FsfGdseXBoUmVmfGdyYWRpZW50VHJhbnNmb3JtfGdyYWRpZW50VW5pdHN8aGFuZ2luZ3xob3JpekFkdlh8aG9yaXpPcmlnaW5YfGlkZW9ncmFwaGljfGltYWdlUmVuZGVyaW5nfGlufGluMnxpbnRlcmNlcHR8a3xrMXxrMnxrM3xrNHxrZXJuZWxNYXRyaXh8a2VybmVsVW5pdExlbmd0aHxrZXJuaW5nfGtleVBvaW50c3xrZXlTcGxpbmVzfGtleVRpbWVzfGxlbmd0aEFkanVzdHxsZXR0ZXJTcGFjaW5nfGxpZ2h0aW5nQ29sb3J8bGltaXRpbmdDb25lQW5nbGV8bG9jYWx8bWFya2VyRW5kfG1hcmtlck1pZHxtYXJrZXJTdGFydHxtYXJrZXJIZWlnaHR8bWFya2VyVW5pdHN8bWFya2VyV2lkdGh8bWFza3xtYXNrQ29udGVudFVuaXRzfG1hc2tVbml0c3xtYXRoZW1hdGljYWx8bW9kZXxudW1PY3RhdmVzfG9mZnNldHxvcGFjaXR5fG9wZXJhdG9yfG9yZGVyfG9yaWVudHxvcmllbnRhdGlvbnxvcmlnaW58b3ZlcmZsb3d8b3ZlcmxpbmVQb3NpdGlvbnxvdmVybGluZVRoaWNrbmVzc3xwYW5vc2UxfHBhaW50T3JkZXJ8cGF0aExlbmd0aHxwYXR0ZXJuQ29udGVudFVuaXRzfHBhdHRlcm5UcmFuc2Zvcm18cGF0dGVyblVuaXRzfHBvaW50ZXJFdmVudHN8cG9pbnRzfHBvaW50c0F0WHxwb2ludHNBdFl8cG9pbnRzQXRafHByZXNlcnZlQWxwaGF8cHJlc2VydmVBc3BlY3RSYXRpb3xwcmltaXRpdmVVbml0c3xyfHJhZGl1c3xyZWZYfHJlZll8cmVuZGVyaW5nSW50ZW50fHJlcGVhdENvdW50fHJlcGVhdER1cnxyZXF1aXJlZEV4dGVuc2lvbnN8cmVxdWlyZWRGZWF0dXJlc3xyZXN0YXJ0fHJlc3VsdHxyb3RhdGV8cnh8cnl8c2NhbGV8c2VlZHxzaGFwZVJlbmRlcmluZ3xzbG9wZXxzcGFjaW5nfHNwZWN1bGFyQ29uc3RhbnR8c3BlY3VsYXJFeHBvbmVudHxzcGVlZHxzcHJlYWRNZXRob2R8c3RhcnRPZmZzZXR8c3RkRGV2aWF0aW9ufHN0ZW1ofHN0ZW12fHN0aXRjaFRpbGVzfHN0b3BDb2xvcnxzdG9wT3BhY2l0eXxzdHJpa2V0aHJvdWdoUG9zaXRpb258c3RyaWtldGhyb3VnaFRoaWNrbmVzc3xzdHJpbmd8c3Ryb2tlfHN0cm9rZURhc2hhcnJheXxzdHJva2VEYXNob2Zmc2V0fHN0cm9rZUxpbmVjYXB8c3Ryb2tlTGluZWpvaW58c3Ryb2tlTWl0ZXJsaW1pdHxzdHJva2VPcGFjaXR5fHN0cm9rZVdpZHRofHN1cmZhY2VTY2FsZXxzeXN0ZW1MYW5ndWFnZXx0YWJsZVZhbHVlc3x0YXJnZXRYfHRhcmdldFl8dGV4dEFuY2hvcnx0ZXh0RGVjb3JhdGlvbnx0ZXh0UmVuZGVyaW5nfHRleHRMZW5ndGh8dG98dHJhbnNmb3JtfHUxfHUyfHVuZGVybGluZVBvc2l0aW9ufHVuZGVybGluZVRoaWNrbmVzc3x1bmljb2RlfHVuaWNvZGVCaWRpfHVuaWNvZGVSYW5nZXx1bml0c1BlckVtfHZBbHBoYWJldGljfHZIYW5naW5nfHZJZGVvZ3JhcGhpY3x2TWF0aGVtYXRpY2FsfHZhbHVlc3x2ZWN0b3JFZmZlY3R8dmVyc2lvbnx2ZXJ0QWR2WXx2ZXJ0T3JpZ2luWHx2ZXJ0T3JpZ2luWXx2aWV3Qm94fHZpZXdUYXJnZXR8dmlzaWJpbGl0eXx3aWR0aHN8d29yZFNwYWNpbmd8d3JpdGluZ01vZGV8eHx4SGVpZ2h0fHgxfHgyfHhDaGFubmVsU2VsZWN0b3J8eGxpbmtBY3R1YXRlfHhsaW5rQXJjcm9sZXx4bGlua0hyZWZ8eGxpbmtSb2xlfHhsaW5rU2hvd3x4bGlua1RpdGxlfHhsaW5rVHlwZXx4bWxCYXNlfHhtbG5zfHhtbG5zWGxpbmt8eG1sTGFuZ3x4bWxTcGFjZXx5fHkxfHkyfHlDaGFubmVsU2VsZWN0b3J8enx6b29tQW5kUGFufGZvcnxjbGFzc3xhdXRvZm9jdXMpfCgoW0RkXVtBYV1bVHRdW0FhXXxbQWFdW1JyXVtJaV1bQWFdfHgpLS4qKSkkLzsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmZlZTY4YTRjZDdlNjAwOWVmNjFkMjNcblxudmFyIGluZGV4ID0gbWVtb2l6ZShmdW5jdGlvbiAocHJvcCkge1xuICByZXR1cm4gcmVhY3RQcm9wc1JlZ2V4LnRlc3QocHJvcCkgfHwgcHJvcC5jaGFyQ29kZUF0KDApID09PSAxMTFcbiAgLyogbyAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMSkgPT09IDExMFxuICAvKiBuICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgyKSA8IDkxO1xufVxuLyogWisxICovXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJmdW5jdGlvbiBzdHlsaXNfbWluIChXKSB7XG4gIGZ1bmN0aW9uIE0oZCwgYywgZSwgaCwgYSkge1xuICAgIGZvciAodmFyIG0gPSAwLCBiID0gMCwgdiA9IDAsIG4gPSAwLCBxLCBnLCB4ID0gMCwgSyA9IDAsIGssIHUgPSBrID0gcSA9IDAsIGwgPSAwLCByID0gMCwgSSA9IDAsIHQgPSAwLCBCID0gZS5sZW5ndGgsIEogPSBCIC0gMSwgeSwgZiA9ICcnLCBwID0gJycsIEYgPSAnJywgRyA9ICcnLCBDOyBsIDwgQjspIHtcbiAgICAgIGcgPSBlLmNoYXJDb2RlQXQobCk7XG4gICAgICBsID09PSBKICYmIDAgIT09IGIgKyBuICsgdiArIG0gJiYgKDAgIT09IGIgJiYgKGcgPSA0NyA9PT0gYiA/IDEwIDogNDcpLCBuID0gdiA9IG0gPSAwLCBCKyssIEorKyk7XG5cbiAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgIGlmIChsID09PSBKICYmICgwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpLCAwIDwgZi50cmltKCkubGVuZ3RoKSkge1xuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIGNhc2UgNTk6XG4gICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGYgKz0gZS5jaGFyQXQobCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZyA9IDU5O1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICBmID0gZi50cmltKCk7XG4gICAgICAgICAgICBxID0gZi5jaGFyQ29kZUF0KDApO1xuICAgICAgICAgICAgayA9IDE7XG5cbiAgICAgICAgICAgIGZvciAodCA9ICsrbDsgbCA8IEI7KSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTIzOlxuICAgICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICAgICAgICAgIGstLTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZyA9IGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICBhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHUgPSBsICsgMTsgdSA8IEo7ICsrdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUuY2hhckNvZGVBdCh1KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDIgPT09IGcgJiYgNDIgPT09IGUuY2hhckNvZGVBdCh1IC0gMSkgJiYgbCArIDIgIT09IHUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoNDcgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHUgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhayBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbCA9IHU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA5MTpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICBnKys7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgICAgICBmb3IgKDsgbCsrIDwgSiAmJiBlLmNoYXJDb2RlQXQobCkgIT09IGc7KSB7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICgwID09PSBrKSBicmVhaztcbiAgICAgICAgICAgICAgbCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrID0gZS5zdWJzdHJpbmcodCwgbCk7XG4gICAgICAgICAgICAwID09PSBxICYmIChxID0gKGYgPSBmLnJlcGxhY2UoY2EsICcnKS50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHEpIHtcbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICAwIDwgciAmJiAoZiA9IGYucmVwbGFjZShOLCAnJykpO1xuICAgICAgICAgICAgICAgIGcgPSBmLmNoYXJDb2RlQXQoMSk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgNDU6XG4gICAgICAgICAgICAgICAgICAgIHIgPSBjO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgciA9IE87XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgayA9IE0oYywgciwgaywgZywgYSArIDEpO1xuICAgICAgICAgICAgICAgIHQgPSBrLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAwIDwgQSAmJiAociA9IFgoTywgZiwgSSksIEMgPSBIKDMsIGssIHIsIGMsIEQsIHosIHQsIGcsIGEsIGgpLCBmID0gci5qb2luKCcnKSwgdm9pZCAwICE9PSBDICYmIDAgPT09ICh0ID0gKGsgPSBDLnRyaW0oKSkubGVuZ3RoKSAmJiAoZyA9IDAsIGsgPSAnJykpO1xuICAgICAgICAgICAgICAgIGlmICgwIDwgdCkgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShkYSwgZWEpO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwMDpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTA5OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyAneycgKyBrICsgJ30nO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDc6XG4gICAgICAgICAgICAgICAgICAgIGYgPSBmLnJlcGxhY2UoZmEsICckMSAkMicpO1xuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGsgPSAxID09PSB3IHx8IDIgPT09IHcgJiYgTCgnQCcgKyBrLCAzKSA/ICdALXdlYmtpdC0nICsgayArICdAJyArIGsgOiAnQCcgKyBrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgayA9IGYgKyBrLCAxMTIgPT09IGggJiYgKGsgPSAocCArPSBrLCAnJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBrID0gJyc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBrID0gTShjLCBYKGMsIGYsIEkpLCBrLCBoLCBhICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEYgKz0gaztcbiAgICAgICAgICAgIGsgPSBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMjU6XG4gICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGYgPSAoMCA8IHIgPyBmLnJlcGxhY2UoTiwgJycpIDogZikudHJpbSgpO1xuICAgICAgICAgICAgaWYgKDEgPCAodCA9IGYubGVuZ3RoKSkgc3dpdGNoICgwID09PSB1ICYmIChxID0gZi5jaGFyQ29kZUF0KDApLCA0NSA9PT0gcSB8fCA5NiA8IHEgJiYgMTIzID4gcSkgJiYgKHQgPSAoZiA9IGYucmVwbGFjZSgnICcsICc6JykpLmxlbmd0aCksIDAgPCBBICYmIHZvaWQgMCAhPT0gKEMgPSBIKDEsIGYsIGMsIGQsIEQsIHosIHAubGVuZ3RoLCBoLCBhLCBoKSkgJiYgMCA9PT0gKHQgPSAoZiA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChmID0gJ1xceDAwXFx4MDAnKSwgcSA9IGYuY2hhckNvZGVBdCgwKSwgZyA9IGYuY2hhckNvZGVBdCgxKSwgcSkge1xuICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgICBpZiAoMTA1ID09PSBnIHx8IDk5ID09PSBnKSB7XG4gICAgICAgICAgICAgICAgICBHICs9IGYgKyBlLmNoYXJBdChsKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIDU4ICE9PSBmLmNoYXJDb2RlQXQodCAtIDEpICYmIChwICs9IFAoZiwgcSwgZywgZi5jaGFyQ29kZUF0KDIpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBJID0gciA9IHUgPSBxID0gMDtcbiAgICAgICAgICAgIGYgPSAnJztcbiAgICAgICAgICAgIGcgPSBlLmNoYXJDb2RlQXQoKytsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICA0NyA9PT0gYiA/IGIgPSAwIDogMCA9PT0gMSArIHEgJiYgMTA3ICE9PSBoICYmIDAgPCBmLmxlbmd0aCAmJiAociA9IDEsIGYgKz0gJ1xceDAwJyk7XG4gICAgICAgICAgMCA8IEEgKiBZICYmIEgoMCwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpO1xuICAgICAgICAgIHogPSAxO1xuICAgICAgICAgIEQrKztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDU5OlxuICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBpZiAoMCA9PT0gYiArIG4gKyB2ICsgbSkge1xuICAgICAgICAgICAgeisrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeisrO1xuICAgICAgICAgIHkgPSBlLmNoYXJBdChsKTtcblxuICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgaWYgKDAgPT09IG4gKyBtICsgYikgc3dpdGNoICh4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgICBjYXNlIDU4OlxuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgeSA9ICcnO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgMzIgIT09IGcgJiYgKHkgPSAnICcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXDAnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcZic7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFx2JztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAociA9IEkgPSAxLCB5ID0gJ1xcZicgKyB5KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTA4OlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtICsgRSAmJiAwIDwgdSkgc3dpdGNoIChsIC0gdSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgIDExMiA9PT0geCAmJiA1OCA9PT0gZS5jaGFyQ29kZUF0KGwgLSAzKSAmJiAoRSA9IHgpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgMTExID09PSBLICYmIChFID0gSyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiAodSA9IGwpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSAmJiAociA9IDEsIHkgKz0gJ1xccicpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzNDpcbiAgICAgICAgICAgIGNhc2UgMzk6XG4gICAgICAgICAgICAgIDAgPT09IGIgJiYgKG4gPSBuID09PSBnID8gMCA6IDAgPT09IG4gPyBnIDogbik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbSsrO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA5MzpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyB2ICYmIG0tLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgbSAmJiB2LS07XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIGIgKyBtKSB7XG4gICAgICAgICAgICAgICAgaWYgKDAgPT09IHEpIHN3aXRjaCAoMiAqIHggKyAzICogSykge1xuICAgICAgICAgICAgICAgICAgY2FzZSA1MzM6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBxID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdisrO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNjQ6XG4gICAgICAgICAgICAgIDAgPT09IGIgKyB2ICsgbiArIG0gKyB1ICsgayAmJiAoayA9IDEpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgIGNhc2UgNDc6XG4gICAgICAgICAgICAgIGlmICghKDAgPCBuICsgbSArIHYpKSBzd2l0Y2ggKGIpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKDIgKiBnICsgMyAqIGUuY2hhckNvZGVBdChsICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMzU6XG4gICAgICAgICAgICAgICAgICAgICAgYiA9IDQ3O1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgICAgICAgICAgIHQgPSBsLCBiID0gNDI7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MjpcbiAgICAgICAgICAgICAgICAgIDQ3ID09PSBnICYmIDQyID09PSB4ICYmIHQgKyAyICE9PSBsICYmICgzMyA9PT0gZS5jaGFyQ29kZUF0KHQgKyAyKSAmJiAocCArPSBlLnN1YnN0cmluZyh0LCBsICsgMSkpLCB5ID0gJycsIGIgPSAwKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIDAgPT09IGIgJiYgKGYgKz0geSk7XG4gICAgICB9XG5cbiAgICAgIEsgPSB4O1xuICAgICAgeCA9IGc7XG4gICAgICBsKys7XG4gICAgfVxuXG4gICAgdCA9IHAubGVuZ3RoO1xuXG4gICAgaWYgKDAgPCB0KSB7XG4gICAgICByID0gYztcbiAgICAgIGlmICgwIDwgQSAmJiAoQyA9IEgoMiwgcCwgciwgZCwgRCwgeiwgdCwgaCwgYSwgaCksIHZvaWQgMCAhPT0gQyAmJiAwID09PSAocCA9IEMpLmxlbmd0aCkpIHJldHVybiBHICsgcCArIEY7XG4gICAgICBwID0gci5qb2luKCcsJykgKyAneycgKyBwICsgJ30nO1xuXG4gICAgICBpZiAoMCAhPT0gdyAqIEUpIHtcbiAgICAgICAgMiAhPT0gdyB8fCBMKHAsIDIpIHx8IChFID0gMCk7XG5cbiAgICAgICAgc3dpdGNoIChFKSB7XG4gICAgICAgICAgY2FzZSAxMTE6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKGhhLCAnOi1tb3otJDEnKSArIHA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAgcCA9IHAucmVwbGFjZShRLCAnOjotd2Via2l0LWlucHV0LSQxJykgKyBwLnJlcGxhY2UoUSwgJzo6LW1vei0kMScpICsgcC5yZXBsYWNlKFEsICc6LW1zLWlucHV0LSQxJykgKyBwO1xuICAgICAgICB9XG5cbiAgICAgICAgRSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIEcgKyBwICsgRjtcbiAgfVxuXG4gIGZ1bmN0aW9uIFgoZCwgYywgZSkge1xuICAgIHZhciBoID0gYy50cmltKCkuc3BsaXQoaWEpO1xuICAgIGMgPSBoO1xuICAgIHZhciBhID0gaC5sZW5ndGgsXG4gICAgICAgIG0gPSBkLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgY2FzZSAxOlxuICAgICAgICB2YXIgYiA9IDA7XG5cbiAgICAgICAgZm9yIChkID0gMCA9PT0gbSA/ICcnIDogZFswXSArICcgJzsgYiA8IGE7ICsrYikge1xuICAgICAgICAgIGNbYl0gPSBaKGQsIGNbYl0sIGUpLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB2YXIgdiA9IGIgPSAwO1xuXG4gICAgICAgIGZvciAoYyA9IFtdOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBtOyArK24pIHtcbiAgICAgICAgICAgIGNbdisrXSA9IFooZFtuXSArICcgJywgaFtiXSwgZSkudHJpbSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGM7XG4gIH1cblxuICBmdW5jdGlvbiBaKGQsIGMsIGUpIHtcbiAgICB2YXIgaCA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICAzMyA+IGggJiYgKGggPSAoYyA9IGMudHJpbSgpKS5jaGFyQ29kZUF0KDApKTtcblxuICAgIHN3aXRjaCAoaCkge1xuICAgICAgY2FzZSAzODpcbiAgICAgICAgcmV0dXJuIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBjYXNlIDU4OlxuICAgICAgICByZXR1cm4gZC50cmltKCkgKyBjLnJlcGxhY2UoRiwgJyQxJyArIGQudHJpbSgpKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKDAgPCAxICogZSAmJiAwIDwgYy5pbmRleE9mKCdcXGYnKSkgcmV0dXJuIGMucmVwbGFjZShGLCAoNTggPT09IGQuY2hhckNvZGVBdCgwKSA/ICcnIDogJyQxJykgKyBkLnRyaW0oKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGQgKyBjO1xuICB9XG5cbiAgZnVuY3Rpb24gUChkLCBjLCBlLCBoKSB7XG4gICAgdmFyIGEgPSBkICsgJzsnLFxuICAgICAgICBtID0gMiAqIGMgKyAzICogZSArIDQgKiBoO1xuXG4gICAgaWYgKDk0NCA9PT0gbSkge1xuICAgICAgZCA9IGEuaW5kZXhPZignOicsIDkpICsgMTtcbiAgICAgIHZhciBiID0gYS5zdWJzdHJpbmcoZCwgYS5sZW5ndGggLSAxKS50cmltKCk7XG4gICAgICBiID0gYS5zdWJzdHJpbmcoMCwgZCkudHJpbSgpICsgYiArICc7JztcbiAgICAgIHJldHVybiAxID09PSB3IHx8IDIgPT09IHcgJiYgTChiLCAxKSA/ICctd2Via2l0LScgKyBiICsgYiA6IGI7XG4gICAgfVxuXG4gICAgaWYgKDAgPT09IHcgfHwgMiA9PT0gdyAmJiAhTChhLCAxKSkgcmV0dXJuIGE7XG5cbiAgICBzd2l0Y2ggKG0pIHtcbiAgICAgIGNhc2UgMTAxNTpcbiAgICAgICAgcmV0dXJuIDk3ID09PSBhLmNoYXJDb2RlQXQoMTApID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NTE6XG4gICAgICAgIHJldHVybiAxMTYgPT09IGEuY2hhckNvZGVBdCgzKSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgOTYzOlxuICAgICAgICByZXR1cm4gMTEwID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDEwMDk6XG4gICAgICAgIGlmICgxMDAgIT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTY5OlxuICAgICAgY2FzZSA5NDI6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTc4OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgMTAxOTpcbiAgICAgIGNhc2UgOTgzOlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1vei0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDg4MzpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoOCkpIHJldHVybiAnLXdlYmtpdC0nICsgYSArIGE7XG4gICAgICAgIGlmICgwIDwgYS5pbmRleE9mKCdpbWFnZS1zZXQoJywgMTEpKSByZXR1cm4gYS5yZXBsYWNlKGphLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5MzI6XG4gICAgICAgIGlmICg0NSA9PT0gYS5jaGFyQ29kZUF0KDQpKSBzd2l0Y2ggKGEuY2hhckNvZGVBdCg1KSkge1xuICAgICAgICAgIGNhc2UgMTAzOlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LWJveC0nICsgYS5yZXBsYWNlKCctZ3JvdycsICcnKSArICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYS5yZXBsYWNlKCdncm93JywgJ3Bvc2l0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ3NocmluaycsICduZWdhdGl2ZScpICsgYTtcblxuICAgICAgICAgIGNhc2UgOTg6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2Jhc2lzJywgJ3ByZWZlcnJlZC1zaXplJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDk2NDpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDIzOlxuICAgICAgICBpZiAoOTkgIT09IGEuY2hhckNvZGVBdCg4KSkgYnJlYWs7XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZyhhLmluZGV4T2YoJzonLCAxNSkpLnJlcGxhY2UoJ2ZsZXgtJywgJycpLnJlcGxhY2UoJ3NwYWNlLWJldHdlZW4nLCAnanVzdGlmeScpO1xuICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LXBhY2snICsgYiArICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LXBhY2snICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAwNTpcbiAgICAgICAgcmV0dXJuIGthLnRlc3QoYSkgPyBhLnJlcGxhY2UoYWEsICc6LXdlYmtpdC0nKSArIGEucmVwbGFjZShhYSwgJzotbW96LScpICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMWUzOlxuICAgICAgICBiID0gYS5zdWJzdHJpbmcoMTMpLnRyaW0oKTtcbiAgICAgICAgYyA9IGIuaW5kZXhPZignLScpICsgMTtcblxuICAgICAgICBzd2l0Y2ggKGIuY2hhckNvZGVBdCgwKSArIGIuY2hhckNvZGVBdChjKSkge1xuICAgICAgICAgIGNhc2UgMjI2OlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAndGInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAyMzI6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0Yi1ybCcpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIyMDpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ2xyJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGIgKyBhO1xuXG4gICAgICBjYXNlIDEwMTc6XG4gICAgICAgIGlmICgtMSA9PT0gYS5pbmRleE9mKCdzdGlja3knLCA5KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTc1OlxuICAgICAgICBjID0gKGEgPSBkKS5sZW5ndGggLSAxMDtcbiAgICAgICAgYiA9ICgzMyA9PT0gYS5jaGFyQ29kZUF0KGMpID8gYS5zdWJzdHJpbmcoMCwgYykgOiBhKS5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JywgNykgKyAxKS50cmltKCk7XG5cbiAgICAgICAgc3dpdGNoIChtID0gYi5jaGFyQ29kZUF0KDApICsgKGIuY2hhckNvZGVBdCg3KSB8IDApKSB7XG4gICAgICAgICAgY2FzZSAyMDM6XG4gICAgICAgICAgICBpZiAoMTExID4gYi5jaGFyQ29kZUF0KDgpKSBicmVhaztcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgYikgKyAnOycgKyBhO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIwNzpcbiAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgIGEgPSBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArICgxMDIgPCBtID8gJ2lubGluZS0nIDogJycpICsgJ2JveCcpICsgJzsnICsgYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGEucmVwbGFjZShiLCAnLW1zLScgKyBiICsgJ2JveCcpICsgJzsnICsgYTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhICsgJzsnO1xuXG4gICAgICBjYXNlIDkzODpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNSkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDYpKSB7XG4gICAgICAgICAgY2FzZSAxMDU6XG4gICAgICAgICAgICByZXR1cm4gYiA9IGEucmVwbGFjZSgnLWl0ZW1zJywgJycpLCAnLXdlYmtpdC0nICsgYSArICctd2Via2l0LWJveC0nICsgYiArICctbXMtZmxleC0nICsgYiArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtZmxleC1pdGVtLScgKyBhLnJlcGxhY2UoYmEsICcnKSArIGE7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWxpbmUtcGFjaycgKyBhLnJlcGxhY2UoJ2FsaWduLWNvbnRlbnQnLCAnJykucmVwbGFjZShiYSwgJycpICsgYTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NzM6XG4gICAgICBjYXNlIDk4OTpcbiAgICAgICAgaWYgKDQ1ICE9PSBhLmNoYXJDb2RlQXQoMykgfHwgMTIyID09PSBhLmNoYXJDb2RlQXQoNCkpIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMTpcbiAgICAgIGNhc2UgOTUzOlxuICAgICAgICBpZiAoITAgPT09IGxhLnRlc3QoZCkpIHJldHVybiAxMTUgPT09IChiID0gZC5zdWJzdHJpbmcoZC5pbmRleE9mKCc6JykgKyAxKSkuY2hhckNvZGVBdCgwKSA/IFAoZC5yZXBsYWNlKCdzdHJldGNoJywgJ2ZpbGwtYXZhaWxhYmxlJyksIGMsIGUsIGgpLnJlcGxhY2UoJzpmaWxsLWF2YWlsYWJsZScsICc6c3RyZXRjaCcpIDogYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArIGEucmVwbGFjZShiLCAnLW1vei0nICsgYi5yZXBsYWNlKCdmaWxsLScsICcnKSkgKyBhO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA5NjI6XG4gICAgICAgIGlmIChhID0gJy13ZWJraXQtJyArIGEgKyAoMTAyID09PSBhLmNoYXJDb2RlQXQoNSkgPyAnLW1zLScgKyBhIDogJycpICsgYSwgMjExID09PSBlICsgaCAmJiAxMDUgPT09IGEuY2hhckNvZGVBdCgxMykgJiYgMCA8IGEuaW5kZXhPZigndHJhbnNmb3JtJywgMTApKSByZXR1cm4gYS5zdWJzdHJpbmcoMCwgYS5pbmRleE9mKCc7JywgMjcpICsgMSkucmVwbGFjZShtYSwgJyQxLXdlYmtpdC0kMicpICsgYTtcbiAgICB9XG5cbiAgICByZXR1cm4gYTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEwoZCwgYykge1xuICAgIHZhciBlID0gZC5pbmRleE9mKDEgPT09IGMgPyAnOicgOiAneycpLFxuICAgICAgICBoID0gZC5zdWJzdHJpbmcoMCwgMyAhPT0gYyA/IGUgOiAxMCk7XG4gICAgZSA9IGQuc3Vic3RyaW5nKGUgKyAxLCBkLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBSKDIgIT09IGMgPyBoIDogaC5yZXBsYWNlKG5hLCAnJDEnKSwgZSwgYyk7XG4gIH1cblxuICBmdW5jdGlvbiBlYShkLCBjKSB7XG4gICAgdmFyIGUgPSBQKGMsIGMuY2hhckNvZGVBdCgwKSwgYy5jaGFyQ29kZUF0KDEpLCBjLmNoYXJDb2RlQXQoMikpO1xuICAgIHJldHVybiBlICE9PSBjICsgJzsnID8gZS5yZXBsYWNlKG9hLCAnIG9yICgkMSknKS5zdWJzdHJpbmcoNCkgOiAnKCcgKyBjICsgJyknO1xuICB9XG5cbiAgZnVuY3Rpb24gSChkLCBjLCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSB7XG4gICAgZm9yICh2YXIgZyA9IDAsIHggPSBjLCB3OyBnIDwgQTsgKytnKSB7XG4gICAgICBzd2l0Y2ggKHcgPSBTW2ddLmNhbGwoQiwgZCwgeCwgZSwgaCwgYSwgbSwgYiwgdiwgbiwgcSkpIHtcbiAgICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICAgIGNhc2UgITE6XG4gICAgICAgIGNhc2UgITA6XG4gICAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHggPSB3O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh4ICE9PSBjKSByZXR1cm4geDtcbiAgfVxuXG4gIGZ1bmN0aW9uIFQoZCkge1xuICAgIHN3aXRjaCAoZCkge1xuICAgICAgY2FzZSB2b2lkIDA6XG4gICAgICBjYXNlIG51bGw6XG4gICAgICAgIEEgPSBTLmxlbmd0aCA9IDA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGQpIFNbQSsrXSA9IGQ7ZWxzZSBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBkKSBmb3IgKHZhciBjID0gMCwgZSA9IGQubGVuZ3RoOyBjIDwgZTsgKytjKSB7XG4gICAgICAgICAgVChkW2NdKTtcbiAgICAgICAgfSBlbHNlIFkgPSAhIWQgfCAwO1xuICAgIH1cblxuICAgIHJldHVybiBUO1xuICB9XG5cbiAgZnVuY3Rpb24gVShkKSB7XG4gICAgZCA9IGQucHJlZml4O1xuICAgIHZvaWQgMCAhPT0gZCAmJiAoUiA9IG51bGwsIGQgPyAnZnVuY3Rpb24nICE9PSB0eXBlb2YgZCA/IHcgPSAxIDogKHcgPSAyLCBSID0gZCkgOiB3ID0gMCk7XG4gICAgcmV0dXJuIFU7XG4gIH1cblxuICBmdW5jdGlvbiBCKGQsIGMpIHtcbiAgICB2YXIgZSA9IGQ7XG4gICAgMzMgPiBlLmNoYXJDb2RlQXQoMCkgJiYgKGUgPSBlLnRyaW0oKSk7XG4gICAgViA9IGU7XG4gICAgZSA9IFtWXTtcblxuICAgIGlmICgwIDwgQSkge1xuICAgICAgdmFyIGggPSBIKC0xLCBjLCBlLCBlLCBELCB6LCAwLCAwLCAwLCAwKTtcbiAgICAgIHZvaWQgMCAhPT0gaCAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIGggJiYgKGMgPSBoKTtcbiAgICB9XG5cbiAgICB2YXIgYSA9IE0oTywgZSwgYywgMCwgMCk7XG4gICAgMCA8IEEgJiYgKGggPSBIKC0yLCBhLCBlLCBlLCBELCB6LCBhLmxlbmd0aCwgMCwgMCwgMCksIHZvaWQgMCAhPT0gaCAmJiAoYSA9IGgpKTtcbiAgICBWID0gJyc7XG4gICAgRSA9IDA7XG4gICAgeiA9IEQgPSAxO1xuICAgIHJldHVybiBhO1xuICB9XG5cbiAgdmFyIGNhID0gL15cXDArL2csXG4gICAgICBOID0gL1tcXDBcXHJcXGZdL2csXG4gICAgICBhYSA9IC86ICovZyxcbiAgICAgIGthID0gL3pvb3xncmEvLFxuICAgICAgbWEgPSAvKFssOiBdKSh0cmFuc2Zvcm0pL2csXG4gICAgICBpYSA9IC8sXFxyKz8vZyxcbiAgICAgIEYgPSAvKFtcXHRcXHJcXG4gXSkqXFxmPyYvZyxcbiAgICAgIGZhID0gL0Aoa1xcdyspXFxzKihcXFMqKVxccyovLFxuICAgICAgUSA9IC86OihwbGFjZSkvZyxcbiAgICAgIGhhID0gLzoocmVhZC1vbmx5KS9nLFxuICAgICAgRyA9IC9bc3ZoXVxcdystW3RibHJdezJ9LyxcbiAgICAgIGRhID0gL1xcKFxccyooLiopXFxzKlxcKS9nLFxuICAgICAgb2EgPSAvKFtcXHNcXFNdKj8pOy9nLFxuICAgICAgYmEgPSAvLXNlbGZ8ZmxleC0vZyxcbiAgICAgIG5hID0gL1teXSo/KDpbcnBdW2VsXWFbXFx3LV0rKVteXSovLFxuICAgICAgbGEgPSAvc3RyZXRjaHw6XFxzKlxcdytcXC0oPzpjb250ZXxhdmFpbCkvLFxuICAgICAgamEgPSAvKFteLV0pKGltYWdlLXNldFxcKCkvLFxuICAgICAgeiA9IDEsXG4gICAgICBEID0gMSxcbiAgICAgIEUgPSAwLFxuICAgICAgdyA9IDEsXG4gICAgICBPID0gW10sXG4gICAgICBTID0gW10sXG4gICAgICBBID0gMCxcbiAgICAgIFIgPSBudWxsLFxuICAgICAgWSA9IDAsXG4gICAgICBWID0gJyc7XG4gIEIudXNlID0gVDtcbiAgQi5zZXQgPSBVO1xuICB2b2lkIDAgIT09IFcgJiYgVShXKTtcbiAgcmV0dXJuIEI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxpc19taW47XG4iLCJ2YXIgdW5pdGxlc3NLZXlzID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogMSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IDEsXG4gIGJvcmRlckltYWdlU2xpY2U6IDEsXG4gIGJvcmRlckltYWdlV2lkdGg6IDEsXG4gIGJveEZsZXg6IDEsXG4gIGJveEZsZXhHcm91cDogMSxcbiAgYm94T3JkaW5hbEdyb3VwOiAxLFxuICBjb2x1bW5Db3VudDogMSxcbiAgY29sdW1uczogMSxcbiAgZmxleDogMSxcbiAgZmxleEdyb3c6IDEsXG4gIGZsZXhQb3NpdGl2ZTogMSxcbiAgZmxleFNocmluazogMSxcbiAgZmxleE5lZ2F0aXZlOiAxLFxuICBmbGV4T3JkZXI6IDEsXG4gIGdyaWRSb3c6IDEsXG4gIGdyaWRSb3dFbmQ6IDEsXG4gIGdyaWRSb3dTcGFuOiAxLFxuICBncmlkUm93U3RhcnQ6IDEsXG4gIGdyaWRDb2x1bW46IDEsXG4gIGdyaWRDb2x1bW5FbmQ6IDEsXG4gIGdyaWRDb2x1bW5TcGFuOiAxLFxuICBncmlkQ29sdW1uU3RhcnQ6IDEsXG4gIG1zR3JpZFJvdzogMSxcbiAgbXNHcmlkUm93U3BhbjogMSxcbiAgbXNHcmlkQ29sdW1uOiAxLFxuICBtc0dyaWRDb2x1bW5TcGFuOiAxLFxuICBmb250V2VpZ2h0OiAxLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBvcGFjaXR5OiAxLFxuICBvcmRlcjogMSxcbiAgb3JwaGFuczogMSxcbiAgdGFiU2l6ZTogMSxcbiAgd2lkb3dzOiAxLFxuICB6SW5kZXg6IDEsXG4gIHpvb206IDEsXG4gIFdlYmtpdExpbmVDbGFtcDogMSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogMSxcbiAgZmxvb2RPcGFjaXR5OiAxLFxuICBzdG9wT3BhY2l0eTogMSxcbiAgc3Ryb2tlRGFzaGFycmF5OiAxLFxuICBzdHJva2VEYXNob2Zmc2V0OiAxLFxuICBzdHJva2VNaXRlcmxpbWl0OiAxLFxuICBzdHJva2VPcGFjaXR5OiAxLFxuICBzdHJva2VXaWR0aDogMVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pdGxlc3NLZXlzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIEJvb2xlYW4gaW5wdXRcbiAqL1xudmFyIEJvb2xlYW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJvb2xlYW4sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQm9vbGVhbihwcm9wcykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBCb29sZWFuO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJvb2xlYW4uanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbnZhciBCdXR0b24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJ1dHRvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCdXR0b24ocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIHByb3BzKSwgeyBub2xhYmVsOiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLm5vbGFiZWwpICE9PSB1bmRlZmluZWQgPyBwcm9wcy5ub2xhYmVsIDogdHJ1ZSB9KSkgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFR5cGUgKHByaW1hcnkgb3IgZGVmYXVsdClcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl90eXBlID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdXR0b24gY2FwdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2NhcHRpb24gPSBcIlwiO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fY2FwdGlvbiA9IHByb3BzLnN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b24ucHJvdG90eXBlLCBcInR5cGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1dHRvbi5wcm90b3R5cGUsIFwiY2FwdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhcHRpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jYXB0aW9uID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQnV0dG9uO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QnV0dG9uLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogT25lLWxpbmUgaW5wdXQgd2l0aCBhIGxlbmd0aCBsaW1pdC5cbiAqL1xudmFyIENoYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENoYXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2hhcihwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIHBsYWNlIGhvbGRlclxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3BsYWNlaG9sZGVyID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIHNpemVcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9zaXplID0gMTUwO1xuICAgICAgICBfdGhpcy5faXNQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NpemUgPSBwcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaXNQYXNzd29yZCA9IHByb3BzLnBhc3N3b3JkID09PSBcIlRydWVcIiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGFyLnByb3RvdHlwZSwgXCJwbGFjZWhvbGRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGFyLnByb3RvdHlwZSwgXCJzaXplXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaGFyLnByb3RvdHlwZSwgXCJpc1Bhc3N3b3JkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNQYXNzd29yZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzUGFzc3dvcmQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBDaGFyO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgQ2hhcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNoYXIuanMubWFwIiwiaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG5pbXBvcnQgTmV3TGluZSBmcm9tIFwiLi9OZXdMaW5lXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcbnZhciBDb250YWluZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29udGFpbmVyKGNvbHVtbnMsIGNvbHNwYW4pIHtcbiAgICAgICAgaWYgKGNvbHVtbnMgPT09IHZvaWQgMCkgeyBjb2x1bW5zID0gNDsgfVxuICAgICAgICBpZiAoY29sc3BhbiA9PT0gdm9pZCAwKSB7IGNvbHNwYW4gPSA2OyB9XG4gICAgICAgIHRoaXMuX2NvbHVtbnMgPSBjb2x1bW5zO1xuICAgICAgICB0aGlzLl9jb2xzcGFuID0gY29sc3BhbjtcbiAgICAgICAgdGhpcy5fcm93cyA9IFtbXV07XG4gICAgICAgIHRoaXMuX2luZGV4ID0gMDtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lci5wcm90b3R5cGUsIFwiY29sdW1uc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb2x1bW5zID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyLnByb3RvdHlwZSwgXCJjb2xzcGFuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sc3BhbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbHNwYW4gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXIucHJvdG90eXBlLCBcInJvd3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yb3dzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcm93cyA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lci5wcm90b3R5cGUsIFwiaW5kZXhcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbmRleDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgZnJlZSBwb3NpdGlvblxuICAgICAqL1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuZnJlZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3BhbiA9IHRoaXMuX3Jvd3NbdGhpcy5faW5kZXhdLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuICFlbC5pbnZpc2libGU7IH0pLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXYgKyBjdXJyZW50LmNvbHNwYW47XG4gICAgICAgIH0sIDApO1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1ucyAtIHNwYW47XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLmFkZFdpZGdldCA9IGZ1bmN0aW9uICh3aWRnZXQsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHdpZGdldHNUb0FkZCA9IFtdO1xuICAgICAgICB2YXIgYWRkTGFiZWwgPSBvcHRpb25zID8gb3B0aW9ucy5hZGRMYWJlbCA6IHRydWU7XG4gICAgICAgIGlmICh3aWRnZXQgaW5zdGFuY2VvZiBOZXdMaW5lKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzLnB1c2goW10pO1xuICAgICAgICAgICAgdGhpcy5faW5kZXgrKztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2lkZ2V0LmNvbHNwYW4gPiB0aGlzLl9jb2x1bW5zKSB7XG4gICAgICAgICAgICAvLyBXaWRnZXQgY29sc3BhbiBpcyBncmVhdGVyIHRoYW4gY29udGFpbmVyIGNvbHVtbnMsIHNvIHdlIGNoYW5nZSB3aWRnZXRcbiAgICAgICAgICAgIC8vIGNvbHNwYW4gdG8gZml0IGNvbnRhaW5lciBjb2x1bW5zLlxuICAgICAgICAgICAgd2lkZ2V0LmNvbHNwYW4gPSB0aGlzLl9jb2x1bW5zO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBmaWVsZHMgd2l0aG91dCBub2xhYmVsIHdlIGFkZCBhIHByZWNlZGluZyBsYWJlbCB3aWRnZXRcbiAgICAgICAgaWYgKGFkZExhYmVsICYmIHdpZGdldCBpbnN0YW5jZW9mIEZpZWxkICYmICF3aWRnZXQubm9sYWJlbCkge1xuICAgICAgICAgICAgaWYgKHdpZGdldC5jb2xzcGFuID4gMSkge1xuICAgICAgICAgICAgICAgIHdpZGdldC5jb2xzcGFuIC09IDE7IC8vIFdlIHN1YnN0cmFjdCBvbmUgY29sc3BhbiBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgbGFiZWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsYWJlbCA9IG5ldyBMYWJlbCh7XG4gICAgICAgICAgICAgICAgbmFtZTogd2lkZ2V0LmlkICsgXCJfbGFiZWxcIixcbiAgICAgICAgICAgICAgICBzdHJpbmc6IHdpZGdldC5sYWJlbCxcbiAgICAgICAgICAgICAgICBpbnZpc2libGU6IHdpZGdldC5pbnZpc2libGUsXG4gICAgICAgICAgICAgICAgaGVscDogd2lkZ2V0LnRvb2x0aXAsXG4gICAgICAgICAgICAgICAgZmllbGRGb3JMYWJlbDogd2lkZ2V0LmlkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aWRnZXRzVG9BZGQucHVzaChsYWJlbCk7XG4gICAgICAgICAgICB3aWRnZXRzVG9BZGQucHVzaCh3aWRnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2lkZ2V0c1RvQWRkLnB1c2god2lkZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgd2lkZ2V0c0NvbHNwYW4gPSB3aWRnZXRzVG9BZGQucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgY3VycmVudFdpZGdldCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgY3VycmVudFdpZGdldC5jb2xzcGFuO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgaWYgKHdpZGdldHNDb2xzcGFuID4gdGhpcy5mcmVlUG9zaXRpb24oKSkge1xuICAgICAgICAgICAgdGhpcy5fcm93cy5wdXNoKFtdKTtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcm93c1t0aGlzLl9pbmRleF0gPSB0aGlzLl9yb3dzW3RoaXMuX2luZGV4XS5jb25jYXQod2lkZ2V0c1RvQWRkKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRyYXZlcnNlcyBjaGlsZHJlbiB0byBmaW5kIGEgbWF0Y2hpbmcgY29udGFpbmVyIG9yIHdpZGdldCB3aXRoIHRoZSBleGFjdCBzYW1lIGlkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZCAobmFtZSkgb2YgdGhlIGZpZWxkIG9yIGNvbnRhaW5lciB0byBmaW5kXG4gICAgICovXG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgciA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9yb3dzICYmIHRoaXMuX3Jvd3MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEl0ZW0gaGFzIGJlZW4gZm91bmQuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJvdyAmJiByb3cubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEl0ZW0gaGFzIGJlZW4gZm91bmQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByID0gaXRlbS5maW5kQnlJZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRhaW5lcjtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db250YWluZXIuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4vV2lkZ2V0XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xudmFyIENvbnRhaW5lcldpZGdldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29udGFpbmVyV2lkZ2V0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbnRhaW5lcldpZGdldChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIGlkZW50aWZpZXJcbiAgICAgICAgICpcbiAgICAgICAgICogQ29ycmVzcG9uZHMgdG8gdGhlIGZpZWxkJ3MgbmFtZSBhdHRyaWJ1dGUgZnJvbSB4bWxcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9pZCA9IFwiXCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb250YWluZXIgbGFiZWxcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9sYWJlbCA9IFwiXCI7XG4gICAgICAgIF90aGlzLl9jb250YWluZXIgPSBuZXcgQ29udGFpbmVyKHByb3BzICYmIHByb3BzLmNvbCwgQ29udGFpbmVyV2lkZ2V0Ll9kZWZhdWx0Q29sc3Bhbik7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5faWQgPSBwcm9wcy5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fY29udGFpbmVyLmNvbHNwYW4gPSArcHJvcHMuY29sc3BhbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbGFiZWwgPSBwcm9wcy5zdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyV2lkZ2V0LnByb3RvdHlwZSwgXCJpZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXJXaWRnZXQsIFwiZGVmYXVsdENvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBDb250YWluZXJXaWRnZXQuX2RlZmF1bHRDb2xzcGFuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgQ29udGFpbmVyV2lkZ2V0Ll9kZWZhdWx0Q29sc3BhbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnRhaW5lcldpZGdldC5wcm90b3R5cGUsIFwiY29udGFpbmVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fY29udGFpbmVyID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29udGFpbmVyV2lkZ2V0LnByb3RvdHlwZSwgXCJjb2xzcGFuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLmNvbHNwYW47XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXIuY29sc3BhbiA9ICt2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb250YWluZXJXaWRnZXQucHJvdG90eXBlLCBcImxhYmVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQ2FsbHMgY29udGFpbmVyJ3MgZmluZEJ5SWQgbWV0aG9kIHRvIGZpbmQgdGhlIHdpZGdldHMgbWF0Y2hpbmcgd2l0aCBwYXJhbSBpZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZCB0byBmaW5kXG4gICAgICovXG4gICAgQ29udGFpbmVyV2lkZ2V0LnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAoaWQgPT09IHRoaXMuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5maW5kQnlJZChpZCk7XG4gICAgfTtcbiAgICBDb250YWluZXJXaWRnZXQuX2RlZmF1bHRDb2xzcGFuID0gNjtcbiAgICByZXR1cm4gQ29udGFpbmVyV2lkZ2V0O1xufShXaWRnZXQpKTtcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcldpZGdldDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbnRhaW5lcldpZGdldC5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIERhdGUgaW5wdXRcbiAqL1xudmFyIERhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERhdGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGF0ZShwcm9wcykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBEYXRlO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgRGF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURhdGUuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBEYXRlVGltZSBpbnB1dFxuICovXG52YXIgRGF0ZVRpbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERhdGVUaW1lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERhdGVUaW1lKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIERhdGVUaW1lO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgRGF0ZVRpbWU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1EYXRlVGltZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbnZhciBGaWVsZCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmllbGQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmllbGQocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBpZGVudGlmaWVyXG4gICAgICAgICAqXG4gICAgICAgICAqIENvcnJlc3BvbmRzIHRvIHRoZSBmaWVsZCdzIG5hbWUgYXR0cmlidXRlIGZyb20geG1sXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5faWQgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogTGFiZWxcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9sYWJlbCA9IFwiXCI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBObyBsYWJlbFxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGZpZWxkIGhhc24ndCBnb3QgdG8gc2hvdyB0aGUgbGFiZWxcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9ub2xhYmVsID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBSZXF1aXJlZCBmaWVsZFxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3JlcXVpcmVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBY3RpdmF0ZWQgKGRlZmF1bHQgaXMgdHJ1ZSlcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9hY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICAvLyBBY3RpdmF0ZWQgYnkgZGVmYXVsdFxuICAgICAgICBfdGhpcy5fYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMubmFtZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9pZCA9IHByb3BzLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuYWN0aXZhdGVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2FjdGl2YXRlZCA9IHByb3BzLmFjdGl2YXRlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5zdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fbGFiZWwgPSBwcm9wcy5zdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuaGVscCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl90b29sdGlwID0gcHJvcHMuaGVscDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5ub2xhYmVsICYmXG4gICAgICAgICAgICAgICAgKHByb3BzLm5vbGFiZWwgPT09IFwiMVwiIHx8XG4gICAgICAgICAgICAgICAgICAgICh0eXBlb2YgcHJvcHMubm9sYWJlbCA9PT0gXCJib29sZWFuXCIgJiYgcHJvcHMubm9sYWJlbCA9PT0gdHJ1ZSkpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX25vbGFiZWwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnJlcXVpcmVkICYmXG4gICAgICAgICAgICAgICAgKHByb3BzLnJlcXVpcmVkID09PSBcIjFcIiB8fCBwcm9wcy5yZXF1aXJlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpZWxkLnByb3RvdHlwZSwgXCJpZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWVsZC5wcm90b3R5cGUsIFwibGFiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmllbGQucHJvdG90eXBlLCBcIm5vbGFiZWxcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ub2xhYmVsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbm9sYWJlbCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpZWxkLnByb3RvdHlwZSwgXCJyZXF1aXJlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVxdWlyZWQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWVsZC5wcm90b3R5cGUsIFwidG9vbHRpcFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90b29sdGlwID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmllbGQucHJvdG90eXBlLCBcImFjdGl2YXRlZFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlZDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2YXRlZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGlzIGluc3RhbmNlIGluIGNhc2UgdGhpcyBpZCBtYXRjaGVzIHBhcmFtIGlkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBpZCAobmFtZSkgdG8gZmluZFxuICAgICAqL1xuICAgIEZpZWxkLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgciA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHIgPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgcmV0dXJuIEZpZWxkO1xufShXaWRnZXQpKTtcbmV4cG9ydCBkZWZhdWx0IEZpZWxkO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmllbGQuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBGbG9hdCBpbnB1dFxuICovXG52YXIgRmxvYXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZWdlciBkaWdpdHNcbiAgICAgICAgICpcbiAgICAgICAgICogTnVtYmVyIG9mIGludGVnZXIgZGlnaXRzIHRoYXQgd2lsbCBiZSBwYXJ0IG9mIHRoZSBmbG9hdFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2ludGVnZXJEaWdpdHMgPSAxNjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY2ltYWwgZGlnaXRzXG4gICAgICAgICAqXG4gICAgICAgICAqIE51bWJlciBvZiBkZWNpbWFsIGRpZ2l0cyB0aGF0IHdpbGwgYmUgcGFydCBvZiB0aGUgZmxvYXRcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9kZWNpbWFsRGlnaXRzID0gMjtcbiAgICAgICAgaWYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5kaWdpdHMpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHByb3BzLmRpZ2l0cywgaW50ZWdlcnMgPSBfYVswXSwgZGVjaW1hbHMgPSBfYVsxXTtcbiAgICAgICAgICAgIF90aGlzLl9pbnRlZ2VyRGlnaXRzID0gaW50ZWdlcnM7XG4gICAgICAgICAgICBfdGhpcy5fZGVjaW1hbERpZ2l0cyA9IGRlY2ltYWxzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZsb2F0LnByb3RvdHlwZSwgXCJpbnRlZ2VyRGlnaXRzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW50ZWdlckRpZ2l0cztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2ludGVnZXJEaWdpdHMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGbG9hdC5wcm90b3R5cGUsIFwiZGVjaW1hbERpZ2l0c1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RlY2ltYWxEaWdpdHM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kZWNpbWFsRGlnaXRzID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gRmxvYXQ7XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBGbG9hdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZsb2F0LmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmxvYXQgZnJvbSBcIi4vRmxvYXRcIjtcbi8qKlxuICogRmxvYXRUaW1lIGlucHV0XG4gKi9cbnZhciBGbG9hdFRpbWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0VGltZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGbG9hdFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEZsb2F0VGltZTtcbn0oRmxvYXQpKTtcbmV4cG9ydCBkZWZhdWx0IEZsb2F0VGltZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZsb2F0VGltZS5qcy5tYXAiLCJpbXBvcnQgV2lkZ2V0RmFjdG9yeSBmcm9tIFwiLi9XaWRnZXRGYWN0b3J5XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbmltcG9ydCB7IHBhcnNlTm9kZXMgfSBmcm9tIFwiLi9oZWxwZXJzL25vZGVQYXJzZXJcIjtcbnZhciBGb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgX3dpZGdldHMgPSB7XG4gICAgICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIGlmICh0aGlzLl9jb250YWluZXIgJiYgdGhpcy5fY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX2NvbnRhaW5lci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHlpZWxkIGl0ZW1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgZ2V0IHdpZGdldHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2lkZ2V0cztcbiAgICB9XG4gICAgKi9cbiAgICBmdW5jdGlvbiBGb3JtKGZpZWxkcywgY29sdW1ucykge1xuICAgICAgICBpZiAoY29sdW1ucyA9PT0gdm9pZCAwKSB7IGNvbHVtbnMgPSA4OyB9XG4gICAgICAgIHRoaXMuX2ZpZWxkcyA9IGZpZWxkcztcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gbmV3IENvbnRhaW5lcihjb2x1bW5zKTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZvcm0ucHJvdG90eXBlLCBcImZpZWxkc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGb3JtLnByb3RvdHlwZSwgXCJjb250YWluZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBGb3JtLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICh4bWwpIHtcbiAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgdmFyIHZpZXcgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbCwgXCJ0ZXh0L3htbFwiKTtcbiAgICAgICAgdGhpcy5wYXJzZU5vZGUodmlldy5kb2N1bWVudEVsZW1lbnQsIHRoaXMuX2NvbnRhaW5lcik7XG4gICAgfTtcbiAgICBGb3JtLnByb3RvdHlwZS5wYXJzZU5vZGUgPSBmdW5jdGlvbiAobm9kZSwgY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB3aWRnZXRGYWN0b3J5ID0gbmV3IFdpZGdldEZhY3RvcnkoKTtcbiAgICAgICAgdmFyIG5vZGVzUGFyc2VkID0gcGFyc2VOb2Rlcyhub2RlLmNoaWxkTm9kZXMsIHRoaXMuX2ZpZWxkcyk7XG4gICAgICAgIG5vZGVzUGFyc2VkLmZvckVhY2goZnVuY3Rpb24gKG5vZGVQYXJzZWQpIHtcbiAgICAgICAgICAgIHZhciB0YWcgPSBub2RlUGFyc2VkLnRhZywgdGFnQXR0cmlidXRlcyA9IG5vZGVQYXJzZWQudGFnQXR0cmlidXRlcywgY2hpbGQgPSBub2RlUGFyc2VkLmNoaWxkO1xuICAgICAgICAgICAgdmFyIHdpZGdldCA9IHdpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KHRhZywgdGFnQXR0cmlidXRlcyk7XG4gICAgICAgICAgICBpZiAod2lkZ2V0IGluc3RhbmNlb2YgQ29udGFpbmVyV2lkZ2V0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFyc2VOb2RlKGNoaWxkLCB3aWRnZXQuY29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRXaWRnZXQod2lkZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxscyBjb250YWluZXIncyBmaW5kQnlJZCBtZXRob2QgdG8gZmluZCB0aGUgd2lkZ2V0cyBtYXRjaGluZyB3aXRoIHBhcmFtIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIHRvIGZpbmRcbiAgICAgKi9cbiAgICBGb3JtLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXIuZmluZEJ5SWQoaWQpO1xuICAgIH07XG4gICAgcmV0dXJuIEZvcm07XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm0uanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBDb250YWluZXJXaWRnZXQgZnJvbSBcIi4vQ29udGFpbmVyV2lkZ2V0XCI7XG52YXIgR3JvdXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEdyb3VwLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEdyb3VwKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEdyb3VwO1xufShDb250YWluZXJXaWRnZXQpKTtcbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9R3JvdXAuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBJbnRlZ2VyIGlucHV0XG4gKi9cbnZhciBJbnRlZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbnRlZ2VyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludGVnZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSW50ZWdlcjtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IEludGVnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1JbnRlZ2VyLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG52YXIgTGFiZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKExhYmVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExhYmVsKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm9wcyksIHsgbm9sYWJlbDogdHJ1ZSB9KSkgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIExhYmVsIHRleHRcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl90ZXh0ID0gXCJcIjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsaWduIHRleHRcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9hbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWQgb2YgdGhlIGZpZWxkIHRoYXQgdGhpcyBsYWJlbCBnb2VzIHdpdGguIE51bGwgaWYgaXQncyBhbiBpbmRlcGVuZGVudCBsYWJlbFxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX2ZpZWxkRm9yTGFiZWwgPSBudWxsO1xuICAgICAgICBpZiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLmZpZWxkRm9yTGFiZWwpIHtcbiAgICAgICAgICAgIF90aGlzLl9maWVsZEZvckxhYmVsID0gcHJvcHMuZmllbGRGb3JMYWJlbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMYWJlbC5wcm90b3R5cGUsIFwidGV4dFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGFiZWwucHJvdG90eXBlLCBcImFsaWduXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWxpZ247XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9hbGlnbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExhYmVsLnByb3RvdHlwZSwgXCJmaWVsZEZvckxhYmVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZmllbGRGb3JMYWJlbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpZWxkRm9yTGFiZWwgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBMYWJlbDtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IExhYmVsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGFiZWwuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBBIE1hbnkybWFueSByZWxhdGlvbnNoaXAgZmllbGRcbiAqL1xudmFyIE1hbnkybWFueSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWFueTJtYW55LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1hbnkybWFueShwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIHNpemVcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9zaXplID0gMTUwO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVsYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9yZWxhdGlvbiA9IFwiXCI7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fc2l6ZSA9IHByb3BzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMucmVsYXRpb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVsYXRpb24gPSBwcm9wcy5yZWxhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYW55Mm1hbnkucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hbnkybWFueS5wcm90b3R5cGUsIFwicmVsYXRpb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWxhdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlbGF0aW9uID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gTWFueTJtYW55O1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgTWFueTJtYW55O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TWFueTJtYW55LmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogQSBtYW55Mm9uZSByZWxhdGlvbnNoaXAgZmllbGRcbiAqL1xudmFyIE1hbnkyb25lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNYW55Mm9uZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNYW55Mm9uZShwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpZWxkIHNpemVcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9zaXplID0gMTUwO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVsYXRpb25cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9yZWxhdGlvbiA9IFwiXCI7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fc2l6ZSA9IHByb3BzLnNpemU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMucmVsYXRpb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcmVsYXRpb24gPSBwcm9wcy5yZWxhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYW55Mm9uZS5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWFueTJvbmUucHJvdG90eXBlLCBcInJlbGF0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVsYXRpb247XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWxhdGlvbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIE1hbnkyb25lO1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgTWFueTJvbmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NYW55Mm9uZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IFdpZGdldCBmcm9tIFwiLi9XaWRnZXRcIjtcbnZhciBOZXdMaW5lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhOZXdMaW5lLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5ld0xpbmUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTmV3TGluZS5wcm90b3R5cGUuZmluZEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gTmV3TGluZTtcbn0oV2lkZ2V0KSk7XG5leHBvcnQgZGVmYXVsdCBOZXdMaW5lO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TmV3TGluZS5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IENvbnRhaW5lcldpZGdldCBmcm9tIFwiLi9Db250YWluZXJXaWRnZXRcIjtcbnZhciBOb3RlYm9vayA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTm90ZWJvb2ssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTm90ZWJvb2socHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNvbHNwYW4gPSBOb3RlYm9vay5fZGVmYXVsdENvbHNwYW47XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb2xzcGFuID0gcHJvcHMuY29sc3BhbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOb3RlYm9vaywgXCJkZWZhdWx0Q29sc3BhblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIE5vdGVib29rLl9kZWZhdWx0Q29sc3BhbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIE5vdGVib29rLl9kZWZhdWx0Q29sc3BhbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTm90ZWJvb2suX2RlZmF1bHRDb2xzcGFuID0gMztcbiAgICByZXR1cm4gTm90ZWJvb2s7XG59KENvbnRhaW5lcldpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgTm90ZWJvb2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob3RlYm9vay5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IEZpZWxkIGZyb20gXCIuL0ZpZWxkXCI7XG4vKipcbiAqIEEgT25lMk1hbnkgcmVsYXRpb25zaGlwIGZpZWxkXG4gKi9cbnZhciBPbmUybWFueSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT25lMm1hbnksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT25lMm1hbnkocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaWVsZCBzaXplXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fc2l6ZSA9IDE1MDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbGF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fcmVsYXRpb24gPSBcIlwiO1xuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5zaXplKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3NpemUgPSBwcm9wcy5zaXplO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLnJlbGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3JlbGF0aW9uID0gcHJvcHMucmVsYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT25lMm1hbnkucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9uZTJtYW55LnByb3RvdHlwZSwgXCJyZWxhdGlvblwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbGF0aW9uO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmVsYXRpb24gPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBPbmUybWFueTtcbn0oRmllbGQpKTtcbmV4cG9ydCBkZWZhdWx0IE9uZTJtYW55O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T25lMm1hbnkuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBDb250YWluZXJXaWRnZXQgZnJvbSBcIi4vQ29udGFpbmVyV2lkZ2V0XCI7XG52YXIgUGFnZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUGFnZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQYWdlKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFBhZ2U7XG59KENvbnRhaW5lcldpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBhZ2UuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGbG9hdCBmcm9tIFwiLi9GbG9hdFwiO1xuLyoqXG4gKiBQcm9ncmVzc0JhciBpbnB1dFxuICovXG52YXIgUHJvZ3Jlc3NCYXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFByb2dyZXNzQmFyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByb2dyZXNzQmFyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBQcm9ncmVzc0Jhcjtcbn0oRmxvYXQpKTtcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHJvZ3Jlc3NCYXIuanMubWFwIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCBXaWRnZXRGYWN0b3J5IGZyb20gXCIuL1dpZGdldEZhY3RvcnlcIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vQ29udGFpbmVyXCI7XG52YXIgU2VhcmNoRmlsdGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlYXJjaEZpbHRlcihzZWFyY2hGaWVsZHMsIGZpZWxkcywgY29sdW1ucykge1xuICAgICAgICBpZiAoY29sdW1ucyA9PT0gdm9pZCAwKSB7IGNvbHVtbnMgPSA4OyB9XG4gICAgICAgIHRoaXMuX3NlYXJjaEZpZWxkcyA9IHNlYXJjaEZpZWxkcztcbiAgICAgICAgdGhpcy5fZmllbGRzID0gZmllbGRzO1xuICAgICAgICB0aGlzLl9zaW1wbGVTZWFyY2hDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKGNvbHVtbnMpO1xuICAgICAgICB0aGlzLl9hZHZhbmNlZFNlYXJjaENvbnRhaW5lciA9IG5ldyBDb250YWluZXIoY29sdW1ucyk7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWFyY2hGaWx0ZXIucHJvdG90eXBlLCBcInNlYXJjaEZpZWxkc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaEZpZWxkcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWFyY2hGaWx0ZXIucHJvdG90eXBlLCBcImZpZWxkc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZpZWxkcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWFyY2hGaWx0ZXIucHJvdG90eXBlLCBcInNpbXBsZVNlYXJjaENvbnRhaW5lclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpbXBsZVNlYXJjaENvbnRhaW5lcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWFyY2hGaWx0ZXIucHJvdG90eXBlLCBcImFkdmFuY2VkU2VhcmNoQ29udGFpbmVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYWR2YW5jZWRTZWFyY2hDb250YWluZXI7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBTZWFyY2hGaWx0ZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgd2lkZ2V0RmFjdG9yeSA9IG5ldyBXaWRnZXRGYWN0b3J5KCk7XG4gICAgICAgIHZhciBzaW1wbGVTZWFyY2hXaWRnZXRzID0gdGhpcy5wYXJzZUZpZWxkcyh0aGlzLnNlYXJjaEZpZWxkcy5wcmltYXJ5LCB3aWRnZXRGYWN0b3J5KTtcbiAgICAgICAgc2ltcGxlU2VhcmNoV2lkZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uICh3aWRnZXQpIHtcbiAgICAgICAgICAgIF90aGlzLnNpbXBsZVNlYXJjaENvbnRhaW5lci5hZGRXaWRnZXQod2lkZ2V0LCB7IGFkZExhYmVsOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIF90aGlzLmFkdmFuY2VkU2VhcmNoQ29udGFpbmVyLmFkZFdpZGdldCh3aWRnZXQsIHsgYWRkTGFiZWw6IGZhbHNlIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGFkdmFuY2VkU2VhcmNoV2lkZ2V0cyA9IHRoaXMucGFyc2VGaWVsZHModGhpcy5zZWFyY2hGaWVsZHMuc2Vjb25kYXJ5LCB3aWRnZXRGYWN0b3J5KTtcbiAgICAgICAgYWR2YW5jZWRTZWFyY2hXaWRnZXRzLmZvckVhY2goZnVuY3Rpb24gKHdpZGdldCkge1xuICAgICAgICAgICAgX3RoaXMuYWR2YW5jZWRTZWFyY2hDb250YWluZXIuYWRkV2lkZ2V0KHdpZGdldCwgeyBhZGRMYWJlbDogZmFsc2UgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2VhcmNoRmlsdGVyLnByb3RvdHlwZS5wYXJzZUZpZWxkcyA9IGZ1bmN0aW9uIChzZWFyY2hGaWVsZHMsIHdpZGdldEZhY3RvcnkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNlYXJjaEZpZWxkcy5tYXAoZnVuY3Rpb24gKHNlYXJjaEZpZWxkKSB7XG4gICAgICAgICAgICB2YXIgZmllbGRBdHRyaWJ1dGVzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIF90aGlzLmZpZWxkc1tzZWFyY2hGaWVsZF0pLCB7IG5hbWU6IHNlYXJjaEZpZWxkLCBjb2xzcGFuOiAyIH0pO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBmaWVsZEF0dHJpYnV0ZXMudHlwZTtcbiAgICAgICAgICAgIHJldHVybiB3aWRnZXRGYWN0b3J5LmNyZWF0ZVdpZGdldCh0eXBlLCBmaWVsZEF0dHJpYnV0ZXMpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxzIGNvbnRhaW5lcidzIGZpbmRCeUlkIG1ldGhvZCB0byBmaW5kIHRoZSB3aWRnZXRzIG1hdGNoaW5nIHdpdGggcGFyYW0gaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgaWQgdG8gZmluZFxuICAgICAqL1xuICAgIFNlYXJjaEZpbHRlci5wcm90b3R5cGUuZmluZEJ5SWQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWR2YW5jZWRTZWFyY2hDb250YWluZXIuZmluZEJ5SWQoaWQpO1xuICAgIH07XG4gICAgcmV0dXJuIFNlYXJjaEZpbHRlcjtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBTZWFyY2hGaWx0ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TZWFyY2hGaWx0ZXIuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBGaWVsZCBmcm9tIFwiLi9GaWVsZFwiO1xuLyoqXG4gKiBTZWxlY3Rpb24gZmllbGQgZm9yIGtleS12YWx1ZSBsaXN0c1xuICovXG52YXIgU2VsZWN0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2VsZWN0aW9uKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgc2l6ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuX3NpemUgPSAxNTA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZXMgYW5kIGtleXNcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9zZWxlY3Rpb25WYWx1ZXMgPSBuZXcgTWFwKFtdKTtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuc2l6ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9zaXplID0gcHJvcHMuc2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5zZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fc2VsZWN0aW9uVmFsdWVzID0gbmV3IE1hcChwcm9wcy5zZWxlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdGlvbi5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0aW9uLnByb3RvdHlwZSwgXCJzZWxlY3Rpb25WYWx1ZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25WYWx1ZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25WYWx1ZXMgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBTZWxlY3Rpb247XG59KEZpZWxkKSk7XG5leHBvcnQgZGVmYXVsdCBTZWxlY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TZWxlY3Rpb24uanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4vV2lkZ2V0XCI7XG52YXIgU2VwYXJhdG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZXBhcmF0b3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2VwYXJhdG9yKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogTGFiZWxcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLl9sYWJlbCA9IFwiXCI7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLnN0cmluZykge1xuICAgICAgICAgICAgICAgIF90aGlzLl9sYWJlbCA9IHByb3BzLnN0cmluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXBhcmF0b3IucHJvdG90eXBlLCBcImxhYmVsXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9sYWJlbCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgU2VwYXJhdG9yLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBTZXBhcmF0b3I7XG59KFdpZGdldCkpO1xuZXhwb3J0IGRlZmF1bHQgU2VwYXJhdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2VwYXJhdG9yLmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbi8qKlxuICogTXVsdGlsaW5lIGlucHV0IHdpdGggbm8gbGVuZ3RoIGxpbWl0LlxuICovXG52YXIgVGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGV4dCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUZXh0KHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmllbGQgcGxhY2UgaG9sZGVyXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5fcGxhY2Vob2xkZXIgPSAnJztcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5fcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUZXh0LnByb3RvdHlwZSwgXCJwbGFjZWhvbGRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBUZXh0O1xufShGaWVsZCkpO1xuZXhwb3J0IGRlZmF1bHQgVGV4dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRleHQuanMubWFwIiwiaW1wb3J0IFdpZGdldEZhY3RvcnkgZnJvbSBcIi4vV2lkZ2V0RmFjdG9yeVwiO1xuaW1wb3J0IHsgcGFyc2VOb2RlcyB9IGZyb20gXCIuL2hlbHBlcnMvbm9kZVBhcnNlclwiO1xudmFyIFRyZWUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVHJlZShmaWVsZHMpIHtcbiAgICAgICAgdGhpcy5fY29sdW1ucyA9IFtdO1xuICAgICAgICB0aGlzLl9maWVsZHMgPSBmaWVsZHM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmVlLnByb3RvdHlwZSwgXCJmaWVsZHNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9maWVsZHM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJlZS5wcm90b3R5cGUsIFwiY29sdW1uc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbHVtbnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBUcmVlLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uICh4bWwpIHtcbiAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgdmFyIHZpZXcgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHhtbCwgXCJ0ZXh0L3htbFwiKTtcbiAgICAgICAgdGhpcy5wYXJzZU5vZGUodmlldy5kb2N1bWVudEVsZW1lbnQpO1xuICAgIH07XG4gICAgVHJlZS5wcm90b3R5cGUucGFyc2VOb2RlID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHdpZGdldEZhY3RvcnkgPSBuZXcgV2lkZ2V0RmFjdG9yeSgpO1xuICAgICAgICB2YXIgbm9kZXNQYXJzZWQgPSBwYXJzZU5vZGVzKG5vZGUuY2hpbGROb2RlcywgdGhpcy5fZmllbGRzKTtcbiAgICAgICAgbm9kZXNQYXJzZWQuZm9yRWFjaChmdW5jdGlvbiAobm9kZVBhcnNlZCkge1xuICAgICAgICAgICAgdmFyIHRhZyA9IG5vZGVQYXJzZWQudGFnLCB0YWdBdHRyaWJ1dGVzID0gbm9kZVBhcnNlZC50YWdBdHRyaWJ1dGVzO1xuICAgICAgICAgICAgdmFyIHdpZGdldCA9IHdpZGdldEZhY3RvcnkuY3JlYXRlV2lkZ2V0KHRhZywgdGFnQXR0cmlidXRlcyk7XG4gICAgICAgICAgICBfdGhpcy5fY29sdW1ucy5wdXNoKHdpZGdldCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmluZCB0aGUgd2lkZ2V0cyBtYXRjaGluZyB3aXRoIHBhcmFtIGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIGlkIHRvIGZpbmRcbiAgICAgKi9cbiAgICBUcmVlLnByb3RvdHlwZS5maW5kQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sdW1ucy5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5maW5kQnlJZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmZpbmRCeUlkKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVHJlZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBUcmVlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VHJlZS5qcy5tYXAiLCJ2YXIgV2lkZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFdpZGdldChwcm9wcykge1xuICAgICAgICB0aGlzLl9jb2xzcGFuID0gV2lkZ2V0Ll9kZWZhdWx0Q29sc3BhbjtcbiAgICAgICAgdGhpcy5fcmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faW52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmNvbHNwYW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb2xzcGFuID0gK3Byb3BzLmNvbHNwYW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucmVhZG9ubHkgPT09IDEgfHwgcHJvcHMucmVhZG9ubHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9wcy5pbnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMuaW52aXNpYmxlID09PSAxIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmludmlzaWJsZSA9PT0gXCIxXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaW52aXNpYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXaWRnZXQsIFwiZGVmYXVsdENvbHNwYW5cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBXaWRnZXQuX2RlZmF1bHRDb2xzcGFuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgV2lkZ2V0Ll9kZWZhdWx0Q29sc3BhbiA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdpZGdldC5wcm90b3R5cGUsIFwicmVhZE9ubHlcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWFkT25seTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlYWRPbmx5ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2lkZ2V0LnByb3RvdHlwZSwgXCJjb2xzcGFuXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29sc3BhbjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbHNwYW4gPSArdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV2lkZ2V0LnByb3RvdHlwZSwgXCJpbnZpc2libGVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbnZpc2libGU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnZpc2libGUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgY29sc3BhblxuICAgICAqL1xuICAgIFdpZGdldC5fZGVmYXVsdENvbHNwYW4gPSAxO1xuICAgIHJldHVybiBXaWRnZXQ7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2lkZ2V0LmpzLm1hcCIsImltcG9ydCBOb3RlYm9vayBmcm9tIFwiLi9Ob3RlYm9va1wiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4vUGFnZVwiO1xuaW1wb3J0IEdyb3VwIGZyb20gXCIuL0dyb3VwXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5pbXBvcnQgQ2hhciBmcm9tIFwiLi9DaGFyXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi9UZXh0XCI7XG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL1NlbGVjdGlvblwiO1xuaW1wb3J0IE1hbnkyb25lIGZyb20gXCIuL01hbnkyb25lXCI7XG5pbXBvcnQgQm9vbGVhbiBmcm9tIFwiLi9Cb29sZWFuXCI7XG5pbXBvcnQgSW50ZWdlciBmcm9tIFwiLi9JbnRlZ2VyXCI7XG5pbXBvcnQgV2lkZ2V0IGZyb20gXCIuL1dpZGdldFwiO1xuaW1wb3J0IEZsb2F0IGZyb20gXCIuL0Zsb2F0XCI7XG5pbXBvcnQgRmxvYXRUaW1lIGZyb20gXCIuL0Zsb2F0VGltZVwiO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gXCIuL1Byb2dyZXNzQmFyXCI7XG5pbXBvcnQgRGF0ZSBmcm9tIFwiLi9EYXRlXCI7XG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4vRGF0ZVRpbWVcIjtcbmltcG9ydCBNYW55Mm1hbnkgZnJvbSBcIi4vTWFueTJtYW55XCI7XG5pbXBvcnQgT25lMm1hbnkgZnJvbSBcIi4vT25lMm1hbnlcIjtcbmltcG9ydCBOZXdMaW5lIGZyb20gXCIuL05ld0xpbmVcIjtcbmltcG9ydCBTZXBhcmF0b3IgZnJvbSBcIi4vU2VwYXJhdG9yXCI7XG52YXIgV2lkZ2V0RmFjdG9yeSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBXaWRnZXRGYWN0b3J5KCkge1xuICAgIH1cbiAgICBXaWRnZXRGYWN0b3J5LnByb3RvdHlwZS5zZXRXaWRnZXRDbGFzcyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIm5vdGVib29rXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBOb3RlYm9vaztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwYWdlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBQYWdlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdyb3VwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBHcm91cDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsYWJlbFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gTGFiZWw7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2hhclwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gQ2hhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0ZXh0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBUZXh0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImJ1dHRvblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gQnV0dG9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInNlbGVjdGlvblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gU2VsZWN0aW9uO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1hbnkyb25lXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBNYW55Mm9uZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBCb29sZWFuO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImludGVnZXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEludGVnZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZmxvYXRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEZsb2F0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImZsb2F0X3RpbWVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IEZsb2F0VGltZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBEYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBEYXRlVGltZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcm9ncmVzc2JhclwiOlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gUHJvZ3Jlc3NCYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWFueTJtYW55XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBNYW55Mm1hbnk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib25lMm1hbnlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE9uZTJtYW55O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm5ld2xpbmVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLl93aWRnZXRDbGFzcyA9IE5ld0xpbmU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic2VwYXJhdG9yXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5fd2lkZ2V0Q2xhc3MgPSBTZXBhcmF0b3I7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuX3dpZGdldENsYXNzID0gV2lkZ2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBXaWRnZXRGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGVXaWRnZXQgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRXaWRnZXRDbGFzcyh0eXBlKTtcbiAgICAgICAgLy8gVE9ETzogV2lkZ2V0IENsYXNzIGNvbnN0cnVjdG9ycyBzaG91bGQgdXNlIG9ubHkgdGhlIHByb3BzIG5lZWRlZCwgbm90IGFsbCBwcm9wcy5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWZpYyBjYXNlcyAob25seSBzZWxlY3RlZCBwcm9wcyBzaG91bGQgYmUgdXNlZClcbiAgICAgICAgICAgIGNhc2UgXCJub3RlYm9va1wiOlxuICAgICAgICAgICAgY2FzZSBcInBhZ2VcIjpcbiAgICAgICAgICAgIGNhc2UgXCJncm91cFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5fd2lkZ2V0Q2xhc3MocHJvcHMpO1xuICAgICAgICAgICAgLy8gR2VuZXJpYyBjYXNlXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5fd2lkZ2V0Q2xhc3MocHJvcHMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gV2lkZ2V0RmFjdG9yeTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBXaWRnZXRGYWN0b3J5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9V2lkZ2V0RmFjdG9yeS5qcy5tYXAiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIHBhcnNlTm9kZXMgPSBmdW5jdGlvbiAobm9kZXMsIGZpZWxkcykge1xuICAgIHZhciBwYXJzZWROb2RlcyA9IFtdO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQubm9kZVR5cGUgPT09IGNoaWxkLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICAgICAgdmFyIHRhZyA9IGNoaWxkLm5vZGVOYW1lO1xuICAgICAgICAgICAgdmFyIHRhZ0F0dHJpYnV0ZXNfMSA9IHt9O1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChjaGlsZC5hdHRyaWJ1dGVzLCBmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIHRhZ0F0dHJpYnV0ZXNfMVthdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJmaWVsZFwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVfMSA9IGNoaWxkLmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJXaWRnZXQgPSBjaGlsZC5nZXRBdHRyaWJ1dGUoXCJ3aWRnZXRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJXaWRnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnID0gYXR0cldpZGdldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZV8xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZmllbGRzW25hbWVfMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZpZWxkIFwiICsgbmFtZV8xICsgXCIgZG9lc24ndCBleGlzdCBpbiBmaWVsZHMgZGVmaW50aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhZyA9IGZpZWxkc1tuYW1lXzFdLnR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhZ0F0dHJpYnV0ZXNfMSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0YWdBdHRyaWJ1dGVzXzEpLCBmaWVsZHNbbmFtZV8xXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZWROb2Rlcy5wdXNoKHsgdGFnOiB0YWcsIHRhZ0F0dHJpYnV0ZXM6IHRhZ0F0dHJpYnV0ZXNfMSwgY2hpbGQ6IGNoaWxkIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnNlZE5vZGVzO1xufTtcbmV4cG9ydCB7IHBhcnNlTm9kZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vZGVQYXJzZXIuanMubWFwIiwiaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IFRyZWUgZnJvbSBcIi4vVHJlZVwiO1xuaW1wb3J0IENoYXIgZnJvbSBcIi4vQ2hhclwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBDb250YWluZXJXaWRnZXQgZnJvbSBcIi4vQ29udGFpbmVyV2lkZ2V0XCI7XG5pbXBvcnQgU2VsZWN0aW9uIGZyb20gXCIuL1NlbGVjdGlvblwiO1xuaW1wb3J0IE1hbnkyb25lIGZyb20gXCIuL01hbnkyb25lXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIi4vRmllbGRcIjtcbmltcG9ydCBXaWRnZXQgZnJvbSBcIi4vV2lkZ2V0XCI7XG5pbXBvcnQgQm9vbGVhbiBmcm9tIFwiLi9Cb29sZWFuXCI7XG5pbXBvcnQgSW50ZWdlciBmcm9tIFwiLi9JbnRlZ2VyXCI7XG5pbXBvcnQgRmxvYXQgZnJvbSBcIi4vRmxvYXRcIjtcbmltcG9ydCBGbG9hdFRpbWUgZnJvbSBcIi4vRmxvYXRUaW1lXCI7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBEYXRlIGZyb20gXCIuL0RhdGVcIjtcbmltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi9EYXRlVGltZVwiO1xuaW1wb3J0IE1hbnkybWFueSBmcm9tIFwiLi9NYW55Mm1hbnlcIjtcbmltcG9ydCBPbmUybWFueSBmcm9tIFwiLi9PbmUybWFueVwiO1xuaW1wb3J0IFNlYXJjaEZpbHRlciBmcm9tIFwiLi9TZWFyY2hGaWx0ZXJcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuL1RleHRcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IE5vdGVib29rIGZyb20gXCIuL05vdGVib29rXCI7XG5pbXBvcnQgR3JvdXAgZnJvbSBcIi4vR3JvdXBcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuL1BhZ2VcIjtcbmltcG9ydCBTZXBhcmF0b3IgZnJvbSBcIi4vU2VwYXJhdG9yXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuZXhwb3J0IHsgQ2hhciwgU2VsZWN0aW9uLCBNYW55Mm9uZSwgRmllbGQsIFdpZGdldCwgRm9ybSwgVHJlZSwgQm9vbGVhbiwgT25lMm1hbnksIEludGVnZXIsIEZsb2F0LCBGbG9hdFRpbWUsIERhdGUsIERhdGVUaW1lLCBNYW55Mm1hbnksIFNlYXJjaEZpbHRlciwgQ29udGFpbmVyLCBDb250YWluZXJXaWRnZXQsIFRleHQsIFByb2dyZXNzQmFyLCBOb3RlYm9vaywgR3JvdXAsIFBhZ2UsIExhYmVsLCBTZXBhcmF0b3IsIEJ1dHRvbiwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIhZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsgXCJyZWFjdFwiIF0sIGZhY3RvcnkpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHMuTWVkaWFRdWVyeSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKSA6IHJvb3QuTWVkaWFRdWVyeSA9IGZhY3Rvcnkocm9vdC5SZWFjdCk7XG59KFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHNlbGYgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24obW9kdWxlcykge1xuICAgICAgICBmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4gICAgICAgICAgICBpZiAoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuICAgICAgICAgICAgdmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuICAgICAgICAgICAgICAgIGk6IG1vZHVsZUlkLFxuICAgICAgICAgICAgICAgIGw6ICExLFxuICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pLCBcbiAgICAgICAgICAgIG1vZHVsZS5sID0gITAsIG1vZHVsZS5leHBvcnRzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4gICAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzLCBcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gICAgICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICExLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgICAgIGdldDogZ2V0dGVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gICAgICAgICAgICB2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID8gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZHVsZS5kZWZhdWx0O1xuICAgICAgICAgICAgfSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIFwiYVwiLCBnZXR0ZXIpLCBnZXR0ZXI7XG4gICAgICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgICAgIH0sIF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCIsIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNyk7XG4gICAgfShbIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgICAgICAgICAgIGlmIChvKSB7XG4gICAgICAgICAgICAgICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIG8pIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICAgICAgICAgICAgICAgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPYmplY3RcIiA9PT0gbiAmJiBvLmNvbnN0cnVjdG9yICYmIChuID0gby5jb25zdHJ1Y3Rvci5uYW1lKSwgXCJNYXBcIiA9PT0gbiB8fCBcIlNldFwiID09PSBuID8gQXJyYXkuZnJvbShvKSA6IFwiQXJndW1lbnRzXCIgPT09IG4gfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikgPyBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pIDogdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgICAgICAgICAobnVsbCA9PSBsZW4gfHwgbGVuID4gYXJyLmxlbmd0aCkgJiYgKGxlbiA9IGFyci5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICAgICAgICAgICAgcmV0dXJuIGFycjI7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2FyciA9IFtdLCBfbiA9ICEwLCBfZCA9ICExLCBfZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfcywgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKSAmJiAoX2Fyci5wdXNoKF9zLnZhbHVlKSwgXG4gICAgICAgICAgICAgICAgICAgICFpIHx8IF9hcnIubGVuZ3RoICE9PSBpKTsgX24gPSAhMCkgO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBfZCA9ICEwLCBfZSA9IGVycjtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX24gfHwgbnVsbCA9PSBfaS5yZXR1cm4gfHwgX2kucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfYXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfXyksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9tYXRjaG1lZGlhcXVlcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oOCksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9tYXRjaG1lZGlhcXVlcnlfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9tYXRjaG1lZGlhcXVlcnlfXyksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9oeXBoZW5hdGVfc3R5bGVfbmFtZV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX3NoYWxsb3dfZXF1YWxfb2JqZWN0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19zaGFsbG93X2VxdWFsX29iamVjdHNfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19zaGFsbG93X2VxdWFsX29iamVjdHNfXyksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fdG9RdWVyeV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19Db250ZXh0X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpLCBtYWtlUXVlcnkgPSBmdW5jdGlvbihzZXR0aW5ncykge1xuICAgICAgICAgICAgcmV0dXJuIHNldHRpbmdzLnF1ZXJ5IHx8IE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX3RvUXVlcnlfXy5hKShzZXR0aW5ncyk7XG4gICAgICAgIH0sIGh5cGhlbmF0ZUtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgIGlmICghb2JqKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgICAgIHJldHVybiAwID09PSBrZXlzLmxlbmd0aCA/IG51bGwgOiBrZXlzLnJlZHVjZShmdW5jdGlvbihyZXN1bHQsIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRbT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9oeXBoZW5hdGVfc3R5bGVfbmFtZV9fLmEpKGtleSldID0gb2JqW2tleV0sIFxuICAgICAgICAgICAgICAgIHJlc3VsdDtcbiAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfSwgdXNlSXNVcGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciByZWYgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlUmVmKCExKTtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJlZi5jdXJyZW50ID0gITA7XG4gICAgICAgICAgICB9LCBbXSksIHJlZi5jdXJyZW50O1xuICAgICAgICB9LCB1c2VEZXZpY2UgPSBmdW5jdGlvbihkZXZpY2VGcm9tUHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBkZXZpY2VGcm9tQ29udGV4dCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VDb250ZXh0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fQ29udGV4dF9fLmEpLCBnZXREZXZpY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaHlwaGVuYXRlS2V5cyhkZXZpY2VGcm9tUHJvcHMpIHx8IGh5cGhlbmF0ZUtleXMoZGV2aWNlRnJvbUNvbnRleHQpO1xuICAgICAgICAgICAgfSwgX1JlYWN0JHVzZVN0YXRlID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZVN0YXRlKGdldERldmljZSksIF9SZWFjdCR1c2VTdGF0ZTIgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUsIDIpLCBkZXZpY2UgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLCBzZXREZXZpY2UgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0RldmljZSA9IGdldERldmljZSgpO1xuICAgICAgICAgICAgICAgIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19zaGFsbG93X2VxdWFsX29iamVjdHNfX19kZWZhdWx0KCkoZGV2aWNlLCBuZXdEZXZpY2UpIHx8IHNldERldmljZShuZXdEZXZpY2UpO1xuICAgICAgICAgICAgfSwgWyBkZXZpY2VGcm9tUHJvcHMsIGRldmljZUZyb21Db250ZXh0IF0pLCBkZXZpY2U7XG4gICAgICAgIH0sIHVzZVF1ZXJ5ID0gZnVuY3Rpb24oc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHZhciBnZXRRdWVyeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYWtlUXVlcnkoc2V0dGluZ3MpO1xuICAgICAgICAgICAgfSwgX1JlYWN0JHVzZVN0YXRlMyA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VTdGF0ZShnZXRRdWVyeSksIF9SZWFjdCR1c2VTdGF0ZTQgPSBfc2xpY2VkVG9BcnJheShfUmVhY3QkdXNlU3RhdGUzLCAyKSwgcXVlcnkgPSBfUmVhY3QkdXNlU3RhdGU0WzBdLCBzZXRRdWVyeSA9IF9SZWFjdCR1c2VTdGF0ZTRbMV07XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLnVzZUVmZmVjdChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3UXVlcnkgPSBnZXRRdWVyeSgpO1xuICAgICAgICAgICAgICAgIHF1ZXJ5ICE9PSBuZXdRdWVyeSAmJiBzZXRRdWVyeShuZXdRdWVyeSk7XG4gICAgICAgICAgICB9LCBbIHNldHRpbmdzIF0pLCBxdWVyeTtcbiAgICAgICAgfSwgdXNlTWF0Y2hNZWRpYSA9IGZ1bmN0aW9uKHF1ZXJ5LCBkZXZpY2UpIHtcbiAgICAgICAgICAgIHZhciBnZXRNYXRjaE1lZGlhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9tYXRjaG1lZGlhcXVlcnlfX19kZWZhdWx0KCkocXVlcnksIGRldmljZSB8fCB7fSwgISFkZXZpY2UpO1xuICAgICAgICAgICAgfSwgX1JlYWN0JHVzZVN0YXRlNSA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VTdGF0ZShnZXRNYXRjaE1lZGlhKSwgX1JlYWN0JHVzZVN0YXRlNiA9IF9zbGljZWRUb0FycmF5KF9SZWFjdCR1c2VTdGF0ZTUsIDIpLCBtcSA9IF9SZWFjdCR1c2VTdGF0ZTZbMF0sIHNldE1xID0gX1JlYWN0JHVzZVN0YXRlNlsxXSwgaXNVcGRhdGUgPSB1c2VJc1VwZGF0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VFZmZlY3QoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzVXBkYXRlICYmIHNldE1xKGdldE1hdGNoTWVkaWEoKSksIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBtcS5kaXNwb3NlKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIFsgcXVlcnksIGRldmljZSBdKSwgbXE7XG4gICAgICAgIH0sIHVzZU1hdGNoZXMgPSBmdW5jdGlvbihtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgICB2YXIgX1JlYWN0JHVzZVN0YXRlNyA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQuYS51c2VTdGF0ZShtZWRpYVF1ZXJ5Lm1hdGNoZXMpLCBfUmVhY3QkdXNlU3RhdGU4ID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlNywgMiksIG1hdGNoZXMgPSBfUmVhY3QkdXNlU3RhdGU4WzBdLCBzZXRNYXRjaGVzID0gX1JlYWN0JHVzZVN0YXRlOFsxXTtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB1cGRhdGVNYXRjaGVzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldE1hdGNoZXMobWVkaWFRdWVyeS5tYXRjaGVzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBtZWRpYVF1ZXJ5LmFkZExpc3RlbmVyKHVwZGF0ZU1hdGNoZXMpLCB1cGRhdGVNYXRjaGVzKCksIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBtZWRpYVF1ZXJ5LnJlbW92ZUxpc3RlbmVyKHVwZGF0ZU1hdGNoZXMpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9LCBbIG1lZGlhUXVlcnkgXSksIG1hdGNoZXM7XG4gICAgICAgIH0sIHVzZU1lZGlhUXVlcnkgPSBmdW5jdGlvbihzZXR0aW5ncywgZGV2aWNlLCBvbkNoYW5nZSkge1xuICAgICAgICAgICAgdmFyIGRldmljZVNldHRpbmdzID0gdXNlRGV2aWNlKGRldmljZSksIHF1ZXJ5ID0gdXNlUXVlcnkoc2V0dGluZ3MpO1xuICAgICAgICAgICAgaWYgKCFxdWVyeSkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvciBtaXNzaW5nIE1lZGlhUXVlcnkhXCIpO1xuICAgICAgICAgICAgdmFyIG1xID0gdXNlTWF0Y2hNZWRpYShxdWVyeSwgZGV2aWNlU2V0dGluZ3MpLCBtYXRjaGVzID0gdXNlTWF0Y2hlcyhtcSksIGlzVXBkYXRlID0gdXNlSXNVcGRhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfX19kZWZhdWx0LmEudXNlRWZmZWN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlzVXBkYXRlICYmIG9uQ2hhbmdlICYmIG9uQ2hhbmdlKG1hdGNoZXMpO1xuICAgICAgICAgICAgfSwgWyBtYXRjaGVzIF0pLCBtYXRjaGVzO1xuICAgICAgICB9O1xuICAgICAgICBfX3dlYnBhY2tfZXhwb3J0c19fLmEgPSB1c2VNZWRpYVF1ZXJ5O1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gdG9IeXBoZW5Mb3dlcihtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiLVwiICsgbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUobmFtZSkge1xuICAgICAgICAgICAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KG5hbWUpKSByZXR1cm4gY2FjaGVbbmFtZV07XG4gICAgICAgICAgICB2YXIgaE5hbWUgPSBuYW1lLnJlcGxhY2UodXBwZXJjYXNlUGF0dGVybiwgdG9IeXBoZW5Mb3dlcik7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVbbmFtZV0gPSBtc1BhdHRlcm4udGVzdChoTmFtZSkgPyBcIi1cIiArIGhOYW1lIDogaE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvW0EtWl0vZywgbXNQYXR0ZXJuID0gL15tcy0vLCBjYWNoZSA9IHt9O1xuICAgICAgICBfX3dlYnBhY2tfZXhwb3J0c19fLmEgPSBoeXBoZW5hdGVTdHlsZU5hbWU7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2h5cGhlbmF0ZV9zdHlsZV9uYW1lX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX21lZGlhUXVlcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpLCBuZWdhdGUgPSBmdW5jdGlvbihjb25kKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJub3QgXCIuY29uY2F0KGNvbmQpO1xuICAgICAgICB9LCBrZXlWYWwgPSBmdW5jdGlvbihrLCB2KSB7XG4gICAgICAgICAgICB2YXIgcmVhbEtleSA9IE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfaHlwaGVuYXRlX3N0eWxlX25hbWVfXy5hKShrKTtcbiAgICAgICAgICAgIHJldHVybiBcIm51bWJlclwiID09IHR5cGVvZiB2ICYmICh2ID0gXCJcIi5jb25jYXQodiwgXCJweFwiKSksICEwID09PSB2ID8gcmVhbEtleSA6ICExID09PSB2ID8gbmVnYXRlKHJlYWxLZXkpIDogXCIoXCIuY29uY2F0KHJlYWxLZXksIFwiOiBcIikuY29uY2F0KHYsIFwiKVwiKTtcbiAgICAgICAgfSwgam9pbiA9IGZ1bmN0aW9uKGNvbmRzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uZHMuam9pbihcIiBhbmQgXCIpO1xuICAgICAgICB9LCB0b1F1ZXJ5ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICB2YXIgcnVsZXMgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX21lZGlhUXVlcnlfXy5hLmFsbCkuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSBvYmpba107XG4gICAgICAgICAgICAgICAgbnVsbCAhPSB2ICYmIHJ1bGVzLnB1c2goa2V5VmFsKGssIHYpKTtcbiAgICAgICAgICAgIH0pLCBqb2luKHJ1bGVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgX193ZWJwYWNrX2V4cG9ydHNfXy5hID0gdG9RdWVyeTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IFwiU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRURcIjtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcmVhY3RfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9yZWFjdF9fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X18pLCBDb250ZXh0ID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3JlYWN0X19fZGVmYXVsdC5hLmNyZWF0ZUNvbnRleHQoKTtcbiAgICAgICAgX193ZWJwYWNrX2V4cG9ydHNfXy5hID0gQ29udGV4dDtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfZXhwb3J0c19fLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICAgICAgdmFsdWU6ICEwXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191c2VNZWRpYVF1ZXJ5X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApLCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX0NvbXBvbmVudF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdG9RdWVyeV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19Db250ZXh0X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJkZWZhdWx0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fQ29tcG9uZW50X18uYTtcbiAgICAgICAgfSksIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInVzZU1lZGlhUXVlcnlcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191c2VNZWRpYVF1ZXJ5X18uYTtcbiAgICAgICAgfSksIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcInRvUXVlcnlcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX190b1F1ZXJ5X18uYTtcbiAgICAgICAgfSksIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkNvbnRleHRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19Db250ZXh0X18uYTtcbiAgICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBNcWwocXVlcnksIHZhbHVlcywgZm9yY2VTdGF0aWMpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgbXFsICYmIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIG1xbCAmJiBtcWwucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlKGV2dCkge1xuICAgICAgICAgICAgICAgIHNlbGYubWF0Y2hlcyA9IGV2dC5tYXRjaGVzLCBzZWxmLm1lZGlhID0gZXZ0Lm1lZGlhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICAgICAgICAgICAgICBtcWwgJiYgbXFsLnJlbW92ZUxpc3RlbmVyKHVwZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoZHluYW1pY01hdGNoICYmICFmb3JjZVN0YXRpYykge1xuICAgICAgICAgICAgICAgIHZhciBtcWwgPSBkeW5hbWljTWF0Y2guY2FsbCh3aW5kb3csIHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGNoZXMgPSBtcWwubWF0Y2hlcywgdGhpcy5tZWRpYSA9IG1xbC5tZWRpYSwgbXFsLmFkZExpc3RlbmVyKHVwZGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2UgdGhpcy5tYXRjaGVzID0gc3RhdGljTWF0Y2gocXVlcnksIHZhbHVlcyksIHRoaXMubWVkaWEgPSBxdWVyeTtcbiAgICAgICAgICAgIHRoaXMuYWRkTGlzdGVuZXIgPSBhZGRMaXN0ZW5lciwgdGhpcy5yZW1vdmVMaXN0ZW5lciA9IHJlbW92ZUxpc3RlbmVyLCB0aGlzLmRpc3Bvc2UgPSBkaXNwb3NlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIG1hdGNoTWVkaWEocXVlcnksIHZhbHVlcywgZm9yY2VTdGF0aWMpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTXFsKHF1ZXJ5LCB2YWx1ZXMsIGZvcmNlU3RhdGljKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhdGljTWF0Y2ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpLm1hdGNoLCBkeW5hbWljTWF0Y2ggPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3cgPyB3aW5kb3cubWF0Y2hNZWRpYSA6IG51bGw7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gbWF0Y2hNZWRpYTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGZ1bmN0aW9uIG1hdGNoUXVlcnkobWVkaWFRdWVyeSwgdmFsdWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VRdWVyeShtZWRpYVF1ZXJ5KS5zb21lKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGludmVyc2UgPSBxdWVyeS5pbnZlcnNlLCB0eXBlTWF0Y2ggPSBcImFsbFwiID09PSBxdWVyeS50eXBlIHx8IHZhbHVlcy50eXBlID09PSBxdWVyeS50eXBlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlTWF0Y2ggJiYgaW52ZXJzZSB8fCAhdHlwZU1hdGNoICYmICFpbnZlcnNlKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgdmFyIGV4cHJlc3Npb25zTWF0Y2ggPSBxdWVyeS5leHByZXNzaW9ucy5ldmVyeShmdW5jdGlvbihleHByZXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmZWF0dXJlID0gZXhwcmVzc2lvbi5mZWF0dXJlLCBtb2RpZmllciA9IGV4cHJlc3Npb24ubW9kaWZpZXIsIGV4cFZhbHVlID0gZXhwcmVzc2lvbi52YWx1ZSwgdmFsdWUgPSB2YWx1ZXNbZmVhdHVyZV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm9yaWVudGF0aW9uXCI6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInNjYW5cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBleHBWYWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIndpZHRoXCI6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImhlaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZXZpY2Utd2lkdGhcIjpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGV2aWNlLWhlaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwVmFsdWUgPSB0b1B4KGV4cFZhbHVlKSwgdmFsdWUgPSB0b1B4KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcInJlc29sdXRpb25cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cFZhbHVlID0gdG9EcGkoZXhwVmFsdWUpLCB2YWx1ZSA9IHRvRHBpKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImFzcGVjdC1yYXRpb1wiOlxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZXZpY2UtYXNwZWN0LXJhdGlvXCI6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRldmljZS1waXhlbC1yYXRpb1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwVmFsdWUgPSB0b0RlY2ltYWwoZXhwVmFsdWUpLCB2YWx1ZSA9IHRvRGVjaW1hbCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJncmlkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbG9yXCI6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbG9yLWluZGV4XCI6XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1vbm9jaHJvbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cFZhbHVlID0gcGFyc2VJbnQoZXhwVmFsdWUsIDEwKSB8fCAxLCB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlLCAxMCkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1pblwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID49IGV4cFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1heFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlIDw9IGV4cFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gZXhwVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwcmVzc2lvbnNNYXRjaCAmJiAhaW52ZXJzZSB8fCAhZXhwcmVzc2lvbnNNYXRjaCAmJiBpbnZlcnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcGFyc2VRdWVyeShtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gbWVkaWFRdWVyeS5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uKHF1ZXJ5KSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSBxdWVyeS50cmltKCk7XG4gICAgICAgICAgICAgICAgdmFyIGNhcHR1cmVzID0gcXVlcnkubWF0Y2goUkVfTUVESUFfUVVFUlkpLCBtb2RpZmllciA9IGNhcHR1cmVzWzFdLCB0eXBlID0gY2FwdHVyZXNbMl0sIGV4cHJlc3Npb25zID0gY2FwdHVyZXNbM10gfHwgXCJcIiwgcGFyc2VkID0ge307XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5pbnZlcnNlID0gISFtb2RpZmllciAmJiBcIm5vdFwiID09PSBtb2RpZmllci50b0xvd2VyQ2FzZSgpLCBwYXJzZWQudHlwZSA9IHR5cGUgPyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBcImFsbFwiLCBcbiAgICAgICAgICAgICAgICBleHByZXNzaW9ucyA9IGV4cHJlc3Npb25zLm1hdGNoKC9cXChbXlxcKV0rXFwpL2cpIHx8IFtdLCBwYXJzZWQuZXhwcmVzc2lvbnMgPSBleHByZXNzaW9ucy5tYXAoZnVuY3Rpb24oZXhwcmVzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FwdHVyZXMgPSBleHByZXNzaW9uLm1hdGNoKFJFX01RX0VYUFJFU1NJT04pLCBmZWF0dXJlID0gY2FwdHVyZXNbMV0udG9Mb3dlckNhc2UoKS5tYXRjaChSRV9NUV9GRUFUVVJFKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBmZWF0dXJlWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZTogZmVhdHVyZVsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXB0dXJlc1syXVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pLCBwYXJzZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiB0b0RlY2ltYWwocmF0aW8pIHtcbiAgICAgICAgICAgIHZhciBudW1iZXJzLCBkZWNpbWFsID0gTnVtYmVyKHJhdGlvKTtcbiAgICAgICAgICAgIHJldHVybiBkZWNpbWFsIHx8IChudW1iZXJzID0gcmF0aW8ubWF0Y2goL14oXFxkKylcXHMqXFwvXFxzKihcXGQrKSQvKSwgZGVjaW1hbCA9IG51bWJlcnNbMV0gLyBudW1iZXJzWzJdKSwgXG4gICAgICAgICAgICBkZWNpbWFsO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRvRHBpKHJlc29sdXRpb24pIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlRmxvYXQocmVzb2x1dGlvbik7XG4gICAgICAgICAgICBzd2l0Y2ggKFN0cmluZyhyZXNvbHV0aW9uKS5tYXRjaChSRV9SRVNPTFVUSU9OX1VOSVQpWzFdKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJkcGNtXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlIC8gMi41NDtcblxuICAgICAgICAgICAgICBjYXNlIFwiZHBweFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiA5NiAqIHZhbHVlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHRvUHgobGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KGxlbmd0aCk7XG4gICAgICAgICAgICBzd2l0Y2ggKFN0cmluZyhsZW5ndGgpLm1hdGNoKFJFX0xFTkdUSF9VTklUKVsxXSkge1xuICAgICAgICAgICAgICBjYXNlIFwiZW1cIjpcbiAgICAgICAgICAgICAgY2FzZSBcInJlbVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAxNiAqIHZhbHVlO1xuXG4gICAgICAgICAgICAgIGNhc2UgXCJjbVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiA5NiAqIHZhbHVlIC8gMi41NDtcblxuICAgICAgICAgICAgICBjYXNlIFwibW1cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gOTYgKiB2YWx1ZSAvIDIuNTQgLyAxMDtcblxuICAgICAgICAgICAgICBjYXNlIFwiaW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gOTYgKiB2YWx1ZTtcblxuICAgICAgICAgICAgICBjYXNlIFwicHRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gNzIgKiB2YWx1ZTtcblxuICAgICAgICAgICAgICBjYXNlIFwicGNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gNzIgKiB2YWx1ZSAvIDEyO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMubWF0Y2ggPSBtYXRjaFF1ZXJ5LCBleHBvcnRzLnBhcnNlID0gcGFyc2VRdWVyeTtcbiAgICAgICAgdmFyIFJFX01FRElBX1FVRVJZID0gLyg/Oihvbmx5fG5vdCk/XFxzKihbXlxcc1xcKFxcKV0rKSg/OlxccyphbmQpP1xccyopPyguKyk/L2ksIFJFX01RX0VYUFJFU1NJT04gPSAvXFwoXFxzKihbXlxcc1xcOlxcKV0rKVxccyooPzpcXDpcXHMqKFteXFxzXFwpXSspKT9cXHMqXFwpLywgUkVfTVFfRkVBVFVSRSA9IC9eKD86KG1pbnxtYXgpLSk/KC4rKS8sIFJFX0xFTkdUSF9VTklUID0gLyhlbXxyZW18cHh8Y218bW18aW58cHR8cGMpPyQvLCBSRV9SRVNPTFVUSU9OX1VOSVQgPSAvKGRwaXxkcGNtfGRwcHgpPyQvO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gc2hhbGxvd0VxdWFsT2JqZWN0cyhvYmpBLCBvYmpCKSB7XG4gICAgICAgICAgICBpZiAob2JqQSA9PT0gb2JqQikgcmV0dXJuICEwO1xuICAgICAgICAgICAgaWYgKCFvYmpBIHx8ICFvYmpCKSByZXR1cm4gITE7XG4gICAgICAgICAgICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhvYmpBKSwgYktleXMgPSBPYmplY3Qua2V5cyhvYmpCKSwgbGVuID0gYUtleXMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGJLZXlzLmxlbmd0aCAhPT0gbGVuKSByZXR1cm4gITE7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGFLZXlzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChvYmpBW2tleV0gIT09IG9iakJba2V5XSB8fCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iakIsIGtleSkpIHJldHVybiAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAhMDtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHNoYWxsb3dFcXVhbE9iamVjdHM7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICAgICAgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ga2V5cztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTtcbiAgICAgICAgICAgICAgICBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgICAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5IGluIG9iaiA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiAhMFxuICAgICAgICAgICAgfSkgOiBvYmpba2V5XSA9IHZhbHVlLCBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX18pLCBzdHJpbmdPck51bWJlciA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm9uZU9mVHlwZShbIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLnN0cmluZywgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEubnVtYmVyIF0pLCBtYXRjaGVycyA9IHtcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5vbmVPZihbIFwicG9ydHJhaXRcIiwgXCJsYW5kc2NhcGVcIiBdKSxcbiAgICAgICAgICAgIHNjYW46IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm9uZU9mKFsgXCJwcm9ncmVzc2l2ZVwiLCBcImludGVybGFjZVwiIF0pLFxuICAgICAgICAgICAgYXNwZWN0UmF0aW86IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLnN0cmluZyxcbiAgICAgICAgICAgIGRldmljZUFzcGVjdFJhdGlvOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsXG4gICAgICAgICAgICBoZWlnaHQ6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgZGV2aWNlSGVpZ2h0OiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIHdpZHRoOiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIGRldmljZVdpZHRoOiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIGNvbG9yOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgY29sb3JJbmRleDogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIG1vbm9jaHJvbWU6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICByZXNvbHV0aW9uOiBzdHJpbmdPck51bWJlclxuICAgICAgICB9LCBmZWF0dXJlcyA9IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgbWluQXNwZWN0UmF0aW86IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLnN0cmluZyxcbiAgICAgICAgICAgIG1heEFzcGVjdFJhdGlvOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5zdHJpbmcsXG4gICAgICAgICAgICBtaW5EZXZpY2VBc3BlY3RSYXRpbzogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuc3RyaW5nLFxuICAgICAgICAgICAgbWF4RGV2aWNlQXNwZWN0UmF0aW86IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLnN0cmluZyxcbiAgICAgICAgICAgIG1pbkhlaWdodDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWluRGV2aWNlSGVpZ2h0OiBzdHJpbmdPck51bWJlcixcbiAgICAgICAgICAgIG1heERldmljZUhlaWdodDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBtaW5XaWR0aDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBtYXhXaWR0aDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBtaW5EZXZpY2VXaWR0aDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBtYXhEZXZpY2VXaWR0aDogc3RyaW5nT3JOdW1iZXIsXG4gICAgICAgICAgICBtaW5Db2xvcjogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEubnVtYmVyLFxuICAgICAgICAgICAgbWF4Q29sb3I6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICAgICAgICAgIG1pbkNvbG9ySW5kZXg6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICAgICAgICAgIG1heENvbG9ySW5kZXg6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICAgICAgICAgIG1pbk1vbm9jaHJvbWU6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICAgICAgICAgIG1heE1vbm9jaHJvbWU6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLm51bWJlcixcbiAgICAgICAgICAgIG1pblJlc29sdXRpb246IHN0cmluZ09yTnVtYmVyLFxuICAgICAgICAgICAgbWF4UmVzb2x1dGlvbjogc3RyaW5nT3JOdW1iZXJcbiAgICAgICAgfSwgbWF0Y2hlcnMpLCB0eXBlcyA9IHtcbiAgICAgICAgICAgIGFsbDogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIGdyaWQ6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBhdXJhbDogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIGJyYWlsbGU6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2wsXG4gICAgICAgICAgICBoYW5kaGVsZDogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIHByaW50OiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgcHJvamVjdGlvbjogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIHNjcmVlbjogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIHR0eTogX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX3Byb3BfdHlwZXNfX19kZWZhdWx0LmEuYm9vbCxcbiAgICAgICAgICAgIHR2OiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfcHJvcF90eXBlc19fX2RlZmF1bHQuYS5ib29sLFxuICAgICAgICAgICAgZW1ib3NzZWQ6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9wcm9wX3R5cGVzX19fZGVmYXVsdC5hLmJvb2xcbiAgICAgICAgfSwgYWxsID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0eXBlcyksIGZlYXR1cmVzKTtcbiAgICAgICAgbWF0Y2hlcnMudHlwZSA9IE9iamVjdC5rZXlzKHR5cGVzKSwgX193ZWJwYWNrX2V4cG9ydHNfXy5hID0ge1xuICAgICAgICAgICAgYWxsOiBhbGwsXG4gICAgICAgICAgICB0eXBlczogdHlwZXMsXG4gICAgICAgICAgICBtYXRjaGVyczogbWF0Y2hlcnMsXG4gICAgICAgICAgICBmZWF0dXJlczogZmVhdHVyZXNcbiAgICAgICAgfTtcbiAgICB9LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgdmFyIFJlYWN0SXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpKFJlYWN0SXMuaXNFbGVtZW50LCAhMCk7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICAhZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiB0eXBlIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdHlwZSB8fCB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBcIm9iamVjdFwiID09IHR5cGVvZiB0eXBlICYmIG51bGwgIT09IHR5cGUgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIG9iamVjdCAmJiBudWxsICE9PSBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlIHx8IChoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9ICEwLCBcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLlwiKSksIFxuICAgICAgICAgICAgICAgIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwib2JqZWN0XCIgPT0gdHlwZW9mIG9iamVjdCAmJiBudWxsICE9PSBvYmplY3QgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGFzU3ltYm9sID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLmZvciwgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIikgOiA2MDEwMywgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpIDogNjAxMDYsIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIikgOiA2MDEwNywgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKSA6IDYwMTA4LCBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpIDogNjAxMTQsIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIikgOiA2MDEwOSwgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIikgOiA2MDExMCwgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIikgOiA2MDExMSwgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpIDogNjAxMTEsIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIikgOiA2MDExMiwgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKSA6IDYwMTEzLCBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKSA6IDYwMTIwLCBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKSA6IDYwMTE1LCBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKSA6IDYwMTE2LCBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcihcInJlYWN0LmJsb2NrXCIpIDogNjAxMjEsIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QuZnVuZGFtZW50YWxcIikgOiA2MDExNywgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3QucmVzcG9uZGVyXCIpIDogNjAxMTgsIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKFwicmVhY3Quc2NvcGVcIikgOiA2MDExOSwgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFLCBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFLCBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEUsIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEUsIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEUsIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLCBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEUsIExhenkgPSBSRUFDVF9MQVpZX1RZUEUsIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEUsIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFLCBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEUsIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFLCBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEUsIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gITE7XG4gICAgICAgICAgICBleHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZSwgZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlLCBleHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lciwgXG4gICAgICAgICAgICBleHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlciwgZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudCwgZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZiwgXG4gICAgICAgICAgICBleHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQsIGV4cG9ydHMuTGF6eSA9IExhenksIGV4cG9ydHMuTWVtbyA9IE1lbW8sIGV4cG9ydHMuUG9ydGFsID0gUG9ydGFsLCBcbiAgICAgICAgICAgIGV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlciwgZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZSwgZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlLCBcbiAgICAgICAgICAgIGV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZSwgZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZSwgXG4gICAgICAgICAgICBleHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXIsIGV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlciwgXG4gICAgICAgICAgICBleHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudCwgZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWYsIGV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQsIFxuICAgICAgICAgICAgZXhwb3J0cy5pc0xhenkgPSBpc0xhenksIGV4cG9ydHMuaXNNZW1vID0gaXNNZW1vLCBleHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWwsIGV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXIsIFxuICAgICAgICAgICAgZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGUsIGV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2UsIGV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlLCBcbiAgICAgICAgICAgIGV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICAgICAgICB9KCk7XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFJlYWN0SXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpLCBhc3NpZ24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpLCBjaGVja1Byb3BUeXBlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpLCBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSksIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJXYXJuaW5nOiBcIiArIHRleHQ7XG4gICAgICAgICAgICBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH0sIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlcmF0b3JGbikgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHggPT09IHkgPyAwICE9PSB4IHx8IDEgLyB4ID09IDEgLyB5IDogeCAhPT0geCAmJiB5ICE9PSB5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSwgdGhpcy5zdGFjayA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTLCBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWUsIFxuICAgICAgICAgICAgICAgICAgICBzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXCJDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiBVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uIFJlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyLm5hbWUgPSBcIkludmFyaWFudCBWaW9sYXRpb25cIiwgZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGNvbnNvbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgXCI6XCIgKyBwcm9wTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgMyAmJiAocHJpbnRXYXJuaW5nKFwiWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gZnVuY3Rpb24gZm9yIHRoZSBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgcHJvcCBvbiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuIFlvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzIGZvciBkZXRhaWxzLlwiKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gITAsIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50KyspO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsID09IHByb3BzW3Byb3BOYW1lXSA/IGlzUmVxdWlyZWQgPyBuZXcgUHJvcFR5cGVFcnJvcihudWxsID09PSBwcm9wc1twcm9wTmFtZV0gPyBcIlRoZSBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC5cIiA6IFwiVGhlIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuXCIpIDogbnVsbCA6IHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9LCBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDAsIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCAhMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsICEwKSwgY2hhaW5lZENoZWNrVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChnZXRQcm9wVHlwZShwcm9wVmFsdWUpICE9PSBleHBlY3RlZFR5cGUpIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiB0eXBlIGBcIiArIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYFwiICsgZXhwZWN0ZWRUeXBlICsgXCJgLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdHlwZUNoZWNrZXIpIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIlByb3BlcnR5IGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiBjb21wb25lbnQgYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi5cIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBnZXRQcm9wVHlwZShwcm9wVmFsdWUpICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGFuIGFycmF5LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgXCJbXCIgKyBpICsgXCJdXCIsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBpbnN0YW5jZSBvZiBgXCIgKyBleHBlY3RlZENsYXNzTmFtZSArIFwiYC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdLCBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInN5bWJvbFwiID09PSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSkgPyBTdHJpbmcodmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdmFsdWUgYFwiICsgU3RyaW5nKHByb3BWYWx1ZSkgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgb25lIG9mIFwiICsgdmFsdWVzU3RyaW5nICsgXCIuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykgPyBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkgOiAocHJpbnRXYXJuaW5nKGFyZ3VtZW50cy5sZW5ndGggPiAxID8gXCJJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCBcIiArIGFyZ3VtZW50cy5sZW5ndGggKyBcIiBhcmd1bWVudHMuIEEgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLlwiIDogXCJJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS5cIiksIFxuICAgICAgICAgICAgICAgIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0eXBlQ2hlY2tlcikgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiUHJvcGVydHkgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIGNvbXBvbmVudCBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi5cIik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV0sIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT09IHByb3BUeXBlKSByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBwcm9wVHlwZSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBhbiBvYmplY3QuXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyBcIi5cIiArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudWxsID09ICgwLCBhcnJheU9mVHlwZUNoZWNrZXJzW2ldKShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHJldHVybiBwcmludFdhcm5pbmcoXCJJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuXCIpLCBcbiAgICAgICAgICAgICAgICBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGNoZWNrZXIpIHJldHVybiBwcmludFdhcm5pbmcoXCJJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgcmVjZWl2ZWQgXCIgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyBcIiBhdCBpbmRleCBcIiArIGkgKyBcIi5cIiksIFxuICAgICAgICAgICAgICAgICAgICBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV0sIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgIT09IHByb3BUeXBlKSByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBwcm9wVHlwZSArIFwiYCBzdXBwbGllZCB0byBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBgb2JqZWN0YC5cIik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArIFwiLlwiICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXSwgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJvYmplY3RcIiAhPT0gcHJvcFR5cGUpIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiB0eXBlIGBcIiArIHByb3BUeXBlICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGBvYmplY3RgLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2hlY2tlcikgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFwiSW52YWxpZCBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIGtleSBgXCIgKyBrZXkgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYC5cXG5CYWQgb2JqZWN0OiBcIiArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgXCIgIFwiKSArIFwiXFxuVmFsaWQga2V5czogXCIgKyBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgXCIgIFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgXCIuXCIgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gITA7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgPT09IHByb3BWYWx1ZSB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSByZXR1cm4gITA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZXJhdG9yRm4pIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0ZXAsIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSByZXR1cm4gITE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBmb3IgKDshKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeSAmJiAhaXNOb2RlKGVudHJ5WzFdKSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhMDtcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzeW1ib2xcIiA9PT0gcHJvcFR5cGUgfHwgISFwcm9wVmFsdWUgJiYgKFwiU3ltYm9sXCIgPT09IHByb3BWYWx1ZVtcIkBAdG9TdHJpbmdUYWdcIl0gfHwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSA/IFwiYXJyYXlcIiA6IHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCA/IFwib2JqZWN0XCIgOiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSA/IFwic3ltYm9sXCIgOiBwcm9wVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHByb3BWYWx1ZSB8fCBudWxsID09PSBwcm9wVmFsdWUpIHJldHVybiBcIlwiICsgcHJvcFZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKFwib2JqZWN0XCIgPT09IHByb3BUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gXCJkYXRlXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiBcInJlZ2V4cFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvcFR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJhcnJheVwiOlxuICAgICAgICAgICAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJhbiBcIiArIHR5cGU7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICAgICAgICBjYXNlIFwiZGF0ZVwiOlxuICAgICAgICAgICAgICAgICAgY2FzZSBcInJlZ2V4cFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJhIFwiICsgdHlwZTtcblxuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IgJiYgcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgPyBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSA6IEFOT05ZTU9VUztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBJVEVSQVRPUl9TWU1CT0wgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3IsIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gXCJAQGl0ZXJhdG9yXCIsIEFOT05ZTU9VUyA9IFwiPDxhbm9ueW1vdXM+PlwiLCBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICAgICAgICAgICAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoXCJhcnJheVwiKSxcbiAgICAgICAgICAgICAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihcImJvb2xlYW5cIiksXG4gICAgICAgICAgICAgICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoXCJmdW5jdGlvblwiKSxcbiAgICAgICAgICAgICAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKFwibnVtYmVyXCIpLFxuICAgICAgICAgICAgICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoXCJvYmplY3RcIiksXG4gICAgICAgICAgICAgICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihcInN0cmluZ1wiKSxcbiAgICAgICAgICAgICAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKFwic3ltYm9sXCIpLFxuICAgICAgICAgICAgICAgIGFueTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgICAgICAgICAgICAgICB9KCksXG4gICAgICAgICAgICAgICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBnZXRQcm9wVHlwZShwcm9wVmFsdWUpICsgXCJgIHN1cHBsaWVkIHRvIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICAgICAgICAgICAgICAgIH0oKSxcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcIkludmFsaWQgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiB0eXBlIGBcIiArIGdldFByb3BUeXBlKHByb3BWYWx1ZSkgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgICAgICAgICAgICAgICB9KCksXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBub2RlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkgPyBudWxsIDogbmV3IFByb3BUeXBlRXJyb3IoXCJJbnZhbGlkIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgc3VwcGxpZWQgdG8gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSgpLFxuICAgICAgICAgICAgICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgICAgICAgICAgICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgICAgICAgICAgICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgICAgICAgICAgICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgICAgICAgICAgICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlLCBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzLCBcbiAgICAgICAgICAgIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUsIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzLCBcbiAgICAgICAgICAgIFJlYWN0UHJvcFR5cGVzO1xuICAgICAgICB9O1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG4gICAgICAgICAgICBpZiAobnVsbCA9PT0gdmFsIHx8IHZvaWQgMCA9PT0gdmFsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWRcIik7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0KHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG4gICAgICAgIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5hc3NpZ24pIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKFwiYWJjXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0ZXN0MVs1XSA9IFwiZGVcIiwgXCI1XCIgPT09IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSkgcmV0dXJuICExO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHRlc3QyID0ge30sIGkgPSAwOyBpIDwgMTA7IGkrKykgdGVzdDJbXCJfXCIgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG4gICAgICAgICAgICAgICAgaWYgKFwiMDEyMzQ1Njc4OVwiICE9PSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRlc3QyW25dO1xuICAgICAgICAgICAgICAgIH0pLmpvaW4oXCJcIikpIHJldHVybiAhMTtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdDMgPSB7fTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdFwiLnNwbGl0KFwiXCIpLmZvckVhY2goZnVuY3Rpb24obGV0dGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG4gICAgICAgICAgICAgICAgfSksIFwiYWJjZGVmZ2hpamtsbW5vcHFyc3RcIiA9PT0gT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGZyb20sIHN5bWJvbHMsIHRvID0gdG9PYmplY3QodGFyZ2V0KSwgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgICAgICAgICBmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGZyb20pIGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSAmJiAodG9ba2V5XSA9IGZyb21ba2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICAgICAgICAgICAgICBzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSAmJiAodG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdG87XG4gICAgICAgIH07XG4gICAgfSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuICAgICAgICBmdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gICAgICAgICAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICAgICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8IFwiUmVhY3QgY2xhc3NcIikgKyBcIjogXCIgKyBsb2NhdGlvbiArIFwiIHR5cGUgYFwiICsgdHlwZVNwZWNOYW1lICsgXCJgIGlzIGludmFsaWQ7IGl0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGBcIiArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArIFwiYC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnIubmFtZSA9IFwiSW52YXJpYW50IFZpb2xhdGlvblwiLCBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgcHJpbnRXYXJuaW5nKChjb21wb25lbnROYW1lIHx8IFwiUmVhY3QgY2xhc3NcIikgKyBcIjogdHlwZSBzcGVjaWZpY2F0aW9uIG9mIFwiICsgbG9jYXRpb24gKyBcIiBgXCIgKyB0eXBlU3BlY05hbWUgKyBcImAgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciBmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSBcIiArIHR5cGVvZiBlcnJvciArIFwiLiBZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciBjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kIHNoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS5cIiksIFxuICAgICAgICAgICAgICAgIGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gITA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHByaW50V2FybmluZyhcIkZhaWxlZCBcIiArIGxvY2F0aW9uICsgXCIgdHlwZTogXCIgKyBlcnJvci5tZXNzYWdlICsgKG51bGwgIT0gc3RhY2sgPyBzdGFjayA6IFwiXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge30sIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KSwgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge30sIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbiAgICAgICAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIldhcm5pbmc6IFwiICsgdGV4dDtcbiAgICAgICAgICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfSwgY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICAgICAgICB9LCBtb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuICAgIH0sIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICAgICAgICAgIGlmIChudWxsID09IHNvdXJjZSkgcmV0dXJuIHt9O1xuICAgICAgICAgICAgdmFyIGtleSwgaSwgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICAgICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldLCBleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCB8fCBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpICYmICh0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgICAgICAgICAgaWYgKG51bGwgPT0gc291cmNlKSByZXR1cm4ge307XG4gICAgICAgICAgICB2YXIga2V5LCBpLCB0YXJnZXQgPSB7fSwgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykga2V5ID0gc291cmNlS2V5c1tpXSwgZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDAgfHwgKHRhcmdldFtrZXldID0gc291cmNlW2tleV0pO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBNZWRpYVF1ZXJ5KF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sIGRldmljZSA9IF9yZWYuZGV2aWNlLCBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2UsIHNldHRpbmdzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsgXCJjaGlsZHJlblwiLCBcImRldmljZVwiLCBcIm9uQ2hhbmdlXCIgXSksIG1hdGNoZXMgPSBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191c2VNZWRpYVF1ZXJ5X18uYSkoc2V0dGluZ3MsIGRldmljZSwgb25DaGFuZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgY2hpbGRyZW4gPyBjaGlsZHJlbihtYXRjaGVzKSA6IG1hdGNoZXMgPyBjaGlsZHJlbiA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgX193ZWJwYWNrX2V4cG9ydHNfXy5hID0gTWVkaWFRdWVyeTtcbiAgICAgICAgdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXNlTWVkaWFRdWVyeV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbiAgICB9IF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdC1yZXNwb25zaXZlLmpzLm1hcCIsIi8vXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIsIGNvbXBhcmUsIGNvbXBhcmVDb250ZXh0KSB7XG4gIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICBpZiAocmV0ICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gISFyZXQ7XG4gIH1cblxuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8ICFvYmpCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5c0EubGVuZ3RoOyBpZHgrKykge1xuICAgIHZhciBrZXkgPSBrZXlzQVtpZHhdO1xuXG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgdmFyIHZhbHVlQiA9IG9iakJba2V5XTtcblxuICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgKHJldCA9PT0gdm9pZCAwICYmIHZhbHVlQSAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsImltcG9ydHt0eXBlT2YgYXMgZSxpc0VsZW1lbnQgYXMgdCxpc1ZhbGlkRWxlbWVudFR5cGUgYXMgbn1mcm9tXCJyZWFjdC1pc1wiO2ltcG9ydCByLHt1c2VTdGF0ZSBhcyBvLHVzZUNvbnRleHQgYXMgcyx1c2VNZW1vIGFzIGksdXNlRWZmZWN0IGFzIGEsdXNlUmVmIGFzIGMsY3JlYXRlRWxlbWVudCBhcyB1LHVzZURlYnVnVmFsdWUgYXMgbCx1c2VMYXlvdXRFZmZlY3QgYXMgZH1mcm9tXCJyZWFjdFwiO2ltcG9ydCBoIGZyb21cInNoYWxsb3dlcXVhbFwiO2ltcG9ydCBwIGZyb21cIkBlbW90aW9uL3N0eWxpc1wiO2ltcG9ydCBmIGZyb21cIkBlbW90aW9uL3VuaXRsZXNzXCI7aW1wb3J0IG0gZnJvbVwiQGVtb3Rpb24vaXMtcHJvcC12YWxpZFwiO2ltcG9ydCB5IGZyb21cImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCI7ZnVuY3Rpb24gdigpe3JldHVybih2PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIHIgaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixyKSYmKGVbcl09bltyXSl9cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIGc9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49W2VbMF1dLHI9MCxvPXQubGVuZ3RoO3I8bztyKz0xKW4ucHVzaCh0W3JdLGVbcisxXSk7cmV0dXJuIG59LFM9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPT10JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmXCJbb2JqZWN0IE9iamVjdF1cIj09PSh0LnRvU3RyaW5nP3QudG9TdHJpbmcoKTpPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkpJiYhZSh0KX0sdz1PYmplY3QuZnJlZXplKFtdKSxFPU9iamVjdC5mcmVlemUoe30pO2Z1bmN0aW9uIGIoZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1mdW5jdGlvbiBfKGUpe3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwic3RyaW5nXCI9PXR5cGVvZiBlJiZlfHxlLmRpc3BsYXlOYW1lfHxlLm5hbWV8fFwiQ29tcG9uZW50XCJ9ZnVuY3Rpb24gTihlKXtyZXR1cm4gZSYmXCJzdHJpbmdcIj09dHlwZW9mIGUuc3R5bGVkQ29tcG9uZW50SWR9dmFyIEE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJihwcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfQVRUUnx8cHJvY2Vzcy5lbnYuU0NfQVRUUil8fFwiZGF0YS1zdHlsZWRcIixDPVwiNS4yLjFcIixJPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwiSFRNTEVsZW1lbnRcImluIHdpbmRvdyxQPUJvb2xlYW4oXCJib29sZWFuXCI9PXR5cGVvZiBTQ19ESVNBQkxFX1NQRUVEWT9TQ19ESVNBQkxFX1NQRUVEWTpcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZJiZcIlwiIT09cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZP1wiZmFsc2VcIiE9PXByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWSYmcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBwcm9jZXNzJiZ2b2lkIDAhPT1wcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWSYmXCJcIiE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZP1wiZmFsc2VcIiE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZJiZwcm9jZXNzLmVudi5TQ19ESVNBQkxFX1NQRUVEWTpcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WKSxPPXt9LFI9XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj97MTpcIkNhbm5vdCBjcmVhdGUgc3R5bGVkLWNvbXBvbmVudCBmb3IgY29tcG9uZW50OiAlcy5cXG5cXG5cIiwyOlwiQ2FuJ3QgY29sbGVjdCBzdHlsZXMgb25jZSB5b3UndmUgY29uc3VtZWQgYSBgU2VydmVyU3R5bGVTaGVldGAncyBzdHlsZXMhIGBTZXJ2ZXJTdHlsZVNoZWV0YCBpcyBhIG9uZSBvZmYgaW5zdGFuY2UgZm9yIGVhY2ggc2VydmVyLXNpZGUgcmVuZGVyIGN5Y2xlLlxcblxcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcmV1c2UgaXQgYWNyb3NzIHJlbmRlcnM/XFxuLSBBcmUgeW91IGFjY2lkZW50YWxseSBjYWxsaW5nIGNvbGxlY3RTdHlsZXMgdHdpY2U/XFxuXFxuXCIsMzpcIlN0cmVhbWluZyBTU1IgaXMgb25seSBzdXBwb3J0ZWQgaW4gYSBOb2RlLmpzIGVudmlyb25tZW50OyBQbGVhc2UgZG8gbm90IHRyeSB0byBjYWxsIHRoaXMgbWV0aG9kIGluIHRoZSBicm93c2VyLlxcblxcblwiLDQ6XCJUaGUgYFN0eWxlU2hlZXRNYW5hZ2VyYCBleHBlY3RzIGEgdmFsaWQgdGFyZ2V0IG9yIHNoZWV0IHByb3AhXFxuXFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIGNsaWVudCBhbmQgaXMgeW91ciB0YXJnZXQgZmFsc3k/XFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIHNlcnZlciBhbmQgaXMgdGhlIHNoZWV0IGZhbHN5P1xcblxcblwiLDU6XCJUaGUgY2xvbmUgbWV0aG9kIGNhbm5vdCBiZSB1c2VkIG9uIHRoZSBjbGllbnQhXFxuXFxuLSBBcmUgeW91IHJ1bm5pbmcgaW4gYSBjbGllbnQtbGlrZSBlbnZpcm9ubWVudCBvbiB0aGUgc2VydmVyP1xcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcnVuIFNTUiBvbiB0aGUgY2xpZW50P1xcblxcblwiLDY6XCJUcnlpbmcgdG8gaW5zZXJ0IGEgbmV3IHN0eWxlIHRhZywgYnV0IHRoZSBnaXZlbiBOb2RlIGlzIHVubW91bnRlZCFcXG5cXG4tIEFyZSB5b3UgdXNpbmcgYSBjdXN0b20gdGFyZ2V0IHRoYXQgaXNuJ3QgbW91bnRlZD9cXG4tIERvZXMgeW91ciBkb2N1bWVudCBub3QgaGF2ZSBhIHZhbGlkIGhlYWQgZWxlbWVudD9cXG4tIEhhdmUgeW91IGFjY2lkZW50YWxseSByZW1vdmVkIGEgc3R5bGUgdGFnIG1hbnVhbGx5P1xcblxcblwiLDc6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciBcInRoZW1lXCIgcHJvcCBmdW5jdGlvbiwgZS5nLlxcblxcbmBgYGpzXFxudGhlbWU9eygpID0+ICh7fSl9XFxuYGBgXFxuXFxuJyw4OidUaGVtZVByb3ZpZGVyOiBQbGVhc2UgbWFrZSB5b3VyIFwidGhlbWVcIiBwcm9wIGFuIG9iamVjdC5cXG5cXG4nLDk6XCJNaXNzaW5nIGRvY3VtZW50IGA8aGVhZD5gXFxuXFxuXCIsMTA6XCJDYW5ub3QgZmluZCBhIFN0eWxlU2hlZXQgaW5zdGFuY2UuIFVzdWFsbHkgdGhpcyBoYXBwZW5zIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBjb3BpZXMgb2Ygc3R5bGVkLWNvbXBvbmVudHMgbG9hZGVkIGF0IG9uY2UuIENoZWNrIG91dCB0aGlzIGlzc3VlIGZvciBob3cgdG8gdHJvdWJsZXNob290IGFuZCBmaXggdGhlIGNvbW1vbiBjYXNlcyB3aGVyZSB0aGlzIHNpdHVhdGlvbiBjYW4gaGFwcGVuOiBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvaXNzdWVzLzE5NDEjaXNzdWVjb21tZW50LTQxNzg2MjAyMVxcblxcblwiLDExOlwiX1RoaXMgZXJyb3Igd2FzIHJlcGxhY2VkIHdpdGggYSBkZXYtdGltZSB3YXJuaW5nLCBpdCB3aWxsIGJlIGRlbGV0ZWQgZm9yIHY0IGZpbmFsLl8gW2NyZWF0ZUdsb2JhbFN0eWxlXSByZWNlaXZlZCBjaGlsZHJlbiB3aGljaCB3aWxsIG5vdCBiZSByZW5kZXJlZC4gUGxlYXNlIHVzZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgcGFzc2luZyBjaGlsZHJlbiBlbGVtZW50cy5cXG5cXG5cIiwxMjpcIkl0IHNlZW1zIHlvdSBhcmUgaW50ZXJwb2xhdGluZyBhIGtleWZyYW1lIGRlY2xhcmF0aW9uICglcykgaW50byBhbiB1bnRhZ2dlZCBzdHJpbmcuIFRoaXMgd2FzIHN1cHBvcnRlZCBpbiBzdHlsZWQtY29tcG9uZW50cyB2MywgYnV0IGlzIG5vdCBsb25nZXIgc3VwcG9ydGVkIGluIHY0IGFzIGtleWZyYW1lcyBhcmUgbm93IGluamVjdGVkIG9uLWRlbWFuZC4gUGxlYXNlIHdyYXAgeW91ciBzdHJpbmcgaW4gdGhlIGNzc1xcXFxgXFxcXGAgaGVscGVyIHdoaWNoIGVuc3VyZXMgdGhlIHN0eWxlcyBhcmUgaW5qZWN0ZWQgY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYXBpI2Nzc1xcblxcblwiLDEzOlwiJXMgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlxcblxcblwiLDE0OidUaGVtZVByb3ZpZGVyOiBcInRoZW1lXCIgcHJvcCBpcyByZXF1aXJlZC5cXG5cXG4nLDE1OlwiQSBzdHlsaXMgcGx1Z2luIGhhcyBiZWVuIHN1cHBsaWVkIHRoYXQgaXMgbm90IG5hbWVkLiBXZSBuZWVkIGEgbmFtZSBmb3IgZWFjaCBwbHVnaW4gdG8gYmUgYWJsZSB0byBwcmV2ZW50IHN0eWxpbmcgY29sbGlzaW9ucyBiZXR3ZWVuIGRpZmZlcmVudCBzdHlsaXMgY29uZmlndXJhdGlvbnMgd2l0aGluIHRoZSBzYW1lIGFwcC4gQmVmb3JlIHlvdSBwYXNzIHlvdXIgcGx1Z2luIHRvIGA8U3R5bGVTaGVldE1hbmFnZXIgc3R5bGlzUGx1Z2lucz17W119PmAsIHBsZWFzZSBtYWtlIHN1cmUgZWFjaCBwbHVnaW4gaXMgdW5pcXVlbHktbmFtZWQsIGUuZy5cXG5cXG5gYGBqc1xcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbXBvcnRlZFBsdWdpbiwgJ25hbWUnLCB7IHZhbHVlOiAnc29tZS11bmlxdWUtbmFtZScgfSk7XFxuYGBgXFxuXFxuXCIsMTY6XCJSZWFjaGVkIHRoZSBsaW1pdCBvZiBob3cgbWFueSBzdHlsZWQgY29tcG9uZW50cyBtYXkgYmUgY3JlYXRlZCBhdCBncm91cCAlcy5cXG5Zb3UgbWF5IG9ubHkgY3JlYXRlIHVwIHRvIDEsMDczLDc0MSw4MjQgY29tcG9uZW50cy4gSWYgeW91J3JlIGNyZWF0aW5nIGNvbXBvbmVudHMgZHluYW1pY2FsbHksXFxuYXMgZm9yIGluc3RhbmNlIGluIHlvdXIgcmVuZGVyIG1ldGhvZCB0aGVuIHlvdSBtYXkgYmUgcnVubmluZyBpbnRvIHRoaXMgbGltaXRhdGlvbi5cXG5cXG5cIiwxNzpcIkNTU1N0eWxlU2hlZXQgY291bGQgbm90IGJlIGZvdW5kIG9uIEhUTUxTdHlsZUVsZW1lbnQuXFxuSGFzIHN0eWxlZC1jb21wb25lbnRzJyBzdHlsZSB0YWcgYmVlbiB1bm1vdW50ZWQgb3IgYWx0ZXJlZCBieSBhbm90aGVyIHNjcmlwdD9cXG5cIn06e307ZnVuY3Rpb24gRCgpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoPD0wP3ZvaWQgMDphcmd1bWVudHNbMF0sdD1bXSxuPTEscj1hcmd1bWVudHMubGVuZ3RoO248cjtuKz0xKXQucHVzaChuPDB8fGFyZ3VtZW50cy5sZW5ndGg8PW4/dm9pZCAwOmFyZ3VtZW50c1tuXSk7cmV0dXJuIHQuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZT1lLnJlcGxhY2UoLyVbYS16XS8sdCl9KSksZX1mdW5jdGlvbiBqKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt0aHJvd1wicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/bmV3IEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdC5pby9KVUlhRSNcIitlK1wiIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKyhuLmxlbmd0aD4wP1wiIEFyZ3M6IFwiK24uam9pbihcIiwgXCIpOlwiXCIpKTpuZXcgRXJyb3IoRC5hcHBseSh2b2lkIDAsW1JbZV1dLmNvbmNhdChuKSkudHJpbSgpKX12YXIgVD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dGhpcy5ncm91cFNpemVzPW5ldyBVaW50MzJBcnJheSg1MTIpLHRoaXMubGVuZ3RoPTUxMix0aGlzLnRhZz1lfXZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LmluZGV4T2ZHcm91cD1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPTA7bjxlO24rKyl0Kz10aGlzLmdyb3VwU2l6ZXNbbl07cmV0dXJuIHR9LHQuaW5zZXJ0UnVsZXM9ZnVuY3Rpb24oZSx0KXtpZihlPj10aGlzLmdyb3VwU2l6ZXMubGVuZ3RoKXtmb3IodmFyIG49dGhpcy5ncm91cFNpemVzLHI9bi5sZW5ndGgsbz1yO2U+PW87KShvPDw9MSk8MCYmaigxNixcIlwiK2UpO3RoaXMuZ3JvdXBTaXplcz1uZXcgVWludDMyQXJyYXkobyksdGhpcy5ncm91cFNpemVzLnNldChuKSx0aGlzLmxlbmd0aD1vO2Zvcih2YXIgcz1yO3M8bztzKyspdGhpcy5ncm91cFNpemVzW3NdPTB9Zm9yKHZhciBpPXRoaXMuaW5kZXhPZkdyb3VwKGUrMSksYT0wLGM9dC5sZW5ndGg7YTxjO2ErKyl0aGlzLnRhZy5pbnNlcnRSdWxlKGksdFthXSkmJih0aGlzLmdyb3VwU2l6ZXNbZV0rKyxpKyspfSx0LmNsZWFyR3JvdXA9ZnVuY3Rpb24oZSl7aWYoZTx0aGlzLmxlbmd0aCl7dmFyIHQ9dGhpcy5ncm91cFNpemVzW2VdLG49dGhpcy5pbmRleE9mR3JvdXAoZSkscj1uK3Q7dGhpcy5ncm91cFNpemVzW2VdPTA7Zm9yKHZhciBvPW47bzxyO28rKyl0aGlzLnRhZy5kZWxldGVSdWxlKG4pfX0sdC5nZXRHcm91cD1mdW5jdGlvbihlKXt2YXIgdD1cIlwiO2lmKGU+PXRoaXMubGVuZ3RofHwwPT09dGhpcy5ncm91cFNpemVzW2VdKXJldHVybiB0O2Zvcih2YXIgbj10aGlzLmdyb3VwU2l6ZXNbZV0scj10aGlzLmluZGV4T2ZHcm91cChlKSxvPXIrbixzPXI7czxvO3MrKyl0Kz10aGlzLnRhZy5nZXRSdWxlKHMpK1wiLyohc2MqL1xcblwiO3JldHVybiB0fSxlfSgpLGs9bmV3IE1hcCx4PW5ldyBNYXAsVj0xLEI9ZnVuY3Rpb24oZSl7aWYoay5oYXMoZSkpcmV0dXJuIGsuZ2V0KGUpO2Zvcig7eC5oYXMoVik7KVYrKzt2YXIgdD1WKys7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKCgwfHQpPDB8fHQ+MTw8MzApJiZqKDE2LFwiXCIrdCksay5zZXQoZSx0KSx4LnNldCh0LGUpLHR9LE09ZnVuY3Rpb24oZSl7cmV0dXJuIHguZ2V0KGUpfSx6PWZ1bmN0aW9uKGUsdCl7ay5zZXQoZSx0KSx4LnNldCh0LGUpfSxMPVwic3R5bGVbXCIrQSsnXVtkYXRhLXN0eWxlZC12ZXJzaW9uPVwiNS4yLjFcIl0nLEc9bmV3IFJlZ0V4cChcIl5cIitBKydcXFxcLmcoXFxcXGQrKVxcXFxbaWQ9XCIoW1xcXFx3XFxcXGQtXSspXCJcXFxcXS4qP1wiKFteXCJdKiknKSxGPWZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHIsbz1uLnNwbGl0KFwiLFwiKSxzPTAsaT1vLmxlbmd0aDtzPGk7cysrKShyPW9bc10pJiZlLnJlZ2lzdGVyTmFtZSh0LHIpfSxZPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPXQuaW5uZXJIVE1MLnNwbGl0KFwiLyohc2MqL1xcblwiKSxyPVtdLG89MCxzPW4ubGVuZ3RoO288cztvKyspe3ZhciBpPW5bb10udHJpbSgpO2lmKGkpe3ZhciBhPWkubWF0Y2goRyk7aWYoYSl7dmFyIGM9MHxwYXJzZUludChhWzFdLDEwKSx1PWFbMl07MCE9PWMmJih6KHUsYyksRihlLHUsYVszXSksZS5nZXRUYWcoKS5pbnNlcnRSdWxlcyhjLHIpKSxyLmxlbmd0aD0wfWVsc2Ugci5wdXNoKGkpfX19LHE9ZnVuY3Rpb24oKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgX193ZWJwYWNrX25vbmNlX18/X193ZWJwYWNrX25vbmNlX186bnVsbH0sSD1mdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5oZWFkLG49ZXx8dCxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmNoaWxkTm9kZXMsbj10Lmxlbmd0aDtuPj0wO24tLSl7dmFyIHI9dFtuXTtpZihyJiYxPT09ci5ub2RlVHlwZSYmci5oYXNBdHRyaWJ1dGUoQSkpcmV0dXJuIHJ9fShuKSxzPXZvaWQgMCE9PW8/by5uZXh0U2libGluZzpudWxsO3Iuc2V0QXR0cmlidXRlKEEsXCJhY3RpdmVcIiksci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0eWxlZC12ZXJzaW9uXCIsXCI1LjIuMVwiKTt2YXIgaT1xKCk7cmV0dXJuIGkmJnIuc2V0QXR0cmlidXRlKFwibm9uY2VcIixpKSxuLmluc2VydEJlZm9yZShyLHMpLHJ9LCQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3ZhciB0PXRoaXMuZWxlbWVudD1IKGUpO3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIikpLHRoaXMuc2hlZXQ9ZnVuY3Rpb24oZSl7aWYoZS5zaGVldClyZXR1cm4gZS5zaGVldDtmb3IodmFyIHQ9ZG9jdW1lbnQuc3R5bGVTaGVldHMsbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl7dmFyIG89dFtuXTtpZihvLm93bmVyTm9kZT09PWUpcmV0dXJuIG99aigxNyl9KHQpLHRoaXMubGVuZ3RoPTB9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5zZXJ0UnVsZT1mdW5jdGlvbihlLHQpe3RyeXtyZXR1cm4gdGhpcy5zaGVldC5pbnNlcnRSdWxlKHQsZSksdGhpcy5sZW5ndGgrKywhMH1jYXRjaChlKXtyZXR1cm4hMX19LHQuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLnNoZWV0LmRlbGV0ZVJ1bGUoZSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMuc2hlZXQuY3NzUnVsZXNbZV07cmV0dXJuIHZvaWQgMCE9PXQmJlwic3RyaW5nXCI9PXR5cGVvZiB0LmNzc1RleHQ/dC5jc3NUZXh0OlwiXCJ9LGV9KCksVz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcy5lbGVtZW50PUgoZSk7dGhpcy5ub2Rlcz10LmNoaWxkTm9kZXMsdGhpcy5sZW5ndGg9MH12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7aWYoZTw9dGhpcy5sZW5ndGgmJmU+PTApe3ZhciBuPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpLHI9dGhpcy5ub2Rlc1tlXTtyZXR1cm4gdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShuLHJ8fG51bGwpLHRoaXMubGVuZ3RoKyssITB9cmV0dXJuITF9LHQuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5ub2Rlc1tlXSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3JldHVybiBlPHRoaXMubGVuZ3RoP3RoaXMubm9kZXNbZV0udGV4dENvbnRlbnQ6XCJcIn0sZX0oKSxVPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLnJ1bGVzPVtdLHRoaXMubGVuZ3RoPTB9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuaW5zZXJ0UnVsZT1mdW5jdGlvbihlLHQpe3JldHVybiBlPD10aGlzLmxlbmd0aCYmKHRoaXMucnVsZXMuc3BsaWNlKGUsMCx0KSx0aGlzLmxlbmd0aCsrLCEwKX0sdC5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMucnVsZXMuc3BsaWNlKGUsMSksdGhpcy5sZW5ndGgtLX0sdC5nZXRSdWxlPWZ1bmN0aW9uKGUpe3JldHVybiBlPHRoaXMubGVuZ3RoP3RoaXMucnVsZXNbZV06XCJcIn0sZX0oKSxKPUksWD17aXNTZXJ2ZXI6IUksdXNlQ1NTT01JbmplY3Rpb246IVB9LFo9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt2b2lkIDA9PT1lJiYoZT1FKSx2b2lkIDA9PT10JiYodD17fSksdGhpcy5vcHRpb25zPXYoe30sWCx7fSxlKSx0aGlzLmdzPXQsdGhpcy5uYW1lcz1uZXcgTWFwKG4pLCF0aGlzLm9wdGlvbnMuaXNTZXJ2ZXImJkkmJkomJihKPSExLGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKEwpLG49MCxyPXQubGVuZ3RoO248cjtuKyspe3ZhciBvPXRbbl07byYmXCJhY3RpdmVcIiE9PW8uZ2V0QXR0cmlidXRlKEEpJiYoWShlLG8pLG8ucGFyZW50Tm9kZSYmby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pKX19KHRoaXMpKX1lLnJlZ2lzdGVySWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIEIoZSl9O3ZhciB0PWUucHJvdG90eXBlO3JldHVybiB0LnJlY29uc3RydWN0V2l0aE9wdGlvbnM9ZnVuY3Rpb24odCxuKXtyZXR1cm4gdm9pZCAwPT09biYmKG49ITApLG5ldyBlKHYoe30sdGhpcy5vcHRpb25zLHt9LHQpLHRoaXMuZ3MsbiYmdGhpcy5uYW1lc3x8dm9pZCAwKX0sdC5hbGxvY2F0ZUdTSW5zdGFuY2U9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZ3NbZV09KHRoaXMuZ3NbZV18fDApKzF9LHQuZ2V0VGFnPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGFnfHwodGhpcy50YWc9KG49KHQ9dGhpcy5vcHRpb25zKS5pc1NlcnZlcixyPXQudXNlQ1NTT01JbmplY3Rpb24sbz10LnRhcmdldCxlPW4/bmV3IFUobyk6cj9uZXcgJChvKTpuZXcgVyhvKSxuZXcgVChlKSkpO3ZhciBlLHQsbixyLG99LHQuaGFzTmFtZUZvcklkPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubmFtZXMuaGFzKGUpJiZ0aGlzLm5hbWVzLmdldChlKS5oYXModCl9LHQucmVnaXN0ZXJOYW1lPWZ1bmN0aW9uKGUsdCl7aWYoQihlKSx0aGlzLm5hbWVzLmhhcyhlKSl0aGlzLm5hbWVzLmdldChlKS5hZGQodCk7ZWxzZXt2YXIgbj1uZXcgU2V0O24uYWRkKHQpLHRoaXMubmFtZXMuc2V0KGUsbil9fSx0Lmluc2VydFJ1bGVzPWZ1bmN0aW9uKGUsdCxuKXt0aGlzLnJlZ2lzdGVyTmFtZShlLHQpLHRoaXMuZ2V0VGFnKCkuaW5zZXJ0UnVsZXMoQihlKSxuKX0sdC5jbGVhck5hbWVzPWZ1bmN0aW9uKGUpe3RoaXMubmFtZXMuaGFzKGUpJiZ0aGlzLm5hbWVzLmdldChlKS5jbGVhcigpfSx0LmNsZWFyUnVsZXM9ZnVuY3Rpb24oZSl7dGhpcy5nZXRUYWcoKS5jbGVhckdyb3VwKEIoZSkpLHRoaXMuY2xlYXJOYW1lcyhlKX0sdC5jbGVhclRhZz1mdW5jdGlvbigpe3RoaXMudGFnPXZvaWQgMH0sdC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5nZXRUYWcoKSxuPXQubGVuZ3RoLHI9XCJcIixvPTA7bzxuO28rKyl7dmFyIHM9TShvKTtpZih2b2lkIDAhPT1zKXt2YXIgaT1lLm5hbWVzLmdldChzKSxhPXQuZ2V0R3JvdXAobyk7aWYodm9pZCAwIT09aSYmMCE9PWEubGVuZ3RoKXt2YXIgYz1BK1wiLmdcIitvKydbaWQ9XCInK3MrJ1wiXScsdT1cIlwiO3ZvaWQgMCE9PWkmJmkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5sZW5ndGg+MCYmKHUrPWUrXCIsXCIpfSkpLHIrPVwiXCIrYStjKyd7Y29udGVudDpcIicrdSsnXCJ9Lyohc2MqL1xcbid9fX1yZXR1cm4gcn0odGhpcyl9LGV9KCksSz0vKGEpKGQpL2dpLFE9ZnVuY3Rpb24oZSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZSsoZT4yNT8zOTo5NykpfTtmdW5jdGlvbiBlZShlKXt2YXIgdCxuPVwiXCI7Zm9yKHQ9TWF0aC5hYnMoZSk7dD41Mjt0PXQvNTJ8MCluPVEodCU1MikrbjtyZXR1cm4oUSh0JTUyKStuKS5yZXBsYWNlKEssXCIkMS0kMlwiKX12YXIgdGU9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dC5sZW5ndGg7bjspZT0zMyplXnQuY2hhckNvZGVBdCgtLW4pO3JldHVybiBlfSxuZT1mdW5jdGlvbihlKXtyZXR1cm4gdGUoNTM4MSxlKX07ZnVuY3Rpb24gcmUoZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kz0xKXt2YXIgbj1lW3RdO2lmKGIobikmJiFOKG4pKXJldHVybiExfXJldHVybiEwfXZhciBvZT1uZShcIjUuMi4xXCIpLHNlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQsbil7dGhpcy5ydWxlcz1lLHRoaXMuc3RhdGljUnVsZXNJZD1cIlwiLHRoaXMuaXNTdGF0aWM9XCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKHZvaWQgMD09PW58fG4uaXNTdGF0aWMpJiZyZShlKSx0aGlzLmNvbXBvbmVudElkPXQsdGhpcy5iYXNlSGFzaD10ZShvZSx0KSx0aGlzLmJhc2VTdHlsZT1uLFoucmVnaXN0ZXJJZCh0KX1yZXR1cm4gZS5wcm90b3R5cGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXM9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRoaXMuY29tcG9uZW50SWQsbz1bXTtpZih0aGlzLmJhc2VTdHlsZSYmby5wdXNoKHRoaXMuYmFzZVN0eWxlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGUsdCxuKSksdGhpcy5pc1N0YXRpYyYmIW4uaGFzaClpZih0aGlzLnN0YXRpY1J1bGVzSWQmJnQuaGFzTmFtZUZvcklkKHIsdGhpcy5zdGF0aWNSdWxlc0lkKSlvLnB1c2godGhpcy5zdGF0aWNSdWxlc0lkKTtlbHNle3ZhciBzPU5lKHRoaXMucnVsZXMsZSx0LG4pLmpvaW4oXCJcIiksaT1lZSh0ZSh0aGlzLmJhc2VIYXNoLHMubGVuZ3RoKT4+PjApO2lmKCF0Lmhhc05hbWVGb3JJZChyLGkpKXt2YXIgYT1uKHMsXCIuXCIraSx2b2lkIDAscik7dC5pbnNlcnRSdWxlcyhyLGksYSl9by5wdXNoKGkpLHRoaXMuc3RhdGljUnVsZXNJZD1pfWVsc2V7Zm9yKHZhciBjPXRoaXMucnVsZXMubGVuZ3RoLHU9dGUodGhpcy5iYXNlSGFzaCxuLmhhc2gpLGw9XCJcIixkPTA7ZDxjO2QrKyl7dmFyIGg9dGhpcy5ydWxlc1tkXTtpZihcInN0cmluZ1wiPT10eXBlb2YgaClsKz1oLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJih1PXRlKHUsaCtkKSk7ZWxzZSBpZihoKXt2YXIgcD1OZShoLGUsdCxuKSxmPUFycmF5LmlzQXJyYXkocCk/cC5qb2luKFwiXCIpOnA7dT10ZSh1LGYrZCksbCs9Zn19aWYobCl7dmFyIG09ZWUodT4+PjApO2lmKCF0Lmhhc05hbWVGb3JJZChyLG0pKXt2YXIgeT1uKGwsXCIuXCIrbSx2b2lkIDAscik7dC5pbnNlcnRSdWxlcyhyLG0seSl9by5wdXNoKG0pfX1yZXR1cm4gby5qb2luKFwiIFwiKX0sZX0oKSxpZT0vXlxccypcXC9cXC8uKiQvZ20sYWU9W1wiOlwiLFwiW1wiLFwiLlwiLFwiI1wiXTtmdW5jdGlvbiBjZShlKXt2YXIgdCxuLHIsbyxzPXZvaWQgMD09PWU/RTplLGk9cy5vcHRpb25zLGE9dm9pZCAwPT09aT9FOmksYz1zLnBsdWdpbnMsdT12b2lkIDA9PT1jP3c6YyxsPW5ldyBwKGEpLGQ9W10saD1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KHQpe2lmKHQpdHJ5e2UodCtcIn1cIil9Y2F0Y2goZSl7fX1yZXR1cm4gZnVuY3Rpb24obixyLG8scyxpLGEsYyx1LGwsZCl7c3dpdGNoKG4pe2Nhc2UgMTppZigwPT09bCYmNjQ9PT1yLmNoYXJDb2RlQXQoMCkpcmV0dXJuIGUocitcIjtcIiksXCJcIjticmVhaztjYXNlIDI6aWYoMD09PXUpcmV0dXJuIHIrXCIvKnwqL1wiO2JyZWFrO2Nhc2UgMzpzd2l0Y2godSl7Y2FzZSAxMDI6Y2FzZSAxMTI6cmV0dXJuIGUob1swXStyKSxcIlwiO2RlZmF1bHQ6cmV0dXJuIHIrKDA9PT1kP1wiLyp8Ki9cIjpcIlwiKX1jYXNlLTI6ci5zcGxpdChcIi8qfCovfVwiKS5mb3JFYWNoKHQpfX19KChmdW5jdGlvbihlKXtkLnB1c2goZSl9KSksZj1mdW5jdGlvbihlLHIscyl7cmV0dXJuIDA9PT1yJiZhZS5pbmNsdWRlcyhzW24ubGVuZ3RoXSl8fHMubWF0Y2gobyk/ZTpcIi5cIit0fTtmdW5jdGlvbiBtKGUscyxpLGEpe3ZvaWQgMD09PWEmJihhPVwiJlwiKTt2YXIgYz1lLnJlcGxhY2UoaWUsXCJcIiksdT1zJiZpP2krXCIgXCIrcytcIiB7IFwiK2MrXCIgfVwiOmM7cmV0dXJuIHQ9YSxuPXMscj1uZXcgUmVnRXhwKFwiXFxcXFwiK24rXCJcXFxcYlwiLFwiZ1wiKSxvPW5ldyBSZWdFeHAoXCIoXFxcXFwiK24rXCJcXFxcYil7Mix9XCIpLGwoaXx8IXM/XCJcIjpzLHUpfXJldHVybiBsLnVzZShbXS5jb25jYXQodSxbZnVuY3Rpb24oZSx0LG8pezI9PT1lJiZvLmxlbmd0aCYmb1swXS5sYXN0SW5kZXhPZihuKT4wJiYob1swXT1vWzBdLnJlcGxhY2UocixmKSl9LGgsZnVuY3Rpb24oZSl7aWYoLTI9PT1lKXt2YXIgdD1kO3JldHVybiBkPVtdLHR9fV0pKSxtLmhhc2g9dS5sZW5ndGg/dS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQubmFtZXx8aigxNSksdGUoZSx0Lm5hbWUpfSksNTM4MSkudG9TdHJpbmcoKTpcIlwiLG19dmFyIHVlPXIuY3JlYXRlQ29udGV4dCgpLGxlPXVlLkNvbnN1bWVyLGRlPXIuY3JlYXRlQ29udGV4dCgpLGhlPShkZS5Db25zdW1lcixuZXcgWikscGU9Y2UoKTtmdW5jdGlvbiBmZSgpe3JldHVybiBzKHVlKXx8aGV9ZnVuY3Rpb24gbWUoKXtyZXR1cm4gcyhkZSl8fHBlfWZ1bmN0aW9uIHllKGUpe3ZhciB0PW8oZS5zdHlsaXNQbHVnaW5zKSxuPXRbMF0scz10WzFdLGM9ZmUoKSx1PWkoKGZ1bmN0aW9uKCl7dmFyIHQ9YztyZXR1cm4gZS5zaGVldD90PWUuc2hlZXQ6ZS50YXJnZXQmJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dGFyZ2V0OmUudGFyZ2V0fSwhMSkpLGUuZGlzYWJsZUNTU09NSW5qZWN0aW9uJiYodD10LnJlY29uc3RydWN0V2l0aE9wdGlvbnMoe3VzZUNTU09NSW5qZWN0aW9uOiExfSkpLHR9KSxbZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24sZS5zaGVldCxlLnRhcmdldF0pLGw9aSgoZnVuY3Rpb24oKXtyZXR1cm4gY2Uoe29wdGlvbnM6e3ByZWZpeDohZS5kaXNhYmxlVmVuZG9yUHJlZml4ZXN9LHBsdWdpbnM6bn0pfSksW2UuZGlzYWJsZVZlbmRvclByZWZpeGVzLG5dKTtyZXR1cm4gYSgoZnVuY3Rpb24oKXtoKG4sZS5zdHlsaXNQbHVnaW5zKXx8cyhlLnN0eWxpc1BsdWdpbnMpfSksW2Uuc3R5bGlzUGx1Z2luc10pLHIuY3JlYXRlRWxlbWVudCh1ZS5Qcm92aWRlcix7dmFsdWU6dX0sci5jcmVhdGVFbGVtZW50KGRlLlByb3ZpZGVyLHt2YWx1ZTpsfSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WP3IuQ2hpbGRyZW4ub25seShlLmNoaWxkcmVuKTplLmNoaWxkcmVuKSl9dmFyIHZlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3ZhciBuPXRoaXM7dGhpcy5pbmplY3Q9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1wZSk7dmFyIHI9bi5uYW1lK3QuaGFzaDtlLmhhc05hbWVGb3JJZChuLmlkLHIpfHxlLmluc2VydFJ1bGVzKG4uaWQscix0KG4ucnVsZXMscixcIkBrZXlmcmFtZXNcIikpfSx0aGlzLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIGooMTIsU3RyaW5nKG4ubmFtZSkpfSx0aGlzLm5hbWU9ZSx0aGlzLmlkPVwic2Mta2V5ZnJhbWVzLVwiK2UsdGhpcy5ydWxlcz10fXJldHVybiBlLnByb3RvdHlwZS5nZXROYW1lPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1wZSksdGhpcy5uYW1lK2UuaGFzaH0sZX0oKSxnZT0vKFtBLVpdKS8sU2U9LyhbQS1aXSkvZyx3ZT0vXm1zLS8sRWU9ZnVuY3Rpb24oZSl7cmV0dXJuXCItXCIrZS50b0xvd2VyQ2FzZSgpfTtmdW5jdGlvbiBiZShlKXtyZXR1cm4gZ2UudGVzdChlKT9lLnJlcGxhY2UoU2UsRWUpLnJlcGxhY2Uod2UsXCItbXMtXCIpOmV9dmFyIF9lPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lfHwhMT09PWV8fFwiXCI9PT1lfTtmdW5jdGlvbiBOZShlLG4scixvKXtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHMsaT1bXSxhPTAsYz1lLmxlbmd0aDthPGM7YSs9MSlcIlwiIT09KHM9TmUoZVthXSxuLHIsbykpJiYoQXJyYXkuaXNBcnJheShzKT9pLnB1c2guYXBwbHkoaSxzKTppLnB1c2gocykpO3JldHVybiBpfWlmKF9lKGUpKXJldHVyblwiXCI7aWYoTihlKSlyZXR1cm5cIi5cIitlLnN0eWxlZENvbXBvbmVudElkO2lmKGIoZSkpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mKGw9ZSl8fGwucHJvdG90eXBlJiZsLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fHwhbilyZXR1cm4gZTt2YXIgdT1lKG4pO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnQodSkmJmNvbnNvbGUud2FybihfKGUpK1wiIGlzIG5vdCBhIHN0eWxlZCBjb21wb25lbnQgYW5kIGNhbm5vdCBiZSByZWZlcnJlZCB0byB2aWEgY29tcG9uZW50IHNlbGVjdG9yLiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYWR2YW5jZWQjcmVmZXJyaW5nLXRvLW90aGVyLWNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscy5cIiksTmUodSxuLHIsbyl9dmFyIGw7cmV0dXJuIGUgaW5zdGFuY2VvZiB2ZT9yPyhlLmluamVjdChyLG8pLGUuZ2V0TmFtZShvKSk6ZTpTKGUpP2Z1bmN0aW9uIGUodCxuKXt2YXIgcixvLHM9W107Zm9yKHZhciBpIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShpKSYmIV9lKHRbaV0pJiYoUyh0W2ldKT9zLnB1c2guYXBwbHkocyxlKHRbaV0saSkpOmIodFtpXSk/cy5wdXNoKGJlKGkpK1wiOlwiLHRbaV0sXCI7XCIpOnMucHVzaChiZShpKStcIjogXCIrKHI9aSxudWxsPT0obz10W2ldKXx8XCJib29sZWFuXCI9PXR5cGVvZiBvfHxcIlwiPT09bz9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiBvfHwwPT09b3x8ciBpbiBmP1N0cmluZyhvKS50cmltKCk6bytcInB4XCIpK1wiO1wiKSk7cmV0dXJuIG4/W24rXCIge1wiXS5jb25jYXQocyxbXCJ9XCJdKTpzfShlKTplLnRvU3RyaW5nKCl9ZnVuY3Rpb24gQWUoZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsbj1uZXcgQXJyYXkodD4xP3QtMTowKSxyPTE7cjx0O3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3JldHVybiBiKGUpfHxTKGUpP05lKGcodyxbZV0uY29uY2F0KG4pKSk6MD09PW4ubGVuZ3RoJiYxPT09ZS5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBlWzBdP2U6TmUoZyhlLG4pKX12YXIgQ2U9L2ludmFsaWQgaG9vayBjYWxsL2ksSWU9bmV3IFNldCxQZT1mdW5jdGlvbihlLHQpe2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpe3ZhciBuPVwiVGhlIGNvbXBvbmVudCBcIitlKyh0Pycgd2l0aCB0aGUgaWQgb2YgXCInK3QrJ1wiJzpcIlwiKStcIiBoYXMgYmVlbiBjcmVhdGVkIGR5bmFtaWNhbGx5LlxcbllvdSBtYXkgc2VlIHRoaXMgd2FybmluZyBiZWNhdXNlIHlvdSd2ZSBjYWxsZWQgc3R5bGVkIGluc2lkZSBhbm90aGVyIGNvbXBvbmVudC5cXG5UbyByZXNvbHZlIHRoaXMgb25seSBjcmVhdGUgbmV3IFN0eWxlZENvbXBvbmVudHMgb3V0c2lkZSBvZiBhbnkgcmVuZGVyIG1ldGhvZCBhbmQgZnVuY3Rpb24gY29tcG9uZW50LlwiO3RyeXtjKCksSWUuaGFzKG4pfHwoY29uc29sZS53YXJuKG4pLEllLmFkZChuKSl9Y2F0Y2goZSl7Q2UudGVzdChlLm1lc3NhZ2UpJiZJZS5kZWxldGUobil9fX0sT2U9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB2b2lkIDA9PT1uJiYobj1FKSxlLnRoZW1lIT09bi50aGVtZSYmZS50aGVtZXx8dHx8bi50aGVtZX0sUmU9L1shXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX4tXSsvZyxEZT0vKF4tfC0kKS9nO2Z1bmN0aW9uIGplKGUpe3JldHVybiBlLnJlcGxhY2UoUmUsXCItXCIpLnJlcGxhY2UoRGUsXCJcIil9dmFyIFRlPWZ1bmN0aW9uKGUpe3JldHVybiBlZShuZShlKT4+PjApfTtmdW5jdGlvbiBrZShlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZSYmKFwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fGUuY2hhckF0KDApPT09ZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSl9dmFyIHhlPWZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT09ZSYmIUFycmF5LmlzQXJyYXkoZSl9LFZlPWZ1bmN0aW9uKGUpe3JldHVyblwiX19wcm90b19fXCIhPT1lJiZcImNvbnN0cnVjdG9yXCIhPT1lJiZcInByb3RvdHlwZVwiIT09ZX07ZnVuY3Rpb24gQmUoZSx0LG4pe3ZhciByPWVbbl07eGUodCkmJnhlKHIpP01lKHIsdCk6ZVtuXT10fWZ1bmN0aW9uIE1lKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtmb3IodmFyIG89MCxzPW47bzxzLmxlbmd0aDtvKyspe3ZhciBpPXNbb107aWYoeGUoaSkpZm9yKHZhciBhIGluIGkpVmUoYSkmJkJlKGUsaVthXSxhKX1yZXR1cm4gZX12YXIgemU9ci5jcmVhdGVDb250ZXh0KCksTGU9emUuQ29uc3VtZXI7ZnVuY3Rpb24gR2UoZSl7dmFyIHQ9cyh6ZSksbj1pKChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybiBqKDE0KTtpZihiKGUpKXt2YXIgbj1lKHQpO3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlZ8fG51bGwhPT1uJiYhQXJyYXkuaXNBcnJheShuKSYmXCJvYmplY3RcIj09dHlwZW9mIG4/bjpqKDcpfXJldHVybiBBcnJheS5pc0FycmF5KGUpfHxcIm9iamVjdFwiIT10eXBlb2YgZT9qKDgpOnQ/dih7fSx0LHt9LGUpOmV9KGUudGhlbWUsdCl9KSxbZS50aGVtZSx0XSk7cmV0dXJuIGUuY2hpbGRyZW4/ci5jcmVhdGVFbGVtZW50KHplLlByb3ZpZGVyLHt2YWx1ZTpufSxlLmNoaWxkcmVuKTpudWxsfXZhciBGZT17fTtmdW5jdGlvbiBZZShlLHQsbil7dmFyIG89TihlKSxpPSFrZShlKSxhPXQuYXR0cnMsYz12b2lkIDA9PT1hP3c6YSxkPXQuY29tcG9uZW50SWQsaD12b2lkIDA9PT1kP2Z1bmN0aW9uKGUsdCl7dmFyIG49XCJzdHJpbmdcIiE9dHlwZW9mIGU/XCJzY1wiOmplKGUpO0ZlW25dPShGZVtuXXx8MCkrMTt2YXIgcj1uK1wiLVwiK1RlKFwiNS4yLjFcIituK0ZlW25dKTtyZXR1cm4gdD90K1wiLVwiK3I6cn0odC5kaXNwbGF5TmFtZSx0LnBhcmVudENvbXBvbmVudElkKTpkLHA9dC5kaXNwbGF5TmFtZSxmPXZvaWQgMD09PXA/ZnVuY3Rpb24oZSl7cmV0dXJuIGtlKGUpP1wic3R5bGVkLlwiK2U6XCJTdHlsZWQoXCIrXyhlKStcIilcIn0oZSk6cCxnPXQuZGlzcGxheU5hbWUmJnQuY29tcG9uZW50SWQ/amUodC5kaXNwbGF5TmFtZSkrXCItXCIrdC5jb21wb25lbnRJZDp0LmNvbXBvbmVudElkfHxoLFM9byYmZS5hdHRycz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuYXR0cnMsYykuZmlsdGVyKEJvb2xlYW4pOmMsQT10LnNob3VsZEZvcndhcmRQcm9wO28mJmUuc2hvdWxkRm9yd2FyZFByb3AmJihBPXQuc2hvdWxkRm9yd2FyZFByb3A/ZnVuY3Rpb24obixyKXtyZXR1cm4gZS5zaG91bGRGb3J3YXJkUHJvcChuLHIpJiZ0LnNob3VsZEZvcndhcmRQcm9wKG4scil9OmUuc2hvdWxkRm9yd2FyZFByb3ApO3ZhciBDLEk9bmV3IHNlKG4sZyxvP2UuY29tcG9uZW50U3R5bGU6dm9pZCAwKSxQPUkuaXNTdGF0aWMmJjA9PT1jLmxlbmd0aCxPPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPWUuYXR0cnMsaT1lLmNvbXBvbmVudFN0eWxlLGE9ZS5kZWZhdWx0UHJvcHMsYz1lLmZvbGRlZENvbXBvbmVudElkcyxkPWUuc2hvdWxkRm9yd2FyZFByb3AsaD1lLnN0eWxlZENvbXBvbmVudElkLHA9ZS50YXJnZXQ7XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbChoKTt2YXIgZj1mdW5jdGlvbihlLHQsbil7dm9pZCAwPT09ZSYmKGU9RSk7dmFyIHI9dih7fSx0LHt0aGVtZTplfSksbz17fTtyZXR1cm4gbi5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdCxuLHMsaT1lO2Zvcih0IGluIGIoaSkmJihpPWkocikpLGkpclt0XT1vW3RdPVwiY2xhc3NOYW1lXCI9PT10PyhuPW9bdF0scz1pW3RdLG4mJnM/bitcIiBcIitzOm58fHMpOmlbdF19KSksW3Isb119KE9lKHQscyh6ZSksYSl8fEUsdCxvKSx5PWZbMF0sZz1mWzFdLFM9ZnVuY3Rpb24oZSx0LG4scil7dmFyIG89ZmUoKSxzPW1lKCksaT10P2UuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoRSxvLHMpOmUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMobixvLHMpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJmwoaSksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmIXQmJnImJnIoaSksaX0oaSxyLHksXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj9lLndhcm5Ub29NYW55Q2xhc3Nlczp2b2lkIDApLHc9bixfPWcuJGFzfHx0LiRhc3x8Zy5hc3x8dC5hc3x8cCxOPWtlKF8pLEE9ZyE9PXQ/dih7fSx0LHt9LGcpOnQsQz17fTtmb3IodmFyIEkgaW4gQSlcIiRcIiE9PUlbMF0mJlwiYXNcIiE9PUkmJihcImZvcndhcmRlZEFzXCI9PT1JP0MuYXM9QVtJXTooZD9kKEksbSk6IU58fG0oSSkpJiYoQ1tJXT1BW0ldKSk7cmV0dXJuIHQuc3R5bGUmJmcuc3R5bGUhPT10LnN0eWxlJiYoQy5zdHlsZT12KHt9LHQuc3R5bGUse30sZy5zdHlsZSkpLEMuY2xhc3NOYW1lPUFycmF5LnByb3RvdHlwZS5jb25jYXQoYyxoLFMhPT1oP1M6bnVsbCx0LmNsYXNzTmFtZSxnLmNsYXNzTmFtZSkuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpLEMucmVmPXcsdShfLEMpfShDLGUsdCxQKX07cmV0dXJuIE8uZGlzcGxheU5hbWU9ZiwoQz1yLmZvcndhcmRSZWYoTykpLmF0dHJzPVMsQy5jb21wb25lbnRTdHlsZT1JLEMuZGlzcGxheU5hbWU9ZixDLnNob3VsZEZvcndhcmRQcm9wPUEsQy5mb2xkZWRDb21wb25lbnRJZHM9bz9BcnJheS5wcm90b3R5cGUuY29uY2F0KGUuZm9sZGVkQ29tcG9uZW50SWRzLGUuc3R5bGVkQ29tcG9uZW50SWQpOncsQy5zdHlsZWRDb21wb25lbnRJZD1nLEMudGFyZ2V0PW8/ZS50YXJnZXQ6ZSxDLndpdGhDb21wb25lbnQ9ZnVuY3Rpb24oZSl7dmFyIHI9dC5jb21wb25lbnRJZCxvPWZ1bmN0aW9uKGUsdCl7aWYobnVsbD09ZSlyZXR1cm57fTt2YXIgbixyLG89e30scz1PYmplY3Qua2V5cyhlKTtmb3Iocj0wO3I8cy5sZW5ndGg7cisrKW49c1tyXSx0LmluZGV4T2Yobik+PTB8fChvW25dPWVbbl0pO3JldHVybiBvfSh0LFtcImNvbXBvbmVudElkXCJdKSxzPXImJnIrXCItXCIrKGtlKGUpP2U6amUoXyhlKSkpO3JldHVybiBZZShlLHYoe30sbyx7YXR0cnM6Uyxjb21wb25lbnRJZDpzfSksbil9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDLFwiZGVmYXVsdFByb3BzXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHN9LHNldDpmdW5jdGlvbih0KXt0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHM9bz9NZSh7fSxlLmRlZmF1bHRQcm9wcyx0KTp0fX0pLFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJihQZShmLGcpLEMud2FyblRvb01hbnlDbGFzc2VzPWZ1bmN0aW9uKGUsdCl7dmFyIG49e30scj0hMTtyZXR1cm4gZnVuY3Rpb24obyl7aWYoIXImJihuW29dPSEwLE9iamVjdC5rZXlzKG4pLmxlbmd0aD49MjAwKSl7dmFyIHM9dD8nIHdpdGggdGhlIGlkIG9mIFwiJyt0KydcIic6XCJcIjtjb25zb2xlLndhcm4oXCJPdmVyIDIwMCBjbGFzc2VzIHdlcmUgZ2VuZXJhdGVkIGZvciBjb21wb25lbnQgXCIrZStzK1wiLlxcbkNvbnNpZGVyIHVzaW5nIHRoZSBhdHRycyBtZXRob2QsIHRvZ2V0aGVyIHdpdGggYSBzdHlsZSBvYmplY3QgZm9yIGZyZXF1ZW50bHkgY2hhbmdlZCBzdHlsZXMuXFxuRXhhbXBsZTpcXG4gIGNvbnN0IENvbXBvbmVudCA9IHN0eWxlZC5kaXYuYXR0cnMocHJvcHMgPT4gKHtcXG4gICAgc3R5bGU6IHtcXG4gICAgICBiYWNrZ3JvdW5kOiBwcm9wcy5iYWNrZ3JvdW5kLFxcbiAgICB9LFxcbiAgfSkpYHdpZHRoOiAxMDAlO2BcXG5cXG4gIDxDb21wb25lbnQgLz5cIikscj0hMCxuPXt9fX19KGYsZykpLEMudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIi5cIitDLnN0eWxlZENvbXBvbmVudElkfSxpJiZ5KEMsZSx7YXR0cnM6ITAsY29tcG9uZW50U3R5bGU6ITAsZGlzcGxheU5hbWU6ITAsZm9sZGVkQ29tcG9uZW50SWRzOiEwLHNob3VsZEZvcndhcmRQcm9wOiEwLHN0eWxlZENvbXBvbmVudElkOiEwLHRhcmdldDohMCx3aXRoQ29tcG9uZW50OiEwfSksQ312YXIgcWU9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uIGUodCxyLG8pe2lmKHZvaWQgMD09PW8mJihvPUUpLCFuKHIpKXJldHVybiBqKDEsU3RyaW5nKHIpKTt2YXIgcz1mdW5jdGlvbigpe3JldHVybiB0KHIsbyxBZS5hcHBseSh2b2lkIDAsYXJndW1lbnRzKSl9O3JldHVybiBzLndpdGhDb25maWc9ZnVuY3Rpb24obil7cmV0dXJuIGUodCxyLHYoe30sbyx7fSxuKSl9LHMuYXR0cnM9ZnVuY3Rpb24obil7cmV0dXJuIGUodCxyLHYoe30sbyx7YXR0cnM6QXJyYXkucHJvdG90eXBlLmNvbmNhdChvLmF0dHJzLG4pLmZpbHRlcihCb29sZWFuKX0pKX0sc30oWWUsZSl9O1tcImFcIixcImFiYnJcIixcImFkZHJlc3NcIixcImFyZWFcIixcImFydGljbGVcIixcImFzaWRlXCIsXCJhdWRpb1wiLFwiYlwiLFwiYmFzZVwiLFwiYmRpXCIsXCJiZG9cIixcImJpZ1wiLFwiYmxvY2txdW90ZVwiLFwiYm9keVwiLFwiYnJcIixcImJ1dHRvblwiLFwiY2FudmFzXCIsXCJjYXB0aW9uXCIsXCJjaXRlXCIsXCJjb2RlXCIsXCJjb2xcIixcImNvbGdyb3VwXCIsXCJkYXRhXCIsXCJkYXRhbGlzdFwiLFwiZGRcIixcImRlbFwiLFwiZGV0YWlsc1wiLFwiZGZuXCIsXCJkaWFsb2dcIixcImRpdlwiLFwiZGxcIixcImR0XCIsXCJlbVwiLFwiZW1iZWRcIixcImZpZWxkc2V0XCIsXCJmaWdjYXB0aW9uXCIsXCJmaWd1cmVcIixcImZvb3RlclwiLFwiZm9ybVwiLFwiaDFcIixcImgyXCIsXCJoM1wiLFwiaDRcIixcImg1XCIsXCJoNlwiLFwiaGVhZFwiLFwiaGVhZGVyXCIsXCJoZ3JvdXBcIixcImhyXCIsXCJodG1sXCIsXCJpXCIsXCJpZnJhbWVcIixcImltZ1wiLFwiaW5wdXRcIixcImluc1wiLFwia2JkXCIsXCJrZXlnZW5cIixcImxhYmVsXCIsXCJsZWdlbmRcIixcImxpXCIsXCJsaW5rXCIsXCJtYWluXCIsXCJtYXBcIixcIm1hcmtcIixcIm1hcnF1ZWVcIixcIm1lbnVcIixcIm1lbnVpdGVtXCIsXCJtZXRhXCIsXCJtZXRlclwiLFwibmF2XCIsXCJub3NjcmlwdFwiLFwib2JqZWN0XCIsXCJvbFwiLFwib3B0Z3JvdXBcIixcIm9wdGlvblwiLFwib3V0cHV0XCIsXCJwXCIsXCJwYXJhbVwiLFwicGljdHVyZVwiLFwicHJlXCIsXCJwcm9ncmVzc1wiLFwicVwiLFwicnBcIixcInJ0XCIsXCJydWJ5XCIsXCJzXCIsXCJzYW1wXCIsXCJzY3JpcHRcIixcInNlY3Rpb25cIixcInNlbGVjdFwiLFwic21hbGxcIixcInNvdXJjZVwiLFwic3BhblwiLFwic3Ryb25nXCIsXCJzdHlsZVwiLFwic3ViXCIsXCJzdW1tYXJ5XCIsXCJzdXBcIixcInRhYmxlXCIsXCJ0Ym9keVwiLFwidGRcIixcInRleHRhcmVhXCIsXCJ0Zm9vdFwiLFwidGhcIixcInRoZWFkXCIsXCJ0aW1lXCIsXCJ0aXRsZVwiLFwidHJcIixcInRyYWNrXCIsXCJ1XCIsXCJ1bFwiLFwidmFyXCIsXCJ2aWRlb1wiLFwid2JyXCIsXCJjaXJjbGVcIixcImNsaXBQYXRoXCIsXCJkZWZzXCIsXCJlbGxpcHNlXCIsXCJmb3JlaWduT2JqZWN0XCIsXCJnXCIsXCJpbWFnZVwiLFwibGluZVwiLFwibGluZWFyR3JhZGllbnRcIixcIm1hcmtlclwiLFwibWFza1wiLFwicGF0aFwiLFwicGF0dGVyblwiLFwicG9seWdvblwiLFwicG9seWxpbmVcIixcInJhZGlhbEdyYWRpZW50XCIsXCJyZWN0XCIsXCJzdG9wXCIsXCJzdmdcIixcInRleHRcIixcInRzcGFuXCJdLmZvckVhY2goKGZ1bmN0aW9uKGUpe3FlW2VdPXFlKGUpfSkpO3ZhciBIZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXt0aGlzLnJ1bGVzPWUsdGhpcy5jb21wb25lbnRJZD10LHRoaXMuaXNTdGF0aWM9cmUoZSksWi5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQrMSl9dmFyIHQ9ZS5wcm90b3R5cGU7cmV0dXJuIHQuY3JlYXRlU3R5bGVzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBvPXIoTmUodGhpcy5ydWxlcyx0LG4scikuam9pbihcIlwiKSxcIlwiKSxzPXRoaXMuY29tcG9uZW50SWQrZTtuLmluc2VydFJ1bGVzKHMscyxvKX0sdC5yZW1vdmVTdHlsZXM9ZnVuY3Rpb24oZSx0KXt0LmNsZWFyUnVsZXModGhpcy5jb21wb25lbnRJZCtlKX0sdC5yZW5kZXJTdHlsZXM9ZnVuY3Rpb24oZSx0LG4scil7ZT4yJiZaLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCtlKSx0aGlzLnJlbW92ZVN0eWxlcyhlLG4pLHRoaXMuY3JlYXRlU3R5bGVzKGUsdCxuLHIpfSxlfSgpO2Z1bmN0aW9uICRlKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCksbz0xO288dDtvKyspbltvLTFdPWFyZ3VtZW50c1tvXTt2YXIgaT1BZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSksYT1cInNjLWdsb2JhbC1cIitUZShKU09OLnN0cmluZ2lmeShpKSksdT1uZXcgSGUoaSxhKTtmdW5jdGlvbiBsKGUpe3ZhciB0PWZlKCksbj1tZSgpLG89cyh6ZSksbD1jKHQuYWxsb2NhdGVHU0luc3RhbmNlKGEpKS5jdXJyZW50O3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnIuQ2hpbGRyZW4uY291bnQoZS5jaGlsZHJlbikmJmNvbnNvbGUud2FybihcIlRoZSBnbG9iYWwgc3R5bGUgY29tcG9uZW50IFwiK2ErXCIgd2FzIGdpdmVuIGNoaWxkIEpTWC4gY3JlYXRlR2xvYmFsU3R5bGUgZG9lcyBub3QgcmVuZGVyIGNoaWxkcmVuLlwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZpLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYtMSE9PWUuaW5kZXhPZihcIkBpbXBvcnRcIil9KSkmJmNvbnNvbGUud2FybihcIlBsZWFzZSBkbyBub3QgdXNlIEBpbXBvcnQgQ1NTIHN5bnRheCBpbiBjcmVhdGVHbG9iYWxTdHlsZSBhdCB0aGlzIHRpbWUsIGFzIHRoZSBDU1NPTSBBUElzIHdlIHVzZSBpbiBwcm9kdWN0aW9uIGRvIG5vdCBoYW5kbGUgaXQgd2VsbC4gSW5zdGVhZCwgd2UgcmVjb21tZW5kIHVzaW5nIGEgbGlicmFyeSBzdWNoIGFzIHJlYWN0LWhlbG1ldCB0byBpbmplY3QgYSB0eXBpY2FsIDxsaW5rPiBtZXRhIHRhZyB0byB0aGUgc3R5bGVzaGVldCwgb3Igc2ltcGx5IGVtYmVkZGluZyBpdCBtYW51YWxseSBpbiB5b3VyIGluZGV4Lmh0bWwgPGhlYWQ+IHNlY3Rpb24gZm9yIGEgc2ltcGxlciBhcHAuXCIpLGQoKGZ1bmN0aW9uKCl7cmV0dXJuIGgobCxlLHQsbyxuKSxmdW5jdGlvbigpe3JldHVybiB1LnJlbW92ZVN0eWxlcyhsLHQpfX0pLFtsLGUsdCxvLG5dKSxudWxsfWZ1bmN0aW9uIGgoZSx0LG4scixvKXtpZih1LmlzU3RhdGljKXUucmVuZGVyU3R5bGVzKGUsTyxuLG8pO2Vsc2V7dmFyIHM9dih7fSx0LHt0aGVtZTpPZSh0LHIsbC5kZWZhdWx0UHJvcHMpfSk7dS5yZW5kZXJTdHlsZXMoZSxzLG4sbyl9fXJldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlBlKGEpLHIubWVtbyhsKX1mdW5jdGlvbiBXZShlKXtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiYGtleWZyYW1lc2AgY2Fubm90IGJlIHVzZWQgb24gUmVhY3ROYXRpdmUsIG9ubHkgb24gdGhlIHdlYi4gVG8gZG8gYW5pbWF0aW9uIGluIFJlYWN0TmF0aXZlIHBsZWFzZSB1c2UgQW5pbWF0ZWQuXCIpO2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLG49bmV3IEFycmF5KHQ+MT90LTE6MCkscj0xO3I8dDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTt2YXIgbz1BZS5hcHBseSh2b2lkIDAsW2VdLmNvbmNhdChuKSkuam9pbihcIlwiKSxzPVRlKG8pO3JldHVybiBuZXcgdmUocyxvKX12YXIgVWU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7dmFyIGU9dGhpczt0aGlzLl9lbWl0U2hlZXRDU1M9ZnVuY3Rpb24oKXt2YXIgdD1lLmluc3RhbmNlLnRvU3RyaW5nKCksbj1xKCk7cmV0dXJuXCI8c3R5bGUgXCIrW24mJidub25jZT1cIicrbisnXCInLEErJz1cInRydWVcIicsJ2RhdGEtc3R5bGVkLXZlcnNpb249XCI1LjIuMVwiJ10uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpK1wiPlwiK3QrXCI8L3N0eWxlPlwifSx0aGlzLmdldFN0eWxlVGFncz1mdW5jdGlvbigpe3JldHVybiBlLnNlYWxlZD9qKDIpOmUuX2VtaXRTaGVldENTUygpfSx0aGlzLmdldFN0eWxlRWxlbWVudD1mdW5jdGlvbigpe3ZhciB0O2lmKGUuc2VhbGVkKXJldHVybiBqKDIpO3ZhciBuPSgodD17fSlbQV09XCJcIix0W1wiZGF0YS1zdHlsZWQtdmVyc2lvblwiXT1cIjUuMi4xXCIsdC5kYW5nZXJvdXNseVNldElubmVySFRNTD17X19odG1sOmUuaW5zdGFuY2UudG9TdHJpbmcoKX0sdCksbz1xKCk7cmV0dXJuIG8mJihuLm5vbmNlPW8pLFtyLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHYoe30sbix7a2V5Olwic2MtMC0wXCJ9KSldfSx0aGlzLnNlYWw9ZnVuY3Rpb24oKXtlLnNlYWxlZD0hMH0sdGhpcy5pbnN0YW5jZT1uZXcgWih7aXNTZXJ2ZXI6ITB9KSx0aGlzLnNlYWxlZD0hMX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5jb2xsZWN0U3R5bGVzPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNlYWxlZD9qKDIpOnIuY3JlYXRlRWxlbWVudCh5ZSx7c2hlZXQ6dGhpcy5pbnN0YW5jZX0sZSl9LHQuaW50ZXJsZWF2ZVdpdGhOb2RlU3RyZWFtPWZ1bmN0aW9uKGUpe3JldHVybiBqKDMpfSxlfSgpLEplPWZ1bmN0aW9uKGUpe3ZhciB0PXIuZm9yd2FyZFJlZigoZnVuY3Rpb24odCxuKXt2YXIgbz1zKHplKSxpPWUuZGVmYXVsdFByb3BzLGE9T2UodCxvLGkpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnZvaWQgMD09PWEmJmNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInK18oZSkrJ1wiJyksci5jcmVhdGVFbGVtZW50KGUsdih7fSx0LHt0aGVtZTphLHJlZjpufSkpfSkpO3JldHVybiB5KHQsZSksdC5kaXNwbGF5TmFtZT1cIldpdGhUaGVtZShcIitfKGUpK1wiKVwiLHR9LFhlPWZ1bmN0aW9uKCl7cmV0dXJuIHMoemUpfSxaZT17U3R5bGVTaGVldDpaLG1hc3RlclNoZWV0OmhlfTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiSXQgbG9va3MgbGlrZSB5b3UndmUgaW1wb3J0ZWQgJ3N0eWxlZC1jb21wb25lbnRzJyBvbiBSZWFjdCBOYXRpdmUuXFxuUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZVwiKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInRlc3RcIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYod2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl09d2luZG93W1wiX19zdHlsZWQtY29tcG9uZW50cy1pbml0X19cIl18fDAsMT09PXdpbmRvd1tcIl9fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fXCJdJiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzZXZlcmFsIGluc3RhbmNlcyBvZiAnc3R5bGVkLWNvbXBvbmVudHMnIGluaXRpYWxpemVkIGluIHRoaXMgYXBwbGljYXRpb24uIFRoaXMgbWF5IGNhdXNlIGR5bmFtaWMgc3R5bGVzIHRvIG5vdCByZW5kZXIgcHJvcGVybHksIGVycm9ycyBkdXJpbmcgdGhlIHJlaHlkcmF0aW9uIHByb2Nlc3MsIGEgbWlzc2luZyB0aGVtZSBwcm9wLCBhbmQgbWFrZXMgeW91ciBhcHBsaWNhdGlvbiBiaWdnZXIgd2l0aG91dCBnb29kIHJlYXNvbi5cXG5cXG5TZWUgaHR0cHM6Ly9zLWMuc2gvMkJBWHplZCBmb3IgbW9yZSBpbmZvLlwiKSx3aW5kb3dbXCJfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfX1wiXSs9MSk7ZXhwb3J0IGRlZmF1bHQgcWU7ZXhwb3J0e1VlIGFzIFNlcnZlclN0eWxlU2hlZXQsbGUgYXMgU3R5bGVTaGVldENvbnN1bWVyLHVlIGFzIFN0eWxlU2hlZXRDb250ZXh0LHllIGFzIFN0eWxlU2hlZXRNYW5hZ2VyLExlIGFzIFRoZW1lQ29uc3VtZXIsemUgYXMgVGhlbWVDb250ZXh0LEdlIGFzIFRoZW1lUHJvdmlkZXIsWmUgYXMgX19QUklWQVRFX18sJGUgYXMgY3JlYXRlR2xvYmFsU3R5bGUsQWUgYXMgY3NzLE4gYXMgaXNTdHlsZWRDb21wb25lbnQsV2UgYXMga2V5ZnJhbWVzLFhlIGFzIHVzZVRoZW1lLEMgYXMgdmVyc2lvbixKZSBhcyB3aXRoVGhlbWV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGVkLWNvbXBvbmVudHMuYnJvd3Nlci5lc20uanMubWFwXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlcXVpcmVkQ2xhc3M6IFwiYmctYmx1ZS0xMDBcIixcbiAgcmVxdWlyZWRDb2xvcjogXCIjREJFQUZFXCIsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgRmllbGQgYXMgRmllbGRPb3VpLCBMYWJlbCBhcyBMYWJlbE9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCJAL3dpZGdldHMvYmFzZS9MYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWVsZCh7XG4gIG9vdWksXG4gIGNoaWxkcmVuLFxuICBsYXlvdXQgPSBcImhvcml6b250YWxcIixcbiAgdmFsdWVQcm9wTmFtZSxcbiAgc2hvd0xhYmVsID0gZmFsc2UsXG4gIGFsaWduTGFiZWwgPSBcImxlZnRcIixcbn06IHtcbiAgb291aTogRmllbGRPb3VpO1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbGF5b3V0PzogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG4gIHZhbHVlUHJvcE5hbWU/OiBzdHJpbmc7XG4gIHNob3dMYWJlbD86IGJvb2xlYW47XG4gIGFsaWduTGFiZWw/OiBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XG59KSB7XG4gIGNvbnN0IHsgaWQsIGxhYmVsLCB0b29sdGlwIH0gPSBvb3VpO1xuXG4gIGNvbnN0IGZvcm1JdGVtID0gKCkgPT4gKFxuICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwibWItMFwiIG5hbWU9e2lkfSB2YWx1ZVByb3BOYW1lPXt2YWx1ZVByb3BOYW1lfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Zvcm0uSXRlbT5cbiAgKTtcblxuICBpZiAoIXNob3dMYWJlbCkge1xuICAgIHJldHVybiBmb3JtSXRlbSgpO1xuICB9XG5cbiAgY29uc3QgbGFiZWxXaWRnZXQgPSAoXG4gICAgPExhYmVsXG4gICAgICBvb3VpPXtcbiAgICAgICAgbmV3IExhYmVsT291aSh7XG4gICAgICAgICAgbmFtZTogaWQgKyBcIl9sYWJlbFwiLFxuICAgICAgICAgIHN0cmluZzogbGFiZWwsXG4gICAgICAgICAgaGVscDogdG9vbHRpcCxcbiAgICAgICAgICBmaWVsZEZvckxhYmVsOiBpZCxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGFsaWduPXthbGlnbkxhYmVsfVxuICAgIC8+XG4gICk7XG5cbiAgY29uc3QgaG9yaXpvbnRhbE1vZGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3cgYWxpZ249XCJtaWRkbGVcIiBjbGFzc05hbWU9XCJwYi0xIHB0LTFcIj5cbiAgICAgICAgPENvbCBjbGFzc05hbWU9XCJtbC0yXCIgZmxleD1cIjdyZW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtZW5kXCI+e2xhYmVsV2lkZ2V0fTwvZGl2PlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBmbGV4PVwiYXV0b1wiPntmb3JtSXRlbSgpfTwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCB2ZXJ0aWNhbE1vZGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtsYWJlbFdpZGdldH1cbiAgICAgICAge2Zvcm1JdGVtKCl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBsYXlvdXQgPT09IFwiaG9yaXpvbnRhbFwiID8gaG9yaXpvbnRhbE1vZGUoKSA6IHZlcnRpY2FsTW9kZSgpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgU3RyaW5ncyB9IGZyb20gXCJAL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIExvY2FsZXNDb250ZXh0VHlwZSA9IHtcbiAgZ2V0U3RyaW5nOiAoa2V5OiBzdHJpbmcpID0+IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBMb2NhbGVzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8TG9jYWxlc0NvbnRleHRUeXBlIHwgbnVsbD4oXG4gIG51bGxcbik7XG5cbmNvbnN0IExvY2FsZXNQcm92aWRlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBzdHJpbmdzOiBzdHJpbmdzUHJvcCxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgc3RyaW5nczogU3RyaW5ncztcbn0pOiBhbnkgPT4ge1xuICBjb25zdCBbc3RyaW5ncywgc2V0U3RyaW5nc10gPSB1c2VTdGF0ZTxTdHJpbmdzPih7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTdHJpbmdzKHN0cmluZ3NQcm9wKTtcbiAgfSwgW3N0cmluZ3NQcm9wXSk7XG5cbiAgY29uc3QgZ2V0U3RyaW5nID0gKGtleTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGdldExvY2FsaXplZFN0cmluZyhrZXksIHN0cmluZ3MpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExvY2FsZXNDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBnZXRTdHJpbmcsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0xvY2FsZXNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxlc1Byb3ZpZGVyO1xuXG5leHBvcnQgY29uc3QgZ2V0TG9jYWxpemVkU3RyaW5nID0gKGtleTogc3RyaW5nLCBzdHJpbmdzOiBTdHJpbmdzKSA9PiB7XG4gIGNvbnN0IGxvY2FsaXplZCA9IHN0cmluZ3Nba2V5XTtcbiAgaWYgKGxvY2FsaXplZCkgcmV0dXJuIGxvY2FsaXplZDtcbiAgZWxzZSByZXR1cm4ga2V5O1xufTtcbiIsImltcG9ydCB7IFdpZGdldCwgRmllbGQsIExhYmVsLCBCdXR0b24sIFRleHQgfSBmcm9tIFwib291aVwiO1xuXG5jb25zdCBjbG9uZSA9IGZ1bmN0aW9uIGNsb25lPFQ+KGluc3RhbmNlOiBUKTogVCB7XG4gIGNvbnN0IGNvcHkgPSBuZXcgKChpbnN0YW5jZSBhcyBhbnkpLmNvbnN0cnVjdG9yIGFzIHsgbmV3ICgpOiBUIH0pKCk7XG4gIE9iamVjdC5hc3NpZ24oY29weSwgaW5zdGFuY2UpO1xuICByZXR1cm4gY29weTtcbn07XG5cbmNvbnN0IGdldFNwYW5TdHlsZUZvckl0ZW0gPSAoe1xuICBpdGVtLFxuICByZXNwb25zaXZlQmVoYXZpb3VyLFxufToge1xuICBpdGVtOiBXaWRnZXQ7XG4gIHJlc3BvbnNpdmVCZWhhdmlvdXI6IGJvb2xlYW47XG59KSA9PiB7XG4gIHJldHVybiB7XG4gICAgZ3JpZENvbHVtblN0YXJ0OiBcInNwYW4gXCIgKyAocmVzcG9uc2l2ZUJlaGF2aW91ciA/IDEgOiBpdGVtLmNvbHNwYW4pLFxuICB9O1xufTtcblxuY29uc3QgZmlsbFJvd1dpdGhFbXB0aWVzVG9GaXQgPSAoe1xuICByb3csXG4gIG11c3RGaWxsV2l0aEVtcHRpZXMsXG4gIG51bWJlck9mQ29sdW1ucyxcbn06IHtcbiAgcm93OiBhbnk7XG4gIG11c3RGaWxsV2l0aEVtcHRpZXM6IGJvb2xlYW47XG4gIG51bWJlck9mQ29sdW1uczogbnVtYmVyO1xufSkgPT4ge1xuICBjb25zdCByb3dXaXRoRW1wdGllc1RvRml0OiBhbnkgPSBbXTtcbiAgbGV0IHRvdGFsQ29sU3BhbiA9IDA7XG5cbiAgcm93Lm1hcCgoaXRlbTogV2lkZ2V0LCBjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgdG90YWxDb2xTcGFuICs9IGl0ZW0uY29sc3BhbjtcbiAgICByb3dXaXRoRW1wdGllc1RvRml0LnB1c2goaXRlbSk7XG5cbiAgICBpZiAoXG4gICAgICBjb2x1bW5JbmRleCArIDEgPT09IHJvdy5sZW5ndGggJiZcbiAgICAgIHRvdGFsQ29sU3BhbiA8IG51bWJlck9mQ29sdW1ucyAmJlxuICAgICAgIW11c3RGaWxsV2l0aEVtcHRpZXNcbiAgICApIHtcbiAgICAgIGNvbnN0IGdhcHNUb0ZpbGwgPSBudW1iZXJPZkNvbHVtbnMgLSB0b3RhbENvbFNwYW47XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhcHNUb0ZpbGw7IGkgKz0gMSkge1xuICAgICAgICByb3dXaXRoRW1wdGllc1RvRml0LnB1c2gobmV3IExhYmVsKHsgc3RyaW5nOiBcIlwiIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByb3dXaXRoRW1wdGllc1RvRml0O1xufTtcblxuY29uc3QgZ2V0VGVtcGxhdGVDb2x1bW5zID0gKGNvbHVtbnM6IG51bWJlcikgPT4ge1xuICBjb25zdCBvZGQgPSBcIjFmclwiO1xuICBjb25zdCBldmVuID0gXCJhdXRvXCI7XG4gIGxldCB0ZW1wbGF0ZUNvbHVtbnMgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbnM7IGkrKykge1xuICAgIHRlbXBsYXRlQ29sdW1ucyArPSBpICUgMiA/IG9kZCA6IGV2ZW47XG4gICAgaWYgKGkgPCBjb2x1bW5zKSB7XG4gICAgICB0ZW1wbGF0ZUNvbHVtbnMgKz0gXCIgXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiB0ZW1wbGF0ZUNvbHVtbnM7XG59O1xuXG5leHBvcnQgeyBnZXRUZW1wbGF0ZUNvbHVtbnMsIGZpbGxSb3dXaXRoRW1wdGllc1RvRml0LCBnZXRTcGFuU3R5bGVGb3JJdGVtIH07XG4iLCJjb25zdCBjb252ZXJ0Qm9vbGVhblBhcmFtSWZOZWVkZWQgPSAodmFsdWU6IGFueSkgPT4ge1xuICBpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSA9PT0gXCJ0cnVlXCIpIHx8IHZhbHVlID09PSBcImZhbHNlXCIpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IFwidHJ1ZVwiO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmNvbnN0IGdldFBhcmFtc0ZvckZpZWxkcyA9ICh2YWx1ZXM6IGFueSwgZmllbGRzOiBhbnkpID0+IHtcbiAgY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSByZW1vdmVVbmRlZmluZWRGaWVsZHModmFsdWVzKTtcbiAgY29uc3QgZ3JvdXBlZERhdGVUaW1lID0gZ3JvdXBEYXRlVGltZVZhbHVlc0lmTmVlZGVkKGZpbHRlcmVkVmFsdWVzKTtcbiAgY29uc3QgZ3JvdXBlZFZhbHVlcyA9IHVuZ3JvdXBEYXRlVmFsdWVzSWZOZWVkZWQoZ3JvdXBlZERhdGVUaW1lLCBmaWVsZHMpO1xuXG4gIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAuLi5PYmplY3Qua2V5cyhncm91cGVkVmFsdWVzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgcmV0dXJuIGdldFBhcmFtRm9yRmllbGQoa2V5LCBncm91cGVkVmFsdWVzW2tleV0sIGZpZWxkcyk7XG4gICAgfSksXG4gIF07XG5cbiAgLy8gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBpbiBjYXNlIG9mIGRhdGV0aW1lIHdlIHJlY2VpdmUgYW4gYXJyYXkgb2YgYXJyYXlzXG4gIHJldHVybiBwYXJhbXMucmVkdWNlKChhY2MsIGN1clZhbCkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGN1clZhbFswXSkpIHtcbiAgICAgIHJldHVybiBhY2MuY29uY2F0KGN1clZhbCk7XG4gICAgfVxuICAgIHJldHVybiBbLi4uYWNjLCBjdXJWYWxdO1xuICB9LCBbXSk7XG59O1xuXG5jb25zdCBnZXRQYXJhbUZvckZpZWxkID0gKGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBmaWVsZHM6IGFueSkgPT4ge1xuICBjb25zdCBmaWx0ZXJlZEtleSA9IGtleS5zcGxpdChcIiNcIilbMF07XG4gIGNvbnN0IHR5cGUgPSBmaWVsZHNbZmlsdGVyZWRLZXldLnR5cGU7XG5cbiAgaWYgKFxuICAgIHR5cGUgPT09IFwiY2hhclwiIHx8XG4gICAgdHlwZSA9PT0gXCJ0ZXh0XCIgfHxcbiAgICB0eXBlID09PSBcIm1hbnkyb25lXCIgfHxcbiAgICB0eXBlID09PSBcIm1hbnkybWFueVwiIHx8XG4gICAgdHlwZSA9PT0gXCJvbmUybWFueVwiXG4gICkge1xuICAgIHJldHVybiBba2V5LCBcImlsaWtlXCIsIHZhbHVlXTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlID09PSBcImZsb2F0XCIgfHxcbiAgICB0eXBlID09PSBcImludGVnZXJcIiB8fFxuICAgIHR5cGUgPT09IFwiZmxvYXRfdGltZVwiIHx8XG4gICAgdHlwZSA9PT0gXCJwcm9ncmVzc2JhclwiXG4gICkge1xuICAgIGNvbnN0IG9wZXJhdG9yID0ga2V5LmluZGV4T2YoXCIjZnJvbVwiKSAhPT0gLTEgPyBcIj49XCIgOiBcIjw9XCI7XG4gICAgcmV0dXJuIFtmaWx0ZXJlZEtleSwgb3BlcmF0b3IsIHZhbHVlXTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImRhdGVcIikge1xuICAgIGNvbnN0IG9wZXJhdG9yID0ga2V5LmluZGV4T2YoXCIjZnJvbVwiKSAhPT0gLTEgPyBcIj49XCIgOiBcIjw9XCI7XG4gICAgcmV0dXJuIFtmaWx0ZXJlZEtleSwgb3BlcmF0b3IsIHZhbHVlLmZvcm1hdChcIllZWVktTU0tRERcIildO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZGF0ZXRpbWVcIikge1xuICAgIGNvbnN0IGZyb20gPSB2YWx1ZVswXTtcbiAgICBjb25zdCB0byA9IHZhbHVlWzFdO1xuICAgIHJldHVybiBbXG4gICAgICBbZmlsdGVyZWRLZXksIFwiPj1cIiwgZnJvbV0sXG4gICAgICBbZmlsdGVyZWRLZXksIFwiPD1cIiwgdG9dLFxuICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtrZXksIFwiPVwiLCBjb252ZXJ0Qm9vbGVhblBhcmFtSWZOZWVkZWQodmFsdWUpXTtcbiAgfVxufTtcblxuY29uc3QgZ2V0RGF0ZXRpbWVEYXRlRmllbGRzID0gKHZhbHVlczogYW55KSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZXMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgcmV0dXJuIGtleS5pbmRleE9mKFwiI2RhdGVcIikgIT09IC0xO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZURhdGVUaW1lU2luZ2xlRmllbGRzID0gKHZhbHVlczogYW55KSA9PiB7XG4gIGNvbnN0IG5ld1ZhbHVlcyA9IHsgLi4udmFsdWVzIH07XG4gIE9iamVjdC5rZXlzKG5ld1ZhbHVlcykuZm9yRWFjaChcbiAgICAoa2V5KSA9PlxuICAgICAgKGtleS5pbmRleE9mKFwiI3RpbWVcIikgIT09IC0xIHx8IGtleS5pbmRleE9mKFwiI2RhdGVcIikgIT09IC0xKSAmJlxuICAgICAgZGVsZXRlIG5ld1ZhbHVlc1trZXldXG4gICk7XG4gIHJldHVybiBuZXdWYWx1ZXM7XG59O1xuXG5jb25zdCBncm91cERhdGVUaW1lVmFsdWVzSWZOZWVkZWQgPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgY29uc3QgbmV3VmFsdWVzOiBhbnkgPSB7IC4uLnJlbW92ZURhdGVUaW1lU2luZ2xlRmllbGRzKHZhbHVlcykgfTtcblxuICBjb25zdCBkYXRldGltZURhdGVGaWVsZHMgPSBnZXREYXRldGltZURhdGVGaWVsZHModmFsdWVzKTtcblxuICBkYXRldGltZURhdGVGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBjb25zdCBkYXRlUGFpciA9IHZhbHVlc1tmaWVsZF07XG4gICAgY29uc3QgYmFzZUtleSA9IGZpZWxkLnNwbGl0KFwiI1wiKVswXTtcbiAgICBjb25zdCB0aW1lS2V5ID0gYmFzZUtleSArIFwiI3RpbWVcIjtcbiAgICBjb25zdCB0aW1lUGFpciA9IHZhbHVlc1t0aW1lS2V5XTtcbiAgICBjb25zdCBkYXRlVmFsdWVGcm9tID0gZGF0ZVBhaXJbMF0uZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICBjb25zdCBkYXRlVmFsdWVUbyA9IGRhdGVQYWlyWzFdLmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgY29uc3QgdGltZVZhbHVlRnJvbSA9IHRpbWVQYWlyWzBdLmZvcm1hdChcIkhIOm1tXCIpO1xuICAgIGNvbnN0IHRpbWVWYWx1ZVRvID0gdGltZVBhaXJbMV0uZm9ybWF0KFwiSEg6bW1cIik7XG4gICAgY29uc3QgZnJvbSA9IGRhdGVWYWx1ZUZyb20gKyBcIiBcIiArIHRpbWVWYWx1ZUZyb207XG4gICAgY29uc3QgdG8gPSBkYXRlVmFsdWVUbyArIFwiIFwiICsgdGltZVZhbHVlVG87XG4gICAgbmV3VmFsdWVzW2Jhc2VLZXkgKyBcIiNkYXRldGltZVwiXSA9IFtmcm9tLCB0b107XG4gIH0pO1xuXG4gIHJldHVybiBuZXdWYWx1ZXM7XG59O1xuXG5jb25zdCB1bmdyb3VwRGF0ZVZhbHVlc0lmTmVlZGVkID0gKHZhbHVlczogYW55LCBmaWVsZHM6IGFueSkgPT4ge1xuICBjb25zdCBkYXRlRmllbGRzID0gT2JqZWN0LmtleXModmFsdWVzKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgIHJldHVybiBmaWVsZHNba2V5XSAmJiBmaWVsZHNba2V5XS50eXBlID09PSBcImRhdGVcIjtcbiAgfSk7XG5cbiAgbGV0IG5ld1ZhbHVlczogYW55ID0geyAuLi52YWx1ZXMgfTtcblxuICBkYXRlRmllbGRzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGRlbGV0ZSBuZXdWYWx1ZXNba2V5XTtcbiAgICBuZXdWYWx1ZXNba2V5ICsgXCIjZnJvbVwiXSA9IHZhbHVlc1trZXldWzBdO1xuICAgIG5ld1ZhbHVlc1trZXkgKyBcIiN0b1wiXSA9IHZhbHVlc1trZXldWzFdO1xuICB9KTtcblxuICByZXR1cm4gbmV3VmFsdWVzO1xufTtcblxuY29uc3QgcmVtb3ZlVW5kZWZpbmVkRmllbGRzID0gKHZhbHVlczogYW55KSA9PiB7XG4gIGNvbnN0IG5ld1ZhbHVlcyA9IHsgLi4udmFsdWVzIH07XG4gIE9iamVjdC5rZXlzKG5ld1ZhbHVlcykuZm9yRWFjaChcbiAgICAoa2V5KSA9PlxuICAgICAgKG5ld1ZhbHVlc1trZXldID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgbmV3VmFsdWVzW2tleV0gPT09IG51bGwgfHxcbiAgICAgICAgbmV3VmFsdWVzW2tleV0gPT09IFwiXCIpICYmXG4gICAgICBkZWxldGUgbmV3VmFsdWVzW2tleV1cbiAgKTtcbiAgcmV0dXJuIG5ld1ZhbHVlcztcbn07XG5cbmV4cG9ydCB7XG4gIHJlbW92ZVVuZGVmaW5lZEZpZWxkcyxcbiAgZ3JvdXBEYXRlVGltZVZhbHVlc0lmTmVlZGVkLFxuICBnZXRQYXJhbXNGb3JGaWVsZHMsXG59O1xuIiwiaW1wb3J0IHsgVHJlZSBhcyBUcmVlT291aSwgU2VsZWN0aW9uLCBNYW55Mm9uZSwgQm9vbGVhbiB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBUcmVlVmlldywgQ29sdW1uIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuY29uc3QgZ2V0VHJlZSA9ICh0cmVlVmlldzogVHJlZVZpZXcpOiBUcmVlT291aSA9PiB7XG4gIGNvbnN0IHhtbCA9IHRyZWVWaWV3LmFyY2g7XG4gIGNvbnN0IGZpZWxkcyA9IHRyZWVWaWV3LmZpZWxkcztcbiAgY29uc3QgdHJlZSA9IG5ldyBUcmVlT291aShmaWVsZHMpO1xuICB0cmVlLnBhcnNlKHhtbCk7XG4gIHJldHVybiB0cmVlO1xufTtcblxuY29uc3QgZ2V0VGFibGVDb2x1bW5zID0gKFxuICB0cmVlOiBUcmVlT291aSxcbiAgYm9vbGVhbkNvbXBvbmVudDogYW55XG4pOiBBcnJheTxDb2x1bW4+ID0+IHtcbiAgY29uc3QgdGFibGVDb2x1bW5zID0gdHJlZS5jb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgY29uc3QgdHlwZSA9IGNvbHVtbi5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGNvbnN0IGtleSA9IGNvbHVtbi5pZDtcbiAgICBjb25zdCByZW5kZXIgPVxuICAgICAgdHlwZSA9PT0gXCJCb29sZWFuXCJcbiAgICAgICAgPyAoYm9vbGVhbkZpZWxkOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYm9vbGVhbkNvbXBvbmVudChib29sZWFuRmllbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAga2V5LFxuICAgICAgZGF0YUluZGV4OiBrZXksXG4gICAgICB0aXRsZTogY29sdW1uLmxhYmVsLFxuICAgICAgdHlwZSxcbiAgICAgIHJlbmRlcixcbiAgICAgIHNvcnRlcjogKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgIGlmIChhW2tleV0gPCBiW2tleV0pIHJldHVybiAtMTtcbiAgICAgICAgaWYgKGFba2V5XSA+IGJba2V5XSkgcmV0dXJuIDE7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHRhYmxlQ29sdW1ucztcbn07XG5cbmNvbnN0IGdldFRhYmxlSXRlbXMgPSAodHJlZU9vdWk6IFRyZWVPb3VpLCByZXN1bHRzOiBBcnJheTxhbnk+KTogQXJyYXk8YW55PiA9PiB7XG4gIGNvbnN0IHRhYmxlSXRlbXMgPSByZXN1bHRzLm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgY29uc3QgcGFyc2VkSXRlbTogYW55ID0ge307XG4gICAgT2JqZWN0LmtleXMoaXRlbSkubWFwKChrZXkpID0+IHtcbiAgICAgIGlmIChrZXkgPT09IFwiaWRcIikge1xuICAgICAgICBwYXJzZWRJdGVtW2tleV0gPSBpdGVtW2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB3aWRnZXQgPSB0cmVlT291aS5maW5kQnlJZChrZXkpO1xuXG4gICAgICAgIGlmICh3aWRnZXQgaW5zdGFuY2VvZiBTZWxlY3Rpb24pIHtcbiAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aWRnZXQ7XG4gICAgICAgICAgcGFyc2VkSXRlbVtrZXldID0gc2VsZWN0aW9uLnNlbGVjdGlvblZhbHVlcy5nZXQoaXRlbVtrZXldKTtcbiAgICAgICAgfSBlbHNlIGlmICh3aWRnZXQgaW5zdGFuY2VvZiBNYW55Mm9uZSkge1xuICAgICAgICAgIHBhcnNlZEl0ZW1ba2V5XSA9IGl0ZW1ba2V5XVsxXTtcbiAgICAgICAgfSBlbHNlIGlmICh3aWRnZXQgaW5zdGFuY2VvZiBCb29sZWFuKSB7XG4gICAgICAgICAgcGFyc2VkSXRlbVtrZXldID0gaXRlbVtrZXldO1xuICAgICAgICB9IGVsc2UgaWYgKHdpZGdldCkge1xuICAgICAgICAgIHBhcnNlZEl0ZW1ba2V5XSA9IGl0ZW1ba2V5XSA9PT0gZmFsc2UgPyBcIlwiIDogaXRlbVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnNlZEl0ZW07XG4gIH0pO1xuXG4gIHJldHVybiB0YWJsZUl0ZW1zO1xufTtcblxuZXhwb3J0IHsgZ2V0VGFibGVDb2x1bW5zLCBnZXRUYWJsZUl0ZW1zLCBnZXRUcmVlIH07XG4iLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvQnV0dG9uXCI7XG5pbXBvcnQgeyBDaGFyIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0NoYXJcIjtcbmltcG9ydCB7IFNlbGVjdGlvbiB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9TZWxlY3Rpb25cIjtcbmltcG9ydCB7IEJvb2xlYW4gfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvQm9vbGVhblwiO1xuaW1wb3J0IHsgTWFueTJvbmUgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvTWFueTJvbmVcIjtcbmltcG9ydCBUcmVlIGZyb20gXCJAL3dpZGdldHMvdmlld3MvVHJlZVwiO1xuaW1wb3J0IHsgRmxvYXQgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvRmxvYXRcIjtcbmltcG9ydCB7IEludGVnZXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvSW50ZWdlclwiO1xuaW1wb3J0IEdyb3VwIGZyb20gXCJAL3dpZGdldHMvY29udGFpbmVycy9Hcm91cFwiO1xuaW1wb3J0IE5vdGVib29rIGZyb20gXCJAL3dpZGdldHMvY29udGFpbmVycy9Ob3RlYm9va1wiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIkAvd2lkZ2V0cy92aWV3cy9Gb3JtXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0xhYmVsXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvVGV4dFwiO1xuaW1wb3J0IHsgU2VwYXJhdG9yIH0gZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL1NlcGFyYXRvclwiO1xuaW1wb3J0IFNlYXJjaEZpbHRlciBmcm9tIFwiQC93aWRnZXRzL3ZpZXdzL3NlYXJjaEZpbHRlci9TZWFyY2hGaWx0ZXJcIjtcbmltcG9ydCB7IFRyZWVWaWV3LCBTZWFyY2hGaWVsZHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQge1xuICBCdXR0b24sXG4gIENoYXIsXG4gIFNlbGVjdGlvbixcbiAgQm9vbGVhbixcbiAgTWFueTJvbmUsXG4gIFRyZWUsXG4gIEdyb3VwLFxuICBTZWFyY2hGaWx0ZXIsXG4gIEZvcm0sXG4gIE5vdGVib29rLFxuICBGbG9hdCxcbiAgSW50ZWdlcixcbiAgTGFiZWwsXG4gIFRleHQsXG4gIFRyZWVWaWV3LFxuICBTZWFyY2hGaWVsZHMsXG4gIFNlcGFyYXRvcixcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBhbnk7XG59O1xuXG5jb25zdCBGaWVsZHNldCA9IChwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCB7IGxhYmVsLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICAvLyBUT0RPOiBjaGFuZ2UgaW4tbGluZSBzdHlsZXMgdG8gVGFpbFdpbmQgY2xhc3Nlc1xuICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJwbC0yIHByLTIgYm9yZGVyLWdyYXktNDAwIGJvcmRlciBib3JkZXItc29saWQgIGZvbnQtc2Fuc1wiPlxuICAgICAgPGxlZ2VuZFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGFsbDogXCJpbml0aWFsXCIsXG4gICAgICAgICAgbWFyZ2luTGVmdDogXCIxZW1cIixcbiAgICAgICAgICBwYWRkaW5nTGVmdDogXCIwLjVlbVwiLFxuICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIwLjVlbVwiLFxuICAgICAgICAgIGZvbnRGYW1pbHk6XG4gICAgICAgICAgICBcInN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCAnQXBwbGUgQ29sb3IgRW1vamknLCAnU2Vnb2UgVUkgRW1vamknXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGVnZW5kPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZmllbGRzZXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWVsZHNldDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFdpZGdldHMgZnJvbSBcIkAvaW5kZXhcIjtcblxudHlwZSB3aWRnZXRzID0ge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59O1xuXG5jb25zdCB3aWRnZXRUeXBlcyA9IFdpZGdldHMgYXMgd2lkZ2V0cztcblxuY29uc3QgY3JlYXRlUmVhY3RXaWRnZXQgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB0eXBlID0gb291aS5jb25zdHJ1Y3Rvci5uYW1lO1xuICBjb25zdCB3aWRnZXRDbGFzcyA9IHdpZGdldFR5cGVzW3R5cGVdO1xuICBpZiAoIXdpZGdldENsYXNzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQod2lkZ2V0Q2xhc3MsIHByb3BzKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVJlYWN0V2lkZ2V0IH07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGVja2JveCBhcyBBbnRDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCJAL0NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgQm9vbGVhbiA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgeyBpZCwgcmVhZE9ubHksIHJlcXVpcmVkIH0gPSBvb3VpO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIHsuLi5wcm9wc30gdmFsdWVQcm9wTmFtZT1cImNoZWNrZWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICA8UmVxdWlyZWRDaGVja2JveCBkaXNhYmxlZD17cmVhZE9ubHl9IGlkPXtpZH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuXG5jb25zdCBSZXF1aXJlZENoZWNrYm94ID0gc3R5bGVkKEFudENoZWNrYm94KWBcbiAgLmFudC1jaGVja2JveC1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb25maWcucmVxdWlyZWRDb2xvcn07XG4gIH1cblxuICAuYW50LWNoZWNrYm94LWNoZWNrZWQgLmFudC1jaGVja2JveC1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4OUNGRjtcbiAgfVxuYDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IEJ1dHRvbiBhcyBBbnRCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IGxhYmVsLCBhY3RpdmF0ZWQgfSA9IG9vdWk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgb291aT17b291aX0+XG4gICAgICA8QW50QnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbFwiIGRpc2FibGVkPXshYWN0aXZhdGVkfT5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9BbnRCdXR0b24+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBDaGFyIGFzIENoYXJPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIkAvQ29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBDaGFyID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICBjb25zdCB7IG9vdWkgfSA9IHByb3BzO1xuICBjb25zdCB7IGlkLCByZWFkT25seSwgaXNQYXNzd29yZCwgcmVxdWlyZWQgfSA9IG9vdWkgYXMgQ2hhck9vdWk7XG4gIGNvbnN0IHJlcXVpcmVkQ2xhc3MgPSByZXF1aXJlZCA/IENvbmZpZy5yZXF1aXJlZENsYXNzIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIHsuLi5wcm9wc30+XG4gICAgICB7aXNQYXNzd29yZCA/IChcbiAgICAgICAgPElucHV0LlBhc3N3b3JkIGRpc2FibGVkPXtyZWFkT25seX0gaWQ9e2lkfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPElucHV0IGRpc2FibGVkPXtyZWFkT25seX0gaWQ9e2lkfSBjbGFzc05hbWU9e3JlcXVpcmVkQ2xhc3N9IC8+XG4gICAgICApfVxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgRmxvYXQgYXMgRmxvYXRPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIkAvQ29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBGbG9hdCA9IChwcm9wczogV2lkZ2V0UHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgeyBpZCwgZGVjaW1hbERpZ2l0cywgcmVhZE9ubHksIHJlcXVpcmVkfSA9IG9vdWkgYXMgRmxvYXRPb3VpO1xuICBjb25zdCByZXF1aXJlZENsYXNzID0gcmVxdWlyZWQgPyBDb25maWcucmVxdWlyZWRDbGFzcyA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9PlxuICAgICAgPElucHV0TnVtYmVyXG4gICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgY2xhc3NOYW1lPXtcInctZnVsbCBcIiArIHJlcXVpcmVkQ2xhc3N9XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgcHJlY2lzaW9uPXtkZWNpbWFsRGlnaXRzfVxuICAgICAgICBmb3JtYXR0ZXI9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHt2YWx1ZX1gLnJlcGxhY2UoL1teMC05XFwuXFwtXSsvZywgXCJcIik7XG4gICAgICAgIH19XG4gICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cbiAgICAgICAgZGVjaW1hbFNlcGFyYXRvcj17XCIuXCJ9XG4gICAgICAvPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiQC9Db25maWdcIjtcblxuZXhwb3J0IGNvbnN0IEludGVnZXIgPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgaWQsIHJlYWRPbmx5LCByZXF1aXJlZCB9ID0gb291aTtcbiAgY29uc3QgcmVxdWlyZWRDbGFzcyA9IHJlcXVpcmVkID8gQ29uZmlnLnJlcXVpcmVkQ2xhc3MgOiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIChcbiAgICA8RmllbGQgey4uLnByb3BzfT5cbiAgICAgIDxJbnB1dE51bWJlclxuICAgICAgICBpZD17aWR9XG4gICAgICAgIGNsYXNzTmFtZT17XCJ3LWZ1bGwgXCIgKyByZXF1aXJlZENsYXNzfVxuICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgIGZvcm1hdHRlcj17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfWAucmVwbGFjZSgvW14wLTldKy9nLCBcIlwiKTtcbiAgICAgICAgfX1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxuICAgICAgLz5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuaW1wb3J0IHsgUXVlc3Rpb25DaXJjbGVPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgTGFiZWwgYXMgTGFiZWxPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZVwiO1xuXG50eXBlIFByb3BzID0gV2lkZ2V0UHJvcHMgJiB7XG4gIGFsaWduPzogXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiO1xufTtcblxuY29uc3QgYWxpZ25DbGFzcyA9IHtcbiAgbGVmdDogXCJqdXN0aWZ5LXN0YXJ0XCIsXG4gIGNlbnRlcjogXCJqdXN0aWZ5LWNlbnRlclwiLFxuICByaWdodDogXCJqdXN0aWZ5LWVuZFwiLFxufTtcblxuY29uc3QgTGFiZWwgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNpdmVCZWhhdmlvdXIgPSB1c2VNZWRpYVF1ZXJ5KHsgcXVlcnk6IFwiKG1heC13aWR0aDogMTAwMHB4KVwiIH0pO1xuICBjb25zdCB7IG9vdWksIGFsaWduIH0gPSBwcm9wcztcbiAgY29uc3QgeyBsYWJlbCwgdG9vbHRpcCwgZmllbGRGb3JMYWJlbCB9ID0gb291aSBhcyBMYWJlbE9vdWk7XG4gIGNvbnN0IGFkZENvbG9uID0gZmllbGRGb3JMYWJlbCAhPT0gbnVsbCA/IHRydWUgOiBmYWxzZTtcbiAgY29uc3QgbGFiZWxUZXh0ID0gYWRkQ29sb24gJiYgbGFiZWwubGVuZ3RoID4gMSA/IGxhYmVsICsgXCIgOlwiIDogbGFiZWw7XG4gIGNvbnN0IHJlc3BvbnNpdmVBbGlnbiA9IHJlc3BvbnNpdmVCZWhhdmlvdXIgPyBcImxlZnRcIiA6IFwicmlnaHRcIjtcbiAgY29uc3QgbGFiZWxBbGdpbiA9IGFsaWduID8gYWxpZ24gOiBmaWVsZEZvckxhYmVsID8gcmVzcG9uc2l2ZUFsaWduIDogXCJsZWZ0XCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHBiLTEgJHthbGlnbkNsYXNzW2xhYmVsQWxnaW5dfWB9PlxuICAgICAge3Rvb2x0aXAgJiYgKFxuICAgICAgICA8VG9vbHRpcCB0aXRsZT17dG9vbHRpcH0+XG4gICAgICAgICAgPFF1ZXN0aW9uQ2lyY2xlT3V0bGluZWQgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWJsdWUtNDAwIHByLTFcIiAvPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICApfVxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHItMlwiPntsYWJlbFRleHR9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0LCBCdXR0b24sIFJvdywgQ29sLCBNb2RhbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBTZWFyY2hPdXRsaW5lZCwgRm9sZGVyT3Blbk91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBNYW55Mm9uZSBhcyBNYW55Mm9uZU9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IENvbmZpZyBmcm9tIFwiQC9Db25maWdcIjtcbmltcG9ydCB7IFNlYXJjaE1vZGFsIH0gZnJvbSBcIkAvd2lkZ2V0cy9tb2RhbHMvU2VhcmNoTW9kYWxcIjtcbmltcG9ydCB7IERldGFpbE1vZGFsIH0gZnJvbSBcIkAvd2lkZ2V0cy9tb2RhbHMvRGV0YWlsTW9kYWxcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogTWFueTJvbmVPb3VpO1xuICBvbk9wZW5EZXRhaWxDbGljaz86XG4gICAgfCAoKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZClcbiAgICB8IHVuZGVmaW5lZDtcbiAgb25TZWFyY2hDbGljaz86XG4gICAgfCAoKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4gdm9pZClcbiAgICB8IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBjb25zdCBNYW55Mm9uZSA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8RmllbGQgey4uLnByb3BzfT5cbiAgICAgIDxNYW55Mm9uZUlucHV0IG9vdWk9e29vdWl9IC8+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBNYW55Mm9uZUlucHV0UHJvcHMge1xuICBvb3VpOiBNYW55Mm9uZU9vdWk7XG4gIHZhbHVlPzogYW55W107XG4gIG9uQ2hhbmdlPzogKHZhbHVlOiBhbnlbXSkgPT4gdm9pZDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBNYW55Mm9uZUlucHV0OiBSZWFjdC5GQzxNYW55Mm9uZUlucHV0UHJvcHM+ID0gKFxuICBwcm9wczogTWFueTJvbmVJbnB1dFByb3BzXG4pID0+IHtcbiAgY29uc3QgeyB2YWx1ZSwgb25DaGFuZ2UsIGRpc2FibGVkLCBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgeyByZXF1aXJlZCB9ID0gb291aTtcbiAgY29uc3QgcmVxdWlyZWRDbGFzcyA9IHJlcXVpcmVkID8gQ29uZmlnLnJlcXVpcmVkQ2xhc3MgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IFtzaG93U2VhcmNoTW9kYWwsIHNldFNob3dTZWFyY2hNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzaG93RGV0YWlsTW9kYWwsIHNldFNob3dEZXRhaWxNb2RhbF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgdHJpZ2dlckNoYW5nZSA9IChjaGFuZ2VkVmFsdWU6IGFueVtdKSA9PiB7XG4gICAgb25DaGFuZ2U/Lih7IC4uLnZhbHVlLCAuLi5jaGFuZ2VkVmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25WYWx1ZVN0cmluZ0NoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge307XG5cbiAgcmV0dXJuIChcbiAgICA8Um93IGd1dHRlcj17OH0gY2xhc3NOYW1lPVwicHQtMSBwYi0xXCI+XG4gICAgICA8Q29sIGZsZXg9XCJhdXRvXCI+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWUgJiYgdmFsdWVbMV19XG4gICAgICAgICAgb25DaGFuZ2U9e29uVmFsdWVTdHJpbmdDaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGNsYXNzTmFtZT17cmVxdWlyZWRDbGFzc31cbiAgICAgICAgLz5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCBmbGV4PVwiMzJweFwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWNvbj17PEZvbGRlck9wZW5PdXRsaW5lZCAvPn1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd0RldGFpbE1vZGFsKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgZmxleD1cIjMycHhcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGljb249ezxTZWFyY2hPdXRsaW5lZCAvPn1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd1NlYXJjaE1vZGFsKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0NvbD5cbiAgICAgIDxTZWFyY2hNb2RhbFxuICAgICAgICB2aXNpYmxlPXtzaG93U2VhcmNoTW9kYWx9XG4gICAgICAgIG9uU2VsZWN0VmFsdWU9eyh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRyaWdnZXJDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgIHNldFNob3dTZWFyY2hNb2RhbChmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xvc2VNb2RhbD17KCkgPT4ge1xuICAgICAgICAgIHNldFNob3dTZWFyY2hNb2RhbChmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPERldGFpbE1vZGFsXG4gICAgICAgIHZpc2libGU9e3Nob3dEZXRhaWxNb2RhbH1cbiAgICAgICAgb25TZWxlY3RWYWx1ZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgdHJpZ2dlckNoYW5nZSh2YWx1ZSk7XG4gICAgICAgICAgc2V0U2hvd0RldGFpbE1vZGFsKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25DbG9zZU1vZGFsPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd0RldGFpbE1vZGFsKGZhbHNlKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCB7IFNlbGVjdGlvbiBhcyBTZWxlY3Rpb25Pb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIkAvQ29uZmlnXCI7XG5cbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3Rpb24gPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgc2VsZWN0aW9uVmFsdWVzLCByZWFkT25seSwgcmVxdWlyZWQgfSA9IG9vdWkgYXMgU2VsZWN0aW9uT291aTtcblxuICBjb25zdCB2YWx1ZXMgPSBBcnJheS5mcm9tKHNlbGVjdGlvblZhbHVlcy5lbnRyaWVzKCkpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPVxuICAgIHZhbHVlcyAmJlxuICAgIHZhbHVlcy5sZW5ndGggJiZcbiAgICB2YWx1ZXMubWFwKChlbnRyeTogc3RyaW5nW10pID0+IHtcbiAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2tleX0+XG4gICAgICAgICAge3ZhbHVlfVxuICAgICAgICA8L09wdGlvbj5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgY29uc3QgQ3VzdG9tU2VsZWN0OiBhbnkgPSByZXF1aXJlZCA/IFJlcXVpcmVkU2VsZWN0IDogU2VsZWN0O1xuXG4gIHJldHVybiAoXG4gICAgPEZpZWxkIHsuLi5wcm9wc30+XG4gICAgICA8Q3VzdG9tU2VsZWN0IGRpc2FibGVkPXtyZWFkT25seX0+e29wdGlvbnN9PC9DdXN0b21TZWxlY3Q+XG4gICAgPC9GaWVsZD5cbiAgKTtcbn07XG5cbmNvbnN0IFJlcXVpcmVkU2VsZWN0ID0gc3R5bGVkKFNlbGVjdClgXG4gICYuYW50LXNlbGVjdDpub3QoLmFudC1zZWxlY3QtY3VzdG9taXplLWlucHV0KSAuYW50LXNlbGVjdC1zZWxlY3RvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb25maWcucmVxdWlyZWRDb2xvcn07XG4gIH1cbmA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IFNlcGFyYXRvciBhcyBTZXBhcmF0b3JPb3VpIH0gZnJvbSBcIm9vdWlcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogU2VwYXJhdG9yT291aTtcbn07XG5cbmV4cG9ydCBjb25zdCBTZXBhcmF0b3IgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgbGFiZWwgfSA9IG9vdWk7XG5cbiAgcmV0dXJuIChcbiAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cImxlZnRcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICB7bGFiZWx9XG4gICAgPC9EaXZpZGVyPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBGaWVsZCBmcm9tIFwiQC9jb21tb24vRmllbGRcIjtcbmltcG9ydCBDb25maWcgZnJvbSBcIkAvQ29uZmlnXCI7XG5pbXBvcnQgeyBUZXh0IGFzIFRleHRPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xuXG50eXBlIFByb3BzID0ge1xuICBvb3VpOiBUZXh0T291aTtcbn07XG5cbmNvbnN0IFRleHQgPSAocHJvcHM6IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSB9ID0gcHJvcHM7XG4gIGNvbnN0IHsgcmVhZE9ubHksIHJlcXVpcmVkIH0gPSBvb3VpO1xuICBjb25zdCByZXF1aXJlZENsYXNzID0gcmVxdWlyZWQgPyBDb25maWcucmVxdWlyZWRDbGFzcyA6IHVuZGVmaW5lZDtcblxuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9PlxuICAgICAgPFRleHRBcmVhIGRpc2FibGVkPXtyZWFkT25seX0gY2xhc3NOYW1lPXtyZXF1aXJlZENsYXNzfSByb3dzPXs0fSAvPlxuICAgIDwvRmllbGQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIGFzIENvbnRhaW5lck9vdWksIFdpZGdldCB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBjcmVhdGVSZWFjdFdpZGdldCB9IGZyb20gXCJAL3dpZGdldHMvV2lkZ2V0RmFjdG9yeVwiO1xuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCJyZWFjdC1yZXNwb25zaXZlXCI7XG5pbXBvcnQge1xuICBnZXRUZW1wbGF0ZUNvbHVtbnMsXG4gIGZpbGxSb3dXaXRoRW1wdGllc1RvRml0LFxuICBnZXRTcGFuU3R5bGVGb3JJdGVtLFxufSBmcm9tIFwiQC9oZWxwZXJzL2NvbnRhaW5lckhlbHBlclwiO1xuXG50eXBlIFByb3BzID0ge1xuICBjb250YWluZXI6IENvbnRhaW5lck9vdWk7XG4gIGZvcm1XcmFwcGVyPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IENvbnRhaW5lciA9IChwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICBjb25zdCByZXNwb25zaXZlQmVoYXZpb3VyID0gdXNlTWVkaWFRdWVyeSh7IHF1ZXJ5OiBcIihtYXgtd2lkdGg6IDEwMDBweClcIiB9KTtcbiAgY29uc3QgeyBjb250YWluZXIsIGZvcm1XcmFwcGVyID0gZmFsc2UgfSA9IHByb3BzO1xuICBjb25zdCB7IGNvbHVtbnMsIHJvd3MgfSA9IGNvbnRhaW5lcjtcblxuICBjb25zdCBjb250ZW50ID0gcm93cy5tYXAoKHJvdzogV2lkZ2V0W10sIGkpID0+IHtcbiAgICBjb25zdCByb3dXaXRob3V0SW52aXNpYmxlRmllbGRzID0gcm93LmZpbHRlcigod2lkZ2V0KSA9PiB7XG4gICAgICByZXR1cm4gIXdpZGdldC5pbnZpc2libGU7XG4gICAgfSk7XG5cbiAgICBjb25zdCByb3dXaXRoRW1wdGllc1RvRml0ID0gZmlsbFJvd1dpdGhFbXB0aWVzVG9GaXQoe1xuICAgICAgcm93OiByb3dXaXRob3V0SW52aXNpYmxlRmllbGRzLFxuICAgICAgbnVtYmVyT2ZDb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgbXVzdEZpbGxXaXRoRW1wdGllczogcmVzcG9uc2l2ZUJlaGF2aW91cixcbiAgICB9KTtcblxuICAgIHJldHVybiByb3dXaXRoRW1wdGllc1RvRml0Lm1hcCgoaXRlbTogV2lkZ2V0LCBqOiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2Ake2kudG9TdHJpbmcoKX0tJHtqLnRvU3RyaW5nKCl9YH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWxmLWNlbnRlciBwLTJcIlxuICAgICAgICAgIHN0eWxlPXtnZXRTcGFuU3R5bGVGb3JJdGVtKHsgaXRlbSwgcmVzcG9uc2l2ZUJlaGF2aW91ciB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjcmVhdGVSZWFjdFdpZGdldCh7XG4gICAgICAgICAgICBvb3VpOiBpdGVtLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmIChmb3JtV3JhcHBlcikge1xuICAgIHJldHVybiBjb250ZW50IGFzIGFueTtcbiAgfVxuXG4gIGNvbnN0IHRlbXBsYXRlQ29sdW1ucyA9IGdldFRlbXBsYXRlQ29sdW1ucyhjb2x1bW5zKTtcbiAgY29uc3QgZ3JpZFN0eWxlID0ge1xuICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IHJlc3BvbnNpdmVCZWhhdmlvdXIgPyBcImF1dG9cIiA6IHRlbXBsYXRlQ29sdW1ucyxcbiAgfTtcblxuICByZXR1cm4gPGRpdiBzdHlsZT17Z3JpZFN0eWxlfT57Y29udGVudH08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHcm91cCBhcyBHcm91cE9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9Db250YWluZXJcIjtcbmltcG9ydCBGaWVsZHNldCBmcm9tIFwiQC91aS9GaWVsZHNldFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBvb3VpOiBHcm91cE9vdWk7XG4gIHNob3dMYWJlbD86IGJvb2xlYW47XG59O1xuXG5mdW5jdGlvbiBHcm91cChwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7IG9vdWksIHNob3dMYWJlbCA9IHRydWUgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtvb3VpLmxhYmVsICYmIHNob3dMYWJlbCA/IChcbiAgICAgICAgPEZpZWxkc2V0IGxhYmVsPXtvb3VpLmxhYmVsfT5cbiAgICAgICAgICA8Q29udGFpbmVyIGNvbnRhaW5lcj17b291aSEuY29udGFpbmVyfSAvPlxuICAgICAgICA8L0ZpZWxkc2V0PlxuICAgICAgKSA6IChcbiAgICAgICAgPENvbnRhaW5lciBjb250YWluZXI9e29vdWkhLmNvbnRhaW5lcn0gLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFicyB9IGZyb20gXCJhbnRkXCI7XG5jb25zdCB7IFRhYlBhbmUgfSA9IFRhYnM7XG5cbmltcG9ydCB7IE5vdGVib29rIGFzIE5vdGVib29rT291aSwgR3JvdXAgYXMgR3JvdXBPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSBcIkAvaW5kZXhcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogTm90ZWJvb2tPb3VpO1xufTtcblxuZnVuY3Rpb24gTm90ZWJvb2socHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBvb3VpIH0gPSBwcm9wcztcbiAgY29uc3QgdGFicyA9IFtdLmNvbmNhdC5hcHBseShbXSwgb291aSEuY29udGFpbmVyLnJvd3MpO1xuICByZXR1cm4gKFxuICAgIDxUYWJzIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCI+XG4gICAgICB7dGFicy5tYXAoKHBhZ2U6IGFueSwga2V5OiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgdGFiS2V5ID0gKGtleSArIDEpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VGFiUGFuZSB0YWI9e3BhZ2UubGFiZWx9IGtleT17dGFiS2V5fT5cbiAgICAgICAgICAgIDxHcm91cCBvb3VpPXtwYWdlIGFzIEdyb3VwT291aX0gc2hvd0xhYmVsPXtmYWxzZX0gLz5cbiAgICAgICAgICA8L1RhYlBhbmU+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L1RhYnM+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGVib29rO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5cbnR5cGUgU2VhcmNoU2VsZWN0aW9uUHJvcHMgPSB7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIG9uU2VsZWN0VmFsdWU6ICh2YWx1ZTogYW55KSA9PiB2b2lkO1xuICBvbkNsb3NlTW9kYWw6ICgpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgQ3JlYXRlTW9kYWwgPSAocHJvcHM6IFNlYXJjaFNlbGVjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdmlzaWJsZSwgb25DbG9zZU1vZGFsLCBvblNlbGVjdFZhbHVlIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxNb2RhbFxuICAgICAgdGl0bGU9XCJDcmVhdGVcIlxuICAgICAgY2VudGVyZWRcbiAgICAgIHdpZHRoPXsxMDAwfVxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgIGNsb3NhYmxlPXt0cnVlfVxuICAgICAgb25DYW5jZWw9e29uQ2xvc2VNb2RhbH1cbiAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSArIDEpO1xuICAgICAgICAgIG9uU2VsZWN0VmFsdWUoW3JhbmRvbSwgXCJOZXcgY3JlYXRlZCBpdGVtIFwiICsgcmFuZG9tLnRvU3RyaW5nKCldKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgc2F2ZSAmIHNlbGVjdCB2YWx1ZVxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2VNb2RhbH0+Y2xvc2U8L0J1dHRvbj5cbiAgICA8L01vZGFsPlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1vZGFsLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuXG50eXBlIFNlYXJjaFNlbGVjdGlvblByb3BzID0ge1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBvblNlbGVjdFZhbHVlOiAodmFsdWU6IGFueSkgPT4gdm9pZDtcbiAgb25DbG9zZU1vZGFsOiAoKSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IERldGFpbE1vZGFsID0gKHByb3BzOiBTZWFyY2hTZWxlY3Rpb25Qcm9wcykgPT4ge1xuICBjb25zdCB7IHZpc2libGUsIG9uQ2xvc2VNb2RhbCwgb25TZWxlY3RWYWx1ZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8TW9kYWxcbiAgICAgIHRpdGxlPVwiRGV0YWlsXCJcbiAgICAgIGNlbnRlcmVkXG4gICAgICB3aWR0aD17MTAwMH1cbiAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICBjbG9zYWJsZT17dHJ1ZX1cbiAgICAgIG9uQ2FuY2VsPXtvbkNsb3NlTW9kYWx9XG4gICAgICBmb290ZXI9e251bGx9XG4gICAgPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlTW9kYWx9PmNhbmNlbDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgb25TZWxlY3RWYWx1ZShbMSwgXCJVcGRhdGVkIHZhbHVlXCJdKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgb2tcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvTW9kYWw+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IENyZWF0ZU1vZGFsIH0gZnJvbSBcIi4vQ3JlYXRlTW9kYWxcIjtcblxudHlwZSBTZWFyY2hTZWxlY3Rpb25Qcm9wcyA9IHtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgb25TZWxlY3RWYWx1ZTogKHZhbHVlOiBhbnkpID0+IHZvaWQ7XG4gIG9uQ2xvc2VNb2RhbDogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hNb2RhbCA9IChwcm9wczogU2VhcmNoU2VsZWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgeyB2aXNpYmxlLCBvbkNsb3NlTW9kYWwsIG9uU2VsZWN0VmFsdWUgfSA9IHByb3BzO1xuICBjb25zdCBbc2hvd0NyZWF0ZU1vZGFsLCBzZXRTaG93Q3JlYXRlTW9kYWxdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNb2RhbFxuICAgICAgICB0aXRsZT1cIlNlYXJjaFwiXG4gICAgICAgIGNlbnRlcmVkXG4gICAgICAgIHdpZHRoPXsxMDAwfVxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlICYmICFzaG93Q3JlYXRlTW9kYWx9XG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxuICAgICAgICBvbkNhbmNlbD17b25DbG9zZU1vZGFsfVxuICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICA+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAgKyAxKTtcbiAgICAgICAgICAgIG9uU2VsZWN0VmFsdWUoW3JhbmRvbSwgXCJUZXN0IHZhbHVlIFwiICsgcmFuZG9tLnRvU3RyaW5nKCldKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgc2VsZWN0IHZhbHVlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd0NyZWF0ZU1vZGFsKHRydWUpO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBuZXcgaXRlbVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlTW9kYWx9PmNsb3NlPC9CdXR0b24+XG4gICAgICA8L01vZGFsPlxuICAgICAgPENyZWF0ZU1vZGFsXG4gICAgICAgIHZpc2libGU9e3Nob3dDcmVhdGVNb2RhbH1cbiAgICAgICAgb25TZWxlY3RWYWx1ZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd0NyZWF0ZU1vZGFsKGZhbHNlKTtcbiAgICAgICAgICBvbkNsb3NlTW9kYWwoKTtcbiAgICAgICAgICBvblNlbGVjdFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25DbG9zZU1vZGFsPXsoKSA9PiB7XG4gICAgICAgICAgc2V0U2hvd0NyZWF0ZU1vZGFsKGZhbHNlKTtcbiAgICAgICAgICBvbkNsb3NlTW9kYWwoKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0gYXMgRm9ybU9vdWkgfSBmcm9tIFwib291aVwiO1xuaW1wb3J0IHsgRm9ybSBhcyBBbnRGb3JtLCBGb3JtSW5zdGFuY2UgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vY29udGFpbmVycy9Db250YWluZXJcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgYXJjaDogc3RyaW5nO1xuICBmaWVsZHM6IGFueTtcbiAgaW5pdGlhbFZhbHVlcz86IGFueTtcbiAgYW50Rm9ybTogRm9ybUluc3RhbmNlO1xufTtcblxuY29uc3QgZmlsdGVyZWRWYWx1ZXMgPSAodmFsdWVzOiBhbnksIGZpZWxkczogYW55KSA9PiB7XG4gIGlmICghZmllbGRzKSB7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuICBjb25zdCBmaWx0ZXJlZFZhbHVlczogYW55ID0ge307XG4gIE9iamVjdC5rZXlzKHZhbHVlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKFxuICAgICAgdmFsdWVzW2tleV0gIT09IGZhbHNlIHx8XG4gICAgICAoZmllbGRzW2tleV0gJiYgZmllbGRzW2tleV0udHlwZSA9PT0gXCJib29sZWFuXCIpXG4gICAgKSB7XG4gICAgICBmaWx0ZXJlZFZhbHVlc1trZXldID0gdmFsdWVzW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZpbHRlcmVkVmFsdWVzO1xufTtcblxuY29uc3QgcHJvY2Vzc0luaXRpYWxWYWx1ZXMgPSAodmFsdWVzOiBhbnksIGZpZWxkczogYW55KSA9PiB7XG4gIGNvbnN0IGZpbHRlckJvb2xlYW5zID0gZmlsdGVyZWRWYWx1ZXModmFsdWVzLCBmaWVsZHMpO1xuICByZXR1cm4gZmlsdGVyQm9vbGVhbnM7XG59O1xuXG5mdW5jdGlvbiBGb3JtKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIGNvbnN0IHsgYXJjaCwgZmllbGRzLCBpbml0aWFsVmFsdWVzLCBhbnRGb3JtIH0gPSBwcm9wcztcblxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZTxGb3JtT291aT4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG5ld0Zvcm0gPSBuZXcgRm9ybU9vdWkoZmllbGRzKTtcbiAgICBuZXdGb3JtLnBhcnNlKGFyY2gpO1xuICAgIHNldEZvcm0obmV3Rm9ybSk7XG4gIH0sIFthcmNoLCBmaWVsZHNdKTtcblxuICByZXR1cm4gKFxuICAgIDxBbnRGb3JtXG4gICAgICBmb3JtPXthbnRGb3JtfVxuICAgICAgaW5pdGlhbFZhbHVlcz17cHJvY2Vzc0luaXRpYWxWYWx1ZXMoaW5pdGlhbFZhbHVlcywgZmllbGRzKX1cbiAgICA+XG4gICAgICB7Zm9ybSAmJiA8Q29udGFpbmVyIGNvbnRhaW5lcj17Zm9ybSEuY29udGFpbmVyfSBmb3JtV3JhcHBlciAvPn1cbiAgICA8L0FudEZvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIFBhZ2luYXRpb24sIENoZWNrYm94LCBTcGluIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IGdldFRyZWUsIGdldFRhYmxlQ29sdW1ucywgZ2V0VGFibGVJdGVtcyB9IGZyb20gXCJAL2hlbHBlcnMvdHJlZUhlbHBlclwiO1xuXG5pbXBvcnQgeyBTdHJpbmdzLCBUcmVlVmlldywgQ29sdW1uIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IGdldExvY2FsaXplZFN0cmluZyB9IGZyb20gXCJAL2NvbnRleHQvTG9jYWxlc0NvbnRleHRcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdG90YWw6IG51bWJlcjtcbiAgbGltaXQ6IG51bWJlcjtcbiAgcGFnZTogbnVtYmVyO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICB0cmVlVmlldzogVHJlZVZpZXc7XG4gIHJlc3VsdHM6IEFycmF5PGFueT47XG4gIG9uUmVxdWVzdFBhZ2VDaGFuZ2U6IChwYWdlOiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSA9PiB2b2lkO1xuICBzdHJpbmdzOiBTdHJpbmdzO1xuICBvblJvd0NsaWNrZWQ/OiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbn07XG5cbmZ1bmN0aW9uIFRyZWUocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgdG90YWwsXG4gICAgdHJlZVZpZXcsXG4gICAgcmVzdWx0cyxcbiAgICBvblJlcXVlc3RQYWdlQ2hhbmdlLFxuICAgIGxvYWRpbmcsXG4gICAgc3RyaW5ncyxcbiAgICBvblJvd0NsaWNrZWQsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPEFycmF5PGFueT4+KFtdKTtcbiAgY29uc3QgW2NvbHVtbnMsIHNldENvbHVtbnNdID0gdXNlU3RhdGU8QXJyYXk8Q29sdW1uPj4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdHJlZSA9IGdldFRyZWUodHJlZVZpZXcpO1xuICAgIGNvbnN0IGJvb2xlYW5Db21wb25lbnRGbiA9IChib29sZWFuRmllbGQ6IGJvb2xlYW4pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIDxDaGVja2JveCBkZWZhdWx0Q2hlY2tlZD17Ym9vbGVhbkZpZWxkfSBkaXNhYmxlZCAvPjtcbiAgICB9O1xuICAgIGNvbnN0IGNvbHVtbnMgPSBnZXRUYWJsZUNvbHVtbnModHJlZSwgYm9vbGVhbkNvbXBvbmVudEZuKTtcbiAgICBjb25zdCBpdGVtcyA9IGdldFRhYmxlSXRlbXModHJlZSwgcmVzdWx0cyk7XG5cbiAgICBzZXRDb2x1bW5zKGNvbHVtbnMpO1xuICAgIHNldEl0ZW1zKGl0ZW1zKTtcbiAgfSwgW3RyZWVWaWV3LCByZXN1bHRzXSk7XG5cbiAgY29uc3QgZnJvbSA9IChwYWdlIC0gMSkgKiBsaW1pdCArIDE7XG4gIGNvbnN0IHRvID0gZnJvbSAtIDEgKyBpdGVtcy5sZW5ndGg7XG4gIGNvbnN0IHN1bW1hcnkgPSBsb2FkaW5nID8gKFxuICAgIDxTcGluIC8+XG4gICkgOiB0b3RhbCA9PT0gMCA/IChcbiAgICBnZXRMb2NhbGl6ZWRTdHJpbmcoXCJub19yZXN1bHRzXCIsIHN0cmluZ3MpXG4gICkgOiAoXG4gICAgZ2V0TG9jYWxpemVkU3RyaW5nKFwic3VtbWFyeVwiLCBzdHJpbmdzKVxuICAgICAgLnJlcGxhY2UoXCJ7ZnJvbX1cIiwgZnJvbT8udG9TdHJpbmcoKSlcbiAgICAgIC5yZXBsYWNlKFwie3RvfVwiLCB0bz8udG9TdHJpbmcoKSlcbiAgICAgIC5yZXBsYWNlKFwie3RvdGFsfVwiLCB0b3RhbD8udG9TdHJpbmcoKSlcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c3VtbWFyeX1cbiAgICAgIHtsb2FkaW5nID8gbnVsbCA6IChcbiAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICB0b3RhbD17dG90YWx9XG4gICAgICAgICAgcGFnZVNpemU9e2xpbWl0fVxuICAgICAgICAgIGN1cnJlbnQ9e3BhZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicGItNSBwdC01XCJcbiAgICAgICAgICBzaG93U2l6ZUNoYW5nZXI9e2ZhbHNlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvblJlcXVlc3RQYWdlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxUYWJsZVxuICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICBkYXRhU291cmNlPXtpdGVtc31cbiAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XG4gICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIHJvd0NsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHNlbGVjdC1ub25lXCJcbiAgICAgICAgb25Sb3c9eyhyZWNvcmQpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb25Eb3VibGVDbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAob25Sb3dDbGlja2VkKSBvblJvd0NsaWNrZWQocmVjb3JkLmlkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWU7XG4iLCJpbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZpZWxkIGZyb20gXCJAL2NvbW1vbi9GaWVsZFwiO1xuaW1wb3J0IHsgV2lkZ2V0UHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgRGF0ZVJhbmdlUGlja2VyID0gKHByb3BzOiBXaWRnZXRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGaWVsZCB7Li4ucHJvcHN9IGxheW91dD17XCJ2ZXJ0aWNhbFwifT5cbiAgICAgIDxEYXRlUGlja2VyLlJhbmdlUGlja2VyIGZvcm1hdD17XCJERC9NTS9ZWVlZXCJ9PjwvRGF0ZVBpY2tlci5SYW5nZVBpY2tlcj5cbiAgICA8L0ZpZWxkPlxuICApO1xufTtcbiIsImltcG9ydCB7IERhdGVQaWNrZXIsIFRpbWVQaWNrZXIgfSBmcm9tIFwiYW50ZFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRmllbGQgZnJvbSBcIkAvY29tbW9uL0ZpZWxkXCI7XG5pbXBvcnQgeyBGaWVsZCBhcyBGaWVsZE9vdWksIExhYmVsIGFzIExhYmVsT291aSB9IGZyb20gXCJvb3VpXCI7XG5pbXBvcnQgeyBXaWRnZXRQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIkAvd2lkZ2V0cy9iYXNlL0xhYmVsXCI7XG5cbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuZXhwb3J0IGNvbnN0IERhdGVUaW1lUmFuZ2VQaWNrZXIgPSAocHJvcHM6IFdpZGdldFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb291aSwgc2hvd0xhYmVsID0gZmFsc2UgfSA9IHByb3BzO1xuICBjb25zdCB7IGxhYmVsLCBpZCB9ID0gb291aTtcblxuICBjb25zdCBmaWVsZHMgPSBbXG4gICAgbmV3IEZpZWxkT291aSh7XG4gICAgICBuYW1lOiBpZCArIFwiI2RhdGVcIixcbiAgICAgIGxhYmVsOiBcIlwiLFxuICAgIH0pLFxuICAgIG5ldyBGaWVsZE9vdWkoe1xuICAgICAgbmFtZTogaWQgKyBcIiN0aW1lXCIsXG4gICAgICBsYWJlbDogXCJcIixcbiAgICB9KSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd0xhYmVsICYmIChcbiAgICAgICAgPExhYmVsXG4gICAgICAgICAgb291aT17XG4gICAgICAgICAgICBuZXcgTGFiZWxPb3VpKHtcbiAgICAgICAgICAgICAgbmFtZTogaWQgKyBcIl9sYWJlbFwiLFxuICAgICAgICAgICAgICBzdHJpbmc6IGxhYmVsLFxuICAgICAgICAgICAgICBoZWxwOiBvb3VpLnRvb2x0aXAsXG4gICAgICAgICAgICAgIGZpZWxkRm9yTGFiZWw6IGlkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgYWxpZ249e1wibGVmdFwifVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIDxSb3cgYWxpZ249e1wiYm90dG9tXCJ9IGNsYXNzTmFtZT1cInAtMFwiPlxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cIm1yLTJcIj5cbiAgICAgICAgICA8RmllbGQgey4uLnByb3BzfSBvb3VpPXtmaWVsZHNbMF19IHNob3dMYWJlbD17ZmFsc2V9PlxuICAgICAgICAgICAgPERhdGVQaWNrZXIuUmFuZ2VQaWNrZXJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02MFwiXG4gICAgICAgICAgICAgIGZvcm1hdD17XCJERC9NTS9ZWVlZXCJ9XG4gICAgICAgICAgICA+PC9EYXRlUGlja2VyLlJhbmdlUGlja2VyPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sPlxuICAgICAgICAgIDxGaWVsZCB7Li4ucHJvcHN9IG9vdWk9e2ZpZWxkc1sxXX0gc2hvd0xhYmVsPXtmYWxzZX0+XG4gICAgICAgICAgICA8VGltZVBpY2tlci5SYW5nZVBpY2tlclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYwXCJcbiAgICAgICAgICAgICAgZm9ybWF0PXtcIkhIOm1tXCJ9XG4gICAgICAgICAgICA+PC9UaW1lUGlja2VyLlJhbmdlUGlja2VyPlxuICAgICAgICAgIDwvRmllbGQ+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgRmxvYXQgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvRmxvYXRcIjtcbmltcG9ydCB7IEludGVnZXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvSW50ZWdlclwiO1xuaW1wb3J0IHsgSW50ZWdlciBhcyBJbnRlZ2VyT291aSwgTGFiZWwgYXMgTGFiZWxPb3VpIH0gZnJvbSBcIm9vdWlcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvTGFiZWxcIjtcbmltcG9ydCB7IFdpZGdldFByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgb291aTogYW55O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFBhaXJGaWVsZHMocHJvcHM6IFdpZGdldFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3QgeyBvb3VpLCBzaG93TGFiZWwgfSA9IHByb3BzO1xuICBjb25zdCB7IGlkLCBsYWJlbCwgdG9vbHRpcCB9ID0gb291aTtcbiAgY29uc3QgV2lkZ2V0ID0gb291aSBpbnN0YW5jZW9mIEludGVnZXJPb3VpID8gSW50ZWdlciA6IEZsb2F0O1xuXG4gIGNvbnN0IGdldFdpZGdldCA9IChzdWZmaXg6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8V2lkZ2V0XG4gICAgICAgIG9vdWk9e3tcbiAgICAgICAgICAuLi4ob291aSBhcyBhbnkpLFxuICAgICAgICAgIGlkOiBpZCArIHN1ZmZpeCxcbiAgICAgICAgICBsYWJlbDogXCJcIixcbiAgICAgICAgICB0b29sdGlwOiB1bmRlZmluZWQsXG4gICAgICAgIH19XG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7c2hvd0xhYmVsICYmIChcbiAgICAgICAgPExhYmVsXG4gICAgICAgICAgb291aT17XG4gICAgICAgICAgICBuZXcgTGFiZWxPb3VpKHtcbiAgICAgICAgICAgICAgbmFtZTogaWQgKyBcIl9sYWJlbFwiLFxuICAgICAgICAgICAgICBzdHJpbmc6IGxhYmVsLFxuICAgICAgICAgICAgICBoZWxwOiB0b29sdGlwLFxuICAgICAgICAgICAgICBmaWVsZEZvckxhYmVsOiBpZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICAgIGFsaWduPXtcImxlZnRcIn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8Um93IGFsaWduPXtcImJvdHRvbVwifSBjbGFzc05hbWU9XCJtdC0wXCI+XG4gICAgICAgIDxDb2w+e2dldFdpZGdldChcIiNmcm9tXCIpfTwvQ29sPlxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInBiLTFcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbC0yIHByLTIgaC1mdWxsXCI+IC0gPC9zcGFuPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbD57Z2V0V2lkZ2V0KFwiI3RvXCIpfTwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBSb3csIENvbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7XG4gIERvd25PdXRsaW5lZCxcbiAgVXBPdXRsaW5lZCxcbiAgU2VhcmNoT3V0bGluZWQsXG4gIENsZWFyT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5pbXBvcnQge1xuICBMb2NhbGVzQ29udGV4dCxcbiAgTG9jYWxlc0NvbnRleHRUeXBlLFxufSBmcm9tIFwiQC9jb250ZXh0L0xvY2FsZXNDb250ZXh0XCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFkdmFuY2VkRmlsdGVyOiBib29sZWFuO1xuICBpc1NlYXJjaGluZzogYm9vbGVhbjtcbiAgb25BZHZhbmNlZEZpbHRlclRvZ2dsZTogKCkgPT4gdm9pZDtcbiAgb25DbGVhcjogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hCb3R0b21CYXIocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgY29uc3Qge1xuICAgIG9uQWR2YW5jZWRGaWx0ZXJUb2dnbGUsXG4gICAgYWR2YW5jZWRGaWx0ZXIsXG4gICAgb25DbGVhcixcbiAgICBpc1NlYXJjaGluZyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHsgZ2V0U3RyaW5nIH0gPSB1c2VDb250ZXh0KExvY2FsZXNDb250ZXh0KSBhcyBMb2NhbGVzQ29udGV4dFR5cGU7XG5cbiAgcmV0dXJuIChcbiAgICA8Um93PlxuICAgICAgPENvbCBzcGFuPXsxMn0gY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHB0LTQgcGItMiBwbC0yXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQteHNcIiBvbkNsaWNrPXtvbkFkdmFuY2VkRmlsdGVyVG9nZ2xlfT5cbiAgICAgICAgICB7YWR2YW5jZWRGaWx0ZXIgPyAoXG4gICAgICAgICAgICA8VXBPdXRsaW5lZCBjbGFzc05hbWU9XCJwci0xXCIgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPERvd25PdXRsaW5lZCBjbGFzc05hbWU9XCJwci0xXCIgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthZHZhbmNlZEZpbHRlclxuICAgICAgICAgICAgPyBnZXRTdHJpbmcoXCJzaW1wbGVfc2VhcmNoXCIpXG4gICAgICAgICAgICA6IGdldFN0cmluZyhcImFkdmFuY2VkX3NlYXJjaFwiKX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9Db2w+XG4gICAgICA8Q29sIHNwYW49ezEyfSBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IHBiLTJcIj5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtci01XCIgaWNvbj17PENsZWFyT3V0bGluZWQgLz59IG9uQ2xpY2s9e29uQ2xlYXJ9PlxuICAgICAgICAgIENsZWFyXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgaWNvbj17PFNlYXJjaE91dGxpbmVkIC8+fVxuICAgICAgICAgIGxvYWRpbmc9e2lzU2VhcmNoaW5nfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgID5cbiAgICAgICAgICB7Z2V0U3RyaW5nKFwic2VhcmNoXCIpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ2hhciB9IGZyb20gXCJAL3dpZGdldHMvYmFzZS9DaGFyXCI7XG5pbXBvcnQgeyBTZWxlY3Rpb24gfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvU2VsZWN0aW9uXCI7XG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXIgfSBmcm9tIFwiLi9EYXRlUmFuZ2VQaWNrZXJcIjtcbmltcG9ydCB7IERhdGVUaW1lUmFuZ2VQaWNrZXIgfSBmcm9tIFwiLi9EYXRlVGltZVJhbmdlUGlja2VyXCI7XG5pbXBvcnQgeyBQYWlyRmllbGRzIH0gZnJvbSBcIi4vUGFpckZpZWxkc1wiO1xuXG5pbXBvcnQgeyBMb2NhbGVzQ29udGV4dCwgTG9jYWxlc0NvbnRleHRUeXBlIH0gZnJvbSBcIkAvY29udGV4dC9Mb2NhbGVzQ29udGV4dFwiO1xuXG5pbXBvcnQgeyBGaWVsZCwgU2VsZWN0aW9uIGFzIFNlbGVjdGlvbk9vdWkgfSBmcm9tIFwib291aVwiO1xuXG50eXBlIFByb3BzID0ge1xuICBmaWVsZDogRmllbGQ7XG59O1xuXG5jb25zdCB0eXBlcyA9IHtcbiAgdGV4dDogXCJUZXh0XCIsXG4gIG1hbnkyb25lOiBcIk1hbnkyb25lXCIsXG4gIGNoYXI6IFwiQ2hhclwiLFxuICBib29sZWFuOiBcIkJvb2xlYW5cIixcbiAgc2VsZWN0aW9uOiBcIlNlbGVjdGlvblwiLFxuICBmbG9hdDogXCJGbG9hdFwiLFxuICBmbG9hdF90aW1lOiBcIkZsb2F0VGltZVwiLFxuICBwcm9ncmVzc2JhcjogXCJQcm9ncmVzc0JhclwiLFxuICBpbnRlZ2VyOiBcIkludGVnZXJcIixcbiAgZGF0ZTogXCJEYXRlXCIsXG4gIGRhdGV0aW1lOiBcIkRhdGVUaW1lXCIsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoRmllbGQocHJvcHM6IFByb3BzKSB7XG4gIGNvbnN0IHsgZmllbGQgfSA9IHByb3BzO1xuICBmaWVsZC5yZWFkT25seSA9IGZhbHNlO1xuICBmaWVsZC5yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHsgZ2V0U3RyaW5nIH0gPSB1c2VDb250ZXh0KExvY2FsZXNDb250ZXh0KSBhcyBMb2NhbGVzQ29udGV4dFR5cGU7XG5cbiAgY29uc3Qgd2lkZ2V0VHlwZSA9IGZpZWxkLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgc3dpdGNoICh3aWRnZXRUeXBlKSB7XG4gICAgY2FzZSB0eXBlcy5ib29sZWFuOiB7XG4gICAgICBjb25zdCBvb3VpID0gbmV3IFNlbGVjdGlvbk9vdWkoe1xuICAgICAgICBuYW1lOiBmaWVsZC5faWQsXG4gICAgICAgIHN0cmluZzogZmllbGQubGFiZWwsXG4gICAgICAgIHNlbGVjdGlvbjogW1xuICAgICAgICAgIFtcInRydWVcIiwgZ2V0U3RyaW5nKFwidHJ1ZVwiKV0sXG4gICAgICAgICAgW1wiZmFsc2VcIiwgZ2V0U3RyaW5nKFwiZmFsc2VcIildLFxuICAgICAgICBdLFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiA8U2VsZWN0aW9uIGxheW91dD1cInZlcnRpY2FsXCIgb291aT17b291aX0gc2hvd0xhYmVsIC8+O1xuICAgIH1cbiAgICBjYXNlIHR5cGVzLmZsb2F0OlxuICAgIGNhc2UgdHlwZXMucHJvZ3Jlc3NiYXI6XG4gICAgY2FzZSB0eXBlcy5mbG9hdF90aW1lOlxuICAgIGNhc2UgdHlwZXMuaW50ZWdlcjoge1xuICAgICAgcmV0dXJuIDxQYWlyRmllbGRzIG9vdWk9e2ZpZWxkfSBzaG93TGFiZWwgLz47XG4gICAgfVxuICAgIGNhc2UgdHlwZXMuZGF0ZToge1xuICAgICAgcmV0dXJuIDxEYXRlUmFuZ2VQaWNrZXIgb291aT17ZmllbGR9IGxheW91dD1cInZlcnRpY2FsXCIgc2hvd0xhYmVsIC8+O1xuICAgIH1cbiAgICBjYXNlIHR5cGVzLmRhdGV0aW1lOiB7XG4gICAgICByZXR1cm4gPERhdGVUaW1lUmFuZ2VQaWNrZXIgb291aT17ZmllbGR9IGxheW91dD1cInZlcnRpY2FsXCIgc2hvd0xhYmVsIC8+O1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gPENoYXIgb291aT17ZmllbGR9IGxheW91dD1cInZlcnRpY2FsXCIgc2hvd0xhYmVsIC8+O1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcblxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5pbXBvcnQgXCJAL3RhaWx3aW5kLmdlbmVyYXRlZC5jc3NcIjtcblxuaW1wb3J0IHsgU2VhcmNoRmlsdGVyIGFzIFNlYXJjaEZpbHRlck9vdWksIENvbnRhaW5lciwgRmllbGQgfSBmcm9tIFwib291aVwiO1xuXG5pbXBvcnQgeyBTZWFyY2hGaWVsZCB9IGZyb20gXCIuL1NlYXJjaEZpZWxkXCI7XG5pbXBvcnQgeyBTZWFyY2hCb3R0b21CYXIgfSBmcm9tIFwiLi9TZWFyY2hCb3R0b21CYXJcIjtcbmltcG9ydCBMb2NhbGVzUHJvdmlkZXIgZnJvbSBcIkAvY29udGV4dC9Mb2NhbGVzQ29udGV4dFwiO1xuaW1wb3J0IHsgU3RyaW5ncywgU2VhcmNoRmllbGRzIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IFNlYXJjaFBhcmFtcyB9IGZyb20gXCIuL1NlYXJjaFBhcmFtc1wiO1xuXG5pbXBvcnQgeyBnZXRQYXJhbXNGb3JGaWVsZHMgfSBmcm9tIFwiQC9oZWxwZXJzL3NlYXJjaEZpbHRlckhlbHBlclwiO1xuXG50eXBlIFByb3BzID0ge1xuICBmaWVsZHM6IGFueTtcbiAgc2VhcmNoRmllbGRzOiBTZWFyY2hGaWVsZHM7XG4gIG9uQ2xlYXI6ICgpID0+IHZvaWQ7XG4gIG9uU3VibWl0OiAodmFsdWVzOiBhbnkpID0+IHZvaWQ7XG4gIGlzU2VhcmNoaW5nOiBib29sZWFuO1xuICBzdHJpbmdzOiBTdHJpbmdzO1xuICBsaW1pdDogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcbn07XG5cbmZ1bmN0aW9uIFNlYXJjaEZpbHRlcihwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7XG4gICAgZmllbGRzLFxuICAgIHNlYXJjaEZpZWxkcyxcbiAgICBvbkNsZWFyLFxuICAgIG9uU3VibWl0LFxuICAgIGlzU2VhcmNoaW5nLFxuICAgIG9mZnNldCxcbiAgICBsaW1pdCxcbiAgICBzdHJpbmdzLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3NpbXBsZVNlYXJjaEZpZWxkcywgc2V0U2ltcGxlU2VhcmNoRmllbGRzXSA9IHVzZVN0YXRlPENvbnRhaW5lcj4oKTtcbiAgY29uc3QgW2FkdmFuY2VkU2VhcmNoRmllbGRzLCBzZXRBZHZhbmNlZFNlYXJjaEZpZWxkc10gPSB1c2VTdGF0ZTxDb250YWluZXI+KCk7XG4gIGNvbnN0IFthZHZhbmNlZEZpbHRlciwgc2V0QWR2YW5jZWRGaWx0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IFtmb3JtXSA9IEZvcm0udXNlRm9ybSgpO1xuXG4gIGNvbnN0IGdldFJvd3NBbmRDb2xzID0gKCkgPT4ge1xuICAgIGlmICghYWR2YW5jZWRTZWFyY2hGaWVsZHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWVsZHMgPSBhZHZhbmNlZEZpbHRlciA/IGFkdmFuY2VkU2VhcmNoRmllbGRzIDogc2ltcGxlU2VhcmNoRmllbGRzO1xuICAgIGNvbnN0IHJvd3MgPSBmaWVsZHM/LnJvd3M7XG5cbiAgICByZXR1cm4gcm93cz8ubWFwKChyb3csIGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxSb3cga2V5PXtpfT5cbiAgICAgICAgICB7cm93Lm1hcCgoaXRlbSwgaikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENvbCB4cz17MjR9IGNsYXNzTmFtZT1cInAtMlwiIHhsPXs2fSBrZXk9e2p9PlxuICAgICAgICAgICAgICAgIDxTZWFyY2hGaWVsZCBmaWVsZD17aXRlbSBhcyBGaWVsZH0gLz5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1Jvdz5cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZm8gPSBuZXcgU2VhcmNoRmlsdGVyT291aShzZWFyY2hGaWVsZHMsIGZpZWxkcyk7XG4gICAgc2ZvLnBhcnNlKCk7XG4gICAgc2V0U2ltcGxlU2VhcmNoRmllbGRzKHNmby5fc2ltcGxlU2VhcmNoQ29udGFpbmVyKTtcbiAgICBzZXRBZHZhbmNlZFNlYXJjaEZpZWxkcyhzZm8uX2FkdmFuY2VkU2VhcmNoQ29udGFpbmVyKTtcbiAgfSwgW2ZpZWxkcywgc2VhcmNoRmllbGRzXSk7XG5cbiAgY29uc3Qgcm93cyA9IGdldFJvd3NBbmRDb2xzKCk7XG5cbiAgY29uc3Qgb25GaW5pc2ggPSAodmFsdWVzOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGxpbWl0LCBvZmZzZXQgfSA9IHZhbHVlcztcbiAgICBkZWxldGUgdmFsdWVzLm9mZnNldDtcbiAgICBkZWxldGUgdmFsdWVzLmxpbWl0O1xuICAgIGNvbnN0IG5ld1BhcmFtcyA9IGdldFBhcmFtc0ZvckZpZWxkcyh2YWx1ZXMsIGZpZWxkcyk7XG5cbiAgICBvblN1Ym1pdCh7IHBhcmFtczogbmV3UGFyYW1zLCBvZmZzZXQsIGxpbWl0IH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExvY2FsZXNQcm92aWRlciBzdHJpbmdzPXtzdHJpbmdzfT5cbiAgICAgIDxGb3JtXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHJvdW5kZWQgcC0zXCJcbiAgICAgICAgZm9ybT17Zm9ybX1cbiAgICAgICAgb25GaW5pc2g9e29uRmluaXNofVxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IG9mZnNldCwgbGltaXQgfX1cbiAgICAgID5cbiAgICAgICAge3Jvd3N9XG4gICAgICAgIHthZHZhbmNlZEZpbHRlciAmJiA8U2VhcmNoUGFyYW1zIC8+fVxuICAgICAgICA8U2VhcmNoQm90dG9tQmFyXG4gICAgICAgICAgYWR2YW5jZWRGaWx0ZXI9e2FkdmFuY2VkRmlsdGVyfVxuICAgICAgICAgIG9uQWR2YW5jZWRGaWx0ZXJUb2dnbGU9eygpID0+IHtcbiAgICAgICAgICAgIHNldEFkdmFuY2VkRmlsdGVyKCFhZHZhbmNlZEZpbHRlcik7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsZWFyPXsoKSA9PiB7XG4gICAgICAgICAgICBmb3JtLnJlc2V0RmllbGRzKCk7XG4gICAgICAgICAgICBvbkNsZWFyKCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBpc1NlYXJjaGluZz17aXNTZWFyY2hpbmd9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9Mb2NhbGVzUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEZpbHRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEludGVnZXIgfSBmcm9tIFwiQC93aWRnZXRzL2Jhc2UvSW50ZWdlclwiO1xuaW1wb3J0IHsgUm93LCBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBJbnRlZ2VyIGFzIEludGVnZXJPb3VpIH0gZnJvbSBcIm9vdWlcIjtcblxuaW1wb3J0IHsgTG9jYWxlc0NvbnRleHQsIExvY2FsZXNDb250ZXh0VHlwZSB9IGZyb20gXCJAL2NvbnRleHQvTG9jYWxlc0NvbnRleHRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaFBhcmFtcygpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCB7IGdldFN0cmluZyB9ID0gdXNlQ29udGV4dChMb2NhbGVzQ29udGV4dCkgYXMgTG9jYWxlc0NvbnRleHRUeXBlO1xuXG4gIGNvbnN0IGxpbWl0T291aSA9IG5ldyBJbnRlZ2VyT291aSh7IG5hbWU6IFwibGltaXRcIiB9KTtcbiAgY29uc3Qgb2Zmc2V0T291aSA9IG5ldyBJbnRlZ2VyT291aSh7IG5hbWU6IFwib2Zmc2V0XCIgfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIHB0LTJcIj5cbiAgICAgIDxSb3cga2V5PXtcImNvdW50X3BhcmFtc1wifT57Z2V0U3RyaW5nKFwicGFyYW1ldGVyc1wiKX08L1Jvdz5cbiAgICAgIDxTcGFjZSBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICB7Z2V0U3RyaW5nKFwibGltaXRcIikgKyBcIiA6XCJ9XG4gICAgICAgIDxJbnRlZ2VyIG9vdWk9e2xpbWl0T291aX0gLz5cbiAgICAgICAge2dldFN0cmluZyhcImZpcnN0XCIpICsgXCIgOlwifVxuICAgICAgICA8SW50ZWdlciBvb3VpPXtvZmZzZXRPb3VpfSAvPlxuICAgICAgPC9TcGFjZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fYW50X2Rlc2lnbl9pY29uc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9hbnRkX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=