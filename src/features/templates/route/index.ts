import type { RouteObject } from 'react-router-dom';
import { pathRouter } from 'shared/config/pathRouter';
import { templatesLoader } from '../loader';

export const templatesRoute: RouteObject[] = [
  {
    path: pathRouter.TemplatesPage,
    index: true,
    lazy: () => import('../containers/Templates.tsx'),
    loader: templatesLoader,
  },
];
