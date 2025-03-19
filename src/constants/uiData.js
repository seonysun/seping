import { Twitter, FaceBook, Tiktok, Instagram } from '../assets/icons';

export const SOCIAL_ICONS = [
  { src: Twitter, alt: 'Twitter' },
  { src: FaceBook, alt: 'Facebook' },
  { src: Tiktok, alt: 'TikTok' },
  { src: Instagram, alt: 'Instagram' },
];

export const MAX_LIST_LENGTH = {
  HOME: {
    LANDING: 6,
    ITEMS: 12,
  },
  LIST: {
    ITEMS: 6,
  },
  SEARCH: {
    ITEMS: 6,
  },
};

export const LIST_MENU = [
  { to: 'poong', tab: '또간집', cate: 'groceries' },
  { to: 'sung', tab: '먹을텐데', cate: 'sunglasses' },
  { to: 'baek', tab: '백종원', cate: 'furniture' },
  { to: 'zzu', tab: '쯔양', cate: 'smartphones' },
  { to: 'choi', tab: '최자로드', cate: 'home-decoration' },
];
