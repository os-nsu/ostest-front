import { useAuthContext } from '@/contexts/AuthContext/AuthContext.tsx';
import { Navigate } from 'react-router-dom';
import { ReactElement } from 'react';
import { RoleTypes } from '@/types/Role';
import { useAppSelector } from '@/store/hooks';
import { selectRole } from '@/store/role/roleSelectors';

interface PrivateRouteProps {
  element: ReactElement;
  allowedRoles?: RoleTypes[];
}

export default function PrivateRoute({
  element,
  allowedRoles,
}: PrivateRouteProps) {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const role = useAppSelector(selectRole);

  if (allowedRoles && role && !allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return element;
}
