import React from 'react';

import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5529_B._CB406173267_.jpg'
          alt=''
        />
        <div className='home__row'>
          <Product
            id={1}
            title='ASUS TUF Gaming VG32VQ1B'
            price={392.56}
            rating={4}
            imageUrl='https://images-na.ssl-images-amazon.com/images/I/41rZioKEjQL._AC_SY200_.jpg'
          />
          <Product
            id={2}
            price={239.99}
            rating={5}
            title='SONY WH-1000XM3 Wireless Noise canceling Stereo Headset(International Version/Seller Warrant) (Black)'
            imageUrl='https://images-na.ssl-images-amazon.com/images/I/51CBen-O-yL._AC_UL200_SR150,200_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            id={3}
            price={251.95}
            rating={3}
            title='Logitech G560 LIGHTSYNC PC Gaming Speakers with Game Driven RGB Lighting'
            imageUrl='https://images-na.ssl-images-amazon.com/images/I/51fBODtSLnL._AC_UL400_SR300,400_.jpg'
          />
          <Product
            id={4}
            rating={2}
            price={179.99}
            title='Cooler Master MCM-H500P-WGNN-S00 MasterCase Mesh White ATX Mid-Tower w/ Front Mesh Ventilation'
            imageUrl='https://images-na.ssl-images-amazon.com/images/I/911iCb6IFUL._AC_UL400_SR300,400_.jpg'
          />
          <Product
            id={5}
            price={389.99}
            rating={5}
            title='Dell Ultrasharp U2719DX 27-Inch WQHD 2560x1440 Resolution IPS Monitor with Infinity'
            imageUrl='https://images-na.ssl-images-amazon.com/images/I/71YqpUwrpBL._AC_UL400_SR300,400_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            id={6}
            rating={3}
            price={99.0}
            title='Bose Companion 2 Series III Multimedia Speakers - for PC (with 3.5mm AUX & PC Input)'
            imageUrl='https://images-na.ssl-images-amazon.com/images/I/71MHjYa1-pL._AC_UL400_SR300,400_.jpg'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
