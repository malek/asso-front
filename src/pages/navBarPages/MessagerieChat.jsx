import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Avatar from "../feedPage/Avatar";

import wavyDiv from "../../assets/feedImages/wavy.svg";
import userAvatar from "../../assets/feedImages/usersPic/associationPicture.jpg";

//navBar icons pictures
import monProfilIcon from "../../assets/feedImages/iconsNavBar/monProfilIcon.svg";
import messagerieIcon from "../../assets/feedImages/iconsNavBar/messagerieIcon.svg";
import settingsIcon from "../../assets/feedImages/iconsNavBar/settingsIcon.svg";
import eventsIcon from "../../assets/feedImages/iconsNavBar/eventsIcon.svg";

const MessagerieChat = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  //For the navBar btns
  const [activeButton, setActiveButton] = useState("messagerie");

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

  const msgHistoriqueDivStyle = {
    backgroundColor: "white",
    height: "fit-content",
    margin: "0 0 5% 5%", // Adjust the left and right margin as needed
    padding: "2%",
    borderRadius: "15px",
    position: "relative", // Make sure the position is set to relative
    zIndex: 1, // Set the z-index to a value higher than the button's z-index
    width: "90%",
  };
  const rowStyle = {
    display: "flex",
    alignItems: "start", // Align items in the center vertically
    //marginBottom: "-10%", // Adjust margin as needed
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

  const leftMessageStyle = {
    width: "16rem",
    backgroundColor: "#BFB0DF",
    borderRadius: "0px 0px 0px 20%",
    padding: "1rem",
    outline: "none",
    marginBottom: "1rem", // Add margin at the bottom to separate messages
  };

  const rightMessageStyle = {
    width: "16rem",
    backgroundColor: "#8675AA",
    borderRadius: "0px 0px 20% 0px",
    padding: "1rem",
    outline: "none",
    marginBottom: "1rem",
    marginLeft: "auto", // Align message to the right
  };

  const messages = [
    "Bonjour ! Je suis très intéressé par votre atelier. Il y a-t-il un nombre de place disponible ?",
    "Pour les participants, non ! C'est ouvert à tous.",
    "Oh je vois ! C'est super, je compte ramener deux amis.",
    "Génial !",
  ];

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
                MESSAGERIE
              </p>
            </div>
          </Row>
        </div>

        <div
          style={msgHistoriqueDivStyle}
          className=" mt-3"
        >
          <div
            className=" d-flex flex-column align-items-center"
            //style={{ width: "100%" }}
          >
            <Row>
              <Avatar imageName={userAvatar} />
            </Row>
            <Row className=" d-flex flex-column align-items-center">
              <p
                className="fs-3"
                style={{
                  color: "black",
                  fontFamily: "SuperTea",
                  marginTop: "-10%",
                  marginBottom: "3%",
                }}
              >
                ASSO TRUCMUCHE
              </p>
            </Row>
          </div>
          <div>
            {messages.map((message, index) => (
              <div
                key={index}
                tabIndex="0"
                className="relative group"
                style={index % 2 === 0 ? rightMessageStyle : leftMessageStyle}
              >
                <p>{message}</p>
              </div>
            ))}
          </div>
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

export default MessagerieChat;
