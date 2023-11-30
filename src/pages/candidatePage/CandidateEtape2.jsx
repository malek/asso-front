import React, { useRef, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";

import addAvatar from "../../assets/inscription/addPicture.svg";
import purpleButtomFlowers from "../../assets/inscription/purpleButtomFlowers.svg";
const CandidatePage2 = () => {
  const navigate = useNavigate();

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

  const [formIsValid, setFormIsValid] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click(); // Trigger the file input click event
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    // Add logic to handle the selected file, e.g., upload it or display it
    console.log("Selected File:", selectedFile);
  };

  const [description, setDescription] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleDescriptionChange = (e) => {
    const inputDescription = e.target.value;
    // Implement logic to limit the description to 50 words
    const words = inputDescription.trim().split(/\s+/);
    if (words.length <= 50) {
      setDescription(inputDescription);
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
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on unmount or component update
    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const isValid = nom && prenom && description && agreeTerms;
    setFormIsValid(isValid);

    // Cleanup function for form validation useEffect
  }, [nom, prenom, description, agreeTerms, subscribe]);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page

    if (!formIsValid) return;
    const userData = {
      nom: "nom",
      prenom: "prenom",
      description: "description",
    };

    try {
      //  await axios.post('http://localhost:8000/api/users', userData);
      navigate("/finalisationInscription"); // Redirection vers la page des bénévoles
      // history.push("/candidat2");

      // Gérer la réponse, par exemple en redirigeant l'utilisateur ou en affichant un message de succès
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      // Gérer l'erreur, par exemple en affichant un message d'erreur
    }
  };

  const handleInputChange = (e) => {
    // Perform validation or checks based on your requirements
    // For simplicity, this example checks if all required fields have a value
    const inputs = document.querySelectorAll(
      "input[required], select[required]"
    );
    //const isValid = Array.from(inputs).every((input) => input.checkValidity());

    //setFormIsValid(isValid);
    switch (e.target.id) {
      case "nom":
        setNom(e.target.value);
        break;
      case "prenom":
        setPrenom(e.target.value);
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
    <div>
      <Row>
        <div style={purpleDivStyle}>
          <div className="d-flex flex-column align-items-center mb-5 mt-5">
            <p className="fs-3" style={{ marginTop: "5%" }}>
              JE SUIS PARTICIPANT!
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
          <form className="row g-2" onSubmit={handleSubmit}>
            <Row>
              <label htmlFor="nom" className="form-label">
                Mon nom :
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
              <label htmlFor="prenom" className="form-label">
                Mon prénom :
              </label>
            </Row>
            <Row xs={5} md={5}>
              <input
                type="text"
                className="form-control"
                id="prenom"
                value={prenom}
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
              </label>
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
              <div className="col-12" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
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

export default CandidatePage2;
