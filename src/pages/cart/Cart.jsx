import React from 'react';
import './Cart.css';
import { useCart } from '../../hooks/useCart';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setOrdersThunk } from '../orders/thunks';
import { PageTitle } from '../../components/PageTitle/PageTitle';

export const Cart = () => {
  const dispatch = useDispatch();
  const { itemsList, totalPrice, customerId, getCart } = useCart();

  const hadleCheckout = () => {
    dispatch(setOrdersThunk({ itemsList, totalPrice, customerId }))
      .unwrap()
      .then(() => {
        getCart();
      });
  };

  return (
    <div className="cart">
      {itemsList.length ? (
        <>
          <PageTitle>Cart</PageTitle>

          <div className="cart-products">
            {itemsList.map((item) => {
              return <ProductItem key={item.id} product={item} isCart={true} />;
            })}
          </div>

          <hr />

          <div className="cart-products-total-price">
            Total price: <span>$ {totalPrice}</span>
          </div>

          <hr />

          <div className={'cart-products-botton'}>
            <Button onClick={hadleCheckout}>Checkout</Button>
          </div>
        </>
      ) : (
        <div className="cart-empty">Cart is empty...</div>
      )}
    </div>
  );
};
