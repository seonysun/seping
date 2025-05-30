import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';

const Landing = lazy(() => import('./pages/Home/Landing'));
const Home = lazy(() => import('./pages/Home/Home'));
const List = lazy(() => import('./pages/List/List'));
const Detail = lazy(() => import('./pages/Home/Detail'));
const VideoDetail = lazy(() => import('./pages/List/VideoDetail'));
const Search = lazy(() => import('./pages/Search/Search'));
const ChatList = lazy(() => import('./pages/Chat/ChatList'));
const Chat = lazy(() => import('./pages/Chat/Chat'));
const NotFound = lazy(() => import('./pages/NotFound'));
const SignIn = lazy(() => import('./pages/Login/SignIn'));
const SignUp = lazy(() => import('./pages/Login/SignUp'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div className="text-center">Loading...</div>}>
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
      { path: 'list/:playlistId', element: <List /> },
      { path: 'detail/:id', element: <Detail /> },
      { path: 'video/:id', element: <VideoDetail /> },
      { path: 'search', element: <Search /> },
      { path: 'chat', element: <ChatList /> },
      { path: 'chat/:id', element: <Chat /> },
      { path: 'map', element: <Home /> },
      { path: 'signin', element: <SignIn /> },
      { path: 'signup', element: <SignUp /> },
    ],
  },
]);
