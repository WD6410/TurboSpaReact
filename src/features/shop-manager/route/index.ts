import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';
import { shopManagerLoader } from '../loader';

export const shopManagerRoute: RouteObject[] = [
  {
    path: pathRouter.ShopManagerPage,
    index: true,
    lazy: () => import('../containers/ShopManager.tsx'),
    loader: shopManagerLoader,
  },
];
