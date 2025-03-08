import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Landing from './pages/Home/Landing';

const NotFound = lazy(() => import('./pages/NotFound'));

export const router = createBrowserRouter([
  { path: '/', element: <Landing /> },
  {
    path: '/home',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
