import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const Landing = lazy(() => import('./pages/Home/Landing'));
const Home = lazy(() => import('./pages/Home/Home'));
const List = lazy(() => import('./pages/List/List'));
const Search = lazy(() => import('./pages/Search/Search'));
const NotFound = lazy(() => import('./pages/NotFound'));
const SignIn = lazy(() => import('./pages/Login/SignIn'));
const SignUp = lazy(() => import('./pages/Login/SignUp'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
      </Suspense>
    ),
  },
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
      { path: 'signin', element: <SignIn /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
]);
