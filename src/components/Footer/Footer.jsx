import React from 'react';
import './Footer.css';
import Logo from '../Navbar/NavbarAssets/logo.svg'
export default function Footer() {
    return(
      <div classNAme="footer">
        <div className="footer-container">

          <img className="footer-logo"src={Logo}/>
        </div>
      </div>
    );
}
