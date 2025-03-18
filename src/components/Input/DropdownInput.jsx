import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const DROP_LIST = ['1번', '2번', '3번'];

function DropdownInput({ size, initialText = 'Dropdown' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initialText);

  const dropClick = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative flex ${size} flex-col rounded-lg border border-[#d4d4d4] p-3`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Filter"
        className="flex items-center justify-between"
      >
        <span>{selected}</span>
        <FaChevronDown size="22" />
      </button>
      {isOpen && (
        <ul className="absolute left-0 top-full z-10 w-full rounded-lg border bg-white">
          {DROP_LIST.map((list) => (
            <button
              key={list}
              type="button"
              onClick={() => dropClick(list)}
              className="w-full text-start"
            >
              <li className="rounded-lg p-1 hover:bg-slate-100">{list}</li>
            </button>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownInput;
