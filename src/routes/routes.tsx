import HomePage from '@/pages/HomePage.tsx';
import TestsPage from '@/pages/TestsPage.tsx';
import LaboratoryPage from '@/pages/LaboratoryPage/LaboratoryPage.tsx';

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
];
