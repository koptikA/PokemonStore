import { createSlice } from '@reduxjs/toolkit';
import { getProductsThunk } from '../thunks';

const initialState = {
  products: [],
  isLoading: false,
  errors: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.errors = null;
    });
    builder.addCase(getProductsThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(getProductsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export default productsSlice.reducer;
