import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../../services/AuthService';

export const logupThunk = createAsyncThunk(
  'logup',
  async (body, { rejectWithValue }) => {
    try {
      const response = await AuthService.logUp(body);

      return response.data;
    } catch (e) {
      return rejectWithValue(e?.response?.data?.message || e?.message);
    }
  },
);
