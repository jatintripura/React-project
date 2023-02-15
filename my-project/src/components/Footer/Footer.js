import React from 'react';
import Logo from '../Logo/Logo';
import './Footer.css';
const Footer = () => {
    return (
        <>
        <footer className='footer-area'>
        <div className="container">
            <div className="logo">
                <Logo/>
            </div>
            <p className='text'>© 2022 Spotographer, All Rights Reserved.</p>
        </div>
        
      </footer>
      </>
    );
};

export default Footer;