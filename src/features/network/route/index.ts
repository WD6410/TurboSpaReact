import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';
import { networkLoader } from '../loader';

export const networkRoute: RouteObject[] = [
  {
    path: pathRouter.NetworkPage,
    index: true,
    lazy: () => import('../containers/Network.tsx'),
    loader: networkLoader,
  },
];
