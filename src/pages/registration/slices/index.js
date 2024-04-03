import { createSlice } from '@reduxjs/toolkit';
import { logupThunk } from '../thunks';

const userInfo = localStorage.getItem('userInfo');

const initialState = {
  isAuth: !!localStorage.getItem('token'),
  isLoading: false,
  errors: null,
  token: localStorage.getItem('token') || null,
  userInfo: userInfo ? JSON.parse(userInfo) : {},
};

export const logupSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');

      state.isAuth = false;
      state.errors = null;
      state.isLoading = false;
      state.userInfo = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logupThunk.fulfilled, (state, action) => {
      const logupData = action.payload;
      const { accessToken, ...userInfo } = logupData;

      localStorage.setItem('token', accessToken);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      state.isLoading = false;
      state.isAuth = true;
      state.token = accessToken;
      state.userInfo = userInfo;
    });
    builder.addCase(logupThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(logupThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});
export const { logout } = logupSlice.actions;
export default logupSlice.reducer;
