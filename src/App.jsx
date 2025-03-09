import { Outlet } from 'react-router-dom';
import useResize from './hooks/useResize';
import { Footer, Header, Navbar } from './layout';

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {useResize() ? <Navbar /> : null}
      <Footer />
    </div>
  );
}

export default App;
