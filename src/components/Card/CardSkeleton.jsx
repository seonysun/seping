function CardSkeleton({ size }) {
  return (
    <div className={`${size} mb-4 flex flex-col gap-2`}>
      <div className="aspect-video animate-spark rounded-xl bg-gray-300" />
      <p className="h-3 animate-spark rounded-md bg-gray-300 text-sm" />
      <p className="h-3 animate-spark rounded-md bg-gray-300 text-sm" />
    </div>
  );
}

export default CardSkeleton;
