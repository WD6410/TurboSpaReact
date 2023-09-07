---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/model/index.ts
---
export * from './<%= h.inflection.camelize(name, true) %>Model.ts';