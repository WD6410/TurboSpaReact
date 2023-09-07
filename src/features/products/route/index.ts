import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';
import { productsLoader } from '../loader';

export const productsRoute: RouteObject[] = [
  {
    path: pathRouter.ProductsPage,
    index: true,
    lazy: () => import('../containers/ProductsPage.tsx'),
    loader: productsLoader,
  },
];
