import React from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import wavyDiv from "../../assets/feedImages/wavy.svg";
import userAvatar from "../../assets/feedImages/usersPic/saif.jpeg";

//navBar icons pictures
import monProfilIcon from "../../assets/feedImages/iconsNavBar/monProfilIcon.svg";
import messagerieIcon from "../../assets/feedImages/iconsNavBar/messagerieIcon.svg";
import settingsIcon from "../../assets/feedImages/iconsNavBar/settingsIcon.svg";
import eventsIcon from "../../assets/feedImages/iconsNavBar/eventsIcon.svg";

//badges Incons
import oiseauNocturne from "../../assets/feedImages/badges/oiseauNocturne.svg";
import pluridisciplinaire from "../../assets/feedImages/badges/pluridisciplinaire.svg";
import bienNote from "../../assets/feedImages/badges/bienNote.svg";

//events Icons
import heartIcon from "../../assets/feedImages/badges/autre/heart.svg";
import heartPleinIcon from "../../assets/feedImages/badges/autre/heartPlein.svg";
import styloIcon from "../../assets/feedImages/badges/autre/stylo.svg";
import boiteComntaireIcon from "../../assets/feedImages/badges/autre/boiteComntaire.svg";
import etoilesIcon from "../../assets/feedImages/badges/autre/etoiles.svg";

const FeedUser = () => {
  const [activeButton, setActiveButton] = useState("monProfil");
  const handleNavButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const containerStyle = {
    position: "relative",
    width: "100%",
  };

  const textStyle = {
    position: "absolute",
    top: "20%",
    left: "30%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    fontFamily: "'SuperTea', sans-serif",
  };
  const avatarRow = {
    marginTop: "-25%",
  };

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

  const titreDivStyle = {
    backgroundColor: "white",
    height: "fit-content",
    margin: "0 0 5% 5%", // Adjust the left and right margin as needed
    padding: "2%",
    borderRadius: "15px",
    position: "relative", // Make sure the position is set to relative
    zIndex: 1, // Set the z-index to a value higher than the button's z-index
    width: "90%",
  };
  const titreButtonStyle = {
    backgroundColor: "#8675AA",
    padding: "10px 10px ",
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
    fontFamily: "SuperTea",
    borderRadius: "15px",
    marginTop: "5%",
  };
  const badgeIconStyle = {
    width: "50%", // Adjust the width as needed
    height: "50%", // Adjust the height as needed
  };

  useEffect(() => {
    // Disable scrolling on mount
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";

    // Re-enable scrolling on unmount or component update
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      <Row>
        <div style={containerStyle}>
          <img src={wavyDiv} alt="Wavy" style={{ width: "100%" }} />
          <div
            className="d-flex flex-column align-items-center mb-5 mt-5"
            style={textStyle}
          >
            <p
              className="fs-2"
              style={{ letterSpacing: "2px", marginRight: "-20%" }}
            >
              TABLEAU DE BORD
            </p>
          </div>
        </div>
      </Row>
      <Row style={avatarRow}>
        <div className=" d-flex flex-column align-items-center mb-5 mt-5">
          <Row>
            <Avatar imageName={userAvatar} />
          </Row>
          <Row>
            <Col className=" d-flex flex-column align-items-end">
              <p
                className="fs-3"
                style={{
                  color: "black",
                  fontFamily: "SuperTea",
                  marginTop: "-20%",
                }}
              >
                SAIF.F
              </p>
            </Col>
            <Col>
              <Button
                style={{
                  backgroundColor: "#8675AA",
                  color: "white",
                  borderRadius: "15px",
                  margin: "4px", // Ajout d'un petit espace
                  border: "none", // Suppression de la couleur de la bordure
                  marginTop: "-15%",
                }}
              >
                Bénévol.e
              </Button>
            </Col>
          </Row>
        </div>
        <div style={titreDivStyle}>
          <Row>
            <p
              className="fs-3"
              style={{
                color: "black",
                fontFamily: "SuperTea",
                letterSpacing: "2px",
                display: "flex",
                justifyContent: "start",
                marginBottom: "5%",
              }}
            >
              MES BADGES
            </p>
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Col>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={oiseauNocturne}
                  alt="oiseauBadge"
                  style={badgeIconStyle}
                />
              </Row>
              <Row>
                {" "}
                <p>Oiseau nocturne</p>
              </Row>
            </Col>
            <Col>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={pluridisciplinaire}
                  alt="disciplineBadge"
                  style={badgeIconStyle}
                />
              </Row>
              <Row>
                {" "}
                <p>Pluridisciplinaire</p>
              </Row>
            </Col>
            <Col>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={bienNote}
                  alt="bienNoteBadge"
                  style={badgeIconStyle}
                />
              </Row>
              <Row>
                <p>Très bien noté</p>
              </Row>
            </Col>
          </Row>
          <Row
            className="col-5"
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginLeft: "5%",
            }}
          >
            <button style={titreButtonStyle}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                VOIR MES BADGES
              </Link>
            </button>
          </Row>
        </div>
        <div style={titreDivStyle}>
          <Row>
            <p
              className="fs-3"
              style={{
                color: "black",
                fontFamily: "SuperTea",
                letterSpacing: "2px",
                display: "flex",
                justifyContent: "start",
                marginBottom: "5%",
              }}
            >
              MES EVENTS
            </p>
          </Row>
          <Row>
            <Col className="col-1">
              <p
                style={{
                  color: "#8675AA",
                  fontFamily: "SuperTea",
                  fontSize: "3rem",
                  display: "flex",
                  justifyContent: "start",
                  marginTop: "-100%",
                }}
              >
                4
              </p>
            </Col>
            <Col className="col-8">
              <p
                className="fs-3"
                style={{
                  color: "black",
                  fontFamily: "SuperTea",
                  letterSpacing: "2px",
                  display: "flex",
                  justifyContent: "center",
                  //  marginLeft: "-40%",
                }}
              >
                SAUVEGARDÉE
              </p>
            </Col>
            <Col className="col-3">
              <img
                src={heartIcon}
                alt="heartIcon"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  marginLeft: "-70%",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col className="col-1">
              <p
                style={{
                  color: "#8675AA",
                  fontFamily: "SuperTea",
                  fontSize: "3rem",
                  display: "flex",
                  justifyContent: "start",
                  marginTop: "-25%",
                }}
              >
                2
              </p>
            </Col>
            <Col className="col-8">
              <p
                className="fs-3"
                style={{
                  color: "black",
                  fontFamily: "SuperTea",
                  letterSpacing: "2px",
                  display: "flex",
                  justifyContent: "center",
                  //marginLeft: "-30%",
                }}
              >
                PARTICIPATIONS
              </p>
            </Col>
            <Col className="col-3">
              <img
                src={heartPleinIcon}
                alt="heartPlein"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  marginLeft: "-50%",
                }}
              />
            </Col>
          </Row>
          <Row
            className="col-7"
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginLeft: "5%",
            }}
          >
            <button style={titreButtonStyle}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                CONSULTER MES EVENTS
              </Link>
            </button>
          </Row>
        </div>

        <div style={titreDivStyle}>
          <Row>
            <p
              className="fs-3"
              style={{
                color: "black",
                fontFamily: "SuperTea",
                letterSpacing: "2px",
                display: "flex",
                justifyContent: "start",
                marginBottom: "5%",
              }}
            >
              MES ÉVALUATIONS
            </p>
          </Row>
          <Row>
            <Col className="col-1">
              <p
                style={{
                  color: "#8675AA",
                  fontFamily: "SuperTea",
                  fontSize: "3rem",
                  display: "flex",
                  justifyContent: "start",
                  marginTop: "-50%",
                }}
              >
                5
              </p>
            </Col>
            <Col className="col-9">
              <p
                className="fs-3"
                style={{
                  color: "black",
                  fontFamily: "SuperTea",
                  letterSpacing: "1px",
                  display: "flex",
                  justifyContent: "start",
                  //marginLeft: "-40%",
                }}
              >
                ÉVALUATIONS DONNÉES
              </p>
            </Col>
            <Col className="col-2">
              <img
                src={styloIcon}
                alt="styloIcon"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  //marginLeft: "-100%",
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col className="col-1">
              <p
                style={{
                  color: "#8675AA",
                  fontFamily: "SuperTea",
                  fontSize: "3rem",
                  display: "flex",
                  justifyContent: "start",
                  marginTop: "-25%",
                }}
              >
                2
              </p>
            </Col>
            <Col className="col-9">
              <p
                className="fs-3"
                style={{
                  color: "black",
                  fontFamily: "SuperTea",
                  letterSpacing: "2px",
                  display: "flex",
                  justifyContent: "start",
                  // marginLeft: "-30%",
                }}
              >
                ÉVALUATION REÇUES
              </p>
            </Col>
            <Col className="col-2">
              <img
                src={boiteComntaireIcon}
                alt="boiteComntaire"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  //marginLeft: "-20%",
                }}
              />
            </Col>
          </Row>
          <Row>
            <p
              className="fs-3"
              style={{
                color: "black",
                fontFamily: "SuperTea",
                letterSpacing: "2px",
                display: "flex",
                justifyContent: "start",
                marginBottom: "5%",
              }}
            >
              MA MOYENNE
            </p>
          </Row>
          <Row className="col-5">
            <img src={etoilesIcon} alt="etoiles" />
          </Row>
          <Row
            className="col-8"
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginLeft: "5%",
            }}
          >
            <button style={titreButtonStyle}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                CONSULTER MES ÉVALUATIONS
              </Link>
            </button>
          </Row>
        </div>

        <Row
          className="col-10"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "5%",
          }}
        >
          <button style={titreButtonStyle}>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1.5rem",
                letterSpacing: "2px",
              }}
            >
              PARAMÈTRES
            </Link>
          </button>
        </Row>
      </Row>

      {/* <Navbar className="bottonNavBar">
        <Container className="d-flex justify-content-center">
          <Nav className=" me-auto"  >
            <Nav.Link href="#home"><img src={monProfilIcon} alt="monProfil" /></Nav.Link>
            <Nav.Link href="#features"><img src={messagerieIcon} alt="messagerie" /></Nav.Link>
            <Nav.Link href="#pricing"><img src={eventsIcon} alt="notification" /></Nav.Link>
            <Nav.Link href="#pricing"><img src={settingsIcon} alt="settings" /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       */}

      <div style={divButtomNavBar} className="align-items-center ">
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Col>
          <Link to="/feedUser">
            <Button
              style={{
                border: "none",
                backgroundColor: activeButton === "monProfil" ? "#E5D2EC" : "",
              }}
              onClick={() => handleNavButtonClick("monProfil")}
            >
              <img src={monProfilIcon} alt="monProfil" />
            </Button>
            </Link>
          </Col>

          <Col>
          <Link to="/">
            <Button
              style={{
                border: "none",
                backgroundColor:
                  activeButton === "events" ? "#E5D2EC" : "",
              }}
              onClick={() => handleNavButtonClick("events")}
            >
              <img src={eventsIcon} alt="events" />
            </Button>
            </Link>
          </Col>
          <Col>
          <Link to="/">
            <Button
              style={{
                border: "none",
                backgroundColor: activeButton === "messagerie" ? "#E5D2EC" : "",
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

export default FeedUser;
