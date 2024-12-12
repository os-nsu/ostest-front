import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.tsx';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import { AuthContextProvider } from '@/contexts/AuthContext/AuthContext.tsx';

const router = createBrowserRouter(routes);

console.log(1234567);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
