/* eslint-disable react/no-array-index-key */
function CardSkeleton({ num }) {
  return (
    <div className="flex h-full flex-wrap p-4 md:px-[10%]">
      {Array.from({ length: num }).map((_, i) => (
        <section
          key={i}
          className="mb-4 flex w-1/3 animate-spark flex-col gap-2 px-2 md:w-1/4"
        >
          <div className="aspect-video rounded-xl bg-gray-light" />
          <p className="h-2 rounded-lg bg-gray-light text-sm" />
          <p className="h-2 rounded-lg bg-gray-light text-sm" />
        </section>
      ))}
    </div>
  );
}

export default CardSkeleton;
