import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../assets/icons/common/Icon';

function SearchInput({ size, message = '검색어를 입력하세요', setSearchOpen }) {
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();

  const searchSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    navigate(`/home/search?input=${inputValue}`);
    setInputValue('');
  };

  return (
    <form
      className={`flex w-full ${size} items-center gap-2 rounded-lg bg-[#F5F5F5] p-3`}
      onSubmit={searchSubmit}
    >
      <button type="submit">
        <Icon icon="IoSearch" size="20" color="gray" />
      </button>
      <input
        className="w-full bg-transparent text-black outline-none"
        placeholder={message}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => setTimeout(() => setSearchOpen(false), 100)}
      />
    </form>
  );
}

export default SearchInput;
