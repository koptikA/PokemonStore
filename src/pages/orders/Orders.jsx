import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion } from 'react-bootstrap';

import './Orders.css';
import { ordersSelector } from './selectors';
import { getOrdersThunk } from './thunks';
import { OrderItem } from './components/OrderItem/OrderItem';
import { Loader } from '../../components/Loader/Loader';
import { PageTitle } from '../../components/PageTitle/PageTitle';

export const Orders = () => {
  const dispatch = useDispatch();
  const { orders, isLoading, errors } = useSelector(ordersSelector);

  useEffect(() => {
    dispatch(getOrdersThunk());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (errors) {
    console.error(errors);
  }

  const ordersCopy = [...orders];

  return (
    <div className="orders">
      <PageTitle>Orders</PageTitle>

      <Accordion defaultActiveKey={''}>
        {ordersCopy.reverse().map((order) => (
          <OrderItem key={order.createdAt} order={order} />
        ))}
      </Accordion>
    </div>
  );
};
