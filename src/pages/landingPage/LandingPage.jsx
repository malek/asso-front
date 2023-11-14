import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row"; // Import Row
import Col from "react-bootstrap/Col"; // Import Col

import profileUserSvg from "../../assets/profilUser.svg";
import profilAssociationSvg from "../../assets/profilAssociation.svg";
import logoAsso from "../../assets/Logo_noir.png";
const LandingPage = () => {
  const imageStyle = {
   // "padding-top": "1px",
    // width: "200px", // Set the desired width
    height: "200px", // Set the desired height
    //borderRadius: "50%", // Make the image round
    objectFit: "cover", // Ensure the image covers the entire container
  };

  const svgWidth = 100; // Set the desired width for the card images
  const svgHeight = 180; // Set the desired height for the card images

  const buttonStyle = {
    backgroundColor: "#7C048E", // Définissez la couleur personnalisée
    padding: "10px 20px", // Add padding for a button-like appearance
    textDecoration: "none", // Remove default link underline
    color: "white", // Set text color
    display: "inline-block", // Make it inline-block to set a specific width
  };
  const lienStyle = {
    color: "#7C048E", // Remplacez cette valeur par la couleur désirée
    // Vous pouvez également ajouter d'autres styles ici, si nécessaire
  };

  return (
    <div className="container-fluid p-4 justify-content-around">
      <Row className="justify-content-around">
        <Col>
          <div className="d-flex flex-column align-items-center mb-5 mt-5">
            <img src={logoAsso} alt="Profile" style={imageStyle} />
            <h1 className="fs-1">Vous êtes ... ?</h1>
            <h1 className="fs-2">
              Choisisez votre profil et et rejoignez-nous!!
            </h1>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-around">
        <Col xs={12} md={6} lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={profileUserSvg}
              alt="Profile User"
              width={svgWidth}
              height={svgHeight}
            />
            <Card.Body className="text-center">
              <Card.Title>Bénéficiaire</Card.Title>
              <Card.Text>Je souhaite se lancer dans le bénévolat.</Card.Text>
              <Link to="/candidat" style={buttonStyle}>
                S'inscrir
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={profilAssociationSvg}
              alt="Profile Association"
              width={svgWidth}
              height={svgHeight}
            />
            <Card.Body className="text-center">
              <Card.Title>Association</Card.Title>
              <Card.Text>
                Nous souhaitons partager des événements, missions, et
                opportunités de bénévolat avec vous.
              </Card.Text>
              <Link to="/association" style={buttonStyle}>
                S'inscrir
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="d-flex flex-column align-items-center mb-5 mt-5">
        <h1 className="fs-4">
          Vous avez déjà un compte ?{" "}
          <Link to="/login" style={lienStyle}>
            Connectez-vous ici.
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
