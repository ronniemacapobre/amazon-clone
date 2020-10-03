import React from 'react';
import moment from 'moment';
import CurrencyFormat from 'react-currency-format';

import CheckoutProduct from './CheckoutProduct';

import './Order.css';

const Order = ({ order }) => {
  return (
    <div className='order'>
      <h2>Order</h2>

      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <div className='order__id'>
        <small>{order.id}</small>
      </div>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          imageUrl={item.imageUrl}
          price={item.price}
          rating={item.rating}
          isRemoveHidden={true}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className='order__total'>Order Total: {value}</h3>
        )}
        value={order.data.amount / 100}
        decimalScale={2}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
};

export default Order;
