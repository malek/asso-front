import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CandidatePage = () => {
  const buttonStyle = {
    backgroundColor: "#7C048E", // Définissez la couleur personnalisée
    padding: "10px 20px", // Add padding for a button-like appearance
    textDecoration: "none", // Remove default link underline
    color: "white", // Set text color
    display: "inline-block", // Make it inline-block to set a specific width
  };

  const [formIsValid, setFormIsValid] = useState(false);
  const [role, setRole] = useState("");

  const handleInputChange = (e) => {
    // Perform validation or checks based on your requirements
    // For simplicity, this example checks if all required fields have a value
    const inputs = document.querySelectorAll(
      "input[required], select[required]"
    );
    const isValid = Array.from(inputs).every((input) => input.checkValidity());

    setFormIsValid(isValid);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  return (
    <div className="container p-4">
      <div className="d-flex flex-column align-items-center mb-5 mt-5">
        <h1 className="fs-1">Viens rejoignez-nous!</h1>
      </div>
      <form className="row g-3" onChange={handleInputChange}>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            Je suis?*
          </label>
          <select id="inputState" className="form-select" required>
            <option value="" disabled>
              Choisissez votre statut...
            </option>
            <option value={"Etudiant"}>Étudiant</option>
            <option value={"Actif"}>Actif</option>
            <option value={"En recherche d'emploi"}>
              En recherche d'emploi
            </option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="inputState" className="form-label">
            Je veux devenir un/e?*
          </label>
          <Row>
            <Col>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="benevole"
                  name="role"
                  value="benevole"
                  checked={role === "benevole"}
                  onChange={handleRoleChange}
                />
                <label className="form-check-label" htmlFor="benevole">
                  Bénévole
                </label>
              </div>
            </Col>
            <Col>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="participant"
                  name="role"
                  value="participant"
                  checked={role === "participant"}
                  onChange={handleRoleChange}
                />
                <label className="form-check-label" htmlFor="participant">
                  Participant
                </label>
              </div>
            </Col>
          </Row>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputAddress" className="form-label">
            Email
          </label>
          <input
            type="Email"
            className="form-control"
            id="inputAddress"
            placeholder=".....@...."
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputAddress" className="form-label">
            Mot de Passe
          </label>
          <input type="password" className="form-control" id="inputAddress" />
        </div>

        <div className="col-md-4">
          <label htmlFor="dob" className="form-label">
            Date de naissance*
          </label>
          <input type="date" id="dob" className="form-control" required />
        </div>
        <div className="col-md-4">
          <label htmlFor="ville" className="form-label">
            Ville*
          </label>
          <input
            type="text"
            id="ville"
            className="form-control"
            placeholder="Entrez votre ville"
            required
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="address" className="form-label">
            Adresse*
          </label>
          <input
            type="text"
            id="address"
            className="form-control"
            placeholder="Entrez votre adresse"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="telephone" className="form-label">
            Téléphone*
          </label>
          <input
            type="tel"
            id="telephone"
            className="form-control"
            placeholder="Entrez votre numéro de téléphone valide"
            pattern="[0-9]{10}"
            title="Veuillez entrer un numéro de téléphone valide"
            required
          />
        </div>

        <div className="col-12">
          {formIsValid ? (
            <Link to="/candidat2" style={buttonStyle}>
              Next
            </Link>
          ) : (
            <span
              style={{ ...buttonStyle, pointerEvents: "none", opacity: 0.5 }}
            >
              Next
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default CandidatePage;
