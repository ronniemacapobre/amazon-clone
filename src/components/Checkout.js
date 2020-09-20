import React from 'react';

import Subtotal from './Subtotal';

import './Checkout.css';
import Basket from './Basket';

const Checkout = () => {
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img
          className='checkout__add'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt=''
        />

        <h2 className='checkout__title'>Your Shopping Basket</h2>
        <Basket />
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
