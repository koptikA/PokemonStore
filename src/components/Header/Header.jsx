import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { ROUTE_NAMES } from '../../routes/routeNames';
import { useDispatch } from 'react-redux';
import { logout } from '../../pages/login/slices';
import { Badge, Button } from 'react-bootstrap';
import { IoExitOutline } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';
import { useCart } from '../../hooks/useCart';

import style from './Header.module.css';

export const Header = () => {
  const [nav, setNav] = useState(false);

  const dispatch = useDispatch();

  const { quantity, getCart } = useCart();

  useEffect(() => {
    getCart();
  }, [getCart]);

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.box}>
          <div className={style.logo}>pokemonstore</div>
          <ul
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            }
          >
            <li>
            <Link className="header-link" to={ROUTE_NAMES.PRODUCTS}>
              products
            </Link>
            </li>

            <li>
            <Link className="header-link" to={ROUTE_NAMES.ORDERS}>
              orders
            </Link>
            </li>

            <li>
            <Link className="header-link" to={ROUTE_NAMES.ACCOUNT}>
              account
            </Link>
            </li>

            <li>
            
              <Link className="header-cart" to={ROUTE_NAMES.CART}>
                <Badge className="header-cart-badge" bg="primary">
                  {quantity}
                </Badge>

                <BsCart3 size={25} className="header-link-cart" />
              </Link>
            </li>
            <li>
              
              <Button variant={'link'} onClick={() => dispatch(logout())}>
                  <IoExitOutline size={27} className="header-link-exit" />
              </Button>
            </li>
            
            
            
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
              {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>

          
        </div>
      </div>
    </header>
  );
};
