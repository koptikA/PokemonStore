import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { ROUTE_NAMES } from '../../routes/routeNames';
import { useDispatch } from 'react-redux';
import { logout } from '../../pages/login/slices';
import { Badge, Button } from 'react-bootstrap';
import { IoExitOutline } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';
import { useCart } from '../../hooks/useCart';

export const Header = () => {
  const dispatch = useDispatch();

  const { quantity, getCart } = useCart();

  useEffect(() => {
    getCart();
  }, [getCart]);

  return (
    <div className="header">
      <div className="container header-wrapper">
        <div className="logo">pokemonstore</div>
        <div className="header-nav">
          <Link className="header-link" to={ROUTE_NAMES.PRODUCTS}>
            products
          </Link>

          <Link className="header-link" to={ROUTE_NAMES.ORDERS}>
            orders
          </Link>

          <Link className="header-link" to={ROUTE_NAMES.ACCOUNT}>
            account
          </Link>
        </div>

        <div className="header-right">
          <Link className="header-cart" to={ROUTE_NAMES.CART}>
            <Badge className="header-cart-badge" bg="primary">
              {quantity}
            </Badge>

            <BsCart3 className="header-link-cart" />
          </Link>

          <Button variant={'link'} onClick={() => dispatch(logout())}>
            <IoExitOutline className="header-link-exit" />
          </Button>
        </div>
      </div>
    </div>
  );
};
