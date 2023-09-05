---
inject: true
to: src/app/router/auth.tsx
before: '];'
skip_if: ..<%= h.inflection.camelize(name, true) %>Route,
sh: yarn prettier
---

...<%= h.inflection.camelize(name, true) %>Route,