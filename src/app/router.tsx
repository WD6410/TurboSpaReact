import { homeLoader } from 'features/home-page/loader';
import { profileLoader } from 'features/profile-page/loader';
import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import { ErrorPageStrategy } from 'shared/error-boundary';
import { AuthLayout, EmptyLayout } from 'shared/layouts';

export const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <AuthLayout />
      </>
    ),
    errorElement: <ErrorPageStrategy />,
    children: [
      {
        path: '/',
        index: true,
        lazy: () => import('../features/home-page/containers/HomePage'),
        loader: homeLoader,
      },
      {
        path: '/pull-requests',
        index: true,
        lazy: () => import('../features/home-page/containers/HomePage'),
        loader: homeLoader,
      },
      {
        path: '/open-issues',
        index: true,
        lazy: () => import('../features/home-page/containers/HomePage'),
        loader: homeLoader,
      },
      {
        path: '/discussions',
        index: true,
        lazy: () => import('../features/home-page/containers/HomePage'),
        loader: homeLoader,
      },
      {
        path: '/databases',
        index: true,
        lazy: () => import('../features/home-page/containers/HomePage'),
        loader: homeLoader,
      },
      {
        path: '/profile',
        index: true,
        lazy: () => import('../features/profile-page/containers/ProfilePage'),
        loader: profileLoader,
      },
    ],
  },
  {
    element: <EmptyLayout />,
    children: [
      {
        path: '/sign-in',
        index: true,
        lazy: () => import('../features/sign-in/containers/SignInPage'),
      },
    ],
  },
]);
