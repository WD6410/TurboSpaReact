import { j as n } from './jsx-runtime-5926aa06.js';
import { r as s, c as lr } from './rem-770711ac.js';
import {
  c as B,
  g as f,
  u as H,
  B as h,
  b as ir,
  a as U,
  d as cr,
  U as pr,
  G as dr,
  T as j,
} from './createReactComponent-cf2d8ce1.js';
import { R as l, r as u } from './index-ebeaab24.js';
import './index-aff217c3.js';
var fr = Object.defineProperty,
  y = Object.getOwnPropertySymbols,
  Z = Object.prototype.hasOwnProperty,
  L = Object.prototype.propertyIsEnumerable,
  S = (e, r, t) =>
    r in e
      ? fr(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  E = (e, r) => {
    for (var t in r || (r = {})) Z.call(r, t) && S(e, t, r[t]);
    if (y) for (var t of y(r)) L.call(r, t) && S(e, t, r[t]);
    return e;
  },
  ur = (e, r) => {
    var t = {};
    for (var o in e) Z.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
    if (e != null && y)
      for (var o of y(e)) r.indexOf(o) < 0 && L.call(e, o) && (t[o] = e[o]);
    return t;
  };
function mr(e) {
  const r = e,
    { style: t } = r,
    o = ur(r, ['style']);
  return l.createElement(
    'svg',
    E(
      {
        viewBox: '0 0 15 15',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        style: E({ width: s(15), height: s(15) }, t),
      },
      o,
    ),
    l.createElement('path', {
      d: 'M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z',
      fill: 'currentColor',
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    }),
  );
}
var vr = Object.defineProperty,
  _r = Object.defineProperties,
  gr = Object.getOwnPropertyDescriptors,
  I = Object.getOwnPropertySymbols,
  hr = Object.prototype.hasOwnProperty,
  yr = Object.prototype.propertyIsEnumerable,
  N = (e, r, t) =>
    r in e
      ? vr(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  wr = (e, r) => {
    for (var t in r || (r = {})) hr.call(r, t) && N(e, t, r[t]);
    if (I) for (var t of I(r)) yr.call(r, t) && N(e, t, r[t]);
    return e;
  },
  Or = (e, r) => _r(e, gr(r));
const W = u.createContext(null);
function Pr({ spacing: e, children: r }) {
  return l.createElement(W.Provider, { value: { spacing: e } }, r);
}
function xr() {
  const e = u.useContext(W);
  return e
    ? Or(wr({}, e), { withinGroup: !0 })
    : { spacing: null, withinGroup: !1 };
}
var br = B((e, { spacing: r }) => ({
  root: { display: 'flex', paddingLeft: f({ size: r, sizes: e.spacing }) },
}));
const $r = br;
var Cr = Object.defineProperty,
  w = Object.getOwnPropertySymbols,
  F = Object.prototype.hasOwnProperty,
  q = Object.prototype.propertyIsEnumerable,
  A = (e, r, t) =>
    r in e
      ? Cr(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  jr = (e, r) => {
    for (var t in r || (r = {})) F.call(r, t) && A(e, t, r[t]);
    if (w) for (var t of w(r)) q.call(r, t) && A(e, t, r[t]);
    return e;
  },
  Sr = (e, r) => {
    var t = {};
    for (var o in e) F.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
    if (e != null && w)
      for (var o of w(e)) r.indexOf(o) < 0 && q.call(e, o) && (t[o] = e[o]);
    return t;
  };
const Er = {},
  X = u.forwardRef((e, r) => {
    const t = H('AvatarGroup', Er, e),
      {
        children: o,
        spacing: a = 'sm',
        unstyled: i,
        className: p,
        variant: c,
      } = t,
      d = Sr(t, ['children', 'spacing', 'unstyled', 'className', 'variant']),
      { classes: P, cx: x } = $r(
        { spacing: a },
        { name: 'AvatarGroup', unstyled: i, variant: c },
      );
    return l.createElement(
      Pr,
      { spacing: a },
      l.createElement(h, jr({ ref: r, className: x(P.root, p) }, d), o),
    );
  });
X.displayName = '@mantine/core/AvatarGroup';
var Ir = Object.defineProperty,
  Nr = Object.defineProperties,
  Ar = Object.getOwnPropertyDescriptors,
  R = Object.getOwnPropertySymbols,
  Rr = Object.prototype.hasOwnProperty,
  Gr = Object.prototype.propertyIsEnumerable,
  G = (e, r, t) =>
    r in e
      ? Ir(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  m = (e, r) => {
    for (var t in r || (r = {})) Rr.call(r, t) && G(e, t, r[t]);
    if (R) for (var t of R(r)) Gr.call(r, t) && G(e, t, r[t]);
    return e;
  },
  k = (e, r) => Nr(e, Ar(r));
const kr = ['filled', 'light', 'gradient', 'outline'],
  _ = { xs: s(16), sm: s(26), md: s(38), lg: s(56), xl: s(84) };
function Dr({ withinGroup: e, spacing: r, theme: t }) {
  return e
    ? {
        marginLeft: `calc(${f({ size: r, sizes: t.spacing })} * -1)`,
        backgroundColor: `${
          t.colorScheme === 'dark' ? t.colors.dark[7] : t.white
        }`,
        border: `${s(2)} solid ${
          t.colorScheme === 'dark' ? t.colors.dark[7] : t.white
        }`,
      }
    : null;
}
function zr({ theme: e, variant: r, color: t, gradient: o }) {
  const a = e.fn.variant({ variant: r, color: t, gradient: o });
  return kr.includes(r)
    ? {
        placeholder: {
          color: a.color,
          backgroundColor: a.background,
          backgroundImage: r === 'gradient' ? a.background : void 0,
          border: `${s(r === 'gradient' ? 0 : 1)} solid ${a.border}`,
        },
        placeholderIcon: { color: a.color },
      }
    : {};
}
var Mr = B(
  (
    e,
    { radius: r, withinGroup: t, spacing: o, color: a, gradient: i },
    { variant: p, size: c },
  ) => {
    const d = zr({ theme: e, color: a, gradient: i, variant: p });
    return {
      root: m(
        k(m({}, e.fn.focusStyles()), {
          WebkitTapHighlightColor: 'transparent',
          boxSizing: 'border-box',
          position: 'relative',
          display: 'block',
          userSelect: 'none',
          overflow: 'hidden',
          borderRadius: e.fn.radius(r),
          textDecoration: 'none',
          border: 0,
          backgroundColor: 'transparent',
          padding: 0,
          width: f({ size: c, sizes: _ }),
          minWidth: f({ size: c, sizes: _ }),
          height: f({ size: c, sizes: _ }),
        }),
        Dr({ withinGroup: t, spacing: o, theme: e }),
      ),
      image: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        display: 'block',
      },
      placeholder: m(
        k(m({}, e.fn.fontStyles()), {
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          userSelect: 'none',
          borderRadius: e.fn.radius(r),
          fontSize: `calc(${f({ size: c, sizes: _ })} / 2.5)`,
        }),
        d.placeholder,
      ),
      placeholderIcon: m({ width: '70%', height: '70%' }, d.placeholderIcon),
    };
  },
);
const Vr = Mr;
var Tr = Object.defineProperty,
  Br = Object.defineProperties,
  Hr = Object.getOwnPropertyDescriptors,
  O = Object.getOwnPropertySymbols,
  Y = Object.prototype.hasOwnProperty,
  J = Object.prototype.propertyIsEnumerable,
  D = (e, r, t) =>
    r in e
      ? Tr(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  z = (e, r) => {
    for (var t in r || (r = {})) Y.call(r, t) && D(e, t, r[t]);
    if (O) for (var t of O(r)) J.call(r, t) && D(e, t, r[t]);
    return e;
  },
  Ur = (e, r) => Br(e, Hr(r)),
  Zr = (e, r) => {
    var t = {};
    for (var o in e) Y.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
    if (e != null && O)
      for (var o of O(e)) r.indexOf(o) < 0 && J.call(e, o) && (t[o] = e[o]);
    return t;
  };
const Lr = { size: 'md', color: 'gray', variant: 'light' },
  $ = u.forwardRef((e, r) => {
    const t = H('Avatar', Lr, e),
      {
        className: o,
        size: a,
        src: i,
        alt: p,
        radius: c,
        children: d,
        color: P,
        variant: x,
        gradient: Q,
        classNames: rr,
        styles: er,
        imageProps: tr,
        unstyled: or,
      } = t,
      ar = Zr(t, [
        'className',
        'size',
        'src',
        'alt',
        'radius',
        'children',
        'color',
        'variant',
        'gradient',
        'classNames',
        'styles',
        'imageProps',
        'unstyled',
      ]),
      C = xr(),
      [sr, b] = u.useState(!i),
      { classes: v, cx: nr } = Vr(
        {
          color: P,
          radius: c,
          withinGroup: C.withinGroup,
          spacing: C.spacing,
          gradient: Q,
        },
        {
          classNames: rr,
          styles: er,
          unstyled: or,
          name: 'Avatar',
          variant: x,
          size: a,
        },
      );
    return (
      u.useEffect(() => {
        b(!i);
      }, [i]),
      l.createElement(
        h,
        z({ component: 'div', className: nr(v.root, o), ref: r }, ar),
        sr
          ? l.createElement(
              'div',
              { className: v.placeholder, title: p },
              d || l.createElement(mr, { className: v.placeholderIcon }),
            )
          : l.createElement(
              'img',
              Ur(z({}, tr), {
                className: v.image,
                src: i,
                alt: p,
                onError: () => b(!0),
              }),
            ),
      )
    );
  });
$.displayName = '@mantine/core/Avatar';
$.Group = X;
const Wr = ir($);
var Fr = U('chevron-left', 'IconChevronLeft', [
    ['path', { d: 'M15 6l-6 6l6 6', key: 'svg-0' }],
  ]),
  qr = U('chevron-right', 'IconChevronRight', [
    ['path', { d: 'M9 6l6 6l-6 6', key: 'svg-0' }],
  ]);
const Xr = '_',
  Yr = 'a',
  Jr = { row: Xr, user: Yr },
  Kr = lr();
function K(e) {
  const r = cr();
  return n.jsx('div', {
    className: Kr(Jr.user),
    children: n.jsx(h, {
      sx: {
        paddingTop: r.spacing.sm,
        borderTop: `${s(1)} solid ${
          r.colorScheme === 'dark' ? r.colors.dark[4] : r.colors.gray[2]
        }`,
      },
      children: n.jsx(pr, {
        sx: {
          display: 'block',
          width: '100%',
          padding: r.spacing.xs,
          borderRadius: r.radius.sm,
          color: r.colorScheme === 'dark' ? r.colors.dark[0] : r.black,
          '&:hover': {
            backgroundColor:
              r.colorScheme === 'dark' ? r.colors.dark[6] : r.colors.gray[0],
          },
        },
        children: n.jsxs(dr, {
          children: [
            n.jsx(Wr, {
              src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80',
              radius: 'xl',
            }),
            n.jsxs(h, {
              sx: { flex: 1 },
              children: [
                n.jsx(j, {
                  size: 'sm',
                  weight: 500,
                  children: 'Amy Horsefighter',
                }),
                n.jsx(j, {
                  color: 'dimmed',
                  size: 'xs',
                  children: 'ahorsefighter@gmail.com',
                }),
              ],
            }),
            r.dir === 'ltr'
              ? n.jsx(qr, { size: s(18) })
              : n.jsx(Fr, { size: s(18) }),
          ],
        }),
      }),
    }),
  });
}
K.__docgenInfo = { description: '', methods: [], displayName: 'User' };
const ae = { component: K, parameters: {} },
  g = {};
var M, V, T;
g.parameters = {
  ...g.parameters,
  docs: {
    ...((M = g.parameters) == null ? void 0 : M.docs),
    source: {
      originalSource: '{}',
      ...((T = (V = g.parameters) == null ? void 0 : V.docs) == null
        ? void 0
        : T.source),
    },
  },
};
const se = ['User', 'Default'];
export { g as Default, K as User, se as __namedExportsOrder, ae as default };
//# sourceMappingURL=User.stories-5993e240.js.map
