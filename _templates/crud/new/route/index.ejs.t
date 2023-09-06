---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/route/index.ts
---

import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';
import { <%= h.inflection.camelize(name, true) %>Loader } from '../loader';

export const <%= h.inflection.camelize(name, true) %>Route: RouteObject[] = [
  {
    path: pathRouter.<%= h.inflection.camelize(name) %>Page,
    index: true,
    lazy: () => import('../containers/<%=name%>Page.tsx'),
    loader: <%= h.inflection.camelize(name, true) %>Loader,
  },
];
