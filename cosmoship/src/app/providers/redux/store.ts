import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@/entities/Cart';

export const reduxStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
