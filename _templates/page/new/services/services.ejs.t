---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/services/<%= h.inflection.camelize(name, true) %>Service.ts
---

export const <%= h.inflection.camelize(name, true) %>Api = () => {
  return {};
}