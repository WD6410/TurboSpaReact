import type { RouteObject } from 'react-router-dom';
import { templatesRoute } from 'features/templates/route';
import { discussionsRoute } from 'features/discussions/route';
import { employeesRoute } from 'features/employees/route';
import { shopManagerRoute } from 'features/shop-manager/route';
import { employeeManagerRoute } from 'features/employee-manager/route';
import { homeRoute } from 'features/home-page/route';
import { profileRoute } from 'features/profile-page/route';
import { tasksRoute } from 'features/tasks-page/route';

export const auth: RouteObject[] = [
  ...homeRoute,
  ...profileRoute,
  ...tasksRoute,
  ...employeeManagerRoute,
  ...shopManagerRoute,
  ...employeesRoute,
  ...discussionsRoute,
  ...templatesRoute,
];
