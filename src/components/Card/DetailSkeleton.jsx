import useResize from '../../hooks/useResize';

function DetailSkeleton() {
  const isMobile = useResize();

  return (
    <section
      className={`flex animate-spark gap-4 px-4 md:px-[10%] ${isMobile ? 'flex-col' : ''}`}
    >
      <div className="h-[300px] w-full rounded-lg bg-gray-light md:w-1/2" />
      <div className="flex h-[300px] w-full flex-col gap-3 md:w-1/2">
        <p className="h-1/5 rounded-lg bg-gray-light" />
        <p className="h-[10%] rounded-lg bg-gray-light" />
        <p className="h-[10%] rounded-lg bg-gray-light" />
        <p className="h-[30%] rounded-lg bg-gray-light" />
        <p className="h-[10%] rounded-lg bg-gray-light" />
        <p className="h-[10%] rounded-lg bg-gray-light" />
      </div>
    </section>
  );
}

export default DetailSkeleton;
