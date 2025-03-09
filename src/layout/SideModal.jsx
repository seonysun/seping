/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { IoClose } from 'react-icons/io5';

function SideModal({ setIsOpen, title, direction = 'left' }) {
  return (
    <section
      className="fixed inset-0 z-50 bg-black/50"
      onClick={() => setIsOpen()}
    >
      <div
        className={`fixed top-0 h-full w-64 bg-white transition-transform duration-300 dark:bg-dark-main sm:w-96 ${
          direction === 'right'
            ? 'right-0 translate-x-0'
            : 'left-0 -translate-x-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <IoClose
          className="absolute right-6 top-6 cursor-pointer"
          onClick={() => setIsOpen()}
        />
        <div className="p-6">{title}</div>
      </div>
    </section>
  );
}

export default SideModal;
