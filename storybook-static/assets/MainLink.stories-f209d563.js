import { j as o } from './jsx-runtime-5926aa06.js';
import { r as h, R as N } from './index-ebeaab24.js';
import { r as l, c as R } from './rem-770711ac.js';
import {
  c as E,
  g as C,
  u as D,
  B as $,
  a as d,
  U as T,
  G as q,
  T as A,
} from './createReactComponent-cf2d8ce1.js';
import './index-aff217c3.js';
var G = Object.defineProperty,
  L = Object.defineProperties,
  V = Object.getOwnPropertyDescriptors,
  m = Object.getOwnPropertySymbols,
  B = Object.prototype.hasOwnProperty,
  F = Object.prototype.propertyIsEnumerable,
  u = (r, e, a) =>
    e in r
      ? G(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (r[e] = a),
  v = (r, e) => {
    for (var a in e || (e = {})) B.call(e, a) && u(r, a, e[a]);
    if (m) for (var a of m(e)) F.call(e, a) && u(r, a, e[a]);
    return r;
  },
  H = (r, e) => L(r, V(e));
const U = { xs: l(16), sm: l(20), md: l(26), lg: l(32), xl: l(40) },
  W = ['filled', 'light', 'gradient', 'outline', 'default'];
function J({ theme: r, variant: e, color: a, gradient: s }) {
  if (!W.includes(e)) return null;
  const t = r.fn.variant({
    variant: e,
    color: a || r.primaryColor,
    gradient: s,
    primaryFallback: !1,
  });
  return {
    backgroundColor: t.background,
    color: t.color,
    backgroundImage: e === 'gradient' ? t.background : void 0,
    border: `${l(e === 'gradient' ? 0 : 1)} solid ${t.border}`,
  };
}
var K = E(
  (r, { color: e, radius: a, gradient: s }, { variant: t, size: p }) => {
    const n = C({ size: p, sizes: U });
    return {
      root: v(
        H(v({}, r.fn.fontStyles()), {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
          width: n,
          height: n,
          minWidth: n,
          minHeight: n,
          borderRadius: r.fn.radius(a),
        }),
        J({ theme: r, variant: t, gradient: s, color: e }),
      ),
    };
  },
);
const Q = K;
var X = Object.defineProperty,
  c = Object.getOwnPropertySymbols,
  b = Object.prototype.hasOwnProperty,
  k = Object.prototype.propertyIsEnumerable,
  f = (r, e, a) =>
    e in r
      ? X(r, e, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (r[e] = a),
  Y = (r, e) => {
    for (var a in e || (e = {})) b.call(e, a) && f(r, a, e[a]);
    if (c) for (var a of c(e)) k.call(e, a) && f(r, a, e[a]);
    return r;
  },
  Z = (r, e) => {
    var a = {};
    for (var s in r) b.call(r, s) && e.indexOf(s) < 0 && (a[s] = r[s]);
    if (r != null && c)
      for (var s of c(r)) e.indexOf(s) < 0 && k.call(r, s) && (a[s] = r[s]);
    return a;
  };
const ee = { size: 'md', variant: 'filled' },
  x = h.forwardRef((r, e) => {
    const a = D('ThemeIcon', ee, r),
      {
        className: s,
        size: t,
        radius: p,
        variant: n,
        color: P,
        children: I,
        gradient: M,
        unstyled: j,
      } = a,
      w = Z(a, [
        'className',
        'size',
        'radius',
        'variant',
        'color',
        'children',
        'gradient',
        'unstyled',
      ]),
      { classes: S, cx: z } = Q(
        { variant: n, radius: p, color: P, gradient: M },
        { name: 'ThemeIcon', unstyled: j, variant: n, size: t },
      );
    return N.createElement($, Y({ className: z(S.root, s), ref: e }, w), I);
  });
x.displayName = '@mantine/core/ThemeIcon';
var re = d('alert-circle', 'IconAlertCircle', [
    ['path', { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0', key: 'svg-0' }],
    ['path', { d: 'M12 8v4', key: 'svg-1' }],
    ['path', { d: 'M12 16h.01', key: 'svg-2' }],
  ]),
  ae = d('database', 'IconDatabase', [
    ['path', { d: 'M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0', key: 'svg-0' }],
    ['path', { d: 'M4 6v6a8 3 0 0 0 16 0v-6', key: 'svg-1' }],
    ['path', { d: 'M4 12v6a8 3 0 0 0 16 0v-6', key: 'svg-2' }],
  ]),
  se = d('git-pull-request', 'IconGitPullRequest', [
    ['path', { d: 'M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0', key: 'svg-0' }],
    ['path', { d: 'M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0', key: 'svg-1' }],
    ['path', { d: 'M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0', key: 'svg-2' }],
    ['path', { d: 'M6 8l0 8', key: 'svg-3' }],
    ['path', { d: 'M11 6h5a2 2 0 0 1 2 2v8', key: 'svg-4' }],
    ['path', { d: 'M14 9l-3 -3l3 -3', key: 'svg-5' }],
  ]),
  oe = d('messages', 'IconMessages', [
    [
      'path',
      {
        d: 'M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10',
        key: 'svg-0',
      },
    ],
    [
      'path',
      {
        d: 'M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2',
        key: 'svg-1',
      },
    ],
  ]);
const te = 'd',
  ne = { row: te, 'main-link': 'e' },
  le = R(),
  ie = [
    {
      icon: o.jsx(se, { size: '1rem' }),
      color: 'blue',
      label: 'Pull Requests',
    },
    { icon: o.jsx(re, { size: '1rem' }), color: 'teal', label: 'Open Issues' },
    {
      icon: o.jsx(oe, { size: '1rem' }),
      color: 'violet',
      label: 'Discussions',
    },
    { icon: o.jsx(ae, { size: '1rem' }), color: 'grape', label: 'Databases' },
  ];
function ce({ icon: r, color: e, label: a }) {
  return o.jsx('div', {
    className: le(ne['main-link']),
    children: o.jsx(T, {
      sx: (s) => ({
        display: 'block',
        width: '100%',
        padding: s.spacing.xs,
        borderRadius: s.radius.sm,
        color: s.colorScheme === 'dark' ? s.colors.dark[0] : s.black,
        '&:hover': {
          backgroundColor:
            s.colorScheme === 'dark' ? s.colors.dark[6] : s.colors.gray[0],
        },
      }),
      children: o.jsxs(q, {
        children: [
          o.jsx(x, { color: e, variant: 'light', children: r }),
          o.jsx(A, { size: 'sm', children: a }),
        ],
      }),
    }),
  });
}
function O() {
  const r = ie.map((e) => h.createElement(ce, { ...e, key: e.label }));
  return o.jsx('div', { children: r });
}
O.__docgenInfo = { description: '', methods: [], displayName: 'MainLink' };
const fe = { component: O, parameters: {} },
  i = {};
var g, y, _;
i.parameters = {
  ...i.parameters,
  docs: {
    ...((g = i.parameters) == null ? void 0 : g.docs),
    source: {
      originalSource: '{}',
      ...((_ = (y = i.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : _.source),
    },
  },
};
const ge = ['MainLink', 'Default'];
export {
  i as Default,
  O as MainLink,
  ge as __namedExportsOrder,
  fe as default,
};
//# sourceMappingURL=MainLink.stories-f209d563.js.map
