import { createBrowserRouter } from 'react-router-dom';
import AddRecord from '../../components/AddRecord/AddRecord';
import AllRecord from '../../components/AllRecord/AllRecord';
import Home from '../../components/Home/Home/Home';
import PatientRecordDetails from '../../components/PatientRecordDetails/PatientRecordDetails';
import Register from '../../components/Register/Register';
import SignIn from '../../components/SignIn/SignIn';
import UpdatePatientRecord from '../../components/UpdatePatientRecord/UpdatePatientRecord';
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
        path: '/addrecord',
        element: <AddRecord />,
      },
      {
        path: '/allrecord',
        element: <AllRecord />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/updateRecord/:id',
        element: <UpdatePatientRecord />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/records/${params.id}`),
      },
      {
        path: '/patientDetails/:id',
        element: <PatientRecordDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/specificRecord/${params.id}`),
      },
    ],
  },
]);

export default router;
