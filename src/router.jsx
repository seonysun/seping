import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Landing from './pages/Home/Landing';
import List from './pages/List/List';
import Search from './pages/Search';

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
      { path: 'list/*', element: <List /> },
      { path: 'search', element: <Search /> },
      { path: 'chat', element: <Home /> },
      { path: 'map', element: <Home /> },
    ],
  },
]);
