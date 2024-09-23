import HomePage from '@/pages/HomePage.tsx';
import TestsPage from '@/pages/TestsPage.tsx';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/tests',
    element: <TestsPage />,
  },
];
