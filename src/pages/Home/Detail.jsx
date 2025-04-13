import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { FavoriteButton } from '../../components';
import DetailSkeleton from '../../components/Card/DetailSkeleton';
import useResize from '../../hooks/useResize';
import challengeOptions from '../../utils/api/challengeOptions';

function Detail() {
  const selectedId = useParams().id;
  const isMobile = useResize();

  const { data, isLoading } = useQuery(challengeOptions.challenge(selectedId));

  return (
    <section>
      {isLoading ? (
        <DetailSkeleton />
      ) : (
        <>
          <div className="mb-3 border-b py-3">
            <p>{data.category}</p>
            <div className="flex justify-between gap-2 text-lg">
              <p className="line-clamp-1 text-3xl font-semibold">
                {data.title}
              </p>
              <FavoriteButton id={data.id} type="bookmark" size="28" />
            </div>
          </div>
          <div className={`my-3 flex gap-5 ${isMobile ? 'flex-col' : ''}`}>
            <img
              src="/speakupIcon.png"
              alt={data.title}
              className={isMobile ? 'w-full' : 'w-1/2'}
            />
            <div className="flex flex-col gap-3">
              <p className="text-lg">
                <span className="bg-main-hover rounded p-2 text-white">
                  질문 {data.questionCount}
                </span>
              </p>
              <ul className="flex flex-col gap-2">
                {data.questions.map((q, i) => (
                  <li key={q}>
                    <span className="border-main-hover rounded-lg border px-2 py-1 text-sm">
                      {i + 1}번
                    </span>
                    <p className="hover:text-main-hover mt-1">{q}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Detail;
