import React from 'react';
import './Navbar.css';
import Logo from '../Navbar/NavbarAssets/logo.png'
import {
   
    Link,
  } from "react-router-dom";
export default function Navbar() {
    return(
   
        <div className="navbar-container" >
        <a href="https://moisson-live.com/" target="_blank"> <img className="logoImg"src={Logo}/> </a>
          <Link to="/"> <h1 className="navbar-title">L'@mour est dans le blé</h1></Link>
          <Link to="/about">  <h1 className="about">À propos</h1></Link>
        </div>
      
       
    );
}