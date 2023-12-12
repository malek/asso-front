import React, { useRef, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

import addAvatar from "../../assets/inscription/addPicture.svg";
import purpleButtomFlowers from "../../assets/inscription/purpleButtomFlowers.svg";

import axios from "axios";

const AssociationPage2 = () => {
  const navigate = useNavigate();
  const initialUserDataAsso =
    JSON.parse(sessionStorage.getItem("userDataAsso")) || {};
  const [formIsValid, setFormIsValid] = useState(false);
  const [description, setDescription] = useState("");
  const [nom, setNom] = useState("");

  const buttonStyle = {
    backgroundColor: "#8675AA",
    padding: "10px 20px",
    textDecoration: "none",
    color: "white",
    display: "inline-block",
    cursor: "pointer",
    marginTop: "5%", // Change "margin-top" to marginTop
    //marginLeft: "35%", // Change "margin-left" to marginLeft
    fontFamily: "SuperTea", // Change "font-family" to fontFamily
    position: "relative",
    zIndex: 1,
    borderRadius: "15px",
  };
  const imageStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
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

  const [subscribe, setSubscribe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
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

  const interests = [
    "Loisir / Culture",
    "Animaux",
    "Éducation",
    "Empoloi",
    "Environnement",
    "Solidarité / Insertion",
    "Sport",
    "Vivre-ensemble",
    "Santé",
  ];

  const handleDescriptionChange = (e) => {
    const inputDescription = e.target.value;
    // Implement logic to limit the Description to 50 words
    const words = inputDescription.trim().split(/\s+/);
    if (words.length <= 100) {
      setDescription(inputDescription);
    }
  };
  const ajouterAsso = async (finalUserDataAsso) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users",
        finalUserDataAsso
      );
      // Gérer la réponse, par exemple en redirigeant l'utilisateur
      // vers une autre page ou en affichant un message de succès
      // Remplacez par le chemin de votre page
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur :", error);
      // Gérer l'erreur, par exemple en affichant un message d'erreur
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const finalUserDataAsso = {
      ...initialUserDataAsso,
      description: description,
      nom: nom,
    };
    if (!formIsValid) return;
    const userData = {
      nom: "nom",
      description: "description",
    };
    try {
      ajouterAsso(finalUserDataAsso);
      console.log("Données finales soumises:", finalUserDataAsso); // Afficher dans la console
      navigate("/finalisationInscription");
      const isAsso = true; // To send it to finalisation page so it can send it to desplay feed asso
      window.location.href = `/finalisationInscription?param=${isAsso}`;
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      // Gérer l'erreur, par exemple en affichant un message d'erreur
    }
  };

  const handleSubscribeChange = () => {
    setSubscribe(!subscribe);
  };

  const handleAgreeTermsChange = () => {
    setAgreeTerms(!agreeTerms);
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

  useEffect(() => {
    const isValid = nom && description && agreeTerms;
    setFormIsValid(isValid);

    // Cleanup function for form validation useEffect
  }, [nom, description, agreeTerms, subscribe]);

  const handleInputChange = (e) => {
    // Perform validation or checks based on your requirements
    // For simplicity, this example checks if all required fields have a value
    const inputs = document.querySelectorAll(
      "input[required], select[required]"
    );
    // const isValid = Array.from(inputs).every((input) => input.checkValidity());

    //  setFormIsValid(isValid);
    switch (e.target.id) {
      case "nom":
        setNom(e.target.value);
        break;
      case "description":
        handleDescriptionChange(e);
        break;
    }
    // Vérifier si le formulaire est valide
    const isValid = Array.from(
      document.querySelectorAll("input[required], select[required]")
    ).every((input) => input.checkValidity());
    setFormIsValid(isValid);
  };

  const purpleDivStyle = {
    background: "#8675AA",
    color: "white",
    borderRadius: "0 0 18% 18%",
    letterSpacing: "2px",
    fontFamily: "'SuperTea', sans-serif",
    marginTop: "-10%",
  };

  return (
    <div className="mb-5">
      <Row>
        <div style={purpleDivStyle}>
          <div className="d-flex flex-column align-items-center mb-5 mt-5">
            <p className="fs-3" style={{ marginTop: "5%" }}>
              JE SUIS UNE ASSO !
            </p>
            <p className="fs-3" style={{ marginBottom: "-5%" }}>
              ÉTAPE 2
            </p>
          </div>
        </div>

        <div className="container p-4">
          <div className="d-flex flex-column align-items-center mb-5 mt-5">
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
              style={{ marginTop: "-15%" }}
            />
          </div>

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
                        : "white",
                      color: selectedInterests.includes(interest)
                        ? "white"
                        : "black",
                      borderRadius: "15px",
                      margin: "4px", // Ajout d'un petit espace
                      border: "none", // Suppression de la couleur de la bordure
                      marginTop: "-15%",
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
                        : "white",
                      color: selectedInterests.includes(interest)
                        ? "white"
                        : "black",
                      borderRadius: "15px",
                      margin: "4px", // Ajout d'un petit espace
                      border: "none", // Suppression de la couleur de la bordure
                      marginTop: "-5%",
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
                      : "white",
                    color: selectedInterests.includes(interest)
                      ? "white"
                      : "black",
                    borderRadius: "15px",
                    margin: "4px", // Ajout d'un petit espace
                    border: "none", // Suppression de la couleur de la bordure
                  }}
                >
                  {interest}
                </Button>
              ))}
            </Col>
          </Row>

          <form className="row g-2" onSubmit={handleSubmit}>
            <Row>
              <label
                htmlFor="nom"
                className="form-label"
                style={{ marginTop: "5%" }}
              >
                Le nom de mon association :
              </label>
            </Row>
            <Row xs={5} md={5}>
              <input
                type="text"
                className="form-control"
                id="nom"
                value={nom}
                onChange={handleInputChange}
                style={{
                  borderRadius: "15px",
                }}
                required
              />
            </Row>

            <Row>
              <label
                htmlFor="description"
                className="form-label"
                style={{
                  marginTop: "10px",
                }}
              >
                Courte description :
              </label>{" "}
            </Row>
            <Row>
              <textarea
                id="description"
                placeholder="50 MOTS MAX"
                className="form-control"
                value={description}
                style={{
                  borderRadius: "15px",
                  resize: "none",
                }}
                onChange={handleInputChange}
                required
              />
            </Row>
            <Row
              style={{
                marginTop: "10px",
              }}
            >
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="subscribe"
                  checked={subscribe}
                  onChange={handleSubscribeChange}
                />
                <label className="form-check-label" htmlFor="subscribe">
                  Je souhaite recevoir des actualités d'AssoShare et du monde
                  associatif.
                </label>
              </div>
            </Row>
            <Row
              style={{
                marginTop: "10px",
              }}
            >
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={handleAgreeTermsChange}
                  required
                />
                <label className="form-check-label" htmlFor="agreeTerms">
                  J'ai lu et accepté les conditions d'utilisation de la
                  plateforme Assoshare ainsi que le traitement du dossier.
                </label>
              </div>
            </Row>
            <Row>
              <Link>
                <div
                  className="col-12"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {formIsValid ? (
                    <button
                      type="submit"
                      style={buttonStyle}
                      disabled={!formIsValid}
                      onClick={handleSubmit}
                    >
                      VALIDATION
                    </button>
                  ) : (
                    <span
                      style={{
                        ...buttonStyle,
                        pointerEvents: "none",
                        opacity: 0.5,
                      }}
                    >
                      VALIDATION
                    </span>
                  )}
                </div>
              </Link>
            </Row>
          </form>
        </div>
      </Row>
      <img
        src={purpleButtomFlowers}
        alt="purpleButtomFlowers"
        style={imageStyle}
      />
    </div>
  );
};

export default AssociationPage2;
