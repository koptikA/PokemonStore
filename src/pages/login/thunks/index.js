import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../../../services/AuthService';

export const loginThunk = createAsyncThunk(
  'login',
  async (body, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(body);

      return response.data;
    } catch (e) {
      return rejectWithValue(e?.response?.data?.message || e?.message);
    }
  },
);
