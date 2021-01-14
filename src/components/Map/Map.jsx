import React, {Component, useState, useEffect} from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leafGreen from '../../assets/leaf-green.png';
import leafRed from '../../assets/leaf-red.png';
import leafOrange from '../../assets/leaf-orange.png';
import leafShadow from '../../assets/leaf-shadow.png';
import './Map.css';
import Search from '../../components/SearchBar/Search';

/* const Mappy = () => {
  
    const [greenIcon, setGreenIcon] = useState({ lat: 35.787449, lng: -78.6438197 });
    const [redIcon, setRedIcon] = useState({ lat: 35.774416, lng: -78.633271 });
    const [orangeIcon, setOrangeIcon] = useState({ lat: 35.772790, lng: -78.652305 });
    const [zoom, setZoom] = useState(13);

    const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
    const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
    const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];

    useEffect(() => {
      greenIcon(L.icon({
        iconUrl: leafGreen,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76]
      }));
    
      redIcon = L.icon({
        iconUrl: leafRed,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
      });
    
      orangeIcon = L.icon({
        iconUrl: leafOrange,
        shadowUrl: leafShadow,
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -86]
      });
    }, []);

    return (
      <div className='main-container'>

        <div className='search-container'>
          <Search />
        </div>

        <div className="map-container">
          
          <Map className="map" center={positionGreenIcon} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={positionGreenIcon} icon={this.grenIcon}>
              <Popup>
              I am a green leaf
              </Popup>
            </Marker>
            <Marker position={positionRedIcon} icon={this.redIcon}>
              <Popup>
              I am a red leaf
              </Popup>
            </Marker>
            <Marker position={positionOrangeIcon} icon={this.orangeIcon}>
              <Popup>
              I am an orange leaf
              </Popup>
            </Marker>
          </Map>
        </div>

      </div>
    )
  } */

class Mappy extends Component {
  
    state = {
      greenIcon: {
        lat: 35.787449,
        lng: -78.6438197,
      },
      redIcon: {
        lat: 35.774416,
        lng: -78.633271,
      },
      orangeIcon: {
        lat: 35.772790,
        lng: -78.652305,
      },
      zoom: 13
    }
  
  
    grenIcon = L.icon({
      iconUrl: leafGreen,
      shadowUrl: leafShadow,
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76]
    });
  
    redIcon = L.icon({
      iconUrl: leafRed,
      shadowUrl: leafShadow,
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -86]
    });
  
    orangeIcon = L.icon({
      iconUrl: leafOrange,
      shadowUrl: leafShadow,
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -86]
    });
  
    render(){
      const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng];
      const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng];
      const positionOrangeIcon = [this.state.orangeIcon.lat, this.state.orangeIcon.lng];
      return (
        <>

          <div className="map-container">
            

            <Map className="map" center={positionGreenIcon} zoom={this.state.zoom}>

              <div className='search-container'>
                <Search />
              </div>

              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={positionGreenIcon} icon={this.grenIcon}>
                <Popup>
                I am a green leaf
                </Popup>
              </Marker>
              <Marker position={positionRedIcon} icon={this.redIcon}>
                <Popup>
                I am a red leaf
                </Popup>
              </Marker>
              <Marker position={positionOrangeIcon} icon={this.orangeIcon}>
                <Popup>
                I am an orange leaf
                </Popup>
              </Marker>
            </Map>
          </div>

        </>
      )}}
      
export default Mappy ;