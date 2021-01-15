import React from 'react';
import './About.css'

export default function About(){
    return(
        <div className="about-container">
          <h1 className="about-title">Vous aussi, rejoignez la communauté Comparateur Agricole !</h1>
          <img className="champ-ble"src="https://s1.1zoom.me/big3/811/Fields_Summer_Sky_Ear_436415.jpg"/>
          <div className="about-content">
          <h2 className="about-title2">Une carte interractive mettant en avant nos partenaires</h2>
          <p className="about-text"> Grâce a cet outil, visualisez d'un simple coup d'oeil les agriculteurs qui nous font déjà confiance; ainsi que les acheteurs avec qui nous travaillons. La barre de recherche vous permettera d'afficher, pour une commune choisie et ses alentours, les entreprises travaillant avec nous.</p>
          <h2 className="about-title2">Une communauté soudée !</h2>
          <p className="about-text">Vous cherchez des collaborateurs de confiance qui aspirent aux mêmes idéaux que vous ?</p>
          
          <h2 className="about-title2">Nous aussi !</h2>
          <p className="about-text">Rejoignez-nous directement sur notre page ComparateurAgricole.com</p>
          </div>
        </div>
    );
}