import './App.css'
import About from './pages/About';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/user-details/:userId',
    element: <UserDetails />,
  },
  {
    path: '/about/:aboutParam',
    element: <About />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App
