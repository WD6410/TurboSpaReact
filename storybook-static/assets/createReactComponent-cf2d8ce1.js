import { r as R, R as cr } from './index-ebeaab24.js';
import { e as Sr, r as W } from './rem-770711ac.js';
import { P as M } from './index-aff217c3.js';
function no(r) {
  return r;
}
function ue(r) {
  var e,
    t,
    n = '';
  if (typeof r == 'string' || typeof r == 'number') n += r;
  else if (typeof r == 'object')
    if (Array.isArray(r))
      for (e = 0; e < r.length; e++)
        r[e] && (t = ue(r[e])) && (n && (n += ' '), (n += t));
    else for (e in r) r[e] && (n && (n += ' '), (n += e));
  return n;
}
function it() {
  for (var r = 0, e, t, n = ''; r < arguments.length; )
    (e = arguments[r++]) && (t = ue(e)) && (n && (n += ' '), (n += t));
  return n;
}
const st = {
  dark: [
    '#C1C2C5',
    '#A6A7AB',
    '#909296',
    '#5c5f66',
    '#373A40',
    '#2C2E33',
    '#25262b',
    '#1A1B1E',
    '#141517',
    '#101113',
  ],
  gray: [
    '#f8f9fa',
    '#f1f3f5',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#868e96',
    '#495057',
    '#343a40',
    '#212529',
  ],
  red: [
    '#fff5f5',
    '#ffe3e3',
    '#ffc9c9',
    '#ffa8a8',
    '#ff8787',
    '#ff6b6b',
    '#fa5252',
    '#f03e3e',
    '#e03131',
    '#c92a2a',
  ],
  pink: [
    '#fff0f6',
    '#ffdeeb',
    '#fcc2d7',
    '#faa2c1',
    '#f783ac',
    '#f06595',
    '#e64980',
    '#d6336c',
    '#c2255c',
    '#a61e4d',
  ],
  grape: [
    '#f8f0fc',
    '#f3d9fa',
    '#eebefa',
    '#e599f7',
    '#da77f2',
    '#cc5de8',
    '#be4bdb',
    '#ae3ec9',
    '#9c36b5',
    '#862e9c',
  ],
  violet: [
    '#f3f0ff',
    '#e5dbff',
    '#d0bfff',
    '#b197fc',
    '#9775fa',
    '#845ef7',
    '#7950f2',
    '#7048e8',
    '#6741d9',
    '#5f3dc4',
  ],
  indigo: [
    '#edf2ff',
    '#dbe4ff',
    '#bac8ff',
    '#91a7ff',
    '#748ffc',
    '#5c7cfa',
    '#4c6ef5',
    '#4263eb',
    '#3b5bdb',
    '#364fc7',
  ],
  blue: [
    '#e7f5ff',
    '#d0ebff',
    '#a5d8ff',
    '#74c0fc',
    '#4dabf7',
    '#339af0',
    '#228be6',
    '#1c7ed6',
    '#1971c2',
    '#1864ab',
  ],
  cyan: [
    '#e3fafc',
    '#c5f6fa',
    '#99e9f2',
    '#66d9e8',
    '#3bc9db',
    '#22b8cf',
    '#15aabf',
    '#1098ad',
    '#0c8599',
    '#0b7285',
  ],
  teal: [
    '#e6fcf5',
    '#c3fae8',
    '#96f2d7',
    '#63e6be',
    '#38d9a9',
    '#20c997',
    '#12b886',
    '#0ca678',
    '#099268',
    '#087f5b',
  ],
  green: [
    '#ebfbee',
    '#d3f9d8',
    '#b2f2bb',
    '#8ce99a',
    '#69db7c',
    '#51cf66',
    '#40c057',
    '#37b24d',
    '#2f9e44',
    '#2b8a3e',
  ],
  lime: [
    '#f4fce3',
    '#e9fac8',
    '#d8f5a2',
    '#c0eb75',
    '#a9e34b',
    '#94d82d',
    '#82c91e',
    '#74b816',
    '#66a80f',
    '#5c940d',
  ],
  yellow: [
    '#fff9db',
    '#fff3bf',
    '#ffec99',
    '#ffe066',
    '#ffd43b',
    '#fcc419',
    '#fab005',
    '#f59f00',
    '#f08c00',
    '#e67700',
  ],
  orange: [
    '#fff4e6',
    '#ffe8cc',
    '#ffd8a8',
    '#ffc078',
    '#ffa94d',
    '#ff922b',
    '#fd7e14',
    '#f76707',
    '#e8590c',
    '#d9480f',
  ],
};
function ct(r) {
  return () => ({ fontFamily: r.fontFamily || 'sans-serif' });
}
var ft = Object.defineProperty,
  Rr = Object.getOwnPropertySymbols,
  lt = Object.prototype.hasOwnProperty,
  ut = Object.prototype.propertyIsEnumerable,
  jr = (r, e, t) =>
    e in r
      ? ft(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Ar = (r, e) => {
    for (var t in e || (e = {})) lt.call(e, t) && jr(r, t, e[t]);
    if (Rr) for (var t of Rr(e)) ut.call(e, t) && jr(r, t, e[t]);
    return r;
  };
function dt(r) {
  return (e) => ({
    WebkitTapHighlightColor: 'transparent',
    [e || '&:focus']: Ar(
      {},
      r.focusRing === 'always' || r.focusRing === 'auto'
        ? r.focusRingStyles.styles(r)
        : r.focusRingStyles.resetStyles(r),
    ),
    [e
      ? e.replace(':focus', ':focus:not(:focus-visible)')
      : '&:focus:not(:focus-visible)']: Ar(
      {},
      r.focusRing === 'auto' || r.focusRing === 'never'
        ? r.focusRingStyles.resetStyles(r)
        : null,
    ),
  });
}
function X(r) {
  return (e) =>
    typeof r.primaryShade == 'number'
      ? r.primaryShade
      : r.primaryShade[e || r.colorScheme];
}
function wr(r) {
  const e = X(r);
  return (t, n, a = !0, o = !0) => {
    if (typeof t == 'string' && t.includes('.')) {
      const [s, c] = t.split('.'),
        f = parseInt(c, 10);
      if (s in r.colors && f >= 0 && f < 10)
        return r.colors[s][typeof n == 'number' && !o ? n : f];
    }
    const i = typeof n == 'number' ? n : e();
    return t in r.colors ? r.colors[t][i] : a ? r.colors[r.primaryColor][i] : t;
  };
}
function de(r) {
  let e = '';
  for (let t = 1; t < r.length - 1; t += 1)
    e += `${r[t]} ${(t / (r.length - 1)) * 100}%, `;
  return `${r[0]} 0%, ${e}${r[r.length - 1]} 100%`;
}
function pt(r, ...e) {
  return `linear-gradient(${r}deg, ${de(e)})`;
}
function gt(...r) {
  return `radial-gradient(circle, ${de(r)})`;
}
function pe(r) {
  const e = wr(r),
    t = X(r);
  return (n) => {
    const a = {
      from: (n == null ? void 0 : n.from) || r.defaultGradient.from,
      to: (n == null ? void 0 : n.to) || r.defaultGradient.to,
      deg: (n == null ? void 0 : n.deg) || r.defaultGradient.deg,
    };
    return `linear-gradient(${a.deg}deg, ${e(a.from, t(), !1)} 0%, ${e(
      a.to,
      t(),
      !1,
    )} 100%)`;
  };
}
function A({ size: r, sizes: e, units: t }) {
  return r in e
    ? e[r]
    : typeof r == 'number'
    ? t === 'em'
      ? Sr(r)
      : W(r)
    : r || e.md;
}
function er(r) {
  return typeof r == 'number'
    ? r
    : typeof r == 'string' && r.includes('rem')
    ? Number(r.replace('rem', '')) * 16
    : typeof r == 'string' && r.includes('em')
    ? Number(r.replace('em', '')) * 16
    : Number(r);
}
function yt(r) {
  return (e) =>
    `@media (min-width: ${Sr(er(A({ size: e, sizes: r.breakpoints })))})`;
}
function mt(r) {
  return (e) =>
    `@media (max-width: ${Sr(er(A({ size: e, sizes: r.breakpoints })) - 1)})`;
}
function bt(r) {
  return /^#?([0-9A-F]{3}){1,2}$/i.test(r);
}
function ht(r) {
  let e = r.replace('#', '');
  if (e.length === 3) {
    const i = e.split('');
    e = [i[0], i[0], i[1], i[1], i[2], i[2]].join('');
  }
  const t = parseInt(e, 16),
    n = (t >> 16) & 255,
    a = (t >> 8) & 255,
    o = t & 255;
  return { r: n, g: a, b: o, a: 1 };
}
function vt(r) {
  const [e, t, n, a] = r
    .replace(/[^0-9,.]/g, '')
    .split(',')
    .map(Number);
  return { r: e, g: t, b: n, a: a || 1 };
}
function Or(r) {
  return bt(r)
    ? ht(r)
    : r.startsWith('rgb')
    ? vt(r)
    : { r: 0, g: 0, b: 0, a: 1 };
}
function G(r, e) {
  if (typeof r != 'string' || e > 1 || e < 0) return 'rgba(0, 0, 0, 1)';
  if (r.startsWith('var(--')) return r;
  const { r: t, g: n, b: a } = Or(r);
  return `rgba(${t}, ${n}, ${a}, ${e})`;
}
function _t(r = 0) {
  return {
    position: 'absolute',
    top: W(r),
    right: W(r),
    left: W(r),
    bottom: W(r),
  };
}
function St(r, e) {
  if (typeof r == 'string' && r.startsWith('var(--')) return r;
  const { r: t, g: n, b: a, a: o } = Or(r),
    i = 1 - e,
    s = (c) => Math.round(c * i);
  return `rgba(${s(t)}, ${s(n)}, ${s(a)}, ${o})`;
}
function wt(r, e) {
  if (typeof r == 'string' && r.startsWith('var(--')) return r;
  const { r: t, g: n, b: a, a: o } = Or(r),
    i = (s) => Math.round(s + (255 - s) * e);
  return `rgba(${i(t)}, ${i(n)}, ${i(a)}, ${o})`;
}
function Ot(r) {
  return (e) => {
    if (typeof e == 'number') return W(e);
    const t =
      typeof r.defaultRadius == 'number'
        ? r.defaultRadius
        : r.radius[r.defaultRadius] || r.defaultRadius;
    return r.radius[e] || e || t;
  };
}
function $t(r, e) {
  if (typeof r == 'string' && r.includes('.')) {
    const [t, n] = r.split('.'),
      a = parseInt(n, 10);
    if (t in e.colors && a >= 0 && a < 10)
      return { isSplittedColor: !0, key: t, shade: a };
  }
  return { isSplittedColor: !1 };
}
function xt(r) {
  const e = wr(r),
    t = X(r),
    n = pe(r);
  return ({ variant: a, color: o, gradient: i, primaryFallback: s }) => {
    const c = $t(o, r);
    switch (a) {
      case 'light':
        return {
          border: 'transparent',
          background: G(
            e(o, r.colorScheme === 'dark' ? 8 : 0, s, !1),
            r.colorScheme === 'dark' ? 0.2 : 1,
          ),
          color:
            o === 'dark'
              ? r.colorScheme === 'dark'
                ? r.colors.dark[0]
                : r.colors.dark[9]
              : e(o, r.colorScheme === 'dark' ? 2 : t('light')),
          hover: G(
            e(o, r.colorScheme === 'dark' ? 7 : 1, s, !1),
            r.colorScheme === 'dark' ? 0.25 : 0.65,
          ),
        };
      case 'subtle':
        return {
          border: 'transparent',
          background: 'transparent',
          color:
            o === 'dark'
              ? r.colorScheme === 'dark'
                ? r.colors.dark[0]
                : r.colors.dark[9]
              : e(o, r.colorScheme === 'dark' ? 2 : t('light')),
          hover: G(
            e(o, r.colorScheme === 'dark' ? 8 : 0, s, !1),
            r.colorScheme === 'dark' ? 0.2 : 1,
          ),
        };
      case 'outline':
        return {
          border: e(o, r.colorScheme === 'dark' ? 5 : t('light')),
          background: 'transparent',
          color: e(o, r.colorScheme === 'dark' ? 5 : t('light')),
          hover:
            r.colorScheme === 'dark'
              ? G(e(o, 5, s, !1), 0.05)
              : G(e(o, 0, s, !1), 0.35),
        };
      case 'default':
        return {
          border:
            r.colorScheme === 'dark' ? r.colors.dark[4] : r.colors.gray[4],
          background: r.colorScheme === 'dark' ? r.colors.dark[6] : r.white,
          color: r.colorScheme === 'dark' ? r.white : r.black,
          hover: r.colorScheme === 'dark' ? r.colors.dark[5] : r.colors.gray[0],
        };
      case 'white':
        return {
          border: 'transparent',
          background: r.white,
          color: e(o, t()),
          hover: null,
        };
      case 'transparent':
        return {
          border: 'transparent',
          color:
            o === 'dark'
              ? r.colorScheme === 'dark'
                ? r.colors.dark[0]
                : r.colors.dark[9]
              : e(o, r.colorScheme === 'dark' ? 2 : t('light')),
          background: 'transparent',
          hover: null,
        };
      case 'gradient':
        return {
          background: n(i),
          color: r.white,
          border: 'transparent',
          hover: null,
        };
      default: {
        const f = t(),
          l = c.isSplittedColor ? c.shade : f,
          u = c.isSplittedColor ? c.key : o;
        return {
          border: 'transparent',
          background: e(u, l, s),
          color: r.white,
          hover: e(u, l === 9 ? 8 : l + 1),
        };
      }
    }
  };
}
function Pt(r) {
  return (e) => {
    const t = X(r)(e);
    return r.colors[r.primaryColor][t];
  };
}
function Ct(r) {
  return {
    '@media (hover: hover)': { '&:hover': r },
    '@media (hover: none)': { '&:active': r },
  };
}
function kt(r) {
  return () => ({
    userSelect: 'none',
    color: r.colorScheme === 'dark' ? r.colors.dark[3] : r.colors.gray[5],
  });
}
function Et(r) {
  return () => (r.colorScheme === 'dark' ? r.colors.dark[2] : r.colors.gray[6]);
}
const O = {
  fontStyles: ct,
  themeColor: wr,
  focusStyles: dt,
  linearGradient: pt,
  radialGradient: gt,
  smallerThan: mt,
  largerThan: yt,
  rgba: G,
  cover: _t,
  darken: St,
  lighten: wt,
  radius: Ot,
  variant: xt,
  primaryShade: X,
  hover: Ct,
  gradient: pe,
  primaryColor: Pt,
  placeholderStyles: kt,
  dimmed: Et,
};
var Rt = Object.defineProperty,
  jt = Object.defineProperties,
  At = Object.getOwnPropertyDescriptors,
  Tr = Object.getOwnPropertySymbols,
  Tt = Object.prototype.hasOwnProperty,
  zt = Object.prototype.propertyIsEnumerable,
  zr = (r, e, t) =>
    e in r
      ? Rt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Nt = (r, e) => {
    for (var t in e || (e = {})) Tt.call(e, t) && zr(r, t, e[t]);
    if (Tr) for (var t of Tr(e)) zt.call(e, t) && zr(r, t, e[t]);
    return r;
  },
  It = (r, e) => jt(r, At(e));
function Wt(r) {
  return It(Nt({}, r), {
    fn: {
      fontStyles: O.fontStyles(r),
      themeColor: O.themeColor(r),
      focusStyles: O.focusStyles(r),
      largerThan: O.largerThan(r),
      smallerThan: O.smallerThan(r),
      radialGradient: O.radialGradient,
      linearGradient: O.linearGradient,
      gradient: O.gradient(r),
      rgba: O.rgba,
      cover: O.cover,
      lighten: O.lighten,
      darken: O.darken,
      primaryShade: O.primaryShade(r),
      radius: O.radius(r),
      variant: O.variant(r),
      hover: O.hover,
      primaryColor: O.primaryColor(r),
      placeholderStyles: O.placeholderStyles(r),
      dimmed: O.dimmed(r),
    },
  });
}
const Mt = {
    dir: 'ltr',
    primaryShade: { light: 6, dark: 8 },
    focusRing: 'auto',
    loader: 'oval',
    colorScheme: 'light',
    white: '#fff',
    black: '#000',
    defaultRadius: 'sm',
    transitionTimingFunction: 'ease',
    colors: st,
    lineHeight: 1.55,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    fontFamilyMonospace:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
    primaryColor: 'blue',
    respectReducedMotion: !0,
    cursorType: 'default',
    defaultGradient: { from: 'indigo', to: 'cyan', deg: 45 },
    shadows: {
      xs: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.1)',
      sm: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem',
      md: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem, rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem',
      lg: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 0.75rem 0.75rem -0.4375rem',
      xl: '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 2.25rem 1.75rem -0.4375rem, rgba(0, 0, 0, 0.04) 0 1.0625rem 1.0625rem -0.4375rem',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
    radius: {
      xs: '0.125rem',
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      xl: '2rem',
    },
    spacing: {
      xs: '0.625rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
    },
    breakpoints: { xs: '36em', sm: '48em', md: '62em', lg: '75em', xl: '88em' },
    headings: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
      fontWeight: 700,
      sizes: {
        h1: { fontSize: '2.125rem', lineHeight: 1.3, fontWeight: void 0 },
        h2: { fontSize: '1.625rem', lineHeight: 1.35, fontWeight: void 0 },
        h3: { fontSize: '1.375rem', lineHeight: 1.4, fontWeight: void 0 },
        h4: { fontSize: '1.125rem', lineHeight: 1.45, fontWeight: void 0 },
        h5: { fontSize: '1rem', lineHeight: 1.5, fontWeight: void 0 },
        h6: { fontSize: '0.875rem', lineHeight: 1.5, fontWeight: void 0 },
      },
    },
    other: {},
    components: {},
    activeStyles: { transform: 'translateY(0.0625rem)' },
    datesLocale: 'en',
    globalStyles: void 0,
    focusRingStyles: {
      styles: (r) => ({
        outlineOffset: '0.125rem',
        outline: `0.125rem solid ${
          r.colors[r.primaryColor][r.colorScheme === 'dark' ? 7 : 5]
        }`,
      }),
      resetStyles: () => ({ outline: 'none' }),
      inputStyles: (r) => ({
        outline: 'none',
        borderColor:
          r.colors[r.primaryColor][
            typeof r.primaryShade == 'object'
              ? r.primaryShade[r.colorScheme]
              : r.primaryShade
          ],
      }),
    },
  },
  ge = Wt(Mt);
function Gt(r) {
  if (r.sheet) return r.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === r) return document.styleSheets[e];
}
function Vt(r) {
  var e = document.createElement('style');
  return (
    e.setAttribute('data-emotion', r.key),
    r.nonce !== void 0 && e.setAttribute('nonce', r.nonce),
    e.appendChild(document.createTextNode('')),
    e.setAttribute('data-s', ''),
    e
  );
}
var Ft = (function () {
    function r(t) {
      var n = this;
      (this._insertTag = function (a) {
        var o;
        n.tags.length === 0
          ? n.insertionPoint
            ? (o = n.insertionPoint.nextSibling)
            : n.prepend
            ? (o = n.container.firstChild)
            : (o = n.before)
          : (o = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(a, o),
          n.tags.push(a);
      }),
        (this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = t.nonce),
        (this.key = t.key),
        (this.container = t.container),
        (this.prepend = t.prepend),
        (this.insertionPoint = t.insertionPoint),
        (this.before = null);
    }
    var e = r.prototype;
    return (
      (e.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (e.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Vt(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = Gt(a);
          try {
            o.insertRule(n, o.cssRules.length);
          } catch {}
        } else a.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (e.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      r
    );
  })(),
  x = '-ms-',
  tr = '-moz-',
  d = '-webkit-',
  ye = 'comm',
  $r = 'rule',
  xr = 'decl',
  Ht = '@import',
  me = '@keyframes',
  Dt = '@layer',
  Lt = Math.abs,
  fr = String.fromCharCode,
  Ut = Object.assign;
function Bt(r, e) {
  return $(r, 0) ^ 45
    ? (((((((e << 2) ^ $(r, 0)) << 2) ^ $(r, 1)) << 2) ^ $(r, 2)) << 2) ^
        $(r, 3)
    : 0;
}
function be(r) {
  return r.trim();
}
function Xt(r, e) {
  return (r = e.exec(r)) ? r[0] : r;
}
function p(r, e, t) {
  return r.replace(e, t);
}
function hr(r, e) {
  return r.indexOf(e);
}
function $(r, e) {
  return r.charCodeAt(e) | 0;
}
function L(r, e, t) {
  return r.slice(e, t);
}
function T(r) {
  return r.length;
}
function Pr(r) {
  return r.length;
}
function Z(r, e) {
  return e.push(r), r;
}
function Yt(r, e) {
  return r.map(e).join('');
}
var lr = 1,
  F = 1,
  he = 0,
  C = 0,
  S = 0,
  H = '';
function ur(r, e, t, n, a, o, i) {
  return {
    value: r,
    root: e,
    parent: t,
    type: n,
    props: a,
    children: o,
    line: lr,
    column: F,
    length: i,
    return: '',
  };
}
function D(r, e) {
  return Ut(ur('', null, null, '', null, null, 0), r, { length: -r.length }, e);
}
function qt() {
  return S;
}
function Zt() {
  return (S = C > 0 ? $(H, --C) : 0), F--, S === 10 && ((F = 1), lr--), S;
}
function E() {
  return (S = C < he ? $(H, C++) : 0), F++, S === 10 && ((F = 1), lr++), S;
}
function N() {
  return $(H, C);
}
function K() {
  return C;
}
function Y(r, e) {
  return L(H, r, e);
}
function U(r) {
  switch (r) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function ve(r) {
  return (lr = F = 1), (he = T((H = r))), (C = 0), [];
}
function _e(r) {
  return (H = ''), r;
}
function Q(r) {
  return be(Y(C - 1, vr(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function Jt(r) {
  for (; (S = N()) && S < 33; ) E();
  return U(r) > 2 || U(S) > 3 ? '' : ' ';
}
function Kt(r, e) {
  for (
    ;
    --e &&
    E() &&
    !(S < 48 || S > 102 || (S > 57 && S < 65) || (S > 70 && S < 97));

  );
  return Y(r, K() + (e < 6 && N() == 32 && E() == 32));
}
function vr(r) {
  for (; E(); )
    switch (S) {
      case r:
        return C;
      case 34:
      case 39:
        r !== 34 && r !== 39 && vr(S);
        break;
      case 40:
        r === 41 && vr(r);
        break;
      case 92:
        E();
        break;
    }
  return C;
}
function Qt(r, e) {
  for (; E() && r + S !== 47 + 10; ) if (r + S === 42 + 42 && N() === 47) break;
  return '/*' + Y(e, C - 1) + '*' + fr(r === 47 ? r : E());
}
function rn(r) {
  for (; !U(N()); ) E();
  return Y(r, C);
}
function en(r) {
  return _e(rr('', null, null, null, [''], (r = ve(r)), 0, [0], r));
}
function rr(r, e, t, n, a, o, i, s, c) {
  for (
    var f = 0,
      l = 0,
      u = i,
      _ = 0,
      v = 0,
      h = 0,
      g = 1,
      b = 1,
      m = 1,
      w = 0,
      k = '',
      I = a,
      j = o,
      P = n,
      y = k;
    b;

  )
    switch (((h = w), (w = E()))) {
      case 40:
        if (h != 108 && $(y, u - 1) == 58) {
          hr((y += p(Q(w), '&', '&\f')), '&\f') != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        y += Q(w);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        y += Jt(h);
        break;
      case 92:
        y += Kt(K() - 1, 7);
        continue;
      case 47:
        switch (N()) {
          case 42:
          case 47:
            Z(tn(Qt(E(), K()), e, t), c);
            break;
          default:
            y += '/';
        }
        break;
      case 123 * g:
        s[f++] = T(y) * m;
      case 125 * g:
      case 59:
      case 0:
        switch (w) {
          case 0:
          case 125:
            b = 0;
          case 59 + l:
            m == -1 && (y = p(y, /\f/g, '')),
              v > 0 &&
                T(y) - u &&
                Z(
                  v > 32
                    ? Ir(y + ';', n, t, u - 1)
                    : Ir(p(y, ' ', '') + ';', n, t, u - 2),
                  c,
                );
            break;
          case 59:
            y += ';';
          default:
            if (
              (Z((P = Nr(y, e, t, f, l, a, s, k, (I = []), (j = []), u)), o),
              w === 123)
            )
              if (l === 0) rr(y, e, P, P, I, o, u, s, j);
              else
                switch (_ === 99 && $(y, 3) === 110 ? 100 : _) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    rr(
                      r,
                      P,
                      P,
                      n && Z(Nr(r, P, P, 0, 0, a, s, k, a, (I = []), u), j),
                      a,
                      j,
                      u,
                      s,
                      n ? I : j,
                    );
                    break;
                  default:
                    rr(y, P, P, P, [''], j, 0, s, j);
                }
        }
        (f = l = v = 0), (g = m = 1), (k = y = ''), (u = i);
        break;
      case 58:
        (u = 1 + T(y)), (v = h);
      default:
        if (g < 1) {
          if (w == 123) --g;
          else if (w == 125 && g++ == 0 && Zt() == 125) continue;
        }
        switch (((y += fr(w)), w * g)) {
          case 38:
            m = l > 0 ? 1 : ((y += '\f'), -1);
            break;
          case 44:
            (s[f++] = (T(y) - 1) * m), (m = 1);
            break;
          case 64:
            N() === 45 && (y += Q(E())),
              (_ = N()),
              (l = u = T((k = y += rn(K())))),
              w++;
            break;
          case 45:
            h === 45 && T(y) == 2 && (g = 0);
        }
    }
  return o;
}
function Nr(r, e, t, n, a, o, i, s, c, f, l) {
  for (
    var u = a - 1, _ = a === 0 ? o : [''], v = Pr(_), h = 0, g = 0, b = 0;
    h < n;
    ++h
  )
    for (var m = 0, w = L(r, u + 1, (u = Lt((g = i[h])))), k = r; m < v; ++m)
      (k = be(g > 0 ? _[m] + ' ' + w : p(w, /&\f/g, _[m]))) && (c[b++] = k);
  return ur(r, e, t, a === 0 ? $r : s, c, f, l);
}
function tn(r, e, t) {
  return ur(r, e, t, ye, fr(qt()), L(r, 2, -2), 0);
}
function Ir(r, e, t, n) {
  return ur(r, e, t, xr, L(r, 0, n), L(r, n + 1, -1), n);
}
function V(r, e) {
  for (var t = '', n = Pr(r), a = 0; a < n; a++) t += e(r[a], a, r, e) || '';
  return t;
}
function nn(r, e, t, n) {
  switch (r.type) {
    case Dt:
      if (r.children.length) break;
    case Ht:
    case xr:
      return (r.return = r.return || r.value);
    case ye:
      return '';
    case me:
      return (r.return = r.value + '{' + V(r.children, n) + '}');
    case $r:
      r.value = r.props.join(',');
  }
  return T((t = V(r.children, n))) ? (r.return = r.value + '{' + t + '}') : '';
}
function an(r) {
  var e = Pr(r);
  return function (t, n, a, o) {
    for (var i = '', s = 0; s < e; s++) i += r[s](t, n, a, o) || '';
    return i;
  };
}
function on(r) {
  return function (e) {
    e.root || ((e = e.return) && r(e));
  };
}
function sn(r) {
  var e = Object.create(null);
  return function (t) {
    return e[t] === void 0 && (e[t] = r(t)), e[t];
  };
}
var cn = function (e, t, n) {
    for (
      var a = 0, o = 0;
      (a = o), (o = N()), a === 38 && o === 12 && (t[n] = 1), !U(o);

    )
      E();
    return Y(e, C);
  },
  fn = function (e, t) {
    var n = -1,
      a = 44;
    do
      switch (U(a)) {
        case 0:
          a === 38 && N() === 12 && (t[n] = 1), (e[n] += cn(C - 1, t, n));
          break;
        case 2:
          e[n] += Q(a);
          break;
        case 4:
          if (a === 44) {
            (e[++n] = N() === 58 ? '&\f' : ''), (t[n] = e[n].length);
            break;
          }
        default:
          e[n] += fr(a);
      }
    while ((a = E()));
    return e;
  },
  ln = function (e, t) {
    return _e(fn(ve(e), t));
  },
  Wr = new WeakMap(),
  un = function (e) {
    if (!(e.type !== 'rule' || !e.parent || e.length < 1)) {
      for (
        var t = e.value,
          n = e.parent,
          a = e.column === n.column && e.line === n.line;
        n.type !== 'rule';

      )
        if (((n = n.parent), !n)) return;
      if (
        !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !Wr.get(n)) &&
        !a
      ) {
        Wr.set(e, !0);
        for (
          var o = [], i = ln(t, o), s = n.props, c = 0, f = 0;
          c < i.length;
          c++
        )
          for (var l = 0; l < s.length; l++, f++)
            e.props[f] = o[c] ? i[c].replace(/&\f/g, s[l]) : s[l] + ' ' + i[c];
      }
    }
  },
  dn = function (e) {
    if (e.type === 'decl') {
      var t = e.value;
      t.charCodeAt(0) === 108 &&
        t.charCodeAt(2) === 98 &&
        ((e.return = ''), (e.value = ''));
    }
  };
function Se(r, e) {
  switch (Bt(r, e)) {
    case 5103:
      return d + 'print-' + r + r;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return d + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return d + r + tr + r + x + r + r;
    case 6828:
    case 4268:
      return d + r + x + r + r;
    case 6165:
      return d + r + x + 'flex-' + r + r;
    case 5187:
      return (
        d + r + p(r, /(\w+).+(:[^]+)/, d + 'box-$1$2' + x + 'flex-$1$2') + r
      );
    case 5443:
      return d + r + x + 'flex-item-' + p(r, /flex-|-self/, '') + r;
    case 4675:
      return (
        d + r + x + 'flex-line-pack' + p(r, /align-content|flex-|-self/, '') + r
      );
    case 5548:
      return d + r + x + p(r, 'shrink', 'negative') + r;
    case 5292:
      return d + r + x + p(r, 'basis', 'preferred-size') + r;
    case 6060:
      return (
        d +
        'box-' +
        p(r, '-grow', '') +
        d +
        r +
        x +
        p(r, 'grow', 'positive') +
        r
      );
    case 4554:
      return d + p(r, /([^-])(transform)/g, '$1' + d + '$2') + r;
    case 6187:
      return (
        p(p(p(r, /(zoom-|grab)/, d + '$1'), /(image-set)/, d + '$1'), r, '') + r
      );
    case 5495:
    case 3959:
      return p(r, /(image-set\([^]*)/, d + '$1$`$1');
    case 4968:
      return (
        p(
          p(r, /(.+:)(flex-)?(.*)/, d + 'box-pack:$3' + x + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        d +
        r +
        r
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return p(r, /(.+)-inline(.+)/, d + '$1$2') + r;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (T(r) - 1 - e > 6)
        switch ($(r, e + 1)) {
          case 109:
            if ($(r, e + 4) !== 45) break;
          case 102:
            return (
              p(
                r,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  d +
                  '$2-$3$1' +
                  tr +
                  ($(r, e + 3) == 108 ? '$3' : '$2-$3'),
              ) + r
            );
          case 115:
            return ~hr(r, 'stretch')
              ? Se(p(r, 'stretch', 'fill-available'), e) + r
              : r;
        }
      break;
    case 4949:
      if ($(r, e + 1) !== 115) break;
    case 6444:
      switch ($(r, T(r) - 3 - (~hr(r, '!important') && 10))) {
        case 107:
          return p(r, ':', ':' + d) + r;
        case 101:
          return (
            p(
              r,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                d +
                ($(r, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                d +
                '$2$3$1' +
                x +
                '$2box$3',
            ) + r
          );
      }
      break;
    case 5936:
      switch ($(r, e + 11)) {
        case 114:
          return d + r + x + p(r, /[svh]\w+-[tblr]{2}/, 'tb') + r;
        case 108:
          return d + r + x + p(r, /[svh]\w+-[tblr]{2}/, 'tb-rl') + r;
        case 45:
          return d + r + x + p(r, /[svh]\w+-[tblr]{2}/, 'lr') + r;
      }
      return d + r + x + r + r;
  }
  return r;
}
var pn = function (e, t, n, a) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case xr:
          e.return = Se(e.value, e.length);
          break;
        case me:
          return V([D(e, { value: p(e.value, '@', '@' + d) })], a);
        case $r:
          if (e.length)
            return Yt(e.props, function (o) {
              switch (Xt(o, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return V(
                    [D(e, { props: [p(o, /:(read-\w+)/, ':' + tr + '$1')] })],
                    a,
                  );
                case '::placeholder':
                  return V(
                    [
                      D(e, {
                        props: [p(o, /:(plac\w+)/, ':' + d + 'input-$1')],
                      }),
                      D(e, { props: [p(o, /:(plac\w+)/, ':' + tr + '$1')] }),
                      D(e, { props: [p(o, /:(plac\w+)/, x + 'input-$1')] }),
                    ],
                    a,
                  );
              }
              return '';
            });
      }
  },
  gn = [pn],
  yn = function (e) {
    var t = e.key;
    if (t === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(n, function (g) {
        var b = g.getAttribute('data-emotion');
        b.indexOf(' ') !== -1 &&
          (document.head.appendChild(g), g.setAttribute('data-s', ''));
      });
    }
    var a = e.stylisPlugins || gn,
      o = {},
      i,
      s = [];
    (i = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
        function (g) {
          for (
            var b = g.getAttribute('data-emotion').split(' '), m = 1;
            m < b.length;
            m++
          )
            o[b[m]] = !0;
          s.push(g);
        },
      );
    var c,
      f = [un, dn];
    {
      var l,
        u = [
          nn,
          on(function (g) {
            l.insert(g);
          }),
        ],
        _ = an(f.concat(a, u)),
        v = function (b) {
          return V(en(b), _);
        };
      c = function (b, m, w, k) {
        (l = w),
          v(b ? b + '{' + m.styles + '}' : m.styles),
          k && (h.inserted[m.name] = !0);
      };
    }
    var h = {
      key: t,
      sheet: new Ft({
        key: t,
        container: i,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint,
      }),
      nonce: e.nonce,
      inserted: o,
      registered: {},
      insert: c,
    };
    return h.sheet.hydrate(s), h;
  },
  mn = !0;
function bn(r, e, t) {
  var n = '';
  return (
    t.split(' ').forEach(function (a) {
      r[a] !== void 0 ? e.push(r[a] + ';') : (n += a + ' ');
    }),
    n
  );
}
var hn = function (e, t, n) {
    var a = e.key + '-' + t.name;
    (n === !1 || mn === !1) &&
      e.registered[a] === void 0 &&
      (e.registered[a] = t.styles);
  },
  vn = function (e, t, n) {
    hn(e, t, n);
    var a = e.key + '-' + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do e.insert(t === o ? '.' + a : '', o, e.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function _n(r) {
  for (var e = 0, t, n = 0, a = r.length; a >= 4; ++n, a -= 4)
    (t =
      (r.charCodeAt(n) & 255) |
      ((r.charCodeAt(++n) & 255) << 8) |
      ((r.charCodeAt(++n) & 255) << 16) |
      ((r.charCodeAt(++n) & 255) << 24)),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      (t ^= t >>> 24),
      (e =
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)) ^
        ((e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)));
  switch (a) {
    case 3:
      e ^= (r.charCodeAt(n + 2) & 255) << 16;
    case 2:
      e ^= (r.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (e ^= r.charCodeAt(n) & 255),
        (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16));
  }
  return (
    (e ^= e >>> 13),
    (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)),
    ((e ^ (e >>> 15)) >>> 0).toString(36)
  );
}
var Sn = {
    animationIterationCount: 1,
    aspectRatio: 1,
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
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  wn = /[A-Z]|^ms/g,
  On = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  we = function (e) {
    return e.charCodeAt(1) === 45;
  },
  Mr = function (e) {
    return e != null && typeof e != 'boolean';
  },
  gr = sn(function (r) {
    return we(r) ? r : r.replace(wn, '-$&').toLowerCase();
  }),
  Gr = function (e, t) {
    switch (e) {
      case 'animation':
      case 'animationName':
        if (typeof t == 'string')
          return t.replace(On, function (n, a, o) {
            return (z = { name: a, styles: o, next: z }), a;
          });
    }
    return Sn[e] !== 1 && !we(e) && typeof t == 'number' && t !== 0
      ? t + 'px'
      : t;
  };
function B(r, e, t) {
  if (t == null) return '';
  if (t.__emotion_styles !== void 0) return t;
  switch (typeof t) {
    case 'boolean':
      return '';
    case 'object': {
      if (t.anim === 1)
        return (z = { name: t.name, styles: t.styles, next: z }), t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (z = { name: n.name, styles: n.styles, next: z }), (n = n.next);
        var a = t.styles + ';';
        return a;
      }
      return $n(r, e, t);
    }
    case 'function': {
      if (r !== void 0) {
        var o = z,
          i = t(r);
        return (z = o), B(r, e, i);
      }
      break;
    }
  }
  if (e == null) return t;
  var s = e[t];
  return s !== void 0 ? s : t;
}
function $n(r, e, t) {
  var n = '';
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++) n += B(r, e, t[a]) + ';';
  else
    for (var o in t) {
      var i = t[o];
      if (typeof i != 'object')
        e != null && e[i] !== void 0
          ? (n += o + '{' + e[i] + '}')
          : Mr(i) && (n += gr(o) + ':' + Gr(o, i) + ';');
      else if (
        Array.isArray(i) &&
        typeof i[0] == 'string' &&
        (e == null || e[i[0]] === void 0)
      )
        for (var s = 0; s < i.length; s++)
          Mr(i[s]) && (n += gr(o) + ':' + Gr(o, i[s]) + ';');
      else {
        var c = B(r, e, i);
        switch (o) {
          case 'animation':
          case 'animationName': {
            n += gr(o) + ':' + c + ';';
            break;
          }
          default:
            n += o + '{' + c + '}';
        }
      }
    }
  return n;
}
var Vr = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  z,
  xn = function (e, t, n) {
    if (
      e.length === 1 &&
      typeof e[0] == 'object' &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var a = !0,
      o = '';
    z = void 0;
    var i = e[0];
    i == null || i.raw === void 0 ? ((a = !1), (o += B(n, t, i))) : (o += i[0]);
    for (var s = 1; s < e.length; s++) (o += B(n, t, e[s])), a && (o += i[s]);
    Vr.lastIndex = 0;
    for (var c = '', f; (f = Vr.exec(o)) !== null; ) c += '-' + f[1];
    var l = _n(o) + c;
    return { name: l, styles: o, next: z };
  };
function Oe(r) {
  return Object.keys(r).reduce(
    (e, t) => (r[t] !== void 0 && (e[t] = r[t]), e),
    {},
  );
}
var Pn = Object.defineProperty,
  Fr = Object.getOwnPropertySymbols,
  Cn = Object.prototype.hasOwnProperty,
  kn = Object.prototype.propertyIsEnumerable,
  Hr = (r, e, t) =>
    e in r
      ? Pn(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  yr = (r, e) => {
    for (var t in e || (e = {})) Cn.call(e, t) && Hr(r, t, e[t]);
    if (Fr) for (var t of Fr(e)) kn.call(e, t) && Hr(r, t, e[t]);
    return r;
  };
const $e = R.createContext({ theme: ge });
function dr() {
  var r;
  return ((r = R.useContext($e)) == null ? void 0 : r.theme) || ge;
}
function En(r) {
  const e = dr(),
    t = (n) => {
      var a, o, i, s;
      return {
        styles: ((a = e.components[n]) == null ? void 0 : a.styles) || {},
        classNames:
          ((o = e.components[n]) == null ? void 0 : o.classNames) || {},
        variants: (i = e.components[n]) == null ? void 0 : i.variants,
        sizes: (s = e.components[n]) == null ? void 0 : s.sizes,
      };
    };
  return Array.isArray(r) ? r.map(t) : [t(r)];
}
function xe() {
  var r;
  return (r = R.useContext($e)) == null ? void 0 : r.emotionCache;
}
function Cr(r, e, t) {
  var n;
  const a = dr(),
    o = (n = a.components[r]) == null ? void 0 : n.defaultProps,
    i = typeof o == 'function' ? o(a) : o;
  return yr(yr(yr({}, e), i), Oe(t));
}
function Rn(r, e) {
  const t = R.useRef();
  return (
    (!t.current ||
      e.length !== t.current.prevDeps.length ||
      t.current.prevDeps.map((n, a) => n === e[a]).indexOf(!1) >= 0) &&
      (t.current = { v: r(), prevDeps: [...e] }),
    t.current.v
  );
}
const jn = yn({ key: 'mantine', prepend: !0 });
function An() {
  return xe() || jn;
}
var Tn = Object.defineProperty,
  Dr = Object.getOwnPropertySymbols,
  zn = Object.prototype.hasOwnProperty,
  Nn = Object.prototype.propertyIsEnumerable,
  Lr = (r, e, t) =>
    e in r
      ? Tn(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  In = (r, e) => {
    for (var t in e || (e = {})) zn.call(e, t) && Lr(r, t, e[t]);
    if (Dr) for (var t of Dr(e)) Nn.call(e, t) && Lr(r, t, e[t]);
    return r;
  };
const mr = 'ref';
function Wn(r) {
  let e;
  if (r.length !== 1) return { args: r, ref: e };
  const [t] = r;
  if (!(t instanceof Object)) return { args: r, ref: e };
  if (!(mr in t)) return { args: r, ref: e };
  e = t[mr];
  const n = In({}, t);
  return delete n[mr], { args: [n], ref: e };
}
const { cssFactory: Mn } = (() => {
  function r(t, n, a) {
    const o = [],
      i = bn(t, o, a);
    return o.length < 2 ? a : i + n(o);
  }
  function e(t) {
    const { cache: n } = t,
      a = (...i) => {
        const { ref: s, args: c } = Wn(i),
          f = xn(c, n.registered);
        return vn(n, f, !1), `${n.key}-${f.name}${s === void 0 ? '' : ` ${s}`}`;
      };
    return { css: a, cx: (...i) => r(n.registered, a, it(i)) };
  }
  return { cssFactory: e };
})();
function Pe() {
  const r = An();
  return Rn(() => Mn({ cache: r }), [r]);
}
function Gn({
  cx: r,
  classes: e,
  context: t,
  classNames: n,
  name: a,
  cache: o,
}) {
  const i = t.reduce(
    (s, c) => (
      Object.keys(c.classNames).forEach((f) => {
        typeof s[f] != 'string'
          ? (s[f] = `${c.classNames[f]}`)
          : (s[f] = `${s[f]} ${c.classNames[f]}`);
      }),
      s
    ),
    {},
  );
  return Object.keys(e).reduce(
    (s, c) => (
      (s[c] = r(
        e[c],
        i[c],
        n != null && n[c],
        Array.isArray(a)
          ? a
              .filter(Boolean)
              .map(
                (f) => `${(o == null ? void 0 : o.key) || 'mantine'}-${f}-${c}`,
              )
              .join(' ')
          : a
          ? `${(o == null ? void 0 : o.key) || 'mantine'}-${a}-${c}`
          : null,
      )),
      s
    ),
    {},
  );
}
var Vn = Object.defineProperty,
  Ur = Object.getOwnPropertySymbols,
  Fn = Object.prototype.hasOwnProperty,
  Hn = Object.prototype.propertyIsEnumerable,
  Br = (r, e, t) =>
    e in r
      ? Vn(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  br = (r, e) => {
    for (var t in e || (e = {})) Fn.call(e, t) && Br(r, t, e[t]);
    if (Ur) for (var t of Ur(e)) Hn.call(e, t) && Br(r, t, e[t]);
    return r;
  };
function _r(r, e) {
  return (
    e &&
      Object.keys(e).forEach((t) => {
        r[t] ? (r[t] = br(br({}, r[t]), e[t])) : (r[t] = br({}, e[t]));
      }),
    r
  );
}
function Xr(r, e, t, n) {
  const a = (o) => (typeof o == 'function' ? o(e, t || {}, n) : o || {});
  return Array.isArray(r)
    ? r.map((o) => a(o.styles)).reduce((o, i) => _r(o, i), {})
    : a(r);
}
function Dn({ ctx: r, theme: e, params: t, variant: n, size: a }) {
  return r.reduce(
    (o, i) => (
      i.variants &&
        n in i.variants &&
        _r(o, i.variants[n](e, t, { variant: n, size: a })),
      i.sizes &&
        a in i.sizes &&
        _r(o, i.sizes[a](e, t, { variant: n, size: a })),
      o
    ),
    {},
  );
}
function kr(r) {
  const e = typeof r == 'function' ? r : () => r;
  function t(n, a) {
    const o = dr(),
      i = En(a == null ? void 0 : a.name),
      s = xe(),
      c = {
        variant: a == null ? void 0 : a.variant,
        size: a == null ? void 0 : a.size,
      },
      { css: f, cx: l } = Pe(),
      u = e(o, n, c),
      _ = Xr(a == null ? void 0 : a.styles, o, n, c),
      v = Xr(i, o, n, c),
      h = Dn({
        ctx: i,
        theme: o,
        params: n,
        variant: a == null ? void 0 : a.variant,
        size: a == null ? void 0 : a.size,
      }),
      g = Object.fromEntries(
        Object.keys(u).map((b) => {
          const m = l(
            { [f(u[b])]: !(a != null && a.unstyled) },
            f(h[b]),
            f(v[b]),
            f(_[b]),
          );
          return [b, m];
        }),
      );
    return {
      classes: Gn({
        cx: l,
        classes: g,
        context: i,
        classNames: a == null ? void 0 : a.classNames,
        name: a == null ? void 0 : a.name,
        cache: s,
      }),
      cx: l,
      theme: o,
    };
  }
  return t;
}
var Yr = Object.getOwnPropertySymbols,
  Ln = Object.prototype.hasOwnProperty,
  Un = Object.prototype.propertyIsEnumerable,
  Bn = (r, e) => {
    var t = {};
    for (var n in r) Ln.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && Yr)
      for (var n of Yr(r)) e.indexOf(n) < 0 && Un.call(r, n) && (t[n] = r[n]);
    return t;
  };
function Xn(r) {
  const e = r,
    {
      m: t,
      mx: n,
      my: a,
      mt: o,
      mb: i,
      ml: s,
      mr: c,
      p: f,
      px: l,
      py: u,
      pt: _,
      pb: v,
      pl: h,
      pr: g,
      bg: b,
      c: m,
      opacity: w,
      ff: k,
      fz: I,
      fw: j,
      lts: P,
      ta: y,
      lh: q,
      fs: pr,
      tt: Ve,
      td: Fe,
      w: He,
      miw: De,
      maw: Le,
      h: Ue,
      mih: Be,
      mah: Xe,
      bgsz: Ye,
      bgp: qe,
      bgr: Ze,
      bga: Je,
      pos: Ke,
      top: Qe,
      left: rt,
      bottom: et,
      right: tt,
      inset: nt,
      display: at,
    } = e,
    ot = Bn(e, [
      'm',
      'mx',
      'my',
      'mt',
      'mb',
      'ml',
      'mr',
      'p',
      'px',
      'py',
      'pt',
      'pb',
      'pl',
      'pr',
      'bg',
      'c',
      'opacity',
      'ff',
      'fz',
      'fw',
      'lts',
      'ta',
      'lh',
      'fs',
      'tt',
      'td',
      'w',
      'miw',
      'maw',
      'h',
      'mih',
      'mah',
      'bgsz',
      'bgp',
      'bgr',
      'bga',
      'pos',
      'top',
      'left',
      'bottom',
      'right',
      'inset',
      'display',
    ]);
  return {
    systemStyles: Oe({
      m: t,
      mx: n,
      my: a,
      mt: o,
      mb: i,
      ml: s,
      mr: c,
      p: f,
      px: l,
      py: u,
      pt: _,
      pb: v,
      pl: h,
      pr: g,
      bg: b,
      c: m,
      opacity: w,
      ff: k,
      fz: I,
      fw: j,
      lts: P,
      ta: y,
      lh: q,
      fs: pr,
      tt: Ve,
      td: Fe,
      w: He,
      miw: De,
      maw: Le,
      h: Ue,
      mih: Be,
      mah: Xe,
      bgsz: Ye,
      bgp: qe,
      bgr: Ze,
      bga: Je,
      pos: Ke,
      top: Qe,
      left: rt,
      bottom: et,
      right: tt,
      inset: nt,
      display: at,
    }),
    rest: ot,
  };
}
function Yn(r, e) {
  const t = Object.keys(r)
    .filter((n) => n !== 'base')
    .sort(
      (n, a) =>
        er(A({ size: n, sizes: e.breakpoints })) -
        er(A({ size: a, sizes: e.breakpoints })),
    );
  return 'base' in r ? ['base', ...t] : t;
}
function qn({ value: r, theme: e, getValue: t, property: n }) {
  if (r == null) return;
  if (typeof r == 'object')
    return Yn(r, e).reduce((i, s) => {
      if (s === 'base' && r.base !== void 0) {
        const f = t(r.base, e);
        return Array.isArray(n)
          ? (n.forEach((l) => {
              i[l] = f;
            }),
            i)
          : ((i[n] = f), i);
      }
      const c = t(r[s], e);
      return Array.isArray(n)
        ? ((i[e.fn.largerThan(s)] = {}),
          n.forEach((f) => {
            i[e.fn.largerThan(s)][f] = c;
          }),
          i)
        : ((i[e.fn.largerThan(s)] = { [n]: c }), i);
    }, {});
  const a = t(r, e);
  return Array.isArray(n)
    ? n.reduce((o, i) => ((o[i] = a), o), {})
    : { [n]: a };
}
function Zn(r, e) {
  return r === 'dimmed'
    ? e.colorScheme === 'dark'
      ? e.colors.dark[2]
      : e.colors.gray[6]
    : e.fn.variant({ variant: 'filled', color: r, primaryFallback: !1 })
        .background;
}
function Jn(r) {
  return W(r);
}
function Kn(r) {
  return r;
}
function Qn(r, e) {
  return A({ size: r, sizes: e.fontSizes });
}
const ra = ['-xs', '-sm', '-md', '-lg', '-xl'];
function ea(r, e) {
  return ra.includes(r)
    ? `calc(${A({ size: r.replace('-', ''), sizes: e.spacing })} * -1)`
    : A({ size: r, sizes: e.spacing });
}
const ta = { identity: Kn, color: Zn, size: Jn, fontSize: Qn, spacing: ea },
  na = {
    m: { type: 'spacing', property: 'margin' },
    mt: { type: 'spacing', property: 'marginTop' },
    mb: { type: 'spacing', property: 'marginBottom' },
    ml: { type: 'spacing', property: 'marginLeft' },
    mr: { type: 'spacing', property: 'marginRight' },
    mx: { type: 'spacing', property: ['marginRight', 'marginLeft'] },
    my: { type: 'spacing', property: ['marginTop', 'marginBottom'] },
    p: { type: 'spacing', property: 'padding' },
    pt: { type: 'spacing', property: 'paddingTop' },
    pb: { type: 'spacing', property: 'paddingBottom' },
    pl: { type: 'spacing', property: 'paddingLeft' },
    pr: { type: 'spacing', property: 'paddingRight' },
    px: { type: 'spacing', property: ['paddingRight', 'paddingLeft'] },
    py: { type: 'spacing', property: ['paddingTop', 'paddingBottom'] },
    bg: { type: 'color', property: 'background' },
    c: { type: 'color', property: 'color' },
    opacity: { type: 'identity', property: 'opacity' },
    ff: { type: 'identity', property: 'fontFamily' },
    fz: { type: 'fontSize', property: 'fontSize' },
    fw: { type: 'identity', property: 'fontWeight' },
    lts: { type: 'size', property: 'letterSpacing' },
    ta: { type: 'identity', property: 'textAlign' },
    lh: { type: 'identity', property: 'lineHeight' },
    fs: { type: 'identity', property: 'fontStyle' },
    tt: { type: 'identity', property: 'textTransform' },
    td: { type: 'identity', property: 'textDecoration' },
    w: { type: 'spacing', property: 'width' },
    miw: { type: 'spacing', property: 'minWidth' },
    maw: { type: 'spacing', property: 'maxWidth' },
    h: { type: 'spacing', property: 'height' },
    mih: { type: 'spacing', property: 'minHeight' },
    mah: { type: 'spacing', property: 'maxHeight' },
    bgsz: { type: 'size', property: 'backgroundSize' },
    bgp: { type: 'identity', property: 'backgroundPosition' },
    bgr: { type: 'identity', property: 'backgroundRepeat' },
    bga: { type: 'identity', property: 'backgroundAttachment' },
    pos: { type: 'identity', property: 'position' },
    top: { type: 'identity', property: 'top' },
    left: { type: 'size', property: 'left' },
    bottom: { type: 'size', property: 'bottom' },
    right: { type: 'size', property: 'right' },
    inset: { type: 'size', property: 'inset' },
    display: { type: 'identity', property: 'display' },
  };
var aa = Object.defineProperty,
  qr = Object.getOwnPropertySymbols,
  oa = Object.prototype.hasOwnProperty,
  ia = Object.prototype.propertyIsEnumerable,
  Zr = (r, e, t) =>
    e in r
      ? aa(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Jr = (r, e) => {
    for (var t in e || (e = {})) oa.call(e, t) && Zr(r, t, e[t]);
    if (qr) for (var t of qr(e)) ia.call(e, t) && Zr(r, t, e[t]);
    return r;
  };
function Kr(r, e, t = na) {
  return Object.keys(t)
    .reduce(
      (a, o) => (
        o in r &&
          r[o] !== void 0 &&
          a.push(
            qn({
              value: r[o],
              getValue: ta[t[o].type],
              property: t[o].property,
              theme: e,
            }),
          ),
        a
      ),
      [],
    )
    .reduce(
      (a, o) => (
        Object.keys(o).forEach((i) => {
          typeof o[i] == 'object' && o[i] !== null && i in a
            ? (a[i] = Jr(Jr({}, a[i]), o[i]))
            : (a[i] = o[i]);
        }),
        a
      ),
      {},
    );
}
function Qr(r, e) {
  return typeof r == 'function' ? r(e) : r;
}
function sa(r, e, t) {
  const n = dr(),
    { css: a, cx: o } = Pe();
  return Array.isArray(r)
    ? o(
        t,
        a(Kr(e, n)),
        r.map((i) => a(Qr(i, n))),
      )
    : o(t, a(Qr(r, n)), a(Kr(e, n)));
}
var ca = Object.defineProperty,
  nr = Object.getOwnPropertySymbols,
  Ce = Object.prototype.hasOwnProperty,
  ke = Object.prototype.propertyIsEnumerable,
  re = (r, e, t) =>
    e in r
      ? ca(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  fa = (r, e) => {
    for (var t in e || (e = {})) Ce.call(e, t) && re(r, t, e[t]);
    if (nr) for (var t of nr(e)) ke.call(e, t) && re(r, t, e[t]);
    return r;
  },
  la = (r, e) => {
    var t = {};
    for (var n in r) Ce.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && nr)
      for (var n of nr(r)) e.indexOf(n) < 0 && ke.call(r, n) && (t[n] = r[n]);
    return t;
  };
const Ee = R.forwardRef((r, e) => {
  var t = r,
    { className: n, component: a, style: o, sx: i } = t,
    s = la(t, ['className', 'component', 'style', 'sx']);
  const { systemStyles: c, rest: f } = Xn(s),
    l = a || 'div';
  return cr.createElement(
    l,
    fa({ ref: e, className: sa(i, c, n), style: o }, f),
  );
});
Ee.displayName = '@mantine/core/Box';
const Er = Ee;
var ua = Object.defineProperty,
  da = Object.defineProperties,
  pa = Object.getOwnPropertyDescriptors,
  ee = Object.getOwnPropertySymbols,
  ga = Object.prototype.hasOwnProperty,
  ya = Object.prototype.propertyIsEnumerable,
  te = (r, e, t) =>
    e in r
      ? ua(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  ne = (r, e) => {
    for (var t in e || (e = {})) ga.call(e, t) && te(r, t, e[t]);
    if (ee) for (var t of ee(e)) ya.call(e, t) && te(r, t, e[t]);
    return r;
  },
  ma = (r, e) => da(r, pa(e)),
  ba = kr((r) => ({
    root: ma(ne(ne({}, r.fn.focusStyles()), r.fn.fontStyles()), {
      cursor: 'pointer',
      border: 0,
      padding: 0,
      appearance: 'none',
      fontSize: r.fontSizes.md,
      backgroundColor: 'transparent',
      textAlign: 'left',
      color: r.colorScheme === 'dark' ? r.colors.dark[0] : r.black,
      textDecoration: 'none',
      boxSizing: 'border-box',
    }),
  }));
const ha = ba;
var va = Object.defineProperty,
  ar = Object.getOwnPropertySymbols,
  Re = Object.prototype.hasOwnProperty,
  je = Object.prototype.propertyIsEnumerable,
  ae = (r, e, t) =>
    e in r
      ? va(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  _a = (r, e) => {
    for (var t in e || (e = {})) Re.call(e, t) && ae(r, t, e[t]);
    if (ar) for (var t of ar(e)) je.call(e, t) && ae(r, t, e[t]);
    return r;
  },
  Sa = (r, e) => {
    var t = {};
    for (var n in r) Re.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && ar)
      for (var n of ar(r)) e.indexOf(n) < 0 && je.call(r, n) && (t[n] = r[n]);
    return t;
  };
const Ae = R.forwardRef((r, e) => {
  const t = Cr('UnstyledButton', {}, r),
    { className: n, component: a = 'button', unstyled: o, variant: i } = t,
    s = Sa(t, ['className', 'component', 'unstyled', 'variant']),
    { classes: c, cx: f } = ha(null, {
      name: 'UnstyledButton',
      unstyled: o,
      variant: i,
    });
  return cr.createElement(
    Er,
    _a(
      {
        component: a,
        ref: e,
        className: f(c.root, n),
        type: a === 'button' ? 'button' : void 0,
      },
      s,
    ),
  );
});
Ae.displayName = '@mantine/core/UnstyledButton';
const ao = Ae;
var wa = Object.defineProperty,
  Oa = Object.defineProperties,
  $a = Object.getOwnPropertyDescriptors,
  oe = Object.getOwnPropertySymbols,
  xa = Object.prototype.hasOwnProperty,
  Pa = Object.prototype.propertyIsEnumerable,
  ie = (r, e, t) =>
    e in r
      ? wa(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  J = (r, e) => {
    for (var t in e || (e = {})) xa.call(e, t) && ie(r, t, e[t]);
    if (oe) for (var t of oe(e)) Pa.call(e, t) && ie(r, t, e[t]);
    return r;
  },
  Ca = (r, e) => Oa(r, $a(e));
function ka({ underline: r, strikethrough: e }) {
  const t = [];
  return (
    r && t.push('underline'),
    e && t.push('line-through'),
    t.length > 0 ? t.join(' ') : 'none'
  );
}
function Ea({ theme: r, color: e }) {
  return e === 'dimmed'
    ? r.fn.dimmed()
    : typeof e == 'string' && (e in r.colors || e.split('.')[0] in r.colors)
    ? r.fn.variant({ variant: 'filled', color: e }).background
    : e || 'inherit';
}
function Ra(r) {
  return typeof r == 'number'
    ? {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: r,
        WebkitBoxOrient: 'vertical',
      }
    : null;
}
function ja({ theme: r, truncate: e }) {
  return e === 'start'
    ? {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        direction: r.dir === 'ltr' ? 'rtl' : 'ltr',
        textAlign: r.dir === 'ltr' ? 'right' : 'left',
      }
    : e
    ? { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
    : null;
}
var Aa = kr(
  (
    r,
    {
      color: e,
      lineClamp: t,
      truncate: n,
      inline: a,
      inherit: o,
      underline: i,
      gradient: s,
      weight: c,
      transform: f,
      align: l,
      strikethrough: u,
      italic: _,
    },
    { size: v },
  ) => {
    const h = r.fn.variant({ variant: 'gradient', gradient: s });
    return {
      root: Ca(
        J(
          J(J(J({}, r.fn.fontStyles()), r.fn.focusStyles()), Ra(t)),
          ja({ theme: r, truncate: n }),
        ),
        {
          color: Ea({ color: e, theme: r }),
          fontFamily: o ? 'inherit' : r.fontFamily,
          fontSize:
            o || v === void 0 ? 'inherit' : A({ size: v, sizes: r.fontSizes }),
          lineHeight: o ? 'inherit' : a ? 1 : r.lineHeight,
          textDecoration: ka({ underline: i, strikethrough: u }),
          WebkitTapHighlightColor: 'transparent',
          fontWeight: o ? 'inherit' : c,
          textTransform: f,
          textAlign: l,
          fontStyle: _ ? 'italic' : void 0,
        },
      ),
      gradient: {
        backgroundImage: h.background,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    };
  },
);
const Ta = Aa;
var za = Object.defineProperty,
  or = Object.getOwnPropertySymbols,
  Te = Object.prototype.hasOwnProperty,
  ze = Object.prototype.propertyIsEnumerable,
  se = (r, e, t) =>
    e in r
      ? za(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Na = (r, e) => {
    for (var t in e || (e = {})) Te.call(e, t) && se(r, t, e[t]);
    if (or) for (var t of or(e)) ze.call(e, t) && se(r, t, e[t]);
    return r;
  },
  Ia = (r, e) => {
    var t = {};
    for (var n in r) Te.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && or)
      for (var n of or(r)) e.indexOf(n) < 0 && ze.call(r, n) && (t[n] = r[n]);
    return t;
  };
const Wa = { variant: 'text' },
  Ne = R.forwardRef((r, e) => {
    const t = Cr('Text', Wa, r),
      {
        className: n,
        size: a,
        weight: o,
        transform: i,
        color: s,
        align: c,
        variant: f,
        lineClamp: l,
        truncate: u,
        gradient: _,
        inline: v,
        inherit: h,
        underline: g,
        strikethrough: b,
        italic: m,
        classNames: w,
        styles: k,
        unstyled: I,
        span: j,
        __staticSelector: P,
      } = t,
      y = Ia(t, [
        'className',
        'size',
        'weight',
        'transform',
        'color',
        'align',
        'variant',
        'lineClamp',
        'truncate',
        'gradient',
        'inline',
        'inherit',
        'underline',
        'strikethrough',
        'italic',
        'classNames',
        'styles',
        'unstyled',
        'span',
        '__staticSelector',
      ]),
      { classes: q, cx: pr } = Ta(
        {
          color: s,
          lineClamp: l,
          truncate: u,
          inline: v,
          inherit: h,
          underline: g,
          strikethrough: b,
          italic: m,
          weight: o,
          transform: i,
          align: c,
          gradient: _,
        },
        { unstyled: I, name: P || 'Text', variant: f, size: a },
      );
    return cr.createElement(
      Er,
      Na(
        {
          ref: e,
          className: pr(q.root, { [q.gradient]: f === 'gradient' }, n),
          component: j ? 'span' : 'div',
        },
        y,
      ),
    );
  });
Ne.displayName = '@mantine/core/Text';
const oo = Ne;
function Ma(r) {
  return R.Children.toArray(r).filter(Boolean);
}
const Ga = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
  apart: 'space-between',
};
var Va = kr(
  (r, { spacing: e, position: t, noWrap: n, grow: a, align: o, count: i }) => ({
    root: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      alignItems: o || 'center',
      flexWrap: n ? 'nowrap' : 'wrap',
      justifyContent: Ga[t],
      gap: A({ size: e, sizes: r.spacing }),
      '& > *': {
        boxSizing: 'border-box',
        maxWidth: a
          ? `calc(${100 / i}% - (${W(A({ size: e, sizes: r.spacing }))} - ${A({
              size: e,
              sizes: r.spacing,
            })} / ${i}))`
          : void 0,
        flexGrow: a ? 1 : 0,
      },
    },
  }),
);
const Fa = Va;
var Ha = Object.defineProperty,
  ir = Object.getOwnPropertySymbols,
  Ie = Object.prototype.hasOwnProperty,
  We = Object.prototype.propertyIsEnumerable,
  ce = (r, e, t) =>
    e in r
      ? Ha(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Da = (r, e) => {
    for (var t in e || (e = {})) Ie.call(e, t) && ce(r, t, e[t]);
    if (ir) for (var t of ir(e)) We.call(e, t) && ce(r, t, e[t]);
    return r;
  },
  La = (r, e) => {
    var t = {};
    for (var n in r) Ie.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && ir)
      for (var n of ir(r)) e.indexOf(n) < 0 && We.call(r, n) && (t[n] = r[n]);
    return t;
  };
const Ua = { position: 'left', spacing: 'md' },
  Ba = R.forwardRef((r, e) => {
    const t = Cr('Group', Ua, r),
      {
        className: n,
        position: a,
        align: o,
        children: i,
        noWrap: s,
        grow: c,
        spacing: f,
        unstyled: l,
        variant: u,
      } = t,
      _ = La(t, [
        'className',
        'position',
        'align',
        'children',
        'noWrap',
        'grow',
        'spacing',
        'unstyled',
        'variant',
      ]),
      v = Ma(i),
      { classes: h, cx: g } = Fa(
        {
          align: o,
          grow: c,
          noWrap: s,
          spacing: f,
          position: a,
          count: v.length,
        },
        { unstyled: l, name: 'Group', variant: u },
      );
    return cr.createElement(Er, Da({ className: g(h.root, n), ref: e }, _), v);
  });
Ba.displayName = '@mantine/core/Group';
var Xa = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
  Ya = Object.defineProperty,
  qa = Object.defineProperties,
  Za = Object.getOwnPropertyDescriptors,
  sr = Object.getOwnPropertySymbols,
  Me = Object.prototype.hasOwnProperty,
  Ge = Object.prototype.propertyIsEnumerable,
  fe = (r, e, t) =>
    e in r
      ? Ya(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  le = (r, e) => {
    for (var t in e || (e = {})) Me.call(e, t) && fe(r, t, e[t]);
    if (sr) for (var t of sr(e)) Ge.call(e, t) && fe(r, t, e[t]);
    return r;
  },
  Ja = (r, e) => qa(r, Za(e)),
  Ka = (r, e) => {
    var t = {};
    for (var n in r) Me.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && sr)
      for (var n of sr(r)) e.indexOf(n) < 0 && Ge.call(r, n) && (t[n] = r[n]);
    return t;
  },
  io = (r, e, t) => {
    const n = R.forwardRef((a, o) => {
      var i = a,
        {
          color: s = 'currentColor',
          size: c = 24,
          stroke: f = 2,
          children: l,
        } = i,
        u = Ka(i, ['color', 'size', 'stroke', 'children']);
      return R.createElement(
        'svg',
        le(
          Ja(le({ ref: o }, Xa), {
            width: c,
            height: c,
            stroke: s,
            strokeWidth: f,
            className: `tabler-icon tabler-icon-${r}`,
          }),
          u,
        ),
        [...t.map(([_, v]) => R.createElement(_, v)), ...(l || [])],
      );
    });
    return (
      (n.propTypes = {
        color: M.string,
        size: M.oneOfType([M.string, M.number]),
        stroke: M.oneOfType([M.string, M.number]),
      }),
      (n.displayName = `${e}`),
      n
    );
  };
export {
  Er as B,
  Ba as G,
  oo as T,
  ao as U,
  io as a,
  no as b,
  kr as c,
  dr as d,
  A as g,
  Cr as u,
};
//# sourceMappingURL=createReactComponent-cf2d8ce1.js.map
