import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';
import { tasksLoader } from '../loader';

export const tasksRoute: RouteObject[] = [
  {
    path: pathRouter.Tasks,
    index: true,
    lazy: () => import('../containers/TasksPage'),
    loader: tasksLoader,
  },
];
