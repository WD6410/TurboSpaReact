---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/containers/<%=name%>.module.scss
sh: npx prettier --write src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/containers/<%=name%>.module.scss
---

.<%= h.inflection.transform(name, ['underscore', 'dasherize']) %> {
  display: block;
}
