/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../../components/Card/VideoCard';
import SearchInput from '../../components/Input/SearchInput';
import useFetch from '../../hooks/useFetch';
import videoAPI from '../../utils/api/videoAPI';

const LIST_TABS = [
  { to: 'poong', tab: '또간집' },
  { to: 'sung', tab: '먹을텐데' },
  { to: 'baek', tab: '백종원' },
  { to: 'zzu', tab: '쯔양' },
  { to: 'choi', tab: '최자로드' },
];

function ListNav() {
  const [selectedMenu, setSelectedMenu] = useState(LIST_TABS[0].tab);
  // 아이템 슬라이스로 전역으로 관리해야 api 요청 가능해질듯
  const navigate = useNavigate();

  return (
    <nav className="fixed left-0 top-[88px] w-full bg-light-main px-4 dark:bg-dark-main md:px-[10%]">
      <ul className="flex justify-around p-3">
        {LIST_TABS.map((menu) => (
          <li
            key={menu.tab}
            onClick={() => {
              setSelectedMenu(menu.tab);
              navigate(`/home/list/${menu.to}`);
            }}
            className={
              selectedMenu === menu.tab
                ? 'font-bold'
                : 'font-medium text-gray-light'
            }
          >
            {menu.tab}
          </li>
        ))}
      </ul>
      <SearchInput message={`${selectedMenu}에서 검색`} />
    </nav>
  );
}

function List() {
  const { data } = useFetch(() => videoAPI.allList());

  return (
    <div className="px-4 md:px-[10%]">
      <ListNav />
      <div className="my-3 flex flex-wrap pt-[96px]">
        {data
          ? data.map((item) => <VideoCard key={item.id} item={item} />)
          : []}
      </div>
    </div>
  );
}
export default List;
