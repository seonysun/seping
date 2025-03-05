import { useState } from 'react';
import { SearchIcon } from '../../assets/icons';

function SearchInput({ size }) {
  const [inputValue, setInputValue] = useState('');

  const searchSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setInputValue('');
  };

  return (
    <form
      className={`flex ${size} items-center gap-2 rounded-lg bg-[#F5F5F5] p-3`}
      onSubmit={searchSubmit}
    >
      <button type="submit">
        <img src={SearchIcon} alt="search icon" />
      </button>
      <input
        className="w-full bg-transparent outline-none"
        placeholder="검색어를 입력하세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
