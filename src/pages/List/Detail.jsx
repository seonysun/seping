import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { FavoriteButton } from '../../components';
import DetailSkeleton from '../../components/Card/DetailSkeleton';
import useResize from '../../hooks/useResize';
import videoOptions from '../../utils/api/videoOptions';

function Detail() {
  const selectedId = useParams().id;
  const isMobile = useResize();

  const { data, isLoading } = useQuery(videoOptions.productDetail(selectedId));

  return (
    <section className="px-4 md:px-[10%]">
      {isLoading ? (
        <DetailSkeleton />
      ) : (
        <>
          <div className="mb-3 border-b pb-2 pt-8">
            <div className="flex items-center gap-3 text-4xl font-semibold">
              <span>{data.title}</span>
              <FavoriteButton id={data.id} />
            </div>
            <div className="flex justify-between text-lg">
              <span>{data.category}</span>
              <span className="font-medium">$ {data.price.toFixed(2)}</span>
            </div>
          </div>
          <div className={`flex gap-5 ${isMobile ? 'flex-col' : ''}`}>
            <img
              src={data.images}
              alt={data.title}
              className={isMobile ? 'w-full' : 'w-1/2'}
            />
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold">
                📦 {data.shippingInformation}
              </p>
              <ul className="flex gap-2 text-black">
                {data.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg bg-yellow-200 px-2 py-1 font-semibold hover:bg-yellow-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="text-justify">{data.description}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Detail;
