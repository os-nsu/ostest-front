import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.tsx';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
