import { createSlice } from '@reduxjs/toolkit';

interface CartType {
    products:
        | {
              id: number;
              image: string;
              price: number;
              title: string;
              count: number;
          }[]
        | [];
    totalPrice: number;
}

const initialState: CartType = {
    products: [],
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const isProduct = state.products.some((item) => {
                return item.id === action.payload.id;
            });

            if (isProduct) {
                state.products.forEach((item) => {
                    if (item.id === action.payload.id) {
                        item.count += action.payload.count;
                        state.totalPrice += item.price * +action.payload.count;
                        return;
                    }
                });
            } else {
                state.products = [...state.products, action.payload];
                state.totalPrice +=
                    action.payload.price * +action.payload.count;
            }
        },
        changeCount(state, action) {
            state.products.forEach((item) => {
                if (item.id === action.payload.id) {
                    state.totalPrice -= item.count * item.price;
                    item.count = action.payload.count;
                    state.totalPrice += item.price * +action.payload.count;
                }
            });
        },
        removeProduct(state, action) {
            state.totalPrice -= +action.payload.count * +action.payload.price;
            if (state.totalPrice <= 0) {
                state.totalPrice = 0;
            }
            state.products = state.products.filter(
                (item) => item.id !== action.payload.id
            );
        },
    },
});

export const { addToCart, changeCount, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
