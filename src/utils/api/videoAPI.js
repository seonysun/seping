/* eslint-disable no-return-await */
import { instance } from './instance';
import { MAX_LIST_LENGTH } from '../../constants/uiData';

const LIMIT = MAX_LIST_LENGTH.HOME.ITEMS;

const videoAPI = {
  infiniteList: async ({ pageParam = 0, limit = LIMIT }) => {
    const { data } = await instance.get(`?skip=${pageParam}&limit=${limit}`);
    return data;
  },

  allList: async () => await instance.get('?skip=10&limit=0'),
  categoryList: async ({ category, params = {} }) =>
    await instance.get(`/category/${category}`, {
      params,
    }),
  searchList: async () => await instance.get('/search'),
};

export default videoAPI;
