import { useInfiniteQuery } from '@tanstack/react-query';
import VideoCard from '../../components/Card/VideoCard';
import { MAX_LIST_LENGTH } from '../../constants/uiData';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import videoOptions from '../../utils/api/videoOptions';
import ListFallback from '../List/ListFallback';

function Home() {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(videoOptions.infiniteList());

  const observerRef = useIntersectionObserver({ hasNextPage, fetchNextPage });

  return (
    <>
      <div className="my-3 flex flex-wrap justify-between gap-4 px-4 md:px-[10%]">
        {data?.pages.flatMap((page) =>
          page.products.map((item) => <VideoCard key={item.id} item={item} />),
        )}
      </div>
      {isFetchingNextPage && <ListFallback num={MAX_LIST_LENGTH.HOME.ITEMS} />}
      <div ref={observerRef} className="h-3" />
    </>
  );
}

export default Home;
