import { useState } from 'react';
import { FaRegHeart, FaUser } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import SideModal from './SideModal';
import { Button, ToggleButton } from '../components';
import Navbar from './Navbar';
import useResize from '../hooks/useResize';

function UserNav() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <nav className="mx-2 flex items-center gap-3">
      <FaRegHeart size="22" className="cursor-pointer" />
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
  const [isSideOpen, setIsSideOpen] = useState(false);

  return (
    <header className="flex h-[88px] items-center border-b px-4 md:px-[10%]">
      {isSideOpen && (
        <SideModal setIsSideOpen={setIsSideOpen} title="이번주 인기 게시물" />
      )}
      <RxHamburgerMenu
        size="28"
        className="cursor-pointer"
        onClick={() => setIsSideOpen((prev) => !prev)}
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
