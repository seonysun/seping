import FavoriteButton from '../Button/FavoriteButton';

function VideoCard({ item, size = 'w-[48%] md:w-[30%]' }) {
  return (
    <section className={`${size} mb-2 overflow-hidden px-2`}>
      <div className="py-2">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="size-full rounded-xl"
        />
      </div>
      <div className="flex items-start justify-between p-2">
        <p className="flex flex-col">
          <span className="text-sm">{item.category}</span>
          <span className="font-semibold">{item.title}</span>
        </p>
        <FavoriteButton id={item.id} />
      </div>
      <p className="px-2 text-sm">메뉴</p>
    </section>
  );
}

export default VideoCard;
