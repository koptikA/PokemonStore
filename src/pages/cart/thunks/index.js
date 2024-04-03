import { createAsyncThunk } from '@reduxjs/toolkit';
import CartService from '../../../services/CartService';

export const getCartThunk = createAsyncThunk(
  'getCart',
  async (_, { rejectWitchValue }) => {
    try {
      const data = await CartService.getCart();
      return data.data;
    } catch (e) {
      return rejectWitchValue(e?.response?.data?.message || e?.message);
    }
  },
);

export const addProductToCartTunk = createAsyncThunk(
  'addProductToCart',
  async (product, { rejectWitchValue }) => {
    try {
      const data = await CartService.addProductToCart(product);
      return data.data;
    } catch (e) {
      return rejectWitchValue(e?.response?.data?.message || e?.message);
    }
  },
);

export const updateProductInCartTunk = createAsyncThunk(
  'updateProductInCart',
  async ({ id, quantity }, { rejectWitchValue }) => {
    try {
      const data = await CartService.updateProductInCart({ id, quantity });
      return data.data;
    } catch (e) {
      return rejectWitchValue(e?.response?.data?.message || e?.message);
    }
  },
);

export const removeProductFromCartTunk = createAsyncThunk(
  'removeProductFromCart',
  async (productId, { rejectWitchValue }) => {
    try {
      const data = await CartService.removeProductFromCart(productId);
      return data.data;
    } catch (e) {
      return rejectWitchValue(e?.response?.data?.message || e?.message);
    }
  },
);
