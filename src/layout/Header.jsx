import { useState } from 'react';
import { FaRegHeart, FaUser } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, ToggleButton } from '../components';
import Navbar from './Navbar';
import useFetch from '../hooks/useFetch';
import useResize from '../hooks/useResize';
import { modalSlice } from '../redux/Slice/modalSlice';
import videoAPI from '../utils/api/videoAPI';

function UserNav() {
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();

  const likeItemsId = useSelector((state) => state.like);
  const { data } = useFetch(() => videoAPI.allList());
  const likeList = data?.length
    ? data.filter((item) => likeItemsId.includes(item.id))
    : [];

  return (
    <nav className="mx-2 flex items-center gap-3">
      <FaRegHeart
        size="22"
        className="cursor-pointer"
        onClick={() =>
          dispatch(
            modalSlice.actions.openModal({
              modalType: 'side',
              modalProps: {
                title: '좋아요 목록',
                direction: 'right',
                itemList: likeList,
              },
            }),
          )
        }
      />
      {isLogin && <FaUser size="22" className="cursor-pointer" />}
      <Button
        text={isLogin ? '로그아웃' : '로그인'}
        color="btn-purple"
        size="text-sm"
        onClick={() => {
          setIsLogin((prev) => !prev);
        }}
      />
    </nav>
  );
}

function Header() {
  const dispatch = useDispatch();

  return (
    <header className="fixed top-0 flex h-[88px] w-full items-center border-b bg-light-main px-4 dark:bg-dark-main md:px-[10%]">
      <RxHamburgerMenu
        size="28"
        className="cursor-pointer"
        onClick={() =>
          dispatch(
            modalSlice.actions.openModal({
              modalType: 'side',
              modalProps: { title: '이번주 인기 게시물' },
            }),
          )
        }
      />
      <Link to="/home" className="ml-4 flex-1 justify-start">
        seping
      </Link>
      {useResize() ? null : <Navbar />}
      <UserNav />
      <ToggleButton />
    </header>
  );
}

export default Header;
