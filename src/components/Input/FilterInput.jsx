import { FilterIcon } from '../../assets/icons';

function FilterInput({ size }) {
  return (
    <button
      type="button"
      onClick={() => {}}
      className={`flex w-full ${size} justify-between rounded-lg border border-[#d4d4d4] p-3`}
    >
      <span>Filters</span>
      <img src={FilterIcon} alt="filterIcon" />
    </button>
  );
}

export default FilterInput;
