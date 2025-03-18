import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import useFormValidation from '../../hooks/useFormValidation';

function SignIn() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const handleInput = async (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useFormValidation(values, setError, 'signin');

  const handleLogin = async (e) => {
    e.preventDefault();

    navigate('/');
  };

  return (
    <div className="mt-[5%] flex h-screen flex-col items-center">
      <p className="mb-4 text-3xl font-semibold">로그인</p>
      <form
        onSubmit={handleLogin}
        className="flex w-1/3 flex-col items-center gap-2"
      >
        <Input
          name="email"
          label="이메일"
          type="email"
          value={values.email}
          placeholder="이메일 주소를 입력하세요"
          errorMessage={error.email}
          onChange={handleInput}
        />
        <Input
          name="password"
          label="비밀번호"
          type="password"
          value={values.password}
          placeholder="비밀번호를 입력하세요"
          errorMessage={error.password}
          onChange={handleInput}
        />
        <button type="submit" className="btn btn-purple mt-2 w-full">
          로그인
        </button>
      </form>
      <p className="text-sm">
        계정이 없다면 지금{' '}
        <Link to="/home/signup" className="underline">
          가입
        </Link>
        하세요!
      </p>
    </div>
  );
}

export default SignIn;
