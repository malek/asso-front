import React from "react";
import { Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Avatar from "../feedPage/Avatar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import wavyDiv from "../../assets/feedImages/wavy.svg";
import userAvatar from "../../assets/feedImages/usersPic/saif.jpeg";

//icons pictures
import monProfilIcon from "../../assets/feedImages/iconsNavBar/monProfilIcon.svg";
import messagerieIcon from "../../assets/feedImages/iconsNavBar/messagerieIcon.svg";
import settingsIcon from "../../assets/feedImages/iconsNavBar/settingsIcon.svg";
import notificationsIcon from "../../assets/feedImages/iconsNavBar/notificationsIcon.svg";

//badges Incons
import oiseauNocturne from "../../assets/feedImages/badges/oiseauNocturne.svg";
import pluridisciplinaire from "../../assets/feedImages/badges/pluridisciplinaire.svg";
import bienNote from "../../assets/feedImages/badges/bienNote.svg";

//events Icons


const Feed = () => {
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
    position: "fixed",
    bottom: 0,
    width: "100vw", // Make sure it spans the entire viewport width
    left: 0,
    padding: "2%",
    zIndex: 1000, // You can adjust the z-index as needed
  };

  const mesBadgesDiv = {
    backgroundColor: "white",
    height: "fit-content",
    margin: "0 0 5% 5%", // Adjust the left and right margin as needed
    padding: "2%",
    borderRadius: "15px",
  };
  const badgeButtonStyle = {
    backgroundColor: "#8675AA",
    padding: "10px 20px",
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
          <img src={wavyDiv} alt="Wavy" />
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
        <div style={mesBadgesDiv}>
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
            className="col-6"
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginLeft: "5%",
            }}
          >
            <button style={badgeButtonStyle}>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                VOIR MES BADGES
              </Link>
            </button>
          </Row>
        </div>
        <div style={mesBadgesDiv}>
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
            <Col><p
              
              style={{
                color: "#8675AA",
                fontFamily: "SuperTea",
                fontSize: "3rem"
                // display: "flex",
                // justifyContent: "start",
                // marginBottom: "5%",
              }}
            >
              4
            </p>
            </Col>
            <Col><p
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
              SAUVEGARDÉE
            </p></Col>
            <Col></Col>
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
            <Button style={{ border: "none" }}>
              <img src={monProfilIcon} alt="monProfil" />
            </Button>
          </Col>
          <Col>
            <Button style={{ border: "none" }}>
              <img src={messagerieIcon} alt="messagerie" />
            </Button>
          </Col>
          <Col>
            <Button style={{ border: "none" }}>
              <img src={notificationsIcon} alt="notification" />
            </Button>
          </Col>
          <Col>
            <Button style={{ border: "none" }}>
              <img src={settingsIcon} alt="settings" />
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Feed;
