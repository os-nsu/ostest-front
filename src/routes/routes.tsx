import HomePage from '@/pages/HomePage.tsx';
import TestsPage from '@/pages/TestsPage.tsx';
import LabsPage from '@/pages/LabsPage.tsx';

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
    path: '/labs',
    element: <LabsPage />,
  },
];
