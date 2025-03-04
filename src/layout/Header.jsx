import { Link } from 'react-router-dom';
import { Favorite, User } from '../assets/icons';
import Button from '../components/Button/Button';

const USER_ICONS = [
  { src: Favorite, alt: 'Favorite' },
  { src: User, alt: 'User' },
];

function Header() {
  return (
    <header className="flex h-[88px] items-center justify-between border px-4 md:px-[10%]">
      <Link to="/">seping</Link>
      <nav className="flex gap-3">
        {USER_ICONS.map((icon) => (
          <button key={icon.alt} type="button">
            <img src={icon.src} alt={icon.alt} />
          </button>
        ))}
        <Button text="로그인" color="btn-purple" font="white" />
      </nav>
    </header>
  );
}

export default Header;
