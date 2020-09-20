import React from 'react';

import { ShoppingBasket } from '@material-ui/icons';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../contexts/StateProvider';
import './Subtotal.css';

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = () => {
    return basket.length === 0
      ? 0
      : basket.reduce((acc, item) => acc + item.price, 0);
  };

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>Subtotal ({basket?.length} items):</p>
            <strong>{`${value}`}</strong>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal()}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
