import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { auth } from './firebase';
import { useStateValue } from './contexts/StateProvider';

import Header from './components/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Footer from './components/Footer';

import './App.css';

const promise = loadStripe('pk_test_wrI8AWWxodHJGfb01Bs1QPvA00aQRQK66p');

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          payload: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          payload: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/orders'>
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
