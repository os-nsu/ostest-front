import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import TestsPage from '@/pages/TestsPage/TestsPage.tsx';
import LaboratoryPage from '@/pages/LaboratoryPage/LaboratoryPage.tsx';
import LoginPage from '@/pages/LoginPage.tsx';
import GroupsPage from '@/pages/GroupsPage/GroupsPage';
import SessionPage from '@/pages/SessionPage/SessionPage';
import SessionsPage from '@/pages/SessionsPage/SessionsPage';
import HomeRedirect from '../components/HomeRedirect/HomeRedirect';
import { RoleTypes } from '@/types/Role';

export const routes = [
  {
    path: '/',
    element: <HomeRedirect />,
  },
  {
    path: '/tests',
    element: (
      <PrivateRoute element={<TestsPage />} allowedRoles={[RoleTypes.ADMIN]} />
    ),
  },
  {
    path: '/groups',
    element: (
      <PrivateRoute
        element={<GroupsPage />}
        allowedRoles={[RoleTypes.ADMIN, RoleTypes.TEACHER]}
      />
    ),
  },
  {
    path: '/lab/:id',
    element: <PrivateRoute element={<LaboratoryPage />} />,
  },
  {
    path: '/lab/attempts',
    element: <PrivateRoute element={<SessionsPage />} />,
  },
  {
    path: '/lab/attempts/:id',
    element: <PrivateRoute element={<SessionPage />} />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];
