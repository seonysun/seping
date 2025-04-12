/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
function SignInput({
  label,
  type = 'text',
  placeholder = '입력하세요',
  errorMessage = '',
  ...props
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...props}
        className={`h-9 rounded-md border-2 bg-transparent px-3 py-1 outline-none transition-colors ${
          errorMessage !== '' ? 'border-rose-500' : 'border-gray-300'
        }`}
      />
      {errorMessage !== '' && (
        <p className="text-sm text-rose-500">{errorMessage}</p>
      )}
    </div>
  );
}

export default SignInput;
