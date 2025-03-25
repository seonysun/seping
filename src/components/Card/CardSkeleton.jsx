/* eslint-disable react/no-array-index-key */
function CardSkeleton({ num }) {
  return (
    <div className="flex h-full flex-wrap justify-around">
      {Array.from({ length: num }).map((_, i) => (
        <section
          key={i}
          className="mb-4 flex w-[47%] animate-spark flex-col gap-2 md:w-[30%]"
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
