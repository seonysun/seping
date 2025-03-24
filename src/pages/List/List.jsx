import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import ListNav from './ListNav';
import CardSkeleton from '../../components/Card/CardSkeleton';
import VideoCard from '../../components/Card/VideoCard';
import { LIST_MENU, MAX_LIST_LENGTH } from '../../constants/uiData';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import videoOptions from '../../utils/api/videoOptions';

function List() {
  const [category, setCategory] = useState(LIST_MENU[0]);
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(videoOptions.categoryList(category.cate));

  const observerRef = useIntersectionObserver({ hasNextPage, fetchNextPage });

  if (isLoading) return <CardSkeleton num={MAX_LIST_LENGTH.LIST.ITEMS} />;

  return (
    <div className="px-4 md:px-[10%]">
      <ListNav category={category} setCategory={setCategory} />
      <div className="my-3 flex flex-wrap gap-4 pt-[96px]">
        {data?.pages.flatMap((page) =>
          page.products.map((item) => <VideoCard key={item.id} item={item} />),
        )}
      </div>
      <div ref={observerRef} className="h-3" />
    </div>
  );
}

export default List;
