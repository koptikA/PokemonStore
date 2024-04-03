import React from 'react';
import { loginSelector } from '../pages/login/selectors';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE_NAMES } from './routeNames';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header/Header';

export const PrivateRoute = () => {
  const { isAuth } = useSelector(loginSelector);

  return isAuth ? (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  ) : (
    <Navigate to={ROUTE_NAMES.LOGIN} />
  );
};
