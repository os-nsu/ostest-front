import HomePage from '../pages/HomePage.tsx';
import Main from '../pages/Main.tsx';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/main',
    element: <Main />,
  },
];
