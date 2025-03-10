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
    'flex justify-around p-3 fixed bottom-0 left-0 w-full bg-white border-t text-black',
  desk: 'mx-3 flex items-start gap-3',
};

function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState(MENU_TABS[0].tab);

  const navigate = useNavigate();

  return (
    <ul className={`${useResize() ? NAV_STYLE.mobile : NAV_STYLE.desk}`}>
      {MENU_TABS.map((menu) => (
        <li
          key={menu.tab}
          onClick={() => {
            setSelectedMenu(menu.tab);
            navigate(menu.to);
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
