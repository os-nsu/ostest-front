import { useAuthContext } from '@/contexts/AuthContext/AuthContext.tsx';
import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';

interface PrivateRouteProps {
  element: ReactElement;
}

export default function PrivateRoute({ element }: PrivateRouteProps) {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return element;
}
