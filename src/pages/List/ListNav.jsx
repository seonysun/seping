/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../components/Input/SearchInput';
import { LIST_MENU } from '../../constants/uiData';

function ListNav({ category, setCategory }) {
  const navigate = useNavigate();

  return (
    <nav className="fixed left-0 top-[88px] w-full bg-light-main px-4 dark:bg-dark-main md:px-[10%]">
      <ul className="flex justify-around p-3">
        {LIST_MENU.map((menu) => (
          <li
            key={menu.tab}
            onClick={() => {
              setCategory(menu);
              navigate(`/home/list/${menu.to}`);
            }}
            className={
              category.tab === menu.tab
                ? 'font-bold'
                : 'font-medium text-gray-light'
            }
          >
            {menu.tab}
          </li>
        ))}
      </ul>
      <SearchInput message={`${category.tab}에서 검색`} />
    </nav>
  );
}

export default ListNav;
