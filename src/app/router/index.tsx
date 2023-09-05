import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import { ErrorPageStrategy } from 'shared/error-boundary';
import { AuthLayout, EmptyLayout } from 'shared/layouts';
import { nonAuth } from './non-auth.tsx';
import { auth } from 'app/router/auth.tsx';

export const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollRestoration getKey={(location) => location.pathname} />
        <AuthLayout />
      </>
    ),
    errorElement: <ErrorPageStrategy />,
    children: auth,
  },
  {
    element: <EmptyLayout />,
    children: nonAuth,
  },
]);
