import { createAsyncThunk } from '@reduxjs/toolkit';
import ProducctsService from '../../../services/ProducctsService';

export const getProductsThunk = createAsyncThunk(
  'products',
  async (params, { rejectWitchValue }) => {
    try {
      const data = await ProducctsService.getProducts(params);
      return data.data;
    } catch (e) {
      return rejectWitchValue(e?.response?.data?.message || e?.response);
    }
  },
);
