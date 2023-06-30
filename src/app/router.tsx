import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import { AppLayout } from 'shared/layouts';

export const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <AppLayout.EmptyLayout />
      </>
    ),
    children: [
      {
        path: '/',
        element: <AppLayout.AuthLayout />,
        children: [
          {
            path: '/',
            index: true,
            lazy: () => import('../features/home-page/containers/HomePage'),
          },
        ],
      },
      {
        path: '/sign-in',
        index: true,
        lazy: () => import('../features/sign-in/containers/SignInPage'),
      },
    ],
  },
]);
