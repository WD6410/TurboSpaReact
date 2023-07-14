if (!self.define) {
  let s,
    e = {};
  const r = (r, a) => (
    (r = new URL(r + '.js', a).href),
    e[r] ||
      new Promise((e) => {
        if ('document' in self) {
          const s = document.createElement('script');
          (s.src = r), (s.onload = e), document.head.appendChild(s);
        } else (s = r), importScripts(r), e();
      }).then(() => {
        let s = e[r];
        if (!s) throw new Error(`Module ${r} didn’t register its module`);
        return s;
      })
  );
  self.define = (a, i) => {
    const n =
      s ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (e[n]) return;
    let l = {};
    const u = (s) => r(s, n),
      o = { module: { uri: n }, exports: l, require: u };
    e[n] = Promise.all(a.map((s) => o[s] || u(s))).then((s) => (i(...s), l));
  };
}
define(['./workbox-27b29e6f'], function (s) {
  'use strict';
  self.addEventListener('message', (s) => {
    s.data && 'SKIP_WAITING' === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: 'assets/code-brackets-9ef6443e.svg', revision: null },
        { url: 'assets/Color-3YIJY6X7-0ce68001.js', revision: null },
        { url: 'assets/colors-ac9401f3.svg', revision: null },
        { url: 'assets/comments-f15a6837.svg', revision: null },
        { url: 'assets/config-01838d7a.js', revision: null },
        { url: 'assets/createReactComponent-cf2d8ce1.js', revision: null },
        { url: 'assets/direction-94a9917f.svg', revision: null },
        { url: 'assets/DocsRenderer-EYKKDMVH-facf4274.js', revision: null },
        { url: 'assets/flow-275142c6.svg', revision: null },
        { url: 'assets/formatter-S4K5WUZV-565bc879.js', revision: null },
        {
          url: 'assets/GlobalScrollAreaStyles-XIHNDKUY-94a8dc03.js',
          revision: null,
        },
        { url: 'assets/iframe-45f09b9e.js', revision: null },
        { url: 'assets/index-073301bc.js', revision: null },
        { url: 'assets/index-356e4a49.js', revision: null },
        { url: 'assets/index-a99a88c4.js', revision: null },
        { url: 'assets/index-ab00f926.js', revision: null },
        { url: 'assets/index-aff217c3.js', revision: null },
        { url: 'assets/index-bda0bad7.js', revision: null },
        { url: 'assets/index-d37d4223.js', revision: null },
        { url: 'assets/index-d475d2ea.js', revision: null },
        { url: 'assets/index-ebeaab24.js', revision: null },
        { url: 'assets/index.module-a6cfe85d.js', revision: null },
        { url: 'assets/Introduction-6567af0b.js', revision: null },
        { url: 'assets/jsx-runtime-5926aa06.js', revision: null },
        { url: 'assets/Logo.stories-a07d9641.css', revision: null },
        { url: 'assets/Logo.stories-d30feee6.js', revision: null },
        { url: 'assets/MainLink.stories-c0f06e05.css', revision: null },
        { url: 'assets/MainLink.stories-f209d563.js', revision: null },
        {
          url: 'assets/OverlayScrollbars-VAV6LJAB-cba6c855.js',
          revision: null,
        },
        { url: 'assets/plugin-57148314.svg', revision: null },
        { url: 'assets/preview-2cd4e1a1.js', revision: null },
        { url: 'assets/preview-4e0e58ec.js', revision: null },
        { url: 'assets/preview-5ef354f3.js', revision: null },
        { url: 'assets/preview-770cc08b.js', revision: null },
        { url: 'assets/preview-89cf8473.js', revision: null },
        { url: 'assets/preview-a60aa466.js', revision: null },
        { url: 'assets/preview-b1164a2e.js', revision: null },
        { url: 'assets/preview-d8c963a4.js', revision: null },
        { url: 'assets/react-18-8ac2d3a8.js', revision: null },
        { url: 'assets/rem-770711ac.js', revision: null },
        { url: 'assets/repo-fb4ece47.svg', revision: null },
        { url: 'assets/Seo.stories-5e3d882e.js', revision: null },
        { url: 'assets/stackalt-2ad81543.svg', revision: null },
        {
          url: 'assets/syntaxhighlighter-QTQ2UBB4-e0e54d40.js',
          revision: null,
        },
        { url: 'assets/User.stories-5993e240.js', revision: null },
        { url: 'assets/User.stories-69f89a9b.css', revision: null },
        { url: 'assets/WithTooltip-FBT32F6Q-593b0205.js', revision: null },
        { url: 'favicon.svg', revision: '33a81ec79f71ae8d35841a9992daf96a' },
        { url: 'iframe.html', revision: 'b91050ae5a1f96ec39cd9c603ccc8a6b' },
        { url: 'index.html', revision: '214b11be1d06496dd83276d43e0b388d' },
        { url: 'registerSW.js', revision: '402b66900e731ca748771b6fc5e7a068' },
        {
          url: 'sb-addons/essentials-actions-2/manager-bundle.js',
          revision: 'd2fca05d478aa0ba6d3c0a47622a7cb9',
        },
        {
          url: 'sb-addons/essentials-backgrounds-3/manager-bundle.js',
          revision: '21af2d8441e248f96ce2baddac10c467',
        },
        {
          url: 'sb-addons/essentials-controls-1/manager-bundle.js',
          revision: 'd536a46728112f99eb21c5035d4efca4',
        },
        {
          url: 'sb-addons/essentials-measure-6/manager-bundle.js',
          revision: '5f052ee05a0d40f3de7b1c5bcb68c639',
        },
        {
          url: 'sb-addons/essentials-outline-7/manager-bundle.js',
          revision: '4f3c66ac97370d1527823ae192df1590',
        },
        {
          url: 'sb-addons/essentials-toolbars-5/manager-bundle.js',
          revision: '8ea3e95cf38c884d20901e30381e1efc',
        },
        {
          url: 'sb-addons/essentials-viewport-4/manager-bundle.js',
          revision: 'ae2a12f6c05f3c2a1a0edd6a13aa7f82',
        },
        {
          url: 'sb-addons/links-0/manager-bundle.js',
          revision: '0188915e8dfdda4d7ffa582cba50fc04',
        },
        {
          url: 'sb-common-assets/fonts.css',
          revision: '59f84fe6abac40231f124ea1797925e0',
        },
        {
          url: 'sb-manager/chunk-3FAXWWKG.js',
          revision: 'ff7a88f2b87f28bbbfcf51af9b28a29e',
        },
        {
          url: 'sb-manager/chunk-54KM6K5Z.js',
          revision: 'a346fa57a47a2ea6a453ad8e189e28c9',
        },
        {
          url: 'sb-manager/chunk-6XESPNK2.js',
          revision: '9f3020808c05e0773c37eff949b6b114',
        },
        {
          url: 'sb-manager/chunk-AS2AMEUR.js',
          revision: '78e8fd992a4427872fc776acbbce0491',
        },
        {
          url: 'sb-manager/chunk-F3MVQVF6.js',
          revision: '54583dda5f4467bb66dc3df68afc0a94',
        },
        {
          url: 'sb-manager/chunk-FENICTK6.js',
          revision: 'b7c009c43261c7e44de7fdac96b32c48',
        },
        {
          url: 'sb-manager/chunk-PUVLCKJJ.js',
          revision: '375b169ee7a292e1a987653ccf473b3b',
        },
        {
          url: 'sb-manager/chunk-QPL63VNK.js',
          revision: '09040d37200c8f3f98c25e3ffc471c51',
        },
        {
          url: 'sb-manager/formatter-S4K5WUZV-4LPR5OBX.js',
          revision: '8176dac8ed43321e71455403e07fcabb',
        },
        {
          url: 'sb-manager/globals.js',
          revision: '583f505fddbc3e205fa7edb1e785a4f1',
        },
        {
          url: 'sb-manager/GlobalScrollAreaStyles-XIHNDKUY-F4JIPIHL.js',
          revision: 'a96b71ce2df95d1ed055dad886f3ce2e',
        },
        {
          url: 'sb-manager/index.js',
          revision: '1f3f0140ef15e8ae4aaf1764d51259ae',
        },
        {
          url: 'sb-manager/OverlayScrollbars-VAV6LJAB-K3TMPSMY.js',
          revision: 'e84d3a5fc677854867eb4e27143857cb',
        },
        {
          url: 'sb-manager/runtime.js',
          revision: '8e5d0f9f7299571c43c7336a937220ce',
        },
        {
          url: 'sb-manager/syntaxhighlighter-QTQ2UBB4-F5YUFYAB.js',
          revision: '840448c9ab187a95c5046380b05d618f',
        },
        {
          url: 'sb-manager/WithTooltip-FBT32F6Q-7QJ37TCY.js',
          revision: '4984c9c8dd726110a28d894963054d8f',
        },
        {
          url: 'sb-preview/globals.js',
          revision: '8c39f8195ad20e278e4151f689720130',
        },
        {
          url: 'sb-preview/runtime.js',
          revision: 'a5c64ad56800c197f862df1b3bd893ab',
        },
        { url: 'vite.svg', revision: '8e3a10e157f75ada21ab742c022d5430' },
        {
          url: 'manifest.webmanifest',
          revision: '77f939de7e236164123b109a8d454877',
        },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      new s.NavigationRoute(s.createHandlerBoundToURL('index.html')),
    );
});
//# sourceMappingURL=sw.js.map
