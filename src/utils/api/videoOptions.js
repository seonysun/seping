import { queryOptions } from '@tanstack/react-query';
import videoAPI from './videoAPI';
import { MAX_LIST_LENGTH } from '../../constants/uiData';

const LIMIT = MAX_LIST_LENGTH.HOME.ITEMS;

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
  categoryList: () =>
    queryOptions({
      queryKey: ['videos', 'category'],
      queryFn: () => videoAPI.categoryList(),
    }),
  searchList: (input) =>
    queryOptions({
      queryKey: ['videos', 'search', input],
      queryFn: () => videoAPI.searchList(input),
      enabled: !!input,
    }),
};

export default videoOptions;
