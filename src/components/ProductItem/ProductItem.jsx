import React from 'react';
import './ProductItem.css';
import { CartButton } from '../CartButton/CartButton';
import { useCart } from '../../hooks/useCart';
import { Button } from 'react-bootstrap';

export const ProductItem = ({ product, isCart }) => {
  const { removeProductFromCart, cartLoading } = useCart();
  return (
    <div className="product-item">
      <div className="product-item-image">
        <img src={product.image} alt="product" />
      </div>

      <div className="product-item-quantity">x {product.quantity}</div>

      {isCart && (
        <div className="product-item-buttons">
          <CartButton
            id={product.id}
            name={product.name}
            price={product.id}
            image={product.image}
          />

          <Button
            disabled={cartLoading}
            variant={'danger'}
            onClick={() => removeProductFromCart(product.id)}
          >
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};
