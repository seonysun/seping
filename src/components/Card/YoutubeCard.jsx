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
      className={`${size} mb-2 overflow-hidden px-2`}
      onClick={() => {
        navigate(`/home/video/${item.resourceId.videoId}`);
      }}
    >
      <div className="py-2">
        <img
          ref={imgRef}
          src="/src/assets/images/defaultImg.png"
          data-src={
            item.thumbnails.standard?.url || '/src/assets/images/defaultImg.png'
          }
          alt={item.title}
          onError={(e) => {
            e.currentTarget.src = '/src/assets/images/defaultImg.png';
          }}
          className="size-full rounded-xl"
        />
      </div>
      <div className="flex items-start justify-between p-2">
        <p className="flex flex-col">
          <span className="text-sm">{item.channelTitle}</span>
          <span className="line-clamp-2 font-semibold">{item.title}</span>
        </p>
        <FavoriteButton id={item.resourceId.videoId} />
      </div>
      <p className="px-2 text-sm">{item.publishedAt.split('T')[0]}</p>
    </section>
  );
}

export default YoutubeCard;
