/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import useLazyImage from '../../hooks/useLazyImage';
import FavoriteButton from '../Button/FavoriteButton';

function YoutubeCard({ item, size = 'w-[47%] md:w-[30%]' }) {
  const navigate = useNavigate();
  const imgRef = useLazyImage();

  return (
    <section
      className={`${size} z-0 mb-2 overflow-hidden px-2`}
      onClick={() => {
        navigate(`/home/video/${item.resourceId.videoId}`);
      }}
    >
      <div className="relative w-full overflow-hidden rounded-xl pb-[56.25%]">
        <img
          ref={imgRef}
          src="/speakupIcon.png"
          data-src={item.thumbnails.standard?.url || '/speakupIcon.png'}
          alt={item.title}
          onError={(e) => {
            e.currentTarget.src = '/speakupIcon.png';
          }}
          className="absolute inset-0 z-0 size-full object-cover"
        />
      </div>
      <div className="mt-1 flex flex-col text-sm">
        <p className="flex items-center justify-between">
          <span>{item.channelTitle}</span>
          <FavoriteButton id={item.resourceId.videoId} />
        </p>
        <p className="my-1 line-clamp-2 text-base font-semibold">
          {item.title}
        </p>
        <p className="text-gray">{item.publishedAt.split('T')[0]}</p>
      </div>
    </section>
  );
}

export default YoutubeCard;
