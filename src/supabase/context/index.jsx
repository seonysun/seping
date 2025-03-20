/* eslint-disable consistent-return */
/* eslint-disable no-new */
import { createContext, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';
import { supabaseEnv } from '../utilities';

// supabase 로그인 유지 세션 생성
export const supabaseClient = createClient(
  supabaseEnv.projectURL,
  supabaseEnv.apiKey,
);

const SUPABASE = createContext(null);

// supabase client를 사용하기 위한 provider 생성
export function SupabaseProvider({ children }) {
  return (
    <SUPABASE.Provider value={supabaseClient}>{children}</SUPABASE.Provider>
  );
}

export const useSupabase = () => {
  const supabase = useContext(SUPABASE);

  if (!supabase) {
    new Error('supabase가 초기화 되지 않았습니다.');
    return;
  }
  return supabase;
};
