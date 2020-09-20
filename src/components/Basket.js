import React from 'react';

import { useStateValue } from '../contexts/StateProvider';

import './Basket.css';
import BasketItem from './BasketItem';

const Basket = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='basket'>
      {basket?.map((item) => (
        <BasketItem
          key={item.id}
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default Basket;
