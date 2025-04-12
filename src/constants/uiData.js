import { Twitter, FaceBook, Tiktok, Instagram } from '../assets/icons';

export const SOCIAL_ICONS = [
  { src: Twitter, alt: 'Twitter' },
  { src: FaceBook, alt: 'Facebook' },
  { src: Tiktok, alt: 'TikTok' },
  { src: Instagram, alt: 'Instagram' },
];

export const MAX_LIST_LENGTH = {
  HOME: {
    LANDING: 8,
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
    to: 'stutter',
    tab: '말더듬',
    playlist: 'PLyJxWmtKEblaz0EZsdqsLCAuxYEmAfV33',
  },
  {
    to: 'persuasion',
    tab: '비즈니스',
    playlist: 'PLyJxWmtKEblb4gomwOloAn73gdvCUMyj3',
  },
  {
    to: 'voice',
    tab: '트레이닝',
    playlist: 'PLyJxWmtKEblbFgNGnTib4wCJWx1WZpF28',
  },
  {
    to: 'leader',
    tab: '리더',
    playlist: 'PLyJxWmtKEblYGWDrxwOS8GFbJzf_j8qPU',
  },
  {
    to: 'eroo',
    tab: '이루다',
    playlist: 'PL_2WTfwBHPYN881r6IO5Emf5pDTqjOIEr',
  },
];

export const SKELETON = {
  half: 'w-[47%]',
  third: 'w-[31%]',
  responsive23: 'w-[47%] md:w-[30%]',
};
