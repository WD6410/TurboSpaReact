import type { RouteObject } from 'react-router-dom';
import { homeRoute } from 'features/home-page/router';
import { profileRoute } from 'features/profile-page/router';
import { tasksRoute } from 'features/tasks-page/router';

export const auth: RouteObject[] = [
  ...homeRoute,
  ...profileRoute,
  ...tasksRoute,
];
