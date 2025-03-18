import { configureStore } from '@reduxjs/toolkit';
import { likeSlice } from './Slice/likeSlice';
import { loginSlice } from './Slice/loginSlice';
import { modalSlice } from './Slice/modalSlice';

export const store = configureStore({
  reducer: {
    like: likeSlice.reducer,
    modal: modalSlice.reducer,
    login: loginSlice.reducer,
  },
});
