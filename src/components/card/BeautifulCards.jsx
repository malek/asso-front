import React from "react";
import { Row, Col } from "react-bootstrap";
import { Button, ButtonGroup } from "react-bootstrap";

//import img1 from '../../assets/StaticCrads/img1.jpg';
// import img2 from '../../assets/StaticCrads/img2.jpg';
// import img3 from '../../assets/StaticCrads/img3.jpeg';
// import img4 from '../../assets/StaticCrads/img4.png';
import img1 from "../../assets/StaticCrads/img1.svg";
import img2 from "../../assets/StaticCrads/img2.svg";
import img3 from "../../assets/StaticCrads/img3.svg";
import img4 from "../../assets/StaticCrads/img4.svg";
const BeautifulCards = () => {
  return (
    <div style={cardsContainerStyle}>
      {cardData.map((card, index) => (
        <div key={index} style={cardStyle}>
          <img src={card.image} alt={card.title} style={imageStyle} />
          <div style={cardContentStyle}>
            <h3 style={cardTitleStyle}>{card.title}</h3>
            <Row className="justify-content-center">
              <Col>
              {card.infos.map((info, index) => (
                <React.Fragment key={index}>
                  <Button
                    onClick={() => {}}
                    className="mb-2"
                    style={{
                      backgroundColor: "#8675AA",
                      color: "white",
                      borderRadius: "15px",
                      margin: "2px",
                      border: "none",
                      padding: "1% 3% 1% 3%",
                      fontSize: "0.8rem",
                    }}
                  >
                    {info}
                  </Button>{" "}
                </React.Fragment>
              ))}
              </Col>
              
            </Row>
            <p style={cardDescriptionStyle}>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const cardsContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  padding: "10px",
  width: "90%",
  margin: "auto",
};

const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  margin: "10px",
  overflow: "hidden",
  width: "100%",
  height: "40%",
  borderRadius: "15px",
  background: "#FCFCFC",
};

const imageStyle = {
  width: "100%",
  //height: '100%',
  objectFit: "cover",
};

const cardContentStyle = {
  padding: "15px",
};

const cardTitleStyle = {
  margin: "0 0 10px 0",
  color: "#303030",
  fontFamily: "'SuperTea', sans-serif",
  fontSize: "1.1rem",
};

const cardDescriptionStyle = {
  margin: 0,
  color: "black",
  fontSize: "0.8rem",
};

const cardData = [
  {
    title: "ATELIER CRÉATIF PEINTURE !",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    infos: ["Loisir / Culture", "Lyon 7ème"],
    image: img1,
    Latitude: 45.7498956,
    Longitude: 4.8109887,
  },
  {
    title: "BUVETTE POUR LES ANIMAUX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    infos: ["Animaux", "Villeurbanne"],
    image: img2,
    Latitude: 45.7687569,
    Longitude: 4.8355748,
  },
  {
    title: "ANIMATION KARAOKÉ AVEC AINÉS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    infos: ["Social", "Santé", "Lyon 6ème"],
    image: img3,
    Latitude: 45.7566792,
    Longitude: 4.8796739,
  },
  {
    title: "REPAS CLUB DE FOOT POUSSINS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    infos: ["Social", "Lyon 6ème"],
    image: img4,
    Latitude: 45.7686816,
    Longitude: 4.8304588,
  },
];

export default BeautifulCards;
