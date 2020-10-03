import React from 'react';

import { useStateValue } from '../contexts/StateProvider';
import ProductInfo from './ProductInfo';

import './CheckoutProduct.css';

const CheckoutProduct = ({
  id,
  title,
  imageUrl,
  price,
  rating,
  isRemoveHidden,
}) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFrombasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: id,
    });
  };

  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={imageUrl} alt='' />
      <div className='checkoutProduct__info'>
        <ProductInfo title={title} price={price} rating={rating} />
        {!isRemoveHidden && (
          <button onClick={removeFrombasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
