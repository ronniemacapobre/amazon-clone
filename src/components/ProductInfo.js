import React from 'react';

import './ProductInfo.css';

const ProductInfo = ({ title, price, rating }) => {
  return (
    <div className='product__info'>
      <p>{title}</p>
      <p className='product__price'>
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className='product__rating'>
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
    </div>
  );
};

export default ProductInfo;
