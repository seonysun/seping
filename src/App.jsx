/* eslint-disable react/jsx-props-no-spreading */
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import useResize from './hooks/useResize';
import { Footer, Header, Navbar, SideModal } from './layout';
import { modalSlice } from './redux/Slice/modalSlice';

function App() {
  const { isOpen, modalType, modalProps } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <div className="flex min-h-screen flex-col">
      {isOpen && modalType === 'side' && (
        <SideModal
          setIsOpen={() => dispatch(modalSlice.actions.closeModal())}
          {...modalProps}
        />
      )}
      <Header />
      <main className="flex-1 pt-[88px]">
        <Outlet />
      </main>
      {useResize() ? <Navbar /> : null}
      <Footer />
    </div>
  );
}

export default App;
