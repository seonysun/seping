/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import useResize from '../hooks/useResize';

const MENU_TABS = ['목록', '지도', '커뮤니티', '검색'];

const NAV_STYLE = {
  mobile: 'flex justify-around border-y p-3',
  desk: 'mx-3 flex items-start gap-3',
};

function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState(MENU_TABS[0]);

  return (
    <ul className={`${useResize() ? NAV_STYLE.mobile : NAV_STYLE.desk}`}>
      {MENU_TABS.map((menu) => (
        <li
          key={menu}
          onClick={() => setSelectedMenu(menu)}
          className={`${
            selectedMenu === menu
              ? 'border-y border-purple font-bold text-purple'
              : 'font-medium text-gray'
          } cursor-pointer`}
        >
          {menu}
        </li>
      ))}
    </ul>
  );
}
export default Navbar;
