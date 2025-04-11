/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Footer, Header, SideModal } from './layout';
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
      <main className="flex-1 px-4 pt-[88px] md:px-[10%]">
        <Suspense fallback={<div className="mt-2 text-center">로딩중..</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
