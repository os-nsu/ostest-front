import TestsPage from '@/pages/TestsPage.tsx';
import LaboratoryPage from '@/pages/LaboratoryPage.tsx';
import LabsPage from '@/pages/LabsPage';

export const routes = [
  {
    path: '/labs',
    element: <LabsPage />,
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
