---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/loader/index.ts
sh: npx prettier --write src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/loader/index.ts
---
export * from './<%= h.inflection.camelize(name, true) %>Loader.ts';