import React, { memo, useMemo, useState } from 'react';
import './CartButton.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useCart } from '../../hooks/useCart';

export const CartButton = memo((props) => {
  const {
    cartLoading,
    itemsList,
    addProductToCart,
    updateProductInCart,
    removeProductFromCart,
  } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const productInCart = useMemo(
    () => itemsList.find((item) => item.id === props.id),
    [itemsList, props.id],
  );

  const handleIncrementProduct = () => {
    setIsLoading(true);
    updateProductInCart({
      id: props.id,
      quantity: productInCart.quantity + 1,
    }).finally(() => {
      setIsLoading(false);
    });
  };

  const handleDecrementProduct = () => {
    setIsLoading(true);
    if (productInCart.quantity === 1) {
      removeProductFromCart(productInCart.id);
    } else {
      updateProductInCart({
        id: props.id,
        quantity: productInCart.quantity - 1,
      }).finally(() => {
        setIsLoading(false);
      });
    }
  };

  return productInCart ? (
    <ButtonGroup>
      <Button onClick={handleDecrementProduct} disabled={cartLoading}>
        -
      </Button>
      <Button disabled>
        {isLoading ? 'Loading...' : productInCart.quantity}
      </Button>
      <Button onClick={handleIncrementProduct} disabled={cartLoading}>
        +
      </Button>
    </ButtonGroup>
  ) : (
    <ButtonGroup>
      <Button
        disabled={cartLoading}
        onClick={() => addProductToCart({ ...props, quantity: 1 })}
      >
        +
      </Button>
    </ButtonGroup>
  );
});
