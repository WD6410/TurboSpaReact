---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/loader/<%= h.inflection.camelize(name, true) %>Loader.ts
---

import type { LoaderFunctionArgs } from 'react-router-dom';

export async function <%= h.inflection.camelize(name, true) %>Loader(_props: LoaderFunctionArgs) {
  return {};
}
