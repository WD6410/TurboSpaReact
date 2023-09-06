---
inject: true
to: src/shared/config/constants.ts
before: "];"
skip_if: mock<%= h.inflection.camelize(name) %>
---
,mock<%= h.inflection.camelize(name) %>
