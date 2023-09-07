---
inject: true
to: src/shared/mock/index.ts
before: "// end_mock"
sh: npx prettier --write src/shared/mock/index.ts
---

mock<%= h.inflection.camelize(name) %>
