// Home.jsx
import React, { useState, useRef } from "react";
// import Card from './Card'; // Assurez-vous que le chemin est correct
import { useNavigate } from "react-router-dom";
import CardForm from "../../components/cardForm/cardForm";

import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "./home.css";

const cardsContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "10px",
  maxWidth: "400px",
  margin: "auto",
};

const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  margin: "10px",
  overflow: "hidden",
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
};

const cardContentStyle = {
  padding: "15px",
};

const cardTitleStyle = {
  margin: "0 0 10px 0",
  color: "#333",
};

const cardDescriptionStyle = {
  margin: 0,
  color: "#666",
};

const mapStyle = {
  minWidth: "100vw",
  height: "200px",
};

const listeAssos = [
  {
    Nom: "Asso 1",
    Adresse: "25 Rue Soeur Bouvier",
    Ville: "Lyon",
    Latitude: 45.7498956,
    Longitude: 4.8109887,
  },
  {
    Nom: "Asso 2",
    Adresse: "13 rue terraille",
    Ville: "Lyon",
    Latitude: 45.7687569,
    Longitude: 4.8355748,
  },
  {
    Nom: "Asso 3",
    Adresse: "22 rue Jean Jaurès",
    Ville: "Lyon",
    Latitude: 45.7566792,
    Longitude: 4.8796739,
  },
  {
    Nom: "Asso 4",
    Adresse: "1 rue Hippolyte Flandrin",
    Ville: "Lyon",
    Latitude: 45.7686816,
    Longitude: 4.8304588,
  },
  {
    Nom: "Asso 5",
    Adresse: "13 rue neuve",
    Ville: "Lyon",
    Latitude: 45.6354116,
    Longitude: 4.8547812,
  },
];

const cardData = listeAssos.map((asso) => {
  return {
    title: asso.Nom,
    description: `${asso.Adresse} ${asso.Ville}`,
    image: "https://placehold.co/300x200?text=Hello+World",
  };
});

const listeCartes = cardData.map((card, index) => (
  <div key={index} style={cardStyle}>
    <img src={card.image} alt={card.title} style={imageStyle} />
    <div style={cardContentStyle}>
      <h3 style={cardTitleStyle}>{card.title}</h3>
      <p style={cardDescriptionStyle}>{card.description}</p>
    </div>
  </div>
));

const listeMarqueursCarte = [];
for (const [index, asso] of listeAssos.entries()) {
  listeMarqueursCarte.push(
    <Marker position={[asso.Latitude, asso.Longitude]}>
      <Popup>
        {
          <div style={cardContentStyle}>
            <h3 style={cardTitleStyle}>{cardData[index].title}</h3>
            <p style={cardDescriptionStyle}>{cardData[index].description}</p>
          </div>
        }
      </Popup>
    </Marker>
  );
}

const homePage = () => {
  const [annonces, setAnnonces] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();
  const formRef = useRef(null); // Ajoutez une référence ici

  //   useEffect(() => {
  //     const fetchAnnonces = async () => {
  //       try {
  //         const response = await axios.get('http://localhost:8000/api/Annonces');
  //         setAnnonces(response.data);
  //       } catch (error) {
  //         console.error('Erreur lors de la récupération des annonces:', error);
  //       }
  //     };

  //     fetchAnnonces();
  //   }, []);
  const handleAddClick = () => {
    setShowForm(true); // Afficher le formulaire
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      <h1>Accueil</h1>
      <div style={cardsContainerStyle}>{listeCartes}</div>
      {/* Ajout des cartes statiques */}
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
      <button onClick={handleAddClick}>Ajouter un événement</button>
      {showForm && (
        <div ref={formRef}>
          <CardForm />
        </div>
      )}
      {/* Décommentez la ligne suivante si vous affichez des annonces dynamiques */}
      {/* {annonces.map((annonce, index) => (<Card key={index} {...annonce} />))} */}
    </div>
  );
};
export default homePage;
