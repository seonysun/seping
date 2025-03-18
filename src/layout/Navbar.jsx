/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useResize from '../hooks/useResize';

const MENU_TABS = [
  { to: 'list', tab: '목록' },
  { to: 'map', tab: '지도' },
  { to: 'chat', tab: '커뮤니티' },
  { to: 'search', tab: '검색' },
];

const NAV_STYLE = {
  mobile:
    'z-50 flex justify-around p-3 fixed bottom-0 left-0 w-full bg-white border-t text-black',
  desk: 'mx-3 flex items-start gap-3',
};

function Navbar({ setSearchOpen }) {
  const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenu = (menu) => {
    selectedMenu === menu.tab
      ? setSelectedMenu(null)
      : setSelectedMenu(menu.tab);

    menu.to === 'search' ? setSearchOpen((prev) => !prev) : navigate(menu.to);
  };

  return (
    <ul className={`${useResize() ? NAV_STYLE.mobile : NAV_STYLE.desk}`}>
      {MENU_TABS.map((menu) => (
        <li
          key={menu.tab}
          onClick={() => {
            handleMenu(menu);
          }}
          className={`${
            selectedMenu === menu.tab
              ? 'border-y border-purple font-bold text-purple'
              : 'font-medium'
          } cursor-pointer`}
        >
          {menu.tab}
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
