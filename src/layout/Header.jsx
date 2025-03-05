import { useState } from 'react';
import { Link } from 'react-router-dom';
import SideModal from './SideModal';
import { BurgerIcon, Favorite, User } from '../assets/icons';
import { Button, ToggleButton } from '../components';

const USER_ICONS = [
  { src: Favorite, alt: 'Favorite' },
  { src: User, alt: 'User' },
];

function Header() {
  const [isSideOpen, setIsSideOpen] = useState(false);

  return (
    <header className="flex h-[88px] items-center border px-4 md:px-[10%]">
      {isSideOpen && <SideModal setIsSideOpen={setIsSideOpen} />}
      <button
        type="button"
        onClick={() => setIsSideOpen((prev) => !prev)}
        className="mr-2"
      >
        <img src={BurgerIcon} alt="navbar" />
      </button>

      <Link to="/" className="flex-1 justify-start">
        seping
      </Link>

      <nav className="flex gap-2">
        {USER_ICONS.map((icon) => (
          <button key={icon.alt} type="button">
            <img src={icon.src} alt={icon.alt} />
          </button>
        ))}
        <Button text="로그인" color="btn-purple" font="white" />
        <div className="flex flex-col items-center justify-center gap-1 text-xs">
          다크모드
          <ToggleButton />
        </div>
      </nav>
    </header>
  );
}

export default Header;
