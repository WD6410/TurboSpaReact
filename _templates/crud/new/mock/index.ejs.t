---
to: src/shared/mock/mock<%= h.inflection.camelize(name) %>.ts
---
import { defineMock } from '@alova/mock';
import { <%= h.inflection.camelize(name) %> } from 'features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/model';

const store: List<<%= h.inflection.camelize(name) %>> = [];

export const mock<%= h.inflection.camelize(name) %> = defineMock({
  '/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>': ({ query }) => {
    const { q = '', page = 1, pageSize = 10 } = query;
    const start = (Number(page) - 1) * Number(pageSize);
    const end = start + Number(pageSize);

    const total = store.length;
    const data = store
      .filter((item) => item.name.includes(q))
      .slice(start, end);

    return {
      data,
      total,
      page,
      pageSize,
    };
  },
  '/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/{id}': ({ params }) => {
    const index = store.findIndex((item) => item.id === params.id);
    return store[index];
  },
  '[POST]/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>': ({ data }) => {
    const lastId = Number(store[store.length - 1].id ?? 0);
    const newData = {
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      id: String(lastId + 1),
    };
    store.push(newData as <%= h.inflection.camelize(name) %>);
    return data;
  },
  '[PUT]/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/{id}': ({ data, params }) => {
    const index = store.findIndex((item) => item.id === params.id);
    const updatedData = {
      ...store[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    store[index] = updatedData as <%= h.inflection.camelize(name) %>;
    return params.id;
  },
  '[DELETE]/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/{id}': ({ params }) => {
    const index = store.findIndex((item) => item.id === params.id);
    store.splice(index, 1);
    return params.id;
  },
});
