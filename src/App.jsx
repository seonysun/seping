import { Outlet } from 'react-router-dom';
import { Footer, Header } from './layout';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
