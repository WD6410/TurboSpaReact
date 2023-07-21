import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from 'shared/store';

export function EmptyLayout() {
  const { isAuthentication } = useAuthStore();

  if (isAuthentication) {
    return <Navigate to={'/'} />;
  }
  return <Outlet />;
}
