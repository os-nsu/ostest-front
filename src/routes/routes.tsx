import AuthPage from '@/pages/AuthPage';
import HomePage from '@/pages/HomePage.tsx';
import TestsPage from '@/pages/TestsPage.tsx';
import { Navigate } from 'react-router-dom';

export const routes = [
  {
    path: '*',
    element: <Navigate to="/" replace={true} />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/tests',
    element: <TestsPage />,
  },
];
