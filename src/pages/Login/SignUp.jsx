import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInput from '../../components/Input/SignInput';
import useFormValidation from '../../hooks/useFormValidation';
import { useSupabaseAuth } from '../../supabase';

function SignUpForm() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useFormValidation(values, setError, 'signup');

  const { signUp } = useSupabaseAuth();
  const handleSignUp = async (e) => {
    e.preventDefault();

    const { email, password, name: userName } = values;
    await signUp({ email, password, userName });
    alert('정상적으로 가입 신청되었습니다. 메일을 확인해주세요!');

    navigate('/home/signin');
  };

  return (
    <div className="mt-[5%] flex h-screen flex-col items-center">
      <p className="mb-4 text-3xl font-semibold">회원가입</p>
      <form
        onSubmit={handleSignUp}
        className="flex w-1/3 min-w-80 flex-col items-center gap-3"
      >
        <SignInput
          name="email"
          label="이메일"
          type="email"
          value={values.email}
          placeholder="이메일 주소를 입력하세요"
          errorMessage={error.email}
          onChange={handleInput}
        />
        <SignInput
          name="name"
          label="닉네임"
          value={values.name}
          placeholder="2~8자, 숫자, 한글, 영어로만 입력하세요"
          errorMessage={error.name}
          onChange={handleInput}
        />
        <SignInput
          name="password"
          label="비밀번호"
          type="password"
          value={values.password}
          placeholder="비밀번호를 입력하세요"
          errorMessage={error.password}
          onChange={handleInput}
        />
        <SignInput
          name="confirmPassword"
          label="비밀번호 확인"
          type="password"
          value={values.confirmPassword}
          placeholder="비밀번호를 다시 입력하세요"
          errorMessage={error.confirmPassword}
          onChange={handleInput}
        />
        <button type="submit" className="btn btn-main mt-2 w-full">
          가입하기
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
