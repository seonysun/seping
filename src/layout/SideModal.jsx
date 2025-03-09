/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IoClose } from 'react-icons/io5';

function SideModal({ setIsSideOpen, title }) {
  return (
    <section
      className="fixed inset-0 z-40 bg-black/50"
      onClick={() => setIsSideOpen(false)}
    >
      <div
        className="fixed left-0 top-0 z-50 h-full w-64 bg-white dark:bg-dark-main"
        onClick={(e) => e.stopPropagation()}
      >
        <IoClose
          className="absolute right-6 top-6"
          onClick={() => setIsSideOpen(false)}
        />
        <div className="p-6">{title}</div>
      </div>
    </section>
  );
}

export default SideModal;
