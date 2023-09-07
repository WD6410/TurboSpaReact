---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/components/index.ts
---
export * from './Create<%= h.inflection.camelize(name) %>.tsx';
export * from './Detail<%= h.inflection.camelize(name) %>.tsx';
export * from './Update<%= h.inflection.camelize(name) %>.tsx';
export * from './Delete<%= h.inflection.camelize(name) %>.tsx';
