import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getOrdersThunk, setOrdersThunk } from '../thunks';

const initialState = {
  orders: [],
  isLoading: false,
  errors: null,
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getOrdersThunk.fulfilled, (state, action) => {
      state.orders = action.payload;
      state.isLoading = false;
      state.errors = null;
    });

    builder.addCase(setOrdersThunk.fulfilled, (state, action) => {
      //state.orders = action.payload;
      state.isLoading = false;
      state.errors = null;
    });

    builder.addMatcher(
      isAnyOf(getOrdersThunk.rejected, setOrdersThunk.rejected),
      (state, action) => {
        state.isLoading = true;
        state.errors = action.payload;
      },
    );

    builder.addMatcher(
      isAnyOf(getOrdersThunk.pending, setOrdersThunk.pending),
      (state) => {
        state.isLoading = true;
        state.errors = null;
      },
    );
  },
});

export default ordersSlice.reducer;
