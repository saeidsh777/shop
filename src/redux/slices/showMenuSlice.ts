import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

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

// Other code such as selectors can use the imported `RootState` type
export const selectMenu = (state: RootState) => state.menu.value;

export default showMenuSlice.reducer;
