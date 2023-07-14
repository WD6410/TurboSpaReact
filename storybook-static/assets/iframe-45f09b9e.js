import '../sb-preview/runtime.js';
(function () {
  const _ = document.createElement('link').relList;
  if (_ && _.supports && _.supports('modulepreload')) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) c(t);
  new MutationObserver((t) => {
    for (const e of t)
      if (e.type === 'childList')
        for (const o of e.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && c(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(t) {
    const e = {};
    return (
      t.integrity && (e.integrity = t.integrity),
      t.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === 'use-credentials'
        ? (e.credentials = 'include')
        : t.crossOrigin === 'anonymous'
        ? (e.credentials = 'omit')
        : (e.credentials = 'same-origin'),
      e
    );
  }
  function c(t) {
    if (t.ep) return;
    t.ep = !0;
    const e = s(t);
    fetch(t.href, e);
  }
})();
const p = 'modulepreload',
  f = function (n, _) {
    return new URL(n, _).href;
  },
  O = {},
  r = function (_, s, c) {
    if (!s || s.length === 0) return _();
    const t = document.getElementsByTagName('link');
    return Promise.all(
      s.map((e) => {
        if (((e = f(e, c)), e in O)) return;
        O[e] = !0;
        const o = e.endsWith('.css'),
          E = o ? '[rel="stylesheet"]' : '';
        if (!!c)
          for (let a = t.length - 1; a >= 0; a--) {
            const l = t[a];
            if (l.href === e && (!o || l.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${e}"]${E}`)) return;
        const i = document.createElement('link');
        if (
          ((i.rel = o ? 'stylesheet' : p),
          o || ((i.as = 'script'), (i.crossOrigin = '')),
          (i.href = e),
          document.head.appendChild(i),
          o)
        )
          return new Promise((a, l) => {
            i.addEventListener('load', a),
              i.addEventListener('error', () =>
                l(new Error(`Unable to preload CSS for ${e}`)),
              );
          });
      }),
    )
      .then(() => _())
      .catch((e) => {
        const o = new Event('vite:preloadError', { cancelable: !0 });
        if (((o.payload = e), window.dispatchEvent(o), !o.defaultPrevented))
          throw e;
      });
  },
  { createChannel: R } = __STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,
  { createChannel: P } = __STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,
  { addons: m } = __STORYBOOK_MODULE_PREVIEW_API__,
  u = R({ page: 'preview' });
m.setChannel(u);
window.__STORYBOOK_ADDONS_CHANNEL__ = u;
if (window.CONFIG_TYPE === 'DEVELOPMENT') {
  const n = P({});
  m.setServerChannel(n), (window.__STORYBOOK_SERVER_CHANNEL__ = n);
}
const T = {
  './src/stories/Introduction.mdx': async () =>
    r(
      () => import('./Introduction-6567af0b.js'),
      [
        './Introduction-6567af0b.js',
        './jsx-runtime-5926aa06.js',
        './index-ebeaab24.js',
        './index-ab00f926.js',
        './index-d475d2ea.js',
        './index-073301bc.js',
        './index-d37d4223.js',
        './index-356e4a49.js',
        './index-bda0bad7.js',
      ],
      import.meta.url,
    ),
  './src/shared/components/Logo/Logo.stories.ts': async () =>
    r(
      () => import('./Logo.stories-d30feee6.js'),
      [
        './Logo.stories-d30feee6.js',
        './jsx-runtime-5926aa06.js',
        './index-ebeaab24.js',
        './rem-770711ac.js',
        './Logo.stories-a07d9641.css',
      ],
      import.meta.url,
    ),
  './src/shared/components/MainLink/MainLink.stories.ts': async () =>
    r(
      () => import('./MainLink.stories-f209d563.js'),
      [
        './MainLink.stories-f209d563.js',
        './jsx-runtime-5926aa06.js',
        './index-ebeaab24.js',
        './rem-770711ac.js',
        './createReactComponent-cf2d8ce1.js',
        './index-aff217c3.js',
        './MainLink.stories-c0f06e05.css',
      ],
      import.meta.url,
    ),
  './src/shared/components/Seo/Seo.stories.ts': async () =>
    r(
      () => import('./Seo.stories-5e3d882e.js'),
      [
        './Seo.stories-5e3d882e.js',
        './jsx-runtime-5926aa06.js',
        './index-ebeaab24.js',
        './index.module-a6cfe85d.js',
        './index-aff217c3.js',
      ],
      import.meta.url,
    ),
  './src/shared/components/User/User.stories.ts': async () =>
    r(
      () => import('./User.stories-5993e240.js'),
      [
        './User.stories-5993e240.js',
        './jsx-runtime-5926aa06.js',
        './index-ebeaab24.js',
        './rem-770711ac.js',
        './createReactComponent-cf2d8ce1.js',
        './index-aff217c3.js',
        './User.stories-69f89a9b.css',
      ],
      import.meta.url,
    ),
};
async function d(n) {
  return T[n]();
}
d.__docgenInfo = { description: '', methods: [], displayName: 'importFn' };
const {
    composeConfigs: L,
    PreviewWeb: w,
    ClientApi: S,
  } = __STORYBOOK_MODULE_PREVIEW_API__,
  h = async () => {
    const n = await Promise.all([
      r(
        () => import('./config-01838d7a.js'),
        [
          './config-01838d7a.js',
          './index-d475d2ea.js',
          './index-ebeaab24.js',
          './react-18-8ac2d3a8.js',
          './index-073301bc.js',
          './index-aff217c3.js',
          './index-356e4a49.js',
        ],
        import.meta.url,
      ),
      r(
        () => import('./preview-5ef354f3.js'),
        ['./preview-5ef354f3.js', './index-d475d2ea.js', './index-d37d4223.js'],
        import.meta.url,
      ),
      r(() => import('./preview-4e0e58ec.js'), [], import.meta.url),
      r(() => import('./preview-a60aa466.js'), [], import.meta.url),
      r(
        () => import('./preview-770cc08b.js'),
        ['./preview-770cc08b.js', './index-d475d2ea.js', './index-356e4a49.js'],
        import.meta.url,
      ),
      r(
        () => import('./preview-2cd4e1a1.js'),
        ['./preview-2cd4e1a1.js', './index-d475d2ea.js'],
        import.meta.url,
      ),
      r(
        () => import('./preview-d8c963a4.js'),
        ['./preview-d8c963a4.js', './index-d475d2ea.js', './index-356e4a49.js'],
        import.meta.url,
      ),
      r(
        () => import('./preview-b1164a2e.js'),
        ['./preview-b1164a2e.js', './index-d475d2ea.js'],
        import.meta.url,
      ),
      r(
        () => import('./preview-89cf8473.js'),
        [
          './preview-89cf8473.js',
          './jsx-runtime-5926aa06.js',
          './index-ebeaab24.js',
          './index.module-a6cfe85d.js',
          './index-aff217c3.js',
        ],
        import.meta.url,
      ),
    ]);
    return L(n);
  };
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new w();
window.__STORYBOOK_STORY_STORE__ =
  window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ =
  window.__STORYBOOK_CLIENT_API__ ||
  new S({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({
  importFn: d,
  getProjectAnnotations: h,
});
export { r as _ };
//# sourceMappingURL=iframe-45f09b9e.js.map
