import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginReducer from '../pages/login/slices';
import logupReducer from '../pages/registration/slices';
import productReducer from '../pages/products/slices';
import productInfoSlice from '../pages/productInfo/slices';
import cartSlice from '../pages/cart/slices';
import orderSlice from '../pages/orders/slices';

const combinedReducer = combineReducers({
  loginPage: loginReducer,
  logupPage: logupReducer,
  productsPage: productReducer,
  productInfoPage: productInfoSlice,
  cartPage: cartSlice,
  ordersPage: orderSlice,
});

const rootReducer = (state, action) => {
  if (action.type === 'login/logout') {
    state = {};
  }
  return combinedReducer(state, action);
};

export const store = configureStore({ reducer: rootReducer });
