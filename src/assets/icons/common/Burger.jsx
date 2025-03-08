function BurgerIcon({ color = 'black', onClick }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 13.75H7.5V11.25H32.5V13.75Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 21.25H7.5V18.75H32.5V21.25Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 28.75H7.5V26.25H32.5V28.75Z"
        fill={color}
      />
    </svg>
  );
}

export default BurgerIcon;
