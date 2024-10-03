import { useAuthContext } from '@/contexts/AuthContext.tsx';
import { Route, Navigate, RouteProps } from 'react-router-dom';

export default function PrivateRoute(props: RouteProps) {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Route {...props} />;
}
