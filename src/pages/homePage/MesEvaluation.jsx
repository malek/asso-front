import React, { useRef, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

import wavyDiv from "../../assets/feedImages/wavy.svg";
import Avatar from "../feedPage/Avatar";
import userAvatarPic from "../../assets/feedImages/usersPic/saif.jpeg";
import etoilesIcon from "../../assets/feedImages/badges/autre/etoiles.svg";


//navBar icons pictures
import monProfilIcon from "../../assets/feedImages/iconsNavBar/monProfilIcon.svg";
import messagerieIcon from "../../assets/feedImages/iconsNavBar/messagerieIcon.svg";
import settingsIcon from "../../assets/feedImages/iconsNavBar/settingsIcon.svg";
import eventsIcon from "../../assets/feedImages/iconsNavBar/eventsIcon.svg";

const MesEvaluation = () => {
  const [activeButton, setActiveButton] = useState("");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isAsso = params.get("param") === "true";

 
  const handleNavButtonClick = (buttonName) => {
    window.location.href = `/${buttonName}?param=${isAsso}`;

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
          <div
            className="d-flex flex-column align-items-center mb-5 mt-5"
            style={textStyle}
          >
            <p
              className="fs-2"
              style={{ letterSpacing: "2px", marginRight: "-20%" }}
            >
              MES ÉVALUATIONS
            </p>
          </div>
        </div>
      </Row>
      <div
        className="d-flex flex-column align-items-start mb-3 mt-3"
        style={{ margin: "5%" }}
      >
        <h1 style={{ fontSize: "1.5rem" }}>J'AI REÇU...</h1>
      </div>

      <Row className=" d-flex flex-column align-items-center mb-5 mt-2">
        <Card style={{ width: "22rem", borderRadius: "15px" }}>
          <div className=" d-flex flex-column align-items-center mb-1 mt-1">
            <Avatar imageName={userAvatarPic} />
          </div>
          <div className=" d-flex flex-column align-items-start mb-1 mt-1">
            <p
              className="fs-2 mb-2"
              style={{ fontFamily: "'SuperTea', sans-serif" }}
            >
              Saif - bénévole
            </p>
            <p style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
              Équipe très chaleureuse, je suis ravi !
            </p>
          </div>
          <div className=" d-flex flex-column align-items-start mb-1 mt-2">
            <p style={{ fontSize: "1.1rem" }}>
              Merci pour cette belle collaboration, j'attends avec impatience la
              prochaine occasion!
            </p>
            <Row className="col-5 mt-2 mb-3">
              <img src={etoilesIcon} alt="etoiles" />
            </Row>
          </div>
        </Card>
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
              <Link to="/feedAsso">
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
              <Link to="/feedUser">
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
export default MesEvaluation;
