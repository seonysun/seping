import useResize from '../../hooks/useResize';

function DetailSkeleton() {
  const isMobile = useResize();

  return (
    <section
      className={`flex animate-spark gap-4 py-4 ${isMobile ? 'flex-col' : ''}`}
    >
      <div className="h-[300px] w-full rounded-lg bg-gray-300 md:w-1/2" />
      <div className="flex h-[300px] w-full flex-col gap-3 md:w-1/2">
        <p className="h-1/5 rounded-lg bg-gray-300" />
        <p className="h-[10%] rounded-lg bg-gray-300" />
        <p className="h-[10%] rounded-lg bg-gray-300" />
        <p className="h-[30%] rounded-lg bg-gray-300" />
        <p className="h-[10%] rounded-lg bg-gray-300" />
        <p className="h-[10%] rounded-lg bg-gray-300" />
      </div>
    </section>
  );
}

export default DetailSkeleton;
