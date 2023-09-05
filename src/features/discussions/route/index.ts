import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';
import { discussionsLoader } from '../loader';

export const discussionsRoute: RouteObject[] = [
  {
    path: pathRouter.DiscussionsPage,
    index: true,
    lazy: () => import('../containers/Discussions.tsx'),
    loader: discussionsLoader,
  },
];
