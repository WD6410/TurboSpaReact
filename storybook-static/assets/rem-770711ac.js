import { c as f } from './index-ebeaab24.js';
var a = {},
  i = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (s) {
  (function () {
    var e = {}.hasOwnProperty;
    function t() {
      for (var n = [], u = 0; u < arguments.length; u++) {
        var r = arguments[u];
        if (r) {
          var o = typeof r;
          if (o === 'string' || o === 'number') n.push(r);
          else if (Array.isArray(r)) {
            if (r.length) {
              var l = t.apply(null, r);
              l && n.push(l);
            }
          } else if (o === 'object') {
            if (
              r.toString !== Object.prototype.toString &&
              !r.toString.toString().includes('[native code]')
            ) {
              n.push(r.toString());
              continue;
            }
            for (var c in r) e.call(r, c) && r[c] && n.push(c);
          }
        }
      }
      return n.join(' ');
    }
    s.exports ? ((t.default = t), (s.exports = t)) : (window.classNames = t);
  })();
})(i);
var p = i.exports,
  N =
    (f && f.__importDefault) ||
    function (s) {
      return s && s.__esModule ? s : { default: s };
    };
Object.defineProperty(a, '__esModule', { value: !0 });
var h = (a.classNamesFunc = a.classNames = void 0),
  m = N(p),
  b = function () {
    for (var s = [], e = 0; e < arguments.length; e++) s[e] = arguments[e];
    return (0, m.default)(s);
  };
a.classNames = b;
var d = function () {
  return function () {
    for (var s = [], e = 0; e < arguments.length; e++) s[e] = arguments[e];
    return (0, m.default)(s);
  };
};
h = a.classNamesFunc = d;
function v(s) {
  return (e) => {
    if (typeof e == 'number') return `${e / 16}${s}`;
    if (typeof e == 'string') {
      const t = e.replace('px', '');
      if (!Number.isNaN(Number(t))) return `${Number(t) / 16}${s}`;
    }
    return e;
  };
}
const j = v('rem'),
  y = v('em');
export { h as c, y as e, j as r };
//# sourceMappingURL=rem-770711ac.js.map
