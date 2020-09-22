import React from 'react';

import { useStateValue } from '../contexts/StateProvider';

import './CheckoutProduct.css';

const CheckoutProduct = ({ id, title, imageUrl, price, rating }) => {
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
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((item, index) => (
              <p key={index}>
                <span role='img' aria-label='rating'>
                  ⭐
                </span>
              </p>
            ))}
        </div>
        <button onClick={removeFrombasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
