import { defineMock } from '@alova/mock';
import { Products } from 'features/products/model';

const store: List<Products> = [];

export const mockProducts = defineMock({
  '/products': ({ query }) => {
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
  '/products/{id}': ({ params }) => {
    const index = store.findIndex((item) => item.id === params.id);
    return store[index];
  },
  '[POST]/products': ({ data }) => {
    const lastId = Number(store[store.length - 1]?.id ?? 0);
    const newData = {
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      id: String(lastId + 1),
    };
    store.push(newData as Products);
    return data;
  },
  '[PUT]/products/{id}': ({ data, params }) => {
    const index = store.findIndex((item) => item.id === params.id);
    const updatedData = {
      ...store[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    store[index] = updatedData as Products;
    return params.id;
  },
  '[DELETE]/products/{id}': ({ params }) => {
    const index = store.findIndex((item) => item.id === params.id);
    store.splice(index, 1);
    return params.id;
  },
});
