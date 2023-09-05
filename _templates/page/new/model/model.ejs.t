---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/model/<%= h.inflection.camelize(name, true) %>Model.ts
---

export interface <%= h.inflection.camelize(name) %> {
  [x: string]: any;
  // declare model here
}

export class <%= h.inflection.camelize(name) %>Model implements <%= h.inflection.camelize(name) %> {
  constructor(_<%= h.inflection.camelize(name, true) %>: <%= h.inflection.camelize(name) %>) {
    // initialize model here
  }
}