import { createAsyncThunk } from '@reduxjs/toolkit';
import OrderService from '../../../services/OrderService';

export const getOrdersThunk = createAsyncThunk(
  'getOrders',
  async (_, { rejectWitchValue }) => {
    try {
      const data = await OrderService.getOrders();
      return data.data;
    } catch (e) {
      return rejectWitchValue(e?.response?.data?.message || e?.message);
    }
  },
);

export const setOrdersThunk = createAsyncThunk(
  'setOrders',
  async (order, { rejectWitchValue }) => {
    try {
      const data = await OrderService.setOrder(order);
      return data.data;
    } catch (e) {
      return rejectWitchValue(e?.response?.data?.message || e?.message);
    }
  },
);
