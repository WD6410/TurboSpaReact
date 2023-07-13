import { homeLoader } from 'features/home-page/loader';
import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import { ErrorPageStrategy } from 'shared/ErrorBoundary';
import { AuthLayout, EmptyLayout } from 'shared/layouts';

export const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <EmptyLayout />
      </>
    ),
    errorElement: <ErrorPageStrategy />,
    children: [
      {
        path: '/',
        element: <AuthLayout />,
        children: [
          {
            path: '/',
            index: true,
            lazy: () => import('../features/home-page/containers/HomePage'),
            loader: homeLoader,
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
