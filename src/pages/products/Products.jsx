import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import './Products.css';
import { getProductsThunk } from './thunks';
import { productsSelector } from './selectors';
import { Loader } from '../../components/Loader/Loader';
import { Product } from './components/Product/Product';
import { usePagination } from '../../hooks/usePagination';
import { Pagination } from './components/Pagination/Pagination';

export const Products = () => {
  const { currentPage, onPaginationClick } = usePagination(
    'productsPaginationPage',
  );
  const { errors, isLoading, products } = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk({ page: currentPage }));
  }, [dispatch, currentPage]);

  if (errors) {
    console.error(errors);
  }

  return (
    <div className="products">
      {isLoading && <Loader />}

      <Pagination currentPage={currentPage} setActivePage={onPaginationClick} />

      <Row>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </Row>
      <Pagination currentPage={currentPage} setActivePage={onPaginationClick} />
    </div>
  );
};
