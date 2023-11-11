import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const AssociationPage = () => {
  const buttonStyle = {
    backgroundColor: "#7C048E", // Définissez la couleur personnalisée
    padding: "10px 20px", // Add padding for a button-like appearance
    textDecoration: "none", // Remove default link underline
    color: "white", // Set text color
    display: "inline-block", // Make it inline-block to set a specific width
  };

  const [formIsValid, setFormIsValid] = useState(false);

  const handleInputChange = (e) => {
    const inputs = document.querySelectorAll(
      "input[required], select[required]"
    );
    const isValid = Array.from(inputs).every((input) => input.checkValidity());

    setFormIsValid(isValid);
  };

  return (
    <div className="container p-4">
      <div className="d-flex flex-column align-items-center mb-5 mt-5">
        <h1 className="fs-2">Je suis une association:</h1>
      </div>
      <form className="row g-3" onChange={handleInputChange}>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            Type de structure*
          </label>
          <select id="inputState" className="form-select" required>
            <option value="" disabled>
              Choisissez votre structure...
            </option>
            <option value={"Association"}>Association</option>
            <option value={"autreStructure"}>
              Autre structure à impact positif
            </option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="nomStructure" className="form-label">
            Nom de la structure*
          </label>
          <input
            type="text"
            className="form-control"
            id="nomStructure"
            required
          />
        </div>

        <div className="col-md-6">
          <Row>
            <Col>
              <label htmlFor="reseau" className="form-label">
                Réseau national*
              </label>
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                id="reseau"
                required
              />
            </Col>
          </Row>
        </div>
        <div className="col-md-4">
          <label htmlFor="rna" className="form-label">
            Numéro RNA*
          </label>
          <input
            type="text"
            id="rna"
            className="form-control"
            placeholder="xx xxxxx"
            required
          />
        </div>

        <div className="col-md-6">
          <Row>
            <Col>
              <label htmlFor="postalCode" className="form-label">
                Code postal*
              </label>
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                id="postalCode"
                required
              />
            </Col>
          </Row>
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
            <Link to="/association2" style={buttonStyle}>
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

export default AssociationPage;
