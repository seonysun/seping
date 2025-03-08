import { useState } from 'react';
import { FaRegHeart, FaUser } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import SideModal from './SideModal';
import { Button, ToggleButton } from '../components';

function UserNav() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <nav className="flex items-center gap-3">
      <FaRegHeart size="22" />
      {isLogin && <FaUser size="22" />}
      <Button
        text={isLogin ? '로그아웃' : '로그인'}
        color="btn-purple"
        size="text-sm"
        onClick={() => {
          setIsLogin((prev) => !prev);
        }}
      />
      <ToggleButton />
    </nav>
  );
}

function Header() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  return (
    <header className="flex h-[88px] items-center border-b px-4 md:px-[10%]">
      {isSideOpen && <SideModal setIsSideOpen={setIsSideOpen} />}
      <RxHamburgerMenu
        size="28"
        onClick={() => setIsSideOpen((prev) => !prev)}
      />
      <Link to="/" className="ml-4 flex-1 justify-start">
        seping
      </Link>

      <UserNav />
    </header>
  );
}

export default Header;
