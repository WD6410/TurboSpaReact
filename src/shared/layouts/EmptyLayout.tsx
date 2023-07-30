import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from 'shared/store';
import { pathRouter } from 'shared/config/pathRouter.ts';

export function EmptyLayout() {
  const { isAuthentication } = useAuthStore();

  if (isAuthentication) {
    return <Navigate to={pathRouter.Home} />;
  }
  return <Outlet />;
}
