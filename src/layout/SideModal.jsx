/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

function SideModal({ setIsSideOpen }) {
  return (
    <section
      className="fixed inset-0 z-40 bg-black/50"
      onClick={() => setIsSideOpen(false)}
    >
      <div
        className="fixed left-0 top-0 z-50 h-full w-64 bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-4 top-4 text-gray"
          onClick={() => setIsSideOpen(false)}
        >
          ✖
        </button>
        <div className="p-6">메뉴</div>
      </div>
    </section>
  );
}

export default SideModal;
