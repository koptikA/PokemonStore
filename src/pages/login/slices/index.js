import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from '../thunks';

const userInfo = localStorage.getItem('userInfo');

const initialState = {
  isAuth: !!localStorage.getItem('token'),
  isLoading: false,
  errors: null,
  token: localStorage.getItem('token') || null,
  userInfo: userInfo ? JSON.parse(userInfo) : {},
};

export const loginSlice = createSlice({
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
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      const loginData = action.payload;
      const { accessToken, ...userInfo } = loginData;

      localStorage.setItem('token', accessToken);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      state.isLoading = false;
      state.isAuth = true;
      state.token = accessToken;
      state.userInfo = userInfo;
    });
    builder.addCase(loginThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
