import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import React, { useRef, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


import wavyDiv from "../../assets/feedImages/wavy.svg";
import addAvatar from "../../assets/inscription/addPicture.svg";

//navBar icons pictures
import monProfilIcon from "../../assets/feedImages/iconsNavBar/monProfilIcon.svg";
import messagerieIcon from "../../assets/feedImages/iconsNavBar/messagerieIcon.svg";
import settingsIcon from "../../assets/feedImages/iconsNavBar/settingsIcon.svg";
import eventsIcon from "../../assets/feedImages/iconsNavBar/eventsIcon.svg";



const AjoutEvent = () => {
    const [activeButton, setActiveButton] = useState("");

    const handleNavButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };

    
  const fileInputRef = useRef(null);
  const handleImageClick = () => {
    fileInputRef.current.click(); // Trigger the file input click event
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Add logic to handle the selected file, e.g., upload it or display it
    console.log("Selected File:", selectedFile);
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
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
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
              CRÉER UN EVENT
            </p>
          </div>
        </div>
      </Row>

      <Row className=" d-flex flex-column align-items-center mb-5 mt-2">
        <Card style={{ width: "22rem", borderRadius: "15px" }}>
          <div className=" d-flex flex-column align-items-center mb-1 mt-4">
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <Image
              src={addAvatar}
              roundedCircle
              onClick={handleImageClick}
              style={{ width: "30%" }}
            />
            <p style={{ color: "#8675AA" }}>Ajouter une image</p>
          </div>
          <Card.Body>
            <Row>
              <label
                htmlFor="ville"
                className="form-label"
                style={{ marginTop: "5%" }}
              >
                Titre de l'event :
              </label>
            </Row>
            <Row>
              <input
                type="text"
                id="ville"
                className="form-control"
                //placeholder="Entrez votre ville"
                required
                // value={ville}
                //onChange={handleInputChange}
                style={{
                  borderRadius: "15px",
                  padding: "2%",
                  backgroundColor: "#E2E2E2",
                }}
              />
            </Row>
            <Row>
              <label className="form-label" style={{ marginTop: "5%" }}>
                Catégorie de l'event :
              </label>
            </Row>

            <Row className="justify-content-center">
              <Col>
                {["Loisir / Culture", "Animaux", "Éducation"].map(
                  (interest, index) => (
                    <Button
                      key={interest}
                      variant={
                        selectedInterests.includes(interest)
                          ? "primary"
                          : "outline-primary"
                      }
                      onClick={() => toggleInterest(interest)}
                      className="mb-2"
                      style={{
                        backgroundColor: selectedInterests.includes(interest)
                          ? "#8675AA"
                          : "#ECECEC",
                        color: selectedInterests.includes(interest)
                          ? "white"
                          : "black",
                        borderRadius: "15px",
                        //margin: "4px", // Ajout d'un petit espace
                        border: "none", // Suppression de la couleur de la bordure
                        //marginTop: "-15%",
                        fontSize: "12px",
                      }}
                    >
                      {interest}
                    </Button>
                  )
                )}
              </Col>
            </Row>

            <Row className="justify-content-center d-flex d-block">
              <Col>
                {["Emploi", "Environnement", "Solidarité/Insertion"].map(
                  (interest, index) => (
                    <Button
                      key={interest}
                      variant={
                        selectedInterests.includes(interest)
                          ? "primary"
                          : "outline-primary"
                      }
                      onClick={() => toggleInterest(interest)}
                      className="mb-2"
                      style={{
                        backgroundColor: selectedInterests.includes(interest)
                          ? "#8675AA"
                          : "#ECECEC",
                        color: selectedInterests.includes(interest)
                          ? "white"
                          : "black",
                        borderRadius: "15px",
                        //  margin: "4px", // Ajout d'un petit espace
                        border: "none", // Suppression de la couleur de la bordure
                        // marginTop: "-5%",
                        fontSize: "12px",
                      }}
                    >
                      {interest}
                    </Button>
                  )
                )}
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col>
                {["Sport", "Vivre-ensemble", "Santé"].map((interest, index) => (
                  <Button
                    key={interest}
                    variant={
                      selectedInterests.includes(interest)
                        ? "primary"
                        : "outline-primary"
                    }
                    onClick={() => toggleInterest(interest)}
                    className="mb-2"
                    style={{
                      backgroundColor: selectedInterests.includes(interest)
                        ? "#8675AA"
                        : "#ECECEC",
                      color: selectedInterests.includes(interest)
                        ? "white"
                        : "black",
                      borderRadius: "15px",
                      //margin: "4px", // Ajout d'un petit espace
                      border: "none", // Suppression de la couleur de la bordure
                      fontSize: "12px",
                    }}
                  >
                    {interest}
                  </Button>
                ))}
              </Col>
            </Row>
            <Row>
              <label
                htmlFor="description"
                className="form-label"
                style={{
                  marginTop: "10px",
                }}
              >
                Description de l'event* :
              </label>{" "}
            </Row>
            <Row>
              <textarea
                id="description"
                //placeholder="50 MOTS MAX"
                className="form-control"
                //value={description}
                style={{
                  borderRadius: "15px",
                  resize: "none",
                  backgroundColor: "#E2E2E2",
                }}
                //onChange={handleInputChange}
                required
              />
            </Row>
            <Row>
              <label
                htmlFor="dob"
                className="form-label"
                style={{ marginTop: "5%" }}
              >
                Date :
              </label>
            </Row>
            <Row>
              <input
                type="date"
                id="dob"
                className="form-control"
                required
                //value={dateNaissance}
                //onChange={handleInputChange}
                style={{
                  borderRadius: "15px",
                }}
              />
            </Row>
            <Row>
              <label
                htmlFor="localisation"
                className="form-label"
                style={{ marginTop: "5%" }}
              >
                Localisation :
              </label>
            </Row>
            <Row>
              <input
                type="text"
                id="localisation"
                className="form-control"
                // placeholder="Entrez votre ville"
                required
                //value={ville}
                // onChange={handleInputChange}
                style={{
                  borderRadius: "15px",
                  backgroundColor: "#E2E2E2",
                }}
              />
            </Row>
            <div className="d-flex flex-column align-items-center mt-3">
              <Row className="col-10 mt-2" style={rowStyle}>
                <button style={buttonStyle}>
                  <Link
                    to="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: " 1rem",
                      //letterSpacing: "1px",
                    }}
                  >
                    ENREGISTRER EVENT
                  </Link>
                </button>
              </Row>

              <Row className="col-10 mt-2" style={rowStyle}>
                <button style={buttonStyle}>
                  <Link
                    to="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: " 1rem",
                      //letterSpacing: "1px",
                    }}
                  >
                    POSTER L'EVENT EN LIGNE
                  </Link>
                </button>
              </Row>

              <Row className="col-10 mt-2" style={rowStyle}>
                <button style={{ ...buttonStyle, backgroundColor: "#A7283E" }}>
                  <Link
                    to="/"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: " 1rem",
                      //letterSpacing: "1px",
                    }}
                  >
                    SUPPRIMER EVENT
                  </Link>
                </button>
              </Row>
            </div>
          </Card.Body>
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
            <Link to="/events">
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
export default AjoutEvent;
