import VideoCard from '../../components/Card/VideoCard';
import useFetch from '../../hooks/useFetch';
import videoAPI from '../../utils/api/videoAPI';
import ListFallback from '../List/ListFallback';

function Home() {
  const { data, loading } = useFetch(() => videoAPI.allList());

  if (loading) return <ListFallback num={6} />;

  return (
    <div className="my-3 flex flex-wrap px-4 md:px-[10%]">
      {data && data.map((item) => <VideoCard key={item.id} item={item} />)}
    </div>
  );
}

export default Home;
