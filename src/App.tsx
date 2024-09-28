import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.tsx';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import { authRoutes } from './routes/authRoutes.tsx';

const authRouter = createBrowserRouter(authRoutes);
const router = createBrowserRouter(routes);

function App() {
  const token = sessionStorage.getItem('token');
  if (token) return <RouterProvider router={authRouter} />;
  else return <RouterProvider router={router} />;
}

export default App;
