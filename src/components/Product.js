import React from 'react';

import { useStateValue } from '../contexts/StateProvider';
import ProductInfo from './ProductInfo';

import './Product.css';

const Product = ({ id, title, imageUrl, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        id: id,
        title: title,
        imageUrl: imageUrl,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product'>
      <ProductInfo title={title} price={price} rating={rating} />
      <img src={imageUrl} alt='' />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
