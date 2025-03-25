/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../assets/icons/common/Icon';
import { Button, SearchInput, ToggleButton } from '../components';
import Navbar from './Navbar';
import { loginSlice } from '../redux/Slice/loginSlice';
import { modalSlice } from '../redux/Slice/modalSlice';
import { useSupabaseAuth } from '../supabase';

function Header() {
  const dispatch = useDispatch();
  const location = useLocation();

  const { getUserInfo } = useSupabaseAuth();
  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getUserInfo();
      if (userInfo?.user) {
        dispatch(loginSlice.actions.login(userInfo));
      }
    };

    fetchUserInfo();
  }, []);

  const [searchOpen, setSearchOpen] = useState(false);
  const isHiddenPage = !!location.pathname.match(/\/(list|search)/);

  return (
    <header className="fixed top-0 w-full bg-light-main px-4 dark:bg-dark-main md:px-[10%]">
      <div className="flex h-[88px] items-center border-b">
        <Icon
          icon="RxHamburgerMenu"
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
        <Navbar setSearchOpen={setSearchOpen} />
        <UserNav />
        <ToggleButton />
      </div>
      {!isHiddenPage && (
        <div
          className={`flex transition-all duration-300 ${searchOpen ? 'block' : 'hidden'}`}
        >
          <SearchInput setSearchOpen={setSearchOpen} />
        </div>
      )}
    </header>
  );
}

function UserNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 수정 필요함
  // const likeItemsId = useSelector((state) => state.like);
  // const { data } = useFetch(() => videoAPI.allList());
  // const likeList = data.length
  //   ? data.filter((item) => likeItemsId.includes(item.id))
  //   : [];
  const login = useSelector((state) => state.login);

  const { logout } = useSupabaseAuth();
  const toggleLogout = () => {
    alert('로그아웃 되었습니다');

    dispatch(loginSlice.actions.logout());
    logout();

    navigate('/');
  };

  return (
    <nav className="mx-2 flex items-center gap-3">
      <Icon
        icon="FaRegHeart"
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
      {login.isLogin && (
        <Icon icon="FaUser" size="22" className="cursor-pointer" />
      )}
      <Button
        text={login.isLogin ? '로그아웃' : '로그인'}
        color="btn-purple"
        size="text-sm"
        onClick={login.isLogin ? toggleLogout : () => navigate('/home/signin')}
      />
    </nav>
  );
}

export default Header;
