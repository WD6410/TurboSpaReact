---
inject: true
to: src/app/router/auth.tsx
before: "';"
skip_if: <%= h.inflection.camelize(name, true) %>Route
sh: npx prettier --write src/app/router/auth.tsx
---
import { <%= h.inflection.camelize(name, true) %>Route } from 'features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/route';
