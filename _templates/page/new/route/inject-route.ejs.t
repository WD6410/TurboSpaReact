---
inject: true
to: src/app/router/auth.tsx
before: '];'
skip_if: ..<%= h.inflection.camelize(name, true) %>Route,
sh: npx prettier --write src/app/router/auth.tsx
---

...<%= h.inflection.camelize(name, true) %>Route,