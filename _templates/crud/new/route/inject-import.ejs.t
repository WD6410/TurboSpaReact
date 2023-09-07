---
inject: true
to: src/app/router/auth.tsx
before: "';"
skip_if: <%= h.inflection.camelize(name, true) %>Route
---
import { <%= h.inflection.camelize(name, true) %>Route } from 'features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/route';
