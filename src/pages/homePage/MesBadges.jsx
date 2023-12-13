import React, { useRef, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";

import wavyDiv from "../../assets/feedImages/wavy.svg";

//nav pictures
import monProfilIcon from "../../assets/feedImages/iconsNavBar/monProfilIcon.svg";
import messagerieIcon from "../../assets/feedImages/iconsNavBar/messagerieIcon.svg";
import settingsIcon from "../../assets/feedImages/iconsNavBar/settingsIcon.svg";
import eventsIcon from "../../assets/feedImages/iconsNavBar/eventsIcon.svg";

//badges Incons
import oiseauNocturne from "../../assets/feedImages/badges/oiseauNocturne.svg";
import pluridisciplinaire from "../../assets/feedImages/badges/pluridisciplinaire.svg";
import bienNote from "../../assets/feedImages/badges/bienNote.svg";

import ami from "../../assets/feedImages/badges/amiEnfants.svg";
import reactif from "../../assets/feedImages/badges/reactif.svg";
import bavard from "../../assets/feedImages/badges/bavard.svg";
import chat from "../../assets/feedImages/badges/chat.svg";

const MesBadges = () => {
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
  const badgeIconStyle = {
    width: "50%", // Adjust the width as needed
    height: "50%", // Adjust the height as needed
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
              MES BADGES
            </p>
          </div>
        </div>
      </Row>

      <Row className=" d-flex flex-column align-items-center mb-5 mt-2">
        <Card style={{ width: "22rem", borderRadius: "15px" }}>
          <div className=" d-flex flex-column align-items-start mb-2 mt-1">
            <p
              className="fs-2 mb-2"
              style={{ fontFamily: "'SuperTea', sans-serif" }}
            >
              BAGDES OBTENUS
            </p>
          </div>
          <div className=" d-flex flex-column align-items-center ">
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Col className="col-4">
                <Row>
                  <img
                    src={oiseauNocturne}
                    alt="oiseauBadge"
                    style={badgeIconStyle}
                  />
                </Row>
                <Row>
                  <p>Oiseau Nocturne</p>
                </Row>
              </Col>
              <Col className="col-4">
                <Row>
                  <img
                    src={pluridisciplinaire}
                    alt="disciplineBadge"
                    style={badgeIconStyle}
                  />
                </Row>{" "}
                <Row>
                  <p>Pluridisciplinaire</p>
                </Row>
              </Col>
              <Col className="col-4">
                <Row>
                  {" "}
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
              className="mb-4 "
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Col className="col-4">
                <Row>
                  <img src={ami} alt="amiEnfantsBadge" style={badgeIconStyle} />
                </Row>{" "}
                <Row>
                  <p>Ami des enfants</p>
                </Row>
              </Col>
              <Col className="col-4">
                <Row>
                  <img
                    src={reactif}
                    alt="reactifBadge"
                    style={badgeIconStyle}
                  />
                </Row>
                <Row>
                  <p>Très réactif</p>
                </Row>
              </Col>
              <Col className="col-4">
                <Row>
                  <img src={bavard} alt="bavardBadge" style={badgeIconStyle} />
                </Row>
                <Row>
                  <p>Bavard</p>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Col className="mb-3">
                <Row>
                  <img src={chat} alt="chatBadge" style={badgeIconStyle} />
                </Row>
                <Row>
                  <p>Ami des animaux</p>
                </Row>
              </Col>
            </Row>
          </div>
        </Card>

        <Row className=" d-flex flex-column align-items-center mb-5 mt-2">
          <Card style={{ width: "22rem", borderRadius: "15px" }}>
            <div className=" d-flex flex-column align-items-start mb-2 mt-1">
              <p
                className="fs-2 mb-2"
                style={{ fontFamily: "'SuperTea', sans-serif" }}
              >
                MES BADGES AFFICHÉS
              </p>
            </div>

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
            <div className=" d-flex flex-column align-items-center mb-3 mt-1">
              <Row
                className="col-10"
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <button style={titreButtonStyle}>
                  <Link
                    to=""
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    SÉLECTIONNER D'AUTRES BADGES
                  </Link>
                </button>
              </Row>
            </div>
          </Card>
        </Row>
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
                <img src={eventsIcon} alt="events" />
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
export default MesBadges;
