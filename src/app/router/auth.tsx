import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter.ts';
import { homeLoader } from 'features/home-page/loader';
import { tasksLoader } from 'features/tasks-page/loader';

export const auth: RouteObject[] = [
  {
    path: pathRouter.Home,
    index: true,
    lazy: () => import('../../features/home-page/containers/HomePage'),
    loader: homeLoader,
  },
  {
    path: pathRouter.Tasks,
    index: true,
    lazy: () => import('../../features/tasks-page/containers/TasksPage'),
    loader: tasksLoader,
  },
  {
    path: pathRouter.Employees,
    index: true,
    lazy: () => import('../../features/home-page/containers/HomePage'),
  },
  {
    path: pathRouter.Discussions,
    index: true,
    lazy: () => import('../../features/home-page/containers/HomePage'),
  },
  {
    path: pathRouter.Templates,
    index: true,
    lazy: () => import('../../features/home-page/containers/HomePage'),
  },
  {
    path: pathRouter.Profile,
    index: true,
    lazy: () => import('../../features/profile-page/containers/ProfilePage'),
  },
];
