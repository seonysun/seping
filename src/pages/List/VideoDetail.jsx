import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { FavoriteButton } from '../../components';
import DetailSkeleton from '../../components/Card/DetailSkeleton';
import useResize from '../../hooks/useResize';
import videoOptions from '../../utils/api/videoOptions';

function VideoDetail() {
  const { id } = useParams();
  const isMobile = useResize();

  const { data, isLoading } = useQuery(videoOptions.playVideo(id));

  return (
    <section className="px-4 md:px-[10%]">
      {isLoading ? (
        <DetailSkeleton />
      ) : (
        <>
          <div className="mb-3 border-b pb-2 pt-8">
            <div className="line-clamp-2 items-center text-2xl font-semibold">
              <span>{data.snippet.title}</span>
            </div>
            <div className="flex justify-between gap-2 text-lg">
              <span>{data.snippet.channelTitle}</span>
              <FavoriteButton id={data.id} />
            </div>
          </div>
          <div
            className={`flex items-start gap-5 ${isMobile ? 'flex-col' : ''}`}
          >
            <img
              src={data.snippet.thumbnails.standard.url}
              alt={data.snippet.title}
              className={`object-contain ${isMobile ? 'w-full' : 'w-1/2'}`}
            />
            <div className="flex flex-col gap-3">
              <p className="flex gap-5">
                <span className="text-lg">
                  <span className="font-semibold">👍 좋아요</span>{' '}
                  {Number(data.statistics.likeCount).toLocaleString()}
                </span>
                <span className="text-lg">
                  <span className="font-semibold">👀 조회수</span>{' '}
                  {Number(data.statistics.viewCount).toLocaleString()}
                </span>
              </p>
              <ul className="flex flex-wrap gap-2 text-black">
                {data.snippet.tags.slice(0, 10).map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg bg-yellow-200 px-2 py-1 hover:bg-yellow-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="whitespace-pre-line text-justify">
                {data.snippet.description}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default VideoDetail;
