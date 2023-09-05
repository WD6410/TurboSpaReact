import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';
import { profileLoader } from '../loader';

export const profileRoute: RouteObject[] = [
  {
    path: pathRouter.ProfilePage,
    index: true,
    lazy: () => import('../containers/Profile.tsx'),
    loader: profileLoader,
  },
];
