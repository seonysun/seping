import { queryOptions } from '@tanstack/react-query';
import videoAPI from './videoAPI';
import { MAX_LIST_LENGTH } from '../../constants/uiData';

const LIMIT = MAX_LIST_LENGTH.HOME.ITEMS;
const CATE = MAX_LIST_LENGTH.LIST.ITEMS;

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
  categoryList: (category) =>
    queryOptions({
      queryKey: ['videos', 'category', category],
      queryFn: ({ pageParam = 0 }) =>
        videoAPI.categoryList({ pageParam, limit: CATE, category }),
      getNextPageParam: (lastPage, allPages) =>
        lastPage.products.length > 0 ? allPages.length * LIMIT : undefined,
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
};

export default videoOptions;
