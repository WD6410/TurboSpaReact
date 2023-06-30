---
to: src/shared/components/<%= name %>/<%= name %>.module.scss
---

.<%= h.inflection.transform(name, ['underscore', 'dasherize']) %> {
  display: block;
}
