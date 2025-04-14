import { useInfiniteQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import ListSkeleton from '../../components/Card/ListSkeleton';
import YoutubeCard from '../../components/Card/YoutubeCard';
import SearchInput from '../../components/Input/SearchInput';
import { MAX_LIST_LENGTH, SKELETON } from '../../constants/uiData';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import videoOptions from '../../utils/api/videoOptions';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('input');

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(videoOptions.playSearch(query));

  const observerRef = useIntersectionObserver({ hasNextPage, fetchNextPage });

  const total = data?.pages?.[0]?.total;
  const formattedTotal = total ? total.toLocaleString() : '0';

  return (
    <main>
      <SearchInput />
      {isLoading ? (
        <ListSkeleton
          num={MAX_LIST_LENGTH.SEARCH.ITEMS}
          size={SKELETON.responsive23}
        />
      ) : (
        <div>
          <p className="mt-3 text-lg">
            <span className="bg-main rounded-lg px-3 py-2 text-xl text-white">
              {query}
            </span>
            &nbsp;검색 결과 :{' '}
            <span className="text-main text-xl">{formattedTotal}</span>개
          </p>
          {!total ? (
            <p className="mt-4">검색 결과가 없습니다</p>
          ) : (
            <ul className="mt-6 flex flex-wrap justify-center gap-4">
              {data?.pages.flatMap((page) =>
                page.items.map((item) => (
                  <YoutubeCard
                    key={item.id.videoId}
                    id={item.id.videoId}
                    item={item.snippet}
                  />
                )),
              )}
              {isFetchingNextPage && (
                <ListSkeleton
                  num={MAX_LIST_LENGTH.VIDEO.ITEMS}
                  size={SKELETON.responsive23}
                />
              )}
            </ul>
          )}
          <div ref={observerRef} className="h-10" />
        </div>
      )}
    </main>
  );
}

export default Search;
