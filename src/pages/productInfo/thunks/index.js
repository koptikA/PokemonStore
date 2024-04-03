import { createAsyncThunk } from '@reduxjs/toolkit';
import ProducctsService from '../../../services/ProducctsService';

export const getProductByIdThunk = createAsyncThunk(
  'productInfo',
  async (productId, { rejectWitchValue }) => {
    try {
      const data = await ProducctsService.getProductById(productId);
      return data.data;
    } catch (e) {
      return rejectWitchValue(e?.response?.data?.message || e?.message);
    }
  },
);
