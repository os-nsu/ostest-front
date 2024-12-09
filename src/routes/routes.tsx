import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import LabsPage from '@/pages/LabsPage';
import TestsPage from '@/pages/TestsPage/TestsPage.tsx';
import LaboratoryPage from '@/pages/LaboratoryPage/LaboratoryPage.tsx';
import LoginPage from '@/pages/LoginPage.tsx';
import GroupsPage from '@/pages/GroupsPage/GroupsPage';
import SessionPage from '@/pages/SessionPage/SessionPage';
import SessionsPage from '@/pages/SessionsPage/SessionsPage';

export const routes = [
  {
    path: '/',
    element: <PrivateRoute element={<LabsPage />} />,
  },
  {
    path: '/tests',
    element: <PrivateRoute element={<TestsPage />} />,
  },
  {
    path: '/groups',
    element: <PrivateRoute element={<GroupsPage />} />,
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
