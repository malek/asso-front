import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import cardData from "../../data/cardData"
import 'leaflet/dist/leaflet.css';

    const mapStyle = {
        minWidth: "100vw",
        height: "200px",
      };
      
      const listeMarqueursCarte = [];
      cardData.forEach((asso, index) => {
        listeMarqueursCarte.push(
          <Marker 
            key={index}  // Add a unique key here
            position={[asso.Latitude, asso.Longitude]}
          >
            {/* ... */}
          </Marker>
        );
      });
      
const MapPage = () => {


  return (
    <div id="map" style={mapStyle}>
        <MapContainer
          zoom={10}
          scrollWheelZoom={true}
          center={[45.7218649, 4.9157174]}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {listeMarqueursCarte}
        </MapContainer>
      </div>
  );
  };

export default MapPage;
