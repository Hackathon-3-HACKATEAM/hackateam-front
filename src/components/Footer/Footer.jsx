import React from 'react';
import './Footer.css';
import Logo from '../Navbar/NavbarAssets/logo.svg'
export default function Footer() {
    return(
        <div className="footer-container">
          <img className="footer-logo"src={Logo}/>
        </div>
    );
}
