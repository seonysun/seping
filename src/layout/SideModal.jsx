/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Icon from '../assets/icons/common/Icon';
import ModalCard from '../components/Card/ModalCard';

function SideModal({ setIsOpen, title, direction = 'left', itemList }) {
  return (
    <section
      className="fixed inset-0 z-50 bg-black/50"
      onClick={() => setIsOpen()}
    >
      <div
        className={`fixed top-0 h-full w-64 overflow-y-scroll bg-white transition-transform duration-300 dark:bg-dark-main sm:w-96 ${
          direction === 'right'
            ? 'right-0 translate-x-0'
            : 'left-0 -translate-x-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <Icon
          icon="IoClose"
          className="absolute right-6 top-6 cursor-pointer"
          onClick={() => setIsOpen()}
        />
        <div className="p-6">{title}</div>
        <div className="flex flex-col px-3">
          {itemList &&
            itemList.map((item) => (
              <ModalCard key={item.id} item={item} size="w-full" />
            ))}
        </div>
      </div>
    </section>
  );
}

export default SideModal;
