import { useEffect, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import ListNav from './ListNav';
import CardSkeleton from '../../components/Card/CardSkeleton';
import YoutubeCard from '../../components/Card/YoutubeCard';
import { LIST_MENU, MAX_LIST_LENGTH } from '../../constants/uiData';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import videoOptions from '../../utils/api/videoOptions';

function List() {
  const { playlistId } = useParams();

  const [playlist, setPlaylist] = useState(LIST_MENU[0]);
  useEffect(() => {
    const selectedPlaylist = LIST_MENU.find((menu) => menu.to === playlistId);
    if (selectedPlaylist) {
      setPlaylist(selectedPlaylist);
    }
  }, [playlistId]);

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(videoOptions.playList(playlist.playlist));

  const observerRef = useIntersectionObserver({ hasNextPage, fetchNextPage });

  return (
    <div className="px-4 md:px-[10%]">
      <ListNav playlist={playlist} setPlaylist={setPlaylist} />
      {isLoading ? (
        <CardSkeleton num={MAX_LIST_LENGTH.VIDEO.ITEMS} />
      ) : (
        <div className="my-3 flex flex-wrap gap-4 pt-[96px]">
          {data?.pages.flatMap((page) =>
            page.items.map((item) => (
              <YoutubeCard key={item.id} item={item.snippet} />
            )),
          )}
        </div>
      )}
      {isFetchingNextPage && <CardSkeleton num={MAX_LIST_LENGTH.VIDEO.ITEMS} />}
      <div ref={observerRef} className="h-3" />
    </div>
  );
}

export default List;
