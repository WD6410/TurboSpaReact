import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';
import { employeeManagerLoader } from '../loader';

export const employeeManagerRoute: RouteObject[] = [
  {
    path: pathRouter.EmployeeManagerPage,
    index: true,
    lazy: () => import('../containers/EmployeeManager.tsx'),
    loader: employeeManagerLoader,
  },
];
