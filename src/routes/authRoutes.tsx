import AuthPage from '@/pages/AuthPage';
import { Navigate } from 'react-router-dom';

export const authRoutes = [
  {
    path: '*',
    element: <Navigate to="/auth" replace={true} />,
  },
  {
    path: 'auth',
    element: <AuthPage />,
  },
];
