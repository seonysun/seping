/* eslint-disable react/no-array-index-key */
function ListFallBack({ num }) {
  return (
    <div className="flex flex-1 flex-wrap px-2 py-4">
      {Array.from({ length: num }).map((_, i) => (
        <section
          key={i}
          className="mb-2 flex w-1/2 animate-spark flex-col gap-2 px-2"
        >
          <div className="h-[120px] rounded-xl bg-gray-light" />
          <p className="h-2 rounded-lg bg-gray-light text-sm" />
          <p className="h-2 rounded-lg bg-gray-light text-sm" />
        </section>
      ))}
    </div>
  );
}

export default ListFallBack;
