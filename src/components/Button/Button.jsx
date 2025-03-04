function Button({
  color = 'black',
  font = 'white',
  size = 'high',
  customSize = '',
  text = 'Button',
}) {
  const BTN_COLOR = {
    black: 'bg-black',
    white: 'bg-white',
    'blue-01': 'bg-[#7b78ff]',
    'blue-02': 'bg-[#007aff]',
    gray: 'bg-[#626161]',
  };
  const BTN_FONT = {
    white: 'border-white text-white',
    black: 'border-black text-black',
  };
  const BTN_SIZE = {
    high: 'h-[56px] w-[150px]',
    low: 'h-[48px] w-[162px] ',
  };

  return (
    <button
      type="button"
      className={`rounded-lg border ${BTN_COLOR[color]} ${BTN_FONT[font]} ${customSize || BTN_SIZE[size]}`}
    >
      {text}
    </button>
  );
}

export default Button;
