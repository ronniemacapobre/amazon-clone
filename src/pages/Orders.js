import React, { useState, useEffect } from 'react';

import { db } from '../firebase';
import { useStateValue } from '../contexts/StateProvider';
import Order from '../components/Order';

import './Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (!user) {
      setOrders([]);
      return;
    }

    db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot((snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, [user]);

  return (
    <div className='orders'>
      <h1>You Orders</h1>

      <div className='orders__order'>
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
