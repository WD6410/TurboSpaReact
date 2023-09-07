---
inject: true
to: src/shared/config/constants.ts
before: "// endpoint_api"
skip_if: <%= h.inflection.camelize(name, true) %>
sh: npx prettier --write src/shared/config/constants.ts
---
<%= h.inflection.camelize(name, true) %>: '/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>',
