import React from 'react';

import { useStateValue } from '../contexts/StateProvider';
import ProductInfo from './ProductInfo';

import './BasketItem.css';

const BasketItem = ({ id, title, imageUrl, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFrombasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: id,
    });
  };

  return (
    <div className='basketItem'>
      <img src={imageUrl} alt='' />
      <div className='basketItem__info'>
        <ProductInfo title={title} price={price} rating={rating} />
        <button onClick={removeFrombasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default BasketItem;
