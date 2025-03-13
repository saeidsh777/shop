import { createSlice } from '@reduxjs/toolkit';

type modalType = {
    value: boolean;
};

const initialState: modalType = {
    value: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state) => {
            state.value = !state.value;
        },
    },
});

export const { showModal } = modalSlice.actions;

export default modalSlice.reducer;
