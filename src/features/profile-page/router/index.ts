import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';
import { profileLoader } from '../loader';

export const profileRoute: RouteObject[] = [
  {
    path: pathRouter.Home,
    index: true,
    lazy: () => import('../containers/ProfilePage'),
    loader: profileLoader,
  },
];
