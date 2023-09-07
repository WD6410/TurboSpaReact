---
inject: true
to: src/shared/mock/index.ts
before: "';"
skip_if: mock<%= h.inflection.camelize(name) %>.ts
---

import { mock<%= h.inflection.camelize(name) %> } from './mock<%= h.inflection.camelize(name) %>.ts';
