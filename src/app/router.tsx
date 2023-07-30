import { homeLoader } from 'features/home-page/loader';
import { profileLoader } from 'features/profile-page/loader';
import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import { ErrorPageStrategy } from 'shared/error-boundary';
import { AuthLayout, EmptyLayout } from 'shared/layouts';
import { pathRouter } from 'shared/config/pathRouter.ts';
import { tasksLoader } from 'features/tasks-page/loader';

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
        path: pathRouter.Home,
        index: true,
        lazy: () => import('../features/home-page/containers/HomePage'),
        loader: homeLoader,
      },
      {
        path: pathRouter.Tasks,
        index: true,
        lazy: () => import('../features/tasks-page/containers/TasksPage'),
        loader: tasksLoader,
      },
      {
        path: pathRouter.Employees,
        index: true,
        lazy: () => import('../features/home-page/containers/HomePage'),
        loader: homeLoader,
      },
      {
        path: pathRouter.Discussions,
        index: true,
        lazy: () => import('../features/home-page/containers/HomePage'),
        loader: homeLoader,
      },
      {
        path: pathRouter.Templates,
        index: true,
        lazy: () => import('../features/home-page/containers/HomePage'),
        loader: homeLoader,
      },
      {
        path: pathRouter.Profile,
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
        path: pathRouter.SignIn,
        index: true,
        lazy: () => import('../features/sign-in/containers/SignInPage'),
      },
    ],
  },
]);
