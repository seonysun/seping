import { FaHeart, FaRegHeart, FaUser } from 'react-icons/fa';
import {
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa6';
import {
  IoHeart,
  IoHeartOutline,
  IoChatbubblesOutline,
  IoSearch,
} from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

const iconMap = {
  RxHamburgerMenu,
  FaHeart,
  FaRegHeart,
  IoHeart,
  IoHeartOutline,
  FaUser,
  IoChatbubblesOutline,
  IoSearch,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
};

function Icon({ icon, size = 22, color }) {
  const SelectedIcon = iconMap[icon];

  if (!SelectedIcon) {
    console.warn(`Icon "${icon}" not found.`);
    return null;
  }

  return <SelectedIcon size={size} color={color} />;
}

export default Icon;
