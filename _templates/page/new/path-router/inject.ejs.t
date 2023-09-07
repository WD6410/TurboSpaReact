---
inject: true
to: src/shared/config/pathRouter.ts
before: '}'
skip_if: <%= h.inflection.camelize(name) %>Page
sh: npx prettier --write src/shared/config/pathRouter.ts
---

<%= h.inflection.camelize(name) %>Page: '/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>',
