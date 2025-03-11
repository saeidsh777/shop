import { createSlice } from '@reduxjs/toolkit';

export type menuState = {
    value: boolean;
};
const initialState: menuState = {
    value: false,
};

export const showMenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        show: (state) => {
            state.value = !state.value;
        },
    },
});

export const { show } = showMenuSlice.actions;

export default showMenuSlice.reducer;
