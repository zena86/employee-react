import './App.css'
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/user-details/:userId',
      element: <UserDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
