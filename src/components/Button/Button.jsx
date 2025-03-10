const BTN_FONT = {
  white: 'text-white',
  black: 'border border-black text-black',
};
const BTN_SIZE = {
  high: 'h-[56px] w-[150px]',
  low: 'h-[48px] w-[162px]',
};

function Button({ color, font = 'white', size, text = 'Button', onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg p-2 ${color} ${BTN_FONT[font]} ${BTN_SIZE[size] || size}`}
    >
      {text}
    </button>
  );
}

export default Button;
