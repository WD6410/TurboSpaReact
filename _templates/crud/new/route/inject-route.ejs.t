---
inject: true
to: src/app/router/auth.tsx
before: '];'
skip_if: ..<%= h.inflection.camelize(name, true) %>Route,
---

...<%= h.inflection.camelize(name, true) %>Route,
