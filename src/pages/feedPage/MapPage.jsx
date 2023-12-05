import wavyDiv from "../../assets/feedImages/wavy.svg";
import { Row, Col } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import L from "leaflet";
//nav pictures
import monProfilIcon from "../../assets/feedImages/iconsNavBar/monProfilIcon.svg";
import messagerieIcon from "../../assets/feedImages/iconsNavBar/messagerieIcon.svg";
import settingsIcon from "../../assets/feedImages/iconsNavBar/settingsIcon.svg";
import eventsIcon from "../../assets/feedImages/iconsNavBar/eventsIcon.svg";

import "./home.css";
import markerIcon from "../../assets/mapIcons/marker.svg";
const purpleMarker = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const cardContentStyle = {
  padding: "15px",
};

const listeAssos = [
  {
    Nom: "ASSO PETIT-TRUCMUCHE",
    Adresse: "25 Rue Soeur Bouvier",
    Ville: "Lyon",
    Latitude: 45.7498956,
    Longitude: 4.8109887,
  },
  {
    Nom: "Atout délice",
    Adresse: "21 rue de la Libération",
    Ville: "Lyon",
    Latitude: 45.7687569,
    Longitude: 4.8355748,
  },
  {
    Nom: "La Niaque l'Asso",
    Adresse: "28, rue Denfert Rochereau",
    Ville: "Lyon",
    Latitude: 45.7754218449053,
    Longitude: 4.825128296473021,
  },
  {
    Nom: "Le Cocon",
    Adresse: "259 Rue Paul Bert",
    Ville: "Lyon",
    Latitude: 45.754287918005645,
    Longitude: 4.866902564193426,
  },
  {
    Nom: "Action Jeunesse Citoyenneté",
    Adresse: "38 avenue de Ménival",
    Ville: "Lyon",
    Latitude: 45.757189167120906,
    Longitude: 4.782942581127733,
  },
  {
    Nom: "Connect orientation",
    Adresse: "74 rue Crillon",
    Ville: "Lyon",
    Latitude: 45.77112374491159,
    Longitude: 4.853046143307122,
  },
  {
    Nom: "Association OKOUABO",
    Adresse: "11 impasse de l'Ecluse",
    Ville: "Lyon",
    Latitude: 45.794943509175305,
    Longitude: 4.829563862564668,
  },
  {
    Nom: "Les chats de Loyasse",
    Adresse: "3 rue Cardinal Gerlier",
    Ville: "Lyon",
    Latitude: 45.75961477795646,
    Longitude: 4.8135737797629226,
  },
  {
    Nom: "ADERLY",
    Adresse: "Place de la Bourse",
    Ville: "Lyon",
    Latitude: 45.7647826127203,
    Longitude: 4.836024662564667,
  },
  {
    Nom: "Etilesum",
    Adresse: "27-29 rue Garon-Duret",
    Ville: "Lyon",
    Latitude: 45.731794622861536,
    Longitude: 4.8572643644181035,
  },
];

const listeMarqueursCarte = [];
for (const [index, asso] of listeAssos.entries()) {
  listeMarqueursCarte.push(
    <Marker key={index} position={[asso.Latitude, asso.Longitude]}>
      <Popup>
        {<div style={cardContentStyle}>{/* Your popup content */}</div>}
      </Popup>
    </Marker>
  );
}

const MapPage = () => {
  const [activeButton, setActiveButton] = useState(null);
  const handleNavButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const containerStyle = {
    position: "relative",
    width: "100%",

    //height: "400px",
  };

  const textStyle = {
    position: "absolute",
    top: "20%",
    left: "20%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    fontFamily: "'SuperTea', sans-serif",
  };

  const styleForm = {
    color: "black",
    display: "flex",
    padding: "2px",
    borderRadius: "5px",
    margin: "0 0 30px",
    transform: "translate(35%, 30%)",
    border: "none", // Added as per your requirement
    fontFamily: "'RobotoFlex', sans-serif",
  };

  const styleInput = {
    border: "1px solid white",
    width: "100%",
    padding: "2px 4px 2px 40px",
    background:
      " white url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23444444' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\") no-repeat 13px center",
    //border: "none", // Added as per your requirement
    borderRadius: "15px",
  };

  const cardTitleStyle = {
    margin: "0 0 10px 0",
    color: "#333",
    fontFamily: "'SuperTea', sans-serif",
  };

  const cardDescriptionStyle = {
    margin: 0,
    color: "#666",
  };

  const mapStyle = {
    minWidth: "100vw",
    height: "98%",
  };
  const cardData = listeAssos.map((asso) => {
    return {
      title: asso.Nom,
      description: `${asso.Adresse} ${asso.Ville}`,
    };
  });

  const listeMarqueursCarte = [];
  for (const [index, asso] of listeAssos.entries()) {
    listeMarqueursCarte.push(
      <Marker
        key={index}
        position={[asso.Latitude, asso.Longitude]}
        icon={purpleMarker} // Set the custom icon here
      >
        <Popup>
          {
            <div style={cardContentStyle}>
              <h2 style={cardTitleStyle}>{cardData[index].title}</h2>
              <p style={cardDescriptionStyle}>{cardData[index].description}</p>
            </div>
          }
        </Popup>
      </Marker>
    );
  }

  const divButtomNavBar = {
    backgroundColor: "#8675AA",
    borderRadius: "15px 15px 0 0",
    //position: "fixed",
    bottom: 0,
    width: "100vw", // Make sure it spans the entire viewport width
    left: 0,
    padding: "2%",
    zIndex: 10, // You can adjust the z-index as needed
  };

  return (
    <div>
      <div style={containerStyle}>
        <img src={wavyDiv} alt="Wavy" style={{ width: "100%" }} />
        <Row>
          <div
            className="d-flex flex-column align-items-center mb-5 mt-5"
            style={textStyle}
          >
            <p
              className="fs-2"
              style={{ letterSpacing: "2px", marginRight: "-20%" }}
            >
              CARTE DES EVENTS
            </p>

            <div className="col-10">
              <form style={styleForm} className="nosubmit">
                <input
                  style={styleInput}
                  className="nosubmit"
                  type="search"
                  placeholder="Chercher un paramètre, mot clé..."
                />
              </form>
            </div>
          </div>
        </Row>
      </div>

      <div style={{ ...containerStyle, height: "700px" }}>
        <div id="map" style={mapStyle}>
          <MapContainer
            zoom={10}
            scrollWheelZoom={true}
            center={[45.7218649, 4.9157174]}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {listeMarqueursCarte}
          </MapContainer>
        </div>
      </div>
      <div style={divButtomNavBar} className="align-items-center ">
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Col>
            <Link to="/feedAsso">
              <Button
                style={{
                  border: "none",
                  backgroundColor:
                    activeButton === "monProfil" ? "#E5D2EC" : "",
                }}
                onClick={() => handleNavButtonClick("monProfil")}
              >
                <img src={monProfilIcon} alt="monProfil" />
              </Button>
            </Link>
          </Col>

          <Col>
            <Link to="/events">
              <Button
                style={{
                  border: "none",
                  backgroundColor: activeButton === "events" ? "#E5D2EC" : "",
                }}
                onClick={() => handleNavButtonClick("events")}
              >
                <img src={eventsIcon} alt="events" />
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/messagerie">
              <Button
                style={{
                  border: "none",
                  backgroundColor:
                    activeButton === "messagerie" ? "#E5D2EC" : "",
                }}
                onClick={() => handleNavButtonClick("messagerie")}
              >
                <img src={messagerieIcon} alt="messagerie" />
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/param">
              <Button
                style={{
                  border: "none",
                  backgroundColor: activeButton === "settings" ? "#E5D2EC" : "",
                }}
                onClick={() => handleNavButtonClick("settings")}
              >
                <img src={settingsIcon} alt="settings" />
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default MapPage;
