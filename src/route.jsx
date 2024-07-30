import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import App from './App';
import Error404 from './components/error404/error404.jsx';
import Country from './components/country/country.jsx';
import List from './components/list/list.jsx';

const CustomRoute = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />} errorElement={<Error404 />}>
        <Route index element={<List />} />
        <Route path=':name?' element={<Country />} />
      </Route>
    )
  );
  
  return (
    <RouterProvider router={router} />
  );
};

export default CustomRoute;
