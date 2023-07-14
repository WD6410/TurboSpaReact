import { j as e } from './jsx-runtime-5926aa06.js';
import { W as c } from './index.module-a6cfe85d.js';
import './index-ebeaab24.js';
import './index-aff217c3.js';
function i({ title: r, description: o, type: a }) {
  return e.jsxs(c, {
    children: [
      e.jsxs('title', { children: [r, ' | Turbo'] }),
      e.jsx('meta', { name: 'description', content: o }),
      e.jsx('meta', { property: 'og:type', content: a }),
      e.jsx('meta', { property: 'og:title', content: r }),
      e.jsx('meta', { property: 'og:description', content: o }),
    ],
  });
}
i.__docgenInfo = {
  description: '',
  methods: [],
  displayName: 'Seo',
  props: {
    title: { required: !0, tsType: { name: 'string' }, description: '' },
    description: { required: !0, tsType: { name: 'string' }, description: '' },
    type: { required: !0, tsType: { name: 'string' }, description: '' },
  },
};
const y = { component: i, parameters: {} },
  t = {
    args: {
      title: 'Turbo React App',
      type: 'demo',
      description: 'Template code react for common project',
    },
  };
var n, p, s;
t.parameters = {
  ...t.parameters,
  docs: {
    ...((n = t.parameters) == null ? void 0 : n.docs),
    source: {
      originalSource: `{
  args: {
    title: 'Turbo React App',
    type: 'demo',
    description: 'Template code react for common project'
  }
}`,
      ...((s = (p = t.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : s.source),
    },
  },
};
const g = ['Seo', 'Default'];
export { t as Default, i as Seo, g as __namedExportsOrder, y as default };
//# sourceMappingURL=Seo.stories-5e3d882e.js.map
