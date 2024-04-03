import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_NAMES } from './routeNames';
import { Login, Products, Cart, ProductInfo, Orders } from '../pages';
import { PrivateRoute } from './PrivateRoute';
import { Account } from '../pages/account/Account';
import { Registration } from '../pages/registration/Registration';

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.LOGIN} element={<Login />} />
      <Route path={ROUTE_NAMES.REGISTRATION} element={<Registration />} />

      <Route element={<PrivateRoute />}>
        <Route
          path={ROUTE_NAMES.HOME}
          element={<Navigate to={ROUTE_NAMES.PRODUCTS} />}
        />
        <Route path={ROUTE_NAMES.PRODUCTS} element={<Products />} />
        <Route path={ROUTE_NAMES.PRODUCT} element={<ProductInfo />} />
        <Route path={ROUTE_NAMES.CART} element={<Cart />} />
        <Route path={ROUTE_NAMES.ORDERS} element={<Orders />} />
        <Route path={ROUTE_NAMES.ACCOUNT} element={<Account />} />
      </Route>
    </Routes>
  );
};
