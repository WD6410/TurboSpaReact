import { defineMock } from '@alova/mock';
import _ from 'lodash-es';
import { faker } from '@faker-js/faker';
import { Task, TaskStatus } from 'features/tasks-page/model';

const DATA_MOCK: Task[] = Array.from(new Array(100)).map((_empty) => {
  return {
    id: faker.number.int({ max: 1000 }),
    title: faker.lorem.text(),
    tag: faker.lorem.word(),
    status: ['TODO', 'IN PROGRESS', 'TESTING', 'DONE'][
      _.random(3)
    ] as TaskStatus,
    author: faker.person.fullName(),
    authorUrl: faker.image.avatar(),
    createdAt: faker.date.recent().toString(),
    updatedAt: faker.date.recent().toString(),
  };
});

export const mockTasks = defineMock({
  '/tasks': () => {
    return DATA_MOCK;
  },
});
