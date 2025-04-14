/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import useLazyImage from '../../hooks/useLazyImage';
import FavoriteButton from '../Button/FavoriteButton';

function YoutubeCard({ item, size = 'w-[47%] md:w-[31%]' }) {
  const navigate = useNavigate();
  const imgRef = useLazyImage();

  return (
    <div
      className={`${size} z-0 mb-2`}
      onClick={() => {
        navigate(`/home/video/${item.resourceId.videoId}`);
      }}
    >
      <div className="relative w-full overflow-hidden rounded-xl pb-[56.25%]">
        <picture>
          <source srcSet="/speakupIcon.avif" type="image/avif" />
          <source srcSet="/speakupIcon.webp" type="image/webp" />
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
        </picture>
      </div>
      <div className="relative p-2">
        <p className="line-clamp-1 text-sm">{item.channelTitle}</p>
        <p className="my-1 line-clamp-2 h-12 font-semibold">{item.title}</p>
        <span className="absolute right-0 top-1">
          <FavoriteButton id={item.resourceId.videoId} />
        </span>
        <p className="line-clamp-2 text-xs text-gray">
          {item.publishedAt.split('T')[0]}
        </p>
      </div>
    </div>
  );
}

export default YoutubeCard;
