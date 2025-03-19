import ListNav from './ListNav';
import CardSkeleton from '../../components/Card/CardSkeleton';
import VideoCard from '../../components/Card/VideoCard';
import { MAX_LIST_LENGTH } from '../../constants/uiData';
import useFetch from '../../hooks/useFetch';
import videoAPI from '../../utils/api/videoAPI';

function List() {
  const { data, loading } = useFetch(() => videoAPI.allList());

  if (loading) return <CardSkeleton num={MAX_LIST_LENGTH.LIST.ITEMS} />;
  if (data.length === 0)
    return (
      <p className="w-full text-center text-gray-500">데이터가 없습니다.</p>
    );

  return (
    <div className="px-4 md:px-[10%]">
      <ListNav />
      <div className="my-3 flex flex-wrap justify-center gap-4 pt-[96px]">
        {data.map((item) => (
          <VideoCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default List;
