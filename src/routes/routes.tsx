import HomePage from '@/pages/HomePage.tsx';
import LaboratoryPage from '@/pages/LaboratoryPage/LaboratoryPage.tsx';
import LoginPage from '@/pages/LoginPage.tsx';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute.tsx';
import TestsPage from '@/pages/TestsPage/TestsPage';

export const routes = [
  {
    path: '/',
    element: <PrivateRoute element={<HomePage />} />,
  },
  {
    path: '/tests',
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
