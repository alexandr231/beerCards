import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import card from './slices/Card/slice'
export const store = configureStore({
  reducer: {
    card
  },
})


export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();