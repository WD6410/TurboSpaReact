---
to: src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/services/<%= h.inflection.camelize(name, true) %>Service.ts
sh: npx prettier --write src/features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/services/<%= h.inflection.camelize(name, true) %>Service.ts
---

import { alovaInstance } from 'shared/config/apiConfig.ts';
import { endpointApi } from 'shared/config/constants.ts';
import queryString from 'query-string';
import { <%= h.inflection.camelize(name) %>, <%= h.inflection.camelize(name) %>Model } from 'features/<%= h.inflection.transform(name, ['underscore', 'dasherize']) %>/model';


export type Create<%= h.inflection.camelize(name) %>Request = Omit<
  <%= h.inflection.camelize(name) %>,
  'id' | 'createdAt' | 'updatedAt'
>;

export type Update<%= h.inflection.camelize(name) %>Request = Pick<<%= h.inflection.camelize(name) %>, 'name'>;

export const <%= h.inflection.camelize(name, true) %>Service = {
  get<%= h.inflection.camelize(name) %>List: (query: IBaseQuery) => {
    return alovaInstance.Get(
      `${endpointApi.<%= h.inflection.camelize(name, true) %>}?${queryString.stringify(query)}`,
      {
        transformData: (res: IBaseResponse<List<<%= h.inflection.camelize(name) %>>>) => {
          return {
            ...res,
            data: res.data.map((item) => new <%= h.inflection.camelize(name) %>Model(item)),
          };
        },
      },
    );
  },
  get<%= h.inflection.camelize(name) %>: (id: string) => {
    return alovaInstance.Get(`${endpointApi.<%= h.inflection.camelize(name, true) %>}/${id}`, {
      transformData: (data: <%= h.inflection.camelize(name) %>) => {
        return new <%= h.inflection.camelize(name) %>Model(data);
      },
    });
  },
  create<%= h.inflection.camelize(name) %>: (data: Create<%= h.inflection.camelize(name) %>Request) => {
    return alovaInstance.Post(endpointApi.<%= h.inflection.camelize(name, true) %>, data);
  },
  update<%= h.inflection.camelize(name) %>: (id: string, data: Update<%= h.inflection.camelize(name) %>Request) => {
    return alovaInstance.Put(`${endpointApi.<%= h.inflection.camelize(name, true) %>}/${id}`, data);
  },
  delete<%= h.inflection.camelize(name) %>: (id: string) => {
    return alovaInstance.Delete(`${endpointApi.<%= h.inflection.camelize(name, true) %>}/${id}`);
  },
}
