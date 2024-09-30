import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.tsx';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
// import { redirect } from 'react-router-dom';

// const token = sessionStorage.getItem('accessToken');
const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router}>
      {/* {token ? <redirect to="/" /> : <redirect to="/auth" />} */}
    </RouterProvider>
  );
}

export default App;
