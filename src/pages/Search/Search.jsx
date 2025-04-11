import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import CardSkeleton from '../../components/Card/CardSkeleton';
import VideoCard from '../../components/Card/VideoCard';
import SearchInput from '../../components/Input/SearchInput';
import { MAX_LIST_LENGTH } from '../../constants/uiData';
import videoOptions from '../../utils/api/videoOptions';

function Search() {
  const [searchParams] = useSearchParams();
  const input = searchParams.get('input');
  const { data, isLoading } = useQuery(videoOptions.searchList(input));

  if (isLoading) return <CardSkeleton num={MAX_LIST_LENGTH.SEARCH.ITEMS} />;

  return (
    <main className="px-4 md:px-[10%]">
      <SearchInput />
      <p className="mt-2 text-lg">
        <span className="bg-main rounded-lg px-3 py-2 text-xl text-white">
          {input}
        </span>
        &nbsp;검색 결과 :{' '}
        <span className="text-main text-xl">{data.total}</span>개
      </p>
      <ul className="mt-6 flex flex-wrap justify-center gap-4">
        {data?.total === 0 ? (
          <p>검색 결과가 없습니다</p>
        ) : (
          data.products.map((item) => <VideoCard key={item.id} item={item} />)
        )}
      </ul>
    </main>
  );
}

export default Search;
