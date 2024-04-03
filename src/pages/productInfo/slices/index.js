import { createSlice } from '@reduxjs/toolkit';
import { getProductByIdThunk } from '../thunks';

const initialState = {
  productInfo: null,
  isLoading: false,
  errors: null,
};

export const productInfoSlice = createSlice({
  name: 'productInfo',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductByIdThunk.fulfilled, (state, action) => {
      state.productInfo = action.payload;
      state.isLoading = false;
      state.errors = null;
    });
    builder.addCase(getProductByIdThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(getProductByIdThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export default productInfoSlice.reducer;
