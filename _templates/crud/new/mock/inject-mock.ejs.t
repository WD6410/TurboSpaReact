---
inject: true
to: src/shared/mock/index.ts
before: '];'
---

mock<%= h.inflection.camelize(name) %>
