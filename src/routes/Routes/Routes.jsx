import { createBrowserRouter } from 'react-router-dom';
import Home from '../../components/Home/Home/Home';
import Register from '../../components/Register/Register';
import SignIn from '../../components/SignIn/SignIn';
import Main from '../../layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
