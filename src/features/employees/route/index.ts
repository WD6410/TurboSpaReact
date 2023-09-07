import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';
import { employeesLoader } from '../loader';

export const employeesRoute: RouteObject[] = [
  {
    path: pathRouter.EmployeesPage,
    index: true,
    lazy: () => import('../containers/EmployeesPage.tsx'),
    loader: employeesLoader,
  },
];
