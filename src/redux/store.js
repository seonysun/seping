import { configureStore } from '@reduxjs/toolkit';
import { likeSlice } from './Slice/likeSlice';

export const store = configureStore({
  reducer: { like: likeSlice.reducer },
});
