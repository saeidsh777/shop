import { configureStore } from '@reduxjs/toolkit';
import showMenuReducer from './slices/showMenuSlice';
import productsReducer from './slices/productsSlice';

export const store = configureStore({
    reducer: {
        menu: showMenuReducer,
        products: productsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
