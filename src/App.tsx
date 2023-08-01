import './App.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
// import Header from './components/Header';
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
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <RouterProvider router={router} />;
    </div>
  )
}

export default App
