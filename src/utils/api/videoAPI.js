/* eslint-disable no-return-await */
import { instance } from './instance';

const videoAPI = {
  videoList: async ({ category, limit = 0, params = {} }) =>
    await instance.get(`/category/${category}?limit=${limit}`, { params }),
  allList: async () => await instance.get('?limit=0'),
};

export default videoAPI;
