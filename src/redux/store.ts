import { configureStore } from '@reduxjs/toolkit';
import showMenuReducer from './slices/showMenuSlice';
import productsReducer from './slices/productsSlice';
import cartReducer from './slices/cartSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
    reducer: {
        menu: showMenuReducer,
        products: productsReducer,
        cart: cartReducer,
        modal: modalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
