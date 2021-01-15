import React from 'react';
import './About.css'

export default function About(){
    return(
        <div className="about-container">
          <h1 className="about-title">Vous aussi, rejoignez la communauté Comparateur Agricole !</h1>
          <img className="champ-ble"src="https://s1.1zoom.me/big3/811/Fields_Summer_Sky_Ear_436415.jpg"/>
          <h2 className="about-title2">Une carte interractive mettant en avant nos collaborateurs</h2>
          <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h2 className="about-title2">Une communauté soudée !</h2>
          <p className="about-text">Vous cherchez des collaborateurs de confiance qui aspirent aux mêmes idéaux que vous ?</p>
          
          <h2 className="about-title2">Nous aussi !</h2>
          <p className="about-text">Rejoignez-nous directement sur notre page ComparateurAgricole.com</p>
        </div>
    );
}