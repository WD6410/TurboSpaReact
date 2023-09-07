---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/model/<%= h.inflection.camelize(name, true) %>Model.ts
---
import { appUtils } from 'shared/utils';

export interface <%= h.inflection.camelize(name) %> {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export class <%= h.inflection.camelize(name) %>Model implements <%= h.inflection.camelize(name) %> {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  constructor(_<%= h.inflection.camelize(name, true) %>: <%= h.inflection.camelize(name) %>) {
        this.id = _<%= h.inflection.camelize(name, true) %>.id;
        this.name = _<%= h.inflection.camelize(name, true) %>.name;
        this.createdAt = appUtils.formatDate(_<%= h.inflection.camelize(name, true) %>.createdAt);
        this.updatedAt = appUtils.formatDate(_<%= h.inflection.camelize(name, true) %>.updatedAt);
  }
}
