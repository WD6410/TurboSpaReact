import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter.ts';

export const nonAuth: RouteObject[] = [
  {
    path: pathRouter.SignIn,
    index: true,
    lazy: () => import('../../features/sign-in/containers/SignInPage'),
  },
];
