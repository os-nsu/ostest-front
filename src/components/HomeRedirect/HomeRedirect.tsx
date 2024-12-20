import React from 'react';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import GroupsPage from '@/pages/GroupsPage/GroupsPage';
import SessionsPage from '@/pages/SessionsPage/SessionsPage';
import LabsPage from '@/pages/LabsPage';
import { useUserRole } from '@/hooks/useUserRole';
import { RoleTypes } from '@/types/Role';

const HomeRedirect: React.FC = () => {
  const { role } = useUserRole();

  if (role === RoleTypes.ADMIN) {
    return <PrivateRoute element={<GroupsPage />} />;
  } else if (role === RoleTypes.TEACHER) {
    return <PrivateRoute element={<SessionsPage />} />;
  }
  return <PrivateRoute element={<LabsPage />} />;
};

export default HomeRedirect;
