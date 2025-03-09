function VideoCard() {
  return (
    <section className="mb-2 w-1/2 overflow-hidden px-2 md:w-1/3">
      <div className="h-[150px] py-2">
        <div className="size-full rounded-xl bg-black" />
      </div>
      <p className="text-sm">지역</p>
      <p>상호명</p>
      <p className="text-sm">메뉴</p>
    </section>
  );
}

export default VideoCard;
