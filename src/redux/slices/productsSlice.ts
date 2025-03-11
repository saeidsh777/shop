import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk('products/getProducts', () => {
    return fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .catch((err) => {
            throw err;
        });
});

export interface ProductsType {
    products: object[] | [];
    status: string;
    productsFiltered: object[] | [];
    sort: string;
}

const initialState: ProductsType = {
    products: [],
    status: 'default',
    productsFiltered: [],
    sort: '-1',
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            if (action.payload == '-1') {
                state.productsFiltered = state.products;
            } else {
                state.productsFiltered = (
                    state.products as { category: { name: string } }[]
                ).filter((product) => product.category.name == action.payload);
            }
        },
        setSort: (state, action) => {
            state.sort = action.payload;
            if (action.payload === 'low') {
                state.productsFiltered = (
                    [...state.products] as { price: number }[]
                ).sort((item1, item2) => item1.price - item2.price);
            } else if (action.payload === 'high') {
                state.productsFiltered = (
                    [...state.products] as { price: number }[]
                ).sort((item1, item2) => item2.price - item1.price);
            } else {
                state.productsFiltered = state.products;
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.productsFiltered = action.payload;
                state.status = 'success';
            })
            .addCase(getProducts.rejected, (state) => {
                state.status = 'feild';
            });
    },
});

export const { setProducts, setSort } = productsSlice.actions;

export default productsSlice.reducer;
