import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import wavyDiv from "../../assets/feedImages/wavy.svg";

//navBar icons pictures
import monProfilIcon from "../../assets/feedImages/iconsNavBar/monProfilIcon.svg";
import messagerieIcon from "../../assets/feedImages/iconsNavBar/messagerieIcon.svg";
import settingsIcon from "../../assets/feedImages/iconsNavBar/settingsIcon.svg";
import eventsIcon from "../../assets/feedImages/iconsNavBar/eventsIcon.svg";

const Parametre = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  //For the navBar btns
  const [activeButton, setActiveButton] = useState("param");

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isAsso = params.get("param") === "true";

  const handleNavButtonClick = (buttonName) => {
    window.location.href = `/${buttonName}?param=${isAsso}`;
    setActiveButton(buttonName);
  };

  //for the confirmation delete btn
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

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
  const deleteButtonStyle = {
    backgroundColor: "#A7283E",
    padding: "3% 10% 3% 10%",
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
    fontFamily: "SuperTea",
    borderRadius: "15px",
  };

  const handleButtonClick = () => {
    const confirmDelete = window.confirm(
      "Vous voulez Vraiment nous quitter? \n :("
    );
    if (confirmDelete) {
      window.location.href = '/'
    }
    setButtonClicked(true);
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
              <p
                className="fs-2"
                style={{ letterSpacing: "2px", marginRight: "-20%" }}
              >
                PARAMÈTRES
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

        <div className="d-flex flex-column align-items-center mb-5 mt-2">
          <Row className="col-10 mt-2" style={rowStyle}>
            <button style={buttonStyle}>
              <Link
                to=""
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: " 1.5rem",
                  letterSpacing: "2px",
                }}
              >
                NOTIFICATIONS
              </Link>
            </button>
          </Row>
          <Row className="col-10 mt-5" style={rowStyle}>
            <button style={buttonStyle}>
              <Link
                to=""
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: " 1.5rem",
                  letterSpacing: "2px",
                }}
              >
                MODIFIER PROFIL
              </Link>
            </button>
          </Row>
          <Row className="col-10 mt-5" style={rowStyle}>
            <button style={buttonStyle}>
              <Link
                to=""
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: " 1.5rem",
                  letterSpacing: "2px",
                }}
              >
                ACCESSIBILITÉ
              </Link>
            </button>
          </Row>
          <Row className="col-10 mt-5" style={rowStyle}>
            <button style={buttonStyle}>
              <Link
                to=""
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: " 1.5rem",
                  letterSpacing: "2px",
                }}
              >
                CONFIDENTIALITÉ
              </Link>
            </button>
          </Row>
          <Row className="col-10 mt-5" style={rowStyle}>
            <button style={buttonStyle}>
              <Link
                to=""
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: " 1.3rem",
                  letterSpacing: "2px",
                }}
              >
                CONTACT ASSOSHARE
              </Link>
            </button>
          </Row>
          <Row className="col-10 mt-5" style={rowStyle}>
            <button style={deleteButtonStyle}>
              <Link
                to=""
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: " 1.2rem",
                  letterSpacing: "2px",
                }}
                onClick={handleButtonClick}
              >
                SUPPRIMER MON COMPTE
              </Link>
            </button>
          </Row>
          
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
            {isAsso ? (
              <Link to="">
                <Button
                  style={{
                    border: "none",
                    backgroundColor:
                      activeButton === "feedAsso" ? "#E5D2EC" : "",
                  }}
                  onClick={() => handleNavButtonClick("feedAsso")}
                >
                  <img src={monProfilIcon} alt="monProfil" />
                </Button>
              </Link>
            ) : (
              <Link to="">
                <Button
                  style={{
                    border: "none",
                    backgroundColor:
                      activeButton === "feedUser" ? "#E5D2EC" : "",
                  }}
                  onClick={() => handleNavButtonClick("feedUser")}
                >
                  <img src={monProfilIcon} alt="monProfil" />
                </Button>
              </Link>
            )}
          </Col>

          <Col>
            <Link to="">
              <Button
                style={{
                  border: "none",
                  backgroundColor: activeButton === "events" ? "#E5D2EC" : "",
                }}
                onClick={() => handleNavButtonClick("events")}
              >
                <img src={eventsIcon} alt="notification" />
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="">
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
            <Link to="">
              <Button
                style={{
                  border: "none",
                  backgroundColor: activeButton === "param" ? "#E5D2EC" : "",
                }}
                onClick={() => handleNavButtonClick("param")}
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

export default Parametre;
