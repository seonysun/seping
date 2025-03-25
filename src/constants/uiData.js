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
  VIDEO: {
    ITEMS: 12,
  },
};

export const LIST_MENU = [
  {
    to: 'poong',
    tab: '또간집',
    playlist: 'PL8ZmFxF9Ts5yZY-RlNAG51MqkURwYBBk5',
  },
  {
    to: 'sung',
    tab: '먹을텐데',
    playlist: 'PLuMuHAJh9g_Py_PSm8gmHdlcil6CQ9QCM',
  },
  { to: 'tzu', tab: '쯔양', playlist: 'UUfpaSruWW3S4dibonKXENjA' },
  {
    to: 'choe',
    tab: '최자로드',
    playlist: 'PLWoGc25qzA3t80bDczKP9TPQXVB74o_iu',
  },
  {
    to: 'yeosu',
    tab: '여수언니',
    playlist: 'PLjeMXYJSp22os1q7JGarJXN6zJZWM_ct8',
  },
];
