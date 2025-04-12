/* eslint-disable react/no-array-index-key */
import CardSkeleton from './CardSkeleton';

function ListSkeleton({ num, size }) {
  return (
    <div className="my-4 flex h-full flex-wrap justify-around">
      {Array.from({ length: num }).map((_, i) => (
        <CardSkeleton key={i} size={size} />
      ))}
    </div>
  );
}

export default ListSkeleton;
