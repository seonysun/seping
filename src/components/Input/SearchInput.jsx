import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function SearchInput({ size }) {
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();

  const searchSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    navigate(`/search?input=${inputValue}`);
    setInputValue('');
  };

  return (
    <form
      className={`flex ${size} items-center gap-2 rounded-lg bg-[#F5F5F5] p-3`}
      onSubmit={searchSubmit}
    >
      <button type="submit">
        <IoSearch size="20" color="gray" />
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
