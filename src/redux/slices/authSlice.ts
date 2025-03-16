import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: '',
    login: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            localStorage.setItem('isLogin', 'true');
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.login = true;
        },
        logout: (state) => {
            localStorage.removeItem('isLogin');
            state.email = '';
            state.password = '';
            state.login = false;
        },
        authChecker: (state) => {
            const login = localStorage.getItem('isLogin');
            if (login) {
                state.email = 'admin@gmail.com';
                state.password = 'admin';
                state.login = true;
            }
        },
    },
});

export const { login, logout, authChecker } = authSlice.actions;

export default authSlice.reducer;
