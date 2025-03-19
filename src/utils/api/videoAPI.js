/* eslint-disable no-return-await */
import { instance } from './instance';
import { MAX_LIST_LENGTH } from '../../constants/uiData';

const LIMIT = MAX_LIST_LENGTH.HOME.ITEMS;

const videoAPI = {
  infiniteList: async ({ pageParam = 0, limit = LIMIT }) => {
    const { data } = await instance.get(`?skip=${pageParam}&limit=${limit}`);
    return data;
  },

  allList: async () => {
    const { data } = await instance.get('?limit=0');
    return data;
  },
  categoryList: async ({ category, params = {} }) => {
    const { data } = await instance.get(`/category/${category}`, {
      params,
    });
    return data;
  },
  searchList: async (input) => {
    const { data } = await instance.get(`/search?q=${input}`);
    return data;
  },
};

export default videoAPI;
