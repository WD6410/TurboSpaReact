import { defineMock } from '@alova/mock';
import { Employees } from 'features/employees/model';

export const mockPosition = {
  Developer: 'Developer',
  Leader: 'Leader',
  Tester: 'Tester',
  BA: 'BA',
  PM: 'PM',
};

const store: List<Employees> = [
  {
    id: '1',
    name: 'Truong',
    email: 'truongdq.dev@gmail.com',
    phone: '0123456789',
    address: 'Ha Noi',
    position: mockPosition.Developer,
    createdAt: '2021-09-01T00:00:00.000Z',
    updatedAt: '2021-09-01T00:00:00.000Z',
  },
];

export const mockEmployees = defineMock({
  '/employees': ({ query }) => {
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
  '/employees/{id}': ({ params }) => {
    const index = store.findIndex((item) => item.id === params.id);
    return store[index];
  },
  '[POST]/employees': ({ data }) => {
    const lastId = Number(store[store.length - 1].id ?? 0);
    const newData = {
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      id: String(lastId + 1),
    };
    store.push(newData as Employees);
    return data;
  },
  '[PUT]/employees/{id}': ({ data, params }) => {
    const index = store.findIndex((item) => item.id === params.id);
    const updatedData = {
      ...store[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };
    store[index] = updatedData as Employees;
    return params.id;
  },
  '[DELETE]/employees/{id}': ({ params }) => {
    const index = store.findIndex((item) => item.id === params.id);
    store.splice(index, 1);
    return params.id;
  },
});
