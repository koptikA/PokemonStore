import { useDispatch, useSelector } from 'react-redux';
import { cartSelector } from '../pages/cart/selectors';
import { useCallback } from 'react';
import {
  addProductToCartTunk,
  getCartThunk,
  removeProductFromCartTunk,
  updateProductInCartTunk,
} from '../pages/cart/thunks';

export const useCart = () => {
  const { cartInfo, isLoading, errors } = useSelector(cartSelector);
  const dispatch = useDispatch();

  const getCart = useCallback(() => {
    dispatch(getCartThunk());
  }, [dispatch]);

  const addProductToCart = useCallback(
    (product) => {
      dispatch(addProductToCartTunk(product));
    },
    [dispatch],
  );

  const updateProductInCart = useCallback(
    async ({ id, quantity }) => {
      return dispatch(updateProductInCartTunk({ id, quantity })).unwrap();
    },
    [dispatch],
  );

  const removeProductFromCart = useCallback(
    (productId) => {
      return dispatch(removeProductFromCartTunk(productId)).unwrap();
    },
    [dispatch],
  );

  return {
    cartLoading: isLoading,
    cartErrors: errors,
    quantity: cartInfo.quantity,
    itemsList: cartInfo.itemsList,
    totalPrice: cartInfo.totalPrice,
    customerId: cartInfo.customerId,
    getCart: getCart,
    addProductToCart: addProductToCart,
    updateProductInCart: updateProductInCart,
    removeProductFromCart: removeProductFromCart,
  };
};
