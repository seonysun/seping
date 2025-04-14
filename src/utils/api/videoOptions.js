import { queryOptions } from '@tanstack/react-query';
import videoAPI from './videoAPI';
import { MAX_LIST_LENGTH } from '../../constants/uiData';

const VIDEOLIMIT = MAX_LIST_LENGTH.VIDEO.ITEMS;

const videoOptions = {
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
  playSearch: (query) =>
    queryOptions({
      queryKey: ['videos', query],
      queryFn: ({ pageParam = '' }) =>
        videoAPI.searchVideo({
          pageToken: pageParam,
          limit: VIDEOLIMIT,
          query,
        }),
      getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
    }),
};

export default videoOptions;
