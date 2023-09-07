---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/components/index.ts
sh: npx prettier --write src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/components/index.ts
---