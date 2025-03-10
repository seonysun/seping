import { MdFilterListAlt } from 'react-icons/md';

function FilterInput({ size }) {
  return (
    <button
      type="button"
      onClick={() => {}}
      className={`flex w-full ${size} items-center justify-between rounded-lg border border-[#d4d4d4] p-3`}
    >
      <span>Filters</span>
      <MdFilterListAlt size="22" />
    </button>
  );
}

export default FilterInput;
