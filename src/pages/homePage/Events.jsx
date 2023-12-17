import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import BeautifulCards from "../../components/card/BeautifulCards";
import { Button } from "react-bootstrap";
import "../../assets/cardsImages/EventsPageStyles.css"; // Assurez-vous que le chemin est correct

import wavyDiv from "../../assets/feedImages/wavy.svg";

//navBar icons pictures
import monProfilIcon from "../../assets/feedImages/iconsNavBar/monProfilIcon.svg";
import messagerieIcon from "../../assets/feedImages/iconsNavBar/messagerieIcon.svg";
import settingsIcon from "../../assets/feedImages/iconsNavBar/settingsIcon.svg";
import eventsIcon from "../../assets/feedImages/iconsNavBar/eventsIcon.svg";

const Events = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null); // Ajoutez une référence ici
  //For the navBar btns
  const [activeButton, setActiveButton] = useState("events");

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isTrue = params.get("param") === "true";

  const handleAddClick = () => {
    setShowForm(true); // Afficher le formulaire
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

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
      <Row>
        <div style={containerStyle}>
          <img src={wavyDiv} alt="Wavy" style={{ width: "100%" }} />
          <Row>
            <div
              className="d-flex flex-column align-items-center mb-5 mt-5"
              style={textStyle}
            >
              <p className="fs-1 " style={{ letterSpacing: "2px" }}>
                Events
              </p>
              <div className="col-10">
                <form style={styleForm} className="nosubmit">
                  <input
                    style={styleInput}
                    className="nosubmit"
                    type="search"
                    placeholder="Chercher une association, mot clé..."
                  />
                </form>
              </div>
            </div>
          </Row>
        </div>
        <div className="d-flex flex-column align-items-center mt-1">
          <Link to={"/map"} style={buttonStyle}>
            <button onClick={handleAddClick}>Ouvrir carte</button>
          </Link>
        </div>
        <BeautifulCards /> {/* Ajout des cartes statiques */}
        <div className="d-flex flex-column align-items-center mb-5 mt-5">
          {isTrue ? (
            <button onClick={handleAddClick} style={buttonStyle}>
              <Link
                to="/addEvent"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                Ajouter un événement
              </Link>
            </button>
          ) : null}
          {/* {showForm && (
            <div ref={formRef}>
              <CardForm />
            </div>
          )} */}
        </div>
      </Row>
      <div style={divButtomNavBar} className="align-items-center ">
        <Row
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Col>
            {isTrue ? (
              <Link to="/feedAsso">
                <Button
                  style={{
                    border: "none",
                    backgroundColor:
                      activeButton === "monProfil" ? "#E5D2EC" : "",
                  }}
                  onClick={() => handleNavButtonClick("events")}
                >
                  <img src={monProfilIcon} alt="monProfil" />
                </Button>
              </Link>
            ) : (
              <Link to="/feedUser">
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
            )}
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
export default Events;

const buttonStyle = {
  backgroundColor: "#8675AA",
  padding: "3% 10% 3% 10% ",
  textDecoration: "none",
  color: "white",
  cursor: "pointer",
  fontFamily: "SuperTea",
  borderRadius: "15px",
  //marginTop: "5%",
};
