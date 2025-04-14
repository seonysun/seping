/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../components/Input/SearchInput';
import { LIST_MENU } from '../../constants/uiData';

function ListNav({ playlist, setPlaylist }) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const searchSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    navigate(`/home/search?input=${inputValue}`);
  };

  return (
    <nav className="fixed left-0 top-[88px] z-10 w-full bg-light-main px-4 dark:bg-dark-main md:px-[10%]">
      <ul className="flex justify-around p-3">
        {LIST_MENU.map((menu) => (
          <li
            key={menu.tab}
            onClick={() => {
              setPlaylist(menu);
              navigate(`/home/list/${menu.to}`);
            }}
            className={
              playlist.tab === menu.tab
                ? 'font-bold'
                : 'font-medium text-gray-light'
            }
          >
            {menu.tab}
          </li>
        ))}
      </ul>
      <SearchInput
        message={`${playlist.tab}에서 검색`}
        onChange={(e) => setInputValue(e.target.value)}
        onSearch={searchSubmit}
      />
    </nav>
  );
}

export default ListNav;
