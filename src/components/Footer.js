import React from 'react';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__backToTop' onClick={() => window.scrollTo(0, 0)}>
        <span>Back to top</span>
      </div>
      <div className='footer_verticalRowContainer'>
        <div className='footer_verticalRow'>
          <h4>Get to Know Us</h4>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>About Amazon</li>
            <li>Press Center</li>
            <li>Investor Relations</li>
            <li>Amazon Devices</li>
            <li>Amazon Tours</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className='footer_verticalRow'>
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell products on Amazon</li>
            <li>Sells apps on Amazon</li>
            <li>Become an Affiliate</li>
            <li>Advertise Your Products</li>
            <li>Self-Publish with Us</li>
            <li>Host an Amazon Hub</li>
          </ul>
        </div>
        <div className='footer_verticalRow'>
          <h4>Amazon Payment Products</h4>
          <ul>
            <li>Amazon Rewards Visa Signature Cards</li>
            <li>Amazon.com Store Card</li>
            <li>Amazon Business Card</li>
            <li>Amazon Business Line of Credit</li>
            <li>Credit Card Marketplace</li>
            <li>Reload Your Balance</li>
            <li>Amazon Currency Converter</li>
          </ul>
        </div>
        <div className='footer_verticalRow'>
          <h4>Let Us Help You</h4>
          <ul>
            <li>Amazon and COVID-19</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Shipping Rates & Policies</li>
            <li>Amazon Prime</li>
            <li>Returns & Replacements</li>
            <li>Manage Your Content and Devices</li>
            <li>Amazon Assistant</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
