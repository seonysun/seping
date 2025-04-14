import Icon from '../../assets/icons/common/Icon';

function SearchInput({
  query,
  onChange,
  onSearch,
  onBlur,
  size,
  message = '검색어를 입력하세요',
}) {
  return (
    <form
      className={`flex w-full ${size} items-center gap-2 rounded-lg bg-[#F5F5F5] p-3`}
      onSubmit={onSearch}
    >
      <button type="submit">
        <Icon icon="IoSearch" size="20" color="gray" />
      </button>
      <input
        className="w-full bg-transparent text-black outline-none"
        placeholder={message}
        value={query}
        onChange={onChange}
        onBlur={onBlur}
      />
    </form>
  );
}

export default SearchInput;
