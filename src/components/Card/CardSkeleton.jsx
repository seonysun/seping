/* eslint-disable react/no-array-index-key */
function CardSkeleton() {
  return (
    <div className="mb-4 flex w-[47%] animate-spark flex-col gap-2 md:w-[30%]">
      <div className="aspect-video rounded-xl bg-gray-light" />
      <p className="h-3 rounded-md bg-gray-light text-sm" />
      <p className="h-3 rounded-md bg-gray-light text-sm" />
    </div>
  );
}

export default CardSkeleton;
