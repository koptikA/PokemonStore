import React from 'react';
import './OrderItem.css';
import { ProductItem } from '../../../../components/ProductItem/ProductItem';
import { Accordion } from 'react-bootstrap';

export const OrderItem = ({ order }) => {
  const date = new Date(order.createdAt).toLocaleDateString('Ru-ru');

  return (
    <Accordion.Item eventKey={order.createdAt} className="order-item">
      <Accordion.Header>
        <div className="order-item-header">
          <div>{date}</div>
          <div> $ {order.totalPrice}</div>
        </div>
      </Accordion.Header>
      <Accordion.Body className="order-items-list">
        {order.itemsList.map((item) => (
          <ProductItem key={item.id} product={item} isCart={false} />
        ))}
      </Accordion.Body>
    </Accordion.Item>
  );
};
