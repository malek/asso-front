import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import wavyDiv from "../../assets/feedImages/wavy.svg";

//navBar icons pictures
import monProfilIcon from "../../assets/feedImages/iconsNavBar/monProfilIcon.svg";
import messagerieIcon from "../../assets/feedImages/iconsNavBar/messagerieIcon.svg";
import settingsIcon from "../../assets/feedImages/iconsNavBar/settingsIcon.svg";
import notificationsIcon from "../../assets/feedImages/iconsNavBar/notificationsIcon.svg";

const Parametre = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  //For the navBar btns
  const [activeButton, setActiveButton] = useState("settings");

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
    padding: "9px 4px 9px 40px",
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
    backgroundColor: buttonClicked ? "#A7283E" : "#8675AA",
    padding: "3% 10% 3% 10%",
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
    fontFamily: "SuperTea",
    borderRadius: "15px",
  };

  const handleButtonClick = () => {
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
                to="/"
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
                to="/"
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
                to="/"
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
                to="/"
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
                to="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: " 1.5rem",
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
                  fontSize: " 1.5rem",
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
            <Link to="/">
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
            <Link to="/">
              <Button
                style={{
                  border: "none",
                  backgroundColor:
                    activeButton === "notifications" ? "#E5D2EC" : "",
                }}
                onClick={() => handleNavButtonClick("notifications")}
              >
                <img src={notificationsIcon} alt="notification" />
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/">
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

export default Parametre;
