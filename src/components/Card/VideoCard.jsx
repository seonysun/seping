import FavoriteButton from '../Button/FavoriteButton';

function VideoCard({ id }) {
  return (
    <section className="mb-2 w-1/2 overflow-hidden px-2 md:w-1/3">
      <div className="h-[150px] py-2">
        <div className="size-full rounded-xl bg-black" />
      </div>
      <div className="flex items-start justify-between">
        <p className="flex flex-col">
          <span className="text-sm">지역</span>
          <span>상호명</span>
        </p>
        <FavoriteButton id={id} />
      </div>
      <p className="text-sm">메뉴</p>
    </section>
  );
}

export default VideoCard;
