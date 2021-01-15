import React, {Component, useState, useEffect} from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leafGreen from '../../assets/leaf-green.png';
import leafRed from '../../assets/leaf-red.png';
import leafOrange from '../../assets/leaf-orange.png';
import leafShadow from '../../assets/leaf-shadow.png';
import farmer from '../../assets/farmer.png'
import siege from '../../assets/enterprise.png'
import './Map.css';
import Search from '../../components/SearchBar/Search';
import {FETCH} from '../../Fetch';
import axios from 'axios';

 const Mappy = () => {
  
    /*const [greenIcon, setGreenIcon] = useState({ lat: 35.787449, lng: -78.6438197 });
    const [redIcon, setRedIcon] = useState({ lat: 35.774416, lng: -78.633271 });
    const [orangeIcon, setOrangeIcon] = useState({ lat: 35.772790, lng: -78.652305 });*/
    const [resData, setResData] = useState([]);
    const [farmers, setFarmers] = useState([]);
    const [zoom, setZoom] = useState(12);
    const [isLoading, setIsLoading] = useState(false);
    const [cityStart,setCityStart]=useState("");
    const [zipCode,setZipCode]=useState(28000);
    const [longMap,setLongMap]=useState(48.45);
    const [latMap,setLatMap]=useState(1.5);
    //const positionRedIcon = [redIcon.lat, redIcon.lng];
    //const positionGreenIcon = [35.774416, -78.633271];
    //const positionOrangeIcon = [orangeIcon.lat, orangeIcon.lng];
    const posInitial = [48.4485647, 1.5359632];




    const siegeIcon= L.icon({
      iconUrl: siege,
      shadowUrl: leafShadow,
      iconSize:     [80, 120], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [5, -76]
    });


    const farmerIcon= L.icon({
      iconUrl: farmer,
      shadowUrl: leafShadow,
      iconSize:     [60, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [5, -76]
    });
    useEffect(() => {
      axios
      .get('http://localhost:8000/api/cities',{})
      .then((res) => res.data)
      .then((data) => {
        setResData(data);
      })
      .catch((err) => {
        let message;
        if (err.response.status === 401) {
          message = "You're not authorized to access these datas";
        } else {
          message = err.response.data.errorMessage;
        }
        console.log(message);
        console.error(err);
      });
     
        },[]);


    useEffect(() => {
      // Fonction qui s'auto appelle
      (async () => {
        
        if(resData.length > 0){
          const farms = await (resData.filter(farmer => (farmer.zipcode.toString().slice(0,2) === zipCode.toString().slice(0,2) )));
          setFarmers(farms);      
        }

      })();
      
    }, [cityStart]);



    return (
      <div className='main-container'>

        <div className='search-container'>
          <Search setZipCode={setZipCode} setCityStart={setCityStart} setLongMap={setLongMap} setLatMap={setLatMap}/>
        </div>

        <div className="map-container">
          
          <Map className="map" center={[longMap,latMap]} zoom={zoom} >
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker className="siege" key="posUtilisateur" position={posInitial} icon={siegeIcon}>
              <Popup>
              <p>Siège de Comparateur Agricole.com</p>
              </Popup>
            </Marker>
            {!isLoading && (farmers.map(farmer => (<Marker key={farmer.index} position={[farmer.lat,farmer.long]} icon={farmerIcon}>
              <Popup>
              <p className="i-am">J'ai un terrain de {farmer.id} ha </p>
              <p className="i-am">Agriculteur partenaire de la plateforme</p>
              </Popup>
            </Marker>)))}
          </Map>
        </div>

      </div>
    )
  } 

      
export default Mappy ;