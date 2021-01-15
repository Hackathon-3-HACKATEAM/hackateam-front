import React from 'react';
import './Footer.css';
import Logo from '../Navbar/NavbarAssets/logo.svg'
export default function Footer() {
    return(
      <div className="footer">
        <div className="footer-container">

        <a target="_blank" href= "https://comparateuragricole.com/"> <img className="footer-logo"src={Logo}/> </a>
        </div>
      </div>
    );
}
