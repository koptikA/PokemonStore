import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addProductToCartTunk,
  getCartThunk,
  removeProductFromCartTunk,
  updateProductInCartTunk,
} from '../thunks';

const initialState = {
  cartInfo: {
    _id: '',
    customerId: '',
    quantity: 0,
    totalPrice: 0,
    itemsList: [],
  },

  errors: null,
  isLoading: false,
};

export const cartSlice = createSlice({
  name: 'productInfo',
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(getCartThunk.fulfilled, (state, action) => {
      state.cartInfo = action.payload;
      state.isLoading = false;
      state.errors = null;
    });

    builder.addCase(addProductToCartTunk.fulfilled, (state, action) => {
      state.cartInfo = action.payload;
      state.isLoading = false;
      state.errors = null;
    });

    builder.addCase(updateProductInCartTunk.fulfilled, (state, action) => {
      const { updatedItem, cartState } = action.payload;

      state.cartInfo.quantity = cartState.quantity;
      state.cartInfo.totalPrice = cartState.totalPrice;
      state.cartInfo.itemsList = state.cartInfo.itemsList.map((item) =>
        updatedItem.id === item.id ? updatedItem : item,
      );
      state.isLoading = false;
      state.errors = null;
    });

    builder.addCase(removeProductFromCartTunk.fulfilled, (state, action) => {
      const { removedItemId, cartState } = action.payload;

      state.cartInfo.quantity = cartState.quantity;
      state.cartInfo.totalPrice = cartState.totalPrice;
      state.cartInfo.itemsList = state.cartInfo.itemsList.filter(
        (item) => removedItemId !== item.id,
      );
      state.isLoading = false;
      state.errors = null;
    });

    builder.addMatcher(
      isAnyOf(
        getCartThunk.pending,
        addProductToCartTunk.pending,
        updateProductInCartTunk.pending,
        removeProductFromCartTunk.pending,
      ),
      (state) => {
        state.isLoading = true;
        state.errors = null;
      },
    );

    builder.addMatcher(
      isAnyOf(
        getCartThunk.rejected,
        addProductToCartTunk.rejected,
        updateProductInCartTunk.rejected,
        removeProductFromCartTunk.rejected,
      ),
      (state, action) => {
        state.isLoading = false;
        state.errors = action.payload;
      },
    );
  },
});

export default cartSlice.reducer;
