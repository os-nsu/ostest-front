import HomePage from '@/pages/HomePage.tsx';
import TestsPage from '@/pages/TestsPage.tsx';
import LaboratoryPage from '@/pages/LaboratoryPage.tsx';
import LoginPage from '@/pages/LoginPage.tsx';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/tests',
    element: <TestsPage />,
  },
  {
    path: '/lab/:id',
    element: <LaboratoryPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];
