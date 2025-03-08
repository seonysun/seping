import { useState } from 'react';
import { Link } from 'react-router-dom';
import SideModal from './SideModal';
import { BurgerIcon, Favorites, UserIcon } from '../assets/icons';
import { Button, ToggleButton } from '../components';
import useTheme from '../hooks/useTheme';

function UserNav() {
  const { theme } = useTheme();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <nav className="flex gap-2">
      <Favorites color={theme === 'light' ? 'black' : 'white'} />
      {isLogin && <UserIcon color={theme === 'light' ? 'black' : 'white'} />}
      <Button
        text={isLogin ? '로그아웃' : '로그인'}
        color="btn-purple"
        font="white"
        onClick={() => {
          setIsLogin((prev) => !prev);
        }}
      />
      <div className="flex flex-col items-center justify-center gap-1 text-xs">
        다크모드
        <ToggleButton />
      </div>
    </nav>
  );
}

function Header() {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className="flex h-[88px] items-center border-b px-4 md:px-[10%]">
      {isSideOpen && <SideModal setIsSideOpen={setIsSideOpen} />}
      <BurgerIcon
        color={theme === 'light' ? 'black' : 'white'}
        onClick={() => setIsSideOpen((prev) => !prev)}
      />

      <Link to="/" className="ml-2 flex-1 justify-start">
        seping
      </Link>

      <UserNav />
    </header>
  );
}

export default Header;
