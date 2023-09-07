---
inject: true
to: src/shared/mock/index.ts
before: "';"
skip_if: mock<%= h.inflection.camelize(name) %>.ts
sh: npx prettier --write src/shared/mock/index.ts
---

import { mock<%= h.inflection.camelize(name) %> } from './mock<%= h.inflection.camelize(name) %>.ts';
