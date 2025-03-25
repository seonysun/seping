import { queryOptions } from '@tanstack/react-query';
import videoAPI from './videoAPI';
import { MAX_LIST_LENGTH } from '../../constants/uiData';

const LIMIT = MAX_LIST_LENGTH.HOME.ITEMS;
const VIDEOLIMIT = MAX_LIST_LENGTH.VIDEO.ITEMS;

const videoOptions = {
  infiniteList: () => ({
    queryKey: ['products', 'infinite'],
    queryFn: ({ pageParam = 0 }) =>
      videoAPI.infiniteList({ pageParam, limit: LIMIT }),
    getNextPageParam: (lastPage, allPages) =>
      lastPage.products.length > 0 ? allPages.length * LIMIT : undefined,
  }),

  allList: () =>
    queryOptions({
      queryKey: ['videos', 'all'],
      queryFn: () => videoAPI.allList(),
    }),
  searchList: (input) =>
    queryOptions({
      queryKey: ['videos', 'search', input],
      queryFn: () => videoAPI.searchList(input),
      enabled: !!input,
    }),
  productDetail: (id) =>
    queryOptions({
      queryKey: ['videos', id],
      queryFn: () => videoAPI.productDetail(id),
    }),

  playList: (playlistId) =>
    queryOptions({
      queryKey: ['videos', 'playList', playlistId],
      queryFn: ({ pageParam = '' }) =>
        videoAPI.playList({
          pageToken: pageParam,
          limit: VIDEOLIMIT,
          playlistId,
        }),
      getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
    }),
  playVideo: (videoId) =>
    queryOptions({
      queryKey: ['videos', videoId],
      queryFn: () => videoAPI.playVideo(videoId),
    }),
};

export default videoOptions;
