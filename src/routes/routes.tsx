import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import LabsPage from '@/pages/LabsPage';
import TestsPage from '@/pages/TestsPage/TestsPage.tsx';
import LaboratoryPage from '@/pages/LaboratoryPage/LaboratoryPage.tsx';
import LoginPage from '@/pages/LoginPage.tsx';

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
    element: <PrivateRoute element={<TestsPage />} />,
  },
  {
    path: '/lab/:id',
    element: <PrivateRoute element={<LaboratoryPage />} />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];
