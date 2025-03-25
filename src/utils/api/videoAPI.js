/* eslint-disable no-return-await */
import { instance, youtubeInstance } from './instance';
import { MAX_LIST_LENGTH } from '../../constants/uiData';

const LIMIT = MAX_LIST_LENGTH.HOME.ITEMS;
const VIDEOLIMIT = MAX_LIST_LENGTH.VIDEO.ITEMS;

const videoAPI = {
  infiniteList: async ({ pageParam = 0, limit = LIMIT }) => {
    const { data } = await instance.get(`?skip=${pageParam}&limit=${limit}`);
    return data;
  },

  allList: async () => {
    const { data } = await instance.get('?limit=0');
    return data;
  },
  searchList: async (input) => {
    const { data } = await instance.get('/search', {
      params: {
        q: input,
      },
    });
    return data;
  },
  productDetail: async (id) => {
    const { data } = await instance.get(`/${id}`);
    return data;
  },

  playList: async ({ pageToken = '', limit = VIDEOLIMIT, playlistId }) => {
    const { data } = await youtubeInstance.get('/playlistItems', {
      params: {
        part: 'snippet',
        playlistId,
        maxResults: limit,
        pageToken,
      },
    });
    return {
      items: data.items,
      nextPageToken: data.nextPageToken ?? null,
    };
  },
  playVideo: async (id) => {
    const { data } = await youtubeInstance.get('/videos', {
      params: {
        id,
        part: 'snippet,statistics',
      },
    });
    return data.items[0];
  },
};

export default videoAPI;
