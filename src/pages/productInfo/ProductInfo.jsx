import React, { useEffect } from 'react';
import './ProductInfo.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productInfoSelector } from './selectors';
import { getProductByIdThunk } from './thunks';
import { Loader } from '../../components/Loader/Loader';
import { ProductInfoStats } from './components/ProductInfoStats/ProductInfoStats';
import { ProductInfoAbilities } from './components/ProductInfoAbilities/ProductInfoAbilities';
import { CartButton } from '../../components/CartButton/CartButton';

export const ProductInfo = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { productInfo, isLoading, errors } = useSelector(productInfoSelector);

  useEffect(() => {
    dispatch(getProductByIdThunk(productId));
  }, [dispatch, productId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!productInfo) {
    return null;
  }

  if (errors) {
    console.error(errors);
  }

  return (
    <div className="product-info">
      <div className="product-info-top">
        <div className="product-info-image">
          <img src={productInfo.image} alt="product" />
        </div>

        <div className="product-info-top-right">
          <ProductInfoStats stats={productInfo.stats} />

          <div className="product-info-price">
            PRICE: <span> ${productInfo.price}</span>
          </div>

          <div className="mt-3">
            <CartButton
              id={productInfo.id}
              name={productInfo.name}
              price={productInfo.id}
              image={productInfo.image}
            />
          </div>
        </div>
      </div>
      <ProductInfoAbilities abilities={productInfo.abilities} />
    </div>
  );
};
